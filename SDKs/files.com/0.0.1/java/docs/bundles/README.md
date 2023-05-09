# bundles

## Overview

Operations about bundles

### Available Operations

* [deleteBundlesId](#deletebundlesid) - Delete Bundle
* [getBundles](#getbundles) - List Bundles
* [getBundlesId](#getbundlesid) - Show Bundle
* [patchBundlesId](#patchbundlesid) - Update Bundle
* [postBundles](#postbundles) - Create Bundle
* [postBundlesIdShare](#postbundlesidshare) - Send email(s) with a link to bundle

## deleteBundlesId

Delete Bundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBundlesIdRequest;
import org.openapis.openapi.models.operations.DeleteBundlesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBundlesIdRequest req = new DeleteBundlesIdRequest(214880);            

            DeleteBundlesIdResponse res = sdk.bundles.deleteBundlesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundles

List Bundles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundlesRequest;
import org.openapis.openapi.models.operations.GetBundlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundlesRequest req = new GetBundlesRequest() {{
                cursor = "incidunt";
                filter = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "maxime");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("soluta", "dicta");
                    put("laborum", "totam");
                    put("incidunt", "aspernatur");
                    put("dolores", "distinctio");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "quam");
                    put("molestias", "temporibus");
                    put("qui", "neque");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("magni", "odio");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("ullam", "nam");
                }};
                perPage = 940432;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("cumque", "soluta");
                }};
                userId = 748664;
            }};            

            GetBundlesResponse res = sdk.bundles.getBundles(req);

            if (res.bundleEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundlesId

Show Bundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundlesIdRequest;
import org.openapis.openapi.models.operations.GetBundlesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundlesIdRequest req = new GetBundlesIdRequest(92596);            

            GetBundlesIdResponse res = sdk.bundles.getBundlesId(req);

            if (res.bundleEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBundlesId

Update Bundle

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBundlesIdRequest;
import org.openapis.openapi.models.operations.PatchBundlesIdRequestBody;
import org.openapis.openapi.models.operations.PatchBundlesIdRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.PatchBundlesIdRequestBodyWatermarkAttachmentFile;
import org.openapis.openapi.models.operations.PatchBundlesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchBundlesIdRequest req = new PatchBundlesIdRequest(903720) {{
                requestBody = new PatchBundlesIdRequestBody() {{
                    clickwrapId = 1;
                    code = "abc123";
                    description = "The public description of the bundle.";
                    dontSeparateSubmissionsByFolder = true;
                    expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                    formFieldSetId = 217450;
                    inboxId = 1;
                    maxUses = 1;
                    note = "The internal note on the bundle.";
                    password = "Password";
                    pathTemplate = "{{name}}_{{ip}}";
                    paths = new String[]{{
                        add("nobis"),
                    }};
                    permissions = PatchBundlesIdRequestBodyPermissionsEnum.READ;
                    previewOnly = false;
                    requireRegistration = false;
                    requireShareRecipient = false;
                    sendEmailReceiptToUploader = true;
                    skipCompany = true;
                    skipEmail = true;
                    skipName = true;
                    watermarkAttachmentDelete = false;
                    watermarkAttachmentFile = new PatchBundlesIdRequestBodyWatermarkAttachmentFile("quos".getBytes(), "tempore");;
                }};;
            }};            

            PatchBundlesIdResponse res = sdk.bundles.patchBundlesId(req);

            if (res.bundleEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBundles

Create Bundle

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBundlesRequestBody;
import org.openapis.openapi.models.operations.PostBundlesRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.PostBundlesRequestBodyWatermarkAttachmentFile;
import org.openapis.openapi.models.operations.PostBundlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBundlesRequestBody req = new PostBundlesRequestBody(                new String[]{{
                                add("aperiam"),
                                add("delectus"),
                                add("dolorem"),
                            }}) {{
                clickwrapId = 1;
                code = "abc123";
                description = "The public description of the bundle.";
                dontSeparateSubmissionsByFolder = true;
                expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                formFieldSetId = 292147;
                inboxId = 1;
                maxUses = 1;
                note = "The internal note on the bundle.";
                password = "Password";
                pathTemplate = "{{name}}_{{ip}}";
                permissions = PostBundlesRequestBodyPermissionsEnum.READ;
                previewOnly = false;
                requireRegistration = false;
                requireShareRecipient = false;
                sendEmailReceiptToUploader = true;
                skipCompany = true;
                skipEmail = true;
                skipName = true;
                userId = 286915;
                watermarkAttachmentFile = new PostBundlesRequestBodyWatermarkAttachmentFile("adipisci".getBytes(), "dolorum");;
            }};            

            PostBundlesResponse res = sdk.bundles.postBundles(req);

            if (res.bundleEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBundlesIdShare

Send email(s) with a link to bundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBundlesIdShareRequest;
import org.openapis.openapi.models.operations.PostBundlesIdShareRequestBody;
import org.openapis.openapi.models.operations.PostBundlesIdShareResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBundlesIdShareRequest req = new PostBundlesIdShareRequest(100294) {{
                requestBody = new PostBundlesIdShareRequestBody() {{
                    note = "Just a note.";
                    recipients = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("quas", "itaque");
                        }}),
                    }};
                    to = new String[]{{
                        add("est"),
                    }};
                }};;
            }};            

            PostBundlesIdShareResponse res = sdk.bundles.postBundlesIdShare(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
