# sessions

## Overview

A session represents an authorized session for a consumer. A session is a JWT token that is valid for a short time (1h by default). Use this session token to open Hosted Vault or Vault JS for a consumer.

### Available Operations

* [sessionsCreate](#sessionscreate) - Create Session

## sessionsCreate

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
URL to allow temporary access to manage their integrations and settings.

Note: This is a short lived token that will expire after 1 hour (TTL: 3600).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionsCreateRequest;
import org.openapis.openapi.models.operations.SessionsCreateResponse;
import org.openapis.openapi.models.operations.SessionsCreateSecurity;
import org.openapis.openapi.models.shared.ConsumerMetadata;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Session;
import org.openapis.openapi.models.shared.SessionSettings;
import org.openapis.openapi.models.shared.SessionSettingsAllowActionsEnum;
import org.openapis.openapi.models.shared.SessionTheme;
import org.openapis.openapi.models.shared.UnifiedApiIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionsCreateRequest req = new SessionsCreateRequest("excepturi", "cum") {{
                session = new Session() {{
                    consumerMetadata = new ConsumerMetadata() {{
                        accountName = "SpaceX";
                        email = "elon@musk.com";
                        image = "https://www.spacex.com/static/images/share.jpg";
                        userName = "Elon Musk";
                    }};;
                    customConsumerSettings = new java.util.HashMap<String, Object>() {{
                        put("dignissimos", "reiciendis");
                        put("amet", "dolorum");
                    }};
                    redirectUri = "https://mysaas.com/dashboard";
                    settings = new SessionSettings() {{
                        allowActions = new org.openapis.openapi.models.shared.SessionSettingsAllowActionsEnum[]{{
                            add(SessionSettingsAllowActionsEnum.DELETE),
                            add(SessionSettingsAllowActionsEnum.DELETE),
                        }};
                        autoRedirect = false;
                        hideGuides = false;
                        hideResourceSettings = false;
                        isolationMode = false;
                        sandboxMode = false;
                        sessionLength = "30m";
                        showLogs = false;
                        showSidebar = false;
                        showSuggestions = false;
                        unifiedApis = new org.openapis.openapi.models.shared.UnifiedApiIdEnum[]{{
                            add(UnifiedApiIdEnum.CRM),
                        }};
                    }};;
                    theme = new SessionTheme() {{
                        favicon = "https://res.cloudinary.com/apideck/icons/intercom";
                        logo = "https://res.cloudinary.com/apideck/icons/intercom";
                        primaryColor = "#286efa";
                        privacyUrl = "https://compliance.apideck.com/privacy-policy";
                        sidepanelBackgroundColor = "#286efa";
                        sidepanelTextColor = "#FFFFFF";
                        termsUrl = "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e";
                        vaultName = "Intercom";
                    }};;
                }};;
            }};            

            SessionsCreateResponse res = sdk.sessions.sessionsCreate(req, new SessionsCreateSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
