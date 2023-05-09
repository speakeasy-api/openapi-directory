# goalRelationships

## Overview

A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.

### Available Operations

* [addSupportingRelationship](#addsupportingrelationship) - Add a supporting goal relationship
* [getGoalRelationship](#getgoalrelationship) - Get a goal relationship
* [getGoalRelationships](#getgoalrelationships) - Get goal relationships
* [removeSupportingRelationship](#removesupportingrelationship) - Removes a supporting goal relationship
* [updateGoalRelationship](#updategoalrelationship) - Update a goal relationship

## addSupportingRelationship

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSupportingRelationshipRequest;
import org.openapis.openapi.models.operations.AddSupportingRelationshipRequestBody;
import org.openapis.openapi.models.operations.AddSupportingRelationshipResponse;
import org.openapis.openapi.models.shared.GoalAddSupportingRelationshipRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddSupportingRelationshipRequest req = new AddSupportingRelationshipRequest(                new AddSupportingRelationshipRequestBody() {{
                                data = new GoalAddSupportingRelationshipRequest("12345") {{
                                    contributionWeight = 1;
                                    insertAfter = "1331";
                                    insertBefore = "1331";
                                }};;
                            }};, "quae") {{
                optFields = new String[]{{
                    add("quidem"),
                }};
                optPretty = false;
            }};            

            AddSupportingRelationshipResponse res = sdk.goalRelationships.addSupportingRelationship(req);

            if (res.addSupportingRelationship200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGoalRelationship

Returns the complete updated goal relationship record for a single goal relationship.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGoalRelationshipRequest;
import org.openapis.openapi.models.operations.GetGoalRelationshipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGoalRelationshipRequest req = new GetGoalRelationshipRequest("molestias") {{
                optFields = new String[]{{
                    add("pariatur"),
                    add("modi"),
                    add("praesentium"),
                }};
                optPretty = false;
            }};            

            GetGoalRelationshipResponse res = sdk.goalRelationships.getGoalRelationship(req);

            if (res.getGoalRelationship200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGoalRelationships

Returns compact goal relationship records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGoalRelationshipsRequest;
import org.openapis.openapi.models.operations.GetGoalRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGoalRelationshipsRequest req = new GetGoalRelationshipsRequest("rem") {{
                optFields = new String[]{{
                    add("quasi"),
                    add("repudiandae"),
                    add("sint"),
                    add("veritatis"),
                }};
                optPretty = false;
                resourceSubtype = "itaque";
            }};            

            GetGoalRelationshipsResponse res = sdk.goalRelationships.getGoalRelationships(req);

            if (res.getGoalRelationships200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSupportingRelationship

Removes a goal relationship for a given parent goal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSupportingRelationshipRequest;
import org.openapis.openapi.models.operations.RemoveSupportingRelationshipRequestBody;
import org.openapis.openapi.models.operations.RemoveSupportingRelationshipResponse;
import org.openapis.openapi.models.shared.GoalRemoveSupportingRelationshipRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveSupportingRelationshipRequest req = new RemoveSupportingRelationshipRequest(                new RemoveSupportingRelationshipRequestBody() {{
                                data = new GoalRemoveSupportingRelationshipRequest("12345");;
                            }};, "incidunt") {{
                optFields = new String[]{{
                    add("consequatur"),
                    add("est"),
                }};
                optPretty = false;
            }};            

            RemoveSupportingRelationshipResponse res = sdk.goalRelationships.removeSupportingRelationship(req);

            if (res.removeSupportingRelationship200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGoalRelationship

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGoalRelationshipRequest;
import org.openapis.openapi.models.operations.UpdateGoalRelationshipRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateGoalRelationshipResponse;
import org.openapis.openapi.models.shared.GoalRelationshipRequestInput;
import org.openapis.openapi.models.shared.GoalRelationshipRequestSupportedGoalInput;
import org.openapis.openapi.models.shared.GoalRelationshipRequestSupportedGoalOwnerInput;
import org.openapis.openapi.models.shared.GoalRelationshipRequestSupportingResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateGoalRelationshipRequest req = new UpdateGoalRelationshipRequest(                new UpdateGoalRelationshipRequestBodyInput() {{
                                data = new GoalRelationshipRequestInput() {{
                                    contributionWeight = 1;
                                    supportedGoal = new GoalRelationshipRequestSupportedGoalInput() {{
                                        name = "Grow web traffic by 30%";
                                        owner = new GoalRelationshipRequestSupportedGoalOwnerInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                    }};;
                                    supportingResource = new GoalRelationshipRequestSupportingResourceInput() {{
                                        name = "Stuff to buy";
                                    }};;
                                }};;
                            }};, "quibusdam") {{
                optFields = new String[]{{
                    add("deserunt"),
                }};
                optPretty = false;
            }};            

            UpdateGoalRelationshipResponse res = sdk.goalRelationships.updateGoalRelationship(req);

            if (res.updateGoalRelationship200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
