# goals

## Overview

A goal is an object in the goal-tracking system that helps your organization drive measurable results.

### Available Operations

* [addFollowers](#addfollowers) - Add a collaborator to a goal
* [createGoal](#creategoal) - Create a goal
* [createGoalMetric](#creategoalmetric) - Create a goal metric
* [deleteGoal](#deletegoal) - Delete a goal
* [getGoal](#getgoal) - Get a goal
* [getGoals](#getgoals) - Get goals
* [getParentGoalsForGoal](#getparentgoalsforgoal) - Get parent goals from a goal
* [removeFollowers](#removefollowers) - Remove a collaborator from a goal
* [updateGoal](#updategoal) - Update a goal
* [updateGoalMetric](#updategoalmetric) - Update a goal metric

## addFollowers

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFollowersRequest;
import org.openapis.openapi.models.operations.AddFollowersRequestBody;
import org.openapis.openapi.models.operations.AddFollowersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskAddFollowersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddFollowersRequest req = new AddFollowersRequest(                new AddFollowersRequestBody() {{
                                data = new TaskAddFollowersRequest(                new String[]{{
                                                    add("quibusdam"),
                                                    add("labore"),
                                                    add("modi"),
                                                }});;
                            }};, "qui") {{
                optFields = new String[]{{
                    add("cupiditate"),
                    add("quos"),
                }};
                optPretty = false;
            }};            

            AddFollowersResponse res = sdk.goals.addFollowers(req);

            if (res.addFollowers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGoal

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGoalRequest;
import org.openapis.openapi.models.operations.CreateGoalRequestBodyInput;
import org.openapis.openapi.models.operations.CreateGoalResponse;
import org.openapis.openapi.models.shared.GoalRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateGoalRequest req = new CreateGoalRequest(                new CreateGoalRequestBodyInput() {{
                                data = new GoalRequestInput() {{
                                    dueOn = "2019-09-15";
                                    followers = new String[]{{
                                        add("magni"),
                                    }};
                                    htmlNotes = "<body>Start building brand awareness.</body>";
                                    isWorkspaceLevel = true;
                                    liked = false;
                                    name = "Grow web traffic by 30%";
                                    notes = "Start building brand awareness.";
                                    owner = "12345";
                                    startOn = "2019-09-14";
                                    status = "green";
                                    team = "12345";
                                    timePeriod = "12345";
                                    workspace = "12345";
                                }};;
                            }};) {{
                limit = 828940L;
                offset = "ipsam";
                optFields = new String[]{{
                    add("fugit"),
                }};
                optPretty = false;
            }};            

            CreateGoalResponse res = sdk.goals.createGoal(req);

            if (res.createGoal201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGoalMetric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGoalMetricRequest;
import org.openapis.openapi.models.operations.CreateGoalMetricRequestBodyInput;
import org.openapis.openapi.models.operations.CreateGoalMetricResponse;
import org.openapis.openapi.models.shared.GoalMetricRequestInput;
import org.openapis.openapi.models.shared.GoalMetricRequestProgressSourceEnum;
import org.openapis.openapi.models.shared.GoalMetricRequestUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateGoalMetricRequest req = new CreateGoalMetricRequest(                new CreateGoalMetricRequestBodyInput() {{
                                data = new GoalMetricRequestInput() {{
                                    currencyCode = "EUR";
                                    currentNumberValue = 8.12;
                                    initialNumberValue = 5.2;
                                    precision = 2L;
                                    progressSource = GoalMetricRequestProgressSourceEnum.MANUAL;
                                    targetNumberValue = 10.2;
                                    unit = GoalMetricRequestUnitEnum.PERCENTAGE;
                                }};;
                            }};, "excepturi") {{
                optFields = new String[]{{
                    add("facilis"),
                    add("tempore"),
                }};
                optPretty = false;
            }};            

            CreateGoalMetricResponse res = sdk.goals.createGoalMetric(req);

            if (res.createGoalMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGoal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGoalRequest;
import org.openapis.openapi.models.operations.DeleteGoalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteGoalRequest req = new DeleteGoalRequest("labore") {{
                optFields = new String[]{{
                    add("eum"),
                    add("non"),
                    add("eligendi"),
                    add("sint"),
                }};
                optPretty = false;
            }};            

            DeleteGoalResponse res = sdk.goals.deleteGoal(req);

            if (res.deleteGoal200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGoal

Returns the complete goal record for a single goal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGoalRequest;
import org.openapis.openapi.models.operations.GetGoalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGoalRequest req = new GetGoalRequest("aliquid") {{
                optFields = new String[]{{
                    add("necessitatibus"),
                    add("sint"),
                    add("officia"),
                }};
                optPretty = false;
            }};            

            GetGoalResponse res = sdk.goals.getGoal(req);

            if (res.getGoal200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGoals

Returns compact goal records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGoalsRequest;
import org.openapis.openapi.models.operations.GetGoalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGoalsRequest req = new GetGoalsRequest() {{
                isWorkspaceLevel = false;
                limit = 223081L;
                offset = "debitis";
                optFields = new String[]{{
                    add("dolorum"),
                    add("in"),
                    add("in"),
                    add("illum"),
                }};
                optPretty = false;
                portfolio = "maiores";
                project = "rerum";
                team = "dicta";
                timePeriods = new String[]{{
                    add("cumque"),
                    add("facere"),
                }};
                workspace = "ea";
            }};            

            GetGoalsResponse res = sdk.goals.getGoals(req);

            if (res.getGoals200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParentGoalsForGoal

Returns a compact representation of all of the parent goals of a goal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParentGoalsForGoalRequest;
import org.openapis.openapi.models.operations.GetParentGoalsForGoalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetParentGoalsForGoalRequest req = new GetParentGoalsForGoalRequest("aliquid") {{
                optFields = new String[]{{
                    add("accusamus"),
                    add("non"),
                    add("occaecati"),
                }};
                optPretty = false;
            }};            

            GetParentGoalsForGoalResponse res = sdk.goals.getParentGoalsForGoal(req);

            if (res.getParentGoalsForGoal200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeFollowers

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveFollowersRequest;
import org.openapis.openapi.models.operations.RemoveFollowersRequestBody;
import org.openapis.openapi.models.operations.RemoveFollowersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskAddFollowersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveFollowersRequest req = new RemoveFollowersRequest(                new RemoveFollowersRequestBody() {{
                                data = new TaskAddFollowersRequest(                new String[]{{
                                                    add("accusamus"),
                                                    add("delectus"),
                                                }});;
                            }};, "quidem") {{
                optFields = new String[]{{
                    add("nam"),
                    add("id"),
                    add("blanditiis"),
                }};
                optPretty = false;
            }};            

            RemoveFollowersResponse res = sdk.goals.removeFollowers(req);

            if (res.removeFollowers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGoal

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGoalRequest;
import org.openapis.openapi.models.operations.UpdateGoalRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateGoalResponse;
import org.openapis.openapi.models.shared.GoalRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateGoalRequest req = new UpdateGoalRequest(                new UpdateGoalRequestBodyInput() {{
                                data = new GoalRequestInput() {{
                                    dueOn = "2019-09-15";
                                    followers = new String[]{{
                                        add("sapiente"),
                                        add("amet"),
                                        add("deserunt"),
                                    }};
                                    htmlNotes = "<body>Start building brand awareness.</body>";
                                    isWorkspaceLevel = true;
                                    liked = false;
                                    name = "Grow web traffic by 30%";
                                    notes = "Start building brand awareness.";
                                    owner = "12345";
                                    startOn = "2019-09-14";
                                    status = "green";
                                    team = "12345";
                                    timePeriod = "12345";
                                    workspace = "12345";
                                }};;
                            }};, "nisi") {{
                optFields = new String[]{{
                    add("natus"),
                    add("omnis"),
                }};
                optPretty = false;
            }};            

            UpdateGoalResponse res = sdk.goals.updateGoal(req);

            if (res.updateGoal200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGoalMetric

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGoalMetricRequest;
import org.openapis.openapi.models.operations.UpdateGoalMetricRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateGoalMetricResponse;
import org.openapis.openapi.models.shared.GoalMetricCurrentValueRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateGoalMetricRequest req = new UpdateGoalMetricRequest(                new UpdateGoalMetricRequestBodyInput() {{
                                data = new GoalMetricCurrentValueRequestInput() {{
                                    currentNumberValue = 8.12;
                                }};;
                            }};, "molestiae") {{
                optFields = new String[]{{
                    add("nihil"),
                }};
                optPretty = false;
            }};            

            UpdateGoalMetricResponse res = sdk.goals.updateGoalMetric(req);

            if (res.updateGoalMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
