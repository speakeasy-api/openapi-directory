# author

### Available Operations

* [createAuthorIfNotExistsForUsingGET](#createauthorifnotexistsforusingget) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorIfNotExistsForUsingPOST](#createauthorifnotexistsforusingpost) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorUsingGET](#createauthorusingget) - creates a new author
* [createAuthorUsingPOST](#createauthorusingpost) - creates a new author
* [getAuthorNameUsingGET](#getauthornameusingget) - Returns the Author Name of the author
* [getAuthorNameUsingPOST](#getauthornameusingpost) - Returns the Author Name of the author
* [listPadsOfAuthorUsingGET](#listpadsofauthorusingget) - returns an array of all pads this author contributed to
* [listPadsOfAuthorUsingPOST](#listpadsofauthorusingpost) - returns an array of all pads this author contributed to
* [listSessionsOfAuthorUsingGET](#listsessionsofauthorusingget) - returns all sessions of an author
* [listSessionsOfAuthorUsingPOST](#listsessionsofauthorusingpost) - returns all sessions of an author

## createAuthorIfNotExistsForUsingGET

this functions helps you to map your application author ids to Etherpad author ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAuthorIfNotExistsForUsingGETRequest;
import org.openapis.openapi.models.operations.CreateAuthorIfNotExistsForUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAuthorIfNotExistsForUsingGETRequest req = new CreateAuthorIfNotExistsForUsingGETRequest() {{
                authorMapper = "natus";
                name = "Sheryl Fadel";
            }};            

            CreateAuthorIfNotExistsForUsingGETResponse res = sdk.author.createAuthorIfNotExistsForUsingGET(req);

            if (res.createAuthorIfNotExistsForUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAuthorIfNotExistsForUsingPOST

this functions helps you to map your application author ids to Etherpad author ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAuthorIfNotExistsForUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateAuthorIfNotExistsForUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAuthorIfNotExistsForUsingPOSTRequest req = new CreateAuthorIfNotExistsForUsingPOSTRequest() {{
                authorMapper = "saepe";
                name = "Harvey Hessel";
            }};            

            CreateAuthorIfNotExistsForUsingPOSTResponse res = sdk.author.createAuthorIfNotExistsForUsingPOST(req);

            if (res.createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAuthorUsingGET

creates a new author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAuthorUsingGETRequest;
import org.openapis.openapi.models.operations.CreateAuthorUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAuthorUsingGETRequest req = new CreateAuthorUsingGETRequest() {{
                name = "Roger Beier";
            }};            

            CreateAuthorUsingGETResponse res = sdk.author.createAuthorUsingGET(req);

            if (res.createAuthorUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAuthorUsingPOST

creates a new author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAuthorUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateAuthorUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAuthorUsingPOSTRequest req = new CreateAuthorUsingPOSTRequest() {{
                name = "Ernest Ebert";
            }};            

            CreateAuthorUsingPOSTResponse res = sdk.author.createAuthorUsingPOST(req);

            if (res.createAuthorUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorNameUsingGET

Returns the Author Name of the author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorNameUsingGETRequest;
import org.openapis.openapi.models.operations.GETAuthorNameUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorNameUsingGETRequest req = new GETAuthorNameUsingGETRequest() {{
                authorID = "enim";
            }};            

            GETAuthorNameUsingGETResponse res = sdk.author.getAuthorNameUsingGET(req);

            if (res.getAuthorNameUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorNameUsingPOST

Returns the Author Name of the author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorNameUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetAuthorNameUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthorNameUsingPOSTRequest req = new GetAuthorNameUsingPOSTRequest() {{
                authorID = "nemo";
            }};            

            GetAuthorNameUsingPOSTResponse res = sdk.author.getAuthorNameUsingPOST(req);

            if (res.getAuthorNameUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPadsOfAuthorUsingGET

returns an array of all pads this author contributed to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPadsOfAuthorUsingGETRequest;
import org.openapis.openapi.models.operations.ListPadsOfAuthorUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPadsOfAuthorUsingGETRequest req = new ListPadsOfAuthorUsingGETRequest() {{
                authorID = "excepturi";
            }};            

            ListPadsOfAuthorUsingGETResponse res = sdk.author.listPadsOfAuthorUsingGET(req);

            if (res.listPadsOfAuthorUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPadsOfAuthorUsingPOST

returns an array of all pads this author contributed to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPadsOfAuthorUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListPadsOfAuthorUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPadsOfAuthorUsingPOSTRequest req = new ListPadsOfAuthorUsingPOSTRequest() {{
                authorID = "iure";
            }};            

            ListPadsOfAuthorUsingPOSTResponse res = sdk.author.listPadsOfAuthorUsingPOST(req);

            if (res.listPadsOfAuthorUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSessionsOfAuthorUsingGET

returns all sessions of an author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionsOfAuthorUsingGETRequest;
import org.openapis.openapi.models.operations.ListSessionsOfAuthorUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSessionsOfAuthorUsingGETRequest req = new ListSessionsOfAuthorUsingGETRequest() {{
                authorID = "doloribus";
            }};            

            ListSessionsOfAuthorUsingGETResponse res = sdk.author.listSessionsOfAuthorUsingGET(req);

            if (res.listSessionsOfAuthorUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSessionsOfAuthorUsingPOST

returns all sessions of an author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionsOfAuthorUsingPOSTRequest;
import org.openapis.openapi.models.operations.ListSessionsOfAuthorUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSessionsOfAuthorUsingPOSTRequest req = new ListSessionsOfAuthorUsingPOSTRequest() {{
                authorID = "architecto";
            }};            

            ListSessionsOfAuthorUsingPOSTResponse res = sdk.author.listSessionsOfAuthorUsingPOST(req);

            if (res.listSessionsOfAuthorUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
