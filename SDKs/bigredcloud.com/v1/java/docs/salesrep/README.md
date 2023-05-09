# salesRep

### Available Operations

* [salesRepDelete](#salesrepdelete) - Removes an existing Sale Rep.
* [salesRepGet](#salesrepget) - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* [salesRepPost](#salesreppost) - Creates a new SaleRep.
* [salesRepProcessBatch](#salesrepprocessbatch) - Processes a batch of Sale Rep.
* [salesRepPut](#salesrepput) - Updates an existing Sale Rep.
* [getV1SalesRepsId](#getv1salesrepsid) - Returns information about a single SaleRep.

## salesRepDelete

Removes an existing Sale Rep.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesRepDeleteRequest;
import org.openapis.openapi.models.operations.SalesRepDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesRepDeleteRequest req = new SalesRepDeleteRequest(909093L, "laboriosam");            

            SalesRepDeleteResponse res = sdk.salesRep.salesRepDelete(req);

            if (res.salesRepDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesRepGet

Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesRepGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesRepGetResponse res = sdk.salesRep.salesRepGet();

            if (res.pageResultSaleRepsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesRepPost

Creates a new SaleRep.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesRepPostResponse;
import org.openapis.openapi.models.shared.SaleRepsDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SaleRepsDto req = new SaleRepsDto() {{
                code = "ratione";
                companyId = 505473L;
                email = "Rosie.Wisozk0@hotmail.com";
                id = 201966L;
                name = "Alison Hodkiewicz";
                phone = "661.364.8123 x529";
                timeStamp = "reprehenderit";
            }};            

            SalesRepPostResponse res = sdk.salesRep.salesRepPost(req);

            if (res.salesRepPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesRepProcessBatch

Processes a batch of Sale Rep.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesRepProcessBatchResponse;
import org.openapis.openapi.models.shared.BatchItemSaleRepsDto;
import org.openapis.openapi.models.shared.BatchItemSaleRepsDtoOpCodeEnum;
import org.openapis.openapi.models.shared.SaleRepsDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemSaleRepsDto[]{{
                add(new BatchItemSaleRepsDto() {{
                    item = new SaleRepsDto() {{
                        code = "itaque";
                        companyId = 93254L;
                        email = "Oma_Jacobs@gmail.com";
                        id = 112014L;
                        name = "Armando Cole";
                        phone = "(234) 241-2032";
                        timeStamp = "voluptate";
                    }};
                    opCode = BatchItemSaleRepsDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemSaleRepsDto() {{
                    item = new SaleRepsDto() {{
                        code = "pariatur";
                        companyId = 791421L;
                        email = "Marques_Leannon@hotmail.com";
                        id = 986594L;
                        name = "Darryl Heller";
                        phone = "(545) 505-1967 x288";
                        timeStamp = "minus";
                    }};
                    opCode = BatchItemSaleRepsDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemSaleRepsDto() {{
                    item = new SaleRepsDto() {{
                        code = "a";
                        companyId = 104834L;
                        email = "Aron_Schultz11@gmail.com";
                        id = 32737L;
                        name = "Jeanne Stracke";
                        phone = "(738) 260-9871";
                        timeStamp = "vitae";
                    }};
                    opCode = BatchItemSaleRepsDtoOpCodeEnum.TWO;
                }}),
            }}            

            SalesRepProcessBatchResponse res = sdk.salesRep.salesRepProcessBatch(req);

            if (res.salesRepProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesRepPut

Updates an existing Sale Rep.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesRepPutRequest;
import org.openapis.openapi.models.operations.SalesRepPutResponse;
import org.openapis.openapi.models.shared.SaleRepsDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesRepPutRequest req = new SalesRepPutRequest(                new SaleRepsDto() {{
                                code = "quas";
                                companyId = 55407L;
                                email = "Randi.Schmitt81@hotmail.com";
                                id = 718879L;
                                name = "Sammy Stark";
                                phone = "440-697-3926 x0847";
                                timeStamp = "placeat";
                            }};, 68336L);            

            SalesRepPutResponse res = sdk.salesRep.salesRepPut(req);

            if (res.salesRepPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1SalesRepsId

Returns information about a single SaleRep.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1SalesRepsIdRequest;
import org.openapis.openapi.models.operations.GetV1SalesRepsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1SalesRepsIdRequest req = new GetV1SalesRepsIdRequest(319592L);            

            GetV1SalesRepsIdResponse res = sdk.salesRep.getV1SalesRepsId(req);

            if (res.saleRepsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
