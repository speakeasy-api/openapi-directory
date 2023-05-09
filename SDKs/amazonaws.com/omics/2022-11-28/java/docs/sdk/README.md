# SDK

## Overview

This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the <i>Amazon Omics Developer Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/omics/>
### Available Operations

* [batchDeleteReadSet](#batchdeletereadset) - Deletes one or more read sets.
* [cancelAnnotationImportJob](#cancelannotationimportjob) - Cancels an annotation import job.
* [cancelRun](#cancelrun) - Cancels a run.
* [cancelVariantImportJob](#cancelvariantimportjob) - Cancels a variant import job.
* [createAnnotationStore](#createannotationstore) - Creates an annotation store.
* [createReferenceStore](#createreferencestore) - Creates a reference store.
* [createRunGroup](#createrungroup) - Creates a run group.
* [createSequenceStore](#createsequencestore) - Creates a sequence store.
* [createVariantStore](#createvariantstore) - Creates a variant store.
* [createWorkflow](#createworkflow) - Creates a workflow.
* [deleteAnnotationStore](#deleteannotationstore) - Deletes an annotation store.
* [deleteReference](#deletereference) - Deletes a genome reference.
* [deleteReferenceStore](#deletereferencestore) - Deletes a genome reference store.
* [deleteRun](#deleterun) - Deletes a workflow run.
* [deleteRunGroup](#deleterungroup) - Deletes a workflow run group.
* [deleteSequenceStore](#deletesequencestore) - Deletes a sequence store.
* [deleteVariantStore](#deletevariantstore) - Deletes a variant store.
* [deleteWorkflow](#deleteworkflow) - Deletes a workflow.
* [getAnnotationImportJob](#getannotationimportjob) - Gets information about an annotation import job.
* [getAnnotationStore](#getannotationstore) - Gets information about an annotation store.
* [getReadSet](#getreadset) - Gets a file from a read set.
* [getReadSetActivationJob](#getreadsetactivationjob) - Gets information about a read set activation job.
* [getReadSetExportJob](#getreadsetexportjob) - Gets information about a read set export job.
* [getReadSetImportJob](#getreadsetimportjob) - Gets information about a read set import job.
* [getReadSetMetadata](#getreadsetmetadata) - Gets details about a read set.
* [getReference](#getreference) - Gets a reference file.
* [getReferenceImportJob](#getreferenceimportjob) - Gets information about a reference import job.
* [getReferenceMetadata](#getreferencemetadata) - Gets information about a genome reference's metadata.
* [getReferenceStore](#getreferencestore) - Gets information about a reference store.
* [getRun](#getrun) - Gets information about a workflow run.
* [getRunGroup](#getrungroup) - Gets information about a workflow run group.
* [getRunTask](#getruntask) - Gets information about a workflow run task.
* [getSequenceStore](#getsequencestore) - Gets information about a sequence store.
* [getVariantImportJob](#getvariantimportjob) - Gets information about a variant import job.
* [getVariantStore](#getvariantstore) - Gets information about a variant store.
* [getWorkflow](#getworkflow) - Gets information about a workflow.
* [listAnnotationImportJobs](#listannotationimportjobs) - Retrieves a list of annotation import jobs.
* [listAnnotationStores](#listannotationstores) - Retrieves a list of annotation stores.
* [listReadSetActivationJobs](#listreadsetactivationjobs) - Retrieves a list of read set activation jobs.
* [listReadSetExportJobs](#listreadsetexportjobs) - Retrieves a list of read set export jobs.
* [listReadSetImportJobs](#listreadsetimportjobs) - Retrieves a list of read set import jobs.
* [listReadSets](#listreadsets) - Retrieves a list of read sets.
* [listReferenceImportJobs](#listreferenceimportjobs) - Retrieves a list of reference import jobs.
* [listReferenceStores](#listreferencestores) - Retrieves a list of reference stores.
* [listReferences](#listreferences) - Retrieves a list of references.
* [listRunGroups](#listrungroups) - Retrieves a list of run groups.
* [listRunTasks](#listruntasks) - Retrieves a list of tasks for a run.
* [listRuns](#listruns) - Retrieves a list of runs.
* [listSequenceStores](#listsequencestores) - Retrieves a list of sequence stores.
* [listTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [listVariantImportJobs](#listvariantimportjobs) - Retrieves a list of variant import jobs.
* [listVariantStores](#listvariantstores) - Retrieves a list of variant stores.
* [listWorkflows](#listworkflows) - Retrieves a list of workflows.
* [startAnnotationImportJob](#startannotationimportjob) - Starts an annotation import job.
* [startReadSetActivationJob](#startreadsetactivationjob) - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* [startReadSetExportJob](#startreadsetexportjob) - Exports a read set to Amazon S3.
* [startReadSetImportJob](#startreadsetimportjob) - Starts a read set import job.
* [startReferenceImportJob](#startreferenceimportjob) - Starts a reference import job.
* [startRun](#startrun) - Starts a run.
* [startVariantImportJob](#startvariantimportjob) - Starts a variant import job.
* [tagResource](#tagresource) - Tags a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateAnnotationStore](#updateannotationstore) - Updates an annotation store.
* [updateRunGroup](#updaterungroup) - Updates a run group.
* [updateVariantStore](#updatevariantstore) - Updates a variant store.
* [updateWorkflow](#updateworkflow) - Updates a workflow.

## batchDeleteReadSet

Deletes one or more read sets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteReadSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteReadSetRequest req = new BatchDeleteReadSetRequest(                new BatchDeleteReadSetRequestBody(                new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }});, "molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            BatchDeleteReadSetResponse res = sdk.sdk.batchDeleteReadSet(req);

            if (res.batchDeleteReadSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelAnnotationImportJob

Cancels an annotation import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelAnnotationImportJobRequest;
import org.openapis.openapi.models.operations.CancelAnnotationImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelAnnotationImportJobRequest req = new CancelAnnotationImportJobRequest("ab") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            CancelAnnotationImportJobResponse res = sdk.sdk.cancelAnnotationImportJob(req);

            if (res.cancelAnnotationImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelRun

Cancels a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelRunRequest;
import org.openapis.openapi.models.operations.CancelRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelRunRequest req = new CancelRunRequest("odit") {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            CancelRunResponse res = sdk.sdk.cancelRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelVariantImportJob

Cancels a variant import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelVariantImportJobRequest;
import org.openapis.openapi.models.operations.CancelVariantImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelVariantImportJobRequest req = new CancelVariantImportJobRequest("porro") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CancelVariantImportJobResponse res = sdk.sdk.cancelVariantImportJob(req);

            if (res.cancelVariantImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAnnotationStore

Creates an annotation store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequest;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequestBody;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequestBodyReference;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequestBodySseConfig;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequestBodyStoreFormatEnum;
import org.openapis.openapi.models.operations.CreateAnnotationStoreRequestBodyStoreOptions;
import org.openapis.openapi.models.operations.CreateAnnotationStoreResponse;
import org.openapis.openapi.models.shared.AnnotationTypeEnum;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.SchemaValueTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TsvStoreOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnnotationStoreRequest req = new CreateAnnotationStoreRequest(                new CreateAnnotationStoreRequestBody(CreateAnnotationStoreRequestBodyStoreFormatEnum.VCF) {{
                                description = "totam";
                                name = "Lucy Krajcik";
                                reference = new CreateAnnotationStoreRequestBodyReference() {{
                                    referenceArn = "impedit";
                                }};;
                                sseConfig = new CreateAnnotationStoreRequestBodySseConfig() {{
                                    keyArn = "cum";
                                    type = EncryptionTypeEnum.KMS;
                                }};;
                                storeOptions = new CreateAnnotationStoreRequestBodyStoreOptions() {{
                                    tsvStoreOptions = new TsvStoreOptions() {{
                                        annotationType = AnnotationTypeEnum.CHR_START_END_ONE_BASE;
                                        formatToHeader = new java.util.HashMap<String, String>() {{
                                            put("excepturi", "aspernatur");
                                        }};
                                        schema = new java.util.HashMap<String, org.openapis.openapi.models.shared.SchemaValueTypeEnum>[]{{
                                            add(new java.util.HashMap<String, org.openapis.openapi.models.shared.SchemaValueTypeEnum>() {{
                                                put("natus", SchemaValueTypeEnum.LONG_);
                                                put("iste", SchemaValueTypeEnum.INT_);
                                            }}),
                                        }};
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }};
                            }};) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateAnnotationStoreResponse res = sdk.sdk.createAnnotationStore(req);

            if (res.createAnnotationStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReferenceStore

Creates a reference store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReferenceStoreRequest;
import org.openapis.openapi.models.operations.CreateReferenceStoreRequestBody;
import org.openapis.openapi.models.operations.CreateReferenceStoreRequestBodySseConfig;
import org.openapis.openapi.models.operations.CreateReferenceStoreResponse;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReferenceStoreRequest req = new CreateReferenceStoreRequest(                new CreateReferenceStoreRequestBody("mollitia") {{
                                clientToken = "laborum";
                                description = "dolores";
                                sseConfig = new CreateReferenceStoreRequestBodySseConfig() {{
                                    keyArn = "dolorem";
                                    type = EncryptionTypeEnum.KMS;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "nobis");
                                    put("enim", "omnis");
                                }};
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            CreateReferenceStoreResponse res = sdk.sdk.createReferenceStore(req);

            if (res.createReferenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRunGroup

Creates a run group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRunGroupRequest;
import org.openapis.openapi.models.operations.CreateRunGroupRequestBody;
import org.openapis.openapi.models.operations.CreateRunGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRunGroupRequest req = new CreateRunGroupRequest(                new CreateRunGroupRequestBody("architecto") {{
                                maxCpus = 652790L;
                                maxDuration = 208876L;
                                maxRuns = 635059L;
                                name = "Jaime O'Hara";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quam", "molestiae");
                                    put("velit", "error");
                                }};
                            }};) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
            }};            

            CreateRunGroupResponse res = sdk.sdk.createRunGroup(req);

            if (res.createRunGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSequenceStore

Creates a sequence store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSequenceStoreRequest;
import org.openapis.openapi.models.operations.CreateSequenceStoreRequestBody;
import org.openapis.openapi.models.operations.CreateSequenceStoreRequestBodySseConfig;
import org.openapis.openapi.models.operations.CreateSequenceStoreResponse;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSequenceStoreRequest req = new CreateSequenceStoreRequest(                new CreateSequenceStoreRequestBody("sequi") {{
                                clientToken = "tenetur";
                                description = "ipsam";
                                sseConfig = new CreateSequenceStoreRequestBodySseConfig() {{
                                    keyArn = "id";
                                    type = EncryptionTypeEnum.KMS;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aut", "quasi");
                                    put("error", "temporibus");
                                    put("laborum", "quasi");
                                    put("reiciendis", "voluptatibus");
                                }};
                            }};) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreateSequenceStoreResponse res = sdk.sdk.createSequenceStore(req);

            if (res.createSequenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVariantStore

Creates a variant store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVariantStoreRequest;
import org.openapis.openapi.models.operations.CreateVariantStoreRequestBody;
import org.openapis.openapi.models.operations.CreateVariantStoreRequestBodyReference;
import org.openapis.openapi.models.operations.CreateVariantStoreRequestBodySseConfig;
import org.openapis.openapi.models.operations.CreateVariantStoreResponse;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVariantStoreRequest req = new CreateVariantStoreRequest(                new CreateVariantStoreRequestBody(                new CreateVariantStoreRequestBodyReference() {{
                                                referenceArn = "perferendis";
                                            }};) {{
                                description = "doloremque";
                                name = "Mrs. April Wuckert";
                                sseConfig = new CreateVariantStoreRequestBodySseConfig() {{
                                    keyArn = "iusto";
                                    type = EncryptionTypeEnum.KMS;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("harum", "enim");
                                }};
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateVariantStoreResponse res = sdk.sdk.createVariantStore(req);

            if (res.createVariantStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkflow

Creates a workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBodyEngineEnum;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest(                new CreateWorkflowRequestBody("pariatur") {{
                                definitionUri = "modi";
                                definitionZip = "praesentium";
                                description = "rem";
                                engine = CreateWorkflowRequestBodyEngineEnum.NEXTFLOW;
                                main = "quasi";
                                name = "Kirk Boehm";
                                parameterTemplate = new java.util.HashMap<String, org.openapis.openapi.models.shared.WorkflowParameter>() {{
                                    put("consequatur", new WorkflowParameter() {{
                                        description = "est";
                                        optional = false;
                                    }});
                                    put("quibusdam", new WorkflowParameter() {{
                                        description = "explicabo";
                                        optional = false;
                                    }});
                                }};
                                storageCapacity = 647174L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "labore");
                                    put("modi", "qui");
                                    put("aliquid", "cupiditate");
                                }};
                            }};) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            CreateWorkflowResponse res = sdk.sdk.createWorkflow(req);

            if (res.createWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnnotationStore

Deletes an annotation store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnnotationStoreRequest;
import org.openapis.openapi.models.operations.DeleteAnnotationStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAnnotationStoreRequest req = new DeleteAnnotationStoreRequest("excepturi") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
                force = false;
            }};            

            DeleteAnnotationStoreResponse res = sdk.sdk.deleteAnnotationStore(req);

            if (res.deleteAnnotationStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReference

Deletes a genome reference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReferenceRequest;
import org.openapis.openapi.models.operations.DeleteReferenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReferenceRequest req = new DeleteReferenceRequest("sint", "aliquid") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            DeleteReferenceResponse res = sdk.sdk.deleteReference(req);

            if (res.deleteReferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReferenceStore

Deletes a genome reference store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReferenceStoreRequest;
import org.openapis.openapi.models.operations.DeleteReferenceStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReferenceStoreRequest req = new DeleteReferenceStoreRequest("in") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            DeleteReferenceStoreResponse res = sdk.sdk.deleteReferenceStore(req);

            if (res.deleteReferenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRun

Deletes a workflow run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRunRequest;
import org.openapis.openapi.models.operations.DeleteRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRunRequest req = new DeleteRunRequest("ea") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteRunResponse res = sdk.sdk.deleteRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRunGroup

Deletes a workflow run group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRunGroupRequest;
import org.openapis.openapi.models.operations.DeleteRunGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRunGroupRequest req = new DeleteRunGroupRequest("quidem") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteRunGroupResponse res = sdk.sdk.deleteRunGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSequenceStore

Deletes a sequence store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSequenceStoreRequest;
import org.openapis.openapi.models.operations.DeleteSequenceStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSequenceStoreRequest req = new DeleteSequenceStoreRequest("nisi") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteSequenceStoreResponse res = sdk.sdk.deleteSequenceStore(req);

            if (res.deleteSequenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVariantStore

Deletes a variant store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVariantStoreRequest;
import org.openapis.openapi.models.operations.DeleteVariantStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVariantStoreRequest req = new DeleteVariantStoreRequest("id") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "suscipit";
                xAmzDate = "natus";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vero";
                force = false;
            }};            

            DeleteVariantStoreResponse res = sdk.sdk.deleteVariantStore(req);

            if (res.deleteVariantStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflow

Deletes a workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowRequest req = new DeleteWorkflowRequest("architecto") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteWorkflowResponse res = sdk.sdk.deleteWorkflow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationImportJob

Gets information about an annotation import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationImportJobRequest;
import org.openapis.openapi.models.operations.GetAnnotationImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnnotationImportJobRequest req = new GetAnnotationImportJobRequest("mollitia") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
            }};            

            GetAnnotationImportJobResponse res = sdk.sdk.getAnnotationImportJob(req);

            if (res.getAnnotationImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationStore

Gets information about an annotation store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationStoreRequest;
import org.openapis.openapi.models.operations.GetAnnotationStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnnotationStoreRequest req = new GetAnnotationStoreRequest("quasi") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            GetAnnotationStoreResponse res = sdk.sdk.getAnnotationStore(req);

            if (res.getAnnotationStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadSet

Gets a file from a read set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadSetFileEnum;
import org.openapis.openapi.models.operations.GetReadSetRequest;
import org.openapis.openapi.models.operations.GetReadSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadSetRequest req = new GetReadSetRequest("architecto", 99569L, "repudiandae") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
                file = GetReadSetFileEnum.INDEX;
            }};            

            GetReadSetResponse res = sdk.sdk.getReadSet(req);

            if (res.getReadSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadSetActivationJob

Gets information about a read set activation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadSetActivationJobRequest;
import org.openapis.openapi.models.operations.GetReadSetActivationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadSetActivationJobRequest req = new GetReadSetActivationJobRequest("consequuntur", "praesentium") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            GetReadSetActivationJobResponse res = sdk.sdk.getReadSetActivationJob(req);

            if (res.getReadSetActivationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadSetExportJob

Gets information about a read set export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadSetExportJobRequest;
import org.openapis.openapi.models.operations.GetReadSetExportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadSetExportJobRequest req = new GetReadSetExportJobRequest("excepturi", "odit") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ab";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetReadSetExportJobResponse res = sdk.sdk.getReadSetExportJob(req);

            if (res.getReadSetExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadSetImportJob

Gets information about a read set import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadSetImportJobRequest;
import org.openapis.openapi.models.operations.GetReadSetImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadSetImportJobRequest req = new GetReadSetImportJobRequest("nam", "eaque") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            GetReadSetImportJobResponse res = sdk.sdk.getReadSetImportJob(req);

            if (res.getReadSetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadSetMetadata

Gets details about a read set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadSetMetadataRequest;
import org.openapis.openapi.models.operations.GetReadSetMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadSetMetadataRequest req = new GetReadSetMetadataRequest("corporis", "hic") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
            }};            

            GetReadSetMetadataResponse res = sdk.sdk.getReadSetMetadata(req);

            if (res.getReadSetMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReference

Gets a reference file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReferenceFileEnum;
import org.openapis.openapi.models.operations.GetReferenceRequest;
import org.openapis.openapi.models.operations.GetReferenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReferenceRequest req = new GetReferenceRequest("nesciunt", 179490L, "perferendis") {{
                range = "dolores";
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
                file = GetReferenceFileEnum.INDEX;
            }};            

            GetReferenceResponse res = sdk.sdk.getReference(req);

            if (res.getReferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReferenceImportJob

Gets information about a reference import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReferenceImportJobRequest;
import org.openapis.openapi.models.operations.GetReferenceImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReferenceImportJobRequest req = new GetReferenceImportJobRequest("perspiciatis", "voluptatem") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
            }};            

            GetReferenceImportJobResponse res = sdk.sdk.getReferenceImportJob(req);

            if (res.getReferenceImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReferenceMetadata

Gets information about a genome reference's metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReferenceMetadataRequest;
import org.openapis.openapi.models.operations.GetReferenceMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReferenceMetadataRequest req = new GetReferenceMetadataRequest("asperiores", "earum") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            GetReferenceMetadataResponse res = sdk.sdk.getReferenceMetadata(req);

            if (res.getReferenceMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReferenceStore

Gets information about a reference store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReferenceStoreRequest;
import org.openapis.openapi.models.operations.GetReferenceStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReferenceStoreRequest req = new GetReferenceStoreRequest("delectus") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            GetReferenceStoreResponse res = sdk.sdk.getReferenceStore(req);

            if (res.getReferenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRun

Gets information about a workflow run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRunRequest;
import org.openapis.openapi.models.operations.GetRunResponse;
import org.openapis.openapi.models.shared.RunExportEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRunRequest req = new GetRunRequest("hic") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
                export = new org.openapis.openapi.models.shared.RunExportEnum[]{{
                    add(RunExportEnum.DEFINITION),
                    add(RunExportEnum.DEFINITION),
                }};
            }};            

            GetRunResponse res = sdk.sdk.getRun(req);

            if (res.getRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRunGroup

Gets information about a workflow run group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRunGroupRequest;
import org.openapis.openapi.models.operations.GetRunGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRunGroupRequest req = new GetRunGroupRequest("ipsa") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetRunGroupResponse res = sdk.sdk.getRunGroup(req);

            if (res.getRunGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRunTask

Gets information about a workflow run task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRunTaskRequest;
import org.openapis.openapi.models.operations.GetRunTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRunTaskRequest req = new GetRunTaskRequest("natus", "eos") {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            GetRunTaskResponse res = sdk.sdk.getRunTask(req);

            if (res.getRunTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSequenceStore

Gets information about a sequence store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSequenceStoreRequest;
import org.openapis.openapi.models.operations.GetSequenceStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSequenceStoreRequest req = new GetSequenceStoreRequest("dolorum") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            GetSequenceStoreResponse res = sdk.sdk.getSequenceStore(req);

            if (res.getSequenceStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantImportJob

Gets information about a variant import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantImportJobRequest;
import org.openapis.openapi.models.operations.GetVariantImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVariantImportJobRequest req = new GetVariantImportJobRequest("id") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetVariantImportJobResponse res = sdk.sdk.getVariantImportJob(req);

            if (res.getVariantImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantStore

Gets information about a variant store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantStoreRequest;
import org.openapis.openapi.models.operations.GetVariantStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVariantStoreRequest req = new GetVariantStoreRequest("saepe") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            GetVariantStoreResponse res = sdk.sdk.getVariantStore(req);

            if (res.getVariantStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflow

Gets information about a workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowRequest;
import org.openapis.openapi.models.operations.GetWorkflowResponse;
import org.openapis.openapi.models.operations.GetWorkflowTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowExportEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowRequest req = new GetWorkflowRequest("at") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
                export = new org.openapis.openapi.models.shared.WorkflowExportEnum[]{{
                    add(WorkflowExportEnum.DEFINITION),
                    add(WorkflowExportEnum.DEFINITION),
                    add(WorkflowExportEnum.DEFINITION),
                    add(WorkflowExportEnum.DEFINITION),
                }};
                type = GetWorkflowTypeEnum.PRIVATE_;
            }};            

            GetWorkflowResponse res = sdk.sdk.getWorkflow(req);

            if (res.getWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnnotationImportJobs

Retrieves a list of annotation import jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnnotationImportJobsRequest;
import org.openapis.openapi.models.operations.ListAnnotationImportJobsRequestBody;
import org.openapis.openapi.models.operations.ListAnnotationImportJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListAnnotationImportJobsResponse;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnnotationImportJobsRequest req = new ListAnnotationImportJobsRequest(                new ListAnnotationImportJobsRequestBody() {{
                                filter = new ListAnnotationImportJobsRequestBodyFilter() {{
                                    status = JobStatusEnum.FAILED;
                                    storeName = "iusto";
                                }};;
                                ids = new String[]{{
                                    add("quisquam"),
                                }};
                            }};) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
                maxResults = 957451L;
                nextToken = "totam";
            }};            

            ListAnnotationImportJobsResponse res = sdk.sdk.listAnnotationImportJobs(req);

            if (res.listAnnotationImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnnotationStores

Retrieves a list of annotation stores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnnotationStoresRequest;
import org.openapis.openapi.models.operations.ListAnnotationStoresRequestBody;
import org.openapis.openapi.models.operations.ListAnnotationStoresRequestBodyFilter;
import org.openapis.openapi.models.operations.ListAnnotationStoresResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StoreStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnnotationStoresRequest req = new ListAnnotationStoresRequest(                new ListAnnotationStoresRequestBody() {{
                                filter = new ListAnnotationStoresRequestBodyFilter() {{
                                    status = StoreStatusEnum.CREATING;
                                }};;
                                ids = new String[]{{
                                    add("neque"),
                                    add("sed"),
                                    add("vel"),
                                }};
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
                maxResults = 586784L;
                nextToken = "maxime";
            }};            

            ListAnnotationStoresResponse res = sdk.sdk.listAnnotationStores(req);

            if (res.listAnnotationStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReadSetActivationJobs

Retrieves a list of read set activation jobs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReadSetActivationJobsRequest;
import org.openapis.openapi.models.operations.ListReadSetActivationJobsRequestBody;
import org.openapis.openapi.models.operations.ListReadSetActivationJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReadSetActivationJobsResponse;
import org.openapis.openapi.models.shared.ReadSetActivationJobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReadSetActivationJobsRequest req = new ListReadSetActivationJobsRequest(                new ListReadSetActivationJobsRequestBody() {{
                                filter = new ListReadSetActivationJobsRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2022-10-07T04:50:29.805Z");
                                    createdBefore = OffsetDateTime.parse("2021-12-19T07:31:04.219Z");
                                    status = ReadSetActivationJobStatusEnum.IN_PROGRESS;
                                }};;
                            }};, "aspernatur") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
                maxResults = 183280L;
                nextToken = "neque";
            }};            

            ListReadSetActivationJobsResponse res = sdk.sdk.listReadSetActivationJobs(req);

            if (res.listReadSetActivationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReadSetExportJobs

Retrieves a list of read set export jobs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReadSetExportJobsRequest;
import org.openapis.openapi.models.operations.ListReadSetExportJobsRequestBody;
import org.openapis.openapi.models.operations.ListReadSetExportJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReadSetExportJobsResponse;
import org.openapis.openapi.models.shared.ReadSetExportJobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReadSetExportJobsRequest req = new ListReadSetExportJobsRequest(                new ListReadSetExportJobsRequestBody() {{
                                filter = new ListReadSetExportJobsRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2022-07-06T20:37:36.497Z");
                                    createdBefore = OffsetDateTime.parse("2022-08-24T04:49:56.144Z");
                                    status = ReadSetExportJobStatusEnum.COMPLETED;
                                }};;
                            }};, "hic") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
                maxResults = 83422L;
                nextToken = "nobis";
            }};            

            ListReadSetExportJobsResponse res = sdk.sdk.listReadSetExportJobs(req);

            if (res.listReadSetExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReadSetImportJobs

Retrieves a list of read set import jobs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReadSetImportJobsRequest;
import org.openapis.openapi.models.operations.ListReadSetImportJobsRequestBody;
import org.openapis.openapi.models.operations.ListReadSetImportJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReadSetImportJobsResponse;
import org.openapis.openapi.models.shared.ReadSetImportJobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReadSetImportJobsRequest req = new ListReadSetImportJobsRequest(                new ListReadSetImportJobsRequestBody() {{
                                filter = new ListReadSetImportJobsRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                                    createdBefore = OffsetDateTime.parse("2022-01-14T21:26:14.171Z");
                                    status = ReadSetImportJobStatusEnum.IN_PROGRESS;
                                }};;
                            }};, "dolore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
                maxResults = 929530L;
                nextToken = "consequatur";
            }};            

            ListReadSetImportJobsResponse res = sdk.sdk.listReadSetImportJobs(req);

            if (res.listReadSetImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReadSets

Retrieves a list of read sets.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReadSetsRequest;
import org.openapis.openapi.models.operations.ListReadSetsRequestBody;
import org.openapis.openapi.models.operations.ListReadSetsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReadSetsResponse;
import org.openapis.openapi.models.shared.ReadSetStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReadSetsRequest req = new ListReadSetsRequest(                new ListReadSetsRequestBody() {{
                                filter = new ListReadSetsRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2020-08-24T06:10:53.249Z");
                                    createdBefore = OffsetDateTime.parse("2022-02-26T12:07:57.580Z");
                                    name = "Ms. Terrance Davis";
                                    referenceArn = "occaecati";
                                    status = ReadSetStatusEnum.DELETED;
                                }};;
                            }};, "quisquam") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
                maxResults = 878870L;
                nextToken = "tenetur";
            }};            

            ListReadSetsResponse res = sdk.sdk.listReadSets(req);

            if (res.listReadSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReferenceImportJobs

Retrieves a list of reference import jobs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReferenceImportJobsRequest;
import org.openapis.openapi.models.operations.ListReferenceImportJobsRequestBody;
import org.openapis.openapi.models.operations.ListReferenceImportJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReferenceImportJobsResponse;
import org.openapis.openapi.models.shared.ReferenceImportJobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReferenceImportJobsRequest req = new ListReferenceImportJobsRequest(                new ListReferenceImportJobsRequestBody() {{
                                filter = new ListReferenceImportJobsRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2020-11-08T11:03:10.206Z");
                                    createdBefore = OffsetDateTime.parse("2021-07-17T15:43:35.984Z");
                                    status = ReferenceImportJobStatusEnum.FAILED;
                                }};;
                            }};, "facilis") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
                maxResults = 773326L;
                nextToken = "aut";
            }};            

            ListReferenceImportJobsResponse res = sdk.sdk.listReferenceImportJobs(req);

            if (res.listReferenceImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReferenceStores

Retrieves a list of reference stores.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReferenceStoresRequest;
import org.openapis.openapi.models.operations.ListReferenceStoresRequestBody;
import org.openapis.openapi.models.operations.ListReferenceStoresRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReferenceStoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReferenceStoresRequest req = new ListReferenceStoresRequest(                new ListReferenceStoresRequestBody() {{
                                filter = new ListReferenceStoresRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2022-02-20T06:09:58.619Z");
                                    createdBefore = OffsetDateTime.parse("2022-03-22T03:27:44.973Z");
                                    name = "Domingo Kris";
                                }};;
                            }};) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
                maxResults = 822118L;
                nextToken = "magnam";
            }};            

            ListReferenceStoresResponse res = sdk.sdk.listReferenceStores(req);

            if (res.listReferenceStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReferences

Retrieves a list of references.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReferencesRequest;
import org.openapis.openapi.models.operations.ListReferencesRequestBody;
import org.openapis.openapi.models.operations.ListReferencesRequestBodyFilter;
import org.openapis.openapi.models.operations.ListReferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReferencesRequest req = new ListReferencesRequest(                new ListReferencesRequestBody() {{
                                filter = new ListReferencesRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2022-06-28T08:50:44.084Z");
                                    createdBefore = OffsetDateTime.parse("2022-10-11T02:58:57.556Z");
                                    md5 = "maiores";
                                    name = "Rosemary Stoltenberg";
                                }};;
                            }};, "nostrum") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
                maxResults = 399499L;
                nextToken = "inventore";
            }};            

            ListReferencesResponse res = sdk.sdk.listReferences(req);

            if (res.listReferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRunGroups

Retrieves a list of run groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRunGroupsRequest;
import org.openapis.openapi.models.operations.ListRunGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRunGroupsRequest req = new ListRunGroupsRequest() {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
                maxResults = 952871L;
                name = "Richard Anderson";
                startingToken = "aliquam";
            }};            

            ListRunGroupsResponse res = sdk.sdk.listRunGroups(req);

            if (res.listRunGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRunTasks

Retrieves a list of tasks for a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRunTasksRequest;
import org.openapis.openapi.models.operations.ListRunTasksResponse;
import org.openapis.openapi.models.operations.ListRunTasksStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRunTasksRequest req = new ListRunTasksRequest("accusamus") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
                maxResults = 432148L;
                startingToken = "autem";
                status = ListRunTasksStatusEnum.CANCELLED;
            }};            

            ListRunTasksResponse res = sdk.sdk.listRunTasks(req);

            if (res.listRunTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuns

Retrieves a list of runs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRunsRequest;
import org.openapis.openapi.models.operations.ListRunsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRunsRequest req = new ListRunsRequest() {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
                maxResults = 131482L;
                name = "Jose Kreiger";
                runGroupId = "eius";
                startingToken = "esse";
            }};            

            ListRunsResponse res = sdk.sdk.listRuns(req);

            if (res.listRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSequenceStores

Retrieves a list of sequence stores.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSequenceStoresRequest;
import org.openapis.openapi.models.operations.ListSequenceStoresRequestBody;
import org.openapis.openapi.models.operations.ListSequenceStoresRequestBodyFilter;
import org.openapis.openapi.models.operations.ListSequenceStoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSequenceStoresRequest req = new ListSequenceStoresRequest(                new ListSequenceStoresRequestBody() {{
                                filter = new ListSequenceStoresRequestBodyFilter() {{
                                    createdAfter = OffsetDateTime.parse("2021-08-20T04:54:39.392Z");
                                    createdBefore = OffsetDateTime.parse("2022-04-22T02:19:15.622Z");
                                    name = "Bernard Kerluke";
                                }};;
                            }};) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quisquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quidem";
                maxResults = 206594L;
                nextToken = "quo";
            }};            

            ListSequenceStoresResponse res = sdk.sdk.listSequenceStores(req);

            if (res.listSequenceStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves a list of tags for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quo") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "eius";
                xAmzCredential = "eos";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "ab";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "consequatur";
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

## listVariantImportJobs

Retrieves a list of variant import jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVariantImportJobsRequest;
import org.openapis.openapi.models.operations.ListVariantImportJobsRequestBody;
import org.openapis.openapi.models.operations.ListVariantImportJobsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListVariantImportJobsResponse;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVariantImportJobsRequest req = new ListVariantImportJobsRequest(                new ListVariantImportJobsRequestBody() {{
                                filter = new ListVariantImportJobsRequestBodyFilter() {{
                                    status = JobStatusEnum.COMPLETED_WITH_FAILURES;
                                    storeName = "ipsam";
                                }};;
                                ids = new String[]{{
                                    add("sequi"),
                                }};
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "recusandae";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dignissimos";
                maxResults = 76956L;
                nextToken = "nihil";
            }};            

            ListVariantImportJobsResponse res = sdk.sdk.listVariantImportJobs(req);

            if (res.listVariantImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVariantStores

Retrieves a list of variant stores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVariantStoresRequest;
import org.openapis.openapi.models.operations.ListVariantStoresRequestBody;
import org.openapis.openapi.models.operations.ListVariantStoresRequestBodyFilter;
import org.openapis.openapi.models.operations.ListVariantStoresResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StoreStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVariantStoresRequest req = new ListVariantStoresRequest(                new ListVariantStoresRequestBody() {{
                                filter = new ListVariantStoresRequestBodyFilter() {{
                                    status = StoreStatusEnum.FAILED;
                                }};;
                                ids = new String[]{{
                                    add("odio"),
                                    add("occaecati"),
                                }};
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
                maxResults = 430402L;
                nextToken = "quas";
            }};            

            ListVariantStoresResponse res = sdk.sdk.listVariantStores(req);

            if (res.listVariantStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflows

Retrieves a list of workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowsRequest;
import org.openapis.openapi.models.operations.ListWorkflowsResponse;
import org.openapis.openapi.models.operations.ListWorkflowsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowsRequest req = new ListWorkflowsRequest() {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "fugit";
                xAmzDate = "fuga";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "atque";
                maxResults = 128860L;
                name = "Sue Corkery";
                startingToken = "ratione";
                type = ListWorkflowsTypeEnum.PRIVATE_;
            }};            

            ListWorkflowsResponse res = sdk.sdk.listWorkflows(req);

            if (res.listWorkflowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAnnotationImportJob

Starts an annotation import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAnnotationImportJobRequest;
import org.openapis.openapi.models.operations.StartAnnotationImportJobRequestBody;
import org.openapis.openapi.models.operations.StartAnnotationImportJobRequestBodyFormatOptions;
import org.openapis.openapi.models.operations.StartAnnotationImportJobResponse;
import org.openapis.openapi.models.shared.AnnotationImportItemSource;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TsvOptions;
import org.openapis.openapi.models.shared.VcfOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAnnotationImportJobRequest req = new StartAnnotationImportJobRequest(                new StartAnnotationImportJobRequestBody("saepe",                 new org.openapis.openapi.models.shared.AnnotationImportItemSource[]{{
                                                add(new AnnotationImportItemSource("et") {{
                                                    source = "atque";
                                                }}),
                                                add(new AnnotationImportItemSource("eveniet") {{
                                                    source = "esse";
                                                }}),
                                                add(new AnnotationImportItemSource("veritatis") {{
                                                    source = "accusamus";
                                                }}),
                                            }}, "esse") {{
                                formatOptions = new StartAnnotationImportJobRequestBodyFormatOptions() {{
                                    tsvOptions = new TsvOptions() {{
                                        readOptions = new ReadOptions() {{
                                            comment = "quod";
                                            encoding = "nam";
                                            escape = "vero";
                                            escapeQuotes = false;
                                            header = false;
                                            lineSep = "aliquid";
                                            quote = "quasi";
                                            quoteAll = false;
                                            sep = "saepe";
                                        }};;
                                    }};;
                                    vcfOptions = new VcfOptions() {{
                                        ignoreFilterField = false;
                                        ignoreQualField = false;
                                    }};;
                                }};;
                                runLeftNormalization = false;
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "harum";
                xAmzCredential = "molestiae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "distinctio";
            }};            

            StartAnnotationImportJobResponse res = sdk.sdk.startAnnotationImportJob(req);

            if (res.startAnnotationImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReadSetActivationJob

Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReadSetActivationJobRequest;
import org.openapis.openapi.models.operations.StartReadSetActivationJobRequestBody;
import org.openapis.openapi.models.operations.StartReadSetActivationJobResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReadSetActivationJobSourceItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReadSetActivationJobRequest req = new StartReadSetActivationJobRequest(                new StartReadSetActivationJobRequestBody(                new org.openapis.openapi.models.shared.StartReadSetActivationJobSourceItem[]{{
                                                add(new StartReadSetActivationJobSourceItem("tempore") {{
                                                    readSetId = "culpa";
                                                }}),
                                            }}) {{
                                clientToken = "adipisci";
                            }};, "cumque") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "minus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "esse";
            }};            

            StartReadSetActivationJobResponse res = sdk.sdk.startReadSetActivationJob(req);

            if (res.startReadSetActivationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReadSetExportJob

Exports a read set to Amazon S3.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReadSetExportJobRequest;
import org.openapis.openapi.models.operations.StartReadSetExportJobRequestBody;
import org.openapis.openapi.models.operations.StartReadSetExportJobResponse;
import org.openapis.openapi.models.shared.ExportReadSet;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReadSetExportJobRequest req = new StartReadSetExportJobRequest(                new StartReadSetExportJobRequestBody("provident", "a",                 new org.openapis.openapi.models.shared.ExportReadSet[]{{
                                                add(new ExportReadSet("esse") {{
                                                    readSetId = "quas";
                                                }}),
                                                add(new ExportReadSet("a") {{
                                                    readSetId = "quasi";
                                                }}),
                                                add(new ExportReadSet("sint") {{
                                                    readSetId = "error";
                                                }}),
                                                add(new ExportReadSet("possimus") {{
                                                    readSetId = "pariatur";
                                                }}),
                                            }}) {{
                                clientToken = "quia";
                            }};, "eveniet") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facere";
                xAmzCredential = "veritatis";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "culpa";
            }};            

            StartReadSetExportJobResponse res = sdk.sdk.startReadSetExportJob(req);

            if (res.startReadSetExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReadSetImportJob

Starts a read set import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReadSetImportJobRequest;
import org.openapis.openapi.models.operations.StartReadSetImportJobRequestBody;
import org.openapis.openapi.models.operations.StartReadSetImportJobResponse;
import org.openapis.openapi.models.shared.FileTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceFiles;
import org.openapis.openapi.models.shared.StartReadSetImportJobSourceItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReadSetImportJobRequest req = new StartReadSetImportJobRequest(                new StartReadSetImportJobRequestBody("tenetur",                 new org.openapis.openapi.models.shared.StartReadSetImportJobSourceItem[]{{
                                                add(new StartReadSetImportJobSourceItem("ex", "deleniti", FileTypeEnum.CRAM,                 new SourceFiles("dolorum") {{
                                                                    source2 = "architecto";
                                                                }};, "omnis") {{
                                                    description = "earum";
                                                    generatedFrom = "vel";
                                                    name = "Charlotte Rempel";
                                                    referenceArn = "accusantium";
                                                    sampleId = "aliquam";
                                                    sourceFileType = FileTypeEnum.CRAM;
                                                    sourceFiles = new SourceFiles("reprehenderit") {{
                                                        source1 = "dicta";
                                                        source2 = "ullam";
                                                    }};
                                                    subjectId = "ullam";
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("aut", "voluptatum");
                                                        put("qui", "quibusdam");
                                                    }};
                                                }}),
                                            }}) {{
                                clientToken = "tenetur";
                            }};, "quasi") {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
            }};            

            StartReadSetImportJobResponse res = sdk.sdk.startReadSetImportJob(req);

            if (res.startReadSetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReferenceImportJob

Starts a reference import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReferenceImportJobRequest;
import org.openapis.openapi.models.operations.StartReferenceImportJobRequestBody;
import org.openapis.openapi.models.operations.StartReferenceImportJobResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReferenceImportJobSourceItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReferenceImportJobRequest req = new StartReferenceImportJobRequest(                new StartReferenceImportJobRequestBody("iste",                 new org.openapis.openapi.models.shared.StartReferenceImportJobSourceItem[]{{
                                                add(new StartReferenceImportJobSourceItem("explicabo", "voluptas") {{
                                                    description = "accusantium";
                                                    name = "Charles Langworth";
                                                    sourceFile = "ab";
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("non", "voluptatem");
                                                        put("dolor", "occaecati");
                                                        put("numquam", "impedit");
                                                    }};
                                                }}),
                                                add(new StartReferenceImportJobSourceItem("consequuntur", "repellendus") {{
                                                    description = "aut";
                                                    name = "Jean Wunsch";
                                                    sourceFile = "voluptatibus";
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("asperiores", "aperiam");
                                                        put("ea", "quaerat");
                                                    }};
                                                }}),
                                                add(new StartReferenceImportJobSourceItem("adipisci", "fuga") {{
                                                    description = "officia";
                                                    name = "Cody Nikolaus";
                                                    sourceFile = "quae";
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("porro", "quod");
                                                        put("labore", "ab");
                                                    }};
                                                }}),
                                                add(new StartReferenceImportJobSourceItem("commodi", "in") {{
                                                    description = "id";
                                                    name = "Sheila Nader";
                                                    sourceFile = "totam";
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("vel", "ducimus");
                                                        put("quos", "vel");
                                                        put("labore", "possimus");
                                                        put("facilis", "cum");
                                                    }};
                                                }}),
                                            }}) {{
                                clientToken = "corporis";
                            }};, "reiciendis") {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
            }};            

            StartReferenceImportJobResponse res = sdk.sdk.startReferenceImportJob(req);

            if (res.startReferenceImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRun

Starts a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRunRequest;
import org.openapis.openapi.models.operations.StartRunRequestBody;
import org.openapis.openapi.models.operations.StartRunRequestBodyLogLevelEnum;
import org.openapis.openapi.models.operations.StartRunRequestBodyWorkflowTypeEnum;
import org.openapis.openapi.models.operations.StartRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRunRequest req = new StartRunRequest(                new StartRunRequestBody("exercitationem", "earum") {{
                                logLevel = StartRunRequestBodyLogLevelEnum.ALL;
                                name = "Melba Homenick";
                                outputUri = "saepe";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("dolore", "sunt");
                                    put("asperiores", "adipisci");
                                    put("non", "amet");
                                    put("beatae", "dignissimos");
                                }};
                                priority = 950953L;
                                runGroupId = "debitis";
                                runId = "consectetur";
                                storageCapacity = 358107L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "ipsa");
                                    put("voluptates", "libero");
                                    put("vitae", "accusamus");
                                }};
                                workflowId = "similique";
                                workflowType = StartRunRequestBodyWorkflowTypeEnum.PRIVATE_;
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nobis";
            }};            

            StartRunResponse res = sdk.sdk.startRun(req);

            if (res.startRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startVariantImportJob

Starts a variant import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartVariantImportJobRequest;
import org.openapis.openapi.models.operations.StartVariantImportJobRequestBody;
import org.openapis.openapi.models.operations.StartVariantImportJobResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VariantImportItemSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartVariantImportJobRequest req = new StartVariantImportJobRequest(                new StartVariantImportJobRequestBody("adipisci",                 new org.openapis.openapi.models.shared.VariantImportItemSource[]{{
                                                add(new VariantImportItemSource("blanditiis") {{
                                                    source = "dolores";
                                                }}),
                                                add(new VariantImportItemSource("dolore") {{
                                                    source = "in";
                                                }}),
                                                add(new VariantImportItemSource("officiis") {{
                                                    source = "aliquam";
                                                }}),
                                                add(new VariantImportItemSource("ullam") {{
                                                    source = "temporibus";
                                                }}),
                                            }}, "adipisci") {{
                                runLeftNormalization = false;
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            StartVariantImportJobResponse res = sdk.sdk.startVariantImportJob(req);

            if (res.startVariantImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("hic", "exercitationem");
                                                put("nobis", "sit");
                                                put("rerum", "sed");
                                            }});, "reiciendis") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
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

Removes tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("laborum",                 new String[]{{
                                add("in"),
                            }}) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "unde";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "suscipit";
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

## updateAnnotationStore

Updates an annotation store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnnotationStoreRequest;
import org.openapis.openapi.models.operations.UpdateAnnotationStoreRequestBody;
import org.openapis.openapi.models.operations.UpdateAnnotationStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAnnotationStoreRequest req = new UpdateAnnotationStoreRequest(                new UpdateAnnotationStoreRequestBody() {{
                                description = "debitis";
                            }};, "illo") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateAnnotationStoreResponse res = sdk.sdk.updateAnnotationStore(req);

            if (res.updateAnnotationStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRunGroup

Updates a run group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRunGroupRequest;
import org.openapis.openapi.models.operations.UpdateRunGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateRunGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRunGroupRequest req = new UpdateRunGroupRequest(                new UpdateRunGroupRequestBody() {{
                                maxCpus = 896762L;
                                maxDuration = 215529L;
                                maxRuns = 406733L;
                                name = "Isaac Wolf";
                            }};, "voluptate") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sit";
                xAmzDate = "non";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateRunGroupResponse res = sdk.sdk.updateRunGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVariantStore

Updates a variant store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVariantStoreRequest;
import org.openapis.openapi.models.operations.UpdateVariantStoreRequestBody;
import org.openapis.openapi.models.operations.UpdateVariantStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVariantStoreRequest req = new UpdateVariantStoreRequest(                new UpdateVariantStoreRequestBody() {{
                                description = "incidunt";
                            }};, "ipsam") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "rem";
                xAmzCredential = "sit";
                xAmzDate = "nobis";
                xAmzSecurityToken = "error";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "minima";
            }};            

            UpdateVariantStoreResponse res = sdk.sdk.updateVariantStore(req);

            if (res.updateVariantStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkflow

Updates a workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkflowRequest;
import org.openapis.openapi.models.operations.UpdateWorkflowRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkflowRequest req = new UpdateWorkflowRequest(                new UpdateWorkflowRequestBody() {{
                                description = "reiciendis";
                                name = "Martin Beatty";
                            }};, "veniam") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            UpdateWorkflowResponse res = sdk.sdk.updateWorkflow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
