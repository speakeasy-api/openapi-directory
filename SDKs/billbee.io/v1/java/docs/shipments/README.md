# shipments

### Available Operations

* [shipmentGetList](#shipmentgetlist) - Get a list of all shipments optionally filtered by date. All parameters are optional.
* [shipmentGetPing](#shipmentgetping)
* [shipmentGetShippingCarrier](#shipmentgetshippingcarrier) - Queries the currently available shipping carriers.
* [shipmentGetShippingproviders](#shipmentgetshippingproviders) - Query all defined shipping providers
* [shipmentPostShipmentForm](#shipmentpostshipmentform) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentJson](#shipmentpostshipmentjson) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentRaw](#shipmentpostshipmentraw) - Creates a new shipment with the selected Shippingprovider
* [shipmentShipWithLabelForm](#shipmentshipwithlabelform) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelJson](#shipmentshipwithlabeljson) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelRaw](#shipmentshipwithlabelraw) - Creates a shipment for an order in billbee

## shipmentGetList

Get a list of all shipments optionally filtered by date. All parameters are optional.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentGetListRequest;
import org.openapis.openapi.models.operations.ShipmentGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShipmentGetListRequest req = new ShipmentGetListRequest() {{
                createdAtMax = OffsetDateTime.parse("2022-12-04T07:33:10.557Z");
                createdAtMin = OffsetDateTime.parse("2022-01-06T19:53:40.287Z");
                minimumShipmentId = 342104L;
                orderId = 869848L;
                page = 823472;
                pageSize = 205499;
                shippingProviderId = 866135L;
            }};            

            ShipmentGetListResponse res = sdk.shipments.shipmentGetList(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentGetPing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentGetPingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShipmentGetPingResponse res = sdk.shipments.shipmentGetPing();

            if (res.shipmentGetPing200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentGetShippingCarrier

Queries the currently available shipping carriers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentGetShippingCarrierResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShipmentGetShippingCarrierResponse res = sdk.shipments.shipmentGetShippingCarrier();

            if (res.shipmentGetShippingCarrier200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentGetShippingproviders

Query all defined shipping providers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentGetShippingprovidersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShipmentGetShippingprovidersResponse res = sdk.shipments.shipmentGetShippingproviders();

            if (res.shipmentGetShippingproviders200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentPostShipmentForm

Creates a new shipment with the selected Shippingprovider

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentPostShipmentFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput req = new BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput() {{
                clientReference = "vel";
                content = "sapiente";
                customerNumber = "mollitia";
                dimension = new BillbeeInterfacesShippingShipmentDataDimensions() {{
                    height = 651.21;
                    length = 5526.46;
                    width = 445.71;
                }};;
                orderCurrencyCode = "non";
                orderSum = 9132.84;
                printerIdForExportDocs = 324052L;
                printerName = "aliquam";
                productCode = "quisquam";
                providerName = "quas";
                receiverAddress = new BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput() {{
                    addressAddition = "consequuntur";
                    city = "Billings";
                    company = "Langworth - O'Reilly";
                    countryCode = "CZ";
                    countryCodeIso3 = "aliquid";
                    email = "Oda.Leffler@gmail.com";
                    firstName = "Dave";
                    housenumber = "recusandae";
                    isExportCountry = false;
                    lastName = "Goldner";
                    name2 = "blanditiis";
                    state = "numquam";
                    street = "50709 Mattie Manor";
                    telephone = "porro";
                    zip = "deserunt";
                }};;
                shipDate = OffsetDateTime.parse("2022-07-13T00:13:42.800Z");
                totalNet = 3740.62;
                weightInGram = 6581.99;
                shippingCarrier = BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum.SEVEN;
            }};            

            ShipmentPostShipmentFormResponse res = sdk.shipments.shipmentPostShipmentForm(req);

            if (res.shipmentPostShipmentForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentPostShipmentJson

Creates a new shipment with the selected Shippingprovider

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentPostShipmentJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput req = new BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput() {{
                clientReference = "alias";
                content = "fuga";
                customerNumber = "aut";
                dimension = new BillbeeInterfacesShippingShipmentDataDimensions() {{
                    height = 2958.92;
                    length = 8027.34;
                    width = 3032.92;
                }};;
                orderCurrencyCode = "iste";
                orderSum = 3558.89;
                printerIdForExportDocs = 755738L;
                printerName = "placeat";
                productCode = "voluptas";
                providerName = "occaecati";
                receiverAddress = new BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput() {{
                    addressAddition = "unde";
                    city = "South Ariccester";
                    company = "Boyle - Runolfsson";
                    countryCode = "BQ";
                    countryCodeIso3 = "harum";
                    email = "Melissa_Braun28@hotmail.com";
                    firstName = "Mervin";
                    housenumber = "corrupti";
                    isExportCountry = false;
                    lastName = "Ledner";
                    name2 = "atque";
                    state = "officiis";
                    street = "897 Phoebe Skyway";
                    telephone = "porro";
                    zip = "id";
                }};;
                shipDate = OffsetDateTime.parse("2021-11-03T10:13:56.563Z");
                totalNet = 7268.51;
                weightInGram = 7748.8;
                shippingCarrier = BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum.EIGHT;
            }};            

            ShipmentPostShipmentJsonResponse res = sdk.shipments.shipmentPostShipmentJson(req);

            if (res.shipmentPostShipmentJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentPostShipmentRaw

Creates a new shipment with the selected Shippingprovider

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentPostShipmentRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "hic".getBytes()            

            ShipmentPostShipmentRawResponse res = sdk.shipments.shipmentPostShipmentRaw(req);

            if (res.shipmentPostShipmentRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentShipWithLabelForm

Creates a shipment for an order in billbee

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentShipWithLabelFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiShipmentWithLabel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiShipmentWithLabel req = new RechnungsdruckWebAppControllersApiShipmentWithLabel() {{
                changeStateToSend = false;
                clientReference = "maxime";
                dimension = new BillbeeInterfacesShippingShipmentDataDimensions() {{
                    height = 366.91;
                    length = 7435.31;
                    width = 1474;
                }};;
                orderId = 866292L;
                printerName = "eligendi";
                productId = 927490L;
                providerId = 83791L;
                shipDate = OffsetDateTime.parse("2022-06-26T14:45:22.419Z");
                weightInGram = 480421;
            }};            

            ShipmentShipWithLabelFormResponse res = sdk.shipments.shipmentShipWithLabelForm(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentShipWithLabelJson

Creates a shipment for an order in billbee

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentShipWithLabelJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiShipmentWithLabel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiShipmentWithLabel req = new RechnungsdruckWebAppControllersApiShipmentWithLabel() {{
                changeStateToSend = false;
                clientReference = "dolor";
                dimension = new BillbeeInterfacesShippingShipmentDataDimensions() {{
                    height = 9171.52;
                    length = 2742.95;
                    width = 1699.35;
                }};;
                orderId = 701841L;
                printerName = "doloremque";
                productId = 30192L;
                providerId = 430146L;
                shipDate = OffsetDateTime.parse("2021-09-15T18:39:45.172Z");
                weightInGram = 444479;
            }};            

            ShipmentShipWithLabelJsonResponse res = sdk.shipments.shipmentShipWithLabelJson(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shipmentShipWithLabelRaw

Creates a shipment for an order in billbee

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShipmentShipWithLabelRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesShippingShipmentDataDimensions;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiShipmentWithLabel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "voluptatum".getBytes()            

            ShipmentShipWithLabelRawResponse res = sdk.shipments.shipmentShipWithLabelRaw(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
