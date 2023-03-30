# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/figshare.com/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AccountArticleReportRequest{
        Security: operations.AccountArticleReportSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AccountArticleReportQueryParams{
            GroupID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReports != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Articles

* `AccountArticleReport` - Account Article Report
* `AccountArticleReportGenerate` - Initiate a new Report
* `ArticleDetails` - View article details
* `ArticleFileDetails` - Article file details
* `ArticleFiles` - List article files
* `ArticleVersionConfidentiality` - Public Article Confidentiality for article version
* `ArticleVersionDetails` - Article details for version
* `ArticleVersionEmbargo` - Public Article Embargo for article version
* `ArticleVersionUpdate` - Update article version
* `ArticleVersionUpdateThumb` - Update article version thumbnail
* `ArticleVersions` - List article versions
* `ArticlesList` - Public Articles
* `ArticlesSearch` - Public Articles Search
* `PrivateArticleAuthorDelete` - Delete article author
* `PrivateArticleAuthorsAdd` - Add article authors
* `PrivateArticleAuthorsList` - List article authors
* `PrivateArticleAuthorsReplace` - Replace article authors
* `PrivateArticleCategoriesAdd` - Add article categories
* `PrivateArticleCategoriesList` - List article categories
* `PrivateArticleCategoriesReplace` - Replace article categories
* `PrivateArticleCategoryDelete` - Delete article category
* `PrivateArticleConfidentialityDelete` - Delete article confidentiality
* `PrivateArticleConfidentialityDetails` - Article confidentiality details
* `PrivateArticleConfidentialityUpdate` - Update article confidentiality
* `PrivateArticleCreate` - Create new Article
* `PrivateArticleDelete` - Delete article
* `PrivateArticleDetails` - Article details
* `PrivateArticleEmbargoDelete` - Delete Article Embargo
* `PrivateArticleEmbargoDetails` - Article Embargo Details
* `PrivateArticleEmbargoUpdate` - Update Article Embargo
* `PrivateArticleFile` - Single File
* `PrivateArticleFileDelete` - File Delete
* `PrivateArticleFilesList` - List article files
* `PrivateArticlePrivateLink` - List private links
* `PrivateArticlePrivateLinkCreate` - Create private link
* `PrivateArticlePrivateLinkDelete` - Disable private link
* `PrivateArticlePrivateLinkUpdate` - Update private link
* `PrivateArticlePublish` - Private Article Publish
* `PrivateArticleReserveDoi` - Private Article Reserve DOI
* `PrivateArticleReserveHandle` - Private Article Reserve Handle
* `PrivateArticleResource` - Private Article Resource
* `PrivateArticleUpdate` - Update article
* `PrivateArticleUploadComplete` - Complete Upload
* `PrivateArticleUploadInitiate` - Initiate Upload
* `PrivateArticlesList` - Private Articles
* `PrivateArticlesSearch` - Private Articles search

### Authors

* `PrivateAuthorDetails` - Author details
* `PrivateAuthorsSearch` - Search Authors

### Collections

* `CollectionArticles` - Public Collection Articles
* `CollectionDetails` - Collection details
* `CollectionVersionDetails` - Collection Version details
* `CollectionVersions` - Collection Versions list
* `CollectionsList` - Public Collections
* `CollectionsSearch` - Public Collections Search
* `PrivateCollectionArticleDelete` - Delete collection article
* `PrivateCollectionArticlesAdd` - Add collection articles
* `PrivateCollectionArticlesList` - List collection articles
* `PrivateCollectionArticlesReplace` - Replace collection articles
* `PrivateCollectionAuthorDelete` - Delete collection author
* `PrivateCollectionAuthorsAdd` - Add collection authors
* `PrivateCollectionAuthorsList` - List collection authors
* `PrivateCollectionAuthorsReplace` - Replace collection authors
* `PrivateCollectionCategoriesAdd` - Add collection categories
* `PrivateCollectionCategoriesList` - List collection categories
* `PrivateCollectionCategoriesReplace` - Replace collection categories
* `PrivateCollectionCategoryDelete` - Delete collection category
* `PrivateCollectionCreate` - Create collection
* `PrivateCollectionDelete` - Delete collection
* `PrivateCollectionDetails` - Collection details
* `PrivateCollectionPrivateLinkCreate` - Create collection private link
* `PrivateCollectionPrivateLinkDelete` - Disable private link
* `PrivateCollectionPrivateLinkUpdate` - Update collection private link
* `PrivateCollectionPrivateLinksList` - List collection private links
* `PrivateCollectionPublish` - Private Collection Publish
* `PrivateCollectionReserveDoi` - Private Collection Reserve DOI
* `PrivateCollectionReserveHandle` - Private Collection Reserve Handle
* `PrivateCollectionResource` - Private Collection Resource
* `PrivateCollectionUpdate` - Update collection
* `PrivateCollectionsList` - Private Collections List
* `PrivateCollectionsSearch` - Private Collections Search

### Institutions

* `AccountInstitutionCuration` - Institution Curation Review
* `AccountInstitutionCurationComments` - Institution Curation Review Comments
* `AccountInstitutionCurations` - Institution Curation Reviews
* `CustomFieldsList` - Private account institution group custom fields
* `CustomFieldsUpload` - Custom fields values files upload
* `InstitutionArticles` - Public Licenses
* `InstitutionHrfeedUpload` - Private Institution HRfeed Upload
* `PostAccountInstitutionReviewCurationIDComments` - POST Institution Curation Review Comment
* `PrivateAccountInstitutionUser` - Private Account Institution User
* `PrivateCategoriesList` - Private Account Categories
* `PrivateGroupEmbargoOptionsDetails` - Private Account Institution Group Embargo Options
* `PrivateInstitutionAccountGroupRoleDelete` - Delete Institution Account Group Role
* `PrivateInstitutionAccountGroupRoles` - List Institution Account Group Roles
* `PrivateInstitutionAccountGroupRolesCreate` - Add Institution Account Group Roles
* `PrivateInstitutionAccountsCreate` - Create new Institution Account
* `PrivateInstitutionAccountsList` - Private Account Institution Accounts
* `PrivateInstitutionAccountsSearch` - Private Account Institution Accounts Search
* `PrivateInstitutionAccountsUpdate` - Update Institution Account
* `PrivateInstitutionArticles` - Private Institution Articles
* `PrivateInstitutionDetails` - Private Account Institutions
* `PrivateInstitutionEmbargoOptionsDetails` - Private Account Institution embargo options
* `PrivateInstitutionGroupsList` - Private Account Institution Groups
* `PrivateInstitutionRolesList` - Private Account Institution Roles

### Other

* `CategoriesList` - Public Categories
* `FileDownload` - Public File Download
* `ItemTypesList` - Item Types
* `LicensesList` - Public Licenses
* `PrivateAccount` - Private Account information
* `PrivateFundingSearch` - Search Funding
* `PrivateLicensesList` - Private Account Licenses

### Projects

* `PrivateProjectArticleDelete` - Delete project article
* `PrivateProjectArticleDetails` - Project article details
* `PrivateProjectArticleFile` - Project article file details
* `PrivateProjectArticleFiles` - Project article list files
* `PrivateProjectArticlesCreate` - Create project article
* `PrivateProjectArticlesList` - List project articles
* `PrivateProjectCollaboratorDelete` - Remove project collaborator
* `PrivateProjectCollaboratorsInvite` - Invite project collaborators
* `PrivateProjectCollaboratorsList` - List project collaborators
* `PrivateProjectCreate` - Create project
* `PrivateProjectDelete` - Delete project
* `PrivateProjectDetails` - View project details
* `PrivateProjectLeave` - Private Project Leave
* `PrivateProjectNote` - Project note details
* `PrivateProjectNoteDelete` - Delete project note
* `PrivateProjectNoteUpdate` - Update project note
* `PrivateProjectNotesCreate` - Create project note
* `PrivateProjectNotesList` - List project notes
* `PrivateProjectPublish` - Private Project Publish
* `PrivateProjectUpdate` - Update project
* `PrivateProjectsList` - Private Projects
* `PrivateProjectsSearch` - Private Projects search
* `ProjectArticles` - Public Project Articles
* `ProjectDetails` - Public Project
* `ProjectsList` - Public Projects
* `ProjectsSearch` - Public Projects Search
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
