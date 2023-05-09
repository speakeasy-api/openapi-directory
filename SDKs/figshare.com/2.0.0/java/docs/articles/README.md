# articles

### Available Operations

* [accountArticleReport](#accountarticlereport) - Account Article Report
* [accountArticleReportGenerate](#accountarticlereportgenerate) - Initiate a new Report
* [articleDetails](#articledetails) - View article details
* [articleFileDetails](#articlefiledetails) - Article file details
* [articleFiles](#articlefiles) - List article files
* [articleVersionConfidentiality](#articleversionconfidentiality) - Public Article Confidentiality for article version
* [articleVersionDetails](#articleversiondetails) - Article details for version
* [articleVersionEmbargo](#articleversionembargo) - Public Article Embargo for article version
* [articleVersionUpdate](#articleversionupdate) - Update article version
* [articleVersionUpdateThumb](#articleversionupdatethumb) - Update article version thumbnail
* [articleVersions](#articleversions) - List article versions
* [articlesList](#articleslist) - Public Articles
* [articlesSearch](#articlessearch) - Public Articles Search
* [privateArticleAuthorDelete](#privatearticleauthordelete) - Delete article author
* [privateArticleAuthorsAdd](#privatearticleauthorsadd) - Add article authors
* [privateArticleAuthorsList](#privatearticleauthorslist) - List article authors
* [privateArticleAuthorsReplace](#privatearticleauthorsreplace) - Replace article authors
* [privateArticleCategoriesAdd](#privatearticlecategoriesadd) - Add article categories
* [privateArticleCategoriesList](#privatearticlecategorieslist) - List article categories
* [privateArticleCategoriesReplace](#privatearticlecategoriesreplace) - Replace article categories
* [privateArticleCategoryDelete](#privatearticlecategorydelete) - Delete article category
* [privateArticleConfidentialityDelete](#privatearticleconfidentialitydelete) - Delete article confidentiality
* [privateArticleConfidentialityDetails](#privatearticleconfidentialitydetails) - Article confidentiality details
* [privateArticleConfidentialityUpdate](#privatearticleconfidentialityupdate) - Update article confidentiality
* [privateArticleCreate](#privatearticlecreate) - Create new Article
* [privateArticleDelete](#privatearticledelete) - Delete article
* [privateArticleDetails](#privatearticledetails) - Article details
* [privateArticleEmbargoDelete](#privatearticleembargodelete) - Delete Article Embargo
* [privateArticleEmbargoDetails](#privatearticleembargodetails) - Article Embargo Details
* [privateArticleEmbargoUpdate](#privatearticleembargoupdate) - Update Article Embargo
* [privateArticleFile](#privatearticlefile) - Single File
* [privateArticleFileDelete](#privatearticlefiledelete) - File Delete
* [privateArticleFilesList](#privatearticlefileslist) - List article files
* [privateArticlePrivateLink](#privatearticleprivatelink) - List private links
* [privateArticlePrivateLinkCreate](#privatearticleprivatelinkcreate) - Create private link
* [privateArticlePrivateLinkDelete](#privatearticleprivatelinkdelete) - Disable private link
* [privateArticlePrivateLinkUpdate](#privatearticleprivatelinkupdate) - Update private link
* [privateArticlePublish](#privatearticlepublish) - Private Article Publish
* [privateArticleReserveDoi](#privatearticlereservedoi) - Private Article Reserve DOI
* [privateArticleReserveHandle](#privatearticlereservehandle) - Private Article Reserve Handle
* [privateArticleResource](#privatearticleresource) - Private Article Resource
* [privateArticleUpdate](#privatearticleupdate) - Update article
* [privateArticleUploadComplete](#privatearticleuploadcomplete) - Complete Upload
* [privateArticleUploadInitiate](#privatearticleuploadinitiate) - Initiate Upload
* [privateArticlesList](#privatearticleslist) - Private Articles
* [privateArticlesSearch](#privatearticlessearch) - Private Articles search

## accountArticleReport

Return status on all reports generated for the account from the oauth credentials

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountArticleReportRequest;
import org.openapis.openapi.models.operations.AccountArticleReportResponse;
import org.openapis.openapi.models.operations.AccountArticleReportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountArticleReportRequest req = new AccountArticleReportRequest() {{
                groupId = 715190L;
            }};            

            AccountArticleReportResponse res = sdk.articles.accountArticleReport(req, new AccountArticleReportSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountArticleReportGenerate

Initiate a new Article Report for this Account. There is a limit of 1 report per day.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountArticleReportGenerateResponse;
import org.openapis.openapi.models.operations.AccountArticleReportGenerateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountArticleReportGenerateResponse res = sdk.articles.accountArticleReportGenerate(new AccountArticleReportGenerateSecurity("unde") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleDetails

View an article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleDetailsRequest;
import org.openapis.openapi.models.operations.ArticleDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleDetailsRequest req = new ArticleDetailsRequest(857946L);            

            ArticleDetailsResponse res = sdk.articles.articleDetails(req);

            if (res.articleComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleFileDetails

File by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleFileDetailsRequest;
import org.openapis.openapi.models.operations.ArticleFileDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleFileDetailsRequest req = new ArticleFileDetailsRequest(544883L, 847252L);            

            ArticleFileDetailsResponse res = sdk.articles.articleFileDetails(req);

            if (res.publicFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleFiles

Files list for article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleFilesRequest;
import org.openapis.openapi.models.operations.ArticleFilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleFilesRequest req = new ArticleFilesRequest(423655L);            

            ArticleFilesResponse res = sdk.articles.articleFiles(req);

            if (res.publicFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleVersionConfidentiality

Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionConfidentialityRequest;
import org.openapis.openapi.models.operations.ArticleVersionConfidentialityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionConfidentialityRequest req = new ArticleVersionConfidentialityRequest(623564L, 645894L);            

            ArticleVersionConfidentialityResponse res = sdk.articles.articleVersionConfidentiality(req);

            if (res.articleConfidentiality != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleVersionDetails

Article with specified version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionDetailsRequest;
import org.openapis.openapi.models.operations.ArticleVersionDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionDetailsRequest req = new ArticleVersionDetailsRequest(384382L, 437587L);            

            ArticleVersionDetailsResponse res = sdk.articles.articleVersionDetails(req);

            if (res.articleComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleVersionEmbargo

Embargo for article version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionEmbargoRequest;
import org.openapis.openapi.models.operations.ArticleVersionEmbargoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionEmbargoRequest req = new ArticleVersionEmbargoRequest(297534L, 891773L);            

            ArticleVersionEmbargoResponse res = sdk.articles.articleVersionEmbargo(req);

            if (res.articleEmbargo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleVersionUpdate

Updating an article version by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionUpdateRequest;
import org.openapis.openapi.models.operations.ArticleVersionUpdateResponse;
import org.openapis.openapi.models.operations.ArticleVersionUpdateSecurity;
import org.openapis.openapi.models.shared.ArticleUpdate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionUpdateRequest req = new ArticleVersionUpdateRequest(                new ArticleUpdate() {{
                                authors = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("tempora", "suscipit");
                                        put("molestiae", "minus");
                                        put("placeat", "voluptatum");
                                        put("iusto", "excepturi");
                                    }}),
                                }};
                                categories = new Long[]{{
                                    add(925597L),
                                    add(836079L),
                                }};
                                categoriesBySourceId = new String[]{{
                                    add("quis"),
                                }};
                                customFields = new java.util.HashMap<String, Object>() {{
                                    put("deserunt", "perferendis");
                                }};
                                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                                    add(new CustomArticleFieldAdd("key", "sapiente") {{
                                        name = "key";
                                        value = "repellendus";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "odit") {{
                                        name = "key";
                                        value = "quo";
                                    }}),
                                }};
                                definedType = "media";
                                description = "Test description of article";
                                doi = "at";
                                funding = "at";
                                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                                    add(new FundingCreate() {{
                                        id = 473608L;
                                        title = "Miss";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 800911L;
                                        title = "Ms.";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 520478L;
                                        title = "Miss";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 678880L;
                                        title = "Mr.";
                                    }}),
                                }};
                                groupId = 720633L;
                                handle = "officia";
                                isMetadataRecord = true;
                                keywords = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                license = 1L;
                                metadataReason = "hosted somewhere else";
                                references = new String[]{{
                                    add("totam"),
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                                resourceDoi = "modi";
                                resourceTitle = "qui";
                                tags = new String[]{{
                                    add("cum"),
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                timeline = new TimelineUpdate() {{
                                    firstOnline = "2015-12-31";
                                    publisherAcceptance = "2015-12-31";
                                    publisherPublication = "2015-12-31";
                                }};;
                                title = "Test article title";
                            }};, 135218L, 18789L);            

            ArticleVersionUpdateResponse res = sdk.articles.articleVersionUpdate(req, new ArticleVersionUpdateSecurity("ad") {{
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

## articleVersionUpdateThumb

For a given public article version update the article thumbnail by choosing one of the associated files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionUpdateThumbRequest;
import org.openapis.openapi.models.operations.ArticleVersionUpdateThumbResponse;
import org.openapis.openapi.models.operations.ArticleVersionUpdateThumbSecurity;
import org.openapis.openapi.models.shared.FileId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionUpdateThumbRequest req = new ArticleVersionUpdateThumbRequest(                new FileId() {{
                                fileId = 123L;
                            }};, 617636L, 149675L);            

            ArticleVersionUpdateThumbResponse res = sdk.articles.articleVersionUpdateThumb(req, new ArticleVersionUpdateThumbSecurity("iste") {{
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

## articleVersions

List public article versions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleVersionsRequest;
import org.openapis.openapi.models.operations.ArticleVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleVersionsRequest req = new ArticleVersionsRequest(222321L);            

            ArticleVersionsResponse res = sdk.articles.articleVersions(req);

            if (res.articleVersions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlesList

Returns a list of public articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlesListOrderDirectionEnum;
import org.openapis.openapi.models.operations.ArticlesListOrderEnum;
import org.openapis.openapi.models.operations.ArticlesListRequest;
import org.openapis.openapi.models.operations.ArticlesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlesListRequest req = new ArticlesListRequest() {{
                xCursor = "96fea759-6eb1-40fa-aa23-52c5955907af";
                doi = "sapiente";
                group = 102044L;
                handle = "mollitia";
                institution = 208876L;
                itemType = 635059L;
                limit = 161309L;
                modifiedSince = "repellat";
                offset = 653108L;
                order = ArticlesListOrderEnum.SHARES;
                orderDirection = ArticlesListOrderDirectionEnum.ASC;
                page = 414369L;
                pageSize = 466311L;
                publishedSince = "molestiae";
                resourceDoi = "velit";
            }};            

            ArticlesListResponse res = sdk.articles.articlesList(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlesSearch

Returns a list of public articles, filtered by the search parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlesSearchRequest;
import org.openapis.openapi.models.operations.ArticlesSearchResponse;
import org.openapis.openapi.models.shared.ArticleSearch;
import org.openapis.openapi.models.shared.ArticleSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.ArticleSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlesSearchRequest req = new ArticlesSearchRequest() {{
                articleSearch = new ArticleSearch() {{
                    doi = "10.6084/m9.figshare.1407024";
                    group = 2000013;
                    handle = "111084/m9.figshare.14074";
                    institution = 2000013;
                    itemType = 1L;
                    limit = 10L;
                    modifiedSince = "2017-12-22";
                    offset = 623510L;
                    order = ArticleSearchOrderEnum.PUBLISHED_DATE;
                    orderDirection = ArticleSearchOrderDirectionEnum.DESC;
                    page = 1L;
                    pageSize = 10L;
                    projectId = 1L;
                    publishedSince = "2017-12-22";
                    resourceDoi = "10.6084/m9.figshare.1407024";
                    searchFor = "figshare";
                }};;
                xCursor = "251aa52c-3f5a-4d01-9da1-ffe78f097b00";
            }};            

            ArticlesSearchResponse res = sdk.articles.articlesSearch(req);

            if (res.articleWithProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleAuthorDelete

De-associate author from article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleAuthorDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleAuthorDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleAuthorDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleAuthorDeleteRequest req = new PrivateArticleAuthorDeleteRequest(441711L, 282807L);            

            PrivateArticleAuthorDeleteResponse res = sdk.articles.privateArticleAuthorDelete(req, new PrivateArticleAuthorDeleteSecurity("maiores") {{
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

## privateArticleAuthorsAdd

Associate new authors with the article. This will add new authors to the list of already associated authors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsAddRequest;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsAddResponse;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsAddSecurity;
import org.openapis.openapi.models.shared.AuthorsCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleAuthorsAddRequest req = new PrivateArticleAuthorsAddRequest(                new AuthorsCreator(                new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("dolore", "iusto");
                                                    put("dicta", "harum");
                                                }}),
                                            }});, 317983L);            

            PrivateArticleAuthorsAddResponse res = sdk.articles.privateArticleAuthorsAdd(req, new PrivateArticleAuthorsAddSecurity("accusamus") {{
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

## privateArticleAuthorsList

List article authors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsListRequest;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsListResponse;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleAuthorsListRequest req = new PrivateArticleAuthorsListRequest(414263L);            

            PrivateArticleAuthorsListResponse res = sdk.articles.privateArticleAuthorsList(req, new PrivateArticleAuthorsListSecurity("repudiandae") {{
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

## privateArticleAuthorsReplace

Associate new authors with the article. This will remove all already associated authors and add these new ones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsReplaceRequest;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsReplaceResponse;
import org.openapis.openapi.models.operations.PrivateArticleAuthorsReplaceSecurity;
import org.openapis.openapi.models.shared.AuthorsCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleAuthorsReplaceRequest req = new PrivateArticleAuthorsReplaceRequest(                new AuthorsCreator(                new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("quidem", "molestias");
                                                }}),
                                            }});, 566602L);            

            PrivateArticleAuthorsReplaceResponse res = sdk.articles.privateArticleAuthorsReplace(req, new PrivateArticleAuthorsReplaceSecurity("pariatur") {{
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

## privateArticleCategoriesAdd

Associate new categories with the article. This will add new categories to the list of already associated categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesAddRequest;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesAddResponse;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesAddSecurity;
import org.openapis.openapi.models.shared.CategoriesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleCategoriesAddRequest req = new PrivateArticleCategoriesAddRequest(                new CategoriesCreator(                new Long[]{{
                                                add(508969L),
                                                add(523248L),
                                            }});, 916723L);            

            PrivateArticleCategoriesAddResponse res = sdk.articles.privateArticleCategoriesAdd(req, new PrivateArticleCategoriesAddSecurity("quasi") {{
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

## privateArticleCategoriesList

List article categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesListRequest;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesListResponse;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleCategoriesListRequest req = new PrivateArticleCategoriesListRequest(921158L);            

            PrivateArticleCategoriesListResponse res = sdk.articles.privateArticleCategoriesList(req, new PrivateArticleCategoriesListSecurity("sint") {{
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

## privateArticleCategoriesReplace

Associate new categories with the article. This will remove all already associated categories and add these new ones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesReplaceRequest;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesReplaceResponse;
import org.openapis.openapi.models.operations.PrivateArticleCategoriesReplaceSecurity;
import org.openapis.openapi.models.shared.CategoriesCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleCategoriesReplaceRequest req = new PrivateArticleCategoriesReplaceRequest(                new CategoriesCreator(                new Long[]{{
                                                add(929297L),
                                            }});, 277718L);            

            PrivateArticleCategoriesReplaceResponse res = sdk.articles.privateArticleCategoriesReplace(req, new PrivateArticleCategoriesReplaceSecurity("enim") {{
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

## privateArticleCategoryDelete

De-associate category from article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleCategoryDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleCategoryDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleCategoryDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleCategoryDeleteRequest req = new PrivateArticleCategoryDeleteRequest(9356L, 667411L);            

            PrivateArticleCategoryDeleteResponse res = sdk.articles.privateArticleCategoryDelete(req, new PrivateArticleCategoryDeleteSecurity("quibusdam") {{
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

## privateArticleConfidentialityDelete

Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleConfidentialityDeleteRequest req = new PrivateArticleConfidentialityDeleteRequest(131797L);            

            PrivateArticleConfidentialityDeleteResponse res = sdk.articles.privateArticleConfidentialityDelete(req, new PrivateArticleConfidentialityDeleteSecurity("deserunt") {{
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

## privateArticleConfidentialityDetails

View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDetailsRequest;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDetailsResponse;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleConfidentialityDetailsRequest req = new PrivateArticleConfidentialityDetailsRequest(716327L);            

            PrivateArticleConfidentialityDetailsResponse res = sdk.articles.privateArticleConfidentialityDetails(req, new PrivateArticleConfidentialityDetailsSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleConfidentiality != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleConfidentialityUpdate

Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityUpdateRequest;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityUpdateResponse;
import org.openapis.openapi.models.operations.PrivateArticleConfidentialityUpdateSecurity;
import org.openapis.openapi.models.shared.ConfidentialityCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleConfidentialityUpdateRequest req = new PrivateArticleConfidentialityUpdateRequest(                new ConfidentialityCreator("labore");, 264730L);            

            PrivateArticleConfidentialityUpdateResponse res = sdk.articles.privateArticleConfidentialityUpdate(req, new PrivateArticleConfidentialityUpdateSecurity("qui") {{
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

## privateArticleCreate

Create a new Article by sending article information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleCreateResponse;
import org.openapis.openapi.models.operations.PrivateArticleCreateSecurity;
import org.openapis.openapi.models.shared.ArticleCreate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ArticleCreate req = new ArticleCreate("Test article title") {{
                authors = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("quos", "perferendis");
                        put("magni", "assumenda");
                        put("ipsam", "alias");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("dolorum", "excepturi");
                    }}),
                }};
                categories = new Long[]{{
                    add(703737L),
                    add(735194L),
                }};
                categoriesBySourceId = new String[]{{
                    add("delectus"),
                    add("eum"),
                }};
                customFields = new java.util.HashMap<String, Object>() {{
                    put("eligendi", "sint");
                }};
                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                    add(new CustomArticleFieldAdd("key", "necessitatibus") {{
                        name = "key";
                        value = "provident";
                    }}),
                    add(new CustomArticleFieldAdd("key", "officia") {{
                        name = "key";
                        value = "sint";
                    }}),
                }};
                definedType = "media";
                description = "Test description of article";
                doi = "dolor";
                funding = "debitis";
                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                    add(new FundingCreate() {{
                        id = 680056L;
                        title = "Ms.";
                    }}),
                    add(new FundingCreate() {{
                        id = 449198L;
                        title = "Dr.";
                    }}),
                    add(new FundingCreate() {{
                        id = 978571L;
                        title = "Miss";
                    }}),
                    add(new FundingCreate() {{
                        id = 116202L;
                        title = "Mrs.";
                    }}),
                }};
                groupId = 767024L;
                handle = "facere";
                isMetadataRecord = true;
                keywords = new String[]{{
                    add("aliquid"),
                    add("laborum"),
                }};
                license = 1L;
                metadataReason = "hosted somewhere else";
                references = new String[]{{
                    add("non"),
                    add("occaecati"),
                    add("enim"),
                    add("accusamus"),
                }};
                resourceDoi = "delectus";
                resourceTitle = "quidem";
                tags = new String[]{{
                    add("nam"),
                    add("id"),
                    add("blanditiis"),
                }};
                timeline = new TimelineUpdate() {{
                    firstOnline = "2015-12-31";
                    publisherAcceptance = "2015-12-31";
                    publisherPublication = "2015-12-31";
                }};;
            }};            

            PrivateArticleCreateResponse res = sdk.articles.privateArticleCreate(req, new PrivateArticleCreateSecurity("deleniti") {{
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

## privateArticleDelete

Delete an article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleDeleteRequest req = new PrivateArticleDeleteRequest(956084L);            

            PrivateArticleDeleteResponse res = sdk.articles.privateArticleDelete(req, new PrivateArticleDeleteSecurity("amet") {{
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

## privateArticleDetails

View a private article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleDetailsRequest;
import org.openapis.openapi.models.operations.PrivateArticleDetailsResponse;
import org.openapis.openapi.models.operations.PrivateArticleDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleDetailsRequest req = new PrivateArticleDetailsRequest(643990L);            

            PrivateArticleDetailsResponse res = sdk.articles.privateArticleDetails(req, new PrivateArticleDetailsSecurity("nisi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleCompletePrivate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleEmbargoDelete

Will lift the embargo for the specified article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleEmbargoDeleteRequest req = new PrivateArticleEmbargoDeleteRequest(423855L);            

            PrivateArticleEmbargoDeleteResponse res = sdk.articles.privateArticleEmbargoDelete(req, new PrivateArticleEmbargoDeleteSecurity("natus") {{
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

## privateArticleEmbargoDetails

View a private article embargo details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDetailsRequest;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDetailsResponse;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleEmbargoDetailsRequest req = new PrivateArticleEmbargoDetailsRequest(606393L);            

            PrivateArticleEmbargoDetailsResponse res = sdk.articles.privateArticleEmbargoDetails(req, new PrivateArticleEmbargoDetailsSecurity("molestiae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleEmbargo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleEmbargoUpdate

Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoUpdateRequest;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoUpdateResponse;
import org.openapis.openapi.models.operations.PrivateArticleEmbargoUpdateSecurity;
import org.openapis.openapi.models.shared.ArticleEmbargoUpdater;
import org.openapis.openapi.models.shared.ArticleEmbargoUpdaterEmbargoTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleEmbargoUpdateRequest req = new PrivateArticleEmbargoUpdateRequest(                new ArticleEmbargoUpdater("2018-05-22T04:04:04", ArticleEmbargoUpdaterEmbargoTypeEnum.FILE, true) {{
                                embargoOptions = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("magnam", "distinctio");
                                        put("id", "labore");
                                    }}),
                                }};
                                embargoReason = "labore";
                                embargoTitle = "File(s) under embargo";
                            }};, 383462L);            

            PrivateArticleEmbargoUpdateResponse res = sdk.articles.privateArticleEmbargoUpdate(req, new PrivateArticleEmbargoUpdateSecurity("natus") {{
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

## privateArticleFile

View details of file for specified article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleFileRequest;
import org.openapis.openapi.models.operations.PrivateArticleFileResponse;
import org.openapis.openapi.models.operations.PrivateArticleFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleFileRequest req = new PrivateArticleFileRequest(749170L, 428769L);            

            PrivateArticleFileResponse res = sdk.articles.privateArticleFile(req, new PrivateArticleFileSecurity("vero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleFileDelete

Complete file upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleFileDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleFileDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleFileDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleFileDeleteRequest req = new PrivateArticleFileDeleteRequest(135474L, 102863L);            

            PrivateArticleFileDeleteResponse res = sdk.articles.privateArticleFileDelete(req, new PrivateArticleFileDeleteSecurity("magnam") {{
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

## privateArticleFilesList

List private files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleFilesListRequest;
import org.openapis.openapi.models.operations.PrivateArticleFilesListResponse;
import org.openapis.openapi.models.operations.PrivateArticleFilesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleFilesListRequest req = new PrivateArticleFilesListRequest(92373L);            

            PrivateArticleFilesListResponse res = sdk.articles.privateArticleFilesList(req, new PrivateArticleFilesListSecurity("excepturi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticlePrivateLink

List private links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkRequest;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkResponse;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlePrivateLinkRequest req = new PrivateArticlePrivateLinkRequest(354047L);            

            PrivateArticlePrivateLinkResponse res = sdk.articles.privateArticlePrivateLink(req, new PrivateArticlePrivateLinkSecurity("provident") {{
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

## privateArticlePrivateLinkCreate

Create new private link for this article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkCreateRequest;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkCreateResponse;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkCreateSecurity;
import org.openapis.openapi.models.shared.PrivateLinkCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlePrivateLinkCreateRequest req = new PrivateArticlePrivateLinkCreateRequest(551816L) {{
                privateLinkCreator = new PrivateLinkCreator() {{
                    expiresDate = "2018-02-22 22:22:22";
                    readOnly = true;
                }};;
            }};            

            PrivateArticlePrivateLinkCreateResponse res = sdk.articles.privateArticlePrivateLinkCreate(req, new PrivateArticlePrivateLinkCreateSecurity("sint") {{
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

## privateArticlePrivateLinkDelete

Disable/delete private link for this article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkDeleteRequest;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkDeleteResponse;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlePrivateLinkDeleteRequest req = new PrivateArticlePrivateLinkDeleteRequest(33625L, "mollitia");            

            PrivateArticlePrivateLinkDeleteResponse res = sdk.articles.privateArticlePrivateLinkDelete(req, new PrivateArticlePrivateLinkDeleteSecurity("reiciendis") {{
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

## privateArticlePrivateLinkUpdate

Update existing private link for this article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkUpdateRequest;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkUpdateResponse;
import org.openapis.openapi.models.operations.PrivateArticlePrivateLinkUpdateSecurity;
import org.openapis.openapi.models.shared.PrivateLinkCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlePrivateLinkUpdateRequest req = new PrivateArticlePrivateLinkUpdateRequest(652103L, "ad") {{
                privateLinkCreator = new PrivateLinkCreator() {{
                    expiresDate = "2018-02-22 22:22:22";
                    readOnly = true;
                }};;
            }};            

            PrivateArticlePrivateLinkUpdateResponse res = sdk.articles.privateArticlePrivateLinkUpdate(req, new PrivateArticlePrivateLinkUpdateSecurity("eum") {{
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

## privateArticlePublish

- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlePublishRequest;
import org.openapis.openapi.models.operations.PrivateArticlePublishResponse;
import org.openapis.openapi.models.operations.PrivateArticlePublishSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlePublishRequest req = new PrivateArticlePublishRequest(221262L);            

            PrivateArticlePublishResponse res = sdk.articles.privateArticlePublish(req, new PrivateArticlePublishSecurity("necessitatibus") {{
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

## privateArticleReserveDoi

Reserve DOI for article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleReserveDoiRequest;
import org.openapis.openapi.models.operations.PrivateArticleReserveDoiResponse;
import org.openapis.openapi.models.operations.PrivateArticleReserveDoiSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleReserveDoiRequest req = new PrivateArticleReserveDoiRequest(141264L);            

            PrivateArticleReserveDoiResponse res = sdk.articles.privateArticleReserveDoi(req, new PrivateArticleReserveDoiSecurity("nemo") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleDOI != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleReserveHandle

Reserve Handle for article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleReserveHandleRequest;
import org.openapis.openapi.models.operations.PrivateArticleReserveHandleResponse;
import org.openapis.openapi.models.operations.PrivateArticleReserveHandleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleReserveHandleRequest req = new PrivateArticleReserveHandleRequest(97260L);            

            PrivateArticleReserveHandleResponse res = sdk.articles.privateArticleReserveHandle(req, new PrivateArticleReserveHandleSecurity("iure") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleHandle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateArticleResource

Edit article resource data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleResourceRequest;
import org.openapis.openapi.models.operations.PrivateArticleResourceResponse;
import org.openapis.openapi.models.operations.PrivateArticleResourceSecurity;
import org.openapis.openapi.models.shared.Resource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleResourceRequest req = new PrivateArticleResourceRequest(                new Resource() {{
                                doi = "doloribus";
                                id = "aaaa23512";
                                link = "https://docs.figshare.com";
                                status = "frozen";
                                title = "Test title";
                                version = 1L;
                            }};, 891924L);            

            PrivateArticleResourceResponse res = sdk.articles.privateArticleResource(req, new PrivateArticleResourceSecurity("eius") {{
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

## privateArticleUpdate

Updating an article by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleUpdateRequest;
import org.openapis.openapi.models.operations.PrivateArticleUpdateResponse;
import org.openapis.openapi.models.operations.PrivateArticleUpdateSecurity;
import org.openapis.openapi.models.shared.ArticleUpdate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleUpdateRequest req = new PrivateArticleUpdateRequest(                new ArticleUpdate() {{
                                authors = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("facilis", "in");
                                        put("architecto", "architecto");
                                        put("repudiandae", "ullam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("nihil", "repellat");
                                        put("quibusdam", "sed");
                                        put("saepe", "pariatur");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("consequuntur", "praesentium");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("magni", "sunt");
                                        put("quo", "illum");
                                        put("pariatur", "maxime");
                                    }}),
                                }};
                                categories = new Long[]{{
                                    add(569101L),
                                    add(139972L),
                                }};
                                categoriesBySourceId = new String[]{{
                                    add("accusantium"),
                                    add("ab"),
                                }};
                                customFields = new java.util.HashMap<String, Object>() {{
                                    put("quidem", "ipsam");
                                    put("voluptate", "autem");
                                    put("nam", "eaque");
                                    put("pariatur", "nemo");
                                }};
                                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                                    add(new CustomArticleFieldAdd("key", "fugiat") {{
                                        name = "key";
                                        value = "perferendis";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "aut") {{
                                        name = "key";
                                        value = "amet";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "corporis") {{
                                        name = "key";
                                        value = "cumque";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "libero") {{
                                        name = "key";
                                        value = "hic";
                                    }}),
                                }};
                                definedType = "media";
                                description = "Test description of article";
                                doi = "nobis";
                                funding = "dolores";
                                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                                    add(new FundingCreate() {{
                                        id = 521037L;
                                        title = "Ms.";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 54338L;
                                        title = "Mrs.";
                                    }}),
                                }};
                                groupId = 199996L;
                                handle = "eos";
                                isMetadataRecord = true;
                                keywords = new String[]{{
                                    add("dolores"),
                                }};
                                license = 1L;
                                metadataReason = "hosted somewhere else";
                                references = new String[]{{
                                    add("quam"),
                                    add("dolor"),
                                    add("vero"),
                                    add("nostrum"),
                                }};
                                resourceDoi = "hic";
                                resourceTitle = "recusandae";
                                tags = new String[]{{
                                    add("facilis"),
                                    add("perspiciatis"),
                                    add("voluptatem"),
                                }};
                                timeline = new TimelineUpdate() {{
                                    firstOnline = "2015-12-31";
                                    publisherAcceptance = "2015-12-31";
                                    publisherPublication = "2015-12-31";
                                }};;
                                title = "Test article title";
                            }};, 783645L);            

            PrivateArticleUpdateResponse res = sdk.articles.privateArticleUpdate(req, new PrivateArticleUpdateSecurity("consequuntur") {{
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

## privateArticleUploadComplete

Complete file upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleUploadCompleteRequest;
import org.openapis.openapi.models.operations.PrivateArticleUploadCompleteResponse;
import org.openapis.openapi.models.operations.PrivateArticleUploadCompleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleUploadCompleteRequest req = new PrivateArticleUploadCompleteRequest(500026L, 621479L);            

            PrivateArticleUploadCompleteResponse res = sdk.articles.privateArticleUploadComplete(req, new PrivateArticleUploadCompleteSecurity("eaque") {{
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

## privateArticleUploadInitiate

Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticleUploadInitiateRequest;
import org.openapis.openapi.models.operations.PrivateArticleUploadInitiateResponse;
import org.openapis.openapi.models.operations.PrivateArticleUploadInitiateSecurity;
import org.openapis.openapi.models.shared.FileCreator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticleUploadInitiateRequest req = new PrivateArticleUploadInitiateRequest(                new FileCreator() {{
                                link = "http://figshare.com/file.txt";
                                md5 = "6c16e6e7d7587bd078e5117dda01d565";
                                name = "test.py";
                                size = 70L;
                            }};, 577229L);            

            PrivateArticleUploadInitiateResponse res = sdk.articles.privateArticleUploadInitiate(req, new PrivateArticleUploadInitiateSecurity("rerum") {{
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

## privateArticlesList

Get Own Articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlesListRequest;
import org.openapis.openapi.models.operations.PrivateArticlesListResponse;
import org.openapis.openapi.models.operations.PrivateArticlesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateArticlesListRequest req = new PrivateArticlesListRequest() {{
                limit = 237893L;
                offset = 992397L;
                page = 934214L;
                pageSize = 267262L;
            }};            

            PrivateArticlesListResponse res = sdk.articles.privateArticlesList(req, new PrivateArticlesListSecurity("iste") {{
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

## privateArticlesSearch

Returns a list of private articles filtered by the search parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateArticlesSearchResponse;
import org.openapis.openapi.models.operations.PrivateArticlesSearchSecurity;
import org.openapis.openapi.models.shared.PrivateArticleSearch;
import org.openapis.openapi.models.shared.PrivateArticleSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.PrivateArticleSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PrivateArticleSearch req = new PrivateArticleSearch() {{
                doi = "10.6084/m9.figshare.1407024";
                group = 2000013;
                handle = "111084/m9.figshare.14074";
                institution = 2000013;
                itemType = 1L;
                limit = 10L;
                modifiedSince = "2017-12-22";
                offset = 679091L;
                order = PrivateArticleSearchOrderEnum.PUBLISHED_DATE;
                orderDirection = PrivateArticleSearchOrderDirectionEnum.DESC;
                page = 1L;
                pageSize = 10L;
                projectId = 1L;
                publishedSince = "2017-12-22";
                resourceDoi = "10.6084/m9.figshare.1407024";
                resourceId = "1407024";
                searchFor = "figshare";
            }};            

            PrivateArticlesSearchResponse res = sdk.articles.privateArticlesSearch(req, new PrivateArticlesSearchSecurity("deleniti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articleWithProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
