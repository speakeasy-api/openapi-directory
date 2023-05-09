# SDK

## Overview

Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.

Amazon Web Services documentation
<https://docs.aws.amazon.com/healthlake/>
### Available Operations

* [createFHIRDatastore](#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [deleteFHIRDatastore](#deletefhirdatastore) - Deletes a Data Store. 
* [describeFHIRDatastore](#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [describeFHIRExportJob](#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [describeFHIRImportJob](#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [listFHIRDatastores](#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [listFHIRExportJobs](#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [listFHIRImportJobs](#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [startFHIRExportJob](#startfhirexportjob) - Begins a FHIR export job.
* [startFHIRImportJob](#startfhirimportjob) - Begins a FHIR Import job.
* [tagResource](#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [untagResource](#untagresource) -  Removes tags from a Data Store. 

## createFHIRDatastore

Creates a Data Store that can ingest and export FHIR formatted data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreResponse;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.CmkTypeEnum;
import org.openapis.openapi.models.shared.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.FHIRVersionEnum;
import org.openapis.openapi.models.shared.KmsEncryptionConfig;
import org.openapis.openapi.models.shared.PreloadDataConfig;
import org.openapis.openapi.models.shared.PreloadDataTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SseConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFHIRDatastoreRequest req = new CreateFHIRDatastoreRequest(                new CreateFHIRDatastoreRequest(FHIRVersionEnum.R4) {{
                                clientToken = "veritatis";
                                datastoreName = "deserunt";
                                preloadDataConfig = new PreloadDataConfig(PreloadDataTypeEnum.SYNTHEA);;
                                sseConfiguration = new SseConfiguration(                new KmsEncryptionConfig(CmkTypeEnum.CUSTOMER_MANAGED_KMS_KEY) {{
                                                    kmsKeyId = "ipsam";
                                                }};);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("odit", "at") {{
                                        key = "sapiente";
                                        value = "quo";
                                    }}),
                                    add(new Tag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, CreateFHIRDatastoreXAmzTargetEnum.HEALTH_LAKE_CREATE_FHIR_DATASTORE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateFHIRDatastoreResponse res = sdk.sdk.createFHIRDatastore(req);

            if (res.createFHIRDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFHIRDatastore

Deletes a Data Store. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.DeleteFHIRDatastoreResponse;
import org.openapis.openapi.models.operations.DeleteFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFHIRDatastoreRequest req = new DeleteFHIRDatastoreRequest(                new DeleteFHIRDatastoreRequest() {{
                                datastoreId = "molestiae";
                            }};, DeleteFHIRDatastoreXAmzTargetEnum.HEALTH_LAKE_DELETE_FHIR_DATASTORE) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteFHIRDatastoreResponse res = sdk.sdk.deleteFHIRDatastore(req);

            if (res.deleteFHIRDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFHIRDatastore

Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.DescribeFHIRDatastoreResponse;
import org.openapis.openapi.models.operations.DescribeFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFHIRDatastoreRequest req = new DescribeFHIRDatastoreRequest(                new DescribeFHIRDatastoreRequest() {{
                                datastoreId = "perferendis";
                            }};, DescribeFHIRDatastoreXAmzTargetEnum.HEALTH_LAKE_DESCRIBE_FHIR_DATASTORE) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            DescribeFHIRDatastoreResponse res = sdk.sdk.describeFHIRDatastore(req);

            if (res.describeFHIRDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFHIRExportJob

Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFHIRExportJobRequest;
import org.openapis.openapi.models.operations.DescribeFHIRExportJobResponse;
import org.openapis.openapi.models.operations.DescribeFHIRExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFHIRExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFHIRExportJobRequest req = new DescribeFHIRExportJobRequest(                new DescribeFHIRExportJobRequest("saepe", "fuga");, DescribeFHIRExportJobXAmzTargetEnum.HEALTH_LAKE_DESCRIBE_FHIR_EXPORT_JOB) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeFHIRExportJobResponse res = sdk.sdk.describeFHIRExportJob(req);

            if (res.describeFHIRExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFHIRImportJob

Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFHIRImportJobRequest;
import org.openapis.openapi.models.operations.DescribeFHIRImportJobResponse;
import org.openapis.openapi.models.operations.DescribeFHIRImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFHIRImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFHIRImportJobRequest req = new DescribeFHIRImportJobRequest(                new DescribeFHIRImportJobRequest("reiciendis", "est");, DescribeFHIRImportJobXAmzTargetEnum.HEALTH_LAKE_DESCRIBE_FHIR_IMPORT_JOB) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeFHIRImportJobResponse res = sdk.sdk.describeFHIRImportJob(req);

            if (res.describeFHIRImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFHIRDatastores

Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFHIRDatastoresRequest;
import org.openapis.openapi.models.operations.ListFHIRDatastoresResponse;
import org.openapis.openapi.models.operations.ListFHIRDatastoresXAmzTargetEnum;
import org.openapis.openapi.models.shared.DatastoreFilter;
import org.openapis.openapi.models.shared.DatastoreStatusEnum;
import org.openapis.openapi.models.shared.ListFHIRDatastoresRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFHIRDatastoresRequest req = new ListFHIRDatastoresRequest(                new ListFHIRDatastoresRequest() {{
                                filter = new DatastoreFilter() {{
                                    createdAfter = OffsetDateTime.parse("2022-04-10T11:47:13.463Z");
                                    createdBefore = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                                    datastoreName = "accusantium";
                                    datastoreStatus = DatastoreStatusEnum.ACTIVE;
                                }};;
                                maxResults = 634274L;
                                nextToken = "doloribus";
                            }};, ListFHIRDatastoresXAmzTargetEnum.HEALTH_LAKE_LIST_FHIR_DATASTORES) {{
                maxResults = "sapiente";
                nextToken = "architecto";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListFHIRDatastoresResponse res = sdk.sdk.listFHIRDatastores(req);

            if (res.listFHIRDatastoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFHIRExportJobs

 Lists all FHIR export jobs associated with an account and their statuses. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFHIRExportJobsRequest;
import org.openapis.openapi.models.operations.ListFHIRExportJobsResponse;
import org.openapis.openapi.models.operations.ListFHIRExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListFHIRExportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFHIRExportJobsRequest req = new ListFHIRExportJobsRequest(                new ListFHIRExportJobsRequest("commodi") {{
                                jobName = "quam";
                                jobStatus = JobStatusEnum.COMPLETED_WITH_ERRORS;
                                maxResults = 244425L;
                                nextToken = "error";
                                submittedAfter = OffsetDateTime.parse("2022-08-30T15:03:11.112Z");
                                submittedBefore = OffsetDateTime.parse("2022-04-29T17:10:10.440Z");
                            }};, ListFHIRExportJobsXAmzTargetEnum.HEALTH_LAKE_LIST_FHIR_EXPORT_JOBS) {{
                maxResults = "animi";
                nextToken = "enim";
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            ListFHIRExportJobsResponse res = sdk.sdk.listFHIRExportJobs(req);

            if (res.listFHIRExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFHIRImportJobs

 Lists all FHIR import jobs associated with an account and their statuses. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFHIRImportJobsRequest;
import org.openapis.openapi.models.operations.ListFHIRImportJobsResponse;
import org.openapis.openapi.models.operations.ListFHIRImportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListFHIRImportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFHIRImportJobsRequest req = new ListFHIRImportJobsRequest(                new ListFHIRImportJobsRequest("quasi") {{
                                jobName = "error";
                                jobStatus = JobStatusEnum.FAILED;
                                maxResults = 673660L;
                                nextToken = "quasi";
                                submittedAfter = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                                submittedBefore = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
                            }};, ListFHIRImportJobsXAmzTargetEnum.HEALTH_LAKE_LIST_FHIR_IMPORT_JOBS) {{
                maxResults = "praesentium";
                nextToken = "voluptatibus";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            ListFHIRImportJobsResponse res = sdk.sdk.listFHIRImportJobs(req);

            if (res.listFHIRImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Returns a list of all existing tags associated with a Data Store. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("maiores");, ListTagsForResourceXAmzTargetEnum.HEALTH_LAKE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFHIRExportJob

Begins a FHIR export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFHIRExportJobRequest;
import org.openapis.openapi.models.operations.StartFHIRExportJobResponse;
import org.openapis.openapi.models.operations.StartFHIRExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.S3Configuration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFHIRExportJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFHIRExportJobRequest req = new StartFHIRExportJobRequest(                new StartFHIRExportJobRequest("commodi", "repudiandae", "quae",                 new OutputDataConfig() {{
                                                s3Configuration = new S3Configuration("ipsum", "quidem");;
                                            }};) {{
                                jobName = "molestias";
                            }};, StartFHIRExportJobXAmzTargetEnum.HEALTH_LAKE_START_FHIR_EXPORT_JOB) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            StartFHIRExportJobResponse res = sdk.sdk.startFHIRExportJob(req);

            if (res.startFHIRExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFHIRImportJob

Begins a FHIR Import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFHIRImportJobRequest;
import org.openapis.openapi.models.operations.StartFHIRImportJobResponse;
import org.openapis.openapi.models.operations.StartFHIRImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.S3Configuration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFHIRImportJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFHIRImportJobRequest req = new StartFHIRImportJobRequest(                new StartFHIRImportJobRequest("sint", "veritatis", "itaque",                 new InputDataConfig() {{
                                                s3Uri = "incidunt";
                                            }};,                 new OutputDataConfig() {{
                                                s3Configuration = new S3Configuration("enim", "consequatur");;
                                            }};) {{
                                jobName = "est";
                            }};, StartFHIRImportJobXAmzTargetEnum.HEALTH_LAKE_START_FHIR_IMPORT_JOB) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            StartFHIRImportJobResponse res = sdk.sdk.startFHIRImportJob(req);

            if (res.startFHIRImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Adds a user specifed key and value tag to a Data Store. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("aliquid",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("magni", "assumenda") {{
                                                    key = "quos";
                                                    value = "perferendis";
                                                }}),
                                                add(new Tag("fugit", "dolorum") {{
                                                    key = "ipsam";
                                                    value = "alias";
                                                }}),
                                                add(new Tag("facilis", "tempore") {{
                                                    key = "excepturi";
                                                    value = "tempora";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.HEALTH_LAKE_TAG_RESOURCE) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Removes tags from a Data Store. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("necessitatibus",                 new String[]{{
                                                add("officia"),
                                                add("dolor"),
                                                add("debitis"),
                                            }});, UntagResourceXAmzTargetEnum.HEALTH_LAKE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
