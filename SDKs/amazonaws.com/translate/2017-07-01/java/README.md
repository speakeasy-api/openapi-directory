# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateParallelDataRequest req = new CreateParallelDataRequest() {{
                headers = new CreateParallelDataHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "sapiente";
                    xAmzDate = "laborum";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "accusamus";
                    xAmzSignedHeaders = "pariatur";
                    xAmzTarget = "AWSShineFrontendService_20170701.CreateParallelData";
                }};
                request = new CreateParallelDataRequest() {{
                    clientToken = "eos";
                    description = "ut";
                    encryptionKey = new EncryptionKey() {{
                        id = "animi";
                        type = "KMS";
                    }};
                    name = "eum";
                    parallelDataConfig = new ParallelDataConfig() {{
                        format = "TMX";
                        s3Uri = "maiores";
                    }};
                }};
            }};

            CreateParallelDataResponse res = sdk.createParallelData(req);

            if (res.createParallelDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createParallelData` - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples of source phrases and their translations from your translation memory. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* `deleteParallelData` - Deletes a parallel data resource in Amazon Translate.
* `deleteTerminology` - A synchronous action that deletes a custom terminology.
* `describeTextTranslationJob` - Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* `getParallelData` - Provides information about a parallel data resource.
* `getTerminology` - Retrieves a custom terminology.
* `importTerminology` - <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
* `listParallelData` - Provides a list of your parallel data resources in Amazon Translate.
* `listTerminologies` - Provides a list of custom terminologies associated with your account.
* `listTextTranslationJobs` - Gets a list of the batch translation jobs that you have submitted.
* `startTextTranslationJob` - <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see <a>async</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p> <note> <p>Amazon Translate does not support batch translation of multiple source languages at once.</p> </note>
* `stopTextTranslationJob` - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* `translateText` - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a>what-is-languages</a>.
* `updateParallelData` - Updates a previously created parallel data resource by importing a new input file from Amazon S3.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
