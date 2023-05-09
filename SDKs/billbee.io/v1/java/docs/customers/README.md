# customers

### Available Operations

* [customerAddCustomerAddressForm](#customeraddcustomeraddressform) - Adds a new address to a customer
* [customerAddCustomerAddressJson](#customeraddcustomeraddressjson) - Adds a new address to a customer
* [customerAddCustomerAddressRaw](#customeraddcustomeraddressraw) - Adds a new address to a customer
* [customerCreateForm](#customercreateform) - Creates a new customer
* [customerCreateJson](#customercreatejson) - Creates a new customer
* [customerCreateRaw](#customercreateraw) - Creates a new customer
* [customerGetAll](#customergetall) - Get a list of all customers
* [customerGetCustomerAddress](#customergetcustomeraddress) - Queries a single address from a customer
* [customerGetCustomerAddresses](#customergetcustomeraddresses) - Queries a list of addresses from a customer
* [customerGetCustomerOrders](#customergetcustomerorders) - Queries a list of orders from a customer
* [customerGetOne](#customergetone) - Queries a single customer by id
* [customerPatchAddress](#customerpatchaddress) - Updates one or more fields of an address
* [customerUpdateAddressForm](#customerupdateaddressform) - Updates all fields of an address
* [customerUpdateAddressJson](#customerupdateaddressjson) - Updates all fields of an address
* [customerUpdateAddressRaw](#customerupdateaddressraw) - Updates all fields of an address
* [customerUpdateForm](#customerupdateform) - Updates a customer by id
* [customerUpdateJson](#customerupdatejson) - Updates a customer by id
* [customerUpdateRaw](#customerupdateraw) - Updates a customer by id
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## customerAddCustomerAddressForm

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressFormRequest;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddCustomerAddressFormRequest req = new CustomerAddCustomerAddressFormRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "accusamus";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                                archivedAt = OffsetDateTime.parse("2022-10-22T18:12:12.288Z");
                                city = "Lake Kennedi";
                                company = "Streich - Gleason";
                                countryCode = "LB";
                                customerId = 523248L;
                                email = "Aurelia.Waelchi@hotmail.com";
                                fax = "itaque";
                                firstName = "Drew";
                                housenumber = "enim";
                                id = 9356L;
                                lastName = "Orn";
                                name2 = "quibusdam";
                                restoredAt = OffsetDateTime.parse("2022-05-09T18:45:16.013Z");
                                state = "distinctio";
                                street = "221 Kyler Mission";
                                tel1 = "perferendis";
                                tel2 = "magni";
                                zip = "assumenda";
                            }};, 369808L);            

            CustomerAddCustomerAddressFormResponse res = sdk.customers.customerAddCustomerAddressForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddCustomerAddressJson

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressJsonRequest;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddCustomerAddressJsonRequest req = new CustomerAddCustomerAddressJsonRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "alias";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                                archivedAt = OffsetDateTime.parse("2021-11-11T04:17:07.569Z");
                                city = "Lake Mustafa";
                                company = "Windler and Sons";
                                countryCode = "DZ";
                                customerId = 756107L;
                                email = "Grace_Medhurst63@yahoo.com";
                                fax = "dolor";
                                firstName = "Sim";
                                housenumber = "a";
                                id = 680056L;
                                lastName = "King";
                                name2 = "in";
                                restoredAt = OffsetDateTime.parse("2020-01-25T11:09:22.009Z");
                                state = "rerum";
                                street = "27843 Thompson Fields";
                                tel1 = "occaecati";
                                tel2 = "enim";
                                zip = "accusamus";
                            }};, 965417L);            

            CustomerAddCustomerAddressJsonResponse res = sdk.customers.customerAddCustomerAddressJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddCustomerAddressRaw

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressRawRequest;
import org.openapis.openapi.models.operations.CustomerAddCustomerAddressRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddCustomerAddressRawRequest req = new CustomerAddCustomerAddressRawRequest("quidem".getBytes(), 588465L);            

            CustomerAddCustomerAddressRawResponse res = sdk.customers.customerAddCustomerAddressRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerCreateForm

Creates a new customer

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerCreateFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput req = new BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput() {{
                address = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                    addressAddition = "nam";
                    addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.TWO;
                    archivedAt = OffsetDateTime.parse("2021-12-07T18:13:34.827Z");
                    city = "Dayton";
                    company = "Huels - Kassulke";
                    countryCode = "MV";
                    customerId = 606393L;
                    email = "Aileen71@yahoo.com";
                    fax = "id";
                    firstName = "Edward";
                    housenumber = "labore";
                    id = 383462L;
                    lastName = "Mosciski";
                    name2 = "nobis";
                    restoredAt = OffsetDateTime.parse("2022-02-14T08:45:31.579Z");
                    state = "aspernatur";
                    street = "20535 Marvin Burg";
                    tel1 = "mollitia";
                    tel2 = "reiciendis";
                    zip = "mollitia";
                }};;
                archivedAt = OffsetDateTime.parse("2022-07-27T12:46:27.682Z");
                defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 221262L;
                    subType = "necessitatibus";
                    typeId = 141264L;
                    value = "nemo";
                }};;
                defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 97260L;
                    subType = "iure";
                    typeId = 984043L;
                    value = "debitis";
                }};;
                defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 260341L;
                    subType = "maxime";
                    typeId = 537023L;
                    value = "facilis";
                }};;
                defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 447926L;
                    subType = "architecto";
                    typeId = 99569L;
                    value = "repudiandae";
                }};;
                defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 352312L;
                    subType = "expedita";
                    typeId = 469249L;
                    value = "repellat";
                }};;
                defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 841140L;
                    subType = "sed";
                    typeId = 904648L;
                    value = "pariatur";
                }};;
                email = "Carroll.Lang@gmail.com";
                id = 123820L;
                languageId = 779051;
                metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 864934L;
                        subType = "maxime";
                        typeId = 411397L;
                        value = "excepturi";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 139972L;
                        subType = "ea";
                        typeId = 33222L;
                        value = "ab";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 982575L;
                        subType = "quidem";
                        typeId = 373291L;
                        value = "voluptate";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 420075L;
                        subType = "nam";
                        typeId = 50588L;
                        value = "pariatur";
                    }}),
                }};
                name = "Camille Armstrong";
                number = 11714;
                priceGroupId = 764912L;
                restoredAt = OffsetDateTime.parse("2022-01-21T09:28:40.593Z");
                tel1 = "libero";
                tel2 = "nobis";
                type = 171629;
                vatId = "quis";
            }};            

            CustomerCreateFormResponse res = sdk.customers.customerCreateForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerCreateJson

Creates a new customer

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerCreateJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput req = new BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput() {{
                address = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                    addressAddition = "totam";
                    addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                    archivedAt = OffsetDateTime.parse("2022-08-30T06:29:24.707Z");
                    city = "East Aidanville";
                    company = "Kohler, Fadel and Swift";
                    countryCode = "GN";
                    customerId = 944120L;
                    email = "Leo.Purdy@hotmail.com";
                    fax = "porro";
                    firstName = "Casimer";
                    housenumber = "blanditiis";
                    id = 621479L;
                    lastName = "Beatty";
                    name2 = "occaecati";
                    restoredAt = OffsetDateTime.parse("2022-07-11T08:07:03.616Z");
                    state = "asperiores";
                    street = "266 Stracke Overpass";
                    tel1 = "nobis";
                    tel2 = "libero";
                    zip = "delectus";
                }};;
                archivedAt = OffsetDateTime.parse("2022-06-12T16:50:10.090Z");
                defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 398221L;
                    subType = "dolorem";
                    typeId = 209843L;
                    value = "dolor";
                }};;
                defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 186193L;
                    subType = "ipsum";
                    typeId = 944373L;
                    value = "excepturi";
                }};;
                defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 739551L;
                    subType = "voluptate";
                    typeId = 490459L;
                    value = "reiciendis";
                }};;
                defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 227414L;
                    subType = "dolorum";
                    typeId = 254356L;
                    value = "veritatis";
                }};;
                defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 58029L;
                    subType = "ipsa";
                    typeId = 434417L;
                    value = "odio";
                }};;
                defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                    id = 311796L;
                    subType = "accusamus";
                    typeId = 696344L;
                    value = "voluptatibus";
                }};;
                email = "Liam.Daugherty@yahoo.com";
                id = 854614L;
                languageId = 67249;
                metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 679393L;
                        subType = "iusto";
                        typeId = 453697L;
                        value = "dolorum";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 536579L;
                        subType = "omnis";
                        typeId = 896672L;
                        value = "distinctio";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                        id = 990339L;
                        subType = "nihil";
                        typeId = 216897L;
                        value = "voluptate";
                    }}),
                }};
                name = "Elbert Gislason I";
                number = 758379;
                priceGroupId = 881586L;
                restoredAt = OffsetDateTime.parse("2022-02-04T21:14:13.821Z");
                tel1 = "suscipit";
                tel2 = "deserunt";
                type = 588317;
                vatId = "minima";
            }};            

            CustomerCreateJsonResponse res = sdk.customers.customerCreateJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerCreateRaw

Creates a new customer

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerCreateRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "repellendus".getBytes()            

            CustomerCreateRawResponse res = sdk.customers.customerCreateRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerGetAll

Get a list of all customers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerGetAllRequest;
import org.openapis.openapi.models.operations.CustomerGetAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerGetAllRequest req = new CustomerGetAllRequest() {{
                page = 519711;
                pageSize = 628982;
            }};            

            CustomerGetAllResponse res = sdk.customers.customerGetAll(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerGetCustomerAddress

Queries a single address from a customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerGetCustomerAddressRequest;
import org.openapis.openapi.models.operations.CustomerGetCustomerAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerGetCustomerAddressRequest req = new CustomerGetCustomerAddressRequest(55L);            

            CustomerGetCustomerAddressResponse res = sdk.customers.customerGetCustomerAddress(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerGetCustomerAddresses

Queries a list of addresses from a customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerGetCustomerAddressesRequest;
import org.openapis.openapi.models.operations.CustomerGetCustomerAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerGetCustomerAddressesRequest req = new CustomerGetCustomerAddressesRequest(872651L) {{
                page = 311860;
                pageSize = 273542;
            }};            

            CustomerGetCustomerAddressesResponse res = sdk.customers.customerGetCustomerAddresses(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerGetCustomerOrders

Queries a list of orders from a customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerGetCustomerOrdersRequest;
import org.openapis.openapi.models.operations.CustomerGetCustomerOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerGetCustomerOrdersRequest req = new CustomerGetCustomerOrdersRequest(425451L) {{
                page = 798047;
                pageSize = 885338;
            }};            

            CustomerGetCustomerOrdersResponse res = sdk.customers.customerGetCustomerOrders(req);

            if (res.rechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerGetOne

Queries a single customer by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerGetOneRequest;
import org.openapis.openapi.models.operations.CustomerGetOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerGetOneRequest req = new CustomerGetOneRequest(185636L);            

            CustomerGetOneResponse res = sdk.customers.customerGetOne(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerPatchAddress

Id and CustomerId cannot be changed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerPatchAddressRequest;
import org.openapis.openapi.models.operations.CustomerPatchAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerPatchAddressRequest req = new CustomerPatchAddressRequest(                new java.util.HashMap<String, Object>() {{
                                put("a", "esse");
                                put("harum", "iusto");
                                put("ipsum", "quisquam");
                            }}, 947371L);            

            CustomerPatchAddressResponse res = sdk.customers.customerPatchAddress(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateAddressForm

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateAddressFormRequest;
import org.openapis.openapi.models.operations.CustomerUpdateAddressFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateAddressFormRequest req = new CustomerUpdateAddressFormRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "amet";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.TWO;
                                archivedAt = OffsetDateTime.parse("2022-03-28T22:24:48.068Z");
                                city = "East Vernice";
                                company = "Kozey - Balistreri";
                                countryCode = "PK";
                                customerId = 207470L;
                                email = "Hermann_Renner@gmail.com";
                                fax = "quam";
                                firstName = "Cristobal";
                                housenumber = "incidunt";
                                id = 186458L;
                                lastName = "McGlynn";
                                name2 = "maxime";
                                restoredAt = OffsetDateTime.parse("2020-10-04T22:45:05.165Z");
                                state = "dicta";
                                street = "521 Mikayla Ranch";
                                tel1 = "aliquid";
                                tel2 = "quam";
                                zip = "molestias";
                            }};, 840429L);            

            CustomerUpdateAddressFormResponse res = sdk.customers.customerUpdateAddressForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateAddressJson

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateAddressJsonRequest;
import org.openapis.openapi.models.operations.CustomerUpdateAddressJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateAddressJsonRequest req = new CustomerUpdateAddressJsonRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "qui";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                                archivedAt = OffsetDateTime.parse("2022-11-01T18:57:36.196Z");
                                city = "Bradybury";
                                company = "Weimann, Bartell and Runolfsdottir";
                                countryCode = "QA";
                                customerId = 748664L;
                                email = "Stone74@gmail.com";
                                fax = "quos";
                                firstName = "Mose";
                                housenumber = "cupiditate";
                                id = 45614L;
                                lastName = "Willms";
                                name2 = "dolorem";
                                restoredAt = OffsetDateTime.parse("2022-09-18T06:37:26.413Z");
                                state = "adipisci";
                                street = "100 Ward Avenue";
                                tel1 = "est";
                                tel2 = "repellendus";
                                zip = "porro";
                            }};, 984330L);            

            CustomerUpdateAddressJsonResponse res = sdk.customers.customerUpdateAddressJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateAddressRaw

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateAddressRawRequest;
import org.openapis.openapi.models.operations.CustomerUpdateAddressRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateAddressRawRequest req = new CustomerUpdateAddressRawRequest("ut".getBytes(), 703495L);            

            CustomerUpdateAddressRawResponse res = sdk.customers.customerUpdateAddressRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateForm

Updates a customer by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateFormRequest;
import org.openapis.openapi.models.operations.CustomerUpdateFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateFormRequest req = new CustomerUpdateFormRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput() {{
                                archivedAt = OffsetDateTime.parse("2022-08-21T09:49:15.782Z");
                                defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 63955L;
                                    subType = "laudantium";
                                    typeId = 485628L;
                                    value = "occaecati";
                                }};;
                                defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 977496L;
                                    subType = "quisquam";
                                    typeId = 876506L;
                                    value = "omnis";
                                }};;
                                defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 338159L;
                                    subType = "ipsum";
                                    typeId = 961571L;
                                    value = "voluptate";
                                }};;
                                defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 231701L;
                                    subType = "vero";
                                    typeId = 949319L;
                                    value = "dignissimos";
                                }};;
                                defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 941378L;
                                    subType = "distinctio";
                                    typeId = 799203L;
                                    value = "odio";
                                }};;
                                defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 630448L;
                                    subType = "facilis";
                                    typeId = 874288L;
                                    value = "ducimus";
                                }};;
                                email = "Rosalinda61@gmail.com";
                                id = 773326L;
                                languageId = 13236;
                                metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 347233L;
                                        subType = "nulla";
                                        typeId = 148141L;
                                        value = "porro";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 981830L;
                                        subType = "doloribus";
                                        typeId = 478370L;
                                        value = "eligendi";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 497391L;
                                        subType = "alias";
                                        typeId = 639473L;
                                        value = "tempora";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 368584L;
                                        subType = "ea";
                                        typeId = 136900L;
                                        value = "vel";
                                    }}),
                                }};
                                name = "Clifford Dickens";
                                number = 120657;
                                priceGroupId = 224317L;
                                restoredAt = OffsetDateTime.parse("2022-09-15T20:38:47.955Z");
                                tel1 = "ex";
                                tel2 = "nulla";
                                type = 569211;
                                vatId = "voluptatibus";
                            }};, 343605L);            

            CustomerUpdateFormResponse res = sdk.customers.customerUpdateForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateJson

Updates a customer by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateJsonRequest;
import org.openapis.openapi.models.operations.CustomerUpdateJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateJsonRequest req = new CustomerUpdateJsonRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput() {{
                                archivedAt = OffsetDateTime.parse("2020-08-20T04:25:24.387Z");
                                defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 906556L;
                                    subType = "ea";
                                    typeId = 774048L;
                                    value = "corporis";
                                }};;
                                defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 333145L;
                                    subType = "aliquid";
                                    typeId = 81101L;
                                    value = "magnam";
                                }};;
                                defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 407241L;
                                    subType = "quo";
                                    typeId = 232234L;
                                    value = "recusandae";
                                }};;
                                defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 132487L;
                                    subType = "minima";
                                    typeId = 53427L;
                                    value = "a";
                                }};;
                                defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 725595L;
                                    subType = "aut";
                                    typeId = 11427L;
                                    value = "deleniti";
                                }};;
                                defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                    id = 770581L;
                                    subType = "aliquam";
                                    typeId = 146946L;
                                    value = "accusamus";
                                }};;
                                email = "Demarcus_Borer81@gmail.com";
                                id = 245367L;
                                languageId = 432148;
                                metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 752135L;
                                        subType = "quas";
                                        typeId = 829603L;
                                        value = "nulla";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 379034L;
                                        subType = "libero";
                                        typeId = 96549L;
                                        value = "tempora";
                                    }}),
                                }};
                                name = "Ms. Janice McLaughlin";
                                number = 487935;
                                priceGroupId = 262118L;
                                restoredAt = OffsetDateTime.parse("2022-07-18T12:12:30.628Z");
                                tel1 = "rem";
                                tel2 = "fuga";
                                type = 442015;
                                vatId = "quidem";
                            }};, 852635L);            

            CustomerUpdateJsonResponse res = sdk.customers.customerUpdateJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerUpdateRaw

Updates a customer by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerUpdateRawRequest;
import org.openapis.openapi.models.operations.CustomerUpdateRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerUpdateRawRequest req = new CustomerUpdateRawRequest("ut".getBytes(), 433439L);            

            CustomerUpdateRawResponse res = sdk.customers.customerUpdateRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.ONE;
                term = "assumenda";
                type = new String[]{{
                    add("praesentium"),
                }};
            }};            

            SearchSearchFormResponse res = sdk.customers.searchSearchForm(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.THREE;
                term = "veritatis";
                type = new String[]{{
                    add("id"),
                }};
            }};            

            SearchSearchJsonResponse res = sdk.customers.searchSearchJson(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quidem".getBytes()            

            SearchSearchRawResponse res = sdk.customers.searchSearchRaw(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
