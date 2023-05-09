# texts

### Available Operations

* [addTextBroadcastBatch](#addtextbroadcastbatch) - Add batches to a text broadcast
* [addTextBroadcastRecipients](#addtextbroadcastrecipients) - Add recipients to a text broadcast
* [archiveTextBroadcast](#archivetextbroadcast) - Archive text broadcast
* [createTextAutoReply](#createtextautoreply) - Create an auto reply
* [createTextBroadcast](#createtextbroadcast) - Create a text broadcast
* [deleteTextAutoReply](#deletetextautoreply) - Delete an auto reply
* [findTextAutoReplys](#findtextautoreplys) - Find auto replies
* [findTextBroadcasts](#findtextbroadcasts) - Find text broadcasts
* [findTexts](#findtexts) - Find texts
* [getText](#gettext) - Find a specific text
* [getTextAutoReply](#gettextautoreply) - Find a specific auto reply
* [getTextBroadcast](#gettextbroadcast) - Find a specific text broadcast
* [getTextBroadcastBatches](#gettextbroadcastbatches) - Find batches in a text broadcast
* [getTextBroadcastStats](#gettextbroadcaststats) - Get statistics on text broadcast
* [getTextBroadcastTexts](#gettextbroadcasttexts) - Find texts in a text broadcast
* [sendTexts](#sendtexts) - Send texts
* [startTextBroadcast](#starttextbroadcast) - Start text broadcast
* [stopTextBroadcast](#stoptextbroadcast) - Stop text broadcast
* [toggleTextBroadcastRecipientsStatus](#toggletextbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateTextBroadcast](#updatetextbroadcast) - Update a text broadcast

## addTextBroadcastBatch

Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTextBroadcastBatchRequest;
import org.openapis.openapi.models.operations.AddTextBroadcastBatchResponse;
import org.openapis.openapi.models.operations.AddTextBroadcastBatchSecurity;
import org.openapis.openapi.models.shared.BatchRequest;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTextBroadcastBatchRequest req = new AddTextBroadcastBatchRequest(928219L) {{
                batchRequest = new BatchRequest() {{
                    contactListId = 456520L;
                    name = "Alvin Kemmer";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("quasi", "animi");
                                put("nostrum", "mollitia");
                            }};
                            contactId = 591027L;
                            fromNumber = "possimus";
                            phoneNumber = "animi";
                        }}),
                    }};
                    scrubDuplicates = false;
                }};;
                strictValidation = false;
            }};            

            AddTextBroadcastBatchResponse res = sdk.texts.addTextBroadcastBatch(req, new AddTextBroadcastBatchSecurity("ex", "aliquid") {{
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

## addTextBroadcastRecipients

Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTextBroadcastRecipientsRequest;
import org.openapis.openapi.models.operations.AddTextBroadcastRecipientsResponse;
import org.openapis.openapi.models.operations.AddTextBroadcastRecipientsSecurity;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.TextRecipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTextBroadcastRecipientsRequest req = new AddTextBroadcastRecipientsRequest(37565L) {{
                requestBody = new org.openapis.openapi.models.shared.TextRecipient[]{{
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("ullam", "in");
                            put("nam", "earum");
                            put("officia", "laborum");
                            put("placeat", "modi");
                        }};
                        contactId = 976226L;
                        fromNumber = "molestias";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 956933L;
                                created = 764562L;
                                id = 113486L;
                                lengthInBytes = 698249L;
                                mediaType = "tempora";
                                name = "Carolyn Corkery Jr.";
                                publicUrl = "velit";
                            }}),
                            add(new Media() {{
                                accountId = 137251L;
                                created = 432281L;
                                id = 260628L;
                                lengthInBytes = 521996L;
                                mediaType = "at";
                                name = "Craig Williamson II";
                                publicUrl = "beatae";
                            }}),
                            add(new Media() {{
                                accountId = 583404L;
                                created = 589695L;
                                id = 936469L;
                                lengthInBytes = 745398L;
                                mediaType = "hic";
                                name = "Timothy Weber";
                                publicUrl = "debitis";
                            }}),
                            add(new Media() {{
                                accountId = 399802L;
                                created = 780931L;
                                id = 380335L;
                                lengthInBytes = 211534L;
                                mediaType = "fugit";
                                name = "Grant Dickens";
                                publicUrl = "nulla";
                            }}),
                        }};
                        message = "consequatur";
                        phoneNumber = "quasi";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("ducimus", "natus");
                        }};
                        contactId = 581082L;
                        fromNumber = "suscipit";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 96562L;
                                created = 169025L;
                                id = 984934L;
                                lengthInBytes = 859581L;
                                mediaType = "necessitatibus";
                                name = "Anita Kovacek IV";
                                publicUrl = "esse";
                            }}),
                        }};
                        message = "praesentium";
                        phoneNumber = "maiores";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("vel", "architecto");
                            put("fugiat", "doloremque");
                            put("dicta", "odio");
                            put("tempora", "esse");
                        }};
                        contactId = 403793L;
                        fromNumber = "consectetur";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 58870L;
                                created = 671384L;
                                id = 123844L;
                                lengthInBytes = 344718L;
                                mediaType = "fugiat";
                                name = "Gene Nikolaus";
                                publicUrl = "perferendis";
                            }}),
                            add(new Media() {{
                                accountId = 431760L;
                                created = 374753L;
                                id = 614528L;
                                lengthInBytes = 661607L;
                                mediaType = "ab";
                                name = "Woodrow Volkman";
                                publicUrl = "libero";
                            }}),
                        }};
                        message = "ad";
                        phoneNumber = "deleniti";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("vitae", "repellendus");
                            put("ex", "quo");
                        }};
                        contactId = 405373L;
                        fromNumber = "ut";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 713927L;
                                created = 29950L;
                                id = 561577L;
                                lengthInBytes = 737254L;
                                mediaType = "aliquid";
                                name = "Miss Nora Moen";
                                publicUrl = "culpa";
                            }}),
                            add(new Media() {{
                                accountId = 29634L;
                                created = 959143L;
                                id = 889288L;
                                lengthInBytes = 103298L;
                                mediaType = "fuga";
                                name = "Ms. Doyle Barrows";
                                publicUrl = "ex";
                            }}),
                        }};
                        message = "sapiente";
                        phoneNumber = "rem";
                    }}),
                }};
                fields = "minus";
                strictValidation = false;
            }};            

            AddTextBroadcastRecipientsResponse res = sdk.texts.addTextBroadcastRecipients(req, new AddTextBroadcastRecipientsSecurity("nemo", "asperiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archiveTextBroadcast

Archives a text broadcast (and hides it in the search results)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveTextBroadcastRequest;
import org.openapis.openapi.models.operations.ArchiveTextBroadcastResponse;
import org.openapis.openapi.models.operations.ArchiveTextBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArchiveTextBroadcastRequest req = new ArchiveTextBroadcastRequest(190567L);            

            ArchiveTextBroadcastResponse res = sdk.texts.archiveTextBroadcast(req, new ArchiveTextBroadcastSecurity("ullam", "perferendis") {{
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

## createTextAutoReply

CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTextAutoReplyResponse;
import org.openapis.openapi.models.operations.CreateTextAutoReplySecurity;
import org.openapis.openapi.models.shared.TextAutoReply;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TextAutoReply req = new TextAutoReply() {{
                id = 848341L;
                keyword = "totam";
                match = "impedit";
                message = "quibusdam";
                number = "nam";
            }};            

            CreateTextAutoReplyResponse res = sdk.texts.createTextAutoReply(req, new CreateTextAutoReplySecurity("ipsam", "culpa") {{
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

## createTextBroadcast

Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTextBroadcastRequest;
import org.openapis.openapi.models.operations.CreateTextBroadcastResponse;
import org.openapis.openapi.models.operations.CreateTextBroadcastSecurity;
import org.openapis.openapi.models.shared.LocalDate;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.LocalTimeRestriction;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.TextBroadcastBigMessageStrategyEnum;
import org.openapis.openapi.models.shared.TextBroadcastInput;
import org.openapis.openapi.models.shared.TextRecipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTextBroadcastRequest req = new CreateTextBroadcastRequest() {{
                textBroadcastInput = new TextBroadcastInput() {{
                    bigMessageStrategy = TextBroadcastBigMessageStrategyEnum.SEND_MULTIPLE;
                    fromNumber = "aliquam";
                    id = 80532L;
                    labels = new String[]{{
                        add("veritatis"),
                        add("tempora"),
                        add("dolor"),
                    }};
                    localTimeRestriction = new LocalTimeRestriction() {{
                        beginHour = 8689;
                        beginMinute = 100014;
                        enabled = false;
                        endHour = 24944;
                        endMinute = 265039;
                    }};;
                    maxActive = 144286;
                    media = new org.openapis.openapi.models.shared.Media[]{{
                        add(new Media() {{
                            accountId = 513760L;
                            created = 65604L;
                            id = 222658L;
                            lengthInBytes = 856277L;
                            mediaType = "ipsam";
                            name = "Cynthia Macejkovic";
                            publicUrl = "officiis";
                        }}),
                    }};
                    message = "esse";
                    name = "Aaron Hartmann";
                    recipients = new org.openapis.openapi.models.shared.TextRecipient[]{{
                        add(new TextRecipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "magnam");
                                put("exercitationem", "ab");
                            }};
                            contactId = 781480L;
                            fromNumber = "autem";
                            media = new org.openapis.openapi.models.shared.Media[]{{
                                add(new Media() {{
                                    accountId = 388319L;
                                    created = 927212L;
                                    id = 160393L;
                                    lengthInBytes = 28952L;
                                    mediaType = "exercitationem";
                                    name = "Arthur Huel";
                                    publicUrl = "est";
                                }}),
                                add(new Media() {{
                                    accountId = 690785L;
                                    created = 192718L;
                                    id = 987349L;
                                    lengthInBytes = 918092L;
                                    mediaType = "optio";
                                    name = "Herman Klocko";
                                    publicUrl = "voluptas";
                                }}),
                                add(new Media() {{
                                    accountId = 254025L;
                                    created = 364912L;
                                    id = 551079L;
                                    lengthInBytes = 260904L;
                                    mediaType = "aspernatur";
                                    name = "Peggy Parker";
                                    publicUrl = "quasi";
                                }}),
                                add(new Media() {{
                                    accountId = 524380L;
                                    created = 851854L;
                                    id = 117380L;
                                    lengthInBytes = 395544L;
                                    mediaType = "consequuntur";
                                    name = "Kimberly McDermott";
                                    publicUrl = "alias";
                                }}),
                            }};
                            message = "omnis";
                            phoneNumber = "eos";
                        }}),
                        add(new TextRecipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("iste", "magni");
                                put("inventore", "fuga");
                                put("accusamus", "voluptatibus");
                            }};
                            contactId = 719620L;
                            fromNumber = "omnis";
                            media = new org.openapis.openapi.models.shared.Media[]{{
                                add(new Media() {{
                                    accountId = 328379L;
                                    created = 507636L;
                                    id = 802692L;
                                    lengthInBytes = 300403L;
                                    mediaType = "temporibus";
                                    name = "Leslie Waters";
                                    publicUrl = "earum";
                                }}),
                                add(new Media() {{
                                    accountId = 267207L;
                                    created = 722184L;
                                    id = 877399L;
                                    lengthInBytes = 32901L;
                                    mediaType = "ipsam";
                                    name = "Mary Botsford";
                                    publicUrl = "enim";
                                }}),
                                add(new Media() {{
                                    accountId = 575213L;
                                    created = 858778L;
                                    id = 643678L;
                                    lengthInBytes = 458503L;
                                    mediaType = "nemo";
                                    name = "Monique Harvey";
                                    publicUrl = "impedit";
                                }}),
                                add(new Media() {{
                                    accountId = 945027L;
                                    created = 900103L;
                                    id = 991891L;
                                    lengthInBytes = 404306L;
                                    mediaType = "voluptas";
                                    name = "Van Bergnaum";
                                    publicUrl = "laborum";
                                }}),
                            }};
                            message = "consectetur";
                            phoneNumber = "velit";
                        }}),
                    }};
                    resumeNextDay = false;
                    schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                        add(new Schedule() {{
                            campaignId = 216457L;
                            daysOfWeek = new String[]{{
                                add("magni"),
                                add("soluta"),
                                add("repudiandae"),
                                add("nam"),
                            }};
                            id = 294076L;
                            startDate = new LocalDate() {{
                                day = 482892;
                                month = 453094;
                                year = 194023;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 493958;
                                minute = 205566;
                                nano = 778172;
                                second = 535468;
                            }};
                            stopDate = new LocalDate() {{
                                day = 844235;
                                month = 437814;
                                year = 139072;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 974990;
                                minute = 426904;
                                nano = 300824;
                                second = 842855;
                            }};
                            timeZone = "inventore";
                        }}),
                        add(new Schedule() {{
                            campaignId = 818034L;
                            daysOfWeek = new String[]{{
                                add("architecto"),
                                add("voluptatibus"),
                                add("quia"),
                            }};
                            id = 782090L;
                            startDate = new LocalDate() {{
                                day = 304198;
                                month = 247045;
                                year = 75359;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 36561;
                                minute = 424663;
                                nano = 406922;
                                second = 107617;
                            }};
                            stopDate = new LocalDate() {{
                                day = 877751;
                                month = 568218;
                                year = 431994;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 246557;
                                minute = 284086;
                                nano = 596433;
                                second = 935302;
                            }};
                            timeZone = "dicta";
                        }}),
                        add(new Schedule() {{
                            campaignId = 772266L;
                            daysOfWeek = new String[]{{
                                add("iste"),
                                add("itaque"),
                                add("alias"),
                                add("nisi"),
                            }};
                            id = 931505L;
                            startDate = new LocalDate() {{
                                day = 242178;
                                month = 673838;
                                year = 250398;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 224467;
                                minute = 483394;
                                nano = 24753;
                                second = 39992;
                            }};
                            stopDate = new LocalDate() {{
                                day = 7468;
                                month = 639705;
                                year = 927403;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 408303;
                                minute = 693153;
                                nano = 377406;
                                second = 705148;
                            }};
                            timeZone = "placeat";
                        }}),
                    }};
                }};;
                start = false;
                strictValidation = false;
            }};            

            CreateTextBroadcastResponse res = sdk.texts.createTextBroadcast(req, new CreateTextBroadcastSecurity("perspiciatis", "expedita") {{
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

## deleteTextAutoReply

Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTextAutoReplyRequest;
import org.openapis.openapi.models.operations.DeleteTextAutoReplyResponse;
import org.openapis.openapi.models.operations.DeleteTextAutoReplySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTextAutoReplyRequest req = new DeleteTextAutoReplyRequest(537236L);            

            DeleteTextAutoReplyResponse res = sdk.texts.deleteTextAutoReply(req, new DeleteTextAutoReplySecurity("a", "voluptate") {{
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

## findTextAutoReplys

Find all text autoreplies created by user. Returns a paged list of TextAutoReply

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindTextAutoReplysRequest;
import org.openapis.openapi.models.operations.FindTextAutoReplysResponse;
import org.openapis.openapi.models.operations.FindTextAutoReplysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindTextAutoReplysRequest req = new FindTextAutoReplysRequest() {{
                fields = "ullam";
                limit = 600193;
                number = "necessitatibus";
                offset = 654082;
            }};            

            FindTextAutoReplysResponse res = sdk.texts.findTextAutoReplys(req, new FindTextAutoReplysSecurity("impedit", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textAutoReplyPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findTextBroadcasts

Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindTextBroadcastsRequest;
import org.openapis.openapi.models.operations.FindTextBroadcastsResponse;
import org.openapis.openapi.models.operations.FindTextBroadcastsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindTextBroadcastsRequest req = new FindTextBroadcastsRequest() {{
                fields = "corporis";
                intervalBegin = 668234L;
                intervalEnd = 621666L;
                label = "esse";
                limit = 288570;
                name = "Mr. Eula Feest";
                offset = 322017;
                running = false;
                scheduled = false;
            }};            

            FindTextBroadcastsResponse res = sdk.texts.findTextBroadcasts(req, new FindTextBroadcastsSecurity("qui", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textBroadcastPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findTexts

Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindTextsRequest;
import org.openapis.openapi.models.operations.FindTextsResponse;
import org.openapis.openapi.models.operations.FindTextsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindTextsRequest req = new FindTextsRequest() {{
                batchId = 403026L;
                campaignId = 367626L;
                fields = "soluta";
                fromNumber = "libero";
                id = new Long[]{{
                    add(678060L),
                    add(487676L),
                    add(144691L),
                }};
                inbound = false;
                intervalBegin = 545L;
                intervalEnd = 168042L;
                label = "vel";
                limit = 64435;
                offset = 63553;
                results = "modi";
                states = "neque";
                toNumber = "exercitationem";
            }};            

            FindTextsResponse res = sdk.texts.findTexts(req, new FindTextsSecurity("itaque", "et") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getText

Returns a single Text instance for a given text id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextRequest;
import org.openapis.openapi.models.operations.GetTextResponse;
import org.openapis.openapi.models.operations.GetTextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextRequest req = new GetTextRequest(215398L) {{
                fields = "unde";
            }};            

            GetTextResponse res = sdk.texts.getText(req, new GetTextSecurity("nulla", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.text != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextAutoReply

Returns a single TextAutoReply instance for a given text auto reply id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextAutoReplyRequest;
import org.openapis.openapi.models.operations.GetTextAutoReplyResponse;
import org.openapis.openapi.models.operations.GetTextAutoReplySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextAutoReplyRequest req = new GetTextAutoReplyRequest(802894L) {{
                fields = "quia";
            }};            

            GetTextAutoReplyResponse res = sdk.texts.getTextAutoReply(req, new GetTextAutoReplySecurity("quia", "nostrum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textAutoReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextBroadcast

Returns a single TextBroadcast instance for a given text broadcast id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextBroadcastRequest;
import org.openapis.openapi.models.operations.GetTextBroadcastResponse;
import org.openapis.openapi.models.operations.GetTextBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextBroadcastRequest req = new GetTextBroadcastRequest(605712L) {{
                fields = "libero";
            }};            

            GetTextBroadcastResponse res = sdk.texts.getTextBroadcast(req, new GetTextBroadcastSecurity("dicta", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextBroadcastBatchesRequest;
import org.openapis.openapi.models.operations.GetTextBroadcastBatchesResponse;
import org.openapis.openapi.models.operations.GetTextBroadcastBatchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextBroadcastBatchesRequest req = new GetTextBroadcastBatchesRequest(727888L) {{
                fields = "fugiat";
                limit = 637462;
                offset = 554603;
            }};            

            GetTextBroadcastBatchesResponse res = sdk.texts.getTextBroadcastBatches(req, new GetTextBroadcastBatchesSecurity("placeat", "sit") {{
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

## getTextBroadcastStats

Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextBroadcastStatsRequest;
import org.openapis.openapi.models.operations.GetTextBroadcastStatsResponse;
import org.openapis.openapi.models.operations.GetTextBroadcastStatsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextBroadcastStatsRequest req = new GetTextBroadcastStatsRequest(479385L) {{
                begin = 57320L;
                end = 914864L;
                fields = "inventore";
            }};            

            GetTextBroadcastStatsResponse res = sdk.texts.getTextBroadcastStats(req, new GetTextBroadcastStatsSecurity("aperiam", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textBroadcastStatsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextBroadcastTexts

This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextBroadcastTextsRequest;
import org.openapis.openapi.models.operations.GetTextBroadcastTextsResponse;
import org.openapis.openapi.models.operations.GetTextBroadcastTextsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTextBroadcastTextsRequest req = new GetTextBroadcastTextsRequest(292888L) {{
                batchId = 755106L;
                fields = "distinctio";
                limit = 32273;
                offset = 418109;
            }};            

            GetTextBroadcastTextsResponse res = sdk.texts.getTextBroadcastTexts(req, new GetTextBroadcastTextsSecurity("esse", "dolores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTexts

Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code. Example: 67076, 818818 etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTextsRequest;
import org.openapis.openapi.models.operations.SendTextsResponse;
import org.openapis.openapi.models.operations.SendTextsSecurity;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.TextRecipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendTextsRequest req = new SendTextsRequest() {{
                requestBody = new org.openapis.openapi.models.shared.TextRecipient[]{{
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("est", "facere");
                        }};
                        contactId = 545918L;
                        fromNumber = "molestiae";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 882284L;
                                created = 896480L;
                                id = 733289L;
                                lengthInBytes = 575078L;
                                mediaType = "ea";
                                name = "Brittany Prosacco";
                                publicUrl = "officiis";
                            }}),
                            add(new Media() {{
                                accountId = 972912L;
                                created = 737279L;
                                id = 872303L;
                                lengthInBytes = 5152L;
                                mediaType = "quia";
                                name = "Miss Grant VonRueden";
                                publicUrl = "eos";
                            }}),
                            add(new Media() {{
                                accountId = 844854L;
                                created = 483518L;
                                id = 510128L;
                                lengthInBytes = 140316L;
                                mediaType = "explicabo";
                                name = "Natasha Wehner";
                                publicUrl = "similique";
                            }}),
                        }};
                        message = "ut";
                        phoneNumber = "quidem";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("beatae", "unde");
                            put("molestiae", "delectus");
                        }};
                        contactId = 585593L;
                        fromNumber = "fugit";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 256916L;
                                created = 201010L;
                                id = 873557L;
                                lengthInBytes = 637856L;
                                mediaType = "dignissimos";
                                name = "Santiago Herzog";
                                publicUrl = "voluptatum";
                            }}),
                            add(new Media() {{
                                accountId = 587375L;
                                created = 326269L;
                                id = 809594L;
                                lengthInBytes = 316542L;
                                mediaType = "neque";
                                name = "Sadie Kemmer";
                                publicUrl = "magnam";
                            }}),
                        }};
                        message = "voluptates";
                        phoneNumber = "maiores";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("aperiam", "libero");
                            put("ratione", "labore");
                            put("totam", "occaecati");
                        }};
                        contactId = 375994L;
                        fromNumber = "quo";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 795591L;
                                created = 684553L;
                                id = 344530L;
                                lengthInBytes = 669237L;
                                mediaType = "impedit";
                                name = "Geoffrey Thiel";
                                publicUrl = "pariatur";
                            }}),
                        }};
                        message = "nemo";
                        phoneNumber = "reprehenderit";
                    }}),
                    add(new TextRecipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("odio", "minima");
                        }};
                        contactId = 448369L;
                        fromNumber = "ducimus";
                        media = new org.openapis.openapi.models.shared.Media[]{{
                            add(new Media() {{
                                accountId = 172195L;
                                created = 621169L;
                                id = 85076L;
                                lengthInBytes = 498180L;
                                mediaType = "voluptate";
                                name = "Bradford Murazik";
                                publicUrl = "quaerat";
                            }}),
                            add(new Media() {{
                                accountId = 416692L;
                                created = 888616L;
                                id = 810839L;
                                lengthInBytes = 697274L;
                                mediaType = "exercitationem";
                                name = "Ms. Connie Gleason";
                                publicUrl = "sequi";
                            }}),
                            add(new Media() {{
                                accountId = 918547L;
                                created = 741232L;
                                id = 120120L;
                                lengthInBytes = 936928L;
                                mediaType = "veniam";
                                name = "Mr. Todd Reilly";
                                publicUrl = "nobis";
                            }}),
                        }};
                        message = "ipsa";
                        phoneNumber = "ducimus";
                    }}),
                }};
                campaignId = 980486L;
                defaultMessage = "veritatis";
                fields = "quasi";
                strictValidation = false;
            }};            

            SendTextsResponse res = sdk.texts.sendTexts(req, new SendTextsSecurity("laboriosam", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTextBroadcast

Starts a text broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTextBroadcastRequest;
import org.openapis.openapi.models.operations.StartTextBroadcastResponse;
import org.openapis.openapi.models.operations.StartTextBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartTextBroadcastRequest req = new StartTextBroadcastRequest(729448L);            

            StartTextBroadcastResponse res = sdk.texts.startTextBroadcast(req, new StartTextBroadcastSecurity("excepturi", "occaecati") {{
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

## stopTextBroadcast

Stops a text broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTextBroadcastRequest;
import org.openapis.openapi.models.operations.StopTextBroadcastResponse;
import org.openapis.openapi.models.operations.StopTextBroadcastSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopTextBroadcastRequest req = new StopTextBroadcastRequest(367917L);            

            StopTextBroadcastResponse res = sdk.texts.stopTextBroadcast(req, new StopTextBroadcastSecurity("aliquam", "nostrum") {{
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

## toggleTextBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed contacts in created broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToggleTextBroadcastRecipientsStatusRequest;
import org.openapis.openapi.models.operations.ToggleTextBroadcastRecipientsStatusResponse;
import org.openapis.openapi.models.operations.ToggleTextBroadcastRecipientsStatusSecurity;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToggleTextBroadcastRecipientsStatusRequest req = new ToggleTextBroadcastRecipientsStatusRequest(988749L) {{
                requestBody = new org.openapis.openapi.models.shared.Recipient[]{{
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("enim", "hic");
                            put("animi", "quas");
                            put("totam", "molestias");
                        }};
                        contactId = 484966L;
                        fromNumber = "eaque";
                        phoneNumber = "saepe";
                    }}),
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("quos", "iste");
                        }};
                        contactId = 826862L;
                        fromNumber = "tempore";
                        phoneNumber = "libero";
                    }}),
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("doloremque", "delectus");
                        }};
                        contactId = 773110L;
                        fromNumber = "cum";
                        phoneNumber = "ipsum";
                    }}),
                    add(new Recipient() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("saepe", "deserunt");
                        }};
                        contactId = 42924L;
                        fromNumber = "quis";
                        phoneNumber = "veniam";
                    }}),
                }};
                enable = false;
            }};            

            ToggleTextBroadcastRecipientsStatusResponse res = sdk.texts.toggleTextBroadcastRecipientsStatus(req, new ToggleTextBroadcastRecipientsStatusSecurity("libero", "architecto") {{
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

## updateTextBroadcast

Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTextBroadcastRequest;
import org.openapis.openapi.models.operations.UpdateTextBroadcastResponse;
import org.openapis.openapi.models.operations.UpdateTextBroadcastSecurity;
import org.openapis.openapi.models.shared.LocalDate;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.LocalTimeRestriction;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.TextBroadcastBigMessageStrategyEnum;
import org.openapis.openapi.models.shared.TextBroadcastInput;
import org.openapis.openapi.models.shared.TextRecipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTextBroadcastRequest req = new UpdateTextBroadcastRequest(584593L) {{
                textBroadcastInput = new TextBroadcastInput() {{
                    bigMessageStrategy = TextBroadcastBigMessageStrategyEnum.DO_NOT_SEND;
                    fromNumber = "eligendi";
                    id = 820023L;
                    labels = new String[]{{
                        add("magnam"),
                        add("itaque"),
                    }};
                    localTimeRestriction = new LocalTimeRestriction() {{
                        beginHour = 150935;
                        beginMinute = 993002;
                        enabled = false;
                        endHour = 330267;
                        endMinute = 164532;
                    }};;
                    maxActive = 813880;
                    media = new org.openapis.openapi.models.shared.Media[]{{
                        add(new Media() {{
                            accountId = 140384L;
                            created = 863477L;
                            id = 227362L;
                            lengthInBytes = 347698L;
                            mediaType = "ab";
                            name = "Flora Renner";
                            publicUrl = "quaerat";
                        }}),
                        add(new Media() {{
                            accountId = 503748L;
                            created = 718627L;
                            id = 392430L;
                            lengthInBytes = 335977L;
                            mediaType = "nisi";
                            name = "Roosevelt Schultz";
                            publicUrl = "ad";
                        }}),
                        add(new Media() {{
                            accountId = 973819L;
                            created = 974589L;
                            id = 162358L;
                            lengthInBytes = 891581L;
                            mediaType = "labore";
                            name = "Craig Kiehn";
                            publicUrl = "iusto";
                        }}),
                    }};
                    message = "est";
                    name = "Delbert Stehr";
                    recipients = new org.openapis.openapi.models.shared.TextRecipient[]{{
                        add(new TextRecipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("dicta", "error");
                            }};
                            contactId = 784731L;
                            fromNumber = "vitae";
                            media = new org.openapis.openapi.models.shared.Media[]{{
                                add(new Media() {{
                                    accountId = 458970L;
                                    created = 854115L;
                                    id = 322333L;
                                    lengthInBytes = 134818L;
                                    mediaType = "enim";
                                    name = "Tyrone Kulas Jr.";
                                    publicUrl = "incidunt";
                                }}),
                                add(new Media() {{
                                    accountId = 879174L;
                                    created = 902581L;
                                    id = 734814L;
                                    lengthInBytes = 334018L;
                                    mediaType = "eos";
                                    name = "Amos Kilback";
                                    publicUrl = "repellat";
                                }}),
                            }};
                            message = "quisquam";
                            phoneNumber = "sequi";
                        }}),
                        add(new TextRecipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("deleniti", "illo");
                                put("labore", "assumenda");
                            }};
                            contactId = 304173L;
                            fromNumber = "quisquam";
                            media = new org.openapis.openapi.models.shared.Media[]{{
                                add(new Media() {{
                                    accountId = 514993L;
                                    created = 921719L;
                                    id = 9683L;
                                    lengthInBytes = 805264L;
                                    mediaType = "aspernatur";
                                    name = "Rudolph Macejkovic";
                                    publicUrl = "rerum";
                                }}),
                                add(new Media() {{
                                    accountId = 492361L;
                                    created = 360934L;
                                    id = 873833L;
                                    lengthInBytes = 629377L;
                                    mediaType = "repellendus";
                                    name = "Florence Jerde";
                                    publicUrl = "aut";
                                }}),
                                add(new Media() {{
                                    accountId = 32055L;
                                    created = 322829L;
                                    id = 60995L;
                                    lengthInBytes = 229567L;
                                    mediaType = "illum";
                                    name = "Willis Rippin Sr.";
                                    publicUrl = "laudantium";
                                }}),
                            }};
                            message = "doloremque";
                            phoneNumber = "earum";
                        }}),
                    }};
                    resumeNextDay = false;
                    schedules = new org.openapis.openapi.models.shared.Schedule[]{{
                        add(new Schedule() {{
                            campaignId = 228646L;
                            daysOfWeek = new String[]{{
                                add("dolorum"),
                                add("necessitatibus"),
                                add("provident"),
                            }};
                            id = 920272L;
                            startDate = new LocalDate() {{
                                day = 10063;
                                month = 366244;
                                year = 475826;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 930840;
                                minute = 708771;
                                nano = 545779;
                                second = 43975;
                            }};
                            stopDate = new LocalDate() {{
                                day = 574092;
                                month = 879522;
                                year = 178635;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 520081;
                                minute = 115861;
                                nano = 30661;
                                second = 244376;
                            }};
                            timeZone = "dolor";
                        }}),
                        add(new Schedule() {{
                            campaignId = 124289L;
                            daysOfWeek = new String[]{{
                                add("dolor"),
                                add("occaecati"),
                                add("atque"),
                                add("beatae"),
                            }};
                            id = 868255L;
                            startDate = new LocalDate() {{
                                day = 287544;
                                month = 794988;
                                year = 456704;
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 32356;
                                minute = 20950;
                                nano = 698558;
                                second = 411615;
                            }};
                            stopDate = new LocalDate() {{
                                day = 46791;
                                month = 489459;
                                year = 998026;
                            }};
                            stopTimeOfDay = new LocalTime() {{
                                hour = 243678;
                                minute = 784115;
                                nano = 588639;
                                second = 231382;
                            }};
                            timeZone = "eligendi";
                        }}),
                    }};
                }};;
                strictValidation = false;
            }};            

            UpdateTextBroadcastResponse res = sdk.texts.updateTextBroadcast(req, new UpdateTextBroadcastSecurity("dignissimos", "consectetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.textBroadcastCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
