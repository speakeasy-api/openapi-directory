# SDK

## Overview

Provides translation of the input content from the source language to the target language.

Amazon Web Services documentation
<https://docs.aws.amazon.com/translate/>
### Available Operations

* [createParallelData](#createparalleldata) - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* [deleteParallelData](#deleteparalleldata) - Deletes a parallel data resource in Amazon Translate.
* [deleteTerminology](#deleteterminology) - A synchronous action that deletes a custom terminology.
* [describeTextTranslationJob](#describetexttranslationjob) - Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* [getParallelData](#getparalleldata) - Provides information about a parallel data resource.
* [getTerminology](#getterminology) - Retrieves a custom terminology.
* [importTerminology](#importterminology) - <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
* [listLanguages](#listlanguages) - Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
* [listParallelData](#listparalleldata) - Provides a list of your parallel data resources in Amazon Translate.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [listTerminologies](#listterminologies) - Provides a list of custom terminologies associated with your account.
* [listTextTranslationJobs](#listtexttranslationjobs) - Gets a list of the batch translation jobs that you have submitted.
* [startTextTranslationJob](#starttexttranslationjob) - <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
* [stopTextTranslationJob](#stoptexttranslationjob) - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* [tagResource](#tagresource) - Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [translateText](#translatetext) - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
* [untagResource](#untagresource) - Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [updateParallelData](#updateparalleldata) - Updates a previously created parallel data resource by importing a new input file from Amazon S3.

## createParallelData

Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParallelDataRequest;
import org.openapis.openapi.models.operations.CreateParallelDataResponse;
import org.openapis.openapi.models.operations.CreateParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateParallelDataRequest;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.ParallelDataConfig;
import org.openapis.openapi.models.shared.ParallelDataFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParallelDataRequest req = new CreateParallelDataRequest(                new CreateParallelDataRequest("perferendis", "ipsam",                 new ParallelDataConfig(ParallelDataFormatEnum.TMX, "sapiente");) {{
                                description = "quo";
                                encryptionKey = new EncryptionKey("odit", EncryptionKeyTypeEnum.KMS);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
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
                                    add(new Tag("deleniti", "hic") {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                }};
                            }};, CreateParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_CREATE_PARALLEL_DATA) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CreateParallelDataResponse res = sdk.sdk.createParallelData(req);

            if (res.createParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteParallelData

Deletes a parallel data resource in Amazon Translate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParallelDataRequest;
import org.openapis.openapi.models.operations.DeleteParallelDataResponse;
import org.openapis.openapi.models.operations.DeleteParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteParallelDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteParallelDataRequest req = new DeleteParallelDataRequest(                new DeleteParallelDataRequest("cum");, DeleteParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_DELETE_PARALLEL_DATA) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteParallelDataResponse res = sdk.sdk.deleteParallelData(req);

            if (res.deleteParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTerminology

A synchronous action that deletes a custom terminology.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTerminologyRequest;
import org.openapis.openapi.models.operations.DeleteTerminologyResponse;
import org.openapis.openapi.models.operations.DeleteTerminologyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTerminologyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTerminologyRequest req = new DeleteTerminologyRequest(                new DeleteTerminologyRequest("iste");, DeleteTerminologyXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_DELETE_TERMINOLOGY) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DeleteTerminologyResponse res = sdk.sdk.deleteTerminology(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTextTranslationJob

Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTextTranslationJobRequest;
import org.openapis.openapi.models.operations.DescribeTextTranslationJobResponse;
import org.openapis.openapi.models.operations.DescribeTextTranslationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTextTranslationJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTextTranslationJobRequest req = new DescribeTextTranslationJobRequest(                new DescribeTextTranslationJobRequest("iste");, DescribeTextTranslationJobXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_DESCRIBE_TEXT_TRANSLATION_JOB) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DescribeTextTranslationJobResponse res = sdk.sdk.describeTextTranslationJob(req);

            if (res.describeTextTranslationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParallelData

Provides information about a parallel data resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParallelDataRequest;
import org.openapis.openapi.models.operations.GetParallelDataResponse;
import org.openapis.openapi.models.operations.GetParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetParallelDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParallelDataRequest req = new GetParallelDataRequest(                new GetParallelDataRequest("laborum");, GetParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_GET_PARALLEL_DATA) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            GetParallelDataResponse res = sdk.sdk.getParallelData(req);

            if (res.getParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTerminology

Retrieves a custom terminology.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminologyRequest;
import org.openapis.openapi.models.operations.GetTerminologyResponse;
import org.openapis.openapi.models.operations.GetTerminologyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTerminologyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminologyDataFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTerminologyRequest req = new GetTerminologyRequest(                new GetTerminologyRequest("minima") {{
                                terminologyDataFormat = TerminologyDataFormatEnum.TMX;
                            }};, GetTerminologyXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_GET_TERMINOLOGY) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetTerminologyResponse res = sdk.sdk.getTerminology(req);

            if (res.getTerminologyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importTerminology

<p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportTerminologyRequest;
import org.openapis.openapi.models.operations.ImportTerminologyResponse;
import org.openapis.openapi.models.operations.ImportTerminologyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DirectionalityEnum;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.ImportTerminologyRequest;
import org.openapis.openapi.models.shared.MergeStrategyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TerminologyData;
import org.openapis.openapi.models.shared.TerminologyDataFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportTerminologyRequest req = new ImportTerminologyRequest(                new ImportTerminologyRequest(MergeStrategyEnum.OVERWRITE, "culpa",                 new TerminologyData("consequuntur", TerminologyDataFormatEnum.TSV) {{
                                                directionality = DirectionalityEnum.MULTI;
                                            }};) {{
                                description = "occaecati";
                                encryptionKey = new EncryptionKey("numquam", EncryptionKeyTypeEnum.KMS);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("velit", "error") {{
                                        key = "quam";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag("vitae", "laborum") {{
                                        key = "quia";
                                        value = "quis";
                                    }}),
                                }};
                            }};, ImportTerminologyXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_IMPORT_TERMINOLOGY) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            ImportTerminologyResponse res = sdk.sdk.importTerminology(req);

            if (res.importTerminologyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLanguages

Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLanguagesRequest;
import org.openapis.openapi.models.operations.ListLanguagesResponse;
import org.openapis.openapi.models.operations.ListLanguagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisplayLanguageCodeEnum;
import org.openapis.openapi.models.shared.ListLanguagesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLanguagesRequest req = new ListLanguagesRequest(                new ListLanguagesRequest() {{
                                displayLanguageCode = DisplayLanguageCodeEnum.ZH;
                                maxResults = 13571L;
                                nextToken = "quasi";
                            }};, ListLanguagesXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_LIST_LANGUAGES) {{
                maxResults = "error";
                nextToken = "temporibus";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            ListLanguagesResponse res = sdk.sdk.listLanguages(req);

            if (res.listLanguagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listParallelData

Provides a list of your parallel data resources in Amazon Translate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListParallelDataRequest;
import org.openapis.openapi.models.operations.ListParallelDataResponse;
import org.openapis.openapi.models.operations.ListParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListParallelDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListParallelDataRequest req = new ListParallelDataRequest(                new ListParallelDataRequest() {{
                                maxResults = 55714L;
                                nextToken = "omnis";
                            }};, ListParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_LIST_PARALLEL_DATA) {{
                maxResults = "voluptate";
                nextToken = "cum";
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            ListParallelDataResponse res = sdk.sdk.listParallelData(req);

            if (res.listParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("iusto");, ListTagsForResourceXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
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

## listTerminologies

Provides a list of custom terminologies associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTerminologiesRequest;
import org.openapis.openapi.models.operations.ListTerminologiesResponse;
import org.openapis.openapi.models.operations.ListTerminologiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTerminologiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTerminologiesRequest req = new ListTerminologiesRequest(                new ListTerminologiesRequest() {{
                                maxResults = 692472L;
                                nextToken = "molestias";
                            }};, ListTerminologiesXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TERMINOLOGIES) {{
                maxResults = "excepturi";
                nextToken = "pariatur";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            ListTerminologiesResponse res = sdk.sdk.listTerminologies(req);

            if (res.listTerminologiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTextTranslationJobs

Gets a list of the batch translation jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTextTranslationJobsRequest;
import org.openapis.openapi.models.operations.ListTextTranslationJobsResponse;
import org.openapis.openapi.models.operations.ListTextTranslationJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListTextTranslationJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextTranslationJobFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTextTranslationJobsRequest req = new ListTextTranslationJobsRequest(                new ListTextTranslationJobsRequest() {{
                                filter = new TextTranslationJobFilter() {{
                                    jobName = "itaque";
                                    jobStatus = JobStatusEnum.IN_PROGRESS;
                                    submittedAfterTime = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                                    submittedBeforeTime = OffsetDateTime.parse("2021-04-26T02:10:00.226Z");
                                }};;
                                maxResults = 131797L;
                                nextToken = "deserunt";
                            }};, ListTextTranslationJobsXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TEXT_TRANSLATION_JOBS) {{
                maxResults = "distinctio";
                nextToken = "quibusdam";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListTextTranslationJobsResponse res = sdk.sdk.listTextTranslationJobs(req);

            if (res.listTextTranslationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTextTranslationJob

<p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTextTranslationJobRequest;
import org.openapis.openapi.models.operations.StartTextTranslationJobResponse;
import org.openapis.openapi.models.operations.StartTextTranslationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.FormalityEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.ProfanityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTextTranslationJobRequest;
import org.openapis.openapi.models.shared.TranslationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTextTranslationJobRequest req = new StartTextTranslationJobRequest(                new StartTextTranslationJobRequest("assumenda", "ipsam",                 new InputDataConfig("alias", "fugit");,                 new OutputDataConfig("dolorum") {{
                                                encryptionKey = new EncryptionKey("excepturi", EncryptionKeyTypeEnum.KMS);;
                                            }};, "tempora",                 new String[]{{
                                                add("tempore"),
                                                add("labore"),
                                                add("delectus"),
                                            }}) {{
                                jobName = "eum";
                                parallelDataNames = new String[]{{
                                    add("eligendi"),
                                }};
                                settings = new TranslationSettings() {{
                                    formality = FormalityEnum.INFORMAL;
                                    profanity = ProfanityEnum.MASK;
                                }};;
                                terminologyNames = new String[]{{
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                            }};, StartTextTranslationJobXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_START_TEXT_TRANSLATION_JOB) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            StartTextTranslationJobResponse res = sdk.sdk.startTextTranslationJob(req);

            if (res.startTextTranslationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTextTranslationJob

<p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTextTranslationJobRequest;
import org.openapis.openapi.models.operations.StopTextTranslationJobResponse;
import org.openapis.openapi.models.operations.StopTextTranslationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopTextTranslationJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTextTranslationJobRequest req = new StopTextTranslationJobRequest(                new StopTextTranslationJobRequest("illum");, StopTextTranslationJobXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_STOP_TEXT_TRANSLATION_JOB) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            StopTextTranslationJobResponse res = sdk.sdk.stopTextTranslationJob(req);

            if (res.stopTextTranslationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("laborum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("enim", "accusamus") {{
                                                    key = "non";
                                                    value = "occaecati";
                                                }}),
                                                add(new Tag("provident", "nam") {{
                                                    key = "delectus";
                                                    value = "quidem";
                                                }}),
                                                add(new Tag("deleniti", "sapiente") {{
                                                    key = "id";
                                                    value = "blanditiis";
                                                }}),
                                                add(new Tag("nisi", "vel") {{
                                                    key = "amet";
                                                    value = "deserunt";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_TAG_RESOURCE) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
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

## translateText

Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateTextRequest;
import org.openapis.openapi.models.operations.TranslateTextResponse;
import org.openapis.openapi.models.operations.TranslateTextXAmzTargetEnum;
import org.openapis.openapi.models.shared.FormalityEnum;
import org.openapis.openapi.models.shared.ProfanityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TranslateTextRequest;
import org.openapis.openapi.models.shared.TranslationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TranslateTextRequest req = new TranslateTextRequest(                new TranslateTextRequest("labore", "labore", "suscipit") {{
                                settings = new TranslationSettings() {{
                                    formality = FormalityEnum.INFORMAL;
                                    profanity = ProfanityEnum.MASK;
                                }};;
                                terminologyNames = new String[]{{
                                    add("eum"),
                                    add("vero"),
                                    add("aspernatur"),
                                }};
                            }};, TranslateTextXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_TRANSLATE_TEXT) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            TranslateTextResponse res = sdk.sdk.translateText(req);

            if (res.translateTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("accusantium",                 new String[]{{
                                                add("reiciendis"),
                                                add("mollitia"),
                                                add("ad"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
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

## updateParallelData

Updates a previously created parallel data resource by importing a new input file from Amazon S3.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateParallelDataRequest;
import org.openapis.openapi.models.operations.UpdateParallelDataResponse;
import org.openapis.openapi.models.operations.UpdateParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ParallelDataConfig;
import org.openapis.openapi.models.shared.ParallelDataFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateParallelDataRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateParallelDataRequest req = new UpdateParallelDataRequest(                new UpdateParallelDataRequest("debitis", "eius",                 new ParallelDataConfig(ParallelDataFormatEnum.TMX, "deleniti");) {{
                                description = "facilis";
                            }};, UpdateParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_UPDATE_PARALLEL_DATA) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            UpdateParallelDataResponse res = sdk.sdk.updateParallelData(req);

            if (res.updateParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
