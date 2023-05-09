# firmware

### Available Operations

* [getAccounts](#getaccounts) - Get default accounts and password hashes of a firmware
* [getConfigIssues](#getconfigissues) - Get default OS configuration issues of a device firmware
* [getExpiredCerts](#getexpiredcerts) - Get expired digital certificates embedded in a device firmware
* [getPrivateKeys](#getprivatekeys) - Get private crypto keys embedded in a device firmware
* [getRisk](#getrisk) - Get iot device firmware risk analysis
* [getWeakCerts](#getweakcerts) - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* [getWeakKeys](#getweakkeys) - Get weak crypto keys with short length

## getAccounts

Get default accounts and password hashes of a firmware

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.operations.GetAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsRequest req = new GetAccountsRequest("af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175");            

            GetAccountsResponse res = sdk.firmware.getAccounts(req, new GetAccountsSecurity("excepturi") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.defaultAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigIssues

Get default OS configuration issues of a device firmware

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigIssuesRequest;
import org.openapis.openapi.models.operations.GetConfigIssuesResponse;
import org.openapis.openapi.models.operations.GetConfigIssuesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfigIssuesRequest req = new GetConfigIssuesRequest("aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c");            

            GetConfigIssuesResponse res = sdk.firmware.getConfigIssues(req, new GetConfigIssuesSecurity("nisi") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.configIssues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExpiredCerts

Get expired digital certificates embedded in a device firmware

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExpiredCertsRequest;
import org.openapis.openapi.models.operations.GetExpiredCertsResponse;
import org.openapis.openapi.models.operations.GetExpiredCertsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExpiredCertsRequest req = new GetExpiredCertsRequest("ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e");            

            GetExpiredCertsResponse res = sdk.firmware.getExpiredCerts(req, new GetExpiredCertsSecurity("recusandae") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.expiredCerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrivateKeys

Get private crypto keys embedded in a device firmware

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrivateKeysRequest;
import org.openapis.openapi.models.operations.GetPrivateKeysResponse;
import org.openapis.openapi.models.operations.GetPrivateKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrivateKeysRequest req = new GetPrivateKeysRequest("90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b");            

            GetPrivateKeysResponse res = sdk.firmware.getPrivateKeys(req, new GetPrivateKeysSecurity("temporibus") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.cryptoKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRisk

Get iot device firmware risk analysis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRiskRequest;
import org.openapis.openapi.models.operations.GetRiskResponse;
import org.openapis.openapi.models.operations.GetRiskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRiskRequest req = new GetRiskRequest("af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175");            

            GetRiskResponse res = sdk.firmware.getRisk(req, new GetRiskSecurity("ab") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.firmwareRisk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWeakCerts

Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWeakCertsRequest;
import org.openapis.openapi.models.operations.GetWeakCertsResponse;
import org.openapis.openapi.models.operations.GetWeakCertsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWeakCertsRequest req = new GetWeakCertsRequest("52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c");            

            GetWeakCertsResponse res = sdk.firmware.getWeakCerts(req, new GetWeakCertsSecurity("quis") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.weakCerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWeakKeys

Get weak crypto keys with short length

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWeakKeysRequest;
import org.openapis.openapi.models.operations.GetWeakKeysResponse;
import org.openapis.openapi.models.operations.GetWeakKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWeakKeysRequest req = new GetWeakKeysRequest("852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e");            

            GetWeakKeysResponse res = sdk.firmware.getWeakKeys(req, new GetWeakKeysSecurity("veritatis") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.cryptoKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
