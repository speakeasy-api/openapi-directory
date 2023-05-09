# SDK

## Overview

Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers.

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize/>
### Available Operations

* [createBatchInferenceJob](#createbatchinferencejob) - Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. 
* [createBatchSegmentJob](#createbatchsegmentjob) - Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.
* [createCampaign](#createcampaign) - <p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>
* [createDataset](#createdataset) - <p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>
* [createDatasetExportJob](#createdatasetexportjob) - <p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>
* [createDatasetGroup](#createdatasetgroup) - <p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>
* [createDatasetImportJob](#createdatasetimportjob) - <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>
* [createEventTracker](#createeventtracker) - <p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>
* [createFilter](#createfilter) - Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.
* [createMetricAttribution](#createmetricattribution) - Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
* [createRecommender](#createrecommender) - <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>
* [createSchema](#createschema) - <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>
* [createSolution](#createsolution) - <p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>
* [createSolutionVersion](#createsolutionversion) - <p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>
* [deleteCampaign](#deletecampaign) - Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
* [deleteDataset](#deletedataset) - Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [deleteDatasetGroup](#deletedatasetgroup) - <p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>
* [deleteEventTracker](#deleteeventtracker) - Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [deleteFilter](#deletefilter) - Deletes a filter.
* [deleteMetricAttribution](#deletemetricattribution) - Deletes a metric attribution.
* [deleteRecommender](#deleterecommender) - Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.
* [deleteSchema](#deleteschema) - Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [deleteSolution](#deletesolution) - Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [describeAlgorithm](#describealgorithm) - Describes the given algorithm.
* [describeBatchInferenceJob](#describebatchinferencejob) - Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.
* [describeBatchSegmentJob](#describebatchsegmentjob) - Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.
* [describeCampaign](#describecampaign) - <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
* [describeDataset](#describedataset) - Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [describeDatasetExportJob](#describedatasetexportjob) - Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.
* [describeDatasetGroup](#describedatasetgroup) - Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
* [describeDatasetImportJob](#describedatasetimportjob) - Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.
* [describeEventTracker](#describeeventtracker) - Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [describeFeatureTransformation](#describefeaturetransformation) - Describes the given feature transformation.
* [describeFilter](#describefilter) - Describes a filter's properties.
* [describeMetricAttribution](#describemetricattribution) - Describes a metric attribution.
* [describeRecipe](#describerecipe) - <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
* [describeRecommender](#describerecommender) - <p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
* [describeSchema](#describeschema) - Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [describeSolution](#describesolution) - Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [describeSolutionVersion](#describesolutionversion) - Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 
* [getSolutionMetrics](#getsolutionmetrics) - Gets the metrics for the specified solution version.
* [listBatchInferenceJobs](#listbatchinferencejobs) - Gets a list of the batch inference jobs that have been performed off of a solution version.
* [listBatchSegmentJobs](#listbatchsegmentjobs) - Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.
* [listCampaigns](#listcampaigns) - Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
* [listDatasetExportJobs](#listdatasetexportjobs) - Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [listDatasetGroups](#listdatasetgroups) - Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
* [listDatasetImportJobs](#listdatasetimportjobs) - Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [listDatasets](#listdatasets) - Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
* [listEventTrackers](#listeventtrackers) - Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
* [listFilters](#listfilters) - Lists all filters that belong to a given dataset group.
* [listMetricAttributionMetrics](#listmetricattributionmetrics) - Lists the metrics for the metric attribution.
* [listMetricAttributions](#listmetricattributions) - Lists metric attributions.
* [listRecipes](#listrecipes) - Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).
* [listRecommenders](#listrecommenders) - Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.
* [listSchemas](#listschemas) - Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
* [listSolutionVersions](#listsolutionversions) - Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).
* [listSolutions](#listsolutions) - Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
* [listTagsForResource](#listtagsforresource) - Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.
* [startRecommender](#startrecommender) - Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.
* [stopRecommender](#stoprecommender) - Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.
* [stopSolutionVersionCreation](#stopsolutionversioncreation) - <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
* [tagResource](#tagresource) - Add a list of tags to a resource.
* [untagResource](#untagresource) - Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.
* [updateCampaign](#updatecampaign) - <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
* [updateMetricAttribution](#updatemetricattribution) - Updates a metric attribution.
* [updateRecommender](#updaterecommender) - Updates the recommender to modify the recommender configuration.

## createBatchInferenceJob

Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobResponse;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchInferenceJobConfig;
import org.openapis.openapi.models.shared.BatchInferenceJobInput;
import org.openapis.openapi.models.shared.BatchInferenceJobOutput;
import org.openapis.openapi.models.shared.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchInferenceJobRequest req = new CreateBatchInferenceJobRequest(                new CreateBatchInferenceJobRequest(                new BatchInferenceJobInput(                new S3DataConfig("ab") {{
                                                                kmsKeyArn = "quis";
                                                            }};);, "veritatis",                 new BatchInferenceJobOutput(                new S3DataConfig("deserunt") {{
                                                                kmsKeyArn = "perferendis";
                                                            }};);, "ipsam", "repellendus") {{
                                batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                                    itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                        put("quo", "odit");
                                        put("at", "at");
                                        put("maiores", "molestiae");
                                        put("quod", "quod");
                                    }};
                                }};;
                                filterArn = "esse";
                                numResults = 520478L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nam", "officia") {{
                                        tagKey = "dolorum";
                                        tagValue = "dicta";
                                    }}),
                                    add(new Tag("deleniti", "hic") {{
                                        tagKey = "occaecati";
                                        tagValue = "fugit";
                                    }}),
                                    add(new Tag("beatae", "commodi") {{
                                        tagKey = "optio";
                                        tagValue = "totam";
                                    }}),
                                    add(new Tag("qui", "impedit") {{
                                        tagKey = "molestiae";
                                        tagValue = "modi";
                                    }}),
                                }};
                            }};, CreateBatchInferenceJobXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_BATCH_INFERENCE_JOB) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            CreateBatchInferenceJobResponse res = sdk.sdk.createBatchInferenceJob(req);

            if (res.createBatchInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBatchSegmentJob

Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchSegmentJobRequest;
import org.openapis.openapi.models.operations.CreateBatchSegmentJobResponse;
import org.openapis.openapi.models.operations.CreateBatchSegmentJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchSegmentJobInput;
import org.openapis.openapi.models.shared.BatchSegmentJobOutput;
import org.openapis.openapi.models.shared.CreateBatchSegmentJobRequest;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchSegmentJobRequest req = new CreateBatchSegmentJobRequest(                new CreateBatchSegmentJobRequest(                new BatchSegmentJobInput(                new S3DataConfig("sed") {{
                                                                kmsKeyArn = "iste";
                                                            }};);, "dolor",                 new BatchSegmentJobOutput(                new S3DataConfig("natus") {{
                                                                kmsKeyArn = "laboriosam";
                                                            }};);, "hic", "saepe") {{
                                filterArn = "fuga";
                                numResults = 449950L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("saepe", "quidem") {{
                                        tagKey = "iste";
                                        tagValue = "iure";
                                    }}),
                                    add(new Tag("reiciendis", "est") {{
                                        tagKey = "architecto";
                                        tagValue = "ipsa";
                                    }}),
                                }};
                            }};, CreateBatchSegmentJobXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_BATCH_SEGMENT_JOB) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateBatchSegmentJobResponse res = sdk.sdk.createBatchSegmentJob(req);

            if (res.createBatchSegmentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCampaign

<p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCampaignRequest;
import org.openapis.openapi.models.operations.CreateCampaignResponse;
import org.openapis.openapi.models.operations.CreateCampaignXAmzTargetEnum;
import org.openapis.openapi.models.shared.CampaignConfig;
import org.openapis.openapi.models.shared.CreateCampaignRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest(                new CreateCampaignRequest("omnis", "nemo") {{
                                campaignConfig = new CampaignConfig() {{
                                    itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "accusantium");
                                        put("iure", "culpa");
                                    }};
                                }};;
                                minProvisionedTPS = 988374L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolorem", "culpa") {{
                                        tagKey = "architecto";
                                        tagValue = "mollitia";
                                    }}),
                                    add(new Tag("mollitia", "occaecati") {{
                                        tagKey = "consequuntur";
                                        tagValue = "repellat";
                                    }}),
                                    add(new Tag("quam", "molestiae") {{
                                        tagKey = "numquam";
                                        tagValue = "commodi";
                                    }}),
                                    add(new Tag("quia", "quis") {{
                                        tagKey = "velit";
                                        tagValue = "error";
                                    }}),
                                }};
                            }};, CreateCampaignXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_CAMPAIGN) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            CreateCampaignResponse res = sdk.sdk.createCampaign(req);

            if (res.createCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataset

<p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequest("ipsam", "id", "possimus", "aut") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("laborum", "quasi") {{
                                        tagKey = "error";
                                        tagValue = "temporibus";
                                    }}),
                                }};
                            }};, CreateDatasetXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_DATASET) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateDatasetResponse res = sdk.sdk.createDataset(req);

            if (res.createDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetExportJob

<p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetExportJobRequest;
import org.openapis.openapi.models.operations.CreateDatasetExportJobResponse;
import org.openapis.openapi.models.operations.CreateDatasetExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetExportJobRequest;
import org.openapis.openapi.models.shared.DatasetExportJobOutput;
import org.openapis.openapi.models.shared.IngestionModeEnum;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetExportJobRequest req = new CreateDatasetExportJobRequest(                new CreateDatasetExportJobRequest("voluptate", "cum",                 new DatasetExportJobOutput(                new S3DataConfig("perferendis") {{
                                                                kmsKeyArn = "doloremque";
                                                            }};);, "reprehenderit") {{
                                ingestionMode = IngestionModeEnum.BULK;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolore", "iusto") {{
                                        tagKey = "dicta";
                                        tagValue = "corporis";
                                    }}),
                                    add(new Tag("enim", "accusamus") {{
                                        tagKey = "dicta";
                                        tagValue = "harum";
                                    }}),
                                    add(new Tag("quae", "ipsum") {{
                                        tagKey = "commodi";
                                        tagValue = "repudiandae";
                                    }}),
                                    add(new Tag("excepturi", "pariatur") {{
                                        tagKey = "quidem";
                                        tagValue = "molestias";
                                    }}),
                                }};
                            }};, CreateDatasetExportJobXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_DATASET_EXPORT_JOB) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            CreateDatasetExportJobResponse res = sdk.sdk.createDatasetExportJob(req);

            if (res.createDatasetExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetGroup

<p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetGroupRequest;
import org.openapis.openapi.models.operations.CreateDatasetGroupResponse;
import org.openapis.openapi.models.operations.CreateDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetGroupRequest;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetGroupRequest req = new CreateDatasetGroupRequest(                new CreateDatasetGroupRequest("itaque") {{
                                domain = DomainEnum.ECOMMERCE;
                                kmsKeyArn = "enim";
                                roleArn = "consequatur";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "distinctio") {{
                                        tagKey = "quibusdam";
                                        tagValue = "explicabo";
                                    }}),
                                    add(new Tag("modi", "qui") {{
                                        tagKey = "quibusdam";
                                        tagValue = "labore";
                                    }}),
                                    add(new Tag("quos", "perferendis") {{
                                        tagKey = "aliquid";
                                        tagValue = "cupiditate";
                                    }}),
                                }};
                            }};, CreateDatasetGroupXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_DATASET_GROUP) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateDatasetGroupResponse res = sdk.sdk.createDatasetGroup(req);

            if (res.createDatasetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetImportJob

<p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetImportJobRequest;
import org.openapis.openapi.models.operations.CreateDatasetImportJobResponse;
import org.openapis.openapi.models.operations.CreateDatasetImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetImportJobRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.ImportModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetImportJobRequest req = new CreateDatasetImportJobRequest(                new CreateDatasetImportJobRequest(                new DataSource() {{
                                                dataLocation = "facilis";
                                            }};, "tempore", "labore", "delectus") {{
                                importMode = ImportModeEnum.FULL;
                                publishAttributionMetricsToS3 = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aliquid", "provident") {{
                                        tagKey = "eligendi";
                                        tagValue = "sint";
                                    }}),
                                }};
                            }};, CreateDatasetImportJobXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_DATASET_IMPORT_JOB) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateDatasetImportJobResponse res = sdk.sdk.createDatasetImportJob(req);

            if (res.createDatasetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventTracker

<p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventTrackerRequest;
import org.openapis.openapi.models.operations.CreateEventTrackerResponse;
import org.openapis.openapi.models.operations.CreateEventTrackerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEventTrackerRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventTrackerRequest req = new CreateEventTrackerRequest(                new CreateEventTrackerRequest("in", "illum") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("magnam", "cumque") {{
                                        tagKey = "rerum";
                                        tagValue = "dicta";
                                    }}),
                                    add(new Tag("aliquid", "laborum") {{
                                        tagKey = "facere";
                                        tagValue = "ea";
                                    }}),
                                    add(new Tag("occaecati", "enim") {{
                                        tagKey = "accusamus";
                                        tagValue = "non";
                                    }}),
                                    add(new Tag("quidem", "provident") {{
                                        tagKey = "accusamus";
                                        tagValue = "delectus";
                                    }}),
                                }};
                            }};, CreateEventTrackerXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_EVENT_TRACKER) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateEventTrackerResponse res = sdk.sdk.createEventTracker(req);

            if (res.createEventTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilter

Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilterRequest;
import org.openapis.openapi.models.operations.CreateFilterResponse;
import org.openapis.openapi.models.operations.CreateFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFilterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFilterRequest req = new CreateFilterRequest(                new CreateFilterRequest("vel", "natus", "omnis") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("magnam", "distinctio") {{
                                        tagKey = "perferendis";
                                        tagValue = "nihil";
                                    }}),
                                    add(new Tag("labore", "suscipit") {{
                                        tagKey = "id";
                                        tagValue = "labore";
                                    }}),
                                }};
                            }};, CreateFilterXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_FILTER) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateFilterResponse res = sdk.sdk.createFilter(req);

            if (res.createFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMetricAttribution

Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMetricAttributionRequest;
import org.openapis.openapi.models.operations.CreateMetricAttributionResponse;
import org.openapis.openapi.models.operations.CreateMetricAttributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMetricAttributionRequest;
import org.openapis.openapi.models.shared.MetricAttribute;
import org.openapis.openapi.models.shared.MetricAttributionOutput;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMetricAttributionRequest req = new CreateMetricAttributionRequest(                new CreateMetricAttributionRequest("excepturi",                 new org.openapis.openapi.models.shared.MetricAttribute[]{{
                                                add(new MetricAttribute("accusantium", "mollitia", "reiciendis") {{
                                                    eventType = "provident";
                                                    expression = "quos";
                                                    metricName = "sint";
                                                }}),
                                                add(new MetricAttribute("dolor", "necessitatibus", "odit") {{
                                                    eventType = "mollitia";
                                                    expression = "ad";
                                                    metricName = "eum";
                                                }}),
                                            }},                 new MetricAttributionOutput("nemo") {{
                                                s3DataDestination = new S3DataConfig("quasi") {{
                                                    kmsKeyArn = "iure";
                                                }};;
                                            }};, "doloribus");, CreateMetricAttributionXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_METRIC_ATTRIBUTION) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateMetricAttributionResponse res = sdk.sdk.createMetricAttribution(req);

            if (res.createMetricAttributionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRecommender

<p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRecommenderRequest;
import org.openapis.openapi.models.operations.CreateRecommenderResponse;
import org.openapis.openapi.models.operations.CreateRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRecommenderRequest;
import org.openapis.openapi.models.shared.RecommenderConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRecommenderRequest req = new CreateRecommenderRequest(                new CreateRecommenderRequest("repudiandae", "ullam", "expedita") {{
                                recommenderConfig = new RecommenderConfig() {{
                                    itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                        put("repellat", "quibusdam");
                                        put("sed", "saepe");
                                    }};
                                    minRecommendationRequestsPerSecond = 868126L;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("natus", "magni") {{
                                        tagKey = "consequuntur";
                                        tagValue = "praesentium";
                                    }}),
                                }};
                            }};, CreateRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_RECOMMENDER) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateRecommenderResponse res = sdk.sdk.createRecommender(req);

            if (res.createRecommenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSchema

<p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSchemaRequest;
import org.openapis.openapi.models.operations.CreateSchemaResponse;
import org.openapis.openapi.models.operations.CreateSchemaXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSchemaRequest;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSchemaRequest req = new CreateSchemaRequest(                new CreateSchemaRequest("ea", "accusantium") {{
                                domain = DomainEnum.ECOMMERCE;
                            }};, CreateSchemaXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_SCHEMA) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            CreateSchemaResponse res = sdk.sdk.createSchema(req);

            if (res.createSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSolution

<p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSolutionRequest;
import org.openapis.openapi.models.operations.CreateSolutionResponse;
import org.openapis.openapi.models.operations.CreateSolutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoMLConfig;
import org.openapis.openapi.models.shared.CategoricalHyperParameterRange;
import org.openapis.openapi.models.shared.ContinuousHyperParameterRange;
import org.openapis.openapi.models.shared.CreateSolutionRequest;
import org.openapis.openapi.models.shared.HPOConfig;
import org.openapis.openapi.models.shared.HPOObjective;
import org.openapis.openapi.models.shared.HPOResourceConfig;
import org.openapis.openapi.models.shared.HyperParameterRanges;
import org.openapis.openapi.models.shared.IntegerHyperParameterRange;
import org.openapis.openapi.models.shared.ObjectiveSensitivityEnum;
import org.openapis.openapi.models.shared.OptimizationObjective;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SolutionConfig;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSolutionRequest req = new CreateSolutionRequest(                new CreateSolutionRequest("nemo", "voluptatibus") {{
                                eventType = "perferendis";
                                performAutoML = false;
                                performHPO = false;
                                recipeArn = "fugiat";
                                solutionConfig = new SolutionConfig() {{
                                    algorithmHyperParameters = new java.util.HashMap<String, String>() {{
                                        put("aut", "cumque");
                                    }};
                                    autoMLConfig = new AutoMLConfig() {{
                                        metricName = "corporis";
                                        recipeList = new String[]{{
                                            add("libero"),
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                    }};;
                                    eventValueThreshold = "totam";
                                    featureTransformationParameters = new java.util.HashMap<String, String>() {{
                                        put("eaque", "quis");
                                        put("nesciunt", "eos");
                                    }};
                                    hpoConfig = new HPOConfig() {{
                                        algorithmHyperParameterRanges = new HyperParameterRanges() {{
                                            categoricalHyperParameterRanges = new org.openapis.openapi.models.shared.CategoricalHyperParameterRange[]{{
                                                add(new CategoricalHyperParameterRange() {{
                                                    name = "Brooke Kohler";
                                                    values = new String[]{{
                                                        add("hic"),
                                                        add("recusandae"),
                                                    }};
                                                }}),
                                            }};
                                            continuousHyperParameterRanges = new org.openapis.openapi.models.shared.ContinuousHyperParameterRange[]{{
                                                add(new ContinuousHyperParameterRange() {{
                                                    maxValue = 7044.15;
                                                    minValue = 5966.56;
                                                    name = "Robyn Cruickshank";
                                                }}),
                                                add(new ContinuousHyperParameterRange() {{
                                                    maxValue = 503.7;
                                                    minValue = 5772.29;
                                                    name = "Travis Zemlak";
                                                }}),
                                                add(new ContinuousHyperParameterRange() {{
                                                    maxValue = 6139.66;
                                                    minValue = 6790.91;
                                                    name = "Ervin McLaughlin";
                                                }}),
                                            }};
                                            integerHyperParameterRanges = new org.openapis.openapi.models.shared.IntegerHyperParameterRange[]{{
                                                add(new IntegerHyperParameterRange() {{
                                                    maxValue = 311945L;
                                                    minValue = 554242L;
                                                    name = "Florence Ebert";
                                                }}),
                                                add(new IntegerHyperParameterRange() {{
                                                    maxValue = 218749L;
                                                    minValue = 944373L;
                                                    name = "Felipe Klein";
                                                }}),
                                                add(new IntegerHyperParameterRange() {{
                                                    maxValue = 227414L;
                                                    minValue = 680545L;
                                                    name = "Ms. Christine Beer";
                                                }}),
                                                add(new IntegerHyperParameterRange() {{
                                                    maxValue = 311796L;
                                                    minValue = 881005L;
                                                    name = "Jan Hodkiewicz";
                                                }}),
                                            }};
                                        }};;
                                        hpoObjective = new HPOObjective() {{
                                            metricName = "atque";
                                            metricRegex = "sit";
                                            type = "fugiat";
                                        }};;
                                        hpoResourceConfig = new HPOResourceConfig() {{
                                            maxNumberOfTrainingJobs = "ab";
                                            maxParallelTrainingJobs = "soluta";
                                        }};;
                                    }};;
                                    optimizationObjective = new OptimizationObjective() {{
                                        itemAttribute = "dolorum";
                                        objectiveSensitivity = ObjectiveSensitivityEnum.MEDIUM;
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("omnis", "necessitatibus") {{
                                        tagKey = "dolorum";
                                        tagValue = "deleniti";
                                    }}),
                                    add(new Tag("nihil", "ipsum") {{
                                        tagKey = "distinctio";
                                        tagValue = "asperiores";
                                    }}),
                                }};
                            }};, CreateSolutionXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_SOLUTION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
            }};            

            CreateSolutionResponse res = sdk.sdk.createSolution(req);

            if (res.createSolutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSolutionVersion

<p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSolutionVersionRequest;
import org.openapis.openapi.models.operations.CreateSolutionVersionResponse;
import org.openapis.openapi.models.operations.CreateSolutionVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSolutionVersionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TrainingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSolutionVersionRequest req = new CreateSolutionVersionRequest(                new CreateSolutionVersionRequest("accusamus") {{
                                name = "Jenna Hoppe";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("similique", "alias") {{
                                        tagKey = "repellendus";
                                        tagValue = "totam";
                                    }}),
                                    add(new Tag("tempora", "vel") {{
                                        tagKey = "at";
                                        tagValue = "quaerat";
                                    }}),
                                }};
                                trainingMode = TrainingModeEnum.UPDATE;
                            }};, CreateSolutionVersionXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_SOLUTION_VERSION) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateSolutionVersionResponse res = sdk.sdk.createSolutionVersion(req);

            if (res.createSolutionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCampaign

Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCampaignRequest;
import org.openapis.openapi.models.operations.DeleteCampaignResponse;
import org.openapis.openapi.models.operations.DeleteCampaignXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCampaignRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCampaignRequest req = new DeleteCampaignRequest(                new DeleteCampaignRequest("quisquam");, DeleteCampaignXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_CAMPAIGN) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeleteCampaignResponse res = sdk.sdk.deleteCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset

Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.operations.DeleteDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest(                new DeleteDatasetRequest("totam");, DeleteDatasetXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_DATASET) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteDatasetResponse res = sdk.sdk.deleteDataset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatasetGroup

<p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetGroupRequest;
import org.openapis.openapi.models.operations.DeleteDatasetGroupResponse;
import org.openapis.openapi.models.operations.DeleteDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetGroupRequest req = new DeleteDatasetGroupRequest(                new DeleteDatasetGroupRequest("deserunt");, DeleteDatasetGroupXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_DATASET_GROUP) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeleteDatasetGroupResponse res = sdk.sdk.deleteDatasetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventTracker

Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventTrackerRequest;
import org.openapis.openapi.models.operations.DeleteEventTrackerResponse;
import org.openapis.openapi.models.operations.DeleteEventTrackerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEventTrackerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventTrackerRequest req = new DeleteEventTrackerRequest(                new DeleteEventTrackerRequest("dicta");, DeleteEventTrackerXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_EVENT_TRACKER) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            DeleteEventTrackerResponse res = sdk.sdk.deleteEventTracker(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFilter

Deletes a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilterRequest;
import org.openapis.openapi.models.operations.DeleteFilterResponse;
import org.openapis.openapi.models.operations.DeleteFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFilterRequest req = new DeleteFilterRequest(                new DeleteFilterRequest("quam");, DeleteFilterXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_FILTER) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "qui";
                xAmzDate = "neque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteFilterResponse res = sdk.sdk.deleteFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMetricAttribution

Deletes a metric attribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMetricAttributionRequest;
import org.openapis.openapi.models.operations.DeleteMetricAttributionResponse;
import org.openapis.openapi.models.operations.DeleteMetricAttributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMetricAttributionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMetricAttributionRequest req = new DeleteMetricAttributionRequest(                new DeleteMetricAttributionRequest("ullam");, DeleteMetricAttributionXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_METRIC_ATTRIBUTION) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "voluptatem";
                xAmzDate = "cumque";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "et";
            }};            

            DeleteMetricAttributionResponse res = sdk.sdk.deleteMetricAttribution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecommender

Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecommenderRequest;
import org.openapis.openapi.models.operations.DeleteRecommenderResponse;
import org.openapis.openapi.models.operations.DeleteRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRecommenderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecommenderRequest req = new DeleteRecommenderRequest(                new DeleteRecommenderRequest("ipsum");, DeleteRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_RECOMMENDER) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteRecommenderResponse res = sdk.sdk.deleteRecommender(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSchema

Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSchemaRequest;
import org.openapis.openapi.models.operations.DeleteSchemaResponse;
import org.openapis.openapi.models.operations.DeleteSchemaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSchemaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSchemaRequest req = new DeleteSchemaRequest(                new DeleteSchemaRequest("dolore");, DeleteSchemaXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_SCHEMA) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
            }};            

            DeleteSchemaResponse res = sdk.sdk.deleteSchema(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSolution

Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSolutionRequest;
import org.openapis.openapi.models.operations.DeleteSolutionResponse;
import org.openapis.openapi.models.operations.DeleteSolutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSolutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSolutionRequest req = new DeleteSolutionRequest(                new DeleteSolutionRequest("consequatur");, DeleteSolutionXAmzTargetEnum.AMAZON_PERSONALIZE_DELETE_SOLUTION) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DeleteSolutionResponse res = sdk.sdk.deleteSolution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAlgorithm

Describes the given algorithm.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAlgorithmRequest;
import org.openapis.openapi.models.operations.DescribeAlgorithmResponse;
import org.openapis.openapi.models.operations.DescribeAlgorithmXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAlgorithmRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAlgorithmRequest req = new DescribeAlgorithmRequest(                new DescribeAlgorithmRequest("quae");, DescribeAlgorithmXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_ALGORITHM) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribeAlgorithmResponse res = sdk.sdk.describeAlgorithm(req);

            if (res.describeAlgorithmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBatchInferenceJob

Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBatchInferenceJobRequest;
import org.openapis.openapi.models.operations.DescribeBatchInferenceJobResponse;
import org.openapis.openapi.models.operations.DescribeBatchInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBatchInferenceJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBatchInferenceJobRequest req = new DescribeBatchInferenceJobRequest(                new DescribeBatchInferenceJobRequest("ipsum");, DescribeBatchInferenceJobXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_BATCH_INFERENCE_JOB) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            DescribeBatchInferenceJobResponse res = sdk.sdk.describeBatchInferenceJob(req);

            if (res.describeBatchInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBatchSegmentJob

Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBatchSegmentJobRequest;
import org.openapis.openapi.models.operations.DescribeBatchSegmentJobResponse;
import org.openapis.openapi.models.operations.DescribeBatchSegmentJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBatchSegmentJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBatchSegmentJobRequest req = new DescribeBatchSegmentJobRequest(                new DescribeBatchSegmentJobRequest("quod");, DescribeBatchSegmentJobXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_BATCH_SEGMENT_JOB) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DescribeBatchSegmentJobResponse res = sdk.sdk.describeBatchSegmentJob(req);

            if (res.describeBatchSegmentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCampaign

<p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCampaignRequest;
import org.openapis.openapi.models.operations.DescribeCampaignResponse;
import org.openapis.openapi.models.operations.DescribeCampaignXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCampaignRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCampaignRequest req = new DescribeCampaignRequest(                new DescribeCampaignRequest("sequi");, DescribeCampaignXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_CAMPAIGN) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            DescribeCampaignResponse res = sdk.sdk.describeCampaign(req);

            if (res.describeCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.operations.DescribeDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest(                new DescribeDatasetRequest("maiores");, DescribeDatasetXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_DATASET) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeDatasetResponse res = sdk.sdk.describeDataset(req);

            if (res.describeDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatasetExportJob

Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetExportJobRequest;
import org.openapis.openapi.models.operations.DescribeDatasetExportJobResponse;
import org.openapis.openapi.models.operations.DescribeDatasetExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetExportJobRequest req = new DescribeDatasetExportJobRequest(                new DescribeDatasetExportJobRequest("ea");, DescribeDatasetExportJobXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_DATASET_EXPORT_JOB) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "vel";
                xAmzCredential = "possimus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "laudantium";
            }};            

            DescribeDatasetExportJobResponse res = sdk.sdk.describeDatasetExportJob(req);

            if (res.describeDatasetExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatasetGroup

Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetGroupRequest;
import org.openapis.openapi.models.operations.DescribeDatasetGroupResponse;
import org.openapis.openapi.models.operations.DescribeDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetGroupRequest req = new DescribeDatasetGroupRequest(                new DescribeDatasetGroupRequest("dolor");, DescribeDatasetGroupXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_DATASET_GROUP) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
            }};            

            DescribeDatasetGroupResponse res = sdk.sdk.describeDatasetGroup(req);

            if (res.describeDatasetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatasetImportJob

Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobRequest;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobResponse;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetImportJobRequest req = new DescribeDatasetImportJobRequest(                new DescribeDatasetImportJobRequest("quisquam");, DescribeDatasetImportJobXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_DATASET_IMPORT_JOB) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "inventore";
            }};            

            DescribeDatasetImportJobResponse res = sdk.sdk.describeDatasetImportJob(req);

            if (res.describeDatasetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventTracker

Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventTrackerRequest;
import org.openapis.openapi.models.operations.DescribeEventTrackerResponse;
import org.openapis.openapi.models.operations.DescribeEventTrackerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventTrackerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventTrackerRequest req = new DescribeEventTrackerRequest(                new DescribeEventTrackerRequest("ea");, DescribeEventTrackerXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_EVENT_TRACKER) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            DescribeEventTrackerResponse res = sdk.sdk.describeEventTracker(req);

            if (res.describeEventTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFeatureTransformation

Describes the given feature transformation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFeatureTransformationRequest;
import org.openapis.openapi.models.operations.DescribeFeatureTransformationResponse;
import org.openapis.openapi.models.operations.DescribeFeatureTransformationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFeatureTransformationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFeatureTransformationRequest req = new DescribeFeatureTransformationRequest(                new DescribeFeatureTransformationRequest("aut");, DescribeFeatureTransformationXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_FEATURE_TRANSFORMATION) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            DescribeFeatureTransformationResponse res = sdk.sdk.describeFeatureTransformation(req);

            if (res.describeFeatureTransformationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFilter

Describes a filter's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFilterRequest;
import org.openapis.openapi.models.operations.DescribeFilterResponse;
import org.openapis.openapi.models.operations.DescribeFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFilterRequest req = new DescribeFilterRequest(                new DescribeFilterRequest("et");, DescribeFilterXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_FILTER) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeFilterResponse res = sdk.sdk.describeFilter(req);

            if (res.describeFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMetricAttribution

Describes a metric attribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMetricAttributionRequest;
import org.openapis.openapi.models.operations.DescribeMetricAttributionResponse;
import org.openapis.openapi.models.operations.DescribeMetricAttributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMetricAttributionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMetricAttributionRequest req = new DescribeMetricAttributionRequest(                new DescribeMetricAttributionRequest("assumenda");, DescribeMetricAttributionXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_METRIC_ATTRIBUTION) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeMetricAttributionResponse res = sdk.sdk.describeMetricAttribution(req);

            if (res.describeMetricAttributionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecipe

<p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecipeRequest;
import org.openapis.openapi.models.operations.DescribeRecipeResponse;
import org.openapis.openapi.models.operations.DescribeRecipeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecipeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecipeRequest req = new DescribeRecipeRequest(                new DescribeRecipeRequest("ipsa");, DescribeRecipeXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_RECIPE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "odio";
                xAmzDate = "eius";
                xAmzSecurityToken = "esse";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "rem";
            }};            

            DescribeRecipeResponse res = sdk.sdk.describeRecipe(req);

            if (res.describeRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecommender

<p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecommenderRequest;
import org.openapis.openapi.models.operations.DescribeRecommenderResponse;
import org.openapis.openapi.models.operations.DescribeRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecommenderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecommenderRequest req = new DescribeRecommenderRequest(                new DescribeRecommenderRequest("reprehenderit");, DescribeRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_RECOMMENDER) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
            }};            

            DescribeRecommenderResponse res = sdk.sdk.describeRecommender(req);

            if (res.describeRecommenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSchema

Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSchemaRequest;
import org.openapis.openapi.models.operations.DescribeSchemaResponse;
import org.openapis.openapi.models.operations.DescribeSchemaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSchemaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSchemaRequest req = new DescribeSchemaRequest(                new DescribeSchemaRequest("quisquam");, DescribeSchemaXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_SCHEMA) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            DescribeSchemaResponse res = sdk.sdk.describeSchema(req);

            if (res.describeSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSolution

Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSolutionRequest;
import org.openapis.openapi.models.operations.DescribeSolutionResponse;
import org.openapis.openapi.models.operations.DescribeSolutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSolutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSolutionRequest req = new DescribeSolutionRequest(                new DescribeSolutionRequest("fuga");, DescribeSolutionXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_SOLUTION) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeSolutionResponse res = sdk.sdk.describeSolution(req);

            if (res.describeSolutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSolutionVersion

Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSolutionVersionRequest;
import org.openapis.openapi.models.operations.DescribeSolutionVersionResponse;
import org.openapis.openapi.models.operations.DescribeSolutionVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSolutionVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSolutionVersionRequest req = new DescribeSolutionVersionRequest(                new DescribeSolutionVersionRequest("ipsam");, DescribeSolutionVersionXAmzTargetEnum.AMAZON_PERSONALIZE_DESCRIBE_SOLUTION_VERSION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "quo";
                xAmzDate = "esse";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeSolutionVersionResponse res = sdk.sdk.describeSolutionVersion(req);

            if (res.describeSolutionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSolutionMetrics

Gets the metrics for the specified solution version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSolutionMetricsRequest;
import org.openapis.openapi.models.operations.GetSolutionMetricsResponse;
import org.openapis.openapi.models.operations.GetSolutionMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSolutionMetricsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSolutionMetricsRequest req = new GetSolutionMetricsRequest(                new GetSolutionMetricsRequest("dignissimos");, GetSolutionMetricsXAmzTargetEnum.AMAZON_PERSONALIZE_GET_SOLUTION_METRICS) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetSolutionMetricsResponse res = sdk.sdk.getSolutionMetrics(req);

            if (res.getSolutionMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchInferenceJobs

Gets a list of the batch inference jobs that have been performed off of a solution version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchInferenceJobsRequest;
import org.openapis.openapi.models.operations.ListBatchInferenceJobsResponse;
import org.openapis.openapi.models.operations.ListBatchInferenceJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBatchInferenceJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchInferenceJobsRequest req = new ListBatchInferenceJobsRequest(                new ListBatchInferenceJobsRequest() {{
                                maxResults = 959434L;
                                nextToken = "dolores";
                                solutionVersionArn = "deserunt";
                            }};, ListBatchInferenceJobsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_BATCH_INFERENCE_JOBS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "porro";
                xAmzDate = "eum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "consequuntur";
                maxResults = "deleniti";
                nextToken = "fugit";
            }};            

            ListBatchInferenceJobsResponse res = sdk.sdk.listBatchInferenceJobs(req);

            if (res.listBatchInferenceJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchSegmentJobs

Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchSegmentJobsRequest;
import org.openapis.openapi.models.operations.ListBatchSegmentJobsResponse;
import org.openapis.openapi.models.operations.ListBatchSegmentJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBatchSegmentJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchSegmentJobsRequest req = new ListBatchSegmentJobsRequest(                new ListBatchSegmentJobsRequest() {{
                                maxResults = 649463L;
                                nextToken = "incidunt";
                                solutionVersionArn = "atque";
                            }};, ListBatchSegmentJobsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_BATCH_SEGMENT_JOBS) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nisi";
                xAmzDate = "fugit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "ratione";
                maxResults = "explicabo";
                nextToken = "saepe";
            }};            

            ListBatchSegmentJobsResponse res = sdk.sdk.listBatchSegmentJobs(req);

            if (res.listBatchSegmentJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCampaigns

Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCampaignsRequest;
import org.openapis.openapi.models.operations.ListCampaignsResponse;
import org.openapis.openapi.models.operations.ListCampaignsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCampaignsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCampaignsRequest req = new ListCampaignsRequest(                new ListCampaignsRequest() {{
                                maxResults = 543806L;
                                nextToken = "et";
                                solutionArn = "esse";
                            }};, ListCampaignsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_CAMPAIGNS) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "veritatis";
                xAmzDate = "esse";
                xAmzSecurityToken = "quod";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "vero";
                maxResults = "aliquid";
                nextToken = "quasi";
            }};            

            ListCampaignsResponse res = sdk.sdk.listCampaigns(req);

            if (res.listCampaignsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetExportJobs

Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetExportJobsRequest;
import org.openapis.openapi.models.operations.ListDatasetExportJobsResponse;
import org.openapis.openapi.models.operations.ListDatasetExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetExportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetExportJobsRequest req = new ListDatasetExportJobsRequest(                new ListDatasetExportJobsRequest() {{
                                datasetArn = "vel";
                                maxResults = 690025L;
                                nextToken = "molestiae";
                            }};, ListDatasetExportJobsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_DATASET_EXPORT_JOBS) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
                maxResults = "tempore";
                nextToken = "adipisci";
            }};            

            ListDatasetExportJobsResponse res = sdk.sdk.listDatasetExportJobs(req);

            if (res.listDatasetExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetGroups

Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetGroupsRequest;
import org.openapis.openapi.models.operations.ListDatasetGroupsResponse;
import org.openapis.openapi.models.operations.ListDatasetGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetGroupsRequest req = new ListDatasetGroupsRequest(                new ListDatasetGroupsRequest() {{
                                maxResults = 160538L;
                                nextToken = "consequatur";
                            }};, ListDatasetGroupsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_DATASET_GROUPS) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "sapiente";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "provident";
                maxResults = "a";
                nextToken = "nulla";
            }};            

            ListDatasetGroupsResponse res = sdk.sdk.listDatasetGroups(req);

            if (res.listDatasetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetImportJobs

Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetImportJobsRequest;
import org.openapis.openapi.models.operations.ListDatasetImportJobsResponse;
import org.openapis.openapi.models.operations.ListDatasetImportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetImportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetImportJobsRequest req = new ListDatasetImportJobsRequest(                new ListDatasetImportJobsRequest() {{
                                datasetArn = "esse";
                                maxResults = 97468L;
                                nextToken = "a";
                            }};, ListDatasetImportJobsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_DATASET_IMPORT_JOBS) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
                maxResults = "facere";
                nextToken = "veritatis";
            }};            

            ListDatasetImportJobsResponse res = sdk.sdk.listDatasetImportJobs(req);

            if (res.listDatasetImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.operations.ListDatasetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest(                new ListDatasetsRequest() {{
                                datasetGroupArn = "quasi";
                                maxResults = 628899L;
                                nextToken = "culpa";
                            }};, ListDatasetsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_DATASETS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quae";
                xAmzDate = "earum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "in";
                xAmzSignedHeaders = "eius";
                maxResults = "libero";
                nextToken = "illum";
            }};            

            ListDatasetsResponse res = sdk.sdk.listDatasets(req);

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventTrackers

Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventTrackersRequest;
import org.openapis.openapi.models.operations.ListEventTrackersResponse;
import org.openapis.openapi.models.operations.ListEventTrackersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEventTrackersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventTrackersRequest req = new ListEventTrackersRequest(                new ListEventTrackersRequest() {{
                                datasetGroupArn = "accusantium";
                                maxResults = 306986L;
                                nextToken = "sapiente";
                            }};, ListEventTrackersXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_EVENT_TRACKERS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatum";
                maxResults = "qui";
                nextToken = "quibusdam";
            }};            

            ListEventTrackersResponse res = sdk.sdk.listEventTrackers(req);

            if (res.listEventTrackersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFilters

Lists all filters that belong to a given dataset group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFiltersRequest;
import org.openapis.openapi.models.operations.ListFiltersResponse;
import org.openapis.openapi.models.operations.ListFiltersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFiltersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFiltersRequest req = new ListFiltersRequest(                new ListFiltersRequest() {{
                                datasetGroupArn = "deleniti";
                                maxResults = 929292L;
                                nextToken = "dolorum";
                            }};, ListFiltersXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_FILTERS) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "tenetur";
                xAmzDate = "quasi";
                xAmzSecurityToken = "at";
                xAmzSignature = "et";
                xAmzSignedHeaders = "voluptate";
                maxResults = "ipsa";
                nextToken = "minima";
            }};            

            ListFiltersResponse res = sdk.sdk.listFilters(req);

            if (res.listFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMetricAttributionMetrics

Lists the metrics for the metric attribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMetricAttributionMetricsRequest;
import org.openapis.openapi.models.operations.ListMetricAttributionMetricsResponse;
import org.openapis.openapi.models.operations.ListMetricAttributionMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMetricAttributionMetricsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMetricAttributionMetricsRequest req = new ListMetricAttributionMetricsRequest(                new ListMetricAttributionMetricsRequest() {{
                                maxResults = 232744L;
                                metricAttributionArn = "adipisci";
                                nextToken = "iste";
                            }};, ListMetricAttributionMetricsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_METRIC_ATTRIBUTION_METRICS) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "rem";
                xAmzDate = "aut";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "mollitia";
                maxResults = "ab";
                nextToken = "corrupti";
            }};            

            ListMetricAttributionMetricsResponse res = sdk.sdk.listMetricAttributionMetrics(req);

            if (res.listMetricAttributionMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMetricAttributions

Lists metric attributions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMetricAttributionsRequest;
import org.openapis.openapi.models.operations.ListMetricAttributionsResponse;
import org.openapis.openapi.models.operations.ListMetricAttributionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMetricAttributionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMetricAttributionsRequest req = new ListMetricAttributionsRequest(                new ListMetricAttributionsRequest() {{
                                datasetGroupArn = "voluptatem";
                                maxResults = 221161L;
                                nextToken = "occaecati";
                            }};, ListMetricAttributionsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_METRIC_ATTRIBUTIONS) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "dicta";
                maxResults = "maiores";
                nextToken = "natus";
            }};            

            ListMetricAttributionsResponse res = sdk.sdk.listMetricAttributions(req);

            if (res.listMetricAttributionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecipes

Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecipesRequest;
import org.openapis.openapi.models.operations.ListRecipesResponse;
import org.openapis.openapi.models.operations.ListRecipesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.ListRecipesRequest;
import org.openapis.openapi.models.shared.RecipeProviderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecipesRequest req = new ListRecipesRequest(                new ListRecipesRequest() {{
                                domain = DomainEnum.VIDEO_ON_DEMAND;
                                maxResults = 374323L;
                                nextToken = "asperiores";
                                recipeProvider = RecipeProviderEnum.SERVICE;
                            }};, ListRecipesXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_RECIPES) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quaerat";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "maxime";
                maxResults = "dignissimos";
                nextToken = "officia";
            }};            

            ListRecipesResponse res = sdk.sdk.listRecipes(req);

            if (res.listRecipesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommenders

Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendersRequest;
import org.openapis.openapi.models.operations.ListRecommendersResponse;
import org.openapis.openapi.models.operations.ListRecommendersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRecommendersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendersRequest req = new ListRecommendersRequest(                new ListRecommendersRequest() {{
                                datasetGroupArn = "nemo";
                                maxResults = 65304L;
                                nextToken = "quaerat";
                            }};, ListRecommendersXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_RECOMMENDERS) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
                maxResults = "suscipit";
                nextToken = "velit";
            }};            

            ListRecommendersResponse res = sdk.sdk.listRecommenders(req);

            if (res.listRecommendersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchemas

Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchemasRequest;
import org.openapis.openapi.models.operations.ListSchemasResponse;
import org.openapis.openapi.models.operations.ListSchemasXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSchemasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSchemasRequest req = new ListSchemasRequest(                new ListSchemasRequest() {{
                                maxResults = 665859L;
                                nextToken = "recusandae";
                            }};, ListSchemasXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_SCHEMAS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
                maxResults = "possimus";
                nextToken = "facilis";
            }};            

            ListSchemasResponse res = sdk.sdk.listSchemas(req);

            if (res.listSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSolutionVersions

Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSolutionVersionsRequest;
import org.openapis.openapi.models.operations.ListSolutionVersionsResponse;
import org.openapis.openapi.models.operations.ListSolutionVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSolutionVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSolutionVersionsRequest req = new ListSolutionVersionsRequest(                new ListSolutionVersionsRequest() {{
                                maxResults = 414857L;
                                nextToken = "in";
                                solutionArn = "corporis";
                            }};, ListSolutionVersionsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_SOLUTION_VERSIONS) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "cum";
                maxResults = "consectetur";
                nextToken = "in";
            }};            

            ListSolutionVersionsResponse res = sdk.sdk.listSolutionVersions(req);

            if (res.listSolutionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSolutions

Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSolutionsRequest;
import org.openapis.openapi.models.operations.ListSolutionsResponse;
import org.openapis.openapi.models.operations.ListSolutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSolutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSolutionsRequest req = new ListSolutionsRequest(                new ListSolutionsRequest() {{
                                datasetGroupArn = "earum";
                                maxResults = 814967L;
                                nextToken = "numquam";
                            }};, ListSolutionsXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_SOLUTIONS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "reiciendis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "dolore";
                maxResults = "sunt";
                nextToken = "asperiores";
            }};            

            ListSolutionsResponse res = sdk.sdk.listSolutions(req);

            if (res.listSolutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.

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
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("non");, ListTagsForResourceXAmzTargetEnum.AMAZON_PERSONALIZE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
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

## startRecommender

Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRecommenderRequest;
import org.openapis.openapi.models.operations.StartRecommenderResponse;
import org.openapis.openapi.models.operations.StartRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRecommenderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRecommenderRequest req = new StartRecommenderRequest(                new StartRecommenderRequest("laboriosam");, StartRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_START_RECOMMENDER) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "libero";
                xAmzDate = "vitae";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "tempora";
            }};            

            StartRecommenderResponse res = sdk.sdk.startRecommender(req);

            if (res.startRecommenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopRecommender

Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRecommenderRequest;
import org.openapis.openapi.models.operations.StopRecommenderResponse;
import org.openapis.openapi.models.operations.StopRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRecommenderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopRecommenderRequest req = new StopRecommenderRequest(                new StopRecommenderRequest("voluptas");, StopRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_STOP_RECOMMENDER) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "minima";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "minus";
            }};            

            StopRecommenderResponse res = sdk.sdk.stopRecommender(req);

            if (res.stopRecommenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopSolutionVersionCreation

<p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSolutionVersionCreationRequest;
import org.openapis.openapi.models.operations.StopSolutionVersionCreationResponse;
import org.openapis.openapi.models.operations.StopSolutionVersionCreationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopSolutionVersionCreationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopSolutionVersionCreationRequest req = new StopSolutionVersionCreationRequest(                new StopSolutionVersionCreationRequest("blanditiis");, StopSolutionVersionCreationXAmzTargetEnum.AMAZON_PERSONALIZE_STOP_SOLUTION_VERSION_CREATION) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "aliquam";
                xAmzDate = "officiis";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "adipisci";
            }};            

            StopSolutionVersionCreationResponse res = sdk.sdk.stopSolutionVersionCreation(req);

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

Add a list of tags to a resource.

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
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("blanditiis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("culpa", "corrupti") {{
                                                    tagKey = "hic";
                                                    tagValue = "nesciunt";
                                                }}),
                                                add(new Tag("hic", "exercitationem") {{
                                                    tagKey = "pariatur";
                                                    tagValue = "totam";
                                                }}),
                                                add(new Tag("rerum", "sed") {{
                                                    tagKey = "nobis";
                                                    tagValue = "sit";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_PERSONALIZE_TAG_RESOURCE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "asperiores";
                xAmzDate = "facilis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "ab";
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

Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.

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
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("dolore",                 new String[]{{
                                                add("sed"),
                                                add("in"),
                                                add("commodi"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_PERSONALIZE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
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

## updateCampaign

<p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCampaignRequest;
import org.openapis.openapi.models.operations.UpdateCampaignResponse;
import org.openapis.openapi.models.operations.UpdateCampaignXAmzTargetEnum;
import org.openapis.openapi.models.shared.CampaignConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCampaignRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCampaignRequest req = new UpdateCampaignRequest(                new UpdateCampaignRequest("illo") {{
                                campaignConfig = new CampaignConfig() {{
                                    itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                        put("perferendis", "corrupti");
                                        put("maiores", "incidunt");
                                        put("sed", "provident");
                                        put("eius", "necessitatibus");
                                    }};
                                }};;
                                minProvisionedTPS = 215529L;
                                solutionVersionArn = "ea";
                            }};, UpdateCampaignXAmzTargetEnum.AMAZON_PERSONALIZE_UPDATE_CAMPAIGN) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "quos";
                xAmzCredential = "voluptatibus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateCampaignResponse res = sdk.sdk.updateCampaign(req);

            if (res.updateCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMetricAttribution

Updates a metric attribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMetricAttributionRequest;
import org.openapis.openapi.models.operations.UpdateMetricAttributionResponse;
import org.openapis.openapi.models.operations.UpdateMetricAttributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.MetricAttribute;
import org.openapis.openapi.models.shared.MetricAttributionOutput;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMetricAttributionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMetricAttributionRequest req = new UpdateMetricAttributionRequest(                new UpdateMetricAttributionRequest() {{
                                addMetrics = new org.openapis.openapi.models.shared.MetricAttribute[]{{
                                    add(new MetricAttribute("facilis", "quaerat", "incidunt") {{
                                        eventType = "non";
                                        expression = "officiis";
                                        metricName = "praesentium";
                                    }}),
                                }};
                                metricAttributionArn = "ipsam";
                                metricsOutputConfig = new MetricAttributionOutput("debitis") {{
                                    s3DataDestination = new S3DataConfig("rem") {{
                                        kmsKeyArn = "sit";
                                    }};;
                                }};;
                                removeMetrics = new String[]{{
                                    add("error"),
                                    add("veniam"),
                                    add("minima"),
                                    add("recusandae"),
                                }};
                            }};, UpdateMetricAttributionXAmzTargetEnum.AMAZON_PERSONALIZE_UPDATE_METRIC_ATTRIBUTION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "magni";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veniam";
            }};            

            UpdateMetricAttributionResponse res = sdk.sdk.updateMetricAttribution(req);

            if (res.updateMetricAttributionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRecommender

Updates the recommender to modify the recommender configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRecommenderRequest;
import org.openapis.openapi.models.operations.UpdateRecommenderResponse;
import org.openapis.openapi.models.operations.UpdateRecommenderXAmzTargetEnum;
import org.openapis.openapi.models.shared.RecommenderConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRecommenderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRecommenderRequest req = new UpdateRecommenderRequest(                new UpdateRecommenderRequest("officiis",                 new RecommenderConfig() {{
                                                itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                                    put("laudantium", "exercitationem");
                                                }};
                                                minRecommendationRequestsPerSecond = 510629L;
                                            }};);, UpdateRecommenderXAmzTargetEnum.AMAZON_PERSONALIZE_UPDATE_RECOMMENDER) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "dolorum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "error";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "expedita";
            }};            

            UpdateRecommenderResponse res = sdk.sdk.updateRecommender(req);

            if (res.updateRecommenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
