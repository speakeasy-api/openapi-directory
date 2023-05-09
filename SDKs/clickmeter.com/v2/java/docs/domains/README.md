# domains

### Available Operations

* [domainsCount](#domainscount) - Retrieve count of domains
* [domainsDelete](#domainsdelete) - Delete a domain
* [domainsGet](#domainsget) - Retrieve a list of domains
* [domainsPutForm](#domainsputform) - Create a domain
* [domainsPutJson](#domainsputjson) - Create a domain
* [domainsPutRaw](#domainsputraw) - Create a domain
* [domainsUpdateForm](#domainsupdateform) - Update a domain
* [domainsUpdateJson](#domainsupdatejson) - Update a domain
* [domainsUpdateRaw](#domainsupdateraw) - Update a domain
* [getDomainsId](#getdomainsid) - Get a domain

## domainsCount

Retrieve count of domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsCountRequest;
import org.openapis.openapi.models.operations.DomainsCountResponse;
import org.openapis.openapi.models.operations.DomainsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsCountRequest req = new DomainsCountRequest() {{
                name = "Bernice Moen MD";
                type = DomainsCountTypeEnum.PERSONAL;
            }};            

            DomainsCountResponse res = sdk.domains.domainsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsDelete

Delete a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsDeleteRequest;
import org.openapis.openapi.models.operations.DomainsDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsDeleteRequest req = new DomainsDeleteRequest(637462L);            

            DomainsDeleteResponse res = sdk.domains.domainsDelete(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsGet

Retrieve a list of domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsGetRequest;
import org.openapis.openapi.models.operations.DomainsGetResponse;
import org.openapis.openapi.models.operations.DomainsGetTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsGetRequest req = new DomainsGetRequest() {{
                limit = 811939;
                name = "Marlene Beer Jr.";
                offset = 517137;
                type = DomainsGetTypeEnum.GO;
            }};            

            DomainsGetResponse res = sdk.domains.domainsGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsPutForm

Create a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsPutFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain req = new ApiCoreDtoDomainsDomain() {{
                custom404 = "distinctio";
                customHomepage = "voluptatem";
                id = 418109L;
                name = "Miss Wanda Shanahan";
                type = ApiCoreDtoDomainsDomainTypeEnum.DEDICATED;
            }};            

            DomainsPutFormResponse res = sdk.domains.domainsPutForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsPutJson

Create a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsPutJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain req = new ApiCoreDtoDomainsDomain() {{
                custom404 = "provident";
                customHomepage = "accusamus";
                id = 896480L;
                name = "Kirk Jast";
                type = ApiCoreDtoDomainsDomainTypeEnum.DEDICATED;
            }};            

            DomainsPutJsonResponse res = sdk.domains.domainsPutJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsPutRaw

Create a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsPutRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "corporis".getBytes()            

            DomainsPutRawResponse res = sdk.domains.domainsPutRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsUpdateForm

Update a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsUpdateFormRequest;
import org.openapis.openapi.models.operations.DomainsUpdateFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsUpdateFormRequest req = new DomainsUpdateFormRequest(                new ApiCoreDtoDomainsDomain() {{
                                custom404 = "voluptatibus";
                                customHomepage = "cum";
                                id = 872303L;
                                name = "Rachel Powlowski";
                                type = ApiCoreDtoDomainsDomainTypeEnum.SYSTEM;
                            }};, 710456L);            

            DomainsUpdateFormResponse res = sdk.domains.domainsUpdateForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsUpdateJson

Update a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsUpdateJsonRequest;
import org.openapis.openapi.models.operations.DomainsUpdateJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsUpdateJsonRequest req = new DomainsUpdateJsonRequest(                new ApiCoreDtoDomainsDomain() {{
                                custom404 = "eos";
                                customHomepage = "quibusdam";
                                id = 483518L;
                                name = "Fred Champlin";
                                type = ApiCoreDtoDomainsDomainTypeEnum.PERSONAL;
                            }};, 239337L);            

            DomainsUpdateJsonResponse res = sdk.domains.domainsUpdateJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsUpdateRaw

Update a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsUpdateRawRequest;
import org.openapis.openapi.models.operations.DomainsUpdateRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomain;
import org.openapis.openapi.models.shared.ApiCoreDtoDomainsDomainTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainsUpdateRawRequest req = new DomainsUpdateRawRequest("similique".getBytes(), 282837L);            

            DomainsUpdateRawResponse res = sdk.domains.domainsUpdateRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsId

Get a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsIdRequest;
import org.openapis.openapi.models.operations.GetDomainsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainsIdRequest req = new GetDomainsIdRequest(339631L);            

            GetDomainsIdResponse res = sdk.domains.getDomainsId(req);

            if (res.apiCoreDtoDomainsDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
