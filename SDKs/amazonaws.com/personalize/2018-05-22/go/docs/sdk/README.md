# SDK

## Overview

Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers.

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize/>
### Available Operations

* [CreateBatchInferenceJob](#createbatchinferencejob) - Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. 
* [CreateBatchSegmentJob](#createbatchsegmentjob) - Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.
* [CreateCampaign](#createcampaign) - <p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>
* [CreateDataset](#createdataset) - <p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>
* [CreateDatasetExportJob](#createdatasetexportjob) - <p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>
* [CreateDatasetGroup](#createdatasetgroup) - <p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>
* [CreateDatasetImportJob](#createdatasetimportjob) - <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>
* [CreateEventTracker](#createeventtracker) - <p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>
* [CreateFilter](#createfilter) - Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.
* [CreateMetricAttribution](#createmetricattribution) - Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
* [CreateRecommender](#createrecommender) - <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>
* [CreateSchema](#createschema) - <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>
* [CreateSolution](#createsolution) - <p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>
* [CreateSolutionVersion](#createsolutionversion) - <p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>
* [DeleteCampaign](#deletecampaign) - Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
* [DeleteDataset](#deletedataset) - Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [DeleteDatasetGroup](#deletedatasetgroup) - <p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>
* [DeleteEventTracker](#deleteeventtracker) - Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [DeleteFilter](#deletefilter) - Deletes a filter.
* [DeleteMetricAttribution](#deletemetricattribution) - Deletes a metric attribution.
* [DeleteRecommender](#deleterecommender) - Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.
* [DeleteSchema](#deleteschema) - Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [DeleteSolution](#deletesolution) - Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [DescribeAlgorithm](#describealgorithm) - Describes the given algorithm.
* [DescribeBatchInferenceJob](#describebatchinferencejob) - Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.
* [DescribeBatchSegmentJob](#describebatchsegmentjob) - Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.
* [DescribeCampaign](#describecampaign) - <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
* [DescribeDataset](#describedataset) - Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [DescribeDatasetExportJob](#describedatasetexportjob) - Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.
* [DescribeDatasetGroup](#describedatasetgroup) - Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
* [DescribeDatasetImportJob](#describedatasetimportjob) - Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.
* [DescribeEventTracker](#describeeventtracker) - Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [DescribeFeatureTransformation](#describefeaturetransformation) - Describes the given feature transformation.
* [DescribeFilter](#describefilter) - Describes a filter's properties.
* [DescribeMetricAttribution](#describemetricattribution) - Describes a metric attribution.
* [DescribeRecipe](#describerecipe) - <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
* [DescribeRecommender](#describerecommender) - <p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
* [DescribeSchema](#describeschema) - Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [DescribeSolution](#describesolution) - Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [DescribeSolutionVersion](#describesolutionversion) - Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 
* [GetSolutionMetrics](#getsolutionmetrics) - Gets the metrics for the specified solution version.
* [ListBatchInferenceJobs](#listbatchinferencejobs) - Gets a list of the batch inference jobs that have been performed off of a solution version.
* [ListBatchSegmentJobs](#listbatchsegmentjobs) - Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.
* [ListCampaigns](#listcampaigns) - Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
* [ListDatasetExportJobs](#listdatasetexportjobs) - Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [ListDatasetGroups](#listdatasetgroups) - Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
* [ListDatasetImportJobs](#listdatasetimportjobs) - Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [ListDatasets](#listdatasets) - Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [ListEventTrackers](#listeventtrackers) - Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [ListFilters](#listfilters) - Lists all filters that belong to a given dataset group.
* [ListMetricAttributionMetrics](#listmetricattributionmetrics) - Lists the metrics for the metric attribution.
* [ListMetricAttributions](#listmetricattributions) - Lists metric attributions.
* [ListRecipes](#listrecipes) - Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).
* [ListRecommenders](#listrecommenders) - Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.
* [ListSchemas](#listschemas) - Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [ListSolutionVersions](#listsolutionversions) - Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).
* [ListSolutions](#listsolutions) - Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [ListTagsForResource](#listtagsforresource) - Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.
* [StartRecommender](#startrecommender) - Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.
* [StopRecommender](#stoprecommender) - Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.
* [StopSolutionVersionCreation](#stopsolutionversioncreation) - <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
* [TagResource](#tagresource) - Add a list of tags to a resource.
* [UntagResource](#untagresource) - Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.
* [UpdateCampaign](#updatecampaign) - <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
* [UpdateMetricAttribution](#updatemetricattribution) - Updates a metric attribution.
* [UpdateRecommender](#updaterecommender) - Updates the recommender to modify the recommender configuration.

## CreateBatchInferenceJob

Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. 

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
    res, err := s.SDK.CreateBatchInferenceJob(ctx, operations.CreateBatchInferenceJobRequest{
        CreateBatchInferenceJobRequest: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "ipsam": "repellendus",
                },
            },
            FilterArn: sdk.String("sapiente"),
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("quo"),
                    Path: "odit",
                },
            },
            JobName: "at",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("at"),
                    Path: "maiores",
                },
            },
            NumResults: sdk.Int64(473608),
            RoleArn: "quod",
            SolutionVersionArn: "quod",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "totam",
                    TagValue: "porro",
                },
                shared.Tag{
                    TagKey: "dolorum",
                    TagValue: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.CreateBatchInferenceJobXAmzTargetEnumAmazonPersonalizeCreateBatchInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchInferenceJobResponse != nil {
        // handle response
    }
}
```

## CreateBatchSegmentJob

Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.

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
    res, err := s.SDK.CreateBatchSegmentJob(ctx, operations.CreateBatchSegmentJobRequest{
        CreateBatchSegmentJobRequest: shared.CreateBatchSegmentJobRequest{
            FilterArn: sdk.String("totam"),
            JobInput: shared.BatchSegmentJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("beatae"),
                    Path: "commodi",
                },
            },
            JobName: "molestiae",
            JobOutput: shared.BatchSegmentJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("modi"),
                    Path: "qui",
                },
            },
            NumResults: sdk.Int64(774234),
            RoleArn: "cum",
            SolutionVersionArn: "esse",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "excepturi",
                    TagValue: "aspernatur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateBatchSegmentJobXAmzTargetEnumAmazonPersonalizeCreateBatchSegmentJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchSegmentJobResponse != nil {
        // handle response
    }
}
```

## CreateCampaign

<p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateCampaign(ctx, operations.CreateCampaignRequest{
        CreateCampaignRequest: shared.CreateCampaignRequest{
            CampaignConfig: &shared.CampaignConfig{
                ItemExplorationConfig: map[string]string{
                    "hic": "saepe",
                    "fuga": "in",
                },
            },
            MinProvisionedTPS: sdk.Int64(359508),
            Name: "Brad Turcotte Jr.",
            SolutionVersionArn: "reiciendis",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "mollitia",
                    TagValue: "laborum",
                },
                shared.Tag{
                    TagKey: "dolores",
                    TagValue: "dolorem",
                },
                shared.Tag{
                    TagKey: "corporis",
                    TagValue: "explicabo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.CreateCampaignXAmzTargetEnumAmazonPersonalizeCreateCampaign,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCampaignResponse != nil {
        // handle response
    }
}
```

## CreateDataset

<p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateDataset(ctx, operations.CreateDatasetRequest{
        CreateDatasetRequest: shared.CreateDatasetRequest{
            DatasetGroupArn: "iure",
            DatasetType: "culpa",
            Name: "Darrin Brakus",
            SchemaArn: "culpa",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "repellat",
                    TagValue: "mollitia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateDatasetXAmzTargetEnumAmazonPersonalizeCreateDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```

## CreateDatasetExportJob

<p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>

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
    res, err := s.SDK.CreateDatasetExportJob(ctx, operations.CreateDatasetExportJobRequest{
        CreateDatasetExportJobRequest: shared.CreateDatasetExportJobRequest{
            DatasetArn: "quia",
            IngestionMode: shared.IngestionModeEnumPut.ToPointer(),
            JobName: "vitae",
            JobOutput: shared.DatasetExportJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("laborum"),
                    Path: "animi",
                },
            },
            RoleArn: "enim",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "quo",
                    TagValue: "sequi",
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
        XAmzTarget: operations.CreateDatasetExportJobXAmzTargetEnumAmazonPersonalizeCreateDatasetExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetExportJobResponse != nil {
        // handle response
    }
}
```

## CreateDatasetGroup

<p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateDatasetGroup(ctx, operations.CreateDatasetGroupRequest{
        CreateDatasetGroupRequest: shared.CreateDatasetGroupRequest{
            Domain: shared.DomainEnumVideoOnDemand.ToPointer(),
            KmsKeyArn: sdk.String("laborum"),
            Name: "Johanna Wolf",
            RoleArn: sdk.String("praesentium"),
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "ipsa",
                    TagValue: "omnis",
                },
                shared.Tag{
                    TagKey: "voluptate",
                    TagValue: "cum",
                },
                shared.Tag{
                    TagKey: "perferendis",
                    TagValue: "doloremque",
                },
                shared.Tag{
                    TagKey: "reprehenderit",
                    TagValue: "ut",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreateDatasetGroupXAmzTargetEnumAmazonPersonalizeCreateDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetGroupResponse != nil {
        // handle response
    }
}
```

## CreateDatasetImportJob

<p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateDatasetImportJob(ctx, operations.CreateDatasetImportJobRequest{
        CreateDatasetImportJobRequest: shared.CreateDatasetImportJobRequest{
            DataSource: shared.DataSource{
                DataLocation: sdk.String("enim"),
            },
            DatasetArn: "accusamus",
            ImportMode: shared.ImportModeEnumFull.ToPointer(),
            JobName: "repudiandae",
            PublishAttributionMetricsToS3: sdk.Bool(false),
            RoleArn: "quae",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "quidem",
                    TagValue: "molestias",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.CreateDatasetImportJobXAmzTargetEnumAmazonPersonalizeCreateDatasetImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetImportJobResponse != nil {
        // handle response
    }
}
```

## CreateEventTracker

<p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateEventTracker(ctx, operations.CreateEventTrackerRequest{
        CreateEventTrackerRequest: shared.CreateEventTrackerRequest{
            DatasetGroupArn: "repudiandae",
            Name: "Patrick Ward",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "est",
                    TagValue: "quibusdam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CreateEventTrackerXAmzTargetEnumAmazonPersonalizeCreateEventTracker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventTrackerResponse != nil {
        // handle response
    }
}
```

## CreateFilter

Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.

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
    res, err := s.SDK.CreateFilter(ctx, operations.CreateFilterRequest{
        CreateFilterRequest: shared.CreateFilterRequest{
            DatasetGroupArn: "aliquid",
            FilterExpression: "cupiditate",
            Name: "Christopher Cummerata",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "fugit",
                    TagValue: "dolorum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.CreateFilterXAmzTargetEnumAmazonPersonalizeCreateFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFilterResponse != nil {
        // handle response
    }
}
```

## CreateMetricAttribution

Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

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
    res, err := s.SDK.CreateMetricAttribution(ctx, operations.CreateMetricAttributionRequest{
        CreateMetricAttributionRequest: shared.CreateMetricAttributionRequest{
            DatasetGroupArn: "non",
            Metrics: []shared.MetricAttribute{
                shared.MetricAttribute{
                    EventType: "sint",
                    Expression: "aliquid",
                    MetricName: "provident",
                },
                shared.MetricAttribute{
                    EventType: "necessitatibus",
                    Expression: "sint",
                    MetricName: "officia",
                },
                shared.MetricAttribute{
                    EventType: "dolor",
                    Expression: "debitis",
                    MetricName: "a",
                },
                shared.MetricAttribute{
                    EventType: "dolorum",
                    Expression: "in",
                    MetricName: "in",
                },
            },
            MetricsOutputConfig: shared.MetricAttributionOutput{
                RoleArn: "illum",
                S3DataDestination: &shared.S3DataConfig{
                    KmsKeyArn: sdk.String("maiores"),
                    Path: "rerum",
                },
            },
            Name: "Valerie Runolfsson",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.CreateMetricAttributionXAmzTargetEnumAmazonPersonalizeCreateMetricAttribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMetricAttributionResponse != nil {
        // handle response
    }
}
```

## CreateRecommender

<p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateRecommender(ctx, operations.CreateRecommenderRequest{
        CreateRecommenderRequest: shared.CreateRecommenderRequest{
            DatasetGroupArn: "delectus",
            Name: "Rene Reinger",
            RecipeArn: "deleniti",
            RecommenderConfig: &shared.RecommenderConfig{
                ItemExplorationConfig: map[string]string{
                    "amet": "deserunt",
                    "nisi": "vel",
                    "natus": "omnis",
                    "molestiae": "perferendis",
                },
                MinRecommendationRequestsPerSecond: sdk.Int64(470132),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "distinctio",
                    TagValue: "id",
                },
                shared.Tag{
                    TagKey: "labore",
                    TagValue: "labore",
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateRecommenderXAmzTargetEnumAmazonPersonalizeCreateRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRecommenderResponse != nil {
        // handle response
    }
}
```

## CreateSchema

<p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateSchema(ctx, operations.CreateSchemaRequest{
        CreateSchemaRequest: shared.CreateSchemaRequest{
            Domain: shared.DomainEnumEcommerce.ToPointer(),
            Name: "Miriam Hermann",
            Schema: "sint",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.CreateSchemaXAmzTargetEnumAmazonPersonalizeCreateSchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSchemaResponse != nil {
        // handle response
    }
}
```

## CreateSolution

<p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateSolution(ctx, operations.CreateSolutionRequest{
        CreateSolutionRequest: shared.CreateSolutionRequest{
            DatasetGroupArn: "necessitatibus",
            EventType: sdk.String("odit"),
            Name: "Joyce Kertzmann",
            PerformAutoML: sdk.Bool(false),
            PerformHPO: sdk.Bool(false),
            RecipeArn: sdk.String("eius"),
            SolutionConfig: &shared.SolutionConfig{
                AlgorithmHyperParameters: map[string]string{
                    "deleniti": "facilis",
                    "in": "architecto",
                    "architecto": "repudiandae",
                    "ullam": "expedita",
                },
                AutoMLConfig: &shared.AutoMLConfig{
                    MetricName: sdk.String("nihil"),
                    RecipeList: []string{
                        "quibusdam",
                        "sed",
                        "saepe",
                        "pariatur",
                    },
                },
                EventValueThreshold: sdk.String("accusantium"),
                FeatureTransformationParameters: map[string]string{
                    "praesentium": "natus",
                },
                HpoConfig: &shared.HPOConfig{
                    AlgorithmHyperParameterRanges: &shared.HyperParameterRanges{
                        CategoricalHyperParameterRanges: []shared.CategoricalHyperParameterRange{
                            shared.CategoricalHyperParameterRange{
                                Name: sdk.String("Angelica Stanton"),
                                Values: []string{
                                    "excepturi",
                                    "odit",
                                },
                            },
                        },
                        ContinuousHyperParameterRanges: []shared.ContinuousHyperParameterRange{
                            shared.ContinuousHyperParameterRange{
                                MaxValue: sdk.Float64(332.22),
                                MinValue: sdk.Float64(691.67),
                                Name: sdk.String("Rickey Hintz"),
                            },
                            shared.ContinuousHyperParameterRange{
                                MaxValue: sdk.Float64(7220.56),
                                MinValue: sdk.Float64(505.88),
                                Name: sdk.String("Dr. Herman Wolf"),
                            },
                        },
                        IntegerHyperParameterRanges: []shared.IntegerHyperParameterRange{
                            shared.IntegerHyperParameterRange{
                                MaxValue: sdk.Int64(764912),
                                MinValue: sdk.Int64(359978),
                                Name: sdk.String("Pete Rohan"),
                            },
                        },
                    },
                    HpoObjective: &shared.HPOObjective{
                        MetricName: sdk.String("totam"),
                        MetricRegex: sdk.String("dignissimos"),
                        Type: sdk.String("eaque"),
                    },
                    HpoResourceConfig: &shared.HPOResourceConfig{
                        MaxNumberOfTrainingJobs: sdk.String("quis"),
                        MaxParallelTrainingJobs: sdk.String("nesciunt"),
                    },
                },
                OptimizationObjective: &shared.OptimizationObjective{
                    ItemAttribute: sdk.String("eos"),
                    ObjectiveSensitivity: shared.ObjectiveSensitivityEnumLow.ToPointer(),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "minus",
                    TagValue: "quam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.CreateSolutionXAmzTargetEnumAmazonPersonalizeCreateSolution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSolutionResponse != nil {
        // handle response
    }
}
```

## CreateSolutionVersion

<p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateSolutionVersion(ctx, operations.CreateSolutionVersionRequest{
        CreateSolutionVersionRequest: shared.CreateSolutionVersionRequest{
            Name: sdk.String("George Sawayn"),
            SolutionArn: "error",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "occaecati",
                    TagValue: "rerum",
                },
            },
            TrainingMode: shared.TrainingModeEnumFull.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateSolutionVersionXAmzTargetEnumAmazonPersonalizeCreateSolutionVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSolutionVersionResponse != nil {
        // handle response
    }
}
```

## DeleteCampaign

Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

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
    res, err := s.SDK.DeleteCampaign(ctx, operations.DeleteCampaignRequest{
        DeleteCampaignRequest: shared.DeleteCampaignRequest{
            CampaignArn: "provident",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DeleteCampaignXAmzTargetEnumAmazonPersonalizeDeleteCampaign,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDataset

Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

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
    res, err := s.SDK.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        DeleteDatasetRequest: shared.DeleteDatasetRequest{
            DatasetArn: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteDatasetXAmzTargetEnumAmazonPersonalizeDeleteDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatasetGroup

<p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>

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
    res, err := s.SDK.DeleteDatasetGroup(ctx, operations.DeleteDatasetGroupRequest{
        DeleteDatasetGroupRequest: shared.DeleteDatasetGroupRequest{
            DatasetGroupArn: "dignissimos",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DeleteDatasetGroupXAmzTargetEnumAmazonPersonalizeDeleteDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEventTracker

Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

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
    res, err := s.SDK.DeleteEventTracker(ctx, operations.DeleteEventTrackerRequest{
        DeleteEventTrackerRequest: shared.DeleteEventTrackerRequest{
            EventTrackerArn: "iure",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteEventTrackerXAmzTargetEnumAmazonPersonalizeDeleteEventTracker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFilter

Deletes a filter.

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
    res, err := s.SDK.DeleteFilter(ctx, operations.DeleteFilterRequest{
        DeleteFilterRequest: shared.DeleteFilterRequest{
            FilterArn: "eos",
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DeleteFilterXAmzTargetEnumAmazonPersonalizeDeleteFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMetricAttribution

Deletes a metric attribution.

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
    res, err := s.SDK.DeleteMetricAttribution(ctx, operations.DeleteMetricAttributionRequest{
        DeleteMetricAttributionRequest: shared.DeleteMetricAttributionRequest{
            MetricAttributionArn: "voluptate",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DeleteMetricAttributionXAmzTargetEnumAmazonPersonalizeDeleteMetricAttribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRecommender

Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.

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
    res, err := s.SDK.DeleteRecommender(ctx, operations.DeleteRecommenderRequest{
        DeleteRecommenderRequest: shared.DeleteRecommenderRequest{
            RecommenderArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DeleteRecommenderXAmzTargetEnumAmazonPersonalizeDeleteRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSchema

Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

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
    res, err := s.SDK.DeleteSchema(ctx, operations.DeleteSchemaRequest{
        DeleteSchemaRequest: shared.DeleteSchemaRequest{
            SchemaArn: "optio",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.DeleteSchemaXAmzTargetEnumAmazonPersonalizeDeleteSchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSolution

Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

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
    res, err := s.SDK.DeleteSolution(ctx, operations.DeleteSolutionRequest{
        DeleteSolutionRequest: shared.DeleteSolutionRequest{
            SolutionArn: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DeleteSolutionXAmzTargetEnumAmazonPersonalizeDeleteSolution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAlgorithm

Describes the given algorithm.

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
    res, err := s.SDK.DescribeAlgorithm(ctx, operations.DescribeAlgorithmRequest{
        DescribeAlgorithmRequest: shared.DescribeAlgorithmRequest{
            AlgorithmArn: "quod",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DescribeAlgorithmXAmzTargetEnumAmazonPersonalizeDescribeAlgorithm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAlgorithmResponse != nil {
        // handle response
    }
}
```

## DescribeBatchInferenceJob

Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.

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
    res, err := s.SDK.DescribeBatchInferenceJob(ctx, operations.DescribeBatchInferenceJobRequest{
        DescribeBatchInferenceJobRequest: shared.DescribeBatchInferenceJobRequest{
            BatchInferenceJobArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DescribeBatchInferenceJobXAmzTargetEnumAmazonPersonalizeDescribeBatchInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBatchInferenceJobResponse != nil {
        // handle response
    }
}
```

## DescribeBatchSegmentJob

Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.

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
    res, err := s.SDK.DescribeBatchSegmentJob(ctx, operations.DescribeBatchSegmentJobRequest{
        DescribeBatchSegmentJobRequest: shared.DescribeBatchSegmentJobRequest{
            BatchSegmentJobArn: "dolorem",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DescribeBatchSegmentJobXAmzTargetEnumAmazonPersonalizeDescribeBatchSegmentJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBatchSegmentJobResponse != nil {
        // handle response
    }
}
```

## DescribeCampaign

<p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

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
    res, err := s.SDK.DescribeCampaign(ctx, operations.DescribeCampaignRequest{
        DescribeCampaignRequest: shared.DescribeCampaignRequest{
            CampaignArn: "vel",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DescribeCampaignXAmzTargetEnumAmazonPersonalizeDescribeCampaign,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCampaignResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

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
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        DescribeDatasetRequest: shared.DescribeDatasetRequest{
            DatasetArn: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DescribeDatasetXAmzTargetEnumAmazonPersonalizeDescribeDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeDatasetExportJob

Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.

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
    res, err := s.SDK.DescribeDatasetExportJob(ctx, operations.DescribeDatasetExportJobRequest{
        DescribeDatasetExportJobRequest: shared.DescribeDatasetExportJobRequest{
            DatasetExportJobArn: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.DescribeDatasetExportJobXAmzTargetEnumAmazonPersonalizeDescribeDatasetExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeDatasetGroup

Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

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
    res, err := s.SDK.DescribeDatasetGroup(ctx, operations.DescribeDatasetGroupRequest{
        DescribeDatasetGroupRequest: shared.DescribeDatasetGroupRequest{
            DatasetGroupArn: "qui",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DescribeDatasetGroupXAmzTargetEnumAmazonPersonalizeDescribeDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetGroupResponse != nil {
        // handle response
    }
}
```

## DescribeDatasetImportJob

Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.

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
    res, err := s.SDK.DescribeDatasetImportJob(ctx, operations.DescribeDatasetImportJobRequest{
        DescribeDatasetImportJobRequest: shared.DescribeDatasetImportJobRequest{
            DatasetImportJobArn: "hic",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeDatasetImportJobXAmzTargetEnumAmazonPersonalizeDescribeDatasetImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetImportJobResponse != nil {
        // handle response
    }
}
```

## DescribeEventTracker

Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

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
    res, err := s.SDK.DescribeEventTracker(ctx, operations.DescribeEventTrackerRequest{
        DescribeEventTrackerRequest: shared.DescribeEventTrackerRequest{
            EventTrackerArn: "veritatis",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeEventTrackerXAmzTargetEnumAmazonPersonalizeDescribeEventTracker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventTrackerResponse != nil {
        // handle response
    }
}
```

## DescribeFeatureTransformation

Describes the given feature transformation.

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
    res, err := s.SDK.DescribeFeatureTransformation(ctx, operations.DescribeFeatureTransformationRequest{
        DescribeFeatureTransformationRequest: shared.DescribeFeatureTransformationRequest{
            FeatureTransformationArn: "dolore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.DescribeFeatureTransformationXAmzTargetEnumAmazonPersonalizeDescribeFeatureTransformation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFeatureTransformationResponse != nil {
        // handle response
    }
}
```

## DescribeFilter

Describes a filter's properties.

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
    res, err := s.SDK.DescribeFilter(ctx, operations.DescribeFilterRequest{
        DescribeFilterRequest: shared.DescribeFilterRequest{
            FilterArn: "itaque",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeFilterXAmzTargetEnumAmazonPersonalizeDescribeFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFilterResponse != nil {
        // handle response
    }
}
```

## DescribeMetricAttribution

Describes a metric attribution.

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
    res, err := s.SDK.DescribeMetricAttribution(ctx, operations.DescribeMetricAttributionRequest{
        DescribeMetricAttributionRequest: shared.DescribeMetricAttributionRequest{
            MetricAttributionArn: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.DescribeMetricAttributionXAmzTargetEnumAmazonPersonalizeDescribeMetricAttribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMetricAttributionResponse != nil {
        // handle response
    }
}
```

## DescribeRecipe

<p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>

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
    res, err := s.SDK.DescribeRecipe(ctx, operations.DescribeRecipeRequest{
        DescribeRecipeRequest: shared.DescribeRecipeRequest{
            RecipeArn: "vero",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DescribeRecipeXAmzTargetEnumAmazonPersonalizeDescribeRecipe,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecipeResponse != nil {
        // handle response
    }
}
```

## DescribeRecommender

<p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>

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
    res, err := s.SDK.DescribeRecommender(ctx, operations.DescribeRecommenderRequest{
        DescribeRecommenderRequest: shared.DescribeRecommenderRequest{
            RecommenderArn: "tenetur",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeRecommenderXAmzTargetEnumAmazonPersonalizeDescribeRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecommenderResponse != nil {
        // handle response
    }
}
```

## DescribeSchema

Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

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
    res, err := s.SDK.DescribeSchema(ctx, operations.DescribeSchemaRequest{
        DescribeSchemaRequest: shared.DescribeSchemaRequest{
            SchemaArn: "vero",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DescribeSchemaXAmzTargetEnumAmazonPersonalizeDescribeSchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSchemaResponse != nil {
        // handle response
    }
}
```

## DescribeSolution

Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

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
    res, err := s.SDK.DescribeSolution(ctx, operations.DescribeSolutionRequest{
        DescribeSolutionRequest: shared.DescribeSolutionRequest{
            SolutionArn: "aut",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DescribeSolutionXAmzTargetEnumAmazonPersonalizeDescribeSolution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSolutionResponse != nil {
        // handle response
    }
}
```

## DescribeSolutionVersion

Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 

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
    res, err := s.SDK.DescribeSolutionVersion(ctx, operations.DescribeSolutionVersionRequest{
        DescribeSolutionVersionRequest: shared.DescribeSolutionVersionRequest{
            SolutionVersionArn: "iusto",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DescribeSolutionVersionXAmzTargetEnumAmazonPersonalizeDescribeSolutionVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSolutionVersionResponse != nil {
        // handle response
    }
}
```

## GetSolutionMetrics

Gets the metrics for the specified solution version.

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
    res, err := s.SDK.GetSolutionMetrics(ctx, operations.GetSolutionMetricsRequest{
        GetSolutionMetricsRequest: shared.GetSolutionMetricsRequest{
            SolutionVersionArn: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.GetSolutionMetricsXAmzTargetEnumAmazonPersonalizeGetSolutionMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSolutionMetricsResponse != nil {
        // handle response
    }
}
```

## ListBatchInferenceJobs

Gets a list of the batch inference jobs that have been performed off of a solution version.

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
    res, err := s.SDK.ListBatchInferenceJobs(ctx, operations.ListBatchInferenceJobsRequest{
        ListBatchInferenceJobsRequest: shared.ListBatchInferenceJobsRequest{
            MaxResults: sdk.Int64(224317),
            NextToken: sdk.String("maiores"),
            SolutionVersionArn: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.ListBatchInferenceJobsXAmzTargetEnumAmazonPersonalizeListBatchInferenceJobs,
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchInferenceJobsResponse != nil {
        // handle response
    }
}
```

## ListBatchSegmentJobs

Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.

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
    res, err := s.SDK.ListBatchSegmentJobs(ctx, operations.ListBatchSegmentJobsRequest{
        ListBatchSegmentJobsRequest: shared.ListBatchSegmentJobsRequest{
            MaxResults: sdk.Int64(774048),
            NextToken: sdk.String("corporis"),
            SolutionVersionArn: sdk.String("veniam"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ListBatchSegmentJobsXAmzTargetEnumAmazonPersonalizeListBatchSegmentJobs,
        MaxResults: sdk.String("aspernatur"),
        NextToken: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchSegmentJobsResponse != nil {
        // handle response
    }
}
```

## ListCampaigns

Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

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
    res, err := s.SDK.ListCampaigns(ctx, operations.ListCampaignsRequest{
        ListCampaignsRequest: shared.ListCampaignsRequest{
            MaxResults: sdk.Int64(53427),
            NextToken: sdk.String("a"),
            SolutionArn: sdk.String("libero"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListCampaignsXAmzTargetEnumAmazonPersonalizeListCampaigns,
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCampaignsResponse != nil {
        // handle response
    }
}
```

## ListDatasetExportJobs

Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

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
    res, err := s.SDK.ListDatasetExportJobs(ctx, operations.ListDatasetExportJobsRequest{
        ListDatasetExportJobsRequest: shared.ListDatasetExportJobsRequest{
            DatasetArn: sdk.String("et"),
            MaxResults: sdk.Int64(677412),
            NextToken: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.ListDatasetExportJobsXAmzTargetEnumAmazonPersonalizeListDatasetExportJobs,
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetExportJobsResponse != nil {
        // handle response
    }
}
```

## ListDatasetGroups

Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

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
    res, err := s.SDK.ListDatasetGroups(ctx, operations.ListDatasetGroupsRequest{
        ListDatasetGroupsRequest: shared.ListDatasetGroupsRequest{
            MaxResults: sdk.Int64(727044),
            NextToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.ListDatasetGroupsXAmzTargetEnumAmazonPersonalizeListDatasetGroups,
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetGroupsResponse != nil {
        // handle response
    }
}
```

## ListDatasetImportJobs

Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

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
    res, err := s.SDK.ListDatasetImportJobs(ctx, operations.ListDatasetImportJobsRequest{
        ListDatasetImportJobsRequest: shared.ListDatasetImportJobsRequest{
            DatasetArn: sdk.String("esse"),
            MaxResults: sdk.Int64(456141),
            NextToken: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.ListDatasetImportJobsXAmzTargetEnumAmazonPersonalizeListDatasetImportJobs,
        MaxResults: sdk.String("assumenda"),
        NextToken: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetImportJobsResponse != nil {
        // handle response
    }
}
```

## ListDatasets

Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

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
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        ListDatasetsRequest: shared.ListDatasetsRequest{
            DatasetGroupArn: sdk.String("praesentium"),
            MaxResults: sdk.Int64(788546),
            NextToken: sdk.String("veritatis"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.ListDatasetsXAmzTargetEnumAmazonPersonalizeListDatasets,
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListEventTrackers

Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

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
    res, err := s.SDK.ListEventTrackers(ctx, operations.ListEventTrackersRequest{
        ListEventTrackersRequest: shared.ListEventTrackersRequest{
            DatasetGroupArn: sdk.String("eos"),
            MaxResults: sdk.Int64(373813),
            NextToken: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.ListEventTrackersXAmzTargetEnumAmazonPersonalizeListEventTrackers,
        MaxResults: sdk.String("quo"),
        NextToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventTrackersResponse != nil {
        // handle response
    }
}
```

## ListFilters

Lists all filters that belong to a given dataset group.

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
    res, err := s.SDK.ListFilters(ctx, operations.ListFiltersRequest{
        ListFiltersRequest: shared.ListFiltersRequest{
            DatasetGroupArn: sdk.String("recusandae"),
            MaxResults: sdk.Int64(44612),
            NextToken: sdk.String("distinctio"),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.ListFiltersXAmzTargetEnumAmazonPersonalizeListFilters,
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFiltersResponse != nil {
        // handle response
    }
}
```

## ListMetricAttributionMetrics

Lists the metrics for the metric attribution.

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
    res, err := s.SDK.ListMetricAttributionMetrics(ctx, operations.ListMetricAttributionMetricsRequest{
        ListMetricAttributionMetricsRequest: shared.ListMetricAttributionMetricsRequest{
            MaxResults: sdk.Int64(414567),
            MetricAttributionArn: sdk.String("sapiente"),
            NextToken: sdk.String("dolores"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListMetricAttributionMetricsXAmzTargetEnumAmazonPersonalizeListMetricAttributionMetrics,
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricAttributionMetricsResponse != nil {
        // handle response
    }
}
```

## ListMetricAttributions

Lists metric attributions.

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
    res, err := s.SDK.ListMetricAttributions(ctx, operations.ListMetricAttributionsRequest{
        ListMetricAttributionsRequest: shared.ListMetricAttributionsRequest{
            DatasetGroupArn: sdk.String("fugit"),
            MaxResults: sdk.Int64(681393),
            NextToken: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListMetricAttributionsXAmzTargetEnumAmazonPersonalizeListMetricAttributions,
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricAttributionsResponse != nil {
        // handle response
    }
}
```

## ListRecipes

Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).

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
    res, err := s.SDK.ListRecipes(ctx, operations.ListRecipesRequest{
        ListRecipesRequest: shared.ListRecipesRequest{
            Domain: shared.DomainEnumEcommerce.ToPointer(),
            MaxResults: sdk.Int64(903984),
            NextToken: sdk.String("occaecati"),
            RecipeProvider: shared.RecipeProviderEnumService.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListRecipesXAmzTargetEnumAmazonPersonalizeListRecipes,
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecipesResponse != nil {
        // handle response
    }
}
```

## ListRecommenders

Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.

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
    res, err := s.SDK.ListRecommenders(ctx, operations.ListRecommendersRequest{
        ListRecommendersRequest: shared.ListRecommendersRequest{
            DatasetGroupArn: sdk.String("vero"),
            MaxResults: sdk.Int64(399025),
            NextToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.ListRecommendersXAmzTargetEnumAmazonPersonalizeListRecommenders,
        MaxResults: sdk.String("distinctio"),
        NextToken: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendersResponse != nil {
        // handle response
    }
}
```

## ListSchemas

Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

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
    res, err := s.SDK.ListSchemas(ctx, operations.ListSchemasRequest{
        ListSchemasRequest: shared.ListSchemasRequest{
            MaxResults: sdk.Int64(27069),
            NextToken: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ListSchemasXAmzTargetEnumAmazonPersonalizeListSchemas,
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchemasResponse != nil {
        // handle response
    }
}
```

## ListSolutionVersions

Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).

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
    res, err := s.SDK.ListSolutionVersions(ctx, operations.ListSolutionVersionsRequest{
        ListSolutionVersionsRequest: shared.ListSolutionVersionsRequest{
            MaxResults: sdk.Int64(458139),
            NextToken: sdk.String("blanditiis"),
            SolutionArn: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListSolutionVersionsXAmzTargetEnumAmazonPersonalizeListSolutionVersions,
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSolutionVersionsResponse != nil {
        // handle response
    }
}
```

## ListSolutions

Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

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
    res, err := s.SDK.ListSolutions(ctx, operations.ListSolutionsRequest{
        ListSolutionsRequest: shared.ListSolutionsRequest{
            DatasetGroupArn: sdk.String("possimus"),
            MaxResults: sdk.Int64(157632),
            NextToken: sdk.String("eveniet"),
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.ListSolutionsXAmzTargetEnumAmazonPersonalizeListSolutions,
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSolutionsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.

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
            ResourceArn: "quae",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonPersonalizeListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartRecommender

Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.

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
    res, err := s.SDK.StartRecommender(ctx, operations.StartRecommenderRequest{
        StartRecommenderRequest: shared.StartRecommenderRequest{
            RecommenderArn: "accusantium",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.StartRecommenderXAmzTargetEnumAmazonPersonalizeStartRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRecommenderResponse != nil {
        // handle response
    }
}
```

## StopRecommender

Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.

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
    res, err := s.SDK.StopRecommender(ctx, operations.StopRecommenderRequest{
        StopRecommenderRequest: shared.StopRecommenderRequest{
            RecommenderArn: "aut",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.StopRecommenderXAmzTargetEnumAmazonPersonalizeStopRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopRecommenderResponse != nil {
        // handle response
    }
}
```

## StopSolutionVersionCreation

<p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>

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
    res, err := s.SDK.StopSolutionVersionCreation(ctx, operations.StopSolutionVersionCreationRequest{
        StopSolutionVersionCreationRequest: shared.StopSolutionVersionCreationRequest{
            SolutionVersionArn: "architecto",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.StopSolutionVersionCreationXAmzTargetEnumAmazonPersonalizeStopSolutionVersionCreation,
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

Add a list of tags to a resource.

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
            ResourceArn: "minima",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "consectetur",
                    TagValue: "adipisci",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonPersonalizeTagResource,
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

Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.

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
            ResourceArn: "mollitia",
            TagKeys: []string{
                "corrupti",
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonPersonalizeUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateCampaign

<p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

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
    res, err := s.SDK.UpdateCampaign(ctx, operations.UpdateCampaignRequest{
        UpdateCampaignRequest: shared.UpdateCampaignRequest{
            CampaignArn: "voluptas",
            CampaignConfig: &shared.CampaignConfig{
                ItemExplorationConfig: map[string]string{
                    "dignissimos": "dicta",
                },
            },
            MinProvisionedTPS: sdk.Int64(981640),
            SolutionVersionArn: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.UpdateCampaignXAmzTargetEnumAmazonPersonalizeUpdateCampaign,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCampaignResponse != nil {
        // handle response
    }
}
```

## UpdateMetricAttribution

Updates a metric attribution.

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
    res, err := s.SDK.UpdateMetricAttribution(ctx, operations.UpdateMetricAttributionRequest{
        UpdateMetricAttributionRequest: shared.UpdateMetricAttributionRequest{
            AddMetrics: []shared.MetricAttribute{
                shared.MetricAttribute{
                    EventType: "repellendus",
                    Expression: "officia",
                    MetricName: "maxime",
                },
            },
            MetricAttributionArn: sdk.String("dignissimos"),
            MetricsOutputConfig: &shared.MetricAttributionOutput{
                RoleArn: "officia",
                S3DataDestination: &shared.S3DataConfig{
                    KmsKeyArn: sdk.String("asperiores"),
                    Path: "nemo",
                },
            },
            RemoveMetrics: []string{
                "quaerat",
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.UpdateMetricAttributionXAmzTargetEnumAmazonPersonalizeUpdateMetricAttribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMetricAttributionResponse != nil {
        // handle response
    }
}
```

## UpdateRecommender

Updates the recommender to modify the recommender configuration.

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
    res, err := s.SDK.UpdateRecommender(ctx, operations.UpdateRecommenderRequest{
        UpdateRecommenderRequest: shared.UpdateRecommenderRequest{
            RecommenderArn: "suscipit",
            RecommenderConfig: shared.RecommenderConfig{
                ItemExplorationConfig: map[string]string{
                    "culpa": "est",
                },
                MinRecommendationRequestsPerSecond: sdk.Int64(926880),
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.UpdateRecommenderXAmzTargetEnumAmazonPersonalizeUpdateRecommender,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRecommenderResponse != nil {
        // handle response
    }
}
```
