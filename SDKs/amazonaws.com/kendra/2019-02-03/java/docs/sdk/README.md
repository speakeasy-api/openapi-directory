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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceResponse;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.shared.EntityConfiguration;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntitiesToExperienceRequest req = new AssociateEntitiesToExperienceRequest(                new AssociateEntitiesToExperienceRequest(                new org.openapis.openapi.models.shared.EntityConfiguration[]{{
                                                add(new EntityConfiguration("temporibus", EntityTypeEnum.USER) {{
                                                    entityId = "nisi";
                                                    entityType = EntityTypeEnum.GROUP;
                                                }}),
                                                add(new EntityConfiguration("deserunt", EntityTypeEnum.USER) {{
                                                    entityId = "quis";
                                                    entityType = EntityTypeEnum.USER;
                                                }}),
                                                add(new EntityConfiguration("sapiente", EntityTypeEnum.GROUP) {{
                                                    entityId = "ipsam";
                                                    entityType = EntityTypeEnum.GROUP;
                                                }}),
                                            }}, "odit", "at");, AssociateEntitiesToExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_ENTITIES_TO_EXPERIENCE) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            AssociateEntitiesToExperienceResponse res = sdk.sdk.associateEntitiesToExperience(req);

            if (res.associateEntitiesToExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associatePersonasToEntities

Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociatePersonasToEntitiesRequest;
import org.openapis.openapi.models.operations.AssociatePersonasToEntitiesResponse;
import org.openapis.openapi.models.operations.AssociatePersonasToEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociatePersonasToEntitiesRequest;
import org.openapis.openapi.models.shared.EntityPersonaConfiguration;
import org.openapis.openapi.models.shared.PersonaEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociatePersonasToEntitiesRequest req = new AssociatePersonasToEntitiesRequest(                new AssociatePersonasToEntitiesRequest("dolorum", "dicta",                 new org.openapis.openapi.models.shared.EntityPersonaConfiguration[]{{
                                                add(new EntityPersonaConfiguration("fugit", PersonaEnum.VIEWER) {{
                                                    entityId = "officia";
                                                    persona = PersonaEnum.VIEWER;
                                                }}),
                                                add(new EntityPersonaConfiguration("totam", PersonaEnum.OWNER) {{
                                                    entityId = "hic";
                                                    persona = PersonaEnum.VIEWER;
                                                }}),
                                                add(new EntityPersonaConfiguration("modi", PersonaEnum.OWNER) {{
                                                    entityId = "commodi";
                                                    persona = PersonaEnum.OWNER;
                                                }}),
                                            }});, AssociatePersonasToEntitiesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_PERSONAS_TO_ENTITIES) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            AssociatePersonasToEntitiesResponse res = sdk.sdk.associatePersonasToEntities(req);

            if (res.associatePersonasToEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteDocument

<p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteDocumentRequest;
import org.openapis.openapi.models.operations.BatchDeleteDocumentResponse;
import org.openapis.openapi.models.operations.BatchDeleteDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteDocumentRequest;
import org.openapis.openapi.models.shared.DataSourceSyncJobMetricTarget;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteDocumentRequest req = new BatchDeleteDocumentRequest(                new BatchDeleteDocumentRequest(                new String[]{{
                                                add("sed"),
                                                add("iste"),
                                                add("dolor"),
                                            }}, "natus") {{
                                dataSourceSyncJobMetricTarget = new DataSourceSyncJobMetricTarget("laboriosam") {{
                                    dataSourceSyncJobId = "hic";
                                }};;
                            }};, BatchDeleteDocumentXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_BATCH_DELETE_DOCUMENT) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            BatchDeleteDocumentResponse res = sdk.sdk.batchDeleteDocument(req);

            if (res.batchDeleteDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteFeaturedResultsSet

Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteFeaturedResultsSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteFeaturedResultsSetResponse;
import org.openapis.openapi.models.operations.BatchDeleteFeaturedResultsSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteFeaturedResultsSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteFeaturedResultsSetRequest req = new BatchDeleteFeaturedResultsSetRequest(                new BatchDeleteFeaturedResultsSetRequest(                new String[]{{
                                                add("ipsa"),
                                            }}, "reiciendis");, BatchDeleteFeaturedResultsSetXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_BATCH_DELETE_FEATURED_RESULTS_SET) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            BatchDeleteFeaturedResultsSetResponse res = sdk.sdk.batchDeleteFeaturedResultsSet(req);

            if (res.batchDeleteFeaturedResultsSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetDocumentStatus

<p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDocumentStatusRequest;
import org.openapis.openapi.models.operations.BatchGetDocumentStatusResponse;
import org.openapis.openapi.models.operations.BatchGetDocumentStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetDocumentStatusRequest;
import org.openapis.openapi.models.shared.DocumentAttribute;
import org.openapis.openapi.models.shared.DocumentAttributeValue;
import org.openapis.openapi.models.shared.DocumentInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDocumentStatusRequest req = new BatchGetDocumentStatusRequest(                new BatchGetDocumentStatusRequest(                new org.openapis.openapi.models.shared.DocumentInfo[]{{
                                                add(new DocumentInfo("voluptate") {{
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("architecto",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-08-01T12:28:44.292Z");
                                                                            longValue = 635059L;
                                                                            stringListValue = new String[]{{
                                                                                add("repellat"),
                                                                            }};
                                                                            stringValue = "mollitia";
                                                                        }};) {{
                                                            key = "nemo";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                                                                longValue = 38425L;
                                                                stringListValue = new String[]{{
                                                                    add("culpa"),
                                                                    add("doloribus"),
                                                                }};
                                                                stringValue = "sapiente";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("quis",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-04-29T17:10:10.440Z");
                                                                            longValue = 656330L;
                                                                            stringListValue = new String[]{{
                                                                                add("odit"),
                                                                                add("quo"),
                                                                            }};
                                                                            stringValue = "sequi";
                                                                        }};) {{
                                                            key = "occaecati";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-08-02T18:07:51.623Z");
                                                                longValue = 466311L;
                                                                stringListValue = new String[]{{
                                                                    add("velit"),
                                                                    add("error"),
                                                                }};
                                                                stringValue = "quia";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("temporibus",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-10-22T20:21:20.741Z");
                                                                            longValue = 971945L;
                                                                            stringListValue = new String[]{{
                                                                                add("vero"),
                                                                                add("nihil"),
                                                                                add("praesentium"),
                                                                                add("voluptatibus"),
                                                                            }};
                                                                            stringValue = "ipsa";
                                                                        }};) {{
                                                            key = "tenetur";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-05-04T04:15:52.352Z");
                                                                longValue = 820994L;
                                                                stringListValue = new String[]{{
                                                                    add("quasi"),
                                                                }};
                                                                stringValue = "error";
                                                            }};
                                                        }}),
                                                    }};
                                                    documentId = "omnis";
                                                }}),
                                                add(new DocumentInfo("eum") {{
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("harum",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-02-13T15:01:52.114Z");
                                                                            longValue = 414263L;
                                                                            stringListValue = new String[]{{
                                                                                add("quae"),
                                                                                add("ipsum"),
                                                                                add("quidem"),
                                                                                add("molestias"),
                                                                            }};
                                                                            stringValue = "excepturi";
                                                                        }};) {{
                                                            key = "perferendis";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-07-23T18:36:43.822Z");
                                                                longValue = 282807L;
                                                                stringListValue = new String[]{{
                                                                    add("dicta"),
                                                                    add("corporis"),
                                                                    add("dolore"),
                                                                    add("iusto"),
                                                                }};
                                                                stringValue = "dicta";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("incidunt",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                                                                            longValue = 667411L;
                                                                            stringListValue = new String[]{{
                                                                                add("explicabo"),
                                                                                add("deserunt"),
                                                                                add("distinctio"),
                                                                                add("quibusdam"),
                                                                            }};
                                                                            stringValue = "labore";
                                                                        }};) {{
                                                            key = "pariatur";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-06-29T05:25:54.356Z");
                                                                longValue = 523248L;
                                                                stringListValue = new String[]{{
                                                                    add("quasi"),
                                                                    add("repudiandae"),
                                                                    add("sint"),
                                                                    add("veritatis"),
                                                                }};
                                                                stringValue = "itaque";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("alias",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-04-28T14:19:37.294Z");
                                                                            longValue = 569618L;
                                                                            stringListValue = new String[]{{
                                                                                add("facilis"),
                                                                                add("tempore"),
                                                                            }};
                                                                            stringValue = "labore";
                                                                        }};) {{
                                                            key = "modi";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                                                                longValue = 586513L;
                                                                stringListValue = new String[]{{
                                                                    add("perferendis"),
                                                                    add("magni"),
                                                                    add("assumenda"),
                                                                }};
                                                                stringValue = "ipsam";
                                                            }};
                                                        }}),
                                                    }};
                                                    documentId = "delectus";
                                                }}),
                                            }}, "non");, BatchGetDocumentStatusXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_BATCH_GET_DOCUMENT_STATUS) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            BatchGetDocumentStatusResponse res = sdk.sdk.batchGetDocumentStatus(req);

            if (res.batchGetDocumentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchPutDocument

<p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutDocumentRequest;
import org.openapis.openapi.models.operations.BatchPutDocumentResponse;
import org.openapis.openapi.models.operations.BatchPutDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchPutDocumentRequest;
import org.openapis.openapi.models.shared.ConditionOperatorEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;
import org.openapis.openapi.models.shared.CustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentAttribute;
import org.openapis.openapi.models.shared.DocumentAttributeCondition;
import org.openapis.openapi.models.shared.DocumentAttributeTarget;
import org.openapis.openapi.models.shared.DocumentAttributeValue;
import org.openapis.openapi.models.shared.HierarchicalPrincipal;
import org.openapis.openapi.models.shared.HookConfiguration;
import org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.ReadAccessTypeEnum;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutDocumentRequest req = new BatchPutDocumentRequest(                new BatchPutDocumentRequest(                new org.openapis.openapi.models.shared.Document[]{{
                                                add(new Document("delectus") {{
                                                    accessControlConfigurationId = "a";
                                                    accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "aliquid", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "in";
                                                            name = "Mrs. Emilio Price";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "id", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "non";
                                                            name = "Jon Tillman";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "perferendis", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "sapiente";
                                                            name = "Sandy Huels";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                    }};
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("vero",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-11-24T10:55:00.183Z");
                                                                            longValue = 298282L;
                                                                            stringListValue = new String[]{{
                                                                                add("excepturi"),
                                                                            }};
                                                                            stringValue = "ullam";
                                                                        }};) {{
                                                            key = "distinctio";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-06-04T18:23:50.695Z");
                                                                longValue = 290077L;
                                                                stringListValue = new String[]{{
                                                                    add("natus"),
                                                                    add("nobis"),
                                                                }};
                                                                stringValue = "eum";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("dolor",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-07-30T07:35:03.817Z");
                                                                            longValue = 367562L;
                                                                            stringListValue = new String[]{{
                                                                                add("iure"),
                                                                            }};
                                                                            stringValue = "doloribus";
                                                                        }};) {{
                                                            key = "provident";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2021-11-07T17:49:17.039Z");
                                                                longValue = 33625L;
                                                                stringListValue = new String[]{{
                                                                    add("reiciendis"),
                                                                    add("mollitia"),
                                                                    add("ad"),
                                                                }};
                                                                stringValue = "eum";
                                                            }};
                                                        }}),
                                                    }};
                                                    blob = "debitis";
                                                    contentType = ContentTypeEnum.PLAIN_TEXT;
                                                    hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "corporis", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "pariatur";
                                                                                name = "Camille Armstrong";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "perferendis", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "nobis";
                                                                                name = "Beatrice Lebsack II";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "perspiciatis", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "quam";
                                                                                name = "Eula Hegmann";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "quibusdam", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "in";
                                                                    name = "Diane VonRueden";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "illum", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "pariatur";
                                                                    name = "Kathryn Lang";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "voluptate", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "ea";
                                                                    name = "Mr. Harry Jaskolski";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "dolorum", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "eos";
                                                                                name = "Miss Paul Steuber";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "eius", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "necessitatibus";
                                                                                name = "Emmett Kovacek";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "modi", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "blanditiis";
                                                                    name = "Gary Mayert";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "aliquid", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "deleniti";
                                                                    name = "Rene Rolfson";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "reiciendis", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "dolor";
                                                                    name = "Tiffany Welch";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "quidem", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "numquam";
                                                                    name = "Melissa Bednar";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "a", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "at";
                                                                                name = "Rhonda Kautzer";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "enim", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "iusto";
                                                                                name = "Rosalie White";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "voluptas", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "totam";
                                                                                name = "Karen Rath";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "repellendus", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "optio";
                                                                    name = "Tommy Turner";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "saepe", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "sunt";
                                                                                name = "Miss Candice Weimann";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "totam", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "incidunt";
                                                                    name = "Shelly Schoen";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "neque", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "dolores";
                                                                    name = "Cesar Hyatt";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    id = "1b8b90f3-443a-4110-8e0a-dcf4b921879f";
                                                    s3Path = new S3Path("omnis", "quis") {{
                                                        bucket = "quisquam";
                                                        key = "vero";
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                                add(new Document("quos") {{
                                                    accessControlConfigurationId = "voluptate";
                                                    accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "vero", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "tenetur";
                                                            name = "Darla Rau";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                    }};
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("porro",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2020-01-18T09:21:05.997Z");
                                                                            longValue = 478370L;
                                                                            stringListValue = new String[]{{
                                                                                add("ducimus"),
                                                                                add("alias"),
                                                                                add("officia"),
                                                                                add("tempora"),
                                                                            }};
                                                                            stringValue = "ipsam";
                                                                        }};) {{
                                                            key = "quibusdam";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-06-02T04:41:10.492Z");
                                                                longValue = 617877L;
                                                                stringListValue = new String[]{{
                                                                    add("aut"),
                                                                    add("voluptatibus"),
                                                                    add("exercitationem"),
                                                                    add("nulla"),
                                                                }};
                                                                stringValue = "fugit";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("dicta",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-01-08T01:04:15.076Z");
                                                                            longValue = 97844L;
                                                                            stringListValue = new String[]{{
                                                                                add("nulla"),
                                                                                add("excepturi"),
                                                                            }};
                                                                            stringValue = "voluptatibus";
                                                                        }};) {{
                                                            key = "ea";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-07-28T16:45:32.822Z");
                                                                longValue = 822118L;
                                                                stringListValue = new String[]{{
                                                                    add("ratione"),
                                                                    add("ex"),
                                                                }};
                                                                stringValue = "laudantium";
                                                            }};
                                                        }}),
                                                    }};
                                                    blob = "nostrum";
                                                    contentType = ContentTypeEnum.MD;
                                                    hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "eum", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "esse";
                                                                                name = "Hilda Paucek";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "illum", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "eos";
                                                                                name = "Miss Devin Bogan";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "recusandae", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "impedit";
                                                                    name = "Mrs. Sally Jacobi";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "accusamus", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "eaque";
                                                                    name = "Ms. Marco Ankunding";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "quas", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "et";
                                                                    name = "Neal Schroeder";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "molestiae", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "voluptas";
                                                                    name = "Ryan Glover";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "sapiente", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "fuga";
                                                                                name = "Randall Lindgren";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "esse", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "explicabo";
                                                                                name = "Ms. Marion Little";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "occaecati", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "vero";
                                                                                name = "Frances Turner";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "sequi", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "eos";
                                                                    name = "Mrs. Virginia McGlynn";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "aliquam", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "recusandae";
                                                                    name = "Lola Schmidt IV";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "praesentium", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "commodi";
                                                                    name = "Todd Oberbrunner DDS";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "soluta", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "tenetur";
                                                                                name = "Lila Kassulke";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "qui", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "sapiente";
                                                                                name = "Marion Kihn";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "et", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "deleniti";
                                                                                name = "Wilbur Bradtke";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "quaerat", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "sit";
                                                                    name = "Randolph Fisher";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "a", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "esse";
                                                                    name = "Eduardo Wilkinson";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "quasi", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "pariatur";
                                                                    name = "Howard Upton";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "aut", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "non";
                                                                                name = "Carmen McClure";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "eum", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "veritatis";
                                                                    name = "Sherry Morar IV";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    id = "1f93f5f0-642d-4ac7-af51-5cc413aa63aa";
                                                    s3Path = new S3Path("fugiat", "vel") {{
                                                        bucket = "recusandae";
                                                        key = "totam";
                                                    }};
                                                    title = "Ms.";
                                                }}),
                                                add(new Document("totam") {{
                                                    accessControlConfigurationId = "vel";
                                                    accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "recusandae", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "facilis";
                                                            name = "Leslie King";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "suscipit", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "cum";
                                                            name = "Arlene Heidenreich";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }};
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("a",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-04-20T09:42:55.692Z");
                                                                            longValue = 358107L;
                                                                            stringListValue = new String[]{{
                                                                                add("laboriosam"),
                                                                                add("ipsa"),
                                                                                add("voluptates"),
                                                                            }};
                                                                            stringValue = "libero";
                                                                        }};) {{
                                                            key = "saepe";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-02-10T06:30:04.103Z");
                                                                longValue = 121059L;
                                                                stringListValue = new String[]{{
                                                                    add("adipisci"),
                                                                    add("non"),
                                                                    add("amet"),
                                                                    add("beatae"),
                                                                }};
                                                                stringValue = "dignissimos";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("voluptas",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-04-02T16:36:53.419Z");
                                                                            longValue = 680116L;
                                                                            stringListValue = new String[]{{
                                                                                add("minus"),
                                                                            }};
                                                                            stringValue = "dolores";
                                                                        }};) {{
                                                            key = "vitae";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2021-02-08T22:01:14.035Z");
                                                                longValue = 272437L;
                                                                stringListValue = new String[]{{
                                                                    add("voluptas"),
                                                                }};
                                                                stringValue = "voluptas";
                                                            }};
                                                        }}),
                                                        add(new DocumentAttribute("quas",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-05-25T08:06:51.452Z");
                                                                            longValue = 633998L;
                                                                            stringListValue = new String[]{{
                                                                                add("pariatur"),
                                                                                add("totam"),
                                                                                add("hic"),
                                                                            }};
                                                                            stringValue = "exercitationem";
                                                                        }};) {{
                                                            key = "blanditiis";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-09-14T20:54:59.386Z");
                                                                longValue = 304468L;
                                                                stringListValue = new String[]{{
                                                                    add("temporibus"),
                                                                    add("ullam"),
                                                                    add("adipisci"),
                                                                    add("cum"),
                                                                }};
                                                                stringValue = "blanditiis";
                                                            }};
                                                        }}),
                                                    }};
                                                    blob = "nobis";
                                                    contentType = ContentTypeEnum.PDF;
                                                    hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "reiciendis", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "explicabo";
                                                                                name = "Geneva Bradtke";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "occaecati", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "maiores";
                                                                                name = "Tammy Medhurst";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "sed", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "explicabo";
                                                                    name = "Johnathan Klein V";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "culpa", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "corrupti";
                                                                                name = "Ricky Little";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "et", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "consequatur";
                                                                                name = "Brittany Bailey";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "reiciendis", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "sed";
                                                                                name = "Gina Heathcote";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "quaerat", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "tempora";
                                                                    name = "Mrs. Johanna Jacobson";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "reiciendis", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "debitis";
                                                                    name = "Mark Rolfson";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "exercitationem", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "aperiam";
                                                                    name = "Francis Harris";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "dolorum", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "laboriosam";
                                                                    name = "Bob Mueller";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "ea", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "asperiores";
                                                                                name = "Sam Powlowski IV";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "corrupti", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "officiis";
                                                                                name = "Tomas Mosciski";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "labore", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "blanditiis";
                                                                                name = "Delia Littel DVM";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "laboriosam", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "architecto";
                                                                    name = "Francisco Powlowski";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "perferendis", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "deserunt";
                                                                    name = "Lindsey Witting";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "repudiandae", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "reprehenderit";
                                                                    name = "Grant Langosh";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    id = "0e101256-3f94-4e29-a973-e922a57a15be";
                                                    s3Path = new S3Path("doloremque", "iure") {{
                                                        bucket = "non";
                                                        key = "vero";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                                add(new Document("officiis") {{
                                                    accessControlConfigurationId = "quae";
                                                    accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "rem", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "qui";
                                                            name = "Elmer Treutel";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "maiores", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "repellat";
                                                            name = "Renee Metz";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }};
                                                    attributes = new org.openapis.openapi.models.shared.DocumentAttribute[]{{
                                                        add(new DocumentAttribute("omnis",                 new DocumentAttributeValue() {{
                                                                            dateValue = OffsetDateTime.parse("2022-07-10T15:48:59.296Z");
                                                                            longValue = 403218L;
                                                                            stringListValue = new String[]{{
                                                                                add("culpa"),
                                                                                add("adipisci"),
                                                                            }};
                                                                            stringValue = "debitis";
                                                                        }};) {{
                                                            key = "id";
                                                            value = new DocumentAttributeValue() {{
                                                                dateValue = OffsetDateTime.parse("2022-09-16T00:03:17.363Z");
                                                                longValue = 680349L;
                                                                stringListValue = new String[]{{
                                                                    add("quae"),
                                                                }};
                                                                stringValue = "recusandae";
                                                            }};
                                                        }}),
                                                    }};
                                                    blob = "laudantium";
                                                    contentType = ContentTypeEnum.RTF;
                                                    hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "soluta", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "impedit";
                                                                                name = "Mrs. Miranda Kemmer V";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "dolorem", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "eaque";
                                                                                name = "Freddie Wyman";
                                                                                type = PrincipalTypeEnum.GROUP;
                                                                            }}),
                                                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "natus", PrincipalTypeEnum.GROUP) {{
                                                                                access = ReadAccessTypeEnum.DENY;
                                                                                dataSourceId = "fuga";
                                                                                name = "Lynda Tromp Sr.";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "animi", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "provident";
                                                                    name = "Natalie Witting";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "in", PrincipalTypeEnum.GROUP) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "provident";
                                                                    name = "Lynn Jacobson DVM";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.DENY, "cumque", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "officia";
                                                                    name = "Irving Gleichner";
                                                                    type = PrincipalTypeEnum.GROUP;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "eum", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.DENY;
                                                                    dataSourceId = "tempora";
                                                                    name = "Carolyn Corkery Jr.";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                                            add(new Principal(ReadAccessTypeEnum.DENY, "suscipit", PrincipalTypeEnum.USER) {{
                                                                                access = ReadAccessTypeEnum.ALLOW;
                                                                                dataSourceId = "ipsa";
                                                                                name = "Ralph Hegmann";
                                                                                type = PrincipalTypeEnum.USER;
                                                                            }}),
                                                                        }}) {{
                                                            principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "dicta", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "quasi";
                                                                    name = "Melba Stokes I";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                                add(new Principal(ReadAccessTypeEnum.ALLOW, "esse", PrincipalTypeEnum.USER) {{
                                                                    access = ReadAccessTypeEnum.ALLOW;
                                                                    dataSourceId = "praesentium";
                                                                    name = "Dr. Van Kassulke Sr.";
                                                                    type = PrincipalTypeEnum.USER;
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    id = "0659a1ad-eaab-4585-9d6c-645b08b61891";
                                                    s3Path = new S3Path("culpa", "voluptatem") {{
                                                        bucket = "rerum";
                                                        key = "est";
                                                    }};
                                                    title = "Dr.";
                                                }}),
                                            }}, "architecto") {{
                                customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration() {{
                                    inlineConfigurations = new org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration[]{{
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("nemo", ConditionOperatorEnum.BEGINS_WITH) {{
                                                conditionDocumentAttributeKey = "pariatur";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-11-30T00:52:48.741Z");
                                                    longValue = 1207L;
                                                    stringListValue = new String[]{{
                                                        add("earum"),
                                                        add("ex"),
                                                        add("sapiente"),
                                                    }};
                                                    stringValue = "rem";
                                                }};
                                                operator = ConditionOperatorEnum.EXISTS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "ratione";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-12-25T00:28:59.319Z");
                                                    longValue = 848341L;
                                                    stringListValue = new String[]{{
                                                        add("impedit"),
                                                        add("quibusdam"),
                                                        add("nam"),
                                                    }};
                                                    stringValue = "ipsam";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("sit", ConditionOperatorEnum.LESS_THAN) {{
                                                conditionDocumentAttributeKey = "culpa";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-09-10T19:23:06.016Z");
                                                    longValue = 80532L;
                                                    stringListValue = new String[]{{
                                                        add("veritatis"),
                                                        add("tempora"),
                                                        add("dolor"),
                                                    }};
                                                    stringValue = "consequatur";
                                                }};
                                                operator = ConditionOperatorEnum.GREATER_THAN_OR_EQUALS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "fugit";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-06-27T11:27:52.517Z");
                                                    longValue = 65604L;
                                                    stringListValue = new String[]{{
                                                        add("fugiat"),
                                                    }};
                                                    stringValue = "ipsam";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("expedita", ConditionOperatorEnum.EQUALS) {{
                                                conditionDocumentAttributeKey = "consequuntur";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-06-10T17:10:55.416Z");
                                                    longValue = 911198L;
                                                    stringListValue = new String[]{{
                                                        add("officiis"),
                                                        add("esse"),
                                                        add("necessitatibus"),
                                                        add("sed"),
                                                    }};
                                                    stringValue = "veniam";
                                                }};
                                                operator = ConditionOperatorEnum.LESS_THAN;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "vel";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-05-25T18:20:51.968Z");
                                                    longValue = 349440L;
                                                    stringListValue = new String[]{{
                                                        add("porro"),
                                                    }};
                                                    stringValue = "autem";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                    }};
                                    postExtractionHookConfiguration = new HookConfiguration("nobis", "laboriosam") {{
                                        invocationCondition = new DocumentAttributeCondition("recusandae", ConditionOperatorEnum.GREATER_THAN_OR_EQUALS) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2022-08-26T04:11:03.225Z");
                                                longValue = 895692L;
                                                stringListValue = new String[]{{
                                                    add("nisi"),
                                                }};
                                                stringValue = "at";
                                            }};;
                                        }};;
                                    }};;
                                    preExtractionHookConfiguration = new HookConfiguration("vero", "est") {{
                                        invocationCondition = new DocumentAttributeCondition("harum", ConditionOperatorEnum.LESS_THAN) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2020-03-31T16:32:36.866Z");
                                                longValue = 759283L;
                                                stringListValue = new String[]{{
                                                    add("nemo"),
                                                    add("voluptate"),
                                                    add("blanditiis"),
                                                }};
                                                stringValue = "officia";
                                            }};;
                                        }};;
                                    }};;
                                    roleArn = "voluptas";
                                }};;
                                roleArn = "numquam";
                            }};, BatchPutDocumentXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_BATCH_PUT_DOCUMENT) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quos";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "fuga";
            }};            

            BatchPutDocumentResponse res = sdk.sdk.batchPutDocument(req);

            if (res.batchPutDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clearQuerySuggestions

<p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearQuerySuggestionsRequest;
import org.openapis.openapi.models.operations.ClearQuerySuggestionsResponse;
import org.openapis.openapi.models.operations.ClearQuerySuggestionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClearQuerySuggestionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClearQuerySuggestionsRequest req = new ClearQuerySuggestionsRequest(                new ClearQuerySuggestionsRequest("incidunt");, ClearQuerySuggestionsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CLEAR_QUERY_SUGGESTIONS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fugiat";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consectetur";
            }};            

            ClearQuerySuggestionsResponse res = sdk.sdk.clearQuerySuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessControlConfiguration

<p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessControlConfigurationRequest;
import org.openapis.openapi.models.operations.CreateAccessControlConfigurationResponse;
import org.openapis.openapi.models.operations.CreateAccessControlConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAccessControlConfigurationRequest;
import org.openapis.openapi.models.shared.HierarchicalPrincipal;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.ReadAccessTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessControlConfigurationRequest req = new CreateAccessControlConfigurationRequest(                new CreateAccessControlConfigurationRequest("cupiditate", "reiciendis") {{
                                accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                    add(new Principal(ReadAccessTypeEnum.DENY, "distinctio", PrincipalTypeEnum.GROUP) {{
                                        access = ReadAccessTypeEnum.ALLOW;
                                        dataSourceId = "omnis";
                                        name = "Kristina Moore MD";
                                        type = PrincipalTypeEnum.GROUP;
                                    }}),
                                    add(new Principal(ReadAccessTypeEnum.DENY, "commodi", PrincipalTypeEnum.GROUP) {{
                                        access = ReadAccessTypeEnum.DENY;
                                        dataSourceId = "minima";
                                        name = "Wilbert Gutkowski";
                                        type = PrincipalTypeEnum.USER;
                                    }}),
                                    add(new Principal(ReadAccessTypeEnum.ALLOW, "non", PrincipalTypeEnum.GROUP) {{
                                        access = ReadAccessTypeEnum.DENY;
                                        dataSourceId = "modi";
                                        name = "Ignacio Bartoletti";
                                        type = PrincipalTypeEnum.USER;
                                    }}),
                                }};
                                clientToken = "enim";
                                description = "sint";
                                hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "inventore", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "deleniti";
                                                            name = "Brad Conn";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.DENY, "necessitatibus", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "nemo";
                                                name = "Monique Harvey";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "velit", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "voluptas";
                                                name = "Van Bergnaum";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "sequi", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "impedit";
                                                name = "Shelia Walker";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "voluptate", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "quidem";
                                                            name = "Flora Schowalter";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "labore", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "necessitatibus";
                                                            name = "Rodolfo Hintz";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "nemo", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "consectetur";
                                                            name = "Stephanie Effertz";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "modi", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "rem";
                                                            name = "Mr. Lonnie Considine";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "beatae", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "voluptatibus";
                                                name = "Robyn Gutmann Jr.";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "itaque", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "eum";
                                                name = "Leslie Metz DDS";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "consequatur", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "itaque";
                                                name = "Maggie Friesen";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "assumenda", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "aperiam";
                                                            name = "Micheal Roob III";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "ea", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "facere";
                                                            name = "Javier McKenzie";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "quia", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "rerum";
                                                            name = "Dan Towne";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "odit", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "repudiandae";
                                                            name = "Mamie Torp";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "nostrum", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "et";
                                                name = "Lindsay Stiedemann";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "iusto", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "dicta";
                                                name = "Wm Steuber";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "minus", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "expedita";
                                                            name = "Terrance Hansen";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "totam", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "corporis";
                                                            name = "Tasha Wolff DDS";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "unde", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "earum";
                                                name = "Delia Murray";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "optio", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "cupiditate";
                                                name = "Elaine Gerhold";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, CreateAccessControlConfigurationXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_ACCESS_CONTROL_CONFIGURATION) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "quo";
                xAmzCredential = "velit";
                xAmzDate = "minus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "est";
            }};            

            CreateAccessControlConfigurationResponse res = sdk.sdk.createAccessControlConfiguration(req);

            if (res.createAccessControlConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSource

<p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSourceRequest;
import org.openapis.openapi.models.operations.CreateDataSourceResponse;
import org.openapis.openapi.models.operations.CreateDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessControlListConfiguration;
import org.openapis.openapi.models.shared.AclConfiguration;
import org.openapis.openapi.models.shared.AlfrescoConfiguration;
import org.openapis.openapi.models.shared.AlfrescoEntityEnum;
import org.openapis.openapi.models.shared.AuthenticationConfiguration;
import org.openapis.openapi.models.shared.BasicAuthenticationConfiguration;
import org.openapis.openapi.models.shared.BoxConfiguration;
import org.openapis.openapi.models.shared.ColumnConfiguration;
import org.openapis.openapi.models.shared.ConditionOperatorEnum;
import org.openapis.openapi.models.shared.ConfluenceAttachmentConfiguration;
import org.openapis.openapi.models.shared.ConfluenceAttachmentFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceAttachmentToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ConfluenceBlogConfiguration;
import org.openapis.openapi.models.shared.ConfluenceBlogFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceBlogToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceConfiguration;
import org.openapis.openapi.models.shared.ConfluencePageConfiguration;
import org.openapis.openapi.models.shared.ConfluencePageFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluencePageToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceSpaceConfiguration;
import org.openapis.openapi.models.shared.ConfluenceSpaceFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceSpaceToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceVersionEnum;
import org.openapis.openapi.models.shared.ConnectionConfiguration;
import org.openapis.openapi.models.shared.CreateDataSourceRequest;
import org.openapis.openapi.models.shared.CustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.DataSourceConfiguration;
import org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DataSourceVpcConfiguration;
import org.openapis.openapi.models.shared.DatabaseConfiguration;
import org.openapis.openapi.models.shared.DatabaseEngineTypeEnum;
import org.openapis.openapi.models.shared.DocumentAttributeCondition;
import org.openapis.openapi.models.shared.DocumentAttributeTarget;
import org.openapis.openapi.models.shared.DocumentAttributeValue;
import org.openapis.openapi.models.shared.DocumentsMetadataConfiguration;
import org.openapis.openapi.models.shared.FsxConfiguration;
import org.openapis.openapi.models.shared.FsxFileSystemTypeEnum;
import org.openapis.openapi.models.shared.GitHubConfiguration;
import org.openapis.openapi.models.shared.GitHubDocumentCrawlProperties;
import org.openapis.openapi.models.shared.GoogleDriveConfiguration;
import org.openapis.openapi.models.shared.HookConfiguration;
import org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.IssueSubEntityEnum;
import org.openapis.openapi.models.shared.JiraConfiguration;
import org.openapis.openapi.models.shared.OnPremiseConfiguration;
import org.openapis.openapi.models.shared.OneDriveConfiguration;
import org.openapis.openapi.models.shared.OneDriveUsers;
import org.openapis.openapi.models.shared.ProxyConfiguration;
import org.openapis.openapi.models.shared.QueryIdentifiersEnclosingOptionEnum;
import org.openapis.openapi.models.shared.QuipConfiguration;
import org.openapis.openapi.models.shared.S3DataSourceConfiguration;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.SaaSConfiguration;
import org.openapis.openapi.models.shared.SalesforceChatterFeedConfiguration;
import org.openapis.openapi.models.shared.SalesforceChatterFeedIncludeFilterTypeEnum;
import org.openapis.openapi.models.shared.SalesforceConfiguration;
import org.openapis.openapi.models.shared.SalesforceCustomKnowledgeArticleTypeConfiguration;
import org.openapis.openapi.models.shared.SalesforceKnowledgeArticleConfiguration;
import org.openapis.openapi.models.shared.SalesforceKnowledgeArticleStateEnum;
import org.openapis.openapi.models.shared.SalesforceStandardKnowledgeArticleTypeConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectAttachmentConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SeedUrlConfiguration;
import org.openapis.openapi.models.shared.ServiceNowAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ServiceNowBuildVersionTypeEnum;
import org.openapis.openapi.models.shared.ServiceNowConfiguration;
import org.openapis.openapi.models.shared.ServiceNowKnowledgeArticleConfiguration;
import org.openapis.openapi.models.shared.ServiceNowServiceCatalogConfiguration;
import org.openapis.openapi.models.shared.SharePointConfiguration;
import org.openapis.openapi.models.shared.SharePointOnlineAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.SharePointVersionEnum;
import org.openapis.openapi.models.shared.SiteMapsConfiguration;
import org.openapis.openapi.models.shared.SlackConfiguration;
import org.openapis.openapi.models.shared.SlackEntityEnum;
import org.openapis.openapi.models.shared.SqlConfiguration;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TemplateConfiguration;
import org.openapis.openapi.models.shared.TypeEnum;
import org.openapis.openapi.models.shared.Urls;
import org.openapis.openapi.models.shared.WebCrawlerConfiguration;
import org.openapis.openapi.models.shared.WebCrawlerModeEnum;
import org.openapis.openapi.models.shared.WorkDocsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSourceRequest req = new CreateDataSourceRequest(                new CreateDataSourceRequest("delectus", "tempore", DataSourceTypeEnum.GITHUB) {{
                                clientToken = "odit";
                                configuration = new DataSourceConfiguration() {{
                                    alfrescoConfiguration = new AlfrescoConfiguration("repellat", "pariatur", "nemo",                 new S3Path("reprehenderit", "aperiam");) {{
                                        blogFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("excepturi", "dolores") {{
                                                dataSourceFieldName = "minima";
                                                dateFieldFormat = "in";
                                                indexFieldName = "ducimus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("voluptate", "pariatur") {{
                                                dataSourceFieldName = "error";
                                                dateFieldFormat = "veritatis";
                                                indexFieldName = "ducimus";
                                            }}),
                                        }};
                                        crawlComments = false;
                                        crawlSystemFolders = false;
                                        documentLibraryFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("quaerat", "commodi") {{
                                                dataSourceFieldName = "similique";
                                                dateFieldFormat = "optio";
                                                indexFieldName = "ex";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("exercitationem", "quam") {{
                                                dataSourceFieldName = "officiis";
                                                dateFieldFormat = "placeat";
                                                indexFieldName = "quidem";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sint", "vero") {{
                                                dataSourceFieldName = "dolorem";
                                                dateFieldFormat = "modi";
                                                indexFieldName = "ipsa";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("dicta", "earum") {{
                                                dataSourceFieldName = "sequi";
                                                dateFieldFormat = "repudiandae";
                                                indexFieldName = "cum";
                                            }}),
                                        }};
                                        entityFilter = new org.openapis.openapi.models.shared.AlfrescoEntityEnum[]{{
                                            add(AlfrescoEntityEnum.BLOG),
                                            add(AlfrescoEntityEnum.WIKI),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("dicta"),
                                            add("consequuntur"),
                                            add("necessitatibus"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("ipsa"),
                                            add("ducimus"),
                                            add("maiores"),
                                        }};
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("quasi"),
                                                        }},                 new String[]{{
                                                            add("pariatur"),
                                                            add("libero"),
                                                        }});;
                                        wikiFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("nostrum", "doloribus") {{
                                                dataSourceFieldName = "occaecati";
                                                dateFieldFormat = "nemo";
                                                indexFieldName = "aliquam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("hic", "animi") {{
                                                dataSourceFieldName = "eligendi";
                                                dateFieldFormat = "sint";
                                                indexFieldName = "enim";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("odio", "eaque") {{
                                                dataSourceFieldName = "quas";
                                                dateFieldFormat = "totam";
                                                indexFieldName = "molestias";
                                            }}),
                                        }};
                                    }};;
                                    boxConfiguration = new BoxConfiguration("saepe", "architecto") {{
                                        commentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("libero", "velit") {{
                                                dataSourceFieldName = "iste";
                                                dateFieldFormat = "assumenda";
                                                indexFieldName = "tempore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("cum", "ipsum") {{
                                                dataSourceFieldName = "doloremque";
                                                dateFieldFormat = "delectus";
                                                indexFieldName = "impedit";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("doloremque", "quis") {{
                                                dataSourceFieldName = "adipisci";
                                                dateFieldFormat = "saepe";
                                                indexFieldName = "deserunt";
                                            }}),
                                        }};
                                        crawlComments = false;
                                        crawlTasks = false;
                                        crawlWebLinks = false;
                                        exclusionPatterns = new String[]{{
                                            add("libero"),
                                            add("architecto"),
                                        }};
                                        fileFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("non", "magnam") {{
                                                dataSourceFieldName = "molestiae";
                                                dateFieldFormat = "eligendi";
                                                indexFieldName = "possimus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("veniam", "consequuntur") {{
                                                dataSourceFieldName = "itaque";
                                                dateFieldFormat = "sed";
                                                indexFieldName = "asperiores";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("pariatur", "amet") {{
                                                dataSourceFieldName = "facere";
                                                dateFieldFormat = "laudantium";
                                                indexFieldName = "odit";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("ab"),
                                            add("velit"),
                                        }};
                                        taskFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("quaerat", "blanditiis") {{
                                                dataSourceFieldName = "tempore";
                                                dateFieldFormat = "nisi";
                                                indexFieldName = "voluptatibus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("nisi", "libero") {{
                                                dataSourceFieldName = "distinctio";
                                                dateFieldFormat = "nisi";
                                                indexFieldName = "quis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("ipsum", "ad") {{
                                                dataSourceFieldName = "minus";
                                                dateFieldFormat = "facere";
                                                indexFieldName = "facilis";
                                            }}),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("voluptatibus"),
                                                            add("consequuntur"),
                                                            add("debitis"),
                                                            add("labore"),
                                                        }},                 new String[]{{
                                                            add("eos"),
                                                            add("reprehenderit"),
                                                            add("nostrum"),
                                                        }});;
                                        webLinkFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("eligendi", "fugiat") {{
                                                dataSourceFieldName = "iusto";
                                                dateFieldFormat = "est";
                                                indexFieldName = "rem";
                                            }}),
                                        }};
                                    }};;
                                    confluenceConfiguration = new ConfluenceConfiguration("unde", "officiis", ConfluenceVersionEnum.CLOUD) {{
                                        attachmentConfiguration = new ConfluenceAttachmentConfiguration() {{
                                            attachmentFieldMappings = new org.openapis.openapi.models.shared.ConfluenceAttachmentToIndexFieldMapping[]{{
                                                add(new ConfluenceAttachmentToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceAttachmentFieldNameEnum.CONTENT_TYPE;
                                                    dateFieldFormat = "error";
                                                    indexFieldName = "porro";
                                                }}),
                                            }};
                                            crawlAttachments = false;
                                        }};;
                                        authenticationType = ConfluenceAuthenticationTypeEnum.HTTP_BASIC;
                                        blogConfiguration = new ConfluenceBlogConfiguration() {{
                                            blogFieldMappings = new org.openapis.openapi.models.shared.ConfluenceBlogToIndexFieldMapping[]{{
                                                add(new ConfluenceBlogToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceBlogFieldNameEnum.PUBLISH_DATE;
                                                    dateFieldFormat = "fugiat";
                                                    indexFieldName = "ad";
                                                }}),
                                                add(new ConfluenceBlogToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceBlogFieldNameEnum.DISPLAY_URL;
                                                    dateFieldFormat = "enim";
                                                    indexFieldName = "delectus";
                                                }}),
                                            }};
                                        }};;
                                        exclusionPatterns = new String[]{{
                                            add("dignissimos"),
                                            add("libero"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("ab"),
                                        }};
                                        pageConfiguration = new ConfluencePageConfiguration() {{
                                            pageFieldMappings = new org.openapis.openapi.models.shared.ConfluencePageToIndexFieldMapping[]{{
                                                add(new ConfluencePageToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluencePageFieldNameEnum.URL;
                                                    dateFieldFormat = "saepe";
                                                    indexFieldName = "tempore";
                                                }}),
                                                add(new ConfluencePageToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluencePageFieldNameEnum.ITEM_TYPE;
                                                    dateFieldFormat = "eos";
                                                    indexFieldName = "reiciendis";
                                                }}),
                                            }};
                                        }};;
                                        proxyConfiguration = new ProxyConfiguration("earum", 444121L) {{
                                            credentials = "praesentium";
                                        }};;
                                        spaceConfiguration = new ConfluenceSpaceConfiguration() {{
                                            crawlArchivedSpaces = false;
                                            crawlPersonalSpaces = false;
                                            excludeSpaces = new String[]{{
                                                add("repellat"),
                                                add("quisquam"),
                                            }};
                                            includeSpaces = new String[]{{
                                                add("nihil"),
                                            }};
                                            spaceFieldMappings = new org.openapis.openapi.models.shared.ConfluenceSpaceToIndexFieldMapping[]{{
                                                add(new ConfluenceSpaceToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceSpaceFieldNameEnum.DISPLAY_URL;
                                                    dateFieldFormat = "labore";
                                                    indexFieldName = "assumenda";
                                                }}),
                                                add(new ConfluenceSpaceToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceSpaceFieldNameEnum.ITEM_TYPE;
                                                    dateFieldFormat = "quisquam";
                                                    indexFieldName = "provident";
                                                }}),
                                                add(new ConfluenceSpaceToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceSpaceFieldNameEnum.SPACE_KEY;
                                                    dateFieldFormat = "repudiandae";
                                                    indexFieldName = "consequatur";
                                                }}),
                                            }};
                                        }};;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("aspernatur"),
                                                            add("nam"),
                                                            add("expedita"),
                                                            add("quas"),
                                                        }},                 new String[]{{
                                                            add("repudiandae"),
                                                            add("rerum"),
                                                            add("dignissimos"),
                                                        }});;
                                    }};;
                                    databaseConfiguration = new DatabaseConfiguration(                new ColumnConfiguration(                new String[]{{
                                                                        add("vero"),
                                                                        add("similique"),
                                                                    }}, "repellendus", "iure") {{
                                                        documentTitleColumnName = "dolorem";
                                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                            add(new DataSourceToIndexFieldMapping("voluptatem", "ad") {{
                                                                dataSourceFieldName = "impedit";
                                                                dateFieldFormat = "commodi";
                                                                indexFieldName = "aut";
                                                            }}),
                                                            add(new DataSourceToIndexFieldMapping("praesentium", "quidem") {{
                                                                dataSourceFieldName = "quae";
                                                                dateFieldFormat = "amet";
                                                                indexFieldName = "illum";
                                                            }}),
                                                        }};
                                                    }};,                 new ConnectionConfiguration("cum", "amet", 97676L, "dicta", "laudantium");, DatabaseEngineTypeEnum.RDS_AURORA_MYSQL) {{
                                        aclConfiguration = new AclConfiguration("earum");;
                                        sqlConfiguration = new SqlConfiguration() {{
                                            queryIdentifiersEnclosingOption = QueryIdentifiersEnclosingOptionEnum.DOUBLE_QUOTES;
                                        }};;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("provident"),
                                                        }},                 new String[]{{
                                                            add("necessitatibus"),
                                                            add("provident"),
                                                            add("repudiandae"),
                                                        }});;
                                    }};;
                                    fsxConfiguration = new FsxConfiguration("consequatur", FsxFileSystemTypeEnum.WINDOWS,                 new DataSourceVpcConfiguration(                new String[]{{
                                                                        add("molestiae"),
                                                                        add("itaque"),
                                                                    }},                 new String[]{{
                                                                        add("corrupti"),
                                                                        add("aperiam"),
                                                                        add("sint"),
                                                                    }});) {{
                                        exclusionPatterns = new String[]{{
                                            add("eos"),
                                            add("totam"),
                                            add("dicta"),
                                            add("voluptatem"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("dolor", "occaecati") {{
                                                dataSourceFieldName = "dolor";
                                                dateFieldFormat = "sunt";
                                                indexFieldName = "a";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("beatae"),
                                            add("at"),
                                            add("labore"),
                                        }};
                                        secretArn = "minus";
                                    }};;
                                    gitHubConfiguration = new GitHubConfiguration("esse") {{
                                        exclusionFileNamePatterns = new String[]{{
                                            add("perferendis"),
                                        }};
                                        exclusionFileTypePatterns = new String[]{{
                                            add("ea"),
                                            add("aperiam"),
                                            add("dignissimos"),
                                        }};
                                        exclusionFolderNamePatterns = new String[]{{
                                            add("velit"),
                                            add("porro"),
                                            add("provident"),
                                            add("consectetur"),
                                        }};
                                        gitHubCommitConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("natus", "temporibus") {{
                                                dataSourceFieldName = "dignissimos";
                                                dateFieldFormat = "consectetur";
                                                indexFieldName = "soluta";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aspernatur", "quo") {{
                                                dataSourceFieldName = "officia";
                                                dateFieldFormat = "amet";
                                                indexFieldName = "tenetur";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("dignissimos", "vero") {{
                                                dataSourceFieldName = "itaque";
                                                dateFieldFormat = "illum";
                                                indexFieldName = "laborum";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("explicabo", "explicabo") {{
                                                dataSourceFieldName = "qui";
                                                dateFieldFormat = "consectetur";
                                                indexFieldName = "repellat";
                                            }}),
                                        }};
                                        gitHubDocumentCrawlProperties = new GitHubDocumentCrawlProperties() {{
                                            crawlIssue = false;
                                            crawlIssueComment = false;
                                            crawlIssueCommentAttachment = false;
                                            crawlPullRequest = false;
                                            crawlPullRequestComment = false;
                                            crawlPullRequestCommentAttachment = false;
                                            crawlRepositoryDocuments = false;
                                        }};;
                                        gitHubIssueAttachmentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("illo", "hic") {{
                                                dataSourceFieldName = "nihil";
                                                dateFieldFormat = "non";
                                                indexFieldName = "ab";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("distinctio", "in") {{
                                                dataSourceFieldName = "deserunt";
                                                dateFieldFormat = "delectus";
                                                indexFieldName = "non";
                                            }}),
                                        }};
                                        gitHubIssueCommentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("modi", "in") {{
                                                dataSourceFieldName = "labore";
                                                dateFieldFormat = "numquam";
                                                indexFieldName = "repudiandae";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aperiam", "odit") {{
                                                dataSourceFieldName = "explicabo";
                                                dateFieldFormat = "accusamus";
                                                indexFieldName = "rem";
                                            }}),
                                        }};
                                        gitHubIssueDocumentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("minima", "libero") {{
                                                dataSourceFieldName = "enim";
                                                dateFieldFormat = "voluptate";
                                                indexFieldName = "similique";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("eum", "nesciunt") {{
                                                dataSourceFieldName = "magnam";
                                                dateFieldFormat = "sit";
                                                indexFieldName = "modi";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("nostrum", "molestiae") {{
                                                dataSourceFieldName = "mollitia";
                                                dateFieldFormat = "dignissimos";
                                                indexFieldName = "fugiat";
                                            }}),
                                        }};
                                        gitHubPullRequestCommentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("aut", "aut") {{
                                                dataSourceFieldName = "reiciendis";
                                                dateFieldFormat = "ab";
                                                indexFieldName = "modi";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("numquam", "dolorum") {{
                                                dataSourceFieldName = "eveniet";
                                                dateFieldFormat = "odio";
                                                indexFieldName = "commodi";
                                            }}),
                                        }};
                                        gitHubPullRequestDocumentAttachmentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("quaerat", "itaque") {{
                                                dataSourceFieldName = "voluptate";
                                                dateFieldFormat = "consectetur";
                                                indexFieldName = "nesciunt";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("iusto", "quas") {{
                                                dataSourceFieldName = "minus";
                                                dateFieldFormat = "sunt";
                                                indexFieldName = "distinctio";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("autem", "fuga") {{
                                                dataSourceFieldName = "et";
                                                dateFieldFormat = "facilis";
                                                indexFieldName = "amet";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quos", "laudantium") {{
                                                dataSourceFieldName = "alias";
                                                dateFieldFormat = "rem";
                                                indexFieldName = "aut";
                                            }}),
                                        }};
                                        gitHubPullRequestDocumentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("saepe", "delectus") {{
                                                dataSourceFieldName = "veritatis";
                                                dateFieldFormat = "quae";
                                                indexFieldName = "eaque";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sed", "voluptatem") {{
                                                dataSourceFieldName = "mollitia";
                                                dateFieldFormat = "nulla";
                                                indexFieldName = "officia";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("voluptatem", "incidunt") {{
                                                dataSourceFieldName = "alias";
                                                dateFieldFormat = "eveniet";
                                                indexFieldName = "hic";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("harum", "explicabo") {{
                                                dataSourceFieldName = "qui";
                                                dateFieldFormat = "qui";
                                                indexFieldName = "necessitatibus";
                                            }}),
                                        }};
                                        gitHubRepositoryConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("voluptatibus", "molestias") {{
                                                dataSourceFieldName = "aliquid";
                                                dateFieldFormat = "modi";
                                                indexFieldName = "optio";
                                            }}),
                                        }};
                                        inclusionFileNamePatterns = new String[]{{
                                            add("libero"),
                                            add("totam"),
                                            add("sequi"),
                                        }};
                                        inclusionFileTypePatterns = new String[]{{
                                            add("ea"),
                                            add("impedit"),
                                        }};
                                        inclusionFolderNamePatterns = new String[]{{
                                            add("odit"),
                                            add("velit"),
                                        }};
                                        onPremiseConfiguration = new OnPremiseConfiguration("reiciendis", "repellat",                 new S3Path("nulla", "laborum"););;
                                        repositoryFilter = new String[]{{
                                            add("accusamus"),
                                            add("doloremque"),
                                            add("nisi"),
                                        }};
                                        saaSConfiguration = new SaaSConfiguration("rerum", "recusandae");;
                                        type = TypeEnum.ON_PREMISE;
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("rem"),
                                                            add("quia"),
                                                        }},                 new String[]{{
                                                            add("quisquam"),
                                                            add("dicta"),
                                                        }});;
                                    }};;
                                    googleDriveConfiguration = new GoogleDriveConfiguration("voluptatibus") {{
                                        excludeMimeTypes = new String[]{{
                                            add("quae"),
                                            add("officiis"),
                                            add("architecto"),
                                            add("architecto"),
                                        }};
                                        excludeSharedDrives = new String[]{{
                                            add("optio"),
                                            add("rem"),
                                        }};
                                        excludeUserAccounts = new String[]{{
                                            add("facilis"),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("a"),
                                            add("iste"),
                                            add("dicta"),
                                            add("quos"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("maxime", "modi") {{
                                                dataSourceFieldName = "dolore";
                                                dateFieldFormat = "modi";
                                                indexFieldName = "itaque";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("doloribus", "impedit") {{
                                                dataSourceFieldName = "consequuntur";
                                                dateFieldFormat = "assumenda";
                                                indexFieldName = "vero";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("accusamus"),
                                            add("totam"),
                                            add("reiciendis"),
                                            add("ab"),
                                        }};
                                    }};;
                                    jiraConfiguration = new JiraConfiguration("sint", "nihil") {{
                                        attachmentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("debitis", "vel") {{
                                                dataSourceFieldName = "iure";
                                                dateFieldFormat = "odio";
                                                indexFieldName = "nesciunt";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("consequuntur", "officia") {{
                                                dataSourceFieldName = "neque";
                                                dateFieldFormat = "corporis";
                                                indexFieldName = "voluptas";
                                            }}),
                                        }};
                                        commentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("rem", "maiores") {{
                                                dataSourceFieldName = "distinctio";
                                                dateFieldFormat = "eius";
                                                indexFieldName = "ipsa";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("neque", "facere") {{
                                                dataSourceFieldName = "accusantium";
                                                dateFieldFormat = "veniam";
                                                indexFieldName = "saepe";
                                            }}),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("quos"),
                                            add("doloribus"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("est"),
                                            add("delectus"),
                                            add("velit"),
                                            add("vitae"),
                                        }};
                                        issueFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("nemo", "doloribus") {{
                                                dataSourceFieldName = "similique";
                                                dateFieldFormat = "illo";
                                                indexFieldName = "repellat";
                                            }}),
                                        }};
                                        issueSubEntityFilter = new org.openapis.openapi.models.shared.IssueSubEntityEnum[]{{
                                            add(IssueSubEntityEnum.ATTACHMENTS),
                                            add(IssueSubEntityEnum.COMMENTS),
                                            add(IssueSubEntityEnum.COMMENTS),
                                            add(IssueSubEntityEnum.ATTACHMENTS),
                                        }};
                                        issueType = new String[]{{
                                            add("optio"),
                                            add("alias"),
                                            add("quidem"),
                                        }};
                                        project = new String[]{{
                                            add("commodi"),
                                        }};
                                        projectFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("officia", "sint") {{
                                                dataSourceFieldName = "consequuntur";
                                                dateFieldFormat = "veniam";
                                                indexFieldName = "debitis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("adipisci", "libero") {{
                                                dataSourceFieldName = "ut";
                                                dateFieldFormat = "numquam";
                                                indexFieldName = "tenetur";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("minus", "ab") {{
                                                dataSourceFieldName = "in";
                                                dateFieldFormat = "minima";
                                                indexFieldName = "ex";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quisquam", "dolor") {{
                                                dataSourceFieldName = "beatae";
                                                dateFieldFormat = "hic";
                                                indexFieldName = "nisi";
                                            }}),
                                        }};
                                        status = new String[]{{
                                            add("fuga"),
                                            add("minima"),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("qui"),
                                                        }},                 new String[]{{
                                                            add("magni"),
                                                            add("incidunt"),
                                                        }});;
                                        workLogFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("expedita", "facilis") {{
                                                dataSourceFieldName = "praesentium";
                                                dateFieldFormat = "dolor";
                                                indexFieldName = "exercitationem";
                                            }}),
                                        }};
                                    }};;
                                    oneDriveConfiguration = new OneDriveConfiguration(                new OneDriveUsers() {{
                                                        oneDriveUserList = new String[]{{
                                                            add("sit"),
                                                            add("nemo"),
                                                            add("culpa"),
                                                            add("consequuntur"),
                                                        }};
                                                        oneDriveUserS3Path = new S3Path("amet", "deserunt");;
                                                    }};, "modi", "veniam") {{
                                        disableLocalGroups = false;
                                        exclusionPatterns = new String[]{{
                                            add("itaque"),
                                            add("a"),
                                            add("quisquam"),
                                            add("enim"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("alias", "culpa") {{
                                                dataSourceFieldName = "assumenda";
                                                dateFieldFormat = "officiis";
                                                indexFieldName = "architecto";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quia", "dicta") {{
                                                dataSourceFieldName = "ipsa";
                                                dateFieldFormat = "nobis";
                                                indexFieldName = "necessitatibus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("ullam", "architecto") {{
                                                dataSourceFieldName = "vel";
                                                dateFieldFormat = "perspiciatis";
                                                indexFieldName = "debitis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("provident", "cumque") {{
                                                dataSourceFieldName = "accusantium";
                                                dateFieldFormat = "perferendis";
                                                indexFieldName = "veritatis";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("quibusdam"),
                                            add("quod"),
                                        }};
                                    }};;
                                    quipConfiguration = new QuipConfiguration("nemo", "recusandae") {{
                                        attachmentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("sed", "odio") {{
                                                dataSourceFieldName = "magnam";
                                                dateFieldFormat = "dignissimos";
                                                indexFieldName = "laboriosam";
                                            }}),
                                        }};
                                        crawlAttachments = false;
                                        crawlChatRooms = false;
                                        crawlFileComments = false;
                                        exclusionPatterns = new String[]{{
                                            add("provident"),
                                            add("cum"),
                                            add("doloribus"),
                                        }};
                                        folderIds = new String[]{{
                                            add("quidem"),
                                            add("itaque"),
                                            add("laboriosam"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("modi"),
                                            add("perspiciatis"),
                                            add("hic"),
                                        }};
                                        messageFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("incidunt", "recusandae") {{
                                                dataSourceFieldName = "aspernatur";
                                                dateFieldFormat = "libero";
                                                indexFieldName = "nam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("autem", "quo") {{
                                                dataSourceFieldName = "quod";
                                                dateFieldFormat = "id";
                                                indexFieldName = "saepe";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("illum", "facilis") {{
                                                dataSourceFieldName = "nesciunt";
                                                dateFieldFormat = "illum";
                                                indexFieldName = "nemo";
                                            }}),
                                        }};
                                        threadFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("distinctio", "pariatur") {{
                                                dataSourceFieldName = "mollitia";
                                                dateFieldFormat = "assumenda";
                                                indexFieldName = "recusandae";
                                            }}),
                                        }};
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("facere"),
                                                            add("laborum"),
                                                        }},                 new String[]{{
                                                            add("laborum"),
                                                            add("incidunt"),
                                                            add("maxime"),
                                                            add("ipsam"),
                                                        }});;
                                    }};;
                                    s3Configuration = new S3DataSourceConfiguration("alias") {{
                                        accessControlListConfiguration = new AccessControlListConfiguration() {{
                                            keyPath = "suscipit";
                                        }};;
                                        documentsMetadataConfiguration = new DocumentsMetadataConfiguration() {{
                                            s3Prefix = "deserunt";
                                        }};;
                                        exclusionPatterns = new String[]{{
                                            add("laborum"),
                                            add("est"),
                                            add("occaecati"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("quo"),
                                            add("perferendis"),
                                        }};
                                        inclusionPrefixes = new String[]{{
                                            add("aliquid"),
                                        }};
                                    }};;
                                    salesforceConfiguration = new SalesforceConfiguration("magnam", "quaerat") {{
                                        chatterFeedConfiguration = new SalesforceChatterFeedConfiguration("eligendi") {{
                                            documentTitleFieldName = "hic";
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("error", "mollitia") {{
                                                    dataSourceFieldName = "officiis";
                                                    dateFieldFormat = "unde";
                                                    indexFieldName = "nulla";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("corrupti", "fuga") {{
                                                    dataSourceFieldName = "magnam";
                                                    dateFieldFormat = "nostrum";
                                                    indexFieldName = "esse";
                                                }}),
                                            }};
                                            includeFilterTypes = new org.openapis.openapi.models.shared.SalesforceChatterFeedIncludeFilterTypeEnum[]{{
                                                add(SalesforceChatterFeedIncludeFilterTypeEnum.STANDARD_USER),
                                                add(SalesforceChatterFeedIncludeFilterTypeEnum.ACTIVE_USER),
                                                add(SalesforceChatterFeedIncludeFilterTypeEnum.STANDARD_USER),
                                                add(SalesforceChatterFeedIncludeFilterTypeEnum.STANDARD_USER),
                                            }};
                                        }};;
                                        crawlAttachments = false;
                                        excludeAttachmentFilePatterns = new String[]{{
                                            add("doloremque"),
                                            add("voluptatem"),
                                        }};
                                        includeAttachmentFilePatterns = new String[]{{
                                            add("necessitatibus"),
                                            add("maxime"),
                                            add("consequatur"),
                                            add("eaque"),
                                        }};
                                        knowledgeArticleConfiguration = new SalesforceKnowledgeArticleConfiguration(                new org.openapis.openapi.models.shared.SalesforceKnowledgeArticleStateEnum[]{{
                                                            add(SalesforceKnowledgeArticleStateEnum.PUBLISHED),
                                                        }}) {{
                                            customKnowledgeArticleTypeConfigurations = new org.openapis.openapi.models.shared.SalesforceCustomKnowledgeArticleTypeConfiguration[]{{
                                                add(new SalesforceCustomKnowledgeArticleTypeConfiguration("alias", "asperiores") {{
                                                    documentDataFieldName = "blanditiis";
                                                    documentTitleFieldName = "quae";
                                                    fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                        add(new DataSourceToIndexFieldMapping("impedit", "ipsa") {{
                                                            dataSourceFieldName = "officiis";
                                                            dateFieldFormat = "sed";
                                                            indexFieldName = "necessitatibus";
                                                        }}),
                                                    }};
                                                    name = "Darnell Wunsch";
                                                }}),
                                                add(new SalesforceCustomKnowledgeArticleTypeConfiguration("dicta", "odit") {{
                                                    documentDataFieldName = "rem";
                                                    documentTitleFieldName = "dicta";
                                                    fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                        add(new DataSourceToIndexFieldMapping("eius", "esse") {{
                                                            dataSourceFieldName = "earum";
                                                            dateFieldFormat = "doloribus";
                                                            indexFieldName = "velit";
                                                        }}),
                                                        add(new DataSourceToIndexFieldMapping("neque", "vero") {{
                                                            dataSourceFieldName = "in";
                                                            dateFieldFormat = "eligendi";
                                                            indexFieldName = "quasi";
                                                        }}),
                                                    }};
                                                    name = "Edward Denesik II";
                                                }}),
                                                add(new SalesforceCustomKnowledgeArticleTypeConfiguration("incidunt", "quam") {{
                                                    documentDataFieldName = "corporis";
                                                    documentTitleFieldName = "rerum";
                                                    fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                        add(new DataSourceToIndexFieldMapping("id", "laboriosam") {{
                                                            dataSourceFieldName = "error";
                                                            dateFieldFormat = "vel";
                                                            indexFieldName = "accusantium";
                                                        }}),
                                                    }};
                                                    name = "Billie Bogan V";
                                                }}),
                                                add(new SalesforceCustomKnowledgeArticleTypeConfiguration("minus", "commodi") {{
                                                    documentDataFieldName = "magni";
                                                    documentTitleFieldName = "deserunt";
                                                    fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                        add(new DataSourceToIndexFieldMapping("maxime", "quis") {{
                                                            dataSourceFieldName = "omnis";
                                                            dateFieldFormat = "sed";
                                                            indexFieldName = "nesciunt";
                                                        }}),
                                                        add(new DataSourceToIndexFieldMapping("maiores", "laudantium") {{
                                                            dataSourceFieldName = "cupiditate";
                                                            dateFieldFormat = "aliquam";
                                                            indexFieldName = "excepturi";
                                                        }}),
                                                        add(new DataSourceToIndexFieldMapping("nemo", "ipsa") {{
                                                            dataSourceFieldName = "velit";
                                                            dateFieldFormat = "reiciendis";
                                                            indexFieldName = "amet";
                                                        }}),
                                                        add(new DataSourceToIndexFieldMapping("molestiae", "aliquid") {{
                                                            dataSourceFieldName = "quisquam";
                                                            dateFieldFormat = "tenetur";
                                                            indexFieldName = "quas";
                                                        }}),
                                                    }};
                                                    name = "Tommie Rohan Sr.";
                                                }}),
                                            }};
                                            standardKnowledgeArticleTypeConfiguration = new SalesforceStandardKnowledgeArticleTypeConfiguration("eveniet") {{
                                                documentTitleFieldName = "porro";
                                                fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                    add(new DataSourceToIndexFieldMapping("fugit", "eius") {{
                                                        dataSourceFieldName = "quidem";
                                                        dateFieldFormat = "modi";
                                                        indexFieldName = "voluptates";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("esse", "blanditiis") {{
                                                        dataSourceFieldName = "sequi";
                                                        dateFieldFormat = "eligendi";
                                                        indexFieldName = "asperiores";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("animi", "maiores") {{
                                                        dataSourceFieldName = "sint";
                                                        dateFieldFormat = "repellat";
                                                        indexFieldName = "a";
                                                    }}),
                                                }};
                                            }};;
                                        }};;
                                        standardObjectAttachmentConfiguration = new SalesforceStandardObjectAttachmentConfiguration() {{
                                            documentTitleFieldName = "itaque";
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("officiis", "enim") {{
                                                    dataSourceFieldName = "deserunt";
                                                    dateFieldFormat = "corporis";
                                                    indexFieldName = "velit";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("repudiandae", "accusantium") {{
                                                    dataSourceFieldName = "officia";
                                                    dateFieldFormat = "saepe";
                                                    indexFieldName = "eum";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("blanditiis", "eius") {{
                                                    dataSourceFieldName = "officia";
                                                    dateFieldFormat = "impedit";
                                                    indexFieldName = "quasi";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("natus", "minus") {{
                                                    dataSourceFieldName = "quisquam";
                                                    dateFieldFormat = "eos";
                                                    indexFieldName = "nobis";
                                                }}),
                                            }};
                                        }};;
                                        standardObjectConfigurations = new org.openapis.openapi.models.shared.SalesforceStandardObjectConfiguration[]{{
                                            add(new SalesforceStandardObjectConfiguration("veniam", SalesforceStandardObjectNameEnum.IDEA) {{
                                                documentDataFieldName = "magnam";
                                                documentTitleFieldName = "reprehenderit";
                                                fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                    add(new DataSourceToIndexFieldMapping("molestiae", "amet") {{
                                                        dataSourceFieldName = "quos";
                                                        dateFieldFormat = "corrupti";
                                                        indexFieldName = "amet";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("necessitatibus", "architecto") {{
                                                        dataSourceFieldName = "laborum";
                                                        dateFieldFormat = "modi";
                                                        indexFieldName = "perferendis";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("maiores", "neque") {{
                                                        dataSourceFieldName = "molestias";
                                                        dateFieldFormat = "dolore";
                                                        indexFieldName = "sunt";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("ipsam", "eaque") {{
                                                        dataSourceFieldName = "odit";
                                                        dateFieldFormat = "earum";
                                                        indexFieldName = "veniam";
                                                    }}),
                                                }};
                                                name = SalesforceStandardObjectNameEnum.DOCUMENT;
                                            }}),
                                        }};
                                    }};;
                                    serviceNowConfiguration = new ServiceNowConfiguration("ad", "nisi", ServiceNowBuildVersionTypeEnum.OTHERS) {{
                                        authenticationType = ServiceNowAuthenticationTypeEnum.HTTP_BASIC;
                                        knowledgeArticleConfiguration = new ServiceNowKnowledgeArticleConfiguration("quibusdam") {{
                                            crawlAttachments = false;
                                            documentTitleFieldName = "nemo";
                                            excludeAttachmentFilePatterns = new String[]{{
                                                add("pariatur"),
                                                add("sit"),
                                            }};
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("sapiente", "sed") {{
                                                    dataSourceFieldName = "repellendus";
                                                    dateFieldFormat = "perferendis";
                                                    indexFieldName = "id";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("architecto", "adipisci") {{
                                                    dataSourceFieldName = "possimus";
                                                    dateFieldFormat = "repellat";
                                                    indexFieldName = "repudiandae";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("voluptatibus", "iure") {{
                                                    dataSourceFieldName = "pariatur";
                                                    dateFieldFormat = "harum";
                                                    indexFieldName = "dolore";
                                                }}),
                                            }};
                                            filterQuery = "explicabo";
                                            includeAttachmentFilePatterns = new String[]{{
                                                add("soluta"),
                                                add("dolorum"),
                                                add("velit"),
                                                add("earum"),
                                            }};
                                        }};;
                                        serviceCatalogConfiguration = new ServiceNowServiceCatalogConfiguration("praesentium") {{
                                            crawlAttachments = false;
                                            documentTitleFieldName = "error";
                                            excludeAttachmentFilePatterns = new String[]{{
                                                add("quasi"),
                                                add("mollitia"),
                                            }};
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("expedita", "corrupti") {{
                                                    dataSourceFieldName = "harum";
                                                    dateFieldFormat = "cumque";
                                                    indexFieldName = "doloremque";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("excepturi", "magni") {{
                                                    dataSourceFieldName = "eaque";
                                                    dateFieldFormat = "deserunt";
                                                    indexFieldName = "aliquid";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("rerum", "sed") {{
                                                    dataSourceFieldName = "tempora";
                                                    dateFieldFormat = "possimus";
                                                    indexFieldName = "dolor";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("minus", "quo") {{
                                                    dataSourceFieldName = "accusamus";
                                                    dateFieldFormat = "optio";
                                                    indexFieldName = "delectus";
                                                }}),
                                            }};
                                            includeAttachmentFilePatterns = new String[]{{
                                                add("asperiores"),
                                                add("voluptatum"),
                                                add("iste"),
                                            }};
                                        }};;
                                    }};;
                                    sharePointConfiguration = new SharePointConfiguration("corporis", SharePointVersionEnum.SHAREPOINT2013,                 new String[]{{
                                                        add("aut"),
                                                    }}) {{
                                        authenticationType = SharePointOnlineAuthenticationTypeEnum.OAUTH2;
                                        crawlAttachments = false;
                                        disableLocalGroups = false;
                                        documentTitleFieldName = "nostrum";
                                        exclusionPatterns = new String[]{{
                                            add("possimus"),
                                            add("neque"),
                                            add("pariatur"),
                                            add("vel"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("aperiam", "non") {{
                                                dataSourceFieldName = "mollitia";
                                                dateFieldFormat = "quae";
                                                indexFieldName = "quos";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quisquam", "quas") {{
                                                dataSourceFieldName = "voluptates";
                                                dateFieldFormat = "ad";
                                                indexFieldName = "aliquam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aliquid", "laudantium") {{
                                                dataSourceFieldName = "consequuntur";
                                                dateFieldFormat = "maiores";
                                                indexFieldName = "inventore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("consectetur", "cumque") {{
                                                dataSourceFieldName = "est";
                                                dateFieldFormat = "dolor";
                                                indexFieldName = "aliquid";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("voluptatum"),
                                            add("ducimus"),
                                            add("adipisci"),
                                        }};
                                        proxyConfiguration = new ProxyConfiguration("recusandae", 271306L) {{
                                            credentials = "blanditiis";
                                        }};;
                                        sslCertificateS3Path = new S3Path("numquam", "sequi");;
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("sit"),
                                                            add("rerum"),
                                                            add("veritatis"),
                                                        }},                 new String[]{{
                                                            add("autem"),
                                                            add("quidem"),
                                                            add("totam"),
                                                            add("porro"),
                                                        }});;
                                    }};;
                                    slackConfiguration = new SlackConfiguration("deserunt", "magni",                 new org.openapis.openapi.models.shared.SlackEntityEnum[]{{
                                                        add(SlackEntityEnum.PRIVATE_CHANNEL),
                                                        add(SlackEntityEnum.GROUP_MESSAGE),
                                                    }}, "commodi") {{
                                        crawlBotMessage = false;
                                        excludeArchived = false;
                                        exclusionPatterns = new String[]{{
                                            add("fuga"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("iste", "ullam") {{
                                                dataSourceFieldName = "dolore";
                                                dateFieldFormat = "maxime";
                                                indexFieldName = "aliquam";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("placeat"),
                                            add("voluptas"),
                                            add("occaecati"),
                                            add("unde"),
                                        }};
                                        lookBackPeriod = 75277L;
                                        privateChannelFilter = new String[]{{
                                            add("inventore"),
                                            add("libero"),
                                        }};
                                        publicChannelFilter = new String[]{{
                                            add("quasi"),
                                            add("cumque"),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("harum"),
                                                        }},                 new String[]{{
                                                            add("facilis"),
                                                            add("beatae"),
                                                            add("cumque"),
                                                            add("delectus"),
                                                        }});;
                                    }};;
                                    templateConfiguration = new TemplateConfiguration() {{
                                        template = new java.util.HashMap<String, Object>() {{
                                            put("expedita", "corrupti");
                                            put("rem", "atque");
                                        }};
                                    }};;
                                    webCrawlerConfiguration = new WebCrawlerConfiguration(                new Urls() {{
                                                        seedUrlConfiguration = new SeedUrlConfiguration(                new String[]{{
                                                                            add("cum"),
                                                                            add("pariatur"),
                                                                            add("sapiente"),
                                                                            add("quo"),
                                                                        }}) {{
                                                            webCrawlerMode = WebCrawlerModeEnum.HOST_ONLY;
                                                        }};;
                                                        siteMapsConfiguration = new SiteMapsConfiguration(                new String[]{{
                                                                            add("minus"),
                                                                            add("porro"),
                                                                            add("id"),
                                                                            add("excepturi"),
                                                                        }});;
                                                    }};) {{
                                        authenticationConfiguration = new AuthenticationConfiguration() {{
                                            basicAuthentication = new org.openapis.openapi.models.shared.BasicAuthenticationConfiguration[]{{
                                                add(new BasicAuthenticationConfiguration("hic", "maxime", 36691L) {{
                                                    credentials = "libero";
                                                    host = "quo";
                                                    port = 457150L;
                                                }}),
                                                add(new BasicAuthenticationConfiguration("eligendi", "recusandae", 83791L) {{
                                                    credentials = "soluta";
                                                    host = "fugit";
                                                    port = 866292L;
                                                }}),
                                                add(new BasicAuthenticationConfiguration("dolor", "voluptates", 274295L) {{
                                                    credentials = "aut";
                                                    host = "laudantium";
                                                    port = 480421L;
                                                }}),
                                            }};
                                        }};;
                                        crawlDepth = 169935L;
                                        maxContentSizePerPageInMegaBytes = 7018.41;
                                        maxLinksPerPage = 39222L;
                                        maxUrlsPerMinuteCrawlRate = 30192L;
                                        proxyConfiguration = new ProxyConfiguration("eum", 873320L) {{
                                            credentials = "eum";
                                        }};;
                                        urlExclusionPatterns = new String[]{{
                                            add("voluptatum"),
                                            add("blanditiis"),
                                        }};
                                        urlInclusionPatterns = new String[]{{
                                            add("atque"),
                                            add("rerum"),
                                        }};
                                    }};;
                                    workDocsConfiguration = new WorkDocsConfiguration("deserunt") {{
                                        crawlComments = false;
                                        exclusionPatterns = new String[]{{
                                            add("nostrum"),
                                            add("atque"),
                                            add("architecto"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("quae", "quas") {{
                                                dataSourceFieldName = "enim";
                                                dateFieldFormat = "rem";
                                                indexFieldName = "magni";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sapiente", "saepe") {{
                                                dataSourceFieldName = "placeat";
                                                dateFieldFormat = "enim";
                                                indexFieldName = "labore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("cumque", "natus") {{
                                                dataSourceFieldName = "delectus";
                                                dateFieldFormat = "officia";
                                                indexFieldName = "natus";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("doloribus"),
                                            add("quia"),
                                        }};
                                        useChangeLog = false;
                                    }};;
                                }};;
                                customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration() {{
                                    inlineConfigurations = new org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration[]{{
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("odio", ConditionOperatorEnum.EXISTS) {{
                                                conditionDocumentAttributeKey = "mollitia";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2021-12-27T21:30:34.430Z");
                                                    longValue = 313590L;
                                                    stringListValue = new String[]{{
                                                        add("nemo"),
                                                        add("illum"),
                                                    }};
                                                    stringValue = "nesciunt";
                                                }};
                                                operator = ConditionOperatorEnum.GREATER_THAN;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "asperiores";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2020-04-07T04:40:22.862Z");
                                                    longValue = 506250L;
                                                    stringListValue = new String[]{{
                                                        add("fugit"),
                                                    }};
                                                    stringValue = "sit";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("aliquam", ConditionOperatorEnum.NOT_CONTAINS) {{
                                                conditionDocumentAttributeKey = "aliquid";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-07-21T20:56:24.947Z");
                                                    longValue = 537170L;
                                                    stringListValue = new String[]{{
                                                        add("nesciunt"),
                                                    }};
                                                    stringValue = "delectus";
                                                }};
                                                operator = ConditionOperatorEnum.NOT_CONTAINS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "modi";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-03-25T13:14:05.610Z");
                                                    longValue = 259600L;
                                                    stringListValue = new String[]{{
                                                        add("ipsa"),
                                                        add("at"),
                                                        add("dolorem"),
                                                    }};
                                                    stringValue = "repellat";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("aspernatur", ConditionOperatorEnum.NOT_EXISTS) {{
                                                conditionDocumentAttributeKey = "aspernatur";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-10-22T11:14:59.383Z");
                                                    longValue = 143078L;
                                                    stringListValue = new String[]{{
                                                        add("hic"),
                                                        add("eaque"),
                                                        add("dolorem"),
                                                    }};
                                                    stringValue = "architecto";
                                                }};
                                                operator = ConditionOperatorEnum.GREATER_THAN;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "enim";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-09-13T22:56:49.685Z");
                                                    longValue = 961842L;
                                                    stringListValue = new String[]{{
                                                        add("optio"),
                                                        add("nobis"),
                                                    }};
                                                    stringValue = "ex";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("animi", ConditionOperatorEnum.LESS_THAN_OR_EQUALS) {{
                                                conditionDocumentAttributeKey = "repellat";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-06-20T02:21:11.806Z");
                                                    longValue = 711615L;
                                                    stringListValue = new String[]{{
                                                        add("excepturi"),
                                                        add("aliquid"),
                                                        add("sed"),
                                                        add("beatae"),
                                                    }};
                                                    stringValue = "similique";
                                                }};
                                                operator = ConditionOperatorEnum.EQUALS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "tenetur";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-07-17T21:21:49.214Z");
                                                    longValue = 657044L;
                                                    stringListValue = new String[]{{
                                                        add("esse"),
                                                        add("eveniet"),
                                                        add("earum"),
                                                    }};
                                                    stringValue = "velit";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                    }};
                                    postExtractionHookConfiguration = new HookConfiguration("officiis", "eius") {{
                                        invocationCondition = new DocumentAttributeCondition("rerum", ConditionOperatorEnum.BEGINS_WITH) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2022-08-17T16:35:15.012Z");
                                                longValue = 131687L;
                                                stringListValue = new String[]{{
                                                    add("aliquid"),
                                                    add("quis"),
                                                    add("facilis"),
                                                    add("ipsum"),
                                                }};
                                                stringValue = "ut";
                                            }};;
                                        }};;
                                    }};;
                                    preExtractionHookConfiguration = new HookConfiguration("quaerat", "architecto") {{
                                        invocationCondition = new DocumentAttributeCondition("praesentium", ConditionOperatorEnum.NOT_EXISTS) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2022-04-17T04:42:53.417Z");
                                                longValue = 730003L;
                                                stringListValue = new String[]{{
                                                    add("illo"),
                                                    add("minus"),
                                                    add("quos"),
                                                }};
                                                stringValue = "temporibus";
                                            }};;
                                        }};;
                                    }};;
                                    roleArn = "sint";
                                }};;
                                description = "iusto";
                                languageCode = "enim";
                                roleArn = "accusamus";
                                schedule = "aperiam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quae", "omnis") {{
                                        key = "laudantium";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("tenetur", "deleniti") {{
                                        key = "illum";
                                        value = "rem";
                                    }}),
                                    add(new Tag("architecto", "aliquam") {{
                                        key = "modi";
                                        value = "earum";
                                    }}),
                                    add(new Tag("sequi", "saepe") {{
                                        key = "labore";
                                        value = "maiores";
                                    }}),
                                }};
                                vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                    add("esse"),
                                                }},                 new String[]{{
                                                    add("facere"),
                                                    add("quisquam"),
                                                    add("cumque"),
                                                    add("aliquam"),
                                                }});;
                            }};, CreateDataSourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_DATA_SOURCE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "ad";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateDataSourceResponse res = sdk.sdk.createDataSource(req);

            if (res.createDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExperience

Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExperienceRequest;
import org.openapis.openapi.models.operations.CreateExperienceResponse;
import org.openapis.openapi.models.operations.CreateExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContentSourceConfiguration;
import org.openapis.openapi.models.shared.CreateExperienceRequest;
import org.openapis.openapi.models.shared.ExperienceConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserIdentityConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExperienceRequest req = new CreateExperienceRequest(                new CreateExperienceRequest("quibusdam", "omnis") {{
                                clientToken = "aut";
                                configuration = new ExperienceConfiguration() {{
                                    contentSourceConfiguration = new ContentSourceConfiguration() {{
                                        dataSourceIds = new String[]{{
                                            add("officia"),
                                            add("cupiditate"),
                                        }};
                                        directPutContent = false;
                                        faqIds = new String[]{{
                                            add("quia"),
                                            add("necessitatibus"),
                                        }};
                                    }};;
                                    userIdentityConfiguration = new UserIdentityConfiguration() {{
                                        identityAttributeName = "accusantium";
                                    }};;
                                }};;
                                description = "ad";
                                roleArn = "nisi";
                            }};, CreateExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_EXPERIENCE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quia";
                xAmzCredential = "laudantium";
                xAmzDate = "sed";
                xAmzSecurityToken = "odit";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "expedita";
            }};            

            CreateExperienceResponse res = sdk.sdk.createExperience(req);

            if (res.createExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFaq

<p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFaqRequest;
import org.openapis.openapi.models.operations.CreateFaqResponse;
import org.openapis.openapi.models.operations.CreateFaqXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFaqRequest;
import org.openapis.openapi.models.shared.FaqFileFormatEnum;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFaqRequest req = new CreateFaqRequest(                new CreateFaqRequest("repellendus", "nesciunt", "ipsa",                 new S3Path("sint", "dolore");) {{
                                clientToken = "esse";
                                description = "accusantium";
                                fileFormat = FaqFileFormatEnum.JSON;
                                languageCode = "sapiente";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("delectus", "culpa") {{
                                        key = "est";
                                        value = "aliquam";
                                    }}),
                                    add(new Tag("quod", "voluptatibus") {{
                                        key = "voluptatum";
                                        value = "iusto";
                                    }}),
                                }};
                            }};, CreateFaqXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_FAQ) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "non";
                xAmzCredential = "ullam";
                xAmzDate = "laborum";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "animi";
            }};            

            CreateFaqResponse res = sdk.sdk.createFaq(req);

            if (res.createFaqResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFeaturedResultsSet

<p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFeaturedResultsSetRequest;
import org.openapis.openapi.models.operations.CreateFeaturedResultsSetResponse;
import org.openapis.openapi.models.operations.CreateFeaturedResultsSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFeaturedResultsSetRequest;
import org.openapis.openapi.models.shared.FeaturedDocument;
import org.openapis.openapi.models.shared.FeaturedResultsSetStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFeaturedResultsSetRequest req = new CreateFeaturedResultsSetRequest(                new CreateFeaturedResultsSetRequest("corporis", "non") {{
                                clientToken = "necessitatibus";
                                description = "distinctio";
                                featuredDocuments = new org.openapis.openapi.models.shared.FeaturedDocument[]{{
                                    add(new FeaturedDocument() {{
                                        id = "60c321f0-23b7-45d2-b67f-e1a0cc8df79f";
                                    }}),
                                    add(new FeaturedDocument() {{
                                        id = "0a396d90-c364-4b7c-95df-bace188b1c4e";
                                    }}),
                                    add(new FeaturedDocument() {{
                                        id = "e2c8c6ce-611f-4eeb-9c7c-bdb6eec74378";
                                    }}),
                                    add(new FeaturedDocument() {{
                                        id = "ba253177-47dc-4915-ad2c-af5dd6723dc0";
                                    }}),
                                }};
                                queryTexts = new String[]{{
                                    add("exercitationem"),
                                    add("culpa"),
                                    add("repudiandae"),
                                    add("aspernatur"),
                                }};
                                status = FeaturedResultsSetStatusEnum.INACTIVE;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("harum", "ducimus") {{
                                        key = "officia";
                                        value = "suscipit";
                                    }}),
                                }};
                            }};, CreateFeaturedResultsSetXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_FEATURED_RESULTS_SET) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "laudantium";
                xAmzDate = "iusto";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quis";
            }};            

            CreateFeaturedResultsSetResponse res = sdk.sdk.createFeaturedResultsSet(req);

            if (res.createFeaturedResultsSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIndex

<p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIndexRequest;
import org.openapis.openapi.models.operations.CreateIndexResponse;
import org.openapis.openapi.models.operations.CreateIndexXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateIndexRequest;
import org.openapis.openapi.models.shared.IndexEditionEnum;
import org.openapis.openapi.models.shared.JsonTokenTypeConfiguration;
import org.openapis.openapi.models.shared.JwtTokenTypeConfiguration;
import org.openapis.openapi.models.shared.KeyLocationEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerSideEncryptionConfiguration;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UserContextPolicyEnum;
import org.openapis.openapi.models.shared.UserGroupResolutionConfiguration;
import org.openapis.openapi.models.shared.UserGroupResolutionModeEnum;
import org.openapis.openapi.models.shared.UserTokenConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIndexRequest req = new CreateIndexRequest(                new CreateIndexRequest("ab", "quaerat") {{
                                clientToken = "amet";
                                description = "sapiente";
                                edition = IndexEditionEnum.DEVELOPER_EDITION;
                                serverSideEncryptionConfiguration = new ServerSideEncryptionConfiguration() {{
                                    kmsKeyId = "est";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("laudantium", "nam") {{
                                        key = "quisquam";
                                        value = "provident";
                                    }}),
                                    add(new Tag("ipsam", "minima") {{
                                        key = "nemo";
                                        value = "enim";
                                    }}),
                                }};
                                userContextPolicy = UserContextPolicyEnum.ATTRIBUTE_FILTER;
                                userGroupResolutionConfiguration = new UserGroupResolutionConfiguration(UserGroupResolutionModeEnum.AWS_SSO);;
                                userTokenConfigurations = new org.openapis.openapi.models.shared.UserTokenConfiguration[]{{
                                    add(new UserTokenConfiguration() {{
                                        jsonTokenTypeConfiguration = new JsonTokenTypeConfiguration("numquam", "doloremque") {{
                                            groupAttributeField = "doloremque";
                                            userNameAttributeField = "fugiat";
                                        }};
                                        jwtTokenTypeConfiguration = new JwtTokenTypeConfiguration(KeyLocationEnum.SECRET_MANAGER) {{
                                            claimRegex = "cum";
                                            groupAttributeField = "nobis";
                                            issuer = "similique";
                                            keyLocation = KeyLocationEnum.SECRET_MANAGER;
                                            secretManagerArn = "impedit";
                                            url = "nisi";
                                            userNameAttributeField = "cumque";
                                        }};
                                    }}),
                                    add(new UserTokenConfiguration() {{
                                        jsonTokenTypeConfiguration = new JsonTokenTypeConfiguration("nam", "enim") {{
                                            groupAttributeField = "fugiat";
                                            userNameAttributeField = "laboriosam";
                                        }};
                                        jwtTokenTypeConfiguration = new JwtTokenTypeConfiguration(KeyLocationEnum.URL) {{
                                            claimRegex = "maiores";
                                            groupAttributeField = "consectetur";
                                            issuer = "necessitatibus";
                                            keyLocation = KeyLocationEnum.SECRET_MANAGER;
                                            secretManagerArn = "cupiditate";
                                            url = "voluptatem";
                                            userNameAttributeField = "provident";
                                        }};
                                    }}),
                                    add(new UserTokenConfiguration() {{
                                        jsonTokenTypeConfiguration = new JsonTokenTypeConfiguration("repellat", "omnis") {{
                                            groupAttributeField = "accusantium";
                                            userNameAttributeField = "magnam";
                                        }};
                                        jwtTokenTypeConfiguration = new JwtTokenTypeConfiguration(KeyLocationEnum.URL) {{
                                            claimRegex = "explicabo";
                                            groupAttributeField = "vel";
                                            issuer = "cum";
                                            keyLocation = KeyLocationEnum.SECRET_MANAGER;
                                            secretManagerArn = "possimus";
                                            url = "fugit";
                                            userNameAttributeField = "ipsam";
                                        }};
                                    }}),
                                }};
                            }};, CreateIndexXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_INDEX) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreateIndexResponse res = sdk.sdk.createIndex(req);

            if (res.createIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQuerySuggestionsBlockList

<p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.operations.CreateQuerySuggestionsBlockListResponse;
import org.openapis.openapi.models.operations.CreateQuerySuggestionsBlockListXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateQuerySuggestionsBlockListRequest req = new CreateQuerySuggestionsBlockListRequest(                new CreateQuerySuggestionsBlockListRequest("expedita", "aperiam", "voluptates",                 new S3Path("possimus", "fugit");) {{
                                clientToken = "voluptatem";
                                description = "repudiandae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aliquam", "blanditiis") {{
                                        key = "ea";
                                        value = "eos";
                                    }}),
                                    add(new Tag("asperiores", "autem") {{
                                        key = "hic";
                                        value = "maiores";
                                    }}),
                                }};
                            }};, CreateQuerySuggestionsBlockListXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_QUERY_SUGGESTIONS_BLOCK_LIST) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "animi";
                xAmzDate = "provident";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateQuerySuggestionsBlockListResponse res = sdk.sdk.createQuerySuggestionsBlockList(req);

            if (res.createQuerySuggestionsBlockListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createThesaurus

<p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateThesaurusRequest;
import org.openapis.openapi.models.operations.CreateThesaurusResponse;
import org.openapis.openapi.models.operations.CreateThesaurusXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateThesaurusRequest;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateThesaurusRequest req = new CreateThesaurusRequest(                new CreateThesaurusRequest("assumenda", "quo", "fuga",                 new S3Path("tempore", "commodi");) {{
                                clientToken = "fugit";
                                description = "suscipit";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("provident", "laboriosam") {{
                                        key = "nisi";
                                        value = "aliquid";
                                    }}),
                                    add(new Tag("itaque", "quisquam") {{
                                        key = "accusamus";
                                        value = "ab";
                                    }}),
                                }};
                            }};, CreateThesaurusXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_CREATE_THESAURUS) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "alias";
                xAmzCredential = "qui";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "sequi";
            }};            

            CreateThesaurusResponse res = sdk.sdk.createThesaurus(req);

            if (res.createThesaurusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessControlConfiguration

Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessControlConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAccessControlConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAccessControlConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAccessControlConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessControlConfigurationRequest req = new DeleteAccessControlConfigurationRequest(                new DeleteAccessControlConfigurationRequest("exercitationem", "illum");, DeleteAccessControlConfigurationXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_ACCESS_CONTROL_CONFIGURATION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "unde";
                xAmzCredential = "similique";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteAccessControlConfigurationResponse res = sdk.sdk.deleteAccessControlConfiguration(req);

            if (res.deleteAccessControlConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataSource

Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataSourceRequest;
import org.openapis.openapi.models.operations.DeleteDataSourceResponse;
import org.openapis.openapi.models.operations.DeleteDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDataSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataSourceRequest req = new DeleteDataSourceRequest(                new DeleteDataSourceRequest("asperiores", "temporibus");, DeleteDataSourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_DATA_SOURCE) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "atque";
                xAmzCredential = "quibusdam";
                xAmzDate = "sit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquam";
            }};            

            DeleteDataSourceResponse res = sdk.sdk.deleteDataSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExperience

Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExperienceRequest;
import org.openapis.openapi.models.operations.DeleteExperienceResponse;
import org.openapis.openapi.models.operations.DeleteExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteExperienceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteExperienceRequest req = new DeleteExperienceRequest(                new DeleteExperienceRequest("vero", "earum");, DeleteExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_EXPERIENCE) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "alias";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "quam";
            }};            

            DeleteExperienceResponse res = sdk.sdk.deleteExperience(req);

            if (res.deleteExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFaq

Removes an FAQ from an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFaqRequest;
import org.openapis.openapi.models.operations.DeleteFaqResponse;
import org.openapis.openapi.models.operations.DeleteFaqXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFaqRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFaqRequest req = new DeleteFaqRequest(                new DeleteFaqRequest("officia", "ex");, DeleteFaqXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_FAQ) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "a";
                xAmzCredential = "laborum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "quod";
                xAmzSignature = "a";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteFaqResponse res = sdk.sdk.deleteFaq(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIndex

Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndexRequest;
import org.openapis.openapi.models.operations.DeleteIndexResponse;
import org.openapis.openapi.models.operations.DeleteIndexXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIndexRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIndexRequest req = new DeleteIndexRequest(                new DeleteIndexRequest("commodi");, DeleteIndexXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_INDEX) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "totam";
                xAmzCredential = "tenetur";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "quam";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "vitae";
            }};            

            DeleteIndexResponse res = sdk.sdk.deleteIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePrincipalMapping

<p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePrincipalMappingRequest;
import org.openapis.openapi.models.operations.DeletePrincipalMappingResponse;
import org.openapis.openapi.models.operations.DeletePrincipalMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePrincipalMappingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePrincipalMappingRequest req = new DeletePrincipalMappingRequest(                new DeletePrincipalMappingRequest("reiciendis", "quod") {{
                                dataSourceId = "voluptate";
                                orderingId = 77992L;
                            }};, DeletePrincipalMappingXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_PRINCIPAL_MAPPING) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "fuga";
                xAmzDate = "ab";
                xAmzSecurityToken = "ex";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "maiores";
            }};            

            DeletePrincipalMappingResponse res = sdk.sdk.deletePrincipalMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQuerySuggestionsBlockList

<p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.operations.DeleteQuerySuggestionsBlockListResponse;
import org.openapis.openapi.models.operations.DeleteQuerySuggestionsBlockListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteQuerySuggestionsBlockListRequest req = new DeleteQuerySuggestionsBlockListRequest(                new DeleteQuerySuggestionsBlockListRequest("animi", "sequi");, DeleteQuerySuggestionsBlockListXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_QUERY_SUGGESTIONS_BLOCK_LIST) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "perferendis";
                xAmzDate = "laborum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteQuerySuggestionsBlockListResponse res = sdk.sdk.deleteQuerySuggestionsBlockList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteThesaurus

Deletes an existing Amazon Kendra thesaurus. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteThesaurusRequest;
import org.openapis.openapi.models.operations.DeleteThesaurusResponse;
import org.openapis.openapi.models.operations.DeleteThesaurusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteThesaurusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteThesaurusRequest req = new DeleteThesaurusRequest(                new DeleteThesaurusRequest("velit", "adipisci");, DeleteThesaurusXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DELETE_THESAURUS) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "optio";
                xAmzCredential = "illum";
                xAmzDate = "at";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteThesaurusResponse res = sdk.sdk.deleteThesaurus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccessControlConfiguration

Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccessControlConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeAccessControlConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeAccessControlConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccessControlConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccessControlConfigurationRequest req = new DescribeAccessControlConfigurationRequest(                new DescribeAccessControlConfigurationRequest("laborum", "perspiciatis");, DescribeAccessControlConfigurationXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_ACCESS_CONTROL_CONFIGURATION) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quasi";
                xAmzDate = "quas";
                xAmzSecurityToken = "odio";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "porro";
            }};            

            DescribeAccessControlConfigurationResponse res = sdk.sdk.describeAccessControlConfiguration(req);

            if (res.describeAccessControlConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataSource

Gets information about an Amazon Kendra data source connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDataSourceRequest;
import org.openapis.openapi.models.operations.DescribeDataSourceResponse;
import org.openapis.openapi.models.operations.DescribeDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDataSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDataSourceRequest req = new DescribeDataSourceRequest(                new DescribeDataSourceRequest("mollitia", "quidem");, DescribeDataSourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_DATA_SOURCE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "et";
                xAmzCredential = "nulla";
                xAmzDate = "magni";
                xAmzSecurityToken = "natus";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "a";
            }};            

            DescribeDataSourceResponse res = sdk.sdk.describeDataSource(req);

            if (res.describeDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExperience

Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExperienceRequest;
import org.openapis.openapi.models.operations.DescribeExperienceResponse;
import org.openapis.openapi.models.operations.DescribeExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExperienceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExperienceRequest req = new DescribeExperienceRequest(                new DescribeExperienceRequest("unde", "ut");, DescribeExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_EXPERIENCE) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "doloribus";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DescribeExperienceResponse res = sdk.sdk.describeExperience(req);

            if (res.describeExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFaq

Gets information about an FAQ list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFaqRequest;
import org.openapis.openapi.models.operations.DescribeFaqResponse;
import org.openapis.openapi.models.operations.DescribeFaqXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFaqRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFaqRequest req = new DescribeFaqRequest(                new DescribeFaqRequest("provident", "dolor");, DescribeFaqXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_FAQ) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "eaque";
                xAmzDate = "eum";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "autem";
            }};            

            DescribeFaqResponse res = sdk.sdk.describeFaq(req);

            if (res.describeFaqResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFeaturedResultsSet

Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFeaturedResultsSetRequest;
import org.openapis.openapi.models.operations.DescribeFeaturedResultsSetResponse;
import org.openapis.openapi.models.operations.DescribeFeaturedResultsSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFeaturedResultsSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFeaturedResultsSetRequest req = new DescribeFeaturedResultsSetRequest(                new DescribeFeaturedResultsSetRequest("explicabo", "fugiat");, DescribeFeaturedResultsSetXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_FEATURED_RESULTS_SET) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "alias";
                xAmzDate = "velit";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeFeaturedResultsSetResponse res = sdk.sdk.describeFeaturedResultsSet(req);

            if (res.describeFeaturedResultsSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIndex

Gets information about an existing Amazon Kendra index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIndexRequest;
import org.openapis.openapi.models.operations.DescribeIndexResponse;
import org.openapis.openapi.models.operations.DescribeIndexXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIndexRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIndexRequest req = new DescribeIndexRequest(                new DescribeIndexRequest("quas");, DescribeIndexXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_INDEX) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "cumque";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "totam";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeIndexResponse res = sdk.sdk.describeIndex(req);

            if (res.describeIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePrincipalMapping

<p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePrincipalMappingRequest;
import org.openapis.openapi.models.operations.DescribePrincipalMappingResponse;
import org.openapis.openapi.models.operations.DescribePrincipalMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePrincipalMappingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePrincipalMappingRequest req = new DescribePrincipalMappingRequest(                new DescribePrincipalMappingRequest("fugit", "veritatis") {{
                                dataSourceId = "necessitatibus";
                            }};, DescribePrincipalMappingXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_PRINCIPAL_MAPPING) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "ipsam";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "non";
            }};            

            DescribePrincipalMappingResponse res = sdk.sdk.describePrincipalMapping(req);

            if (res.describePrincipalMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeQuerySuggestionsBlockList

<p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsBlockListResponse;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsBlockListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeQuerySuggestionsBlockListRequest req = new DescribeQuerySuggestionsBlockListRequest(                new DescribeQuerySuggestionsBlockListRequest("sunt", "molestias");, DescribeQuerySuggestionsBlockListXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_QUERY_SUGGESTIONS_BLOCK_LIST) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "autem";
                xAmzCredential = "ducimus";
                xAmzDate = "libero";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsum";
            }};            

            DescribeQuerySuggestionsBlockListResponse res = sdk.sdk.describeQuerySuggestionsBlockList(req);

            if (res.describeQuerySuggestionsBlockListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeQuerySuggestionsConfig

<p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsConfigRequest;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsConfigResponse;
import org.openapis.openapi.models.operations.DescribeQuerySuggestionsConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeQuerySuggestionsConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeQuerySuggestionsConfigRequest req = new DescribeQuerySuggestionsConfigRequest(                new DescribeQuerySuggestionsConfigRequest("quos");, DescribeQuerySuggestionsConfigXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_QUERY_SUGGESTIONS_CONFIG) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "voluptatem";
                xAmzDate = "non";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "laudantium";
            }};            

            DescribeQuerySuggestionsConfigResponse res = sdk.sdk.describeQuerySuggestionsConfig(req);

            if (res.describeQuerySuggestionsConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeThesaurus

Gets information about an existing Amazon Kendra thesaurus.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeThesaurusRequest;
import org.openapis.openapi.models.operations.DescribeThesaurusResponse;
import org.openapis.openapi.models.operations.DescribeThesaurusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeThesaurusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeThesaurusRequest req = new DescribeThesaurusRequest(                new DescribeThesaurusRequest("commodi", "quibusdam");, DescribeThesaurusXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DESCRIBE_THESAURUS) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "quaerat";
                xAmzDate = "earum";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "dolore";
            }};            

            DescribeThesaurusResponse res = sdk.sdk.describeThesaurus(req);

            if (res.describeThesaurusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateEntitiesFromExperience

Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateEntitiesFromExperienceRequest;
import org.openapis.openapi.models.operations.DisassociateEntitiesFromExperienceResponse;
import org.openapis.openapi.models.operations.DisassociateEntitiesFromExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateEntitiesFromExperienceRequest;
import org.openapis.openapi.models.shared.EntityConfiguration;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateEntitiesFromExperienceRequest req = new DisassociateEntitiesFromExperienceRequest(                new DisassociateEntitiesFromExperienceRequest(                new org.openapis.openapi.models.shared.EntityConfiguration[]{{
                                                add(new EntityConfiguration("ex", EntityTypeEnum.GROUP) {{
                                                    entityId = "perspiciatis";
                                                    entityType = EntityTypeEnum.USER;
                                                }}),
                                                add(new EntityConfiguration("commodi", EntityTypeEnum.USER) {{
                                                    entityId = "dicta";
                                                    entityType = EntityTypeEnum.USER;
                                                }}),
                                            }}, "quibusdam", "numquam");, DisassociateEntitiesFromExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DISASSOCIATE_ENTITIES_FROM_EXPERIENCE) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "omnis";
                xAmzDate = "neque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dolores";
            }};            

            DisassociateEntitiesFromExperienceResponse res = sdk.sdk.disassociateEntitiesFromExperience(req);

            if (res.disassociateEntitiesFromExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociatePersonasFromEntities

Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociatePersonasFromEntitiesRequest;
import org.openapis.openapi.models.operations.DisassociatePersonasFromEntitiesResponse;
import org.openapis.openapi.models.operations.DisassociatePersonasFromEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociatePersonasFromEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociatePersonasFromEntitiesRequest req = new DisassociatePersonasFromEntitiesRequest(                new DisassociatePersonasFromEntitiesRequest(                new String[]{{
                                                add("recusandae"),
                                                add("quos"),
                                                add("dicta"),
                                            }}, "sapiente", "ipsum");, DisassociatePersonasFromEntitiesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_DISASSOCIATE_PERSONAS_FROM_ENTITIES) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sequi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
            }};            

            DisassociatePersonasFromEntitiesResponse res = sdk.sdk.disassociatePersonasFromEntities(req);

            if (res.disassociatePersonasFromEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuerySuggestions

<p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuerySuggestionsRequest;
import org.openapis.openapi.models.operations.GetQuerySuggestionsResponse;
import org.openapis.openapi.models.operations.GetQuerySuggestionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQuerySuggestionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQuerySuggestionsRequest req = new GetQuerySuggestionsRequest(                new GetQuerySuggestionsRequest("aperiam", "dolores") {{
                                maxSuggestionsCount = 848860L;
                            }};, GetQuerySuggestionsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_GET_QUERY_SUGGESTIONS) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "magni";
                xAmzCredential = "beatae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "ad";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "vel";
            }};            

            GetQuerySuggestionsResponse res = sdk.sdk.getQuerySuggestions(req);

            if (res.getQuerySuggestionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshots

Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotsRequest;
import org.openapis.openapi.models.operations.GetSnapshotsResponse;
import org.openapis.openapi.models.operations.GetSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSnapshotsRequest;
import org.openapis.openapi.models.shared.IntervalEnum;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSnapshotsRequest req = new GetSnapshotsRequest(                new GetSnapshotsRequest("sit", IntervalEnum.ONE_WEEK_AGO, MetricTypeEnum.QUERIES_BY_ZERO_RESULT_RATE) {{
                                maxResults = 311247L;
                                nextToken = "quasi";
                            }};, GetSnapshotsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_GET_SNAPSHOTS) {{
                maxResults = "rem";
                nextToken = "dignissimos";
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "provident";
                xAmzDate = "facere";
                xAmzSecurityToken = "sed";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetSnapshotsResponse res = sdk.sdk.getSnapshots(req);

            if (res.getSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessControlConfigurations

Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessControlConfigurationsRequest;
import org.openapis.openapi.models.operations.ListAccessControlConfigurationsResponse;
import org.openapis.openapi.models.operations.ListAccessControlConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccessControlConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessControlConfigurationsRequest req = new ListAccessControlConfigurationsRequest(                new ListAccessControlConfigurationsRequest("deserunt") {{
                                maxResults = 834587L;
                                nextToken = "consequatur";
                            }};, ListAccessControlConfigurationsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_ACCESS_CONTROL_CONFIGURATIONS) {{
                maxResults = "adipisci";
                nextToken = "doloremque";
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "cumque";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "et";
                xAmzSignedHeaders = "beatae";
            }};            

            ListAccessControlConfigurationsResponse res = sdk.sdk.listAccessControlConfigurations(req);

            if (res.listAccessControlConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSourceSyncJobs

Gets statistics about synchronizing a data source connector.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSourceSyncJobsRequest;
import org.openapis.openapi.models.operations.ListDataSourceSyncJobsResponse;
import org.openapis.openapi.models.operations.ListDataSourceSyncJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataSourceSyncJobStatusEnum;
import org.openapis.openapi.models.shared.ListDataSourceSyncJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataSourceSyncJobsRequest req = new ListDataSourceSyncJobsRequest(                new ListDataSourceSyncJobsRequest("consequatur", "quos") {{
                                maxResults = 191724L;
                                nextToken = "iure";
                                startTimeFilter = new TimeRange() {{
                                    endTime = OffsetDateTime.parse("2022-10-28T06:31:34.790Z");
                                    startTime = OffsetDateTime.parse("2022-12-08T02:45:20.375Z");
                                }};;
                                statusFilter = DataSourceSyncJobStatusEnum.SYNCING;
                            }};, ListDataSourceSyncJobsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_DATA_SOURCE_SYNC_JOBS) {{
                maxResults = "laudantium";
                nextToken = "facilis";
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "aut";
                xAmzDate = "quia";
                xAmzSecurityToken = "officia";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "corporis";
            }};            

            ListDataSourceSyncJobsResponse res = sdk.sdk.listDataSourceSyncJobs(req);

            if (res.listDataSourceSyncJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSources

Lists the data source connectors that you have created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSourcesRequest;
import org.openapis.openapi.models.operations.ListDataSourcesResponse;
import org.openapis.openapi.models.operations.ListDataSourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDataSourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataSourcesRequest req = new ListDataSourcesRequest(                new ListDataSourcesRequest("iusto") {{
                                maxResults = 958533L;
                                nextToken = "esse";
                            }};, ListDataSourcesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_DATA_SOURCES) {{
                maxResults = "neque";
                nextToken = "quidem";
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "magni";
            }};            

            ListDataSourcesResponse res = sdk.sdk.listDataSources(req);

            if (res.listDataSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntityPersonas

Lists specific permissions of users and groups with access to your Amazon Kendra experience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntityPersonasRequest;
import org.openapis.openapi.models.operations.ListEntityPersonasResponse;
import org.openapis.openapi.models.operations.ListEntityPersonasXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEntityPersonasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntityPersonasRequest req = new ListEntityPersonasRequest(                new ListEntityPersonasRequest("est", "amet") {{
                                maxResults = 84211L;
                                nextToken = "error";
                            }};, ListEntityPersonasXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_ENTITY_PERSONAS) {{
                maxResults = "voluptatibus";
                nextToken = "numquam";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "quibusdam";
                xAmzDate = "earum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "molestiae";
            }};            

            ListEntityPersonasResponse res = sdk.sdk.listEntityPersonas(req);

            if (res.listEntityPersonasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExperienceEntities

Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExperienceEntitiesRequest;
import org.openapis.openapi.models.operations.ListExperienceEntitiesResponse;
import org.openapis.openapi.models.operations.ListExperienceEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListExperienceEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExperienceEntitiesRequest req = new ListExperienceEntitiesRequest(                new ListExperienceEntitiesRequest("error", "animi") {{
                                nextToken = "voluptatum";
                            }};, ListExperienceEntitiesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_EXPERIENCE_ENTITIES) {{
                nextToken = "aliquid";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "optio";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "dolores";
            }};            

            ListExperienceEntitiesResponse res = sdk.sdk.listExperienceEntities(req);

            if (res.listExperienceEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExperiences

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExperiencesRequest;
import org.openapis.openapi.models.operations.ListExperiencesResponse;
import org.openapis.openapi.models.operations.ListExperiencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListExperiencesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExperiencesRequest req = new ListExperiencesRequest(                new ListExperiencesRequest("eum") {{
                                maxResults = 423701L;
                                nextToken = "ad";
                            }};, ListExperiencesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_EXPERIENCES) {{
                maxResults = "quos";
                nextToken = "illo";
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "fugiat";
                xAmzDate = "impedit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "voluptates";
            }};            

            ListExperiencesResponse res = sdk.sdk.listExperiences(req);

            if (res.listExperiencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFaqs

Gets a list of FAQ lists associated with an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFaqsRequest;
import org.openapis.openapi.models.operations.ListFaqsResponse;
import org.openapis.openapi.models.operations.ListFaqsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFaqsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFaqsRequest req = new ListFaqsRequest(                new ListFaqsRequest("nemo") {{
                                maxResults = 72600L;
                                nextToken = "doloribus";
                            }};, ListFaqsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_FAQS) {{
                maxResults = "cumque";
                nextToken = "expedita";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "ipsam";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListFaqsResponse res = sdk.sdk.listFaqs(req);

            if (res.listFaqsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFeaturedResultsSets

Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFeaturedResultsSetsRequest;
import org.openapis.openapi.models.operations.ListFeaturedResultsSetsResponse;
import org.openapis.openapi.models.operations.ListFeaturedResultsSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFeaturedResultsSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFeaturedResultsSetsRequest req = new ListFeaturedResultsSetsRequest(                new ListFeaturedResultsSetsRequest("fugit") {{
                                maxResults = 779823L;
                                nextToken = "temporibus";
                            }};, ListFeaturedResultsSetsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_FEATURED_RESULTS_SETS) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "id";
                xAmzCredential = "quibusdam";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "quam";
            }};            

            ListFeaturedResultsSetsResponse res = sdk.sdk.listFeaturedResultsSets(req);

            if (res.listFeaturedResultsSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupsOlderThanOrderingId

<p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsOlderThanOrderingIdRequest;
import org.openapis.openapi.models.operations.ListGroupsOlderThanOrderingIdResponse;
import org.openapis.openapi.models.operations.ListGroupsOlderThanOrderingIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupsOlderThanOrderingIdRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupsOlderThanOrderingIdRequest req = new ListGroupsOlderThanOrderingIdRequest(                new ListGroupsOlderThanOrderingIdRequest("delectus", 904983L) {{
                                dataSourceId = "facere";
                                maxResults = 748723L;
                                nextToken = "at";
                            }};, ListGroupsOlderThanOrderingIdXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_GROUPS_OLDER_THAN_ORDERING_ID) {{
                maxResults = "molestias";
                nextToken = "aut";
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "incidunt";
                xAmzDate = "numquam";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "dolore";
            }};            

            ListGroupsOlderThanOrderingIdResponse res = sdk.sdk.listGroupsOlderThanOrderingId(req);

            if (res.listGroupsOlderThanOrderingIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIndices

Lists the Amazon Kendra indexes that you created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIndicesRequest;
import org.openapis.openapi.models.operations.ListIndicesResponse;
import org.openapis.openapi.models.operations.ListIndicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIndicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIndicesRequest req = new ListIndicesRequest(                new ListIndicesRequest() {{
                                maxResults = 968205L;
                                nextToken = "iste";
                            }};, ListIndicesXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_INDICES) {{
                maxResults = "amet";
                nextToken = "occaecati";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "minima";
                xAmzDate = "quos";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ListIndicesResponse res = sdk.sdk.listIndices(req);

            if (res.listIndicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQuerySuggestionsBlockLists

<p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQuerySuggestionsBlockListsRequest;
import org.openapis.openapi.models.operations.ListQuerySuggestionsBlockListsResponse;
import org.openapis.openapi.models.operations.ListQuerySuggestionsBlockListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListQuerySuggestionsBlockListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListQuerySuggestionsBlockListsRequest req = new ListQuerySuggestionsBlockListsRequest(                new ListQuerySuggestionsBlockListsRequest("quas") {{
                                maxResults = 218413L;
                                nextToken = "vero";
                            }};, ListQuerySuggestionsBlockListsXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_QUERY_SUGGESTIONS_BLOCK_LISTS) {{
                maxResults = "fuga";
                nextToken = "facilis";
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "error";
                xAmzCredential = "recusandae";
                xAmzDate = "a";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListQuerySuggestionsBlockListsResponse res = sdk.sdk.listQuerySuggestionsBlockLists(req);

            if (res.listQuerySuggestionsBlockListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("repellendus");, ListTagsForResourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "odio";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "omnis";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listThesauri

Lists the thesauri for an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListThesauriRequest;
import org.openapis.openapi.models.operations.ListThesauriResponse;
import org.openapis.openapi.models.operations.ListThesauriXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListThesauriRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListThesauriRequest req = new ListThesauriRequest(                new ListThesauriRequest("asperiores") {{
                                maxResults = 266289L;
                                nextToken = "facere";
                            }};, ListThesauriXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_LIST_THESAURI) {{
                maxResults = "neque";
                nextToken = "quis";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "sed";
                xAmzCredential = "non";
                xAmzDate = "porro";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListThesauriResponse res = sdk.sdk.listThesauri(req);

            if (res.listThesauriResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPrincipalMapping

<p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPrincipalMappingRequest;
import org.openapis.openapi.models.operations.PutPrincipalMappingResponse;
import org.openapis.openapi.models.operations.PutPrincipalMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.GroupMembers;
import org.openapis.openapi.models.shared.MemberGroup;
import org.openapis.openapi.models.shared.MemberUser;
import org.openapis.openapi.models.shared.PutPrincipalMappingRequest;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPrincipalMappingRequest req = new PutPrincipalMappingRequest(                new PutPrincipalMappingRequest("labore",                 new GroupMembers() {{
                                                memberGroups = new org.openapis.openapi.models.shared.MemberGroup[]{{
                                                    add(new MemberGroup("quasi") {{
                                                        dataSourceId = "eos";
                                                        groupId = "quas";
                                                    }}),
                                                    add(new MemberGroup("iusto") {{
                                                        dataSourceId = "architecto";
                                                        groupId = "praesentium";
                                                    }}),
                                                    add(new MemberGroup("iure") {{
                                                        dataSourceId = "fugiat";
                                                        groupId = "enim";
                                                    }}),
                                                    add(new MemberGroup("magnam") {{
                                                        dataSourceId = "laudantium";
                                                        groupId = "modi";
                                                    }}),
                                                }};
                                                memberUsers = new org.openapis.openapi.models.shared.MemberUser[]{{
                                                    add(new MemberUser("repudiandae") {{
                                                        userId = "nulla";
                                                    }}),
                                                    add(new MemberUser("praesentium") {{
                                                        userId = "quibusdam";
                                                    }}),
                                                    add(new MemberUser("animi") {{
                                                        userId = "enim";
                                                    }}),
                                                    add(new MemberUser("quae") {{
                                                        userId = "unde";
                                                    }}),
                                                }};
                                                s3PathforGroupMembers = new S3Path("eum", "nostrum");;
                                            }};, "eveniet") {{
                                dataSourceId = "laboriosam";
                                orderingId = 187361L;
                                roleArn = "blanditiis";
                            }};, PutPrincipalMappingXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_PUT_PRINCIPAL_MAPPING) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "illum";
                xAmzCredential = "reiciendis";
                xAmzDate = "placeat";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "nesciunt";
            }};            

            PutPrincipalMappingResponse res = sdk.sdk.putPrincipalMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## query

<p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRequest;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.operations.QueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeFilter;
import org.openapis.openapi.models.shared.DataSourceGroup;
import org.openapis.openapi.models.shared.DocumentAttribute;
import org.openapis.openapi.models.shared.DocumentAttributeValue;
import org.openapis.openapi.models.shared.DocumentRelevanceConfiguration;
import org.openapis.openapi.models.shared.Facet;
import org.openapis.openapi.models.shared.OrderEnum;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.QueryResultTypeEnum;
import org.openapis.openapi.models.shared.Relevance;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.SortingConfiguration;
import org.openapis.openapi.models.shared.SpellCorrectionConfiguration;
import org.openapis.openapi.models.shared.UserContext;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryRequest req = new QueryRequest(                new QueryRequest("quidem") {{
                                attributeFilter = new AttributeFilter() {{
                                    andAllFilters = new org.openapis.openapi.models.shared.AttributeFilter[]{{
                                        add(new AttributeFilter() {{}}),
                                        add(new AttributeFilter() {{}}),
                                    }};
                                    containsAll = new DocumentAttribute("quo",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-01-07T21:34:49.337Z");
                                                        longValue = 606989L;
                                                        stringListValue = new String[]{{
                                                            add("fugit"),
                                                            add("dolorem"),
                                                            add("quidem"),
                                                        }};
                                                        stringValue = "molestiae";
                                                    }};);;
                                    containsAny = new DocumentAttribute("debitis",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-10-11T08:13:55.796Z");
                                                        longValue = 321422L;
                                                        stringListValue = new String[]{{
                                                            add("ut"),
                                                            add("asperiores"),
                                                            add("reprehenderit"),
                                                        }};
                                                        stringValue = "deserunt";
                                                    }};);;
                                    equalsTo = new DocumentAttribute("itaque",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-10-26T20:05:42.238Z");
                                                        longValue = 773355L;
                                                        stringListValue = new String[]{{
                                                            add("praesentium"),
                                                            add("natus"),
                                                        }};
                                                        stringValue = "vitae";
                                                    }};);;
                                    greaterThan = new DocumentAttribute("tenetur",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-09-25T19:14:36.297Z");
                                                        longValue = 755240L;
                                                        stringListValue = new String[]{{
                                                            add("dicta"),
                                                            add("inventore"),
                                                            add("ullam"),
                                                            add("iusto"),
                                                        }};
                                                        stringValue = "inventore";
                                                    }};);;
                                    greaterThanOrEquals = new DocumentAttribute("voluptate",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-10-16T11:52:47.366Z");
                                                        longValue = 52497L;
                                                        stringListValue = new String[]{{
                                                            add("amet"),
                                                            add("voluptate"),
                                                        }};
                                                        stringValue = "voluptate";
                                                    }};);;
                                    lessThan = new DocumentAttribute("pariatur",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2020-02-20T04:54:51.509Z");
                                                        longValue = 686301L;
                                                        stringListValue = new String[]{{
                                                            add("cupiditate"),
                                                            add("at"),
                                                            add("doloribus"),
                                                        }};
                                                        stringValue = "omnis";
                                                    }};);;
                                    lessThanOrEquals = new DocumentAttribute("quam",                 new DocumentAttributeValue() {{
                                                        dateValue = OffsetDateTime.parse("2022-01-31T23:19:53.349Z");
                                                        longValue = 194194L;
                                                        stringListValue = new String[]{{
                                                            add("commodi"),
                                                            add("vel"),
                                                        }};
                                                        stringValue = "rem";
                                                    }};);;
                                    notFilter = new AttributeFilter();;
                                    orAllFilters = new org.openapis.openapi.models.shared.AttributeFilter[]{{
                                        add(new AttributeFilter() {{}}),
                                        add(new AttributeFilter() {{}}),
                                    }};
                                }};;
                                documentRelevanceOverrideConfigurations = new org.openapis.openapi.models.shared.DocumentRelevanceConfiguration[]{{
                                    add(new DocumentRelevanceConfiguration("dicta",                 new Relevance() {{
                                                        duration = "voluptatem";
                                                        freshness = false;
                                                        importance = 140909L;
                                                        rankOrder = OrderEnum.ASCENDING;
                                                        valueImportanceMap = new java.util.HashMap<String, Long>() {{
                                                            put("enim", 254288L);
                                                            put("architecto", 665952L);
                                                            put("quaerat", 816726L);
                                                            put("vitae", 607181L);
                                                        }};
                                                    }};) {{
                                        name = "Billy Waters";
                                        relevance = new Relevance() {{
                                            duration = "dolor";
                                            freshness = false;
                                            importance = 833946L;
                                            rankOrder = OrderEnum.DESCENDING;
                                            valueImportanceMap = new java.util.HashMap<String, Long>() {{
                                                put("minima", 951901L);
                                                put("beatae", 114212L);
                                                put("veritatis", 814398L);
                                                put("earum", 672273L);
                                            }};
                                        }};
                                    }}),
                                }};
                                facets = new org.openapis.openapi.models.shared.Facet[]{{
                                    add(new Facet() {{
                                        documentAttributeKey = "sapiente";
                                        facets = new org.openapis.openapi.models.shared.Facet[]{{
                                            add(new Facet() {{}}),
                                            add(new Facet() {{}}),
                                            add(new Facet() {{}}),
                                            add(new Facet() {{}}),
                                        }};
                                        maxResults = 708883L;
                                    }}),
                                }};
                                pageNumber = 156843L;
                                pageSize = 112751L;
                                queryResultTypeFilter = QueryResultTypeEnum.QUESTION_ANSWER;
                                queryText = "quas";
                                requestedDocumentAttributes = new String[]{{
                                    add("distinctio"),
                                }};
                                sortingConfiguration = new SortingConfiguration("placeat", SortOrderEnum.ASC);;
                                spellCorrectionConfiguration = new SpellCorrectionConfiguration(false);;
                                userContext = new UserContext() {{
                                    dataSourceGroups = new org.openapis.openapi.models.shared.DataSourceGroup[]{{
                                        add(new DataSourceGroup("distinctio", "distinctio") {{
                                            dataSourceId = "sit";
                                            groupId = "possimus";
                                        }}),
                                        add(new DataSourceGroup("soluta", "magnam") {{
                                            dataSourceId = "assumenda";
                                            groupId = "illum";
                                        }}),
                                        add(new DataSourceGroup("esse", "doloremque") {{
                                            dataSourceId = "laudantium";
                                            groupId = "tempora";
                                        }}),
                                        add(new DataSourceGroup("facilis", "aliquam") {{
                                            dataSourceId = "corrupti";
                                            groupId = "reiciendis";
                                        }}),
                                    }};
                                    groups = new String[]{{
                                        add("amet"),
                                        add("natus"),
                                        add("ab"),
                                        add("officiis"),
                                    }};
                                    token = "eum";
                                    userId = "rerum";
                                }};;
                                visitorId = "placeat";
                            }};, QueryXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_QUERY) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "ad";
                xAmzCredential = "blanditiis";
                xAmzDate = "porro";
                xAmzSecurityToken = "labore";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "ut";
            }};            

            QueryResponse res = sdk.sdk.query(req);

            if (res.queryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDataSourceSyncJob

Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDataSourceSyncJobRequest;
import org.openapis.openapi.models.operations.StartDataSourceSyncJobResponse;
import org.openapis.openapi.models.operations.StartDataSourceSyncJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDataSourceSyncJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDataSourceSyncJobRequest req = new StartDataSourceSyncJobRequest(                new StartDataSourceSyncJobRequest("ullam", "numquam");, StartDataSourceSyncJobXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_START_DATA_SOURCE_SYNC_JOB) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "occaecati";
                xAmzDate = "itaque";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "modi";
            }};            

            StartDataSourceSyncJobResponse res = sdk.sdk.startDataSourceSyncJob(req);

            if (res.startDataSourceSyncJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDataSourceSyncJob

Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDataSourceSyncJobRequest;
import org.openapis.openapi.models.operations.StopDataSourceSyncJobResponse;
import org.openapis.openapi.models.operations.StopDataSourceSyncJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDataSourceSyncJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDataSourceSyncJobRequest req = new StopDataSourceSyncJobRequest(                new StopDataSourceSyncJobRequest("explicabo", "suscipit");, StopDataSourceSyncJobXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_STOP_DATA_SOURCE_SYNC_JOB) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "sint";
                xAmzDate = "nobis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequatur";
            }};            

            StopDataSourceSyncJobResponse res = sdk.sdk.stopDataSourceSyncJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitFeedback

<p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitFeedbackRequest;
import org.openapis.openapi.models.operations.SubmitFeedbackResponse;
import org.openapis.openapi.models.operations.SubmitFeedbackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClickFeedback;
import org.openapis.openapi.models.shared.RelevanceFeedback;
import org.openapis.openapi.models.shared.RelevanceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitFeedbackRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitFeedbackRequest req = new SubmitFeedbackRequest(                new SubmitFeedbackRequest("recusandae", "voluptate") {{
                                clickFeedbackItems = new org.openapis.openapi.models.shared.ClickFeedback[]{{
                                    add(new ClickFeedback(OffsetDateTime.parse("2021-05-05T11:34:17.742Z"), "maiores") {{
                                        clickTime = OffsetDateTime.parse("2022-10-25T12:18:27.611Z");
                                        resultId = "expedita";
                                    }}),
                                    add(new ClickFeedback(OffsetDateTime.parse("2022-04-27T07:29:57.818Z"), "dicta") {{
                                        clickTime = OffsetDateTime.parse("2022-02-07T12:30:58.675Z");
                                        resultId = "culpa";
                                    }}),
                                    add(new ClickFeedback(OffsetDateTime.parse("2021-07-12T09:40:33.489Z"), "fugit") {{
                                        clickTime = OffsetDateTime.parse("2022-08-14T16:42:46.888Z");
                                        resultId = "eligendi";
                                    }}),
                                }};
                                relevanceFeedbackItems = new org.openapis.openapi.models.shared.RelevanceFeedback[]{{
                                    add(new RelevanceFeedback(RelevanceTypeEnum.RELEVANT, "natus") {{
                                        relevanceValue = RelevanceTypeEnum.NOT_RELEVANT;
                                        resultId = "quaerat";
                                    }}),
                                }};
                            }};, SubmitFeedbackXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_SUBMIT_FEEDBACK) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "deserunt";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "iste";
            }};            

            SubmitFeedbackResponse res = sdk.sdk.submitFeedback(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("hic",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("libero", "quia") {{
                                                    key = "consequuntur";
                                                    value = "ipsam";
                                                }}),
                                                add(new Tag("qui", "explicabo") {{
                                                    key = "omnis";
                                                    value = "dicta";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "consequatur";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "hic";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from an index, FAQ, or a data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("deserunt",                 new String[]{{
                                                add("distinctio"),
                                                add("iusto"),
                                                add("dignissimos"),
                                                add("provident"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "sunt";
                xAmzDate = "odit";
                xAmzSecurityToken = "vero";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "optio";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccessControlConfiguration

<p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccessControlConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateAccessControlConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateAccessControlConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.HierarchicalPrincipal;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.ReadAccessTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccessControlConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccessControlConfigurationRequest req = new UpdateAccessControlConfigurationRequest(                new UpdateAccessControlConfigurationRequest("repellat", "atque") {{
                                accessControlList = new org.openapis.openapi.models.shared.Principal[]{{
                                    add(new Principal(ReadAccessTypeEnum.ALLOW, "magni", PrincipalTypeEnum.GROUP) {{
                                        access = ReadAccessTypeEnum.DENY;
                                        dataSourceId = "amet";
                                        name = "Lawrence Hickle";
                                        type = PrincipalTypeEnum.GROUP;
                                    }}),
                                    add(new Principal(ReadAccessTypeEnum.DENY, "harum", PrincipalTypeEnum.USER) {{
                                        access = ReadAccessTypeEnum.DENY;
                                        dataSourceId = "in";
                                        name = "Kendra Corwin";
                                        type = PrincipalTypeEnum.GROUP;
                                    }}),
                                }};
                                description = "eligendi";
                                hierarchicalAccessControlList = new org.openapis.openapi.models.shared.HierarchicalPrincipal[]{{
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "sed", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "a";
                                                            name = "Louis Reichert";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "vitae", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "nobis";
                                                name = "Sue Christiansen DVM";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "ab", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "architecto";
                                                name = "Kristopher Dare";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "corporis", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "expedita";
                                                name = "Kelli Walsh";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "temporibus", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "deleniti";
                                                name = "Adam D'Amore";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "vitae", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "molestiae";
                                                            name = "Mr. Bert Wunsch";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "quo", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "fugiat";
                                                            name = "Dustin Hartmann Jr.";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "molestiae", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "sint";
                                                            name = "Miss Cary McKenzie";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.DENY, "ipsa", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "ullam";
                                                name = "Kellie Ledner";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "vel", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "occaecati";
                                                name = "Martin Cruickshank";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "quam", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "nisi";
                                                name = "Juanita Batz IV";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "perferendis", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "ullam";
                                                            name = "Marilyn Hirthe";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "expedita", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "ducimus";
                                                            name = "Sue Fadel";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "enim", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "impedit";
                                                            name = "Mr. Benny O'Reilly";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "fugit", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.DENY;
                                                            dataSourceId = "magni";
                                                            name = "Patricia Pouros";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.DENY, "quae", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "cupiditate";
                                                name = "Mrs. Arthur Wolff";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "consectetur", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "libero";
                                                name = "Norman Ferry";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "itaque", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "cumque";
                                                name = "Carolyn Reichert";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.DENY, "nihil", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.ALLOW;
                                                dataSourceId = "doloribus";
                                                name = "Timmy Abbott";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                        }};
                                    }}),
                                    add(new HierarchicalPrincipal(                new org.openapis.openapi.models.shared.Principal[]{{
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "ullam", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "dolorum";
                                                            name = "Felipe Kirlin";
                                                            type = PrincipalTypeEnum.USER;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "incidunt", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "est";
                                                            name = "Irma Ferry";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.DENY, "deserunt", PrincipalTypeEnum.USER) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "est";
                                                            name = "Rufus Conn II";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                        add(new Principal(ReadAccessTypeEnum.ALLOW, "quidem", PrincipalTypeEnum.GROUP) {{
                                                            access = ReadAccessTypeEnum.ALLOW;
                                                            dataSourceId = "voluptatem";
                                                            name = "Vera Goyette III";
                                                            type = PrincipalTypeEnum.GROUP;
                                                        }}),
                                                    }}) {{
                                        principalList = new org.openapis.openapi.models.shared.Principal[]{{
                                            add(new Principal(ReadAccessTypeEnum.DENY, "dolores", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "praesentium";
                                                name = "Jorge Ritchie";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "nostrum", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "facilis";
                                                name = "Herman Morissette";
                                                type = PrincipalTypeEnum.USER;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "fugiat", PrincipalTypeEnum.USER) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "molestiae";
                                                name = "Dana Franecki";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                            add(new Principal(ReadAccessTypeEnum.ALLOW, "corrupti", PrincipalTypeEnum.GROUP) {{
                                                access = ReadAccessTypeEnum.DENY;
                                                dataSourceId = "repellendus";
                                                name = "Vincent Raynor";
                                                type = PrincipalTypeEnum.GROUP;
                                            }}),
                                        }};
                                    }}),
                                }};
                                name = "Rosie Waelchi";
                            }};, UpdateAccessControlConfigurationXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_ACCESS_CONTROL_CONFIGURATION) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "quisquam";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "repudiandae";
            }};            

            UpdateAccessControlConfigurationResponse res = sdk.sdk.updateAccessControlConfiguration(req);

            if (res.updateAccessControlConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataSource

Updates an existing Amazon Kendra data source connector.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataSourceRequest;
import org.openapis.openapi.models.operations.UpdateDataSourceResponse;
import org.openapis.openapi.models.operations.UpdateDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessControlListConfiguration;
import org.openapis.openapi.models.shared.AclConfiguration;
import org.openapis.openapi.models.shared.AlfrescoConfiguration;
import org.openapis.openapi.models.shared.AlfrescoEntityEnum;
import org.openapis.openapi.models.shared.AuthenticationConfiguration;
import org.openapis.openapi.models.shared.BasicAuthenticationConfiguration;
import org.openapis.openapi.models.shared.BoxConfiguration;
import org.openapis.openapi.models.shared.ColumnConfiguration;
import org.openapis.openapi.models.shared.ConditionOperatorEnum;
import org.openapis.openapi.models.shared.ConfluenceAttachmentConfiguration;
import org.openapis.openapi.models.shared.ConfluenceAttachmentFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceAttachmentToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ConfluenceBlogConfiguration;
import org.openapis.openapi.models.shared.ConfluenceBlogFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceBlogToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceConfiguration;
import org.openapis.openapi.models.shared.ConfluencePageConfiguration;
import org.openapis.openapi.models.shared.ConfluencePageFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluencePageToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceSpaceConfiguration;
import org.openapis.openapi.models.shared.ConfluenceSpaceFieldNameEnum;
import org.openapis.openapi.models.shared.ConfluenceSpaceToIndexFieldMapping;
import org.openapis.openapi.models.shared.ConfluenceVersionEnum;
import org.openapis.openapi.models.shared.ConnectionConfiguration;
import org.openapis.openapi.models.shared.CustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.DataSourceConfiguration;
import org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping;
import org.openapis.openapi.models.shared.DataSourceVpcConfiguration;
import org.openapis.openapi.models.shared.DatabaseConfiguration;
import org.openapis.openapi.models.shared.DatabaseEngineTypeEnum;
import org.openapis.openapi.models.shared.DocumentAttributeCondition;
import org.openapis.openapi.models.shared.DocumentAttributeTarget;
import org.openapis.openapi.models.shared.DocumentAttributeValue;
import org.openapis.openapi.models.shared.DocumentsMetadataConfiguration;
import org.openapis.openapi.models.shared.FsxConfiguration;
import org.openapis.openapi.models.shared.FsxFileSystemTypeEnum;
import org.openapis.openapi.models.shared.GitHubConfiguration;
import org.openapis.openapi.models.shared.GitHubDocumentCrawlProperties;
import org.openapis.openapi.models.shared.GoogleDriveConfiguration;
import org.openapis.openapi.models.shared.HookConfiguration;
import org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration;
import org.openapis.openapi.models.shared.IssueSubEntityEnum;
import org.openapis.openapi.models.shared.JiraConfiguration;
import org.openapis.openapi.models.shared.OnPremiseConfiguration;
import org.openapis.openapi.models.shared.OneDriveConfiguration;
import org.openapis.openapi.models.shared.OneDriveUsers;
import org.openapis.openapi.models.shared.ProxyConfiguration;
import org.openapis.openapi.models.shared.QueryIdentifiersEnclosingOptionEnum;
import org.openapis.openapi.models.shared.QuipConfiguration;
import org.openapis.openapi.models.shared.S3DataSourceConfiguration;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.SaaSConfiguration;
import org.openapis.openapi.models.shared.SalesforceChatterFeedConfiguration;
import org.openapis.openapi.models.shared.SalesforceChatterFeedIncludeFilterTypeEnum;
import org.openapis.openapi.models.shared.SalesforceConfiguration;
import org.openapis.openapi.models.shared.SalesforceCustomKnowledgeArticleTypeConfiguration;
import org.openapis.openapi.models.shared.SalesforceKnowledgeArticleConfiguration;
import org.openapis.openapi.models.shared.SalesforceKnowledgeArticleStateEnum;
import org.openapis.openapi.models.shared.SalesforceStandardKnowledgeArticleTypeConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectAttachmentConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectConfiguration;
import org.openapis.openapi.models.shared.SalesforceStandardObjectNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SeedUrlConfiguration;
import org.openapis.openapi.models.shared.ServiceNowAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ServiceNowBuildVersionTypeEnum;
import org.openapis.openapi.models.shared.ServiceNowConfiguration;
import org.openapis.openapi.models.shared.ServiceNowKnowledgeArticleConfiguration;
import org.openapis.openapi.models.shared.ServiceNowServiceCatalogConfiguration;
import org.openapis.openapi.models.shared.SharePointConfiguration;
import org.openapis.openapi.models.shared.SharePointOnlineAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.SharePointVersionEnum;
import org.openapis.openapi.models.shared.SiteMapsConfiguration;
import org.openapis.openapi.models.shared.SlackConfiguration;
import org.openapis.openapi.models.shared.SlackEntityEnum;
import org.openapis.openapi.models.shared.SqlConfiguration;
import org.openapis.openapi.models.shared.TemplateConfiguration;
import org.openapis.openapi.models.shared.TypeEnum;
import org.openapis.openapi.models.shared.UpdateDataSourceRequest;
import org.openapis.openapi.models.shared.Urls;
import org.openapis.openapi.models.shared.WebCrawlerConfiguration;
import org.openapis.openapi.models.shared.WebCrawlerModeEnum;
import org.openapis.openapi.models.shared.WorkDocsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataSourceRequest req = new UpdateDataSourceRequest(                new UpdateDataSourceRequest("ipsum", "commodi") {{
                                configuration = new DataSourceConfiguration() {{
                                    alfrescoConfiguration = new AlfrescoConfiguration("vitae", "fugit", "nam",                 new S3Path("ex", "neque");) {{
                                        blogFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("a", "facere") {{
                                                dataSourceFieldName = "eos";
                                                dateFieldFormat = "alias";
                                                indexFieldName = "ad";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aperiam", "dignissimos") {{
                                                dataSourceFieldName = "id";
                                                dateFieldFormat = "atque";
                                                indexFieldName = "quaerat";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("iure", "deleniti") {{
                                                dataSourceFieldName = "quam";
                                                dateFieldFormat = "modi";
                                                indexFieldName = "fuga";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("dolor", "ad") {{
                                                dataSourceFieldName = "officia";
                                                dateFieldFormat = "sint";
                                                indexFieldName = "laborum";
                                            }}),
                                        }};
                                        crawlComments = false;
                                        crawlSystemFolders = false;
                                        documentLibraryFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("expedita", "voluptas") {{
                                                dataSourceFieldName = "sit";
                                                dateFieldFormat = "molestias";
                                                indexFieldName = "voluptas";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("delectus", "accusamus") {{
                                                dataSourceFieldName = "maiores";
                                                dateFieldFormat = "ea";
                                                indexFieldName = "vel";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("accusantium", "voluptates") {{
                                                dataSourceFieldName = "reiciendis";
                                                dateFieldFormat = "consequatur";
                                                indexFieldName = "sed";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("numquam", "non") {{
                                                dataSourceFieldName = "provident";
                                                dateFieldFormat = "maiores";
                                                indexFieldName = "quaerat";
                                            }}),
                                        }};
                                        entityFilter = new org.openapis.openapi.models.shared.AlfrescoEntityEnum[]{{
                                            add(AlfrescoEntityEnum.WIKI),
                                            add(AlfrescoEntityEnum.WIKI),
                                            add(AlfrescoEntityEnum.WIKI),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("libero"),
                                            add("omnis"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("eos"),
                                            add("quisquam"),
                                            add("corrupti"),
                                        }};
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("cum"),
                                                            add("quibusdam"),
                                                            add("est"),
                                                            add("commodi"),
                                                        }},                 new String[]{{
                                                            add("autem"),
                                                            add("dicta"),
                                                            add("recusandae"),
                                                        }});;
                                        wikiFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("iste", "atque") {{
                                                dataSourceFieldName = "id";
                                                dateFieldFormat = "odit";
                                                indexFieldName = "inventore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("doloribus", "pariatur") {{
                                                dataSourceFieldName = "explicabo";
                                                dateFieldFormat = "ullam";
                                                indexFieldName = "atque";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("eveniet", "nam") {{
                                                dataSourceFieldName = "aut";
                                                dateFieldFormat = "similique";
                                                indexFieldName = "iste";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("voluptatibus", "quam") {{
                                                dataSourceFieldName = "animi";
                                                dateFieldFormat = "labore";
                                                indexFieldName = "voluptate";
                                            }}),
                                        }};
                                    }};;
                                    boxConfiguration = new BoxConfiguration("nulla", "dolorem") {{
                                        commentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("excepturi", "aliquid") {{
                                                dataSourceFieldName = "a";
                                                dateFieldFormat = "perferendis";
                                                indexFieldName = "quaerat";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("laboriosam", "culpa") {{
                                                dataSourceFieldName = "dolore";
                                                dateFieldFormat = "voluptatem";
                                                indexFieldName = "illum";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("vitae", "quisquam") {{
                                                dataSourceFieldName = "dicta";
                                                dateFieldFormat = "atque";
                                                indexFieldName = "ratione";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("temporibus", "a") {{
                                                dataSourceFieldName = "atque";
                                                dateFieldFormat = "nihil";
                                                indexFieldName = "culpa";
                                            }}),
                                        }};
                                        crawlComments = false;
                                        crawlTasks = false;
                                        crawlWebLinks = false;
                                        exclusionPatterns = new String[]{{
                                            add("cupiditate"),
                                            add("suscipit"),
                                        }};
                                        fileFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("mollitia", "possimus") {{
                                                dataSourceFieldName = "repellendus";
                                                dateFieldFormat = "delectus";
                                                indexFieldName = "ab";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("animi", "debitis") {{
                                                dataSourceFieldName = "praesentium";
                                                dateFieldFormat = "neque";
                                                indexFieldName = "quam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("vitae", "cumque") {{
                                                dataSourceFieldName = "voluptatum";
                                                dateFieldFormat = "voluptatem";
                                                indexFieldName = "quisquam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("occaecati", "quis") {{
                                                dataSourceFieldName = "architecto";
                                                dateFieldFormat = "sint";
                                                indexFieldName = "eligendi";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("officia"),
                                            add("iste"),
                                            add("unde"),
                                        }};
                                        taskFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("sapiente", "deserunt") {{
                                                dataSourceFieldName = "laboriosam";
                                                dateFieldFormat = "ducimus";
                                                indexFieldName = "voluptatum";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sint", "autem") {{
                                                dataSourceFieldName = "dolor";
                                                dateFieldFormat = "hic";
                                                indexFieldName = "iure";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("fuga", "a") {{
                                                dataSourceFieldName = "iste";
                                                dateFieldFormat = "cupiditate";
                                                indexFieldName = "ab";
                                            }}),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("voluptatum"),
                                                        }},                 new String[]{{
                                                            add("quod"),
                                                            add("repudiandae"),
                                                            add("eaque"),
                                                        }});;
                                        webLinkFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("incidunt", "modi") {{
                                                dataSourceFieldName = "autem";
                                                dateFieldFormat = "vitae";
                                                indexFieldName = "numquam";
                                            }}),
                                        }};
                                    }};;
                                    confluenceConfiguration = new ConfluenceConfiguration("quos", "minus", ConfluenceVersionEnum.CLOUD) {{
                                        attachmentConfiguration = new ConfluenceAttachmentConfiguration() {{
                                            attachmentFieldMappings = new org.openapis.openapi.models.shared.ConfluenceAttachmentToIndexFieldMapping[]{{
                                                add(new ConfluenceAttachmentToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceAttachmentFieldNameEnum.FILE_SIZE;
                                                    dateFieldFormat = "reprehenderit";
                                                    indexFieldName = "animi";
                                                }}),
                                                add(new ConfluenceAttachmentToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceAttachmentFieldNameEnum.AUTHOR;
                                                    dateFieldFormat = "voluptates";
                                                    indexFieldName = "delectus";
                                                }}),
                                                add(new ConfluenceAttachmentToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceAttachmentFieldNameEnum.CREATED_DATE;
                                                    dateFieldFormat = "delectus";
                                                    indexFieldName = "exercitationem";
                                                }}),
                                            }};
                                            crawlAttachments = false;
                                        }};;
                                        authenticationType = ConfluenceAuthenticationTypeEnum.HTTP_BASIC;
                                        blogConfiguration = new ConfluenceBlogConfiguration() {{
                                            blogFieldMappings = new org.openapis.openapi.models.shared.ConfluenceBlogToIndexFieldMapping[]{{
                                                add(new ConfluenceBlogToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceBlogFieldNameEnum.AUTHOR;
                                                    dateFieldFormat = "sed";
                                                    indexFieldName = "voluptatum";
                                                }}),
                                                add(new ConfluenceBlogToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceBlogFieldNameEnum.VERSION;
                                                    dateFieldFormat = "a";
                                                    indexFieldName = "itaque";
                                                }}),
                                            }};
                                        }};;
                                        exclusionPatterns = new String[]{{
                                            add("repellat"),
                                            add("cupiditate"),
                                            add("adipisci"),
                                            add("aliquam"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("veniam"),
                                        }};
                                        pageConfiguration = new ConfluencePageConfiguration() {{
                                            pageFieldMappings = new org.openapis.openapi.models.shared.ConfluencePageToIndexFieldMapping[]{{
                                                add(new ConfluencePageToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluencePageFieldNameEnum.URL;
                                                    dateFieldFormat = "possimus";
                                                    indexFieldName = "dignissimos";
                                                }}),
                                            }};
                                        }};;
                                        proxyConfiguration = new ProxyConfiguration("itaque", 131116L) {{
                                            credentials = "ullam";
                                        }};;
                                        spaceConfiguration = new ConfluenceSpaceConfiguration() {{
                                            crawlArchivedSpaces = false;
                                            crawlPersonalSpaces = false;
                                            excludeSpaces = new String[]{{
                                                add("delectus"),
                                            }};
                                            includeSpaces = new String[]{{
                                                add("quod"),
                                                add("sunt"),
                                            }};
                                            spaceFieldMappings = new org.openapis.openapi.models.shared.ConfluenceSpaceToIndexFieldMapping[]{{
                                                add(new ConfluenceSpaceToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceSpaceFieldNameEnum.ITEM_TYPE;
                                                    dateFieldFormat = "illum";
                                                    indexFieldName = "voluptates";
                                                }}),
                                                add(new ConfluenceSpaceToIndexFieldMapping() {{
                                                    dataSourceFieldName = ConfluenceSpaceFieldNameEnum.SPACE_KEY;
                                                    dateFieldFormat = "est";
                                                    indexFieldName = "in";
                                                }}),
                                            }};
                                        }};;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("voluptate"),
                                                        }},                 new String[]{{
                                                            add("delectus"),
                                                        }});;
                                    }};;
                                    databaseConfiguration = new DatabaseConfiguration(                new ColumnConfiguration(                new String[]{{
                                                                        add("dolore"),
                                                                        add("nemo"),
                                                                    }}, "est", "quo") {{
                                                        documentTitleColumnName = "maxime";
                                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                            add(new DataSourceToIndexFieldMapping("fuga", "officia") {{
                                                                dataSourceFieldName = "laboriosam";
                                                                dateFieldFormat = "laboriosam";
                                                                indexFieldName = "quam";
                                                            }}),
                                                            add(new DataSourceToIndexFieldMapping("tempore", "culpa") {{
                                                                dataSourceFieldName = "repellat";
                                                                dateFieldFormat = "cupiditate";
                                                                indexFieldName = "soluta";
                                                            }}),
                                                            add(new DataSourceToIndexFieldMapping("ad", "sapiente") {{
                                                                dataSourceFieldName = "fugiat";
                                                                dateFieldFormat = "inventore";
                                                                indexFieldName = "atque";
                                                            }}),
                                                            add(new DataSourceToIndexFieldMapping("ab", "quibusdam") {{
                                                                dataSourceFieldName = "voluptates";
                                                                dateFieldFormat = "ut";
                                                                indexFieldName = "nesciunt";
                                                            }}),
                                                        }};
                                                    }};,                 new ConnectionConfiguration("suscipit", "quidem", 964093L, "nemo", "cumque");, DatabaseEngineTypeEnum.RDS_MYSQL) {{
                                        aclConfiguration = new AclConfiguration("sequi");;
                                        sqlConfiguration = new SqlConfiguration() {{
                                            queryIdentifiersEnclosingOption = QueryIdentifiersEnclosingOptionEnum.NONE;
                                        }};;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("expedita"),
                                                            add("rerum"),
                                                            add("totam"),
                                                            add("quod"),
                                                        }},                 new String[]{{
                                                            add("eaque"),
                                                        }});;
                                    }};;
                                    fsxConfiguration = new FsxConfiguration("impedit", FsxFileSystemTypeEnum.WINDOWS,                 new DataSourceVpcConfiguration(                new String[]{{
                                                                        add("ex"),
                                                                        add("odio"),
                                                                        add("delectus"),
                                                                    }},                 new String[]{{
                                                                        add("ut"),
                                                                        add("distinctio"),
                                                                        add("eius"),
                                                                        add("eos"),
                                                                    }});) {{
                                        exclusionPatterns = new String[]{{
                                            add("repudiandae"),
                                            add("sint"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("amet", "incidunt") {{
                                                dataSourceFieldName = "debitis";
                                                dateFieldFormat = "laboriosam";
                                                indexFieldName = "eos";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("voluptate", "tempore") {{
                                                dataSourceFieldName = "porro";
                                                dateFieldFormat = "occaecati";
                                                indexFieldName = "reiciendis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("tenetur", "recusandae") {{
                                                dataSourceFieldName = "in";
                                                dateFieldFormat = "omnis";
                                                indexFieldName = "possimus";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("iusto"),
                                            add("esse"),
                                            add("harum"),
                                        }};
                                        secretArn = "ad";
                                    }};;
                                    gitHubConfiguration = new GitHubConfiguration("quod") {{
                                        exclusionFileNamePatterns = new String[]{{
                                            add("totam"),
                                        }};
                                        exclusionFileTypePatterns = new String[]{{
                                            add("dolore"),
                                            add("nam"),
                                            add("officia"),
                                            add("maiores"),
                                        }};
                                        exclusionFolderNamePatterns = new String[]{{
                                            add("illo"),
                                            add("saepe"),
                                            add("enim"),
                                        }};
                                        gitHubCommitConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("deleniti", "provident") {{
                                                dataSourceFieldName = "ex";
                                                dateFieldFormat = "eveniet";
                                                indexFieldName = "delectus";
                                            }}),
                                        }};
                                        gitHubDocumentCrawlProperties = new GitHubDocumentCrawlProperties() {{
                                            crawlIssue = false;
                                            crawlIssueComment = false;
                                            crawlIssueCommentAttachment = false;
                                            crawlPullRequest = false;
                                            crawlPullRequestComment = false;
                                            crawlPullRequestCommentAttachment = false;
                                            crawlRepositoryDocuments = false;
                                        }};;
                                        gitHubIssueAttachmentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("nam", "numquam") {{
                                                dataSourceFieldName = "dolorum";
                                                dateFieldFormat = "nostrum";
                                                indexFieldName = "tempora";
                                            }}),
                                        }};
                                        gitHubIssueCommentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("autem", "earum") {{
                                                dataSourceFieldName = "nostrum";
                                                dateFieldFormat = "maiores";
                                                indexFieldName = "veritatis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("nesciunt", "corrupti") {{
                                                dataSourceFieldName = "minima";
                                                dateFieldFormat = "ex";
                                                indexFieldName = "possimus";
                                            }}),
                                        }};
                                        gitHubIssueDocumentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("numquam", "laborum") {{
                                                dataSourceFieldName = "fuga";
                                                dateFieldFormat = "sequi";
                                                indexFieldName = "maxime";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sunt", "rerum") {{
                                                dataSourceFieldName = "eligendi";
                                                dateFieldFormat = "autem";
                                                indexFieldName = "adipisci";
                                            }}),
                                        }};
                                        gitHubPullRequestCommentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("autem", "optio") {{
                                                dataSourceFieldName = "provident";
                                                dateFieldFormat = "necessitatibus";
                                                indexFieldName = "fugit";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("a", "natus") {{
                                                dataSourceFieldName = "eveniet";
                                                dateFieldFormat = "fugiat";
                                                indexFieldName = "blanditiis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("molestias", "dolore") {{
                                                dataSourceFieldName = "sapiente";
                                                dateFieldFormat = "repellendus";
                                                indexFieldName = "facilis";
                                            }}),
                                        }};
                                        gitHubPullRequestDocumentAttachmentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("velit", "tempore") {{
                                                dataSourceFieldName = "accusantium";
                                                dateFieldFormat = "maiores";
                                                indexFieldName = "nisi";
                                            }}),
                                        }};
                                        gitHubPullRequestDocumentConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("iusto", "atque") {{
                                                dataSourceFieldName = "hic";
                                                dateFieldFormat = "blanditiis";
                                                indexFieldName = "vitae";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aperiam", "vitae") {{
                                                dataSourceFieldName = "velit";
                                                dateFieldFormat = "molestiae";
                                                indexFieldName = "nam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quibusdam", "quam") {{
                                                dataSourceFieldName = "mollitia";
                                                dateFieldFormat = "asperiores";
                                                indexFieldName = "at";
                                            }}),
                                        }};
                                        gitHubRepositoryConfigurationFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("labore", "sunt") {{
                                                dataSourceFieldName = "rem";
                                                dateFieldFormat = "vel";
                                                indexFieldName = "eos";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("distinctio", "incidunt") {{
                                                dataSourceFieldName = "blanditiis";
                                                dateFieldFormat = "iste";
                                                indexFieldName = "accusamus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("consectetur", "sapiente") {{
                                                dataSourceFieldName = "labore";
                                                dateFieldFormat = "blanditiis";
                                                indexFieldName = "ducimus";
                                            }}),
                                        }};
                                        inclusionFileNamePatterns = new String[]{{
                                            add("accusantium"),
                                            add("ratione"),
                                        }};
                                        inclusionFileTypePatterns = new String[]{{
                                            add("asperiores"),
                                        }};
                                        inclusionFolderNamePatterns = new String[]{{
                                            add("sint"),
                                        }};
                                        onPremiseConfiguration = new OnPremiseConfiguration("possimus", "tempore",                 new S3Path("asperiores", "quasi"););;
                                        repositoryFilter = new String[]{{
                                            add("nemo"),
                                        }};
                                        saaSConfiguration = new SaaSConfiguration("nobis", "debitis");;
                                        type = TypeEnum.SAAS;
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("minima"),
                                                        }},                 new String[]{{
                                                            add("itaque"),
                                                        }});;
                                    }};;
                                    googleDriveConfiguration = new GoogleDriveConfiguration("error") {{
                                        excludeMimeTypes = new String[]{{
                                            add("error"),
                                            add("placeat"),
                                            add("temporibus"),
                                        }};
                                        excludeSharedDrives = new String[]{{
                                            add("earum"),
                                            add("minima"),
                                        }};
                                        excludeUserAccounts = new String[]{{
                                            add("odit"),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("error"),
                                            add("vel"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("sunt", "amet") {{
                                                dataSourceFieldName = "alias";
                                                dateFieldFormat = "itaque";
                                                indexFieldName = "ab";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("non", "esse") {{
                                                dataSourceFieldName = "cum";
                                                dateFieldFormat = "iusto";
                                                indexFieldName = "corrupti";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("omnis", "recusandae") {{
                                                dataSourceFieldName = "vero";
                                                dateFieldFormat = "eligendi";
                                                indexFieldName = "minima";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("voluptatibus"),
                                        }};
                                    }};;
                                    jiraConfiguration = new JiraConfiguration("autem", "in") {{
                                        attachmentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("optio", "quo") {{
                                                dataSourceFieldName = "amet";
                                                dateFieldFormat = "cumque";
                                                indexFieldName = "dolore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("suscipit", "illum") {{
                                                dataSourceFieldName = "repudiandae";
                                                dateFieldFormat = "tempora";
                                                indexFieldName = "libero";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aliquid", "repellat") {{
                                                dataSourceFieldName = "iusto";
                                                dateFieldFormat = "aliquid";
                                                indexFieldName = "sint";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("ullam", "nihil") {{
                                                dataSourceFieldName = "sapiente";
                                                dateFieldFormat = "consectetur";
                                                indexFieldName = "eligendi";
                                            }}),
                                        }};
                                        commentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("architecto", "amet") {{
                                                dataSourceFieldName = "dignissimos";
                                                dateFieldFormat = "corporis";
                                                indexFieldName = "perferendis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("dolore", "magnam") {{
                                                dataSourceFieldName = "corporis";
                                                dateFieldFormat = "nihil";
                                                indexFieldName = "officiis";
                                            }}),
                                        }};
                                        exclusionPatterns = new String[]{{
                                            add("ipsam"),
                                            add("dicta"),
                                            add("hic"),
                                            add("praesentium"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("consequatur"),
                                            add("totam"),
                                            add("tempora"),
                                        }};
                                        issueFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("quam", "officiis") {{
                                                dataSourceFieldName = "dolor";
                                                dateFieldFormat = "sunt";
                                                indexFieldName = "omnis";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("deserunt", "odit") {{
                                                dataSourceFieldName = "dicta";
                                                dateFieldFormat = "excepturi";
                                                indexFieldName = "consectetur";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("suscipit", "ducimus") {{
                                                dataSourceFieldName = "incidunt";
                                                dateFieldFormat = "corporis";
                                                indexFieldName = "quaerat";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("corrupti", "nihil") {{
                                                dataSourceFieldName = "tenetur";
                                                dateFieldFormat = "excepturi";
                                                indexFieldName = "modi";
                                            }}),
                                        }};
                                        issueSubEntityFilter = new org.openapis.openapi.models.shared.IssueSubEntityEnum[]{{
                                            add(IssueSubEntityEnum.WORKLOGS),
                                            add(IssueSubEntityEnum.COMMENTS),
                                        }};
                                        issueType = new String[]{{
                                            add("ipsam"),
                                            add("nobis"),
                                            add("porro"),
                                            add("labore"),
                                        }};
                                        project = new String[]{{
                                            add("ducimus"),
                                            add("qui"),
                                            add("qui"),
                                        }};
                                        projectFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("aliquid", "cum") {{
                                                dataSourceFieldName = "ratione";
                                                dateFieldFormat = "saepe";
                                                indexFieldName = "iure";
                                            }}),
                                        }};
                                        status = new String[]{{
                                            add("rem"),
                                            add("voluptatibus"),
                                            add("officiis"),
                                            add("corporis"),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("aut"),
                                                            add("voluptatem"),
                                                            add("libero"),
                                                            add("excepturi"),
                                                        }},                 new String[]{{
                                                            add("omnis"),
                                                            add("officiis"),
                                                        }});;
                                        workLogFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("voluptatum", "nihil") {{
                                                dataSourceFieldName = "magni";
                                                dateFieldFormat = "sit";
                                                indexFieldName = "velit";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("corporis", "cupiditate") {{
                                                dataSourceFieldName = "neque";
                                                dateFieldFormat = "aspernatur";
                                                indexFieldName = "eaque";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quo", "architecto") {{
                                                dataSourceFieldName = "aut";
                                                dateFieldFormat = "impedit";
                                                indexFieldName = "quod";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("eius", "aperiam") {{
                                                dataSourceFieldName = "voluptatem";
                                                dateFieldFormat = "perspiciatis";
                                                indexFieldName = "ea";
                                            }}),
                                        }};
                                    }};;
                                    oneDriveConfiguration = new OneDriveConfiguration(                new OneDriveUsers() {{
                                                        oneDriveUserList = new String[]{{
                                                            add("non"),
                                                        }};
                                                        oneDriveUserS3Path = new S3Path("beatae", "sequi");;
                                                    }};, "rerum", "ipsum") {{
                                        disableLocalGroups = false;
                                        exclusionPatterns = new String[]{{
                                            add("quis"),
                                            add("eaque"),
                                            add("incidunt"),
                                            add("ut"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("debitis", "reprehenderit") {{
                                                dataSourceFieldName = "aliquid";
                                                dateFieldFormat = "ullam";
                                                indexFieldName = "maiores";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("ut", "quae") {{
                                                dataSourceFieldName = "eos";
                                                dateFieldFormat = "assumenda";
                                                indexFieldName = "cumque";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("consequatur", "cumque") {{
                                                dataSourceFieldName = "nihil";
                                                dateFieldFormat = "quam";
                                                indexFieldName = "assumenda";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("non", "accusantium") {{
                                                dataSourceFieldName = "placeat";
                                                dateFieldFormat = "adipisci";
                                                indexFieldName = "tenetur";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("itaque"),
                                            add("earum"),
                                            add("impedit"),
                                        }};
                                    }};;
                                    quipConfiguration = new QuipConfiguration("dicta", "corporis") {{
                                        attachmentFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("illum", "ea") {{
                                                dataSourceFieldName = "eveniet";
                                                dateFieldFormat = "cum";
                                                indexFieldName = "dolore";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("animi", "necessitatibus") {{
                                                dataSourceFieldName = "officiis";
                                                dateFieldFormat = "quasi";
                                                indexFieldName = "accusamus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("veniam", "fuga") {{
                                                dataSourceFieldName = "voluptatem";
                                                dateFieldFormat = "maiores";
                                                indexFieldName = "odio";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("sed", "deserunt") {{
                                                dataSourceFieldName = "itaque";
                                                dateFieldFormat = "possimus";
                                                indexFieldName = "tenetur";
                                            }}),
                                        }};
                                        crawlAttachments = false;
                                        crawlChatRooms = false;
                                        crawlFileComments = false;
                                        exclusionPatterns = new String[]{{
                                            add("id"),
                                            add("distinctio"),
                                            add("corporis"),
                                            add("quas"),
                                        }};
                                        folderIds = new String[]{{
                                            add("cupiditate"),
                                            add("unde"),
                                            add("et"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("unde"),
                                            add("sed"),
                                            add("suscipit"),
                                            add("facere"),
                                        }};
                                        messageFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("sint", "eius") {{
                                                dataSourceFieldName = "nam";
                                                dateFieldFormat = "quaerat";
                                                indexFieldName = "corrupti";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("odio", "numquam") {{
                                                dataSourceFieldName = "vel";
                                                dateFieldFormat = "quasi";
                                                indexFieldName = "vero";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("nobis", "recusandae") {{
                                                dataSourceFieldName = "fugit";
                                                dateFieldFormat = "inventore";
                                                indexFieldName = "optio";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("veniam", "sit") {{
                                                dataSourceFieldName = "commodi";
                                                dateFieldFormat = "possimus";
                                                indexFieldName = "provident";
                                            }}),
                                        }};
                                        threadFieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("id", "error") {{
                                                dataSourceFieldName = "a";
                                                dateFieldFormat = "consequatur";
                                                indexFieldName = "vero";
                                            }}),
                                        }};
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("perferendis"),
                                                        }},                 new String[]{{
                                                            add("voluptas"),
                                                            add("sint"),
                                                            add("maiores"),
                                                        }});;
                                    }};;
                                    s3Configuration = new S3DataSourceConfiguration("nihil") {{
                                        accessControlListConfiguration = new AccessControlListConfiguration() {{
                                            keyPath = "fuga";
                                        }};;
                                        documentsMetadataConfiguration = new DocumentsMetadataConfiguration() {{
                                            s3Prefix = "cumque";
                                        }};;
                                        exclusionPatterns = new String[]{{
                                            add("maiores"),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("explicabo"),
                                            add("delectus"),
                                        }};
                                        inclusionPrefixes = new String[]{{
                                            add("deleniti"),
                                            add("enim"),
                                            add("sit"),
                                        }};
                                    }};;
                                    salesforceConfiguration = new SalesforceConfiguration("voluptatem", "natus") {{
                                        chatterFeedConfiguration = new SalesforceChatterFeedConfiguration("voluptatem") {{
                                            documentTitleFieldName = "tempora";
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("doloremque", "quas") {{
                                                    dataSourceFieldName = "quasi";
                                                    dateFieldFormat = "veritatis";
                                                    indexFieldName = "ex";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("quas", "blanditiis") {{
                                                    dataSourceFieldName = "dolores";
                                                    dateFieldFormat = "perferendis";
                                                    indexFieldName = "esse";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("autem", "vel") {{
                                                    dataSourceFieldName = "laudantium";
                                                    dateFieldFormat = "voluptates";
                                                    indexFieldName = "minus";
                                                }}),
                                            }};
                                            includeFilterTypes = new org.openapis.openapi.models.shared.SalesforceChatterFeedIncludeFilterTypeEnum[]{{
                                                add(SalesforceChatterFeedIncludeFilterTypeEnum.STANDARD_USER),
                                            }};
                                        }};;
                                        crawlAttachments = false;
                                        excludeAttachmentFilePatterns = new String[]{{
                                            add("soluta"),
                                        }};
                                        includeAttachmentFilePatterns = new String[]{{
                                            add("necessitatibus"),
                                            add("perspiciatis"),
                                            add("suscipit"),
                                            add("ullam"),
                                        }};
                                        knowledgeArticleConfiguration = new SalesforceKnowledgeArticleConfiguration(                new org.openapis.openapi.models.shared.SalesforceKnowledgeArticleStateEnum[]{{
                                                            add(SalesforceKnowledgeArticleStateEnum.ARCHIVED),
                                                            add(SalesforceKnowledgeArticleStateEnum.ARCHIVED),
                                                            add(SalesforceKnowledgeArticleStateEnum.DRAFT),
                                                        }}) {{
                                            customKnowledgeArticleTypeConfigurations = new org.openapis.openapi.models.shared.SalesforceCustomKnowledgeArticleTypeConfiguration[]{{
                                                add(new SalesforceCustomKnowledgeArticleTypeConfiguration("ratione", "eos") {{
                                                    documentDataFieldName = "accusamus";
                                                    documentTitleFieldName = "quod";
                                                    fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                        add(new DataSourceToIndexFieldMapping("earum", "nihil") {{
                                                            dataSourceFieldName = "voluptas";
                                                            dateFieldFormat = "earum";
                                                            indexFieldName = "est";
                                                        }}),
                                                    }};
                                                    name = "Olivia Auer";
                                                }}),
                                            }};
                                            standardKnowledgeArticleTypeConfiguration = new SalesforceStandardKnowledgeArticleTypeConfiguration("id") {{
                                                documentTitleFieldName = "modi";
                                                fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                    add(new DataSourceToIndexFieldMapping("eligendi", "cum") {{
                                                        dataSourceFieldName = "error";
                                                        dateFieldFormat = "consectetur";
                                                        indexFieldName = "reprehenderit";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("magnam", "eius") {{
                                                        dataSourceFieldName = "culpa";
                                                        dateFieldFormat = "culpa";
                                                        indexFieldName = "a";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("quaerat", "voluptatum") {{
                                                        dataSourceFieldName = "ad";
                                                        dateFieldFormat = "quia";
                                                        indexFieldName = "quod";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("cupiditate", "tempore") {{
                                                        dataSourceFieldName = "numquam";
                                                        dateFieldFormat = "explicabo";
                                                        indexFieldName = "eligendi";
                                                    }}),
                                                }};
                                            }};;
                                        }};;
                                        standardObjectAttachmentConfiguration = new SalesforceStandardObjectAttachmentConfiguration() {{
                                            documentTitleFieldName = "odit";
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("nulla", "est") {{
                                                    dataSourceFieldName = "at";
                                                    dateFieldFormat = "ipsum";
                                                    indexFieldName = "explicabo";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("quasi", "mollitia") {{
                                                    dataSourceFieldName = "sapiente";
                                                    dateFieldFormat = "necessitatibus";
                                                    indexFieldName = "voluptatum";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("ut", "incidunt") {{
                                                    dataSourceFieldName = "voluptatum";
                                                    dateFieldFormat = "blanditiis";
                                                    indexFieldName = "sapiente";
                                                }}),
                                            }};
                                        }};;
                                        standardObjectConfigurations = new org.openapis.openapi.models.shared.SalesforceStandardObjectConfiguration[]{{
                                            add(new SalesforceStandardObjectConfiguration("eum", SalesforceStandardObjectNameEnum.CONTACT) {{
                                                documentDataFieldName = "ut";
                                                documentTitleFieldName = "enim";
                                                fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                    add(new DataSourceToIndexFieldMapping("quod", "nulla") {{
                                                        dataSourceFieldName = "ratione";
                                                        dateFieldFormat = "tenetur";
                                                        indexFieldName = "saepe";
                                                    }}),
                                                    add(new DataSourceToIndexFieldMapping("nemo", "nesciunt") {{
                                                        dataSourceFieldName = "tempora";
                                                        dateFieldFormat = "quam";
                                                        indexFieldName = "consectetur";
                                                    }}),
                                                }};
                                                name = SalesforceStandardObjectNameEnum.TASK;
                                            }}),
                                            add(new SalesforceStandardObjectConfiguration("id", SalesforceStandardObjectNameEnum.GROUP) {{
                                                documentDataFieldName = "placeat";
                                                documentTitleFieldName = "quos";
                                                fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                    add(new DataSourceToIndexFieldMapping("nihil", "unde") {{
                                                        dataSourceFieldName = "eaque";
                                                        dateFieldFormat = "natus";
                                                        indexFieldName = "ratione";
                                                    }}),
                                                }};
                                                name = SalesforceStandardObjectNameEnum.PARTNER;
                                            }}),
                                        }};
                                    }};;
                                    serviceNowConfiguration = new ServiceNowConfiguration("occaecati", "optio", ServiceNowBuildVersionTypeEnum.OTHERS) {{
                                        authenticationType = ServiceNowAuthenticationTypeEnum.HTTP_BASIC;
                                        knowledgeArticleConfiguration = new ServiceNowKnowledgeArticleConfiguration("asperiores") {{
                                            crawlAttachments = false;
                                            documentTitleFieldName = "nam";
                                            excludeAttachmentFilePatterns = new String[]{{
                                                add("sapiente"),
                                                add("quam"),
                                                add("occaecati"),
                                                add("repellendus"),
                                            }};
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("odio", "totam") {{
                                                    dataSourceFieldName = "dicta";
                                                    dateFieldFormat = "rem";
                                                    indexFieldName = "fuga";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("voluptatibus", "omnis") {{
                                                    dataSourceFieldName = "magni";
                                                    dateFieldFormat = "eos";
                                                    indexFieldName = "harum";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("aliquam", "vero") {{
                                                    dataSourceFieldName = "quis";
                                                    dateFieldFormat = "quos";
                                                    indexFieldName = "natus";
                                                }}),
                                            }};
                                            filterQuery = "nisi";
                                            includeAttachmentFilePatterns = new String[]{{
                                                add("eum"),
                                                add("vitae"),
                                                add("animi"),
                                            }};
                                        }};;
                                        serviceCatalogConfiguration = new ServiceNowServiceCatalogConfiguration("possimus") {{
                                            crawlAttachments = false;
                                            documentTitleFieldName = "libero";
                                            excludeAttachmentFilePatterns = new String[]{{
                                                add("quaerat"),
                                                add("maiores"),
                                            }};
                                            fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                                add(new DataSourceToIndexFieldMapping("odio", "ullam") {{
                                                    dataSourceFieldName = "accusamus";
                                                    dateFieldFormat = "ipsam";
                                                    indexFieldName = "fugiat";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("doloribus", "necessitatibus") {{
                                                    dataSourceFieldName = "inventore";
                                                    dateFieldFormat = "eligendi";
                                                    indexFieldName = "occaecati";
                                                }}),
                                                add(new DataSourceToIndexFieldMapping("veniam", "aut") {{
                                                    dataSourceFieldName = "rem";
                                                    dateFieldFormat = "a";
                                                    indexFieldName = "nihil";
                                                }}),
                                            }};
                                            includeAttachmentFilePatterns = new String[]{{
                                                add("rerum"),
                                            }};
                                        }};;
                                    }};;
                                    sharePointConfiguration = new SharePointConfiguration("voluptatibus", SharePointVersionEnum.SHAREPOINT2019,                 new String[]{{
                                                        add("non"),
                                                        add("dolore"),
                                                        add("enim"),
                                                        add("alias"),
                                                    }}) {{
                                        authenticationType = SharePointOnlineAuthenticationTypeEnum.OAUTH2;
                                        crawlAttachments = false;
                                        disableLocalGroups = false;
                                        documentTitleFieldName = "modi";
                                        exclusionPatterns = new String[]{{
                                            add("a"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("eius", "nostrum") {{
                                                dataSourceFieldName = "molestiae";
                                                dateFieldFormat = "autem";
                                                indexFieldName = "dolore";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("amet"),
                                            add("voluptate"),
                                        }};
                                        proxyConfiguration = new ProxyConfiguration("molestias", 976274L) {{
                                            credentials = "ipsum";
                                        }};;
                                        sslCertificateS3Path = new S3Path("hic", "quidem");;
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("molestiae"),
                                                        }},                 new String[]{{
                                                            add("quia"),
                                                            add("inventore"),
                                                            add("doloribus"),
                                                            add("praesentium"),
                                                        }});;
                                    }};;
                                    slackConfiguration = new SlackConfiguration("aliquid", "consequuntur",                 new org.openapis.openapi.models.shared.SlackEntityEnum[]{{
                                                        add(SlackEntityEnum.PRIVATE_CHANNEL),
                                                        add(SlackEntityEnum.PRIVATE_CHANNEL),
                                                    }}, "soluta") {{
                                        crawlBotMessage = false;
                                        excludeArchived = false;
                                        exclusionPatterns = new String[]{{
                                            add("vel"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("cupiditate", "hic") {{
                                                dataSourceFieldName = "maxime";
                                                dateFieldFormat = "vel";
                                                indexFieldName = "distinctio";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("quod", "saepe") {{
                                                dataSourceFieldName = "quis";
                                                dateFieldFormat = "deleniti";
                                                indexFieldName = "iusto";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("minus", "aliquid") {{
                                                dataSourceFieldName = "ad";
                                                dateFieldFormat = "magni";
                                                indexFieldName = "nostrum";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("architecto", "fuga") {{
                                                dataSourceFieldName = "quam";
                                                dateFieldFormat = "ea";
                                                indexFieldName = "numquam";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("velit"),
                                            add("quasi"),
                                            add("sed"),
                                        }};
                                        lookBackPeriod = 889763L;
                                        privateChannelFilter = new String[]{{
                                            add("quae"),
                                            add("dolore"),
                                        }};
                                        publicChannelFilter = new String[]{{
                                            add("libero"),
                                            add("ut"),
                                        }};
                                        useChangeLog = false;
                                        vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                            add("quia"),
                                                            add("beatae"),
                                                            add("porro"),
                                                            add("cumque"),
                                                        }},                 new String[]{{
                                                            add("numquam"),
                                                            add("fugit"),
                                                            add("amet"),
                                                        }});;
                                    }};;
                                    templateConfiguration = new TemplateConfiguration() {{
                                        template = new java.util.HashMap<String, Object>() {{
                                            put("facilis", "minus");
                                            put("vero", "impedit");
                                            put("omnis", "et");
                                        }};
                                    }};;
                                    webCrawlerConfiguration = new WebCrawlerConfiguration(                new Urls() {{
                                                        seedUrlConfiguration = new SeedUrlConfiguration(                new String[]{{
                                                                            add("fuga"),
                                                                            add("est"),
                                                                            add("distinctio"),
                                                                            add("fugiat"),
                                                                        }}) {{
                                                            webCrawlerMode = WebCrawlerModeEnum.EVERYTHING;
                                                        }};;
                                                        siteMapsConfiguration = new SiteMapsConfiguration(                new String[]{{
                                                                            add("praesentium"),
                                                                            add("officiis"),
                                                                            add("esse"),
                                                                        }});;
                                                    }};) {{
                                        authenticationConfiguration = new AuthenticationConfiguration() {{
                                            basicAuthentication = new org.openapis.openapi.models.shared.BasicAuthenticationConfiguration[]{{
                                                add(new BasicAuthenticationConfiguration("labore", "quas", 149235L) {{
                                                    credentials = "delectus";
                                                    host = "laboriosam";
                                                    port = 796513L;
                                                }}),
                                            }};
                                        }};;
                                        crawlDepth = 330617L;
                                        maxContentSizePerPageInMegaBytes = 1494.14;
                                        maxLinksPerPage = 845238L;
                                        maxUrlsPerMinuteCrawlRate = 442864L;
                                        proxyConfiguration = new ProxyConfiguration("voluptate", 442435L) {{
                                            credentials = "et";
                                        }};;
                                        urlExclusionPatterns = new String[]{{
                                            add("voluptate"),
                                            add("hic"),
                                            add("at"),
                                            add("perferendis"),
                                        }};
                                        urlInclusionPatterns = new String[]{{
                                            add("eius"),
                                            add("aut"),
                                        }};
                                    }};;
                                    workDocsConfiguration = new WorkDocsConfiguration("consequatur") {{
                                        crawlComments = false;
                                        exclusionPatterns = new String[]{{
                                            add("accusamus"),
                                            add("repellat"),
                                            add("voluptatum"),
                                        }};
                                        fieldMappings = new org.openapis.openapi.models.shared.DataSourceToIndexFieldMapping[]{{
                                            add(new DataSourceToIndexFieldMapping("voluptates", "illo") {{
                                                dataSourceFieldName = "consequuntur";
                                                dateFieldFormat = "natus";
                                                indexFieldName = "repellendus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("aut", "provident") {{
                                                dataSourceFieldName = "facere";
                                                dateFieldFormat = "fugiat";
                                                indexFieldName = "ducimus";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("illum", "mollitia") {{
                                                dataSourceFieldName = "voluptate";
                                                dateFieldFormat = "tempore";
                                                indexFieldName = "ullam";
                                            }}),
                                            add(new DataSourceToIndexFieldMapping("ullam", "in") {{
                                                dataSourceFieldName = "ipsa";
                                                dateFieldFormat = "quos";
                                                indexFieldName = "quo";
                                            }}),
                                        }};
                                        inclusionPatterns = new String[]{{
                                            add("id"),
                                            add("eum"),
                                            add("cumque"),
                                            add("odio"),
                                        }};
                                        useChangeLog = false;
                                    }};;
                                }};;
                                customDocumentEnrichmentConfiguration = new CustomDocumentEnrichmentConfiguration() {{
                                    inlineConfigurations = new org.openapis.openapi.models.shared.InlineCustomDocumentEnrichmentConfiguration[]{{
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("minus", ConditionOperatorEnum.NOT_CONTAINS) {{
                                                conditionDocumentAttributeKey = "similique";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-11-25T19:21:08.744Z");
                                                    longValue = 409527L;
                                                    stringListValue = new String[]{{
                                                        add("illo"),
                                                        add("excepturi"),
                                                        add("harum"),
                                                        add("laborum"),
                                                    }};
                                                    stringValue = "a";
                                                }};
                                                operator = ConditionOperatorEnum.BEGINS_WITH;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "laboriosam";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-06-01T17:36:22.824Z");
                                                    longValue = 83578L;
                                                    stringListValue = new String[]{{
                                                        add("excepturi"),
                                                        add("atque"),
                                                    }};
                                                    stringValue = "dicta";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("officiis", ConditionOperatorEnum.GREATER_THAN) {{
                                                conditionDocumentAttributeKey = "magnam";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-04-06T12:16:30.166Z");
                                                    longValue = 383662L;
                                                    stringListValue = new String[]{{
                                                        add("maiores"),
                                                        add("delectus"),
                                                    }};
                                                    stringValue = "quos";
                                                }};
                                                operator = ConditionOperatorEnum.NOT_CONTAINS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "voluptate";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-01-26T07:27:29.656Z");
                                                    longValue = 997047L;
                                                    stringListValue = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    stringValue = "distinctio";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                        add(new InlineCustomDocumentEnrichmentConfiguration() {{
                                            condition = new DocumentAttributeCondition("quis", ConditionOperatorEnum.LESS_THAN_OR_EQUALS) {{
                                                conditionDocumentAttributeKey = "quaerat";
                                                conditionOnValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-05-17T18:52:45.867Z");
                                                    longValue = 469567L;
                                                    stringListValue = new String[]{{
                                                        add("numquam"),
                                                        add("mollitia"),
                                                        add("mollitia"),
                                                        add("blanditiis"),
                                                    }};
                                                    stringValue = "suscipit";
                                                }};
                                                operator = ConditionOperatorEnum.CONTAINS;
                                            }};
                                            documentContentDeletion = false;
                                            target = new DocumentAttributeTarget() {{
                                                targetDocumentAttributeKey = "corporis";
                                                targetDocumentAttributeValue = new DocumentAttributeValue() {{
                                                    dateValue = OffsetDateTime.parse("2022-03-06T11:33:05.793Z");
                                                    longValue = 419600L;
                                                    stringListValue = new String[]{{
                                                        add("nesciunt"),
                                                        add("magni"),
                                                    }};
                                                    stringValue = "animi";
                                                }};
                                                targetDocumentAttributeValueDeletion = false;
                                            }};
                                        }}),
                                    }};
                                    postExtractionHookConfiguration = new HookConfiguration("dolorum", "voluptas") {{
                                        invocationCondition = new DocumentAttributeCondition("temporibus", ConditionOperatorEnum.EXISTS) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2022-03-03T18:16:48.691Z");
                                                longValue = 419585L;
                                                stringListValue = new String[]{{
                                                    add("magni"),
                                                    add("quisquam"),
                                                    add("expedita"),
                                                }};
                                                stringValue = "in";
                                            }};;
                                        }};;
                                    }};;
                                    preExtractionHookConfiguration = new HookConfiguration("eaque", "delectus") {{
                                        invocationCondition = new DocumentAttributeCondition("blanditiis", ConditionOperatorEnum.EXISTS) {{
                                            conditionOnValue = new DocumentAttributeValue() {{
                                                dateValue = OffsetDateTime.parse("2020-07-10T01:24:32.023Z");
                                                longValue = 351495L;
                                                stringListValue = new String[]{{
                                                    add("tempore"),
                                                    add("laboriosam"),
                                                    add("earum"),
                                                    add("occaecati"),
                                                }};
                                                stringValue = "dicta";
                                            }};;
                                        }};;
                                    }};;
                                    roleArn = "quidem";
                                }};;
                                description = "omnis";
                                languageCode = "laborum";
                                name = "Randal Kunde";
                                roleArn = "dolore";
                                schedule = "aliquid";
                                vpcConfiguration = new DataSourceVpcConfiguration(                new String[]{{
                                                    add("aspernatur"),
                                                    add("quod"),
                                                    add("dolorem"),
                                                    add("neque"),
                                                }},                 new String[]{{
                                                    add("excepturi"),
                                                }});;
                            }};, UpdateDataSourceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_DATA_SOURCE) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "aut";
                xAmzDate = "ullam";
                xAmzSecurityToken = "amet";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "quibusdam";
            }};            

            UpdateDataSourceResponse res = sdk.sdk.updateDataSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExperience

Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExperienceRequest;
import org.openapis.openapi.models.operations.UpdateExperienceResponse;
import org.openapis.openapi.models.operations.UpdateExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContentSourceConfiguration;
import org.openapis.openapi.models.shared.ExperienceConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateExperienceRequest;
import org.openapis.openapi.models.shared.UserIdentityConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateExperienceRequest req = new UpdateExperienceRequest(                new UpdateExperienceRequest("voluptates", "nihil") {{
                                configuration = new ExperienceConfiguration() {{
                                    contentSourceConfiguration = new ContentSourceConfiguration() {{
                                        dataSourceIds = new String[]{{
                                            add("eligendi"),
                                            add("fuga"),
                                        }};
                                        directPutContent = false;
                                        faqIds = new String[]{{
                                            add("sit"),
                                        }};
                                    }};;
                                    userIdentityConfiguration = new UserIdentityConfiguration() {{
                                        identityAttributeName = "iure";
                                    }};;
                                }};;
                                description = "earum";
                                name = "Connie Monahan";
                                roleArn = "et";
                            }};, UpdateExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_EXPERIENCE) {{
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "est";
                xAmzCredential = "quia";
                xAmzDate = "veniam";
                xAmzSecurityToken = "est";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "cum";
            }};            

            UpdateExperienceResponse res = sdk.sdk.updateExperience(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFeaturedResultsSet

Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFeaturedResultsSetRequest;
import org.openapis.openapi.models.operations.UpdateFeaturedResultsSetResponse;
import org.openapis.openapi.models.operations.UpdateFeaturedResultsSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.FeaturedDocument;
import org.openapis.openapi.models.shared.FeaturedResultsSetStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFeaturedResultsSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFeaturedResultsSetRequest req = new UpdateFeaturedResultsSetRequest(                new UpdateFeaturedResultsSetRequest("provident", "sunt") {{
                                description = "maiores";
                                featuredDocuments = new org.openapis.openapi.models.shared.FeaturedDocument[]{{
                                    add(new FeaturedDocument() {{
                                        id = "7428ad9a-9f8b-4f82-a112-5359d98387f7";
                                    }}),
                                    add(new FeaturedDocument() {{
                                        id = "a79cd72c-d248-44da-a172-9f2ac41ef572";
                                    }}),
                                    add(new FeaturedDocument() {{
                                        id = "5f1169ac-1e41-4d8a-a3c2-3e34f2dfa4a1";
                                    }}),
                                }};
                                featuredResultsSetName = "perspiciatis";
                                queryTexts = new String[]{{
                                    add("a"),
                                    add("iure"),
                                }};
                                status = FeaturedResultsSetStatusEnum.INACTIVE;
                            }};, UpdateFeaturedResultsSetXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_FEATURED_RESULTS_SET) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "iste";
                xAmzCredential = "aspernatur";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "et";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "et";
            }};            

            UpdateFeaturedResultsSetResponse res = sdk.sdk.updateFeaturedResultsSet(req);

            if (res.updateFeaturedResultsSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIndex

Updates an existing Amazon Kendra index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIndexRequest;
import org.openapis.openapi.models.operations.UpdateIndexResponse;
import org.openapis.openapi.models.operations.UpdateIndexXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityUnitsConfiguration;
import org.openapis.openapi.models.shared.DocumentAttributeValueTypeEnum;
import org.openapis.openapi.models.shared.DocumentMetadataConfiguration;
import org.openapis.openapi.models.shared.JsonTokenTypeConfiguration;
import org.openapis.openapi.models.shared.JwtTokenTypeConfiguration;
import org.openapis.openapi.models.shared.KeyLocationEnum;
import org.openapis.openapi.models.shared.OrderEnum;
import org.openapis.openapi.models.shared.Relevance;
import org.openapis.openapi.models.shared.Search;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateIndexRequest;
import org.openapis.openapi.models.shared.UserContextPolicyEnum;
import org.openapis.openapi.models.shared.UserGroupResolutionConfiguration;
import org.openapis.openapi.models.shared.UserGroupResolutionModeEnum;
import org.openapis.openapi.models.shared.UserTokenConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIndexRequest req = new UpdateIndexRequest(                new UpdateIndexRequest("saepe") {{
                                capacityUnits = new CapacityUnitsConfiguration(121538L, 449369L);;
                                description = "architecto";
                                documentMetadataConfigurationUpdates = new org.openapis.openapi.models.shared.DocumentMetadataConfiguration[]{{
                                    add(new DocumentMetadataConfiguration("perspiciatis", DocumentAttributeValueTypeEnum.DATE_VALUE) {{
                                        name = "Sherri Mueller";
                                        relevance = new Relevance() {{
                                            duration = "nesciunt";
                                            freshness = false;
                                            importance = 902727L;
                                            rankOrder = OrderEnum.DESCENDING;
                                            valueImportanceMap = new java.util.HashMap<String, Long>() {{
                                                put("quis", 264656L);
                                                put("adipisci", 866453L);
                                                put("praesentium", 364679L);
                                                put("dolore", 253607L);
                                            }};
                                        }};
                                        search = new Search() {{
                                            displayable = false;
                                            facetable = false;
                                            searchable = false;
                                            sortable = false;
                                        }};
                                        type = DocumentAttributeValueTypeEnum.STRING_VALUE;
                                    }}),
                                }};
                                name = "Randy Collier";
                                roleArn = "laboriosam";
                                userContextPolicy = UserContextPolicyEnum.ATTRIBUTE_FILTER;
                                userGroupResolutionConfiguration = new UserGroupResolutionConfiguration(UserGroupResolutionModeEnum.AWS_SSO);;
                                userTokenConfigurations = new org.openapis.openapi.models.shared.UserTokenConfiguration[]{{
                                    add(new UserTokenConfiguration() {{
                                        jsonTokenTypeConfiguration = new JsonTokenTypeConfiguration("impedit", "architecto") {{
                                            groupAttributeField = "dolorem";
                                            userNameAttributeField = "expedita";
                                        }};
                                        jwtTokenTypeConfiguration = new JwtTokenTypeConfiguration(KeyLocationEnum.SECRET_MANAGER) {{
                                            claimRegex = "minima";
                                            groupAttributeField = "magnam";
                                            issuer = "vitae";
                                            keyLocation = KeyLocationEnum.SECRET_MANAGER;
                                            secretManagerArn = "atque";
                                            url = "quisquam";
                                            userNameAttributeField = "sunt";
                                        }};
                                    }}),
                                    add(new UserTokenConfiguration() {{
                                        jsonTokenTypeConfiguration = new JsonTokenTypeConfiguration("accusamus", "totam") {{
                                            groupAttributeField = "corporis";
                                            userNameAttributeField = "vel";
                                        }};
                                        jwtTokenTypeConfiguration = new JwtTokenTypeConfiguration(KeyLocationEnum.SECRET_MANAGER) {{
                                            claimRegex = "ipsam";
                                            groupAttributeField = "at";
                                            issuer = "culpa";
                                            keyLocation = KeyLocationEnum.URL;
                                            secretManagerArn = "laudantium";
                                            url = "dolorem";
                                            userNameAttributeField = "odit";
                                        }};
                                    }}),
                                }};
                            }};, UpdateIndexXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_INDEX) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "libero";
                xAmzCredential = "fugiat";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "et";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "eligendi";
            }};            

            UpdateIndexResponse res = sdk.sdk.updateIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQuerySuggestionsBlockList

<p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsBlockListRequest;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsBlockListResponse;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsBlockListXAmzTargetEnum;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateQuerySuggestionsBlockListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateQuerySuggestionsBlockListRequest req = new UpdateQuerySuggestionsBlockListRequest(                new UpdateQuerySuggestionsBlockListRequest("harum", "aperiam") {{
                                description = "pariatur";
                                name = "Heather Nader";
                                roleArn = "quidem";
                                sourceS3Path = new S3Path("doloribus", "sit");;
                            }};, UpdateQuerySuggestionsBlockListXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_QUERY_SUGGESTIONS_BLOCK_LIST) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "deserunt";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "alias";
            }};            

            UpdateQuerySuggestionsBlockListResponse res = sdk.sdk.updateQuerySuggestionsBlockList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQuerySuggestionsConfig

<p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsConfigRequest;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsConfigResponse;
import org.openapis.openapi.models.operations.UpdateQuerySuggestionsConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateQuerySuggestionsConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateQuerySuggestionsConfigRequest req = new UpdateQuerySuggestionsConfigRequest(                new UpdateQuerySuggestionsConfigRequest("temporibus") {{
                                includeQueriesWithoutUserInformation = false;
                                minimumNumberOfQueryingUsers = 278469L;
                                minimumQueryCount = 407468L;
                                mode = ModeEnum.ENABLED;
                                queryLogLookBackWindowInDays = 514234L;
                            }};, UpdateQuerySuggestionsConfigXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_QUERY_SUGGESTIONS_CONFIG) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "libero";
                xAmzCredential = "maiores";
                xAmzDate = "nam";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateQuerySuggestionsConfigResponse res = sdk.sdk.updateQuerySuggestionsConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateThesaurus

Updates a thesaurus for an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateThesaurusRequest;
import org.openapis.openapi.models.operations.UpdateThesaurusResponse;
import org.openapis.openapi.models.operations.UpdateThesaurusXAmzTargetEnum;
import org.openapis.openapi.models.shared.S3Path;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateThesaurusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateThesaurusRequest req = new UpdateThesaurusRequest(                new UpdateThesaurusRequest("delectus", "delectus") {{
                                description = "nemo";
                                name = "Clifford Torp";
                                roleArn = "saepe";
                                sourceS3Path = new S3Path("labore", "doloribus");;
                            }};, UpdateThesaurusXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_UPDATE_THESAURUS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "minima";
                xAmzCredential = "impedit";
                xAmzDate = "facilis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "fugiat";
            }};            

            UpdateThesaurusResponse res = sdk.sdk.updateThesaurus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
