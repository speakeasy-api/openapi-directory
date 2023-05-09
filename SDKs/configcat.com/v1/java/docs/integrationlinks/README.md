# integrationLinks

### Available Operations

* [addOrUpdateIntegrationLink](#addorupdateintegrationlink) - Add or update Integration link
* [deleteIntegrationLink](#deleteintegrationlink) - Delete Integration link
* [getIntegrationLinkDetails](#getintegrationlinkdetails) - Get Integration link
* [jiraAddOrUpdateIntegrationLink](#jiraaddorupdateintegrationlink)
* [postV1JiraConnect](#postv1jiraconnect)

## addOrUpdateIntegrationLink

Add or update Integration link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateIntegrationLinkRequest;
import org.openapis.openapi.models.operations.AddOrUpdateIntegrationLinkResponse;
import org.openapis.openapi.models.shared.AddOrUpdateIntegrationLinkModel;
import org.openapis.openapi.models.shared.IntegrationLinkTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem", "ad") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddOrUpdateIntegrationLinkRequest req = new AddOrUpdateIntegrationLinkRequest("03d8bb31-180f-4739-ae9e-057eb809e281", IntegrationLinkTypeEnum.TRELLO, "velit", 224413) {{
                addOrUpdateIntegrationLinkModel = new AddOrUpdateIntegrationLinkModel() {{
                    description = "sunt";
                    url = "a";
                }};;
            }};            

            AddOrUpdateIntegrationLinkResponse res = sdk.integrationLinks.addOrUpdateIntegrationLink(req);

            if (res.integrationLinkModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIntegrationLink

Delete Integration link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIntegrationLinkRequest;
import org.openapis.openapi.models.operations.DeleteIntegrationLinkResponse;
import org.openapis.openapi.models.shared.IntegrationLinkTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteIntegrationLinkRequest req = new DeleteIntegrationLinkRequest("81d4c700-b607-4f3c-93c7-3b9da3f2ceda", IntegrationLinkTypeEnum.JIRA, "vero", 185348);            

            DeleteIntegrationLinkResponse res = sdk.integrationLinks.deleteIntegrationLink(req);

            if (res.deleteIntegrationLinkModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrationLinkDetails

Get Integration link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationLinkDetailsRequest;
import org.openapis.openapi.models.operations.GetIntegrationLinkDetailsResponse;
import org.openapis.openapi.models.shared.IntegrationLinkTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur", "repellat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetIntegrationLinkDetailsRequest req = new GetIntegrationLinkDetailsRequest(IntegrationLinkTypeEnum.TRELLO, "explicabo");            

            GetIntegrationLinkDetailsResponse res = sdk.integrationLinks.getIntegrationLinkDetails(req);

            if (res.integrationLinkDetailsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jiraAddOrUpdateIntegrationLink

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JiraAddOrUpdateIntegrationLinkRequest;
import org.openapis.openapi.models.operations.JiraAddOrUpdateIntegrationLinkResponse;
import org.openapis.openapi.models.shared.AddOrUpdateJiraIntegrationLinkModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem", "nihil") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            JiraAddOrUpdateIntegrationLinkRequest req = new JiraAddOrUpdateIntegrationLinkRequest("411faf4b-7544-4e47-ae80-2857a5b40463", "mollitia", 492632) {{
                addOrUpdateJiraIntegrationLinkModel = new AddOrUpdateJiraIntegrationLinkModel("fugiat", "nostrum") {{
                    description = "molestiae";
                    url = "veniam";
                }};;
            }};            

            JiraAddOrUpdateIntegrationLinkResponse res = sdk.integrationLinks.jiraAddOrUpdateIntegrationLink(req);

            if (res.integrationLinkModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1JiraConnect

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1JiraConnectResponse;
import org.openapis.openapi.models.shared.ConnectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "ab") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ConnectRequest req = new ConnectRequest("modi", "aut");            

            PostV1JiraConnectResponse res = sdk.integrationLinks.postV1JiraConnect(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
