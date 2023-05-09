# miscellaneous

### Available Operations

* [getNodeInfo](#getnodeinfo) - Returns the nodeinfo of the Gitea application
* [getSigningKey](#getsigningkey) - Get default signing-key.gpg
* [getVersion](#getversion) - Returns the version of the Gitea application
* [renderMarkdown](#rendermarkdown) - Render a markdown document as HTML
* [renderMarkdownRaw](#rendermarkdownraw) - Render raw markdown as HTML
* [renderMarkup](#rendermarkup) - Render a markup document as HTML

## getNodeInfo

Returns the nodeinfo of the Gitea application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNodeInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNodeInfoResponse res = sdk.miscellaneous.getNodeInfo();

            if (res.nodeInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSigningKey

Get default signing-key.gpg

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSigningKeyResponse res = sdk.miscellaneous.getSigningKey();

            if (res.getSigningKey200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersion

Returns the version of the Gitea application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVersionResponse res = sdk.miscellaneous.getVersion();

            if (res.serverVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renderMarkdown

Render a markdown document as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderMarkdownResponse;
import org.openapis.openapi.models.shared.MarkdownOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MarkdownOption req = new MarkdownOption() {{
                context = "quam";
                mode = "molestias";
                text = "temporibus";
                wiki = false;
            }};            

            RenderMarkdownResponse res = sdk.miscellaneous.renderMarkdown(req);

            if (res.renderMarkdown200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renderMarkdownRaw

Render raw markdown as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderMarkdownRawResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "qui"            

            RenderMarkdownRawResponse res = sdk.miscellaneous.renderMarkdownRaw(req);

            if (res.renderMarkdownRaw200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renderMarkup

Render a markup document as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderMarkupResponse;
import org.openapis.openapi.models.shared.MarkupOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MarkupOption req = new MarkupOption() {{
                context = "neque";
                filePath = "fugit";
                mode = "magni";
                text = "odio";
                wiki = false;
            }};            

            RenderMarkupResponse res = sdk.miscellaneous.renderMarkup(req);

            if (res.renderMarkup200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
