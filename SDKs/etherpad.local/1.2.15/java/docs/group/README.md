# group

### Available Operations

* [createGroupIfNotExistsForUsingGET](#creategroupifnotexistsforusingget) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupIfNotExistsForUsingPOST](#creategroupifnotexistsforusingpost) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupPadUsingGET](#creategrouppadusingget) - creates a new pad in this group
* [createGroupPadUsingPOST](#creategrouppadusingpost) - creates a new pad in this group
* [createGroupUsingGET](#creategroupusingget) - creates a new group
* [createGroupUsingPOST](#creategroupusingpost) - creates a new group
* [deleteGroupUsingGET](#deletegroupusingget) - deletes a group
* [deleteGroupUsingPOST](#deletegroupusingpost) - deletes a group
* [listAllGroupsUsingGET](#listallgroupsusingget)
* [listAllGroupsUsingPOST](#listallgroupsusingpost)
* [listPadsUsingGET](#listpadsusingget) - returns all pads of this group
* [listPadsUsingPOST](#listpadsusingpost) - returns all pads of this group
* [listSessionsOfGroupUsingGET](#listsessionsofgroupusingget)
* [listSessionsOfGroupUsingPOST](#listsessionsofgroupusingpost)

## createGroupIfNotExistsForUsingGET

this functions helps you to map your application group ids to Etherpad group ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupIfNotExistsForUsingGETRequest;
import org.openapis.openapi.models.operations.CreateGroupIfNotExistsForUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupIfNotExistsForUsingGETRequest req = new CreateGroupIfNotExistsForUsingGETRequest() {{
                groupMapper = "dolorem";
            }};            

            CreateGroupIfNotExistsForUsingGETResponse res = sdk.group.createGroupIfNotExistsForUsingGET(req);

            if (res.createGroupIfNotExistsForUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupIfNotExistsForUsingPOST

this functions helps you to map your application group ids to Etherpad group ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupIfNotExistsForUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateGroupIfNotExistsForUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupIfNotExistsForUsingPOSTRequest req = new CreateGroupIfNotExistsForUsingPOSTRequest() {{
                groupMapper = "consequuntur";
            }};            

            CreateGroupIfNotExistsForUsingPOSTResponse res = sdk.group.createGroupIfNotExistsForUsingPOST(req);

            if (res.createGroupIfNotExistsForUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupPadUsingGET

creates a new pad in this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupPadUsingGETRequest;
import org.openapis.openapi.models.operations.CreateGroupPadUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupPadUsingGETRequest req = new CreateGroupPadUsingGETRequest() {{
                groupID = "mollitia";
                padName = "occaecati";
                text = "numquam";
            }};            

            CreateGroupPadUsingGETResponse res = sdk.group.createGroupPadUsingGET(req);

            if (res.createGroupPadUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupPadUsingPOST

creates a new pad in this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupPadUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateGroupPadUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupPadUsingPOSTRequest req = new CreateGroupPadUsingPOSTRequest() {{
                groupID = "quam";
                padName = "molestiae";
                text = "velit";
            }};            

            CreateGroupPadUsingPOSTResponse res = sdk.group.createGroupPadUsingPOST(req);

            if (res.createGroupPadUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupUsingGET

creates a new group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupUsingGETResponse res = sdk.group.createGroupUsingGET();

            if (res.createGroupUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupUsingPOST

creates a new group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupUsingPOSTResponse res = sdk.group.createGroupUsingPOST();

            if (res.createGroupUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroupUsingGET

deletes a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupUsingGETRequest;
import org.openapis.openapi.models.operations.DeleteGroupUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupUsingGETRequest req = new DeleteGroupUsingGETRequest() {{
                groupID = "vitae";
            }};            

            DeleteGroupUsingGETResponse res = sdk.group.deleteGroupUsingGET(req);

            if (res.deleteGroupUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroupUsingPOST

deletes a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupUsingPOSTRequest;
import org.openapis.openapi.models.operations.DeleteGroupUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupUsingPOSTRequest req = new DeleteGroupUsingPOSTRequest() {{
                groupID = "animi";
            }};            

            DeleteGroupUsingPOSTResponse res = sdk.group.deleteGroupUsingPOST(req);

            if (res.deleteGroupUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllGroupsUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllGroupsUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllGroupsUsingGETResponse res = sdk.group.listAllGroupsUsingGET();

            if (res.listAllGroupsUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllGroupsUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllGroupsUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllGroupsUsingPOSTResponse res = sdk.group.listAllGroupsUsingPOST();

            if (res.listAllGroupsUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPadsUsingGET

returns all pads of this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPadsUsingGETRequest;
import org.openapis.openapi.models.operations.ListPadsUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPadsUsingGETRequest req = new ListPadsUsingGETRequest() {{
                groupID = "sequi";
            }};            

            ListPadsUsingGETResponse res = sdk.group.listPadsUsingGET(req);

            if (res.listPadsUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPadsUsingPOST

returns all pads of this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPadsUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListPadsUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPadsUsingPOSTRequest req = new ListPadsUsingPOSTRequest() {{
                groupID = "ipsam";
            }};            

            ListPadsUsingPOSTResponse res = sdk.group.listPadsUsingPOST(req);

            if (res.listPadsUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSessionsOfGroupUsingGET

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionsOfGroupUsingGETRequest;
import org.openapis.openapi.models.operations.ListSessionsOfGroupUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSessionsOfGroupUsingGETRequest req = new ListSessionsOfGroupUsingGETRequest() {{
                groupID = "possimus";
            }};            

            ListSessionsOfGroupUsingGETResponse res = sdk.group.listSessionsOfGroupUsingGET(req);

            if (res.listSessionsOfGroupUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSessionsOfGroupUsingPOST

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionsOfGroupUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListSessionsOfGroupUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSessionsOfGroupUsingPOSTRequest req = new ListSessionsOfGroupUsingPOSTRequest() {{
                groupID = "quasi";
            }};            

            ListSessionsOfGroupUsingPOSTResponse res = sdk.group.listSessionsOfGroupUsingPOST(req);

            if (res.listSessionsOfGroupUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
