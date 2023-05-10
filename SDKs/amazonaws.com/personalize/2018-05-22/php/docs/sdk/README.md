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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobInput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobOutput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchInferenceJobRequest();
    $request->createBatchInferenceJobRequest = new CreateBatchInferenceJobRequest();
    $request->createBatchInferenceJobRequest->batchInferenceJobConfig = new BatchInferenceJobConfig();
    $request->createBatchInferenceJobRequest->batchInferenceJobConfig->itemExplorationConfig = [
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
        'quis' => 'veritatis',
    ];
    $request->createBatchInferenceJobRequest->filterArn = 'deserunt';
    $request->createBatchInferenceJobRequest->jobInput = new BatchInferenceJobInput();
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource = new S3DataConfig();
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource->kmsKeyArn = 'perferendis';
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource->path = 'ipsam';
    $request->createBatchInferenceJobRequest->jobName = 'repellendus';
    $request->createBatchInferenceJobRequest->jobOutput = new BatchInferenceJobOutput();
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination = new S3DataConfig();
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination->kmsKeyArn = 'sapiente';
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination->path = 'quo';
    $request->createBatchInferenceJobRequest->numResults = 140350;
    $request->createBatchInferenceJobRequest->roleArn = 'at';
    $request->createBatchInferenceJobRequest->solutionVersionArn = 'at';
    $request->createBatchInferenceJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateBatchInferenceJobXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_BATCH_INFERENCE_JOB;

    $response = $sdk->sdk->createBatchInferenceJob($request);

    if ($response->createBatchInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBatchSegmentJob

Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchSegmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchSegmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchSegmentJobInput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchSegmentJobOutput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchSegmentJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchSegmentJobRequest();
    $request->createBatchSegmentJobRequest = new CreateBatchSegmentJobRequest();
    $request->createBatchSegmentJobRequest->filterArn = 'dicta';
    $request->createBatchSegmentJobRequest->jobInput = new BatchSegmentJobInput();
    $request->createBatchSegmentJobRequest->jobInput->s3DataSource = new S3DataConfig();
    $request->createBatchSegmentJobRequest->jobInput->s3DataSource->kmsKeyArn = 'nam';
    $request->createBatchSegmentJobRequest->jobInput->s3DataSource->path = 'officia';
    $request->createBatchSegmentJobRequest->jobName = 'occaecati';
    $request->createBatchSegmentJobRequest->jobOutput = new BatchSegmentJobOutput();
    $request->createBatchSegmentJobRequest->jobOutput->s3DataDestination = new S3DataConfig();
    $request->createBatchSegmentJobRequest->jobOutput->s3DataDestination->kmsKeyArn = 'fugit';
    $request->createBatchSegmentJobRequest->jobOutput->s3DataDestination->path = 'deleniti';
    $request->createBatchSegmentJobRequest->numResults = 944669;
    $request->createBatchSegmentJobRequest->roleArn = 'optio';
    $request->createBatchSegmentJobRequest->solutionVersionArn = 'totam';
    $request->createBatchSegmentJobRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CreateBatchSegmentJobXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_BATCH_SEGMENT_JOB;

    $response = $sdk->sdk->createBatchSegmentJob($request);

    if ($response->createBatchSegmentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCampaign

<p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\CampaignConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCampaignRequest();
    $request->createCampaignRequest = new CreateCampaignRequest();
    $request->createCampaignRequest->campaignConfig = new CampaignConfig();
    $request->createCampaignRequest->campaignConfig->itemExplorationConfig = [
        'excepturi' => 'aspernatur',
    ];
    $request->createCampaignRequest->minProvisionedTPS = 18789;
    $request->createCampaignRequest->name = 'Faye Cormier';
    $request->createCampaignRequest->solutionVersionArn = 'natus';
    $request->createCampaignRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateCampaignXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_CAMPAIGN;

    $response = $sdk->sdk->createCampaign($request);

    if ($response->createCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataset

<p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->createDatasetRequest = new CreateDatasetRequest();
    $request->createDatasetRequest->datasetGroupArn = 'saepe';
    $request->createDatasetRequest->datasetType = 'quidem';
    $request->createDatasetRequest->name = 'Brenda Wisozk';
    $request->createDatasetRequest->schemaArn = 'laborum';
    $request->createDatasetRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_DATASET;

    $response = $sdk->sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetExportJob

<p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\IngestionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetExportJobOutput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetExportJobRequest();
    $request->createDatasetExportJobRequest = new CreateDatasetExportJobRequest();
    $request->createDatasetExportJobRequest->datasetArn = 'minima';
    $request->createDatasetExportJobRequest->ingestionMode = IngestionModeEnum::PUT;
    $request->createDatasetExportJobRequest->jobName = 'accusantium';
    $request->createDatasetExportJobRequest->jobOutput = new DatasetExportJobOutput();
    $request->createDatasetExportJobRequest->jobOutput->s3DataDestination = new S3DataConfig();
    $request->createDatasetExportJobRequest->jobOutput->s3DataDestination->kmsKeyArn = 'iure';
    $request->createDatasetExportJobRequest->jobOutput->s3DataDestination->path = 'culpa';
    $request->createDatasetExportJobRequest->roleArn = 'doloribus';
    $request->createDatasetExportJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CreateDatasetExportJobXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_DATASET_EXPORT_JOB;

    $response = $sdk->sdk->createDatasetExportJob($request);

    if ($response->createDatasetExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetGroup

<p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetGroupRequest();
    $request->createDatasetGroupRequest = new CreateDatasetGroupRequest();
    $request->createDatasetGroupRequest->domain = DomainEnum::VIDEO_ON_DEMAND;
    $request->createDatasetGroupRequest->kmsKeyArn = 'numquam';
    $request->createDatasetGroupRequest->name = 'Claudia Krajcik';
    $request->createDatasetGroupRequest->roleArn = 'quia';
    $request->createDatasetGroupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = CreateDatasetGroupXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_DATASET_GROUP;

    $response = $sdk->sdk->createDatasetGroup($request);

    if ($response->createDatasetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetImportJob

<p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\ImportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetImportJobRequest();
    $request->createDatasetImportJobRequest = new CreateDatasetImportJobRequest();
    $request->createDatasetImportJobRequest->dataSource = new DataSource();
    $request->createDatasetImportJobRequest->dataSource->dataLocation = 'tenetur';
    $request->createDatasetImportJobRequest->datasetArn = 'ipsam';
    $request->createDatasetImportJobRequest->importMode = ImportModeEnum::INCREMENTAL;
    $request->createDatasetImportJobRequest->jobName = 'possimus';
    $request->createDatasetImportJobRequest->publishAttributionMetricsToS3 = false;
    $request->createDatasetImportJobRequest->roleArn = 'aut';
    $request->createDatasetImportJobRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateDatasetImportJobXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_DATASET_IMPORT_JOB;

    $response = $sdk->sdk->createDatasetImportJob($request);

    if ($response->createDatasetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventTracker

<p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventTrackerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventTrackerRequest();
    $request->createEventTrackerRequest = new CreateEventTrackerRequest();
    $request->createEventTrackerRequest->datasetGroupArn = 'nihil';
    $request->createEventTrackerRequest->name = 'Jan Bednar';
    $request->createEventTrackerRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateEventTrackerXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_EVENT_TRACKER;

    $response = $sdk->sdk->createEventTracker($request);

    if ($response->createEventTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilter

Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilterRequest();
    $request->createFilterRequest = new CreateFilterRequest();
    $request->createFilterRequest->datasetGroupArn = 'dolore';
    $request->createFilterRequest->filterExpression = 'iusto';
    $request->createFilterRequest->name = 'Maryann Hamill';
    $request->createFilterRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = CreateFilterXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_FILTER;

    $response = $sdk->sdk->createFilter($request);

    if ($response->createFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMetricAttribution

Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttribute;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttributionOutput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricAttributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMetricAttributionRequest();
    $request->createMetricAttributionRequest = new CreateMetricAttributionRequest();
    $request->createMetricAttributionRequest->datasetGroupArn = 'praesentium';
    $request->createMetricAttributionRequest->metrics = [
        new MetricAttribute(),
        new MetricAttribute(),
        new MetricAttribute(),
    ];
    $request->createMetricAttributionRequest->metricsOutputConfig = new MetricAttributionOutput();
    $request->createMetricAttributionRequest->metricsOutputConfig->roleArn = 'voluptates';
    $request->createMetricAttributionRequest->metricsOutputConfig->s3DataDestination = new S3DataConfig();
    $request->createMetricAttributionRequest->metricsOutputConfig->s3DataDestination->kmsKeyArn = 'quasi';
    $request->createMetricAttributionRequest->metricsOutputConfig->s3DataDestination->path = 'repudiandae';
    $request->createMetricAttributionRequest->name = 'Patrick Ward';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = CreateMetricAttributionXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_METRIC_ATTRIBUTION;

    $response = $sdk->sdk->createMetricAttribution($request);

    if ($response->createMetricAttributionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRecommender

<p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommenderConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRecommenderRequest();
    $request->createRecommenderRequest = new CreateRecommenderRequest();
    $request->createRecommenderRequest->datasetGroupArn = 'labore';
    $request->createRecommenderRequest->name = 'Tina Jacobi';
    $request->createRecommenderRequest->recipeArn = 'perferendis';
    $request->createRecommenderRequest->recommenderConfig = new RecommenderConfig();
    $request->createRecommenderRequest->recommenderConfig->itemExplorationConfig = [
        'assumenda' => 'ipsam',
    ];
    $request->createRecommenderRequest->recommenderConfig->minRecommendationRequestsPerSecond = 4695;
    $request->createRecommenderRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = CreateRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_RECOMMENDER;

    $response = $sdk->sdk->createRecommender($request);

    if ($response->createRecommenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSchema

<p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSchemaRequest();
    $request->createSchemaRequest = new CreateSchemaRequest();
    $request->createSchemaRequest->domain = DomainEnum::ECOMMERCE;
    $request->createSchemaRequest->name = 'Sheri Mayer';
    $request->createSchemaRequest->schema = 'necessitatibus';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateSchemaXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_SCHEMA;

    $response = $sdk->sdk->createSchema($request);

    if ($response->createSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSolution

<p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSolutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSolutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SolutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLConfig;
use \OpenAPI\OpenAPI\Models\Shared\HPOConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterRanges;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalHyperParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousHyperParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\IntegerHyperParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\HPOObjective;
use \OpenAPI\OpenAPI\Models\Shared\HPOResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationObjective;
use \OpenAPI\OpenAPI\Models\Shared\ObjectiveSensitivityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSolutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSolutionRequest();
    $request->createSolutionRequest = new CreateSolutionRequest();
    $request->createSolutionRequest->datasetGroupArn = 'in';
    $request->createSolutionRequest->eventType = 'illum';
    $request->createSolutionRequest->name = 'Jean Buckridge';
    $request->createSolutionRequest->performAutoML = false;
    $request->createSolutionRequest->performHPO = false;
    $request->createSolutionRequest->recipeArn = 'facere';
    $request->createSolutionRequest->solutionConfig = new SolutionConfig();
    $request->createSolutionRequest->solutionConfig->algorithmHyperParameters = [
        'aliquid' => 'laborum',
        'accusamus' => 'non',
    ];
    $request->createSolutionRequest->solutionConfig->autoMLConfig = new AutoMLConfig();
    $request->createSolutionRequest->solutionConfig->autoMLConfig->metricName = 'occaecati';
    $request->createSolutionRequest->solutionConfig->autoMLConfig->recipeList = [
        'accusamus',
        'delectus',
    ];
    $request->createSolutionRequest->solutionConfig->eventValueThreshold = 'quidem';
    $request->createSolutionRequest->solutionConfig->featureTransformationParameters = [
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->createSolutionRequest->solutionConfig->hpoConfig = new HPOConfig();
    $request->createSolutionRequest->solutionConfig->hpoConfig->algorithmHyperParameterRanges = new HyperParameterRanges();
    $request->createSolutionRequest->solutionConfig->hpoConfig->algorithmHyperParameterRanges->categoricalHyperParameterRanges = [
        new CategoricalHyperParameterRange(),
        new CategoricalHyperParameterRange(),
        new CategoricalHyperParameterRange(),
    ];
    $request->createSolutionRequest->solutionConfig->hpoConfig->algorithmHyperParameterRanges->continuousHyperParameterRanges = [
        new ContinuousHyperParameterRange(),
        new ContinuousHyperParameterRange(),
    ];
    $request->createSolutionRequest->solutionConfig->hpoConfig->algorithmHyperParameterRanges->integerHyperParameterRanges = [
        new IntegerHyperParameterRange(),
        new IntegerHyperParameterRange(),
    ];
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoObjective = new HPOObjective();
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoObjective->metricName = 'natus';
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoObjective->metricRegex = 'omnis';
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoObjective->type = 'molestiae';
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoResourceConfig = new HPOResourceConfig();
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoResourceConfig->maxNumberOfTrainingJobs = 'perferendis';
    $request->createSolutionRequest->solutionConfig->hpoConfig->hpoResourceConfig->maxParallelTrainingJobs = 'nihil';
    $request->createSolutionRequest->solutionConfig->optimizationObjective = new OptimizationObjective();
    $request->createSolutionRequest->solutionConfig->optimizationObjective->itemAttribute = 'magnam';
    $request->createSolutionRequest->solutionConfig->optimizationObjective->objectiveSensitivity = ObjectiveSensitivityEnum::HIGH;
    $request->createSolutionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateSolutionXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_SOLUTION;

    $response = $sdk->sdk->createSolution($request);

    if ($response->createSolutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSolutionVersion

<p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSolutionVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSolutionVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TrainingModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSolutionVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSolutionVersionRequest();
    $request->createSolutionVersionRequest = new CreateSolutionVersionRequest();
    $request->createSolutionVersionRequest->name = 'Ms. Julie Gusikowski';
    $request->createSolutionVersionRequest->solutionArn = 'provident';
    $request->createSolutionVersionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createSolutionVersionRequest->trainingMode = TrainingModeEnum::UPDATE;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreateSolutionVersionXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_SOLUTION_VERSION;

    $response = $sdk->sdk->createSolutionVersion($request);

    if ($response->createSolutionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCampaign

Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCampaignRequest();
    $request->deleteCampaignRequest = new DeleteCampaignRequest();
    $request->deleteCampaignRequest->campaignArn = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DeleteCampaignXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_CAMPAIGN;

    $response = $sdk->sdk->deleteCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset

Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->deleteDatasetRequest = new DeleteDatasetRequest();
    $request->deleteDatasetRequest->datasetArn = 'maxime';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DeleteDatasetXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_DATASET;

    $response = $sdk->sdk->deleteDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatasetGroup

<p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetGroupRequest();
    $request->deleteDatasetGroupRequest = new DeleteDatasetGroupRequest();
    $request->deleteDatasetGroupRequest->datasetGroupArn = 'expedita';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DeleteDatasetGroupXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_DATASET_GROUP;

    $response = $sdk->sdk->deleteDatasetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventTracker

Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventTrackerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventTrackerRequest();
    $request->deleteEventTrackerRequest = new DeleteEventTrackerRequest();
    $request->deleteEventTrackerRequest->eventTrackerArn = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteEventTrackerXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_EVENT_TRACKER;

    $response = $sdk->sdk->deleteEventTracker($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFilter

Deletes a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilterRequest();
    $request->deleteFilterRequest = new DeleteFilterRequest();
    $request->deleteFilterRequest->filterArn = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteFilterXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_FILTER;

    $response = $sdk->sdk->deleteFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMetricAttribution

Deletes a metric attribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricAttributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMetricAttributionRequest();
    $request->deleteMetricAttributionRequest = new DeleteMetricAttributionRequest();
    $request->deleteMetricAttributionRequest->metricAttributionArn = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteMetricAttributionXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_METRIC_ATTRIBUTION;

    $response = $sdk->sdk->deleteMetricAttribution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecommender

Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecommenderRequest();
    $request->deleteRecommenderRequest = new DeleteRecommenderRequest();
    $request->deleteRecommenderRequest->recommenderArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DeleteRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_RECOMMENDER;

    $response = $sdk->sdk->deleteRecommender($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchema

Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSchemaRequest();
    $request->deleteSchemaRequest = new DeleteSchemaRequest();
    $request->deleteSchemaRequest->schemaArn = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DeleteSchemaXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_SCHEMA;

    $response = $sdk->sdk->deleteSchema($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSolution

Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSolutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSolutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSolutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSolutionRequest();
    $request->deleteSolutionRequest = new DeleteSolutionRequest();
    $request->deleteSolutionRequest->solutionArn = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteSolutionXAmzTargetEnum::AMAZON_PERSONALIZE_DELETE_SOLUTION;

    $response = $sdk->sdk->deleteSolution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlgorithm

Describes the given algorithm.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlgorithmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlgorithmRequest();
    $request->describeAlgorithmRequest = new DescribeAlgorithmRequest();
    $request->describeAlgorithmRequest->algorithmArn = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = DescribeAlgorithmXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_ALGORITHM;

    $response = $sdk->sdk->describeAlgorithm($request);

    if ($response->describeAlgorithmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBatchInferenceJob

Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBatchInferenceJobRequest();
    $request->describeBatchInferenceJobRequest = new DescribeBatchInferenceJobRequest();
    $request->describeBatchInferenceJobRequest->batchInferenceJobArn = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DescribeBatchInferenceJobXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_BATCH_INFERENCE_JOB;

    $response = $sdk->sdk->describeBatchInferenceJob($request);

    if ($response->describeBatchInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBatchSegmentJob

Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchSegmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBatchSegmentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchSegmentJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBatchSegmentJobRequest();
    $request->describeBatchSegmentJobRequest = new DescribeBatchSegmentJobRequest();
    $request->describeBatchSegmentJobRequest->batchSegmentJobArn = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DescribeBatchSegmentJobXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_BATCH_SEGMENT_JOB;

    $response = $sdk->sdk->describeBatchSegmentJob($request);

    if ($response->describeBatchSegmentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCampaign

<p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCampaignXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCampaignRequest();
    $request->describeCampaignRequest = new DescribeCampaignRequest();
    $request->describeCampaignRequest->campaignArn = 'libero';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeCampaignXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_CAMPAIGN;

    $response = $sdk->sdk->describeCampaign($request);

    if ($response->describeCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->describeDatasetRequest = new DescribeDatasetRequest();
    $request->describeDatasetRequest->datasetArn = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DescribeDatasetXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_DATASET;

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatasetExportJob

Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetExportJobRequest();
    $request->describeDatasetExportJobRequest = new DescribeDatasetExportJobRequest();
    $request->describeDatasetExportJobRequest->datasetExportJobArn = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DescribeDatasetExportJobXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_DATASET_EXPORT_JOB;

    $response = $sdk->sdk->describeDatasetExportJob($request);

    if ($response->describeDatasetExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatasetGroup

Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetGroupRequest();
    $request->describeDatasetGroupRequest = new DescribeDatasetGroupRequest();
    $request->describeDatasetGroupRequest->datasetGroupArn = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DescribeDatasetGroupXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_DATASET_GROUP;

    $response = $sdk->sdk->describeDatasetGroup($request);

    if ($response->describeDatasetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatasetImportJob

Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetImportJobRequest();
    $request->describeDatasetImportJobRequest = new DescribeDatasetImportJobRequest();
    $request->describeDatasetImportJobRequest->datasetImportJobArn = 'sit';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeDatasetImportJobXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_DATASET_IMPORT_JOB;

    $response = $sdk->sdk->describeDatasetImportJob($request);

    if ($response->describeDatasetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventTracker

Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventTrackerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventTrackerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventTrackerRequest();
    $request->describeEventTrackerRequest = new DescribeEventTrackerRequest();
    $request->describeEventTrackerRequest->eventTrackerArn = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeEventTrackerXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_EVENT_TRACKER;

    $response = $sdk->sdk->describeEventTracker($request);

    if ($response->describeEventTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFeatureTransformation

Describes the given feature transformation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureTransformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFeatureTransformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureTransformationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFeatureTransformationRequest();
    $request->describeFeatureTransformationRequest = new DescribeFeatureTransformationRequest();
    $request->describeFeatureTransformationRequest->featureTransformationArn = 'id';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeFeatureTransformationXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_FEATURE_TRANSFORMATION;

    $response = $sdk->sdk->describeFeatureTransformation($request);

    if ($response->describeFeatureTransformationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFilter

Describes a filter's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFilterRequest();
    $request->describeFilterRequest = new DescribeFilterRequest();
    $request->describeFilterRequest->filterArn = 'ad';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DescribeFilterXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_FILTER;

    $response = $sdk->sdk->describeFilter($request);

    if ($response->describeFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMetricAttribution

Describes a metric attribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricAttributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMetricAttributionRequest();
    $request->describeMetricAttributionRequest = new DescribeMetricAttributionRequest();
    $request->describeMetricAttributionRequest->metricAttributionArn = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DescribeMetricAttributionXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_METRIC_ATTRIBUTION;

    $response = $sdk->sdk->describeMetricAttribution($request);

    if ($response->describeMetricAttributionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecipe

<p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecipeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecipeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecipeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecipeRequest();
    $request->describeRecipeRequest = new DescribeRecipeRequest();
    $request->describeRecipeRequest->recipeArn = 'qui';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = DescribeRecipeXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_RECIPE;

    $response = $sdk->sdk->describeRecipe($request);

    if ($response->describeRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecommender

<p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecommenderRequest();
    $request->describeRecommenderRequest = new DescribeRecommenderRequest();
    $request->describeRecommenderRequest->recommenderArn = 'tenetur';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_RECOMMENDER;

    $response = $sdk->sdk->describeRecommender($request);

    if ($response->describeRecommenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSchema

Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSchemaRequest();
    $request->describeSchemaRequest = new DescribeSchemaRequest();
    $request->describeSchemaRequest->schemaArn = 'totam';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribeSchemaXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_SCHEMA;

    $response = $sdk->sdk->describeSchema($request);

    if ($response->describeSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSolution

Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSolutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSolutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSolutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSolutionRequest();
    $request->describeSolutionRequest = new DescribeSolutionRequest();
    $request->describeSolutionRequest->solutionArn = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribeSolutionXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_SOLUTION;

    $response = $sdk->sdk->describeSolution($request);

    if ($response->describeSolutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSolutionVersion

Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSolutionVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSolutionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSolutionVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSolutionVersionRequest();
    $request->describeSolutionVersionRequest = new DescribeSolutionVersionRequest();
    $request->describeSolutionVersionRequest->solutionVersionArn = 'pariatur';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DescribeSolutionVersionXAmzTargetEnum::AMAZON_PERSONALIZE_DESCRIBE_SOLUTION_VERSION;

    $response = $sdk->sdk->describeSolutionVersion($request);

    if ($response->describeSolutionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSolutionMetrics

Gets the metrics for the specified solution version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSolutionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSolutionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSolutionMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSolutionMetricsRequest();
    $request->getSolutionMetricsRequest = new GetSolutionMetricsRequest();
    $request->getSolutionMetricsRequest->solutionVersionArn = 'distinctio';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = GetSolutionMetricsXAmzTargetEnum::AMAZON_PERSONALIZE_GET_SOLUTION_METRICS;

    $response = $sdk->sdk->getSolutionMetrics($request);

    if ($response->getSolutionMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchInferenceJobs

Gets a list of the batch inference jobs that have been performed off of a solution version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBatchInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchInferenceJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchInferenceJobsRequest();
    $request->listBatchInferenceJobsRequest = new ListBatchInferenceJobsRequest();
    $request->listBatchInferenceJobsRequest->maxResults = 144847;
    $request->listBatchInferenceJobsRequest->nextToken = 'magni';
    $request->listBatchInferenceJobsRequest->solutionVersionArn = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = ListBatchInferenceJobsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_BATCH_INFERENCE_JOBS;
    $request->maxResults = 'nobis';
    $request->nextToken = 'et';

    $response = $sdk->sdk->listBatchInferenceJobs($request);

    if ($response->listBatchInferenceJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchSegmentJobs

Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchSegmentJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBatchSegmentJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchSegmentJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchSegmentJobsRequest();
    $request->listBatchSegmentJobsRequest = new ListBatchSegmentJobsRequest();
    $request->listBatchSegmentJobsRequest->maxResults = 903720;
    $request->listBatchSegmentJobsRequest->nextToken = 'ipsum';
    $request->listBatchSegmentJobsRequest->solutionVersionArn = 'veritatis';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListBatchSegmentJobsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_BATCH_SEGMENT_JOBS;
    $request->maxResults = 'dolore';
    $request->nextToken = 'labore';

    $response = $sdk->sdk->listBatchSegmentJobs($request);

    if ($response->listBatchSegmentJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCampaigns

Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCampaignsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCampaignsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCampaignsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCampaignsRequest();
    $request->listCampaignsRequest = new ListCampaignsRequest();
    $request->listCampaignsRequest->maxResults = 240829;
    $request->listCampaignsRequest->nextToken = 'dolorum';
    $request->listCampaignsRequest->solutionArn = 'architecto';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = ListCampaignsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_CAMPAIGNS;
    $request->maxResults = 'porro';
    $request->nextToken = 'doloribus';

    $response = $sdk->sdk->listCampaigns($request);

    if ($response->listCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetExportJobs

Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetExportJobsRequest();
    $request->listDatasetExportJobsRequest = new ListDatasetExportJobsRequest();
    $request->listDatasetExportJobsRequest->datasetArn = 'ut';
    $request->listDatasetExportJobsRequest->maxResults = 703495;
    $request->listDatasetExportJobsRequest->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = ListDatasetExportJobsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_DATASET_EXPORT_JOBS;
    $request->maxResults = 'vero';
    $request->nextToken = 'omnis';

    $response = $sdk->sdk->listDatasetExportJobs($request);

    if ($response->listDatasetExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetGroups

Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetGroupsRequest();
    $request->listDatasetGroupsRequest = new ListDatasetGroupsRequest();
    $request->listDatasetGroupsRequest->maxResults = 338159;
    $request->listDatasetGroupsRequest->nextToken = 'ipsum';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = ListDatasetGroupsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_DATASET_GROUPS;
    $request->maxResults = 'distinctio';
    $request->nextToken = 'quod';

    $response = $sdk->sdk->listDatasetGroups($request);

    if ($response->listDatasetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetImportJobs

Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetImportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetImportJobsRequest();
    $request->listDatasetImportJobsRequest = new ListDatasetImportJobsRequest();
    $request->listDatasetImportJobsRequest->datasetArn = 'odio';
    $request->listDatasetImportJobsRequest->maxResults = 630448;
    $request->listDatasetImportJobsRequest->nextToken = 'facilis';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListDatasetImportJobsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_DATASET_IMPORT_JOBS;
    $request->maxResults = 'impedit';
    $request->nextToken = 'aut';

    $response = $sdk->sdk->listDatasetImportJobs($request);

    if ($response->listDatasetImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->listDatasetsRequest = new ListDatasetsRequest();
    $request->listDatasetsRequest->datasetGroupArn = 'voluptatibus';
    $request->listDatasetsRequest->maxResults = 347233;
    $request->listDatasetsRequest->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = ListDatasetsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_DATASETS;
    $request->maxResults = 'alias';
    $request->nextToken = 'officia';

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventTrackers

Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTrackersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEventTrackersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTrackersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventTrackersRequest();
    $request->listEventTrackersRequest = new ListEventTrackersRequest();
    $request->listEventTrackersRequest->datasetGroupArn = 'tempora';
    $request->listEventTrackersRequest->maxResults = 368584;
    $request->listEventTrackersRequest->nextToken = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = ListEventTrackersXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_EVENT_TRACKERS;
    $request->maxResults = 'dicta';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->listEventTrackers($request);

    if ($response->listEventTrackersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFilters

Lists all filters that belong to a given dataset group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFiltersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFiltersRequest();
    $request->listFiltersRequest = new ListFiltersRequest();
    $request->listFiltersRequest->datasetGroupArn = 'maiores';
    $request->listFiltersRequest->maxResults = 97844;
    $request->listFiltersRequest->nextToken = 'ex';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListFiltersXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_FILTERS;
    $request->maxResults = 'ea';
    $request->nextToken = 'impedit';

    $response = $sdk->sdk->listFilters($request);

    if ($response->listFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMetricAttributionMetrics

Lists the metrics for the metric attribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricAttributionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMetricAttributionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricAttributionMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMetricAttributionMetricsRequest();
    $request->listMetricAttributionMetricsRequest = new ListMetricAttributionMetricsRequest();
    $request->listMetricAttributionMetricsRequest->maxResults = 359271;
    $request->listMetricAttributionMetricsRequest->metricAttributionArn = 'veniam';
    $request->listMetricAttributionMetricsRequest->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListMetricAttributionMetricsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_METRIC_ATTRIBUTION_METRICS;
    $request->maxResults = 'minima';
    $request->nextToken = 'eaque';

    $response = $sdk->sdk->listMetricAttributionMetrics($request);

    if ($response->listMetricAttributionMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMetricAttributions

Lists metric attributions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricAttributionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMetricAttributionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricAttributionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMetricAttributionsRequest();
    $request->listMetricAttributionsRequest = new ListMetricAttributionsRequest();
    $request->listMetricAttributionsRequest->datasetGroupArn = 'a';
    $request->listMetricAttributionsRequest->maxResults = 725595;
    $request->listMetricAttributionsRequest->nextToken = 'aut';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = ListMetricAttributionsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_METRIC_ATTRIBUTIONS;
    $request->maxResults = 'non';
    $request->nextToken = 'et';

    $response = $sdk->sdk->listMetricAttributions($request);

    if ($response->listMetricAttributionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecipes

Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecipesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRecipesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecipeProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRecipesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecipesRequest();
    $request->listRecipesRequest = new ListRecipesRequest();
    $request->listRecipesRequest->domain = DomainEnum::VIDEO_ON_DEMAND;
    $request->listRecipesRequest->maxResults = 672048;
    $request->listRecipesRequest->nextToken = 'placeat';
    $request->listRecipesRequest->recipeProvider = RecipeProviderEnum::SERVICE;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListRecipesXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_RECIPES;
    $request->maxResults = 'voluptas';
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listRecipes($request);

    if ($response->listRecipesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommenders

Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRecommendersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendersRequest();
    $request->listRecommendersRequest = new ListRecommendersRequest();
    $request->listRecommendersRequest->datasetGroupArn = 'quasi';
    $request->listRecommendersRequest->maxResults = 270328;
    $request->listRecommendersRequest->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListRecommendersXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_RECOMMENDERS;
    $request->maxResults = 'esse';
    $request->nextToken = 'esse';

    $response = $sdk->sdk->listRecommenders($request);

    if ($response->listRecommendersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemas

Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSchemasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemasRequest();
    $request->listSchemasRequest = new ListSchemasRequest();
    $request->listSchemasRequest->maxResults = 524593;
    $request->listSchemasRequest->nextToken = 'fuga';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = ListSchemasXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_SCHEMAS;
    $request->maxResults = 'eos';
    $request->nextToken = 'praesentium';

    $response = $sdk->sdk->listSchemas($request);

    if ($response->listSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSolutionVersions

Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSolutionVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSolutionVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSolutionVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSolutionVersionsRequest();
    $request->listSolutionVersionsRequest = new ListSolutionVersionsRequest();
    $request->listSolutionVersionsRequest->maxResults = 788546;
    $request->listSolutionVersionsRequest->nextToken = 'veritatis';
    $request->listSolutionVersionsRequest->solutionArn = 'ipsa';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ListSolutionVersionsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_SOLUTION_VERSIONS;
    $request->maxResults = 'eius';
    $request->nextToken = 'eos';

    $response = $sdk->sdk->listSolutionVersions($request);

    if ($response->listSolutionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSolutions

Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSolutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSolutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSolutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSolutionsRequest();
    $request->listSolutionsRequest = new ListSolutionsRequest();
    $request->listSolutionsRequest->datasetGroupArn = 'voluptas';
    $request->listSolutionsRequest->maxResults = 69859;
    $request->listSolutionsRequest->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListSolutionsXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_SOLUTIONS;
    $request->maxResults = 'esse';
    $request->nextToken = 'recusandae';

    $response = $sdk->sdk->listSolutions($request);

    if ($response->listSolutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.

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
    $request->listTagsForResourceRequest->resourceArn = 'aperiam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_PERSONALIZE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRecommender

Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRecommenderRequest();
    $request->startRecommenderRequest = new StartRecommenderRequest();
    $request->startRecommenderRequest->recommenderArn = 'aliquam';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = StartRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_START_RECOMMENDER;

    $response = $sdk->sdk->startRecommender($request);

    if ($response->startRecommenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopRecommender

Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRecommenderRequest();
    $request->stopRecommenderRequest = new StopRecommenderRequest();
    $request->stopRecommenderRequest->recommenderArn = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = StopRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_STOP_RECOMMENDER;

    $response = $sdk->sdk->stopRecommender($request);

    if ($response->stopRecommenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSolutionVersionCreation

<p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSolutionVersionCreationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopSolutionVersionCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopSolutionVersionCreationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSolutionVersionCreationRequest();
    $request->stopSolutionVersionCreationRequest = new StopSolutionVersionCreationRequest();
    $request->stopSolutionVersionCreationRequest->solutionVersionArn = 'fuga';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = StopSolutionVersionCreationXAmzTargetEnum::AMAZON_PERSONALIZE_STOP_SOLUTION_VERSION_CREATION;

    $response = $sdk->sdk->stopSolutionVersionCreation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Add a list of tags to a resource.

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
    $request->tagResourceRequest->resourceArn = 'sapiente';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_PERSONALIZE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.

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
    $request->untagResourceRequest->resourceArn = 'eveniet';
    $request->untagResourceRequest->tagKeys = [
        'veritatis',
        'esse',
        'quod',
        'nam',
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_PERSONALIZE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaign

<p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\CampaignConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignRequest();
    $request->updateCampaignRequest = new UpdateCampaignRequest();
    $request->updateCampaignRequest->campaignArn = 'rerum';
    $request->updateCampaignRequest->campaignConfig = new CampaignConfig();
    $request->updateCampaignRequest->campaignConfig->itemExplorationConfig = [
        'minima' => 'distinctio',
        'eligendi' => 'sit',
        'culpa' => 'tempore',
    ];
    $request->updateCampaignRequest->minProvisionedTPS = 240020;
    $request->updateCampaignRequest->solutionVersionArn = 'cumque';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = UpdateCampaignXAmzTargetEnum::AMAZON_PERSONALIZE_UPDATE_CAMPAIGN;

    $response = $sdk->sdk->updateCampaign($request);

    if ($response->updateCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMetricAttribution

Updates a metric attribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMetricAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttribute;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttributionOutput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricAttributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMetricAttributionRequest();
    $request->updateMetricAttributionRequest = new UpdateMetricAttributionRequest();
    $request->updateMetricAttributionRequest->addMetrics = [
        new MetricAttribute(),
        new MetricAttribute(),
        new MetricAttribute(),
    ];
    $request->updateMetricAttributionRequest->metricAttributionArn = 'provident';
    $request->updateMetricAttributionRequest->metricsOutputConfig = new MetricAttributionOutput();
    $request->updateMetricAttributionRequest->metricsOutputConfig->roleArn = 'a';
    $request->updateMetricAttributionRequest->metricsOutputConfig->s3DataDestination = new S3DataConfig();
    $request->updateMetricAttributionRequest->metricsOutputConfig->s3DataDestination->kmsKeyArn = 'nulla';
    $request->updateMetricAttributionRequest->metricsOutputConfig->s3DataDestination->path = 'quas';
    $request->updateMetricAttributionRequest->removeMetrics = [
        'quasi',
        'a',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = UpdateMetricAttributionXAmzTargetEnum::AMAZON_PERSONALIZE_UPDATE_METRIC_ATTRIBUTION;

    $response = $sdk->sdk->updateMetricAttribution($request);

    if ($response->updateMetricAttributionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRecommender

Updates the recommender to modify the recommender configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRecommenderRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommenderConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecommenderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRecommenderRequest();
    $request->updateRecommenderRequest = new UpdateRecommenderRequest();
    $request->updateRecommenderRequest->recommenderArn = 'facere';
    $request->updateRecommenderRequest->recommenderConfig = new RecommenderConfig();
    $request->updateRecommenderRequest->recommenderConfig->itemExplorationConfig = [
        'consequuntur' => 'quasi',
    ];
    $request->updateRecommenderRequest->recommenderConfig->minRecommendationRequestsPerSecond = 628899;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UpdateRecommenderXAmzTargetEnum::AMAZON_PERSONALIZE_UPDATE_RECOMMENDER;

    $response = $sdk->sdk->updateRecommender($request);

    if ($response->updateRecommenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
