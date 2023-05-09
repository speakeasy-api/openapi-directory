# drivers

### Available Operations

* [deleteDriver](#deletedriver) - Delete a driver
* [getDriver](#getdriver) - Get a driver's data
* [getDrivers](#getdrivers) - List all drivers
* [patchDriver](#patchdriver) - Update a driver's data
* [postDrivers](#postdrivers) - Create a new driver

## deleteDriver

Delete a driver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDriverRequest;
import org.openapis.openapi.models.operations.DeleteDriverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteDriverRequest req = new DeleteDriverRequest("quo");            

            DeleteDriverResponse res = sdk.drivers.deleteDriver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDriver

Get a driver's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDriverRequest;
import org.openapis.openapi.models.operations.GetDriverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDriverRequest req = new GetDriverRequest("tenetur") {{
                includeGroup = false;
                includeOrganization = false;
                includeTokens = false;
            }};            

            GetDriverResponse res = sdk.drivers.getDriver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDrivers

List all drivers

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDriversRequest;
import org.openapis.openapi.models.operations.GetDriversResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDriversRequest req = new GetDriversRequest() {{
                active = false;
                createdAtDollarGte = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-11-26T13:23:33.410Z");
                includeGroup = false;
                includeOrganization = false;
                includeTokens = false;
                paginateEnabled = false;
                paginateLimit = 622846L;
                paginatePage = "temporibus";
                sortBy = "laborum";
                sortOrder = SortOrder1Enum.DESC;
                updatedAtDollarGte = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
            }};            

            GetDriversResponse res = sdk.drivers.getDrivers(req);

            if (res.getDrivers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDriver

Update a driver's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDriverRequest;
import org.openapis.openapi.models.operations.PatchDriverRequestBody;
import org.openapis.openapi.models.operations.PatchDriverRequestBodyAddress;
import org.openapis.openapi.models.operations.PatchDriverRequestBodyPhone;
import org.openapis.openapi.models.operations.PatchDriverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchDriverRequest req = new PatchDriverRequest(                new PatchDriverRequestBody() {{
                                active = false;
                                address = new PatchDriverRequestBodyAddress() {{
                                    city = "Baltimore";
                                    country = "Mozambique";
                                    postalCode = "70042";
                                    streetAndNumber = "maiores";
                                }};;
                                email = "Floy.Gulgowski@gmail.com";
                                firstname = "Martine";
                                lastname = "Hamill";
                                phone = new PatchDriverRequestBodyPhone() {{
                                    home = "accusamus";
                                    mobile = "1-902-755-8255 x909";
                                    work = "sint";
                                }};;
                                source = "veritatis";
                                tokens = new Object[]{{
                                    add("incidunt"),
                                    add("enim"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                            }};, "quibusdam");            

            PatchDriverResponse res = sdk.drivers.patchDriver(req);

            if (res.patchDriver200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDrivers

Create a new driver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDriversRequestBody;
import org.openapis.openapi.models.operations.PostDriversRequestBodyAddress;
import org.openapis.openapi.models.operations.PostDriversRequestBodyPhone;
import org.openapis.openapi.models.operations.PostDriversRequestBodySourceEnum;
import org.openapis.openapi.models.operations.PostDriversResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostDriversRequestBody req = new PostDriversRequestBody("deserunt", "distinctio", PostDriversRequestBodySourceEnum.SMS) {{
                active = false;
                address = new PostDriversRequestBodyAddress() {{
                    city = "West Christa";
                    country = "Iceland";
                    postalCode = "50183-0165";
                    streetAndNumber = "tempora";
                }};;
                email = "Mustafa.Green24@hotmail.com";
                phone = new PostDriversRequestBodyPhone() {{
                    home = "eligendi";
                    mobile = "(558) 662-8964 x4896";
                    work = "dicta";
                }};;
            }};            

            PostDriversResponse res = sdk.drivers.postDrivers(req);

            if (res.postDrivers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
