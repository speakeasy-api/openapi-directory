# mailZones

## Overview

Manage your mail zones.

### Available Operations

* [configureAlias](#configurealias) - Configure a alias
* [configureAntiSpam](#configureantispam) - Configure anti-spam for mail zone
* [configureSmtpDomain](#configuresmtpdomain) - Configure an extra smtp domain
* [createAlias](#createalias) - Create a new alias
* [createCatchAll](#createcatchall) - Create a catch-all on the mail zone
* [createSmtpDomain](#createsmtpdomain) - Create an extra smtp domain
* [deleteAlias](#deletealias) - Delete a alias
* [deleteCatchAll](#deletecatchall) - Delete a catch-all on the mail zone
* [deleteSmtpDomain](#deletesmtpdomain) - Delete an extra smtp domain
* [getMailZone](#getmailzone) - Get the mail zone.

## configureAlias

Configure a alias

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureAliasRequest;
import org.openapis.openapi.models.operations.ConfigureAliasResponse;
import org.openapis.openapi.models.shared.UpdateAliasRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureAliasRequest req = new ConfigureAliasRequest("cum", "voluptate", "dignissimos", "reiciendis") {{
                updateAliasRequest = new UpdateAliasRequest() {{
                    destinations = new String[]{{
                        add("dolorum"),
                    }};
                }};;
            }};            

            ConfigureAliasResponse res = sdk.mailZones.configureAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureAntiSpam

Configure anti-spam for mail zone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureAntiSpamRequest;
import org.openapis.openapi.models.operations.ConfigureAntiSpamResponse;
import org.openapis.openapi.models.shared.AntiSpamTypesEnum;
import org.openapis.openapi.models.shared.UpdateAntiSpamRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureAntiSpamRequest req = new ConfigureAntiSpamRequest("numquam", "veritatis") {{
                updateAntiSpamRequest = new UpdateAntiSpamRequest() {{
                    type = AntiSpamTypesEnum.NONE;
                }};;
            }};            

            ConfigureAntiSpamResponse res = sdk.mailZones.configureAntiSpam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureSmtpDomain

Configure an extra smtp domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureSmtpDomainRequest;
import org.openapis.openapi.models.operations.ConfigureSmtpDomainResponse;
import org.openapis.openapi.models.shared.UpdateSmtpDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureSmtpDomainRequest req = new ConfigureSmtpDomainRequest("ipsa", "iure", "odio") {{
                updateSmtpDomainRequest = new UpdateSmtpDomainRequest() {{
                    enabled = false;
                }};;
            }};            

            ConfigureSmtpDomainResponse res = sdk.mailZones.configureSmtpDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlias

Create a new alias

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.shared.CreateAliasRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest("quaerat", "accusamus") {{
                createAliasRequest = new CreateAliasRequest() {{
                    destinations = new String[]{{
                        add("voluptatibus"),
                        add("voluptas"),
                        add("natus"),
                    }};
                    emailAddress = "eos";
                }};;
            }};            

            CreateAliasResponse res = sdk.mailZones.createAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCatchAll

Create a catch-all on the mail zone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCatchAllRequest;
import org.openapis.openapi.models.operations.CreateCatchAllResponse;
import org.openapis.openapi.models.shared.CreateCatchAllRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCatchAllRequest req = new CreateCatchAllRequest("atque", "sit") {{
                createCatchAllRequest = new CreateCatchAllRequest() {{
                    emailAddress = "fugiat";
                }};;
            }};            

            CreateCatchAllResponse res = sdk.mailZones.createCatchAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSmtpDomain

Create an extra smtp domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSmtpDomainRequest;
import org.openapis.openapi.models.operations.CreateSmtpDomainResponse;
import org.openapis.openapi.models.shared.CreateSmtpDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSmtpDomainRequest req = new CreateSmtpDomainRequest("ab", "soluta") {{
                createSmtpDomainRequest = new CreateSmtpDomainRequest() {{
                    hostname = "rash-jeans.info";
                }};;
            }};            

            CreateSmtpDomainResponse res = sdk.mailZones.createSmtpDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlias

Delete a alias

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAliasRequest;
import org.openapis.openapi.models.operations.DeleteAliasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAliasRequest req = new DeleteAliasRequest("dolorum", "deleniti", "omnis", "necessitatibus");            

            DeleteAliasResponse res = sdk.mailZones.deleteAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCatchAll

Delete a catch-all on the mail zone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCatchAllRequest;
import org.openapis.openapi.models.operations.DeleteCatchAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCatchAllRequest req = new DeleteCatchAllRequest("distinctio", "asperiores", "nihil", "ipsum");            

            DeleteCatchAllResponse res = sdk.mailZones.deleteCatchAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSmtpDomain

Delete an extra smtp domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSmtpDomainRequest;
import org.openapis.openapi.models.operations.DeleteSmtpDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSmtpDomainRequest req = new DeleteSmtpDomainRequest("voluptate", "id", "saepe");            

            DeleteSmtpDomainResponse res = sdk.mailZones.deleteSmtpDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMailZone

Get the mail zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMailZoneRequest;
import org.openapis.openapi.models.operations.GetMailZoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMailZoneRequest req = new GetMailZoneRequest("eius", "aspernatur");            

            GetMailZoneResponse res = sdk.mailZones.getMailZone(req);

            if (res.mailZone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
