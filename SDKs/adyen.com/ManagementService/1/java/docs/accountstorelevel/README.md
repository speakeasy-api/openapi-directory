# accountStoreLevel

### Available Operations

* [getMerchantsMerchantIdStores](#getmerchantsmerchantidstores) - Get a list of stores
* [getMerchantsMerchantIdStoresStoreId](#getmerchantsmerchantidstoresstoreid) - Get a store
* [getStores](#getstores) - Get a list of stores
* [getStoresStoreId](#getstoresstoreid) - Get a store
* [patchMerchantsMerchantIdStoresStoreId](#patchmerchantsmerchantidstoresstoreid) - Update a store
* [patchStoresStoreId](#patchstoresstoreid) - Update a store
* [postMerchantsMerchantIdStores](#postmerchantsmerchantidstores) - Create a store
* [postStores](#poststores) - Create a store

## getMerchantsMerchantIdStores

Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdStoresRequest req = new GetMerchantsMerchantIdStoresRequest("ipsa") {{
                pageNumber = 969810;
                pageSize = 666767;
                reference = "mollitia";
            }};            

            GetMerchantsMerchantIdStoresResponse res = sdk.accountStoreLevel.getMerchantsMerchantIdStores(req, new GetMerchantsMerchantIdStoresSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdStoresStoreId

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresStoreIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresStoreIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresStoreIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdStoresStoreIdRequest req = new GetMerchantsMerchantIdStoresStoreIdRequest("laborum", "dolores");            

            GetMerchantsMerchantIdStoresStoreIdResponse res = sdk.accountStoreLevel.getMerchantsMerchantIdStoresStoreId(req, new GetMerchantsMerchantIdStoresStoreIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStores

Returns a list of stores. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoresRequest;
import org.openapis.openapi.models.operations.GetStoresResponse;
import org.openapis.openapi.models.operations.GetStoresSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoresRequest req = new GetStoresRequest() {{
                merchantId = "dolorem";
                pageNumber = 358152;
                pageSize = 128926;
                reference = "nobis";
            }};            

            GetStoresResponse res = sdk.accountStoreLevel.getStores(req, new GetStoresSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoresStoreId

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoresStoreIdRequest;
import org.openapis.openapi.models.operations.GetStoresStoreIdResponse;
import org.openapis.openapi.models.operations.GetStoresStoreIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoresStoreIdRequest req = new GetStoresStoreIdRequest("enim");            

            GetStoresStoreIdResponse res = sdk.accountStoreLevel.getStoresStoreId(req, new GetStoresStoreIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdStoresStoreId

Updates the store identified in the path. You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresStoreIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresStoreIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresStoreIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreSplitConfiguration;
import org.openapis.openapi.models.shared.UpdatableAddress;
import org.openapis.openapi.models.shared.UpdateStoreRequest;
import org.openapis.openapi.models.shared.UpdateStoreRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdStoresStoreIdRequest req = new PatchMerchantsMerchantIdStoresStoreIdRequest("omnis", "nemo") {{
                updateStoreRequest = new UpdateStoreRequest() {{
                    address = new UpdatableAddress() {{
                        city = "New Alisa";
                        line1 = "iure";
                        line2 = "culpa";
                        line3 = "doloribus";
                        postalCode = "16261-9652";
                        stateOrProvince = "commodi";
                    }};;
                    businessLineIds = new String[]{{
                        add("molestiae"),
                        add("velit"),
                    }};
                    description = "error";
                    externalReferenceId = "quia";
                    splitConfiguration = new StoreSplitConfiguration() {{
                        balanceAccountId = "quis";
                        splitConfigurationId = "vitae";
                    }};;
                    status = UpdateStoreRequestStatusEnum.INACTIVE;
                }};;
            }};            

            PatchMerchantsMerchantIdStoresStoreIdResponse res = sdk.accountStoreLevel.patchMerchantsMerchantIdStoresStoreId(req, new PatchMerchantsMerchantIdStoresStoreIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchStoresStoreId

Updates the store identified in the path.
You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchStoresStoreIdRequest;
import org.openapis.openapi.models.operations.PatchStoresStoreIdResponse;
import org.openapis.openapi.models.operations.PatchStoresStoreIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreSplitConfiguration;
import org.openapis.openapi.models.shared.UpdatableAddress;
import org.openapis.openapi.models.shared.UpdateStoreRequest;
import org.openapis.openapi.models.shared.UpdateStoreRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchStoresStoreIdRequest req = new PatchStoresStoreIdRequest("animi") {{
                updateStoreRequest = new UpdateStoreRequest() {{
                    address = new UpdatableAddress() {{
                        city = "East Orlando";
                        line1 = "sequi";
                        line2 = "tenetur";
                        line3 = "ipsam";
                        postalCode = "80068-6099";
                        stateOrProvince = "vero";
                    }};;
                    businessLineIds = new String[]{{
                        add("praesentium"),
                        add("voluptatibus"),
                    }};
                    description = "ipsa";
                    externalReferenceId = "omnis";
                    splitConfiguration = new StoreSplitConfiguration() {{
                        balanceAccountId = "voluptate";
                        splitConfigurationId = "cum";
                    }};;
                    status = UpdateStoreRequestStatusEnum.ACTIVE;
                }};;
            }};            

            PatchStoresStoreIdResponse res = sdk.accountStoreLevel.patchStoresStoreId(req, new PatchStoresStoreIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdStores

Creates a store for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdStoresRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdStoresResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdStoresSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreCreationRequest;
import org.openapis.openapi.models.shared.StoreLocation;
import org.openapis.openapi.models.shared.StoreSplitConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdStoresRequest req = new PostMerchantsMerchantIdStoresRequest("doloremque") {{
                storeCreationRequest = new StoreCreationRequest(                new StoreLocation("reprehenderit") {{
                                    city = "Fort Blanche";
                                    line1 = "corporis";
                                    line2 = "dolore";
                                    line3 = "iusto";
                                    postalCode = "63849";
                                    stateOrProvince = "quae";
                                }};, "ipsum", "quidem", "molestias") {{
                    businessLineIds = new String[]{{
                        add("pariatur"),
                        add("modi"),
                        add("praesentium"),
                    }};
                    externalReferenceId = "rem";
                    reference = "voluptates";
                    splitConfiguration = new StoreSplitConfiguration() {{
                        balanceAccountId = "quasi";
                        splitConfigurationId = "repudiandae";
                    }};;
                }};;
            }};            

            PostMerchantsMerchantIdStoresResponse res = sdk.accountStoreLevel.postMerchantsMerchantIdStores(req, new PostMerchantsMerchantIdStoresSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStores

Creates a store for the merchant account specified in the request.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStoresResponse;
import org.openapis.openapi.models.operations.PostStoresSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreCreationWithMerchantCodeRequest;
import org.openapis.openapi.models.shared.StoreLocation;
import org.openapis.openapi.models.shared.StoreSplitConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoreCreationWithMerchantCodeRequest req = new StoreCreationWithMerchantCodeRequest(                new StoreLocation("sint") {{
                                city = "Fort Drewborough";
                                line1 = "consequatur";
                                line2 = "est";
                                line3 = "quibusdam";
                                postalCode = "67822";
                                stateOrProvince = "qui";
                            }};, "aliquid", "cupiditate", "quos", "perferendis") {{
                businessLineIds = new String[]{{
                    add("assumenda"),
                }};
                externalReferenceId = "ipsam";
                reference = "alias";
                splitConfiguration = new StoreSplitConfiguration() {{
                    balanceAccountId = "fugit";
                    splitConfigurationId = "dolorum";
                }};;
            }};            

            PostStoresResponse res = sdk.accountStoreLevel.postStores(req, new PostStoresSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
