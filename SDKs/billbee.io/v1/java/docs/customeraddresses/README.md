# customerAddresses

### Available Operations

* [customerAddressesCreateForm](#customeraddressescreateform) - Creates a new customer address
* [customerAddressesCreateJson](#customeraddressescreatejson) - Creates a new customer address
* [customerAddressesCreateRaw](#customeraddressescreateraw) - Creates a new customer address
* [customerAddressesGetAll](#customeraddressesgetall) - Get a list of all customer addresses
* [customerAddressesGetOne](#customeraddressesgetone) - Queries a single customer address by id
* [customerAddressesUpdateForm](#customeraddressesupdateform) - Updates a customer address by id
* [customerAddressesUpdateJson](#customeraddressesupdatejson) - Updates a customer address by id
* [customerAddressesUpdateRaw](#customeraddressesupdateraw) - Updates a customer address by id

## customerAddressesCreateForm

Creates a new customer address

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesCreateFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel req = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                addressAddition = "corrupti";
                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.TWO;
                archivedAt = OffsetDateTime.parse("2021-04-24T16:27:50.833Z");
                city = "Stiedemannstad";
                company = "Kassulke, Mueller and Oberbrunner";
                countryCode = "HM";
                customerId = 437587L;
                email = "Sim.Bednar38@gmail.com";
                fax = "molestiae";
                firstName = "Paxton";
                housenumber = "placeat";
                id = 528895L;
                lastName = "Kshlerin";
                name2 = "excepturi";
                restoredAt = OffsetDateTime.parse("2022-01-28T03:46:24.500Z");
                state = "temporibus";
                street = "30603 Will Shoals";
                tel1 = "odit";
                tel2 = "at";
                zip = "at";
            }};            

            CustomerAddressesCreateFormResponse res = sdk.customerAddresses.customerAddressesCreateForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesCreateJson

Creates a new customer address

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesCreateJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel req = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                addressAddition = "maiores";
                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                archivedAt = OffsetDateTime.parse("2020-08-07T00:03:55.328Z");
                city = "Jovanfort";
                company = "Carroll, Reichel and Nikolaus";
                countryCode = "ML";
                customerId = 143353L;
                email = "Tyrel.Rosenbaum@yahoo.com";
                fax = "commodi";
                firstName = "Jaren";
                housenumber = "modi";
                id = 186332L;
                lastName = "Ryan";
                name2 = "cum";
                restoredAt = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                state = "excepturi";
                street = "03616 Lexie Hills";
                tel1 = "hic";
                tel2 = "saepe";
                zip = "fuga";
            }};            

            CustomerAddressesCreateJsonResponse res = sdk.customerAddresses.customerAddressesCreateJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesCreateRaw

Creates a new customer address

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesCreateRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "in".getBytes()            

            CustomerAddressesCreateRawResponse res = sdk.customerAddresses.customerAddressesCreateRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesGetAll

Get a list of all customer addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesGetAllRequest;
import org.openapis.openapi.models.operations.CustomerAddressesGetAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddressesGetAllRequest req = new CustomerAddressesGetAllRequest() {{
                page = 359508;
                pageSize = 613064;
            }};            

            CustomerAddressesGetAllResponse res = sdk.customerAddresses.customerAddressesGetAll(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesGetOne

Queries a single customer address by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesGetOneRequest;
import org.openapis.openapi.models.operations.CustomerAddressesGetOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddressesGetOneRequest req = new CustomerAddressesGetOneRequest(437032L);            

            CustomerAddressesGetOneResponse res = sdk.customerAddresses.customerAddressesGetOne(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesUpdateForm

Updates a customer address by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateFormRequest;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddressesUpdateFormRequest req = new CustomerAddressesUpdateFormRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "saepe";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.TWO;
                                archivedAt = OffsetDateTime.parse("2022-12-10T00:25:28.749Z");
                                city = "Parma";
                                company = "Osinski - Dach";
                                countryCode = "CW";
                                customerId = 358152L;
                                email = "Nestor.Halvorson@gmail.com";
                                fax = "minima";
                                firstName = "Keyon";
                                housenumber = "accusantium";
                                id = 438601L;
                                lastName = "Nicolas";
                                name2 = "doloribus";
                                restoredAt = OffsetDateTime.parse("2022-09-11T06:15:44.019Z");
                                state = "mollitia";
                                street = "61965 Harvey Landing";
                                tel1 = "molestiae";
                                tel2 = "velit";
                                zip = "error";
                            }};, 158969L);            

            CustomerAddressesUpdateFormResponse res = sdk.customerAddresses.customerAddressesUpdateForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesUpdateJson

Updates a customer address by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateJsonRequest;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddressesUpdateJsonRequest req = new CustomerAddressesUpdateJsonRequest(                new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel() {{
                                addressAddition = "quis";
                                addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum.ONE;
                                archivedAt = OffsetDateTime.parse("2021-09-08T21:06:19.630Z");
                                city = "East Orlando";
                                company = "Wiegand and Sons";
                                countryCode = "NI";
                                customerId = 820994L;
                                email = "Avery_Mueller9@gmail.com";
                                fax = "reiciendis";
                                firstName = "Weston";
                                housenumber = "vero";
                                id = 468651L;
                                lastName = "Langosh";
                                name2 = "voluptatibus";
                                restoredAt = OffsetDateTime.parse("2022-05-25T05:33:11.349Z");
                                state = "voluptate";
                                street = "004 Wilfrid Course";
                                tel1 = "corporis";
                                tel2 = "dolore";
                                zip = "iusto";
                            }};, 118727L);            

            CustomerAddressesUpdateJsonResponse res = sdk.customerAddresses.customerAddressesUpdateJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customerAddressesUpdateRaw

Updates a customer address by id

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateRawRequest;
import org.openapis.openapi.models.operations.CustomerAddressesUpdateRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomerAddressesUpdateRawRequest req = new CustomerAddressesUpdateRawRequest("harum".getBytes(), 317983L);            

            CustomerAddressesUpdateRawResponse res = sdk.customerAddresses.customerAddressesUpdateRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
