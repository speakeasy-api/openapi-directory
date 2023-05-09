# attachments

## Overview

An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.

### Available Operations

* [createAttachmentForObject](#createattachmentforobject) - Upload an attachment
* [deleteAttachment](#deleteattachment) - Delete an attachment
* [getAttachment](#getattachment) - Get an attachment
* [getAttachmentsForObject](#getattachmentsforobject) - Get attachments from an object

## createAttachmentForObject

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectRequest;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectResponse;
import org.openapis.openapi.models.shared.AttachmentRequest;
import org.openapis.openapi.models.shared.AttachmentRequestFile;
import org.openapis.openapi.models.shared.AttachmentRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateAttachmentForObjectRequest req = new CreateAttachmentForObjectRequest(                new AttachmentRequest() {{
                                connectToApp = false;
                                file = new AttachmentRequestFile("magnam".getBytes(), "debitis");;
                                name = "Lucia Goldner";
                                parent = "minus";
                                resourceSubtype = AttachmentRequestResourceSubtypeEnum.EXTERNAL;
                                url = "placeat";
                            }};) {{
                optFields = new String[]{{
                    add("iusto"),
                    add("excepturi"),
                    add("nisi"),
                }};
                optPretty = false;
            }};            

            CreateAttachmentForObjectResponse res = sdk.attachments.createAttachmentForObject(req);

            if (res.createAttachmentForObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAttachment

Deletes a specific, existing attachment.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttachmentRequest;
import org.openapis.openapi.models.operations.DeleteAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteAttachmentRequest req = new DeleteAttachmentRequest("recusandae") {{
                optFields = new String[]{{
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                    add("deserunt"),
                }};
                optPretty = false;
            }};            

            DeleteAttachmentResponse res = sdk.attachments.deleteAttachment(req);

            if (res.deleteAttachment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachment

Get the full record for a single attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttachmentRequest;
import org.openapis.openapi.models.operations.GetAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAttachmentRequest req = new GetAttachmentRequest("perferendis") {{
                optFields = new String[]{{
                    add("repellendus"),
                    add("sapiente"),
                }};
                optPretty = false;
            }};            

            GetAttachmentResponse res = sdk.attachments.getAttachment(req);

            if (res.getAttachment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachmentsForObject

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttachmentsForObjectRequest;
import org.openapis.openapi.models.operations.GetAttachmentsForObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAttachmentsForObjectRequest req = new GetAttachmentsForObjectRequest("quo") {{
                limit = 140350L;
                offset = "at";
                optFields = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                optPretty = false;
            }};            

            GetAttachmentsForObjectResponse res = sdk.attachments.getAttachmentsForObject(req);

            if (res.getAttachmentsForObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
