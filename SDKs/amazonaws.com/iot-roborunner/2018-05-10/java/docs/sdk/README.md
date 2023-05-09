# SDK

## Overview

An example service, deployed with the Octane Service creator, which will echo the string

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotroborunner/>
### Available Operations

* [createDestination](#createdestination) - Grants permission to create a destination
* [createSite](#createsite) - Grants permission to create a site
* [createWorker](#createworker) - Grants permission to create a worker
* [createWorkerFleet](#createworkerfleet) - Grants permission to create a worker fleet
* [deleteDestination](#deletedestination) - Grants permission to delete a destination
* [deleteSite](#deletesite) - Grants permission to delete a site
* [deleteWorker](#deleteworker) - Grants permission to delete a worker
* [deleteWorkerFleet](#deleteworkerfleet) - Grants permission to delete a worker fleet
* [getDestination](#getdestination) - Grants permission to get a destination
* [getSite](#getsite) - Grants permission to get a site
* [getWorker](#getworker) - Grants permission to get a worker
* [getWorkerFleet](#getworkerfleet) - Grants permission to get a worker fleet
* [listDestinations](#listdestinations) - Grants permission to list destinations
* [listSites](#listsites) - Grants permission to list sites
* [listWorkerFleets](#listworkerfleets) - Grants permission to list worker fleets
* [listWorkers](#listworkers) - Grants permission to list workers
* [updateDestination](#updatedestination) - Grants permission to update a destination
* [updateSite](#updatesite) - Grants permission to update a site
* [updateWorker](#updateworker) - Grants permission to update a worker
* [updateWorkerFleet](#updateworkerfleet) - Grants permission to update a worker fleet

## createDestination

Grants permission to create a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDestinationRequest;
import org.openapis.openapi.models.operations.CreateDestinationRequestBody;
import org.openapis.openapi.models.operations.CreateDestinationRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDestinationRequest req = new CreateDestinationRequest(                new CreateDestinationRequestBody("debitis", "ipsa") {{
                                additionalFixedProperties = "delectus";
                                clientToken = "tempora";
                                state = CreateDestinationRequestBodyStateEnum.DISABLED;
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            CreateDestinationResponse res = sdk.sdk.createDestination(req);

            if (res.createDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSite

Grants permission to create a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSiteRequest;
import org.openapis.openapi.models.operations.CreateSiteRequestBody;
import org.openapis.openapi.models.operations.CreateSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSiteRequest req = new CreateSiteRequest(                new CreateSiteRequestBody("temporibus", "ab") {{
                                clientToken = "quis";
                                description = "veritatis";
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateSiteResponse res = sdk.sdk.createSite(req);

            if (res.createSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorker

Grants permission to create a worker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkerRequest;
import org.openapis.openapi.models.operations.CreateWorkerRequestBody;
import org.openapis.openapi.models.operations.CreateWorkerRequestBodyOrientation;
import org.openapis.openapi.models.operations.CreateWorkerRequestBodyPosition;
import org.openapis.openapi.models.operations.CreateWorkerRequestBodyVendorProperties;
import org.openapis.openapi.models.operations.CreateWorkerResponse;
import org.openapis.openapi.models.shared.CartesianCoordinates;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkerRequest req = new CreateWorkerRequest(                new CreateWorkerRequestBody("at", "maiores") {{
                                additionalFixedProperties = "molestiae";
                                additionalTransientProperties = "quod";
                                clientToken = "quod";
                                orientation = new CreateWorkerRequestBodyOrientation() {{
                                    degrees = 4614.79;
                                }};;
                                position = new CreateWorkerRequestBodyPosition() {{
                                    cartesianCoordinates = new CartesianCoordinates(5204.78, 7805.29) {{
                                        z = 6788.8;
                                    }};;
                                }};;
                                vendorProperties = new CreateWorkerRequestBodyVendorProperties() {{
                                    vendorAdditionalFixedProperties = "dicta";
                                    vendorAdditionalTransientProperties = "nam";
                                    vendorWorkerId = "officia";
                                    vendorWorkerIpAddress = "occaecati";
                                }};;
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateWorkerResponse res = sdk.sdk.createWorker(req);

            if (res.createWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkerFleet

Grants permission to create a worker fleet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkerFleetRequest;
import org.openapis.openapi.models.operations.CreateWorkerFleetRequestBody;
import org.openapis.openapi.models.operations.CreateWorkerFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkerFleetRequest req = new CreateWorkerFleetRequest(                new CreateWorkerFleetRequestBody("modi", "qui") {{
                                additionalFixedProperties = "impedit";
                                clientToken = "cum";
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateWorkerFleetResponse res = sdk.sdk.createWorkerFleet(req);

            if (res.createWorkerFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDestination

Grants permission to delete a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDestinationRequest;
import org.openapis.openapi.models.operations.DeleteDestinationRequestBody;
import org.openapis.openapi.models.operations.DeleteDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDestinationRequest req = new DeleteDestinationRequest(                new DeleteDestinationRequestBody("iste");) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DeleteDestinationResponse res = sdk.sdk.deleteDestination(req);

            if (res.deleteDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSite

Grants permission to delete a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSiteRequest;
import org.openapis.openapi.models.operations.DeleteSiteRequestBody;
import org.openapis.openapi.models.operations.DeleteSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSiteRequest req = new DeleteSiteRequest(                new DeleteSiteRequestBody("iste");) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteSiteResponse res = sdk.sdk.deleteSite(req);

            if (res.deleteSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorker

Grants permission to delete a worker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkerRequest;
import org.openapis.openapi.models.operations.DeleteWorkerRequestBody;
import org.openapis.openapi.models.operations.DeleteWorkerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkerRequest req = new DeleteWorkerRequest(                new DeleteWorkerRequestBody("laborum");) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteWorkerResponse res = sdk.sdk.deleteWorker(req);

            if (res.deleteWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkerFleet

Grants permission to delete a worker fleet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkerFleetRequest;
import org.openapis.openapi.models.operations.DeleteWorkerFleetRequestBody;
import org.openapis.openapi.models.operations.DeleteWorkerFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkerFleetRequest req = new DeleteWorkerFleetRequest(                new DeleteWorkerFleetRequestBody("minima");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteWorkerFleetResponse res = sdk.sdk.deleteWorkerFleet(req);

            if (res.deleteWorkerFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDestination

Grants permission to get a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationRequest;
import org.openapis.openapi.models.operations.GetDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDestinationRequest req = new GetDestinationRequest("dolorem") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            GetDestinationResponse res = sdk.sdk.getDestination(req);

            if (res.getDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSite

Grants permission to get a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteRequest;
import org.openapis.openapi.models.operations.GetSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSiteRequest req = new GetSiteRequest("molestiae") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            GetSiteResponse res = sdk.sdk.getSite(req);

            if (res.getSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorker

Grants permission to get a worker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkerRequest;
import org.openapis.openapi.models.operations.GetWorkerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkerRequest req = new GetWorkerRequest("odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            GetWorkerResponse res = sdk.sdk.getWorker(req);

            if (res.getWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkerFleet

Grants permission to get a worker fleet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkerFleetRequest;
import org.openapis.openapi.models.operations.GetWorkerFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkerFleetRequest req = new GetWorkerFleetRequest("error") {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            GetWorkerFleetResponse res = sdk.sdk.getWorkerFleet(req);

            if (res.getWorkerFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDestinations

Grants permission to list destinations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDestinationsRequest;
import org.openapis.openapi.models.operations.ListDestinationsResponse;
import org.openapis.openapi.models.operations.ListDestinationsStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDestinationsRequest req = new ListDestinationsRequest("voluptatibus") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
                maxResults = 282807L;
                nextToken = "maiores";
                state = ListDestinationsStateEnum.ENABLED;
            }};            

            ListDestinationsResponse res = sdk.sdk.listDestinations(req);

            if (res.listDestinationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSites

Grants permission to list sites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSitesRequest;
import org.openapis.openapi.models.operations.ListSitesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSitesRequest req = new ListSitesRequest() {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
                maxResults = 918236L;
                nextToken = "quae";
            }};            

            ListSitesResponse res = sdk.sdk.listSites(req);

            if (res.listSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkerFleets

Grants permission to list worker fleets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerFleetsRequest;
import org.openapis.openapi.models.operations.ListWorkerFleetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkerFleetsRequest req = new ListWorkerFleetsRequest("quidem") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
                maxResults = 93940L;
                nextToken = "repudiandae";
            }};            

            ListWorkerFleetsResponse res = sdk.sdk.listWorkerFleets(req);

            if (res.listWorkerFleetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkers

Grants permission to list workers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkersRequest;
import org.openapis.openapi.models.operations.ListWorkersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkersRequest req = new ListWorkersRequest("veritatis") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
                fleet = "deserunt";
                maxResults = 716327L;
                nextToken = "quibusdam";
            }};            

            ListWorkersResponse res = sdk.sdk.listWorkers(req);

            if (res.listWorkersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDestination

Grants permission to update a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDestinationRequest;
import org.openapis.openapi.models.operations.UpdateDestinationRequestBody;
import org.openapis.openapi.models.operations.UpdateDestinationRequestBodyStateEnum;
import org.openapis.openapi.models.operations.UpdateDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDestinationRequest req = new UpdateDestinationRequest(                new UpdateDestinationRequestBody("modi") {{
                                additionalFixedProperties = "qui";
                                name = "Mr. Shelly Lueilwitz";
                                state = UpdateDestinationRequestBodyStateEnum.DISABLED;
                            }};) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            UpdateDestinationResponse res = sdk.sdk.updateDestination(req);

            if (res.updateDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSite

Grants permission to update a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiteRequest;
import org.openapis.openapi.models.operations.UpdateSiteRequestBody;
import org.openapis.openapi.models.operations.UpdateSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSiteRequest req = new UpdateSiteRequest(                new UpdateSiteRequestBody("delectus") {{
                                countryCode = "IR";
                                description = "non";
                                name = "Sergio Hyatt";
                            }};) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            UpdateSiteResponse res = sdk.sdk.updateSite(req);

            if (res.updateSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorker

Grants permission to update a worker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkerRequest;
import org.openapis.openapi.models.operations.UpdateWorkerRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkerRequestBodyOrientation;
import org.openapis.openapi.models.operations.UpdateWorkerRequestBodyPosition;
import org.openapis.openapi.models.operations.UpdateWorkerRequestBodyVendorProperties;
import org.openapis.openapi.models.operations.UpdateWorkerResponse;
import org.openapis.openapi.models.shared.CartesianCoordinates;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkerRequest req = new UpdateWorkerRequest(                new UpdateWorkerRequestBody("illum") {{
                                additionalFixedProperties = "maiores";
                                additionalTransientProperties = "rerum";
                                name = "Valerie Runolfsson";
                                orientation = new UpdateWorkerRequestBodyOrientation() {{
                                    degrees = 3965.06;
                                }};;
                                position = new UpdateWorkerRequestBodyPosition() {{
                                    cartesianCoordinates = new CartesianCoordinates(6754.39, 8811.04) {{
                                        z = 2497.96;
                                    }};;
                                }};;
                                vendorProperties = new UpdateWorkerRequestBodyVendorProperties() {{
                                    vendorAdditionalFixedProperties = "occaecati";
                                    vendorAdditionalTransientProperties = "enim";
                                    vendorWorkerId = "accusamus";
                                    vendorWorkerIpAddress = "delectus";
                                }};;
                            }};) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateWorkerResponse res = sdk.sdk.updateWorker(req);

            if (res.updateWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkerFleet

Grants permission to update a worker fleet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkerFleetRequest;
import org.openapis.openapi.models.operations.UpdateWorkerFleetRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkerFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkerFleetRequest req = new UpdateWorkerFleetRequest(                new UpdateWorkerFleetRequestBody("deserunt") {{
                                additionalFixedProperties = "nisi";
                                name = "Ada Moen IV";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            UpdateWorkerFleetResponse res = sdk.sdk.updateWorkerFleet(req);

            if (res.updateWorkerFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
