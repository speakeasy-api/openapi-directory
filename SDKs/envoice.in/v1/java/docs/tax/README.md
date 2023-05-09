# tax

### Available Operations

* [taxApiAll](#taxapiall) - Return all taxes for the account
* [taxApiDeleteForm](#taxapideleteform) - Delete an existing tax
* [taxApiDeleteJson](#taxapideletejson) - Delete an existing tax
* [taxApiDeleteRaw](#taxapideleteraw) - Delete an existing tax
* [taxApiNewForm](#taxapinewform) - Create a tax
* [taxApiNewJson](#taxapinewjson) - Create a tax
* [taxApiNewRaw](#taxapinewraw) - Create a tax
* [taxApiUpdateForm](#taxapiupdateform) - Update an existing tax
* [taxApiUpdateJson](#taxapiupdatejson) - Update an existing tax
* [taxApiUpdateRaw](#taxapiupdateraw) - Update an existing tax

## taxApiAll

Return all taxes for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiAllRequest;
import org.openapis.openapi.models.operations.TaxApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiAllRequest req = new TaxApiAllRequest("maiores", "nemo");            

            TaxApiAllResponse res = sdk.tax.taxApiAll(req);

            if (res.taxDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiDeleteForm

Delete an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiDeleteFormRequest;
import org.openapis.openapi.models.operations.TaxApiDeleteFormResponse;
import org.openapis.openapi.models.shared.TaxDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiDeleteFormRequest req = new TaxApiDeleteFormRequest(                new TaxDeleteApiModel() {{
                                id = 72600;
                            }};, "doloribus", "cumque");            

            TaxApiDeleteFormResponse res = sdk.tax.taxApiDeleteForm(req);

            if (res.taxApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiDeleteJson

Delete an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.TaxApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.TaxDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiDeleteJsonRequest req = new TaxApiDeleteJsonRequest(                new TaxDeleteApiModel() {{
                                id = 711310;
                            }};, "modi", "cumque");            

            TaxApiDeleteJsonResponse res = sdk.tax.taxApiDeleteJson(req);

            if (res.taxApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiDeleteRaw

Delete an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiDeleteRawRequest;
import org.openapis.openapi.models.operations.TaxApiDeleteRawResponse;
import org.openapis.openapi.models.shared.TaxDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiDeleteRawRequest req = new TaxApiDeleteRawRequest("ipsam".getBytes(), "occaecati", "ipsum");            

            TaxApiDeleteRawResponse res = sdk.tax.taxApiDeleteRaw(req);

            if (res.taxApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiNewForm

Create a tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiNewFormRequest;
import org.openapis.openapi.models.operations.TaxApiNewFormResponse;
import org.openapis.openapi.models.shared.TaxCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiNewFormRequest req = new TaxApiNewFormRequest(                new TaxCreateApiModel() {{
                                name = "Devin Boyle";
                                percentage = 8400.17;
                            }};, "mollitia", "id");            

            TaxApiNewFormResponse res = sdk.tax.taxApiNewForm(req);

            if (res.taxApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiNewJson

Create a tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiNewJsonRequest;
import org.openapis.openapi.models.operations.TaxApiNewJsonResponse;
import org.openapis.openapi.models.shared.TaxCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiNewJsonRequest req = new TaxApiNewJsonRequest(                new TaxCreateApiModel() {{
                                name = "Jeffrey Thiel";
                                percentage = 6277.56;
                            }};, "delectus", "saepe");            

            TaxApiNewJsonResponse res = sdk.tax.taxApiNewJson(req);

            if (res.taxApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiNewRaw

Create a tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiNewRawRequest;
import org.openapis.openapi.models.operations.TaxApiNewRawResponse;
import org.openapis.openapi.models.shared.TaxCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiNewRawRequest req = new TaxApiNewRawRequest("facere".getBytes(), "nobis", "at");            

            TaxApiNewRawResponse res = sdk.tax.taxApiNewRaw(req);

            if (res.taxApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiUpdateForm

Update an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiUpdateFormRequest;
import org.openapis.openapi.models.operations.TaxApiUpdateFormResponse;
import org.openapis.openapi.models.shared.TaxUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiUpdateFormRequest req = new TaxApiUpdateFormRequest(                new TaxUpdateApiModel() {{
                                id = 561121;
                                name = "Paulette White";
                                percentage = 5469.5;
                            }};, "similique", "dolore");            

            TaxApiUpdateFormResponse res = sdk.tax.taxApiUpdateForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiUpdateJson

Update an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.TaxApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.TaxUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiUpdateJsonRequest req = new TaxApiUpdateJsonRequest(                new TaxUpdateApiModel() {{
                                id = 456599;
                                name = "Jackie Fahey DDS";
                                percentage = 3258.55;
                            }};, "quos", "blanditiis");            

            TaxApiUpdateJsonResponse res = sdk.tax.taxApiUpdateJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxApiUpdateRaw

Update an existing tax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxApiUpdateRawRequest;
import org.openapis.openapi.models.operations.TaxApiUpdateRawResponse;
import org.openapis.openapi.models.shared.TaxUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxApiUpdateRawRequest req = new TaxApiUpdateRawRequest("quas".getBytes(), "voluptatem", "provident");            

            TaxApiUpdateRawResponse res = sdk.tax.taxApiUpdateRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
