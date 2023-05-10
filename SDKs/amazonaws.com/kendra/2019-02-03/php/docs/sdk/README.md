# SDK

## Overview

Amazon Kendra is a service for indexing large document sets.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kendra/>
### Available Operations

* [associateEntitiesToExperience](#associateentitiestoexperience) - Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [associatePersonasToEntities](#associatepersonastoentities) - Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [batchDeleteDocument](#batchdeletedocument) - <p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>
* [batchDeleteFeaturedResultsSet](#batchdeletefeaturedresultsset) - Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [batchGetDocumentStatus](#batchgetdocumentstatus) - <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
* [batchPutDocument](#batchputdocument) - <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>
* [clearQuerySuggestions](#clearquerysuggestions) - <p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [createAccessControlConfiguration](#createaccesscontrolconfiguration) - <p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
* [createDataSource](#createdatasource) - <p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
* [createExperience](#createexperience) - Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [createFaq](#createfaq) - <p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>
* [createFeaturedResultsSet](#createfeaturedresultsset) - <p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
* [createIndex](#createindex) - <p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
* [createQuerySuggestionsBlockList](#createquerysuggestionsblocklist) - <p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>
* [createThesaurus](#createthesaurus) - <p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>
* [deleteAccessControlConfiguration](#deleteaccesscontrolconfiguration) - Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [deleteDataSource](#deletedatasource) - Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
* [deleteExperience](#deleteexperience) - Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [deleteFaq](#deletefaq) - Removes an FAQ from an index.
* [deleteIndex](#deleteindex) - Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.
* [deletePrincipalMapping](#deleteprincipalmapping) - <p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [deleteQuerySuggestionsBlockList](#deletequerysuggestionsblocklist) - <p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [deleteThesaurus](#deletethesaurus) - Deletes an existing Amazon Kendra thesaurus. 
* [describeAccessControlConfiguration](#describeaccesscontrolconfiguration) - Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [describeDataSource](#describedatasource) - Gets information about an Amazon Kendra data source connector.
* [describeExperience](#describeexperience) - Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [describeFaq](#describefaq) - Gets information about an FAQ list.
* [describeFeaturedResultsSet](#describefeaturedresultsset) - Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [describeIndex](#describeindex) - Gets information about an existing Amazon Kendra index.
* [describePrincipalMapping](#describeprincipalmapping) - <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [describeQuerySuggestionsBlockList](#describequerysuggestionsblocklist) - <p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [describeQuerySuggestionsConfig](#describequerysuggestionsconfig) - <p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [describeThesaurus](#describethesaurus) - Gets information about an existing Amazon Kendra thesaurus.
* [disassociateEntitiesFromExperience](#disassociateentitiesfromexperience) - Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [disassociatePersonasFromEntities](#disassociatepersonasfromentities) - Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [getQuerySuggestions](#getquerysuggestions) - <p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [getSnapshots](#getsnapshots) - Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
* [listAccessControlConfigurations](#listaccesscontrolconfigurations) - Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [listDataSourceSyncJobs](#listdatasourcesyncjobs) - Gets statistics about synchronizing a data source connector.
* [listDataSources](#listdatasources) - Lists the data source connectors that you have created.
* [listEntityPersonas](#listentitypersonas) - Lists specific permissions of users and groups with access to your Amazon Kendra experience.
* [listExperienceEntities](#listexperienceentities) - Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [listExperiences](#listexperiences) - Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [listFaqs](#listfaqs) - Gets a list of FAQ lists associated with an index.
* [listFeaturedResultsSets](#listfeaturedresultssets) - Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [listGroupsOlderThanOrderingId](#listgroupsolderthanorderingid) - <p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [listIndices](#listindices) - Lists the Amazon Kendra indexes that you created.
* [listQuerySuggestionsBlockLists](#listquerysuggestionsblocklists) - <p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [listTagsForResource](#listtagsforresource) - Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
* [listThesauri](#listthesauri) - Lists the thesauri for an index.
* [putPrincipalMapping](#putprincipalmapping) - <p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>
* [query](#query) - <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>
* [startDataSourceSyncJob](#startdatasourcesyncjob) - Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
* [stopDataSourceSyncJob](#stopdatasourcesyncjob) - Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
* [submitFeedback](#submitfeedback) - <p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [tagResource](#tagresource) - Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
* [untagResource](#untagresource) - Removes a tag from an index, FAQ, or a data source.
* [updateAccessControlConfiguration](#updateaccesscontrolconfiguration) - <p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
* [updateDataSource](#updatedatasource) - Updates an existing Amazon Kendra data source connector.
* [updateExperience](#updateexperience) - Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [updateFeaturedResultsSet](#updatefeaturedresultsset) - Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.
* [updateIndex](#updateindex) - Updates an existing Amazon Kendra index.
* [updateQuerySuggestionsBlockList](#updatequerysuggestionsblocklist) - <p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [updateQuerySuggestionsConfig](#updatequerysuggestionsconfig) - <p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [updateThesaurus](#updatethesaurus) - Updates a thesaurus for an index.

## associateEntitiesToExperience

Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntitiesToExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateEntitiesToExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntitiesToExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEntitiesToExperienceRequest();
    $request->associateEntitiesToExperienceRequest = new AssociateEntitiesToExperienceRequest();
    $request->associateEntitiesToExperienceRequest->entityList = [
        new EntityConfiguration(),
        new EntityConfiguration(),
        new EntityConfiguration(),
        new EntityConfiguration(),
    ];
    $request->associateEntitiesToExperienceRequest->id = '7cc78ca1-ba92-48fc-8167-42cb73920592';
    $request->associateEntitiesToExperienceRequest->indexId = 'iste';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = AssociateEntitiesToExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_ENTITIES_TO_EXPERIENCE;

    $response = $sdk->sdk->associateEntitiesToExperience($request);

    if ($response->associateEntitiesToExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associatePersonasToEntities

Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePersonasToEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociatePersonasToEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityPersonaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PersonaEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePersonasToEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociatePersonasToEntitiesRequest();
    $request->associatePersonasToEntitiesRequest = new AssociatePersonasToEntitiesRequest();
    $request->associatePersonasToEntitiesRequest->id = '596eb10f-aaa2-4352-8595-5907aff1a3a2';
    $request->associatePersonasToEntitiesRequest->indexId = 'repellat';
    $request->associatePersonasToEntitiesRequest->personas = [
        new EntityPersonaConfiguration(),
        new EntityPersonaConfiguration(),
        new EntityPersonaConfiguration(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociatePersonasToEntitiesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_PERSONAS_TO_ENTITIES;

    $response = $sdk->sdk->associatePersonasToEntities($request);

    if ($response->associatePersonasToEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteDocument

<p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSyncJobMetricTarget;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteDocumentRequest();
    $request->batchDeleteDocumentRequest = new BatchDeleteDocumentRequest();
    $request->batchDeleteDocumentRequest->dataSourceSyncJobMetricTarget = new DataSourceSyncJobMetricTarget();
    $request->batchDeleteDocumentRequest->dataSourceSyncJobMetricTarget->dataSourceId = 'quia';
    $request->batchDeleteDocumentRequest->dataSourceSyncJobMetricTarget->dataSourceSyncJobId = 'quis';
    $request->batchDeleteDocumentRequest->documentIdList = [
        'laborum',
    ];
    $request->batchDeleteDocumentRequest->indexId = 'animi';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = BatchDeleteDocumentXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_BATCH_DELETE_DOCUMENT;

    $response = $sdk->sdk->batchDeleteDocument($request);

    if ($response->batchDeleteDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteFeaturedResultsSet

Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteFeaturedResultsSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteFeaturedResultsSetRequest();
    $request->batchDeleteFeaturedResultsSetRequest = new BatchDeleteFeaturedResultsSetRequest();
    $request->batchDeleteFeaturedResultsSetRequest->featuredResultsSetIds = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->batchDeleteFeaturedResultsSetRequest->indexId = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = BatchDeleteFeaturedResultsSetXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_BATCH_DELETE_FEATURED_RESULTS_SET;

    $response = $sdk->sdk->batchDeleteFeaturedResultsSet($request);

    if ($response->batchDeleteFeaturedResultsSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDocumentStatus

<p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDocumentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDocumentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttribute;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDocumentStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDocumentStatusRequest();
    $request->batchGetDocumentStatusRequest = new BatchGetDocumentStatusRequest();
    $request->batchGetDocumentStatusRequest->documentInfoList = [
        new DocumentInfo(),
    ];
    $request->batchGetDocumentStatusRequest->indexId = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = BatchGetDocumentStatusXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_BATCH_GET_DOCUMENT_STATUS;

    $response = $sdk->sdk->batchGetDocumentStatus($request);

    if ($response->batchGetDocumentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchPutDocument

<p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchPutDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InlineCustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeCondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeTarget;
use \OpenAPI\OpenAPI\Models\Shared\HookConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\ReadAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HierarchicalPrincipal;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutDocumentRequest();
    $request->batchPutDocumentRequest = new BatchPutDocumentRequest();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->inlineConfigurations = [
        new InlineCustomDocumentEnrichmentConfiguration(),
    ];
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration = new HookConfiguration();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'corporis';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T11:22:20.922Z');
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 118727;
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'repudiandae';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::GREATER_THAN;
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->lambdaArn = 'ipsum';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->s3Bucket = 'quidem';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration = new HookConfiguration();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'molestias';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-09T11:24:10.949Z');
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 265389;
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'repudiandae';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::CONTAINS;
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->lambdaArn = 'veritatis';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->s3Bucket = 'itaque';
    $request->batchPutDocumentRequest->customDocumentEnrichmentConfiguration->roleArn = 'incidunt';
    $request->batchPutDocumentRequest->documents = [
        new Document(),
        new Document(),
    ];
    $request->batchPutDocumentRequest->indexId = 'consequatur';
    $request->batchPutDocumentRequest->roleArn = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = BatchPutDocumentXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_BATCH_PUT_DOCUMENT;

    $response = $sdk->sdk->batchPutDocument($request);

    if ($response->batchPutDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clearQuerySuggestions

<p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClearQuerySuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClearQuerySuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClearQuerySuggestionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearQuerySuggestionsRequest();
    $request->clearQuerySuggestionsRequest = new ClearQuerySuggestionsRequest();
    $request->clearQuerySuggestionsRequest->indexId = 'qui';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ClearQuerySuggestionsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CLEAR_QUERY_SUGGESTIONS;

    $response = $sdk->sdk->clearQuerySuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessControlConfiguration

<p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\ReadAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HierarchicalPrincipal;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessControlConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessControlConfigurationRequest();
    $request->createAccessControlConfigurationRequest = new CreateAccessControlConfigurationRequest();
    $request->createAccessControlConfigurationRequest->accessControlList = [
        new Principal(),
    ];
    $request->createAccessControlConfigurationRequest->clientToken = 'fugit';
    $request->createAccessControlConfigurationRequest->description = 'dolorum';
    $request->createAccessControlConfigurationRequest->hierarchicalAccessControlList = [
        new HierarchicalPrincipal(),
        new HierarchicalPrincipal(),
        new HierarchicalPrincipal(),
    ];
    $request->createAccessControlConfigurationRequest->indexId = 'tempora';
    $request->createAccessControlConfigurationRequest->name = 'Geoffrey Green';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CreateAccessControlConfigurationXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_ACCESS_CONTROL_CONFIGURATION;

    $response = $sdk->sdk->createAccessControlConfiguration($request);

    if ($response->createAccessControlConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSource

<p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AlfrescoConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\AlfrescoEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BoxConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ColumnConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\QueryIdentifiersEnclosingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FsxConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FsxFileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GitHubConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GitHubDocumentCrawlProperties;
use \OpenAPI\OpenAPI\Models\Shared\OnPremiseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SaaSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDriveConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JiraConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IssueSubEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OneDriveConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OneDriveUsers;
use \OpenAPI\OpenAPI\Models\Shared\QuipConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlListConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentsMetadataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceChatterFeedConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceChatterFeedIncludeFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceKnowledgeArticleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceCustomKnowledgeArticleTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceKnowledgeArticleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardKnowledgeArticleTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectAttachmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowKnowledgeArticleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowServiceCatalogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowBuildVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharePointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SharePointOnlineAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharePointVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SlackEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebCrawlerConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Urls;
use \OpenAPI\OpenAPI\Models\Shared\SeedUrlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebCrawlerModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteMapsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WorkDocsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InlineCustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeCondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeTarget;
use \OpenAPI\OpenAPI\Models\Shared\HookConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSourceRequest();
    $request->createDataSourceRequest = new CreateDataSourceRequest();
    $request->createDataSourceRequest->clientToken = 'officia';
    $request->createDataSourceRequest->configuration = new DataSourceConfiguration();
    $request->createDataSourceRequest->configuration->alfrescoConfiguration = new AlfrescoConfiguration();
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->blogFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->crawlComments = false;
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->crawlSystemFolders = false;
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->documentLibraryFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->entityFilter = [
        AlfrescoEntityEnum::DOCUMENT_LIBRARY,
        AlfrescoEntityEnum::BLOG,
        AlfrescoEntityEnum::BLOG,
        AlfrescoEntityEnum::DOCUMENT_LIBRARY,
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->exclusionPatterns = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->inclusionPatterns = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->secretArn = 'non';
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->siteId = 'occaecati';
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->siteUrl = 'enim';
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path = new S3Path();
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path->bucket = 'accusamus';
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path->key = 'delectus';
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration->securityGroupIds = [
        'provident',
        'nam',
        'id',
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration->subnetIds = [
        'deleniti',
        'sapiente',
        'amet',
    ];
    $request->createDataSourceRequest->configuration->alfrescoConfiguration->wikiFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration = new BoxConfiguration();
    $request->createDataSourceRequest->configuration->boxConfiguration->commentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->crawlComments = false;
    $request->createDataSourceRequest->configuration->boxConfiguration->crawlTasks = false;
    $request->createDataSourceRequest->configuration->boxConfiguration->crawlWebLinks = false;
    $request->createDataSourceRequest->configuration->boxConfiguration->enterpriseId = 'vel';
    $request->createDataSourceRequest->configuration->boxConfiguration->exclusionPatterns = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->fileFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->inclusionPatterns = [
        'distinctio',
        'id',
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->secretArn = 'labore';
    $request->createDataSourceRequest->configuration->boxConfiguration->taskFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->configuration->boxConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->boxConfiguration->vpcConfiguration->securityGroupIds = [
        'natus',
        'nobis',
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->vpcConfiguration->subnetIds = [
        'vero',
        'aspernatur',
    ];
    $request->createDataSourceRequest->configuration->boxConfiguration->webLinkFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration = new ConfluenceConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration = new ConfluenceAttachmentConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration->attachmentFieldMappings = [
        new ConfluenceAttachmentToIndexFieldMapping(),
        new ConfluenceAttachmentToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->authenticationType = ConfluenceAuthenticationTypeEnum::HTTP_BASIC;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->blogConfiguration = new ConfluenceBlogConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->blogConfiguration->blogFieldMappings = [
        new ConfluenceBlogToIndexFieldMapping(),
        new ConfluenceBlogToIndexFieldMapping(),
        new ConfluenceBlogToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->exclusionPatterns = [
        'provident',
        'quos',
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->inclusionPatterns = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->pageConfiguration = new ConfluencePageConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->pageConfiguration->pageFieldMappings = [
        new ConfluencePageToIndexFieldMapping(),
        new ConfluencePageToIndexFieldMapping(),
        new ConfluencePageToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->credentials = 'ad';
    $request->createDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->host = 'eum';
    $request->createDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->port = 221262;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->secretArn = 'necessitatibus';
    $request->createDataSourceRequest->configuration->confluenceConfiguration->serverUrl = 'odit';
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration = new ConfluenceSpaceConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->crawlArchivedSpaces = false;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->crawlPersonalSpaces = false;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->excludeSpaces = [
        'quasi',
        'iure',
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->includeSpaces = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->spaceFieldMappings = [
        new ConfluenceSpaceToIndexFieldMapping(),
        new ConfluenceSpaceToIndexFieldMapping(),
        new ConfluenceSpaceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->version = ConfluenceVersionEnum::CLOUD;
    $request->createDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration->securityGroupIds = [
        'architecto',
    ];
    $request->createDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration->subnetIds = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->createDataSourceRequest->configuration->databaseConfiguration = new DatabaseConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->aclConfiguration = new AclConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->aclConfiguration->allowedGroupsColumnName = 'quibusdam';
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration = new ColumnConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->changeDetectingColumns = [
        'saepe',
    ];
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentDataColumnName = 'pariatur';
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentIdColumnName = 'accusantium';
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentTitleColumnName = 'consequuntur';
    $request->createDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration = new ConnectionConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databaseHost = 'natus';
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databaseName = 'magni';
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databasePort = 123820;
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->secretArn = 'quo';
    $request->createDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->tableName = 'illum';
    $request->createDataSourceRequest->configuration->databaseConfiguration->databaseEngineType = DatabaseEngineTypeEnum::RDS_POSTGRESQL;
    $request->createDataSourceRequest->configuration->databaseConfiguration->sqlConfiguration = new SqlConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->sqlConfiguration->queryIdentifiersEnclosingOption = QueryIdentifiersEnclosingOptionEnum::NONE;
    $request->createDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration->securityGroupIds = [
        'excepturi',
        'odit',
    ];
    $request->createDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration->subnetIds = [
        'accusantium',
        'ab',
    ];
    $request->createDataSourceRequest->configuration->fsxConfiguration = new FsxConfiguration();
    $request->createDataSourceRequest->configuration->fsxConfiguration->exclusionPatterns = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->createDataSourceRequest->configuration->fsxConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->fsxConfiguration->fileSystemId = 'eaque';
    $request->createDataSourceRequest->configuration->fsxConfiguration->fileSystemType = FsxFileSystemTypeEnum::WINDOWS;
    $request->createDataSourceRequest->configuration->fsxConfiguration->inclusionPatterns = [
        'nemo',
        'voluptatibus',
        'perferendis',
        'fugiat',
    ];
    $request->createDataSourceRequest->configuration->fsxConfiguration->secretArn = 'amet';
    $request->createDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration->securityGroupIds = [
        'cumque',
    ];
    $request->createDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration->subnetIds = [
        'hic',
        'libero',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration = new GitHubConfiguration();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->exclusionFileNamePatterns = [
        'dolores',
        'quis',
        'totam',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->exclusionFileTypePatterns = [
        'eaque',
        'quis',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->exclusionFolderNamePatterns = [
        'eos',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubCommitConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties = new GitHubDocumentCrawlProperties();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssue = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssueComment = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssueCommentAttachment = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequest = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequestComment = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequestCommentAttachment = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlRepositoryDocuments = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueAttachmentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueCommentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueDocumentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestCommentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestDocumentAttachmentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestDocumentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->gitHubRepositoryConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->inclusionFileNamePatterns = [
        'omnis',
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->inclusionFileTypePatterns = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->inclusionFolderNamePatterns = [
        'rerum',
        'adipisci',
        'asperiores',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration = new OnPremiseConfiguration();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->hostUrl = 'earum';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->organizationName = 'modi';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path = new S3Path();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path->bucket = 'iste';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path->key = 'dolorum';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->repositoryFilter = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration = new SaaSConfiguration();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration->hostUrl = 'libero';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration->organizationName = 'delectus';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->secretArn = 'quaerat';
    $request->createDataSourceRequest->configuration->gitHubConfiguration->type = TypeEnum::ON_PREMISE;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration->securityGroupIds = [
        'dolorem',
        'dolorem',
    ];
    $request->createDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration->subnetIds = [
        'qui',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration = new GoogleDriveConfiguration();
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->excludeMimeTypes = [
        'hic',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->excludeSharedDrives = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->excludeUserAccounts = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->exclusionPatterns = [
        'ipsa',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->inclusionPatterns = [
        'quaerat',
        'accusamus',
    ];
    $request->createDataSourceRequest->configuration->googleDriveConfiguration->secretArn = 'quidem';
    $request->createDataSourceRequest->configuration->jiraConfiguration = new JiraConfiguration();
    $request->createDataSourceRequest->configuration->jiraConfiguration->attachmentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->commentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->exclusionPatterns = [
        'eos',
        'atque',
        'sit',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->inclusionPatterns = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->issueFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->issueSubEntityFilter = [
        IssueSubEntityEnum::ATTACHMENTS,
        IssueSubEntityEnum::ATTACHMENTS,
        IssueSubEntityEnum::WORKLOGS,
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->issueType = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->jiraAccountUrl = 'voluptate';
    $request->createDataSourceRequest->configuration->jiraConfiguration->project = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->projectFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->secretArn = 'amet';
    $request->createDataSourceRequest->configuration->jiraConfiguration->status = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration->securityGroupIds = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration->subnetIds = [
        'similique',
        'alias',
        'at',
    ];
    $request->createDataSourceRequest->configuration->jiraConfiguration->workLogFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->oneDriveConfiguration = new OneDriveConfiguration();
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->disableLocalGroups = false;
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->exclusionPatterns = [
        'vel',
        'quod',
    ];
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->inclusionPatterns = [
        'dolorum',
    ];
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers = new OneDriveUsers();
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserList = [
        'esse',
        'harum',
        'iusto',
        'ipsum',
    ];
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path = new S3Path();
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path->bucket = 'quisquam';
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path->key = 'tenetur';
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->secretArn = 'amet';
    $request->createDataSourceRequest->configuration->oneDriveConfiguration->tenantDomain = 'tempore';
    $request->createDataSourceRequest->configuration->quipConfiguration = new QuipConfiguration();
    $request->createDataSourceRequest->configuration->quipConfiguration->attachmentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->quipConfiguration->crawlChatRooms = false;
    $request->createDataSourceRequest->configuration->quipConfiguration->crawlFileComments = false;
    $request->createDataSourceRequest->configuration->quipConfiguration->domain = 'numquam';
    $request->createDataSourceRequest->configuration->quipConfiguration->exclusionPatterns = [
        'dolorem',
        'sapiente',
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->folderIds = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->inclusionPatterns = [
        'sed',
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->messageFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->secretArn = 'libero';
    $request->createDataSourceRequest->configuration->quipConfiguration->threadFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->quipConfiguration->vpcConfiguration->securityGroupIds = [
        'quam',
        'ipsum',
        'incidunt',
    ];
    $request->createDataSourceRequest->configuration->quipConfiguration->vpcConfiguration->subnetIds = [
        'cupiditate',
    ];
    $request->createDataSourceRequest->configuration->s3Configuration = new S3DataSourceConfiguration();
    $request->createDataSourceRequest->configuration->s3Configuration->accessControlListConfiguration = new AccessControlListConfiguration();
    $request->createDataSourceRequest->configuration->s3Configuration->accessControlListConfiguration->keyPath = 'maxime';
    $request->createDataSourceRequest->configuration->s3Configuration->bucketName = 'pariatur';
    $request->createDataSourceRequest->configuration->s3Configuration->documentsMetadataConfiguration = new DocumentsMetadataConfiguration();
    $request->createDataSourceRequest->configuration->s3Configuration->documentsMetadataConfiguration->s3Prefix = 'soluta';
    $request->createDataSourceRequest->configuration->s3Configuration->exclusionPatterns = [
        'laborum',
    ];
    $request->createDataSourceRequest->configuration->s3Configuration->inclusionPatterns = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->createDataSourceRequest->configuration->s3Configuration->inclusionPrefixes = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration = new SalesforceConfiguration();
    $request->createDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration = new SalesforceChatterFeedConfiguration();
    $request->createDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->documentDataFieldName = 'molestias';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->documentTitleFieldName = 'temporibus';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->includeFilterTypes = [
        SalesforceChatterFeedIncludeFilterTypeEnum::ACTIVE_USER,
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->salesforceConfiguration->excludeAttachmentFilePatterns = [
        'odio',
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->includeAttachmentFilePatterns = [
        'ullam',
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration = new SalesforceKnowledgeArticleConfiguration();
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->customKnowledgeArticleTypeConfigurations = [
        new SalesforceCustomKnowledgeArticleTypeConfiguration(),
        new SalesforceCustomKnowledgeArticleTypeConfiguration(),
        new SalesforceCustomKnowledgeArticleTypeConfiguration(),
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->includedStates = [
        SalesforceKnowledgeArticleStateEnum::DRAFT,
        SalesforceKnowledgeArticleStateEnum::ARCHIVED,
        SalesforceKnowledgeArticleStateEnum::ARCHIVED,
        SalesforceKnowledgeArticleStateEnum::ARCHIVED,
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration = new SalesforceStandardKnowledgeArticleTypeConfiguration();
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->documentDataFieldName = 'et';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->documentTitleFieldName = 'saepe';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->secretArn = 'veritatis';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->serverUrl = 'nobis';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration = new SalesforceStandardObjectAttachmentConfiguration();
    $request->createDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration->documentTitleFieldName = 'quos';
    $request->createDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->salesforceConfiguration->standardObjectConfigurations = [
        new SalesforceStandardObjectConfiguration(),
        new SalesforceStandardObjectConfiguration(),
        new SalesforceStandardObjectConfiguration(),
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration = new ServiceNowConfiguration();
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->authenticationType = ServiceNowAuthenticationTypeEnum::HTTP_BASIC;
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->hostUrl = 'delectus';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration = new ServiceNowKnowledgeArticleConfiguration();
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->documentDataFieldName = 'dolorem';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->documentTitleFieldName = 'dolore';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->excludeAttachmentFilePatterns = [
        'adipisci',
        'dolorum',
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->filterQuery = 'quae';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->includeAttachmentFilePatterns = [
        'quas',
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->secretArn = 'itaque';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration = new ServiceNowServiceCatalogConfiguration();
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->documentDataFieldName = 'consequatur';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->documentTitleFieldName = 'est';
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->excludeAttachmentFilePatterns = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->includeAttachmentFilePatterns = [
        'quae',
    ];
    $request->createDataSourceRequest->configuration->serviceNowConfiguration->serviceNowBuildVersion = ServiceNowBuildVersionTypeEnum::OTHERS;
    $request->createDataSourceRequest->configuration->sharePointConfiguration = new SharePointConfiguration();
    $request->createDataSourceRequest->configuration->sharePointConfiguration->authenticationType = SharePointOnlineAuthenticationTypeEnum::HTTP_BASIC;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->crawlAttachments = false;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->disableLocalGroups = false;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->documentTitleFieldName = 'occaecati';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->exclusionPatterns = [
        'quisquam',
        'vero',
        'omnis',
        'quis',
    ];
    $request->createDataSourceRequest->configuration->sharePointConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->sharePointConfiguration->inclusionPatterns = [
        'voluptate',
        'consectetur',
        'vero',
        'tenetur',
    ];
    $request->createDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->createDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->credentials = 'dignissimos';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->host = 'hic';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->port = 715561;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->secretArn = 'quod';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->sharePointVersion = SharePointVersionEnum::SHAREPOINT2016;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path = new S3Path();
    $request->createDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path->bucket = 'similique';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path->key = 'facilis';
    $request->createDataSourceRequest->configuration->sharePointConfiguration->urls = [
        'ducimus',
        'dolore',
        'quibusdam',
        'illum',
    ];
    $request->createDataSourceRequest->configuration->sharePointConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration->securityGroupIds = [
        'natus',
    ];
    $request->createDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration->subnetIds = [
        'aut',
        'voluptatibus',
        'exercitationem',
        'nulla',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration = new SlackConfiguration();
    $request->createDataSourceRequest->configuration->slackConfiguration->crawlBotMessage = false;
    $request->createDataSourceRequest->configuration->slackConfiguration->excludeArchived = false;
    $request->createDataSourceRequest->configuration->slackConfiguration->exclusionPatterns = [
        'porro',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->inclusionPatterns = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->lookBackPeriod = 639473;
    $request->createDataSourceRequest->configuration->slackConfiguration->privateChannelFilter = [
        'ipsam',
        'ea',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->publicChannelFilter = [
        'vel',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->secretArn = 'possimus';
    $request->createDataSourceRequest->configuration->slackConfiguration->sinceCrawlDate = 'magnam';
    $request->createDataSourceRequest->configuration->slackConfiguration->slackEntityList = [
        SlackEntityEnum::PRIVATE_CHANNEL,
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->teamId = 'laudantium';
    $request->createDataSourceRequest->configuration->slackConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->configuration->slackConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->configuration->slackConfiguration->vpcConfiguration->securityGroupIds = [
        'dolor',
    ];
    $request->createDataSourceRequest->configuration->slackConfiguration->vpcConfiguration->subnetIds = [
        'quasi',
        'ex',
        'nulla',
        'excepturi',
    ];
    $request->createDataSourceRequest->configuration->templateConfiguration = new TemplateConfiguration();
    $request->createDataSourceRequest->configuration->templateConfiguration->template = [
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
    ];
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration = new WebCrawlerConfiguration();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->authenticationConfiguration = new AuthenticationConfiguration();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->authenticationConfiguration->basicAuthentication = [
        new BasicAuthenticationConfiguration(),
        new BasicAuthenticationConfiguration(),
    ];
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->crawlDepth = 81101;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->maxContentSizePerPageInMegaBytes = 3018.31;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->maxLinksPerPage = 407241;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->maxUrlsPerMinuteCrawlRate = 775220;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->credentials = 'consectetur';
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->host = 'recusandae';
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->port = 132487;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urlExclusionPatterns = [
        'eaque',
        'a',
    ];
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urlInclusionPatterns = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls = new Urls();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration = new SeedUrlConfiguration();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration->seedUrls = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration->webCrawlerMode = WebCrawlerModeEnum::HOST_ONLY;
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls->siteMapsConfiguration = new SiteMapsConfiguration();
    $request->createDataSourceRequest->configuration->webCrawlerConfiguration->urls->siteMapsConfiguration->siteMaps = [
        'dolorum',
    ];
    $request->createDataSourceRequest->configuration->workDocsConfiguration = new WorkDocsConfiguration();
    $request->createDataSourceRequest->configuration->workDocsConfiguration->crawlComments = false;
    $request->createDataSourceRequest->configuration->workDocsConfiguration->exclusionPatterns = [
        'placeat',
        'velit',
        'eum',
    ];
    $request->createDataSourceRequest->configuration->workDocsConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->createDataSourceRequest->configuration->workDocsConfiguration->inclusionPatterns = [
        'quas',
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->createDataSourceRequest->configuration->workDocsConfiguration->organizationId = 'libero';
    $request->createDataSourceRequest->configuration->workDocsConfiguration->useChangeLog = false;
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->inlineConfigurations = [
        new InlineCustomDocumentEnrichmentConfiguration(),
    ];
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration = new HookConfiguration();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'tempora';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T00:12:37.683Z');
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 591935;
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'molestiae',
    ];
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'magnam';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::NOT_EQUALS;
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->lambdaArn = 'eius';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->s3Bucket = 'esse';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration = new HookConfiguration();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'esse';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-20T04:54:39.392Z');
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 442015;
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'fugiat',
        'ut',
        'eum',
    ];
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'suscipit';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::NOT_EXISTS;
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->lambdaArn = 'eos';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->s3Bucket = 'praesentium';
    $request->createDataSourceRequest->customDocumentEnrichmentConfiguration->roleArn = 'quisquam';
    $request->createDataSourceRequest->description = 'veritatis';
    $request->createDataSourceRequest->indexId = 'ipsa';
    $request->createDataSourceRequest->languageCode = 'id';
    $request->createDataSourceRequest->name = 'Luis Satterfield';
    $request->createDataSourceRequest->roleArn = 'fuga';
    $request->createDataSourceRequest->schedule = 'eius';
    $request->createDataSourceRequest->tags = [
        new Tag(),
    ];
    $request->createDataSourceRequest->type = DataSourceTypeEnum::CONFLUENCE;
    $request->createDataSourceRequest->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->createDataSourceRequest->vpcConfiguration->securityGroupIds = [
        'cupiditate',
    ];
    $request->createDataSourceRequest->vpcConfiguration->subnetIds = [
        'tempora',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = CreateDataSourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_DATA_SOURCE;

    $response = $sdk->sdk->createDataSource($request);

    if ($response->createDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExperience

Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExperienceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ContentSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserIdentityConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperienceRequest();
    $request->createExperienceRequest = new CreateExperienceRequest();
    $request->createExperienceRequest->clientToken = 'aperiam';
    $request->createExperienceRequest->configuration = new ExperienceConfiguration();
    $request->createExperienceRequest->configuration->contentSourceConfiguration = new ContentSourceConfiguration();
    $request->createExperienceRequest->configuration->contentSourceConfiguration->dataSourceIds = [
        'quod',
        'dignissimos',
        'inventore',
    ];
    $request->createExperienceRequest->configuration->contentSourceConfiguration->directPutContent = false;
    $request->createExperienceRequest->configuration->contentSourceConfiguration->faqIds = [
        'totam',
        'accusamus',
    ];
    $request->createExperienceRequest->configuration->userIdentityConfiguration = new UserIdentityConfiguration();
    $request->createExperienceRequest->configuration->userIdentityConfiguration->identityAttributeName = 'aliquam';
    $request->createExperienceRequest->description = 'odio';
    $request->createExperienceRequest->indexId = 'occaecati';
    $request->createExperienceRequest->name = 'Miranda Daniel';
    $request->createExperienceRequest->roleArn = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = CreateExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_EXPERIENCE;

    $response = $sdk->sdk->createExperience($request);

    if ($response->createExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFaq

<p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFaqRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFaqRequest;
use \OpenAPI\OpenAPI\Models\Shared\FaqFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFaqXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFaqRequest();
    $request->createFaqRequest = new CreateFaqRequest();
    $request->createFaqRequest->clientToken = 'fuga';
    $request->createFaqRequest->description = 'mollitia';
    $request->createFaqRequest->fileFormat = FaqFileFormatEnum::CSV;
    $request->createFaqRequest->indexId = 'atque';
    $request->createFaqRequest->languageCode = 'explicabo';
    $request->createFaqRequest->name = 'Sue Corkery';
    $request->createFaqRequest->roleArn = 'ratione';
    $request->createFaqRequest->s3Path = new S3Path();
    $request->createFaqRequest->s3Path->bucket = 'explicabo';
    $request->createFaqRequest->s3Path->key = 'saepe';
    $request->createFaqRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CreateFaqXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_FAQ;

    $response = $sdk->sdk->createFaq($request);

    if ($response->createFaqResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFeaturedResultsSet

<p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeaturedDocument;
use \OpenAPI\OpenAPI\Models\Shared\FeaturedResultsSetStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeaturedResultsSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFeaturedResultsSetRequest();
    $request->createFeaturedResultsSetRequest = new CreateFeaturedResultsSetRequest();
    $request->createFeaturedResultsSetRequest->clientToken = 'quod';
    $request->createFeaturedResultsSetRequest->description = 'nam';
    $request->createFeaturedResultsSetRequest->featuredDocuments = [
        new FeaturedDocument(),
        new FeaturedDocument(),
        new FeaturedDocument(),
        new FeaturedDocument(),
    ];
    $request->createFeaturedResultsSetRequest->featuredResultsSetName = 'aliquid';
    $request->createFeaturedResultsSetRequest->indexId = 'quasi';
    $request->createFeaturedResultsSetRequest->queryTexts = [
        'vel',
        'harum',
        'molestiae',
        'rerum',
    ];
    $request->createFeaturedResultsSetRequest->status = FeaturedResultsSetStatusEnum::INACTIVE;
    $request->createFeaturedResultsSetRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = CreateFeaturedResultsSetXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_FEATURED_RESULTS_SET;

    $response = $sdk->sdk->createFeaturedResultsSet($request);

    if ($response->createFeaturedResultsSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIndex

<p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\IndexEditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\UserContextPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserGroupResolutionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserGroupResolutionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTokenConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JsonTokenTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JwtTokenTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KeyLocationEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIndexRequest();
    $request->createIndexRequest = new CreateIndexRequest();
    $request->createIndexRequest->clientToken = 'consequuntur';
    $request->createIndexRequest->description = 'consequatur';
    $request->createIndexRequest->edition = IndexEditionEnum::ENTERPRISE_EDITION;
    $request->createIndexRequest->name = 'Miranda Feest';
    $request->createIndexRequest->roleArn = 'provident';
    $request->createIndexRequest->serverSideEncryptionConfiguration = new ServerSideEncryptionConfiguration();
    $request->createIndexRequest->serverSideEncryptionConfiguration->kmsKeyId = 'a';
    $request->createIndexRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createIndexRequest->userContextPolicy = UserContextPolicyEnum::USER_TOKEN;
    $request->createIndexRequest->userGroupResolutionConfiguration = new UserGroupResolutionConfiguration();
    $request->createIndexRequest->userGroupResolutionConfiguration->userGroupResolutionMode = UserGroupResolutionModeEnum::AWS_SSO;
    $request->createIndexRequest->userTokenConfigurations = [
        new UserTokenConfiguration(),
    ];
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = CreateIndexXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_INDEX;

    $response = $sdk->sdk->createIndex($request);

    if ($response->createIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQuerySuggestionsBlockList

<p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuerySuggestionsBlockListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQuerySuggestionsBlockListRequest();
    $request->createQuerySuggestionsBlockListRequest = new CreateQuerySuggestionsBlockListRequest();
    $request->createQuerySuggestionsBlockListRequest->clientToken = 'asperiores';
    $request->createQuerySuggestionsBlockListRequest->description = 'facere';
    $request->createQuerySuggestionsBlockListRequest->indexId = 'veritatis';
    $request->createQuerySuggestionsBlockListRequest->name = 'Ann Murphy';
    $request->createQuerySuggestionsBlockListRequest->roleArn = 'tenetur';
    $request->createQuerySuggestionsBlockListRequest->sourceS3Path = new S3Path();
    $request->createQuerySuggestionsBlockListRequest->sourceS3Path->bucket = 'quae';
    $request->createQuerySuggestionsBlockListRequest->sourceS3Path->key = 'earum';
    $request->createQuerySuggestionsBlockListRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = CreateQuerySuggestionsBlockListXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_QUERY_SUGGESTIONS_BLOCK_LIST;

    $response = $sdk->sdk->createQuerySuggestionsBlockList($request);

    if ($response->createQuerySuggestionsBlockListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createThesaurus

<p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateThesaurusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateThesaurusRequest();
    $request->createThesaurusRequest = new CreateThesaurusRequest();
    $request->createThesaurusRequest->clientToken = 'sapiente';
    $request->createThesaurusRequest->description = 'dicta';
    $request->createThesaurusRequest->indexId = 'ullam';
    $request->createThesaurusRequest->name = 'Ms. Dana Huel';
    $request->createThesaurusRequest->roleArn = 'quibusdam';
    $request->createThesaurusRequest->sourceS3Path = new S3Path();
    $request->createThesaurusRequest->sourceS3Path->bucket = 'ex';
    $request->createThesaurusRequest->sourceS3Path->key = 'deleniti';
    $request->createThesaurusRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = CreateThesaurusXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_CREATE_THESAURUS;

    $response = $sdk->sdk->createThesaurus($request);

    if ($response->createThesaurusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessControlConfiguration

Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessControlConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessControlConfigurationRequest();
    $request->deleteAccessControlConfigurationRequest = new DeleteAccessControlConfigurationRequest();
    $request->deleteAccessControlConfigurationRequest->id = '7051339d-0808-46a1-8403-94c26071f93f';
    $request->deleteAccessControlConfigurationRequest->indexId = 'voluptas';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeleteAccessControlConfigurationXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_ACCESS_CONTROL_CONFIGURATION;

    $response = $sdk->sdk->deleteAccessControlConfiguration($request);

    if ($response->deleteAccessControlConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataSource

Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataSourceRequest();
    $request->deleteDataSourceRequest = new DeleteDataSourceRequest();
    $request->deleteDataSourceRequest->id = 'c7af515c-c413-4aa6-baae-8d67864dbb67';
    $request->deleteDataSourceRequest->indexId = 'corporis';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = DeleteDataSourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_DATA_SOURCE;

    $response = $sdk->sdk->deleteDataSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExperience

Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteExperienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExperienceRequest();
    $request->deleteExperienceRequest = new DeleteExperienceRequest();
    $request->deleteExperienceRequest->id = '375ed4f6-fbee-441f-b331-7fe35b60eb1e';
    $request->deleteExperienceRequest->indexId = 'similique';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DeleteExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_EXPERIENCE;

    $response = $sdk->sdk->deleteExperience($request);

    if ($response->deleteExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFaq

Removes an FAQ from an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaqRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFaqRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaqXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFaqRequest();
    $request->deleteFaqRequest = new DeleteFaqRequest();
    $request->deleteFaqRequest->id = 'a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb';
    $request->deleteFaqRequest->indexId = 'voluptate';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteFaqXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_FAQ;

    $response = $sdk->sdk->deleteFaq($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIndex

Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndexRequest();
    $request->deleteIndexRequest = new DeleteIndexRequest();
    $request->deleteIndexRequest->id = '6b26916f-e1f0-48f4-a94e-3698f447f603';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = DeleteIndexXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_INDEX;

    $response = $sdk->sdk->deleteIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePrincipalMapping

<p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePrincipalMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePrincipalMappingRequest();
    $request->deletePrincipalMappingRequest = new DeletePrincipalMappingRequest();
    $request->deletePrincipalMappingRequest->dataSourceId = 'rem';
    $request->deletePrincipalMappingRequest->groupId = 'sit';
    $request->deletePrincipalMappingRequest->indexId = 'nobis';
    $request->deletePrincipalMappingRequest->orderingId = 625637;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = DeletePrincipalMappingXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_PRINCIPAL_MAPPING;

    $response = $sdk->sdk->deletePrincipalMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQuerySuggestionsBlockList

<p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuerySuggestionsBlockListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQuerySuggestionsBlockListRequest();
    $request->deleteQuerySuggestionsBlockListRequest = new DeleteQuerySuggestionsBlockListRequest();
    $request->deleteQuerySuggestionsBlockListRequest->id = 'e457e185-8b6a-489f-be3a-5aa8e4824d0a';
    $request->deleteQuerySuggestionsBlockListRequest->indexId = 'expedita';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DeleteQuerySuggestionsBlockListXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_QUERY_SUGGESTIONS_BLOCK_LIST;

    $response = $sdk->sdk->deleteQuerySuggestionsBlockList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteThesaurus

Deletes an existing Amazon Kendra thesaurus. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThesaurusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThesaurusRequest();
    $request->deleteThesaurusRequest = new DeleteThesaurusRequest();
    $request->deleteThesaurusRequest->id = 'e5186206-5e90-44f3-b119-4b8abf603a79';
    $request->deleteThesaurusRequest->indexId = 'reiciendis';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DeleteThesaurusXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DELETE_THESAURUS;

    $response = $sdk->sdk->deleteThesaurus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccessControlConfiguration

Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccessControlConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccessControlConfigurationRequest();
    $request->describeAccessControlConfigurationRequest = new DescribeAccessControlConfigurationRequest();
    $request->describeAccessControlConfigurationRequest->id = '7da8a50c-e187-4f86-bc17-3d689eee9526';
    $request->describeAccessControlConfigurationRequest->indexId = 'maiores';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DescribeAccessControlConfigurationXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_ACCESS_CONTROL_CONFIGURATION;

    $response = $sdk->sdk->describeAccessControlConfiguration($request);

    if ($response->describeAccessControlConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataSource

Gets information about an Amazon Kendra data source connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataSourceRequest();
    $request->describeDataSourceRequest = new DescribeDataSourceRequest();
    $request->describeDataSourceRequest->id = '81ead4f0-e101-4256-bf94-e29e973e922a';
    $request->describeDataSourceRequest->indexId = 'quis';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DescribeDataSourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_DATA_SOURCE;

    $response = $sdk->sdk->describeDataSource($request);

    if ($response->describeDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExperience

Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExperienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExperienceRequest();
    $request->describeExperienceRequest = new DescribeExperienceRequest();
    $request->describeExperienceRequest->id = 'e060807e-2b6e-43ab-8845-f0597a60ff2a';
    $request->describeExperienceRequest->indexId = 'minima';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DescribeExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_EXPERIENCE;

    $response = $sdk->sdk->describeExperience($request);

    if ($response->describeExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFaq

Gets information about an FAQ list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFaqRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFaqRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFaqXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFaqRequest();
    $request->describeFaqRequest = new DescribeFaqRequest();
    $request->describeFaqRequest->id = '764a3e86-5e79-456f-9251-a5a9da660ff5';
    $request->describeFaqRequest->indexId = 'in';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DescribeFaqXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_FAQ;

    $response = $sdk->sdk->describeFaq($request);

    if ($response->describeFaqResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFeaturedResultsSet

Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeaturedResultsSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFeaturedResultsSetRequest();
    $request->describeFeaturedResultsSetRequest = new DescribeFeaturedResultsSetRequest();
    $request->describeFeaturedResultsSetRequest->featuredResultsSetId = 'molestias';
    $request->describeFeaturedResultsSetRequest->indexId = 'officiis';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = DescribeFeaturedResultsSetXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_FEATURED_RESULTS_SET;

    $response = $sdk->sdk->describeFeaturedResultsSet($request);

    if ($response->describeFeaturedResultsSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIndex

Gets information about an existing Amazon Kendra index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIndexRequest();
    $request->describeIndexRequest = new DescribeIndexRequest();
    $request->describeIndexRequest->id = '2c103264-8dc2-4f61-9199-ebfd0e9fe6c6';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DescribeIndexXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_INDEX;

    $response = $sdk->sdk->describeIndex($request);

    if ($response->describeIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePrincipalMapping

<p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePrincipalMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePrincipalMappingRequest();
    $request->describePrincipalMappingRequest = new DescribePrincipalMappingRequest();
    $request->describePrincipalMappingRequest->dataSourceId = 'nulla';
    $request->describePrincipalMappingRequest->groupId = 'consequatur';
    $request->describePrincipalMappingRequest->indexId = 'quasi';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribePrincipalMappingXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_PRINCIPAL_MAPPING;

    $response = $sdk->sdk->describePrincipalMapping($request);

    if ($response->describePrincipalMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeQuerySuggestionsBlockList

<p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQuerySuggestionsBlockListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeQuerySuggestionsBlockListRequest();
    $request->describeQuerySuggestionsBlockListRequest = new DescribeQuerySuggestionsBlockListRequest();
    $request->describeQuerySuggestionsBlockListRequest->id = '2fde0477-1778-4ff6-9d01-7476360a15db';
    $request->describeQuerySuggestionsBlockListRequest->indexId = 'aliquid';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DescribeQuerySuggestionsBlockListXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_QUERY_SUGGESTIONS_BLOCK_LIST;

    $response = $sdk->sdk->describeQuerySuggestionsBlockList($request);

    if ($response->describeQuerySuggestionsBlockListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeQuerySuggestionsConfig

<p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQuerySuggestionsConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeQuerySuggestionsConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQuerySuggestionsConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeQuerySuggestionsConfigRequest();
    $request->describeQuerySuggestionsConfigRequest = new DescribeQuerySuggestionsConfigRequest();
    $request->describeQuerySuggestionsConfigRequest->indexId = 'id';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribeQuerySuggestionsConfigXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_QUERY_SUGGESTIONS_CONFIG;

    $response = $sdk->sdk->describeQuerySuggestionsConfig($request);

    if ($response->describeQuerySuggestionsConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeThesaurus

Gets information about an existing Amazon Kendra thesaurus.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThesaurusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeThesaurusRequest();
    $request->describeThesaurusRequest = new DescribeThesaurusRequest();
    $request->describeThesaurusRequest->id = '5851d6c6-45b0-48b6-9891-baa0fe1ade00';
    $request->describeThesaurusRequest->indexId = 'deleniti';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DescribeThesaurusXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_THESAURUS;

    $response = $sdk->sdk->describeThesaurus($request);

    if ($response->describeThesaurusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateEntitiesFromExperience

Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateEntitiesFromExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateEntitiesFromExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateEntitiesFromExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateEntitiesFromExperienceRequest();
    $request->disassociateEntitiesFromExperienceRequest = new DisassociateEntitiesFromExperienceRequest();
    $request->disassociateEntitiesFromExperienceRequest->entityList = [
        new EntityConfiguration(),
    ];
    $request->disassociateEntitiesFromExperienceRequest->id = '50d8cdb5-a341-4814-b010-421813d5208e';
    $request->disassociateEntitiesFromExperienceRequest->indexId = 'impedit';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = DisassociateEntitiesFromExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DISASSOCIATE_ENTITIES_FROM_EXPERIENCE;

    $response = $sdk->sdk->disassociateEntitiesFromExperience($request);

    if ($response->disassociateEntitiesFromExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociatePersonasFromEntities

Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePersonasFromEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociatePersonasFromEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePersonasFromEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociatePersonasFromEntitiesRequest();
    $request->disassociatePersonasFromEntitiesRequest = new DisassociatePersonasFromEntitiesRequest();
    $request->disassociatePersonasFromEntitiesRequest->entityIds = [
        'vel',
        'voluptatum',
    ];
    $request->disassociatePersonasFromEntitiesRequest->id = '451c6c6e-205e-416d-aab3-fec9578a6458';
    $request->disassociatePersonasFromEntitiesRequest->indexId = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DisassociatePersonasFromEntitiesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_DISASSOCIATE_PERSONAS_FROM_ENTITIES;

    $response = $sdk->sdk->disassociatePersonasFromEntities($request);

    if ($response->disassociatePersonasFromEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuerySuggestions

<p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuerySuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQuerySuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuerySuggestionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuerySuggestionsRequest();
    $request->getQuerySuggestionsRequest = new GetQuerySuggestionsRequest();
    $request->getQuerySuggestionsRequest->indexId = 'rem';
    $request->getQuerySuggestionsRequest->maxSuggestionsCount = 851854;
    $request->getQuerySuggestionsRequest->queryText = 'dicta';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = GetQuerySuggestionsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_GET_QUERY_SUGGESTIONS;

    $response = $sdk->sdk->getQuerySuggestions($request);

    if ($response->getQuerySuggestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshots

Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\IntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotsRequest();
    $request->getSnapshotsRequest = new GetSnapshotsRequest();
    $request->getSnapshotsRequest->indexId = 'alias';
    $request->getSnapshotsRequest->interval = IntervalEnum::TWO_WEEKS_AGO;
    $request->getSnapshotsRequest->maxResults = 178580;
    $request->getSnapshotsRequest->metricType = MetricTypeEnum::DOCS_BY_CLICK_COUNT;
    $request->getSnapshotsRequest->nextToken = 'iste';
    $request->maxResults = 'magni';
    $request->nextToken = 'inventore';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = GetSnapshotsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_GET_SNAPSHOTS;

    $response = $sdk->sdk->getSnapshots($request);

    if ($response->getSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessControlConfigurations

Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessControlConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccessControlConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessControlConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessControlConfigurationsRequest();
    $request->listAccessControlConfigurationsRequest = new ListAccessControlConfigurationsRequest();
    $request->listAccessControlConfigurationsRequest->indexId = 'praesentium';
    $request->listAccessControlConfigurationsRequest->maxResults = 802692;
    $request->listAccessControlConfigurationsRequest->nextToken = 'magnam';
    $request->maxResults = 'temporibus';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = ListAccessControlConfigurationsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_ACCESS_CONTROL_CONFIGURATIONS;

    $response = $sdk->sdk->listAccessControlConfigurations($request);

    if ($response->listAccessControlConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSourceSyncJobs

Gets statistics about synchronizing a data source connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSourceSyncJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataSourceSyncJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSyncJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSourceSyncJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSourceSyncJobsRequest();
    $request->listDataSourceSyncJobsRequest = new ListDataSourceSyncJobsRequest();
    $request->listDataSourceSyncJobsRequest->id = 'e056013f-59da-4757-a59e-cfef66ef1caa';
    $request->listDataSourceSyncJobsRequest->indexId = 'consectetur';
    $request->listDataSourceSyncJobsRequest->maxResults = 244889;
    $request->listDataSourceSyncJobsRequest->nextToken = 'atque';
    $request->listDataSourceSyncJobsRequest->startTimeFilter = new TimeRange();
    $request->listDataSourceSyncJobsRequest->startTimeFilter->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T20:12:48.686Z');
    $request->listDataSourceSyncJobsRequest->startTimeFilter->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-03T11:55:17.660Z');
    $request->listDataSourceSyncJobsRequest->statusFilter = DataSourceSyncJobStatusEnum::SYNCING_INDEXING;
    $request->maxResults = 'nam';
    $request->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ListDataSourceSyncJobsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_DATA_SOURCE_SYNC_JOBS;

    $response = $sdk->sdk->listDataSourceSyncJobs($request);

    if ($response->listDataSourceSyncJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSources

Lists the data source connectors that you have created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSourcesRequest();
    $request->listDataSourcesRequest = new ListDataSourcesRequest();
    $request->listDataSourcesRequest->indexId = 'quibusdam';
    $request->listDataSourcesRequest->maxResults = 437814;
    $request->listDataSourcesRequest->nextToken = 'odit';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'vel';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListDataSourcesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_DATA_SOURCES;

    $response = $sdk->sdk->listDataSources($request);

    if ($response->listDataSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntityPersonas

Lists specific permissions of users and groups with access to your Amazon Kendra experience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityPersonasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntityPersonasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityPersonasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntityPersonasRequest();
    $request->listEntityPersonasRequest = new ListEntityPersonasRequest();
    $request->listEntityPersonasRequest->id = '2c431066-1e96-4349-a1cf-9e06e3a43700';
    $request->listEntityPersonasRequest->indexId = 'consequatur';
    $request->listEntityPersonasRequest->maxResults = 639705;
    $request->listEntityPersonasRequest->nextToken = 'recusandae';
    $request->maxResults = 'ea';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = ListEntityPersonasXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_ENTITY_PERSONAS;

    $response = $sdk->sdk->listEntityPersonas($request);

    if ($response->listEntityPersonasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperienceEntities

Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperienceEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExperienceEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExperienceEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperienceEntitiesRequest();
    $request->listExperienceEntitiesRequest = new ListExperienceEntitiesRequest();
    $request->listExperienceEntitiesRequest->id = '759eac55-a974-41d3-9135-2965bb8a7202';
    $request->listExperienceEntitiesRequest->indexId = 'vel';
    $request->listExperienceEntitiesRequest->nextToken = 'quae';
    $request->nextToken = 'quae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'unde';
    $request->xAmzTarget = ListExperienceEntitiesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_EXPERIENCE_ENTITIES;

    $response = $sdk->sdk->listExperienceEntities($request);

    if ($response->listExperienceEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperiences

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperiencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExperiencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExperiencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperiencesRequest();
    $request->listExperiencesRequest = new ListExperiencesRequest();
    $request->listExperiencesRequest->indexId = 'nulla';
    $request->listExperiencesRequest->maxResults = 714376;
    $request->listExperiencesRequest->nextToken = 'maxime';
    $request->maxResults = 'quia';
    $request->nextToken = 'quia';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListExperiencesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_EXPERIENCES;

    $response = $sdk->sdk->listExperiences($request);

    if ($response->listExperiencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFaqs

Gets a list of FAQ lists associated with an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFaqsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFaqsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFaqsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFaqsRequest();
    $request->listFaqsRequest = new ListFaqsRequest();
    $request->listFaqsRequest->indexId = 'officia';
    $request->listFaqsRequest->maxResults = 554603;
    $request->listFaqsRequest->nextToken = 'placeat';
    $request->maxResults = 'sit';
    $request->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = ListFaqsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_FAQS;

    $response = $sdk->sdk->listFaqs($request);

    if ($response->listFaqsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeaturedResultsSets

Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFeaturedResultsSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFeaturedResultsSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFeaturedResultsSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFeaturedResultsSetsRequest();
    $request->listFeaturedResultsSetsRequest = new ListFeaturedResultsSetsRequest();
    $request->listFeaturedResultsSetsRequest->indexId = 'distinctio';
    $request->listFeaturedResultsSetsRequest->maxResults = 32273;
    $request->listFeaturedResultsSetsRequest->nextToken = 'autem';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->xAmzTarget = ListFeaturedResultsSetsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_FEATURED_RESULTS_SETS;

    $response = $sdk->sdk->listFeaturedResultsSets($request);

    if ($response->listFeaturedResultsSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupsOlderThanOrderingId

<p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsOlderThanOrderingIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupsOlderThanOrderingIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsOlderThanOrderingIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsOlderThanOrderingIdRequest();
    $request->listGroupsOlderThanOrderingIdRequest = new ListGroupsOlderThanOrderingIdRequest();
    $request->listGroupsOlderThanOrderingIdRequest->dataSourceId = 'molestiae';
    $request->listGroupsOlderThanOrderingIdRequest->indexId = 'provident';
    $request->listGroupsOlderThanOrderingIdRequest->maxResults = 882284;
    $request->listGroupsOlderThanOrderingIdRequest->nextToken = 'necessitatibus';
    $request->listGroupsOlderThanOrderingIdRequest->orderingId = 733289;
    $request->maxResults = 'sint';
    $request->nextToken = 'ea';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListGroupsOlderThanOrderingIdXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_GROUPS_OLDER_THAN_ORDERING_ID;

    $response = $sdk->sdk->listGroupsOlderThanOrderingId($request);

    if ($response->listGroupsOlderThanOrderingIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIndices

Lists the Amazon Kendra indexes that you created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIndicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIndicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIndicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIndicesRequest();
    $request->listIndicesRequest = new ListIndicesRequest();
    $request->listIndicesRequest->maxResults = 737279;
    $request->listIndicesRequest->nextToken = 'at';
    $request->maxResults = 'alias';
    $request->nextToken = 'quia';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = ListIndicesXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_INDICES;

    $response = $sdk->sdk->listIndices($request);

    if ($response->listIndicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQuerySuggestionsBlockLists

<p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListQuerySuggestionsBlockListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListQuerySuggestionsBlockListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListQuerySuggestionsBlockListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQuerySuggestionsBlockListsRequest();
    $request->listQuerySuggestionsBlockListsRequest = new ListQuerySuggestionsBlockListsRequest();
    $request->listQuerySuggestionsBlockListsRequest->indexId = 'quibusdam';
    $request->listQuerySuggestionsBlockListsRequest->maxResults = 483518;
    $request->listQuerySuggestionsBlockListsRequest->nextToken = 'praesentium';
    $request->maxResults = 'odit';
    $request->nextToken = 'explicabo';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = ListQuerySuggestionsBlockListsXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_QUERY_SUGGESTIONS_BLOCK_LISTS;

    $response = $sdk->sdk->listQuerySuggestionsBlockLists($request);

    if ($response->listQuerySuggestionsBlockListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'quidem';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThesauri

Lists the thesauri for an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThesauriRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListThesauriRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListThesauriXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThesauriRequest();
    $request->listThesauriRequest = new ListThesauriRequest();
    $request->listThesauriRequest->indexId = 'numquam';
    $request->listThesauriRequest->maxResults = 256916;
    $request->listThesauriRequest->nextToken = 'nesciunt';
    $request->maxResults = 'at';
    $request->nextToken = 'officia';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = ListThesauriXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_LIST_THESAURI;

    $response = $sdk->sdk->listThesauri($request);

    if ($response->listThesauriResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPrincipalMapping

<p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPrincipalMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupMembers;
use \OpenAPI\OpenAPI\Models\Shared\MemberGroup;
use \OpenAPI\OpenAPI\Models\Shared\MemberUser;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Operations\PutPrincipalMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPrincipalMappingRequest();
    $request->putPrincipalMappingRequest = new PutPrincipalMappingRequest();
    $request->putPrincipalMappingRequest->dataSourceId = 'cupiditate';
    $request->putPrincipalMappingRequest->groupId = 'minima';
    $request->putPrincipalMappingRequest->groupMembers = new GroupMembers();
    $request->putPrincipalMappingRequest->groupMembers->memberGroups = [
        new MemberGroup(),
        new MemberGroup(),
        new MemberGroup(),
        new MemberGroup(),
    ];
    $request->putPrincipalMappingRequest->groupMembers->memberUsers = [
        new MemberUser(),
        new MemberUser(),
    ];
    $request->putPrincipalMappingRequest->groupMembers->s3PathforGroupMembers = new S3Path();
    $request->putPrincipalMappingRequest->groupMembers->s3PathforGroupMembers->bucket = 'neque';
    $request->putPrincipalMappingRequest->groupMembers->s3PathforGroupMembers->key = 'in';
    $request->putPrincipalMappingRequest->indexId = 'minus';
    $request->putPrincipalMappingRequest->orderingId = 433077;
    $request->putPrincipalMappingRequest->roleArn = 'modi';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = PutPrincipalMappingXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_PUT_PRINCIPAL_MAPPING;

    $response = $sdk->sdk->putPrincipalMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## query

<p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeFilter;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttribute;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\DocumentRelevanceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Relevance;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Facet;
use \OpenAPI\OpenAPI\Models\Shared\QueryResultTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpellCorrectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserContext;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceGroup;
use \OpenAPI\OpenAPI\Models\Operations\QueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->queryRequest = new QueryRequest();
    $request->queryRequest->attributeFilter = new AttributeFilter();
    $request->queryRequest->attributeFilter->andAllFilters = [
        new AttributeFilter(),
    ];
    $request->queryRequest->attributeFilter->containsAll = new DocumentAttribute();
    $request->queryRequest->attributeFilter->containsAll->key = 'labore';
    $request->queryRequest->attributeFilter->containsAll->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->containsAll->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-05T06:31:50.944Z');
    $request->queryRequest->attributeFilter->containsAll->value->longValue = 375994;
    $request->queryRequest->attributeFilter->containsAll->value->stringListValue = [
        'velit',
        'minus',
        'fuga',
        'nostrum',
    ];
    $request->queryRequest->attributeFilter->containsAll->value->stringValue = 'est';
    $request->queryRequest->attributeFilter->containsAny = new DocumentAttribute();
    $request->queryRequest->attributeFilter->containsAny->key = 'impedit';
    $request->queryRequest->attributeFilter->containsAny->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->containsAny->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-17T04:42:29.949Z');
    $request->queryRequest->attributeFilter->containsAny->value->longValue = 878601;
    $request->queryRequest->attributeFilter->containsAny->value->stringListValue = [
        'repellat',
    ];
    $request->queryRequest->attributeFilter->containsAny->value->stringValue = 'pariatur';
    $request->queryRequest->attributeFilter->equalsTo = new DocumentAttribute();
    $request->queryRequest->attributeFilter->equalsTo->key = 'nemo';
    $request->queryRequest->attributeFilter->equalsTo->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->equalsTo->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-15T11:44:44.229Z');
    $request->queryRequest->attributeFilter->equalsTo->value->longValue = 486410;
    $request->queryRequest->attributeFilter->equalsTo->value->stringListValue = [
        'in',
        'ducimus',
    ];
    $request->queryRequest->attributeFilter->equalsTo->value->stringValue = 'excepturi';
    $request->queryRequest->attributeFilter->greaterThan = new DocumentAttribute();
    $request->queryRequest->attributeFilter->greaterThan->key = 'dolores';
    $request->queryRequest->attributeFilter->greaterThan->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->greaterThan->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T21:28:00.704Z');
    $request->queryRequest->attributeFilter->greaterThan->value->longValue = 498180;
    $request->queryRequest->attributeFilter->greaterThan->value->stringListValue = [
        'pariatur',
        'itaque',
    ];
    $request->queryRequest->attributeFilter->greaterThan->value->stringValue = 'similique';
    $request->queryRequest->attributeFilter->greaterThanOrEquals = new DocumentAttribute();
    $request->queryRequest->attributeFilter->greaterThanOrEquals->key = 'optio';
    $request->queryRequest->attributeFilter->greaterThanOrEquals->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->greaterThanOrEquals->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T07:22:54.614Z');
    $request->queryRequest->attributeFilter->greaterThanOrEquals->value->longValue = 416692;
    $request->queryRequest->attributeFilter->greaterThanOrEquals->value->stringListValue = [
        'placeat',
        'quidem',
        'exercitationem',
        'quam',
    ];
    $request->queryRequest->attributeFilter->greaterThanOrEquals->value->stringValue = 'dolorem';
    $request->queryRequest->attributeFilter->lessThan = new DocumentAttribute();
    $request->queryRequest->attributeFilter->lessThan->key = 'modi';
    $request->queryRequest->attributeFilter->lessThan->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->lessThan->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T22:19:22.955Z');
    $request->queryRequest->attributeFilter->lessThan->value->longValue = 876027;
    $request->queryRequest->attributeFilter->lessThan->value->stringListValue = [
        'repudiandae',
    ];
    $request->queryRequest->attributeFilter->lessThan->value->stringValue = 'cum';
    $request->queryRequest->attributeFilter->lessThanOrEquals = new DocumentAttribute();
    $request->queryRequest->attributeFilter->lessThanOrEquals->key = 'dicta';
    $request->queryRequest->attributeFilter->lessThanOrEquals->value = new DocumentAttributeValue();
    $request->queryRequest->attributeFilter->lessThanOrEquals->value->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T18:01:47.888Z');
    $request->queryRequest->attributeFilter->lessThanOrEquals->value->longValue = 659268;
    $request->queryRequest->attributeFilter->lessThanOrEquals->value->stringListValue = [
        'nam',
    ];
    $request->queryRequest->attributeFilter->lessThanOrEquals->value->stringValue = 'dicta';
    $request->queryRequest->attributeFilter->notFilter = new AttributeFilter();
    $request->queryRequest->attributeFilter->orAllFilters = [
        new AttributeFilter(),
    ];
    $request->queryRequest->documentRelevanceOverrideConfigurations = [
        new DocumentRelevanceConfiguration(),
        new DocumentRelevanceConfiguration(),
        new DocumentRelevanceConfiguration(),
        new DocumentRelevanceConfiguration(),
    ];
    $request->queryRequest->facets = [
        new Facet(),
        new Facet(),
        new Facet(),
    ];
    $request->queryRequest->indexId = 'ipsa';
    $request->queryRequest->pageNumber = 497357;
    $request->queryRequest->pageSize = 980486;
    $request->queryRequest->queryResultTypeFilter = QueryResultTypeEnum::DOCUMENT;
    $request->queryRequest->queryText = 'quasi';
    $request->queryRequest->requestedDocumentAttributes = [
        'pariatur',
        'libero',
    ];
    $request->queryRequest->sortingConfiguration = new SortingConfiguration();
    $request->queryRequest->sortingConfiguration->documentAttributeKey = 'excepturi';
    $request->queryRequest->sortingConfiguration->sortOrder = SortOrderEnum::ASC;
    $request->queryRequest->spellCorrectionConfiguration = new SpellCorrectionConfiguration();
    $request->queryRequest->spellCorrectionConfiguration->includeQuerySpellCheckSuggestions = false;
    $request->queryRequest->userContext = new UserContext();
    $request->queryRequest->userContext->dataSourceGroups = [
        new DataSourceGroup(),
        new DataSourceGroup(),
    ];
    $request->queryRequest->userContext->groups = [
        'nostrum',
        'doloribus',
    ];
    $request->queryRequest->userContext->token = 'eligendi';
    $request->queryRequest->userContext->userId = 'sint';
    $request->queryRequest->visitorId = 'enim';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = QueryXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_QUERY;

    $response = $sdk->sdk->query($request);

    if ($response->queryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDataSourceSyncJob

Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDataSourceSyncJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDataSourceSyncJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDataSourceSyncJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDataSourceSyncJobRequest();
    $request->startDataSourceSyncJobRequest = new StartDataSourceSyncJobRequest();
    $request->startDataSourceSyncJobRequest->id = 'e189dbb3-0fcb-433e-a055-b197cd44e2f5';
    $request->startDataSourceSyncJobRequest->indexId = 'consequuntur';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = StartDataSourceSyncJobXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_START_DATA_SOURCE_SYNC_JOB;

    $response = $sdk->sdk->startDataSourceSyncJob($request);

    if ($response->startDataSourceSyncJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDataSourceSyncJob

Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDataSourceSyncJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDataSourceSyncJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopDataSourceSyncJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDataSourceSyncJobRequest();
    $request->stopDataSourceSyncJobRequest = new StopDataSourceSyncJobRequest();
    $request->stopDataSourceSyncJobRequest->id = '3bb6f48b-656b-4cdb-b5ff-2e4b27537a8c';
    $request->stopDataSourceSyncJobRequest->indexId = 'fugiat';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = StopDataSourceSyncJobXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_STOP_DATA_SOURCE_SYNC_JOB;

    $response = $sdk->sdk->stopDataSourceSyncJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitFeedback

<p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubmitFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClickFeedback;
use \OpenAPI\OpenAPI\Models\Shared\RelevanceFeedback;
use \OpenAPI\OpenAPI\Models\Shared\RelevanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubmitFeedbackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitFeedbackRequest();
    $request->submitFeedbackRequest = new SubmitFeedbackRequest();
    $request->submitFeedbackRequest->clickFeedbackItems = [
        new ClickFeedback(),
    ];
    $request->submitFeedbackRequest->indexId = 'dignissimos';
    $request->submitFeedbackRequest->queryId = 'esse';
    $request->submitFeedbackRequest->relevanceFeedbackItems = [
        new RelevanceFeedback(),
        new RelevanceFeedback(),
        new RelevanceFeedback(),
        new RelevanceFeedback(),
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = SubmitFeedbackXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_SUBMIT_FEEDBACK;

    $response = $sdk->sdk->submitFeedback($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'illo';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from an index, FAQ, or a data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'earum';
    $request->untagResourceRequest->tagKeys = [
        'praesentium',
        'nemo',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccessControlConfiguration

<p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccessControlConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\ReadAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HierarchicalPrincipal;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessControlConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccessControlConfigurationRequest();
    $request->updateAccessControlConfigurationRequest = new UpdateAccessControlConfigurationRequest();
    $request->updateAccessControlConfigurationRequest->accessControlList = [
        new Principal(),
        new Principal(),
        new Principal(),
        new Principal(),
    ];
    $request->updateAccessControlConfigurationRequest->description = 'aliquam';
    $request->updateAccessControlConfigurationRequest->hierarchicalAccessControlList = [
        new HierarchicalPrincipal(),
        new HierarchicalPrincipal(),
        new HierarchicalPrincipal(),
        new HierarchicalPrincipal(),
    ];
    $request->updateAccessControlConfigurationRequest->id = '98e0c2bb-89eb-475d-ad63-6c600503d8bb';
    $request->updateAccessControlConfigurationRequest->indexId = 'amet';
    $request->updateAccessControlConfigurationRequest->name = 'Dr. Mildred Larkin';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = UpdateAccessControlConfigurationXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_ACCESS_CONTROL_CONFIGURATION;

    $response = $sdk->sdk->updateAccessControlConfiguration($request);

    if ($response->updateAccessControlConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataSource

Updates an existing Amazon Kendra data source connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AlfrescoConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\AlfrescoEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BoxConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAttachmentFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceBlogFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluencePageFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceToIndexFieldMapping;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceSpaceFieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfluenceVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ColumnConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\QueryIdentifiersEnclosingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FsxConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FsxFileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GitHubConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GitHubDocumentCrawlProperties;
use \OpenAPI\OpenAPI\Models\Shared\OnPremiseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SaaSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDriveConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JiraConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IssueSubEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\OneDriveConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OneDriveUsers;
use \OpenAPI\OpenAPI\Models\Shared\QuipConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlListConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentsMetadataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceChatterFeedConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceChatterFeedIncludeFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceKnowledgeArticleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceCustomKnowledgeArticleTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceKnowledgeArticleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardKnowledgeArticleTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectAttachmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceStandardObjectNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowKnowledgeArticleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowServiceCatalogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowBuildVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharePointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SharePointOnlineAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharePointVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SlackEntityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebCrawlerConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Urls;
use \OpenAPI\OpenAPI\Models\Shared\SeedUrlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebCrawlerModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteMapsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WorkDocsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InlineCustomDocumentEnrichmentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeCondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeTarget;
use \OpenAPI\OpenAPI\Models\Shared\HookConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataSourceRequest();
    $request->updateDataSourceRequest = new UpdateDataSourceRequest();
    $request->updateDataSourceRequest->configuration = new DataSourceConfiguration();
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration = new AlfrescoConfiguration();
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->blogFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->crawlComments = false;
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->crawlSystemFolders = false;
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->documentLibraryFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->entityFilter = [
        AlfrescoEntityEnum::DOCUMENT_LIBRARY,
        AlfrescoEntityEnum::BLOG,
        AlfrescoEntityEnum::WIKI,
        AlfrescoEntityEnum::BLOG,
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->exclusionPatterns = [
        'eos',
        'totam',
        'dicta',
        'voluptatem',
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->inclusionPatterns = [
        'dolor',
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->secretArn = 'sunt';
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->siteId = 'a';
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->siteUrl = 'dolor';
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path = new S3Path();
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path->bucket = 'occaecati';
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->sslCertificateS3Path->key = 'atque';
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration->securityGroupIds = [
        'at',
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->vpcConfiguration->subnetIds = [
        'minus',
        'esse',
    ];
    $request->updateDataSourceRequest->configuration->alfrescoConfiguration->wikiFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration = new BoxConfiguration();
    $request->updateDataSourceRequest->configuration->boxConfiguration->commentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->crawlComments = false;
    $request->updateDataSourceRequest->configuration->boxConfiguration->crawlTasks = false;
    $request->updateDataSourceRequest->configuration->boxConfiguration->crawlWebLinks = false;
    $request->updateDataSourceRequest->configuration->boxConfiguration->enterpriseId = 'rerum';
    $request->updateDataSourceRequest->configuration->boxConfiguration->exclusionPatterns = [
        'aperiam',
        'dignissimos',
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->fileFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->inclusionPatterns = [
        'porro',
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->secretArn = 'provident';
    $request->updateDataSourceRequest->configuration->boxConfiguration->taskFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->configuration->boxConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->boxConfiguration->vpcConfiguration->securityGroupIds = [
        'dignissimos',
        'consectetur',
        'soluta',
        'natus',
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->vpcConfiguration->subnetIds = [
        'officia',
        'amet',
        'tenetur',
        'aspernatur',
    ];
    $request->updateDataSourceRequest->configuration->boxConfiguration->webLinkFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration = new ConfluenceConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration = new ConfluenceAttachmentConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration->attachmentFieldMappings = [
        new ConfluenceAttachmentToIndexFieldMapping(),
        new ConfluenceAttachmentToIndexFieldMapping(),
        new ConfluenceAttachmentToIndexFieldMapping(),
        new ConfluenceAttachmentToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->attachmentConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->authenticationType = ConfluenceAuthenticationTypeEnum::PAT;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->blogConfiguration = new ConfluenceBlogConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->blogConfiguration->blogFieldMappings = [
        new ConfluenceBlogToIndexFieldMapping(),
        new ConfluenceBlogToIndexFieldMapping(),
        new ConfluenceBlogToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->exclusionPatterns = [
        'vero',
        'qui',
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->inclusionPatterns = [
        'repellat',
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->pageConfiguration = new ConfluencePageConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->pageConfiguration->pageFieldMappings = [
        new ConfluencePageToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->credentials = 'explicabo';
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->host = 'exercitationem';
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->proxyConfiguration->port = 471457;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->secretArn = 'non';
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->serverUrl = 'ab';
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration = new ConfluenceSpaceConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->crawlArchivedSpaces = false;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->crawlPersonalSpaces = false;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->excludeSpaces = [
        'hic',
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->includeSpaces = [
        'delectus',
        'non',
        'distinctio',
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->spaceConfiguration->spaceFieldMappings = [
        new ConfluenceSpaceToIndexFieldMapping(),
        new ConfluenceSpaceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->version = ConfluenceVersionEnum::CLOUD;
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration->securityGroupIds = [
        'numquam',
        'repudiandae',
    ];
    $request->updateDataSourceRequest->configuration->confluenceConfiguration->vpcConfiguration->subnetIds = [
        'in',
        'explicabo',
    ];
    $request->updateDataSourceRequest->configuration->databaseConfiguration = new DatabaseConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->aclConfiguration = new AclConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->aclConfiguration->allowedGroupsColumnName = 'accusamus';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration = new ColumnConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->changeDetectingColumns = [
        'aperiam',
        'odit',
        'deleniti',
    ];
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentDataColumnName = 'enim';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentIdColumnName = 'voluptate';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->documentTitleColumnName = 'similique';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->columnConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration = new ConnectionConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databaseHost = 'libero';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databaseName = 'magnam';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->databasePort = 24272;
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->secretArn = 'modi';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->connectionConfiguration->tableName = 'eum';
    $request->updateDataSourceRequest->configuration->databaseConfiguration->databaseEngineType = DatabaseEngineTypeEnum::RDS_AURORA_MYSQL;
    $request->updateDataSourceRequest->configuration->databaseConfiguration->sqlConfiguration = new SqlConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->sqlConfiguration->queryIdentifiersEnclosingOption = QueryIdentifiersEnclosingOptionEnum::NONE;
    $request->updateDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration->securityGroupIds = [
        'fugiat',
        'nostrum',
    ];
    $request->updateDataSourceRequest->configuration->databaseConfiguration->vpcConfiguration->subnetIds = [
        'veniam',
        'reiciendis',
    ];
    $request->updateDataSourceRequest->configuration->fsxConfiguration = new FsxConfiguration();
    $request->updateDataSourceRequest->configuration->fsxConfiguration->exclusionPatterns = [
        'modi',
    ];
    $request->updateDataSourceRequest->configuration->fsxConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->fsxConfiguration->fileSystemId = 'aut';
    $request->updateDataSourceRequest->configuration->fsxConfiguration->fileSystemType = FsxFileSystemTypeEnum::WINDOWS;
    $request->updateDataSourceRequest->configuration->fsxConfiguration->inclusionPatterns = [
        'odio',
        'commodi',
        'numquam',
        'dolorum',
    ];
    $request->updateDataSourceRequest->configuration->fsxConfiguration->secretArn = 'possimus';
    $request->updateDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration->securityGroupIds = [
        'consectetur',
        'nesciunt',
    ];
    $request->updateDataSourceRequest->configuration->fsxConfiguration->vpcConfiguration->subnetIds = [
        'itaque',
        'minus',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration = new GitHubConfiguration();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->exclusionFileNamePatterns = [
        'distinctio',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->exclusionFileTypePatterns = [
        'quas',
        'et',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->exclusionFolderNamePatterns = [
        'amet',
        'autem',
        'fuga',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubCommitConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties = new GitHubDocumentCrawlProperties();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssue = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssueComment = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlIssueCommentAttachment = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequest = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequestComment = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlPullRequestCommentAttachment = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubDocumentCrawlProperties->crawlRepositoryDocuments = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueAttachmentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueCommentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubIssueDocumentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestCommentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestDocumentAttachmentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubPullRequestDocumentConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->gitHubRepositoryConfigurationFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->inclusionFileNamePatterns = [
        'saepe',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->inclusionFileTypePatterns = [
        'mollitia',
        'nulla',
        'officia',
        'sed',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->inclusionFolderNamePatterns = [
        'alias',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration = new OnPremiseConfiguration();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->hostUrl = 'eveniet';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->organizationName = 'hic';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path = new S3Path();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path->bucket = 'voluptatem';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->onPremiseConfiguration->sslCertificateS3Path->key = 'incidunt';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->repositoryFilter = [
        'qui',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration = new SaaSConfiguration();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration->hostUrl = 'necessitatibus';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->saaSConfiguration->organizationName = 'harum';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->secretArn = 'explicabo';
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->type = TypeEnum::SAAS;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration->securityGroupIds = [
        'modi',
        'optio',
    ];
    $request->updateDataSourceRequest->configuration->gitHubConfiguration->vpcConfiguration->subnetIds = [
        'molestias',
        'officia',
        'libero',
        'totam',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration = new GoogleDriveConfiguration();
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->excludeMimeTypes = [
        'aliquid',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->excludeSharedDrives = [
        'impedit',
        'ducimus',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->excludeUserAccounts = [
        'velit',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->exclusionPatterns = [
        'repellat',
        'nulla',
        'laborum',
        'natus',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->inclusionPatterns = [
        'nisi',
    ];
    $request->updateDataSourceRequest->configuration->googleDriveConfiguration->secretArn = 'rerum';
    $request->updateDataSourceRequest->configuration->jiraConfiguration = new JiraConfiguration();
    $request->updateDataSourceRequest->configuration->jiraConfiguration->attachmentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->commentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->exclusionPatterns = [
        'rem',
        'quia',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->inclusionPatterns = [
        'quisquam',
        'dicta',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->issueFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->issueSubEntityFilter = [
        IssueSubEntityEnum::COMMENTS,
        IssueSubEntityEnum::WORKLOGS,
        IssueSubEntityEnum::COMMENTS,
        IssueSubEntityEnum::COMMENTS,
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->issueType = [
        'optio',
        'rem',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->jiraAccountUrl = 'perferendis';
    $request->updateDataSourceRequest->configuration->jiraConfiguration->project = [
        'reiciendis',
        'a',
        'iste',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->projectFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->secretArn = 'quos';
    $request->updateDataSourceRequest->configuration->jiraConfiguration->status = [
        'dolore',
        'modi',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration->securityGroupIds = [
        'maxime',
        'modi',
        'consequuntur',
        'assumenda',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->vpcConfiguration->subnetIds = [
        'doloribus',
        'impedit',
        'porro',
        'accusamus',
    ];
    $request->updateDataSourceRequest->configuration->jiraConfiguration->workLogFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration = new OneDriveConfiguration();
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->disableLocalGroups = false;
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->exclusionPatterns = [
        'ab',
        'sint',
        'nihil',
        'esse',
    ];
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->inclusionPatterns = [
        'nesciunt',
        'debitis',
    ];
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers = new OneDriveUsers();
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserList = [
        'neque',
        'corporis',
    ];
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path = new S3Path();
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path->bucket = 'voluptas';
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->oneDriveUsers->oneDriveUserS3Path->key = 'consequuntur';
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->secretArn = 'officia';
    $request->updateDataSourceRequest->configuration->oneDriveConfiguration->tenantDomain = 'reprehenderit';
    $request->updateDataSourceRequest->configuration->quipConfiguration = new QuipConfiguration();
    $request->updateDataSourceRequest->configuration->quipConfiguration->attachmentFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->quipConfiguration->crawlChatRooms = false;
    $request->updateDataSourceRequest->configuration->quipConfiguration->crawlFileComments = false;
    $request->updateDataSourceRequest->configuration->quipConfiguration->domain = 'eius';
    $request->updateDataSourceRequest->configuration->quipConfiguration->exclusionPatterns = [
        'rem',
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->folderIds = [
        'accusantium',
        'veniam',
        'saepe',
        'neque',
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->inclusionPatterns = [
        'aliquam',
        'quos',
        'doloribus',
        'fugiat',
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->messageFieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->secretArn = 'delectus';
    $request->updateDataSourceRequest->configuration->quipConfiguration->threadFieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->quipConfiguration->vpcConfiguration->securityGroupIds = [
        'nesciunt',
    ];
    $request->updateDataSourceRequest->configuration->quipConfiguration->vpcConfiguration->subnetIds = [
        'illo',
        'repellat',
        'nemo',
    ];
    $request->updateDataSourceRequest->configuration->s3Configuration = new S3DataSourceConfiguration();
    $request->updateDataSourceRequest->configuration->s3Configuration->accessControlListConfiguration = new AccessControlListConfiguration();
    $request->updateDataSourceRequest->configuration->s3Configuration->accessControlListConfiguration->keyPath = 'doloribus';
    $request->updateDataSourceRequest->configuration->s3Configuration->bucketName = 'possimus';
    $request->updateDataSourceRequest->configuration->s3Configuration->documentsMetadataConfiguration = new DocumentsMetadataConfiguration();
    $request->updateDataSourceRequest->configuration->s3Configuration->documentsMetadataConfiguration->s3Prefix = 'unde';
    $request->updateDataSourceRequest->configuration->s3Configuration->exclusionPatterns = [
        'explicabo',
        'ipsam',
    ];
    $request->updateDataSourceRequest->configuration->s3Configuration->inclusionPatterns = [
        'optio',
        'alias',
        'quidem',
    ];
    $request->updateDataSourceRequest->configuration->s3Configuration->inclusionPrefixes = [
        'commodi',
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration = new SalesforceConfiguration();
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration = new SalesforceChatterFeedConfiguration();
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->documentDataFieldName = 'sapiente';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->documentTitleFieldName = 'consequuntur';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->chatterFeedConfiguration->includeFilterTypes = [
        SalesforceChatterFeedIncludeFilterTypeEnum::STANDARD_USER,
        SalesforceChatterFeedIncludeFilterTypeEnum::STANDARD_USER,
        SalesforceChatterFeedIncludeFilterTypeEnum::ACTIVE_USER,
        SalesforceChatterFeedIncludeFilterTypeEnum::ACTIVE_USER,
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->excludeAttachmentFilePatterns = [
        'adipisci',
        'libero',
        'in',
        'minima',
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->includeAttachmentFilePatterns = [
        'minus',
        'ab',
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration = new SalesforceKnowledgeArticleConfiguration();
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->customKnowledgeArticleTypeConfigurations = [
        new SalesforceCustomKnowledgeArticleTypeConfiguration(),
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->includedStates = [
        SalesforceKnowledgeArticleStateEnum::PUBLISHED,
        SalesforceKnowledgeArticleStateEnum::ARCHIVED,
        SalesforceKnowledgeArticleStateEnum::DRAFT,
        SalesforceKnowledgeArticleStateEnum::PUBLISHED,
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration = new SalesforceStandardKnowledgeArticleTypeConfiguration();
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->documentDataFieldName = 'fuga';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->documentTitleFieldName = 'minima';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->knowledgeArticleConfiguration->standardKnowledgeArticleTypeConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->secretArn = 'qui';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->serverUrl = 'aliquid';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration = new SalesforceStandardObjectAttachmentConfiguration();
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration->documentTitleFieldName = 'magni';
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->standardObjectAttachmentConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->salesforceConfiguration->standardObjectConfigurations = [
        new SalesforceStandardObjectConfiguration(),
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration = new ServiceNowConfiguration();
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->authenticationType = ServiceNowAuthenticationTypeEnum::OAUTH2;
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->hostUrl = 'dolor';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration = new ServiceNowKnowledgeArticleConfiguration();
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->documentDataFieldName = 'exercitationem';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->documentTitleFieldName = 'expedita';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->excludeAttachmentFilePatterns = [
        'impedit',
        'sit',
        'nemo',
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->filterQuery = 'consequuntur';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->knowledgeArticleConfiguration->includeAttachmentFilePatterns = [
        'deserunt',
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->secretArn = 'modi';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration = new ServiceNowServiceCatalogConfiguration();
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->documentDataFieldName = 'veniam';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->documentTitleFieldName = 'quod';
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->excludeAttachmentFilePatterns = [
        'a',
        'quisquam',
        'enim',
        'doloribus',
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceCatalogConfiguration->includeAttachmentFilePatterns = [
        'architecto',
        'alias',
        'culpa',
        'ipsa',
    ];
    $request->updateDataSourceRequest->configuration->serviceNowConfiguration->serviceNowBuildVersion = ServiceNowBuildVersionTypeEnum::OTHERS;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration = new SharePointConfiguration();
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->authenticationType = SharePointOnlineAuthenticationTypeEnum::OAUTH2;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->crawlAttachments = false;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->disableLocalGroups = false;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->documentTitleFieldName = 'quia';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->exclusionPatterns = [
        'vel',
    ];
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->inclusionPatterns = [
        'ullam',
        'architecto',
        'accusantium',
        'perferendis',
    ];
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->credentials = 'veritatis';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->host = 'provident';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->proxyConfiguration->port = 765833;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->secretArn = 'iure';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->sharePointVersion = SharePointVersionEnum::SHAREPOINT2019;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path = new S3Path();
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path->bucket = 'quod';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->sslCertificateS3Path->key = 'nemo';
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->urls = [
        'velit',
        'magnam',
        'dignissimos',
        'laboriosam',
    ];
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration->securityGroupIds = [
        'odio',
    ];
    $request->updateDataSourceRequest->configuration->sharePointConfiguration->vpcConfiguration->subnetIds = [
        'provident',
        'cum',
        'doloribus',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration = new SlackConfiguration();
    $request->updateDataSourceRequest->configuration->slackConfiguration->crawlBotMessage = false;
    $request->updateDataSourceRequest->configuration->slackConfiguration->excludeArchived = false;
    $request->updateDataSourceRequest->configuration->slackConfiguration->exclusionPatterns = [
        'quidem',
        'itaque',
        'laboriosam',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->inclusionPatterns = [
        'perspiciatis',
        'hic',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->lookBackPeriod = 736985;
    $request->updateDataSourceRequest->configuration->slackConfiguration->privateChannelFilter = [
        'libero',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->publicChannelFilter = [
        'incidunt',
        'recusandae',
        'quod',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->secretArn = 'id';
    $request->updateDataSourceRequest->configuration->slackConfiguration->sinceCrawlDate = 'saepe';
    $request->updateDataSourceRequest->configuration->slackConfiguration->slackEntityList = [
        SlackEntityEnum::DIRECT_MESSAGE,
        SlackEntityEnum::PUBLIC_CHANNEL,
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->teamId = 'illum';
    $request->updateDataSourceRequest->configuration->slackConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->configuration->slackConfiguration->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->configuration->slackConfiguration->vpcConfiguration->securityGroupIds = [
        'illum',
        'facilis',
    ];
    $request->updateDataSourceRequest->configuration->slackConfiguration->vpcConfiguration->subnetIds = [
        'mollitia',
    ];
    $request->updateDataSourceRequest->configuration->templateConfiguration = new TemplateConfiguration();
    $request->updateDataSourceRequest->configuration->templateConfiguration->template = [
        'recusandae' => 'distinctio',
        'pariatur' => 'ad',
        'facere' => 'laborum',
        'eveniet' => 'laborum',
    ];
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration = new WebCrawlerConfiguration();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->authenticationConfiguration = new AuthenticationConfiguration();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->authenticationConfiguration->basicAuthentication = [
        new BasicAuthenticationConfiguration(),
        new BasicAuthenticationConfiguration(),
    ];
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->crawlDepth = 802356;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->maxContentSizePerPageInMegaBytes = 3695.23;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->maxLinksPerPage = 60;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->maxUrlsPerMinuteCrawlRate = 379894;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration = new ProxyConfiguration();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->credentials = 'deserunt';
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->host = 'molestias';
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->proxyConfiguration->port = 672889;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urlExclusionPatterns = [
        'occaecati',
        'labore',
        'quo',
    ];
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urlInclusionPatterns = [
        'fugit',
    ];
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls = new Urls();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration = new SeedUrlConfiguration();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration->seedUrls = [
        'magnam',
        'quaerat',
    ];
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls->seedUrlConfiguration->webCrawlerMode = WebCrawlerModeEnum::EVERYTHING;
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls->siteMapsConfiguration = new SiteMapsConfiguration();
    $request->updateDataSourceRequest->configuration->webCrawlerConfiguration->urls->siteMapsConfiguration->siteMaps = [
        'nostrum',
        'officiis',
        'unde',
        'nulla',
    ];
    $request->updateDataSourceRequest->configuration->workDocsConfiguration = new WorkDocsConfiguration();
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->crawlComments = false;
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->exclusionPatterns = [
        'mollitia',
        'magnam',
        'nostrum',
    ];
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->fieldMappings = [
        new DataSourceToIndexFieldMapping(),
        new DataSourceToIndexFieldMapping(),
    ];
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->inclusionPatterns = [
        'fuga',
        'facere',
        'impedit',
    ];
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->organizationId = 'quasi';
    $request->updateDataSourceRequest->configuration->workDocsConfiguration->useChangeLog = false;
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->inlineConfigurations = [
        new InlineCustomDocumentEnrichmentConfiguration(),
        new InlineCustomDocumentEnrichmentConfiguration(),
        new InlineCustomDocumentEnrichmentConfiguration(),
    ];
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration = new HookConfiguration();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'quod';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-16T23:15:53.018Z');
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 31574;
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'necessitatibus',
        'maxime',
        'consequatur',
        'eaque',
    ];
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'architecto';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::CONTAINS;
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->lambdaArn = 'porro';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->postExtractionHookConfiguration->s3Bucket = 'blanditiis';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration = new HookConfiguration();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition = new DocumentAttributeCondition();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionDocumentAttributeKey = 'quae';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue = new DocumentAttributeValue();
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->dateValue = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-11T16:25:26.479Z');
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->longValue = 148379;
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringListValue = [
        'impedit',
        'ipsa',
        'excepturi',
        'a',
    ];
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->conditionOnValue->stringValue = 'maiores';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->invocationCondition->operator = ConditionOperatorEnum::NOT_EQUALS;
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->lambdaArn = 'maiores';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->preExtractionHookConfiguration->s3Bucket = 'alias';
    $request->updateDataSourceRequest->customDocumentEnrichmentConfiguration->roleArn = 'asperiores';
    $request->updateDataSourceRequest->description = 'rem';
    $request->updateDataSourceRequest->id = '16ff3477-c13e-4902-8141-25b0960a6681';
    $request->updateDataSourceRequest->indexId = 'ullam';
    $request->updateDataSourceRequest->languageCode = 'quae';
    $request->updateDataSourceRequest->name = 'Barry Koepp';
    $request->updateDataSourceRequest->roleArn = 'delectus';
    $request->updateDataSourceRequest->schedule = 'omnis';
    $request->updateDataSourceRequest->vpcConfiguration = new DataSourceVpcConfiguration();
    $request->updateDataSourceRequest->vpcConfiguration->securityGroupIds = [
        'nesciunt',
    ];
    $request->updateDataSourceRequest->vpcConfiguration->subnetIds = [
        'quis',
        'cupiditate',
        'aliquam',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = UpdateDataSourceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_DATA_SOURCE;

    $response = $sdk->sdk->updateDataSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExperience

Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExperienceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ContentSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserIdentityConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExperienceRequest();
    $request->updateExperienceRequest = new UpdateExperienceRequest();
    $request->updateExperienceRequest->configuration = new ExperienceConfiguration();
    $request->updateExperienceRequest->configuration->contentSourceConfiguration = new ContentSourceConfiguration();
    $request->updateExperienceRequest->configuration->contentSourceConfiguration->dataSourceIds = [
        'tenetur',
        'quas',
        'molestiae',
        'aliquid',
    ];
    $request->updateExperienceRequest->configuration->contentSourceConfiguration->directPutContent = false;
    $request->updateExperienceRequest->configuration->contentSourceConfiguration->faqIds = [
        'a',
        'nobis',
        'perspiciatis',
        'accusantium',
    ];
    $request->updateExperienceRequest->configuration->userIdentityConfiguration = new UserIdentityConfiguration();
    $request->updateExperienceRequest->configuration->userIdentityConfiguration->identityAttributeName = 'dicta';
    $request->updateExperienceRequest->description = 'minus';
    $request->updateExperienceRequest->id = '6ecbb4e2-43cf-4789-bfaf-eda53e5ae6e0';
    $request->updateExperienceRequest->indexId = 'officia';
    $request->updateExperienceRequest->name = 'Ryan Kuvalis';
    $request->updateExperienceRequest->roleArn = 'eos';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = UpdateExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_EXPERIENCE;

    $response = $sdk->sdk->updateExperience($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFeaturedResultsSet

Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFeaturedResultsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeaturedDocument;
use \OpenAPI\OpenAPI\Models\Shared\FeaturedResultsSetStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeaturedResultsSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFeaturedResultsSetRequest();
    $request->updateFeaturedResultsSetRequest = new UpdateFeaturedResultsSetRequest();
    $request->updateFeaturedResultsSetRequest->description = 'quos';
    $request->updateFeaturedResultsSetRequest->featuredDocuments = [
        new FeaturedDocument(),
        new FeaturedDocument(),
        new FeaturedDocument(),
    ];
    $request->updateFeaturedResultsSetRequest->featuredResultsSetId = 'amet';
    $request->updateFeaturedResultsSetRequest->featuredResultsSetName = 'molestiae';
    $request->updateFeaturedResultsSetRequest->indexId = 'amet';
    $request->updateFeaturedResultsSetRequest->queryTexts = [
        'modi',
        'perferendis',
        'necessitatibus',
    ];
    $request->updateFeaturedResultsSetRequest->status = FeaturedResultsSetStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = UpdateFeaturedResultsSetXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_FEATURED_RESULTS_SET;

    $response = $sdk->sdk->updateFeaturedResultsSet($request);

    if ($response->updateFeaturedResultsSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIndex

Updates an existing Amazon Kendra index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityUnitsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMetadataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Relevance;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Search;
use \OpenAPI\OpenAPI\Models\Shared\DocumentAttributeValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserContextPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserGroupResolutionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserGroupResolutionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTokenConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JsonTokenTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JwtTokenTypeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KeyLocationEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIndexRequest();
    $request->updateIndexRequest = new UpdateIndexRequest();
    $request->updateIndexRequest->capacityUnits = new CapacityUnitsConfiguration();
    $request->updateIndexRequest->capacityUnits->queryCapacityUnits = 330596;
    $request->updateIndexRequest->capacityUnits->storageCapacityUnits = 373106;
    $request->updateIndexRequest->description = 'eaque';
    $request->updateIndexRequest->documentMetadataConfigurationUpdates = [
        new DocumentMetadataConfiguration(),
        new DocumentMetadataConfiguration(),
    ];
    $request->updateIndexRequest->id = '5756f5d5-6d0b-4d0a-b2df-e13db4f62cba';
    $request->updateIndexRequest->name = 'Lila Langosh';
    $request->updateIndexRequest->roleArn = 'quasi';
    $request->updateIndexRequest->userContextPolicy = UserContextPolicyEnum::USER_TOKEN;
    $request->updateIndexRequest->userGroupResolutionConfiguration = new UserGroupResolutionConfiguration();
    $request->updateIndexRequest->userGroupResolutionConfiguration->userGroupResolutionMode = UserGroupResolutionModeEnum::NONE;
    $request->updateIndexRequest->userTokenConfigurations = [
        new UserTokenConfiguration(),
        new UserTokenConfiguration(),
        new UserTokenConfiguration(),
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = UpdateIndexXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_INDEX;

    $response = $sdk->sdk->updateIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQuerySuggestionsBlockList

<p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateQuerySuggestionsBlockListRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuerySuggestionsBlockListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQuerySuggestionsBlockListRequest();
    $request->updateQuerySuggestionsBlockListRequest = new UpdateQuerySuggestionsBlockListRequest();
    $request->updateQuerySuggestionsBlockListRequest->description = 'excepturi';
    $request->updateQuerySuggestionsBlockListRequest->id = '24d3b2ec-fcc8-4f89-9010-f5dd3d6fa180';
    $request->updateQuerySuggestionsBlockListRequest->indexId = 'non';
    $request->updateQuerySuggestionsBlockListRequest->name = 'Derek Haag';
    $request->updateQuerySuggestionsBlockListRequest->roleArn = 'consequuntur';
    $request->updateQuerySuggestionsBlockListRequest->sourceS3Path = new S3Path();
    $request->updateQuerySuggestionsBlockListRequest->sourceS3Path->bucket = 'maiores';
    $request->updateQuerySuggestionsBlockListRequest->sourceS3Path->key = 'inventore';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = UpdateQuerySuggestionsBlockListXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_QUERY_SUGGESTIONS_BLOCK_LIST;

    $response = $sdk->sdk->updateQuerySuggestionsBlockList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQuerySuggestionsConfig

<p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuerySuggestionsConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateQuerySuggestionsConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuerySuggestionsConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQuerySuggestionsConfigRequest();
    $request->updateQuerySuggestionsConfigRequest = new UpdateQuerySuggestionsConfigRequest();
    $request->updateQuerySuggestionsConfigRequest->includeQueriesWithoutUserInformation = false;
    $request->updateQuerySuggestionsConfigRequest->indexId = 'rem';
    $request->updateQuerySuggestionsConfigRequest->minimumNumberOfQueryingUsers = 527715;
    $request->updateQuerySuggestionsConfigRequest->minimumQueryCount = 498534;
    $request->updateQuerySuggestionsConfigRequest->mode = ModeEnum::ENABLED;
    $request->updateQuerySuggestionsConfigRequest->queryLogLookBackWindowInDays = 927959;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = UpdateQuerySuggestionsConfigXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_QUERY_SUGGESTIONS_CONFIG;

    $response = $sdk->sdk->updateQuerySuggestionsConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThesaurus

Updates a thesaurus for an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateThesaurusRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Path;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThesaurusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThesaurusRequest();
    $request->updateThesaurusRequest = new UpdateThesaurusRequest();
    $request->updateThesaurusRequest->description = 'veritatis';
    $request->updateThesaurusRequest->id = 'f6b8ca27-5a60-4a04-8495-cc699171b51c';
    $request->updateThesaurusRequest->indexId = 'dicta';
    $request->updateThesaurusRequest->name = 'Miss Irving Quigley';
    $request->updateThesaurusRequest->roleArn = 'labore';
    $request->updateThesaurusRequest->sourceS3Path = new S3Path();
    $request->updateThesaurusRequest->sourceS3Path->bucket = 'expedita';
    $request->updateThesaurusRequest->sourceS3Path->key = 'corrupti';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = UpdateThesaurusXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_UPDATE_THESAURUS;

    $response = $sdk->sdk->updateThesaurus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
