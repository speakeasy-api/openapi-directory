# intent

### Available Operations

* [addMediaIntentHandling](#addmediaintenthandling) - addMedia
* [playMediaIntentHandling](#playmediaintenthandling) - playMedia
* [updateMediaAffinityIntentHandling](#updatemediaaffinityintenthandling) - updateMediaAffinity

## addMediaIntentHandling

addMedia

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMediaIntentHandlingRequest;
import org.openapis.openapi.models.operations.AddMediaIntentHandlingResponse;
import org.openapis.openapi.models.shared.AddMediaIntentHandlingInvocation;
import org.openapis.openapi.models.shared.Constraints;
import org.openapis.openapi.models.shared.PlayerContext;
import org.openapis.openapi.models.shared.Session;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddMediaIntentHandlingRequest req = new AddMediaIntentHandlingRequest("debitis", 567.13, "delectus", "tempora") {{
                requestBody = new org.openapis.openapi.models.shared.AddMediaIntentHandlingInvocation[]{{
                    add(new AddMediaIntentHandlingInvocation("totam",                 new java.util.HashMap<String, Object>() {{
                                        put("dolorum", "dicta");
                                        put("nam", "officia");
                                        put("occaecati", "fugit");
                                        put("deleniti", "hic");
                                    }}) {{
                        method = "molestiae";
                        params = new java.util.HashMap<String, Object>() {{
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                            put("nisi", "recusandae");
                            put("temporibus", "ab");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 870013L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2020-01-25T09:54:35.794Z"), "molestiae", OffsetDateTime.parse("2020-08-07T00:03:55.328Z"), "esse") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 337396L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                            identifier = "perferendis";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "ipsam";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 8326.2;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2020-08-31T22:02:25.322Z");
                            version = "odit";
                        }};
                    }}),
                    add(new AddMediaIntentHandlingInvocation("in",                 new java.util.HashMap<String, Object>() {{
                                        put("iste", "iure");
                                        put("saepe", "quidem");
                                    }}) {{
                        method = "optio";
                        params = new java.util.HashMap<String, Object>() {{
                            put("beatae", "commodi");
                            put("molestiae", "modi");
                            put("qui", "impedit");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 612096L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-05-20T19:39:29.035Z"), "laboriosam", OffsetDateTime.parse("2020-04-17T15:42:43.722Z"), "fuga") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 736918L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                            identifier = "excepturi";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "aspernatur";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 187.89;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2022-05-20T13:30:46.463Z");
                            version = "sed";
                        }};
                    }}),
                }};
                xApplecloudextensionRetryCount = 992.8;
            }};            

            AddMediaIntentHandlingResponse res = sdk.intent.addMediaIntentHandling(req);

            if (res.addMediaIntentHandlingInvocationResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playMediaIntentHandling

playMedia

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayMediaIntentHandlingRequest;
import org.openapis.openapi.models.operations.PlayMediaIntentHandlingResponse;
import org.openapis.openapi.models.shared.Constraints;
import org.openapis.openapi.models.shared.PlayMediaIntentHandlingInvocation;
import org.openapis.openapi.models.shared.PlayerContext;
import org.openapis.openapi.models.shared.Session;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayMediaIntentHandlingRequest req = new PlayMediaIntentHandlingRequest("ipsa", 9698.1, "est", "mollitia") {{
                requestBody = new org.openapis.openapi.models.shared.PlayMediaIntentHandlingInvocation[]{{
                    add(new PlayMediaIntentHandlingInvocation("repellat",                 new java.util.HashMap<String, Object>() {{
                                        put("occaecati", "numquam");
                                        put("commodi", "quam");
                                        put("molestiae", "velit");
                                    }}) {{
                        method = "dolores";
                        params = new java.util.HashMap<String, Object>() {{
                            put("corporis", "explicabo");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 988374L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-09-11T06:15:44.019Z"), "mollitia", OffsetDateTime.parse("2022-05-14T04:53:02.888Z"), "consequuntur") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 750686L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-05-24T03:24:11.703Z");
                            identifier = "nemo";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "minima";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 5701.97;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                            version = "culpa";
                        }};
                    }}),
                    add(new PlayMediaIntentHandlingInvocation("reiciendis",                 new java.util.HashMap<String, Object>() {{
                                        put("vero", "nihil");
                                        put("praesentium", "voluptatibus");
                                        put("ipsa", "omnis");
                                        put("voluptate", "cum");
                                    }}) {{
                        method = "error";
                        params = new java.util.HashMap<String, Object>() {{
                            put("quis", "vitae");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 820994L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-11-26T13:23:33.410Z"), "error", OffsetDateTime.parse("2020-12-24T08:13:29.299Z"), "quasi") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 674752L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-05-14T10:37:30.872Z");
                            identifier = "odit";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "quo";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 1965.82;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                            version = "id";
                        }};
                    }}),
                    add(new PlayMediaIntentHandlingInvocation("pariatur",                 new java.util.HashMap<String, Object>() {{
                                        put("praesentium", "rem");
                                        put("voluptates", "quasi");
                                    }}) {{
                        method = "perferendis";
                        params = new java.util.HashMap<String, Object>() {{
                            put("reprehenderit", "ut");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 414263L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-10-22T18:12:12.288Z"), "ipsum", OffsetDateTime.parse("2021-11-14T09:53:27.431Z"), "excepturi") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 979587L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-08-22T19:15:58.586Z");
                            identifier = "dolore";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "iusto";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 1187.27;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2022-05-13T20:56:04.612Z");
                            version = "accusamus";
                        }};
                    }}),
                }};
                xApplecloudextensionRetryCount = 9211.58;
            }};            

            PlayMediaIntentHandlingResponse res = sdk.intent.playMediaIntentHandling(req);

            if (res.playMediaIntentHandlingInvocationResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMediaAffinityIntentHandling

updateMediaAffinity

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMediaAffinityIntentHandlingRequest;
import org.openapis.openapi.models.operations.UpdateMediaAffinityIntentHandlingResponse;
import org.openapis.openapi.models.shared.Constraints;
import org.openapis.openapi.models.shared.PlayerContext;
import org.openapis.openapi.models.shared.Session;
import org.openapis.openapi.models.shared.UpdateMediaAffinityIntentHandlingInvocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMediaAffinityIntentHandlingRequest req = new UpdateMediaAffinityIntentHandlingRequest("sint", 831.12, "itaque", "incidunt") {{
                requestBody = new org.openapis.openapi.models.shared.UpdateMediaAffinityIntentHandlingInvocation[]{{
                    add(new UpdateMediaAffinityIntentHandlingInvocation("labore",                 new java.util.HashMap<String, Object>() {{
                                        put("eum", "non");
                                        put("eligendi", "sint");
                                        put("aliquid", "provident");
                                        put("necessitatibus", "sint");
                                    }}) {{
                        method = "consequatur";
                        params = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "explicabo");
                            put("deserunt", "distinctio");
                            put("quibusdam", "labore");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 4695L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-04-28T14:19:37.294Z"), "excepturi", OffsetDateTime.parse("2022-04-19T03:15:40.816Z"), "tempore") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 264730L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                            identifier = "cupiditate";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "quos";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 201.07;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2022-03-04T10:29:07.095Z");
                            version = "ipsam";
                        }};
                    }}),
                    add(new UpdateMediaAffinityIntentHandlingInvocation("enim",                 new java.util.HashMap<String, Object>() {{
                                        put("delectus", "quidem");
                                        put("provident", "nam");
                                        put("id", "blanditiis");
                                        put("deleniti", "sapiente");
                                    }}) {{
                        method = "officia";
                        params = new java.util.HashMap<String, Object>() {{
                            put("debitis", "a");
                        }};
                        session = new Session(                new Constraints() {{
                                            allowExplicitContent = false;
                                            maximumQueueSegmentItemCount = 813798L;
                                            updateUserTasteProfile = false;
                                        }};, OffsetDateTime.parse("2022-08-09T06:36:34.417Z"), "laborum", OffsetDateTime.parse("2022-04-02T11:21:13.260Z"), "occaecati") {{
                            constraints = new Constraints() {{
                                allowExplicitContent = false;
                                maximumQueueSegmentItemCount = 680056L;
                                updateUserTasteProfile = false;
                            }};
                            deadline = OffsetDateTime.parse("2022-07-21T01:01:39.776Z");
                            identifier = "illum";
                            playerContext = new PlayerContext() {{
                                activityIdentifier = "maiores";
                                contentIdentifier = "j15f8A3cuU0GG";
                                offsetInMillis = 10942L;
                                playbackSpeed = 6994.79;
                                queueIdentifier = "u104823q8201";
                            }};
                            requested = OffsetDateTime.parse("2022-09-14T10:27:07.590Z");
                            version = "cumque";
                        }};
                    }}),
                }};
                xApplecloudextensionRetryCount = 2305.33;
            }};            

            UpdateMediaAffinityIntentHandlingResponse res = sdk.intent.updateMediaAffinityIntentHandling(req);

            if (res.updateMediaAffinityIntentHandlingInvocationResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
