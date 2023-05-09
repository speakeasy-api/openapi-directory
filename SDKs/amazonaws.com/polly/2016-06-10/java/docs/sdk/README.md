# SDK

## Overview

<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/polly/>
### Available Operations

* [deleteLexicon](#deletelexicon) - <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* [describeVoices](#describevoices) - <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
* [getLexicon](#getlexicon) - Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* [getSpeechSynthesisTask](#getspeechsynthesistask) - Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.
* [listLexicons](#listlexicons) - Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* [listSpeechSynthesisTasks](#listspeechsynthesistasks) - Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.
* [putLexicon](#putlexicon) - <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* [startSpeechSynthesisTask](#startspeechsynthesistask) - Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.
* [synthesizeSpeech](#synthesizespeech) - Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

## deleteLexicon

<p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLexiconRequest;
import org.openapis.openapi.models.operations.DeleteLexiconResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLexiconRequest req = new DeleteLexiconRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteLexiconResponse res = sdk.sdk.deleteLexicon(req);

            if (res.deleteLexiconOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVoices

<p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVoicesEngineEnum;
import org.openapis.openapi.models.operations.DescribeVoicesLanguageCodeEnum;
import org.openapis.openapi.models.operations.DescribeVoicesRequest;
import org.openapis.openapi.models.operations.DescribeVoicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVoicesRequest req = new DescribeVoicesRequest() {{
                engine = DescribeVoicesEngineEnum.STANDARD;
                includeAdditionalLanguageCodes = false;
                languageCode = DescribeVoicesLanguageCodeEnum.TRTR;
                nextToken = "placeat";
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            DescribeVoicesResponse res = sdk.sdk.describeVoices(req);

            if (res.describeVoicesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLexicon

Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLexiconRequest;
import org.openapis.openapi.models.operations.GetLexiconResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLexiconRequest req = new GetLexiconRequest("veritatis") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            GetLexiconResponse res = sdk.sdk.getLexicon(req);

            if (res.getLexiconOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpeechSynthesisTask

Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpeechSynthesisTaskRequest;
import org.openapis.openapi.models.operations.GetSpeechSynthesisTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpeechSynthesisTaskRequest req = new GetSpeechSynthesisTaskRequest("at") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }};            

            GetSpeechSynthesisTaskResponse res = sdk.sdk.getSpeechSynthesisTask(req);

            if (res.getSpeechSynthesisTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLexicons

Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLexiconsRequest;
import org.openapis.openapi.models.operations.ListLexiconsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLexiconsRequest req = new ListLexiconsRequest() {{
                nextToken = "dicta";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            ListLexiconsResponse res = sdk.sdk.listLexicons(req);

            if (res.listLexiconsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSpeechSynthesisTasks

Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSpeechSynthesisTasksRequest;
import org.openapis.openapi.models.operations.ListSpeechSynthesisTasksResponse;
import org.openapis.openapi.models.operations.ListSpeechSynthesisTasksStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSpeechSynthesisTasksRequest req = new ListSpeechSynthesisTasksRequest() {{
                maxResults = 105907L;
                nextToken = "commodi";
                status = ListSpeechSynthesisTasksStatusEnum.IN_PROGRESS;
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListSpeechSynthesisTasksResponse res = sdk.sdk.listSpeechSynthesisTasks(req);

            if (res.listSpeechSynthesisTasksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLexicon

<p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLexiconRequest;
import org.openapis.openapi.models.operations.PutLexiconRequestBody;
import org.openapis.openapi.models.operations.PutLexiconResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLexiconRequest req = new PutLexiconRequest("perferendis",                 new PutLexiconRequestBody("ad");) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            PutLexiconResponse res = sdk.sdk.putLexicon(req);

            if (res.putLexiconOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSpeechSynthesisTask

Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequest;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBody;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBodyEngineEnum;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBodyTextTypeEnum;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
import org.openapis.openapi.models.operations.StartSpeechSynthesisTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpeechMarkTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSpeechSynthesisTaskRequest req = new StartSpeechSynthesisTaskRequest(                new StartSpeechSynthesisTaskRequestBody(StartSpeechSynthesisTaskRequestBodyOutputFormatEnum.OGG_VORBIS, "in", "corporis", StartSpeechSynthesisTaskRequestBodyVoiceIdEnum.RUBEN) {{
                                engine = StartSpeechSynthesisTaskRequestBodyEngineEnum.STANDARD;
                                languageCode = StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum.DE_AT;
                                lexiconNames = new String[]{{
                                    add("architecto"),
                                    add("ipsa"),
                                    add("reiciendis"),
                                }};
                                outputS3KeyPrefix = "est";
                                sampleRate = "mollitia";
                                snsTopicArn = "laborum";
                                speechMarkTypes = new org.openapis.openapi.models.shared.SpeechMarkTypeEnum[]{{
                                    add(SpeechMarkTypeEnum.SENTENCE),
                                }};
                                textType = StartSpeechSynthesisTaskRequestBodyTextTypeEnum.SSML;
                            }};) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            StartSpeechSynthesisTaskResponse res = sdk.sdk.startSpeechSynthesisTask(req);

            if (res.startSpeechSynthesisTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## synthesizeSpeech

Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequest;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBody;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBodyEngineEnum;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBodyLanguageCodeEnum;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBodyOutputFormatEnum;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBodyTextTypeEnum;
import org.openapis.openapi.models.operations.SynthesizeSpeechRequestBodyVoiceIdEnum;
import org.openapis.openapi.models.operations.SynthesizeSpeechResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpeechMarkTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SynthesizeSpeechRequest req = new SynthesizeSpeechRequest(                new SynthesizeSpeechRequestBody(SynthesizeSpeechRequestBodyOutputFormatEnum.MP3, "culpa", SynthesizeSpeechRequestBodyVoiceIdEnum.KAZUHA) {{
                                engine = SynthesizeSpeechRequestBodyEngineEnum.NEURAL;
                                languageCode = SynthesizeSpeechRequestBodyLanguageCodeEnum.DA_DK;
                                lexiconNames = new String[]{{
                                    add("dolorem"),
                                    add("culpa"),
                                    add("consequuntur"),
                                }};
                                sampleRate = "repellat";
                                speechMarkTypes = new org.openapis.openapi.models.shared.SpeechMarkTypeEnum[]{{
                                    add(SpeechMarkTypeEnum.VISEME),
                                    add(SpeechMarkTypeEnum.SSML),
                                    add(SpeechMarkTypeEnum.SSML),
                                }};
                                textType = SynthesizeSpeechRequestBodyTextTypeEnum.SSML;
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            SynthesizeSpeechResponse res = sdk.sdk.synthesizeSpeech(req);

            if (res.synthesizeSpeechOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
