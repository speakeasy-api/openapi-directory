# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### articles

* `accountArticleReport` - Account Article Report
* `accountArticleReportGenerate` - Initiate a new Report
* `articleDetails` - View article details
* `articleFileDetails` - Article file details
* `articleFiles` - List article files
* `articleVersionConfidentiality` - Public Article Confidentiality for article version
* `articleVersionDetails` - Article details for version
* `articleVersionEmbargo` - Public Article Embargo for article version
* `articleVersionUpdate` - Update article version
* `articleVersionUpdateThumb` - Update article version thumbnail
* `articleVersions` - List article versions
* `articlesList` - Public Articles
* `articlesSearch` - Public Articles Search
* `privateArticleAuthorDelete` - Delete article author
* `privateArticleAuthorsAdd` - Add article authors
* `privateArticleAuthorsList` - List article authors
* `privateArticleAuthorsReplace` - Replace article authors
* `privateArticleCategoriesAdd` - Add article categories
* `privateArticleCategoriesList` - List article categories
* `privateArticleCategoriesReplace` - Replace article categories
* `privateArticleCategoryDelete` - Delete article category
* `privateArticleConfidentialityDelete` - Delete article confidentiality
* `privateArticleConfidentialityDetails` - Article confidentiality details
* `privateArticleConfidentialityUpdate` - Update article confidentiality
* `privateArticleCreate` - Create new Article
* `privateArticleDelete` - Delete article
* `privateArticleDetails` - Article details
* `privateArticleEmbargoDelete` - Delete Article Embargo
* `privateArticleEmbargoDetails` - Article Embargo Details
* `privateArticleEmbargoUpdate` - Update Article Embargo
* `privateArticleFile` - Single File
* `privateArticleFileDelete` - File Delete
* `privateArticleFilesList` - List article files
* `privateArticlePrivateLink` - List private links
* `privateArticlePrivateLinkCreate` - Create private link
* `privateArticlePrivateLinkDelete` - Disable private link
* `privateArticlePrivateLinkUpdate` - Update private link
* `privateArticlePublish` - Private Article Publish
* `privateArticleReserveDoi` - Private Article Reserve DOI
* `privateArticleReserveHandle` - Private Article Reserve Handle
* `privateArticleResource` - Private Article Resource
* `privateArticleUpdate` - Update article
* `privateArticleUploadComplete` - Complete Upload
* `privateArticleUploadInitiate` - Initiate Upload
* `privateArticlesList` - Private Articles
* `privateArticlesSearch` - Private Articles search

### authors

* `privateAuthorDetails` - Author details
* `privateAuthorsSearch` - Search Authors

### collections

* `collectionArticles` - Public Collection Articles
* `collectionDetails` - Collection details
* `collectionVersionDetails` - Collection Version details
* `collectionVersions` - Collection Versions list
* `collectionsList` - Public Collections
* `collectionsSearch` - Public Collections Search
* `privateCollectionArticleDelete` - Delete collection article
* `privateCollectionArticlesAdd` - Add collection articles
* `privateCollectionArticlesList` - List collection articles
* `privateCollectionArticlesReplace` - Replace collection articles
* `privateCollectionAuthorDelete` - Delete collection author
* `privateCollectionAuthorsAdd` - Add collection authors
* `privateCollectionAuthorsList` - List collection authors
* `privateCollectionAuthorsReplace` - Replace collection authors
* `privateCollectionCategoriesAdd` - Add collection categories
* `privateCollectionCategoriesList` - List collection categories
* `privateCollectionCategoriesReplace` - Replace collection categories
* `privateCollectionCategoryDelete` - Delete collection category
* `privateCollectionCreate` - Create collection
* `privateCollectionDelete` - Delete collection
* `privateCollectionDetails` - Collection details
* `privateCollectionPrivateLinkCreate` - Create collection private link
* `privateCollectionPrivateLinkDelete` - Disable private link
* `privateCollectionPrivateLinkUpdate` - Update collection private link
* `privateCollectionPrivateLinksList` - List collection private links
* `privateCollectionPublish` - Private Collection Publish
* `privateCollectionReserveDoi` - Private Collection Reserve DOI
* `privateCollectionReserveHandle` - Private Collection Reserve Handle
* `privateCollectionResource` - Private Collection Resource
* `privateCollectionUpdate` - Update collection
* `privateCollectionsList` - Private Collections List
* `privateCollectionsSearch` - Private Collections Search

### institutions

* `accountInstitutionCuration` - Institution Curation Review
* `accountInstitutionCurationComments` - Institution Curation Review Comments
* `accountInstitutionCurations` - Institution Curation Reviews
* `customFieldsList` - Private account institution group custom fields
* `customFieldsUpload` - Custom fields values files upload
* `institutionArticles` - Public Licenses
* `institutionHrfeedUpload` - Private Institution HRfeed Upload
* `postAccountInstitutionReviewCurationIdComments` - POST Institution Curation Review Comment
* `privateAccountInstitutionUser` - Private Account Institution User
* `privateCategoriesList` - Private Account Categories
* `privateGroupEmbargoOptionsDetails` - Private Account Institution Group Embargo Options
* `privateInstitutionAccountGroupRoleDelete` - Delete Institution Account Group Role
* `privateInstitutionAccountGroupRoles` - List Institution Account Group Roles
* `privateInstitutionAccountGroupRolesCreate` - Add Institution Account Group Roles
* `privateInstitutionAccountsCreate` - Create new Institution Account
* `privateInstitutionAccountsList` - Private Account Institution Accounts
* `privateInstitutionAccountsSearch` - Private Account Institution Accounts Search
* `privateInstitutionAccountsUpdate` - Update Institution Account
* `privateInstitutionArticles` - Private Institution Articles
* `privateInstitutionDetails` - Private Account Institutions
* `privateInstitutionEmbargoOptionsDetails` - Private Account Institution embargo options
* `privateInstitutionGroupsList` - Private Account Institution Groups
* `privateInstitutionRolesList` - Private Account Institution Roles

### other

* `categoriesList` - Public Categories
* `fileDownload` - Public File Download
* `itemTypesList` - Item Types
* `licensesList` - Public Licenses
* `privateAccount` - Private Account information
* `privateFundingSearch` - Search Funding
* `privateLicensesList` - Private Account Licenses

### projects

* `privateProjectArticleDelete` - Delete project article
* `privateProjectArticleDetails` - Project article details
* `privateProjectArticleFile` - Project article file details
* `privateProjectArticleFiles` - Project article list files
* `privateProjectArticlesCreate` - Create project article
* `privateProjectArticlesList` - List project articles
* `privateProjectCollaboratorDelete` - Remove project collaborator
* `privateProjectCollaboratorsInvite` - Invite project collaborators
* `privateProjectCollaboratorsList` - List project collaborators
* `privateProjectCreate` - Create project
* `privateProjectDelete` - Delete project
* `privateProjectDetails` - View project details
* `privateProjectLeave` - Private Project Leave
* `privateProjectNote` - Project note details
* `privateProjectNoteDelete` - Delete project note
* `privateProjectNoteUpdate` - Update project note
* `privateProjectNotesCreate` - Create project note
* `privateProjectNotesList` - List project notes
* `privateProjectPublish` - Private Project Publish
* `privateProjectUpdate` - Update project
* `privateProjectsList` - Private Projects
* `privateProjectsSearch` - Private Projects search
* `projectArticles` - Public Project Articles
* `projectDetails` - Public Project
* `projectsList` - Public Projects
* `projectsSearch` - Public Projects Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
