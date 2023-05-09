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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReport(ctx, operations.AccountArticleReportRequest{
        GroupID: sdk.Int64(548814),
    }, operations.AccountArticleReportSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations


### [Articles](docs/articles/README.md)

* [AccountArticleReport](docs/articles/README.md#accountarticlereport) - Account Article Report
* [AccountArticleReportGenerate](docs/articles/README.md#accountarticlereportgenerate) - Initiate a new Report
* [ArticleDetails](docs/articles/README.md#articledetails) - View article details
* [ArticleFileDetails](docs/articles/README.md#articlefiledetails) - Article file details
* [ArticleFiles](docs/articles/README.md#articlefiles) - List article files
* [ArticleVersionConfidentiality](docs/articles/README.md#articleversionconfidentiality) - Public Article Confidentiality for article version
* [ArticleVersionDetails](docs/articles/README.md#articleversiondetails) - Article details for version
* [ArticleVersionEmbargo](docs/articles/README.md#articleversionembargo) - Public Article Embargo for article version
* [ArticleVersionUpdate](docs/articles/README.md#articleversionupdate) - Update article version
* [ArticleVersionUpdateThumb](docs/articles/README.md#articleversionupdatethumb) - Update article version thumbnail
* [ArticleVersions](docs/articles/README.md#articleversions) - List article versions
* [ArticlesList](docs/articles/README.md#articleslist) - Public Articles
* [ArticlesSearch](docs/articles/README.md#articlessearch) - Public Articles Search
* [PrivateArticleAuthorDelete](docs/articles/README.md#privatearticleauthordelete) - Delete article author
* [PrivateArticleAuthorsAdd](docs/articles/README.md#privatearticleauthorsadd) - Add article authors
* [PrivateArticleAuthorsList](docs/articles/README.md#privatearticleauthorslist) - List article authors
* [PrivateArticleAuthorsReplace](docs/articles/README.md#privatearticleauthorsreplace) - Replace article authors
* [PrivateArticleCategoriesAdd](docs/articles/README.md#privatearticlecategoriesadd) - Add article categories
* [PrivateArticleCategoriesList](docs/articles/README.md#privatearticlecategorieslist) - List article categories
* [PrivateArticleCategoriesReplace](docs/articles/README.md#privatearticlecategoriesreplace) - Replace article categories
* [PrivateArticleCategoryDelete](docs/articles/README.md#privatearticlecategorydelete) - Delete article category
* [PrivateArticleConfidentialityDelete](docs/articles/README.md#privatearticleconfidentialitydelete) - Delete article confidentiality
* [PrivateArticleConfidentialityDetails](docs/articles/README.md#privatearticleconfidentialitydetails) - Article confidentiality details
* [PrivateArticleConfidentialityUpdate](docs/articles/README.md#privatearticleconfidentialityupdate) - Update article confidentiality
* [PrivateArticleCreate](docs/articles/README.md#privatearticlecreate) - Create new Article
* [PrivateArticleDelete](docs/articles/README.md#privatearticledelete) - Delete article
* [PrivateArticleDetails](docs/articles/README.md#privatearticledetails) - Article details
* [PrivateArticleEmbargoDelete](docs/articles/README.md#privatearticleembargodelete) - Delete Article Embargo
* [PrivateArticleEmbargoDetails](docs/articles/README.md#privatearticleembargodetails) - Article Embargo Details
* [PrivateArticleEmbargoUpdate](docs/articles/README.md#privatearticleembargoupdate) - Update Article Embargo
* [PrivateArticleFile](docs/articles/README.md#privatearticlefile) - Single File
* [PrivateArticleFileDelete](docs/articles/README.md#privatearticlefiledelete) - File Delete
* [PrivateArticleFilesList](docs/articles/README.md#privatearticlefileslist) - List article files
* [PrivateArticlePrivateLink](docs/articles/README.md#privatearticleprivatelink) - List private links
* [PrivateArticlePrivateLinkCreate](docs/articles/README.md#privatearticleprivatelinkcreate) - Create private link
* [PrivateArticlePrivateLinkDelete](docs/articles/README.md#privatearticleprivatelinkdelete) - Disable private link
* [PrivateArticlePrivateLinkUpdate](docs/articles/README.md#privatearticleprivatelinkupdate) - Update private link
* [PrivateArticlePublish](docs/articles/README.md#privatearticlepublish) - Private Article Publish
* [PrivateArticleReserveDoi](docs/articles/README.md#privatearticlereservedoi) - Private Article Reserve DOI
* [PrivateArticleReserveHandle](docs/articles/README.md#privatearticlereservehandle) - Private Article Reserve Handle
* [PrivateArticleResource](docs/articles/README.md#privatearticleresource) - Private Article Resource
* [PrivateArticleUpdate](docs/articles/README.md#privatearticleupdate) - Update article
* [PrivateArticleUploadComplete](docs/articles/README.md#privatearticleuploadcomplete) - Complete Upload
* [PrivateArticleUploadInitiate](docs/articles/README.md#privatearticleuploadinitiate) - Initiate Upload
* [PrivateArticlesList](docs/articles/README.md#privatearticleslist) - Private Articles
* [PrivateArticlesSearch](docs/articles/README.md#privatearticlessearch) - Private Articles search

### [Authors](docs/authors/README.md)

* [PrivateAuthorDetails](docs/authors/README.md#privateauthordetails) - Author details
* [PrivateAuthorsSearch](docs/authors/README.md#privateauthorssearch) - Search Authors

### [Collections](docs/collections/README.md)

* [CollectionArticles](docs/collections/README.md#collectionarticles) - Public Collection Articles
* [CollectionDetails](docs/collections/README.md#collectiondetails) - Collection details
* [CollectionVersionDetails](docs/collections/README.md#collectionversiondetails) - Collection Version details
* [CollectionVersions](docs/collections/README.md#collectionversions) - Collection Versions list
* [CollectionsList](docs/collections/README.md#collectionslist) - Public Collections
* [CollectionsSearch](docs/collections/README.md#collectionssearch) - Public Collections Search
* [PrivateCollectionArticleDelete](docs/collections/README.md#privatecollectionarticledelete) - Delete collection article
* [PrivateCollectionArticlesAdd](docs/collections/README.md#privatecollectionarticlesadd) - Add collection articles
* [PrivateCollectionArticlesList](docs/collections/README.md#privatecollectionarticleslist) - List collection articles
* [PrivateCollectionArticlesReplace](docs/collections/README.md#privatecollectionarticlesreplace) - Replace collection articles
* [PrivateCollectionAuthorDelete](docs/collections/README.md#privatecollectionauthordelete) - Delete collection author
* [PrivateCollectionAuthorsAdd](docs/collections/README.md#privatecollectionauthorsadd) - Add collection authors
* [PrivateCollectionAuthorsList](docs/collections/README.md#privatecollectionauthorslist) - List collection authors
* [PrivateCollectionAuthorsReplace](docs/collections/README.md#privatecollectionauthorsreplace) - Replace collection authors
* [PrivateCollectionCategoriesAdd](docs/collections/README.md#privatecollectioncategoriesadd) - Add collection categories
* [PrivateCollectionCategoriesList](docs/collections/README.md#privatecollectioncategorieslist) - List collection categories
* [PrivateCollectionCategoriesReplace](docs/collections/README.md#privatecollectioncategoriesreplace) - Replace collection categories
* [PrivateCollectionCategoryDelete](docs/collections/README.md#privatecollectioncategorydelete) - Delete collection category
* [PrivateCollectionCreate](docs/collections/README.md#privatecollectioncreate) - Create collection
* [PrivateCollectionDelete](docs/collections/README.md#privatecollectiondelete) - Delete collection
* [PrivateCollectionDetails](docs/collections/README.md#privatecollectiondetails) - Collection details
* [PrivateCollectionPrivateLinkCreate](docs/collections/README.md#privatecollectionprivatelinkcreate) - Create collection private link
* [PrivateCollectionPrivateLinkDelete](docs/collections/README.md#privatecollectionprivatelinkdelete) - Disable private link
* [PrivateCollectionPrivateLinkUpdate](docs/collections/README.md#privatecollectionprivatelinkupdate) - Update collection private link
* [PrivateCollectionPrivateLinksList](docs/collections/README.md#privatecollectionprivatelinkslist) - List collection private links
* [PrivateCollectionPublish](docs/collections/README.md#privatecollectionpublish) - Private Collection Publish
* [PrivateCollectionReserveDoi](docs/collections/README.md#privatecollectionreservedoi) - Private Collection Reserve DOI
* [PrivateCollectionReserveHandle](docs/collections/README.md#privatecollectionreservehandle) - Private Collection Reserve Handle
* [PrivateCollectionResource](docs/collections/README.md#privatecollectionresource) - Private Collection Resource
* [PrivateCollectionUpdate](docs/collections/README.md#privatecollectionupdate) - Update collection
* [PrivateCollectionsList](docs/collections/README.md#privatecollectionslist) - Private Collections List
* [PrivateCollectionsSearch](docs/collections/README.md#privatecollectionssearch) - Private Collections Search

### [Institutions](docs/institutions/README.md)

* [AccountInstitutionCuration](docs/institutions/README.md#accountinstitutioncuration) - Institution Curation Review
* [AccountInstitutionCurationComments](docs/institutions/README.md#accountinstitutioncurationcomments) - Institution Curation Review Comments
* [AccountInstitutionCurations](docs/institutions/README.md#accountinstitutioncurations) - Institution Curation Reviews
* [CustomFieldsList](docs/institutions/README.md#customfieldslist) - Private account institution group custom fields
* [CustomFieldsUpload](docs/institutions/README.md#customfieldsupload) - Custom fields values files upload
* [InstitutionArticles](docs/institutions/README.md#institutionarticles) - Public Licenses
* [InstitutionHrfeedUpload](docs/institutions/README.md#institutionhrfeedupload) - Private Institution HRfeed Upload
* [PostAccountInstitutionReviewCurationIDComments](docs/institutions/README.md#postaccountinstitutionreviewcurationidcomments) - POST Institution Curation Review Comment
* [PrivateAccountInstitutionUser](docs/institutions/README.md#privateaccountinstitutionuser) - Private Account Institution User
* [PrivateCategoriesList](docs/institutions/README.md#privatecategorieslist) - Private Account Categories
* [PrivateGroupEmbargoOptionsDetails](docs/institutions/README.md#privategroupembargooptionsdetails) - Private Account Institution Group Embargo Options
* [PrivateInstitutionAccountGroupRoleDelete](docs/institutions/README.md#privateinstitutionaccountgrouproledelete) - Delete Institution Account Group Role
* [PrivateInstitutionAccountGroupRoles](docs/institutions/README.md#privateinstitutionaccountgrouproles) - List Institution Account Group Roles
* [PrivateInstitutionAccountGroupRolesCreate](docs/institutions/README.md#privateinstitutionaccountgrouprolescreate) - Add Institution Account Group Roles
* [PrivateInstitutionAccountsCreate](docs/institutions/README.md#privateinstitutionaccountscreate) - Create new Institution Account
* [PrivateInstitutionAccountsList](docs/institutions/README.md#privateinstitutionaccountslist) - Private Account Institution Accounts
* [PrivateInstitutionAccountsSearch](docs/institutions/README.md#privateinstitutionaccountssearch) - Private Account Institution Accounts Search
* [PrivateInstitutionAccountsUpdate](docs/institutions/README.md#privateinstitutionaccountsupdate) - Update Institution Account
* [PrivateInstitutionArticles](docs/institutions/README.md#privateinstitutionarticles) - Private Institution Articles
* [PrivateInstitutionDetails](docs/institutions/README.md#privateinstitutiondetails) - Private Account Institutions
* [PrivateInstitutionEmbargoOptionsDetails](docs/institutions/README.md#privateinstitutionembargooptionsdetails) - Private Account Institution embargo options
* [PrivateInstitutionGroupsList](docs/institutions/README.md#privateinstitutiongroupslist) - Private Account Institution Groups
* [PrivateInstitutionRolesList](docs/institutions/README.md#privateinstitutionroleslist) - Private Account Institution Roles

### [Other](docs/other/README.md)

* [CategoriesList](docs/other/README.md#categorieslist) - Public Categories
* [FileDownload](docs/other/README.md#filedownload) - Public File Download
* [ItemTypesList](docs/other/README.md#itemtypeslist) - Item Types
* [LicensesList](docs/other/README.md#licenseslist) - Public Licenses
* [PrivateAccount](docs/other/README.md#privateaccount) - Private Account information
* [PrivateFundingSearch](docs/other/README.md#privatefundingsearch) - Search Funding
* [PrivateLicensesList](docs/other/README.md#privatelicenseslist) - Private Account Licenses

### [Projects](docs/projects/README.md)

* [PrivateProjectArticleDelete](docs/projects/README.md#privateprojectarticledelete) - Delete project article
* [PrivateProjectArticleDetails](docs/projects/README.md#privateprojectarticledetails) - Project article details
* [PrivateProjectArticleFile](docs/projects/README.md#privateprojectarticlefile) - Project article file details
* [PrivateProjectArticleFiles](docs/projects/README.md#privateprojectarticlefiles) - Project article list files
* [PrivateProjectArticlesCreate](docs/projects/README.md#privateprojectarticlescreate) - Create project article
* [PrivateProjectArticlesList](docs/projects/README.md#privateprojectarticleslist) - List project articles
* [PrivateProjectCollaboratorDelete](docs/projects/README.md#privateprojectcollaboratordelete) - Remove project collaborator
* [PrivateProjectCollaboratorsInvite](docs/projects/README.md#privateprojectcollaboratorsinvite) - Invite project collaborators
* [PrivateProjectCollaboratorsList](docs/projects/README.md#privateprojectcollaboratorslist) - List project collaborators
* [PrivateProjectCreate](docs/projects/README.md#privateprojectcreate) - Create project
* [PrivateProjectDelete](docs/projects/README.md#privateprojectdelete) - Delete project
* [PrivateProjectDetails](docs/projects/README.md#privateprojectdetails) - View project details
* [PrivateProjectLeave](docs/projects/README.md#privateprojectleave) - Private Project Leave
* [PrivateProjectNote](docs/projects/README.md#privateprojectnote) - Project note details
* [PrivateProjectNoteDelete](docs/projects/README.md#privateprojectnotedelete) - Delete project note
* [PrivateProjectNoteUpdate](docs/projects/README.md#privateprojectnoteupdate) - Update project note
* [PrivateProjectNotesCreate](docs/projects/README.md#privateprojectnotescreate) - Create project note
* [PrivateProjectNotesList](docs/projects/README.md#privateprojectnoteslist) - List project notes
* [PrivateProjectPublish](docs/projects/README.md#privateprojectpublish) - Private Project Publish
* [PrivateProjectUpdate](docs/projects/README.md#privateprojectupdate) - Update project
* [PrivateProjectsList](docs/projects/README.md#privateprojectslist) - Private Projects
* [PrivateProjectsSearch](docs/projects/README.md#privateprojectssearch) - Private Projects search
* [ProjectArticles](docs/projects/README.md#projectarticles) - Public Project Articles
* [ProjectDetails](docs/projects/README.md#projectdetails) - Public Project
* [ProjectsList](docs/projects/README.md#projectslist) - Public Projects
* [ProjectsSearch](docs/projects/README.md#projectssearch) - Public Projects Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
