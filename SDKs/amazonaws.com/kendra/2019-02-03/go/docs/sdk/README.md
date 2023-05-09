# SDK

## Overview

Amazon Kendra is a service for indexing large document sets.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kendra/>
### Available Operations

* [AssociateEntitiesToExperience](#associateentitiestoexperience) - Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [AssociatePersonasToEntities](#associatepersonastoentities) - Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [BatchDeleteDocument](#batchdeletedocument) - <p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>
* [BatchDeleteFeaturedResultsSet](#batchdeletefeaturedresultsset) - Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [BatchGetDocumentStatus](#batchgetdocumentstatus) - <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
* [BatchPutDocument](#batchputdocument) - <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>
* [ClearQuerySuggestions](#clearquerysuggestions) - <p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [CreateAccessControlConfiguration](#createaccesscontrolconfiguration) - <p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
* [CreateDataSource](#createdatasource) - <p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
* [CreateExperience](#createexperience) - Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [CreateFaq](#createfaq) - <p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>
* [CreateFeaturedResultsSet](#createfeaturedresultsset) - <p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
* [CreateIndex](#createindex) - <p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
* [CreateQuerySuggestionsBlockList](#createquerysuggestionsblocklist) - <p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>
* [CreateThesaurus](#createthesaurus) - <p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>
* [DeleteAccessControlConfiguration](#deleteaccesscontrolconfiguration) - Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [DeleteDataSource](#deletedatasource) - Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
* [DeleteExperience](#deleteexperience) - Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [DeleteFaq](#deletefaq) - Removes an FAQ from an index.
* [DeleteIndex](#deleteindex) - Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.
* [DeletePrincipalMapping](#deleteprincipalmapping) - <p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [DeleteQuerySuggestionsBlockList](#deletequerysuggestionsblocklist) - <p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [DeleteThesaurus](#deletethesaurus) - Deletes an existing Amazon Kendra thesaurus. 
* [DescribeAccessControlConfiguration](#describeaccesscontrolconfiguration) - Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [DescribeDataSource](#describedatasource) - Gets information about an Amazon Kendra data source connector.
* [DescribeExperience](#describeexperience) - Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [DescribeFaq](#describefaq) - Gets information about an FAQ list.
* [DescribeFeaturedResultsSet](#describefeaturedresultsset) - Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [DescribeIndex](#describeindex) - Gets information about an existing Amazon Kendra index.
* [DescribePrincipalMapping](#describeprincipalmapping) - <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [DescribeQuerySuggestionsBlockList](#describequerysuggestionsblocklist) - <p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [DescribeQuerySuggestionsConfig](#describequerysuggestionsconfig) - <p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [DescribeThesaurus](#describethesaurus) - Gets information about an existing Amazon Kendra thesaurus.
* [DisassociateEntitiesFromExperience](#disassociateentitiesfromexperience) - Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [DisassociatePersonasFromEntities](#disassociatepersonasfromentities) - Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [GetQuerySuggestions](#getquerysuggestions) - <p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [GetSnapshots](#getsnapshots) - Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
* [ListAccessControlConfigurations](#listaccesscontrolconfigurations) - Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
* [ListDataSourceSyncJobs](#listdatasourcesyncjobs) - Gets statistics about synchronizing a data source connector.
* [ListDataSources](#listdatasources) - Lists the data source connectors that you have created.
* [ListEntityPersonas](#listentitypersonas) - Lists specific permissions of users and groups with access to your Amazon Kendra experience.
* [ListExperienceEntities](#listexperienceentities) - Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [ListExperiences](#listexperiences) - Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [ListFaqs](#listfaqs) - Gets a list of FAQ lists associated with an index.
* [ListFeaturedResultsSets](#listfeaturedresultssets) - Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
* [ListGroupsOlderThanOrderingID](#listgroupsolderthanorderingid) - <p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [ListIndices](#listindices) - Lists the Amazon Kendra indexes that you created.
* [ListQuerySuggestionsBlockLists](#listquerysuggestionsblocklists) - <p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [ListTagsForResource](#listtagsforresource) - Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
* [ListThesauri](#listthesauri) - Lists the thesauri for an index.
* [PutPrincipalMapping](#putprincipalmapping) - <p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>
* [Query](#query) - <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>
* [StartDataSourceSyncJob](#startdatasourcesyncjob) - Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
* [StopDataSourceSyncJob](#stopdatasourcesyncjob) - Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
* [SubmitFeedback](#submitfeedback) - <p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [TagResource](#tagresource) - Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
* [UntagResource](#untagresource) - Removes a tag from an index, FAQ, or a data source.
* [UpdateAccessControlConfiguration](#updateaccesscontrolconfiguration) - <p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
* [UpdateDataSource](#updatedatasource) - Updates an existing Amazon Kendra data source connector.
* [UpdateExperience](#updateexperience) - Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
* [UpdateFeaturedResultsSet](#updatefeaturedresultsset) - Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.
* [UpdateIndex](#updateindex) - Updates an existing Amazon Kendra index.
* [UpdateQuerySuggestionsBlockList](#updatequerysuggestionsblocklist) - <p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [UpdateQuerySuggestionsConfig](#updatequerysuggestionsconfig) - <p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
* [UpdateThesaurus](#updatethesaurus) - Updates a thesaurus for an index.

## AssociateEntitiesToExperience

Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateEntitiesToExperience(ctx, operations.AssociateEntitiesToExperienceRequest{
        AssociateEntitiesToExperienceRequest: shared.AssociateEntitiesToExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "dolorum",
                    EntityType: shared.EntityTypeEnumUser,
                },
                shared.EntityConfiguration{
                    EntityID: "nam",
                    EntityType: shared.EntityTypeEnumGroup,
                },
                shared.EntityConfiguration{
                    EntityID: "occaecati",
                    EntityType: shared.EntityTypeEnumUser,
                },
                shared.EntityConfiguration{
                    EntityID: "deleniti",
                    EntityType: shared.EntityTypeEnumGroup,
                },
            },
            ID: "c816742c-b739-4205-9293-96fea7596eb1",
            IndexID: "ipsa",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.AssociateEntitiesToExperienceXAmzTargetEnumAwsKendraFrontendServiceAssociateEntitiesToExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntitiesToExperienceResponse != nil {
        // handle response
    }
}
```

## AssociatePersonasToEntities

Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociatePersonasToEntities(ctx, operations.AssociatePersonasToEntitiesRequest{
        AssociatePersonasToEntitiesRequest: shared.AssociatePersonasToEntitiesRequest{
            ID: "2c595590-7aff-41a3-a2fa-9467739251aa",
            IndexID: "enim",
            Personas: []shared.EntityPersonaConfiguration{
                shared.EntityPersonaConfiguration{
                    EntityID: "quo",
                    Persona: shared.PersonaEnumOwner,
                },
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.AssociatePersonasToEntitiesXAmzTargetEnumAwsKendraFrontendServiceAssociatePersonasToEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociatePersonasToEntitiesResponse != nil {
        // handle response
    }
}
```

## BatchDeleteDocument

<p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteDocument(ctx, operations.BatchDeleteDocumentRequest{
        BatchDeleteDocumentRequest: shared.BatchDeleteDocumentRequest{
            DataSourceSyncJobMetricTarget: &shared.DataSourceSyncJobMetricTarget{
                DataSourceID: "temporibus",
                DataSourceSyncJobID: sdk.String("laborum"),
            },
            DocumentIDList: []string{
                "reiciendis",
            },
            IndexID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.BatchDeleteDocumentXAmzTargetEnumAwsKendraFrontendServiceBatchDeleteDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDocumentResponse != nil {
        // handle response
    }
}
```

## BatchDeleteFeaturedResultsSet

Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteFeaturedResultsSet(ctx, operations.BatchDeleteFeaturedResultsSetRequest{
        BatchDeleteFeaturedResultsSetRequest: shared.BatchDeleteFeaturedResultsSetRequest{
            FeaturedResultsSetIds: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
            IndexID: "ut",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.BatchDeleteFeaturedResultsSetXAmzTargetEnumAwsKendraFrontendServiceBatchDeleteFeaturedResultsSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteFeaturedResultsSetResponse != nil {
        // handle response
    }
}
```

## BatchGetDocumentStatus

<p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetDocumentStatus(ctx, operations.BatchGetDocumentStatusRequest{
        BatchGetDocumentStatusRequest: shared.BatchGetDocumentStatusRequest{
            DocumentInfoList: []shared.DocumentInfo{
                shared.DocumentInfo{
                    Attributes: []shared.DocumentAttribute{
                        shared.DocumentAttribute{
                            Key: "commodi",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-10-22T18:12:12.288Z"),
                                LongValue: sdk.Int64(216822),
                                StringListValue: []string{
                                    "molestias",
                                    "excepturi",
                                    "pariatur",
                                },
                                StringValue: sdk.String("modi"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "praesentium",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-03-02T19:00:49.599Z"),
                                LongValue: sdk.Int64(93940),
                                StringListValue: []string{
                                    "sint",
                                    "veritatis",
                                    "itaque",
                                    "incidunt",
                                },
                                StringValue: sdk.String("enim"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "consequatur",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
                                LongValue: sdk.Int64(131797),
                                StringListValue: []string{
                                    "distinctio",
                                    "quibusdam",
                                    "labore",
                                },
                                StringValue: sdk.String("modi"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "qui",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-05-31T22:08:47.731Z"),
                                LongValue: sdk.Int64(552822),
                                StringListValue: []string{
                                    "magni",
                                },
                                StringValue: sdk.String("assumenda"),
                            },
                        },
                    },
                    DocumentID: "ipsam",
                },
                shared.DocumentInfo{
                    Attributes: []shared.DocumentAttribute{
                        shared.DocumentAttribute{
                            Key: "fugit",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
                                LongValue: sdk.Int64(270008),
                                StringListValue: []string{
                                    "tempore",
                                    "labore",
                                    "delectus",
                                },
                                StringValue: sdk.String("eum"),
                            },
                        },
                    },
                    DocumentID: "non",
                },
            },
            IndexID: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.BatchGetDocumentStatusXAmzTargetEnumAwsKendraFrontendServiceBatchGetDocumentStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDocumentStatusResponse != nil {
        // handle response
    }
}
```

## BatchPutDocument

<p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchPutDocument(ctx, operations.BatchPutDocumentRequest{
        BatchPutDocumentRequest: shared.BatchPutDocumentRequest{
            CustomDocumentEnrichmentConfiguration: &shared.CustomDocumentEnrichmentConfiguration{
                InlineConfigurations: []shared.InlineCustomDocumentEnrichmentConfiguration{
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "a",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
                                LongValue: sdk.Int64(449198),
                                StringListValue: []string{
                                    "maiores",
                                    "rerum",
                                    "dicta",
                                    "magnam",
                                },
                                StringValue: sdk.String("cumque"),
                            },
                            Operator: shared.ConditionOperatorEnumExists,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("ea"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-04-29T11:09:12.937Z"),
                                LongValue: sdk.Int64(881104),
                                StringListValue: []string{
                                    "occaecati",
                                },
                                StringValue: sdk.String("enim"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "accusamus",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2020-12-03T16:16:10.882Z"),
                                LongValue: sdk.Int64(588465),
                                StringListValue: []string{
                                    "id",
                                    "blanditiis",
                                    "deleniti",
                                },
                                StringValue: sdk.String("sapiente"),
                            },
                            Operator: shared.ConditionOperatorEnumLessThan,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("deserunt"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-07-30T07:01:46.758Z"),
                                LongValue: sdk.Int64(618809),
                                StringListValue: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                                StringValue: sdk.String("magnam"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "distinctio",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-06-04T18:23:50.695Z"),
                                LongValue: sdk.Int64(290077),
                                StringListValue: []string{
                                    "natus",
                                    "nobis",
                                },
                                StringValue: sdk.String("eum"),
                            },
                            Operator: shared.ConditionOperatorEnumNotExists,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("aspernatur"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
                                LongValue: sdk.Int64(92373),
                                StringListValue: []string{
                                    "ullam",
                                    "provident",
                                    "quos",
                                },
                                StringValue: sdk.String("sint"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "accusantium",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-01-23T15:47:23.464Z"),
                                LongValue: sdk.Int64(652103),
                                StringListValue: []string{
                                    "eum",
                                    "dolor",
                                },
                                StringValue: sdk.String("necessitatibus"),
                            },
                            Operator: shared.ConditionOperatorEnumGreaterThanOrEquals,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("nemo"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-07-25T21:49:23.340Z"),
                                LongValue: sdk.Int64(984043),
                                StringListValue: []string{
                                    "eius",
                                    "maxime",
                                    "deleniti",
                                    "facilis",
                                },
                                StringValue: sdk.String("in"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                },
                PostExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "architecto",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2022-01-30T09:19:56.236Z"),
                            LongValue: sdk.Int64(352312),
                            StringListValue: []string{
                                "nihil",
                                "repellat",
                                "quibusdam",
                            },
                            StringValue: sdk.String("sed"),
                        },
                        Operator: shared.ConditionOperatorEnumNotExists,
                    },
                    LambdaArn: "pariatur",
                    S3Bucket: "accusantium",
                },
                PreExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "consequuntur",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2021-10-08T15:23:46.576Z"),
                            LongValue: sdk.Int64(166847),
                            StringListValue: []string{
                                "quo",
                            },
                            StringValue: sdk.String("illum"),
                        },
                        Operator: shared.ConditionOperatorEnumNotExists,
                    },
                    LambdaArn: "maxime",
                    S3Bucket: "ea",
                },
                RoleArn: sdk.String("excepturi"),
            },
            Documents: []shared.Document{
                shared.Document{
                    AccessControlConfigurationID: sdk.String("ea"),
                    AccessControlList: []shared.Principal{
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumAllow,
                            DataSourceID: sdk.String("maiores"),
                            Name: "Clyde Kling",
                            Type: shared.PrincipalTypeEnumUser,
                        },
                    },
                    Attributes: []shared.DocumentAttribute{
                        shared.DocumentAttribute{
                            Key: "nemo",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-12-13T19:01:00.083Z"),
                                LongValue: sdk.Int64(855804),
                                StringListValue: []string{
                                    "aut",
                                },
                                StringValue: sdk.String("cumque"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "corporis",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2020-10-23T15:50:52.666Z"),
                                LongValue: sdk.Int64(749999),
                                StringListValue: []string{
                                    "quis",
                                },
                                StringValue: sdk.String("totam"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "dignissimos",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
                                LongValue: sdk.Int64(199996),
                                StringListValue: []string{
                                    "perferendis",
                                },
                                StringValue: sdk.String("dolores"),
                            },
                        },
                        shared.DocumentAttribute{
                            Key: "minus",
                            Value: shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
                                LongValue: sdk.Int64(874573),
                                StringListValue: []string{
                                    "hic",
                                    "recusandae",
                                },
                                StringValue: sdk.String("omnis"),
                            },
                        },
                    },
                    Blob: sdk.String("facilis"),
                    ContentType: shared.ContentTypeEnumXslt.ToPointer(),
                    HierarchicalAccessControlList: []shared.HierarchicalPrincipal{
                        shared.HierarchicalPrincipal{
                            PrincipalList: []shared.Principal{
                                shared.Principal{
                                    Access: shared.ReadAccessTypeEnumAllow,
                                    DataSourceID: sdk.String("blanditiis"),
                                    Name: "Gary Mayert",
                                    Type: shared.PrincipalTypeEnumGroup,
                                },
                                shared.Principal{
                                    Access: shared.ReadAccessTypeEnumDeny,
                                    DataSourceID: sdk.String("modi"),
                                    Name: "Omar Leuschke",
                                    Type: shared.PrincipalTypeEnumGroup,
                                },
                                shared.Principal{
                                    Access: shared.ReadAccessTypeEnumDeny,
                                    DataSourceID: sdk.String("delectus"),
                                    Name: "Billie Jacobi",
                                    Type: shared.PrincipalTypeEnumUser,
                                },
                                shared.Principal{
                                    Access: shared.ReadAccessTypeEnumAllow,
                                    DataSourceID: sdk.String("ipsum"),
                                    Name: "Marshall Ritchie",
                                    Type: shared.PrincipalTypeEnumGroup,
                                },
                            },
                        },
                    },
                    ID: "3a410067-4ebf-4692-80d1-ba77a89ebf73",
                    S3Path: &shared.S3Path{
                        Bucket: "voluptate",
                        Key: "id",
                    },
                    Title: sdk.String("Dr."),
                },
            },
            IndexID: "eius",
            RoleArn: sdk.String("aspernatur"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.BatchPutDocumentXAmzTargetEnumAwsKendraFrontendServiceBatchPutDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutDocumentResponse != nil {
        // handle response
    }
}
```

## ClearQuerySuggestions

<p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ClearQuerySuggestions(ctx, operations.ClearQuerySuggestionsRequest{
        ClearQuerySuggestionsRequest: shared.ClearQuerySuggestionsRequest{
            IndexID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.ClearQuerySuggestionsXAmzTargetEnumAwsKendraFrontendServiceClearQuerySuggestions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAccessControlConfiguration

<p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAccessControlConfiguration(ctx, operations.CreateAccessControlConfigurationRequest{
        CreateAccessControlConfigurationRequest: shared.CreateAccessControlConfigurationRequest{
            AccessControlList: []shared.Principal{
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumAllow,
                    DataSourceID: sdk.String("vel"),
                    Name: "Erick Denesik",
                    Type: shared.PrincipalTypeEnumUser,
                },
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumDeny,
                    DataSourceID: sdk.String("iusto"),
                    Name: "Rosalie White",
                    Type: shared.PrincipalTypeEnumGroup,
                },
            },
            ClientToken: sdk.String("numquam"),
            Description: sdk.String("enim"),
            HierarchicalAccessControlList: []shared.HierarchicalPrincipal{
                shared.HierarchicalPrincipal{
                    PrincipalList: []shared.Principal{
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("nihil"),
                            Name: "Mamie Durgan",
                            Type: shared.PrincipalTypeEnumGroup,
                        },
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumAllow,
                            DataSourceID: sdk.String("deserunt"),
                            Name: "Tracy Gottlieb",
                            Type: shared.PrincipalTypeEnumGroup,
                        },
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("soluta"),
                            Name: "Kayla Larson",
                            Type: shared.PrincipalTypeEnumUser,
                        },
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("facilis"),
                            Name: "Constance Mann",
                            Type: shared.PrincipalTypeEnumUser,
                        },
                    },
                },
            },
            IndexID: "fugit",
            Name: "Courtney Cassin",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateAccessControlConfigurationXAmzTargetEnumAwsKendraFrontendServiceCreateAccessControlConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessControlConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateDataSource

<p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDataSource(ctx, operations.CreateDataSourceRequest{
        CreateDataSourceRequest: shared.CreateDataSourceRequest{
            ClientToken: sdk.String("ipsum"),
            Configuration: &shared.DataSourceConfiguration{
                AlfrescoConfiguration: &shared.AlfrescoConfiguration{
                    BlogFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "nobis",
                            DateFieldFormat: sdk.String("quos"),
                            IndexFieldName: "tempore",
                        },
                    },
                    CrawlComments: sdk.Bool(false),
                    CrawlSystemFolders: sdk.Bool(false),
                    DocumentLibraryFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "aperiam",
                            DateFieldFormat: sdk.String("delectus"),
                            IndexFieldName: "dolorem",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "dolore",
                            DateFieldFormat: sdk.String("labore"),
                            IndexFieldName: "adipisci",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "dolorum",
                            DateFieldFormat: sdk.String("architecto"),
                            IndexFieldName: "quae",
                        },
                    },
                    EntityFilter: []shared.AlfrescoEntityEnum{
                        shared.AlfrescoEntityEnumBlog,
                    },
                    ExclusionPatterns: []string{
                        "consequatur",
                        "est",
                        "repellendus",
                        "porro",
                    },
                    InclusionPatterns: []string{
                        "ut",
                        "facilis",
                        "cupiditate",
                        "qui",
                    },
                    SecretArn: "quae",
                    SiteID: "laudantium",
                    SiteURL: "odio",
                    SslCertificateS3Path: shared.S3Path{
                        Bucket: "occaecati",
                        Key: "voluptatibus",
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "vero",
                            "omnis",
                            "quis",
                            "ipsum",
                        },
                        SubnetIds: []string{
                            "voluptate",
                            "consectetur",
                            "vero",
                            "tenetur",
                        },
                    },
                    WikiFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "hic",
                            DateFieldFormat: sdk.String("distinctio"),
                            IndexFieldName: "quod",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "odio",
                            DateFieldFormat: sdk.String("similique"),
                            IndexFieldName: "facilis",
                        },
                    },
                },
                BoxConfiguration: &shared.BoxConfiguration{
                    CommentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ducimus",
                            DateFieldFormat: sdk.String("dolore"),
                            IndexFieldName: "quibusdam",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "illum",
                            DateFieldFormat: sdk.String("sequi"),
                            IndexFieldName: "natus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "impedit",
                            DateFieldFormat: sdk.String("aut"),
                            IndexFieldName: "voluptatibus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "exercitationem",
                            DateFieldFormat: sdk.String("nulla"),
                            IndexFieldName: "fugit",
                        },
                    },
                    CrawlComments: sdk.Bool(false),
                    CrawlTasks: sdk.Bool(false),
                    CrawlWebLinks: sdk.Bool(false),
                    EnterpriseID: "porro",
                    ExclusionPatterns: []string{
                        "doloribus",
                        "iusto",
                        "eligendi",
                        "ducimus",
                    },
                    FileFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "officia",
                            DateFieldFormat: sdk.String("tempora"),
                            IndexFieldName: "ipsam",
                        },
                    },
                    InclusionPatterns: []string{
                        "aspernatur",
                        "vel",
                    },
                    SecretArn: "possimus",
                    TaskFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ratione",
                            DateFieldFormat: sdk.String("ex"),
                            IndexFieldName: "laudantium",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "dicta",
                            DateFieldFormat: sdk.String("dolor"),
                            IndexFieldName: "maiores",
                        },
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "ex",
                        },
                        SubnetIds: []string{
                            "excepturi",
                            "voluptatibus",
                            "nostrum",
                            "sapiente",
                        },
                    },
                    WebLinkFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "saepe",
                            DateFieldFormat: sdk.String("ea"),
                            IndexFieldName: "impedit",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "corporis",
                            DateFieldFormat: sdk.String("veniam"),
                            IndexFieldName: "aliquid",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "inventore",
                            DateFieldFormat: sdk.String("magnam"),
                            IndexFieldName: "ea",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quo",
                            DateFieldFormat: sdk.String("consectetur"),
                            IndexFieldName: "recusandae",
                        },
                    },
                },
                ConfluenceConfiguration: &shared.ConfluenceConfiguration{
                    AttachmentConfiguration: &shared.ConfluenceAttachmentConfiguration{
                        AttachmentFieldMappings: []shared.ConfluenceAttachmentToIndexFieldMapping{
                            shared.ConfluenceAttachmentToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceAttachmentFieldNameEnumDisplayURL.ToPointer(),
                                DateFieldFormat: sdk.String("eaque"),
                                IndexFieldName: sdk.String("a"),
                            },
                        },
                        CrawlAttachments: sdk.Bool(false),
                    },
                    AuthenticationType: shared.ConfluenceAuthenticationTypeEnumPat.ToPointer(),
                    BlogConfiguration: &shared.ConfluenceBlogConfiguration{
                        BlogFieldMappings: []shared.ConfluenceBlogToIndexFieldMapping{
                            shared.ConfluenceBlogToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceBlogFieldNameEnumAuthor.ToPointer(),
                                DateFieldFormat: sdk.String("deleniti"),
                                IndexFieldName: sdk.String("impedit"),
                            },
                        },
                    },
                    ExclusionPatterns: []string{
                        "fugit",
                        "accusamus",
                    },
                    InclusionPatterns: []string{
                        "non",
                    },
                    PageConfiguration: &shared.ConfluencePageConfiguration{
                        PageFieldMappings: []shared.ConfluencePageToIndexFieldMapping{
                            shared.ConfluencePageToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluencePageFieldNameEnumSpaceKey.ToPointer(),
                                DateFieldFormat: sdk.String("laborum"),
                                IndexFieldName: sdk.String("placeat"),
                            },
                        },
                    },
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("velit"),
                        Host: "eum",
                        Port: 420539,
                    },
                    SecretArn: "nobis",
                    ServerURL: "quas",
                    SpaceConfiguration: &shared.ConfluenceSpaceConfiguration{
                        CrawlArchivedSpaces: sdk.Bool(false),
                        CrawlPersonalSpaces: sdk.Bool(false),
                        ExcludeSpaces: []string{
                            "nulla",
                            "voluptas",
                            "libero",
                            "quasi",
                        },
                        IncludeSpaces: []string{
                            "numquam",
                            "explicabo",
                        },
                        SpaceFieldMappings: []shared.ConfluenceSpaceToIndexFieldMapping{
                            shared.ConfluenceSpaceToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceSpaceFieldNameEnumDisplayURL.ToPointer(),
                                DateFieldFormat: sdk.String("molestiae"),
                                IndexFieldName: sdk.String("magnam"),
                            },
                            shared.ConfluenceSpaceToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceSpaceFieldNameEnumItemType.ToPointer(),
                                DateFieldFormat: sdk.String("eius"),
                                IndexFieldName: sdk.String("esse"),
                            },
                            shared.ConfluenceSpaceToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceSpaceFieldNameEnumItemType.ToPointer(),
                                DateFieldFormat: sdk.String("rem"),
                                IndexFieldName: sdk.String("fuga"),
                            },
                        },
                    },
                    Version: shared.ConfluenceVersionEnumCloud,
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "fugiat",
                            "ut",
                            "eum",
                        },
                        SubnetIds: []string{
                            "assumenda",
                            "eos",
                        },
                    },
                },
                DatabaseConfiguration: &shared.DatabaseConfiguration{
                    ACLConfiguration: &shared.ACLConfiguration{
                        AllowedGroupsColumnName: "praesentium",
                    },
                    ColumnConfiguration: shared.ColumnConfiguration{
                        ChangeDetectingColumns: []string{
                            "veritatis",
                            "ipsa",
                            "id",
                            "quidem",
                        },
                        DocumentDataColumnName: "neque",
                        DocumentIDColumnName: "quo",
                        DocumentTitleColumnName: sdk.String("illum"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "fuga",
                                DateFieldFormat: sdk.String("eius"),
                                IndexFieldName: "eos",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "voluptas",
                                DateFieldFormat: sdk.String("ab"),
                                IndexFieldName: "cupiditate",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "consequatur",
                                DateFieldFormat: sdk.String("tempora"),
                                IndexFieldName: "debitis",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "ipsam",
                                DateFieldFormat: sdk.String("aspernatur"),
                                IndexFieldName: "sequi",
                            },
                        },
                    },
                    ConnectionConfiguration: shared.ConnectionConfiguration{
                        DatabaseHost: "quo",
                        DatabaseName: "esse",
                        DatabasePort: 925164,
                        SecretArn: "aperiam",
                        TableName: "distinctio",
                    },
                    DatabaseEngineType: shared.DatabaseEngineTypeEnumRdsPostgresql,
                    SQLConfiguration: &shared.SQLConfiguration{
                        QueryIdentifiersEnclosingOption: shared.QueryIdentifiersEnclosingOptionEnumDoubleQuotes.ToPointer(),
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "nihil",
                        },
                        SubnetIds: []string{
                            "accusamus",
                            "aliquam",
                            "odio",
                        },
                    },
                },
                FsxConfiguration: &shared.FsxConfiguration{
                    ExclusionPatterns: []string{
                        "commodi",
                        "sapiente",
                        "dolores",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "molestiae",
                            DateFieldFormat: sdk.String("accusantium"),
                            IndexFieldName: "porro",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "eum",
                            DateFieldFormat: sdk.String("quas"),
                            IndexFieldName: "praesentium",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "consequuntur",
                            DateFieldFormat: sdk.String("deleniti"),
                            IndexFieldName: "fugit",
                        },
                    },
                    FileSystemID: "fuga",
                    FileSystemType: shared.FsxFileSystemTypeEnumWindows,
                    InclusionPatterns: []string{
                        "incidunt",
                        "atque",
                        "explicabo",
                    },
                    SecretArn: sdk.String("minima"),
                    VpcConfiguration: shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "fugit",
                            "sapiente",
                        },
                        SubnetIds: []string{
                            "ratione",
                        },
                    },
                },
                GitHubConfiguration: &shared.GitHubConfiguration{
                    ExclusionFileNamePatterns: []string{
                        "saepe",
                    },
                    ExclusionFileTypePatterns: []string{
                        "atque",
                        "et",
                        "esse",
                    },
                    ExclusionFolderNamePatterns: []string{
                        "accusamus",
                        "veritatis",
                        "esse",
                        "quod",
                    },
                    GitHubCommitConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "vero",
                            DateFieldFormat: sdk.String("aliquid"),
                            IndexFieldName: "quasi",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "saepe",
                            DateFieldFormat: sdk.String("vel"),
                            IndexFieldName: "harum",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "molestiae",
                            DateFieldFormat: sdk.String("rerum"),
                            IndexFieldName: "occaecati",
                        },
                    },
                    GitHubDocumentCrawlProperties: &shared.GitHubDocumentCrawlProperties{
                        CrawlIssue: sdk.Bool(false),
                        CrawlIssueComment: sdk.Bool(false),
                        CrawlIssueCommentAttachment: sdk.Bool(false),
                        CrawlPullRequest: sdk.Bool(false),
                        CrawlPullRequestComment: sdk.Bool(false),
                        CrawlPullRequestCommentAttachment: sdk.Bool(false),
                        CrawlRepositoryDocuments: sdk.Bool(false),
                    },
                    GitHubIssueAttachmentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "distinctio",
                            DateFieldFormat: sdk.String("eligendi"),
                            IndexFieldName: "sit",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "culpa",
                            DateFieldFormat: sdk.String("tempore"),
                            IndexFieldName: "adipisci",
                        },
                    },
                    GitHubIssueCommentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "consequuntur",
                            DateFieldFormat: sdk.String("consequatur"),
                            IndexFieldName: "minus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quaerat",
                            DateFieldFormat: sdk.String("sapiente"),
                            IndexFieldName: "consectetur",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "esse",
                            DateFieldFormat: sdk.String("blanditiis"),
                            IndexFieldName: "provident",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "a",
                            DateFieldFormat: sdk.String("nulla"),
                            IndexFieldName: "quas",
                        },
                    },
                    GitHubIssueDocumentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quasi",
                            DateFieldFormat: sdk.String("a"),
                            IndexFieldName: "error",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sint",
                            DateFieldFormat: sdk.String("pariatur"),
                            IndexFieldName: "possimus",
                        },
                    },
                    GitHubPullRequestCommentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "eveniet",
                            DateFieldFormat: sdk.String("asperiores"),
                            IndexFieldName: "facere",
                        },
                    },
                    GitHubPullRequestDocumentAttachmentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "consequuntur",
                            DateFieldFormat: sdk.String("quasi"),
                            IndexFieldName: "similique",
                        },
                    },
                    GitHubPullRequestDocumentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "aliquid",
                            DateFieldFormat: sdk.String("tenetur"),
                            IndexFieldName: "quae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "earum",
                            DateFieldFormat: sdk.String("vel"),
                            IndexFieldName: "in",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "eius",
                            DateFieldFormat: sdk.String("libero"),
                            IndexFieldName: "illum",
                        },
                    },
                    GitHubRepositoryConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "accusantium",
                            DateFieldFormat: sdk.String("aliquam"),
                            IndexFieldName: "sapiente",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "dicta",
                            DateFieldFormat: sdk.String("ullam"),
                            IndexFieldName: "reprehenderit",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ullam",
                            DateFieldFormat: sdk.String("nisi"),
                            IndexFieldName: "aut",
                        },
                    },
                    InclusionFileNamePatterns: []string{
                        "qui",
                        "quibusdam",
                        "ex",
                    },
                    InclusionFileTypePatterns: []string{
                        "itaque",
                        "dolorum",
                        "architecto",
                    },
                    InclusionFolderNamePatterns: []string{
                        "tenetur",
                        "quasi",
                        "at",
                    },
                    OnPremiseConfiguration: &shared.OnPremiseConfiguration{
                        HostURL: "et",
                        OrganizationName: "voluptate",
                        SslCertificateS3Path: shared.S3Path{
                            Bucket: "ipsa",
                            Key: "minima",
                        },
                    },
                    RepositoryFilter: []string{
                        "consectetur",
                    },
                    SaaSConfiguration: &shared.SaaSConfiguration{
                        HostURL: "adipisci",
                        OrganizationName: "iste",
                    },
                    SecretArn: "temporibus",
                    Type: shared.TypeEnumSaas.ToPointer(),
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "aut",
                            "laudantium",
                            "eum",
                        },
                        SubnetIds: []string{
                            "ab",
                            "corrupti",
                            "non",
                        },
                    },
                },
                GoogleDriveConfiguration: &shared.GoogleDriveConfiguration{
                    ExcludeMimeTypes: []string{
                        "dolor",
                    },
                    ExcludeSharedDrives: []string{
                        "numquam",
                        "impedit",
                        "explicabo",
                    },
                    ExcludeUserAccounts: []string{
                        "aut",
                        "dignissimos",
                    },
                    ExclusionPatterns: []string{
                        "maiores",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "velit",
                            DateFieldFormat: sdk.String("voluptatibus"),
                            IndexFieldName: "voluptas",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "asperiores",
                            DateFieldFormat: sdk.String("aperiam"),
                            IndexFieldName: "ea",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quaerat",
                            DateFieldFormat: sdk.String("consequuntur"),
                            IndexFieldName: "repellendus",
                        },
                    },
                    InclusionPatterns: []string{
                        "maxime",
                        "dignissimos",
                        "officia",
                    },
                    SecretArn: "asperiores",
                },
                JiraConfiguration: &shared.JiraConfiguration{
                    AttachmentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quae",
                            DateFieldFormat: sdk.String("quaerat"),
                            IndexFieldName: "porro",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quod",
                            DateFieldFormat: sdk.String("labore"),
                            IndexFieldName: "ab",
                        },
                    },
                    CommentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "fuga",
                            DateFieldFormat: sdk.String("id"),
                            IndexFieldName: "suscipit",
                        },
                    },
                    ExclusionPatterns: []string{
                        "culpa",
                    },
                    InclusionPatterns: []string{
                        "recusandae",
                        "totam",
                        "fugiat",
                    },
                    IssueFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ducimus",
                            DateFieldFormat: sdk.String("quos"),
                            IndexFieldName: "vel",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "labore",
                            DateFieldFormat: sdk.String("possimus"),
                            IndexFieldName: "facilis",
                        },
                    },
                    IssueSubEntityFilter: []shared.IssueSubEntityEnum{
                        shared.IssueSubEntityEnumAttachments,
                        shared.IssueSubEntityEnumAttachments,
                        shared.IssueSubEntityEnumAttachments,
                    },
                    IssueType: []string{
                        "assumenda",
                        "nemo",
                        "recusandae",
                        "aliquid",
                    },
                    JiraAccountURL: "aperiam",
                    Project: []string{
                        "consectetur",
                        "in",
                        "exercitationem",
                    },
                    ProjectFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "facere",
                            DateFieldFormat: sdk.String("numquam"),
                            IndexFieldName: "doloribus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "suscipit",
                            DateFieldFormat: sdk.String("reiciendis"),
                            IndexFieldName: "quidem",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "saepe",
                            DateFieldFormat: sdk.String("necessitatibus"),
                            IndexFieldName: "dolore",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sunt",
                            DateFieldFormat: sdk.String("asperiores"),
                            IndexFieldName: "adipisci",
                        },
                    },
                    SecretArn: "non",
                    Status: []string{
                        "beatae",
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "a",
                            "debitis",
                        },
                        SubnetIds: []string{
                            "corporis",
                        },
                    },
                    WorkLogFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "laboriosam",
                            DateFieldFormat: sdk.String("ipsa"),
                            IndexFieldName: "voluptates",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "libero",
                            DateFieldFormat: sdk.String("vitae"),
                            IndexFieldName: "accusamus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "similique",
                            DateFieldFormat: sdk.String("tempora"),
                            IndexFieldName: "aspernatur",
                        },
                    },
                },
                OneDriveConfiguration: &shared.OneDriveConfiguration{
                    DisableLocalGroups: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "voluptas",
                        "voluptas",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "nobis",
                            DateFieldFormat: sdk.String("dolorum"),
                            IndexFieldName: "adipisci",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "minus",
                            DateFieldFormat: sdk.String("dolores"),
                            IndexFieldName: "blanditiis",
                        },
                    },
                    InclusionPatterns: []string{
                        "dolore",
                        "aliquam",
                    },
                    OneDriveUsers: shared.OneDriveUsers{
                        OneDriveUserList: []string{
                            "temporibus",
                            "ullam",
                            "adipisci",
                            "cum",
                        },
                        OneDriveUserS3Path: &shared.S3Path{
                            Bucket: "blanditiis",
                            Key: "quas",
                        },
                    },
                    SecretArn: "hic",
                    TenantDomain: "nesciunt",
                },
                QuipConfiguration: &shared.QuipConfiguration{
                    AttachmentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "corrupti",
                            DateFieldFormat: sdk.String("pariatur"),
                            IndexFieldName: "totam",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "hic",
                            DateFieldFormat: sdk.String("exercitationem"),
                            IndexFieldName: "nobis",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sit",
                            DateFieldFormat: sdk.String("rerum"),
                            IndexFieldName: "sed",
                        },
                    },
                    CrawlAttachments: sdk.Bool(false),
                    CrawlChatRooms: sdk.Bool(false),
                    CrawlFileComments: sdk.Bool(false),
                    Domain: "reiciendis",
                    ExclusionPatterns: []string{
                        "asperiores",
                    },
                    FolderIds: []string{
                        "voluptate",
                        "expedita",
                        "ab",
                    },
                    InclusionPatterns: []string{
                        "dolore",
                        "laborum",
                        "sed",
                    },
                    MessageFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "commodi",
                            DateFieldFormat: sdk.String("quidem"),
                            IndexFieldName: "explicabo",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "voluptas",
                            DateFieldFormat: sdk.String("unde"),
                            IndexFieldName: "architecto",
                        },
                    },
                    SecretArn: "suscipit",
                    ThreadFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "debitis",
                            DateFieldFormat: sdk.String("illo"),
                            IndexFieldName: "reiciendis",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "perferendis",
                            DateFieldFormat: sdk.String("corrupti"),
                            IndexFieldName: "maiores",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "incidunt",
                            DateFieldFormat: sdk.String("sed"),
                            IndexFieldName: "provident",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "eius",
                            DateFieldFormat: sdk.String("necessitatibus"),
                            IndexFieldName: "ipsum",
                        },
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "occaecati",
                            "quos",
                        },
                        SubnetIds: []string{
                            "tempora",
                            "tempora",
                            "voluptate",
                            "reiciendis",
                        },
                    },
                },
                S3Configuration: &shared.S3DataSourceConfiguration{
                    AccessControlListConfiguration: &shared.AccessControlListConfiguration{
                        KeyPath: sdk.String("ex"),
                    },
                    BucketName: "sit",
                    DocumentsMetadataConfiguration: &shared.DocumentsMetadataConfiguration{
                        S3Prefix: sdk.String("non"),
                    },
                    ExclusionPatterns: []string{
                        "praesentium",
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                    InclusionPatterns: []string{
                        "debitis",
                        "rem",
                    },
                    InclusionPrefixes: []string{
                        "nobis",
                    },
                },
                SalesforceConfiguration: &shared.SalesforceConfiguration{
                    ChatterFeedConfiguration: &shared.SalesforceChatterFeedConfiguration{
                        DocumentDataFieldName: "error",
                        DocumentTitleFieldName: sdk.String("veniam"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "recusandae",
                                DateFieldFormat: sdk.String("reiciendis"),
                                IndexFieldName: "nulla",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "magni",
                                DateFieldFormat: sdk.String("aperiam"),
                                IndexFieldName: "saepe",
                            },
                        },
                        IncludeFilterTypes: []shared.SalesforceChatterFeedIncludeFilterTypeEnum{
                            shared.SalesforceChatterFeedIncludeFilterTypeEnumActiveUser,
                            shared.SalesforceChatterFeedIncludeFilterTypeEnumActiveUser,
                        },
                    },
                    CrawlAttachments: sdk.Bool(false),
                    ExcludeAttachmentFilePatterns: []string{
                        "beatae",
                        "laudantium",
                        "exercitationem",
                        "praesentium",
                    },
                    IncludeAttachmentFilePatterns: []string{
                        "laboriosam",
                        "dolorum",
                        "voluptatum",
                    },
                    KnowledgeArticleConfiguration: &shared.SalesforceKnowledgeArticleConfiguration{
                        CustomKnowledgeArticleTypeConfigurations: []shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                            shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                                DocumentDataFieldName: "hic",
                                DocumentTitleFieldName: sdk.String("expedita"),
                                FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "neque",
                                        DateFieldFormat: sdk.String("dolorum"),
                                        IndexFieldName: "nostrum",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "officia",
                                        DateFieldFormat: sdk.String("dolorum"),
                                        IndexFieldName: "corrupti",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "accusamus",
                                        DateFieldFormat: sdk.String("tempora"),
                                        IndexFieldName: "atque",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "fugit",
                                        DateFieldFormat: sdk.String("ut"),
                                        IndexFieldName: "fugiat",
                                    },
                                },
                                Name: "Cecilia Quitzon IV",
                            },
                            shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                                DocumentDataFieldName: "ipsam",
                                DocumentTitleFieldName: sdk.String("sit"),
                                FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "quas",
                                        DateFieldFormat: sdk.String("repudiandae"),
                                        IndexFieldName: "corporis",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "et",
                                        DateFieldFormat: sdk.String("blanditiis"),
                                        IndexFieldName: "ex",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "sed",
                                        DateFieldFormat: sdk.String("sit"),
                                        IndexFieldName: "vel",
                                    },
                                },
                                Name: "Mrs. Tricia Mueller",
                            },
                            shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                                DocumentDataFieldName: "dolorem",
                                DocumentTitleFieldName: sdk.String("harum"),
                                FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "architecto",
                                        DateFieldFormat: sdk.String("occaecati"),
                                        IndexFieldName: "labore",
                                    },
                                },
                                Name: "Alberto Osinski",
                            },
                        },
                        IncludedStates: []shared.SalesforceKnowledgeArticleStateEnum{
                            shared.SalesforceKnowledgeArticleStateEnumDraft,
                            shared.SalesforceKnowledgeArticleStateEnumDraft,
                        },
                        StandardKnowledgeArticleTypeConfiguration: &shared.SalesforceStandardKnowledgeArticleTypeConfiguration{
                            DocumentDataFieldName: "deserunt",
                            DocumentTitleFieldName: sdk.String("voluptate"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "reiciendis",
                                    DateFieldFormat: sdk.String("provident"),
                                    IndexFieldName: "repellendus",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "delectus",
                                    DateFieldFormat: sdk.String("voluptates"),
                                    IndexFieldName: "perferendis",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "est",
                                    DateFieldFormat: sdk.String("quidem"),
                                    IndexFieldName: "reprehenderit",
                                },
                            },
                        },
                    },
                    SecretArn: "facere",
                    ServerURL: "fuga",
                    StandardObjectAttachmentConfiguration: &shared.SalesforceStandardObjectAttachmentConfiguration{
                        DocumentTitleFieldName: sdk.String("praesentium"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "veniam",
                                DateFieldFormat: sdk.String("voluptatem"),
                                IndexFieldName: "quisquam",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "repudiandae",
                                DateFieldFormat: sdk.String("quasi"),
                                IndexFieldName: "atque",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "reprehenderit",
                                DateFieldFormat: sdk.String("asperiores"),
                                IndexFieldName: "totam",
                            },
                        },
                    },
                    StandardObjectConfigurations: []shared.SalesforceStandardObjectConfiguration{
                        shared.SalesforceStandardObjectConfiguration{
                            DocumentDataFieldName: "quidem",
                            DocumentTitleFieldName: sdk.String("maxime"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "esse",
                                    DateFieldFormat: sdk.String("amet"),
                                    IndexFieldName: "assumenda",
                                },
                            },
                            Name: shared.SalesforceStandardObjectNameEnumGroup,
                        },
                        shared.SalesforceStandardObjectConfiguration{
                            DocumentDataFieldName: "atque",
                            DocumentTitleFieldName: sdk.String("error"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "officiis",
                                    DateFieldFormat: sdk.String("accusamus"),
                                    IndexFieldName: "natus",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "minima",
                                    DateFieldFormat: sdk.String("aspernatur"),
                                    IndexFieldName: "ex",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "maiores",
                                    DateFieldFormat: sdk.String("corrupti"),
                                    IndexFieldName: "at",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "error",
                                    DateFieldFormat: sdk.String("blanditiis"),
                                    IndexFieldName: "suscipit",
                                },
                            },
                            Name: shared.SalesforceStandardObjectNameEnumTask,
                        },
                    },
                },
                ServiceNowConfiguration: &shared.ServiceNowConfiguration{
                    AuthenticationType: shared.ServiceNowAuthenticationTypeEnumOauth2.ToPointer(),
                    HostURL: "atque",
                    KnowledgeArticleConfiguration: &shared.ServiceNowKnowledgeArticleConfiguration{
                        CrawlAttachments: sdk.Bool(false),
                        DocumentDataFieldName: "sunt",
                        DocumentTitleFieldName: sdk.String("recusandae"),
                        ExcludeAttachmentFilePatterns: []string{
                            "repellendus",
                            "labore",
                            "reiciendis",
                        },
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "repudiandae",
                                DateFieldFormat: sdk.String("dicta"),
                                IndexFieldName: "accusantium",
                            },
                        },
                        FilterQuery: sdk.String("beatae"),
                        IncludeAttachmentFilePatterns: []string{
                            "enim",
                        },
                    },
                    SecretArn: "laboriosam",
                    ServiceCatalogConfiguration: &shared.ServiceNowServiceCatalogConfiguration{
                        CrawlAttachments: sdk.Bool(false),
                        DocumentDataFieldName: "velit",
                        DocumentTitleFieldName: sdk.String("a"),
                        ExcludeAttachmentFilePatterns: []string{
                            "magnam",
                            "saepe",
                            "consequuntur",
                        },
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "officiis",
                                DateFieldFormat: sdk.String("perspiciatis"),
                                IndexFieldName: "in",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "adipisci",
                                DateFieldFormat: sdk.String("eveniet"),
                                IndexFieldName: "occaecati",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "consequuntur",
                                DateFieldFormat: sdk.String("fugit"),
                                IndexFieldName: "id",
                            },
                        },
                        IncludeAttachmentFilePatterns: []string{
                            "reprehenderit",
                            "error",
                        },
                    },
                    ServiceNowBuildVersion: shared.ServiceNowBuildVersionTypeEnumLondon,
                },
                SharePointConfiguration: &shared.SharePointConfiguration{
                    AuthenticationType: shared.SharePointOnlineAuthenticationTypeEnumHTTPBasic.ToPointer(),
                    CrawlAttachments: sdk.Bool(false),
                    DisableLocalGroups: sdk.Bool(false),
                    DocumentTitleFieldName: sdk.String("quidem"),
                    ExclusionPatterns: []string{
                        "non",
                        "vero",
                        "doloremque",
                        "iure",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "totam",
                            DateFieldFormat: sdk.String("quae"),
                            IndexFieldName: "molestiae",
                        },
                    },
                    InclusionPatterns: []string{
                        "qui",
                        "cum",
                        "iure",
                        "necessitatibus",
                    },
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("ratione"),
                        Host: "laborum",
                        Port: 715208,
                    },
                    SecretArn: "voluptatum",
                    SharePointVersion: shared.SharePointVersionEnumSharepointOnline,
                    SslCertificateS3Path: &shared.S3Path{
                        Bucket: "aliquam",
                        Key: "ad",
                    },
                    Urls: []string{
                        "alias",
                        "corporis",
                        "perspiciatis",
                        "nihil",
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "voluptas",
                            "alias",
                            "maiores",
                        },
                        SubnetIds: []string{
                            "dolores",
                            "id",
                            "minima",
                            "dolore",
                        },
                    },
                },
                SlackConfiguration: &shared.SlackConfiguration{
                    CrawlBotMessage: sdk.Bool(false),
                    ExcludeArchived: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "nesciunt",
                        "quae",
                        "recusandae",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quaerat",
                            DateFieldFormat: sdk.String("molestiae"),
                            IndexFieldName: "ex",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ut",
                            DateFieldFormat: sdk.String("culpa"),
                            IndexFieldName: "adipisci",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "debitis",
                            DateFieldFormat: sdk.String("laudantium"),
                            IndexFieldName: "eum",
                        },
                    },
                    InclusionPatterns: []string{
                        "recusandae",
                        "esse",
                    },
                    LookBackPeriod: sdk.Int64(592081),
                    PrivateChannelFilter: []string{
                        "eum",
                        "reiciendis",
                    },
                    PublicChannelFilter: []string{
                        "aspernatur",
                        "ullam",
                        "quasi",
                    },
                    SecretArn: "animi",
                    SinceCrawlDate: "nostrum",
                    SlackEntityList: []shared.SlackEntityEnum{
                        shared.SlackEntityEnumGroupMessage,
                        shared.SlackEntityEnumDirectMessage,
                        shared.SlackEntityEnumGroupMessage,
                    },
                    TeamID: "ex",
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "accusantium",
                            "repellat",
                        },
                        SubnetIds: []string{
                            "ullam",
                            "in",
                            "nam",
                            "earum",
                        },
                    },
                },
                TemplateConfiguration: &shared.TemplateConfiguration{
                    Template: map[string]interface{}{
                        "laborum": "placeat",
                        "modi": "voluptatibus",
                        "molestias": "officiis",
                    },
                },
                WebCrawlerConfiguration: &shared.WebCrawlerConfiguration{
                    AuthenticationConfiguration: &shared.AuthenticationConfiguration{
                        BasicAuthentication: []shared.BasicAuthenticationConfiguration{
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "cumque",
                                Host: "vitae",
                                Port: 698249,
                            },
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "tempora",
                                Host: "quis",
                                Port: 82057,
                            },
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "fugit",
                                Host: "cumque",
                                Port: 62636,
                            },
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "perferendis",
                                Host: "velit",
                                Port: 137251,
                            },
                        },
                    },
                    CrawlDepth: sdk.Int64(432281),
                    MaxContentSizePerPageInMegaBytes: sdk.Float32(2606.28),
                    MaxLinksPerPage: sdk.Int64(521996),
                    MaxUrlsPerMinuteCrawlRate: sdk.Int64(871083),
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("impedit"),
                        Host: "eos",
                        Port: 958741,
                    },
                    URLExclusionPatterns: []string{
                        "dicta",
                        "minima",
                    },
                    URLInclusionPatterns: []string{
                        "cupiditate",
                    },
                    Urls: shared.Urls{
                        SeedURLConfiguration: &shared.SeedURLConfiguration{
                            SeedUrls: []string{
                                "earum",
                                "soluta",
                                "hic",
                            },
                            WebCrawlerMode: shared.WebCrawlerModeEnumEverything.ToPointer(),
                        },
                        SiteMapsConfiguration: &shared.SiteMapsConfiguration{
                            SiteMaps: []string{
                                "earum",
                            },
                        },
                    },
                },
                WorkDocsConfiguration: &shared.WorkDocsConfiguration{
                    CrawlComments: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "maiores",
                        "debitis",
                        "aliquid",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "suscipit",
                            DateFieldFormat: sdk.String("dolorem"),
                            IndexFieldName: "fugit",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "cumque",
                            DateFieldFormat: sdk.String("fuga"),
                            IndexFieldName: "ratione",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "animi",
                            DateFieldFormat: sdk.String("necessitatibus"),
                            IndexFieldName: "nulla",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "consequatur",
                            DateFieldFormat: sdk.String("quasi"),
                            IndexFieldName: "et",
                        },
                    },
                    InclusionPatterns: []string{
                        "natus",
                        "occaecati",
                    },
                    OrganizationID: "suscipit",
                    UseChangeLog: sdk.Bool(false),
                },
            },
            CustomDocumentEnrichmentConfiguration: &shared.CustomDocumentEnrichmentConfiguration{
                InlineConfigurations: []shared.InlineCustomDocumentEnrichmentConfiguration{
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "quasi",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-01-06T11:59:03.269Z"),
                                LongValue: sdk.Int64(859581),
                                StringListValue: []string{
                                    "ipsa",
                                    "tempora",
                                    "nihil",
                                    "molestiae",
                                },
                                StringValue: sdk.String("dicta"),
                            },
                            Operator: shared.ConditionOperatorEnumNotEquals,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("esse"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-01-15T15:03:36.543Z"),
                                LongValue: sdk.Int64(967260),
                                StringListValue: []string{
                                    "architecto",
                                    "fugiat",
                                },
                                StringValue: sdk.String("doloremque"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                },
                PostExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "dicta",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2022-09-23T23:49:53.776Z"),
                            LongValue: sdk.Int64(458259),
                            StringListValue: []string{
                                "consectetur",
                                "aliquid",
                            },
                            StringValue: sdk.String("ipsa"),
                        },
                        Operator: shared.ConditionOperatorEnumNotContains,
                    },
                    LambdaArn: "sunt",
                    S3Bucket: "nostrum",
                },
                PreExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "fugiat",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2022-03-15T05:49:38.899Z"),
                            LongValue: sdk.Int64(639187),
                            StringListValue: []string{
                                "aliquid",
                                "perferendis",
                            },
                            StringValue: sdk.String("eum"),
                        },
                        Operator: shared.ConditionOperatorEnumEquals,
                    },
                    LambdaArn: "iste",
                    S3Bucket: "id",
                },
                RoleArn: sdk.String("ab"),
            },
            Description: sdk.String("error"),
            IndexID: "possimus",
            LanguageCode: sdk.String("voluptates"),
            Name: "Cameron Reinger",
            RoleArn: sdk.String("enim"),
            Schedule: sdk.String("vitae"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ex",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "ex",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "ad",
                    Value: "expedita",
                },
                shared.Tag{
                    Key: "voluptatem",
                    Value: "molestias",
                },
            },
            Type: shared.DataSourceTypeEnumQuip,
            VpcConfiguration: &shared.DataSourceVpcConfiguration{
                SecurityGroupIds: []string{
                    "beatae",
                    "voluptatum",
                },
                SubnetIds: []string{
                    "veritatis",
                    "rerum",
                    "est",
                },
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateDataSourceXAmzTargetEnumAwsKendraFrontendServiceCreateDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSourceResponse != nil {
        // handle response
    }
}
```

## CreateExperience

Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateExperience(ctx, operations.CreateExperienceRequest{
        CreateExperienceRequest: shared.CreateExperienceRequest{
            ClientToken: sdk.String("debitis"),
            Configuration: &shared.ExperienceConfiguration{
                ContentSourceConfiguration: &shared.ContentSourceConfiguration{
                    DataSourceIds: []string{
                        "alias",
                    },
                    DirectPutContent: sdk.Bool(false),
                    FaqIds: []string{
                        "earum",
                        "ex",
                        "sapiente",
                    },
                },
                UserIdentityConfiguration: &shared.UserIdentityConfiguration{
                    IdentityAttributeName: sdk.String("rem"),
                },
            },
            Description: sdk.String("minus"),
            IndexID: "nemo",
            Name: "Dr. Chris Hermiston",
            RoleArn: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.CreateExperienceXAmzTargetEnumAwsKendraFrontendServiceCreateExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperienceResponse != nil {
        // handle response
    }
}
```

## CreateFaq

<p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFaq(ctx, operations.CreateFaqRequest{
        CreateFaqRequest: shared.CreateFaqRequest{
            ClientToken: sdk.String("deleniti"),
            Description: sdk.String("veritatis"),
            FileFormat: shared.FaqFileFormatEnumCsv.ToPointer(),
            IndexID: "dolor",
            LanguageCode: sdk.String("consequatur"),
            Name: "Karen Gleason IV",
            RoleArn: "quae",
            S3Path: shared.S3Path{
                Bucket: "dolor",
                Key: "fugiat",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequuntur",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "quas",
                    Value: "eveniet",
                },
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.CreateFaqXAmzTargetEnumAwsKendraFrontendServiceCreateFaq,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFaqResponse != nil {
        // handle response
    }
}
```

## CreateFeaturedResultsSet

<p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFeaturedResultsSet(ctx, operations.CreateFeaturedResultsSetRequest{
        CreateFeaturedResultsSetRequest: shared.CreateFeaturedResultsSetRequest{
            ClientToken: sdk.String("expedita"),
            Description: sdk.String("eum"),
            FeaturedDocuments: []shared.FeaturedDocument{
                shared.FeaturedDocument{
                    ID: sdk.String("8451c6c6-e205-4e16-9eab-3fec9578a645"),
                },
                shared.FeaturedDocument{
                    ID: sdk.String("84273a84-18d1-4623-89fb-0929921aefb9"),
                },
            },
            FeaturedResultsSetName: "delectus",
            IndexID: "minima",
            QueryTexts: []string{
                "maxime",
                "magnam",
                "temporibus",
            },
            Status: shared.FeaturedResultsSetStatusEnumInactive.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "itaque",
                    Value: "commodi",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "earum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.CreateFeaturedResultsSetXAmzTargetEnumAwsKendraFrontendServiceCreateFeaturedResultsSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFeaturedResultsSetResponse != nil {
        // handle response
    }
}
```

## CreateIndex

<p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateIndex(ctx, operations.CreateIndexRequest{
        CreateIndexRequest: shared.CreateIndexRequest{
            ClientToken: sdk.String("quasi"),
            Description: sdk.String("non"),
            Edition: shared.IndexEditionEnumEnterpriseEdition.ToPointer(),
            Name: "Bobbie Stokes",
            RoleArn: "nemo",
            ServerSideEncryptionConfiguration: &shared.ServerSideEncryptionConfiguration{
                KmsKeyID: sdk.String("reprehenderit"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quis",
                    Value: "sint",
                },
                shared.Tag{
                    Key: "accusamus",
                    Value: "impedit",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "necessitatibus",
                },
            },
            UserContextPolicy: shared.UserContextPolicyEnumUserToken.ToPointer(),
            UserGroupResolutionConfiguration: &shared.UserGroupResolutionConfiguration{
                UserGroupResolutionMode: shared.UserGroupResolutionModeEnumAwsSso,
            },
            UserTokenConfigurations: []shared.UserTokenConfiguration{
                shared.UserTokenConfiguration{
                    JSONTokenTypeConfiguration: &shared.JSONTokenTypeConfiguration{
                        GroupAttributeField: "debitis",
                        UserNameAttributeField: "delectus",
                    },
                    JwtTokenTypeConfiguration: &shared.JwtTokenTypeConfiguration{
                        ClaimRegex: sdk.String("quae"),
                        GroupAttributeField: sdk.String("minus"),
                        Issuer: sdk.String("fuga"),
                        KeyLocation: shared.KeyLocationEnumSecretManager,
                        SecretManagerArn: sdk.String("consectetur"),
                        URL: sdk.String("velit"),
                        UserNameAttributeField: sdk.String("atque"),
                    },
                },
                shared.UserTokenConfiguration{
                    JSONTokenTypeConfiguration: &shared.JSONTokenTypeConfiguration{
                        GroupAttributeField: "ipsum",
                        UserNameAttributeField: "impedit",
                    },
                    JwtTokenTypeConfiguration: &shared.JwtTokenTypeConfiguration{
                        ClaimRegex: sdk.String("magni"),
                        GroupAttributeField: sdk.String("soluta"),
                        Issuer: sdk.String("repudiandae"),
                        KeyLocation: shared.KeyLocationEnumSecretManager,
                        SecretManagerArn: sdk.String("dolore"),
                        URL: sdk.String("iusto"),
                        UserNameAttributeField: sdk.String("voluptate"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateIndexXAmzTargetEnumAwsKendraFrontendServiceCreateIndex,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIndexResponse != nil {
        // handle response
    }
}
```

## CreateQuerySuggestionsBlockList

<p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateQuerySuggestionsBlockList(ctx, operations.CreateQuerySuggestionsBlockListRequest{
        CreateQuerySuggestionsBlockListRequest: shared.CreateQuerySuggestionsBlockListRequest{
            ClientToken: sdk.String("odit"),
            Description: sdk.String("voluptatibus"),
            IndexID: "vel",
            Name: "Doreen Block",
            RoleArn: "architecto",
            SourceS3Path: shared.S3Path{
                Bucket: "voluptatibus",
                Key: "quia",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquam",
                    Value: "velit",
                },
                shared.Tag{
                    Key: "illo",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "beatae",
                    Value: "vero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.CreateQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceCreateQuerySuggestionsBlockList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateQuerySuggestionsBlockListResponse != nil {
        // handle response
    }
}
```

## CreateThesaurus

<p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateThesaurus(ctx, operations.CreateThesaurusRequest{
        CreateThesaurusRequest: shared.CreateThesaurusRequest{
            ClientToken: sdk.String("impedit"),
            Description: sdk.String("voluptatibus"),
            IndexID: "iste",
            Name: "John Huel",
            RoleArn: "laborum",
            SourceS3Path: shared.S3Path{
                Bucket: "non",
                Key: "dolor",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sit",
                    Value: "doloremque",
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: "officia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.CreateThesaurusXAmzTargetEnumAwsKendraFrontendServiceCreateThesaurus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateThesaurusResponse != nil {
        // handle response
    }
}
```

## DeleteAccessControlConfiguration

Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccessControlConfiguration(ctx, operations.DeleteAccessControlConfigurationRequest{
        DeleteAccessControlConfigurationRequest: shared.DeleteAccessControlConfigurationRequest{
            ID: "b8f759ea-c55a-4974-9d31-1352965bb8a7",
            IndexID: "fugit",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DeleteAccessControlConfigurationXAmzTargetEnumAwsKendraFrontendServiceDeleteAccessControlConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessControlConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteDataSource

Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDataSource(ctx, operations.DeleteDataSourceRequest{
        DeleteDataSourceRequest: shared.DeleteDataSourceRequest{
            ID: "5e139dbc-2259-4b1a-bda8-c070e1084cb0",
            IndexID: "autem",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.DeleteDataSourceXAmzTargetEnumAwsKendraFrontendServiceDeleteDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteExperience

Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteExperience(ctx, operations.DeleteExperienceRequest{
        DeleteExperienceRequest: shared.DeleteExperienceRequest{
            ID: "79eeb966-5b85-4efb-902b-ae0be2d78225",
            IndexID: "error",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DeleteExperienceXAmzTargetEnumAwsKendraFrontendServiceDeleteExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteExperienceResponse != nil {
        // handle response
    }
}
```

## DeleteFaq

Removes an FAQ from an index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFaq(ctx, operations.DeleteFaqRequest{
        DeleteFaqRequest: shared.DeleteFaqRequest{
            ID: "197f9244-3da7-4ce5-ab89-5c537c6454ef",
            IndexID: "tempore",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DeleteFaqXAmzTargetEnumAwsKendraFrontendServiceDeleteFaq,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIndex

Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteIndex(ctx, operations.DeleteIndexRequest{
        DeleteIndexRequest: shared.DeleteIndexRequest{
            ID: "c3ca5acf-be2f-4d57-8757-7929177deac6",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.DeleteIndexXAmzTargetEnumAwsKendraFrontendServiceDeleteIndex,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePrincipalMapping

<p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePrincipalMapping(ctx, operations.DeletePrincipalMappingRequest{
        DeletePrincipalMappingRequest: shared.DeletePrincipalMappingRequest{
            DataSourceID: sdk.String("dolorem"),
            GroupID: "modi",
            IndexID: "ipsa",
            OrderingID: sdk.Int64(575534),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.DeletePrincipalMappingXAmzTargetEnumAwsKendraFrontendServiceDeletePrincipalMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteQuerySuggestionsBlockList

<p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteQuerySuggestionsBlockList(ctx, operations.DeleteQuerySuggestionsBlockListRequest{
        DeleteQuerySuggestionsBlockListRequest: shared.DeleteQuerySuggestionsBlockListRequest{
            ID: "a2b12eb0-7f11-46db-9954-5fc95fa88970",
            IndexID: "saepe",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.DeleteQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceDeleteQuerySuggestionsBlockList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteThesaurus

Deletes an existing Amazon Kendra thesaurus. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteThesaurus(ctx, operations.DeleteThesaurusRequest{
        DeleteThesaurusRequest: shared.DeleteThesaurusRequest{
            ID: "0fcb33ea-055b-4197-8d44-e2f52d82d351",
            IndexID: "velit",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteThesaurusXAmzTargetEnumAwsKendraFrontendServiceDeleteThesaurus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAccessControlConfiguration

Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccessControlConfiguration(ctx, operations.DescribeAccessControlConfigurationRequest{
        DescribeAccessControlConfigurationRequest: shared.DescribeAccessControlConfigurationRequest{
            ID: "656bcdb3-5ff2-4e4b-a753-7a8cd9e7319c",
            IndexID: "vitae",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DescribeAccessControlConfigurationXAmzTargetEnumAwsKendraFrontendServiceDescribeAccessControlConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccessControlConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeDataSource

Gets information about an Amazon Kendra data source connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDataSource(ctx, operations.DescribeDataSourceRequest{
        DescribeDataSourceRequest: shared.DescribeDataSourceRequest{
            ID: "77b114ee-b52f-4f78-9fc3-7814d4c98e0c",
            IndexID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeDataSourceXAmzTargetEnumAwsKendraFrontendServiceDescribeDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataSourceResponse != nil {
        // handle response
    }
}
```

## DescribeExperience

Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeExperience(ctx, operations.DescribeExperienceRequest{
        DescribeExperienceRequest: shared.DescribeExperienceRequest{
            ID: "5dad636c-6005-403d-8bb3-1180f739ae9e",
            IndexID: "consequatur",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DescribeExperienceXAmzTargetEnumAwsKendraFrontendServiceDescribeExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExperienceResponse != nil {
        // handle response
    }
}
```

## DescribeFaq

Gets information about an FAQ list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFaq(ctx, operations.DescribeFaqRequest{
        DescribeFaqRequest: shared.DescribeFaqRequest{
            ID: "e2810331-f398-41d4-8700-b607f3c93c73",
            IndexID: "soluta",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeFaqXAmzTargetEnumAwsKendraFrontendServiceDescribeFaq,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFaqResponse != nil {
        // handle response
    }
}
```

## DescribeFeaturedResultsSet

Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFeaturedResultsSet(ctx, operations.DescribeFeaturedResultsSetRequest{
        DescribeFeaturedResultsSetRequest: shared.DescribeFeaturedResultsSetRequest{
            FeaturedResultsSetID: "itaque",
            IndexID: "illum",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeFeaturedResultsSetXAmzTargetEnumAwsKendraFrontendServiceDescribeFeaturedResultsSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFeaturedResultsSetResponse != nil {
        // handle response
    }
}
```

## DescribeIndex

Gets information about an existing Amazon Kendra index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeIndex(ctx, operations.DescribeIndexRequest{
        DescribeIndexRequest: shared.DescribeIndexRequest{
            ID: "257411fa-f4b7-4544-a472-e802857a5b40",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.DescribeIndexXAmzTargetEnumAwsKendraFrontendServiceDescribeIndex,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIndexResponse != nil {
        // handle response
    }
}
```

## DescribePrincipalMapping

<p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePrincipalMapping(ctx, operations.DescribePrincipalMappingRequest{
        DescribePrincipalMappingRequest: shared.DescribePrincipalMappingRequest{
            DataSourceID: sdk.String("molestiae"),
            GroupID: "veniam",
            IndexID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DescribePrincipalMappingXAmzTargetEnumAwsKendraFrontendServiceDescribePrincipalMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePrincipalMappingResponse != nil {
        // handle response
    }
}
```

## DescribeQuerySuggestionsBlockList

<p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeQuerySuggestionsBlockList(ctx, operations.DescribeQuerySuggestionsBlockListRequest{
        DescribeQuerySuggestionsBlockListRequest: shared.DescribeQuerySuggestionsBlockListRequest{
            ID: "4ad7334e-c1b7-481b-b6a0-8088d100efad",
            IndexID: "officia",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DescribeQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceDescribeQuerySuggestionsBlockList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeQuerySuggestionsBlockListResponse != nil {
        // handle response
    }
}
```

## DescribeQuerySuggestionsConfig

<p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeQuerySuggestionsConfig(ctx, operations.DescribeQuerySuggestionsConfigRequest{
        DescribeQuerySuggestionsConfigRequest: shared.DescribeQuerySuggestionsConfigRequest{
            IndexID: "qui",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DescribeQuerySuggestionsConfigXAmzTargetEnumAwsKendraFrontendServiceDescribeQuerySuggestionsConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeQuerySuggestionsConfigResponse != nil {
        // handle response
    }
}
```

## DescribeThesaurus

Gets information about an existing Amazon Kendra thesaurus.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeThesaurus(ctx, operations.DescribeThesaurusRequest{
        DescribeThesaurusRequest: shared.DescribeThesaurusRequest{
            ID: "cf9ab836-6c72-43ff-9a9e-06bee4825c1f",
            IndexID: "eligendi",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DescribeThesaurusXAmzTargetEnumAwsKendraFrontendServiceDescribeThesaurus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeThesaurusResponse != nil {
        // handle response
    }
}
```

## DisassociateEntitiesFromExperience

Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateEntitiesFromExperience(ctx, operations.DisassociateEntitiesFromExperienceRequest{
        DisassociateEntitiesFromExperienceRequest: shared.DisassociateEntitiesFromExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "facilis",
                    EntityType: shared.EntityTypeEnumGroup,
                },
            },
            ID: "f918544e-c42d-4efc-8e8f-1977773e6356",
            IndexID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DisassociateEntitiesFromExperienceXAmzTargetEnumAwsKendraFrontendServiceDisassociateEntitiesFromExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateEntitiesFromExperienceResponse != nil {
        // handle response
    }
}
```

## DisassociatePersonasFromEntities

Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociatePersonasFromEntities(ctx, operations.DisassociatePersonasFromEntitiesRequest{
        DisassociatePersonasFromEntitiesRequest: shared.DisassociatePersonasFromEntitiesRequest{
            EntityIds: []string{
                "veniam",
            },
            ID: "e3d48fda-f313-4a1f-9fd9-4259c0b36f25",
            IndexID: "debitis",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DisassociatePersonasFromEntitiesXAmzTargetEnumAwsKendraFrontendServiceDisassociatePersonasFromEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociatePersonasFromEntitiesResponse != nil {
        // handle response
    }
}
```

## GetQuerySuggestions

<p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetQuerySuggestions(ctx, operations.GetQuerySuggestionsRequest{
        GetQuerySuggestionsRequest: shared.GetQuerySuggestionsRequest{
            IndexID: "in",
            MaxSuggestionsCount: sdk.Int64(329651),
            QueryText: "ex",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.GetQuerySuggestionsXAmzTargetEnumAwsKendraFrontendServiceGetQuerySuggestions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQuerySuggestionsResponse != nil {
        // handle response
    }
}
```

## GetSnapshots

Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSnapshots(ctx, operations.GetSnapshotsRequest{
        GetSnapshotsRequest: shared.GetSnapshotsRequest{
            IndexID: "ducimus",
            Interval: shared.IntervalEnumOneMonthAgo,
            MaxResults: sdk.Int64(326903),
            MetricType: shared.MetricTypeEnumQueriesByCount,
            NextToken: sdk.String("qui"),
        },
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("magni"),
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.GetSnapshotsXAmzTargetEnumAwsKendraFrontendServiceGetSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSnapshotsResponse != nil {
        // handle response
    }
}
```

## ListAccessControlConfigurations

Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAccessControlConfigurations(ctx, operations.ListAccessControlConfigurationsRequest{
        ListAccessControlConfigurationsRequest: shared.ListAccessControlConfigurationsRequest{
            IndexID: "impedit",
            MaxResults: sdk.Int64(24577),
            NextToken: sdk.String("nemo"),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.ListAccessControlConfigurationsXAmzTargetEnumAwsKendraFrontendServiceListAccessControlConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessControlConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListDataSourceSyncJobs

Gets statistics about synchronizing a data source connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDataSourceSyncJobs(ctx, operations.ListDataSourceSyncJobsRequest{
        ListDataSourceSyncJobsRequest: shared.ListDataSourceSyncJobsRequest{
            ID: "c5fde10a-0ce2-4169-a510-019c6dc5e347",
            IndexID: "laboriosam",
            MaxResults: sdk.Int64(152283),
            NextToken: sdk.String("odio"),
            StartTimeFilter: &shared.TimeRange{
                EndTime: types.MustTimeFromString("2021-10-28T15:35:10.950Z"),
                StartTime: types.MustTimeFromString("2021-01-12T18:52:51.422Z"),
            },
            StatusFilter: shared.DataSourceSyncJobStatusEnumStopping.ToPointer(),
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("itaque"),
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ListDataSourceSyncJobsXAmzTargetEnumAwsKendraFrontendServiceListDataSourceSyncJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSourceSyncJobsResponse != nil {
        // handle response
    }
}
```

## ListDataSources

Lists the data source connectors that you have created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDataSources(ctx, operations.ListDataSourcesRequest{
        ListDataSourcesRequest: shared.ListDataSourcesRequest{
            IndexID: "libero",
            MaxResults: sdk.Int64(720266),
            NextToken: sdk.String("incidunt"),
        },
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("quod"),
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.ListDataSourcesXAmzTargetEnumAwsKendraFrontendServiceListDataSources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSourcesResponse != nil {
        // handle response
    }
}
```

## ListEntityPersonas

Lists specific permissions of users and groups with access to your Amazon Kendra experience.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEntityPersonas(ctx, operations.ListEntityPersonasRequest{
        ListEntityPersonasRequest: shared.ListEntityPersonasRequest{
            ID: "db3adebd-5dae-4a4c-906a-8aa94c02644c",
            IndexID: "hic",
            MaxResults: sdk.Int64(342921),
            NextToken: sdk.String("officiis"),
        },
        MaxResults: sdk.String("unde"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.ListEntityPersonasXAmzTargetEnumAwsKendraFrontendServiceListEntityPersonas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntityPersonasResponse != nil {
        // handle response
    }
}
```

## ListExperienceEntities

Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExperienceEntities(ctx, operations.ListExperienceEntitiesRequest{
        ListExperienceEntitiesRequest: shared.ListExperienceEntitiesRequest{
            ID: "dc1ac600-dec0-401a-8802-e2ec09ff8f0f",
            IndexID: "rem",
            NextToken: sdk.String("dicta"),
        },
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.ListExperienceEntitiesXAmzTargetEnumAwsKendraFrontendServiceListExperienceEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperienceEntitiesResponse != nil {
        // handle response
    }
}
```

## ListExperiences

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExperiences(ctx, operations.ListExperiencesRequest{
        ListExperiencesRequest: shared.ListExperiencesRequest{
            IndexID: "quasi",
            MaxResults: sdk.Int64(203621),
            NextToken: sdk.String("vero"),
        },
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.ListExperiencesXAmzTargetEnumAwsKendraFrontendServiceListExperiences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperiencesResponse != nil {
        // handle response
    }
}
```

## ListFaqs

Gets a list of FAQ lists associated with an index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFaqs(ctx, operations.ListFaqsRequest{
        ListFaqsRequest: shared.ListFaqsRequest{
            IndexID: "rerum",
            MaxResults: sdk.Int64(4654),
            NextToken: sdk.String("error"),
        },
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListFaqsXAmzTargetEnumAwsKendraFrontendServiceListFaqs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFaqsResponse != nil {
        // handle response
    }
}
```

## ListFeaturedResultsSets

Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFeaturedResultsSets(ctx, operations.ListFeaturedResultsSetsRequest{
        ListFeaturedResultsSetsRequest: shared.ListFeaturedResultsSetsRequest{
            IndexID: "similique",
            MaxResults: sdk.Int64(278116),
            NextToken: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.ListFeaturedResultsSetsXAmzTargetEnumAwsKendraFrontendServiceListFeaturedResultsSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeaturedResultsSetsResponse != nil {
        // handle response
    }
}
```

## ListGroupsOlderThanOrderingID

<p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGroupsOlderThanOrderingID(ctx, operations.ListGroupsOlderThanOrderingIDRequest{
        ListGroupsOlderThanOrderingIDRequest: shared.ListGroupsOlderThanOrderingIDRequest{
            DataSourceID: sdk.String("quis"),
            IndexID: "cupiditate",
            MaxResults: sdk.Int64(303253),
            NextToken: sdk.String("excepturi"),
            OrderingID: 980410,
        },
        MaxResults: sdk.String("laudantium"),
        NextToken: sdk.String("velit"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.ListGroupsOlderThanOrderingIDXAmzTargetEnumAwsKendraFrontendServiceListGroupsOlderThanOrderingID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsOlderThanOrderingIDResponse != nil {
        // handle response
    }
}
```

## ListIndices

Lists the Amazon Kendra indexes that you created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListIndices(ctx, operations.ListIndicesRequest{
        ListIndicesRequest: shared.ListIndicesRequest{
            MaxResults: sdk.Int64(476003),
            NextToken: sdk.String("aliquid"),
        },
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.ListIndicesXAmzTargetEnumAwsKendraFrontendServiceListIndices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIndicesResponse != nil {
        // handle response
    }
}
```

## ListQuerySuggestionsBlockLists

<p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListQuerySuggestionsBlockLists(ctx, operations.ListQuerySuggestionsBlockListsRequest{
        ListQuerySuggestionsBlockListsRequest: shared.ListQuerySuggestionsBlockListsRequest{
            IndexID: "porro",
            MaxResults: sdk.Int64(735740),
            NextToken: sdk.String("quidem"),
        },
        MaxResults: sdk.String("modi"),
        NextToken: sdk.String("voluptates"),
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.ListQuerySuggestionsBlockListsXAmzTargetEnumAwsKendraFrontendServiceListQuerySuggestionsBlockLists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQuerySuggestionsBlockListsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "sint",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsKendraFrontendServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListThesauri

Lists the thesauri for an index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThesauri(ctx, operations.ListThesauriRequest{
        ListThesauriRequest: shared.ListThesauriRequest{
            IndexID: "corporis",
            MaxResults: sdk.Int64(246577),
            NextToken: sdk.String("officiis"),
        },
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("officia"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListThesauriXAmzTargetEnumAwsKendraFrontendServiceListThesauri,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThesauriResponse != nil {
        // handle response
    }
}
```

## PutPrincipalMapping

<p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutPrincipalMapping(ctx, operations.PutPrincipalMappingRequest{
        PutPrincipalMappingRequest: shared.PutPrincipalMappingRequest{
            DataSourceID: sdk.String("blanditiis"),
            GroupID: "eius",
            GroupMembers: shared.GroupMembers{
                MemberGroups: []shared.MemberGroup{
                    shared.MemberGroup{
                        DataSourceID: sdk.String("eos"),
                        GroupID: "nobis",
                    },
                    shared.MemberGroup{
                        DataSourceID: sdk.String("natus"),
                        GroupID: "minus",
                    },
                    shared.MemberGroup{
                        DataSourceID: sdk.String("quia"),
                        GroupID: "magnam",
                    },
                    shared.MemberGroup{
                        DataSourceID: sdk.String("reprehenderit"),
                        GroupID: "quod",
                    },
                },
                MemberUsers: []shared.MemberUser{
                    shared.MemberUser{
                        UserID: "corrupti",
                    },
                    shared.MemberUser{
                        UserID: "amet",
                    },
                    shared.MemberUser{
                        UserID: "molestiae",
                    },
                },
                S3PathforGroupMembers: &shared.S3Path{
                    Bucket: "amet",
                    Key: "laborum",
                },
            },
            IndexID: "modi",
            OrderingID: sdk.Int64(21358),
            RoleArn: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.PutPrincipalMappingXAmzTargetEnumAwsKendraFrontendServicePutPrincipalMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Query

<p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Query(ctx, operations.QueryRequest{
        QueryRequest: shared.QueryRequest{
            AttributeFilter: &shared.AttributeFilter{
                AndAllFilters: []shared.AttributeFilter{
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                },
                ContainsAll: &shared.DocumentAttribute{
                    Key: "veniam",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2022-12-13T08:46:29.590Z"),
                        LongValue: sdk.Int64(350387),
                        StringListValue: []string{
                            "nihil",
                            "ad",
                        },
                        StringValue: sdk.String("nisi"),
                    },
                },
                ContainsAny: &shared.DocumentAttribute{
                    Key: "tenetur",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2022-02-26T12:27:00.614Z"),
                        LongValue: sdk.Int64(366480),
                        StringListValue: []string{
                            "pariatur",
                            "sit",
                        },
                        StringValue: sdk.String("quidem"),
                    },
                },
                EqualsTo: &shared.DocumentAttribute{
                    Key: "repellendus",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2022-05-04T21:42:10.988Z"),
                        LongValue: sdk.Int64(958146),
                        StringListValue: []string{
                            "possimus",
                        },
                        StringValue: sdk.String("repellat"),
                    },
                },
                GreaterThan: &shared.DocumentAttribute{
                    Key: "repudiandae",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2022-10-05T03:30:10.840Z"),
                        LongValue: sdk.Int64(867115),
                        StringListValue: []string{
                            "dolore",
                            "voluptatibus",
                            "iure",
                        },
                        StringValue: sdk.String("explicabo"),
                    },
                },
                GreaterThanOrEquals: &shared.DocumentAttribute{
                    Key: "minus",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2021-08-24T10:03:12.351Z"),
                        LongValue: sdk.Int64(242531),
                        StringListValue: []string{
                            "praesentium",
                            "error",
                            "non",
                            "quasi",
                        },
                        StringValue: sdk.String("mollitia"),
                    },
                },
                LessThan: &shared.DocumentAttribute{
                    Key: "accusamus",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2021-06-18T12:23:42.062Z"),
                        LongValue: sdk.Int64(42615),
                        StringListValue: []string{
                            "corrupti",
                            "eaque",
                            "deserunt",
                        },
                        StringValue: sdk.String("aliquid"),
                    },
                },
                LessThanOrEquals: &shared.DocumentAttribute{
                    Key: "excepturi",
                    Value: shared.DocumentAttributeValue{
                        DateValue: types.MustTimeFromString("2022-09-23T02:35:04.203Z"),
                        LongValue: sdk.Int64(821904),
                        StringListValue: []string{
                            "rerum",
                        },
                        StringValue: sdk.String("sed"),
                    },
                },
                NotFilter: &shared.AttributeFilter{},
                OrAllFilters: []shared.AttributeFilter{
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                    shared.AttributeFilter{},
                },
            },
            DocumentRelevanceOverrideConfigurations: []shared.DocumentRelevanceConfiguration{
                shared.DocumentRelevanceConfiguration{
                    Name: "Kim Ryan",
                    Relevance: shared.Relevance{
                        Duration: sdk.String("voluptatum"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(614770),
                        RankOrder: shared.OrderEnumAscending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "illo": 14251,
                        },
                    },
                },
                shared.DocumentRelevanceConfiguration{
                    Name: "Gordon Strosin",
                    Relevance: shared.Relevance{
                        Duration: sdk.String("pariatur"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(424853),
                        RankOrder: shared.OrderEnumDescending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "quae": 552646,
                            "aperiam": 251200,
                            "voluptates": 324052,
                        },
                    },
                },
                shared.DocumentRelevanceConfiguration{
                    Name: "Rosalie Lynch",
                    Relevance: shared.Relevance{
                        Duration: sdk.String("inventore"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(400448),
                        RankOrder: shared.OrderEnumDescending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "dolor": 400879,
                            "consectetur": 768195,
                            "rem": 527715,
                        },
                    },
                },
                shared.DocumentRelevanceConfiguration{
                    Name: "Sherry Walter",
                    Relevance: shared.Relevance{
                        Duration: sdk.String("numquam"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(196374),
                        RankOrder: shared.OrderEnumDescending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "rerum": 84178,
                        },
                    },
                },
            },
            Facets: []shared.Facet{
                shared.Facet{
                    DocumentAttributeKey: sdk.String("autem"),
                    Facets: []shared.Facet{
                        shared.Facet{},
                        shared.Facet{},
                        shared.Facet{},
                    },
                    MaxResults: sdk.Int64(517121),
                },
                shared.Facet{
                    DocumentAttributeKey: sdk.String("porro"),
                    Facets: []shared.Facet{
                        shared.Facet{},
                        shared.Facet{},
                        shared.Facet{},
                    },
                    MaxResults: sdk.Int64(168926),
                },
                shared.Facet{
                    DocumentAttributeKey: sdk.String("nihil"),
                    Facets: []shared.Facet{
                        shared.Facet{},
                        shared.Facet{},
                    },
                    MaxResults: sdk.Int64(658199),
                },
                shared.Facet{
                    DocumentAttributeKey: sdk.String("commodi"),
                    Facets: []shared.Facet{
                        shared.Facet{},
                    },
                    MaxResults: sdk.Int64(686380),
                },
            },
            IndexID: "aut",
            PageNumber: sdk.Int64(295892),
            PageSize: sdk.Int64(802734),
            QueryResultTypeFilter: shared.QueryResultTypeEnumDocument.ToPointer(),
            QueryText: sdk.String("iste"),
            RequestedDocumentAttributes: []string{
                "eligendi",
                "placeat",
            },
            SortingConfiguration: &shared.SortingConfiguration{
                DocumentAttributeKey: "voluptas",
                SortOrder: shared.SortOrderEnumAsc,
            },
            SpellCorrectionConfiguration: &shared.SpellCorrectionConfiguration{
                IncludeQuerySpellCheckSuggestions: false,
            },
            UserContext: &shared.UserContext{
                DataSourceGroups: []shared.DataSourceGroup{
                    shared.DataSourceGroup{
                        DataSourceID: "illo",
                        GroupID: "nihil",
                    },
                    shared.DataSourceGroup{
                        DataSourceID: "inventore",
                        GroupID: "libero",
                    },
                    shared.DataSourceGroup{
                        DataSourceID: "ipsam",
                        GroupID: "quasi",
                    },
                },
                Groups: []string{
                    "dicta",
                    "harum",
                    "facere",
                    "facilis",
                },
                Token: sdk.String("beatae"),
                UserID: sdk.String("cumque"),
            },
            VisitorID: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.QueryXAmzTargetEnumAwsKendraFrontendServiceQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResult != nil {
        // handle response
    }
}
```

## StartDataSourceSyncJob

Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartDataSourceSyncJob(ctx, operations.StartDataSourceSyncJobRequest{
        StartDataSourceSyncJobRequest: shared.StartDataSourceSyncJobRequest{
            ID: "dfc4ccca-99bc-47fc-8b2d-ce10873e42b0",
            IndexID: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.StartDataSourceSyncJobXAmzTargetEnumAwsKendraFrontendServiceStartDataSourceSyncJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDataSourceSyncJobResponse != nil {
        // handle response
    }
}
```

## StopDataSourceSyncJob

Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopDataSourceSyncJob(ctx, operations.StopDataSourceSyncJobRequest{
        StopDataSourceSyncJobRequest: shared.StopDataSourceSyncJobRequest{
            ID: "8ba8581a-5820-48c5-8fef-a9c95f2eac55",
            IndexID: "eum",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.StopDataSourceSyncJobXAmzTargetEnumAwsKendraFrontendServiceStopDataSourceSyncJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubmitFeedback

<p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SubmitFeedback(ctx, operations.SubmitFeedbackRequest{
        SubmitFeedbackRequest: shared.SubmitFeedbackRequest{
            ClickFeedbackItems: []shared.ClickFeedback{
                shared.ClickFeedback{
                    ClickTime: types.MustTimeFromString("2021-06-25T15:44:39.144Z"),
                    ResultID: "dicta",
                },
                shared.ClickFeedback{
                    ClickTime: types.MustTimeFromString("2022-12-22T19:19:57.965Z"),
                    ResultID: "aliquid",
                },
                shared.ClickFeedback{
                    ClickTime: types.MustTimeFromString("2022-07-21T20:56:24.947Z"),
                    ResultID: "deleniti",
                },
                shared.ClickFeedback{
                    ClickTime: types.MustTimeFromString("2022-10-19T22:20:11.046Z"),
                    ResultID: "delectus",
                },
            },
            IndexID: "laborum",
            QueryID: "aliquam",
            RelevanceFeedbackItems: []shared.RelevanceFeedback{
                shared.RelevanceFeedback{
                    RelevanceValue: shared.RelevanceTypeEnumRelevant,
                    ResultID: "sunt",
                },
                shared.RelevanceFeedback{
                    RelevanceValue: shared.RelevanceTypeEnumNotRelevant,
                    ResultID: "eius",
                },
                shared.RelevanceFeedback{
                    RelevanceValue: shared.RelevanceTypeEnumNotRelevant,
                    ResultID: "ipsa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.SubmitFeedbackXAmzTargetEnumAwsKendraFrontendServiceSubmitFeedback,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "fuga",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eaque",
                    Value: "dolorem",
                },
                shared.Tag{
                    Key: "architecto",
                    Value: "aperiam",
                },
                shared.Tag{
                    Key: "aspernatur",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "enim",
                    Value: "illo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsKendraFrontendServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from an index, FAQ, or a data source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "quae",
            TagKeys: []string{
                "expedita",
                "hic",
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsKendraFrontendServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAccessControlConfiguration

<p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAccessControlConfiguration(ctx, operations.UpdateAccessControlConfigurationRequest{
        UpdateAccessControlConfigurationRequest: shared.UpdateAccessControlConfigurationRequest{
            AccessControlList: []shared.Principal{
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumAllow,
                    DataSourceID: sdk.String("esse"),
                    Name: "Dwight Koepp",
                    Type: shared.PrincipalTypeEnumUser,
                },
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumDeny,
                    DataSourceID: sdk.String("eius"),
                    Name: "Dexter Kuhn",
                    Type: shared.PrincipalTypeEnumGroup,
                },
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumAllow,
                    DataSourceID: sdk.String("quis"),
                    Name: "Manuel Graham IV",
                    Type: shared.PrincipalTypeEnumGroup,
                },
                shared.Principal{
                    Access: shared.ReadAccessTypeEnumAllow,
                    DataSourceID: sdk.String("expedita"),
                    Name: "Nick Blanda",
                    Type: shared.PrincipalTypeEnumGroup,
                },
            },
            Description: sdk.String("sint"),
            HierarchicalAccessControlList: []shared.HierarchicalPrincipal{
                shared.HierarchicalPrincipal{
                    PrincipalList: []shared.Principal{
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("aperiam"),
                            Name: "Miss Dwight Goldner",
                            Type: shared.PrincipalTypeEnumGroup,
                        },
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("deleniti"),
                            Name: "Lila Bradtke",
                            Type: shared.PrincipalTypeEnumGroup,
                        },
                    },
                },
                shared.HierarchicalPrincipal{
                    PrincipalList: []shared.Principal{
                        shared.Principal{
                            Access: shared.ReadAccessTypeEnumDeny,
                            DataSourceID: sdk.String("consequatur"),
                            Name: "Raquel Schumm",
                            Type: shared.PrincipalTypeEnumUser,
                        },
                    },
                },
            },
            ID: "aa5f3cab-d905-4a97-ae05-6728227b2d30",
            IndexID: "sint",
            Name: sdk.String("Tamara Bashirian"),
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.UpdateAccessControlConfigurationXAmzTargetEnumAwsKendraFrontendServiceUpdateAccessControlConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccessControlConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateDataSource

Updates an existing Amazon Kendra data source connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDataSource(ctx, operations.UpdateDataSourceRequest{
        UpdateDataSourceRequest: shared.UpdateDataSourceRequest{
            Configuration: &shared.DataSourceConfiguration{
                AlfrescoConfiguration: &shared.AlfrescoConfiguration{
                    BlogFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "voluptatibus",
                            DateFieldFormat: sdk.String("voluptas"),
                            IndexFieldName: "non",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ullam",
                            DateFieldFormat: sdk.String("laborum"),
                            IndexFieldName: "voluptas",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "doloribus",
                            DateFieldFormat: sdk.String("animi"),
                            IndexFieldName: "recusandae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "corporis",
                            DateFieldFormat: sdk.String("non"),
                            IndexFieldName: "necessitatibus",
                        },
                    },
                    CrawlComments: sdk.Bool(false),
                    CrawlSystemFolders: sdk.Bool(false),
                    DocumentLibraryFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "maiores",
                            DateFieldFormat: sdk.String("laboriosam"),
                            IndexFieldName: "voluptatem",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "optio",
                            DateFieldFormat: sdk.String("sequi"),
                            IndexFieldName: "sunt",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "vitae",
                            DateFieldFormat: sdk.String("voluptatibus"),
                            IndexFieldName: "doloremque",
                        },
                    },
                    EntityFilter: []shared.AlfrescoEntityEnum{
                        shared.AlfrescoEntityEnumWiki,
                    },
                    ExclusionPatterns: []string{
                        "in",
                        "nostrum",
                        "temporibus",
                    },
                    InclusionPatterns: []string{
                        "dolor",
                    },
                    SecretArn: "nisi",
                    SiteID: "dignissimos",
                    SiteURL: "reiciendis",
                    SslCertificateS3Path: shared.S3Path{
                        Bucket: "itaque",
                        Key: "vitae",
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "accusantium",
                            "quod",
                            "minus",
                        },
                        SubnetIds: []string{
                            "possimus",
                            "maiores",
                            "odio",
                        },
                    },
                    WikiFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sapiente",
                            DateFieldFormat: sdk.String("aperiam"),
                            IndexFieldName: "similique",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "nesciunt",
                            DateFieldFormat: sdk.String("provident"),
                            IndexFieldName: "ex",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "repellendus",
                            DateFieldFormat: sdk.String("unde"),
                            IndexFieldName: "alias",
                        },
                    },
                },
                BoxConfiguration: &shared.BoxConfiguration{
                    CommentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sequi",
                            DateFieldFormat: sdk.String("commodi"),
                            IndexFieldName: "labore",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "expedita",
                            DateFieldFormat: sdk.String("in"),
                            IndexFieldName: "quisquam",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sunt",
                            DateFieldFormat: sdk.String("enim"),
                            IndexFieldName: "nulla",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "maiores",
                            DateFieldFormat: sdk.String("distinctio"),
                            IndexFieldName: "mollitia",
                        },
                    },
                    CrawlComments: sdk.Bool(false),
                    CrawlTasks: sdk.Bool(false),
                    CrawlWebLinks: sdk.Bool(false),
                    EnterpriseID: "impedit",
                    ExclusionPatterns: []string{
                        "et",
                        "quas",
                        "blanditiis",
                        "cum",
                    },
                    FileFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "impedit",
                            DateFieldFormat: sdk.String("tempora"),
                            IndexFieldName: "eveniet",
                        },
                    },
                    InclusionPatterns: []string{
                        "sed",
                        "impedit",
                        "quas",
                        "impedit",
                    },
                    SecretArn: "vel",
                    TaskFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "recusandae",
                            DateFieldFormat: sdk.String("ex"),
                            IndexFieldName: "beatae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "veritatis",
                            DateFieldFormat: sdk.String("maiores"),
                            IndexFieldName: "itaque",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "vero",
                            DateFieldFormat: sdk.String("quidem"),
                            IndexFieldName: "illo",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quo",
                            DateFieldFormat: sdk.String("dignissimos"),
                            IndexFieldName: "minus",
                        },
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "possimus",
                            "cum",
                            "suscipit",
                        },
                        SubnetIds: []string{
                            "earum",
                            "quod",
                            "nihil",
                            "quaerat",
                        },
                    },
                    WebLinkFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ducimus",
                            DateFieldFormat: sdk.String("laudantium"),
                            IndexFieldName: "rerum",
                        },
                    },
                },
                ConfluenceConfiguration: &shared.ConfluenceConfiguration{
                    AttachmentConfiguration: &shared.ConfluenceAttachmentConfiguration{
                        AttachmentFieldMappings: []shared.ConfluenceAttachmentToIndexFieldMapping{
                            shared.ConfluenceAttachmentToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceAttachmentFieldNameEnumContentType.ToPointer(),
                                DateFieldFormat: sdk.String("ad"),
                                IndexFieldName: sdk.String("sequi"),
                            },
                            shared.ConfluenceAttachmentToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceAttachmentFieldNameEnumContentType.ToPointer(),
                                DateFieldFormat: sdk.String("iusto"),
                                IndexFieldName: sdk.String("esse"),
                            },
                            shared.ConfluenceAttachmentToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceAttachmentFieldNameEnumDisplayURL.ToPointer(),
                                DateFieldFormat: sdk.String("odio"),
                                IndexFieldName: sdk.String("nulla"),
                            },
                        },
                        CrawlAttachments: sdk.Bool(false),
                    },
                    AuthenticationType: shared.ConfluenceAuthenticationTypeEnumPat.ToPointer(),
                    BlogConfiguration: &shared.ConfluenceBlogConfiguration{
                        BlogFieldMappings: []shared.ConfluenceBlogToIndexFieldMapping{
                            shared.ConfluenceBlogToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceBlogFieldNameEnumAuthor.ToPointer(),
                                DateFieldFormat: sdk.String("exercitationem"),
                                IndexFieldName: sdk.String("laborum"),
                            },
                            shared.ConfluenceBlogToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceBlogFieldNameEnumURL.ToPointer(),
                                DateFieldFormat: sdk.String("fugit"),
                                IndexFieldName: sdk.String("maxime"),
                            },
                            shared.ConfluenceBlogToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceBlogFieldNameEnumSpaceName.ToPointer(),
                                DateFieldFormat: sdk.String("repellat"),
                                IndexFieldName: sdk.String("nostrum"),
                            },
                        },
                    },
                    ExclusionPatterns: []string{
                        "quibusdam",
                        "commodi",
                        "esse",
                        "explicabo",
                    },
                    InclusionPatterns: []string{
                        "temporibus",
                    },
                    PageConfiguration: &shared.ConfluencePageConfiguration{
                        PageFieldMappings: []shared.ConfluencePageToIndexFieldMapping{
                            shared.ConfluencePageToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluencePageFieldNameEnumAuthor.ToPointer(),
                                DateFieldFormat: sdk.String("maiores"),
                                IndexFieldName: sdk.String("exercitationem"),
                            },
                            shared.ConfluencePageToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluencePageFieldNameEnumParentID.ToPointer(),
                                DateFieldFormat: sdk.String("repudiandae"),
                                IndexFieldName: sdk.String("aspernatur"),
                            },
                            shared.ConfluencePageToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluencePageFieldNameEnumVersion.ToPointer(),
                                DateFieldFormat: sdk.String("neque"),
                                IndexFieldName: sdk.String("officia"),
                            },
                            shared.ConfluencePageToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluencePageFieldNameEnumItemType.ToPointer(),
                                DateFieldFormat: sdk.String("harum"),
                                IndexFieldName: sdk.String("ducimus"),
                            },
                        },
                    },
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("doloremque"),
                        Host: "perferendis",
                        Port: 514480,
                    },
                    SecretArn: "iusto",
                    ServerURL: "corrupti",
                    SpaceConfiguration: &shared.ConfluenceSpaceConfiguration{
                        CrawlArchivedSpaces: sdk.Bool(false),
                        CrawlPersonalSpaces: sdk.Bool(false),
                        ExcludeSpaces: []string{
                            "quis",
                            "iure",
                        },
                        IncludeSpaces: []string{
                            "quaerat",
                        },
                        SpaceFieldMappings: []shared.ConfluenceSpaceToIndexFieldMapping{
                            shared.ConfluenceSpaceToIndexFieldMapping{
                                DataSourceFieldName: shared.ConfluenceSpaceFieldNameEnumURL.ToPointer(),
                                DateFieldFormat: sdk.String("corporis"),
                                IndexFieldName: sdk.String("est"),
                            },
                        },
                    },
                    Version: shared.ConfluenceVersionEnumCloud,
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "provident",
                            "laudantium",
                            "nam",
                            "nemo",
                        },
                        SubnetIds: []string{
                            "ipsam",
                            "minima",
                        },
                    },
                },
                DatabaseConfiguration: &shared.DatabaseConfiguration{
                    ACLConfiguration: &shared.ACLConfiguration{
                        AllowedGroupsColumnName: "tempora",
                    },
                    ColumnConfiguration: shared.ColumnConfiguration{
                        ChangeDetectingColumns: []string{
                            "corrupti",
                        },
                        DocumentDataColumnName: "doloremque",
                        DocumentIDColumnName: "fugiat",
                        DocumentTitleColumnName: sdk.String("numquam"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "cum",
                                DateFieldFormat: sdk.String("nobis"),
                                IndexFieldName: "similique",
                            },
                        },
                    },
                    ConnectionConfiguration: shared.ConnectionConfiguration{
                        DatabaseHost: "porro",
                        DatabaseName: "impedit",
                        DatabasePort: 394724,
                        SecretArn: "cumque",
                        TableName: "soluta",
                    },
                    DatabaseEngineType: shared.DatabaseEngineTypeEnumRdsPostgresql,
                    SQLConfiguration: &shared.SQLConfiguration{
                        QueryIdentifiersEnclosingOption: shared.QueryIdentifiersEnclosingOptionEnumDoubleQuotes.ToPointer(),
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "enim",
                            "maiores",
                            "consectetur",
                        },
                        SubnetIds: []string{
                            "maxime",
                            "cupiditate",
                            "voluptatem",
                            "provident",
                        },
                    },
                },
                FsxConfiguration: &shared.FsxConfiguration{
                    ExclusionPatterns: []string{
                        "accusantium",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "repellat",
                            DateFieldFormat: sdk.String("omnis"),
                            IndexFieldName: "explicabo",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "vel",
                            DateFieldFormat: sdk.String("cum"),
                            IndexFieldName: "id",
                        },
                    },
                    FileSystemID: "possimus",
                    FileSystemType: shared.FsxFileSystemTypeEnumWindows,
                    InclusionPatterns: []string{
                        "ipsam",
                    },
                    SecretArn: sdk.String("nostrum"),
                    VpcConfiguration: shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "voluptatum",
                        },
                        SubnetIds: []string{
                            "error",
                        },
                    },
                },
                GitHubConfiguration: &shared.GitHubConfiguration{
                    ExclusionFileNamePatterns: []string{
                        "tempora",
                        "voluptate",
                        "eius",
                    },
                    ExclusionFileTypePatterns: []string{
                        "aperiam",
                        "voluptates",
                        "possimus",
                    },
                    ExclusionFolderNamePatterns: []string{
                        "voluptatem",
                    },
                    GitHubCommitConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "corporis",
                            DateFieldFormat: sdk.String("ea"),
                            IndexFieldName: "eos",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "aliquam",
                            DateFieldFormat: sdk.String("blanditiis"),
                            IndexFieldName: "hic",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "maiores",
                            DateFieldFormat: sdk.String("asperiores"),
                            IndexFieldName: "autem",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "nesciunt",
                            DateFieldFormat: sdk.String("cupiditate"),
                            IndexFieldName: "animi",
                        },
                    },
                    GitHubDocumentCrawlProperties: &shared.GitHubDocumentCrawlProperties{
                        CrawlIssue: sdk.Bool(false),
                        CrawlIssueComment: sdk.Bool(false),
                        CrawlIssueCommentAttachment: sdk.Bool(false),
                        CrawlPullRequest: sdk.Bool(false),
                        CrawlPullRequestComment: sdk.Bool(false),
                        CrawlPullRequestCommentAttachment: sdk.Bool(false),
                        CrawlRepositoryDocuments: sdk.Bool(false),
                    },
                    GitHubIssueAttachmentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "beatae",
                            DateFieldFormat: sdk.String("ipsa"),
                            IndexFieldName: "mollitia",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "nam",
                            DateFieldFormat: sdk.String("assumenda"),
                            IndexFieldName: "quo",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "fuga",
                            DateFieldFormat: sdk.String("tempore"),
                            IndexFieldName: "commodi",
                        },
                    },
                    GitHubIssueCommentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "suscipit",
                            DateFieldFormat: sdk.String("voluptate"),
                            IndexFieldName: "nisi",
                        },
                    },
                    GitHubIssueDocumentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "provident",
                            DateFieldFormat: sdk.String("laboriosam"),
                            IndexFieldName: "accusamus",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ab",
                            DateFieldFormat: sdk.String("itaque"),
                            IndexFieldName: "quisquam",
                        },
                    },
                    GitHubPullRequestCommentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "alias",
                            DateFieldFormat: sdk.String("qui"),
                            IndexFieldName: "consequuntur",
                        },
                    },
                    GitHubPullRequestDocumentAttachmentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quidem",
                            DateFieldFormat: sdk.String("sequi"),
                            IndexFieldName: "amet",
                        },
                    },
                    GitHubPullRequestDocumentConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "illum",
                            DateFieldFormat: sdk.String("praesentium"),
                            IndexFieldName: "unde",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "similique",
                            DateFieldFormat: sdk.String("eligendi"),
                            IndexFieldName: "tempore",
                        },
                    },
                    GitHubRepositoryConfigurationFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "debitis",
                            DateFieldFormat: sdk.String("nobis"),
                            IndexFieldName: "asperiores",
                        },
                    },
                    InclusionFileNamePatterns: []string{
                        "id",
                        "atque",
                        "quibusdam",
                        "sit",
                    },
                    InclusionFileTypePatterns: []string{
                        "veniam",
                        "aliquam",
                        "provident",
                        "vero",
                    },
                    InclusionFolderNamePatterns: []string{
                        "doloremque",
                        "ipsum",
                        "alias",
                        "doloremque",
                    },
                    OnPremiseConfiguration: &shared.OnPremiseConfiguration{
                        HostURL: "tempora",
                        OrganizationName: "perspiciatis",
                        SslCertificateS3Path: shared.S3Path{
                            Bucket: "quam",
                            Key: "atque",
                        },
                    },
                    RepositoryFilter: []string{
                        "ex",
                        "architecto",
                        "a",
                    },
                    SaaSConfiguration: &shared.SaaSConfiguration{
                        HostURL: "laborum",
                        OrganizationName: "veritatis",
                    },
                    SecretArn: "quod",
                    Type: shared.TypeEnumOnPremise.ToPointer(),
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "accusantium",
                        },
                        SubnetIds: []string{
                            "atque",
                            "totam",
                        },
                    },
                },
                GoogleDriveConfiguration: &shared.GoogleDriveConfiguration{
                    ExcludeMimeTypes: []string{
                        "voluptate",
                        "quam",
                        "quod",
                        "vitae",
                    },
                    ExcludeSharedDrives: []string{
                        "reiciendis",
                        "quod",
                        "voluptate",
                        "inventore",
                    },
                    ExcludeUserAccounts: []string{
                        "maxime",
                        "fuga",
                        "ab",
                        "ex",
                    },
                    ExclusionPatterns: []string{
                        "maiores",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "animi",
                            DateFieldFormat: sdk.String("sequi"),
                            IndexFieldName: "eligendi",
                        },
                    },
                    InclusionPatterns: []string{
                        "perferendis",
                        "laborum",
                        "omnis",
                    },
                    SecretArn: "nihil",
                },
                JiraConfiguration: &shared.JiraConfiguration{
                    AttachmentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sapiente",
                            DateFieldFormat: sdk.String("velit"),
                            IndexFieldName: "adipisci",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "non",
                            DateFieldFormat: sdk.String("optio"),
                            IndexFieldName: "illum",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "at",
                            DateFieldFormat: sdk.String("tenetur"),
                            IndexFieldName: "molestias",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ipsam",
                            DateFieldFormat: sdk.String("esse"),
                            IndexFieldName: "laborum",
                        },
                    },
                    CommentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "voluptates",
                            DateFieldFormat: sdk.String("eum"),
                            IndexFieldName: "quasi",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quas",
                            DateFieldFormat: sdk.String("odio"),
                            IndexFieldName: "commodi",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "porro",
                            DateFieldFormat: sdk.String("aliquid"),
                            IndexFieldName: "mollitia",
                        },
                    },
                    ExclusionPatterns: []string{
                        "explicabo",
                        "et",
                        "nulla",
                    },
                    InclusionPatterns: []string{
                        "natus",
                    },
                    IssueFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "a",
                            DateFieldFormat: sdk.String("impedit"),
                            IndexFieldName: "unde",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ut",
                            DateFieldFormat: sdk.String("facere"),
                            IndexFieldName: "voluptas",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "doloribus",
                            DateFieldFormat: sdk.String("recusandae"),
                            IndexFieldName: "quisquam",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "facere",
                            DateFieldFormat: sdk.String("dignissimos"),
                            IndexFieldName: "iste",
                        },
                    },
                    IssueSubEntityFilter: []shared.IssueSubEntityEnum{
                        shared.IssueSubEntityEnumComments,
                        shared.IssueSubEntityEnumAttachments,
                        shared.IssueSubEntityEnumComments,
                    },
                    IssueType: []string{
                        "eum",
                    },
                    JiraAccountURL: "laboriosam",
                    Project: []string{
                        "autem",
                        "assumenda",
                        "explicabo",
                    },
                    ProjectFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "doloremque",
                            DateFieldFormat: sdk.String("voluptatem"),
                            IndexFieldName: "alias",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "velit",
                            DateFieldFormat: sdk.String("ullam"),
                            IndexFieldName: "quis",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "velit",
                            DateFieldFormat: sdk.String("ratione"),
                            IndexFieldName: "quas",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "maxime",
                            DateFieldFormat: sdk.String("recusandae"),
                            IndexFieldName: "cumque",
                        },
                    },
                    SecretArn: "doloremque",
                    Status: []string{
                        "iure",
                        "maiores",
                        "est",
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "veritatis",
                        },
                        SubnetIds: []string{
                            "iste",
                            "dicta",
                            "ipsam",
                            "consequuntur",
                        },
                    },
                    WorkLogFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quidem",
                            DateFieldFormat: sdk.String("non"),
                            IndexFieldName: "beatae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "sunt",
                            DateFieldFormat: sdk.String("molestias"),
                            IndexFieldName: "beatae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "autem",
                            DateFieldFormat: sdk.String("ducimus"),
                            IndexFieldName: "libero",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "molestias",
                            DateFieldFormat: sdk.String("necessitatibus"),
                            IndexFieldName: "ipsum",
                        },
                    },
                },
                OneDriveConfiguration: &shared.OneDriveConfiguration{
                    DisableLocalGroups: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "quos",
                        "illum",
                        "distinctio",
                        "voluptatem",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quaerat",
                            DateFieldFormat: sdk.String("consequatur"),
                            IndexFieldName: "laudantium",
                        },
                    },
                    InclusionPatterns: []string{
                        "commodi",
                        "quibusdam",
                        "consectetur",
                        "voluptas",
                    },
                    OneDriveUsers: shared.OneDriveUsers{
                        OneDriveUserList: []string{
                            "earum",
                            "tenetur",
                        },
                        OneDriveUserS3Path: &shared.S3Path{
                            Bucket: "assumenda",
                            Key: "dolore",
                        },
                    },
                    SecretArn: "enim",
                    TenantDomain: "ullam",
                },
                QuipConfiguration: &shared.QuipConfiguration{
                    AttachmentFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "alias",
                            DateFieldFormat: sdk.String("ex"),
                            IndexFieldName: "quibusdam",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "dicta",
                            DateFieldFormat: sdk.String("quia"),
                            IndexFieldName: "commodi",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "neque",
                            DateFieldFormat: sdk.String("quibusdam"),
                            IndexFieldName: "numquam",
                        },
                    },
                    CrawlAttachments: sdk.Bool(false),
                    CrawlChatRooms: sdk.Bool(false),
                    CrawlFileComments: sdk.Bool(false),
                    Domain: "rem",
                    ExclusionPatterns: []string{
                        "omnis",
                        "neque",
                        "corporis",
                        "quod",
                    },
                    FolderIds: []string{
                        "placeat",
                    },
                    InclusionPatterns: []string{
                        "recusandae",
                        "quos",
                        "dicta",
                    },
                    MessageFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "ipsum",
                            DateFieldFormat: sdk.String("consequatur"),
                            IndexFieldName: "soluta",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "necessitatibus",
                            DateFieldFormat: sdk.String("sequi"),
                            IndexFieldName: "recusandae",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "labore",
                            DateFieldFormat: sdk.String("adipisci"),
                            IndexFieldName: "magni",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "aperiam",
                            DateFieldFormat: sdk.String("dolores"),
                            IndexFieldName: "illum",
                        },
                    },
                    SecretArn: "iusto",
                    ThreadFieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "beatae",
                            DateFieldFormat: sdk.String("aliquid"),
                            IndexFieldName: "ad",
                        },
                    },
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "vel",
                            "minima",
                        },
                        SubnetIds: []string{
                            "vel",
                        },
                    },
                },
                S3Configuration: &shared.S3DataSourceConfiguration{
                    AccessControlListConfiguration: &shared.AccessControlListConfiguration{
                        KeyPath: sdk.String("laboriosam"),
                    },
                    BucketName: "quaerat",
                    DocumentsMetadataConfiguration: &shared.DocumentsMetadataConfiguration{
                        S3Prefix: sdk.String("quasi"),
                    },
                    ExclusionPatterns: []string{
                        "dignissimos",
                        "doloremque",
                        "assumenda",
                    },
                    InclusionPatterns: []string{
                        "facere",
                        "sed",
                        "inventore",
                    },
                    InclusionPrefixes: []string{
                        "unde",
                        "deserunt",
                        "repellendus",
                        "consequatur",
                    },
                },
                SalesforceConfiguration: &shared.SalesforceConfiguration{
                    ChatterFeedConfiguration: &shared.SalesforceChatterFeedConfiguration{
                        DocumentDataFieldName: "adipisci",
                        DocumentTitleFieldName: sdk.String("doloremque"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "tempora",
                                DateFieldFormat: sdk.String("debitis"),
                                IndexFieldName: "cumque",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "maxime",
                                DateFieldFormat: sdk.String("et"),
                                IndexFieldName: "beatae",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "id",
                                DateFieldFormat: sdk.String("consequatur"),
                                IndexFieldName: "quos",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "ratione",
                                DateFieldFormat: sdk.String("iure"),
                                IndexFieldName: "tempora",
                            },
                        },
                        IncludeFilterTypes: []shared.SalesforceChatterFeedIncludeFilterTypeEnum{
                            shared.SalesforceChatterFeedIncludeFilterTypeEnumStandardUser,
                        },
                    },
                    CrawlAttachments: sdk.Bool(false),
                    ExcludeAttachmentFilePatterns: []string{
                        "suscipit",
                    },
                    IncludeAttachmentFilePatterns: []string{
                        "facilis",
                        "laudantium",
                        "ullam",
                    },
                    KnowledgeArticleConfiguration: &shared.SalesforceKnowledgeArticleConfiguration{
                        CustomKnowledgeArticleTypeConfigurations: []shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                            shared.SalesforceCustomKnowledgeArticleTypeConfiguration{
                                DocumentDataFieldName: "quia",
                                DocumentTitleFieldName: sdk.String("officia"),
                                FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "corporis",
                                        DateFieldFormat: sdk.String("accusamus"),
                                        IndexFieldName: "iusto",
                                    },
                                    shared.DataSourceToIndexFieldMapping{
                                        DataSourceFieldName: "sapiente",
                                        DateFieldFormat: sdk.String("esse"),
                                        IndexFieldName: "neque",
                                    },
                                },
                                Name: "Devin Lakin",
                            },
                        },
                        IncludedStates: []shared.SalesforceKnowledgeArticleStateEnum{
                            shared.SalesforceKnowledgeArticleStateEnumDraft,
                            shared.SalesforceKnowledgeArticleStateEnumDraft,
                            shared.SalesforceKnowledgeArticleStateEnumDraft,
                            shared.SalesforceKnowledgeArticleStateEnumPublished,
                        },
                        StandardKnowledgeArticleTypeConfiguration: &shared.SalesforceStandardKnowledgeArticleTypeConfiguration{
                            DocumentDataFieldName: "amet",
                            DocumentTitleFieldName: sdk.String("veritatis"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "voluptatibus",
                                    DateFieldFormat: sdk.String("numquam"),
                                    IndexFieldName: "rerum",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "dolorum",
                                    DateFieldFormat: sdk.String("quibusdam"),
                                    IndexFieldName: "earum",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "excepturi",
                                    DateFieldFormat: sdk.String("numquam"),
                                    IndexFieldName: "molestiae",
                                },
                            },
                        },
                    },
                    SecretArn: "impedit",
                    ServerURL: "error",
                    StandardObjectAttachmentConfiguration: &shared.SalesforceStandardObjectAttachmentConfiguration{
                        DocumentTitleFieldName: sdk.String("animi"),
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "aliquid",
                                DateFieldFormat: sdk.String("nihil"),
                                IndexFieldName: "facilis",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "optio",
                                DateFieldFormat: sdk.String("incidunt"),
                                IndexFieldName: "eos",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "magnam",
                                DateFieldFormat: sdk.String("dolores"),
                                IndexFieldName: "aliquid",
                            },
                        },
                    },
                    StandardObjectConfigurations: []shared.SalesforceStandardObjectConfiguration{
                        shared.SalesforceStandardObjectConfiguration{
                            DocumentDataFieldName: "vel",
                            DocumentTitleFieldName: sdk.String("ad"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "illo",
                                    DateFieldFormat: sdk.String("suscipit"),
                                    IndexFieldName: "quibusdam",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "fugiat",
                                    DateFieldFormat: sdk.String("impedit"),
                                    IndexFieldName: "culpa",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "atque",
                                    DateFieldFormat: sdk.String("voluptates"),
                                    IndexFieldName: "maiores",
                                },
                            },
                            Name: shared.SalesforceStandardObjectNameEnumGroup,
                        },
                        shared.SalesforceStandardObjectConfiguration{
                            DocumentDataFieldName: "illo",
                            DocumentTitleFieldName: sdk.String("doloribus"),
                            FieldMappings: []shared.DataSourceToIndexFieldMapping{
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "expedita",
                                    DateFieldFormat: sdk.String("modi"),
                                    IndexFieldName: "cumque",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "ipsam",
                                    DateFieldFormat: sdk.String("occaecati"),
                                    IndexFieldName: "ipsum",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "accusamus",
                                    DateFieldFormat: sdk.String("quisquam"),
                                    IndexFieldName: "quasi",
                                },
                                shared.DataSourceToIndexFieldMapping{
                                    DataSourceFieldName: "fugit",
                                    DateFieldFormat: sdk.String("quo"),
                                    IndexFieldName: "temporibus",
                                },
                            },
                            Name: shared.SalesforceStandardObjectNameEnumPricebook,
                        },
                    },
                },
                ServiceNowConfiguration: &shared.ServiceNowConfiguration{
                    AuthenticationType: shared.ServiceNowAuthenticationTypeEnumOauth2.ToPointer(),
                    HostURL: "quibusdam",
                    KnowledgeArticleConfiguration: &shared.ServiceNowKnowledgeArticleConfiguration{
                        CrawlAttachments: sdk.Bool(false),
                        DocumentDataFieldName: "ipsa",
                        DocumentTitleFieldName: sdk.String("accusamus"),
                        ExcludeAttachmentFilePatterns: []string{
                            "quam",
                            "similique",
                            "delectus",
                            "saepe",
                        },
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "nobis",
                                DateFieldFormat: sdk.String("at"),
                                IndexFieldName: "molestias",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "aut",
                                DateFieldFormat: sdk.String("temporibus"),
                                IndexFieldName: "tenetur",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "incidunt",
                                DateFieldFormat: sdk.String("numquam"),
                                IndexFieldName: "corrupti",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "similique",
                                DateFieldFormat: sdk.String("dolore"),
                                IndexFieldName: "esse",
                            },
                        },
                        FilterQuery: sdk.String("reiciendis"),
                        IncludeAttachmentFilePatterns: []string{
                            "amet",
                            "occaecati",
                            "aut",
                        },
                    },
                    SecretArn: "impedit",
                    ServiceCatalogConfiguration: &shared.ServiceNowServiceCatalogConfiguration{
                        CrawlAttachments: sdk.Bool(false),
                        DocumentDataFieldName: "minima",
                        DocumentTitleFieldName: sdk.String("quos"),
                        ExcludeAttachmentFilePatterns: []string{
                            "quas",
                            "voluptatem",
                            "provident",
                        },
                        FieldMappings: []shared.DataSourceToIndexFieldMapping{
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "ipsum",
                                DateFieldFormat: sdk.String("vero"),
                                IndexFieldName: "fuga",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "facilis",
                                DateFieldFormat: sdk.String("maiores"),
                                IndexFieldName: "error",
                            },
                            shared.DataSourceToIndexFieldMapping{
                                DataSourceFieldName: "recusandae",
                                DateFieldFormat: sdk.String("a"),
                                IndexFieldName: "consectetur",
                            },
                        },
                        IncludeAttachmentFilePatterns: []string{
                            "voluptatibus",
                            "assumenda",
                            "repellendus",
                            "omnis",
                        },
                    },
                    ServiceNowBuildVersion: shared.ServiceNowBuildVersionTypeEnumOthers,
                },
                SharePointConfiguration: &shared.SharePointConfiguration{
                    AuthenticationType: shared.SharePointOnlineAuthenticationTypeEnumHTTPBasic.ToPointer(),
                    CrawlAttachments: sdk.Bool(false),
                    DisableLocalGroups: sdk.Bool(false),
                    DocumentTitleFieldName: sdk.String("voluptatibus"),
                    ExclusionPatterns: []string{
                        "quam",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "similique",
                            DateFieldFormat: sdk.String("asperiores"),
                            IndexFieldName: "modi",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "facere",
                            DateFieldFormat: sdk.String("neque"),
                            IndexFieldName: "quis",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "in",
                            DateFieldFormat: sdk.String("sed"),
                            IndexFieldName: "non",
                        },
                    },
                    InclusionPatterns: []string{
                        "fugiat",
                        "soluta",
                        "ipsa",
                        "reiciendis",
                    },
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("labore"),
                        Host: "vero",
                        Port: 177651,
                    },
                    SecretArn: "quas",
                    SharePointVersion: shared.SharePointVersionEnumSharepoint2013,
                    SslCertificateS3Path: &shared.S3Path{
                        Bucket: "architecto",
                        Key: "praesentium",
                    },
                    Urls: []string{
                        "fugiat",
                        "enim",
                    },
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "laudantium",
                            "modi",
                        },
                        SubnetIds: []string{
                            "accusamus",
                            "nulla",
                        },
                    },
                },
                SlackConfiguration: &shared.SlackConfiguration{
                    CrawlBotMessage: sdk.Bool(false),
                    ExcludeArchived: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "quibusdam",
                        "praesentium",
                        "enim",
                        "animi",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "quae",
                            DateFieldFormat: sdk.String("eum"),
                            IndexFieldName: "nostrum",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "eveniet",
                            DateFieldFormat: sdk.String("laboriosam"),
                            IndexFieldName: "ratione",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "blanditiis",
                            DateFieldFormat: sdk.String("quidem"),
                            IndexFieldName: "illum",
                        },
                    },
                    InclusionPatterns: []string{
                        "placeat",
                        "dolores",
                        "consequatur",
                        "nesciunt",
                    },
                    LookBackPeriod: sdk.Int64(155371),
                    PrivateChannelFilter: []string{
                        "voluptas",
                        "quo",
                        "laudantium",
                    },
                    PublicChannelFilter: []string{
                        "omnis",
                        "omnis",
                    },
                    SecretArn: "fugit",
                    SinceCrawlDate: "dolorem",
                    SlackEntityList: []shared.SlackEntityEnum{
                        shared.SlackEntityEnumPrivateChannel,
                        shared.SlackEntityEnumDirectMessage,
                        shared.SlackEntityEnumPublicChannel,
                    },
                    TeamID: "dolor",
                    UseChangeLog: sdk.Bool(false),
                    VpcConfiguration: &shared.DataSourceVpcConfiguration{
                        SecurityGroupIds: []string{
                            "atque",
                            "ut",
                        },
                        SubnetIds: []string{
                            "reprehenderit",
                            "deserunt",
                            "itaque",
                            "et",
                        },
                    },
                },
                TemplateConfiguration: &shared.TemplateConfiguration{
                    Template: map[string]interface{}{
                        "impedit": "ex",
                    },
                },
                WebCrawlerConfiguration: &shared.WebCrawlerConfiguration{
                    AuthenticationConfiguration: &shared.AuthenticationConfiguration{
                        BasicAuthentication: []shared.BasicAuthenticationConfiguration{
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "natus",
                                Host: "vitae",
                                Port: 946558,
                            },
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "laudantium",
                                Host: "aspernatur",
                                Port: 755240,
                            },
                            shared.BasicAuthenticationConfiguration{
                                Credentials: "repudiandae",
                                Host: "dicta",
                                Port: 81053,
                            },
                        },
                    },
                    CrawlDepth: sdk.Int64(356256),
                    MaxContentSizePerPageInMegaBytes: sdk.Float32(4807.41),
                    MaxLinksPerPage: sdk.Int64(82396),
                    MaxUrlsPerMinuteCrawlRate: sdk.Int64(454590),
                    ProxyConfiguration: &shared.ProxyConfiguration{
                        Credentials: sdk.String("sed"),
                        Host: "dolorem",
                        Port: 52497,
                    },
                    URLExclusionPatterns: []string{
                        "amet",
                        "voluptate",
                    },
                    URLInclusionPatterns: []string{
                        "pariatur",
                        "minus",
                    },
                    Urls: shared.Urls{
                        SeedURLConfiguration: &shared.SeedURLConfiguration{
                            SeedUrls: []string{
                                "fuga",
                                "totam",
                                "cupiditate",
                                "at",
                            },
                            WebCrawlerMode: shared.WebCrawlerModeEnumEverything.ToPointer(),
                        },
                        SiteMapsConfiguration: &shared.SiteMapsConfiguration{
                            SiteMaps: []string{
                                "quam",
                                "exercitationem",
                                "voluptates",
                            },
                        },
                    },
                },
                WorkDocsConfiguration: &shared.WorkDocsConfiguration{
                    CrawlComments: sdk.Bool(false),
                    ExclusionPatterns: []string{
                        "quis",
                    },
                    FieldMappings: []shared.DataSourceToIndexFieldMapping{
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "vel",
                            DateFieldFormat: sdk.String("rem"),
                            IndexFieldName: "aliquid",
                        },
                        shared.DataSourceToIndexFieldMapping{
                            DataSourceFieldName: "aperiam",
                            DateFieldFormat: sdk.String("perspiciatis"),
                            IndexFieldName: "fugit",
                        },
                    },
                    InclusionPatterns: []string{
                        "unde",
                        "cumque",
                        "dolor",
                        "repellendus",
                    },
                    OrganizationID: "temporibus",
                    UseChangeLog: sdk.Bool(false),
                },
            },
            CustomDocumentEnrichmentConfiguration: &shared.CustomDocumentEnrichmentConfiguration{
                InlineConfigurations: []shared.InlineCustomDocumentEnrichmentConfiguration{
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "minima",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-09-08T04:57:24.220Z"),
                                LongValue: sdk.Int64(114212),
                                StringListValue: []string{
                                    "facere",
                                },
                                StringValue: sdk.String("earum"),
                            },
                            Operator: shared.ConditionOperatorEnumNotContains,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("dicta"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-11-10T13:37:48.824Z"),
                                LongValue: sdk.Int64(398847),
                                StringListValue: []string{
                                    "enim",
                                    "numquam",
                                    "architecto",
                                    "est",
                                },
                                StringValue: sdk.String("quaerat"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "facere",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-05-24T09:05:50.897Z"),
                                LongValue: sdk.Int64(3860),
                                StringListValue: []string{
                                    "officiis",
                                    "expedita",
                                    "quia",
                                    "vitae",
                                },
                                StringValue: sdk.String("odio"),
                            },
                            Operator: shared.ConditionOperatorEnumContains,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("ipsa"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-05-18T07:27:34.126Z"),
                                LongValue: sdk.Int64(801958),
                                StringListValue: []string{
                                    "sit",
                                    "possimus",
                                    "distinctio",
                                    "distinctio",
                                },
                                StringValue: sdk.String("assumenda"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "illum",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-05-28T22:51:49.912Z"),
                                LongValue: sdk.Int64(512349),
                                StringListValue: []string{
                                    "esse",
                                    "doloremque",
                                },
                                StringValue: sdk.String("corrupti"),
                            },
                            Operator: shared.ConditionOperatorEnumBeginsWith,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("facilis"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-01-29T03:16:14.679Z"),
                                LongValue: sdk.Int64(227424),
                                StringListValue: []string{
                                    "ab",
                                    "officiis",
                                    "eum",
                                },
                                StringValue: sdk.String("rerum"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                    shared.InlineCustomDocumentEnrichmentConfiguration{
                        Condition: &shared.DocumentAttributeCondition{
                            ConditionDocumentAttributeKey: "placeat",
                            ConditionOnValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2022-09-06T08:22:07.307Z"),
                                LongValue: sdk.Int64(500828),
                                StringListValue: []string{
                                    "labore",
                                    "impedit",
                                    "ut",
                                    "earum",
                                },
                                StringValue: sdk.String("ullam"),
                            },
                            Operator: shared.ConditionOperatorEnumLessThan,
                        },
                        DocumentContentDeletion: sdk.Bool(false),
                        Target: &shared.DocumentAttributeTarget{
                            TargetDocumentAttributeKey: sdk.String("enim"),
                            TargetDocumentAttributeValue: &shared.DocumentAttributeValue{
                                DateValue: types.MustTimeFromString("2021-11-04T14:45:11.041Z"),
                                LongValue: sdk.Int64(929443),
                                StringListValue: []string{
                                    "consectetur",
                                    "modi",
                                    "aspernatur",
                                },
                                StringValue: sdk.String("explicabo"),
                            },
                            TargetDocumentAttributeValueDeletion: sdk.Bool(false),
                        },
                    },
                },
                PostExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "suscipit",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2022-02-02T16:48:44.255Z"),
                            LongValue: sdk.Int64(575753),
                            StringListValue: []string{
                                "qui",
                                "accusantium",
                                "consequatur",
                            },
                            StringValue: sdk.String("impedit"),
                        },
                        Operator: shared.ConditionOperatorEnumBeginsWith,
                    },
                    LambdaArn: "voluptate",
                    S3Bucket: "deleniti",
                },
                PreExtractionHookConfiguration: &shared.HookConfiguration{
                    InvocationCondition: &shared.DocumentAttributeCondition{
                        ConditionDocumentAttributeKey: "est",
                        ConditionOnValue: &shared.DocumentAttributeValue{
                            DateValue: types.MustTimeFromString("2022-04-16T16:10:02.604Z"),
                            LongValue: sdk.Int64(842921),
                            StringListValue: []string{
                                "maiores",
                                "quidem",
                                "in",
                            },
                            StringValue: sdk.String("culpa"),
                        },
                        Operator: shared.ConditionOperatorEnumGreaterThan,
                    },
                    LambdaArn: "fuga",
                    S3Bucket: "dicta",
                },
                RoleArn: sdk.String("architecto"),
            },
            Description: sdk.String("suscipit"),
            ID: "ce723d40-97fa-430e-9af7-25b29122030d",
            IndexID: "voluptatum",
            LanguageCode: sdk.String("velit"),
            Name: sdk.String("Dan Nolan"),
            RoleArn: sdk.String("iusto"),
            Schedule: sdk.String("dignissimos"),
            VpcConfiguration: &shared.DataSourceVpcConfiguration{
                SecurityGroupIds: []string{
                    "occaecati",
                    "assumenda",
                    "sunt",
                },
                SubnetIds: []string{
                    "vero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.UpdateDataSourceXAmzTargetEnumAwsKendraFrontendServiceUpdateDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateExperience

Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateExperience(ctx, operations.UpdateExperienceRequest{
        UpdateExperienceRequest: shared.UpdateExperienceRequest{
            Configuration: &shared.ExperienceConfiguration{
                ContentSourceConfiguration: &shared.ContentSourceConfiguration{
                    DataSourceIds: []string{
                        "corrupti",
                    },
                    DirectPutContent: sdk.Bool(false),
                    FaqIds: []string{
                        "nemo",
                    },
                },
                UserIdentityConfiguration: &shared.UserIdentityConfiguration{
                    IdentityAttributeName: sdk.String("delectus"),
                },
            },
            Description: sdk.String("illum"),
            ID: "c42c876c-2c2d-4fb4-8fc1-c76230f841fb",
            IndexID: "architecto",
            Name: sdk.String("Kristopher Dare"),
            RoleArn: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.UpdateExperienceXAmzTargetEnumAwsKendraFrontendServiceUpdateExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFeaturedResultsSet

Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFeaturedResultsSet(ctx, operations.UpdateFeaturedResultsSetRequest{
        UpdateFeaturedResultsSetRequest: shared.UpdateFeaturedResultsSetRequest{
            Description: sdk.String("recusandae"),
            FeaturedDocuments: []shared.FeaturedDocument{
                shared.FeaturedDocument{
                    ID: sdk.String("a685998e-22ae-420d-a16f-c2b271a289c5"),
                },
                shared.FeaturedDocument{
                    ID: sdk.String("7e854e90-439d-4222-8656-9462407084f7"),
                },
            },
            FeaturedResultsSetID: "dolorum",
            FeaturedResultsSetName: sdk.String("libero"),
            IndexID: "ratione",
            QueryTexts: []string{
                "optio",
                "saepe",
            },
            Status: shared.FeaturedResultsSetStatusEnumInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.UpdateFeaturedResultsSetXAmzTargetEnumAwsKendraFrontendServiceUpdateFeaturedResultsSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFeaturedResultsSetResponse != nil {
        // handle response
    }
}
```

## UpdateIndex

Updates an existing Amazon Kendra index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateIndex(ctx, operations.UpdateIndexRequest{
        UpdateIndexRequest: shared.UpdateIndexRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                QueryCapacityUnits: 290761,
                StorageCapacityUnits: 852737,
            },
            Description: sdk.String("quidem"),
            DocumentMetadataConfigurationUpdates: []shared.DocumentMetadataConfiguration{
                shared.DocumentMetadataConfiguration{
                    Name: "Miss Emma Boyer",
                    Relevance: &shared.Relevance{
                        Duration: sdk.String("quo"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(379666),
                        RankOrder: shared.OrderEnumAscending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "est": 983556,
                            "provident": 1594,
                            "deserunt": 145450,
                        },
                    },
                    Search: &shared.Search{
                        Displayable: sdk.Bool(false),
                        Facetable: sdk.Bool(false),
                        Searchable: sdk.Bool(false),
                        Sortable: sdk.Bool(false),
                    },
                    Type: shared.DocumentAttributeValueTypeEnumStringListValue,
                },
                shared.DocumentMetadataConfiguration{
                    Name: "Clinton Schneider",
                    Relevance: &shared.Relevance{
                        Duration: sdk.String("cupiditate"),
                        Freshness: sdk.Bool(false),
                        Importance: sdk.Int64(536999),
                        RankOrder: shared.OrderEnumAscending.ToPointer(),
                        ValueImportanceMap: map[string]int64{
                            "voluptatem": 396184,
                            "laudantium": 601944,
                            "corrupti": 63369,
                            "facere": 409857,
                        },
                    },
                    Search: &shared.Search{
                        Displayable: sdk.Bool(false),
                        Facetable: sdk.Bool(false),
                        Searchable: sdk.Bool(false),
                        Sortable: sdk.Bool(false),
                    },
                    Type: shared.DocumentAttributeValueTypeEnumLongValue,
                },
            },
            ID: "b33cfaa3-48c3-41bf-807e-e4fcf0c42b78",
            Name: sdk.String("Gerald Herman"),
            RoleArn: sdk.String("voluptas"),
            UserContextPolicy: shared.UserContextPolicyEnumAttributeFilter.ToPointer(),
            UserGroupResolutionConfiguration: &shared.UserGroupResolutionConfiguration{
                UserGroupResolutionMode: shared.UserGroupResolutionModeEnumNone,
            },
            UserTokenConfigurations: []shared.UserTokenConfiguration{
                shared.UserTokenConfiguration{
                    JSONTokenTypeConfiguration: &shared.JSONTokenTypeConfiguration{
                        GroupAttributeField: "est",
                        UserNameAttributeField: "perferendis",
                    },
                    JwtTokenTypeConfiguration: &shared.JwtTokenTypeConfiguration{
                        ClaimRegex: sdk.String("quibusdam"),
                        GroupAttributeField: sdk.String("impedit"),
                        Issuer: sdk.String("ducimus"),
                        KeyLocation: shared.KeyLocationEnumURL,
                        SecretManagerArn: sdk.String("nisi"),
                        URL: sdk.String("dolor"),
                        UserNameAttributeField: sdk.String("fugit"),
                    },
                },
                shared.UserTokenConfiguration{
                    JSONTokenTypeConfiguration: &shared.JSONTokenTypeConfiguration{
                        GroupAttributeField: "dolore",
                        UserNameAttributeField: "maxime",
                    },
                    JwtTokenTypeConfiguration: &shared.JwtTokenTypeConfiguration{
                        ClaimRegex: sdk.String("maxime"),
                        GroupAttributeField: sdk.String("expedita"),
                        Issuer: sdk.String("accusantium"),
                        KeyLocation: shared.KeyLocationEnumURL,
                        SecretManagerArn: sdk.String("impedit"),
                        URL: sdk.String("totam"),
                        UserNameAttributeField: sdk.String("optio"),
                    },
                },
                shared.UserTokenConfiguration{
                    JSONTokenTypeConfiguration: &shared.JSONTokenTypeConfiguration{
                        GroupAttributeField: "est",
                        UserNameAttributeField: "inventore",
                    },
                    JwtTokenTypeConfiguration: &shared.JwtTokenTypeConfiguration{
                        ClaimRegex: sdk.String("consequuntur"),
                        GroupAttributeField: sdk.String("repellendus"),
                        Issuer: sdk.String("sit"),
                        KeyLocation: shared.KeyLocationEnumURL,
                        SecretManagerArn: sdk.String("enim"),
                        URL: sdk.String("aspernatur"),
                        UserNameAttributeField: sdk.String("perspiciatis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.UpdateIndexXAmzTargetEnumAwsKendraFrontendServiceUpdateIndex,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateQuerySuggestionsBlockList

<p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateQuerySuggestionsBlockList(ctx, operations.UpdateQuerySuggestionsBlockListRequest{
        UpdateQuerySuggestionsBlockListRequest: shared.UpdateQuerySuggestionsBlockListRequest{
            Description: sdk.String("odio"),
            ID: "22dd895b-8bcf-424d-b959-693352f74533",
            IndexID: "cupiditate",
            Name: sdk.String("Herbert Steuber"),
            RoleArn: sdk.String("repellendus"),
            SourceS3Path: &shared.S3Path{
                Bucket: "saepe",
                Key: "amet",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.UpdateQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceUpdateQuerySuggestionsBlockList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateQuerySuggestionsConfig

<p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateQuerySuggestionsConfig(ctx, operations.UpdateQuerySuggestionsConfigRequest{
        UpdateQuerySuggestionsConfigRequest: shared.UpdateQuerySuggestionsConfigRequest{
            IncludeQueriesWithoutUserInformation: sdk.Bool(false),
            IndexID: "voluptatibus",
            MinimumNumberOfQueryingUsers: sdk.Int64(354678),
            MinimumQueryCount: sdk.Int64(680370),
            Mode: shared.ModeEnumLearnOnly.ToPointer(),
            QueryLogLookBackWindowInDays: sdk.Int64(739946),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.UpdateQuerySuggestionsConfigXAmzTargetEnumAwsKendraFrontendServiceUpdateQuerySuggestionsConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateThesaurus

Updates a thesaurus for an index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateThesaurus(ctx, operations.UpdateThesaurusRequest{
        UpdateThesaurusRequest: shared.UpdateThesaurusRequest{
            Description: sdk.String("doloremque"),
            ID: "a28382ac-483a-4fd2-b15b-ba650164e06f",
            IndexID: "veniam",
            Name: sdk.String("Aubrey Kemmer"),
            RoleArn: sdk.String("nemo"),
            SourceS3Path: &shared.S3Path{
                Bucket: "molestias",
                Key: "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.UpdateThesaurusXAmzTargetEnumAwsKendraFrontendServiceUpdateThesaurus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
