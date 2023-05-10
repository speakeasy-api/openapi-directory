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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountArticleReportRequest();
    $request->groupId = 548814;

    $requestSecurity = new AccountArticleReportSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->accountArticleReport($request, $requestSecurity);

    if ($response->accountReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [articles](docs/articles/README.md)

* [accountArticleReport](docs/articles/README.md#accountarticlereport) - Account Article Report
* [accountArticleReportGenerate](docs/articles/README.md#accountarticlereportgenerate) - Initiate a new Report
* [articleDetails](docs/articles/README.md#articledetails) - View article details
* [articleFileDetails](docs/articles/README.md#articlefiledetails) - Article file details
* [articleFiles](docs/articles/README.md#articlefiles) - List article files
* [articleVersionConfidentiality](docs/articles/README.md#articleversionconfidentiality) - Public Article Confidentiality for article version
* [articleVersionDetails](docs/articles/README.md#articleversiondetails) - Article details for version
* [articleVersionEmbargo](docs/articles/README.md#articleversionembargo) - Public Article Embargo for article version
* [articleVersionUpdate](docs/articles/README.md#articleversionupdate) - Update article version
* [articleVersionUpdateThumb](docs/articles/README.md#articleversionupdatethumb) - Update article version thumbnail
* [articleVersions](docs/articles/README.md#articleversions) - List article versions
* [articlesList](docs/articles/README.md#articleslist) - Public Articles
* [articlesSearch](docs/articles/README.md#articlessearch) - Public Articles Search
* [privateArticleAuthorDelete](docs/articles/README.md#privatearticleauthordelete) - Delete article author
* [privateArticleAuthorsAdd](docs/articles/README.md#privatearticleauthorsadd) - Add article authors
* [privateArticleAuthorsList](docs/articles/README.md#privatearticleauthorslist) - List article authors
* [privateArticleAuthorsReplace](docs/articles/README.md#privatearticleauthorsreplace) - Replace article authors
* [privateArticleCategoriesAdd](docs/articles/README.md#privatearticlecategoriesadd) - Add article categories
* [privateArticleCategoriesList](docs/articles/README.md#privatearticlecategorieslist) - List article categories
* [privateArticleCategoriesReplace](docs/articles/README.md#privatearticlecategoriesreplace) - Replace article categories
* [privateArticleCategoryDelete](docs/articles/README.md#privatearticlecategorydelete) - Delete article category
* [privateArticleConfidentialityDelete](docs/articles/README.md#privatearticleconfidentialitydelete) - Delete article confidentiality
* [privateArticleConfidentialityDetails](docs/articles/README.md#privatearticleconfidentialitydetails) - Article confidentiality details
* [privateArticleConfidentialityUpdate](docs/articles/README.md#privatearticleconfidentialityupdate) - Update article confidentiality
* [privateArticleCreate](docs/articles/README.md#privatearticlecreate) - Create new Article
* [privateArticleDelete](docs/articles/README.md#privatearticledelete) - Delete article
* [privateArticleDetails](docs/articles/README.md#privatearticledetails) - Article details
* [privateArticleEmbargoDelete](docs/articles/README.md#privatearticleembargodelete) - Delete Article Embargo
* [privateArticleEmbargoDetails](docs/articles/README.md#privatearticleembargodetails) - Article Embargo Details
* [privateArticleEmbargoUpdate](docs/articles/README.md#privatearticleembargoupdate) - Update Article Embargo
* [privateArticleFile](docs/articles/README.md#privatearticlefile) - Single File
* [privateArticleFileDelete](docs/articles/README.md#privatearticlefiledelete) - File Delete
* [privateArticleFilesList](docs/articles/README.md#privatearticlefileslist) - List article files
* [privateArticlePrivateLink](docs/articles/README.md#privatearticleprivatelink) - List private links
* [privateArticlePrivateLinkCreate](docs/articles/README.md#privatearticleprivatelinkcreate) - Create private link
* [privateArticlePrivateLinkDelete](docs/articles/README.md#privatearticleprivatelinkdelete) - Disable private link
* [privateArticlePrivateLinkUpdate](docs/articles/README.md#privatearticleprivatelinkupdate) - Update private link
* [privateArticlePublish](docs/articles/README.md#privatearticlepublish) - Private Article Publish
* [privateArticleReserveDoi](docs/articles/README.md#privatearticlereservedoi) - Private Article Reserve DOI
* [privateArticleReserveHandle](docs/articles/README.md#privatearticlereservehandle) - Private Article Reserve Handle
* [privateArticleResource](docs/articles/README.md#privatearticleresource) - Private Article Resource
* [privateArticleUpdate](docs/articles/README.md#privatearticleupdate) - Update article
* [privateArticleUploadComplete](docs/articles/README.md#privatearticleuploadcomplete) - Complete Upload
* [privateArticleUploadInitiate](docs/articles/README.md#privatearticleuploadinitiate) - Initiate Upload
* [privateArticlesList](docs/articles/README.md#privatearticleslist) - Private Articles
* [privateArticlesSearch](docs/articles/README.md#privatearticlessearch) - Private Articles search

### [authors](docs/authors/README.md)

* [privateAuthorDetails](docs/authors/README.md#privateauthordetails) - Author details
* [privateAuthorsSearch](docs/authors/README.md#privateauthorssearch) - Search Authors

### [collections](docs/collections/README.md)

* [collectionArticles](docs/collections/README.md#collectionarticles) - Public Collection Articles
* [collectionDetails](docs/collections/README.md#collectiondetails) - Collection details
* [collectionVersionDetails](docs/collections/README.md#collectionversiondetails) - Collection Version details
* [collectionVersions](docs/collections/README.md#collectionversions) - Collection Versions list
* [collectionsList](docs/collections/README.md#collectionslist) - Public Collections
* [collectionsSearch](docs/collections/README.md#collectionssearch) - Public Collections Search
* [privateCollectionArticleDelete](docs/collections/README.md#privatecollectionarticledelete) - Delete collection article
* [privateCollectionArticlesAdd](docs/collections/README.md#privatecollectionarticlesadd) - Add collection articles
* [privateCollectionArticlesList](docs/collections/README.md#privatecollectionarticleslist) - List collection articles
* [privateCollectionArticlesReplace](docs/collections/README.md#privatecollectionarticlesreplace) - Replace collection articles
* [privateCollectionAuthorDelete](docs/collections/README.md#privatecollectionauthordelete) - Delete collection author
* [privateCollectionAuthorsAdd](docs/collections/README.md#privatecollectionauthorsadd) - Add collection authors
* [privateCollectionAuthorsList](docs/collections/README.md#privatecollectionauthorslist) - List collection authors
* [privateCollectionAuthorsReplace](docs/collections/README.md#privatecollectionauthorsreplace) - Replace collection authors
* [privateCollectionCategoriesAdd](docs/collections/README.md#privatecollectioncategoriesadd) - Add collection categories
* [privateCollectionCategoriesList](docs/collections/README.md#privatecollectioncategorieslist) - List collection categories
* [privateCollectionCategoriesReplace](docs/collections/README.md#privatecollectioncategoriesreplace) - Replace collection categories
* [privateCollectionCategoryDelete](docs/collections/README.md#privatecollectioncategorydelete) - Delete collection category
* [privateCollectionCreate](docs/collections/README.md#privatecollectioncreate) - Create collection
* [privateCollectionDelete](docs/collections/README.md#privatecollectiondelete) - Delete collection
* [privateCollectionDetails](docs/collections/README.md#privatecollectiondetails) - Collection details
* [privateCollectionPrivateLinkCreate](docs/collections/README.md#privatecollectionprivatelinkcreate) - Create collection private link
* [privateCollectionPrivateLinkDelete](docs/collections/README.md#privatecollectionprivatelinkdelete) - Disable private link
* [privateCollectionPrivateLinkUpdate](docs/collections/README.md#privatecollectionprivatelinkupdate) - Update collection private link
* [privateCollectionPrivateLinksList](docs/collections/README.md#privatecollectionprivatelinkslist) - List collection private links
* [privateCollectionPublish](docs/collections/README.md#privatecollectionpublish) - Private Collection Publish
* [privateCollectionReserveDoi](docs/collections/README.md#privatecollectionreservedoi) - Private Collection Reserve DOI
* [privateCollectionReserveHandle](docs/collections/README.md#privatecollectionreservehandle) - Private Collection Reserve Handle
* [privateCollectionResource](docs/collections/README.md#privatecollectionresource) - Private Collection Resource
* [privateCollectionUpdate](docs/collections/README.md#privatecollectionupdate) - Update collection
* [privateCollectionsList](docs/collections/README.md#privatecollectionslist) - Private Collections List
* [privateCollectionsSearch](docs/collections/README.md#privatecollectionssearch) - Private Collections Search

### [institutions](docs/institutions/README.md)

* [accountInstitutionCuration](docs/institutions/README.md#accountinstitutioncuration) - Institution Curation Review
* [accountInstitutionCurationComments](docs/institutions/README.md#accountinstitutioncurationcomments) - Institution Curation Review Comments
* [accountInstitutionCurations](docs/institutions/README.md#accountinstitutioncurations) - Institution Curation Reviews
* [customFieldsList](docs/institutions/README.md#customfieldslist) - Private account institution group custom fields
* [customFieldsUpload](docs/institutions/README.md#customfieldsupload) - Custom fields values files upload
* [institutionArticles](docs/institutions/README.md#institutionarticles) - Public Licenses
* [institutionHrfeedUpload](docs/institutions/README.md#institutionhrfeedupload) - Private Institution HRfeed Upload
* [postAccountInstitutionReviewCurationIdComments](docs/institutions/README.md#postaccountinstitutionreviewcurationidcomments) - POST Institution Curation Review Comment
* [privateAccountInstitutionUser](docs/institutions/README.md#privateaccountinstitutionuser) - Private Account Institution User
* [privateCategoriesList](docs/institutions/README.md#privatecategorieslist) - Private Account Categories
* [privateGroupEmbargoOptionsDetails](docs/institutions/README.md#privategroupembargooptionsdetails) - Private Account Institution Group Embargo Options
* [privateInstitutionAccountGroupRoleDelete](docs/institutions/README.md#privateinstitutionaccountgrouproledelete) - Delete Institution Account Group Role
* [privateInstitutionAccountGroupRoles](docs/institutions/README.md#privateinstitutionaccountgrouproles) - List Institution Account Group Roles
* [privateInstitutionAccountGroupRolesCreate](docs/institutions/README.md#privateinstitutionaccountgrouprolescreate) - Add Institution Account Group Roles
* [privateInstitutionAccountsCreate](docs/institutions/README.md#privateinstitutionaccountscreate) - Create new Institution Account
* [privateInstitutionAccountsList](docs/institutions/README.md#privateinstitutionaccountslist) - Private Account Institution Accounts
* [privateInstitutionAccountsSearch](docs/institutions/README.md#privateinstitutionaccountssearch) - Private Account Institution Accounts Search
* [privateInstitutionAccountsUpdate](docs/institutions/README.md#privateinstitutionaccountsupdate) - Update Institution Account
* [privateInstitutionArticles](docs/institutions/README.md#privateinstitutionarticles) - Private Institution Articles
* [privateInstitutionDetails](docs/institutions/README.md#privateinstitutiondetails) - Private Account Institutions
* [privateInstitutionEmbargoOptionsDetails](docs/institutions/README.md#privateinstitutionembargooptionsdetails) - Private Account Institution embargo options
* [privateInstitutionGroupsList](docs/institutions/README.md#privateinstitutiongroupslist) - Private Account Institution Groups
* [privateInstitutionRolesList](docs/institutions/README.md#privateinstitutionroleslist) - Private Account Institution Roles

### [other](docs/other/README.md)

* [categoriesList](docs/other/README.md#categorieslist) - Public Categories
* [fileDownload](docs/other/README.md#filedownload) - Public File Download
* [itemTypesList](docs/other/README.md#itemtypeslist) - Item Types
* [licensesList](docs/other/README.md#licenseslist) - Public Licenses
* [privateAccount](docs/other/README.md#privateaccount) - Private Account information
* [privateFundingSearch](docs/other/README.md#privatefundingsearch) - Search Funding
* [privateLicensesList](docs/other/README.md#privatelicenseslist) - Private Account Licenses

### [projects](docs/projects/README.md)

* [privateProjectArticleDelete](docs/projects/README.md#privateprojectarticledelete) - Delete project article
* [privateProjectArticleDetails](docs/projects/README.md#privateprojectarticledetails) - Project article details
* [privateProjectArticleFile](docs/projects/README.md#privateprojectarticlefile) - Project article file details
* [privateProjectArticleFiles](docs/projects/README.md#privateprojectarticlefiles) - Project article list files
* [privateProjectArticlesCreate](docs/projects/README.md#privateprojectarticlescreate) - Create project article
* [privateProjectArticlesList](docs/projects/README.md#privateprojectarticleslist) - List project articles
* [privateProjectCollaboratorDelete](docs/projects/README.md#privateprojectcollaboratordelete) - Remove project collaborator
* [privateProjectCollaboratorsInvite](docs/projects/README.md#privateprojectcollaboratorsinvite) - Invite project collaborators
* [privateProjectCollaboratorsList](docs/projects/README.md#privateprojectcollaboratorslist) - List project collaborators
* [privateProjectCreate](docs/projects/README.md#privateprojectcreate) - Create project
* [privateProjectDelete](docs/projects/README.md#privateprojectdelete) - Delete project
* [privateProjectDetails](docs/projects/README.md#privateprojectdetails) - View project details
* [privateProjectLeave](docs/projects/README.md#privateprojectleave) - Private Project Leave
* [privateProjectNote](docs/projects/README.md#privateprojectnote) - Project note details
* [privateProjectNoteDelete](docs/projects/README.md#privateprojectnotedelete) - Delete project note
* [privateProjectNoteUpdate](docs/projects/README.md#privateprojectnoteupdate) - Update project note
* [privateProjectNotesCreate](docs/projects/README.md#privateprojectnotescreate) - Create project note
* [privateProjectNotesList](docs/projects/README.md#privateprojectnoteslist) - List project notes
* [privateProjectPublish](docs/projects/README.md#privateprojectpublish) - Private Project Publish
* [privateProjectUpdate](docs/projects/README.md#privateprojectupdate) - Update project
* [privateProjectsList](docs/projects/README.md#privateprojectslist) - Private Projects
* [privateProjectsSearch](docs/projects/README.md#privateprojectssearch) - Private Projects search
* [projectArticles](docs/projects/README.md#projectarticles) - Public Project Articles
* [projectDetails](docs/projects/README.md#projectdetails) - Public Project
* [projectsList](docs/projects/README.md#projectslist) - Public Projects
* [projectsSearch](docs/projects/README.md#projectssearch) - Public Projects Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
