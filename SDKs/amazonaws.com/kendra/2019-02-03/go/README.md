# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchDeleteDocumentRequest{
        Headers: operations.BatchDeleteDocumentHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSKendraFrontendService.BatchDeleteDocument",
        },
        Request: shared.BatchDeleteDocumentRequest{
            DataSourceSyncJobMetricTarget: &shared.DataSourceSyncJobMetricTarget{
                DataSourceID: "fugit",
                DataSourceSyncJobID: "et",
            },
            DocumentIDList: []string{
                "rerum",
            },
            IndexID: "dicta",
        },
    }
    
    res, err := s.BatchDeleteDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDocumentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchDeleteDocument` - <p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> operation.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>
* `BatchGetDocumentStatus` - <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> operation.</p> <p>When you use the <code>BatchPutDocument</code> operation, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> operation to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> operation to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> operation. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
* `BatchPutDocument` - <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p>
* `ClearQuerySuggestions` - <p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p>
* `CreateDataSource` - <p>Creates a data source that you use to with an Amazon Kendra index. </p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p>
* `CreateFaq` - Creates an new set of frequently asked question (FAQ) questions and answers.
* `CreateIndex` - <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> operation or using one of the supported data sources. </p>
* `CreateQuerySuggestionsBlockList` - <p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>
* `CreateThesaurus` - Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.
* `DeleteDataSource` - Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> operation is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
* `DeleteFaq` - Removes an FAQ from an index.
* `DeleteIndex` - Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> operation is set to <code>DELETING</code>.
* `DeletePrincipalMapping` - <p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p>
* `DeleteQuerySuggestionsBlockList` - <p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p>
* `DeleteThesaurus` - Deletes an existing Amazon Kendra thesaurus. 
* `DescribeDataSource` - Gets information about a Amazon Kendra data source.
* `DescribeFaq` - Gets information about an FAQ list.
* `DescribeIndex` - Describes an existing Amazon Kendra index
* `DescribePrincipalMapping` - Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.
* `DescribeQuerySuggestionsBlockList` - <p>Describes a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p>
* `DescribeQuerySuggestionsConfig` - <p>Describes the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p>
* `DescribeThesaurus` - Describes an existing Amazon Kendra thesaurus.
* `GetQuerySuggestions` - Fetches the queries that are suggested to your users.
* `ListDataSourceSyncJobs` - Gets statistics about synchronizing Amazon Kendra with a data source.
* `ListDataSources` - Lists the data sources that you have created.
* `ListFaqs` - Gets a list of FAQ lists associated with an index.
* `ListGroupsOlderThanOrderingID` - Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.
* `ListIndices` - Lists the Amazon Kendra indexes that you have created.
* `ListQuerySuggestionsBlockLists` - <p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>
* `ListTagsForResource` - Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
* `ListThesauri` - Lists the Amazon Kendra thesauri associated with an index.
* `PutPrincipalMapping` - <p>Maps users to their groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. </p> <p>You map users to their groups when you want to filter search results for different users based on their group’s access to documents. For more information on filtering search results for different users, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>
* `Query` - <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> operation enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results. </p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeConfig</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>
* `StartDataSourceSyncJob` - Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
* `StopDataSourceSyncJob` - Stops a running synchronization job. You can't stop a scheduled synchronization job.
* `SubmitFeedback` - Enables you to provide feedback to Amazon Kendra to improve the performance of your index. 
* `TagResource` - Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
* `UntagResource` - Removes a tag from an index, FAQ, or a data source.
* `UpdateDataSource` - Updates an existing Amazon Kendra data source.
* `UpdateIndex` - Updates an existing Amazon Kendra index.
* `UpdateQuerySuggestionsBlockList` - <p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p>
* `UpdateQuerySuggestionsConfig` - <p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p>
* `UpdateThesaurus` - Updates a thesaurus file associated with an index.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
