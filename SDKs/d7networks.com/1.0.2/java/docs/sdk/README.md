# SDK

## Overview

D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.

### Available Operations

* [balanceGet](#balanceget) - Balance
* [sendPost](#sendpost) - SendSMS
* [sendbatchPost](#sendbatchpost) - Bulk SMS

## balanceGet

Check account balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BalanceGetResponse;
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

            BalanceGetResponse res = sdk.sdk.balanceGet();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendPost

Send SMS  to recipients using D7 SMS Gateway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendPostRequest;
import org.openapis.openapi.models.operations.SendPostResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendSMSRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SendPostRequest req = new SendPostRequest("corrupti", "illum",                 new SendSMSRequest("vel", "error", 645894L););            

            SendPostResponse res = sdk.sdk.sendPost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendbatchPost

Send Bulk SMS  to multiple recipients using D7 SMS Gateway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendbatchPostRequest;
import org.openapis.openapi.models.operations.SendbatchPostResponse;
import org.openapis.openapi.models.shared.BulkSMSRequest;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SendbatchPostRequest req = new SendbatchPostRequest("magnam",                 new BulkSMSRequest(                new org.openapis.openapi.models.shared.Message[]{{
                                                add(new Message("minus", "placeat",                 new String[]{{
                                                                    add("iusto"),
                                                                    add("excepturi"),
                                                                    add("nisi"),
                                                                }}) {{
                                                    content = "ipsa";
                                                    from = "delectus";
                                                    to = new String[]{{
                                                        add("suscipit"),
                                                        add("molestiae"),
                                                    }};
                                                }}),
                                                add(new Message("veritatis", "deserunt",                 new String[]{{
                                                                    add("ipsam"),
                                                                }}) {{
                                                    content = "recusandae";
                                                    from = "temporibus";
                                                    to = new String[]{{
                                                        add("quis"),
                                                    }};
                                                }}),
                                                add(new Message("molestiae", "quod",                 new String[]{{
                                                                    add("esse"),
                                                                    add("totam"),
                                                                    add("porro"),
                                                                    add("dolorum"),
                                                                }}) {{
                                                    content = "repellendus";
                                                    from = "sapiente";
                                                    to = new String[]{{
                                                        add("odit"),
                                                        add("at"),
                                                        add("at"),
                                                        add("maiores"),
                                                    }};
                                                }}),
                                                add(new Message("hic", "optio",                 new String[]{{
                                                                    add("beatae"),
                                                                    add("commodi"),
                                                                    add("molestiae"),
                                                                }}) {{
                                                    content = "dicta";
                                                    from = "nam";
                                                    to = new String[]{{
                                                        add("occaecati"),
                                                        add("fugit"),
                                                        add("deleniti"),
                                                    }};
                                                }}),
                                            }});, "modi");            

            SendbatchPostResponse res = sdk.sdk.sendbatchPost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
