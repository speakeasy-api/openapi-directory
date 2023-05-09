# locations

### Available Operations

* [deleteLocation](#deletelocation) - Delete a location
* [getLocation](#getlocation) - Get a location's data
* [getLocations](#getlocations) - Get Locations data
* [patchLocation](#patchlocation) - Update a location's data
* [postLocations](#postlocations) - Create a new location

## deleteLocation

Delete a location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocationRequest;
import org.openapis.openapi.models.operations.DeleteLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteLocationRequest req = new DeleteLocationRequest("cumque");            

            DeleteLocationResponse res = sdk.locations.deleteLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocation

Get a location's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationRequest;
import org.openapis.openapi.models.operations.GetLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetLocationRequest req = new GetLocationRequest("ea") {{
                includeChargestations = false;
                includeOrganization = false;
            }};            

            GetLocationResponse res = sdk.locations.getLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocations

Get Locations data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationsRequest;
import org.openapis.openapi.models.operations.GetLocationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetLocationsRequest req = new GetLocationsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2021-03-28T19:04:18.797Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-06-02T20:02:58.167Z");
                includeOrganization = false;
                paginateEnabled = false;
                paginateLimit = 313218L;
                paginatePage = "accusamus";
                sortBy = "delectus";
                sortOrder = SortOrder1Enum.ASC;
                updatedAtDollarGte = OffsetDateTime.parse("2021-07-20T13:32:41.687Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-12-31T00:47:48.012Z");
            }};            

            GetLocationsResponse res = sdk.locations.getLocations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchLocation

Update a location's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchLocationRequest;
import org.openapis.openapi.models.operations.PatchLocationRequestBody;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyAddress;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyCoordinates;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours0;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours1;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours2;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours3;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours4;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours5;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours6;
import org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours;
import org.openapis.openapi.models.operations.PatchLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchLocationRequest req = new PatchLocationRequest(                new PatchLocationRequestBody() {{
                                active = false;
                                address = new PatchLocationRequestBodyAddress() {{
                                    city = "Dayton";
                                    country = "Niger";
                                    postalCode = "46640";
                                    state = "nihil";
                                    streetAndNumber = "magnam";
                                }};;
                                chargestations = new Object[]{{
                                    add("id"),
                                    add("labore"),
                                    add("labore"),
                                }};
                                coordinates = new PatchLocationRequestBodyCoordinates() {{
                                    latitude = 3834.62;
                                    longitude = 6180.16;
                                }};;
                                openingHours = new PatchLocationRequestBodyOpeningHours() {{
                                    zero = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours0[]{{
                                        add(new PatchLocationRequestBodyOpeningHours0() {{
                                            endTime = "eum";
                                            startTime = "vero";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours0() {{
                                            endTime = "aspernatur";
                                            startTime = "architecto";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours0() {{
                                            endTime = "magnam";
                                            startTime = "et";
                                        }}),
                                    }};
                                    one = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours1[]{{
                                        add(new PatchLocationRequestBodyOpeningHours1() {{
                                            endTime = "ullam";
                                            startTime = "provident";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours1() {{
                                            endTime = "quos";
                                            startTime = "sint";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours1() {{
                                            endTime = "accusantium";
                                            startTime = "mollitia";
                                        }}),
                                    }};
                                    two = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours2[]{{
                                        add(new PatchLocationRequestBodyOpeningHours2() {{
                                            endTime = "mollitia";
                                            startTime = "ad";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours2() {{
                                            endTime = "eum";
                                            startTime = "dolor";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours2() {{
                                            endTime = "necessitatibus";
                                            startTime = "odit";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours2() {{
                                            endTime = "nemo";
                                            startTime = "quasi";
                                        }}),
                                    }};
                                    three = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours3[]{{
                                        add(new PatchLocationRequestBodyOpeningHours3() {{
                                            endTime = "doloribus";
                                            startTime = "debitis";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours3() {{
                                            endTime = "eius";
                                            startTime = "maxime";
                                        }}),
                                    }};
                                    four = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours4[]{{
                                        add(new PatchLocationRequestBodyOpeningHours4() {{
                                            endTime = "facilis";
                                            startTime = "in";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours4() {{
                                            endTime = "architecto";
                                            startTime = "architecto";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours4() {{
                                            endTime = "repudiandae";
                                            startTime = "ullam";
                                        }}),
                                    }};
                                    five = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours5[]{{
                                        add(new PatchLocationRequestBodyOpeningHours5() {{
                                            endTime = "nihil";
                                            startTime = "repellat";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours5() {{
                                            endTime = "quibusdam";
                                            startTime = "sed";
                                        }}),
                                        add(new PatchLocationRequestBodyOpeningHours5() {{
                                            endTime = "saepe";
                                            startTime = "pariatur";
                                        }}),
                                    }};
                                    six = new org.openapis.openapi.models.operations.PatchLocationRequestBodyOpeningHours6[]{{
                                        add(new PatchLocationRequestBodyOpeningHours6() {{
                                            endTime = "consequuntur";
                                            startTime = "praesentium";
                                        }}),
                                    }};
                                }};;
                                operatorName = "natus";
                                timezone = "magni";
                            }};, "sunt");            

            PatchLocationResponse res = sdk.locations.patchLocation(req);

            if (res.patchLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLocations

Create a new location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLocationsRequestBody;
import org.openapis.openapi.models.operations.PostLocationsRequestBodyAddress;
import org.openapis.openapi.models.operations.PostLocationsRequestBodyCoordinates;
import org.openapis.openapi.models.operations.PostLocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostLocationsRequestBody req = new PostLocationsRequestBody(                new PostLocationsRequestBodyAddress() {{
                                city = "Sterling Heights";
                                country = "Singapore";
                                postalCode = "51400";
                                streetAndNumber = "maiores";
                            }};,                 new PostLocationsRequestBodyCoordinates() {{
                                latitude = 6974.29;
                                longitude = 3732.91;
                            }};, "voluptate") {{
                active = false;
                chargestations = new Object[]{{
                    add("nam"),
                    add("eaque"),
                }};
            }};            

            PostLocationsResponse res = sdk.locations.postLocations(req);

            if (res.postLocations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
