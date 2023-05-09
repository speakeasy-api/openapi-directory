# sling

### Available Operations

* [deleteAgent](#deleteagent)
* [deleteNode](#deletenode)
* [getAgent](#getagent)
* [getAgents](#getagents)
* [getAuthorizableKeystore](#getauthorizablekeystore)
* [getKeystore](#getkeystore)
* [getNode](#getnode)
* [getPackage](#getpackage)
* [getPackageFilter](#getpackagefilter)
* [getQuery](#getquery)
* [getTruststore](#gettruststore)
* [getTruststoreInfo](#gettruststoreinfo)
* [postAgent](#postagent)
* [postAuthorizableKeystore](#postauthorizablekeystore)
* [postAuthorizables](#postauthorizables)
* [postConfigAdobeGraniteSamlAuthenticationHandler](#postconfigadobegranitesamlauthenticationhandler)
* [postConfigApacheFelixJettyBasedHttpService](#postconfigapachefelixjettybasedhttpservice)
* [postConfigApacheHttpComponentsProxyConfiguration](#postconfigapachehttpcomponentsproxyconfiguration)
* [postConfigApacheSlingDavExServlet](#postconfigapacheslingdavexservlet)
* [postConfigApacheSlingGetServlet](#postconfigapacheslinggetservlet)
* [postConfigApacheSlingReferrerFilter](#postconfigapacheslingreferrerfilter)
* [postConfigProperty](#postconfigproperty)
* [postNode](#postnode)
* [postNodeRw](#postnoderw)
* [postPath](#postpath)
* [postQuery](#postquery)
* [postTreeActivation](#posttreeactivation)
* [postTruststore](#posttruststore)
* [postTruststorePkcs12](#posttruststorepkcs12)

## deleteAgent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAgentRequest;
import org.openapis.openapi.models.operations.DeleteAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia", "quis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteAgentRequest req = new DeleteAgentRequest("vitae", "laborum");            

            DeleteAgentResponse res = sdk.sling.deleteAgent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNodeRequest;
import org.openapis.openapi.models.operations.DeleteNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi", "enim") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteNodeRequest req = new DeleteNodeRequest("odit", "quo");            

            DeleteNodeResponse res = sdk.sling.deleteNode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentRequest;
import org.openapis.openapi.models.operations.GetAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "tenetur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAgentRequest req = new GetAgentRequest("ipsam", "id");            

            GetAgentResponse res = sdk.sling.getAgent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentsRequest;
import org.openapis.openapi.models.operations.GetAgentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAgentsRequest req = new GetAgentsRequest("quasi");            

            GetAgentsResponse res = sdk.sling.getAgents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizableKeystore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorizableKeystoreRequest;
import org.openapis.openapi.models.operations.GetAuthorizableKeystoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "temporibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAuthorizableKeystoreRequest req = new GetAuthorizableKeystoreRequest("laborum", "quasi");            

            GetAuthorizableKeystoreResponse res = sdk.sling.getAuthorizableKeystore(req);

            if (res.keystoreInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeystore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeystoreRequest;
import org.openapis.openapi.models.operations.GetKeystoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetKeystoreRequest req = new GetKeystoreRequest("vero", "nihil");            

            GetKeystoreResponse res = sdk.sling.getKeystore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNodeRequest;
import org.openapis.openapi.models.operations.GetNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNodeRequest req = new GetNodeRequest("ipsa", "omnis");            

            GetNodeResponse res = sdk.sling.getNode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPackage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPackageRequest;
import org.openapis.openapi.models.operations.GetPackageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPackageRequest req = new GetPackageRequest("perferendis", "doloremque", "reprehenderit");            

            GetPackageResponse res = sdk.sling.getPackage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPackageFilter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPackageFilterRequest;
import org.openapis.openapi.models.operations.GetPackageFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPackageFilterRequest req = new GetPackageFilterRequest("dicta", "corporis", "dolore");            

            GetPackageFilterResponse res = sdk.sling.getPackageFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryRequest;
import org.openapis.openapi.models.operations.GetQueryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetQueryRequest req = new GetQueryRequest("harum", "enim", 8804.76, "commodi");            

            GetQueryResponse res = sdk.sling.getQuery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruststore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruststoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "quae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTruststoreResponse res = sdk.sling.getTruststore();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruststoreInfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruststoreInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTruststoreInfoResponse res = sdk.sling.getTruststoreInfo();

            if (res.truststoreInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAgent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAgentRequest;
import org.openapis.openapi.models.operations.PostAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAgentRequest req = new PostAgentRequest("pariatur", "modi") {{
                operation = "praesentium";
                jcrContentCqDistribute = false;
                jcrContentCqDistributeAtTypeHint = "rem";
                jcrContentCqName = "voluptates";
                jcrContentCqTemplate = "quasi";
                jcrContentEnabled = false;
                jcrContentJcrDescription = "repudiandae";
                jcrContentJcrLastModified = "sint";
                jcrContentJcrLastModifiedBy = "veritatis";
                jcrContentJcrMixinTypes = "itaque";
                jcrContentJcrTitle = "incidunt";
                jcrContentLogLevel = "enim";
                jcrContentNoStatusUpdate = false;
                jcrContentNoVersioning = false;
                jcrContentProtocolConnectTimeout = 93.56;
                jcrContentProtocolHTTPConnectionClosed = false;
                jcrContentProtocolHTTPExpired = "est";
                jcrContentProtocolHTTPHeaders = new String[]{{
                    add("explicabo"),
                    add("deserunt"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                jcrContentProtocolHTTPHeadersAtTypeHint = "labore";
                jcrContentProtocolHTTPMethod = "modi";
                jcrContentProtocolHTTPSRelaxed = false;
                jcrContentProtocolInterface = "qui";
                jcrContentProtocolSocketTimeout = 3978.21;
                jcrContentProtocolVersion = "cupiditate";
                jcrContentProxyHost = "quos";
                jcrContentProxyNTLMDomain = "perferendis";
                jcrContentProxyNTLMHost = "magni";
                jcrContentProxyPassword = "assumenda";
                jcrContentProxyPort = 3698.08;
                jcrContentProxyUser = "alias";
                jcrContentQueueBatchMaxSize = 1464.41;
                jcrContentQueueBatchMode = "dolorum";
                jcrContentQueueBatchWaitTime = 5696.18;
                jcrContentRetryDelay = "tempora";
                jcrContentReverseReplication = false;
                jcrContentSerializationType = "facilis";
                jcrContentSlingResourceType = "tempore";
                jcrContentSsl = "labore";
                jcrContentTransportNTLMDomain = "delectus";
                jcrContentTransportNTLMHost = "eum";
                jcrContentTransportPassword = "non";
                jcrContentTransportUri = "eligendi";
                jcrContentTransportUser = "sint";
                jcrContentTriggerDistribute = false;
                jcrContentTriggerModified = false;
                jcrContentTriggerOnOffTime = false;
                jcrContentTriggerReceive = false;
                jcrContentTriggerSpecific = false;
                jcrContentUserId = "aliquid";
                jcrPrimaryType = "provident";
            }};            

            PostAgentResponse res = sdk.sling.postAgent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizableKeystore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreRequest;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreRequestBody;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreRequestBodyCertChain;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreRequestBodyKeyStore;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreRequestBodyPk;
import org.openapis.openapi.models.operations.PostAuthorizableKeystoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "sint") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAuthorizableKeystoreRequest req = new PostAuthorizableKeystoreRequest("officia", "dolor") {{
                operation = "debitis";
                requestBody = new PostAuthorizableKeystoreRequestBody() {{
                    certChain = new PostAuthorizableKeystoreRequestBodyCertChain("a", "dolorum".getBytes());;
                    keyStore = new PostAuthorizableKeystoreRequestBodyKeyStore("in".getBytes(), "in");;
                    pk = new PostAuthorizableKeystoreRequestBodyPk("illum".getBytes(), "maiores");;
                }};;
                alias = "rerum";
                currentPassword = "dicta";
                keyPassword = "magnam";
                keyStorePass = "cumque";
                newAlias = "facere";
                newPassword = "ea";
                rePassword = "aliquid";
                removeAlias = "laborum";
            }};            

            PostAuthorizableKeystoreResponse res = sdk.sling.postAuthorizableKeystore(req);

            if (res.keystoreInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizables

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthorizablesRequest;
import org.openapis.openapi.models.operations.PostAuthorizablesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAuthorizablesRequest req = new PostAuthorizablesRequest("occaecati", "enim") {{
                createGroup = "accusamus";
                createUser = "delectus";
                profileGivenName = "quidem";
                repPassword = "provident";
            }};            

            PostAuthorizablesResponse res = sdk.sling.postAuthorizables(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigAdobeGraniteSamlAuthenticationHandler

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest;
import org.openapis.openapi.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam", "id") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigAdobeGraniteSamlAuthenticationHandlerRequest req = new PostConfigAdobeGraniteSamlAuthenticationHandlerRequest() {{
                addGroupMemberships = false;
                addGroupMembershipsAtTypeHint = "blanditiis";
                assertionConsumerServiceURL = "deleniti";
                assertionConsumerServiceURLAtTypeHint = "sapiente";
                clockTolerance = 230533L;
                clockToleranceAtTypeHint = "deserunt";
                createUser = false;
                createUserAtTypeHint = "nisi";
                defaultGroups = new String[]{{
                    add("natus"),
                    add("omnis"),
                }};
                defaultGroupsAtTypeHint = "molestiae";
                defaultRedirectUrl = "perferendis";
                defaultRedirectUrlAtTypeHint = "nihil";
                digestMethod = "magnam";
                digestMethodAtTypeHint = "distinctio";
                groupMembershipAttribute = "id";
                groupMembershipAttributeAtTypeHint = "labore";
                handleLogout = false;
                handleLogoutAtTypeHint = "labore";
                idpCertAlias = "suscipit";
                idpCertAliasAtTypeHint = "natus";
                idpHttpRedirect = false;
                idpHttpRedirectAtTypeHint = "nobis";
                idpUrl = "eum";
                idpUrlAtTypeHint = "vero";
                keyStorePassword = "aspernatur";
                keyStorePasswordAtTypeHint = "architecto";
                logoutUrl = "magnam";
                logoutUrlAtTypeHint = "et";
                nameIdFormat = "excepturi";
                nameIdFormatAtTypeHint = "ullam";
                path = new String[]{{
                    add("quos"),
                    add("sint"),
                    add("accusantium"),
                }};
                pathAtTypeHint = "mollitia";
                serviceRanking = 968962L;
                serviceRankingAtTypeHint = "mollitia";
                serviceProviderEntityId = "ad";
                serviceProviderEntityIdAtTypeHint = "eum";
                signatureMethod = "dolor";
                signatureMethodAtTypeHint = "necessitatibus";
                spPrivateKeyAlias = "odit";
                spPrivateKeyAliasAtTypeHint = "nemo";
                synchronizeAttributes = new String[]{{
                    add("iure"),
                }};
                synchronizeAttributesAtTypeHint = "doloribus";
                useEncryption = false;
                useEncryptionAtTypeHint = "debitis";
                userIDAttribute = "eius";
                userIDAttributeAtTypeHint = "maxime";
                userIntermediatePath = "deleniti";
                userIntermediatePathAtTypeHint = "facilis";
            }};            

            PostConfigAdobeGraniteSamlAuthenticationHandlerResponse res = sdk.sling.postConfigAdobeGraniteSamlAuthenticationHandler(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigApacheFelixJettyBasedHttpService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigApacheFelixJettyBasedHttpServiceRequest;
import org.openapis.openapi.models.operations.PostConfigApacheFelixJettyBasedHttpServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "architecto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigApacheFelixJettyBasedHttpServiceRequest req = new PostConfigApacheFelixJettyBasedHttpServiceRequest() {{
                orgApacheFelixHttpsClientcertificate = "architecto";
                orgApacheFelixHttpsClientcertificateAtTypeHint = "repudiandae";
                orgApacheFelixHttpsEnable = false;
                orgApacheFelixHttpsEnableAtTypeHint = "ullam";
                orgApacheFelixHttpsKeystore = "expedita";
                orgApacheFelixHttpsKeystoreKey = "nihil";
                orgApacheFelixHttpsKeystoreKeyPassword = "repellat";
                orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint = "quibusdam";
                orgApacheFelixHttpsKeystoreKeyAtTypeHint = "sed";
                orgApacheFelixHttpsKeystorePassword = "saepe";
                orgApacheFelixHttpsKeystorePasswordAtTypeHint = "pariatur";
                orgApacheFelixHttpsKeystoreAtTypeHint = "accusantium";
                orgApacheFelixHttpsNio = false;
                orgApacheFelixHttpsNioAtTypeHint = "consequuntur";
                orgApacheFelixHttpsTruststore = "praesentium";
                orgApacheFelixHttpsTruststorePassword = "natus";
                orgApacheFelixHttpsTruststorePasswordAtTypeHint = "magni";
                orgApacheFelixHttpsTruststoreAtTypeHint = "sunt";
                orgOsgiServiceHttpPortSecure = "quo";
                orgOsgiServiceHttpPortSecureAtTypeHint = "illum";
            }};            

            PostConfigApacheFelixJettyBasedHttpServiceResponse res = sdk.sling.postConfigApacheFelixJettyBasedHttpService(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigApacheHttpComponentsProxyConfiguration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigApacheHttpComponentsProxyConfigurationRequest;
import org.openapis.openapi.models.operations.PostConfigApacheHttpComponentsProxyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "maxime") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigApacheHttpComponentsProxyConfigurationRequest req = new PostConfigApacheHttpComponentsProxyConfigurationRequest() {{
                proxyEnabled = false;
                proxyEnabledAtTypeHint = "ea";
                proxyExceptions = new String[]{{
                    add("odit"),
                    add("ea"),
                    add("accusantium"),
                }};
                proxyExceptionsAtTypeHint = "ab";
                proxyHost = "maiores";
                proxyHostAtTypeHint = "quidem";
                proxyPassword = "ipsam";
                proxyPasswordAtTypeHint = "voluptate";
                proxyPort = 420075L;
                proxyPortAtTypeHint = "nam";
                proxyUser = "eaque";
                proxyUserAtTypeHint = "pariatur";
            }};            

            PostConfigApacheHttpComponentsProxyConfigurationResponse res = sdk.sling.postConfigApacheHttpComponentsProxyConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigApacheSlingDavExServlet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigApacheSlingDavExServletRequest;
import org.openapis.openapi.models.operations.PostConfigApacheSlingDavExServletResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigApacheSlingDavExServletRequest req = new PostConfigApacheSlingDavExServletRequest() {{
                alias = "perferendis";
                aliasAtTypeHint = "fugiat";
                davCreateAbsoluteUri = false;
                davCreateAbsoluteUriAtTypeHint = "amet";
            }};            

            PostConfigApacheSlingDavExServletResponse res = sdk.sling.postConfigApacheSlingDavExServlet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigApacheSlingGetServlet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigApacheSlingGetServletRequest;
import org.openapis.openapi.models.operations.PostConfigApacheSlingGetServletResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "cumque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigApacheSlingGetServletRequest req = new PostConfigApacheSlingGetServletRequest() {{
                enableHtml = false;
                enableHtmlAtTypeHint = "corporis";
                enableTxt = false;
                enableTxtAtTypeHint = "hic";
                enableXml = false;
                enableXmlAtTypeHint = "libero";
                jsonMaximumresults = "nobis";
                jsonMaximumresultsAtTypeHint = "dolores";
            }};            

            PostConfigApacheSlingGetServletResponse res = sdk.sling.postConfigApacheSlingGetServlet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigApacheSlingReferrerFilter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigApacheSlingReferrerFilterRequest;
import org.openapis.openapi.models.operations.PostConfigApacheSlingReferrerFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigApacheSlingReferrerFilterRequest req = new PostConfigApacheSlingReferrerFilterRequest() {{
                allowEmpty = false;
                allowEmptyAtTypeHint = "dignissimos";
                allowHosts = "eaque";
                allowHostsRegexp = "quis";
                allowHostsRegexpAtTypeHint = "nesciunt";
                allowHostsAtTypeHint = "eos";
                filterMethods = "perferendis";
                filterMethodsAtTypeHint = "dolores";
            }};            

            PostConfigApacheSlingReferrerFilterResponse res = sdk.sling.postConfigApacheSlingReferrerFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigProperty

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigPropertyRequest;
import org.openapis.openapi.models.operations.PostConfigPropertyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "quam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigPropertyRequest req = new PostConfigPropertyRequest("dolor");            

            PostConfigPropertyResponse res = sdk.sling.postConfigProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNodeRequest;
import org.openapis.openapi.models.operations.PostNodeRequestBody;
import org.openapis.openapi.models.operations.PostNodeRequestBodyFile;
import org.openapis.openapi.models.operations.PostNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "nostrum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostNodeRequest req = new PostNodeRequest("hic", "recusandae") {{
                operation = "omnis";
                requestBody = new PostNodeRequestBody() {{
                    file = new PostNodeRequestBodyFile("facilis".getBytes(), "perspiciatis");;
                }};;
                deleteAuthorizable = "voluptatem";
            }};            

            PostNodeResponse res = sdk.sling.postNode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNodeRw

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNodeRwRequest;
import org.openapis.openapi.models.operations.PostNodeRwResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "consequuntur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostNodeRwRequest req = new PostNodeRwRequest("blanditiis", "error") {{
                addMembers = "eaque";
            }};            

            PostNodeRwResponse res = sdk.sling.postNodeRw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPath

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPathRequest;
import org.openapis.openapi.models.operations.PostPathResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "rerum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPathRequest req = new PostPathRequest("adipisci", "asperiores", "earum");            

            PostPathResponse res = sdk.sling.postPath(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQueryRequest;
import org.openapis.openapi.models.operations.PostQueryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "iste") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostQueryRequest req = new PostQueryRequest("dolorum", "deleniti", 8642.82, "provident");            

            PostQueryResponse res = sdk.sling.postQuery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTreeActivation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTreeActivationRequest;
import org.openapis.openapi.models.operations.PostTreeActivationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "libero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostTreeActivationRequest req = new PostTreeActivationRequest("delectus", false, false, "quaerat");            

            PostTreeActivationResponse res = sdk.sling.postTreeActivation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruststore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruststoreRequest;
import org.openapis.openapi.models.operations.PostTruststoreRequestBody;
import org.openapis.openapi.models.operations.PostTruststoreRequestBodyCertificate;
import org.openapis.openapi.models.operations.PostTruststoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "aliquid") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostTruststoreRequest req = new PostTruststoreRequest() {{
                operation = "dolorem";
                requestBody = new PostTruststoreRequestBody() {{
                    certificate = new PostTruststoreRequestBodyCertificate("dolorem", "dolor".getBytes());;
                }};;
                keyStoreType = "qui";
                newPassword = "ipsum";
                rePassword = "hic";
                removeAlias = "excepturi";
            }};            

            PostTruststoreResponse res = sdk.sling.postTruststore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruststorePkcs12

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruststorePkcs12RequestBody;
import org.openapis.openapi.models.operations.PostTruststorePkcs12RequestBodyTruststoreP12;
import org.openapis.openapi.models.operations.PostTruststorePkcs12Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostTruststorePkcs12RequestBody req = new PostTruststorePkcs12RequestBody() {{
                truststoreP12 = new PostTruststorePkcs12RequestBodyTruststoreP12("dignissimos".getBytes(), "reiciendis");;
            }};            

            PostTruststorePkcs12Response res = sdk.sling.postTruststorePkcs12(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
