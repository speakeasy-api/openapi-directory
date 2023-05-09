# console

### Available Operations

* [getAemProductInfo](#getaemproductinfo)
* [getBundleInfo](#getbundleinfo)
* [getConfigMgr](#getconfigmgr)
* [postBundle](#postbundle)
* [postJmxRepository](#postjmxrepository)
* [postSamlConfiguration](#postsamlconfiguration)

## getAemProductInfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAemProductInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAemProductInfoResponse res = sdk.console.getAemProductInfo();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundleInfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleInfoRequest;
import org.openapis.openapi.models.operations.GetBundleInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetBundleInfoRequest req = new GetBundleInfoRequest("corrupti");            

            GetBundleInfoResponse res = sdk.console.getBundleInfo(req);

            if (res.bundleInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigMgr

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigMgrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetConfigMgrResponse res = sdk.console.getConfigMgr();

            if (res.getConfigMgr200TextXMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBundleRequest;
import org.openapis.openapi.models.operations.PostBundleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "deserunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostBundleRequest req = new PostBundleRequest("suscipit", "iure");            

            PostBundleResponse res = sdk.console.postBundle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJmxRepository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJmxRepositoryRequest;
import org.openapis.openapi.models.operations.PostJmxRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostJmxRepositoryRequest req = new PostJmxRepositoryRequest("ipsa");            

            PostJmxRepositoryResponse res = sdk.console.postJmxRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSamlConfiguration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSamlConfigurationRequest;
import org.openapis.openapi.models.operations.PostSamlConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "tempora") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostSamlConfigurationRequest req = new PostSamlConfigurationRequest() {{
                dollarLocation = "suscipit";
                action = "molestiae";
                addGroupMemberships = false;
                apply = false;
                assertionConsumerServiceURL = "minus";
                clockTolerance = 812169L;
                createUser = false;
                defaultGroups = new String[]{{
                    add("iusto"),
                    add("excepturi"),
                    add("nisi"),
                }};
                defaultRedirectUrl = "recusandae";
                delete = false;
                digestMethod = "temporibus";
                groupMembershipAttribute = "ab";
                handleLogout = false;
                idpCertAlias = "quis";
                idpHttpRedirect = false;
                idpUrl = "veritatis";
                keyStorePassword = "deserunt";
                logoutUrl = "perferendis";
                nameIdFormat = "ipsam";
                path = new String[]{{
                    add("sapiente"),
                    add("quo"),
                    add("odit"),
                    add("at"),
                }};
                post = false;
                propertylist = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                serviceRanking = 461479L;
                serviceProviderEntityId = "totam";
                signatureMethod = "porro";
                spPrivateKeyAlias = "dolorum";
                synchronizeAttributes = new String[]{{
                    add("nam"),
                }};
                useEncryption = false;
                userIDAttribute = "officia";
                userIntermediatePath = "occaecati";
            }};            

            PostSamlConfigurationResponse res = sdk.console.postSamlConfiguration(req);

            if (res.samlConfigurationInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
