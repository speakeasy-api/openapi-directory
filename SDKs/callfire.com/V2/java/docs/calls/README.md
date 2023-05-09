# calls

### Available Operations

* [addCallBroadcastBatch](#addcallbroadcastbatch) - Add batches to a call broadcast
* [addCallBroadcastRecipients](#addcallbroadcastrecipients) - Add recipients to a call broadcast
* [archiveVoiceBroadcast](#archivevoicebroadcast) - Archive voice broadcast
* [createCallBroadcast](#createcallbroadcast) - Create a call broadcast
* [findCallBroadcasts](#findcallbroadcasts) - Find call broadcasts
* [findCalls](#findcalls) - Find calls
* [getCall](#getcall) - Find a specific call
* [getCallBroadcast](#getcallbroadcast) - Find a specific call broadcast
* [getCallBroadcastBatches](#getcallbroadcastbatches) - Find batches in a call broadcast
* [getCallBroadcastCalls](#getcallbroadcastcalls) - Find calls in a call broadcast
* [getCallBroadcastStats](#getcallbroadcaststats) - Get statistics on call broadcast
* [getCallRecording](#getcallrecording) - Get call recording by id
* [getCallRecordingByName](#getcallrecordingbyname) - Get call recording by name
* [getCallRecordingMp3](#getcallrecordingmp3) - Get call recording in mp3 format
* [getCallRecordingMp3ByName](#getcallrecordingmp3byname) - Get call mp3 recording by name
* [getCallRecordings](#getcallrecordings) - Get call recordings for a call
* [sendCalls](#sendcalls) - Send calls
* [startVoiceBroadcast](#startvoicebroadcast) - Start voice broadcast
* [stopVoiceBroadcast](#stopvoicebroadcast) - Stop voice broadcast
* [toggleCallBroadcastRecipientsStatus](#togglecallbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateCallBroadcast](#updatecallbroadcast) - Update a call broadcast

## addCallBroadcastBatch

The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchRequest;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchResponse;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchSecurity;
import org.openapis.openapi.models.shared.BatchRequest;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddCallBroadcastBatchRequest req = new AddCallBroadcastBatchRequest(118274L) {{
                batchRequest = new BatchRequest() {{
                    contactListId = 720633L;
                    name = "Seth Conroy";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }};
                            contactId = 736918L;
                            fromNumber = "esse";
                            phoneNumber = "ipsum";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                                put("sed", "iste");
                            }};
                            contactId = 222321L;
                            fromNumber = "natus";
                            phoneNumber = "laboriosam";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("saepe", "fuga");
                                put("in", "corporis");
                                put("iste", "iure");
                                put("saepe", "quidem");
                            }};
                            contactId = 99280L;
                            fromNumber = "ipsa";
                            phoneNumber = "reiciendis";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("mollitia", "laborum");
                                put("dolores", "dolorem");
                                put("corporis", "explicabo");
                            }};
                            contactId = 750686L;
                            fromNumber = "enim";
                            phoneNumber = "omnis";
                        }}),
                    }};
                    scrubDuplicates = false;
                }};;
                strictValidation = false;
            }};            

            AddCallBroadcastBatchResponse res = sdk.calls.addCallBroadcastBatch(req, new AddCallBroadcastBatchSecurity("nemo", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addCallBroadcastRecipients

Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCallBroadcastRecipientsRequest;
import org.openapis.openapi.models.operations.AddCallBroadcastRecipientsResponse;
import org.openapis.openapi.models.operations.AddCallBroadcastRecipientsSecurity;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddCallBroadcastRecipientsRequest req = new AddCallBroadcastRecipientsRequest(570197L) {{
                requestBody = new org.openapis.openapi.models.shared.Recipient[]{{
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("culpa", "doloribus");
                            put("sapiente", "architecto");
                        }};
                        contactId = 652790L;
                        fromNumber = "dolorem";
                        phoneNumber = "culpa";
                    }}),
                }};
                fields = "consequuntur";
                strictValidation = false;
            }};            

            AddCallBroadcastRecipientsResponse res = sdk.calls.addCallBroadcastRecipients(req, new AddCallBroadcastRecipientsSecurity("repellat", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archiveVoiceBroadcast

Archives a voice broadcast (voice broadcast will be hidden in search results)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveVoiceBroadcastRequest;
import org.openapis.openapi.models.operations.ArchiveVoiceBroadcastResponse;
import org.openapis.openapi.models.operations.ArchiveVoiceBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArchiveVoiceBroadcastRequest req = new ArchiveVoiceBroadcastRequest(581850L);            

            ArchiveVoiceBroadcastResponse res = sdk.calls.archiveVoiceBroadcast(req, new ArchiveVoiceBroadcastSecurity("numquam", "commodi") {{
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

## createCallBroadcast

Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallBroadcastRequest;
import org.openapis.openapi.models.operations.CreateCallBroadcastResponse;
import org.openapis.openapi.models.operations.CreateCallBroadcastSecurity;
import org.openapis.openapi.models.shared.CallBroadcastAnsweringMachineConfigEnum;
import org.openapis.openapi.models.shared.CallBroadcastInput;
import org.openapis.openapi.models.shared.CallBroadcastSounds;
import org.openapis.openapi.models.shared.CallBroadcastSoundsDncSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsLiveSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsMachineSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsTransferSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.LocalDate;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.LocalTimeRestriction;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.Schedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCallBroadcastRequest req = new CreateCallBroadcastRequest() {{
                callBroadcastInput = new CallBroadcastInput() {{
                    answeringMachineConfig = CallBroadcastAnsweringMachineConfigEnum.AM_AND_LIVE;
                    dialplanXml = "molestiae";
                    fromNumber = "velit";
                    id = 623510L;
                    labels = new String[]{{
                        add("quis"),
                    }};
                    localTimeRestriction = new LocalTimeRestriction() {{
                        beginHour = 110375;
                        beginMinute = 674752;
                        enabled = false;
                        endHour = 656330;
                        endMinute = 317202;
                    }};;
                    maxActive = 138183;
                    maxActiveTransfers = 778346;
                    name = "Mandy Hills";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("error", "temporibus");
                            }};
                            contactId = 673660L;
                            fromNumber = "quasi";
                            phoneNumber = "reiciendis";
                        }}),
                    }};
                    resumeNextDay = false;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 976460;
                        minutesBetweenAttempts = 878194;
                        retryPhoneTypes = new String[]{{
                            add("praesentium"),
                            add("voluptatibus"),
                        }};
                        retryResults = new String[]{{
                            add("omnis"),
                        }};
                    }};;
                    schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                        add(new Schedule() {{
                            campaignId = 739264L;
                            daysOfWeek = new String[]{{
                                add("doloremque"),
                            }};
                            id = 441711L;
                            startDate = new LocalDate() {{
                                day = 282807;
                                month = 979587;
                                year = 120196;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 359444;
                                minute = 296140;
                                nano = 480894;
                                second = 118727;
                            }};
                            stopDate = new LocalDate() {{
                                day = 688661;
                                month = 317983;
                                year = 880476;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 414263;
                                minute = 918236;
                                nano = 64147;
                                second = 216822;
                            }};
                            timeZone = "quidem";
                        }}),
                        add(new Schedule() {{
                            campaignId = 565189L;
                            daysOfWeek = new String[]{{
                                add("pariatur"),
                                add("modi"),
                                add("praesentium"),
                            }};
                            id = 523248L;
                            startDate = new LocalDate() {{
                                day = 916723;
                                month = 93940;
                                year = 921158;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 575947;
                                minute = 83112;
                                nano = 929297;
                                second = 277718;
                            }};
                            stopDate = new LocalDate() {{
                                day = 318569;
                                month = 9356;
                                year = 667411;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 842342;
                                minute = 131797;
                                nano = 647174;
                                second = 716327;
                            }};
                            timeZone = "quibusdam";
                        }}),
                    }};
                    sounds = new CallBroadcastSounds() {{
                        dncDigit = "labore";
                        dncSoundId = 264730L;
                        dncSoundText = "qui";
                        dncSoundTextVoice = CallBroadcastSoundsDncSoundTextVoiceEnum.FEMALE1;
                        liveSoundId = 586513L;
                        liveSoundText = "quos";
                        liveSoundTextVoice = CallBroadcastSoundsLiveSoundTextVoiceEnum.MALE1;
                        machineSoundId = 164940L;
                        machineSoundText = "assumenda";
                        machineSoundTextVoice = CallBroadcastSoundsMachineSoundTextVoiceEnum.FEMALE1;
                        transferDigit = "alias";
                        transferNumber = "fugit";
                        transferSoundId = 677817L;
                        transferSoundText = "excepturi";
                        transferSoundTextVoice = CallBroadcastSoundsTransferSoundTextVoiceEnum.FEMALE1;
                    }};;
                }};;
                start = false;
                strictValidation = false;
            }};            

            CreateCallBroadcastResponse res = sdk.calls.createCallBroadcast(req, new CreateCallBroadcastSecurity("facilis", "tempore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findCallBroadcasts

Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindCallBroadcastsRequest;
import org.openapis.openapi.models.operations.FindCallBroadcastsResponse;
import org.openapis.openapi.models.operations.FindCallBroadcastsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindCallBroadcastsRequest req = new FindCallBroadcastsRequest() {{
                fields = "labore";
                intervalBegin = 962189L;
                intervalEnd = 433288L;
                label = "non";
                limit = 756107;
                name = "Gilbert Medhurst";
                offset = 638921;
                running = false;
                scheduled = false;
            }};            

            FindCallBroadcastsResponse res = sdk.calls.findCallBroadcasts(req, new FindCallBroadcastsSecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callBroadcastPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findCalls

To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindCallsRequest;
import org.openapis.openapi.models.operations.FindCallsResponse;
import org.openapis.openapi.models.operations.FindCallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindCallsRequest req = new FindCallsRequest() {{
                batchId = 952749L;
                campaignId = 680056L;
                fields = "in";
                fromNumber = "in";
                id = new Long[]{{
                    add(978571L),
                    add(699479L),
                    add(116202L),
                    add(297437L),
                }};
                inbound = false;
                intervalBegin = 767024L;
                intervalEnd = 813798L;
                label = "ea";
                limit = 396506;
                offset = 675439;
                results = "accusamus";
                states = "non";
                toNumber = "occaecati";
            }};            

            FindCallsResponse res = sdk.calls.findCalls(req, new FindCallsSecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCall

Returns a single Call instance for a given call id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRequest;
import org.openapis.openapi.models.operations.GetCallResponse;
import org.openapis.openapi.models.operations.GetCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRequest req = new GetCallRequest(965417L) {{
                fields = "quidem";
            }};            

            GetCallResponse res = sdk.calls.getCall(req, new GetCallSecurity("provident", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallBroadcast

Returns a single CallBroadcast instance for a given call broadcast campaign id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallBroadcastRequest;
import org.openapis.openapi.models.operations.GetCallBroadcastResponse;
import org.openapis.openapi.models.operations.GetCallBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallBroadcastRequest req = new GetCallBroadcastRequest(659669L) {{
                fields = "blanditiis";
            }};            

            GetCallBroadcastResponse res = sdk.calls.getCallBroadcast(req, new GetCallBroadcastSecurity("deleniti", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallBroadcastBatchesRequest;
import org.openapis.openapi.models.operations.GetCallBroadcastBatchesResponse;
import org.openapis.openapi.models.operations.GetCallBroadcastBatchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallBroadcastBatchesRequest req = new GetCallBroadcastBatchesRequest(230533L) {{
                fields = "deserunt";
                limit = 394869;
                offset = 423855;
            }};            

            GetCallBroadcastBatchesResponse res = sdk.calls.getCallBroadcastBatches(req, new GetCallBroadcastBatchesSecurity("natus", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.batchPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallBroadcastCalls

This endpoint will enable the user to page through all calls for a particular call broadcast campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallBroadcastCallsRequest;
import org.openapis.openapi.models.operations.GetCallBroadcastCallsResponse;
import org.openapis.openapi.models.operations.GetCallBroadcastCallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallBroadcastCallsRequest req = new GetCallBroadcastCallsRequest(474867L) {{
                batchId = 19193L;
                fields = "nihil";
                limit = 301575;
                offset = 716075;
            }};            

            GetCallBroadcastCallsResponse res = sdk.calls.getCallBroadcastCalls(req, new GetCallBroadcastCallsSecurity("id", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallBroadcastStats

Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallBroadcastStatsRequest;
import org.openapis.openapi.models.operations.GetCallBroadcastStatsResponse;
import org.openapis.openapi.models.operations.GetCallBroadcastStatsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallBroadcastStatsRequest req = new GetCallBroadcastStatsRequest(290077L) {{
                begin = 383462L;
                end = 618016L;
                fields = "nobis";
            }};            

            GetCallBroadcastStatsResponse res = sdk.calls.getCallBroadcastStats(req, new GetCallBroadcastStatsSecurity("eum", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callBroadcastStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallRecording

Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRecordingRequest;
import org.openapis.openapi.models.operations.GetCallRecordingResponse;
import org.openapis.openapi.models.operations.GetCallRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRecordingRequest req = new GetCallRecordingRequest(135474L) {{
                fields = "architecto";
            }};            

            GetCallRecordingResponse res = sdk.calls.getCallRecording(req, new GetCallRecordingSecurity("magnam", "et") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallRecordingByName

Returns recording metadata of particular call. Metadata contains link to a MP3 recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRecordingByNameRequest;
import org.openapis.openapi.models.operations.GetCallRecordingByNameResponse;
import org.openapis.openapi.models.operations.GetCallRecordingByNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRecordingByNameRequest req = new GetCallRecordingByNameRequest(569965L, "ullam") {{
                fields = "provident";
            }};            

            GetCallRecordingByNameResponse res = sdk.calls.getCallRecordingByName(req, new GetCallRecordingByNameSecurity("quos", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallRecordingMp3

Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRecordingMp3Request;
import org.openapis.openapi.models.operations.GetCallRecordingMp3Response;
import org.openapis.openapi.models.operations.GetCallRecordingMp3Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRecordingMp3Request req = new GetCallRecordingMp3Request(33625L);            

            GetCallRecordingMp3Response res = sdk.calls.getCallRecordingMp3(req, new GetCallRecordingMp3Security("mollitia", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.inputStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallRecordingMp3ByName

Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRecordingMp3ByNameRequest;
import org.openapis.openapi.models.operations.GetCallRecordingMp3ByNameResponse;
import org.openapis.openapi.models.operations.GetCallRecordingMp3ByNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRecordingMp3ByNameRequest req = new GetCallRecordingMp3ByNameRequest(652103L, "ad");            

            GetCallRecordingMp3ByNameResponse res = sdk.calls.getCallRecordingMp3ByName(req, new GetCallRecordingMp3ByNameSecurity("eum", "dolor") {{
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

## getCallRecordings

Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRecordingsRequest;
import org.openapis.openapi.models.operations.GetCallRecordingsResponse;
import org.openapis.openapi.models.operations.GetCallRecordingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRecordingsRequest req = new GetCallRecordingsRequest(896547L) {{
                fields = "odit";
            }};            

            GetCallRecordingsResponse res = sdk.calls.getCallRecordings(req, new GetCallRecordingsSecurity("nemo", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callRecordingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendCalls

Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendCallsDefaultVoiceEnum;
import org.openapis.openapi.models.operations.SendCallsRequest;
import org.openapis.openapi.models.operations.SendCallsResponse;
import org.openapis.openapi.models.operations.SendCallsSecurity;
import org.openapis.openapi.models.shared.CallRecipient;
import org.openapis.openapi.models.shared.CallRecipientVoiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendCallsRequest req = new SendCallsRequest() {{
                requestBody = new org.openapis.openapi.models.shared.CallRecipient[]{{
                    add(new CallRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("debitis", "eius");
                            put("maxime", "deleniti");
                            put("facilis", "in");
                            put("architecto", "architecto");
                        }};
                        contactId = 919483L;
                        dialplanXml = "ullam";
                        fromNumber = "expedita";
                        liveMessage = "nihil";
                        liveMessageSoundId = 998848L;
                        machineMessage = "quibusdam";
                        machineMessageSoundId = 149448L;
                        phoneNumber = "saepe";
                        transferDigit = "pariatur";
                        transferMessage = "accusantium";
                        transferMessageSoundId = 162493L;
                        transferNumber = "praesentium";
                        voice = CallRecipientVoiceEnum.SPANISH1;
                    }}),
                    add(new CallRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("sunt", "quo");
                        }};
                        contactId = 848009L;
                        dialplanXml = "pariatur";
                        fromNumber = "maxime";
                        liveMessage = "ea";
                        liveMessageSoundId = 569101L;
                        machineMessage = "odit";
                        machineMessageSoundId = 407183L;
                        phoneNumber = "accusantium";
                        transferDigit = "ab";
                        transferMessage = "maiores";
                        transferMessageSoundId = 697429L;
                        transferNumber = "ipsam";
                        voice = CallRecipientVoiceEnum.FEMALE2;
                    }}),
                }};
                campaignId = 420075L;
                defaultLiveMessage = "nam";
                defaultLiveMessageSoundId = 50588L;
                defaultMachineMessage = "pariatur";
                defaultMachineMessageSoundId = 365496L;
                defaultVoice = SendCallsDefaultVoiceEnum.FRENCHCANADIAN1;
                fields = "perferendis";
                strictValidation = false;
            }};            

            SendCallsResponse res = sdk.calls.sendCalls(req, new SendCallsSecurity("fugiat", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startVoiceBroadcast

Start a voice broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartVoiceBroadcastRequest;
import org.openapis.openapi.models.operations.StartVoiceBroadcastResponse;
import org.openapis.openapi.models.operations.StartVoiceBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartVoiceBroadcastRequest req = new StartVoiceBroadcastRequest(11714L);            

            StartVoiceBroadcastResponse res = sdk.calls.startVoiceBroadcast(req, new StartVoiceBroadcastSecurity("cumque", "corporis") {{
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

## stopVoiceBroadcast

Stop a voice broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopVoiceBroadcastRequest;
import org.openapis.openapi.models.operations.StopVoiceBroadcastResponse;
import org.openapis.openapi.models.operations.StopVoiceBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopVoiceBroadcastRequest req = new StopVoiceBroadcastRequest(944124L);            

            StopVoiceBroadcastResponse res = sdk.calls.stopVoiceBroadcast(req, new StopVoiceBroadcastSecurity("libero", "nobis") {{
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

## toggleCallBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed recipients in created broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToggleCallBroadcastRecipientsStatusRequest;
import org.openapis.openapi.models.operations.ToggleCallBroadcastRecipientsStatusResponse;
import org.openapis.openapi.models.operations.ToggleCallBroadcastRecipientsStatusSecurity;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToggleCallBroadcastRecipientsStatusRequest req = new ToggleCallBroadcastRecipientsStatusRequest(171629L) {{
                requestBody = new org.openapis.openapi.models.shared.Recipient[]{{
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("dignissimos", "eaque");
                            put("quis", "nesciunt");
                            put("eos", "perferendis");
                        }};
                        contactId = 170986L;
                        fromNumber = "minus";
                        phoneNumber = "quam";
                    }}),
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("vero", "nostrum");
                        }};
                        contactId = 944120L;
                        fromNumber = "recusandae";
                        phoneNumber = "omnis";
                    }}),
                }};
                enable = false;
            }};            

            ToggleCallBroadcastRecipientsStatusResponse res = sdk.calls.toggleCallBroadcastRecipientsStatus(req, new ToggleCallBroadcastRecipientsStatusSecurity("facilis", "perspiciatis") {{
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

## updateCallBroadcast

This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallBroadcastRequest;
import org.openapis.openapi.models.operations.UpdateCallBroadcastResponse;
import org.openapis.openapi.models.operations.UpdateCallBroadcastSecurity;
import org.openapis.openapi.models.shared.CallBroadcastAnsweringMachineConfigEnum;
import org.openapis.openapi.models.shared.CallBroadcastInput;
import org.openapis.openapi.models.shared.CallBroadcastSounds;
import org.openapis.openapi.models.shared.CallBroadcastSoundsDncSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsLiveSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsMachineSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.CallBroadcastSoundsTransferSoundTextVoiceEnum;
import org.openapis.openapi.models.shared.LocalDate;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.LocalTimeRestriction;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.Schedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCallBroadcastRequest req = new UpdateCallBroadcastRequest(31838L) {{
                callBroadcastInput = new CallBroadcastInput() {{
                    answeringMachineConfig = CallBroadcastAnsweringMachineConfigEnum.LIVE_IMMEDIATE;
                    dialplanXml = "consequuntur";
                    fromNumber = "blanditiis";
                    id = 621479L;
                    labels = new String[]{{
                        add("occaecati"),
                    }};
                    localTimeRestriction = new LocalTimeRestriction() {{
                        beginHour = 699098;
                        beginMinute = 237893;
                        enabled = false;
                        endHour = 992397;
                        endMinute = 934214;
                    }};;
                    maxActive = 267262;
                    maxActiveTransfers = 613966;
                    name = "Casey Stracke";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("quaerat", "quos");
                                put("aliquid", "dolorem");
                                put("dolorem", "dolor");
                                put("qui", "ipsum");
                            }};
                            contactId = 944373L;
                            fromNumber = "excepturi";
                            phoneNumber = "cum";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("dignissimos", "reiciendis");
                                put("amet", "dolorum");
                            }};
                            contactId = 254356L;
                            fromNumber = "veritatis";
                            phoneNumber = "ipsa";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("iure", "odio");
                            }};
                            contactId = 311796L;
                            fromNumber = "accusamus";
                            phoneNumber = "quidem";
                        }}),
                    }};
                    resumeNextDay = false;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 976405;
                        minutesBetweenAttempts = 377752;
                        retryPhoneTypes = new String[]{{
                            add("eos"),
                            add("atque"),
                            add("sit"),
                        }};
                        retryResults = new String[]{{
                            add("ab"),
                            add("soluta"),
                            add("dolorum"),
                            add("iusto"),
                        }};
                    }};;
                    schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                        add(new Schedule() {{
                            campaignId = 677082L;
                            daysOfWeek = new String[]{{
                                add("omnis"),
                                add("necessitatibus"),
                                add("distinctio"),
                            }};
                            id = 990339L;
                            startDate = new LocalDate() {{
                                day = 469497;
                                month = 216897;
                                year = 456015;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 663078;
                                minute = 906418;
                                nano = 263322;
                                second = 137220;
                            }};
                            stopDate = new LocalDate() {{
                                day = 20651;
                                month = 229219;
                                year = 758379;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 881586;
                                minute = 320017;
                                nano = 904425;
                                second = 383464;
                            }};
                            timeZone = "deserunt";
                        }}),
                        add(new Schedule() {{
                            campaignId = 588317L;
                            daysOfWeek = new String[]{{
                                add("repellendus"),
                                add("totam"),
                            }};
                            id = 628982L;
                            startDate = new LocalDate() {{
                                day = 55;
                                month = 872651;
                                year = 311860;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 273542;
                                minute = 425451;
                                nano = 798047;
                                second = 885338;
                            }};
                            stopDate = new LocalDate() {{
                                day = 185636;
                                month = 679880;
                                year = 952792;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 456130;
                                minute = 687488;
                                nano = 483409;
                                second = 215507;
                            }};
                            timeZone = "quisquam";
                        }}),
                    }};
                    sounds = new CallBroadcastSounds() {{
                        dncDigit = "tenetur";
                        dncSoundId = 229442L;
                        dncSoundText = "tempore";
                        dncSoundTextVoice = CallBroadcastSoundsDncSoundTextVoiceEnum.FRENCHCANADIAN1;
                        liveSoundId = 253941L;
                        liveSoundText = "enim";
                        liveSoundTextVoice = CallBroadcastSoundsLiveSoundTextVoiceEnum.FEMALE1;
                        machineSoundId = 957451L;
                        machineSoundText = "totam";
                        machineSoundTextVoice = CallBroadcastSoundsMachineSoundTextVoiceEnum.FEMALE2;
                        transferDigit = "sit";
                        transferNumber = "expedita";
                        transferSoundId = 207470L;
                        transferSoundText = "sed";
                        transferSoundTextVoice = CallBroadcastSoundsTransferSoundTextVoiceEnum.FEMALE2;
                    }};;
                }};;
                strictValidation = false;
            }};            

            UpdateCallBroadcastResponse res = sdk.calls.updateCallBroadcast(req, new UpdateCallBroadcastSecurity("libero", "voluptas") {{
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
