# collection

## Overview

Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
  - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
  - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
  - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.

All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).

At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.


### Available Operations

* [addScoreToCollection](#addscoretocollection) - Add a score to the collection
* [createCollection](#createcollection) - Create a new collection
* [deleteCollection](#deletecollection) - Delete the collection
* [deleteScoreFromCollection](#deletescorefromcollection) - Delete a score from the collection
* [editCollection](#editcollection) - Update a collection's metadata
* [getCollection](#getcollection) - Get collection details
* [listCollectionScores](#listcollectionscores) - List the scores contained in a collection
* [listCollections](#listcollections) - List the collections
* [untrashCollection](#untrashcollection) - Untrash a collection

## addScoreToCollection

This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
You must have the capability `canAddScores` on the provided `collection` to perform the action.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddScoreToCollectionRequest;
import org.openapis.openapi.models.operations.AddScoreToCollectionResponse;
import org.openapis.openapi.models.operations.AddScoreToCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddScoreToCollectionRequest req = new AddScoreToCollectionRequest("labore", "modi") {{
                sharingKey = "qui";
            }};            

            AddScoreToCollectionResponse res = sdk.collection.addScoreToCollection(req, new AddScoreToCollectionSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollection

This method will create a new collection and add it to your `root` collection.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionResponse;
import org.openapis.openapi.models.operations.CreateCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionCreation;
import org.openapis.openapi.models.shared.CollectionPrivacyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollectionCreation req = new CollectionCreation(CollectionPrivacyEnum.PRIVATE_, "cupiditate");            

            CreateCollectionResponse res = sdk.collection.createCollection(req, new CreateCollectionSecurity("quos") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollection

This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollectionRequest;
import org.openapis.openapi.models.operations.DeleteCollectionResponse;
import org.openapis.openapi.models.operations.DeleteCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCollectionRequest req = new DeleteCollectionRequest("perferendis");            

            DeleteCollectionResponse res = sdk.collection.deleteCollection(req, new DeleteCollectionSecurity("magni") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteScoreFromCollection

This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScoreFromCollectionRequest;
import org.openapis.openapi.models.operations.DeleteScoreFromCollectionResponse;
import org.openapis.openapi.models.operations.DeleteScoreFromCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScoreFromCollectionRequest req = new DeleteScoreFromCollectionRequest("assumenda", "ipsam") {{
                sharingKey = "alias";
            }};            

            DeleteScoreFromCollectionResponse res = sdk.collection.deleteScoreFromCollection(req, new DeleteScoreFromCollectionSecurity("fugit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## editCollection

Update a collection's metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditCollectionRequest;
import org.openapis.openapi.models.operations.EditCollectionResponse;
import org.openapis.openapi.models.operations.EditCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionModification;
import org.openapis.openapi.models.shared.CollectionPrivacyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EditCollectionRequest req = new EditCollectionRequest("dolorum") {{
                collectionModification = new CollectionModification() {{
                    privacy = CollectionPrivacyEnum.PRIVATE_;
                    title = "Ms.";
                }};;
            }};            

            EditCollectionResponse res = sdk.collection.editCollection(req, new EditCollectionSecurity("tempora") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCollection

Get collection details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollectionRequest;
import org.openapis.openapi.models.operations.GetCollectionResponse;
import org.openapis.openapi.models.operations.GetCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCollectionRequest req = new GetCollectionRequest("facilis") {{
                sharingKey = "tempore";
            }};            

            GetCollectionResponse res = sdk.collection.getCollection(req, new GetCollectionSecurity("labore") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollectionScores

Use this method to list the scores contained in a collection.
If no sort option is provided, the scores are sorted by `modificationDate` `desc`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollectionScoresDirectionEnum;
import org.openapis.openapi.models.operations.ListCollectionScoresRequest;
import org.openapis.openapi.models.operations.ListCollectionScoresResponse;
import org.openapis.openapi.models.operations.ListCollectionScoresSecurity;
import org.openapis.openapi.models.operations.ListCollectionScoresSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCollectionScoresRequest req = new ListCollectionScoresRequest("delectus") {{
                direction = ListCollectionScoresDirectionEnum.ASC;
                limit = 248753L;
                next = "eligendi";
                previous = "sint";
                sharingKey = "aliquid";
                sort = ListCollectionScoresSortEnum.MODIFICATION_DATE;
            }};            

            ListCollectionScoresResponse res = sdk.collection.listCollectionScores(req, new ListCollectionScoresSecurity("necessitatibus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollections

Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
If no sort option is provided, the collections are sorted by `creationDate` `desc`.

Note that this method will not include the `parent` collection in the listing.
For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollectionsDirectionEnum;
import org.openapis.openapi.models.operations.ListCollectionsRequest;
import org.openapis.openapi.models.operations.ListCollectionsResponse;
import org.openapis.openapi.models.operations.ListCollectionsSecurity;
import org.openapis.openapi.models.operations.ListCollectionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCollectionsRequest req = new ListCollectionsRequest() {{
                direction = ListCollectionsDirectionEnum.DESC;
                limit = 638921L;
                next = "dolor";
                parent = "debitis";
                previous = "a";
                sort = ListCollectionsSortEnum.TITLE;
            }};            

            ListCollectionsResponse res = sdk.collection.listCollections(req, new ListCollectionsSecurity("in") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untrashCollection

This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntrashCollectionRequest;
import org.openapis.openapi.models.operations.UntrashCollectionResponse;
import org.openapis.openapi.models.operations.UntrashCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UntrashCollectionRequest req = new UntrashCollectionRequest("in");            

            UntrashCollectionResponse res = sdk.collection.untrashCollection(req, new UntrashCollectionSecurity("illum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
