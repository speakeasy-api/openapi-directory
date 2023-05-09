# institutions

### Available Operations

* [accountInstitutionCuration](#accountinstitutioncuration) - Institution Curation Review
* [accountInstitutionCurationComments](#accountinstitutioncurationcomments) - Institution Curation Review Comments
* [accountInstitutionCurations](#accountinstitutioncurations) - Institution Curation Reviews
* [customFieldsList](#customfieldslist) - Private account institution group custom fields
* [customFieldsUpload](#customfieldsupload) - Custom fields values files upload
* [institutionArticles](#institutionarticles) - Public Licenses
* [institutionHrfeedUpload](#institutionhrfeedupload) - Private Institution HRfeed Upload
* [postAccountInstitutionReviewCurationIdComments](#postaccountinstitutionreviewcurationidcomments) - POST Institution Curation Review Comment
* [privateAccountInstitutionUser](#privateaccountinstitutionuser) - Private Account Institution User
* [privateCategoriesList](#privatecategorieslist) - Private Account Categories
* [privateGroupEmbargoOptionsDetails](#privategroupembargooptionsdetails) - Private Account Institution Group Embargo Options
* [privateInstitutionAccountGroupRoleDelete](#privateinstitutionaccountgrouproledelete) - Delete Institution Account Group Role
* [privateInstitutionAccountGroupRoles](#privateinstitutionaccountgrouproles) - List Institution Account Group Roles
* [privateInstitutionAccountGroupRolesCreate](#privateinstitutionaccountgrouprolescreate) - Add Institution Account Group Roles
* [privateInstitutionAccountsCreate](#privateinstitutionaccountscreate) - Create new Institution Account
* [privateInstitutionAccountsList](#privateinstitutionaccountslist) - Private Account Institution Accounts
* [privateInstitutionAccountsSearch](#privateinstitutionaccountssearch) - Private Account Institution Accounts Search
* [privateInstitutionAccountsUpdate](#privateinstitutionaccountsupdate) - Update Institution Account
* [privateInstitutionArticles](#privateinstitutionarticles) - Private Institution Articles
* [privateInstitutionDetails](#privateinstitutiondetails) - Private Account Institutions
* [privateInstitutionEmbargoOptionsDetails](#privateinstitutionembargooptionsdetails) - Private Account Institution embargo options
* [privateInstitutionGroupsList](#privateinstitutiongroupslist) - Private Account Institution Groups
* [privateInstitutionRolesList](#privateinstitutionroleslist) - Private Account Institution Roles

## accountInstitutionCuration

Retrieve a certain curation review by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountInstitutionCurationRequest;
import org.openapis.openapi.models.operations.AccountInstitutionCurationResponse;
import org.openapis.openapi.models.operations.AccountInstitutionCurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountInstitutionCurationRequest req = new AccountInstitutionCurationRequest(143829L);            

            AccountInstitutionCurationResponse res = sdk.institutions.accountInstitutionCuration(req, new AccountInstitutionCurationSecurity("fuga") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.curationDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountInstitutionCurationComments

Retrieve a certain curation review's comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountInstitutionCurationCommentsRequest;
import org.openapis.openapi.models.operations.AccountInstitutionCurationCommentsResponse;
import org.openapis.openapi.models.operations.AccountInstitutionCurationCommentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountInstitutionCurationCommentsRequest req = new AccountInstitutionCurationCommentsRequest(649463L) {{
                limit = 277596L;
                offset = 539224L;
            }};            

            AccountInstitutionCurationCommentsResponse res = sdk.institutions.accountInstitutionCurationComments(req, new AccountInstitutionCurationCommentsSecurity("explicabo") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.curationComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountInstitutionCurations

Retrieve a list of curation reviews for this institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountInstitutionCurationsRequest;
import org.openapis.openapi.models.operations.AccountInstitutionCurationsResponse;
import org.openapis.openapi.models.operations.AccountInstitutionCurationsSecurity;
import org.openapis.openapi.models.operations.AccountInstitutionCurationsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountInstitutionCurationsRequest req = new AccountInstitutionCurationsRequest() {{
                articleId = 325685L;
                groupId = 392676L;
                limit = 147014L;
                offset = 956406L;
                status = AccountInstitutionCurationsStatusEnum.PENDING;
            }};            

            AccountInstitutionCurationsResponse res = sdk.institutions.accountInstitutionCurations(req, new AccountInstitutionCurationsSecurity("ratione") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.curation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customFieldsList

Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomFieldsListRequest;
import org.openapis.openapi.models.operations.CustomFieldsListResponse;
import org.openapis.openapi.models.operations.CustomFieldsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomFieldsListRequest req = new CustomFieldsListRequest() {{
                groupId = 129412L;
            }};            

            CustomFieldsListResponse res = sdk.institutions.customFieldsList(req, new CustomFieldsListSecurity("saepe") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shortCustomFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customFieldsUpload

Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomFieldsUploadRequest;
import org.openapis.openapi.models.operations.CustomFieldsUploadRequestBody;
import org.openapis.openapi.models.operations.CustomFieldsUploadRequestBodyExternalFile;
import org.openapis.openapi.models.operations.CustomFieldsUploadResponse;
import org.openapis.openapi.models.operations.CustomFieldsUploadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomFieldsUploadRequest req = new CustomFieldsUploadRequest(578922L) {{
                requestBody = new CustomFieldsUploadRequestBody() {{
                    externalFile = new CustomFieldsUploadRequestBodyExternalFile("atque".getBytes(), "et");;
                }};;
            }};            

            CustomFieldsUploadResponse res = sdk.institutions.customFieldsUpload(req, new CustomFieldsUploadSecurity("esse") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customFieldsUpload200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionArticles

Returns a list of articles belonging to the institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionArticlesRequest;
import org.openapis.openapi.models.operations.InstitutionArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionArticlesRequest req = new InstitutionArticlesRequest("eveniet", "accusamus", "veritatis");            

            InstitutionArticlesResponse res = sdk.institutions.institutionArticles(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionHrfeedUpload

More info in the <a href="#hr_feed">HR Feed section</a>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionHrfeedUploadRequestBody;
import org.openapis.openapi.models.operations.InstitutionHrfeedUploadRequestBodyHrfeed;
import org.openapis.openapi.models.operations.InstitutionHrfeedUploadResponse;
import org.openapis.openapi.models.operations.InstitutionHrfeedUploadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionHrfeedUploadRequestBody req = new InstitutionHrfeedUploadRequestBody() {{
                hrfeed = new InstitutionHrfeedUploadRequestBodyHrfeed("esse".getBytes(), "quod");;
            }};            

            InstitutionHrfeedUploadResponse res = sdk.institutions.institutionHrfeedUpload(req, new InstitutionHrfeedUploadSecurity("nam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.responseMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountInstitutionReviewCurationIdComments

Add a new comment to the review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountInstitutionReviewCurationIdCommentsRequest;
import org.openapis.openapi.models.operations.PostAccountInstitutionReviewCurationIdCommentsResponse;
import org.openapis.openapi.models.operations.PostAccountInstitutionReviewCurationIdCommentsSecurity;
import org.openapis.openapi.models.shared.CurationCommentCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAccountInstitutionReviewCurationIdCommentsRequest req = new PostAccountInstitutionReviewCurationIdCommentsRequest(                new CurationCommentCreate("vero");, 399025L);            

            PostAccountInstitutionReviewCurationIdCommentsResponse res = sdk.institutions.postAccountInstitutionReviewCurationIdComments(req, new PostAccountInstitutionReviewCurationIdCommentsSecurity("quasi") {{
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

## privateAccountInstitutionUser

Retrieve institution user information using the account_id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateAccountInstitutionUserRequest;
import org.openapis.openapi.models.operations.PrivateAccountInstitutionUserResponse;
import org.openapis.openapi.models.operations.PrivateAccountInstitutionUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateAccountInstitutionUserRequest req = new PrivateAccountInstitutionUserRequest(904045L);            

            PrivateAccountInstitutionUserResponse res = sdk.institutions.privateAccountInstitutionUser(req, new PrivateAccountInstitutionUserSecurity("vel") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateCategoriesList

List institution categories (including parent Categories)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateCategoriesListResponse;
import org.openapis.openapi.models.operations.PrivateCategoriesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateCategoriesListResponse res = sdk.institutions.privateCategoriesList(new PrivateCategoriesListSecurity("harum") {{
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

## privateGroupEmbargoOptionsDetails

Account institution group embargo options details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateGroupEmbargoOptionsDetailsRequest;
import org.openapis.openapi.models.operations.PrivateGroupEmbargoOptionsDetailsResponse;
import org.openapis.openapi.models.operations.PrivateGroupEmbargoOptionsDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateGroupEmbargoOptionsDetailsRequest req = new PrivateGroupEmbargoOptionsDetailsRequest(473221L);            

            PrivateGroupEmbargoOptionsDetailsResponse res = sdk.institutions.privateGroupEmbargoOptionsDetails(req, new PrivateGroupEmbargoOptionsDetailsSecurity("rerum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupEmbargoOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionAccountGroupRoleDelete

Delete Institution Account Group Role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRoleDeleteRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRoleDeleteResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRoleDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionAccountGroupRoleDeleteRequest req = new PrivateInstitutionAccountGroupRoleDeleteRequest(580197L, 327720L, 716244L);            

            PrivateInstitutionAccountGroupRoleDeleteResponse res = sdk.institutions.privateInstitutionAccountGroupRoleDelete(req, new PrivateInstitutionAccountGroupRoleDeleteSecurity("eligendi") {{
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

## privateInstitutionAccountGroupRoles

List Institution Account Group Roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionAccountGroupRolesRequest req = new PrivateInstitutionAccountGroupRolesRequest(27069L);            

            PrivateInstitutionAccountGroupRolesResponse res = sdk.institutions.privateInstitutionAccountGroupRoles(req, new PrivateInstitutionAccountGroupRolesSecurity("culpa") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountGroupRoles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionAccountGroupRolesCreate

Add Institution Account Group Roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesCreateRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesCreateResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountGroupRolesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionAccountGroupRolesCreateRequest req = new PrivateInstitutionAccountGroupRolesCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("adipisci", "cumque");
                                put("consequuntur", "consequatur");
                                put("minus", "quaerat");
                            }}, 959167L);            

            PrivateInstitutionAccountGroupRolesCreateResponse res = sdk.institutions.privateInstitutionAccountGroupRolesCreate(req, new PrivateInstitutionAccountGroupRolesCreateSecurity("consectetur") {{
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

## privateInstitutionAccountsCreate

Create a new Account by sending account information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsCreateResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsCreateSecurity;
import org.openapis.openapi.models.shared.AccountCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccountCreate req = new AccountCreate("johndoe@example.com", "John") {{
                groupId = 458139L;
                institutionUserId = "johndoe";
                isActive = false;
                lastName = "Doe";
                quota = 1000L;
                symplecticUserId = "johndoe";
            }};            

            PrivateInstitutionAccountsCreateResponse res = sdk.institutions.privateInstitutionAccountsCreate(req, new PrivateInstitutionAccountsCreateSecurity("blanditiis") {{
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

## privateInstitutionAccountsList

Returns the accounts for which the account has administrative privileges (assigned and inherited).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsListRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsListResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionAccountsListRequest req = new PrivateInstitutionAccountsListRequest() {{
                email = "Vella.Stiedemann@yahoo.com";
                idGte = 97468L;
                idLte = 951875L;
                institutionUserId = "error";
                isActive = 575751L;
                limit = 863023L;
                offset = 820767L;
                page = 157632L;
                pageSize = 908844L;
            }};            

            PrivateInstitutionAccountsListResponse res = sdk.institutions.privateInstitutionAccountsList(req, new PrivateInstitutionAccountsListSecurity("asperiores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shortAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionAccountsSearch

Returns the accounts for which the account has administrative privileges (assigned and inherited).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsSearchResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsSearchSecurity;
import org.openapis.openapi.models.shared.InstitutionAccountsSearch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.InstitutionAccountsSearch req = new InstitutionAccountsSearch() {{
                email = "alan@institution.com";
                institutionUserId = "alan";
                isActive = 815524L;
                limit = 10L;
                offset = 85001L;
                page = 1L;
                pageSize = 10L;
                searchFor = "figshare";
            }};            

            PrivateInstitutionAccountsSearchResponse res = sdk.institutions.privateInstitutionAccountsSearch(req, new PrivateInstitutionAccountsSearchSecurity("consequuntur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shortAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionAccountsUpdate

Update Institution Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsUpdateRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsUpdateResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.AccountUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionAccountsUpdateRequest req = new PrivateInstitutionAccountsUpdateRequest(                new AccountUpdate(94458L, false);, 628899L);            

            PrivateInstitutionAccountsUpdateResponse res = sdk.institutions.privateInstitutionAccountsUpdate(req, new PrivateInstitutionAccountsUpdateSecurity("culpa") {{
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

## privateInstitutionArticles

Get Articles from own institution. User must be administrator of the institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionArticlesOrderDirectionEnum;
import org.openapis.openapi.models.operations.PrivateInstitutionArticlesOrderEnum;
import org.openapis.openapi.models.operations.PrivateInstitutionArticlesRequest;
import org.openapis.openapi.models.operations.PrivateInstitutionArticlesResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionArticlesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionArticlesRequest req = new PrivateInstitutionArticlesRequest() {{
                itemType = 398434L;
                limit = 949298L;
                modifiedSince = "quae";
                offset = 936747L;
                order = PrivateInstitutionArticlesOrderEnum.VIEWS;
                orderDirection = PrivateInstitutionArticlesOrderDirectionEnum.ASC;
                page = 258684L;
                pageSize = 727697L;
                publishedSince = "illum";
                resourceDoi = "soluta";
                status = 33304L;
            }};            

            PrivateInstitutionArticlesResponse res = sdk.institutions.privateInstitutionArticles(req, new PrivateInstitutionArticlesSecurity("aliquam") {{
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

## privateInstitutionDetails

Account institution details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionDetailsResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionDetailsResponse res = sdk.institutions.privateInstitutionDetails(new PrivateInstitutionDetailsSecurity("sapiente") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.institution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionEmbargoOptionsDetails

Account institution embargo options details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionEmbargoOptionsDetailsResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionEmbargoOptionsDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionEmbargoOptionsDetailsResponse res = sdk.institutions.privateInstitutionEmbargoOptionsDetails(new PrivateInstitutionEmbargoOptionsDetailsSecurity("dicta") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupEmbargoOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionGroupsList

Returns the groups for which the account has administrative privileges (assigned and inherited).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionGroupsListResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionGroupsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionGroupsListResponse res = sdk.institutions.privateInstitutionGroupsList(new PrivateInstitutionGroupsListSecurity("ullam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateInstitutionRolesList

Returns the roles available for groups and the institution group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateInstitutionRolesListResponse;
import org.openapis.openapi.models.operations.PrivateInstitutionRolesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateInstitutionRolesListResponse res = sdk.institutions.privateInstitutionRolesList(new PrivateInstitutionRolesListSecurity("reprehenderit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.roles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
