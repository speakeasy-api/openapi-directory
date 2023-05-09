# segments

## Overview

With these endpoints you can manage your Segments.
Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.

### Available Operations

* [createSegment](#createsegment) - Create Segment
* [deleteSegment](#deletesegment) - Delete Segment
* [getSegment](#getsegment) - Get Segment
* [getSegments](#getsegments) - List Segments
* [updateSegment](#updatesegment) - Update Segment

## createSegment

This endpoint creates a new Segment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSegmentRequest;
import org.openapis.openapi.models.operations.CreateSegmentResponse;
import org.openapis.openapi.models.shared.CreateSegmentModel;
import org.openapis.openapi.models.shared.RolloutRuleComparatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "optio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateSegmentRequest req = new CreateSegmentRequest(                new CreateSegmentModel(RolloutRuleComparatorEnum.NUMBER_LESS_OR_EQUALS, "ex", "repellat", "quae") {{
                                description = "deleniti";
                            }};, "bf9621a6-a4f7-47a8-bee3-e4be752c65b3");            

            CreateSegmentResponse res = sdk.segments.createSegment(req);

            if (res.segmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSegment

This endpoint removes a Segment identified by the `segmentId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSegmentRequest;
import org.openapis.openapi.models.operations.DeleteSegmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut", "quaerat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteSegmentRequest req = new DeleteSegmentRequest("18e3bb91-c8d9-475e-8e84-19d8f84f144f");            

            DeleteSegmentResponse res = sdk.segments.deleteSegment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegment

This endpoint returns the metadata of a Segment
identified by the `segmentId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSegmentRequest;
import org.openapis.openapi.models.operations.GetSegmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSegmentRequest req = new GetSegmentRequest("07edcc4a-a5f3-4cab-9905-a972e0567282");            

            GetSegmentResponse res = sdk.segments.getSegment(req);

            if (res.segmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegments

This endpoint returns the list of the Segments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSegmentsRequest;
import org.openapis.openapi.models.operations.GetSegmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "iusto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSegmentsRequest req = new GetSegmentsRequest("b2d30947-0bf7-4a4f-a87c-f535a6fae54e");            

            GetSegmentsResponse res = sdk.segments.getSegments(req);

            if (res.segmentListModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSegment

This endpoint updates a Segment identified by the `segmentId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSegmentRequest;
import org.openapis.openapi.models.operations.UpdateSegmentResponse;
import org.openapis.openapi.models.shared.RolloutRuleComparatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSegmentModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateSegmentRequest req = new UpdateSegmentRequest(                new UpdateSegmentModel() {{
                                comparator = RolloutRuleComparatorEnum.SEM_VER_LESS;
                                comparisonAttribute = "voluptatem";
                                comparisonValue = "optio";
                                description = "sequi";
                                name = "Mr. Evelyn Wiza";
                            }};, "b75d2367-fe1a-40cc-8df7-9f0a396d90c3");            

            UpdateSegmentResponse res = sdk.segments.updateSegment(req);

            if (res.segmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
