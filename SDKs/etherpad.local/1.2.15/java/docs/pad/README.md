# pad

### Available Operations

* [appendChatMessageUsingGET](#appendchatmessageusingget) - appends a chat message
* [appendChatMessageUsingPOST](#appendchatmessageusingpost) - appends a chat message
* [checkTokenUsingGET](#checktokenusingget) - returns ok when the current api token is valid
* [checkTokenUsingPOST](#checktokenusingpost) - returns ok when the current api token is valid
* [createDiffHTMLUsingGET](#creatediffhtmlusingget)
* [createDiffHTMLUsingPOST](#creatediffhtmlusingpost)
* [createPadUsingGET](#createpadusingget) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [createPadUsingPOST](#createpadusingpost) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [deletePadUsingGET](#deletepadusingget) - deletes a pad
* [deletePadUsingPOST](#deletepadusingpost) - deletes a pad
* [getChatHeadUsingGET](#getchatheadusingget) - returns the chatHead (chat-message) of the pad
* [getChatHeadUsingPOST](#getchatheadusingpost) - returns the chatHead (chat-message) of the pad
* [getChatHistoryUsingGET](#getchathistoryusingget) - returns the chat history
* [getChatHistoryUsingPOST](#getchathistoryusingpost) - returns the chat history
* [getHTMLUsingGET](#gethtmlusingget) - returns the text of a pad formatted as HTML
* [getHTMLUsingPOST](#gethtmlusingpost) - returns the text of a pad formatted as HTML
* [getLastEditedUsingGET](#getlasteditedusingget) - returns the timestamp of the last revision of the pad
* [getLastEditedUsingPOST](#getlasteditedusingpost) - returns the timestamp of the last revision of the pad
* [getPublicStatusUsingGET](#getpublicstatususingget) - return true of false
* [getPublicStatusUsingPOST](#getpublicstatususingpost) - return true of false
* [getReadOnlyIDUsingGET](#getreadonlyidusingget) - returns the read only link of a pad
* [getReadOnlyIDUsingPOST](#getreadonlyidusingpost) - returns the read only link of a pad
* [getRevisionsCountUsingGET](#getrevisionscountusingget) - returns the number of revisions of this pad
* [getRevisionsCountUsingPOST](#getrevisionscountusingpost) - returns the number of revisions of this pad
* [getTextUsingGET](#gettextusingget) - returns the text of a pad
* [getTextUsingPOST](#gettextusingpost) - returns the text of a pad
* [listAllPadsUsingGET](#listallpadsusingget) - list all the pads
* [listAllPadsUsingPOST](#listallpadsusingpost) - list all the pads
* [listAuthorsOfPadUsingGET](#listauthorsofpadusingget) - returns an array of authors who contributed to this pad
* [listAuthorsOfPadUsingPOST](#listauthorsofpadusingpost) - returns an array of authors who contributed to this pad
* [padUsersCountUsingGET](#paduserscountusingget) - returns the number of user that are currently editing this pad
* [padUsersCountUsingPOST](#paduserscountusingpost) - returns the number of user that are currently editing this pad
* [padUsersUsingGET](#padusersusingget) - returns the list of users that are currently editing this pad
* [padUsersUsingPOST](#padusersusingpost) - returns the list of users that are currently editing this pad
* [sendClientsMessageUsingGET](#sendclientsmessageusingget) - sends a custom message of type msg to the pad
* [sendClientsMessageUsingPOST](#sendclientsmessageusingpost) - sends a custom message of type msg to the pad
* [setHTMLUsingGET](#sethtmlusingget) - sets the text of a pad with HTML
* [setHTMLUsingPOST](#sethtmlusingpost) - sets the text of a pad with HTML
* [setPublicStatusUsingGET](#setpublicstatususingget) - sets a boolean for the public status of a pad
* [setPublicStatusUsingPOST](#setpublicstatususingpost) - sets a boolean for the public status of a pad
* [setTextUsingGET](#settextusingget) - sets the text of a pad
* [setTextUsingPOST](#settextusingpost) - sets the text of a pad

## appendChatMessageUsingGET

appends a chat message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendChatMessageUsingGETRequest;
import org.openapis.openapi.models.operations.AppendChatMessageUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendChatMessageUsingGETRequest req = new AppendChatMessageUsingGETRequest() {{
                authorID = "temporibus";
                padID = "laborum";
                text = "quasi";
                time = "reiciendis";
            }};            

            AppendChatMessageUsingGETResponse res = sdk.pad.appendChatMessageUsingGET(req);

            if (res.appendChatMessageUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appendChatMessageUsingPOST

appends a chat message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendChatMessageUsingPOSTRequest;
import org.openapis.openapi.models.operations.AppendChatMessageUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendChatMessageUsingPOSTRequest req = new AppendChatMessageUsingPOSTRequest() {{
                authorID = "vero";
                padID = "nihil";
                text = "praesentium";
                time = "voluptatibus";
            }};            

            AppendChatMessageUsingPOSTResponse res = sdk.pad.appendChatMessageUsingPOST(req);

            if (res.appendChatMessageUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkTokenUsingGET

returns ok when the current api token is valid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckTokenUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckTokenUsingGETResponse res = sdk.pad.checkTokenUsingGET();

            if (res.checkTokenUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkTokenUsingPOST

returns ok when the current api token is valid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckTokenUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckTokenUsingPOSTResponse res = sdk.pad.checkTokenUsingPOST();

            if (res.checkTokenUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDiffHTMLUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiffHTMLUsingGETRequest;
import org.openapis.openapi.models.operations.CreateDiffHTMLUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDiffHTMLUsingGETRequest req = new CreateDiffHTMLUsingGETRequest() {{
                endRev = "cum";
                padID = "perferendis";
                startRev = "doloremque";
            }};            

            CreateDiffHTMLUsingGETResponse res = sdk.pad.createDiffHTMLUsingGET(req);

            if (res.createDiffHTMLUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDiffHTMLUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiffHTMLUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateDiffHTMLUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDiffHTMLUsingPOSTRequest req = new CreateDiffHTMLUsingPOSTRequest() {{
                endRev = "ut";
                padID = "maiores";
                startRev = "dicta";
            }};            

            CreateDiffHTMLUsingPOSTResponse res = sdk.pad.createDiffHTMLUsingPOST(req);

            if (res.createDiffHTMLUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPadUsingGET

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePadUsingGETRequest;
import org.openapis.openapi.models.operations.CreatePadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePadUsingGETRequest req = new CreatePadUsingGETRequest() {{
                padID = "dolore";
                text = "iusto";
            }};            

            CreatePadUsingGETResponse res = sdk.pad.createPadUsingGET(req);

            if (res.createPadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPadUsingPOST

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePadUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreatePadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePadUsingPOSTRequest req = new CreatePadUsingPOSTRequest() {{
                padID = "harum";
                text = "enim";
            }};            

            CreatePadUsingPOSTResponse res = sdk.pad.createPadUsingPOST(req);

            if (res.createPadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePadUsingGET

deletes a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePadUsingGETRequest;
import org.openapis.openapi.models.operations.DeletePadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePadUsingGETRequest req = new DeletePadUsingGETRequest() {{
                padID = "commodi";
            }};            

            DeletePadUsingGETResponse res = sdk.pad.deletePadUsingGET(req);

            if (res.deletePadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePadUsingPOST

deletes a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePadUsingPOSTRequest;
import org.openapis.openapi.models.operations.DeletePadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePadUsingPOSTRequest req = new DeletePadUsingPOSTRequest() {{
                padID = "quae";
            }};            

            DeletePadUsingPOSTResponse res = sdk.pad.deletePadUsingPOST(req);

            if (res.deletePadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChatHeadUsingGET

returns the chatHead (chat-message) of the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETChatHeadUsingGETRequest;
import org.openapis.openapi.models.operations.GETChatHeadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETChatHeadUsingGETRequest req = new GETChatHeadUsingGETRequest() {{
                padID = "quidem";
            }};            

            GETChatHeadUsingGETResponse res = sdk.pad.getChatHeadUsingGET(req);

            if (res.getChatHeadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChatHeadUsingPOST

returns the chatHead (chat-message) of the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChatHeadUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetChatHeadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChatHeadUsingPOSTRequest req = new GetChatHeadUsingPOSTRequest() {{
                padID = "excepturi";
            }};            

            GetChatHeadUsingPOSTResponse res = sdk.pad.getChatHeadUsingPOST(req);

            if (res.getChatHeadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChatHistoryUsingGET

returns the chat history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETChatHistoryUsingGETRequest;
import org.openapis.openapi.models.operations.GETChatHistoryUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETChatHistoryUsingGETRequest req = new GETChatHistoryUsingGETRequest() {{
                end = "modi";
                padID = "praesentium";
                start = "rem";
            }};            

            GETChatHistoryUsingGETResponse res = sdk.pad.getChatHistoryUsingGET(req);

            if (res.getChatHistoryUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChatHistoryUsingPOST

returns the chat history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChatHistoryUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetChatHistoryUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChatHistoryUsingPOSTRequest req = new GetChatHistoryUsingPOSTRequest() {{
                end = "quasi";
                padID = "repudiandae";
                start = "sint";
            }};            

            GetChatHistoryUsingPOSTResponse res = sdk.pad.getChatHistoryUsingPOST(req);

            if (res.getChatHistoryUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHTMLUsingGET

returns the text of a pad formatted as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETHTMLUsingGETRequest;
import org.openapis.openapi.models.operations.GETHTMLUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETHTMLUsingGETRequest req = new GETHTMLUsingGETRequest() {{
                padID = "itaque";
                rev = "incidunt";
            }};            

            GETHTMLUsingGETResponse res = sdk.pad.getHTMLUsingGET(req);

            if (res.getHTMLUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHTMLUsingPOST

returns the text of a pad formatted as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHTMLUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetHTMLUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHTMLUsingPOSTRequest req = new GetHTMLUsingPOSTRequest() {{
                padID = "consequatur";
                rev = "est";
            }};            

            GetHTMLUsingPOSTResponse res = sdk.pad.getHTMLUsingPOST(req);

            if (res.getHTMLUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLastEditedUsingGET

returns the timestamp of the last revision of the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETLastEditedUsingGETRequest;
import org.openapis.openapi.models.operations.GETLastEditedUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETLastEditedUsingGETRequest req = new GETLastEditedUsingGETRequest() {{
                padID = "explicabo";
            }};            

            GETLastEditedUsingGETResponse res = sdk.pad.getLastEditedUsingGET(req);

            if (res.getLastEditedUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLastEditedUsingPOST

returns the timestamp of the last revision of the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLastEditedUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetLastEditedUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLastEditedUsingPOSTRequest req = new GetLastEditedUsingPOSTRequest() {{
                padID = "distinctio";
            }};            

            GetLastEditedUsingPOSTResponse res = sdk.pad.getLastEditedUsingPOST(req);

            if (res.getLastEditedUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicStatusUsingGET

return true of false

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPublicStatusUsingGETRequest;
import org.openapis.openapi.models.operations.GETPublicStatusUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPublicStatusUsingGETRequest req = new GETPublicStatusUsingGETRequest() {{
                padID = "labore";
            }};            

            GETPublicStatusUsingGETResponse res = sdk.pad.getPublicStatusUsingGET(req);

            if (res.getPublicStatusUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicStatusUsingPOST

return true of false

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicStatusUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetPublicStatusUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPublicStatusUsingPOSTRequest req = new GetPublicStatusUsingPOSTRequest() {{
                padID = "qui";
            }};            

            GetPublicStatusUsingPOSTResponse res = sdk.pad.getPublicStatusUsingPOST(req);

            if (res.getPublicStatusUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadOnlyIDUsingGET

returns the read only link of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETReadOnlyIDUsingGETRequest;
import org.openapis.openapi.models.operations.GETReadOnlyIDUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETReadOnlyIDUsingGETRequest req = new GETReadOnlyIDUsingGETRequest() {{
                padID = "cupiditate";
            }};            

            GETReadOnlyIDUsingGETResponse res = sdk.pad.getReadOnlyIDUsingGET(req);

            if (res.getReadOnlyIDUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadOnlyIDUsingPOST

returns the read only link of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadOnlyIDUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetReadOnlyIDUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadOnlyIDUsingPOSTRequest req = new GetReadOnlyIDUsingPOSTRequest() {{
                padID = "perferendis";
            }};            

            GetReadOnlyIDUsingPOSTResponse res = sdk.pad.getReadOnlyIDUsingPOST(req);

            if (res.getReadOnlyIDUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevisionsCountUsingGET

returns the number of revisions of this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevisionsCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETRevisionsCountUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevisionsCountUsingGETRequest req = new GETRevisionsCountUsingGETRequest() {{
                padID = "assumenda";
            }};            

            GETRevisionsCountUsingGETResponse res = sdk.pad.getRevisionsCountUsingGET(req);

            if (res.getRevisionsCountUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevisionsCountUsingPOST

returns the number of revisions of this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRevisionsCountUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetRevisionsCountUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRevisionsCountUsingPOSTRequest req = new GetRevisionsCountUsingPOSTRequest() {{
                padID = "alias";
            }};            

            GetRevisionsCountUsingPOSTResponse res = sdk.pad.getRevisionsCountUsingPOST(req);

            if (res.getRevisionsCountUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextUsingGET

returns the text of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTextUsingGETRequest;
import org.openapis.openapi.models.operations.GETTextUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTextUsingGETRequest req = new GETTextUsingGETRequest() {{
                padID = "dolorum";
                rev = "excepturi";
            }};            

            GETTextUsingGETResponse res = sdk.pad.getTextUsingGET(req);

            if (res.getTextUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTextUsingPOST

returns the text of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTextUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetTextUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTextUsingPOSTRequest req = new GetTextUsingPOSTRequest() {{
                padID = "facilis";
                rev = "tempore";
            }};            

            GetTextUsingPOSTResponse res = sdk.pad.getTextUsingPOST(req);

            if (res.getTextUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllPadsUsingGET

list all the pads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllPadsUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllPadsUsingGETResponse res = sdk.pad.listAllPadsUsingGET();

            if (res.listAllPadsUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllPadsUsingPOST

list all the pads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllPadsUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllPadsUsingPOSTResponse res = sdk.pad.listAllPadsUsingPOST();

            if (res.listAllPadsUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAuthorsOfPadUsingGET

returns an array of authors who contributed to this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAuthorsOfPadUsingGETRequest;
import org.openapis.openapi.models.operations.ListAuthorsOfPadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAuthorsOfPadUsingGETRequest req = new ListAuthorsOfPadUsingGETRequest() {{
                padID = "non";
            }};            

            ListAuthorsOfPadUsingGETResponse res = sdk.pad.listAuthorsOfPadUsingGET(req);

            if (res.listAuthorsOfPadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAuthorsOfPadUsingPOST

returns an array of authors who contributed to this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAuthorsOfPadUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListAuthorsOfPadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAuthorsOfPadUsingPOSTRequest req = new ListAuthorsOfPadUsingPOSTRequest() {{
                padID = "sint";
            }};            

            ListAuthorsOfPadUsingPOSTResponse res = sdk.pad.listAuthorsOfPadUsingPOST(req);

            if (res.listAuthorsOfPadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## padUsersCountUsingGET

returns the number of user that are currently editing this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PadUsersCountUsingGETRequest;
import org.openapis.openapi.models.operations.PadUsersCountUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PadUsersCountUsingGETRequest req = new PadUsersCountUsingGETRequest() {{
                padID = "provident";
            }};            

            PadUsersCountUsingGETResponse res = sdk.pad.padUsersCountUsingGET(req);

            if (res.padUsersCountUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## padUsersCountUsingPOST

returns the number of user that are currently editing this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PadUsersCountUsingPOSTRequest;
import org.openapis.openapi.models.operations.PadUsersCountUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PadUsersCountUsingPOSTRequest req = new PadUsersCountUsingPOSTRequest() {{
                padID = "sint";
            }};            

            PadUsersCountUsingPOSTResponse res = sdk.pad.padUsersCountUsingPOST(req);

            if (res.padUsersCountUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## padUsersUsingGET

returns the list of users that are currently editing this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PadUsersUsingGETRequest;
import org.openapis.openapi.models.operations.PadUsersUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PadUsersUsingGETRequest req = new PadUsersUsingGETRequest() {{
                padID = "dolor";
            }};            

            PadUsersUsingGETResponse res = sdk.pad.padUsersUsingGET(req);

            if (res.padUsersUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## padUsersUsingPOST

returns the list of users that are currently editing this pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PadUsersUsingPOSTRequest;
import org.openapis.openapi.models.operations.PadUsersUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PadUsersUsingPOSTRequest req = new PadUsersUsingPOSTRequest() {{
                padID = "a";
            }};            

            PadUsersUsingPOSTResponse res = sdk.pad.padUsersUsingPOST(req);

            if (res.padUsersUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendClientsMessageUsingGET

sends a custom message of type msg to the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendClientsMessageUsingGETRequest;
import org.openapis.openapi.models.operations.SendClientsMessageUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendClientsMessageUsingGETRequest req = new SendClientsMessageUsingGETRequest() {{
                msg = "in";
                padID = "in";
            }};            

            SendClientsMessageUsingGETResponse res = sdk.pad.sendClientsMessageUsingGET(req);

            if (res.sendClientsMessageUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendClientsMessageUsingPOST

sends a custom message of type msg to the pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendClientsMessageUsingPOSTRequest;
import org.openapis.openapi.models.operations.SendClientsMessageUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendClientsMessageUsingPOSTRequest req = new SendClientsMessageUsingPOSTRequest() {{
                msg = "maiores";
                padID = "rerum";
            }};            

            SendClientsMessageUsingPOSTResponse res = sdk.pad.sendClientsMessageUsingPOST(req);

            if (res.sendClientsMessageUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setHTMLUsingGET

sets the text of a pad with HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetHTMLUsingGETRequest;
import org.openapis.openapi.models.operations.SetHTMLUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetHTMLUsingGETRequest req = new SetHTMLUsingGETRequest() {{
                html = "magnam";
                padID = "cumque";
            }};            

            SetHTMLUsingGETResponse res = sdk.pad.setHTMLUsingGET(req);

            if (res.setHTMLUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setHTMLUsingPOST

sets the text of a pad with HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetHTMLUsingPOSTRequest;
import org.openapis.openapi.models.operations.SetHTMLUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetHTMLUsingPOSTRequest req = new SetHTMLUsingPOSTRequest() {{
                html = "ea";
                padID = "aliquid";
            }};            

            SetHTMLUsingPOSTResponse res = sdk.pad.setHTMLUsingPOST(req);

            if (res.setHTMLUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPublicStatusUsingGET

sets a boolean for the public status of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPublicStatusUsingGETRequest;
import org.openapis.openapi.models.operations.SetPublicStatusUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetPublicStatusUsingGETRequest req = new SetPublicStatusUsingGETRequest() {{
                padID = "accusamus";
                publicStatus = "non";
            }};            

            SetPublicStatusUsingGETResponse res = sdk.pad.setPublicStatusUsingGET(req);

            if (res.setPublicStatusUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPublicStatusUsingPOST

sets a boolean for the public status of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPublicStatusUsingPOSTRequest;
import org.openapis.openapi.models.operations.SetPublicStatusUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetPublicStatusUsingPOSTRequest req = new SetPublicStatusUsingPOSTRequest() {{
                padID = "enim";
                publicStatus = "accusamus";
            }};            

            SetPublicStatusUsingPOSTResponse res = sdk.pad.setPublicStatusUsingPOST(req);

            if (res.setPublicStatusUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTextUsingGET

sets the text of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTextUsingGETRequest;
import org.openapis.openapi.models.operations.SetTextUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTextUsingGETRequest req = new SetTextUsingGETRequest() {{
                padID = "quidem";
                text = "provident";
            }};            

            SetTextUsingGETResponse res = sdk.pad.setTextUsingGET(req);

            if (res.setTextUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTextUsingPOST

sets the text of a pad

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTextUsingPOSTRequest;
import org.openapis.openapi.models.operations.SetTextUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTextUsingPOSTRequest req = new SetTextUsingPOSTRequest() {{
                padID = "id";
                text = "blanditiis";
            }};            

            SetTextUsingPOSTResponse res = sdk.pad.setTextUsingPOST(req);

            if (res.setTextUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
