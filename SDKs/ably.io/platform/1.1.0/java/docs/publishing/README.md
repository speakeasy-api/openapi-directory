# publishing

### Available Operations

* [publishMessagesToChannelForm](#publishmessagestochannelform) - Publish a message to a channel
* [publishMessagesToChannelJson](#publishmessagestochanneljson) - Publish a message to a channel
* [publishMessagesToChannelRaw](#publishmessagestochannelraw) - Publish a message to a channel

## publishMessagesToChannelForm

Publish a message to the specified channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishMessagesToChannelFormRequest;
import org.openapis.openapi.models.operations.PublishMessagesToChannelFormResponse;
import org.openapis.openapi.models.shared.Extras;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "optio") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishMessagesToChannelFormRequest req = new PublishMessagesToChannelFormRequest("totam") {{
                messageInput = new MessageInput() {{
                    clientId = "beatae";
                    connectionId = "commodi";
                    data = "molestiae";
                    encoding = "modi";
                    extras = new Extras() {{
                        push = new Push() {{
                            apns = new PushApns() {{
                                notification = new Notification() {{
                                    body = "qui";
                                    collapseKey = "impedit";
                                    icon = "cum";
                                    sound = "esse";
                                    title = "Mrs.";
                                }};;
                            }};;
                            data = "excepturi";
                            fcm = new PushFcm() {{
                                notification = new Notification() {{
                                    body = "aspernatur";
                                    collapseKey = "perferendis";
                                    icon = "ad";
                                    sound = "natus";
                                    title = "Mr.";
                                }};;
                            }};;
                            notification = new Notification() {{
                                body = "iste";
                                collapseKey = "dolor";
                                icon = "natus";
                                sound = "laboriosam";
                                title = "Dr.";
                            }};;
                            web = new PushWeb() {{
                                notification = new Notification() {{
                                    body = "saepe";
                                    collapseKey = "fuga";
                                    icon = "in";
                                    sound = "corporis";
                                    title = "Miss";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Mr. Kerry Predovic";
                }};;
                xAblyVersion = "est";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            PublishMessagesToChannelFormResponse res = sdk.publishing.publishMessagesToChannelForm(req);

            if (res.publishMessagesToChannelForm2XXApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishMessagesToChannelJson

Publish a message to the specified channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishMessagesToChannelJsonRequest;
import org.openapis.openapi.models.operations.PublishMessagesToChannelJsonResponse;
import org.openapis.openapi.models.shared.Extras;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laborum", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishMessagesToChannelJsonRequest req = new PublishMessagesToChannelJsonRequest("dolorem") {{
                messageInput = new MessageInput() {{
                    clientId = "corporis";
                    connectionId = "explicabo";
                    data = "nobis";
                    encoding = "enim";
                    extras = new Extras() {{
                        push = new Push() {{
                            apns = new PushApns() {{
                                notification = new Notification() {{
                                    body = "omnis";
                                    collapseKey = "nemo";
                                    icon = "minima";
                                    sound = "excepturi";
                                    title = "Mr.";
                                }};;
                            }};;
                            data = "iure";
                            fcm = new PushFcm() {{
                                notification = new Notification() {{
                                    body = "culpa";
                                    collapseKey = "doloribus";
                                    icon = "sapiente";
                                    sound = "architecto";
                                    title = "Miss";
                                }};;
                            }};;
                            notification = new Notification() {{
                                body = "dolorem";
                                collapseKey = "culpa";
                                icon = "consequuntur";
                                sound = "repellat";
                                title = "Miss";
                            }};;
                            web = new PushWeb() {{
                                notification = new Notification() {{
                                    body = "occaecati";
                                    collapseKey = "numquam";
                                    icon = "commodi";
                                    sound = "quam";
                                    title = "Ms.";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Sabrina Cronin MD";
                }};;
                xAblyVersion = "animi";
                format = ResponseFormatEnum.JSONP;
            }};            

            PublishMessagesToChannelJsonResponse res = sdk.publishing.publishMessagesToChannelJson(req);

            if (res.publishMessagesToChannelJSON2XXApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishMessagesToChannelRaw

Publish a message to the specified channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishMessagesToChannelRawRequest;
import org.openapis.openapi.models.operations.PublishMessagesToChannelRawResponse;
import org.openapis.openapi.models.shared.Extras;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odit", "quo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishMessagesToChannelRawRequest req = new PublishMessagesToChannelRawRequest("sequi") {{
                requestBody = "tenetur".getBytes();
                xAblyVersion = "ipsam";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            PublishMessagesToChannelRawResponse res = sdk.publishing.publishMessagesToChannelRaw(req);

            if (res.publishMessagesToChannelRaw2XXApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
