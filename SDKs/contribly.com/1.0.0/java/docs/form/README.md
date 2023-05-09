# form

## Overview

Create and edit forms

### Available Operations

* [deleteFormsId](#deleteformsid) - Delete this form and all of it's responses.
* [getFormResponses](#getformresponses) - List form responses
* [getFormResponsesId](#getformresponsesid) - Get a single form response by id
* [getForms](#getforms) - List forms
* [getFormsId](#getformsid) - Get a single form by id
* [postFormResponses](#postformresponses) - Submit a response to a form
* [postForms](#postforms) - Create a form

## deleteFormsId

Delete this form and all of it's responses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFormsIdRequest;
import org.openapis.openapi.models.operations.DeleteFormsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFormsIdRequest req = new DeleteFormsIdRequest("quasi");            

            DeleteFormsIdResponse res = sdk.form.deleteFormsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormResponses

List form responses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormResponsesRequest;
import org.openapis.openapi.models.operations.GetFormResponsesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormResponsesRequest req = new GetFormResponsesRequest() {{
                contribution = "et";
                form = "ducimus";
                user = "natus";
            }};            

            GetFormResponsesResponse res = sdk.form.getFormResponses(req);

            if (res.formResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormResponsesId

Get a single form response by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormResponsesIdRequest;
import org.openapis.openapi.models.operations.GetFormResponsesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormResponsesIdRequest req = new GetFormResponsesIdRequest("occaecati");            

            GetFormResponsesIdResponse res = sdk.form.getFormResponsesId(req);

            if (res.formResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getForms

List forms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormsRequest;
import org.openapis.openapi.models.operations.GetFormsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormsRequest req = new GetFormsRequest("suscipit");            

            GetFormsResponse res = sdk.form.getForms(req);

            if (res.forms != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormsId

Get a single form by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormsIdRequest;
import org.openapis.openapi.models.operations.GetFormsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormsIdRequest req = new GetFormsIdRequest("adipisci");            

            GetFormsIdResponse res = sdk.form.getFormsId(req);

            if (res.form != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFormResponses

Submit a response to a form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFormResponsesResponse;
import org.openapis.openapi.models.shared.FormResponseSubmission;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FormResponseSubmission req = new FormResponseSubmission() {{
                contribution = "quasi";
                form = "magni";
                responses = new java.util.HashMap<String, String>() {{
                    put("nulla", "necessitatibus");
                    put("ipsa", "tempora");
                    put("nihil", "molestiae");
                    put("dicta", "iusto");
                }};
            }};            

            PostFormResponsesResponse res = sdk.form.postFormResponses(req);

            if (res.formResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postForms

Create a form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFormsResponse;
import org.openapis.openapi.models.shared.FormField;
import org.openapis.openapi.models.shared.FormSubmission;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FormSubmission req = new FormSubmission() {{
                callToAction = "esse";
                cssUrl = "praesentium";
                fields = new org.openapis.openapi.models.shared.FormField[]{{
                    add(new FormField() {{
                        description = "reiciendis";
                        label = "vel";
                        name = "Ms. Janis Batz";
                        options = new String[]{{
                            add("ex"),
                            add("consectetur"),
                        }};
                        public_ = false;
                        required = false;
                        type = "aliquid";
                    }}),
                    add(new FormField() {{
                        description = "ipsa";
                        label = "laborum";
                        name = "Audrey Stiedemann";
                        options = new String[]{{
                            add("suscipit"),
                            add("aliquid"),
                            add("perferendis"),
                        }};
                        public_ = false;
                        required = false;
                        type = "eum";
                    }}),
                    add(new FormField() {{
                        description = "voluptas";
                        label = "iste";
                        name = "Raymond Muller";
                        options = new String[]{{
                            add("laborum"),
                            add("libero"),
                            add("ad"),
                        }};
                        public_ = false;
                        required = false;
                        type = "deleniti";
                    }}),
                    add(new FormField() {{
                        description = "enim";
                        label = "vitae";
                        name = "Ruben Ryan";
                        options = new String[]{{
                            add("expedita"),
                            add("voluptatem"),
                        }};
                        public_ = false;
                        required = false;
                        type = "molestias";
                    }}),
                }};
                heading = "cum";
                name = "Doris Lemke MD";
                noCss = false;
                tags = new org.openapis.openapi.models.shared.Tag[]{{
                    add(new Tag("vero", "est") {{
                        colour = "#0061a6";
                        id = "a0fe1ade-008e-46f8-85f3-50d8cdb5a341";
                        name = "Peter Goodwin Sr.";
                        tagSet = new TagSet("quasi", "nisi") {{
                            id = "0421813d-5208-4ece-be25-3b668451c6c6";
                            name = "Carlos Barrows";
                        }};
                        urlWords = "at";
                    }}),
                    add(new Tag("sint", "accusamus") {{
                        colour = "#0061a6";
                        id = "b3fec957-8a64-4584-a73a-8418d162309f";
                        name = "John Monahan";
                        tagSet = new TagSet("reprehenderit", "est") {{
                            id = "921aefb9-f58c-44d8-ae68-e4be056013f5";
                            name = "Orville Nolan";
                        }};
                        urlWords = "quis";
                    }}),
                    add(new Tag("voluptas", "facilis") {{
                        colour = "#0061a6";
                        id = "cfef66ef-1caa-4338-bc2b-eb477373c8d7";
                        name = "Camille Kautzer";
                        tagSet = new TagSet("recusandae", "ea") {{
                            id = "1db1f2c4-3106-461e-9634-9e1cf9e06e3a";
                            name = "Mr. Cindy Kub MD";
                        }};
                        urlWords = "quidem";
                    }}),
                }};
            }};            

            PostFormsResponse res = sdk.form.postForms(req);

            if (res.form != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
