# SDK

## Overview

Etherpad is a real-time collaborative editor scalable to thousands of simultaneous real time users. It provides full data export capabilities, and runs on your server, under your control.

### Available Operations

* [appendTextUsingGET](#appendtextusingget)
* [appendTextUsingPOST](#appendtextusingpost)
* [copyPadUsingGET](#copypadusingget)
* [copyPadUsingPOST](#copypadusingpost)
* [copyPadWithoutHistoryUsingGET](#copypadwithouthistoryusingget)
* [copyPadWithoutHistoryUsingPOST](#copypadwithouthistoryusingpost)
* [getAttributePoolUsingGET](#getattributepoolusingget)
* [getAttributePoolUsingPOST](#getattributepoolusingpost)
* [getPadIDUsingGET](#getpadidusingget)
* [getPadIDUsingPOST](#getpadidusingpost)
* [getRevisionChangesetUsingGET](#getrevisionchangesetusingget)
* [getRevisionChangesetUsingPOST](#getrevisionchangesetusingpost)
* [getSavedRevisionsCountUsingGET](#getsavedrevisionscountusingget)
* [getSavedRevisionsCountUsingPOST](#getsavedrevisionscountusingpost)
* [getStatsUsingGET](#getstatsusingget)
* [getStatsUsingPOST](#getstatsusingpost)
* [listSavedRevisionsUsingGET](#listsavedrevisionsusingget)
* [listSavedRevisionsUsingPOST](#listsavedrevisionsusingpost)
* [movePadUsingGET](#movepadusingget)
* [movePadUsingPOST](#movepadusingpost)
* [restoreRevisionUsingGET](#restorerevisionusingget)
* [restoreRevisionUsingPOST](#restorerevisionusingpost)
* [saveRevisionUsingGET](#saverevisionusingget)
* [saveRevisionUsingPOST](#saverevisionusingpost)

## appendTextUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendTextUsingGETRequest;
import org.openapis.openapi.models.operations.AppendTextUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendTextUsingGETRequest req = new AppendTextUsingGETRequest() {{
                padID = "unde";
                text = "nulla";
            }};            

            AppendTextUsingGETResponse res = sdk.sdk.appendTextUsingGET(req);

            if (res.appendTextUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appendTextUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendTextUsingPOSTRequest;
import org.openapis.openapi.models.operations.AppendTextUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendTextUsingPOSTRequest req = new AppendTextUsingPOSTRequest() {{
                padID = "illum";
                text = "vel";
            }};            

            AppendTextUsingPOSTResponse res = sdk.sdk.appendTextUsingPOST(req);

            if (res.appendTextUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyPadUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyPadUsingGETRequest;
import org.openapis.openapi.models.operations.CopyPadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyPadUsingGETRequest req = new CopyPadUsingGETRequest() {{
                destinationID = "deserunt";
                force = "suscipit";
                sourceID = "iure";
            }};            

            CopyPadUsingGETResponse res = sdk.sdk.copyPadUsingGET(req);

            if (res.copyPadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyPadUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyPadUsingPOSTRequest;
import org.openapis.openapi.models.operations.CopyPadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyPadUsingPOSTRequest req = new CopyPadUsingPOSTRequest() {{
                destinationID = "debitis";
                force = "ipsa";
                sourceID = "delectus";
            }};            

            CopyPadUsingPOSTResponse res = sdk.sdk.copyPadUsingPOST(req);

            if (res.copyPadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyPadWithoutHistoryUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyPadWithoutHistoryUsingGETRequest;
import org.openapis.openapi.models.operations.CopyPadWithoutHistoryUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyPadWithoutHistoryUsingGETRequest req = new CopyPadWithoutHistoryUsingGETRequest() {{
                destinationID = "suscipit";
                force = "molestiae";
                sourceID = "minus";
            }};            

            CopyPadWithoutHistoryUsingGETResponse res = sdk.sdk.copyPadWithoutHistoryUsingGET(req);

            if (res.copyPadWithoutHistoryUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyPadWithoutHistoryUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyPadWithoutHistoryUsingPOSTRequest;
import org.openapis.openapi.models.operations.CopyPadWithoutHistoryUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyPadWithoutHistoryUsingPOSTRequest req = new CopyPadWithoutHistoryUsingPOSTRequest() {{
                destinationID = "voluptatum";
                force = "iusto";
                sourceID = "excepturi";
            }};            

            CopyPadWithoutHistoryUsingPOSTResponse res = sdk.sdk.copyPadWithoutHistoryUsingPOST(req);

            if (res.copyPadWithoutHistoryUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttributePoolUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttributePoolUsingGETRequest;
import org.openapis.openapi.models.operations.GETAttributePoolUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttributePoolUsingGETRequest req = new GETAttributePoolUsingGETRequest() {{
                padID = "recusandae";
            }};            

            GETAttributePoolUsingGETResponse res = sdk.sdk.getAttributePoolUsingGET(req);

            if (res.getAttributePoolUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttributePoolUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttributePoolUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetAttributePoolUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAttributePoolUsingPOSTRequest req = new GetAttributePoolUsingPOSTRequest() {{
                padID = "ab";
            }};            

            GetAttributePoolUsingPOSTResponse res = sdk.sdk.getAttributePoolUsingPOST(req);

            if (res.getAttributePoolUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPadIDUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPadIDUsingGETRequest;
import org.openapis.openapi.models.operations.GETPadIDUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPadIDUsingGETRequest req = new GETPadIDUsingGETRequest() {{
                roID = "veritatis";
            }};            

            GETPadIDUsingGETResponse res = sdk.sdk.getPadIDUsingGET(req);

            if (res.getPadIDUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPadIDUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPadIDUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetPadIDUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPadIDUsingPOSTRequest req = new GetPadIDUsingPOSTRequest() {{
                roID = "perferendis";
            }};            

            GetPadIDUsingPOSTResponse res = sdk.sdk.getPadIDUsingPOST(req);

            if (res.getPadIDUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevisionChangesetUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevisionChangesetUsingGETRequest;
import org.openapis.openapi.models.operations.GETRevisionChangesetUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevisionChangesetUsingGETRequest req = new GETRevisionChangesetUsingGETRequest() {{
                padID = "repellendus";
                rev = "sapiente";
            }};            

            GETRevisionChangesetUsingGETResponse res = sdk.sdk.getRevisionChangesetUsingGET(req);

            if (res.getRevisionChangesetUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevisionChangesetUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRevisionChangesetUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetRevisionChangesetUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRevisionChangesetUsingPOSTRequest req = new GetRevisionChangesetUsingPOSTRequest() {{
                padID = "odit";
                rev = "at";
            }};            

            GetRevisionChangesetUsingPOSTResponse res = sdk.sdk.getRevisionChangesetUsingPOST(req);

            if (res.getRevisionChangesetUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavedRevisionsCountUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSavedRevisionsCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETSavedRevisionsCountUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSavedRevisionsCountUsingGETRequest req = new GETSavedRevisionsCountUsingGETRequest() {{
                padID = "maiores";
            }};            

            GETSavedRevisionsCountUsingGETResponse res = sdk.sdk.getSavedRevisionsCountUsingGET(req);

            if (res.getSavedRevisionsCountUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavedRevisionsCountUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavedRevisionsCountUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetSavedRevisionsCountUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavedRevisionsCountUsingPOSTRequest req = new GetSavedRevisionsCountUsingPOSTRequest() {{
                padID = "quod";
            }};            

            GetSavedRevisionsCountUsingPOSTResponse res = sdk.sdk.getSavedRevisionsCountUsingPOST(req);

            if (res.getSavedRevisionsCountUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatsUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStatsUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStatsUsingGETResponse res = sdk.sdk.getStatsUsingGET();

            if (res.getStatsUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatsUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatsUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStatsUsingPOSTResponse res = sdk.sdk.getStatsUsingPOST();

            if (res.getStatsUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSavedRevisionsUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSavedRevisionsUsingGETRequest;
import org.openapis.openapi.models.operations.ListSavedRevisionsUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSavedRevisionsUsingGETRequest req = new ListSavedRevisionsUsingGETRequest() {{
                padID = "porro";
            }};            

            ListSavedRevisionsUsingGETResponse res = sdk.sdk.listSavedRevisionsUsingGET(req);

            if (res.listSavedRevisionsUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSavedRevisionsUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSavedRevisionsUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListSavedRevisionsUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSavedRevisionsUsingPOSTRequest req = new ListSavedRevisionsUsingPOSTRequest() {{
                padID = "dicta";
            }};            

            ListSavedRevisionsUsingPOSTResponse res = sdk.sdk.listSavedRevisionsUsingPOST(req);

            if (res.listSavedRevisionsUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## movePadUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MovePadUsingGETRequest;
import org.openapis.openapi.models.operations.MovePadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MovePadUsingGETRequest req = new MovePadUsingGETRequest() {{
                destinationID = "officia";
                force = "occaecati";
                sourceID = "fugit";
            }};            

            MovePadUsingGETResponse res = sdk.sdk.movePadUsingGET(req);

            if (res.movePadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## movePadUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MovePadUsingPOSTRequest;
import org.openapis.openapi.models.operations.MovePadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MovePadUsingPOSTRequest req = new MovePadUsingPOSTRequest() {{
                destinationID = "hic";
                force = "optio";
                sourceID = "totam";
            }};            

            MovePadUsingPOSTResponse res = sdk.sdk.movePadUsingPOST(req);

            if (res.movePadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreRevisionUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreRevisionUsingGETRequest;
import org.openapis.openapi.models.operations.RestoreRevisionUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreRevisionUsingGETRequest req = new RestoreRevisionUsingGETRequest() {{
                padID = "commodi";
                rev = "molestiae";
            }};            

            RestoreRevisionUsingGETResponse res = sdk.sdk.restoreRevisionUsingGET(req);

            if (res.restoreRevisionUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreRevisionUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreRevisionUsingPOSTRequest;
import org.openapis.openapi.models.operations.RestoreRevisionUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreRevisionUsingPOSTRequest req = new RestoreRevisionUsingPOSTRequest() {{
                padID = "qui";
                rev = "impedit";
            }};            

            RestoreRevisionUsingPOSTResponse res = sdk.sdk.restoreRevisionUsingPOST(req);

            if (res.restoreRevisionUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveRevisionUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveRevisionUsingGETRequest;
import org.openapis.openapi.models.operations.SaveRevisionUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveRevisionUsingGETRequest req = new SaveRevisionUsingGETRequest() {{
                padID = "esse";
                rev = "ipsum";
            }};            

            SaveRevisionUsingGETResponse res = sdk.sdk.saveRevisionUsingGET(req);

            if (res.saveRevisionUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveRevisionUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveRevisionUsingPOSTRequest;
import org.openapis.openapi.models.operations.SaveRevisionUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveRevisionUsingPOSTRequest req = new SaveRevisionUsingPOSTRequest() {{
                padID = "aspernatur";
                rev = "perferendis";
            }};            

            SaveRevisionUsingPOSTResponse res = sdk.sdk.saveRevisionUsingPOST(req);

            if (res.saveRevisionUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
