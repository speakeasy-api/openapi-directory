# collections

### Available Operations

* [collectionArticles](#collectionarticles) - Public Collection Articles
* [collectionDetails](#collectiondetails) - Collection details
* [collectionVersionDetails](#collectionversiondetails) - Collection Version details
* [collectionVersions](#collectionversions) - Collection Versions list
* [collectionsList](#collectionslist) - Public Collections
* [collectionsSearch](#collectionssearch) - Public Collections Search
* [privateCollectionArticleDelete](#privatecollectionarticledelete) - Delete collection article
* [privateCollectionArticlesAdd](#privatecollectionarticlesadd) - Add collection articles
* [privateCollectionArticlesList](#privatecollectionarticleslist) - List collection articles
* [privateCollectionArticlesReplace](#privatecollectionarticlesreplace) - Replace collection articles
* [privateCollectionAuthorDelete](#privatecollectionauthordelete) - Delete collection author
* [privateCollectionAuthorsAdd](#privatecollectionauthorsadd) - Add collection authors
* [privateCollectionAuthorsList](#privatecollectionauthorslist) - List collection authors
* [privateCollectionAuthorsReplace](#privatecollectionauthorsreplace) - Replace collection authors
* [privateCollectionCategoriesAdd](#privatecollectioncategoriesadd) - Add collection categories
* [privateCollectionCategoriesList](#privatecollectioncategorieslist) - List collection categories
* [privateCollectionCategoriesReplace](#privatecollectioncategoriesreplace) - Replace collection categories
* [privateCollectionCategoryDelete](#privatecollectioncategorydelete) - Delete collection category
* [privateCollectionCreate](#privatecollectioncreate) - Create collection
* [privateCollectionDelete](#privatecollectiondelete) - Delete collection
* [privateCollectionDetails](#privatecollectiondetails) - Collection details
* [privateCollectionPrivateLinkCreate](#privatecollectionprivatelinkcreate) - Create collection private link
* [privateCollectionPrivateLinkDelete](#privatecollectionprivatelinkdelete) - Disable private link
* [privateCollectionPrivateLinkUpdate](#privatecollectionprivatelinkupdate) - Update collection private link
* [privateCollectionPrivateLinksList](#privatecollectionprivatelinkslist) - List collection private links
* [privateCollectionPublish](#privatecollectionpublish) - Private Collection Publish
* [privateCollectionReserveDoi](#privatecollectionreservedoi) - Private Collection Reserve DOI
* [privateCollectionReserveHandle](#privatecollectionreservehandle) - Private Collection Reserve Handle
* [privateCollectionResource](#privatecollectionresource) - Private Collection Resource
* [privateCollectionUpdate](#privatecollectionupdate) - Update collection
* [privateCollectionsList](#privatecollectionslist) - Private Collections List
* [privateCollectionsSearch](#privatecollectionssearch) - Private Collections Search

## collectionArticles

Returns a list of public collection articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionArticlesRequest;
import org.openapis.openapi.models.operations.CollectionArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionArticlesRequest req = new CollectionArticlesRequest(554242L) {{
                limit = 398221L;
                offset = 212390L;
                page = 209843L;
                pageSize = 222443L;
            }};            

            CollectionArticlesResponse res = sdk.collections.collectionArticles(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionDetails

View a collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionDetailsRequest;
import org.openapis.openapi.models.operations.CollectionDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionDetailsRequest req = new CollectionDetailsRequest(186193L);            

            CollectionDetailsResponse res = sdk.collections.collectionDetails(req);

            if (res.collectionComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionVersionDetails

View details for a certain version of a collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionVersionDetailsRequest;
import org.openapis.openapi.models.operations.CollectionVersionDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionVersionDetailsRequest req = new CollectionVersionDetailsRequest(218749L, 944373L);            

            CollectionVersionDetailsResponse res = sdk.collections.collectionVersionDetails(req);

            if (res.collectionComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionVersions

Returns a list of public collection Versions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionVersionsRequest;
import org.openapis.openapi.models.operations.CollectionVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionVersionsRequest req = new CollectionVersionsRequest(569574L);            

            CollectionVersionsResponse res = sdk.collections.collectionVersions(req);

            if (res.collectionVersions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsList

Returns a list of public collections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsListOrderDirectionEnum;
import org.openapis.openapi.models.operations.CollectionsListOrderEnum;
import org.openapis.openapi.models.operations.CollectionsListRequest;
import org.openapis.openapi.models.operations.CollectionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsListRequest req = new CollectionsListRequest() {{
                xCursor = "b77f3a41-0067-44eb-b692-80d1ba77a89e";
                doi = "distinctio";
                group = 990339L;
                handle = "nihil";
                institution = 216897L;
                limit = 456015L;
                modifiedSince = "id";
                offset = 906418L;
                order = CollectionsListOrderEnum.MODIFIED_DATE;
                orderDirection = CollectionsListOrderDirectionEnum.ASC;
                page = 20651L;
                pageSize = 229219L;
                publishedSince = "optio";
                resourceDoi = "accusamus";
            }};            

            CollectionsListResponse res = sdk.collections.collectionsList(req);

            if (res.collections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsSearch

Returns a list of public collections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsSearchRequest;
import org.openapis.openapi.models.operations.CollectionsSearchResponse;
import org.openapis.openapi.models.shared.CollectionSearch;
import org.openapis.openapi.models.shared.CollectionSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.CollectionSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsSearchRequest req = new CollectionsSearchRequest() {{
                collectionSearch = new CollectionSearch() {{
                    doi = "10.6084/m9.figshare.1407024";
                    group = 2000013;
                    handle = "10084/figshare.1407024";
                    institution = 2000013;
                    limit = 10L;
                    modifiedSince = "2017-12-22";
                    offset = 320017L;
                    order = CollectionSearchOrderEnum.PUBLISHED_DATE;
                    orderDirection = CollectionSearchOrderDirectionEnum.DESC;
                    page = 1L;
                    pageSize = 10L;
                    publishedSince = "2017-12-22";
                    resourceDoi = "10.6084/m9.figshare.1407024";
                    searchFor = "figshare";
                }};;
                xCursor = "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f";
            }};            

            CollectionsSearchResponse res = sdk.collections.collectionsSearch(req);

            if (res.collections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionArticleDelete

De-associate article from collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionArticleDeleteRequest;
import org.openapis.openapi.models.operations.PrivateCollectionArticleDeleteResponse;
import org.openapis.openapi.models.operations.PrivateCollectionArticleDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionArticleDeleteRequest req = new PrivateCollectionArticleDeleteRequest(518201L, 471752L);            

            PrivateCollectionArticleDeleteResponse res = sdk.collections.privateCollectionArticleDelete(req, new PrivateCollectionArticleDeleteSecurity("sit") {{
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

## privateCollectionArticlesAdd

Associate new articles with the collection. This will add new articles to the list of already associated articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesAddRequest;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesAddResponse;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesAddSecurity;
import org.openapis.openapi.models.shared.ArticlesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionArticlesAddRequest req = new PrivateCollectionArticlesAddRequest(                new ArticlesCreator(                new Long[]{{
                                                add(207470L),
                                                add(153694L),
                                                add(424685L),
                                            }});, 730442L);            

            PrivateCollectionArticlesAddResponse res = sdk.collections.privateCollectionArticlesAdd(req, new PrivateCollectionArticlesAddSecurity("voluptas") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionArticlesList

List collection articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesListRequest;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesListResponse;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionArticlesListRequest req = new PrivateCollectionArticlesListRequest(646265L) {{
                limit = 463575L;
                offset = 214880L;
                page = 277628L;
                pageSize = 186458L;
            }};            

            PrivateCollectionArticlesListResponse res = sdk.collections.privateCollectionArticlesList(req, new PrivateCollectionArticlesListSecurity("cupiditate") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionArticlesReplace

Associate new articles with the collection. This will remove all already associated articles and add these new ones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesReplaceRequest;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesReplaceResponse;
import org.openapis.openapi.models.operations.PrivateCollectionArticlesReplaceSecurity;
import org.openapis.openapi.models.shared.ArticlesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionArticlesReplaceRequest req = new PrivateCollectionArticlesReplaceRequest(                new ArticlesCreator(                new Long[]{{
                                                add(863856L),
                                                add(747080L),
                                                add(117531L),
                                                add(674848L),
                                            }});, 517379L);            

            PrivateCollectionArticlesReplaceResponse res = sdk.collections.privateCollectionArticlesReplace(req, new PrivateCollectionArticlesReplaceSecurity("incidunt") {{
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

## privateCollectionAuthorDelete

Delete collection author

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorDeleteRequest;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorDeleteResponse;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionAuthorDeleteRequest req = new PrivateCollectionAuthorDeleteRequest(132068L, 174909L);            

            PrivateCollectionAuthorDeleteResponse res = sdk.collections.privateCollectionAuthorDelete(req, new PrivateCollectionAuthorDeleteSecurity("distinctio") {{
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

## privateCollectionAuthorsAdd

Associate new authors with the collection. This will add new authors to the list of already associated authors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsAddRequest;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsAddResponse;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsAddSecurity;
import org.openapis.openapi.models.shared.AuthorsCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionAuthorsAddRequest req = new PrivateCollectionAuthorsAddRequest(                new AuthorsCreator(                new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("quam", "molestias");
                                                    put("temporibus", "qui");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("fugit", "magni");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("sunt", "ullam");
                                                    put("nam", "hic");
                                                }}),
                                            }});, 30452L);            

            PrivateCollectionAuthorsAddResponse res = sdk.collections.privateCollectionAuthorsAdd(req, new PrivateCollectionAuthorsAddSecurity("cumque") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionAuthorsList

List collection authors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsListRequest;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsListResponse;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionAuthorsListRequest req = new PrivateCollectionAuthorsListRequest(746994L);            

            PrivateCollectionAuthorsListResponse res = sdk.collections.privateCollectionAuthorsList(req, new PrivateCollectionAuthorsListSecurity("nobis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionAuthorsReplace

Associate new authors with the collection. This will remove all already associated authors and add these new ones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsReplaceRequest;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsReplaceResponse;
import org.openapis.openapi.models.operations.PrivateCollectionAuthorsReplaceSecurity;
import org.openapis.openapi.models.shared.AuthorsCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionAuthorsReplaceRequest req = new PrivateCollectionAuthorsReplaceRequest(                new AuthorsCreator(                new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("ipsum", "veritatis");
                                                    put("nobis", "quos");
                                                    put("tempore", "cupiditate");
                                                    put("aperiam", "delectus");
                                                }}),
                                            }});, 209157L);            

            PrivateCollectionAuthorsReplaceResponse res = sdk.collections.privateCollectionAuthorsReplace(req, new PrivateCollectionAuthorsReplaceSecurity("dolore") {{
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

## privateCollectionCategoriesAdd

Associate new categories with the collection. This will add new categories to the list of already associated categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesAddRequest;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesAddResponse;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesAddSecurity;
import org.openapis.openapi.models.shared.CategoriesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionCategoriesAddRequest req = new PrivateCollectionCategoriesAddRequest(                new CategoriesCreator(                new Long[]{{
                                                add(240829L),
                                                add(677263L),
                                            }});, 100294L);            

            PrivateCollectionCategoriesAddResponse res = sdk.collections.privateCollectionCategoriesAdd(req, new PrivateCollectionCategoriesAddSecurity("quae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionCategoriesList

List collection categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesListRequest;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesListResponse;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionCategoriesListRequest req = new PrivateCollectionCategoriesListRequest(16429L);            

            PrivateCollectionCategoriesListResponse res = sdk.collections.privateCollectionCategoriesList(req, new PrivateCollectionCategoriesListSecurity("quas") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.categories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionCategoriesReplace

Associate new categories with the collection. This will remove all already associated categories and add these new ones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesReplaceRequest;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesReplaceResponse;
import org.openapis.openapi.models.operations.PrivateCollectionCategoriesReplaceSecurity;
import org.openapis.openapi.models.shared.CategoriesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionCategoriesReplaceRequest req = new PrivateCollectionCategoriesReplaceRequest(                new CategoriesCreator(                new Long[]{{
                                                add(9240L),
                                                add(669917L),
                                                add(833038L),
                                                add(785153L),
                                            }});, 984330L);            

            PrivateCollectionCategoriesReplaceResponse res = sdk.collections.privateCollectionCategoriesReplace(req, new PrivateCollectionCategoriesReplaceSecurity("ut") {{
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

## privateCollectionCategoryDelete

De-associate category from collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionCategoryDeleteRequest;
import org.openapis.openapi.models.operations.PrivateCollectionCategoryDeleteResponse;
import org.openapis.openapi.models.operations.PrivateCollectionCategoryDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionCategoryDeleteRequest req = new PrivateCollectionCategoryDeleteRequest(703495L, 586410L);            

            PrivateCollectionCategoryDeleteResponse res = sdk.collections.privateCollectionCategoryDelete(req, new PrivateCollectionCategoryDeleteSecurity("qui") {{
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

## privateCollectionCreate

Create a new Collection by sending collection information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionCreateResponse;
import org.openapis.openapi.models.operations.PrivateCollectionCreateSecurity;
import org.openapis.openapi.models.shared.CollectionCreate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollectionCreate req = new CollectionCreate("Test collection title") {{
                articles = new Long[]{{
                    add(512393L),
                }};
                authors = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("voluptatibus", "quisquam");
                        put("vero", "omnis");
                        put("quis", "ipsum");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("voluptate", "consectetur");
                        put("vero", "tenetur");
                        put("dignissimos", "hic");
                        put("distinctio", "quod");
                    }}),
                }};
                categories = new Long[]{{
                    add(630448L),
                    add(708548L),
                }};
                categoriesBySourceId = new String[]{{
                    add("ducimus"),
                    add("dolore"),
                    add("quibusdam"),
                    add("illum"),
                }};
                customFields = new java.util.HashMap<String, Object>() {{
                    put("natus", "impedit");
                }};
                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                    add(new CustomArticleFieldAdd("key", "exercitationem") {{
                        name = "key";
                        value = "voluptatibus";
                    }}),
                }};
                description = "Test description of article";
                doi = "nulla";
                funding = "fugit";
                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                    add(new FundingCreate() {{
                        id = 981830L;
                        title = "Dr.";
                    }}),
                    add(new FundingCreate() {{
                        id = 478370L;
                        title = "Miss";
                    }}),
                    add(new FundingCreate() {{
                        id = 497391L;
                        title = "Mr.";
                    }}),
                    add(new FundingCreate() {{
                        id = 639473L;
                        title = "Mrs.";
                    }}),
                }};
                groupId = 368584L;
                handle = "ea";
                keywords = new String[]{{
                    add("vel"),
                }};
                references = new String[]{{
                    add("magnam"),
                    add("ratione"),
                    add("ex"),
                    add("laudantium"),
                }};
                resourceDoi = "dicta";
                resourceId = "dolor";
                resourceLink = "maiores";
                resourceTitle = "quasi";
                resourceVersion = 406120L;
                tags = new String[]{{
                    add("excepturi"),
                    add("voluptatibus"),
                    add("nostrum"),
                    add("sapiente"),
                }};
                timeline = new TimelineUpdate() {{
                    firstOnline = "2015-12-31";
                    publisherAcceptance = "2015-12-31";
                    publisherPublication = "2015-12-31";
                }};;
            }};            

            PrivateCollectionCreateResponse res = sdk.collections.privateCollectionCreate(req, new PrivateCollectionCreateSecurity("quisquam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.locationWarnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionDelete

Delete n collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionDeleteRequest;
import org.openapis.openapi.models.operations.PrivateCollectionDeleteResponse;
import org.openapis.openapi.models.operations.PrivateCollectionDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionDeleteRequest req = new PrivateCollectionDeleteRequest(906556L);            

            PrivateCollectionDeleteResponse res = sdk.collections.privateCollectionDelete(req, new PrivateCollectionDeleteSecurity("ea") {{
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

## privateCollectionDetails

View a collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionDetailsRequest;
import org.openapis.openapi.models.operations.PrivateCollectionDetailsResponse;
import org.openapis.openapi.models.operations.PrivateCollectionDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionDetailsRequest req = new PrivateCollectionDetailsRequest(774048L);            

            PrivateCollectionDetailsResponse res = sdk.collections.privateCollectionDetails(req, new PrivateCollectionDetailsSecurity("corporis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionCompletePrivate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionPrivateLinkCreate

Create new private link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkCreateRequest;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkCreateResponse;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkCreateSecurity;
import org.openapis.openapi.models.shared.CollectionPrivateLinkCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionPrivateLinkCreateRequest req = new PrivateCollectionPrivateLinkCreateRequest(333145L) {{
                collectionPrivateLinkCreator = new CollectionPrivateLinkCreator() {{
                    expiresDate = "2018-02-22 22:22:22";
                    readOnly = true;
                }};;
            }};            

            PrivateCollectionPrivateLinkCreateResponse res = sdk.collections.privateCollectionPrivateLinkCreate(req, new PrivateCollectionPrivateLinkCreateSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionPrivateLinkDelete

Disable/delete private link for this collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkDeleteRequest;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkDeleteResponse;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionPrivateLinkDeleteRequest req = new PrivateCollectionPrivateLinkDeleteRequest(81101L, "magnam");            

            PrivateCollectionPrivateLinkDeleteResponse res = sdk.collections.privateCollectionPrivateLinkDelete(req, new PrivateCollectionPrivateLinkDeleteSecurity("ea") {{
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

## privateCollectionPrivateLinkUpdate

Update existing private link for this collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkUpdateRequest;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkUpdateResponse;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinkUpdateSecurity;
import org.openapis.openapi.models.shared.CollectionPrivateLinkCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionPrivateLinkUpdateRequest req = new PrivateCollectionPrivateLinkUpdateRequest(775220L, "consectetur") {{
                collectionPrivateLinkCreator = new CollectionPrivateLinkCreator() {{
                    expiresDate = "2018-02-22 22:22:22";
                    readOnly = true;
                }};;
            }};            

            PrivateCollectionPrivateLinkUpdateResponse res = sdk.collections.privateCollectionPrivateLinkUpdate(req, new PrivateCollectionPrivateLinkUpdateSecurity("recusandae") {{
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

## privateCollectionPrivateLinksList

List article private links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinksListRequest;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinksListResponse;
import org.openapis.openapi.models.operations.PrivateCollectionPrivateLinksListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionPrivateLinksListRequest req = new PrivateCollectionPrivateLinksListRequest(132487L);            

            PrivateCollectionPrivateLinksListResponse res = sdk.collections.privateCollectionPrivateLinksList(req, new PrivateCollectionPrivateLinksListSecurity("minima") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateLinks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionPublish

When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionPublishRequest;
import org.openapis.openapi.models.operations.PrivateCollectionPublishResponse;
import org.openapis.openapi.models.operations.PrivateCollectionPublishSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionPublishRequest req = new PrivateCollectionPublishRequest(53427L);            

            PrivateCollectionPublishResponse res = sdk.collections.privateCollectionPublish(req, new PrivateCollectionPublishSecurity("a") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionReserveDoi

Reserve DOI for collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionReserveDoiRequest;
import org.openapis.openapi.models.operations.PrivateCollectionReserveDoiResponse;
import org.openapis.openapi.models.operations.PrivateCollectionReserveDoiSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionReserveDoiRequest req = new PrivateCollectionReserveDoiRequest(725595L);            

            PrivateCollectionReserveDoiResponse res = sdk.collections.privateCollectionReserveDoi(req, new PrivateCollectionReserveDoiSecurity("aut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionDOI != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionReserveHandle

Reserve Handle for collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionReserveHandleRequest;
import org.openapis.openapi.models.operations.PrivateCollectionReserveHandleResponse;
import org.openapis.openapi.models.operations.PrivateCollectionReserveHandleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionReserveHandleRequest req = new PrivateCollectionReserveHandleRequest(11427L);            

            PrivateCollectionReserveHandleResponse res = sdk.collections.privateCollectionReserveHandle(req, new PrivateCollectionReserveHandleSecurity("deleniti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionHandle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionResource

Edit collection resource data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionResourceRequest;
import org.openapis.openapi.models.operations.PrivateCollectionResourceResponse;
import org.openapis.openapi.models.operations.PrivateCollectionResourceSecurity;
import org.openapis.openapi.models.shared.Resource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionResourceRequest req = new PrivateCollectionResourceRequest(                new Resource() {{
                                doi = "impedit";
                                id = "aaaa23512";
                                link = "https://docs.figshare.com";
                                status = "frozen";
                                title = "Test title";
                                version = 1L;
                            }};, 304582L);            

            PrivateCollectionResourceResponse res = sdk.collections.privateCollectionResource(req, new PrivateCollectionResourceSecurity("fugit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionUpdate

Update collection details; request can also be made with the PATCH method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionUpdateRequest;
import org.openapis.openapi.models.operations.PrivateCollectionUpdateResponse;
import org.openapis.openapi.models.operations.PrivateCollectionUpdateSecurity;
import org.openapis.openapi.models.shared.CollectionUpdate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionUpdateRequest req = new PrivateCollectionUpdateRequest(                new CollectionUpdate() {{
                                articles = new Long[]{{
                                    add(79522L),
                                    add(250622L),
                                    add(89603L),
                                    add(677412L),
                                }};
                                authors = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("velit", "eum");
                                        put("autem", "nobis");
                                        put("quas", "assumenda");
                                        put("nulla", "voluptas");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quasi", "tempora");
                                        put("numquam", "explicabo");
                                        put("provident", "ipsa");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("magnam", "odio");
                                        put("eius", "esse");
                                    }}),
                                }};
                                categories = new Long[]{{
                                    add(524593L),
                                    add(683282L),
                                }};
                                categoriesBySourceId = new String[]{{
                                    add("quidem"),
                                    add("fugiat"),
                                }};
                                customFields = new java.util.HashMap<String, Object>() {{
                                    put("eum", "suscipit");
                                    put("assumenda", "eos");
                                }};
                                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                                    add(new CustomArticleFieldAdd("key", "veritatis") {{
                                        name = "key";
                                        value = "quisquam";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "id") {{
                                        name = "key";
                                        value = "ipsa";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "neque") {{
                                        name = "key";
                                        value = "quidem";
                                    }}),
                                }};
                                description = "Test description of collection";
                                doi = "quo";
                                funding = "illum";
                                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                                    add(new FundingCreate() {{
                                        id = 681359L;
                                        title = "Mrs.";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 178367L;
                                        title = "Mrs.";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 69859L;
                                        title = "Ms.";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 9688L;
                                        title = "Mrs.";
                                    }}),
                                }};
                                groupId = 892050L;
                                handle = "ipsam";
                                keywords = new String[]{{
                                    add("sequi"),
                                }};
                                references = new String[]{{
                                    add("esse"),
                                    add("recusandae"),
                                    add("aperiam"),
                                    add("distinctio"),
                                }};
                                resourceDoi = "quod";
                                resourceId = "dignissimos";
                                resourceLink = "inventore";
                                resourceTitle = "nihil";
                                resourceVersion = 518835L;
                                tags = new String[]{{
                                    add("aliquam"),
                                    add("odio"),
                                    add("occaecati"),
                                    add("commodi"),
                                }};
                                timeline = new TimelineUpdate() {{
                                    firstOnline = "2015-12-31";
                                    publisherAcceptance = "2015-12-31";
                                    publisherPublication = "2015-12-31";
                                }};;
                                title = "Test collection title";
                            }};, 959434L);            

            PrivateCollectionUpdateResponse res = sdk.collections.privateCollectionUpdate(req, new PrivateCollectionUpdateSecurity("dolores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.locationWarningsUpdate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCollectionsList

List private collections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionsListOrderDirectionEnum;
import org.openapis.openapi.models.operations.PrivateCollectionsListOrderEnum;
import org.openapis.openapi.models.operations.PrivateCollectionsListRequest;
import org.openapis.openapi.models.operations.PrivateCollectionsListResponse;
import org.openapis.openapi.models.operations.PrivateCollectionsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCollectionsListRequest req = new PrivateCollectionsListRequest() {{
                limit = 645570L;
                offset = 475289L;
                order = PrivateCollectionsListOrderEnum.PUBLISHED_DATE;
                orderDirection = PrivateCollectionsListOrderDirectionEnum.DESC;
                page = 430402L;
                pageSize = 556429L;
            }};            

            PrivateCollectionsListResponse res = sdk.collections.privateCollectionsList(req, new PrivateCollectionsListSecurity("praesentium") {{
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

## privateCollectionsSearch

Returns a list of private Collections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCollectionsSearchResponse;
import org.openapis.openapi.models.operations.PrivateCollectionsSearchSecurity;
import org.openapis.openapi.models.shared.PrivateCollectionSearch;
import org.openapis.openapi.models.shared.PrivateCollectionSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.PrivateCollectionSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PrivateCollectionSearch req = new PrivateCollectionSearch() {{
                doi = "10.6084/m9.figshare.1407024";
                group = 2000013;
                handle = "10084/figshare.1407024";
                institution = 2000013;
                limit = 10L;
                modifiedSince = "2017-12-22";
                offset = 159867L;
                order = PrivateCollectionSearchOrderEnum.PUBLISHED_DATE;
                orderDirection = PrivateCollectionSearchOrderDirectionEnum.DESC;
                page = 1L;
                pageSize = 10L;
                publishedSince = "2017-12-22";
                resourceDoi = "10.6084/m9.figshare.1407024";
                resourceId = "1407024";
                searchFor = "figshare";
            }};            

            PrivateCollectionsSearchResponse res = sdk.collections.privateCollectionsSearch(req, new PrivateCollectionsSearchSecurity("deleniti") {{
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
