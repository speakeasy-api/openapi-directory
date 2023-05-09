# campaigns

### Available Operations

* [deleteCampaignSound](#deletecampaignsound) - Delete a specific sound
* [findCampaignSounds](#findcampaignsounds) - Find sounds
* [getCampaignBatch](#getcampaignbatch) - Find a specific batch
* [getCampaignSound](#getcampaignsound) - Find a specific sound
* [getCampaignSoundDataMp3](#getcampaignsounddatamp3) - Download a MP3 sound
* [getCampaignSoundDataWav](#getcampaignsounddatawav) - Download a WAV sound
* [postCallCampaignSound](#postcallcampaignsound) - Add sound via call
* [postFileCampaignSound](#postfilecampaignsound) - Add sound via file
* [postTTSCampaignSound](#postttscampaignsound) - Add sound via text-to-speech
* [updateCampaignBatch](#updatecampaignbatch) - Update a batch

## deleteCampaignSound

Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCampaignSoundRequest;
import org.openapis.openapi.models.operations.DeleteCampaignSoundResponse;
import org.openapis.openapi.models.operations.DeleteCampaignSoundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCampaignSoundRequest req = new DeleteCampaignSoundRequest(646265L);            

            DeleteCampaignSoundResponse res = sdk.campaigns.deleteCampaignSound(req, new DeleteCampaignSoundSecurity("quam", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findCampaignSounds

To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindCampaignSoundsRequest;
import org.openapis.openapi.models.operations.FindCampaignSoundsResponse;
import org.openapis.openapi.models.operations.FindCampaignSoundsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindCampaignSoundsRequest req = new FindCampaignSoundsRequest() {{
                fields = "incidunt";
                filter = "qui";
                includeArchived = false;
                includePending = false;
                includeScrubbed = false;
                limit = 586784;
                offset = 807581;
            }};            

            FindCampaignSoundsResponse res = sdk.campaigns.findCampaignSounds(req, new FindCampaignSoundsSecurity("pariatur", "soluta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.campaignSoundPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignBatch

Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignBatchRequest;
import org.openapis.openapi.models.operations.GetCampaignBatchResponse;
import org.openapis.openapi.models.operations.GetCampaignBatchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCampaignBatchRequest req = new GetCampaignBatchRequest(117531L) {{
                fields = "laborum";
            }};            

            GetCampaignBatchResponse res = sdk.campaigns.getCampaignBatch(req, new GetCampaignBatchSecurity("totam", "incidunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.batch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignSound

Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignSoundRequest;
import org.openapis.openapi.models.operations.GetCampaignSoundResponse;
import org.openapis.openapi.models.operations.GetCampaignSoundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCampaignSoundRequest req = new GetCampaignSoundRequest(132068L) {{
                fields = "dolores";
            }};            

            GetCampaignSoundResponse res = sdk.campaigns.getCampaignSound(req, new GetCampaignSoundSecurity("distinctio", "facilis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.campaignSound != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignSoundDataMp3

Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignSoundDataMp3Request;
import org.openapis.openapi.models.operations.GetCampaignSoundDataMp3Response;
import org.openapis.openapi.models.operations.GetCampaignSoundDataMp3Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCampaignSoundDataMp3Request req = new GetCampaignSoundDataMp3Request(396060L);            

            GetCampaignSoundDataMp3Response res = sdk.campaigns.getCampaignSoundDataMp3(req, new GetCampaignSoundDataMp3Security("quam", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignSoundDataWav

Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignSoundDataWavRequest;
import org.openapis.openapi.models.operations.GetCampaignSoundDataWavResponse;
import org.openapis.openapi.models.operations.GetCampaignSoundDataWavSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCampaignSoundDataWavRequest req = new GetCampaignSoundDataWavRequest(840429L);            

            GetCampaignSoundDataWavResponse res = sdk.campaigns.getCampaignSoundDataWav(req, new GetCampaignSoundDataWavSecurity("qui", "neque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCallCampaignSound

Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCallCampaignSoundRequest;
import org.openapis.openapi.models.operations.PostCallCampaignSoundResponse;
import org.openapis.openapi.models.operations.PostCallCampaignSoundSecurity;
import org.openapis.openapi.models.shared.CallCreateSound;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCallCampaignSoundRequest req = new PostCallCampaignSoundRequest() {{
                callCreateSound = new CallCreateSound() {{
                    name = "Mrs. Louise Kuhlman";
                    toNumber = "hic";
                }};;
                fields = "voluptatem";
            }};            

            PostCallCampaignSoundResponse res = sdk.campaigns.postCallCampaignSound(req, new PostCallCampaignSoundSecurity("cumque", "soluta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.campaignSound != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFileCampaignSound

Create a campaign sound file via a supplied .mp3 or .wav file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFileCampaignSoundRequest;
import org.openapis.openapi.models.operations.PostFileCampaignSoundRequestBody;
import org.openapis.openapi.models.operations.PostFileCampaignSoundRequestBodyFile;
import org.openapis.openapi.models.operations.PostFileCampaignSoundResponse;
import org.openapis.openapi.models.operations.PostFileCampaignSoundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFileCampaignSoundRequest req = new PostFileCampaignSoundRequest(                new PostFileCampaignSoundRequestBody(                new PostFileCampaignSoundRequestBodyFile("nobis".getBytes(), "et");) {{
                                name = "Dale Boehm";
                            }};) {{
                fields = "tempore";
            }};            

            PostFileCampaignSoundResponse res = sdk.campaigns.postFileCampaignSound(req, new PostFileCampaignSoundSecurity("cupiditate", "aperiam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.campaignSound != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTTSCampaignSound

Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTTSCampaignSoundRequest;
import org.openapis.openapi.models.operations.PostTTSCampaignSoundResponse;
import org.openapis.openapi.models.operations.PostTTSCampaignSoundSecurity;
import org.openapis.openapi.models.shared.TextToSpeech;
import org.openapis.openapi.models.shared.TextToSpeechVoiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTTSCampaignSoundRequest req = new PostTTSCampaignSoundRequest() {{
                textToSpeech = new TextToSpeech() {{
                    message = "delectus";
                    voice = TextToSpeechVoiceEnum.FEMALE1;
                }};;
                fields = "dolore";
            }};            

            PostTTSCampaignSoundResponse res = sdk.campaigns.postTTSCampaignSound(req, new PostTTSCampaignSoundSecurity("labore", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.campaignSound != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCampaignBatch

Updates a single Batch instance, currently batch can only be turned "on/off"

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCampaignBatchRequest;
import org.openapis.openapi.models.operations.UpdateCampaignBatchResponse;
import org.openapis.openapi.models.operations.UpdateCampaignBatchSecurity;
import org.openapis.openapi.models.shared.BatchInput;
import org.openapis.openapi.models.shared.BatchStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCampaignBatchRequest req = new UpdateCampaignBatchRequest(677263L) {{
                batchInput = new BatchInput() {{
                    broadcastId = 100294L;
                    enabled = false;
                    id = 63038L;
                    name = "Miss Billie Ward";
                    status = BatchStatusEnum.SOURCE_ERROR;
                }};;
            }};            

            UpdateCampaignBatchResponse res = sdk.campaigns.updateCampaignBatch(req, new UpdateCampaignBatchSecurity("doloribus", "ut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
