# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParallelDataRequest req = new CreateParallelDataRequest(                new CreateParallelDataRequest("provident", "distinctio",                 new ParallelDataConfig(ParallelDataFormatEnum.TMX, "unde");) {{
                                description = "nulla";
                                encryptionKey = new EncryptionKey("corrupti", EncryptionKeyTypeEnum.KMS);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("voluptatum", "iusto") {{
                                        key = "minus";
                                        value = "placeat";
                                    }}),
                                }};
                            }};, CreateParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_CREATE_PARALLEL_DATA) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            CreateParallelDataResponse res = sdk.createParallelData(req);

            if (res.createParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createParallelData](docs/sdk/README.md#createparalleldata) - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* [deleteParallelData](docs/sdk/README.md#deleteparalleldata) - Deletes a parallel data resource in Amazon Translate.
* [deleteTerminology](docs/sdk/README.md#deleteterminology) - A synchronous action that deletes a custom terminology.
* [describeTextTranslationJob](docs/sdk/README.md#describetexttranslationjob) - Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* [getParallelData](docs/sdk/README.md#getparalleldata) - Provides information about a parallel data resource.
* [getTerminology](docs/sdk/README.md#getterminology) - Retrieves a custom terminology.
* [importTerminology](docs/sdk/README.md#importterminology) - <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
* [listLanguages](docs/sdk/README.md#listlanguages) - Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
* [listParallelData](docs/sdk/README.md#listparalleldata) - Provides a list of your parallel data resources in Amazon Translate.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [listTerminologies](docs/sdk/README.md#listterminologies) - Provides a list of custom terminologies associated with your account.
* [listTextTranslationJobs](docs/sdk/README.md#listtexttranslationjobs) - Gets a list of the batch translation jobs that you have submitted.
* [startTextTranslationJob](docs/sdk/README.md#starttexttranslationjob) - <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
* [stopTextTranslationJob](docs/sdk/README.md#stoptexttranslationjob) - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [translateText](docs/sdk/README.md#translatetext) - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [updateParallelData](docs/sdk/README.md#updateparalleldata) - Updates a previously created parallel data resource by importing a new input file from Amazon S3.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
