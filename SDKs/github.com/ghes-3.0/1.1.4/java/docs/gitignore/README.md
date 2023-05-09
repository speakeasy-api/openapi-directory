# gitignore

## Overview

View gitignore templates

### Available Operations

* [gitignoreGetAllTemplates](#gitignoregetalltemplates) - Get all gitignore templates
* [gitignoreGetTemplate](#gitignoregettemplate) - Get a gitignore template

## gitignoreGetAllTemplates

List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-for-the-authenticated-user).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/gitignore#get-all-gitignore-templates>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitignoreGetAllTemplatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitignoreGetAllTemplatesResponse res = sdk.gitignore.gitignoreGetAllTemplates();

            if (res.gitignoreGetAllTemplates200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitignoreGetTemplate

The API also allows fetching the source of a single template.
Use the raw [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) to get the raw contents.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/gitignore#get-a-gitignore-template>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitignoreGetTemplateRequest;
import org.openapis.openapi.models.operations.GitignoreGetTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitignoreGetTemplateRequest req = new GitignoreGetTemplateRequest("illo");            

            GitignoreGetTemplateResponse res = sdk.gitignore.gitignoreGetTemplate(req);

            if (res.gitignoreTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
