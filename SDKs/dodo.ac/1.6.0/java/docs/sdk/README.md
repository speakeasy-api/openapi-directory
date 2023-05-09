# SDK

## Overview

The Nookipedia API provides endpoints for retrieving *Animal Crossing* data pulled from the [Nookipedia wiki](https://nookipedia.com/wiki/Main_Page). A couple of the key benefits of using the Nookipedia API is access to data spanning the entire *Animal Crossing* series, as well as information that is constantly updated and expanding as editors work on the wiki.<br><br>Access to the Nookipedia API requires obtaining a key. This is so we can manage our scale and provide better support for our users. To request access to the API, please fill out [this form](https://forms.gle/wLwtXLerKhfDrRLY8).

### Available Operations

* [getNhArt](#getnhart) - All New Horizons artwork
* [getNhArtArtwork](#getnhartartwork) - Single New Horizons artwork
* [getNhBugs](#getnhbugs) - All New Horizons bugs
* [getNhBugsBug](#getnhbugsbug) - Single New Horizons bug
* [getNhClothing](#getnhclothing) - All New Horizons clothing
* [getNhClothingClothing](#getnhclothingclothing) - Single New Horizons clothing
* [getNhEvents](#getnhevents) - All New Horizons events
* [getNhFish](#getnhfish) - All New Horizons fish
* [getNhFishFish](#getnhfishfish) - Single New Horizons fish
* [getNhFossilsAll](#getnhfossilsall) - All New Horizons fossil groups or individual fossil
* [getNhFossilsAllFossil](#getnhfossilsallfossil) - Single New Horizons fossil group with individual fossils
* [getNhFossilsGroups](#getnhfossilsgroups) - All New Horizons fossil groups
* [getNhFossilsGroupsFossilGroup](#getnhfossilsgroupsfossilgroup) - Single New Horizons fossil group
* [getNhFossilsIndividuals](#getnhfossilsindividuals) - All New Horizons fossils
* [getNhFossilsIndividualsFossil](#getnhfossilsindividualsfossil) - Single New Horizons fossil
* [getNhFurniture](#getnhfurniture) - All New Horizons furniture
* [getNhFurnitureFurniture](#getnhfurniturefurniture) - Single New Horizons furniture
* [getNhInterior](#getnhinterior) - All New Horizons interior items
* [getNhInteriorItem](#getnhinterioritem) - Single New Horizons interior item
* [getNhItems](#getnhitems) - Miscellaneous New Horizons items
* [getNhItemsItem](#getnhitemsitem) - Single New Horizons miscellaneous item
* [getNhPhotos](#getnhphotos) - All New Horizons photos and posters
* [getNhPhotosItem](#getnhphotositem) - Single New Horizons photo or poster
* [getNhRecipes](#getnhrecipes) - All New Horizons recipes
* [getNhRecipesItem](#getnhrecipesitem) - Single New Horizons recipe
* [getNhSea](#getnhsea) - All New Horizons sea creatures
* [getNhSeaSeaCreature](#getnhseaseacreature) - Single New Horizons sea creature
* [getNhTools](#getnhtools) - All New Horizons tools
* [getNhToolsTool](#getnhtoolstool) - Single New Horizons tool
* [getVillagers](#getvillagers) - Villagers

## getNhArt

Get a list of all artwork and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhArtRequest;
import org.openapis.openapi.models.operations.GetNhArtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhArtRequest req = new GetNhArtRequest("sapiente", "c2ddf7cc-78ca-41ba-928f-c816742cb739") {{
                excludedetails = "aspernatur";
                hasfake = "perferendis";
                thumbsize = 324141L;
            }};            

            GetNhArtResponse res = sdk.sdk.getNhArt(req);

            if (res.nhArtworks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhArtArtwork

Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhArtArtworkRequest;
import org.openapis.openapi.models.operations.GetNhArtArtworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhArtArtworkRequest req = new GetNhArtArtworkRequest("natus", "29396fea-7596-4eb1-8faa-a2352c595590", "iure") {{
                thumbsize = 634274L;
            }};            

            GetNhArtArtworkResponse res = sdk.sdk.getNhArtArtwork(req);

            if (res.nhArtwork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhBugs

Get a list of all bugs and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhBugsRequest;
import org.openapis.openapi.models.operations.GetNhBugsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhBugsRequest req = new GetNhBugsRequest("doloribus", "f1a3a2fa-9467-4739-a51a-a52c3f5ad019") {{
                excludedetails = "temporibus";
                month = "laborum";
                thumbsize = 96098L;
            }};            

            GetNhBugsResponse res = sdk.sdk.getNhBugs(req);

            if (res.nhBugs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhBugsBug

Retrieve information about a specific bug in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhBugsBugRequest;
import org.openapis.openapi.models.operations.GetNhBugsBugResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhBugsBugRequest req = new GetNhBugsBugRequest("reiciendis", "fe78f097-b007-44f1-9471-b5e6e13b99d4", "praesentium") {{
                thumbsize = 523248L;
            }};            

            GetNhBugsBugResponse res = sdk.sdk.getNhBugsBug(req);

            if (res.nhBug != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhClothing

Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhClothingCategoryEnum;
import org.openapis.openapi.models.operations.GetNhClothingColorEnum;
import org.openapis.openapi.models.operations.GetNhClothingLabelthemeEnum;
import org.openapis.openapi.models.operations.GetNhClothingRequest;
import org.openapis.openapi.models.operations.GetNhClothingResponse;
import org.openapis.openapi.models.operations.GetNhClothingStyleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhClothingRequest req = new GetNhClothingRequest("voluptates", "1e91e450-ad2a-4bd4-8269-802d502a94bb") {{
                category = GetNhClothingCategoryEnum.DRESS_UP;
                color = new org.openapis.openapi.models.operations.GetNhClothingColorEnum[]{{
                    add(GetNhClothingColorEnum.GRAY),
                    add(GetNhClothingColorEnum.BLUE),
                    add(GetNhClothingColorEnum.PURPLE),
                    add(GetNhClothingColorEnum.ORANGE),
                }};
                excludedetails = "aliquid";
                labeltheme = GetNhClothingLabelthemeEnum.PARTY;
                style = new org.openapis.openapi.models.operations.GetNhClothingStyleEnum[]{{
                    add(GetNhClothingStyleEnum.ELEGANT),
                    add(GetNhClothingStyleEnum.ELEGANT),
                    add(GetNhClothingStyleEnum.COOL),
                    add(GetNhClothingStyleEnum.SIMPLE),
                }};
            }};            

            GetNhClothingResponse res = sdk.sdk.getNhClothing(req);

            if (res.nhClothings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhClothingClothing

Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhClothingClothingRequest;
import org.openapis.openapi.models.operations.GetNhClothingClothingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhClothingClothingRequest req = new GetNhClothingClothingRequest("a", "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669", "omnis") {{
                thumbsize = 474867L;
            }};            

            GetNhClothingClothingResponse res = sdk.sdk.getNhClothingClothing(req);

            if (res.nhClothing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhEvents

Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhEventsRequest;
import org.openapis.openapi.models.operations.GetNhEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhEventsRequest req = new GetNhEventsRequest("perferendis", "74ba4469-b6e2-4141-9598-90afa563e251") {{
                date = "iure";
                day = 984043L;
                month = "debitis";
                year = "eius";
            }};            

            GetNhEventsResponse res = sdk.sdk.getNhEvents(req);

            if (res.nhEvents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFish

Get a list of all fish and their details in *New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFishRequest;
import org.openapis.openapi.models.operations.GetNhFishResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFishRequest req = new GetNhFishRequest("maxime", "8b711e5b-7fd2-4ed0-a892-1cddc692601f") {{
                excludedetails = "quidem";
                month = "ipsam";
                thumbsize = 453543L;
            }};            

            GetNhFishResponse res = sdk.sdk.getNhFish(req);

            if (res.nhFish != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFishFish

Retrieve information about a specific fish in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFishFishRequest;
import org.openapis.openapi.models.operations.GetNhFishFishResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFishFishRequest req = new GetNhFishFishRequest("autem", "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe", "omnis") {{
                thumbsize = 704415L;
            }};            

            GetNhFishFishResponse res = sdk.sdk.getNhFishFish(req);

            if (res.nhFish != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsAll

Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsAllRequest;
import org.openapis.openapi.models.operations.GetNhFossilsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsAllRequest req = new GetNhFossilsAllRequest("perspiciatis", "0c28909b-3fe4-49a8-99cb-f48633323f9b") {{
                thumbsize = 452109L;
            }};            

            GetNhFossilsAllResponse res = sdk.sdk.getNhFossilsAll(req);

            if (res.nhFossilGroupWithIndividualFossilsNoMatcheds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsAllFossil

Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsAllFossilRequest;
import org.openapis.openapi.models.operations.GetNhFossilsAllFossilResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsAllFossilRequest req = new GetNhFossilsAllFossilRequest("dignissimos", "f3a41006-74eb-4f69-a80d-1ba77a89ebf7", "ipsum") {{
                thumbsize = 456015L;
            }};            

            GetNhFossilsAllFossilResponse res = sdk.sdk.getNhFossilsAllFossil(req);

            if (res.nhFossilGroupWithIndividualFossils != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsGroups

Get a list of all the fossil groups in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsGroupsRequest;
import org.openapis.openapi.models.operations.GetNhFossilsGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsGroupsRequest req = new GetNhFossilsGroupsRequest("id", "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c") {{
                thumbsize = 947371L;
            }};            

            GetNhFossilsGroupsResponse res = sdk.sdk.getNhFossilsGroups(req);

            if (res.nhFossilGroups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsGroupsFossilGroup

Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsGroupsFossilGroupRequest;
import org.openapis.openapi.models.operations.GetNhFossilsGroupsFossilGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsGroupsFossilGroupRequest req = new GetNhFossilsGroupsFossilGroupRequest("amet", "be453f87-0b32-46b5-a734-29cdb1a8422b", "facilis") {{
                thumbsize = 396060L;
            }};            

            GetNhFossilsGroupsFossilGroupResponse res = sdk.sdk.getNhFossilsGroupsFossilGroup(req);

            if (res.nhFossilGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsIndividuals

Get a list of all the individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsIndividualsRequest;
import org.openapis.openapi.models.operations.GetNhFossilsIndividualsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsIndividualsRequest req = new GetNhFossilsIndividualsRequest("quam", "9d232271-5bf0-4cbb-9e31-b8b90f3443a1") {{
                thumbsize = 63038L;
            }};            

            GetNhFossilsIndividualsResponse res = sdk.sdk.getNhFossilsIndividuals(req);

            if (res.nhIndividualFossils != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFossilsIndividualsFossil

Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFossilsIndividualsFossilRequest;
import org.openapis.openapi.models.operations.GetNhFossilsIndividualsFossilResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFossilsIndividualsFossilRequest req = new GetNhFossilsIndividualsFossilRequest("aut", "8e0adcf4-b921-4879-bce9-53f73ef7fbc7", "similique") {{
                thumbsize = 708548L;
            }};            

            GetNhFossilsIndividualsFossilResponse res = sdk.sdk.getNhFossilsIndividualsFossil(req);

            if (res.nhIndividualFossil != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFurniture

Get a list of all furniture and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFurnitureCategoryEnum;
import org.openapis.openapi.models.operations.GetNhFurnitureColorEnum;
import org.openapis.openapi.models.operations.GetNhFurnitureRequest;
import org.openapis.openapi.models.operations.GetNhFurnitureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFurnitureRequest req = new GetNhFurnitureRequest("vero", "74dd39c0-f5d2-4cff-bc70-a45626d43681") {{
                category = GetNhFurnitureCategoryEnum.HOUSEWARES;
                color = new org.openapis.openapi.models.operations.GetNhFurnitureColorEnum[]{{
                    add(GetNhFurnitureColorEnum.BEIGE),
                    add(GetNhFurnitureColorEnum.COLORFUL),
                    add(GetNhFurnitureColorEnum.WHITE),
                    add(GetNhFurnitureColorEnum.GREEN),
                }};
                excludedetails = "voluptatibus";
            }};            

            GetNhFurnitureResponse res = sdk.sdk.getNhFurniture(req);

            if (res.nhFurnitures != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhFurnitureFurniture

Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhFurnitureFurnitureRequest;
import org.openapis.openapi.models.operations.GetNhFurnitureFurnitureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhFurnitureFurnitureRequest req = new GetNhFurnitureFurnitureRequest("nostrum", "fce6c556-146c-43e2-90fb-008c42e141aa", "placeat") {{
                thumbsize = 245367L;
            }};            

            GetNhFurnitureFurnitureResponse res = sdk.sdk.getNhFurnitureFurniture(req);

            if (res.nhFurniture != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhInterior

Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhInteriorColorEnum;
import org.openapis.openapi.models.operations.GetNhInteriorRequest;
import org.openapis.openapi.models.operations.GetNhInteriorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhInteriorRequest req = new GetNhInteriorRequest("eum", "6c8dd6b1-4429-4074-b477-8a7bd466d28c") {{
                color = new org.openapis.openapi.models.operations.GetNhInteriorColorEnum[]{{
                    add(GetNhInteriorColorEnum.AQUA),
                }};
                excludedetails = "id";
            }};            

            GetNhInteriorResponse res = sdk.sdk.getNhInterior(req);

            if (res.nhInteriors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhInteriorItem

Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhInteriorItemColorEnum;
import org.openapis.openapi.models.operations.GetNhInteriorItemRequest;
import org.openapis.openapi.models.operations.GetNhInteriorItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhInteriorItemRequest req = new GetNhInteriorItemRequest("quidem", "3cdca425-1904-4e52-bc7e-0bc7178e4796", "sapiente") {{
                color = new org.openapis.openapi.models.operations.GetNhInteriorItemColorEnum[]{{
                    add(GetNhInteriorItemColorEnum.PINK),
                }};
                thumbsize = 475289L;
            }};            

            GetNhInteriorItemResponse res = sdk.sdk.getNhInteriorItem(req);

            if (res.nhInterior != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhItems

Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhItemsRequest;
import org.openapis.openapi.models.operations.GetNhItemsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhItemsRequest req = new GetNhItemsRequest("accusantium", "c688282a-a482-4562-b222-e9817ee17cbe") {{
                excludedetails = "aliquid";
            }};            

            GetNhItemsResponse res = sdk.sdk.getNhItems(req);

            if (res.nhItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhItemsItem

Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhItemsItemRequest;
import org.openapis.openapi.models.operations.GetNhItemsItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhItemsItemRequest req = new GetNhItemsItemRequest("quasi", "e6b7b95b-c0ab-43c2-8c4f-3789fd871f99", "pariatur") {{
                thumbsize = 820767L;
            }};            

            GetNhItemsItemResponse res = sdk.sdk.getNhItemsItem(req);

            if (res.nhItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhPhotos

Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhPhotosRequest;
import org.openapis.openapi.models.operations.GetNhPhotosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhPhotosRequest req = new GetNhPhotosRequest("quia", "efd121aa-6f1e-4674-bdb0-4f15756082d6") {{
                excludedetails = "deleniti";
            }};            

            GetNhPhotosResponse res = sdk.sdk.getNhPhotos(req);

            if (res.nhPhotos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhPhotosItem

Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhPhotosItemRequest;
import org.openapis.openapi.models.operations.GetNhPhotosItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhPhotosItemRequest req = new GetNhPhotosItemRequest("itaque", "a19f1d17-0513-439d-8808-6a1840394c26", "aut") {{
                thumbsize = 491025L;
            }};            

            GetNhPhotosItemResponse res = sdk.sdk.getNhPhotosItem(req);

            if (res.nhPhoto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhRecipes

Get a list of all recipes and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhRecipesRequest;
import org.openapis.openapi.models.operations.GetNhRecipesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhRecipesRequest req = new GetNhRecipesRequest("dicta", "f93f5f06-42da-4c7a-b515-cc413aa63aae") {{
                excludedetails = "totam";
                material = "fugiat";
                thumbsize = 424089L;
            }};            

            GetNhRecipesResponse res = sdk.sdk.getNhRecipes(req);

            if (res.nhRecipes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhRecipesItem

Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhRecipesItemRequest;
import org.openapis.openapi.models.operations.GetNhRecipesItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhRecipesItemRequest req = new GetNhRecipesItemRequest("ducimus", "864dbb67-5fd5-4e60-b375-ed4f6fbee41f", "adipisci") {{
                thumbsize = 249420L;
            }};            

            GetNhRecipesItemResponse res = sdk.sdk.getNhRecipesItem(req);

            if (res.nhRecipe != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhSea

Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhSeaRequest;
import org.openapis.openapi.models.operations.GetNhSeaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhSeaRequest req = new GetNhSeaRequest("amet", "17fe35b6-0eb1-4ea4-a655-5ba3c28744ed") {{
                excludedetails = "ullam";
                month = "adipisci";
                thumbsize = 738391L;
            }};            

            GetNhSeaResponse res = sdk.sdk.getNhSea(req);

            if (res.nhSeaCreatures != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhSeaSeaCreature

Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhSeaSeaCreatureRequest;
import org.openapis.openapi.models.operations.GetNhSeaSeaCreatureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhSeaSeaCreatureRequest req = new GetNhSeaSeaCreatureRequest("blanditiis", "8f3a8d8f-5c0b-42f2-bb7b-194a276b2691", "suscipit") {{
                thumbsize = 960257L;
            }};            

            GetNhSeaSeaCreatureResponse res = sdk.sdk.getNhSeaSeaCreature(req);

            if (res.nhSeaCreature != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhTools

Get a list of all tools and their details in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhToolsRequest;
import org.openapis.openapi.models.operations.GetNhToolsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhToolsRequest req = new GetNhToolsRequest("debitis", "1f08f429-4e36-498f-847f-603e8b445e80") {{
                excludedetails = "nobis";
            }};            

            GetNhToolsResponse res = sdk.sdk.getNhTools(req);

            if (res.nhTools != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNhToolsTool

Retrieve information about a specific tool in *Animal Crossing: New Horizons*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhToolsToolRequest;
import org.openapis.openapi.models.operations.GetNhToolsToolResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhToolsToolRequest req = new GetNhToolsToolRequest("error", "55efd20e-457e-4185-8b6a-89fbe3a5aa8e", "tempora") {{
                thumbsize = 543678L;
            }};            

            GetNhToolsToolResponse res = sdk.sdk.getNhToolsTool(req);

            if (res.nhTool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVillagers

This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVillagersGameEnum;
import org.openapis.openapi.models.operations.GetVillagersPersonalityEnum;
import org.openapis.openapi.models.operations.GetVillagersRequest;
import org.openapis.openapi.models.operations.GetVillagersResponse;
import org.openapis.openapi.models.operations.GetVillagersSpeciesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVillagersRequest req = new GetVillagersRequest("fugit", "4d0ab407-5088-4e51-8620-65e904f3b119") {{
                birthday = "labore";
                birthmonth = "quidem";
                excludedetails = "atque";
                game = new org.openapis.openapi.models.operations.GetVillagersGameEnum[]{{
                    add(GetVillagersGameEnum.NH),
                    add(GetVillagersGameEnum.PC),
                    add(GetVillagersGameEnum.CF),
                }};
                name = "Grace O'Connell";
                nhdetails = "reiciendis";
                personality = GetVillagersPersonalityEnum.PEPPY;
                species = GetVillagersSpeciesEnum.RABBIT;
                thumbsize = 962771L;
            }};            

            GetVillagersResponse res = sdk.sdk.getVillagers(req);

            if (res.villagers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
