# queues

### Available Operations

* [playMediaOnQueue](#playmediaonqueue) - playMedia
* [updateActivityOnQueue](#updateactivityonqueue) - updateActivity

## playMediaOnQueue

playMedia

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayMediaOnQueueRequest;
import org.openapis.openapi.models.operations.PlayMediaOnQueueResponse;
import org.openapis.openapi.models.shared.Constraints;
import org.openapis.openapi.models.shared.PlayMediaRequest;
import org.openapis.openapi.models.shared.UserActivity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayMediaOnQueueRequest req = new PlayMediaOnQueueRequest("deserunt", "nisi", "vel") {{
                playMediaRequest = new PlayMediaRequest(                new Constraints() {{
                                    allowExplicitContent = false;
                                    maximumQueueSegmentItemCount = 618809L;
                                    updateUserTasteProfile = false;
                                }};,                 new UserActivity("com.mediastreamingservice.playmedia", "omnis") {{
                                    persistentIdentifier = "molestiae";
                                    title = "Mr.";
                                    userInfo = new java.util.HashMap<String, Object>() {{
                                        put("magnam", "distinctio");
                                        put("id", "labore");
                                    }};
                                }};, "labore");;
                xApplecloudextensionRetryCount = 3834.62;
            }};            

            PlayMediaOnQueueResponse res = sdk.queues.playMediaOnQueue(req);

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateActivityOnQueue

updateActivity

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateActivityOnQueueRequest;
import org.openapis.openapi.models.operations.UpdateActivityOnQueueResponse;
import org.openapis.openapi.models.shared.Constraints;
import org.openapis.openapi.models.shared.PlayerContext;
import org.openapis.openapi.models.shared.QueueActivityReportEventEnum;
import org.openapis.openapi.models.shared.UpdateActivityRequest;
import org.openapis.openapi.models.shared.UserActivity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateActivityOnQueueRequest req = new UpdateActivityOnQueueRequest("natus", "nobis", "eum") {{
                updateActivityRequest = new UpdateActivityRequest(QueueActivityReportEventEnum.LOCAL_COMMAND_DISLIKE, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new UserActivity("com.mediastreamingservice.playmedia", "magnam") {{
                                    persistentIdentifier = "et";
                                    title = "Ms.";
                                    userInfo = new java.util.HashMap<String, Object>() {{
                                        put("provident", "quos");
                                        put("sint", "accusantium");
                                    }};
                                }};, "mollitia") {{
                    constraints = new Constraints() {{
                        allowExplicitContent = false;
                        maximumQueueSegmentItemCount = 968962L;
                        updateUserTasteProfile = false;
                    }};;
                    nowPlaying = new PlayerContext() {{
                        activityIdentifier = "mollitia";
                        contentIdentifier = "j15f8A3cuU0GG";
                        offsetInMillis = 10942L;
                        playbackSpeed = 3209.97;
                        queueIdentifier = "u104823q8201";
                    }};;
                    previouslyPlaying = new PlayerContext() {{
                        activityIdentifier = "eum";
                        contentIdentifier = "j15f8A3cuU0GG";
                        offsetInMillis = 10942L;
                        playbackSpeed = 2212.62;
                        queueIdentifier = "u104823q8201";
                    }};;
                }};;
                xApplecloudextensionRetryCount = 8965.47;
            }};            

            UpdateActivityOnQueueResponse res = sdk.queues.updateActivityOnQueue(req);

            if (res.updateActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
