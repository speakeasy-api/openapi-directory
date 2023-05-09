# SDK

## Overview

An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mediastore/>
### Available Operations

* [deleteObject](#deleteobject) - Deletes an object at the specified path.
* [describeObject](#describeobject) - Gets the headers for an object at the specified path.
* [getObject](#getobject) - Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
* [listItems](#listitems) - Provides a list of metadata entries about folders and objects in the specified folder.
* [putObject](#putobject) - Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

## deleteObject

Deletes an object at the specified path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteObjectRequest;
import org.openapis.openapi.models.operations.DeleteObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObjectRequest req = new DeleteObjectRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteObjectResponse res = sdk.sdk.deleteObject(req);

            if (res.deleteObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeObject

Gets the headers for an object at the specified path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeObjectRequest;
import org.openapis.openapi.models.operations.DescribeObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeObjectRequest req = new DescribeObjectRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeObjectResponse res = sdk.sdk.describeObject(req);

            if (res.describeObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObject

Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObjectRequest;
import org.openapis.openapi.models.operations.GetObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetObjectRequest req = new GetObjectRequest("ab") {{
                range = "quis";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            GetObjectResponse res = sdk.sdk.getObject(req);

            if (res.getObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listItems

Provides a list of metadata entries about folders and objects in the specified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListItemsRequest;
import org.openapis.openapi.models.operations.ListItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListItemsRequest req = new ListItemsRequest() {{
                maxResults = 870013L;
                nextToken = "at";
                path = "maiores";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListItemsResponse res = sdk.sdk.listItems(req);

            if (res.listItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putObject

Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutObjectRequest;
import org.openapis.openapi.models.operations.PutObjectRequestBody;
import org.openapis.openapi.models.operations.PutObjectResponse;
import org.openapis.openapi.models.operations.PutObjectXAmzStorageClassEnum;
import org.openapis.openapi.models.operations.PutObjectXAmzUploadAvailabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutObjectRequest req = new PutObjectRequest("nam",                 new PutObjectRequestBody("officia");) {{
                cacheControl = "occaecati";
                contentType = "fugit";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
                xAmzStorageClass = PutObjectXAmzStorageClassEnum.TEMPORAL;
                xAmzUploadAvailability = PutObjectXAmzUploadAvailabilityEnum.STANDARD;
            }};            

            PutObjectResponse res = sdk.sdk.putObject(req);

            if (res.putObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
