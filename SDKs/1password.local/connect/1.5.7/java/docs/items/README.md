# items

## Overview

Access and manage items inside 1Password Vaults

### Available Operations

* [createVaultItem](#createvaultitem) - Create a new Item
* [deleteVaultItem](#deletevaultitem) - Delete an Item
* [getVaultItemById](#getvaultitembyid) - Get the details of an Item
* [getVaultItems](#getvaultitems) - Get all items for inside a Vault
* [patchVaultItem](#patchvaultitem) - Update a subset of Item attributes
* [updateVaultItem](#updatevaultitem) - Update an Item

## createVaultItem

Create a new Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVaultItemRequest;
import org.openapis.openapi.models.operations.CreateVaultItemResponse;
import org.openapis.openapi.models.operations.CreateVaultItemSecurity;
import org.openapis.openapi.models.shared.FieldInput;
import org.openapis.openapi.models.shared.FieldPurposeEnum;
import org.openapis.openapi.models.shared.FieldSection;
import org.openapis.openapi.models.shared.FieldTypeEnum;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileSection;
import org.openapis.openapi.models.shared.FullItemCategoryEnum;
import org.openapis.openapi.models.shared.FullItemInput;
import org.openapis.openapi.models.shared.FullItemSections;
import org.openapis.openapi.models.shared.FullItemUrls;
import org.openapis.openapi.models.shared.FullItemVault;
import org.openapis.openapi.models.shared.GeneratorRecipe;
import org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateVaultItemRequest req = new CreateVaultItemRequest("maiores") {{
                fullItemInput = new FullItemInput(FullItemCategoryEnum.REWARD_PROGRAM,                 new FullItemVault("dicta");) {{
                    favorite = false;
                    fields = new org.openapis.openapi.models.shared.FieldInput[]{{
                        add(new FieldInput("repellat", FieldTypeEnum.MONTH_YEAR) {{
                            generate = false;
                            id = "cd66ae39-5efb-49ba-88f3-a66997074ba4";
                            label = "labore";
                            purpose = FieldPurposeEnum.USERNAME;
                            recipe = new GeneratorRecipe() {{
                                characterSets = new org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum[]{{
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                    add(GeneratorRecipeCharacterSetsEnum.DIGITS),
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                }};
                                excludeCharacters = "abc1";
                                length = 135474L;
                            }};
                            section = new FieldSection() {{
                                id = "14195989-0afa-4563-a251-6fe4c8b711e5";
                            }};
                            type = FieldTypeEnum.DATE;
                            value = "nihil";
                        }}),
                        add(new FieldInput("deleniti", FieldTypeEnum.MONTH_YEAR) {{
                            generate = false;
                            id = "2ed02892-1cdd-4c69-a601-fb576b0d5f0d";
                            label = "amet";
                            purpose = FieldPurposeEnum.UNKNOWN;
                            recipe = new GeneratorRecipe() {{
                                characterSets = new org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum[]{{
                                    add(GeneratorRecipeCharacterSetsEnum.DIGITS),
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                }};
                                excludeCharacters = "abc1";
                                length = 171629L;
                            }};
                            section = new FieldSection() {{
                                id = "58705320-2c73-4d5f-a9b9-0c28909b3fe4";
                            }};
                            type = FieldTypeEnum.TOTP;
                            value = "dolorum";
                        }}),
                    }};
                    files = new org.openapis.openapi.models.shared.FileInput[]{{
                        add(new FileInput() {{
                            content = "nobis";
                            id = "bf486333-23f9-4b77-b3a4-100674ebf692";
                            name = "Miss Paul Steuber";
                            section = new FileSection() {{
                                id = "77a89ebf-737a-4e42-83ce-5e6a95d8a0d4";
                            }};
                            size = 273542L;
                        }}),
                        add(new FileInput() {{
                            content = "vel";
                            id = "ce2af7a7-3cf3-4be4-93f8-70b326b5a734";
                            name = "Shelly Schoen";
                            section = new FileSection() {{
                                id = "1a8422bb-679d-4232-a715-bf0cbb1e31b8";
                            }};
                            size = 731694L;
                        }}),
                        add(new FileInput() {{
                            content = "cupiditate";
                            id = "0f3443a1-108e-40ad-8f4b-921879fce953";
                            name = "Karl Feeney";
                            section = new FileSection() {{
                                id = "7fbc7abd-74dd-439c-8f5d-2cff7c70a456";
                            }};
                            size = 136900L;
                        }}),
                    }};
                    id = "6d436813-f16d-49f5-bce6-c556146c3e25";
                    sections = new org.openapis.openapi.models.shared.FullItemSections[]{{
                        add(new FullItemSections() {{
                            id = "fb008c42-e141-4aac-b66c-8dd6b1442907";
                            label = "magnam";
                        }}),
                    }};
                    tags = new String[]{{
                        add("eius"),
                        add("esse"),
                    }};
                    title = "Ms.";
                    urls = new org.openapis.openapi.models.shared.FullItemUrls[]{{
                        add(new FullItemUrls("quidem") {{
                            href = "fuga";
                            label = "reprehenderit";
                            primary = false;
                        }}),
                        add(new FullItemUrls("eum") {{
                            href = "fugiat";
                            label = "ut";
                            primary = false;
                        }}),
                        add(new FullItemUrls("eos") {{
                            href = "suscipit";
                            label = "assumenda";
                            primary = false;
                        }}),
                    }};
                    version = 509342L;
                }};;
            }};            

            CreateVaultItemResponse res = sdk.items.createVaultItem(req, new CreateVaultItemSecurity("quisquam") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.fullItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVaultItem

Delete an Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVaultItemRequest;
import org.openapis.openapi.models.operations.DeleteVaultItemResponse;
import org.openapis.openapi.models.operations.DeleteVaultItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVaultItemRequest req = new DeleteVaultItemRequest("veritatis", "ipsa");            

            DeleteVaultItemResponse res = sdk.items.deleteVaultItem(req, new DeleteVaultItemSecurity("id") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVaultItemById

Get the details of an Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVaultItemByIdRequest;
import org.openapis.openapi.models.operations.GetVaultItemByIdResponse;
import org.openapis.openapi.models.operations.GetVaultItemByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVaultItemByIdRequest req = new GetVaultItemByIdRequest("quidem", "neque");            

            GetVaultItemByIdResponse res = sdk.items.getVaultItemById(req, new GetVaultItemByIdSecurity("quo") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.fullItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVaultItems

Get all items for inside a Vault

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVaultItemsRequest;
import org.openapis.openapi.models.operations.GetVaultItemsResponse;
import org.openapis.openapi.models.operations.GetVaultItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVaultItemsRequest req = new GetVaultItemsRequest("illum") {{
                filter = "title eq "Some Item Name"";
            }};            

            GetVaultItemsResponse res = sdk.items.getVaultItems(req, new GetVaultItemsSecurity("quo") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.items != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchVaultItem

Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.

When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchVaultItemRequest;
import org.openapis.openapi.models.operations.PatchVaultItemResponse;
import org.openapis.openapi.models.operations.PatchVaultItemSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchVaultItemRequest req = new PatchVaultItemRequest("fuga", "eius") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.ADD, "/fields/06gnn2b95example10q91512p5/label") {{
                        op = PatchOpEnum.REMOVE;
                        path = "/fields/06gnn2b95example10q91512p5/label";
                        value = new java.util.HashMap<String, Object>() {{
                            put("cupiditate", "consequatur");
                        }};
                    }}),
                }};
            }};            

            PatchVaultItemResponse res = sdk.items.patchVaultItem(req, new PatchVaultItemSecurity("debitis") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.fullItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVaultItem

Update an Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVaultItemRequest;
import org.openapis.openapi.models.operations.UpdateVaultItemResponse;
import org.openapis.openapi.models.operations.UpdateVaultItemSecurity;
import org.openapis.openapi.models.shared.FieldInput;
import org.openapis.openapi.models.shared.FieldPurposeEnum;
import org.openapis.openapi.models.shared.FieldSection;
import org.openapis.openapi.models.shared.FieldTypeEnum;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileSection;
import org.openapis.openapi.models.shared.FullItemCategoryEnum;
import org.openapis.openapi.models.shared.FullItemInput;
import org.openapis.openapi.models.shared.FullItemSections;
import org.openapis.openapi.models.shared.FullItemUrls;
import org.openapis.openapi.models.shared.FullItemVault;
import org.openapis.openapi.models.shared.GeneratorRecipe;
import org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateVaultItemRequest req = new UpdateVaultItemRequest("ipsam", "aspernatur") {{
                fullItemInput = new FullItemInput(FullItemCategoryEnum.DATABASE,                 new FullItemVault("quo");) {{
                    favorite = false;
                    fields = new org.openapis.openapi.models.shared.FieldInput[]{{
                        add(new FieldInput("blanditiis", FieldTypeEnum.TOTP) {{
                            generate = false;
                            id = "e0bc7178-e479-46f2-a70c-688282aa4825";
                            label = "nisi";
                            purpose = FieldPurposeEnum.UNKNOWN;
                            recipe = new GeneratorRecipe() {{
                                characterSets = new org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum[]{{
                                    add(GeneratorRecipeCharacterSetsEnum.LETTERS),
                                    add(GeneratorRecipeCharacterSetsEnum.LETTERS),
                                    add(GeneratorRecipeCharacterSetsEnum.LETTERS),
                                    add(GeneratorRecipeCharacterSetsEnum.SYMBOLS),
                                }};
                                excludeCharacters = "abc1";
                                length = 578922L;
                            }};
                            section = new FieldSection() {{
                                id = "817ee17c-be61-4e6b-bb95-bc0ab3c20c4f";
                            }};
                            type = FieldTypeEnum.EMAIL;
                            value = "esse";
                        }}),
                        add(new FieldInput("occaecati", FieldTypeEnum.CONCEALED) {{
                            generate = false;
                            id = "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04";
                            label = "sapiente";
                            purpose = FieldPurposeEnum.UNKNOWN;
                            recipe = new GeneratorRecipe() {{
                                characterSets = new org.openapis.openapi.models.shared.GeneratorRecipeCharacterSetsEnum[]{{
                                    add(GeneratorRecipeCharacterSetsEnum.DIGITS),
                                    add(GeneratorRecipeCharacterSetsEnum.DIGITS),
                                }};
                                excludeCharacters = "abc1";
                                length = 391774L;
                            }};
                            section = new FieldSection() {{
                                id = "082d68ea-19f1-4d17-8513-39d08086a184";
                            }};
                            type = FieldTypeEnum.STRING;
                            value = "dolor";
                        }}),
                    }};
                    files = new org.openapis.openapi.models.shared.FileInput[]{{
                        add(new FileInput() {{
                            content = "explicabo";
                            id = "6071f93f-5f06-442d-ac7a-f515cc413aa6";
                            name = "Molly O'Reilly";
                            section = new FileSection() {{
                                id = "d67864db-b675-4fd5-a60b-375ed4f6fbee";
                            }};
                            size = 296556L;
                        }}),
                        add(new FileInput() {{
                            content = "sunt";
                            id = "f33317fe-35b6-40eb-9ea4-26555ba3c287";
                            name = "Suzanne Torphy";
                            section = new FileSection() {{
                                id = "3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2";
                            }};
                            size = 378326L;
                        }}),
                        add(new FileInput() {{
                            content = "unde";
                            id = "16fe1f08-f429-44e3-a98f-447f603e8b44";
                            name = "Miss Alyssa Leffler";
                            section = new FileSection() {{
                                id = "55efd20e-457e-4185-8b6a-89fbe3a5aa8e";
                            }};
                            size = 272683L;
                        }}),
                        add(new FileInput() {{
                            content = "atque";
                            id = "24d0ab40-7508-48e5-9862-065e904f3b11";
                            name = "Francisco Powlowski";
                            section = new FileSection() {{
                                id = "bf603a79-f9df-4e0a-b7da-8a50ce187f86";
                            }};
                            size = 693957L;
                        }}),
                    }};
                    id = "c173d689-eee9-4526-b8d9-86e881ead4f0";
                    sections = new org.openapis.openapi.models.shared.FullItemSections[]{{
                        add(new FullItemSections() {{
                            id = "1012563f-94e2-49e9-b3e9-22a57a15be3e";
                            label = "doloremque";
                        }}),
                        add(new FullItemSections() {{
                            id = "60807e2b-6e3a-4b88-85f0-597a60ff2a54";
                            label = "dolorum";
                        }}),
                        add(new FullItemSections() {{
                            id = "31e94764-a3e8-465e-b956-f9251a5a9da6";
                            label = "aliquid";
                        }}),
                        add(new FullItemSections() {{
                            id = "0ff57bfa-ad4f-49ef-81b4-512c1032648d";
                            label = "impedit";
                        }}),
                    }};
                    tags = new String[]{{
                        add("sapiente"),
                    }};
                    title = "Ms.";
                    urls = new org.openapis.openapi.models.shared.FullItemUrls[]{{
                        add(new FullItemUrls("cupiditate") {{
                            href = "minima";
                            label = "beatae";
                            primary = false;
                        }}),
                    }};
                    version = 589695L;
                }};;
            }};            

            UpdateVaultItemResponse res = sdk.items.updateVaultItem(req, new UpdateVaultItemSecurity("earum") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.fullItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
