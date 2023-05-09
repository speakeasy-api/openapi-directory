# formFieldSets

## Overview

Operations about form_field_sets

### Available Operations

* [deleteFormFieldSetsId](#deleteformfieldsetsid) - Delete Form Field Set
* [getFormFieldSets](#getformfieldsets) - List Form Field Sets
* [getFormFieldSetsId](#getformfieldsetsid) - Show Form Field Set
* [patchFormFieldSetsId](#patchformfieldsetsid) - Update Form Field Set
* [postFormFieldSets](#postformfieldsets) - Create Form Field Set

## deleteFormFieldSetsId

Delete Form Field Set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFormFieldSetsIdRequest;
import org.openapis.openapi.models.operations.DeleteFormFieldSetsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFormFieldSetsIdRequest req = new DeleteFormFieldSetsIdRequest(456141);            

            DeleteFormFieldSetsIdResponse res = sdk.formFieldSets.deleteFormFieldSetsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormFieldSets

List Form Field Sets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormFieldSetsRequest;
import org.openapis.openapi.models.operations.GetFormFieldSetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormFieldSetsRequest req = new GetFormFieldSetsRequest() {{
                cursor = "rem";
                perPage = 683282;
                userId = 442015;
            }};            

            GetFormFieldSetsResponse res = sdk.formFieldSets.getFormFieldSets(req);

            if (res.formFieldSetEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormFieldSetsId

Show Form Field Set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormFieldSetsIdRequest;
import org.openapis.openapi.models.operations.GetFormFieldSetsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFormFieldSetsIdRequest req = new GetFormFieldSetsIdRequest(695626);            

            GetFormFieldSetsIdResponse res = sdk.formFieldSets.getFormFieldSetsId(req);

            if (res.formFieldSetEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchFormFieldSetsId

Update Form Field Set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchFormFieldSetsIdRequest;
import org.openapis.openapi.models.operations.PatchFormFieldSetsIdResponse;
import org.openapis.openapi.models.shared.PatchFormFieldSets;
import org.openapis.openapi.models.shared.PatchFormFieldSetsFormFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchFormFieldSetsIdRequest req = new PatchFormFieldSetsIdRequest(852635,                 new PatchFormFieldSets() {{
                                formFields = new org.openapis.openapi.models.shared.PatchFormFieldSetsFormFields[]{{
                                    add(new PatchFormFieldSetsFormFields() {{
                                        defaultOption = "eum";
                                        fieldType = "suscipit";
                                        helpText = "assumenda";
                                        id = 181151;
                                        label = "praesentium";
                                        optionsForSelect = "quisquam";
                                        required = false;
                                    }}),
                                    add(new PatchFormFieldSetsFormFields() {{
                                        defaultOption = "veritatis";
                                        fieldType = "ipsa";
                                        helpText = "id";
                                        id = 696997;
                                        label = "neque";
                                        optionsForSelect = "quo";
                                        required = false;
                                    }}),
                                }};
                                skipCompany = false;
                                skipEmail = false;
                                skipName = false;
                                title = "Dr.";
                            }};);            

            PatchFormFieldSetsIdResponse res = sdk.formFieldSets.patchFormFieldSetsId(req);

            if (res.formFieldSetEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFormFieldSets

Create Form Field Set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFormFieldSetsResponse;
import org.openapis.openapi.models.shared.PostFormFieldSets;
import org.openapis.openapi.models.shared.PostFormFieldSetsFormFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PostFormFieldSets req = new PostFormFieldSets() {{
                formFields = new org.openapis.openapi.models.shared.PostFormFieldSetsFormFields[]{{
                    add(new PostFormFieldSetsFormFields() {{
                        defaultOption = "fuga";
                        fieldType = "eius";
                        helpText = "eos";
                        id = 373813;
                        label = "ab";
                        optionsForSelect = "cupiditate";
                        required = false;
                    }}),
                    add(new PostFormFieldSetsFormFields() {{
                        defaultOption = "consequatur";
                        fieldType = "tempora";
                        helpText = "debitis";
                        id = 370853;
                        label = "aspernatur";
                        optionsForSelect = "sequi";
                        required = false;
                    }}),
                    add(new PostFormFieldSetsFormFields() {{
                        defaultOption = "quo";
                        fieldType = "esse";
                        helpText = "recusandae";
                        id = 44612;
                        label = "distinctio";
                        optionsForSelect = "quod";
                        required = false;
                    }}),
                    add(new PostFormFieldSetsFormFields() {{
                        defaultOption = "dignissimos";
                        fieldType = "inventore";
                        helpText = "nihil";
                        id = 518835;
                        label = "accusamus";
                        optionsForSelect = "aliquam";
                        required = false;
                    }}),
                }};
                skipCompany = false;
                skipEmail = false;
                skipName = false;
                title = "Ms.";
                userId = 577543;
            }};            

            PostFormFieldSetsResponse res = sdk.formFieldSets.postFormFieldSets(req);

            if (res.formFieldSetEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
