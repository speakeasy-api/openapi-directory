# locations

### Available Operations

* [locationsAdd](#locationsadd) - Create Location
* [locationsAll](#locationsall) - List Locations
* [locationsDelete](#locationsdelete) - Delete Location
* [locationsOne](#locationsone) - Get Location
* [locationsUpdate](#locationsupdate) - Update Location

## locationsAdd

Create Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsAddRequest;
import org.openapis.openapi.models.operations.LocationsAddResponse;
import org.openapis.openapi.models.operations.LocationsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.LocationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsAddRequest req = new LocationsAddRequest(                new LocationInput() {{
                                address = new Address() {{
                                    city = "San Francisco";
                                    contactName = "Elon Musk";
                                    country = "US";
                                    county = "Santa Clara";
                                    email = "elon@musk.com";
                                    fax = "122-111-1111";
                                    id = "123";
                                    latitude = "40.759211";
                                    line1 = "Main street";
                                    line2 = "apt #";
                                    line3 = "Suite #";
                                    line4 = "delivery instructions";
                                    longitude = "-73.984638";
                                    name = "HQ US";
                                    phoneNumber = "111-111-1111";
                                    postalCode = "94104";
                                    rowVersion = "1-12345";
                                    salutation = "Mr";
                                    state = "CA";
                                    streetNumber = "25";
                                    string = "25 Spring Street, Blackburn, VIC 3130";
                                    type = AddressTypeEnum.PRIMARY;
                                    website = "https://elonmusk.com";
                                }};;
                                businessName = "Dunkin Donuts LLC";
                                currency = CurrencyEnum.USD;
                                merchantId = "12345";
                                name = "Dunkin Donuts";
                                status = LocationStatusEnum.ACTIVE;
                            }};, "repellat", "mollitia") {{
                raw = false;
                xApideckServiceId = "occaecati";
            }};            

            LocationsAddResponse res = sdk.locations.locationsAdd(req, new LocationsAddSecurity("numquam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsAll

List Locations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsAllRequest;
import org.openapis.openapi.models.operations.LocationsAllResponse;
import org.openapis.openapi.models.operations.LocationsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsAllRequest req = new LocationsAllRequest("commodi", "quam") {{
                cursor = "molestiae";
                fields = "velit";
                limit = 623510L;
                raw = false;
                xApideckServiceId = "quia";
            }};            

            LocationsAllResponse res = sdk.locations.locationsAll(req, new LocationsAllSecurity("quis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsDelete

Delete Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsDeleteRequest;
import org.openapis.openapi.models.operations.LocationsDeleteResponse;
import org.openapis.openapi.models.operations.LocationsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsDeleteRequest req = new LocationsDeleteRequest("vitae", "laborum", "animi") {{
                raw = false;
                xApideckServiceId = "enim";
            }};            

            LocationsDeleteResponse res = sdk.locations.locationsDelete(req, new LocationsDeleteSecurity("odit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsOne

Get Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsOneRequest;
import org.openapis.openapi.models.operations.LocationsOneResponse;
import org.openapis.openapi.models.operations.LocationsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsOneRequest req = new LocationsOneRequest("quo", "sequi", "tenetur") {{
                fields = "ipsam";
                raw = false;
                xApideckServiceId = "id";
            }};            

            LocationsOneResponse res = sdk.locations.locationsOne(req, new LocationsOneSecurity("possimus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsUpdate

Update Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsUpdateRequest;
import org.openapis.openapi.models.operations.LocationsUpdateResponse;
import org.openapis.openapi.models.operations.LocationsUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.LocationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsUpdateRequest req = new LocationsUpdateRequest(                new LocationInput() {{
                                address = new Address() {{
                                    city = "San Francisco";
                                    contactName = "Elon Musk";
                                    country = "US";
                                    county = "Santa Clara";
                                    email = "elon@musk.com";
                                    fax = "122-111-1111";
                                    id = "123";
                                    latitude = "40.759211";
                                    line1 = "Main street";
                                    line2 = "apt #";
                                    line3 = "Suite #";
                                    line4 = "delivery instructions";
                                    longitude = "-73.984638";
                                    name = "HQ US";
                                    phoneNumber = "111-111-1111";
                                    postalCode = "94104";
                                    rowVersion = "1-12345";
                                    salutation = "Mr";
                                    state = "CA";
                                    streetNumber = "25";
                                    string = "25 Spring Street, Blackburn, VIC 3130";
                                    type = AddressTypeEnum.PRIMARY;
                                    website = "https://elonmusk.com";
                                }};;
                                businessName = "Dunkin Donuts LLC";
                                currency = CurrencyEnum.USD;
                                merchantId = "12345";
                                name = "Dunkin Donuts";
                                status = LocationStatusEnum.ACTIVE;
                            }};, "aut", "quasi", "error") {{
                raw = false;
                xApideckServiceId = "temporibus";
            }};            

            LocationsUpdateResponse res = sdk.locations.locationsUpdate(req, new LocationsUpdateSecurity("laborum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
