# SDK

## Overview

<p>Provides APIs for creating and managing SageMaker resources. </p> <p>Other Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">SageMaker Developer Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI Runtime API Reference</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [addAssociation](#addassociation) - Creates an <i>association</i> between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [addTags](#addtags) - <p>Adds or overwrites one or more tags for the specified SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html">CreateHyperParameterTuningJob</a> </p> </note> <note> <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html">CreateUserProfile</a>.</p> </note>
* [associateTrialComponent](#associatetrialcomponent) - Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.
* [batchDescribeModelPackage](#batchdescribemodelpackage) - This action batch describes a list of versioned model packages
* [createAction](#createaction) - Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [createAlgorithm](#createalgorithm) - Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.
* [createApp](#createapp) - Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
* [createAppImageConfig](#createappimageconfig) - Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the kernels in the image.
* [createArtifact](#createartifact) - Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [createAutoMLJob](#createautomljob) - <p>Creates an Autopilot job.</p> <p>Find the best-performing model after you run an Autopilot job by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a>.</p> <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model Development with Amazon SageMaker Autopilot</a>.</p>
* [createAutoMLJobV2](#createautomljobv2) - <p>Creates an Amazon SageMaker AutoML job that uses non-tabular data such as images or text for Computer Vision or Natural Language Processing problems.</p> <p>Find the resulting model after you run an AutoML job V2 by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a>.</p> <p>To create an <code>AutoMLJob</code> using tabular data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>
* [createCodeRepository](#createcoderepository) - <p>Creates a Git repository as a resource in your SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>
* [createCompilationJob](#createcompilationjob) - <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job. </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopCompilationJob.html">StopCompilationJob</a>. To get information about a particular model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
* [createContext](#createcontext) - Creates a <i>context</i>. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [createDataQualityJobDefinition](#createdataqualityjobdefinition) - Creates a definition for a job that monitors data quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
* [createDeviceFleet](#createdevicefleet) - Creates a device fleet.
* [createDomain](#createdomain) - <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.</p> <p> <b>EFS storage</b> </p> <p>When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.</p> <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at Rest Using Encryption</a>.</p> <p> <b>VPC configuration</b> </p> <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code> parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you choose when you onboard to Studio. The following options are available:</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.</p> </li> <li> <p> <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.</p> <p>When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.</p> </li> </ul> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
* [createEdgeDeploymentPlan](#createedgedeploymentplan) - Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.
* [createEdgeDeploymentStage](#createedgedeploymentstage) - Creates a new stage in an existing edge deployment plan.
* [createEdgePackagingJob](#createedgepackagingjob) - Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.
* [createEndpoint](#createendpoint) - <p>Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. </p> <p>When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p> <note> <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API operations, add the following policies to the role. </p> <ul> <li> <p>Option 1: For a full SageMaker access, search and attach the <code>AmazonSageMakerFullAccess</code> policy.</p> </li> <li> <p>Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: </p> <p> <code>"Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]</code> </p> <p> <code>"Resource": [</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code> </p> <p> <code>]</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">SageMaker API Permissions: Actions, Permissions, and Resources Reference</a>.</p> </li> </ul> </note>
* [createEndpointConfig](#createendpointconfig) - <p>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want SageMaker to provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>
* [createExperiment](#createexperiment) - <p>Creates a SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <note> <p>In the Studio UI, trials are referred to as <i>run groups</i> and trial components are referred to as <i>runs</i>.</p> </note> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListExperiments.html">ListExperiments</a> API. To view an experiment's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To create a trial call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrial.html">CreateTrial</a> API.</p>
* [createFeatureGroup](#createfeaturegroup) - <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of <code>Features</code> defined in the <code>FeatureStore</code> to describe a <code>Record</code>. </p> <p>The <code>FeatureGroup</code> defines the schema and features contained in the FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code> and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p> <important> <p>You must include at least one of <code>OnlineStoreConfig</code> and <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p> </important>
* [createFlowDefinition](#createflowdefinition) - Creates a flow definition.
* [createHub](#createhub) - <p>Create a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [createHumanTaskUi](#createhumantaskui) - Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
* [createHyperParameterTuningJob](#createhyperparametertuningjob) - <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.</p> <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View Experiments, Trials, and Trial Components</a>.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important>
* [createImage](#createimage) - Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Elastic Container Registry (ECR). For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
* [createImageVersion](#createimageversion) - Creates a version of the SageMaker image specified by <code>ImageName</code>. The version represents the Amazon Elastic Container Registry (ECR) container image specified by <code>BaseImage</code>.
* [createInferenceExperiment](#createinferenceexperiment) - <p> Creates an inference experiment using the configurations specified in the request. </p> <p> Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>. </p> <p> Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. </p> <p> While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html">View, monitor, and edit shadow tests</a>. </p>
* [createInferenceRecommendationsJob](#createinferencerecommendationsjob) - Starts a recommendation job. You can create either an instance recommendation or load test job.
* [createLabelingJob](#createlabelingjob) - <p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. </p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p> <p>You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (<code>InProgress</code>) streaming labeling job in real time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling Job</a>.</p>
* [createModel](#createmodel) - <p>Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>
* [createModelBiasJobDefinition](#createmodelbiasjobdefinition) - Creates the definition for a model bias job.
* [createModelCard](#createmodelcard) - <p>Creates an Amazon SageMaker Model Card.</p> <p>For information about how to use model cards, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html">Amazon SageMaker Model Card</a>.</p>
* [createModelCardExportJob](#createmodelcardexportjob) - Creates an Amazon SageMaker Model Card export job.
* [createModelExplainabilityJobDefinition](#createmodelexplainabilityjobdefinition) - Creates the definition for a model explainability job.
* [createModelPackage](#createmodelpackage) - <p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p> <note> <p>There are two types of model packages:</p> <ul> <li> <p>Versioned - a model that is part of a model group in the model registry.</p> </li> <li> <p>Unversioned - a model package that is not part of a model group.</p> </li> </ul> </note>
* [createModelPackageGroup](#createmodelpackagegroup) - Creates a model group. A model group contains a group of model versions.
* [createModelQualityJobDefinition](#createmodelqualityjobdefinition) - Creates a definition for a job that monitors model quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
* [createMonitoringSchedule](#createmonitoringschedule) - Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endpoint.
* [createNotebookInstance](#createnotebookinstance) - <p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
* [createNotebookInstanceLifecycleConfig](#createnotebookinstancelifecycleconfig) - <p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
* [createPipeline](#createpipeline) - Creates a pipeline using a JSON pipeline definition.
* [createPresignedDomainUrl](#createpresigneddomainurl) - <p>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. </p> <p>The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a> .</p> <note> <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
* [createPresignedNotebookInstanceUrl](#createpresignednotebookinstanceurl) - <p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker console, when you choose <code>Open</code> next to a notebook instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
* [createProcessingJob](#createprocessingjob) - Creates a processing job.
* [createProject](#createproject) - Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.
* [createSpace](#createspace) - Creates a space used for real time collaboration in a Domain.
* [createStudioLifecycleConfig](#createstudiolifecycleconfig) - Creates a new Studio Lifecycle Configuration.
* [createTrainingJob](#createtrainingjob) - <p>Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important> </li> <li> <p> <code>InputDataConfig</code> - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. </p> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot training job has to complete. </p> </li> <li> <p> <code>Environment</code> - The environment variables to set in the Docker container.</p> </li> <li> <p> <code>RetryStrategy</code> - The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p> </li> </ul> <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
* [createTransformJob](#createtransformjob) - <p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>
* [createTrial](#createtrial) - <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single SageMaker <i>experiment</i>.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To view a trial's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API. To create a trial component, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> API.</p>
* [createTrialComponent](#createtrialcomponent) - <p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p>
* [createUserProfile](#createuserprofile) - Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 
* [createWorkforce](#createworkforce) - <p>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API operation to delete the existing workforce and then use <code>CreateWorkforce</code> to create a new workforce.</p> <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in <code>CognitoConfig</code>. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html"> Create a Private Workforce (Amazon Cognito)</a>.</p> <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i> because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html"> Create a Private Workforce (OIDC IdP)</a>.</p>
* [createWorkteam](#createworkteam) - <p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>
* [deleteAction](#deleteaction) - Deletes an action.
* [deleteAlgorithm](#deletealgorithm) - Removes the specified algorithm from your account.
* [deleteApp](#deleteapp) - Used to stop and delete an app.
* [deleteAppImageConfig](#deleteappimageconfig) - Deletes an AppImageConfig.
* [deleteArtifact](#deleteartifact) - Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be specified.
* [deleteAssociation](#deleteassociation) - Deletes an association.
* [deleteCodeRepository](#deletecoderepository) - Deletes the specified Git repository from your account.
* [deleteContext](#deletecontext) - Deletes an context.
* [deleteDataQualityJobDefinition](#deletedataqualityjobdefinition) - Deletes a data quality monitoring job definition.
* [deleteDeviceFleet](#deletedevicefleet) - Deletes a fleet.
* [deleteDomain](#deletedomain) - Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 
* [deleteEdgeDeploymentPlan](#deleteedgedeploymentplan) - Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.
* [deleteEdgeDeploymentStage](#deleteedgedeploymentstage) - Delete a stage in an edge deployment plan if (and only if) the stage is inactive.
* [deleteEndpoint](#deleteendpoint) - <p>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p> <p>When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html#sagemaker-CreateModel-request-ExecutionRoleArn">ExecutionRoleArn</a> </code>, otherwise SageMaker cannot delete these resources.</p>
* [deleteEndpointConfig](#deleteendpointconfig) - <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>
* [deleteExperiment](#deleteexperiment) - Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API to get a list of the trials associated with the experiment.
* [deleteFeatureGroup](#deletefeaturegroup) - <p>Delete the <code>FeatureGroup</code> and any data that was written to the <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p> <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your <code>OfflineStore</code> are not deleted. </p>
* [deleteFlowDefinition](#deleteflowdefinition) - Deletes the specified flow definition.
* [deleteHub](#deletehub) - <p>Delete a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [deleteHubContent](#deletehubcontent) - <p>Delete the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [deleteHumanTaskUi](#deletehumantaskui) - <p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListHumanTaskUis.html">ListHumanTaskUis</a>. When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
* [deleteImage](#deleteimage) - Deletes a SageMaker image and all versions of the image. The container images aren't deleted.
* [deleteImageVersion](#deleteimageversion) - Deletes a version of a SageMaker image. The container image the version represents isn't deleted.
* [deleteInferenceExperiment](#deleteinferenceexperiment) - <p>Deletes an inference experiment.</p> <note> <p> This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment. </p> </note>
* [deleteModel](#deletemodel) - Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 
* [deleteModelBiasJobDefinition](#deletemodelbiasjobdefinition) - Deletes an Amazon SageMaker model bias job definition.
* [deleteModelCard](#deletemodelcard) - Deletes an Amazon SageMaker Model Card.
* [deleteModelExplainabilityJobDefinition](#deletemodelexplainabilityjobdefinition) - Deletes an Amazon SageMaker model explainability job definition.
* [deleteModelPackage](#deletemodelpackage) - <p>Deletes a model package.</p> <p>A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>
* [deleteModelPackageGroup](#deletemodelpackagegroup) - Deletes the specified model group.
* [deleteModelPackageGroupPolicy](#deletemodelpackagegrouppolicy) - Deletes a model group resource policy.
* [deleteModelQualityJobDefinition](#deletemodelqualityjobdefinition) - Deletes the secified model quality monitoring job definition.
* [deleteMonitoringSchedule](#deletemonitoringschedule) - Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 
* [deleteNotebookInstance](#deletenotebookinstance) - <p> Deletes an SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>
* [deleteNotebookInstanceLifecycleConfig](#deletenotebookinstancelifecycleconfig) - Deletes a notebook instance lifecycle configuration.
* [deletePipeline](#deletepipeline) - Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the pipeline are deleted.
* [deleteProject](#deleteproject) - Delete the specified project.
* [deleteSpace](#deletespace) - Used to delete a space.
* [deleteStudioLifecycleConfig](#deletestudiolifecycleconfig) - Deletes the Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.
* [deleteTags](#deletetags) - <p>Deletes the specified tags from an SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note> <note> <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile launched before you called this API.</p> </note>
* [deleteTrial](#deletetrial) - Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API to get the list of trial components.
* [deleteTrialComponent](#deletetrialcomponent) - Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.
* [deleteUserProfile](#deleteuserprofile) - Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
* [deleteWorkforce](#deleteworkforce) - <p>Use this operation to delete a workforce.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateWorkforce.html">CreateWorkforce</a> to create a new workforce.</p> <important> <p>If a private workforce contains one or more work teams, you must use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a <code>ResourceInUse</code> error.</p> </important>
* [deleteWorkteam](#deleteworkteam) - Deletes an existing work team. This operation can't be undone.
* [deregisterDevices](#deregisterdevices) - Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.
* [describeAction](#describeaction) - Describes an action.
* [describeAlgorithm](#describealgorithm) - Returns a description of the specified algorithm that is in your account.
* [describeApp](#describeapp) - Describes the app.
* [describeAppImageConfig](#describeappimageconfig) - Describes an AppImageConfig.
* [describeArtifact](#describeartifact) - Describes an artifact.
* [describeAutoMLJob](#describeautomljob) - Returns information about an Amazon SageMaker AutoML job.
* [describeAutoMLJobV2](#describeautomljobv2) - <p>Returns information about an Amazon SageMaker AutoML V2 job.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>
* [describeCodeRepository](#describecoderepository) - Gets details about the specified Git repository.
* [describeCompilationJob](#describecompilationjob) - <p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
* [describeContext](#describecontext) - Describes a context.
* [describeDataQualityJobDefinition](#describedataqualityjobdefinition) - Gets the details of a data quality monitoring job definition.
* [describeDevice](#describedevice) - Describes the device.
* [describeDeviceFleet](#describedevicefleet) - A description of the fleet the device belongs to.
* [describeDomain](#describedomain) - The description of the domain.
* [describeEdgeDeploymentPlan](#describeedgedeploymentplan) - Describes an edge deployment plan with deployment status per stage.
* [describeEdgePackagingJob](#describeedgepackagingjob) - A description of edge packaging jobs.
* [describeEndpoint](#describeendpoint) - Returns the description of an endpoint.
* [describeEndpointConfig](#describeendpointconfig) - Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.
* [describeExperiment](#describeexperiment) - Provides a list of an experiment's properties.
* [describeFeatureGroup](#describefeaturegroup) - Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.
* [describeFeatureMetadata](#describefeaturemetadata) - Shows the metadata for a feature within a feature group.
* [describeFlowDefinition](#describeflowdefinition) - Returns information about the specified flow definition.
* [describeHub](#describehub) - <p>Describe a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [describeHubContent](#describehubcontent) - <p>Describe the content of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [describeHumanTaskUi](#describehumantaskui) - Returns information about the requested human task user interface (worker task template).
* [describeHyperParameterTuningJob](#describehyperparametertuningjob) - Gets a description of a hyperparameter tuning job.
* [describeImage](#describeimage) - Describes a SageMaker image.
* [describeImageVersion](#describeimageversion) - Describes a version of a SageMaker image.
* [describeInferenceExperiment](#describeinferenceexperiment) - Returns details about an inference experiment.
* [describeInferenceRecommendationsJob](#describeinferencerecommendationsjob) - Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.
* [describeLabelingJob](#describelabelingjob) - Gets information about a labeling job.
* [describeLineageGroup](#describelineagegroup) - Provides a list of properties for the requested lineage group. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.
* [describeModel](#describemodel) - Describes a model that you created using the <code>CreateModel</code> API.
* [describeModelBiasJobDefinition](#describemodelbiasjobdefinition) - Returns a description of a model bias job definition.
* [describeModelCard](#describemodelcard) - Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.
* [describeModelCardExportJob](#describemodelcardexportjob) - Describes an Amazon SageMaker Model Card export job.
* [describeModelExplainabilityJobDefinition](#describemodelexplainabilityjobdefinition) - Returns a description of a model explainability job definition.
* [describeModelPackage](#describemodelpackage) - <p>Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace.</p> <p>To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</p>
* [describeModelPackageGroup](#describemodelpackagegroup) - Gets a description for the specified model group.
* [describeModelQualityJobDefinition](#describemodelqualityjobdefinition) - Returns a description of a model quality job definition.
* [describeMonitoringSchedule](#describemonitoringschedule) - Describes the schedule for a monitoring job.
* [describeNotebookInstance](#describenotebookinstance) - Returns information about a notebook instance.
* [describeNotebookInstanceLifecycleConfig](#describenotebookinstancelifecycleconfig) - <p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
* [describePipeline](#describepipeline) - Describes the details of a pipeline.
* [describePipelineDefinitionForExecution](#describepipelinedefinitionforexecution) - Describes the details of an execution's pipeline definition.
* [describePipelineExecution](#describepipelineexecution) - Describes the details of a pipeline execution.
* [describeProcessingJob](#describeprocessingjob) - Returns a description of a processing job.
* [describeProject](#describeproject) - Describes the details of a project.
* [describeSpace](#describespace) - Describes the space.
* [describeStudioLifecycleConfig](#describestudiolifecycleconfig) - Describes the Studio Lifecycle Configuration.
* [describeSubscribedWorkteam](#describesubscribedworkteam) - Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.
* [describeTrainingJob](#describetrainingjob) - <p>Returns information about a training job. </p> <p>Some of the attributes below only appear if the training job successfully starts. If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and, depending on the <code>FailureReason</code>, attributes like <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>, <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be present in the response.</p>
* [describeTransformJob](#describetransformjob) - Returns information about a transform job.
* [describeTrial](#describetrial) - Provides a list of a trial's properties.
* [describeTrialComponent](#describetrialcomponent) - Provides a list of a trials component's properties.
* [describeUserProfile](#describeuserprofile) - Describes a user profile. For more information, see <code>CreateUserProfile</code>.
* [describeWorkforce](#describeworkforce) - <p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>
* [describeWorkteam](#describeworkteam) - Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
* [disableSagemakerServicecatalogPortfolio](#disablesagemakerservicecatalogportfolio) - Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [disassociateTrialComponent](#disassociatetrialcomponent) - <p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AssociateTrialComponent.html">AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
* [enableSagemakerServicecatalogPortfolio](#enablesagemakerservicecatalogportfolio) - Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [getDeviceFleetReport](#getdevicefleetreport) - Describes a fleet.
* [getLineageGroupPolicy](#getlineagegrouppolicy) - The resource policy for the lineage group.
* [getModelPackageGroupPolicy](#getmodelpackagegrouppolicy) - Gets a resource policy that manages access for a model group. For information about resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
* [getSagemakerServicecatalogPortfolioStatus](#getsagemakerservicecatalogportfoliostatus) - Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [getSearchSuggestions](#getsearchsuggestions) - An auto-complete API for the search functionality in the SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.
* [importHubContent](#importhubcontent) - <p>Import hub content.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [listActions](#listactions) - Lists the actions in your account and their properties.
* [listAlgorithms](#listalgorithms) - Lists the machine learning algorithms that have been created.
* [listAliases](#listaliases) - Lists the aliases of a specified image or image version.
* [listAppImageConfigs](#listappimageconfigs) - Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.
* [listApps](#listapps) - Lists apps.
* [listArtifacts](#listartifacts) - Lists the artifacts in your account and their properties.
* [listAssociations](#listassociations) - Lists the associations in your account and their properties.
* [listAutoMLJobs](#listautomljobs) - Request a list of jobs.
* [listCandidatesForAutoMLJob](#listcandidatesforautomljob) - List the candidates created for the job.
* [listCodeRepositories](#listcoderepositories) - Gets a list of the Git repositories in your account.
* [listCompilationJobs](#listcompilationjobs) - <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>.</p>
* [listContexts](#listcontexts) - Lists the contexts in your account and their properties.
* [listDataQualityJobDefinitions](#listdataqualityjobdefinitions) - Lists the data quality job definitions in your account.
* [listDeviceFleets](#listdevicefleets) - Returns a list of devices in the fleet.
* [listDevices](#listdevices) - A list of devices.
* [listDomains](#listdomains) - Lists the domains.
* [listEdgeDeploymentPlans](#listedgedeploymentplans) - Lists all edge deployment plans.
* [listEdgePackagingJobs](#listedgepackagingjobs) - Returns a list of edge packaging jobs.
* [listEndpointConfigs](#listendpointconfigs) - Lists endpoint configurations.
* [listEndpoints](#listendpoints) - Lists endpoints.
* [listExperiments](#listexperiments) - Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
* [listFeatureGroups](#listfeaturegroups) - List <code>FeatureGroup</code>s based on given filter and order.
* [listFlowDefinitions](#listflowdefinitions) - Returns information about the flow definitions in your account.
* [listHubContentVersions](#listhubcontentversions) - <p>List hub content versions.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [listHubContents](#listhubcontents) - <p>List the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [listHubs](#listhubs) - <p>List all existing hubs.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [listHumanTaskUis](#listhumantaskuis) - Returns information about the human task user interfaces in your account.
* [listHyperParameterTuningJobs](#listhyperparametertuningjobs) - Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.
* [listImageVersions](#listimageversions) - Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.
* [listImages](#listimages) - Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.
* [listInferenceExperiments](#listinferenceexperiments) - Returns the list of all inference experiments.
* [listInferenceRecommendationsJobSteps](#listinferencerecommendationsjobsteps) - <p>Returns a list of the subtasks for an Inference Recommender job.</p> <p>The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</p>
* [listInferenceRecommendationsJobs](#listinferencerecommendationsjobs) - Lists recommendation jobs that satisfy various filters.
* [listLabelingJobs](#listlabelingjobs) - Gets a list of labeling jobs.
* [listLabelingJobsForWorkteam](#listlabelingjobsforworkteam) - Gets a list of labeling jobs assigned to a specified work team.
* [listLineageGroups](#listlineagegroups) - A list of lineage groups shared with your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.
* [listModelBiasJobDefinitions](#listmodelbiasjobdefinitions) - Lists model bias jobs definitions that satisfy various filters.
* [listModelCardExportJobs](#listmodelcardexportjobs) - List the export jobs for the Amazon SageMaker Model Card.
* [listModelCardVersions](#listmodelcardversions) - List existing versions of an Amazon SageMaker Model Card.
* [listModelCards](#listmodelcards) - List existing model cards.
* [listModelExplainabilityJobDefinitions](#listmodelexplainabilityjobdefinitions) - Lists model explainability job definitions that satisfy various filters.
* [listModelMetadata](#listmodelmetadata) - Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.
* [listModelPackageGroups](#listmodelpackagegroups) - Gets a list of the model groups in your Amazon Web Services account.
* [listModelPackages](#listmodelpackages) - Lists the model packages that have been created.
* [listModelQualityJobDefinitions](#listmodelqualityjobdefinitions) - Gets a list of model quality monitoring job definitions in your account.
* [listModels](#listmodels) - Lists models created with the <code>CreateModel</code> API.
* [listMonitoringAlertHistory](#listmonitoringalerthistory) - Gets a list of past alerts in a model monitoring schedule.
* [listMonitoringAlerts](#listmonitoringalerts) - Gets the alerts for a single monitoring schedule.
* [listMonitoringExecutions](#listmonitoringexecutions) - Returns list of all monitoring job executions.
* [listMonitoringSchedules](#listmonitoringschedules) - Returns list of all monitoring schedules.
* [listNotebookInstanceLifecycleConfigs](#listnotebookinstancelifecycleconfigs) - Lists notebook instance lifestyle configurations created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.
* [listNotebookInstances](#listnotebookinstances) - Returns a list of the SageMaker notebook instances in the requester's account in an Amazon Web Services Region. 
* [listPipelineExecutionSteps](#listpipelineexecutionsteps) - Gets a list of <code>PipeLineExecutionStep</code> objects.
* [listPipelineExecutions](#listpipelineexecutions) - Gets a list of the pipeline executions.
* [listPipelineParametersForExecution](#listpipelineparametersforexecution) - Gets a list of parameters for a pipeline execution.
* [listPipelines](#listpipelines) - Gets a list of pipelines.
* [listProcessingJobs](#listprocessingjobs) - Lists processing jobs that satisfy various filters.
* [listProjects](#listprojects) - Gets a list of the projects in an Amazon Web Services account.
* [listSpaces](#listspaces) - Lists spaces.
* [listStageDevices](#liststagedevices) - Lists devices allocated to the stage, containing detailed device information and deployment status.
* [listStudioLifecycleConfigs](#liststudiolifecycleconfigs) - Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.
* [listSubscribedWorkteams](#listsubscribedworkteams) - Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
* [listTags](#listtags) - Returns the tags for the specified SageMaker resource.
* [listTrainingJobs](#listtrainingjobs) - <p>Lists training jobs.</p> <note> <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same time, the <code>MaxResults</code> number of training jobs are first retrieved ignoring the <code>StatusEquals</code> parameter and then they are filtered by the <code>StatusEquals</code> parameter, which is returned as a response.</p> <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p> <p> <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code> </p> <p>First, 100 trainings jobs with any status, including those other than <code>InProgress</code>, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of <code>InProgress</code> are returned.</p> <p>You can quickly test the API using the following Amazon Web Services CLI code.</p> <p> <code>aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</code> </p> </note>
* [listTrainingJobsForHyperParameterTuningJob](#listtrainingjobsforhyperparametertuningjob) - Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.
* [listTransformJobs](#listtransformjobs) - Lists transform jobs.
* [listTrialComponents](#listtrialcomponents) - <p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>
* [listTrials](#listtrials) - Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
* [listUserProfiles](#listuserprofiles) - Lists user profiles.
* [listWorkforces](#listworkforces) - Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.
* [listWorkteams](#listworkteams) - Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
* [putModelPackageGroupPolicy](#putmodelpackagegrouppolicy) - Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
* [queryLineage](#querylineage) - Use this action to inspect your lineage and discover relationships between entities. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html"> Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.
* [registerDevices](#registerdevices) - Register devices.
* [renderUiTemplate](#renderuitemplate) - Renders the UI template so that you can preview the worker's experience. 
* [retryPipelineExecution](#retrypipelineexecution) - Retry the execution of the pipeline.
* [search](#search) - <p>Finds SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p> <note> <p>The Search API may provide access to otherwise restricted data. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference</a> for more information.</p> </note>
* [sendPipelineExecutionStepFailure](#sendpipelineexecutionstepfailure) - Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
* [sendPipelineExecutionStepSuccess](#sendpipelineexecutionstepsuccess) - Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
* [startEdgeDeploymentStage](#startedgedeploymentstage) - Starts a stage in an edge deployment plan.
* [startInferenceExperiment](#startinferenceexperiment) - Starts an inference experiment.
* [startMonitoringSchedule](#startmonitoringschedule) - <p>Starts a previously stopped monitoring schedule.</p> <note> <p>By default, when you successfully create a new schedule, the status of a monitoring schedule is <code>scheduled</code>.</p> </note>
* [startNotebookInstance](#startnotebookinstance) - Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. 
* [startPipelineExecution](#startpipelineexecution) - Starts a pipeline execution.
* [stopAutoMLJob](#stopautomljob) - A method for forcing a running job to shut down.
* [stopCompilationJob](#stopcompilationjob) - <p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <code>CompilationJobStatus</code> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <code>CompilationJobStatus</code> to <code>Stopped</code>. </p>
* [stopEdgeDeploymentStage](#stopedgedeploymentstage) - Stops a stage in an edge deployment plan.
* [stopEdgePackagingJob](#stopedgepackagingjob) - Request to stop an edge packaging job.
* [stopHyperParameterTuningJob](#stophyperparametertuningjob) - <p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>
* [stopInferenceExperiment](#stopinferenceexperiment) - Stops an inference experiment.
* [stopInferenceRecommendationsJob](#stopinferencerecommendationsjob) - Stops an Inference Recommender job.
* [stopLabelingJob](#stoplabelingjob) - Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
* [stopMonitoringSchedule](#stopmonitoringschedule) - Stops a previously started monitoring schedule.
* [stopNotebookInstance](#stopnotebookinstance) - <p>Terminates the ML compute instance. Before terminating the instance, SageMaker disconnects the ML storage volume from it. SageMaker preserves the ML storage volume. SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>
* [stopPipelineExecution](#stoppipelineexecution) - <p>Stops a pipeline execution.</p> <p> <b>Callback Step</b> </p> <p>A pipeline execution won't stop while a callback step is running. When you call <code>StopPipelineExecution</code> on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping".</p> <p>You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to <code>SendPipelineExecutionStepSuccess</code> or <code>SendPipelineExecutionStepFailure</code>.</p> <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p> <p> <b>Lambda Step</b> </p> <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit the pipeline execution status is <code>Failed</code>.</p>
* [stopProcessingJob](#stopprocessingjob) - Stops a processing job.
* [stopTrainingJob](#stoptrainingjob) - <p>Stops a training job. To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, SageMaker changes the status of the job to <code>Stopping</code>. After SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>
* [stopTransformJob](#stoptransformjob) - <p>Stops a batch transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
* [updateAction](#updateaction) - Updates an action.
* [updateAppImageConfig](#updateappimageconfig) - Updates the properties of an AppImageConfig.
* [updateArtifact](#updateartifact) - Updates an artifact.
* [updateCodeRepository](#updatecoderepository) - Updates the specified Git repository with the specified values.
* [updateContext](#updatecontext) - Updates a context.
* [updateDeviceFleet](#updatedevicefleet) - Updates a fleet of devices.
* [updateDevices](#updatedevices) - Updates one or more devices in a fleet.
* [updateDomain](#updatedomain) - Updates the default settings for new user profiles in the domain.
* [updateEndpoint](#updateendpoint) - <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>
* [updateEndpointWeightsAndCapacities](#updateendpointweightsandcapacities) - Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. 
* [updateExperiment](#updateexperiment) - Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
* [updateFeatureGroup](#updatefeaturegroup) - Updates the feature group.
* [updateFeatureMetadata](#updatefeaturemetadata) - Updates the description and parameters of the feature group.
* [updateHub](#updatehub) - <p>Update a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [updateImage](#updateimage) - Updates the properties of a SageMaker image. To change the image's tags, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html">DeleteTags</a> APIs.
* [updateImageVersion](#updateimageversion) - Updates the properties of a SageMaker image version.
* [updateInferenceExperiment](#updateinferenceexperiment) -  Updates an inference experiment that you created. The status of the inference experiment has to be either <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>. 
* [updateModelCard](#updatemodelcard) - <p>Update an Amazon SageMaker Model Card.</p> <important> <p>You cannot update both model card content and model card status in a single call.</p> </important>
* [updateModelPackage](#updatemodelpackage) - Updates a versioned model.
* [updateMonitoringAlert](#updatemonitoringalert) - Update the parameters of a model monitor alert.
* [updateMonitoringSchedule](#updatemonitoringschedule) - Updates a previously created schedule.
* [updateNotebookInstance](#updatenotebookinstance) - Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
* [updateNotebookInstanceLifecycleConfig](#updatenotebookinstancelifecycleconfig) - Updates a notebook instance lifecycle configuration created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.
* [updatePipeline](#updatepipeline) - Updates a pipeline.
* [updatePipelineExecution](#updatepipelineexecution) - Updates a pipeline execution.
* [updateProject](#updateproject) - <p>Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model.</p> <note> <p>You must not update a project that is in use. If you update the <code>ServiceCatalogProvisioningUpdateDetails</code> of a project that is active or being created, or updated, you may lose resources already created by the project.</p> </note>
* [updateSpace](#updatespace) - Updates the settings of a space.
* [updateTrainingJob](#updatetrainingjob) - Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.
* [updateTrial](#updatetrial) - Updates the display name of a trial.
* [updateTrialComponent](#updatetrialcomponent) - Updates one or more properties of a trial component.
* [updateUserProfile](#updateuserprofile) - Updates a user profile.
* [updateWorkforce](#updateworkforce) - <p>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p> <p>The worker portal is now supported in VPC and public internet.</p> <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a <code>Not Found</code> error message on the worker portal.</p> <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p> <important> <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p> </important> <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using your own OIDC IdP. </p> <important> <p>You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p> </important> <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a> operation.</p> <important> <p>This operation only applies to private workforces.</p> </important>
* [updateWorkteam](#updateworkteam) - Updates an existing work team with new member definitions or description.

## addAssociation

Creates an <i>association</i> between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationEdgeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddAssociationRequest();
    $request->addAssociationRequest = new AddAssociationRequest();
    $request->addAssociationRequest->associationType = AssociationEdgeTypeEnum::DERIVED_FROM;
    $request->addAssociationRequest->destinationArn = 'suscipit';
    $request->addAssociationRequest->sourceArn = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AddAssociationXAmzTargetEnum::SAGE_MAKER_ADD_ASSOCIATION;

    $response = $sdk->sdk->addAssociation($request);

    if ($response->addAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTags

<p>Adds or overwrites one or more tags for the specified SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html">CreateHyperParameterTuningJob</a> </p> </note> <note> <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html">CreateUserProfile</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsInput = new AddTagsInput();
    $request->addTagsInput->resourceArn = 'minus';
    $request->addTagsInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = AddTagsXAmzTargetEnum::SAGE_MAKER_ADD_TAGS;

    $response = $sdk->sdk->addTags($request);

    if ($response->addTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateTrialComponent

Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTrialComponentRequest();
    $request->associateTrialComponentRequest = new AssociateTrialComponentRequest();
    $request->associateTrialComponentRequest->trialComponentName = 'quis';
    $request->associateTrialComponentRequest->trialName = 'veritatis';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = AssociateTrialComponentXAmzTargetEnum::SAGE_MAKER_ASSOCIATE_TRIAL_COMPONENT;

    $response = $sdk->sdk->associateTrialComponent($request);

    if ($response->associateTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDescribeModelPackage

This action batch describes a list of versioned model packages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeModelPackageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDescribeModelPackageInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeModelPackageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDescribeModelPackageRequest();
    $request->batchDescribeModelPackageInput = new BatchDescribeModelPackageInput();
    $request->batchDescribeModelPackageInput->modelPackageArnList = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = BatchDescribeModelPackageXAmzTargetEnum::SAGE_MAKER_BATCH_DESCRIBE_MODEL_PACKAGE;

    $response = $sdk->sdk->batchDescribeModelPackage($request);

    if ($response->batchDescribeModelPackageOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAction

Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProperties;
use \OpenAPI\OpenAPI\Models\Shared\ActionSource;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActionRequest();
    $request->createActionRequest = new CreateActionRequest();
    $request->createActionRequest->actionName = 'officia';
    $request->createActionRequest->actionType = 'occaecati';
    $request->createActionRequest->description = 'fugit';
    $request->createActionRequest->metadataProperties = new MetadataProperties();
    $request->createActionRequest->metadataProperties->commitId = 'deleniti';
    $request->createActionRequest->metadataProperties->generatedBy = 'hic';
    $request->createActionRequest->metadataProperties->projectId = 'optio';
    $request->createActionRequest->metadataProperties->repository = 'totam';
    $request->createActionRequest->properties = [
        'commodi' => 'molestiae',
    ];
    $request->createActionRequest->source = new ActionSource();
    $request->createActionRequest->source->sourceId = 'modi';
    $request->createActionRequest->source->sourceType = 'qui';
    $request->createActionRequest->source->sourceUri = 'impedit';
    $request->createActionRequest->status = ActionStatusEnum::STOPPING;
    $request->createActionRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = CreateActionXAmzTargetEnum::SAGE_MAKER_CREATE_ACTION;

    $response = $sdk->sdk->createAction($request);

    if ($response->createActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlgorithm

Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAlgorithmInput;
use \OpenAPI\OpenAPI\Models\Shared\InferenceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageContainerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TrainingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalParameterRangeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousParameterRangeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\IntegerParameterRangeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobObjective;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobObjectiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSpecification;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmValidationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmValidationProfile;
use \OpenAPI\OpenAPI\Models\Shared\TrainingJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemDataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataDistributionEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecordWrapperEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShuffleConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroup;
use \OpenAPI\OpenAPI\Models\Shared\StoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\TransformJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BatchStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformInput;
use \OpenAPI\OpenAPI\Models\Shared\TransformDataSource;
use \OpenAPI\OpenAPI\Models\Shared\TransformS3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\SplitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformOutput;
use \OpenAPI\OpenAPI\Models\Shared\AssemblyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformResources;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlgorithmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlgorithmRequest();
    $request->createAlgorithmInput = new CreateAlgorithmInput();
    $request->createAlgorithmInput->algorithmDescription = 'iste';
    $request->createAlgorithmInput->algorithmName = 'dolor';
    $request->createAlgorithmInput->certifyForMarketplace = false;
    $request->createAlgorithmInput->inferenceSpecification = new InferenceSpecification();
    $request->createAlgorithmInput->inferenceSpecification->containers = [
        new ModelPackageContainerDefinition(),
        new ModelPackageContainerDefinition(),
        new ModelPackageContainerDefinition(),
    ];
    $request->createAlgorithmInput->inferenceSpecification->supportedContentTypes = [
        'hic',
        'saepe',
    ];
    $request->createAlgorithmInput->inferenceSpecification->supportedRealtimeInferenceInstanceTypes = [
        ProductionVariantInstanceTypeEnum::ML_INF12XLARGE,
        ProductionVariantInstanceTypeEnum::ML_R5_LARGE,
        ProductionVariantInstanceTypeEnum::ML_C7G2XLARGE,
    ];
    $request->createAlgorithmInput->inferenceSpecification->supportedResponseMIMETypes = [
        'saepe',
        'quidem',
    ];
    $request->createAlgorithmInput->inferenceSpecification->supportedTransformInstanceTypes = [
        TransformInstanceTypeEnum::ML_M42XLARGE,
    ];
    $request->createAlgorithmInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createAlgorithmInput->trainingSpecification = new TrainingSpecification();
    $request->createAlgorithmInput->trainingSpecification->metricDefinitions = [
        new MetricDefinition(),
        new MetricDefinition(),
        new MetricDefinition(),
    ];
    $request->createAlgorithmInput->trainingSpecification->supportedHyperParameters = [
        new HyperParameterSpecification(),
        new HyperParameterSpecification(),
        new HyperParameterSpecification(),
    ];
    $request->createAlgorithmInput->trainingSpecification->supportedTrainingInstanceTypes = [
        TrainingInstanceTypeEnum::ML_G4DN8XLARGE,
        TrainingInstanceTypeEnum::ML_G4DN16XLARGE,
        TrainingInstanceTypeEnum::ML_C4_XLARGE,
    ];
    $request->createAlgorithmInput->trainingSpecification->supportedTuningJobObjectiveMetrics = [
        new HyperParameterTuningJobObjective(),
    ];
    $request->createAlgorithmInput->trainingSpecification->supportsDistributedTraining = false;
    $request->createAlgorithmInput->trainingSpecification->trainingChannels = [
        new ChannelSpecification(),
        new ChannelSpecification(),
        new ChannelSpecification(),
        new ChannelSpecification(),
    ];
    $request->createAlgorithmInput->trainingSpecification->trainingImage = 'enim';
    $request->createAlgorithmInput->trainingSpecification->trainingImageDigest = 'omnis';
    $request->createAlgorithmInput->validationSpecification = new AlgorithmValidationSpecification();
    $request->createAlgorithmInput->validationSpecification->validationProfiles = [
        new AlgorithmValidationProfile(),
        new AlgorithmValidationProfile(),
    ];
    $request->createAlgorithmInput->validationSpecification->validationRole = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateAlgorithmXAmzTargetEnum::SAGE_MAKER_CREATE_ALGORITHM;

    $response = $sdk->sdk->createAlgorithm($request);

    if ($response->createAlgorithmOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApp

Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->createAppRequest = new CreateAppRequest();
    $request->createAppRequest->appName = 'mollitia';
    $request->createAppRequest->appType = AppTypeEnum::KERNEL_GATEWAY;
    $request->createAppRequest->domainId = 'culpa';
    $request->createAppRequest->resourceSpec = new ResourceSpec();
    $request->createAppRequest->resourceSpec->instanceType = AppInstanceTypeEnum::ML_M52XLARGE;
    $request->createAppRequest->resourceSpec->lifecycleConfigArn = 'repellat';
    $request->createAppRequest->resourceSpec->sageMakerImageArn = 'mollitia';
    $request->createAppRequest->resourceSpec->sageMakerImageVersionArn = 'occaecati';
    $request->createAppRequest->spaceName = 'numquam';
    $request->createAppRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createAppRequest->userProfileName = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateAppXAmzTargetEnum::SAGE_MAKER_CREATE_APP;

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAppImageConfig

Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the kernels in the image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayImageConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemConfig;
use \OpenAPI\OpenAPI\Models\Shared\KernelSpec;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppImageConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppImageConfigRequest();
    $request->createAppImageConfigRequest = new CreateAppImageConfigRequest();
    $request->createAppImageConfigRequest->appImageConfigName = 'animi';
    $request->createAppImageConfigRequest->kernelGatewayImageConfig = new KernelGatewayImageConfig();
    $request->createAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig = new FileSystemConfig();
    $request->createAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->defaultGid = 317202;
    $request->createAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->defaultUid = 138183;
    $request->createAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->mountPath = 'quo';
    $request->createAppImageConfigRequest->kernelGatewayImageConfig->kernelSpecs = [
        new KernelSpec(),
    ];
    $request->createAppImageConfigRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreateAppImageConfigXAmzTargetEnum::SAGE_MAKER_CREATE_APP_IMAGE_CONFIG;

    $response = $sdk->sdk->createAppImageConfig($request);

    if ($response->createAppImageConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createArtifact

Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProperties;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSource;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSourceType;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSourceIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactRequest();
    $request->createArtifactRequest = new CreateArtifactRequest();
    $request->createArtifactRequest->artifactName = 'laborum';
    $request->createArtifactRequest->artifactType = 'quasi';
    $request->createArtifactRequest->metadataProperties = new MetadataProperties();
    $request->createArtifactRequest->metadataProperties->commitId = 'reiciendis';
    $request->createArtifactRequest->metadataProperties->generatedBy = 'voluptatibus';
    $request->createArtifactRequest->metadataProperties->projectId = 'vero';
    $request->createArtifactRequest->metadataProperties->repository = 'nihil';
    $request->createArtifactRequest->properties = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->createArtifactRequest->source = new ArtifactSource();
    $request->createArtifactRequest->source->sourceTypes = [
        new ArtifactSourceType(),
    ];
    $request->createArtifactRequest->source->sourceUri = 'reprehenderit';
    $request->createArtifactRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = CreateArtifactXAmzTargetEnum::SAGE_MAKER_CREATE_ARTIFACT;

    $response = $sdk->sdk->createArtifact($request);

    if ($response->createArtifactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAutoMLJob

<p>Creates an Autopilot job.</p> <p>Find the best-performing model after you run an Autopilot job by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a>.</p> <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model Development with Amazon SageMaker Autopilot</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLCandidateGenerationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLAlgorithmConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobCompletionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLDataSplitConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobObjective;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLMetricEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLChannel;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLDataSource;
use \OpenAPI\OpenAPI\Models\Shared\AutoMls3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\AutoMls3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelDeployConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLOutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProblemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoMLJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAutoMLJobRequest();
    $request->createAutoMLJobRequest = new CreateAutoMLJobRequest();
    $request->createAutoMLJobRequest->autoMLJobConfig = new AutoMLJobConfig();
    $request->createAutoMLJobRequest->autoMLJobConfig->candidateGenerationConfig = new AutoMLCandidateGenerationConfig();
    $request->createAutoMLJobRequest->autoMLJobConfig->candidateGenerationConfig->algorithmsConfig = [
        new AutoMLAlgorithmConfig(),
        new AutoMLAlgorithmConfig(),
    ];
    $request->createAutoMLJobRequest->autoMLJobConfig->candidateGenerationConfig->featureSpecificationS3Uri = 'accusamus';
    $request->createAutoMLJobRequest->autoMLJobConfig->completionCriteria = new AutoMLJobCompletionCriteria();
    $request->createAutoMLJobRequest->autoMLJobConfig->completionCriteria->maxAutoMLJobRuntimeInSeconds = 414263;
    $request->createAutoMLJobRequest->autoMLJobConfig->completionCriteria->maxCandidates = 918236;
    $request->createAutoMLJobRequest->autoMLJobConfig->completionCriteria->maxRuntimePerTrainingJobInSeconds = 64147;
    $request->createAutoMLJobRequest->autoMLJobConfig->dataSplitConfig = new AutoMLDataSplitConfig();
    $request->createAutoMLJobRequest->autoMLJobConfig->dataSplitConfig->validationFraction = 2168.22;
    $request->createAutoMLJobRequest->autoMLJobConfig->mode = AutoMLModeEnum::HYPERPARAMETER_TUNING;
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig = new AutoMLSecurityConfig();
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig->enableInterContainerTrafficEncryption = false;
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig->volumeKmsKeyId = 'molestias';
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig->vpcConfig = new VpcConfig();
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig->vpcConfig->securityGroupIds = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->createAutoMLJobRequest->autoMLJobConfig->securityConfig->vpcConfig->subnets = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->createAutoMLJobRequest->autoMLJobName = 'sint';
    $request->createAutoMLJobRequest->autoMLJobObjective = new AutoMLJobObjective();
    $request->createAutoMLJobRequest->autoMLJobObjective->metricName = AutoMLMetricEnumEnum::MSE;
    $request->createAutoMLJobRequest->generateCandidateDefinitionsOnly = false;
    $request->createAutoMLJobRequest->inputDataConfig = [
        new AutoMLChannel(),
        new AutoMLChannel(),
        new AutoMLChannel(),
        new AutoMLChannel(),
    ];
    $request->createAutoMLJobRequest->modelDeployConfig = new ModelDeployConfig();
    $request->createAutoMLJobRequest->modelDeployConfig->autoGenerateEndpointName = false;
    $request->createAutoMLJobRequest->modelDeployConfig->endpointName = 'incidunt';
    $request->createAutoMLJobRequest->outputDataConfig = new AutoMLOutputDataConfig();
    $request->createAutoMLJobRequest->outputDataConfig->kmsKeyId = 'enim';
    $request->createAutoMLJobRequest->outputDataConfig->s3OutputPath = 'consequatur';
    $request->createAutoMLJobRequest->problemType = ProblemTypeEnum::REGRESSION;
    $request->createAutoMLJobRequest->roleArn = 'quibusdam';
    $request->createAutoMLJobRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = CreateAutoMLJobXAmzTargetEnum::SAGE_MAKER_CREATE_AUTO_ML_JOB;

    $response = $sdk->sdk->createAutoMLJob($request);

    if ($response->createAutoMLJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAutoMLJobV2

<p>Creates an Amazon SageMaker AutoML job that uses non-tabular data such as images or text for Computer Vision or Natural Language Processing problems.</p> <p>Find the resulting model after you run an AutoML job V2 by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a>.</p> <p>To create an <code>AutoMLJob</code> using tabular data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoMLJobV2Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateAutoMLJobV2Request;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobChannel;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLDataSource;
use \OpenAPI\OpenAPI\Models\Shared\AutoMls3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\AutoMls3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobObjective;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLMetricEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLProblemTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobCompletionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLDataSplitConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelDeployConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLOutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoMLJobV2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAutoMLJobV2Request();
    $request->createAutoMLJobV2Request = new CreateAutoMLJobV2Request();
    $request->createAutoMLJobV2Request->autoMLJobInputDataConfig = [
        new AutoMLJobChannel(),
        new AutoMLJobChannel(),
        new AutoMLJobChannel(),
    ];
    $request->createAutoMLJobV2Request->autoMLJobName = 'quos';
    $request->createAutoMLJobV2Request->autoMLJobObjective = new AutoMLJobObjective();
    $request->createAutoMLJobV2Request->autoMLJobObjective->metricName = AutoMLMetricEnumEnum::ACCURACY;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig = new AutoMLProblemTypeConfig();
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->imageClassificationJobConfig = new ImageClassificationJobConfig();
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->imageClassificationJobConfig->completionCriteria = new AutoMLJobCompletionCriteria();
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->imageClassificationJobConfig->completionCriteria->maxAutoMLJobRuntimeInSeconds = 164940;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->imageClassificationJobConfig->completionCriteria->maxCandidates = 828940;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->imageClassificationJobConfig->completionCriteria->maxRuntimePerTrainingJobInSeconds = 369808;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig = new TextClassificationJobConfig();
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->completionCriteria = new AutoMLJobCompletionCriteria();
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->completionCriteria->maxAutoMLJobRuntimeInSeconds = 4695;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->completionCriteria->maxCandidates = 146441;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->completionCriteria->maxRuntimePerTrainingJobInSeconds = 677817;
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->contentColumn = 'excepturi';
    $request->createAutoMLJobV2Request->autoMLProblemTypeConfig->textClassificationJobConfig->targetLabelColumn = 'tempora';
    $request->createAutoMLJobV2Request->dataSplitConfig = new AutoMLDataSplitConfig();
    $request->createAutoMLJobV2Request->dataSplitConfig->validationFraction = 7037.37;
    $request->createAutoMLJobV2Request->modelDeployConfig = new ModelDeployConfig();
    $request->createAutoMLJobV2Request->modelDeployConfig->autoGenerateEndpointName = false;
    $request->createAutoMLJobV2Request->modelDeployConfig->endpointName = 'tempore';
    $request->createAutoMLJobV2Request->outputDataConfig = new AutoMLOutputDataConfig();
    $request->createAutoMLJobV2Request->outputDataConfig->kmsKeyId = 'labore';
    $request->createAutoMLJobV2Request->outputDataConfig->s3OutputPath = 'delectus';
    $request->createAutoMLJobV2Request->roleArn = 'eum';
    $request->createAutoMLJobV2Request->securityConfig = new AutoMLSecurityConfig();
    $request->createAutoMLJobV2Request->securityConfig->enableInterContainerTrafficEncryption = false;
    $request->createAutoMLJobV2Request->securityConfig->volumeKmsKeyId = 'non';
    $request->createAutoMLJobV2Request->securityConfig->vpcConfig = new VpcConfig();
    $request->createAutoMLJobV2Request->securityConfig->vpcConfig->securityGroupIds = [
        'sint',
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->createAutoMLJobV2Request->securityConfig->vpcConfig->subnets = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->createAutoMLJobV2Request->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateAutoMLJobV2XAmzTargetEnum::SAGE_MAKER_CREATE_AUTO_ML_JOB_V2;

    $response = $sdk->sdk->createAutoMLJobV2($request);

    if ($response->createAutoMLJobV2Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCodeRepository

<p>Creates a Git repository as a resource in your SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCodeRepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\GitConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCodeRepositoryRequest();
    $request->createCodeRepositoryInput = new CreateCodeRepositoryInput();
    $request->createCodeRepositoryInput->codeRepositoryName = 'magnam';
    $request->createCodeRepositoryInput->gitConfig = new GitConfig();
    $request->createCodeRepositoryInput->gitConfig->branch = 'cumque';
    $request->createCodeRepositoryInput->gitConfig->repositoryUrl = 'facere';
    $request->createCodeRepositoryInput->gitConfig->secretArn = 'ea';
    $request->createCodeRepositoryInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = CreateCodeRepositoryXAmzTargetEnum::SAGE_MAKER_CREATE_CODE_REPOSITORY;

    $response = $sdk->sdk->createCodeRepository($request);

    if ($response->createCodeRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCompilationJob

<p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job. </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopCompilationJob.html">StopCompilationJob</a>. To get information about a particular model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\FrameworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetDeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPlatform;
use \OpenAPI\OpenAPI\Models\Shared\TargetPlatformAcceleratorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPlatformArchEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPlatformOsEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\NeoVpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompilationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompilationJobRequest();
    $request->createCompilationJobRequest = new CreateCompilationJobRequest();
    $request->createCompilationJobRequest->compilationJobName = 'quidem';
    $request->createCompilationJobRequest->inputConfig = new InputConfig();
    $request->createCompilationJobRequest->inputConfig->dataInputConfig = 'provident';
    $request->createCompilationJobRequest->inputConfig->framework = FrameworkEnum::TFLITE;
    $request->createCompilationJobRequest->inputConfig->frameworkVersion = 'id';
    $request->createCompilationJobRequest->inputConfig->s3Uri = 'blanditiis';
    $request->createCompilationJobRequest->modelPackageVersionArn = 'deleniti';
    $request->createCompilationJobRequest->outputConfig = new OutputConfig();
    $request->createCompilationJobRequest->outputConfig->compilerOptions = 'sapiente';
    $request->createCompilationJobRequest->outputConfig->kmsKeyId = 'amet';
    $request->createCompilationJobRequest->outputConfig->s3OutputLocation = 'deserunt';
    $request->createCompilationJobRequest->outputConfig->targetDevice = TargetDeviceEnum::JETSON_NANO;
    $request->createCompilationJobRequest->outputConfig->targetPlatform = new TargetPlatform();
    $request->createCompilationJobRequest->outputConfig->targetPlatform->accelerator = TargetPlatformAcceleratorEnum::MALI;
    $request->createCompilationJobRequest->outputConfig->targetPlatform->arch = TargetPlatformArchEnum::ARM_EABI;
    $request->createCompilationJobRequest->outputConfig->targetPlatform->os = TargetPlatformOsEnum::LINUX;
    $request->createCompilationJobRequest->roleArn = 'molestiae';
    $request->createCompilationJobRequest->stoppingCondition = new StoppingCondition();
    $request->createCompilationJobRequest->stoppingCondition->maxRuntimeInSeconds = 19193;
    $request->createCompilationJobRequest->stoppingCondition->maxWaitTimeInSeconds = 470132;
    $request->createCompilationJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createCompilationJobRequest->vpcConfig = new NeoVpcConfig();
    $request->createCompilationJobRequest->vpcConfig->securityGroupIds = [
        'id',
        'labore',
        'labore',
    ];
    $request->createCompilationJobRequest->vpcConfig->subnets = [
        'natus',
        'nobis',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CreateCompilationJobXAmzTargetEnum::SAGE_MAKER_CREATE_COMPILATION_JOB;

    $response = $sdk->sdk->createCompilationJob($request);

    if ($response->createCompilationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContext

Creates a <i>context</i>. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContextRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContextRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContextSource;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateContextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContextRequest();
    $request->createContextRequest = new CreateContextRequest();
    $request->createContextRequest->contextName = 'ullam';
    $request->createContextRequest->contextType = 'provident';
    $request->createContextRequest->description = 'quos';
    $request->createContextRequest->properties = [
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
    ];
    $request->createContextRequest->source = new ContextSource();
    $request->createContextRequest->source->sourceId = 'dolor';
    $request->createContextRequest->source->sourceType = 'necessitatibus';
    $request->createContextRequest->source->sourceUri = 'odit';
    $request->createContextRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateContextXAmzTargetEnum::SAGE_MAKER_CREATE_CONTEXT;

    $response = $sdk->sdk->createContext($request);

    if ($response->createContextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataQualityJobDefinition

Creates a definition for a job that monitors data quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStatisticsResource;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityJobInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataQualityJobDefinitionRequest();
    $request->createDataQualityJobDefinitionRequest = new CreateDataQualityJobDefinitionRequest();
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification = new DataQualityAppSpecification();
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->containerArguments = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->containerEntrypoint = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->environment = [
        'sed' => 'saepe',
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
    ];
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->imageUri = 'sunt';
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->postAnalyticsProcessorSourceUri = 'quo';
    $request->createDataQualityJobDefinitionRequest->dataQualityAppSpecification->recordPreprocessorSourceUri = 'illum';
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig = new DataQualityBaselineConfig();
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig->baseliningJobName = 'pariatur';
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig->constraintsResource->s3Uri = 'maxime';
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig->statisticsResource = new MonitoringStatisticsResource();
    $request->createDataQualityJobDefinitionRequest->dataQualityBaselineConfig->statisticsResource->s3Uri = 'ea';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput = new DataQualityJobInput();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput = new BatchTransformInput();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->dataCapturedDestinationS3Uri = 'excepturi';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat = new MonitoringDatasetFormat();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat->csv = new MonitoringCsvDatasetFormat();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat->csv->header = false;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat->json = new MonitoringJsonDatasetFormat();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat->json->line = false;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->datasetFormat->parquet = [
        'ea' => 'accusantium',
    ];
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->endTimeOffset = 'ab';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->featuresAttribute = 'maiores';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->inferenceAttribute = 'quidem';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->localPath = 'ipsam';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->probabilityAttribute = 'voluptate';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->probabilityThresholdAttribute = 4200.75;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::SHARDED_BY_S3_KEY;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->s3InputMode = ProcessingS3InputModeEnum::PIPE;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->batchTransformInput->startTimeOffset = 'pariatur';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput = new EndpointInput();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->endTimeOffset = 'nemo';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->endpointName = 'voluptatibus';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->featuresAttribute = 'perferendis';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->inferenceAttribute = 'fugiat';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->localPath = 'amet';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->probabilityAttribute = 'aut';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->probabilityThresholdAttribute = 7649.12;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::FULLY_REPLICATED;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->s3InputMode = ProcessingS3InputModeEnum::FILE;
    $request->createDataQualityJobDefinitionRequest->dataQualityJobInput->endpointInput->startTimeOffset = 'libero';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobOutputConfig = new MonitoringOutputConfig();
    $request->createDataQualityJobDefinitionRequest->dataQualityJobOutputConfig->kmsKeyId = 'nobis';
    $request->createDataQualityJobDefinitionRequest->dataQualityJobOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
    ];
    $request->createDataQualityJobDefinitionRequest->jobDefinitionName = 'quis';
    $request->createDataQualityJobDefinitionRequest->jobResources = new MonitoringResources();
    $request->createDataQualityJobDefinitionRequest->jobResources->clusterConfig = new MonitoringClusterConfig();
    $request->createDataQualityJobDefinitionRequest->jobResources->clusterConfig->instanceCount = 521037;
    $request->createDataQualityJobDefinitionRequest->jobResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_C54XLARGE;
    $request->createDataQualityJobDefinitionRequest->jobResources->clusterConfig->volumeKmsKeyId = 'eaque';
    $request->createDataQualityJobDefinitionRequest->jobResources->clusterConfig->volumeSizeInGB = 338985;
    $request->createDataQualityJobDefinitionRequest->networkConfig = new MonitoringNetworkConfig();
    $request->createDataQualityJobDefinitionRequest->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createDataQualityJobDefinitionRequest->networkConfig->enableNetworkIsolation = false;
    $request->createDataQualityJobDefinitionRequest->networkConfig->vpcConfig = new VpcConfig();
    $request->createDataQualityJobDefinitionRequest->networkConfig->vpcConfig->securityGroupIds = [
        'eos',
    ];
    $request->createDataQualityJobDefinitionRequest->networkConfig->vpcConfig->subnets = [
        'dolores',
    ];
    $request->createDataQualityJobDefinitionRequest->roleArn = 'minus';
    $request->createDataQualityJobDefinitionRequest->stoppingCondition = new MonitoringStoppingCondition();
    $request->createDataQualityJobDefinitionRequest->stoppingCondition->maxRuntimeInSeconds = 463451;
    $request->createDataQualityJobDefinitionRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = CreateDataQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_CREATE_DATA_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->createDataQualityJobDefinition($request);

    if ($response->createDataQualityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceFleet

Creates a device fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EdgeOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\EdgePresetDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceFleetRequest();
    $request->createDeviceFleetRequest = new CreateDeviceFleetRequest();
    $request->createDeviceFleetRequest->description = 'voluptatem';
    $request->createDeviceFleetRequest->deviceFleetName = 'porro';
    $request->createDeviceFleetRequest->enableIotRoleAlias = false;
    $request->createDeviceFleetRequest->outputConfig = new EdgeOutputConfig();
    $request->createDeviceFleetRequest->outputConfig->kmsKeyId = 'consequuntur';
    $request->createDeviceFleetRequest->outputConfig->presetDeploymentConfig = 'blanditiis';
    $request->createDeviceFleetRequest->outputConfig->presetDeploymentType = EdgePresetDeploymentTypeEnum::GREENGRASS_V2_COMPONENT;
    $request->createDeviceFleetRequest->outputConfig->s3OutputLocation = 'error';
    $request->createDeviceFleetRequest->roleArn = 'eaque';
    $request->createDeviceFleetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateDeviceFleetXAmzTargetEnum::SAGE_MAKER_CREATE_DEVICE_FLEET;

    $response = $sdk->sdk->createDeviceFleet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomain

<p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.</p> <p> <b>EFS storage</b> </p> <p>When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.</p> <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at Rest Using Encryption</a>.</p> <p> <b>VPC configuration</b> </p> <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code> parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you choose when you onboard to Studio. The following options are available:</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.</p> </li> <li> <p> <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.</p> <p>When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.</p> </li> </ul> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect SageMaker Studio Notebooks to Resources in a VPC</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppNetworkAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppSecurityGroupManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultSpaceSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\CanvasAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\ModelRegisterSettings;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesForecastingSettings;
use \OpenAPI\OpenAPI\Models\Shared\RSessionAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAccessStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProUserGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharingSettings;
use \OpenAPI\OpenAPI\Models\Shared\NotebookOutputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TensorBoardAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\DomainSettings;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionRoleIdentityConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProDomainSettings;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainRequest();
    $request->createDomainRequest = new CreateDomainRequest();
    $request->createDomainRequest->appNetworkAccessType = AppNetworkAccessTypeEnum::VPC_ONLY;
    $request->createDomainRequest->appSecurityGroupManagement = AppSecurityGroupManagementEnum::CUSTOMER;
    $request->createDomainRequest->authMode = AuthModeEnum::IAM;
    $request->createDomainRequest->defaultSpaceSettings = new DefaultSpaceSettings();
    $request->createDomainRequest->defaultSpaceSettings->executionRole = 'nobis';
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G524XLARGE;
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'quaerat';
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'quos';
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'aliquid';
    $request->createDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'dolorem',
    ];
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
    ];
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M54XLARGE;
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'ipsum';
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'hic';
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'excepturi';
    $request->createDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->createDomainRequest->defaultSpaceSettings->securityGroups = [
        'dolorum',
    ];
    $request->createDomainRequest->defaultUserSettings = new UserSettings();
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings = new CanvasAppSettings();
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings = new ModelRegisterSettings();
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings->crossAccountModelRegisterRoleArn = 'numquam';
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings->status = FeatureStatusEnum::ENABLED;
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings = new TimeSeriesForecastingSettings();
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings->amazonForecastRoleArn = 'ipsa';
    $request->createDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings->status = FeatureStatusEnum::ENABLED;
    $request->createDomainRequest->defaultUserSettings->executionRole = 'iure';
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M5D4XLARGE;
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'accusamus';
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'quidem';
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'voluptatibus';
    $request->createDomainRequest->defaultUserSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'natus',
        'eos',
    ];
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_T3_MICRO;
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'fugiat';
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'ab';
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'soluta';
    $request->createDomainRequest->defaultUserSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'iusto',
        'voluptate',
        'dolorum',
    ];
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings = new RSessionAppSettings();
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G4DN_XLARGE;
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->lifecycleConfigArn = 'necessitatibus';
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageArn = 'distinctio';
    $request->createDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'asperiores';
    $request->createDomainRequest->defaultUserSettings->rStudioServerProAppSettings = new RStudioServerProAppSettings();
    $request->createDomainRequest->defaultUserSettings->rStudioServerProAppSettings->accessStatus = RStudioServerProAccessStatusEnum::ENABLED;
    $request->createDomainRequest->defaultUserSettings->rStudioServerProAppSettings->userGroup = RStudioServerProUserGroupEnum::R_STUDIO_ADMIN;
    $request->createDomainRequest->defaultUserSettings->securityGroups = [
        'id',
        'saepe',
    ];
    $request->createDomainRequest->defaultUserSettings->sharingSettings = new SharingSettings();
    $request->createDomainRequest->defaultUserSettings->sharingSettings->notebookOutputOption = NotebookOutputOptionEnum::ALLOWED;
    $request->createDomainRequest->defaultUserSettings->sharingSettings->s3KmsKeyId = 'aspernatur';
    $request->createDomainRequest->defaultUserSettings->sharingSettings->s3OutputPath = 'perferendis';
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings = new TensorBoardAppSettings();
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M516XLARGE;
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->lifecycleConfigArn = 'optio';
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageArn = 'accusamus';
    $request->createDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'ad';
    $request->createDomainRequest->domainName = 'saepe';
    $request->createDomainRequest->domainSettings = new DomainSettings();
    $request->createDomainRequest->domainSettings->executionRoleIdentityConfig = ExecutionRoleIdentityConfigEnum::USER_PROFILE_NAME;
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings = new RStudioServerProDomainSettings();
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->defaultResourceSpec = new ResourceSpec();
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G4DN4XLARGE;
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->defaultResourceSpec->lifecycleConfigArn = 'provident';
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->defaultResourceSpec->sageMakerImageArn = 'minima';
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->defaultResourceSpec->sageMakerImageVersionArn = 'repellendus';
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->domainExecutionRoleArn = 'totam';
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->rStudioConnectUrl = 'similique';
    $request->createDomainRequest->domainSettings->rStudioServerProDomainSettings->rStudioPackageManagerUrl = 'alias';
    $request->createDomainRequest->domainSettings->securityGroupIds = [
        'quaerat',
        'tempora',
        'vel',
        'quod',
    ];
    $request->createDomainRequest->homeEfsFileSystemKmsKeyId = 'officiis';
    $request->createDomainRequest->kmsKeyId = 'qui';
    $request->createDomainRequest->subnetIds = [
        'a',
        'esse',
        'harum',
    ];
    $request->createDomainRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createDomainRequest->vpcId = 'ipsum';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateDomainXAmzTargetEnum::SAGE_MAKER_CREATE_DOMAIN;

    $response = $sdk->sdk->createDomain($request);

    if ($response->createDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEdgeDeploymentPlan

Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\EdgeDeploymentModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStage;
use \OpenAPI\OpenAPI\Models\Shared\EdgeDeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\FailureHandlingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSelectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSubsetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgeDeploymentPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEdgeDeploymentPlanRequest();
    $request->createEdgeDeploymentPlanRequest = new CreateEdgeDeploymentPlanRequest();
    $request->createEdgeDeploymentPlanRequest->deviceFleetName = 'dolorem';
    $request->createEdgeDeploymentPlanRequest->edgeDeploymentPlanName = 'sapiente';
    $request->createEdgeDeploymentPlanRequest->modelConfigs = [
        new EdgeDeploymentModelConfig(),
        new EdgeDeploymentModelConfig(),
        new EdgeDeploymentModelConfig(),
    ];
    $request->createEdgeDeploymentPlanRequest->stages = [
        new DeploymentStage(),
        new DeploymentStage(),
    ];
    $request->createEdgeDeploymentPlanRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateEdgeDeploymentPlanXAmzTargetEnum::SAGE_MAKER_CREATE_EDGE_DEPLOYMENT_PLAN;

    $response = $sdk->sdk->createEdgeDeploymentPlan($request);

    if ($response->createEdgeDeploymentPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEdgeDeploymentStage

Creates a new stage in an existing edge deployment plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStage;
use \OpenAPI\OpenAPI\Models\Shared\EdgeDeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\FailureHandlingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSelectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSubsetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgeDeploymentStageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEdgeDeploymentStageRequest();
    $request->createEdgeDeploymentStageRequest = new CreateEdgeDeploymentStageRequest();
    $request->createEdgeDeploymentStageRequest->edgeDeploymentPlanName = 'quam';
    $request->createEdgeDeploymentStageRequest->stages = [
        new DeploymentStage(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateEdgeDeploymentStageXAmzTargetEnum::SAGE_MAKER_CREATE_EDGE_DEPLOYMENT_STAGE;

    $response = $sdk->sdk->createEdgeDeploymentStage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEdgePackagingJob

Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\EdgeOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\EdgePresetDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEdgePackagingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEdgePackagingJobRequest();
    $request->createEdgePackagingJobRequest = new CreateEdgePackagingJobRequest();
    $request->createEdgePackagingJobRequest->compilationJobName = 'laborum';
    $request->createEdgePackagingJobRequest->edgePackagingJobName = 'totam';
    $request->createEdgePackagingJobRequest->modelName = 'incidunt';
    $request->createEdgePackagingJobRequest->modelVersion = 'aspernatur';
    $request->createEdgePackagingJobRequest->outputConfig = new EdgeOutputConfig();
    $request->createEdgePackagingJobRequest->outputConfig->kmsKeyId = 'dolores';
    $request->createEdgePackagingJobRequest->outputConfig->presetDeploymentConfig = 'distinctio';
    $request->createEdgePackagingJobRequest->outputConfig->presetDeploymentType = EdgePresetDeploymentTypeEnum::GREENGRASS_V2_COMPONENT;
    $request->createEdgePackagingJobRequest->outputConfig->s3OutputLocation = 'facilis';
    $request->createEdgePackagingJobRequest->resourceKey = 'aliquid';
    $request->createEdgePackagingJobRequest->roleArn = 'quam';
    $request->createEdgePackagingJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = CreateEdgePackagingJobXAmzTargetEnum::SAGE_MAKER_CREATE_EDGE_PACKAGING_JOB;

    $response = $sdk->sdk->createEdgePackagingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpoint

<p>Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. </p> <p>When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p> <note> <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API operations, add the following policies to the role. </p> <ul> <li> <p>Option 1: For a full SageMaker access, search and attach the <code>AmazonSageMakerFullAccess</code> policy.</p> </li> <li> <p>Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: </p> <p> <code>"Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]</code> </p> <p> <code>"Resource": [</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code> </p> <p> <code>]</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">SageMaker API Permissions: Actions, Permissions, and Resources Reference</a>.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackConfig;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySize;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointRequest();
    $request->createEndpointInput = new CreateEndpointInput();
    $request->createEndpointInput->deploymentConfig = new DeploymentConfig();
    $request->createEndpointInput->deploymentConfig->autoRollbackConfiguration = new AutoRollbackConfig();
    $request->createEndpointInput->deploymentConfig->autoRollbackConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
    ];
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy = new BlueGreenUpdatePolicy();
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->maximumExecutionTimeoutInSeconds = 722081;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->terminationWaitInSeconds = 940432;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration = new TrafficRoutingConfig();
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize = new CapacitySize();
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize->type = CapacitySizeTypeEnum::INSTANCE_COUNT;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize->value = 765326;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize = new CapacitySize();
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize->type = CapacitySizeTypeEnum::CAPACITY_PERCENT;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize->value = 748664;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->type = TrafficRoutingConfigTypeEnum::ALL_AT_ONCE;
    $request->createEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->waitIntervalInSeconds = 903720;
    $request->createEndpointInput->endpointConfigName = 'ipsum';
    $request->createEndpointInput->endpointName = 'veritatis';
    $request->createEndpointInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = CreateEndpointXAmzTargetEnum::SAGE_MAKER_CREATE_ENDPOINT;

    $response = $sdk->sdk->createEndpoint($request);

    if ($response->createEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpointConfig

<p>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want SageMaker to provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AsyncInferenceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AsyncInferenceClientConfig;
use \OpenAPI\OpenAPI\Models\Shared\AsyncInferenceOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\AsyncInferenceNotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AsyncNotificationTopicTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataCaptureConfig;
use \OpenAPI\OpenAPI\Models\Shared\CaptureContentTypeHeader;
use \OpenAPI\OpenAPI\Models\Shared\CaptureOption;
use \OpenAPI\OpenAPI\Models\Shared\CaptureModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExplainerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyExplainerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyInferenceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyShapConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyShapBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyTextConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyTextGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClarifyTextLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariant;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantAcceleratorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantCoreDumpConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantServerlessConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointConfigRequest();
    $request->createEndpointConfigInput = new CreateEndpointConfigInput();
    $request->createEndpointConfigInput->asyncInferenceConfig = new AsyncInferenceConfig();
    $request->createEndpointConfigInput->asyncInferenceConfig->clientConfig = new AsyncInferenceClientConfig();
    $request->createEndpointConfigInput->asyncInferenceConfig->clientConfig->maxConcurrentInvocationsPerInstance = 286915;
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig = new AsyncInferenceOutputConfig();
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->kmsKeyId = 'adipisci';
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->notificationConfig = new AsyncInferenceNotificationConfig();
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->notificationConfig->errorTopic = 'dolorum';
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->notificationConfig->includeInferenceResponseIn = [
        AsyncNotificationTopicTypesEnum::SUCCESS_NOTIFICATION_TOPIC,
    ];
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->notificationConfig->successTopic = 'aut';
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->s3FailurePath = 'quas';
    $request->createEndpointConfigInput->asyncInferenceConfig->outputConfig->s3OutputPath = 'itaque';
    $request->createEndpointConfigInput->dataCaptureConfig = new DataCaptureConfig();
    $request->createEndpointConfigInput->dataCaptureConfig->captureContentTypeHeader = new CaptureContentTypeHeader();
    $request->createEndpointConfigInput->dataCaptureConfig->captureContentTypeHeader->csvContentTypes = [
        'est',
    ];
    $request->createEndpointConfigInput->dataCaptureConfig->captureContentTypeHeader->jsonContentTypes = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->createEndpointConfigInput->dataCaptureConfig->captureOptions = [
        new CaptureOption(),
        new CaptureOption(),
        new CaptureOption(),
    ];
    $request->createEndpointConfigInput->dataCaptureConfig->destinationS3Uri = 'qui';
    $request->createEndpointConfigInput->dataCaptureConfig->enableCapture = false;
    $request->createEndpointConfigInput->dataCaptureConfig->initialSamplingPercentage = 63955;
    $request->createEndpointConfigInput->dataCaptureConfig->kmsKeyId = 'laudantium';
    $request->createEndpointConfigInput->endpointConfigName = 'odio';
    $request->createEndpointConfigInput->explainerConfig = new ExplainerConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig = new ClarifyExplainerConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->enableExplanations = 'occaecati';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig = new ClarifyInferenceConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->contentTemplate = 'voluptatibus';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->featureHeaders = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->featureTypes = [
        ClarifyFeatureTypeEnum::CATEGORICAL,
        ClarifyFeatureTypeEnum::NUMERICAL,
        ClarifyFeatureTypeEnum::TEXT,
        ClarifyFeatureTypeEnum::TEXT,
    ];
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->featuresAttribute = 'dignissimos';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->labelAttribute = 'hic';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->labelHeaders = [
        'quod',
        'odio',
        'similique',
    ];
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->labelIndex = 708548;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->maxPayloadInMB = 874288;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->maxRecordCount = 498140;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->probabilityAttribute = 'dolore';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->inferenceConfig->probabilityIndex = 844550;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig = new ClarifyShapConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->numberOfSamples = 848944;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->seed = 194342;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->shapBaselineConfig = new ClarifyShapBaselineConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->shapBaselineConfig->mimeType = 'natus';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->shapBaselineConfig->shapBaseline = 'impedit';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->shapBaselineConfig->shapBaselineUri = 'aut';
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->textConfig = new ClarifyTextConfig();
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->textConfig->granularity = ClarifyTextGranularityEnum::PARAGRAPH;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->textConfig->language = ClarifyTextLanguageEnum::HE;
    $request->createEndpointConfigInput->explainerConfig->clarifyExplainerConfig->shapConfig->useLogit = false;
    $request->createEndpointConfigInput->kmsKeyId = 'nulla';
    $request->createEndpointConfigInput->productionVariants = [
        new ProductionVariant(),
    ];
    $request->createEndpointConfigInput->shadowProductionVariants = [
        new ProductionVariant(),
        new ProductionVariant(),
        new ProductionVariant(),
        new ProductionVariant(),
    ];
    $request->createEndpointConfigInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = CreateEndpointConfigXAmzTargetEnum::SAGE_MAKER_CREATE_ENDPOINT_CONFIG;

    $response = $sdk->sdk->createEndpointConfig($request);

    if ($response->createEndpointConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExperiment

<p>Creates a SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <note> <p>In the Studio UI, trials are referred to as <i>run groups</i> and trial components are referred to as <i>runs</i>.</p> </note> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListExperiments.html">ListExperiments</a> API. To view an experiment's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To create a trial call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrial.html">CreateTrial</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentRequest();
    $request->createExperimentRequest = new CreateExperimentRequest();
    $request->createExperimentRequest->description = 'ipsam';
    $request->createExperimentRequest->displayName = 'ea';
    $request->createExperimentRequest->experimentName = 'aspernatur';
    $request->createExperimentRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreateExperimentXAmzTargetEnum::SAGE_MAKER_CREATE_EXPERIMENT;

    $response = $sdk->sdk->createExperiment($request);

    if ($response->createExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFeatureGroup

<p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of <code>Features</code> defined in the <code>FeatureStore</code> to describe a <code>Record</code>. </p> <p>The <code>FeatureGroup</code> defines the schema and features contained in the FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code> and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p> <important> <p>You must include at least one of <code>OnlineStoreConfig</code> and <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureDefinition;
use \OpenAPI\OpenAPI\Models\Shared\FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfflineStoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3StorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\TableFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnlineStoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnlineStoreSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeatureGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFeatureGroupRequest();
    $request->createFeatureGroupRequest = new CreateFeatureGroupRequest();
    $request->createFeatureGroupRequest->description = 'maiores';
    $request->createFeatureGroupRequest->eventTimeFeatureName = 'quasi';
    $request->createFeatureGroupRequest->featureDefinitions = [
        new FeatureDefinition(),
        new FeatureDefinition(),
    ];
    $request->createFeatureGroupRequest->featureGroupName = 'nulla';
    $request->createFeatureGroupRequest->offlineStoreConfig = new OfflineStoreConfig();
    $request->createFeatureGroupRequest->offlineStoreConfig->dataCatalogConfig = new DataCatalogConfig();
    $request->createFeatureGroupRequest->offlineStoreConfig->dataCatalogConfig->catalog = 'excepturi';
    $request->createFeatureGroupRequest->offlineStoreConfig->dataCatalogConfig->database = 'voluptatibus';
    $request->createFeatureGroupRequest->offlineStoreConfig->dataCatalogConfig->tableName = 'nostrum';
    $request->createFeatureGroupRequest->offlineStoreConfig->disableGlueTableCreation = false;
    $request->createFeatureGroupRequest->offlineStoreConfig->s3StorageConfig = new S3StorageConfig();
    $request->createFeatureGroupRequest->offlineStoreConfig->s3StorageConfig->kmsKeyId = 'sapiente';
    $request->createFeatureGroupRequest->offlineStoreConfig->s3StorageConfig->resolvedOutputS3Uri = 'quisquam';
    $request->createFeatureGroupRequest->offlineStoreConfig->s3StorageConfig->s3Uri = 'saepe';
    $request->createFeatureGroupRequest->offlineStoreConfig->tableFormat = TableFormatEnum::GLUE;
    $request->createFeatureGroupRequest->onlineStoreConfig = new OnlineStoreConfig();
    $request->createFeatureGroupRequest->onlineStoreConfig->enableOnlineStore = false;
    $request->createFeatureGroupRequest->onlineStoreConfig->securityConfig = new OnlineStoreSecurityConfig();
    $request->createFeatureGroupRequest->onlineStoreConfig->securityConfig->kmsKeyId = 'impedit';
    $request->createFeatureGroupRequest->recordIdentifierFeatureName = 'corporis';
    $request->createFeatureGroupRequest->roleArn = 'veniam';
    $request->createFeatureGroupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = CreateFeatureGroupXAmzTargetEnum::SAGE_MAKER_CREATE_FEATURE_GROUP;

    $response = $sdk->sdk->createFeatureGroup($request);

    if ($response->createFeatureGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFlowDefinition

Creates a flow definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopActivationConfig;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopActivationConditionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopConfig;
use \OpenAPI\OpenAPI\Models\Shared\PublicWorkforceTaskPrice;
use \OpenAPI\OpenAPI\Models\Shared\Usd;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopRequestSource;
use \OpenAPI\OpenAPI\Models\Shared\AwsManagedHumanLoopRequestSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlowDefinitionOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlowDefinitionRequest();
    $request->createFlowDefinitionRequest = new CreateFlowDefinitionRequest();
    $request->createFlowDefinitionRequest->flowDefinitionName = 'minima';
    $request->createFlowDefinitionRequest->humanLoopActivationConfig = new HumanLoopActivationConfig();
    $request->createFlowDefinitionRequest->humanLoopActivationConfig->humanLoopActivationConditionsConfig = new HumanLoopActivationConditionsConfig();
    $request->createFlowDefinitionRequest->humanLoopActivationConfig->humanLoopActivationConditionsConfig->humanLoopActivationConditions = 'eaque';
    $request->createFlowDefinitionRequest->humanLoopConfig = new HumanLoopConfig();
    $request->createFlowDefinitionRequest->humanLoopConfig->humanTaskUiArn = 'a';
    $request->createFlowDefinitionRequest->humanLoopConfig->publicWorkforceTaskPrice = new PublicWorkforceTaskPrice();
    $request->createFlowDefinitionRequest->humanLoopConfig->publicWorkforceTaskPrice->amountInUsd = new Usd();
    $request->createFlowDefinitionRequest->humanLoopConfig->publicWorkforceTaskPrice->amountInUsd->cents = 725595;
    $request->createFlowDefinitionRequest->humanLoopConfig->publicWorkforceTaskPrice->amountInUsd->dollars = 13948;
    $request->createFlowDefinitionRequest->humanLoopConfig->publicWorkforceTaskPrice->amountInUsd->tenthFractionsOfACent = 11427;
    $request->createFlowDefinitionRequest->humanLoopConfig->taskAvailabilityLifetimeInSeconds = 533466;
    $request->createFlowDefinitionRequest->humanLoopConfig->taskCount = 770581;
    $request->createFlowDefinitionRequest->humanLoopConfig->taskDescription = 'aliquam';
    $request->createFlowDefinitionRequest->humanLoopConfig->taskKeywords = [
        'accusamus',
    ];
    $request->createFlowDefinitionRequest->humanLoopConfig->taskTimeLimitInSeconds = 79522;
    $request->createFlowDefinitionRequest->humanLoopConfig->taskTitle = 'non';
    $request->createFlowDefinitionRequest->humanLoopConfig->workteamArn = 'et';
    $request->createFlowDefinitionRequest->humanLoopRequestSource = new HumanLoopRequestSource();
    $request->createFlowDefinitionRequest->humanLoopRequestSource->awsManagedHumanLoopRequestSource = AwsManagedHumanLoopRequestSourceEnum::AWS_TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1;
    $request->createFlowDefinitionRequest->outputConfig = new FlowDefinitionOutputConfig();
    $request->createFlowDefinitionRequest->outputConfig->kmsKeyId = 'laborum';
    $request->createFlowDefinitionRequest->outputConfig->s3OutputPath = 'placeat';
    $request->createFlowDefinitionRequest->roleArn = 'velit';
    $request->createFlowDefinitionRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = CreateFlowDefinitionXAmzTargetEnum::SAGE_MAKER_CREATE_FLOW_DEFINITION;

    $response = $sdk->sdk->createFlowDefinition($request);

    if ($response->createFlowDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHub

<p>Create a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubS3StorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateHubXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHubRequest();
    $request->createHubRequest = new CreateHubRequest();
    $request->createHubRequest->hubDescription = 'quasi';
    $request->createHubRequest->hubDisplayName = 'tempora';
    $request->createHubRequest->hubName = 'numquam';
    $request->createHubRequest->hubSearchKeywords = [
        'provident',
    ];
    $request->createHubRequest->s3StorageConfig = new HubS3StorageConfig();
    $request->createHubRequest->s3StorageConfig->s3OutputPath = 'ipsa';
    $request->createHubRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = CreateHubXAmzTargetEnum::SAGE_MAKER_CREATE_HUB;

    $response = $sdk->sdk->createHub($request);

    if ($response->createHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHumanTaskUi

Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\UiTemplate;
use \OpenAPI\OpenAPI\Models\Operations\CreateHumanTaskUiXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHumanTaskUiRequest();
    $request->createHumanTaskUiRequest = new CreateHumanTaskUiRequest();
    $request->createHumanTaskUiRequest->humanTaskUiName = 'reprehenderit';
    $request->createHumanTaskUiRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createHumanTaskUiRequest->uiTemplate = new UiTemplate();
    $request->createHumanTaskUiRequest->uiTemplate->content = 'fugiat';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = CreateHumanTaskUiXAmzTargetEnum::SAGE_MAKER_CREATE_HUMAN_TASK_UI;

    $response = $sdk->sdk->createHumanTaskUi($request);

    if ($response->createHumanTaskUiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHyperParameterTuningJob

<p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.</p> <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View Experiments, Trials, and Trial Components</a>.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobObjective;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobObjectiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterRanges;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterScalingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegerParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLimits;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobStrategyConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperbandStrategyConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrainingJobEarlyStoppingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TuningJobCompletionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\BestObjectiveNotImproving;
use \OpenAPI\OpenAPI\Models\Shared\ConvergenceDetected;
use \OpenAPI\OpenAPI\Models\Shared\CompleteOnConvergenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTrainingJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterAlgorithmSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemDataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataDistributionEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecordWrapperEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShuffleConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroup;
use \OpenAPI\OpenAPI\Models\Shared\RetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\StoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobWarmStartConfig;
use \OpenAPI\OpenAPI\Models\Shared\ParentHyperParameterTuningJob;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobWarmStartTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHyperParameterTuningJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHyperParameterTuningJobRequest();
    $request->createHyperParameterTuningJobRequest = new CreateHyperParameterTuningJobRequest();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig = new HyperParameterTuningJobConfig();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->hyperParameterTuningJobObjective = new HyperParameterTuningJobObjective();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->hyperParameterTuningJobObjective->metricName = 'veritatis';
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->hyperParameterTuningJobObjective->type = HyperParameterTuningJobObjectiveTypeEnum::MAXIMIZE;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->parameterRanges = new ParameterRanges();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->parameterRanges->categoricalParameterRanges = [
        new CategoricalParameterRange(),
        new CategoricalParameterRange(),
        new CategoricalParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->parameterRanges->continuousParameterRanges = [
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->parameterRanges->integerParameterRanges = [
        new IntegerParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->randomSeed = 778696;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->resourceLimits = new ResourceLimits();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->resourceLimits->maxNumberOfTrainingJobs = 847276;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->resourceLimits->maxParallelTrainingJobs = 777408;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->resourceLimits->maxRuntimeInSeconds = 681359;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->strategy = HyperParameterTuningJobStrategyTypeEnum::RANDOM;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->strategyConfig = new HyperParameterTuningJobStrategyConfig();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->strategyConfig->hyperbandStrategyConfig = new HyperbandStrategyConfig();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->strategyConfig->hyperbandStrategyConfig->maxResource = 178367;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->strategyConfig->hyperbandStrategyConfig->minResource = 373813;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->trainingJobEarlyStoppingType = TrainingJobEarlyStoppingTypeEnum::OFF;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria = new TuningJobCompletionCriteria();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria->bestObjectiveNotImproving = new BestObjectiveNotImproving();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria->bestObjectiveNotImproving->maxNumberOfTrainingJobsNotImproving = 587600;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria->convergenceDetected = new ConvergenceDetected();
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria->convergenceDetected->completeOnConvergence = CompleteOnConvergenceEnum::DISABLED;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobConfig->tuningJobCompletionCriteria->targetObjectiveMetricValue = 2728.22;
    $request->createHyperParameterTuningJobRequest->hyperParameterTuningJobName = 'debitis';
    $request->createHyperParameterTuningJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition = new HyperParameterTrainingJobDefinition();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->algorithmSpecification = new HyperParameterAlgorithmSpecification();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->algorithmSpecification->algorithmName = 'aspernatur';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->algorithmSpecification->metricDefinitions = [
        new MetricDefinition(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->algorithmSpecification->trainingImage = 'quo';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->algorithmSpecification->trainingInputMode = TrainingInputModeEnum::FILE;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->checkpointConfig = new CheckpointConfig();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->checkpointConfig->localPath = 'recusandae';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->checkpointConfig->s3Uri = 'aperiam';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->definitionName = 'distinctio';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->enableInterContainerTrafficEncryption = false;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->enableManagedSpotTraining = false;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->enableNetworkIsolation = false;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->environment = [
        'dignissimos' => 'inventore',
        'nihil' => 'totam',
        'accusamus' => 'aliquam',
        'odio' => 'occaecati',
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterRanges = new ParameterRanges();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterRanges->categoricalParameterRanges = [
        new CategoricalParameterRange(),
        new CategoricalParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterRanges->continuousParameterRanges = [
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterRanges->integerParameterRanges = [
        new IntegerParameterRange(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig = new HyperParameterTuningResourceConfig();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->allocationStrategy = HyperParameterTuningAllocationStrategyEnum::PRIORITIZED;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->instanceConfigs = [
        new HyperParameterTuningInstanceConfig(),
        new HyperParameterTuningInstanceConfig(),
        new HyperParameterTuningInstanceConfig(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->instanceCount = 475289;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->instanceType = TrainingInstanceTypeEnum::ML_M42XLARGE;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->volumeKmsKeyId = 'porro';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->hyperParameterTuningResourceConfig->volumeSizeInGB = 430402;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->inputDataConfig = [
        new Channel(),
        new Channel(),
        new Channel(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->outputDataConfig = new OutputDataConfig();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->outputDataConfig->kmsKeyId = 'praesentium';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->outputDataConfig->s3OutputPath = 'consequuntur';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig = new ResourceConfig();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->instanceCount = 536178;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->instanceGroups = [
        new InstanceGroup(),
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->instanceType = TrainingInstanceTypeEnum::ML_C518XLARGE;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->keepAlivePeriodInSeconds = 649463;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->volumeKmsKeyId = 'incidunt';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->resourceConfig->volumeSizeInGB = 539224;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->retryStrategy = new RetryStrategy();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->retryStrategy->maximumRetryAttempts = 128860;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->roleArn = 'minima';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->staticHyperParameters = [
        'fugit' => 'sapiente',
        'consequuntur' => 'ratione',
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->stoppingCondition = new StoppingCondition();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->stoppingCondition->maxRuntimeInSeconds = 129412;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->stoppingCondition->maxWaitTimeInSeconds = 903984;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->tuningObjective = new HyperParameterTuningJobObjective();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->tuningObjective->metricName = 'occaecati';
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->tuningObjective->type = HyperParameterTuningJobObjectiveTypeEnum::MINIMIZE;
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->vpcConfig = new VpcConfig();
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->vpcConfig->securityGroupIds = [
        'esse',
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinition->vpcConfig->subnets = [
        'accusamus',
        'veritatis',
        'esse',
        'quod',
    ];
    $request->createHyperParameterTuningJobRequest->trainingJobDefinitions = [
        new HyperParameterTrainingJobDefinition(),
        new HyperParameterTrainingJobDefinition(),
        new HyperParameterTrainingJobDefinition(),
    ];
    $request->createHyperParameterTuningJobRequest->warmStartConfig = new HyperParameterTuningJobWarmStartConfig();
    $request->createHyperParameterTuningJobRequest->warmStartConfig->parentHyperParameterTuningJobs = [
        new ParentHyperParameterTuningJob(),
        new ParentHyperParameterTuningJob(),
        new ParentHyperParameterTuningJob(),
        new ParentHyperParameterTuningJob(),
    ];
    $request->createHyperParameterTuningJobRequest->warmStartConfig->warmStartType = HyperParameterTuningJobWarmStartTypeEnum::IDENTICAL_DATA_AND_ALGORITHM;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = CreateHyperParameterTuningJobXAmzTargetEnum::SAGE_MAKER_CREATE_HYPER_PARAMETER_TUNING_JOB;

    $response = $sdk->sdk->createHyperParameterTuningJob($request);

    if ($response->createHyperParameterTuningJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImage

Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Elastic Container Registry (ECR). For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRequest();
    $request->createImageRequest = new CreateImageRequest();
    $request->createImageRequest->description = 'minima';
    $request->createImageRequest->displayName = 'distinctio';
    $request->createImageRequest->imageName = 'eligendi';
    $request->createImageRequest->roleArn = 'sit';
    $request->createImageRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = CreateImageXAmzTargetEnum::SAGE_MAKER_CREATE_IMAGE;

    $response = $sdk->sdk->createImage($request);

    if ($response->createImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageVersion

Creates a version of the SageMaker image specified by <code>ImageName</code>. The version represents the Amazon Elastic Container Registry (ECR) container image specified by <code>BaseImage</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VendorGuidanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageVersionRequest();
    $request->createImageVersionRequest = new CreateImageVersionRequest();
    $request->createImageVersionRequest->aliases = [
        'consectetur',
        'esse',
        'blanditiis',
        'provident',
    ];
    $request->createImageVersionRequest->baseImage = 'a';
    $request->createImageVersionRequest->clientToken = 'nulla';
    $request->createImageVersionRequest->horovod = false;
    $request->createImageVersionRequest->imageName = 'quas';
    $request->createImageVersionRequest->jobType = JobTypeEnum::INFERENCE;
    $request->createImageVersionRequest->mlFramework = 'quasi';
    $request->createImageVersionRequest->processor = ProcessorEnum::GPU;
    $request->createImageVersionRequest->programmingLang = 'error';
    $request->createImageVersionRequest->releaseNotes = 'sint';
    $request->createImageVersionRequest->vendorGuidance = VendorGuidanceEnum::ARCHIVED;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = CreateImageVersionXAmzTargetEnum::SAGE_MAKER_CREATE_IMAGE_VERSION;

    $response = $sdk->sdk->createImageVersion($request);

    if ($response->createImageVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInferenceExperiment

<p> Creates an inference experiment using the configurations specified in the request. </p> <p> Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>. </p> <p> Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. </p> <p> While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html">View, monitor, and edit shadow tests</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentDataStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\CaptureContentTypeHeader;
use \OpenAPI\OpenAPI\Models\Shared\ModelVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RealTimeInferenceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ShadowModeConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShadowModelVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInferenceExperimentRequest();
    $request->createInferenceExperimentRequest = new CreateInferenceExperimentRequest();
    $request->createInferenceExperimentRequest->dataStorageConfig = new InferenceExperimentDataStorageConfig();
    $request->createInferenceExperimentRequest->dataStorageConfig->contentType = new CaptureContentTypeHeader();
    $request->createInferenceExperimentRequest->dataStorageConfig->contentType->csvContentTypes = [
        'similique',
    ];
    $request->createInferenceExperimentRequest->dataStorageConfig->contentType->jsonContentTypes = [
        'aliquid',
        'tenetur',
        'quae',
    ];
    $request->createInferenceExperimentRequest->dataStorageConfig->destination = 'earum';
    $request->createInferenceExperimentRequest->dataStorageConfig->kmsKey = 'vel';
    $request->createInferenceExperimentRequest->description = 'in';
    $request->createInferenceExperimentRequest->endpointName = 'eius';
    $request->createInferenceExperimentRequest->kmsKey = 'libero';
    $request->createInferenceExperimentRequest->modelVariants = [
        new ModelVariantConfig(),
        new ModelVariantConfig(),
        new ModelVariantConfig(),
        new ModelVariantConfig(),
    ];
    $request->createInferenceExperimentRequest->name = 'Kenneth Hackett II';
    $request->createInferenceExperimentRequest->roleArn = 'reprehenderit';
    $request->createInferenceExperimentRequest->schedule = new InferenceExperimentSchedule();
    $request->createInferenceExperimentRequest->schedule->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-11T00:03:24.347Z');
    $request->createInferenceExperimentRequest->schedule->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T21:00:03.729Z');
    $request->createInferenceExperimentRequest->shadowModeConfig = new ShadowModeConfig();
    $request->createInferenceExperimentRequest->shadowModeConfig->shadowModelVariants = [
        new ShadowModelVariantConfig(),
    ];
    $request->createInferenceExperimentRequest->shadowModeConfig->sourceModelVariantName = 'quibusdam';
    $request->createInferenceExperimentRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createInferenceExperimentRequest->type = InferenceExperimentTypeEnum::SHADOW_MODE;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateInferenceExperimentXAmzTargetEnum::SAGE_MAKER_CREATE_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->createInferenceExperiment($request);

    if ($response->createInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInferenceRecommendationsJob

Starts a recommendation job. You can create either an instance recommendation or load test job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobContainerConfig;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobPayloadConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentParameterRanges;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalParameter;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInfo;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\TrafficPattern;
use \OpenAPI\OpenAPI\Models\Shared\Phase;
use \OpenAPI\OpenAPI\Models\Shared\TrafficTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobVpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobCompiledOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobStoppingConditions;
use \OpenAPI\OpenAPI\Models\Shared\ModelLatencyThreshold;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceRecommendationsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInferenceRecommendationsJobRequest();
    $request->createInferenceRecommendationsJobRequest = new CreateInferenceRecommendationsJobRequest();
    $request->createInferenceRecommendationsJobRequest->inputConfig = new RecommendationJobInputConfig();
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig = new RecommendationJobContainerConfig();
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->dataInputConfig = 'at';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->domain = 'et';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->framework = 'voluptate';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->frameworkVersion = 'ipsa';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->nearestModelName = 'minima';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->payloadConfig = new RecommendationJobPayloadConfig();
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->payloadConfig->samplePayloadUrl = 'veritatis';
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->payloadConfig->supportedContentTypes = [
        'adipisci',
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->supportedInstanceTypes = [
        'temporibus',
        'accusantium',
        'rem',
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->containerConfig->task = 'aut';
    $request->createInferenceRecommendationsJobRequest->inputConfig->endpointConfigurations = [
        new EndpointInputConfiguration(),
        new EndpointInputConfiguration(),
        new EndpointInputConfiguration(),
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->endpoints = [
        new EndpointInfo(),
        new EndpointInfo(),
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->jobDurationInSeconds = 649832;
    $request->createInferenceRecommendationsJobRequest->inputConfig->modelName = 'ab';
    $request->createInferenceRecommendationsJobRequest->inputConfig->modelPackageVersionArn = 'corrupti';
    $request->createInferenceRecommendationsJobRequest->inputConfig->resourceLimit = new RecommendationJobResourceLimit();
    $request->createInferenceRecommendationsJobRequest->inputConfig->resourceLimit->maxNumberOfTests = 251941;
    $request->createInferenceRecommendationsJobRequest->inputConfig->resourceLimit->maxParallelOfTests = 32465;
    $request->createInferenceRecommendationsJobRequest->inputConfig->trafficPattern = new TrafficPattern();
    $request->createInferenceRecommendationsJobRequest->inputConfig->trafficPattern->phases = [
        new Phase(),
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->trafficPattern->trafficType = TrafficTypeEnum::PHASES;
    $request->createInferenceRecommendationsJobRequest->inputConfig->volumeKmsKeyId = 'occaecati';
    $request->createInferenceRecommendationsJobRequest->inputConfig->vpcConfig = new RecommendationJobVpcConfig();
    $request->createInferenceRecommendationsJobRequest->inputConfig->vpcConfig->securityGroupIds = [
        'impedit',
        'explicabo',
    ];
    $request->createInferenceRecommendationsJobRequest->inputConfig->vpcConfig->subnets = [
        'aut',
        'dignissimos',
    ];
    $request->createInferenceRecommendationsJobRequest->jobDescription = 'dicta';
    $request->createInferenceRecommendationsJobRequest->jobName = 'maiores';
    $request->createInferenceRecommendationsJobRequest->jobType = RecommendationJobTypeEnum::ADVANCED;
    $request->createInferenceRecommendationsJobRequest->outputConfig = new RecommendationJobOutputConfig();
    $request->createInferenceRecommendationsJobRequest->outputConfig->compiledOutputConfig = new RecommendationJobCompiledOutputConfig();
    $request->createInferenceRecommendationsJobRequest->outputConfig->compiledOutputConfig->s3OutputUri = 'velit';
    $request->createInferenceRecommendationsJobRequest->outputConfig->kmsKeyId = 'voluptatibus';
    $request->createInferenceRecommendationsJobRequest->roleArn = 'voluptas';
    $request->createInferenceRecommendationsJobRequest->stoppingConditions = new RecommendationJobStoppingConditions();
    $request->createInferenceRecommendationsJobRequest->stoppingConditions->maxInvocations = 990345;
    $request->createInferenceRecommendationsJobRequest->stoppingConditions->modelLatencyThresholds = [
        new ModelLatencyThreshold(),
    ];
    $request->createInferenceRecommendationsJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CreateInferenceRecommendationsJobXAmzTargetEnum::SAGE_MAKER_CREATE_INFERENCE_RECOMMENDATIONS_JOB;

    $response = $sdk->sdk->createInferenceRecommendationsJob($request);

    if ($response->createInferenceRecommendationsJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLabelingJob

<p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. </p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p> <p>You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (<code>InProgress</code>) streaming labeling job in real time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling Job</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\HumanTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationConsolidationConfig;
use \OpenAPI\OpenAPI\Models\Shared\PublicWorkforceTaskPrice;
use \OpenAPI\OpenAPI\Models\Shared\Usd;
use \OpenAPI\OpenAPI\Models\Shared\UiConfig;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ContentClassifierEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobDataSource;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobS3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobSnsDataSource;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobAlgorithmsConfig;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobStoppingConditions;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelingJobRequest();
    $request->createLabelingJobRequest = new CreateLabelingJobRequest();
    $request->createLabelingJobRequest->humanTaskConfig = new HumanTaskConfig();
    $request->createLabelingJobRequest->humanTaskConfig->annotationConsolidationConfig = new AnnotationConsolidationConfig();
    $request->createLabelingJobRequest->humanTaskConfig->annotationConsolidationConfig->annotationConsolidationLambdaArn = 'asperiores';
    $request->createLabelingJobRequest->humanTaskConfig->maxConcurrentTaskCount = 368102;
    $request->createLabelingJobRequest->humanTaskConfig->numberOfHumanWorkersPerDataObject = 65304;
    $request->createLabelingJobRequest->humanTaskConfig->preHumanTaskLambdaArn = 'quaerat';
    $request->createLabelingJobRequest->humanTaskConfig->publicWorkforceTaskPrice = new PublicWorkforceTaskPrice();
    $request->createLabelingJobRequest->humanTaskConfig->publicWorkforceTaskPrice->amountInUsd = new Usd();
    $request->createLabelingJobRequest->humanTaskConfig->publicWorkforceTaskPrice->amountInUsd->cents = 783235;
    $request->createLabelingJobRequest->humanTaskConfig->publicWorkforceTaskPrice->amountInUsd->dollars = 801836;
    $request->createLabelingJobRequest->humanTaskConfig->publicWorkforceTaskPrice->amountInUsd->tenthFractionsOfACent = 288398;
    $request->createLabelingJobRequest->humanTaskConfig->taskAvailabilityLifetimeInSeconds = 70447;
    $request->createLabelingJobRequest->humanTaskConfig->taskDescription = 'adipisci';
    $request->createLabelingJobRequest->humanTaskConfig->taskKeywords = [
        'id',
        'suscipit',
        'velit',
    ];
    $request->createLabelingJobRequest->humanTaskConfig->taskTimeLimitInSeconds = 633931;
    $request->createLabelingJobRequest->humanTaskConfig->taskTitle = 'est';
    $request->createLabelingJobRequest->humanTaskConfig->uiConfig = new UiConfig();
    $request->createLabelingJobRequest->humanTaskConfig->uiConfig->humanTaskUiArn = 'recusandae';
    $request->createLabelingJobRequest->humanTaskConfig->uiConfig->uiTemplateS3Uri = 'totam';
    $request->createLabelingJobRequest->humanTaskConfig->workteamArn = 'fugiat';
    $request->createLabelingJobRequest->inputConfig = new LabelingJobInputConfig();
    $request->createLabelingJobRequest->inputConfig->dataAttributes = new LabelingJobDataAttributes();
    $request->createLabelingJobRequest->inputConfig->dataAttributes->contentClassifiers = [
        ContentClassifierEnum::FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
    ];
    $request->createLabelingJobRequest->inputConfig->dataSource = new LabelingJobDataSource();
    $request->createLabelingJobRequest->inputConfig->dataSource->s3DataSource = new LabelingJobS3DataSource();
    $request->createLabelingJobRequest->inputConfig->dataSource->s3DataSource->manifestS3Uri = 'vel';
    $request->createLabelingJobRequest->inputConfig->dataSource->snsDataSource = new LabelingJobSnsDataSource();
    $request->createLabelingJobRequest->inputConfig->dataSource->snsDataSource->snsTopicArn = 'labore';
    $request->createLabelingJobRequest->labelAttributeName = 'possimus';
    $request->createLabelingJobRequest->labelCategoryConfigS3Uri = 'facilis';
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig = new LabelingJobAlgorithmsConfig();
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->initialActiveLearningModelArn = 'cum';
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobAlgorithmSpecificationArn = 'commodi';
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobResourceConfig = new LabelingJobResourceConfig();
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobResourceConfig->volumeKmsKeyId = 'in';
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobResourceConfig->vpcConfig = new VpcConfig();
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobResourceConfig->vpcConfig->securityGroupIds = [
        'reiciendis',
        'assumenda',
    ];
    $request->createLabelingJobRequest->labelingJobAlgorithmsConfig->labelingJobResourceConfig->vpcConfig->subnets = [
        'recusandae',
        'aliquid',
    ];
    $request->createLabelingJobRequest->labelingJobName = 'aperiam';
    $request->createLabelingJobRequest->outputConfig = new LabelingJobOutputConfig();
    $request->createLabelingJobRequest->outputConfig->kmsKeyId = 'cum';
    $request->createLabelingJobRequest->outputConfig->s3OutputPath = 'consectetur';
    $request->createLabelingJobRequest->outputConfig->snsTopicArn = 'in';
    $request->createLabelingJobRequest->roleArn = 'exercitationem';
    $request->createLabelingJobRequest->stoppingConditions = new LabelingJobStoppingConditions();
    $request->createLabelingJobRequest->stoppingConditions->maxHumanLabeledObjectCount = 937285;
    $request->createLabelingJobRequest->stoppingConditions->maxPercentageOfInputDatasetLabeled = 814967;
    $request->createLabelingJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = CreateLabelingJobXAmzTargetEnum::SAGE_MAKER_CREATE_LABELING_JOB;

    $response = $sdk->sdk->createLabelingJob($request);

    if ($response->createLabelingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModel

<p>Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ImageConfig;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryAuthConfig;
use \OpenAPI\OpenAPI\Models\Shared\ContainerModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelCacheSettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExecutionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelRequest();
    $request->createModelInput = new CreateModelInput();
    $request->createModelInput->containers = [
        new ContainerDefinition(),
    ];
    $request->createModelInput->enableNetworkIsolation = false;
    $request->createModelInput->executionRoleArn = 'asperiores';
    $request->createModelInput->inferenceExecutionConfig = new InferenceExecutionConfig();
    $request->createModelInput->inferenceExecutionConfig->mode = InferenceExecutionModeEnum::SERIAL;
    $request->createModelInput->modelName = 'non';
    $request->createModelInput->primaryContainer = new ContainerDefinition();
    $request->createModelInput->primaryContainer->containerHostname = 'amet';
    $request->createModelInput->primaryContainer->environment = [
        'dignissimos' => 'a',
    ];
    $request->createModelInput->primaryContainer->image = 'debitis';
    $request->createModelInput->primaryContainer->imageConfig = new ImageConfig();
    $request->createModelInput->primaryContainer->imageConfig->repositoryAccessMode = RepositoryAccessModeEnum::PLATFORM;
    $request->createModelInput->primaryContainer->imageConfig->repositoryAuthConfig = new RepositoryAuthConfig();
    $request->createModelInput->primaryContainer->imageConfig->repositoryAuthConfig->repositoryCredentialsProviderArn = 'corporis';
    $request->createModelInput->primaryContainer->inferenceSpecificationName = 'harum';
    $request->createModelInput->primaryContainer->mode = ContainerModeEnum::SINGLE_MODEL;
    $request->createModelInput->primaryContainer->modelDataUrl = 'ipsa';
    $request->createModelInput->primaryContainer->modelPackageName = 'voluptates';
    $request->createModelInput->primaryContainer->multiModelConfig = new MultiModelConfig();
    $request->createModelInput->primaryContainer->multiModelConfig->modelCacheSetting = ModelCacheSettingEnum::DISABLED;
    $request->createModelInput->tags = [
        new Tag(),
    ];
    $request->createModelInput->vpcConfig = new VpcConfig();
    $request->createModelInput->vpcConfig->securityGroupIds = [
        'similique',
        'tempora',
        'aspernatur',
        'voluptas',
    ];
    $request->createModelInput->vpcConfig->subnets = [
        'voluptas',
        'minima',
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateModelXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL;

    $response = $sdk->sdk->createModel($request);

    if ($response->createModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelBiasJobDefinition

Creates the definition for a model bias job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelBiasAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ModelBiasBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\ModelBiasJobInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringGroundTruthS3Input;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelBiasJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelBiasJobDefinitionRequest();
    $request->createModelBiasJobDefinitionRequest = new CreateModelBiasJobDefinitionRequest();
    $request->createModelBiasJobDefinitionRequest->jobDefinitionName = 'dolore';
    $request->createModelBiasJobDefinitionRequest->jobResources = new MonitoringResources();
    $request->createModelBiasJobDefinitionRequest->jobResources->clusterConfig = new MonitoringClusterConfig();
    $request->createModelBiasJobDefinitionRequest->jobResources->clusterConfig->instanceCount = 304468;
    $request->createModelBiasJobDefinitionRequest->jobResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_G4DN_XLARGE;
    $request->createModelBiasJobDefinitionRequest->jobResources->clusterConfig->volumeKmsKeyId = 'temporibus';
    $request->createModelBiasJobDefinitionRequest->jobResources->clusterConfig->volumeSizeInGB = 351870;
    $request->createModelBiasJobDefinitionRequest->modelBiasAppSpecification = new ModelBiasAppSpecification();
    $request->createModelBiasJobDefinitionRequest->modelBiasAppSpecification->configUri = 'adipisci';
    $request->createModelBiasJobDefinitionRequest->modelBiasAppSpecification->environment = [
        'blanditiis' => 'quas',
        'hic' => 'nesciunt',
        'culpa' => 'corrupti',
    ];
    $request->createModelBiasJobDefinitionRequest->modelBiasAppSpecification->imageUri = 'pariatur';
    $request->createModelBiasJobDefinitionRequest->modelBiasBaselineConfig = new ModelBiasBaselineConfig();
    $request->createModelBiasJobDefinitionRequest->modelBiasBaselineConfig->baseliningJobName = 'totam';
    $request->createModelBiasJobDefinitionRequest->modelBiasBaselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->createModelBiasJobDefinitionRequest->modelBiasBaselineConfig->constraintsResource->s3Uri = 'hic';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput = new ModelBiasJobInput();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput = new BatchTransformInput();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->dataCapturedDestinationS3Uri = 'exercitationem';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat = new MonitoringDatasetFormat();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat->csv = new MonitoringCsvDatasetFormat();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat->csv->header = false;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat->json = new MonitoringJsonDatasetFormat();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat->json->line = false;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->datasetFormat->parquet = [
        'sit' => 'rerum',
        'sed' => 'reiciendis',
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
    ];
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->endTimeOffset = 'expedita';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->featuresAttribute = 'ab';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->inferenceAttribute = 'iste';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->localPath = 'dolore';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->probabilityAttribute = 'laborum';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->probabilityThresholdAttribute = 1523.54;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::FULLY_REPLICATED;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->s3InputMode = ProcessingS3InputModeEnum::PIPE;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->batchTransformInput->startTimeOffset = 'quidem';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput = new EndpointInput();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->endTimeOffset = 'explicabo';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->endpointName = 'voluptas';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->featuresAttribute = 'unde';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->inferenceAttribute = 'architecto';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->localPath = 'suscipit';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->probabilityAttribute = 'sapiente';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->probabilityThresholdAttribute = 8953.86;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::FULLY_REPLICATED;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->s3InputMode = ProcessingS3InputModeEnum::FILE;
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->endpointInput->startTimeOffset = 'perferendis';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->groundTruthS3Input = new MonitoringGroundTruthS3Input();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobInput->groundTruthS3Input->s3Uri = 'corrupti';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobOutputConfig = new MonitoringOutputConfig();
    $request->createModelBiasJobDefinitionRequest->modelBiasJobOutputConfig->kmsKeyId = 'maiores';
    $request->createModelBiasJobDefinitionRequest->modelBiasJobOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
        new MonitoringOutput(),
    ];
    $request->createModelBiasJobDefinitionRequest->networkConfig = new MonitoringNetworkConfig();
    $request->createModelBiasJobDefinitionRequest->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createModelBiasJobDefinitionRequest->networkConfig->enableNetworkIsolation = false;
    $request->createModelBiasJobDefinitionRequest->networkConfig->vpcConfig = new VpcConfig();
    $request->createModelBiasJobDefinitionRequest->networkConfig->vpcConfig->securityGroupIds = [
        'provident',
    ];
    $request->createModelBiasJobDefinitionRequest->networkConfig->vpcConfig->subnets = [
        'necessitatibus',
        'ipsum',
    ];
    $request->createModelBiasJobDefinitionRequest->roleArn = 'ea';
    $request->createModelBiasJobDefinitionRequest->stoppingCondition = new MonitoringStoppingCondition();
    $request->createModelBiasJobDefinitionRequest->stoppingCondition->maxRuntimeInSeconds = 579912;
    $request->createModelBiasJobDefinitionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = CreateModelBiasJobDefinitionXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_BIAS_JOB_DEFINITION;

    $response = $sdk->sdk->createModelBiasJobDefinition($request);

    if ($response->createModelBiasJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelCard

<p>Creates an Amazon SageMaker Model Card.</p> <p>For information about how to use model cards, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html">Amazon SageMaker Model Card</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelCardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelCardRequest();
    $request->createModelCardRequest = new CreateModelCardRequest();
    $request->createModelCardRequest->content = 'non';
    $request->createModelCardRequest->modelCardName = 'officiis';
    $request->createModelCardRequest->modelCardStatus = ModelCardStatusEnum::APPROVED;
    $request->createModelCardRequest->securityConfig = new ModelCardSecurityConfig();
    $request->createModelCardRequest->securityConfig->kmsKeyId = 'facilis';
    $request->createModelCardRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateModelCardXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_CARD;

    $response = $sdk->sdk->createModelCard($request);

    if ($response->createModelCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelCardExportJob

Creates an Amazon SageMaker Model Card export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelCardExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelCardExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardExportOutputConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelCardExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelCardExportJobRequest();
    $request->createModelCardExportJobRequest = new CreateModelCardExportJobRequest();
    $request->createModelCardExportJobRequest->modelCardExportJobName = 'veniam';
    $request->createModelCardExportJobRequest->modelCardName = 'minima';
    $request->createModelCardExportJobRequest->modelCardVersion = 924159;
    $request->createModelCardExportJobRequest->outputConfig = new ModelCardExportOutputConfig();
    $request->createModelCardExportJobRequest->outputConfig->s3OutputPath = 'reiciendis';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateModelCardExportJobXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_CARD_EXPORT_JOB;

    $response = $sdk->sdk->createModelCardExportJob($request);

    if ($response->createModelCardExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelExplainabilityJobDefinition

Creates the definition for a model explainability job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelExplainabilityAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ModelExplainabilityBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\ModelExplainabilityJobInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelExplainabilityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelExplainabilityJobDefinitionRequest();
    $request->createModelExplainabilityJobDefinitionRequest = new CreateModelExplainabilityJobDefinitionRequest();
    $request->createModelExplainabilityJobDefinitionRequest->jobDefinitionName = 'officiis';
    $request->createModelExplainabilityJobDefinitionRequest->jobResources = new MonitoringResources();
    $request->createModelExplainabilityJobDefinitionRequest->jobResources->clusterConfig = new MonitoringClusterConfig();
    $request->createModelExplainabilityJobDefinitionRequest->jobResources->clusterConfig->instanceCount = 104627;
    $request->createModelExplainabilityJobDefinitionRequest->jobResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_C59XLARGE;
    $request->createModelExplainabilityJobDefinitionRequest->jobResources->clusterConfig->volumeKmsKeyId = 'exercitationem';
    $request->createModelExplainabilityJobDefinitionRequest->jobResources->clusterConfig->volumeSizeInGB = 510629;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityAppSpecification = new ModelExplainabilityAppSpecification();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityAppSpecification->configUri = 'cum';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityAppSpecification->environment = [
        'dolorum' => 'voluptatum',
        'error' => 'hic',
    ];
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityAppSpecification->imageUri = 'expedita';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityBaselineConfig = new ModelExplainabilityBaselineConfig();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityBaselineConfig->baseliningJobName = 'debitis';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityBaselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityBaselineConfig->constraintsResource->s3Uri = 'neque';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput = new ModelExplainabilityJobInput();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput = new BatchTransformInput();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->dataCapturedDestinationS3Uri = 'dolorum';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat = new MonitoringDatasetFormat();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat->csv = new MonitoringCsvDatasetFormat();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat->csv->header = false;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat->json = new MonitoringJsonDatasetFormat();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat->json->line = false;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->datasetFormat->parquet = [
        'officia' => 'dolorum',
        'corrupti' => 'accusamus',
    ];
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->endTimeOffset = 'tempora';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->featuresAttribute = 'atque';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->inferenceAttribute = 'fugit';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->localPath = 'ut';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->probabilityAttribute = 'fugiat';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->probabilityThresholdAttribute = 302.35;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::SHARDED_BY_S3_KEY;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->s3InputMode = ProcessingS3InputModeEnum::FILE;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->batchTransformInput->startTimeOffset = 'magnam';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput = new EndpointInput();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->endTimeOffset = 'consequatur';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->endpointName = 'esse';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->featuresAttribute = 'ipsam';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->inferenceAttribute = 'sit';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->localPath = 'voluptatum';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->probabilityAttribute = 'quas';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->probabilityThresholdAttribute = 9221.12;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::FULLY_REPLICATED;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->s3InputMode = ProcessingS3InputModeEnum::PIPE;
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobInput->endpointInput->startTimeOffset = 'blanditiis';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobOutputConfig = new MonitoringOutputConfig();
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobOutputConfig->kmsKeyId = 'ex';
    $request->createModelExplainabilityJobDefinitionRequest->modelExplainabilityJobOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
    ];
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig = new MonitoringNetworkConfig();
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig->enableNetworkIsolation = false;
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig->vpcConfig = new VpcConfig();
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig->vpcConfig->securityGroupIds = [
        'vel',
    ];
    $request->createModelExplainabilityJobDefinitionRequest->networkConfig->vpcConfig->subnets = [
        'saepe',
        'error',
    ];
    $request->createModelExplainabilityJobDefinitionRequest->roleArn = 'consequatur';
    $request->createModelExplainabilityJobDefinitionRequest->stoppingCondition = new MonitoringStoppingCondition();
    $request->createModelExplainabilityJobDefinitionRequest->stoppingCondition->maxRuntimeInSeconds = 279068;
    $request->createModelExplainabilityJobDefinitionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = CreateModelExplainabilityJobDefinitionXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_EXPLAINABILITY_JOB_DEFINITION;

    $response = $sdk->sdk->createModelExplainabilityJobDefinition($request);

    if ($response->createModelExplainabilityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelPackage

<p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p> <note> <p>There are two types of model packages:</p> <ul> <li> <p>Versioned - a model that is part of a model group in the model registry.</p> </li> <li> <p>Unversioned - a model package that is not part of a model group.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelPackageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelPackageInput;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalInferenceSpecificationDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageContainerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriftCheckBaselines;
use \OpenAPI\OpenAPI\Models\Shared\DriftCheckBias;
use \OpenAPI\OpenAPI\Models\Shared\FileSource;
use \OpenAPI\OpenAPI\Models\Shared\MetricsSource;
use \OpenAPI\OpenAPI\Models\Shared\DriftCheckExplainability;
use \OpenAPI\OpenAPI\Models\Shared\DriftCheckModelDataQuality;
use \OpenAPI\OpenAPI\Models\Shared\DriftCheckModelQuality;
use \OpenAPI\OpenAPI\Models\Shared\InferenceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProperties;
use \OpenAPI\OpenAPI\Models\Shared\ModelApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelMetrics;
use \OpenAPI\OpenAPI\Models\Shared\Bias;
use \OpenAPI\OpenAPI\Models\Shared\Explainability;
use \OpenAPI\OpenAPI\Models\Shared\ModelDataQuality;
use \OpenAPI\OpenAPI\Models\Shared\ModelQuality;
use \OpenAPI\OpenAPI\Models\Shared\SourceAlgorithmSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SourceAlgorithm;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageValidationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageValidationProfile;
use \OpenAPI\OpenAPI\Models\Shared\TransformJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BatchStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformInput;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformDataSource;
use \OpenAPI\OpenAPI\Models\Shared\TransformS3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformOutput;
use \OpenAPI\OpenAPI\Models\Shared\AssemblyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformResources;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelPackageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelPackageRequest();
    $request->createModelPackageInput = new CreateModelPackageInput();
    $request->createModelPackageInput->additionalInferenceSpecifications = [
        new AdditionalInferenceSpecificationDefinition(),
        new AdditionalInferenceSpecificationDefinition(),
        new AdditionalInferenceSpecificationDefinition(),
    ];
    $request->createModelPackageInput->certifyForMarketplace = false;
    $request->createModelPackageInput->clientToken = 'laborum';
    $request->createModelPackageInput->customerMetadataProperties = [
        'tenetur' => 'laboriosam',
        'alias' => 'amet',
        'deserunt' => 'voluptate',
    ];
    $request->createModelPackageInput->domain = 'unde';
    $request->createModelPackageInput->driftCheckBaselines = new DriftCheckBaselines();
    $request->createModelPackageInput->driftCheckBaselines->bias = new DriftCheckBias();
    $request->createModelPackageInput->driftCheckBaselines->bias->configFile = new FileSource();
    $request->createModelPackageInput->driftCheckBaselines->bias->configFile->contentDigest = 'reiciendis';
    $request->createModelPackageInput->driftCheckBaselines->bias->configFile->contentType = 'provident';
    $request->createModelPackageInput->driftCheckBaselines->bias->configFile->s3Uri = 'repellendus';
    $request->createModelPackageInput->driftCheckBaselines->bias->postTrainingConstraints = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->bias->postTrainingConstraints->contentDigest = 'delectus';
    $request->createModelPackageInput->driftCheckBaselines->bias->postTrainingConstraints->contentType = 'voluptates';
    $request->createModelPackageInput->driftCheckBaselines->bias->postTrainingConstraints->s3Uri = 'perferendis';
    $request->createModelPackageInput->driftCheckBaselines->bias->preTrainingConstraints = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->bias->preTrainingConstraints->contentDigest = 'est';
    $request->createModelPackageInput->driftCheckBaselines->bias->preTrainingConstraints->contentType = 'quidem';
    $request->createModelPackageInput->driftCheckBaselines->bias->preTrainingConstraints->s3Uri = 'reprehenderit';
    $request->createModelPackageInput->driftCheckBaselines->explainability = new DriftCheckExplainability();
    $request->createModelPackageInput->driftCheckBaselines->explainability->configFile = new FileSource();
    $request->createModelPackageInput->driftCheckBaselines->explainability->configFile->contentDigest = 'facere';
    $request->createModelPackageInput->driftCheckBaselines->explainability->configFile->contentType = 'fuga';
    $request->createModelPackageInput->driftCheckBaselines->explainability->configFile->s3Uri = 'praesentium';
    $request->createModelPackageInput->driftCheckBaselines->explainability->constraints = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->explainability->constraints->contentDigest = 'mollitia';
    $request->createModelPackageInput->driftCheckBaselines->explainability->constraints->contentType = 'veniam';
    $request->createModelPackageInput->driftCheckBaselines->explainability->constraints->s3Uri = 'voluptatem';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality = new DriftCheckModelDataQuality();
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->constraints = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->constraints->contentDigest = 'quisquam';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->constraints->contentType = 'repudiandae';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->constraints->s3Uri = 'quasi';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->statistics = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->statistics->contentDigest = 'atque';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->statistics->contentType = 'reprehenderit';
    $request->createModelPackageInput->driftCheckBaselines->modelDataQuality->statistics->s3Uri = 'asperiores';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality = new DriftCheckModelQuality();
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->constraints = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->constraints->contentDigest = 'totam';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->constraints->contentType = 'suscipit';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->constraints->s3Uri = 'quidem';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->statistics = new MetricsSource();
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->statistics->contentDigest = 'maxime';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->statistics->contentType = 'et';
    $request->createModelPackageInput->driftCheckBaselines->modelQuality->statistics->s3Uri = 'esse';
    $request->createModelPackageInput->inferenceSpecification = new InferenceSpecification();
    $request->createModelPackageInput->inferenceSpecification->containers = [
        new ModelPackageContainerDefinition(),
    ];
    $request->createModelPackageInput->inferenceSpecification->supportedContentTypes = [
        'ea',
        'atque',
        'error',
        'officiis',
    ];
    $request->createModelPackageInput->inferenceSpecification->supportedRealtimeInferenceInstanceTypes = [
        ProductionVariantInstanceTypeEnum::ML_C6GN12XLARGE,
        ProductionVariantInstanceTypeEnum::ML_C7G4XLARGE,
        ProductionVariantInstanceTypeEnum::ML_G4DN4XLARGE,
        ProductionVariantInstanceTypeEnum::ML_M5D4XLARGE,
    ];
    $request->createModelPackageInput->inferenceSpecification->supportedResponseMIMETypes = [
        'maiores',
        'corrupti',
    ];
    $request->createModelPackageInput->inferenceSpecification->supportedTransformInstanceTypes = [
        TransformInstanceTypeEnum::ML_C518XLARGE,
        TransformInstanceTypeEnum::ML_C52XLARGE,
        TransformInstanceTypeEnum::ML_P32XLARGE,
        TransformInstanceTypeEnum::ML_G4DN8XLARGE,
    ];
    $request->createModelPackageInput->metadataProperties = new MetadataProperties();
    $request->createModelPackageInput->metadataProperties->commitId = 'atque';
    $request->createModelPackageInput->metadataProperties->generatedBy = 'atque';
    $request->createModelPackageInput->metadataProperties->projectId = 'sunt';
    $request->createModelPackageInput->metadataProperties->repository = 'recusandae';
    $request->createModelPackageInput->modelApprovalStatus = ModelApprovalStatusEnum::PENDING_MANUAL_APPROVAL;
    $request->createModelPackageInput->modelMetrics = new ModelMetrics();
    $request->createModelPackageInput->modelMetrics->bias = new Bias();
    $request->createModelPackageInput->modelMetrics->bias->postTrainingReport = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->bias->postTrainingReport->contentDigest = 'repellendus';
    $request->createModelPackageInput->modelMetrics->bias->postTrainingReport->contentType = 'labore';
    $request->createModelPackageInput->modelMetrics->bias->postTrainingReport->s3Uri = 'reiciendis';
    $request->createModelPackageInput->modelMetrics->bias->preTrainingReport = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->bias->preTrainingReport->contentDigest = 'doloremque';
    $request->createModelPackageInput->modelMetrics->bias->preTrainingReport->contentType = 'repudiandae';
    $request->createModelPackageInput->modelMetrics->bias->preTrainingReport->s3Uri = 'dicta';
    $request->createModelPackageInput->modelMetrics->bias->report = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->bias->report->contentDigest = 'accusantium';
    $request->createModelPackageInput->modelMetrics->bias->report->contentType = 'beatae';
    $request->createModelPackageInput->modelMetrics->bias->report->s3Uri = 'dolores';
    $request->createModelPackageInput->modelMetrics->explainability = new Explainability();
    $request->createModelPackageInput->modelMetrics->explainability->report = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->explainability->report->contentDigest = 'enim';
    $request->createModelPackageInput->modelMetrics->explainability->report->contentType = 'laboriosam';
    $request->createModelPackageInput->modelMetrics->explainability->report->s3Uri = 'velit';
    $request->createModelPackageInput->modelMetrics->modelDataQuality = new ModelDataQuality();
    $request->createModelPackageInput->modelMetrics->modelDataQuality->constraints = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->modelDataQuality->constraints->contentDigest = 'a';
    $request->createModelPackageInput->modelMetrics->modelDataQuality->constraints->contentType = 'molestias';
    $request->createModelPackageInput->modelMetrics->modelDataQuality->constraints->s3Uri = 'magnam';
    $request->createModelPackageInput->modelMetrics->modelDataQuality->statistics = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->modelDataQuality->statistics->contentDigest = 'saepe';
    $request->createModelPackageInput->modelMetrics->modelDataQuality->statistics->contentType = 'consequuntur';
    $request->createModelPackageInput->modelMetrics->modelDataQuality->statistics->s3Uri = 'occaecati';
    $request->createModelPackageInput->modelMetrics->modelQuality = new ModelQuality();
    $request->createModelPackageInput->modelMetrics->modelQuality->constraints = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->modelQuality->constraints->contentDigest = 'officiis';
    $request->createModelPackageInput->modelMetrics->modelQuality->constraints->contentType = 'perspiciatis';
    $request->createModelPackageInput->modelMetrics->modelQuality->constraints->s3Uri = 'in';
    $request->createModelPackageInput->modelMetrics->modelQuality->statistics = new MetricsSource();
    $request->createModelPackageInput->modelMetrics->modelQuality->statistics->contentDigest = 'adipisci';
    $request->createModelPackageInput->modelMetrics->modelQuality->statistics->contentType = 'eveniet';
    $request->createModelPackageInput->modelMetrics->modelQuality->statistics->s3Uri = 'occaecati';
    $request->createModelPackageInput->modelPackageDescription = 'consequuntur';
    $request->createModelPackageInput->modelPackageGroupName = 'fugit';
    $request->createModelPackageInput->modelPackageName = 'id';
    $request->createModelPackageInput->samplePayloadUrl = 'quis';
    $request->createModelPackageInput->sourceAlgorithmSpecification = new SourceAlgorithmSpecification();
    $request->createModelPackageInput->sourceAlgorithmSpecification->sourceAlgorithms = [
        new SourceAlgorithm(),
        new SourceAlgorithm(),
    ];
    $request->createModelPackageInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createModelPackageInput->task = 'illo';
    $request->createModelPackageInput->validationSpecification = new ModelPackageValidationSpecification();
    $request->createModelPackageInput->validationSpecification->validationProfiles = [
        new ModelPackageValidationProfile(),
        new ModelPackageValidationProfile(),
    ];
    $request->createModelPackageInput->validationSpecification->validationRole = 'quidem';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreateModelPackageXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_PACKAGE;

    $response = $sdk->sdk->createModelPackage($request);

    if ($response->createModelPackageOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelPackageGroup

Creates a model group. A model group contains a group of model versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelPackageGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelPackageGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelPackageGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelPackageGroupRequest();
    $request->createModelPackageGroupInput = new CreateModelPackageGroupInput();
    $request->createModelPackageGroupInput->modelPackageGroupDescription = 'quae';
    $request->createModelPackageGroupInput->modelPackageGroupName = 'molestiae';
    $request->createModelPackageGroupInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = CreateModelPackageGroupXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_PACKAGE_GROUP;

    $response = $sdk->sdk->createModelPackageGroup($request);

    if ($response->createModelPackageGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelQualityJobDefinition

Creates a definition for a job that monitors model quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelQualityAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringProblemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelQualityBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\ModelQualityJobInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringGroundTruthS3Input;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelQualityJobDefinitionRequest();
    $request->createModelQualityJobDefinitionRequest = new CreateModelQualityJobDefinitionRequest();
    $request->createModelQualityJobDefinitionRequest->jobDefinitionName = 'voluptatum';
    $request->createModelQualityJobDefinitionRequest->jobResources = new MonitoringResources();
    $request->createModelQualityJobDefinitionRequest->jobResources->clusterConfig = new MonitoringClusterConfig();
    $request->createModelQualityJobDefinitionRequest->jobResources->clusterConfig->instanceCount = 523006;
    $request->createModelQualityJobDefinitionRequest->jobResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_P2_XLARGE;
    $request->createModelQualityJobDefinitionRequest->jobResources->clusterConfig->volumeKmsKeyId = 'ad';
    $request->createModelQualityJobDefinitionRequest->jobResources->clusterConfig->volumeSizeInGB = 997963;
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification = new ModelQualityAppSpecification();
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->containerArguments = [
        'corporis',
    ];
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->containerEntrypoint = [
        'nihil',
        'mollitia',
        'voluptas',
    ];
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->environment = [
        'maiores' => 'reiciendis',
    ];
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->imageUri = 'dolores';
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->postAnalyticsProcessorSourceUri = 'id';
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->problemType = MonitoringProblemTypeEnum::BINARY_CLASSIFICATION;
    $request->createModelQualityJobDefinitionRequest->modelQualityAppSpecification->recordPreprocessorSourceUri = 'dolore';
    $request->createModelQualityJobDefinitionRequest->modelQualityBaselineConfig = new ModelQualityBaselineConfig();
    $request->createModelQualityJobDefinitionRequest->modelQualityBaselineConfig->baseliningJobName = 'dolorum';
    $request->createModelQualityJobDefinitionRequest->modelQualityBaselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->createModelQualityJobDefinitionRequest->modelQualityBaselineConfig->constraintsResource->s3Uri = 'nesciunt';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput = new ModelQualityJobInput();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput = new BatchTransformInput();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->dataCapturedDestinationS3Uri = 'quae';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat = new MonitoringDatasetFormat();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat->csv = new MonitoringCsvDatasetFormat();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat->csv->header = false;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat->json = new MonitoringJsonDatasetFormat();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat->json->line = false;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->datasetFormat->parquet = [
        'omnis' => 'quaerat',
        'molestiae' => 'ex',
        'ut' => 'culpa',
        'adipisci' => 'debitis',
    ];
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->endTimeOffset = 'laudantium';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->featuresAttribute = 'eum';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->inferenceAttribute = 'nemo';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->localPath = 'recusandae';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->probabilityAttribute = 'esse';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->probabilityThresholdAttribute = 5920.81;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::FULLY_REPLICATED;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->s3InputMode = ProcessingS3InputModeEnum::PIPE;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->batchTransformInput->startTimeOffset = 'reiciendis';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput = new EndpointInput();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->endTimeOffset = 'provident';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->endpointName = 'aspernatur';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->featuresAttribute = 'ullam';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->inferenceAttribute = 'quasi';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->localPath = 'animi';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->probabilityAttribute = 'nostrum';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->probabilityThresholdAttribute = 6523.09;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->s3DataDistributionType = ProcessingS3DataDistributionTypeEnum::SHARDED_BY_S3_KEY;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->s3InputMode = ProcessingS3InputModeEnum::FILE;
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->endpointInput->startTimeOffset = 'animi';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->groundTruthS3Input = new MonitoringGroundTruthS3Input();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobInput->groundTruthS3Input->s3Uri = 'ex';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobOutputConfig = new MonitoringOutputConfig();
    $request->createModelQualityJobDefinitionRequest->modelQualityJobOutputConfig->kmsKeyId = 'aliquid';
    $request->createModelQualityJobDefinitionRequest->modelQualityJobOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
    ];
    $request->createModelQualityJobDefinitionRequest->networkConfig = new MonitoringNetworkConfig();
    $request->createModelQualityJobDefinitionRequest->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createModelQualityJobDefinitionRequest->networkConfig->enableNetworkIsolation = false;
    $request->createModelQualityJobDefinitionRequest->networkConfig->vpcConfig = new VpcConfig();
    $request->createModelQualityJobDefinitionRequest->networkConfig->vpcConfig->securityGroupIds = [
        'doloribus',
        'ullam',
        'in',
        'nam',
    ];
    $request->createModelQualityJobDefinitionRequest->networkConfig->vpcConfig->subnets = [
        'officia',
        'laborum',
        'placeat',
        'modi',
    ];
    $request->createModelQualityJobDefinitionRequest->roleArn = 'voluptatibus';
    $request->createModelQualityJobDefinitionRequest->stoppingCondition = new MonitoringStoppingCondition();
    $request->createModelQualityJobDefinitionRequest->stoppingCondition->maxRuntimeInSeconds = 564064;
    $request->createModelQualityJobDefinitionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = CreateModelQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_CREATE_MODEL_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->createModelQualityJobDefinition($request);

    if ($response->createModelQualityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMonitoringSchedule

Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringScheduleConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStatisticsResource;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMonitoringScheduleRequest();
    $request->createMonitoringScheduleRequest = new CreateMonitoringScheduleRequest();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig = new MonitoringScheduleConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition = new MonitoringJobDefinition();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig = new MonitoringBaselineConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->baseliningJobName = 'fugit';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->constraintsResource->s3Uri = 'cumque';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->statisticsResource = new MonitoringStatisticsResource();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->statisticsResource->s3Uri = 'quae';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->environment = [
        'velit' => 'aspernatur',
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification = new MonitoringAppSpecification();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->containerArguments = [
        'eius',
        'rem',
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->containerEntrypoint = [
        'impedit',
        'eos',
        'sapiente',
        'eum',
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->imageUri = 'dicta';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->postAnalyticsProcessorSourceUri = 'minima';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->recordPreprocessorSourceUri = 'beatae';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringInputs = [
        new MonitoringInput(),
        new MonitoringInput(),
        new MonitoringInput(),
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig = new MonitoringOutputConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig->kmsKeyId = 'provident';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
        new MonitoringOutput(),
        new MonitoringOutput(),
        new MonitoringOutput(),
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources = new MonitoringResources();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig = new MonitoringClusterConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->instanceCount = 745398;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_G4DN8XLARGE;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->volumeKmsKeyId = 'illum';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->volumeSizeInGB = 52508;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig = new NetworkConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->enableNetworkIsolation = false;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig = new VpcConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig->securityGroupIds = [
        'perspiciatis',
        'maiores',
        'debitis',
        'aliquid',
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig->subnets = [
        'suscipit',
        'dolorem',
        'fugit',
        'cumque',
    ];
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->roleArn = 'fuga';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->stoppingCondition = new MonitoringStoppingCondition();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->stoppingCondition->maxRuntimeInSeconds = 189062;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinitionName = 'animi';
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->monitoringType = MonitoringTypeEnum::MODEL_EXPLAINABILITY;
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->scheduleConfig = new ScheduleConfig();
    $request->createMonitoringScheduleRequest->monitoringScheduleConfig->scheduleConfig->scheduleExpression = 'nulla';
    $request->createMonitoringScheduleRequest->monitoringScheduleName = 'consequatur';
    $request->createMonitoringScheduleRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_CREATE_MONITORING_SCHEDULE;

    $response = $sdk->sdk->createMonitoringSchedule($request);

    if ($response->createMonitoringScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotebookInstance

<p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceAcceleratorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectInternetAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMetadataServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotebookInstanceRequest();
    $request->createNotebookInstanceInput = new CreateNotebookInstanceInput();
    $request->createNotebookInstanceInput->acceleratorTypes = [
        NotebookInstanceAcceleratorTypeEnum::ML_EIA2_XLARGE,
    ];
    $request->createNotebookInstanceInput->additionalCodeRepositories = [
        'necessitatibus',
        'ipsa',
        'tempora',
        'nihil',
    ];
    $request->createNotebookInstanceInput->defaultCodeRepository = 'molestiae';
    $request->createNotebookInstanceInput->directInternetAccess = DirectInternetAccessEnum::ENABLED;
    $request->createNotebookInstanceInput->instanceMetadataServiceConfiguration = new InstanceMetadataServiceConfiguration();
    $request->createNotebookInstanceInput->instanceMetadataServiceConfiguration->minimumInstanceMetadataServiceVersion = 'iusto';
    $request->createNotebookInstanceInput->instanceType = InstanceTypeEnum::ML_C52XLARGE;
    $request->createNotebookInstanceInput->kmsKeyId = 'praesentium';
    $request->createNotebookInstanceInput->lifecycleConfigName = 'maiores';
    $request->createNotebookInstanceInput->notebookInstanceName = 'reiciendis';
    $request->createNotebookInstanceInput->platformIdentifier = 'vel';
    $request->createNotebookInstanceInput->roleArn = 'architecto';
    $request->createNotebookInstanceInput->rootAccess = RootAccessEnum::DISABLED;
    $request->createNotebookInstanceInput->securityGroupIds = [
        'dicta',
    ];
    $request->createNotebookInstanceInput->subnetId = 'odio';
    $request->createNotebookInstanceInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createNotebookInstanceInput->volumeSizeInGB = 458259;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = CreateNotebookInstanceXAmzTargetEnum::SAGE_MAKER_CREATE_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->createNotebookInstance($request);

    if ($response->createNotebookInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotebookInstanceLifecycleConfig

<p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookInstanceLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNotebookInstanceLifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceLifecycleHook;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookInstanceLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotebookInstanceLifecycleConfigRequest();
    $request->createNotebookInstanceLifecycleConfigInput = new CreateNotebookInstanceLifecycleConfigInput();
    $request->createNotebookInstanceLifecycleConfigInput->notebookInstanceLifecycleConfigName = 'fugiat';
    $request->createNotebookInstanceLifecycleConfigInput->onCreate = [
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
    ];
    $request->createNotebookInstanceLifecycleConfigInput->onStart = [
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = CreateNotebookInstanceLifecycleConfigXAmzTargetEnum::SAGE_MAKER_CREATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->createNotebookInstanceLifecycleConfig($request);

    if ($response->createNotebookInstanceLifecycleConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipeline

Creates a pipeline using a JSON pipeline definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDefinitionS3Location;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineRequest();
    $request->createPipelineRequest = new CreatePipelineRequest();
    $request->createPipelineRequest->clientRequestToken = 'id';
    $request->createPipelineRequest->parallelismConfiguration = new ParallelismConfiguration();
    $request->createPipelineRequest->parallelismConfiguration->maxParallelExecutionSteps = 70042;
    $request->createPipelineRequest->pipelineDefinition = 'error';
    $request->createPipelineRequest->pipelineDefinitionS3Location = new PipelineDefinitionS3Location();
    $request->createPipelineRequest->pipelineDefinitionS3Location->bucket = 'possimus';
    $request->createPipelineRequest->pipelineDefinitionS3Location->objectKey = 'voluptates';
    $request->createPipelineRequest->pipelineDefinitionS3Location->versionId = 'mollitia';
    $request->createPipelineRequest->pipelineDescription = 'laborum';
    $request->createPipelineRequest->pipelineDisplayName = 'libero';
    $request->createPipelineRequest->pipelineName = 'ad';
    $request->createPipelineRequest->roleArn = 'deleniti';
    $request->createPipelineRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = CreatePipelineXAmzTargetEnum::SAGE_MAKER_CREATE_PIPELINE;

    $response = $sdk->sdk->createPipeline($request);

    if ($response->createPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPresignedDomainUrl

<p>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. </p> <p>The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a> .</p> <note> <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedDomainUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePresignedDomainUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedDomainUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePresignedDomainUrlRequest();
    $request->createPresignedDomainUrlRequest = new CreatePresignedDomainUrlRequest();
    $request->createPresignedDomainUrlRequest->domainId = 'expedita';
    $request->createPresignedDomainUrlRequest->expiresInSeconds = 29950;
    $request->createPresignedDomainUrlRequest->sessionExpirationDurationInSeconds = 561577;
    $request->createPresignedDomainUrlRequest->spaceName = 'cum';
    $request->createPresignedDomainUrlRequest->userProfileName = 'aliquid';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = CreatePresignedDomainUrlXAmzTargetEnum::SAGE_MAKER_CREATE_PRESIGNED_DOMAIN_URL;

    $response = $sdk->sdk->createPresignedDomainUrl($request);

    if ($response->createPresignedDomainUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPresignedNotebookInstanceUrl

<p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker console, when you choose <code>Open</code> next to a notebook instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedNotebookInstanceUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePresignedNotebookInstanceUrlInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedNotebookInstanceUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePresignedNotebookInstanceUrlRequest();
    $request->createPresignedNotebookInstanceUrlInput = new CreatePresignedNotebookInstanceUrlInput();
    $request->createPresignedNotebookInstanceUrlInput->notebookInstanceName = 'voluptatem';
    $request->createPresignedNotebookInstanceUrlInput->sessionExpirationDurationInSeconds = 959143;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = CreatePresignedNotebookInstanceUrlXAmzTargetEnum::SAGE_MAKER_CREATE_PRESIGNED_NOTEBOOK_INSTANCE_URL;

    $response = $sdk->sdk->createPresignedNotebookInstanceUrl($request);

    if ($response->createPresignedNotebookInstanceUrlOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProcessingJob

Creates a processing job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInput;
use \OpenAPI\OpenAPI\Models\Shared\DatasetDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AthenaDatasetDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AthenaResultCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AthenaResultFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDatasetDefinition;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftResultCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftResultFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3Input;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOutput;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingFeatureStoreOutput;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingResources;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProcessingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProcessingJobRequest();
    $request->createProcessingJobRequest = new CreateProcessingJobRequest();
    $request->createProcessingJobRequest->appSpecification = new AppSpecification();
    $request->createProcessingJobRequest->appSpecification->containerArguments = [
        'earum',
        'ex',
        'sapiente',
    ];
    $request->createProcessingJobRequest->appSpecification->containerEntrypoint = [
        'minus',
        'nemo',
        'asperiores',
    ];
    $request->createProcessingJobRequest->appSpecification->imageUri = 'ratione';
    $request->createProcessingJobRequest->environment = [
        'perferendis' => 'illum',
        'totam' => 'impedit',
    ];
    $request->createProcessingJobRequest->experimentConfig = new ExperimentConfig();
    $request->createProcessingJobRequest->experimentConfig->experimentName = 'quibusdam';
    $request->createProcessingJobRequest->experimentConfig->runName = 'nam';
    $request->createProcessingJobRequest->experimentConfig->trialComponentDisplayName = 'ipsam';
    $request->createProcessingJobRequest->experimentConfig->trialName = 'culpa';
    $request->createProcessingJobRequest->networkConfig = new NetworkConfig();
    $request->createProcessingJobRequest->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->createProcessingJobRequest->networkConfig->enableNetworkIsolation = false;
    $request->createProcessingJobRequest->networkConfig->vpcConfig = new VpcConfig();
    $request->createProcessingJobRequest->networkConfig->vpcConfig->securityGroupIds = [
        'aliquam',
    ];
    $request->createProcessingJobRequest->networkConfig->vpcConfig->subnets = [
        'deleniti',
    ];
    $request->createProcessingJobRequest->processingInputs = [
        new ProcessingInput(),
    ];
    $request->createProcessingJobRequest->processingJobName = 'tempora';
    $request->createProcessingJobRequest->processingOutputConfig = new ProcessingOutputConfig();
    $request->createProcessingJobRequest->processingOutputConfig->kmsKeyId = 'dolor';
    $request->createProcessingJobRequest->processingOutputConfig->outputs = [
        new ProcessingOutput(),
    ];
    $request->createProcessingJobRequest->processingResources = new ProcessingResources();
    $request->createProcessingJobRequest->processingResources->clusterConfig = new ProcessingClusterConfig();
    $request->createProcessingJobRequest->processingResources->clusterConfig->instanceCount = 100014;
    $request->createProcessingJobRequest->processingResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_T3_LARGE;
    $request->createProcessingJobRequest->processingResources->clusterConfig->volumeKmsKeyId = 'modi';
    $request->createProcessingJobRequest->processingResources->clusterConfig->volumeSizeInGB = 144286;
    $request->createProcessingJobRequest->roleArn = 'ab';
    $request->createProcessingJobRequest->stoppingCondition = new ProcessingStoppingCondition();
    $request->createProcessingJobRequest->stoppingCondition->maxRuntimeInSeconds = 513760;
    $request->createProcessingJobRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = CreateProcessingJobXAmzTargetEnum::SAGE_MAKER_CREATE_PROCESSING_JOB;

    $response = $sdk->sdk->createProcessingJob($request);

    if ($response->createProcessingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCatalogProvisioningDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningParameter;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->createProjectInput = new CreateProjectInput();
    $request->createProjectInput->projectDescription = 'impedit';
    $request->createProjectInput->projectName = 'officiis';
    $request->createProjectInput->serviceCatalogProvisioningDetails = new ServiceCatalogProvisioningDetails();
    $request->createProjectInput->serviceCatalogProvisioningDetails->pathId = 'esse';
    $request->createProjectInput->serviceCatalogProvisioningDetails->productId = 'necessitatibus';
    $request->createProjectInput->serviceCatalogProvisioningDetails->provisioningArtifactId = 'sed';
    $request->createProjectInput->serviceCatalogProvisioningDetails->provisioningParameters = [
        new ProvisioningParameter(),
        new ProvisioningParameter(),
    ];
    $request->createProjectInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = CreateProjectXAmzTargetEnum::SAGE_MAKER_CREATE_PROJECT;

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSpace

Creates a space used for real time collaboration in a Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpaceSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSpaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSpaceRequest();
    $request->createSpaceRequest = new CreateSpaceRequest();
    $request->createSpaceRequest->domainId = 'porro';
    $request->createSpaceRequest->spaceName = 'autem';
    $request->createSpaceRequest->spaceSettings = new SpaceSettings();
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M5D24XLARGE;
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'recusandae';
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'consequuntur';
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'voluptatem';
    $request->createSpaceRequest->spaceSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'necessitatibus',
        'quasi',
    ];
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
    ];
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G52XLARGE;
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'vero';
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'est';
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'harum';
    $request->createSpaceRequest->spaceSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'doloribus',
    ];
    $request->createSpaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = CreateSpaceXAmzTargetEnum::SAGE_MAKER_CREATE_SPACE;

    $response = $sdk->sdk->createSpace($request);

    if ($response->createSpaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStudioLifecycleConfig

Creates a new Studio Lifecycle Configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\StudioLifecycleConfigAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStudioLifecycleConfigRequest();
    $request->createStudioLifecycleConfigRequest = new CreateStudioLifecycleConfigRequest();
    $request->createStudioLifecycleConfigRequest->studioLifecycleConfigAppType = StudioLifecycleConfigAppTypeEnum::JUPYTER_SERVER;
    $request->createStudioLifecycleConfigRequest->studioLifecycleConfigContent = 'nemo';
    $request->createStudioLifecycleConfigRequest->studioLifecycleConfigName = 'quos';
    $request->createStudioLifecycleConfigRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateStudioLifecycleConfigXAmzTargetEnum::SAGE_MAKER_CREATE_STUDIO_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->createStudioLifecycleConfig($request);

    if ($response->createStudioLifecycleConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrainingJob

<p>Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important> </li> <li> <p> <code>InputDataConfig</code> - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. </p> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot training job has to complete. </p> </li> <li> <p> <code>Environment</code> - The environment variables to set in the Docker container.</p> </li> <li> <p> <code>RetryStrategy</code> - The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p> </li> </ul> <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TrainingImageConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrainingRepositoryAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingRepositoryAuthConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\DebugHookConfig;
use \OpenAPI\OpenAPI\Models\Shared\CollectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DebugRuleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemDataSource;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataDistributionEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecordWrapperEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShuffleConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProfilerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProfilerRuleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroup;
use \OpenAPI\OpenAPI\Models\Shared\TrainingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\StoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TensorBoardOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrainingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrainingJobRequest();
    $request->createTrainingJobRequest = new CreateTrainingJobRequest();
    $request->createTrainingJobRequest->algorithmSpecification = new AlgorithmSpecification();
    $request->createTrainingJobRequest->algorithmSpecification->algorithmName = 'rem';
    $request->createTrainingJobRequest->algorithmSpecification->containerArguments = [
        'dicta',
        'nisi',
        'consequuntur',
        'consectetur',
    ];
    $request->createTrainingJobRequest->algorithmSpecification->containerEntrypoint = [
        'cupiditate',
    ];
    $request->createTrainingJobRequest->algorithmSpecification->enableSageMakerMetricsTimeSeries = false;
    $request->createTrainingJobRequest->algorithmSpecification->metricDefinitions = [
        new MetricDefinition(),
        new MetricDefinition(),
        new MetricDefinition(),
        new MetricDefinition(),
    ];
    $request->createTrainingJobRequest->algorithmSpecification->trainingImage = 'soluta';
    $request->createTrainingJobRequest->algorithmSpecification->trainingImageConfig = new TrainingImageConfig();
    $request->createTrainingJobRequest->algorithmSpecification->trainingImageConfig->trainingRepositoryAccessMode = TrainingRepositoryAccessModeEnum::PLATFORM;
    $request->createTrainingJobRequest->algorithmSpecification->trainingImageConfig->trainingRepositoryAuthConfig = new TrainingRepositoryAuthConfig();
    $request->createTrainingJobRequest->algorithmSpecification->trainingImageConfig->trainingRepositoryAuthConfig->trainingRepositoryCredentialsProviderArn = 'omnis';
    $request->createTrainingJobRequest->algorithmSpecification->trainingInputMode = TrainingInputModeEnum::PIPE;
    $request->createTrainingJobRequest->checkpointConfig = new CheckpointConfig();
    $request->createTrainingJobRequest->checkpointConfig->localPath = 'occaecati';
    $request->createTrainingJobRequest->checkpointConfig->s3Uri = 'iste';
    $request->createTrainingJobRequest->debugHookConfig = new DebugHookConfig();
    $request->createTrainingJobRequest->debugHookConfig->collectionConfigurations = [
        new CollectionConfiguration(),
    ];
    $request->createTrainingJobRequest->debugHookConfig->hookParameters = [
        'fuga' => 'accusamus',
    ];
    $request->createTrainingJobRequest->debugHookConfig->localPath = 'voluptatibus';
    $request->createTrainingJobRequest->debugHookConfig->s3OutputPath = 'distinctio';
    $request->createTrainingJobRequest->debugRuleConfigurations = [
        new DebugRuleConfiguration(),
        new DebugRuleConfiguration(),
        new DebugRuleConfiguration(),
    ];
    $request->createTrainingJobRequest->enableInterContainerTrafficEncryption = false;
    $request->createTrainingJobRequest->enableManagedSpotTraining = false;
    $request->createTrainingJobRequest->enableNetworkIsolation = false;
    $request->createTrainingJobRequest->environment = [
        'minima' => 'praesentium',
        'maxime' => 'magnam',
        'temporibus' => 'quos',
        'commodi' => 'itaque',
    ];
    $request->createTrainingJobRequest->experimentConfig = new ExperimentConfig();
    $request->createTrainingJobRequest->experimentConfig->experimentName = 'commodi';
    $request->createTrainingJobRequest->experimentConfig->runName = 'totam';
    $request->createTrainingJobRequest->experimentConfig->trialComponentDisplayName = 'earum';
    $request->createTrainingJobRequest->experimentConfig->trialName = 'modi';
    $request->createTrainingJobRequest->hyperParameters = [
        'vero' => 'voluptatem',
        'ipsam' => 'vel',
        'alias' => 'quasi',
    ];
    $request->createTrainingJobRequest->inputDataConfig = [
        new Channel(),
    ];
    $request->createTrainingJobRequest->outputDataConfig = new OutputDataConfig();
    $request->createTrainingJobRequest->outputDataConfig->kmsKeyId = 'maiores';
    $request->createTrainingJobRequest->outputDataConfig->s3OutputPath = 'enim';
    $request->createTrainingJobRequest->profilerConfig = new ProfilerConfig();
    $request->createTrainingJobRequest->profilerConfig->disableProfiler = false;
    $request->createTrainingJobRequest->profilerConfig->profilingIntervalInMilliseconds = 575213;
    $request->createTrainingJobRequest->profilerConfig->profilingParameters = [
        'deserunt' => 'esse',
        'nemo' => 'reprehenderit',
        'est' => 'quis',
        'sint' => 'accusamus',
    ];
    $request->createTrainingJobRequest->profilerConfig->s3OutputPath = 'impedit';
    $request->createTrainingJobRequest->profilerRuleConfigurations = [
        new ProfilerRuleConfiguration(),
        new ProfilerRuleConfiguration(),
        new ProfilerRuleConfiguration(),
        new ProfilerRuleConfiguration(),
    ];
    $request->createTrainingJobRequest->resourceConfig = new ResourceConfig();
    $request->createTrainingJobRequest->resourceConfig->instanceCount = 900103;
    $request->createTrainingJobRequest->resourceConfig->instanceGroups = [
        new InstanceGroup(),
        new InstanceGroup(),
        new InstanceGroup(),
        new InstanceGroup(),
    ];
    $request->createTrainingJobRequest->resourceConfig->instanceType = TrainingInstanceTypeEnum::ML_C44XLARGE;
    $request->createTrainingJobRequest->resourceConfig->keepAlivePeriodInSeconds = 376741;
    $request->createTrainingJobRequest->resourceConfig->volumeKmsKeyId = 'debitis';
    $request->createTrainingJobRequest->resourceConfig->volumeSizeInGB = 966148;
    $request->createTrainingJobRequest->retryStrategy = new RetryStrategy();
    $request->createTrainingJobRequest->retryStrategy->maximumRetryAttempts = 65082;
    $request->createTrainingJobRequest->roleArn = 'minus';
    $request->createTrainingJobRequest->stoppingCondition = new StoppingCondition();
    $request->createTrainingJobRequest->stoppingCondition->maxRuntimeInSeconds = 685478;
    $request->createTrainingJobRequest->stoppingCondition->maxWaitTimeInSeconds = 675689;
    $request->createTrainingJobRequest->tags = [
        new Tag(),
    ];
    $request->createTrainingJobRequest->tensorBoardOutputConfig = new TensorBoardOutputConfig();
    $request->createTrainingJobRequest->tensorBoardOutputConfig->localPath = 'velit';
    $request->createTrainingJobRequest->tensorBoardOutputConfig->s3OutputPath = 'atque';
    $request->createTrainingJobRequest->trainingJobName = 'ipsum';
    $request->createTrainingJobRequest->vpcConfig = new VpcConfig();
    $request->createTrainingJobRequest->vpcConfig->securityGroupIds = [
        'magni',
        'soluta',
        'repudiandae',
        'nam',
    ];
    $request->createTrainingJobRequest->vpcConfig->subnets = [
        'iusto',
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateTrainingJobXAmzTargetEnum::SAGE_MAKER_CREATE_TRAINING_JOB;

    $response = $sdk->sdk->createTrainingJob($request);

    if ($response->createTrainingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTransformJob

<p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDataCaptureConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataProcessing;
use \OpenAPI\OpenAPI\Models\Shared\JoinSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelClientConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TransformInput;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformDataSource;
use \OpenAPI\OpenAPI\Models\Shared\TransformS3DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformOutput;
use \OpenAPI\OpenAPI\Models\Shared\AssemblyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformResources;
use \OpenAPI\OpenAPI\Models\Shared\TransformInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransformJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTransformJobRequest();
    $request->createTransformJobRequest = new CreateTransformJobRequest();
    $request->createTransformJobRequest->batchStrategy = BatchStrategyEnum::MULTI_RECORD;
    $request->createTransformJobRequest->dataCaptureConfig = new BatchDataCaptureConfig();
    $request->createTransformJobRequest->dataCaptureConfig->destinationS3Uri = 'voluptatibus';
    $request->createTransformJobRequest->dataCaptureConfig->generateInferenceId = false;
    $request->createTransformJobRequest->dataCaptureConfig->kmsKeyId = 'vel';
    $request->createTransformJobRequest->dataProcessing = new DataProcessing();
    $request->createTransformJobRequest->dataProcessing->inputFilter = 'magnam';
    $request->createTransformJobRequest->dataProcessing->joinSource = JoinSourceEnum::NONE;
    $request->createTransformJobRequest->dataProcessing->outputFilter = 'inventore';
    $request->createTransformJobRequest->environment = [
        'libero' => 'architecto',
        'voluptatibus' => 'quia',
        'porro' => 'aliquam',
        'velit' => 'illo',
    ];
    $request->createTransformJobRequest->experimentConfig = new ExperimentConfig();
    $request->createTransformJobRequest->experimentConfig->experimentName = 'accusantium';
    $request->createTransformJobRequest->experimentConfig->runName = 'vel';
    $request->createTransformJobRequest->experimentConfig->trialComponentDisplayName = 'ea';
    $request->createTransformJobRequest->experimentConfig->trialName = 'beatae';
    $request->createTransformJobRequest->maxConcurrentTransforms = 877751;
    $request->createTransformJobRequest->maxPayloadInMB = 568218;
    $request->createTransformJobRequest->modelClientConfig = new ModelClientConfig();
    $request->createTransformJobRequest->modelClientConfig->invocationsMaxRetries = 431994;
    $request->createTransformJobRequest->modelClientConfig->invocationsTimeoutInSeconds = 246557;
    $request->createTransformJobRequest->modelName = 'ut';
    $request->createTransformJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createTransformJobRequest->transformInput = new TransformInput();
    $request->createTransformJobRequest->transformInput->compressionType = CompressionTypeEnum::GZIP;
    $request->createTransformJobRequest->transformInput->contentType = 'dicta';
    $request->createTransformJobRequest->transformInput->dataSource = new TransformDataSource();
    $request->createTransformJobRequest->transformInput->dataSource->s3DataSource = new TransformS3DataSource();
    $request->createTransformJobRequest->transformInput->dataSource->s3DataSource->s3DataType = S3DataTypeEnum::AUGMENTED_MANIFEST_FILE;
    $request->createTransformJobRequest->transformInput->dataSource->s3DataSource->s3Uri = 'voluptatibus';
    $request->createTransformJobRequest->transformInput->splitType = SplitTypeEnum::RECORD_IO;
    $request->createTransformJobRequest->transformJobName = 'itaque';
    $request->createTransformJobRequest->transformOutput = new TransformOutput();
    $request->createTransformJobRequest->transformOutput->accept = 'alias';
    $request->createTransformJobRequest->transformOutput->assembleWith = AssemblyTypeEnum::NONE;
    $request->createTransformJobRequest->transformOutput->kmsKeyId = 'itaque';
    $request->createTransformJobRequest->transformOutput->s3OutputPath = 'velit';
    $request->createTransformJobRequest->transformResources = new TransformResources();
    $request->createTransformJobRequest->transformResources->instanceCount = 673838;
    $request->createTransformJobRequest->transformResources->instanceType = TransformInstanceTypeEnum::ML_C48XLARGE;
    $request->createTransformJobRequest->transformResources->volumeKmsKeyId = 'dolor';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = CreateTransformJobXAmzTargetEnum::SAGE_MAKER_CREATE_TRANSFORM_JOB;

    $response = $sdk->sdk->createTransformJob($request);

    if ($response->createTransformJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrial

<p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single SageMaker <i>experiment</i>.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To view a trial's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API. To create a trial component, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProperties;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrialXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrialRequest();
    $request->createTrialRequest = new CreateTrialRequest();
    $request->createTrialRequest->displayName = 'quidem';
    $request->createTrialRequest->experimentName = 'voluptas';
    $request->createTrialRequest->metadataProperties = new MetadataProperties();
    $request->createTrialRequest->metadataProperties->commitId = 'facilis';
    $request->createTrialRequest->metadataProperties->generatedBy = 'placeat';
    $request->createTrialRequest->metadataProperties->projectId = 'perspiciatis';
    $request->createTrialRequest->metadataProperties->repository = 'expedita';
    $request->createTrialRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createTrialRequest->trialName = 'a';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateTrialXAmzTargetEnum::SAGE_MAKER_CREATE_TRIAL;

    $response = $sdk->sdk->createTrial($request);

    if ($response->createTrialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrialComponent

<p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentArtifact;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProperties;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentStatus;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentPrimaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrialComponentRequest();
    $request->createTrialComponentRequest = new CreateTrialComponentRequest();
    $request->createTrialComponentRequest->displayName = 'corporis';
    $request->createTrialComponentRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T04:25:17.046Z');
    $request->createTrialComponentRequest->inputArtifacts = [
        'labore' => new TrialComponentArtifact(),
        'veritatis' => new TrialComponentArtifact(),
    ];
    $request->createTrialComponentRequest->metadataProperties = new MetadataProperties();
    $request->createTrialComponentRequest->metadataProperties->commitId = 'vero';
    $request->createTrialComponentRequest->metadataProperties->generatedBy = 'consectetur';
    $request->createTrialComponentRequest->metadataProperties->projectId = 'vitae';
    $request->createTrialComponentRequest->metadataProperties->repository = 'inventore';
    $request->createTrialComponentRequest->outputArtifacts = [
        'ad' => new TrialComponentArtifact(),
    ];
    $request->createTrialComponentRequest->parameters = [
        'iste' => new TrialComponentParameterValue(),
    ];
    $request->createTrialComponentRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T19:35:40.341Z');
    $request->createTrialComponentRequest->status = new TrialComponentStatus();
    $request->createTrialComponentRequest->status->message = 'soluta';
    $request->createTrialComponentRequest->status->primaryStatus = TrialComponentPrimaryStatusEnum::STOPPING;
    $request->createTrialComponentRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createTrialComponentRequest->trialComponentName = 'dolorum';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = CreateTrialComponentXAmzTargetEnum::SAGE_MAKER_CREATE_TRIAL_COMPONENT;

    $response = $sdk->sdk->createTrialComponent($request);

    if ($response->createTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserProfile

Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\CanvasAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\ModelRegisterSettings;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesForecastingSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Shared\RSessionAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAccessStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProUserGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharingSettings;
use \OpenAPI\OpenAPI\Models\Shared\NotebookOutputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TensorBoardAppSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserProfileRequest();
    $request->createUserProfileRequest = new CreateUserProfileRequest();
    $request->createUserProfileRequest->domainId = 'modi';
    $request->createUserProfileRequest->singleSignOnUserIdentifier = 'neque';
    $request->createUserProfileRequest->singleSignOnUserValue = 'exercitationem';
    $request->createUserProfileRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createUserProfileRequest->userProfileName = 'et';
    $request->createUserProfileRequest->userSettings = new UserSettings();
    $request->createUserProfileRequest->userSettings->canvasAppSettings = new CanvasAppSettings();
    $request->createUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings = new ModelRegisterSettings();
    $request->createUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings->crossAccountModelRegisterRoleArn = 'ipsum';
    $request->createUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings->status = FeatureStatusEnum::DISABLED;
    $request->createUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings = new TimeSeriesForecastingSettings();
    $request->createUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings->amazonForecastRoleArn = 'nulla';
    $request->createUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings->status = FeatureStatusEnum::DISABLED;
    $request->createUserProfileRequest->userSettings->executionRole = 'maxime';
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
    ];
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M52XLARGE;
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'nostrum';
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'omnis';
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'libero';
    $request->createUserProfileRequest->userSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'id',
    ];
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G5_XLARGE;
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'officia';
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'quos';
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'placeat';
    $request->createUserProfileRequest->userSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'iusto',
    ];
    $request->createUserProfileRequest->userSettings->rSessionAppSettings = new RSessionAppSettings();
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->customImages = [
        new CustomImage(),
    ];
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G516XLARGE;
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->lifecycleConfigArn = 'inventore';
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageArn = 'aperiam';
    $request->createUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'totam';
    $request->createUserProfileRequest->userSettings->rStudioServerProAppSettings = new RStudioServerProAppSettings();
    $request->createUserProfileRequest->userSettings->rStudioServerProAppSettings->accessStatus = RStudioServerProAccessStatusEnum::ENABLED;
    $request->createUserProfileRequest->userSettings->rStudioServerProAppSettings->userGroup = RStudioServerProUserGroupEnum::R_STUDIO_USER;
    $request->createUserProfileRequest->userSettings->securityGroups = [
        'voluptatem',
        'autem',
        'esse',
    ];
    $request->createUserProfileRequest->userSettings->sharingSettings = new SharingSettings();
    $request->createUserProfileRequest->userSettings->sharingSettings->notebookOutputOption = NotebookOutputOptionEnum::ALLOWED;
    $request->createUserProfileRequest->userSettings->sharingSettings->s3KmsKeyId = 'assumenda';
    $request->createUserProfileRequest->userSettings->sharingSettings->s3OutputPath = 'beatae';
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings = new TensorBoardAppSettings();
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G4DN8XLARGE;
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->lifecycleConfigArn = 'facere';
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageArn = 'corrupti';
    $request->createUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'molestiae';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = CreateUserProfileXAmzTargetEnum::SAGE_MAKER_CREATE_USER_PROFILE;

    $response = $sdk->sdk->createUserProfile($request);

    if ($response->createUserProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkforce

<p>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API operation to delete the existing workforce and then use <code>CreateWorkforce</code> to create a new workforce.</p> <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in <code>CognitoConfig</code>. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html"> Create a Private Workforce (Amazon Cognito)</a>.</p> <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i> because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html"> Create a Private Workforce (OIDC IdP)</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CognitoConfig;
use \OpenAPI\OpenAPI\Models\Shared\OidcConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\WorkforceVpcConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkforceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkforceRequest();
    $request->createWorkforceRequest = new CreateWorkforceRequest();
    $request->createWorkforceRequest->cognitoConfig = new CognitoConfig();
    $request->createWorkforceRequest->cognitoConfig->clientId = 'ipsam';
    $request->createWorkforceRequest->cognitoConfig->userPool = 'rerum';
    $request->createWorkforceRequest->oidcConfig = new OidcConfig();
    $request->createWorkforceRequest->oidcConfig->authorizationEndpoint = 'laudantium';
    $request->createWorkforceRequest->oidcConfig->clientId = 'corporis';
    $request->createWorkforceRequest->oidcConfig->clientSecret = 'officiis';
    $request->createWorkforceRequest->oidcConfig->issuer = 'voluptatibus';
    $request->createWorkforceRequest->oidcConfig->jwksUri = 'cum';
    $request->createWorkforceRequest->oidcConfig->logoutEndpoint = 'at';
    $request->createWorkforceRequest->oidcConfig->tokenEndpoint = 'alias';
    $request->createWorkforceRequest->oidcConfig->userInfoEndpoint = 'quia';
    $request->createWorkforceRequest->sourceIpConfig = new SourceIpConfig();
    $request->createWorkforceRequest->sourceIpConfig->cidrs = [
        'fuga',
        'repudiandae',
        'accusantium',
    ];
    $request->createWorkforceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createWorkforceRequest->workforceName = 'officiis';
    $request->createWorkforceRequest->workforceVpcConfig = new WorkforceVpcConfigRequest();
    $request->createWorkforceRequest->workforceVpcConfig->securityGroupIds = [
        'quibusdam',
    ];
    $request->createWorkforceRequest->workforceVpcConfig->subnets = [
        'praesentium',
        'odit',
    ];
    $request->createWorkforceRequest->workforceVpcConfig->vpcId = 'explicabo';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = CreateWorkforceXAmzTargetEnum::SAGE_MAKER_CREATE_WORKFORCE;

    $response = $sdk->sdk->createWorkforce($request);

    if ($response->createWorkforceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkteam

<p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\CognitoMemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\OidcMemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkteamRequest();
    $request->createWorkteamRequest = new CreateWorkteamRequest();
    $request->createWorkteamRequest->description = 'quidem';
    $request->createWorkteamRequest->memberDefinitions = [
        new MemberDefinition(),
        new MemberDefinition(),
    ];
    $request->createWorkteamRequest->notificationConfiguration = new NotificationConfiguration();
    $request->createWorkteamRequest->notificationConfiguration->notificationTopicArn = 'beatae';
    $request->createWorkteamRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createWorkteamRequest->workforceName = 'molestiae';
    $request->createWorkteamRequest->workteamName = 'delectus';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CreateWorkteamXAmzTargetEnum::SAGE_MAKER_CREATE_WORKTEAM;

    $response = $sdk->sdk->createWorkteam($request);

    if ($response->createWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAction

Deletes an action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActionRequest();
    $request->deleteActionRequest = new DeleteActionRequest();
    $request->deleteActionRequest->actionName = 'dignissimos';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DeleteActionXAmzTargetEnum::SAGE_MAKER_DELETE_ACTION;

    $response = $sdk->sdk->deleteAction($request);

    if ($response->deleteActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlgorithm

Removes the specified algorithm from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAlgorithmInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlgorithmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlgorithmRequest();
    $request->deleteAlgorithmInput = new DeleteAlgorithmInput();
    $request->deleteAlgorithmInput->algorithmName = 'minima';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteAlgorithmXAmzTargetEnum::SAGE_MAKER_DELETE_ALGORITHM;

    $response = $sdk->sdk->deleteAlgorithm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

Used to stop and delete an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->deleteAppRequest = new DeleteAppRequest();
    $request->deleteAppRequest->appName = 'corporis';
    $request->deleteAppRequest->appType = AppTypeEnum::KERNEL_GATEWAY;
    $request->deleteAppRequest->domainId = 'voluptates';
    $request->deleteAppRequest->spaceName = 'maiores';
    $request->deleteAppRequest->userProfileName = 'tempore';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = DeleteAppXAmzTargetEnum::SAGE_MAKER_DELETE_APP;

    $response = $sdk->sdk->deleteApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppImageConfig

Deletes an AppImageConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppImageConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppImageConfigRequest();
    $request->deleteAppImageConfigRequest = new DeleteAppImageConfigRequest();
    $request->deleteAppImageConfigRequest->appImageConfigName = 'quo';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DeleteAppImageConfigXAmzTargetEnum::SAGE_MAKER_DELETE_APP_IMAGE_CONFIG;

    $response = $sdk->sdk->deleteAppImageConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifact

Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSource;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSourceType;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactSourceIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactRequest();
    $request->deleteArtifactRequest = new DeleteArtifactRequest();
    $request->deleteArtifactRequest->artifactArn = 'tempore';
    $request->deleteArtifactRequest->source = new ArtifactSource();
    $request->deleteArtifactRequest->source->sourceTypes = [
        new ArtifactSourceType(),
        new ArtifactSourceType(),
        new ArtifactSourceType(),
        new ArtifactSourceType(),
    ];
    $request->deleteArtifactRequest->source->sourceUri = 'odit';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = DeleteArtifactXAmzTargetEnum::SAGE_MAKER_DELETE_ARTIFACT;

    $response = $sdk->sdk->deleteArtifact($request);

    if ($response->deleteArtifactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssociation

Deletes an association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssociationRequest();
    $request->deleteAssociationRequest = new DeleteAssociationRequest();
    $request->deleteAssociationRequest->destinationArn = 'in';
    $request->deleteAssociationRequest->sourceArn = 'ducimus';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteAssociationXAmzTargetEnum::SAGE_MAKER_DELETE_ASSOCIATION;

    $response = $sdk->sdk->deleteAssociation($request);

    if ($response->deleteAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCodeRepository

Deletes the specified Git repository from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCodeRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCodeRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCodeRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCodeRepositoryRequest();
    $request->deleteCodeRepositoryInput = new DeleteCodeRepositoryInput();
    $request->deleteCodeRepositoryInput->codeRepositoryName = 'itaque';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = DeleteCodeRepositoryXAmzTargetEnum::SAGE_MAKER_DELETE_CODE_REPOSITORY;

    $response = $sdk->sdk->deleteCodeRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContext

Deletes an context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContextRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContextRequest();
    $request->deleteContextRequest = new DeleteContextRequest();
    $request->deleteContextRequest->contextName = 'quidem';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteContextXAmzTargetEnum::SAGE_MAKER_DELETE_CONTEXT;

    $response = $sdk->sdk->deleteContext($request);

    if ($response->deleteContextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataQualityJobDefinition

Deletes a data quality monitoring job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataQualityJobDefinitionRequest();
    $request->deleteDataQualityJobDefinitionRequest = new DeleteDataQualityJobDefinitionRequest();
    $request->deleteDataQualityJobDefinitionRequest->jobDefinitionName = 'sequi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DeleteDataQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DELETE_DATA_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->deleteDataQualityJobDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceFleet

Deletes a fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceFleetRequest();
    $request->deleteDeviceFleetRequest = new DeleteDeviceFleetRequest();
    $request->deleteDeviceFleetRequest->deviceFleetName = 'nam';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteDeviceFleetXAmzTargetEnum::SAGE_MAKER_DELETE_DEVICE_FLEET;

    $response = $sdk->sdk->deleteDeviceFleet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RetentionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->deleteDomainRequest = new DeleteDomainRequest();
    $request->deleteDomainRequest->domainId = 'veritatis';
    $request->deleteDomainRequest->retentionPolicy = new RetentionPolicy();
    $request->deleteDomainRequest->retentionPolicy->homeEfsFileSystem = RetentionTypeEnum::RETAIN;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = DeleteDomainXAmzTargetEnum::SAGE_MAKER_DELETE_DOMAIN;

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEdgeDeploymentPlan

Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEdgeDeploymentPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEdgeDeploymentPlanRequest();
    $request->deleteEdgeDeploymentPlanRequest = new DeleteEdgeDeploymentPlanRequest();
    $request->deleteEdgeDeploymentPlanRequest->edgeDeploymentPlanName = 'nostrum';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DeleteEdgeDeploymentPlanXAmzTargetEnum::SAGE_MAKER_DELETE_EDGE_DEPLOYMENT_PLAN;

    $response = $sdk->sdk->deleteEdgeDeploymentPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEdgeDeploymentStage

Delete a stage in an edge deployment plan if (and only if) the stage is inactive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEdgeDeploymentStageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEdgeDeploymentStageRequest();
    $request->deleteEdgeDeploymentStageRequest = new DeleteEdgeDeploymentStageRequest();
    $request->deleteEdgeDeploymentStageRequest->edgeDeploymentPlanName = 'totam';
    $request->deleteEdgeDeploymentStageRequest->stageName = 'molestias';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = DeleteEdgeDeploymentStageXAmzTargetEnum::SAGE_MAKER_DELETE_EDGE_DEPLOYMENT_STAGE;

    $response = $sdk->sdk->deleteEdgeDeploymentStage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpoint

<p>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p> <p>When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html#sagemaker-CreateModel-request-ExecutionRoleArn">ExecutionRoleArn</a> </code>, otherwise SageMaker cannot delete these resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointRequest();
    $request->deleteEndpointInput = new DeleteEndpointInput();
    $request->deleteEndpointInput->endpointName = 'tempore';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteEndpointXAmzTargetEnum::SAGE_MAKER_DELETE_ENDPOINT;

    $response = $sdk->sdk->deleteEndpoint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpointConfig

<p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointConfigRequest();
    $request->deleteEndpointConfigInput = new DeleteEndpointConfigInput();
    $request->deleteEndpointConfigInput->endpointConfigName = 'adipisci';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DeleteEndpointConfigXAmzTargetEnum::SAGE_MAKER_DELETE_ENDPOINT_CONFIG;

    $response = $sdk->sdk->deleteEndpointConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExperiment

Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API to get a list of the trials associated with the experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExperimentRequest();
    $request->deleteExperimentRequest = new DeleteExperimentRequest();
    $request->deleteExperimentRequest->experimentName = 'cupiditate';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DeleteExperimentXAmzTargetEnum::SAGE_MAKER_DELETE_EXPERIMENT;

    $response = $sdk->sdk->deleteExperiment($request);

    if ($response->deleteExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFeatureGroup

<p>Delete the <code>FeatureGroup</code> and any data that was written to the <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p> <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your <code>OfflineStore</code> are not deleted. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFeatureGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFeatureGroupRequest();
    $request->deleteFeatureGroupRequest = new DeleteFeatureGroupRequest();
    $request->deleteFeatureGroupRequest->featureGroupName = 'asperiores';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DeleteFeatureGroupXAmzTargetEnum::SAGE_MAKER_DELETE_FEATURE_GROUP;

    $response = $sdk->sdk->deleteFeatureGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFlowDefinition

Deletes the specified flow definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlowDefinitionRequest();
    $request->deleteFlowDefinitionRequest = new DeleteFlowDefinitionRequest();
    $request->deleteFlowDefinitionRequest->flowDefinitionName = 'exercitationem';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DeleteFlowDefinitionXAmzTargetEnum::SAGE_MAKER_DELETE_FLOW_DEFINITION;

    $response = $sdk->sdk->deleteFlowDefinition($request);

    if ($response->deleteFlowDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHub

<p>Delete a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHubRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHubXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHubRequest();
    $request->deleteHubRequest = new DeleteHubRequest();
    $request->deleteHubRequest->hubName = 'blanditiis';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DeleteHubXAmzTargetEnum::SAGE_MAKER_DELETE_HUB;

    $response = $sdk->sdk->deleteHub($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHubContent

<p>Delete the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHubContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHubContentRequest();
    $request->deleteHubContentRequest = new DeleteHubContentRequest();
    $request->deleteHubContentRequest->hubContentName = 'facilis';
    $request->deleteHubContentRequest->hubContentType = HubContentTypeEnum::MODEL;
    $request->deleteHubContentRequest->hubContentVersion = 'ad';
    $request->deleteHubContentRequest->hubName = 'voluptatibus';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = DeleteHubContentXAmzTargetEnum::SAGE_MAKER_DELETE_HUB_CONTENT;

    $response = $sdk->sdk->deleteHubContent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHumanTaskUi

<p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListHumanTaskUis.html">ListHumanTaskUis</a>. When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHumanTaskUiXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHumanTaskUiRequest();
    $request->deleteHumanTaskUiRequest = new DeleteHumanTaskUiRequest();
    $request->deleteHumanTaskUiRequest->humanTaskUiName = 'nostrum';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'unde';
    $request->xAmzTarget = DeleteHumanTaskUiXAmzTargetEnum::SAGE_MAKER_DELETE_HUMAN_TASK_UI;

    $response = $sdk->sdk->deleteHumanTaskUi($request);

    if ($response->deleteHumanTaskUiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImage

Deletes a SageMaker image and all versions of the image. The container images aren't deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRequest();
    $request->deleteImageRequest = new DeleteImageRequest();
    $request->deleteImageRequest->imageName = 'officiis';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DeleteImageXAmzTargetEnum::SAGE_MAKER_DELETE_IMAGE;

    $response = $sdk->sdk->deleteImage($request);

    if ($response->deleteImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageVersion

Deletes a version of a SageMaker image. The container image the version represents isn't deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageVersionRequest();
    $request->deleteImageVersionRequest = new DeleteImageVersionRequest();
    $request->deleteImageVersionRequest->alias = 'esse';
    $request->deleteImageVersionRequest->imageName = 'fugiat';
    $request->deleteImageVersionRequest->version = 322333;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'illo';
    $request->xAmzTarget = DeleteImageVersionXAmzTargetEnum::SAGE_MAKER_DELETE_IMAGE_VERSION;

    $response = $sdk->sdk->deleteImageVersion($request);

    if ($response->deleteImageVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInferenceExperiment

<p>Deletes an inference experiment.</p> <note> <p> This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInferenceExperimentRequest();
    $request->deleteInferenceExperimentRequest = new DeleteInferenceExperimentRequest();
    $request->deleteInferenceExperimentRequest->name = 'Debbie Thiel';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteInferenceExperimentXAmzTargetEnum::SAGE_MAKER_DELETE_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->deleteInferenceExperiment($request);

    if ($response->deleteInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModel

Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelRequest();
    $request->deleteModelInput = new DeleteModelInput();
    $request->deleteModelInput->modelName = 'repellat';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = DeleteModelXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL;

    $response = $sdk->sdk->deleteModel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelBiasJobDefinition

Deletes an Amazon SageMaker model bias job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelBiasJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelBiasJobDefinitionRequest();
    $request->deleteModelBiasJobDefinitionRequest = new DeleteModelBiasJobDefinitionRequest();
    $request->deleteModelBiasJobDefinitionRequest->jobDefinitionName = 'aliquam';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DeleteModelBiasJobDefinitionXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_BIAS_JOB_DEFINITION;

    $response = $sdk->sdk->deleteModelBiasJobDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelCard

Deletes an Amazon SageMaker Model Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelCardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelCardRequest();
    $request->deleteModelCardRequest = new DeleteModelCardRequest();
    $request->deleteModelCardRequest->modelCardName = 'nam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteModelCardXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_CARD;

    $response = $sdk->sdk->deleteModelCard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelExplainabilityJobDefinition

Deletes an Amazon SageMaker model explainability job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelExplainabilityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelExplainabilityJobDefinitionRequest();
    $request->deleteModelExplainabilityJobDefinitionRequest = new DeleteModelExplainabilityJobDefinitionRequest();
    $request->deleteModelExplainabilityJobDefinitionRequest->jobDefinitionName = 'vero';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteModelExplainabilityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_EXPLAINABILITY_JOB_DEFINITION;

    $response = $sdk->sdk->deleteModelExplainabilityJobDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelPackage

<p>Deletes a model package.</p> <p>A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelPackageInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelPackageRequest();
    $request->deleteModelPackageInput = new DeleteModelPackageInput();
    $request->deleteModelPackageInput->modelPackageName = 'aut';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DeleteModelPackageXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_PACKAGE;

    $response = $sdk->sdk->deleteModelPackage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelPackageGroup

Deletes the specified model group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelPackageGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelPackageGroupRequest();
    $request->deleteModelPackageGroupInput = new DeleteModelPackageGroupInput();
    $request->deleteModelPackageGroupInput->modelPackageGroupName = 'cum';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DeleteModelPackageGroupXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_PACKAGE_GROUP;

    $response = $sdk->sdk->deleteModelPackageGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelPackageGroupPolicy

Deletes a model group resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelPackageGroupPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelPackageGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelPackageGroupPolicyRequest();
    $request->deleteModelPackageGroupPolicyInput = new DeleteModelPackageGroupPolicyInput();
    $request->deleteModelPackageGroupPolicyInput->modelPackageGroupName = 'amet';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteModelPackageGroupPolicyXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_PACKAGE_GROUP_POLICY;

    $response = $sdk->sdk->deleteModelPackageGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelQualityJobDefinition

Deletes the secified model quality monitoring job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelQualityJobDefinitionRequest();
    $request->deleteModelQualityJobDefinitionRequest = new DeleteModelQualityJobDefinitionRequest();
    $request->deleteModelQualityJobDefinitionRequest->jobDefinitionName = 'molestiae';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = DeleteModelQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DELETE_MODEL_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->deleteModelQualityJobDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMonitoringSchedule

Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMonitoringScheduleRequest();
    $request->deleteMonitoringScheduleRequest = new DeleteMonitoringScheduleRequest();
    $request->deleteMonitoringScheduleRequest->monitoringScheduleName = 'totam';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_DELETE_MONITORING_SCHEDULE;

    $response = $sdk->sdk->deleteMonitoringSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotebookInstance

<p> Deletes an SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotebookInstanceRequest();
    $request->deleteNotebookInstanceInput = new DeleteNotebookInstanceInput();
    $request->deleteNotebookInstanceInput->notebookInstanceName = 'occaecati';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = DeleteNotebookInstanceXAmzTargetEnum::SAGE_MAKER_DELETE_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->deleteNotebookInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotebookInstanceLifecycleConfig

Deletes a notebook instance lifecycle configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookInstanceLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNotebookInstanceLifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotebookInstanceLifecycleConfigRequest();
    $request->deleteNotebookInstanceLifecycleConfigInput = new DeleteNotebookInstanceLifecycleConfigInput();
    $request->deleteNotebookInstanceLifecycleConfigInput->notebookInstanceLifecycleConfigName = 'perferendis';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum::SAGE_MAKER_DELETE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->deleteNotebookInstanceLifecycleConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipeline

Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the pipeline are deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineRequest();
    $request->deletePipelineRequest = new DeletePipelineRequest();
    $request->deletePipelineRequest->clientRequestToken = 'provident';
    $request->deletePipelineRequest->pipelineName = 'consectetur';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeletePipelineXAmzTargetEnum::SAGE_MAKER_DELETE_PIPELINE;

    $response = $sdk->sdk->deletePipeline($request);

    if ($response->deletePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Delete the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProjectInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->deleteProjectInput = new DeleteProjectInput();
    $request->deleteProjectInput->projectName = 'amet';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DeleteProjectXAmzTargetEnum::SAGE_MAKER_DELETE_PROJECT;

    $response = $sdk->sdk->deleteProject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSpace

Used to delete a space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSpaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSpaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSpaceRequest();
    $request->deleteSpaceRequest = new DeleteSpaceRequest();
    $request->deleteSpaceRequest->domainId = 'vero';
    $request->deleteSpaceRequest->spaceName = 'qui';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DeleteSpaceXAmzTargetEnum::SAGE_MAKER_DELETE_SPACE;

    $response = $sdk->sdk->deleteSpace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudioLifecycleConfig

Deletes the Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioLifecycleConfigRequest();
    $request->deleteStudioLifecycleConfigRequest = new DeleteStudioLifecycleConfigRequest();
    $request->deleteStudioLifecycleConfigRequest->studioLifecycleConfigName = 'ab';
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteStudioLifecycleConfigXAmzTargetEnum::SAGE_MAKER_DELETE_STUDIO_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->deleteStudioLifecycleConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTags

<p>Deletes the specified tags from an SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note> <note> <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile launched before you called this API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagsInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagsRequest();
    $request->deleteTagsInput = new DeleteTagsInput();
    $request->deleteTagsInput->resourceArn = 'exercitationem';
    $request->deleteTagsInput->tagKeys = [
        'numquam',
        'repudiandae',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DeleteTagsXAmzTargetEnum::SAGE_MAKER_DELETE_TAGS;

    $response = $sdk->sdk->deleteTags($request);

    if ($response->deleteTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrial

Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API to get the list of trial components.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTrialRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrialXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrialRequest();
    $request->deleteTrialRequest = new DeleteTrialRequest();
    $request->deleteTrialRequest->trialName = 'deleniti';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = DeleteTrialXAmzTargetEnum::SAGE_MAKER_DELETE_TRIAL;

    $response = $sdk->sdk->deleteTrial($request);

    if ($response->deleteTrialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrialComponent

Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrialComponentRequest();
    $request->deleteTrialComponentRequest = new DeleteTrialComponentRequest();
    $request->deleteTrialComponentRequest->trialComponentName = 'modi';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DeleteTrialComponentXAmzTargetEnum::SAGE_MAKER_DELETE_TRIAL_COMPONENT;

    $response = $sdk->sdk->deleteTrialComponent($request);

    if ($response->deleteTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserProfile

Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserProfileRequest();
    $request->deleteUserProfileRequest = new DeleteUserProfileRequest();
    $request->deleteUserProfileRequest->domainId = 'veniam';
    $request->deleteUserProfileRequest->userProfileName = 'reiciendis';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteUserProfileXAmzTargetEnum::SAGE_MAKER_DELETE_USER_PROFILE;

    $response = $sdk->sdk->deleteUserProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkforce

<p>Use this operation to delete a workforce.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateWorkforce.html">CreateWorkforce</a> to create a new workforce.</p> <important> <p>If a private workforce contains one or more work teams, you must use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a <code>ResourceInUse</code> error.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkforceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkforceRequest();
    $request->deleteWorkforceRequest = new DeleteWorkforceRequest();
    $request->deleteWorkforceRequest->workforceName = 'numquam';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DeleteWorkforceXAmzTargetEnum::SAGE_MAKER_DELETE_WORKFORCE;

    $response = $sdk->sdk->deleteWorkforce($request);

    if ($response->deleteWorkforceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkteam

Deletes an existing work team. This operation can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkteamRequest();
    $request->deleteWorkteamRequest = new DeleteWorkteamRequest();
    $request->deleteWorkteamRequest->workteamName = 'minus';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DeleteWorkteamXAmzTargetEnum::SAGE_MAKER_DELETE_WORKTEAM;

    $response = $sdk->sdk->deleteWorkteam($request);

    if ($response->deleteWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterDevices

Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterDevicesRequest();
    $request->deregisterDevicesRequest = new DeregisterDevicesRequest();
    $request->deregisterDevicesRequest->deviceFleetName = 'autem';
    $request->deregisterDevicesRequest->deviceNames = [
        'alias',
        'rem',
        'aut',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DeregisterDevicesXAmzTargetEnum::SAGE_MAKER_DEREGISTER_DEVICES;

    $response = $sdk->sdk->deregisterDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAction

Describes an action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeActionRequest();
    $request->describeActionRequest = new DescribeActionRequest();
    $request->describeActionRequest->actionName = 'delectus';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = DescribeActionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_ACTION;

    $response = $sdk->sdk->describeAction($request);

    if ($response->describeActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlgorithm

Returns a description of the specified algorithm that is in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAlgorithmInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlgorithmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlgorithmRequest();
    $request->describeAlgorithmInput = new DescribeAlgorithmInput();
    $request->describeAlgorithmInput->algorithmName = 'hic';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeAlgorithmXAmzTargetEnum::SAGE_MAKER_DESCRIBE_ALGORITHM;

    $response = $sdk->sdk->describeAlgorithm($request);

    if ($response->describeAlgorithmOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApp

Describes the app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppRequest();
    $request->describeAppRequest = new DescribeAppRequest();
    $request->describeAppRequest->appName = 'beatae';
    $request->describeAppRequest->appType = AppTypeEnum::KERNEL_GATEWAY;
    $request->describeAppRequest->domainId = 'modi';
    $request->describeAppRequest->spaceName = 'optio';
    $request->describeAppRequest->userProfileName = 'voluptatibus';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeAppXAmzTargetEnum::SAGE_MAKER_DESCRIBE_APP;

    $response = $sdk->sdk->describeApp($request);

    if ($response->describeAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppImageConfig

Describes an AppImageConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppImageConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppImageConfigRequest();
    $request->describeAppImageConfigRequest = new DescribeAppImageConfigRequest();
    $request->describeAppImageConfigRequest->appImageConfigName = 'impedit';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DescribeAppImageConfigXAmzTargetEnum::SAGE_MAKER_DESCRIBE_APP_IMAGE_CONFIG;

    $response = $sdk->sdk->describeAppImageConfig($request);

    if ($response->describeAppImageConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeArtifact

Describes an artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeArtifactRequest();
    $request->describeArtifactRequest = new DescribeArtifactRequest();
    $request->describeArtifactRequest->artifactArn = 'natus';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DescribeArtifactXAmzTargetEnum::SAGE_MAKER_DESCRIBE_ARTIFACT;

    $response = $sdk->sdk->describeArtifact($request);

    if ($response->describeArtifactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutoMLJob

Returns information about an Amazon SageMaker AutoML job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoMLJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutoMLJobRequest();
    $request->describeAutoMLJobRequest = new DescribeAutoMLJobRequest();
    $request->describeAutoMLJobRequest->autoMLJobName = 'rem';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = DescribeAutoMLJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_AUTO_ML_JOB;

    $response = $sdk->sdk->describeAutoMLJob($request);

    if ($response->describeAutoMLJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutoMLJobV2

<p>Returns information about an Amazon SageMaker AutoML V2 job.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoMLJobV2Request;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutoMLJobV2Request;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoMLJobV2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutoMLJobV2Request();
    $request->describeAutoMLJobV2Request = new DescribeAutoMLJobV2Request();
    $request->describeAutoMLJobV2Request->autoMLJobName = 'officiis';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DescribeAutoMLJobV2XAmzTargetEnum::SAGE_MAKER_DESCRIBE_AUTO_ML_JOB_V2;

    $response = $sdk->sdk->describeAutoMLJobV2($request);

    if ($response->describeAutoMLJobV2Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCodeRepository

Gets details about the specified Git repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCodeRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCodeRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCodeRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCodeRepositoryRequest();
    $request->describeCodeRepositoryInput = new DescribeCodeRepositoryInput();
    $request->describeCodeRepositoryInput->codeRepositoryName = 'reiciendis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DescribeCodeRepositoryXAmzTargetEnum::SAGE_MAKER_DESCRIBE_CODE_REPOSITORY;

    $response = $sdk->sdk->describeCodeRepository($request);

    if ($response->describeCodeRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCompilationJob

<p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCompilationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCompilationJobRequest();
    $request->describeCompilationJobRequest = new DescribeCompilationJobRequest();
    $request->describeCompilationJobRequest->compilationJobName = 'itaque';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = DescribeCompilationJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_COMPILATION_JOB;

    $response = $sdk->sdk->describeCompilationJob($request);

    if ($response->describeCompilationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContext

Describes a context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContextRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContextRequest();
    $request->describeContextRequest = new DescribeContextRequest();
    $request->describeContextRequest->contextName = 'porro';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = DescribeContextXAmzTargetEnum::SAGE_MAKER_DESCRIBE_CONTEXT;

    $response = $sdk->sdk->describeContext($request);

    if ($response->describeContextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataQualityJobDefinition

Gets the details of a data quality monitoring job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataQualityJobDefinitionRequest();
    $request->describeDataQualityJobDefinitionRequest = new DescribeDataQualityJobDefinitionRequest();
    $request->describeDataQualityJobDefinitionRequest->jobDefinitionName = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = DescribeDataQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_DATA_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->describeDataQualityJobDefinition($request);

    if ($response->describeDataQualityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDevice

Describes the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceRequest();
    $request->describeDeviceRequest = new DescribeDeviceRequest();
    $request->describeDeviceRequest->deviceFleetName = 'consequuntur';
    $request->describeDeviceRequest->deviceName = 'officia';
    $request->describeDeviceRequest->nextToken = 'reprehenderit';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = DescribeDeviceXAmzTargetEnum::SAGE_MAKER_DESCRIBE_DEVICE;

    $response = $sdk->sdk->describeDevice($request);

    if ($response->describeDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeviceFleet

A description of the fleet the device belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceFleetRequest();
    $request->describeDeviceFleetRequest = new DescribeDeviceFleetRequest();
    $request->describeDeviceFleetRequest->deviceFleetName = 'saepe';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeDeviceFleetXAmzTargetEnum::SAGE_MAKER_DESCRIBE_DEVICE_FLEET;

    $response = $sdk->sdk->describeDeviceFleet($request);

    if ($response->describeDeviceFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDomain

The description of the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDomainRequest();
    $request->describeDomainRequest = new DescribeDomainRequest();
    $request->describeDomainRequest->domainId = 'delectus';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DescribeDomainXAmzTargetEnum::SAGE_MAKER_DESCRIBE_DOMAIN;

    $response = $sdk->sdk->describeDomain($request);

    if ($response->describeDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEdgeDeploymentPlan

Describes an edge deployment plan with deployment status per stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEdgeDeploymentPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgeDeploymentPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEdgeDeploymentPlanRequest();
    $request->describeEdgeDeploymentPlanRequest = new DescribeEdgeDeploymentPlanRequest();
    $request->describeEdgeDeploymentPlanRequest->edgeDeploymentPlanName = 'doloribus';
    $request->describeEdgeDeploymentPlanRequest->maxResults = 823753;
    $request->describeEdgeDeploymentPlanRequest->nextToken = 'unde';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeEdgeDeploymentPlanXAmzTargetEnum::SAGE_MAKER_DESCRIBE_EDGE_DEPLOYMENT_PLAN;

    $response = $sdk->sdk->describeEdgeDeploymentPlan($request);

    if ($response->describeEdgeDeploymentPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEdgePackagingJob

A description of edge packaging jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgePackagingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEdgePackagingJobRequest();
    $request->describeEdgePackagingJobRequest = new DescribeEdgePackagingJobRequest();
    $request->describeEdgePackagingJobRequest->edgePackagingJobName = 'nesciunt';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DescribeEdgePackagingJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_EDGE_PACKAGING_JOB;

    $response = $sdk->sdk->describeEdgePackagingJob($request);

    if ($response->describeEdgePackagingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoint

Returns the description of an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointRequest();
    $request->describeEndpointInput = new DescribeEndpointInput();
    $request->describeEndpointInput->endpointName = 'ut';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = DescribeEndpointXAmzTargetEnum::SAGE_MAKER_DESCRIBE_ENDPOINT;

    $response = $sdk->sdk->describeEndpoint($request);

    if ($response->describeEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpointConfig

Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointConfigRequest();
    $request->describeEndpointConfigInput = new DescribeEndpointConfigInput();
    $request->describeEndpointConfigInput->endpointConfigName = 'minus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = DescribeEndpointConfigXAmzTargetEnum::SAGE_MAKER_DESCRIBE_ENDPOINT_CONFIG;

    $response = $sdk->sdk->describeEndpointConfig($request);

    if ($response->describeEndpointConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExperiment

Provides a list of an experiment's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExperimentRequest();
    $request->describeExperimentRequest = new DescribeExperimentRequest();
    $request->describeExperimentRequest->experimentName = 'fuga';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = DescribeExperimentXAmzTargetEnum::SAGE_MAKER_DESCRIBE_EXPERIMENT;

    $response = $sdk->sdk->describeExperiment($request);

    if ($response->describeExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFeatureGroup

Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFeatureGroupRequest();
    $request->describeFeatureGroupRequest = new DescribeFeatureGroupRequest();
    $request->describeFeatureGroupRequest->featureGroupName = 'praesentium';
    $request->describeFeatureGroupRequest->nextToken = 'dolor';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DescribeFeatureGroupXAmzTargetEnum::SAGE_MAKER_DESCRIBE_FEATURE_GROUP;

    $response = $sdk->sdk->describeFeatureGroup($request);

    if ($response->describeFeatureGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFeatureMetadata

Shows the metadata for a feature within a feature group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFeatureMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeatureMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFeatureMetadataRequest();
    $request->describeFeatureMetadataRequest = new DescribeFeatureMetadataRequest();
    $request->describeFeatureMetadataRequest->featureGroupName = 'consequuntur';
    $request->describeFeatureMetadataRequest->featureName = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = DescribeFeatureMetadataXAmzTargetEnum::SAGE_MAKER_DESCRIBE_FEATURE_METADATA;

    $response = $sdk->sdk->describeFeatureMetadata($request);

    if ($response->describeFeatureMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFlowDefinition

Returns information about the specified flow definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFlowDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFlowDefinitionRequest();
    $request->describeFlowDefinitionRequest = new DescribeFlowDefinitionRequest();
    $request->describeFlowDefinitionRequest->flowDefinitionName = 'enim';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DescribeFlowDefinitionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_FLOW_DEFINITION;

    $response = $sdk->sdk->describeFlowDefinition($request);

    if ($response->describeFlowDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHub

<p>Describe a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHubRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHubXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHubRequest();
    $request->describeHubRequest = new DescribeHubRequest();
    $request->describeHubRequest->hubName = 'nobis';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DescribeHubXAmzTargetEnum::SAGE_MAKER_DESCRIBE_HUB;

    $response = $sdk->sdk->describeHub($request);

    if ($response->describeHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHubContent

<p>Describe the content of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHubContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHubContentRequest();
    $request->describeHubContentRequest = new DescribeHubContentRequest();
    $request->describeHubContentRequest->hubContentName = 'architecto';
    $request->describeHubContentRequest->hubContentType = HubContentTypeEnum::MODEL;
    $request->describeHubContentRequest->hubContentVersion = 'perferendis';
    $request->describeHubContentRequest->hubName = 'veritatis';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DescribeHubContentXAmzTargetEnum::SAGE_MAKER_DESCRIBE_HUB_CONTENT;

    $response = $sdk->sdk->describeHubContent($request);

    if ($response->describeHubContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHumanTaskUi

Returns information about the requested human task user interface (worker task template).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHumanTaskUiRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHumanTaskUiXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHumanTaskUiRequest();
    $request->describeHumanTaskUiRequest = new DescribeHumanTaskUiRequest();
    $request->describeHumanTaskUiRequest->humanTaskUiName = 'velit';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DescribeHumanTaskUiXAmzTargetEnum::SAGE_MAKER_DESCRIBE_HUMAN_TASK_UI;

    $response = $sdk->sdk->describeHumanTaskUi($request);

    if ($response->describeHumanTaskUiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHyperParameterTuningJob

Gets a description of a hyperparameter tuning job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHyperParameterTuningJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHyperParameterTuningJobRequest();
    $request->describeHyperParameterTuningJobRequest = new DescribeHyperParameterTuningJobRequest();
    $request->describeHyperParameterTuningJobRequest->hyperParameterTuningJobName = 'cum';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DescribeHyperParameterTuningJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_HYPER_PARAMETER_TUNING_JOB;

    $response = $sdk->sdk->describeHyperParameterTuningJob($request);

    if ($response->describeHyperParameterTuningJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImage

Describes a SageMaker image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageRequest();
    $request->describeImageRequest = new DescribeImageRequest();
    $request->describeImageRequest->imageName = 'perspiciatis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DescribeImageXAmzTargetEnum::SAGE_MAKER_DESCRIBE_IMAGE;

    $response = $sdk->sdk->describeImage($request);

    if ($response->describeImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageVersion

Describes a version of a SageMaker image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageVersionRequest();
    $request->describeImageVersionRequest = new DescribeImageVersionRequest();
    $request->describeImageVersionRequest->alias = 'quod';
    $request->describeImageVersionRequest->imageName = 'id';
    $request->describeImageVersionRequest->version = 904440;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DescribeImageVersionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_IMAGE_VERSION;

    $response = $sdk->sdk->describeImageVersion($request);

    if ($response->describeImageVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInferenceExperiment

Returns details about an inference experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInferenceExperimentRequest();
    $request->describeInferenceExperimentRequest = new DescribeInferenceExperimentRequest();
    $request->describeInferenceExperimentRequest->name = 'Iris Shields';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DescribeInferenceExperimentXAmzTargetEnum::SAGE_MAKER_DESCRIBE_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->describeInferenceExperiment($request);

    if ($response->describeInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInferenceRecommendationsJob

Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceRecommendationsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInferenceRecommendationsJobRequest();
    $request->describeInferenceRecommendationsJobRequest = new DescribeInferenceRecommendationsJobRequest();
    $request->describeInferenceRecommendationsJobRequest->jobName = 'maxime';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeInferenceRecommendationsJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_INFERENCE_RECOMMENDATIONS_JOB;

    $response = $sdk->sdk->describeInferenceRecommendationsJob($request);

    if ($response->describeInferenceRecommendationsJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLabelingJob

Gets information about a labeling job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLabelingJobRequest();
    $request->describeLabelingJobRequest = new DescribeLabelingJobRequest();
    $request->describeLabelingJobRequest->labelingJobName = 'occaecati';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DescribeLabelingJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_LABELING_JOB;

    $response = $sdk->sdk->describeLabelingJob($request);

    if ($response->describeLabelingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLineageGroup

Provides a list of properties for the requested lineage group. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLineageGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLineageGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLineageGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLineageGroupRequest();
    $request->describeLineageGroupRequest = new DescribeLineageGroupRequest();
    $request->describeLineageGroupRequest->lineageGroupName = 'eligendi';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeLineageGroupXAmzTargetEnum::SAGE_MAKER_DESCRIBE_LINEAGE_GROUP;

    $response = $sdk->sdk->describeLineageGroup($request);

    if ($response->describeLineageGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModel

Describes a model that you created using the <code>CreateModel</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelRequest();
    $request->describeModelInput = new DescribeModelInput();
    $request->describeModelInput->modelName = 'magnam';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeModelXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL;

    $response = $sdk->sdk->describeModel($request);

    if ($response->describeModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelBiasJobDefinition

Returns a description of a model bias job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelBiasJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelBiasJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelBiasJobDefinitionRequest();
    $request->describeModelBiasJobDefinitionRequest = new DescribeModelBiasJobDefinitionRequest();
    $request->describeModelBiasJobDefinitionRequest->jobDefinitionName = 'deserunt';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribeModelBiasJobDefinitionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_BIAS_JOB_DEFINITION;

    $response = $sdk->sdk->describeModelBiasJobDefinition($request);

    if ($response->describeModelBiasJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelCard

Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelCardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelCardRequest();
    $request->describeModelCardRequest = new DescribeModelCardRequest();
    $request->describeModelCardRequest->modelCardName = 'consequatur';
    $request->describeModelCardRequest->modelCardVersion = 51007;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DescribeModelCardXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_CARD;

    $response = $sdk->sdk->describeModelCard($request);

    if ($response->describeModelCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelCardExportJob

Describes an Amazon SageMaker Model Card export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelCardExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelCardExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelCardExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelCardExportJobRequest();
    $request->describeModelCardExportJobRequest = new DescribeModelCardExportJobRequest();
    $request->describeModelCardExportJobRequest->modelCardExportJobArn = 'sed';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = DescribeModelCardExportJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_CARD_EXPORT_JOB;

    $response = $sdk->sdk->describeModelCardExportJob($request);

    if ($response->describeModelCardExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelExplainabilityJobDefinition

Returns a description of a model explainability job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelExplainabilityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelExplainabilityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelExplainabilityJobDefinitionRequest();
    $request->describeModelExplainabilityJobDefinitionRequest = new DescribeModelExplainabilityJobDefinitionRequest();
    $request->describeModelExplainabilityJobDefinitionRequest->jobDefinitionName = 'maiores';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DescribeModelExplainabilityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_EXPLAINABILITY_JOB_DEFINITION;

    $response = $sdk->sdk->describeModelExplainabilityJobDefinition($request);

    if ($response->describeModelExplainabilityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelPackage

<p>Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace.</p> <p>To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelPackageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelPackageInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelPackageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelPackageRequest();
    $request->describeModelPackageInput = new DescribeModelPackageInput();
    $request->describeModelPackageInput->modelPackageName = 'velit';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeModelPackageXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_PACKAGE;

    $response = $sdk->sdk->describeModelPackage($request);

    if ($response->describeModelPackageOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelPackageGroup

Gets a description for the specified model group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelPackageGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelPackageGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelPackageGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelPackageGroupRequest();
    $request->describeModelPackageGroupInput = new DescribeModelPackageGroupInput();
    $request->describeModelPackageGroupInput->modelPackageGroupName = 'excepturi';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DescribeModelPackageGroupXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_PACKAGE_GROUP;

    $response = $sdk->sdk->describeModelPackageGroup($request);

    if ($response->describeModelPackageGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModelQualityJobDefinition

Returns a description of a model quality job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelQualityJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelQualityJobDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelQualityJobDefinitionRequest();
    $request->describeModelQualityJobDefinitionRequest = new DescribeModelQualityJobDefinitionRequest();
    $request->describeModelQualityJobDefinitionRequest->jobDefinitionName = 'corporis';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = DescribeModelQualityJobDefinitionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MODEL_QUALITY_JOB_DEFINITION;

    $response = $sdk->sdk->describeModelQualityJobDefinition($request);

    if ($response->describeModelQualityJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMonitoringSchedule

Describes the schedule for a monitoring job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMonitoringScheduleRequest();
    $request->describeMonitoringScheduleRequest = new DescribeMonitoringScheduleRequest();
    $request->describeMonitoringScheduleRequest->monitoringScheduleName = 'ex';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_DESCRIBE_MONITORING_SCHEDULE;

    $response = $sdk->sdk->describeMonitoringSchedule($request);

    if ($response->describeMonitoringScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotebookInstance

Returns information about a notebook instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotebookInstanceRequest();
    $request->describeNotebookInstanceInput = new DescribeNotebookInstanceInput();
    $request->describeNotebookInstanceInput->notebookInstanceName = 'magni';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeNotebookInstanceXAmzTargetEnum::SAGE_MAKER_DESCRIBE_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->describeNotebookInstance($request);

    if ($response->describeNotebookInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotebookInstanceLifecycleConfig

<p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookInstanceLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeNotebookInstanceLifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotebookInstanceLifecycleConfigRequest();
    $request->describeNotebookInstanceLifecycleConfigInput = new DescribeNotebookInstanceLifecycleConfigInput();
    $request->describeNotebookInstanceLifecycleConfigInput->notebookInstanceLifecycleConfigName = 'cupiditate';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum::SAGE_MAKER_DESCRIBE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->describeNotebookInstanceLifecycleConfig($request);

    if ($response->describeNotebookInstanceLifecycleConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipeline

Describes the details of a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipelineRequest();
    $request->describePipelineRequest = new DescribePipelineRequest();
    $request->describePipelineRequest->pipelineName = 'nemo';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DescribePipelineXAmzTargetEnum::SAGE_MAKER_DESCRIBE_PIPELINE;

    $response = $sdk->sdk->describePipeline($request);

    if ($response->describePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipelineDefinitionForExecution

Describes the details of an execution's pipeline definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineDefinitionForExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePipelineDefinitionForExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineDefinitionForExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipelineDefinitionForExecutionRequest();
    $request->describePipelineDefinitionForExecutionRequest = new DescribePipelineDefinitionForExecutionRequest();
    $request->describePipelineDefinitionForExecutionRequest->pipelineExecutionArn = 'a';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = DescribePipelineDefinitionForExecutionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_PIPELINE_DEFINITION_FOR_EXECUTION;

    $response = $sdk->sdk->describePipelineDefinitionForExecution($request);

    if ($response->describePipelineDefinitionForExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipelineExecution

Describes the details of a pipeline execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipelineExecutionRequest();
    $request->describePipelineExecutionRequest = new DescribePipelineExecutionRequest();
    $request->describePipelineExecutionRequest->pipelineExecutionArn = 'porro';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = DescribePipelineExecutionXAmzTargetEnum::SAGE_MAKER_DESCRIBE_PIPELINE_EXECUTION;

    $response = $sdk->sdk->describePipelineExecution($request);

    if ($response->describePipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProcessingJob

Returns a description of a processing job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProcessingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProcessingJobRequest();
    $request->describeProcessingJobRequest = new DescribeProcessingJobRequest();
    $request->describeProcessingJobRequest->processingJobName = 'eligendi';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = DescribeProcessingJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_PROCESSING_JOB;

    $response = $sdk->sdk->describeProcessingJob($request);

    if ($response->describeProcessingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProject

Describes the details of a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProjectInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProjectRequest();
    $request->describeProjectInput = new DescribeProjectInput();
    $request->describeProjectInput->projectName = 'maiores';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DescribeProjectXAmzTargetEnum::SAGE_MAKER_DESCRIBE_PROJECT;

    $response = $sdk->sdk->describeProject($request);

    if ($response->describeProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSpace

Describes the space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSpaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSpaceRequest();
    $request->describeSpaceRequest = new DescribeSpaceRequest();
    $request->describeSpaceRequest->domainId = 'officia';
    $request->describeSpaceRequest->spaceName = 'saepe';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = DescribeSpaceXAmzTargetEnum::SAGE_MAKER_DESCRIBE_SPACE;

    $response = $sdk->sdk->describeSpace($request);

    if ($response->describeSpaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStudioLifecycleConfig

Describes the Studio Lifecycle Configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStudioLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStudioLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStudioLifecycleConfigRequest();
    $request->describeStudioLifecycleConfigRequest = new DescribeStudioLifecycleConfigRequest();
    $request->describeStudioLifecycleConfigRequest->studioLifecycleConfigName = 'eius';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DescribeStudioLifecycleConfigXAmzTargetEnum::SAGE_MAKER_DESCRIBE_STUDIO_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->describeStudioLifecycleConfig($request);

    if ($response->describeStudioLifecycleConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubscribedWorkteam

Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscribedWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSubscribedWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscribedWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSubscribedWorkteamRequest();
    $request->describeSubscribedWorkteamRequest = new DescribeSubscribedWorkteamRequest();
    $request->describeSubscribedWorkteamRequest->workteamArn = 'reprehenderit';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DescribeSubscribedWorkteamXAmzTargetEnum::SAGE_MAKER_DESCRIBE_SUBSCRIBED_WORKTEAM;

    $response = $sdk->sdk->describeSubscribedWorkteam($request);

    if ($response->describeSubscribedWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTrainingJob

<p>Returns information about a training job. </p> <p>Some of the attributes below only appear if the training job successfully starts. If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and, depending on the <code>FailureReason</code>, attributes like <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>, <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be present in the response.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrainingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrainingJobRequest();
    $request->describeTrainingJobRequest = new DescribeTrainingJobRequest();
    $request->describeTrainingJobRequest->trainingJobName = 'modi';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeTrainingJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_TRAINING_JOB;

    $response = $sdk->sdk->describeTrainingJob($request);

    if ($response->describeTrainingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTransformJob

Returns information about a transform job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTransformJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTransformJobRequest();
    $request->describeTransformJobRequest = new DescribeTransformJobRequest();
    $request->describeTransformJobRequest->transformJobName = 'neque';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = DescribeTransformJobXAmzTargetEnum::SAGE_MAKER_DESCRIBE_TRANSFORM_JOB;

    $response = $sdk->sdk->describeTransformJob($request);

    if ($response->describeTransformJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTrial

Provides a list of a trial's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTrialRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrialXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrialRequest();
    $request->describeTrialRequest = new DescribeTrialRequest();
    $request->describeTrialRequest->trialName = 'nihil';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DescribeTrialXAmzTargetEnum::SAGE_MAKER_DESCRIBE_TRIAL;

    $response = $sdk->sdk->describeTrial($request);

    if ($response->describeTrialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTrialComponent

Provides a list of a trials component's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrialComponentRequest();
    $request->describeTrialComponentRequest = new DescribeTrialComponentRequest();
    $request->describeTrialComponentRequest->trialComponentName = 'pariatur';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DescribeTrialComponentXAmzTargetEnum::SAGE_MAKER_DESCRIBE_TRIAL_COMPONENT;

    $response = $sdk->sdk->describeTrialComponent($request);

    if ($response->describeTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserProfile

Describes a user profile. For more information, see <code>CreateUserProfile</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserProfileRequest();
    $request->describeUserProfileRequest = new DescribeUserProfileRequest();
    $request->describeUserProfileRequest->domainId = 'possimus';
    $request->describeUserProfileRequest->userProfileName = 'repellat';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DescribeUserProfileXAmzTargetEnum::SAGE_MAKER_DESCRIBE_USER_PROFILE;

    $response = $sdk->sdk->describeUserProfile($request);

    if ($response->describeUserProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkforce

<p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkforceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkforceRequest();
    $request->describeWorkforceRequest = new DescribeWorkforceRequest();
    $request->describeWorkforceRequest->workforceName = 'iure';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DescribeWorkforceXAmzTargetEnum::SAGE_MAKER_DESCRIBE_WORKFORCE;

    $response = $sdk->sdk->describeWorkforce($request);

    if ($response->describeWorkforceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkteam

Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkteamRequest();
    $request->describeWorkteamRequest = new DescribeWorkteamRequest();
    $request->describeWorkteamRequest->workteamName = 'error';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = DescribeWorkteamXAmzTargetEnum::SAGE_MAKER_DESCRIBE_WORKTEAM;

    $response = $sdk->sdk->describeWorkteam($request);

    if ($response->describeWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableSagemakerServicecatalogPortfolio

Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableSagemakerServicecatalogPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableSagemakerServicecatalogPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableSagemakerServicecatalogPortfolioRequest();
    $request->requestBody = [
        'corrupti' => 'eaque',
        'deserunt' => 'aliquid',
        'excepturi' => 'magni',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = DisableSagemakerServicecatalogPortfolioXAmzTargetEnum::SAGE_MAKER_DISABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO;

    $response = $sdk->sdk->disableSagemakerServicecatalogPortfolio($request);

    if ($response->disableSagemakerServicecatalogPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTrialComponent

<p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AssociateTrialComponent.html">AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTrialComponentRequest();
    $request->disassociateTrialComponentRequest = new DisassociateTrialComponentRequest();
    $request->disassociateTrialComponentRequest->trialComponentName = 'delectus';
    $request->disassociateTrialComponentRequest->trialName = 'minus';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DisassociateTrialComponentXAmzTargetEnum::SAGE_MAKER_DISASSOCIATE_TRIAL_COMPONENT;

    $response = $sdk->sdk->disassociateTrialComponent($request);

    if ($response->disassociateTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableSagemakerServicecatalogPortfolio

Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableSagemakerServicecatalogPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableSagemakerServicecatalogPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableSagemakerServicecatalogPortfolioRequest();
    $request->requestBody = [
        'aut' => 'doloribus',
    ];
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = EnableSagemakerServicecatalogPortfolioXAmzTargetEnum::SAGE_MAKER_ENABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO;

    $response = $sdk->sdk->enableSagemakerServicecatalogPortfolio($request);

    if ($response->enableSagemakerServicecatalogPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceFleetReport

Describes a fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceFleetReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeviceFleetReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceFleetReportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceFleetReportRequest();
    $request->getDeviceFleetReportRequest = new GetDeviceFleetReportRequest();
    $request->getDeviceFleetReportRequest->deviceFleetName = 'mollitia';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = GetDeviceFleetReportXAmzTargetEnum::SAGE_MAKER_GET_DEVICE_FLEET_REPORT;

    $response = $sdk->sdk->getDeviceFleetReport($request);

    if ($response->getDeviceFleetReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLineageGroupPolicy

The resource policy for the lineage group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLineageGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLineageGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLineageGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLineageGroupPolicyRequest();
    $request->getLineageGroupPolicyRequest = new GetLineageGroupPolicyRequest();
    $request->getLineageGroupPolicyRequest->lineageGroupName = 'quisquam';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = GetLineageGroupPolicyXAmzTargetEnum::SAGE_MAKER_GET_LINEAGE_GROUP_POLICY;

    $response = $sdk->sdk->getLineageGroupPolicy($request);

    if ($response->getLineageGroupPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelPackageGroupPolicy

Gets a resource policy that manages access for a model group. For information about resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPackageGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetModelPackageGroupPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPackageGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelPackageGroupPolicyRequest();
    $request->getModelPackageGroupPolicyInput = new GetModelPackageGroupPolicyInput();
    $request->getModelPackageGroupPolicyInput->modelPackageGroupName = 'dolor';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = GetModelPackageGroupPolicyXAmzTargetEnum::SAGE_MAKER_GET_MODEL_PACKAGE_GROUP_POLICY;

    $response = $sdk->sdk->getModelPackageGroupPolicy($request);

    if ($response->getModelPackageGroupPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSagemakerServicecatalogPortfolioStatus

Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSagemakerServicecatalogPortfolioStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSagemakerServicecatalogPortfolioStatusRequest();
    $request->requestBody = [
        'tempora' => 'blanditiis',
        'numquam' => 'sequi',
        'voluptatum' => 'sit',
        'rerum' => 'veritatis',
    ];
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum::SAGE_MAKER_GET_SAGEMAKER_SERVICECATALOG_PORTFOLIO_STATUS;

    $response = $sdk->sdk->getSagemakerServicecatalogPortfolioStatus($request);

    if ($response->getSagemakerServicecatalogPortfolioStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchSuggestions

An auto-complete API for the search functionality in the SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSearchSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuggestionQuery;
use \OpenAPI\OpenAPI\Models\Shared\PropertyNameQuery;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchSuggestionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchSuggestionsRequest();
    $request->getSearchSuggestionsRequest = new GetSearchSuggestionsRequest();
    $request->getSearchSuggestionsRequest->resource = ResourceTypeEnum::PIPELINE;
    $request->getSearchSuggestionsRequest->suggestionQuery = new SuggestionQuery();
    $request->getSearchSuggestionsRequest->suggestionQuery->propertyNameQuery = new PropertyNameQuery();
    $request->getSearchSuggestionsRequest->suggestionQuery->propertyNameQuery->propertyNameHint = 'voluptas';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = GetSearchSuggestionsXAmzTargetEnum::SAGE_MAKER_GET_SEARCH_SUGGESTIONS;

    $response = $sdk->sdk->getSearchSuggestions($request);

    if ($response->getSearchSuggestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importHubContent

<p>Import hub content.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportHubContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportHubContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportHubContentRequest();
    $request->importHubContentRequest = new ImportHubContentRequest();
    $request->importHubContentRequest->documentSchemaVersion = 'aliquam';
    $request->importHubContentRequest->hubContentDescription = 'iste';
    $request->importHubContentRequest->hubContentDisplayName = 'ullam';
    $request->importHubContentRequest->hubContentDocument = 'eligendi';
    $request->importHubContentRequest->hubContentMarkdown = 'placeat';
    $request->importHubContentRequest->hubContentName = 'voluptas';
    $request->importHubContentRequest->hubContentSearchKeywords = [
        'unde',
        'illo',
        'nihil',
    ];
    $request->importHubContentRequest->hubContentType = HubContentTypeEnum::MODEL;
    $request->importHubContentRequest->hubContentVersion = 'libero';
    $request->importHubContentRequest->hubName = 'ipsam';
    $request->importHubContentRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = ImportHubContentXAmzTargetEnum::SAGE_MAKER_IMPORT_HUB_CONTENT;

    $response = $sdk->sdk->importHubContent($request);

    if ($response->importHubContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActions

Lists the actions in your account and their properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortActionsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActionsRequest();
    $request->listActionsRequest = new ListActionsRequest();
    $request->listActionsRequest->actionType = 'delectus';
    $request->listActionsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T21:16:41.530Z');
    $request->listActionsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-14T11:36:59.797Z');
    $request->listActionsRequest->maxResults = 543353;
    $request->listActionsRequest->nextToken = 'officiis';
    $request->listActionsRequest->sortBy = SortActionsByEnum::CREATION_TIME;
    $request->listActionsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listActionsRequest->sourceUri = 'sapiente';
    $request->maxResults = 'quo';
    $request->nextToken = 'incidunt';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = ListActionsXAmzTargetEnum::SAGE_MAKER_LIST_ACTIONS;

    $response = $sdk->sdk->listActions($request);

    if ($response->listActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlgorithms

Lists the machine learning algorithms that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlgorithmsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAlgorithmsInput;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAlgorithmsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlgorithmsRequest();
    $request->listAlgorithmsInput = new ListAlgorithmsInput();
    $request->listAlgorithmsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-18T10:06:28.236Z');
    $request->listAlgorithmsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-05T13:46:09.099Z');
    $request->listAlgorithmsInput->maxResults = 36691;
    $request->listAlgorithmsInput->nameContains = 'soluta';
    $request->listAlgorithmsInput->nextToken = 'fugit';
    $request->listAlgorithmsInput->sortBy = AlgorithmSortByEnum::CREATION_TIME;
    $request->listAlgorithmsInput->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'recusandae';
    $request->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = ListAlgorithmsXAmzTargetEnum::SAGE_MAKER_LIST_ALGORITHMS;

    $response = $sdk->sdk->listAlgorithms($request);

    if ($response->listAlgorithmsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAliases

Lists the aliases of a specified image or image version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAliasesRequest();
    $request->listAliasesRequest = new ListAliasesRequest();
    $request->listAliasesRequest->alias = 'rerum';
    $request->listAliasesRequest->imageName = 'doloremque';
    $request->listAliasesRequest->maxResults = 30192;
    $request->listAliasesRequest->nextToken = 'eum';
    $request->listAliasesRequest->version = 873320;
    $request->maxResults = 'eum';
    $request->nextToken = 'reprehenderit';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = ListAliasesXAmzTargetEnum::SAGE_MAKER_LIST_ALIASES;

    $response = $sdk->sdk->listAliases($request);

    if ($response->listAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppImageConfigs

Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppImageConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAppImageConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppImageConfigSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAppImageConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppImageConfigsRequest();
    $request->listAppImageConfigsRequest = new ListAppImageConfigsRequest();
    $request->listAppImageConfigsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-17T01:05:50.884Z');
    $request->listAppImageConfigsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T11:12:42.558Z');
    $request->listAppImageConfigsRequest->maxResults = 318379;
    $request->listAppImageConfigsRequest->modifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T06:08:59.133Z');
    $request->listAppImageConfigsRequest->modifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T00:16:23.616Z');
    $request->listAppImageConfigsRequest->nameContains = 'placeat';
    $request->listAppImageConfigsRequest->nextToken = 'enim';
    $request->listAppImageConfigsRequest->sortBy = AppImageConfigSortKeyEnum::CREATION_TIME;
    $request->listAppImageConfigsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'saepe';
    $request->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = ListAppImageConfigsXAmzTargetEnum::SAGE_MAKER_LIST_APP_IMAGE_CONFIGS;

    $response = $sdk->sdk->listAppImageConfigs($request);

    if ($response->listAppImageConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApps

Lists apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppsRequest();
    $request->listAppsRequest = new ListAppsRequest();
    $request->listAppsRequest->domainIdEquals = 'officiis';
    $request->listAppsRequest->maxResults = 651467;
    $request->listAppsRequest->nextToken = 'cumque';
    $request->listAppsRequest->sortBy = AppSortKeyEnum::CREATION_TIME;
    $request->listAppsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listAppsRequest->spaceNameEquals = 'enim';
    $request->listAppsRequest->userProfileNameEquals = 'eum';
    $request->maxResults = 'nemo';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = ListAppsXAmzTargetEnum::SAGE_MAKER_LIST_APPS;

    $response = $sdk->sdk->listApps($request);

    if ($response->listAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifacts

Lists the artifacts in your account and their properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortArtifactsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactsRequest();
    $request->listArtifactsRequest = new ListArtifactsRequest();
    $request->listArtifactsRequest->artifactType = 'praesentium';
    $request->listArtifactsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:59:28.620Z');
    $request->listArtifactsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T08:59:08.777Z');
    $request->listArtifactsRequest->maxResults = 898638;
    $request->listArtifactsRequest->nextToken = 'sed';
    $request->listArtifactsRequest->sortBy = SortArtifactsByEnum::CREATION_TIME;
    $request->listArtifactsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listArtifactsRequest->sourceUri = 'sunt';
    $request->maxResults = 'nesciunt';
    $request->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListArtifactsXAmzTargetEnum::SAGE_MAKER_LIST_ARTIFACTS;

    $response = $sdk->sdk->listArtifacts($request);

    if ($response->listArtifactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociations

Lists the associations in your account and their properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationEdgeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortAssociationsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociationsRequest();
    $request->listAssociationsRequest = new ListAssociationsRequest();
    $request->listAssociationsRequest->associationType = AssociationEdgeTypeEnum::DERIVED_FROM;
    $request->listAssociationsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T08:36:08.999Z');
    $request->listAssociationsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T01:16:49.496Z');
    $request->listAssociationsRequest->destinationArn = 'aspernatur';
    $request->listAssociationsRequest->destinationType = 'inventore';
    $request->listAssociationsRequest->maxResults = 193236;
    $request->listAssociationsRequest->nextToken = 'fugit';
    $request->listAssociationsRequest->sortBy = SortAssociationsByEnum::DESTINATION_TYPE;
    $request->listAssociationsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listAssociationsRequest->sourceArn = 'eaque';
    $request->listAssociationsRequest->sourceType = 'dolorem';
    $request->maxResults = 'architecto';
    $request->nextToken = 'aperiam';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListAssociationsXAmzTargetEnum::SAGE_MAKER_LIST_ASSOCIATIONS;

    $response = $sdk->sdk->listAssociations($request);

    if ($response->listAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAutoMLJobs

Request a list of jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAutoMLJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAutoMLJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAutoMLJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAutoMLJobsRequest();
    $request->listAutoMLJobsRequest = new ListAutoMLJobsRequest();
    $request->listAutoMLJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-01T03:53:48.305Z');
    $request->listAutoMLJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T17:19:13.312Z');
    $request->listAutoMLJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T02:21:11.806Z');
    $request->listAutoMLJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T17:34:06.211Z');
    $request->listAutoMLJobsRequest->maxResults = 569834;
    $request->listAutoMLJobsRequest->nameContains = 'aliquid';
    $request->listAutoMLJobsRequest->nextToken = 'sed';
    $request->listAutoMLJobsRequest->sortBy = AutoMLSortByEnum::NAME;
    $request->listAutoMLJobsRequest->sortOrder = AutoMLSortOrderEnum::DESCENDING;
    $request->listAutoMLJobsRequest->statusEquals = AutoMLJobStatusEnum::FAILED;
    $request->maxResults = 'animi';
    $request->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = ListAutoMLJobsXAmzTargetEnum::SAGE_MAKER_LIST_AUTO_ML_JOBS;

    $response = $sdk->sdk->listAutoMLJobs($request);

    if ($response->listAutoMLJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCandidatesForAutoMLJob

List the candidates created for the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCandidatesForAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCandidatesForAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CandidateSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\CandidateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCandidatesForAutoMLJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCandidatesForAutoMLJobRequest();
    $request->listCandidatesForAutoMLJobRequest = new ListCandidatesForAutoMLJobRequest();
    $request->listCandidatesForAutoMLJobRequest->autoMLJobName = 'earum';
    $request->listCandidatesForAutoMLJobRequest->candidateNameEquals = 'velit';
    $request->listCandidatesForAutoMLJobRequest->maxResults = 884765;
    $request->listCandidatesForAutoMLJobRequest->nextToken = 'eius';
    $request->listCandidatesForAutoMLJobRequest->sortBy = CandidateSortByEnum::FINAL_OBJECTIVE_METRIC_VALUE;
    $request->listCandidatesForAutoMLJobRequest->sortOrder = AutoMLSortOrderEnum::DESCENDING;
    $request->listCandidatesForAutoMLJobRequest->statusEquals = CandidateStatusEnum::FAILED;
    $request->maxResults = 'ipsam';
    $request->nextToken = 'explicabo';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListCandidatesForAutoMLJobXAmzTargetEnum::SAGE_MAKER_LIST_CANDIDATES_FOR_AUTO_ML_JOB;

    $response = $sdk->sdk->listCandidatesForAutoMLJob($request);

    if ($response->listCandidatesForAutoMLJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCodeRepositories

Gets a list of the Git repositories in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCodeRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCodeRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepositorySortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepositorySortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCodeRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCodeRepositoriesRequest();
    $request->listCodeRepositoriesInput = new ListCodeRepositoriesInput();
    $request->listCodeRepositoriesInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T22:58:48.514Z');
    $request->listCodeRepositoriesInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-03T03:35:37.503Z');
    $request->listCodeRepositoriesInput->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-17T02:21:21.661Z');
    $request->listCodeRepositoriesInput->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T07:22:33.976Z');
    $request->listCodeRepositoriesInput->maxResults = 792499;
    $request->listCodeRepositoriesInput->nameContains = 'quos';
    $request->listCodeRepositoriesInput->nextToken = 'temporibus';
    $request->listCodeRepositoriesInput->sortBy = CodeRepositorySortByEnum::CREATION_TIME;
    $request->listCodeRepositoriesInput->sortOrder = CodeRepositorySortOrderEnum::ASCENDING;
    $request->maxResults = 'enim';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListCodeRepositoriesXAmzTargetEnum::SAGE_MAKER_LIST_CODE_REPOSITORIES;

    $response = $sdk->sdk->listCodeRepositories($request);

    if ($response->listCodeRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCompilationJobs

<p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCompilationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCompilationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCompilationJobsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompilationJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCompilationJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCompilationJobsRequest();
    $request->listCompilationJobsRequest = new ListCompilationJobsRequest();
    $request->listCompilationJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-06T23:02:21.782Z');
    $request->listCompilationJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T13:56:00.357Z');
    $request->listCompilationJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T23:53:23.627Z');
    $request->listCompilationJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T08:16:52.982Z');
    $request->listCompilationJobsRequest->maxResults = 983434;
    $request->listCompilationJobsRequest->nameContains = 'sequi';
    $request->listCompilationJobsRequest->nextToken = 'saepe';
    $request->listCompilationJobsRequest->sortBy = ListCompilationJobsSortByEnum::NAME;
    $request->listCompilationJobsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listCompilationJobsRequest->statusEquals = CompilationJobStatusEnum::STOPPED;
    $request->maxResults = 'facere';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = ListCompilationJobsXAmzTargetEnum::SAGE_MAKER_LIST_COMPILATION_JOBS;

    $response = $sdk->sdk->listCompilationJobs($request);

    if ($response->listCompilationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContexts

Lists the contexts in your account and their properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContextsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContextsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortContextsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListContextsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContextsRequest();
    $request->listContextsRequest = new ListContextsRequest();
    $request->listContextsRequest->contextType = 'porro';
    $request->listContextsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-03T05:59:33.277Z');
    $request->listContextsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-06T15:38:17.604Z');
    $request->listContextsRequest->maxResults = 16252;
    $request->listContextsRequest->nextToken = 'ipsam';
    $request->listContextsRequest->sortBy = SortContextsByEnum::CREATION_TIME;
    $request->listContextsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listContextsRequest->sourceUri = 'reprehenderit';
    $request->maxResults = 'quia';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = ListContextsXAmzTargetEnum::SAGE_MAKER_LIST_CONTEXTS;

    $response = $sdk->sdk->listContexts($request);

    if ($response->listContextsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataQualityJobDefinitions

Lists the data quality job definitions in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataQualityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinitionSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityJobDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataQualityJobDefinitionsRequest();
    $request->listDataQualityJobDefinitionsRequest = new ListDataQualityJobDefinitionsRequest();
    $request->listDataQualityJobDefinitionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T20:41:14.694Z');
    $request->listDataQualityJobDefinitionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T20:05:24.555Z');
    $request->listDataQualityJobDefinitionsRequest->endpointName = 'repellendus';
    $request->listDataQualityJobDefinitionsRequest->maxResults = 199879;
    $request->listDataQualityJobDefinitionsRequest->nameContains = 'ipsa';
    $request->listDataQualityJobDefinitionsRequest->nextToken = 'sint';
    $request->listDataQualityJobDefinitionsRequest->sortBy = MonitoringJobDefinitionSortKeyEnum::NAME;
    $request->listDataQualityJobDefinitionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'accusantium';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = ListDataQualityJobDefinitionsXAmzTargetEnum::SAGE_MAKER_LIST_DATA_QUALITY_JOB_DEFINITIONS;

    $response = $sdk->sdk->listDataQualityJobDefinitions($request);

    if ($response->listDataQualityJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceFleets

Returns a list of devices in the fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeviceFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeviceFleetsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceFleetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceFleetsRequest();
    $request->listDeviceFleetsRequest = new ListDeviceFleetsRequest();
    $request->listDeviceFleetsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T05:52:46.922Z');
    $request->listDeviceFleetsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-17T00:24:00.790Z');
    $request->listDeviceFleetsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T20:32:42.435Z');
    $request->listDeviceFleetsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T20:44:51.627Z');
    $request->listDeviceFleetsRequest->maxResults = 987371;
    $request->listDeviceFleetsRequest->nameContains = 'animi';
    $request->listDeviceFleetsRequest->nextToken = 'recusandae';
    $request->listDeviceFleetsRequest->sortBy = ListDeviceFleetsSortByEnum::CREATION_TIME;
    $request->listDeviceFleetsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'necessitatibus';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = ListDeviceFleetsXAmzTargetEnum::SAGE_MAKER_LIST_DEVICE_FLEETS;

    $response = $sdk->sdk->listDeviceFleets($request);

    if ($response->listDeviceFleetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevices

A list of devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->listDevicesRequest = new ListDevicesRequest();
    $request->listDevicesRequest->deviceFleetName = 'voluptatibus';
    $request->listDevicesRequest->latestHeartbeatAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T10:23:33.296Z');
    $request->listDevicesRequest->maxResults = 227741;
    $request->listDevicesRequest->modelName = 'rerum';
    $request->listDevicesRequest->nextToken = 'in';
    $request->maxResults = 'nostrum';
    $request->nextToken = 'temporibus';
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = ListDevicesXAmzTargetEnum::SAGE_MAKER_LIST_DEVICES;

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomains

Lists the domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->listDomainsRequest = new ListDomainsRequest();
    $request->listDomainsRequest->maxResults = 667215;
    $request->listDomainsRequest->nextToken = 'accusantium';
    $request->maxResults = 'quod';
    $request->nextToken = 'minus';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = ListDomainsXAmzTargetEnum::SAGE_MAKER_LIST_DOMAINS;

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEdgeDeploymentPlans

Lists all edge deployment plans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEdgeDeploymentPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEdgeDeploymentPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEdgeDeploymentPlansSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEdgeDeploymentPlansXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEdgeDeploymentPlansRequest();
    $request->listEdgeDeploymentPlansRequest = new ListEdgeDeploymentPlansRequest();
    $request->listEdgeDeploymentPlansRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T11:20:28.025Z');
    $request->listEdgeDeploymentPlansRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-11T12:21:57.045Z');
    $request->listEdgeDeploymentPlansRequest->deviceFleetNameContains = 'repellendus';
    $request->listEdgeDeploymentPlansRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T04:26:39.100Z');
    $request->listEdgeDeploymentPlansRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T14:43:40.138Z');
    $request->listEdgeDeploymentPlansRequest->maxResults = 413086;
    $request->listEdgeDeploymentPlansRequest->nameContains = 'labore';
    $request->listEdgeDeploymentPlansRequest->nextToken = 'expedita';
    $request->listEdgeDeploymentPlansRequest->sortBy = ListEdgeDeploymentPlansSortByEnum::DEVICE_FLEET_NAME;
    $request->listEdgeDeploymentPlansRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'sunt';
    $request->nextToken = 'enim';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListEdgeDeploymentPlansXAmzTargetEnum::SAGE_MAKER_LIST_EDGE_DEPLOYMENT_PLANS;

    $response = $sdk->sdk->listEdgeDeploymentPlans($request);

    if ($response->listEdgeDeploymentPlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEdgePackagingJobs

Returns a list of edge packaging jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEdgePackagingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEdgePackagingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEdgePackagingJobsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EdgePackagingJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEdgePackagingJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEdgePackagingJobsRequest();
    $request->listEdgePackagingJobsRequest = new ListEdgePackagingJobsRequest();
    $request->listEdgePackagingJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T22:22:53.761Z');
    $request->listEdgePackagingJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T14:24:35.908Z');
    $request->listEdgePackagingJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T22:12:49.401Z');
    $request->listEdgePackagingJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-29T00:00:33.690Z');
    $request->listEdgePackagingJobsRequest->maxResults = 150349;
    $request->listEdgePackagingJobsRequest->modelNameContains = 'impedit';
    $request->listEdgePackagingJobsRequest->nameContains = 'quas';
    $request->listEdgePackagingJobsRequest->nextToken = 'impedit';
    $request->listEdgePackagingJobsRequest->sortBy = ListEdgePackagingJobsSortByEnum::CREATION_TIME;
    $request->listEdgePackagingJobsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listEdgePackagingJobsRequest->statusEquals = EdgePackagingJobStatusEnum::STOPPED;
    $request->maxResults = 'ex';
    $request->nextToken = 'beatae';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListEdgePackagingJobsXAmzTargetEnum::SAGE_MAKER_LIST_EDGE_PACKAGING_JOBS;

    $response = $sdk->sdk->listEdgePackagingJobs($request);

    if ($response->listEdgePackagingJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndpointConfigs

Lists endpoint configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEndpointConfigsInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndpointConfigsRequest();
    $request->listEndpointConfigsInput = new ListEndpointConfigsInput();
    $request->listEndpointConfigsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T01:27:23.704Z');
    $request->listEndpointConfigsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-09T23:04:12.035Z');
    $request->listEndpointConfigsInput->maxResults = 738152;
    $request->listEndpointConfigsInput->nameContains = 'suscipit';
    $request->listEndpointConfigsInput->nextToken = 'saepe';
    $request->listEndpointConfigsInput->sortBy = EndpointConfigSortKeyEnum::CREATION_TIME;
    $request->listEndpointConfigsInput->sortOrder = OrderKeyEnum::DESCENDING;
    $request->maxResults = 'nihil';
    $request->nextToken = 'quaerat';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = ListEndpointConfigsXAmzTargetEnum::SAGE_MAKER_LIST_ENDPOINT_CONFIGS;

    $response = $sdk->sdk->listEndpointConfigs($request);

    if ($response->listEndpointConfigsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndpoints

Lists endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEndpointsInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndpointsRequest();
    $request->listEndpointsInput = new ListEndpointsInput();
    $request->listEndpointsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-23T00:22:34.246Z');
    $request->listEndpointsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T05:51:44.859Z');
    $request->listEndpointsInput->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T22:52:41.773Z');
    $request->listEndpointsInput->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-08T07:27:26.848Z');
    $request->listEndpointsInput->maxResults = 586277;
    $request->listEndpointsInput->nameContains = 'illo';
    $request->listEndpointsInput->nextToken = 'exercitationem';
    $request->listEndpointsInput->sortBy = EndpointSortKeyEnum::STATUS;
    $request->listEndpointsInput->sortOrder = OrderKeyEnum::DESCENDING;
    $request->listEndpointsInput->statusEquals = EndpointStatusEnum::CREATING;
    $request->maxResults = 'maxime';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListEndpointsXAmzTargetEnum::SAGE_MAKER_LIST_ENDPOINTS;

    $response = $sdk->sdk->listEndpoints($request);

    if ($response->listEndpointsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperiments

Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExperimentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortExperimentsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperimentsRequest();
    $request->listExperimentsRequest = new ListExperimentsRequest();
    $request->listExperimentsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-28T03:59:08.192Z');
    $request->listExperimentsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T13:33:42.141Z');
    $request->listExperimentsRequest->maxResults = 978655;
    $request->listExperimentsRequest->nextToken = 'exercitationem';
    $request->listExperimentsRequest->sortBy = SortExperimentsByEnum::CREATION_TIME;
    $request->listExperimentsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListExperimentsXAmzTargetEnum::SAGE_MAKER_LIST_EXPERIMENTS;

    $response = $sdk->sdk->listExperiments($request);

    if ($response->listExperimentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeatureGroups

List <code>FeatureGroup</code>s based on given filter and order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFeatureGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFeatureGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureGroupStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfflineStoreStatusValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureGroupSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureGroupSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFeatureGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFeatureGroupsRequest();
    $request->listFeatureGroupsRequest = new ListFeatureGroupsRequest();
    $request->listFeatureGroupsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T08:32:33.785Z');
    $request->listFeatureGroupsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:01:00.558Z');
    $request->listFeatureGroupsRequest->featureGroupStatusEquals = FeatureGroupStatusEnum::CREATED;
    $request->listFeatureGroupsRequest->maxResults = 435883;
    $request->listFeatureGroupsRequest->nameContains = 'ab';
    $request->listFeatureGroupsRequest->nextToken = 'quaerat';
    $request->listFeatureGroupsRequest->offlineStoreStatusEquals = OfflineStoreStatusValueEnum::ACTIVE;
    $request->listFeatureGroupsRequest->sortBy = FeatureGroupSortByEnum::CREATION_TIME;
    $request->listFeatureGroupsRequest->sortOrder = FeatureGroupSortOrderEnum::ASCENDING;
    $request->maxResults = 'est';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListFeatureGroupsXAmzTargetEnum::SAGE_MAKER_LIST_FEATURE_GROUPS;

    $response = $sdk->sdk->listFeatureGroups($request);

    if ($response->listFeatureGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlowDefinitions

Returns information about the flow definitions in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFlowDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlowDefinitionsRequest();
    $request->listFlowDefinitionsRequest = new ListFlowDefinitionsRequest();
    $request->listFlowDefinitionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T05:09:40.748Z');
    $request->listFlowDefinitionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T08:36:06.296Z');
    $request->listFlowDefinitionsRequest->maxResults = 40874;
    $request->listFlowDefinitionsRequest->nextToken = 'fugiat';
    $request->listFlowDefinitionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'doloremque';
    $request->nextToken = 'cum';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = ListFlowDefinitionsXAmzTargetEnum::SAGE_MAKER_LIST_FLOW_DEFINITIONS;

    $response = $sdk->sdk->listFlowDefinitions($request);

    if ($response->listFlowDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHubContentVersions

<p>List hub content versions.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHubContentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHubContentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HubContentSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHubContentVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHubContentVersionsRequest();
    $request->listHubContentVersionsRequest = new ListHubContentVersionsRequest();
    $request->listHubContentVersionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-31T17:32:08.082Z');
    $request->listHubContentVersionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T18:24:57.713Z');
    $request->listHubContentVersionsRequest->hubContentName = 'maiores';
    $request->listHubContentVersionsRequest->hubContentType = HubContentTypeEnum::MODEL;
    $request->listHubContentVersionsRequest->hubName = 'necessitatibus';
    $request->listHubContentVersionsRequest->maxResults = 803792;
    $request->listHubContentVersionsRequest->maxSchemaVersion = 'cupiditate';
    $request->listHubContentVersionsRequest->minVersion = 'voluptatem';
    $request->listHubContentVersionsRequest->nextToken = 'provident';
    $request->listHubContentVersionsRequest->sortBy = HubContentSortByEnum::HUB_CONTENT_NAME;
    $request->listHubContentVersionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListHubContentVersionsXAmzTargetEnum::SAGE_MAKER_LIST_HUB_CONTENT_VERSIONS;

    $response = $sdk->sdk->listHubContentVersions($request);

    if ($response->listHubContentVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHubContents

<p>List the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHubContentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHubContentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HubContentSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHubContentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHubContentsRequest();
    $request->listHubContentsRequest = new ListHubContentsRequest();
    $request->listHubContentsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-28T08:20:43.554Z');
    $request->listHubContentsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T15:20:40.040Z');
    $request->listHubContentsRequest->hubContentType = HubContentTypeEnum::MODEL;
    $request->listHubContentsRequest->hubName = 'voluptatum';
    $request->listHubContentsRequest->maxResults = 98759;
    $request->listHubContentsRequest->maxSchemaVersion = 'error';
    $request->listHubContentsRequest->nameContains = 'nobis';
    $request->listHubContentsRequest->nextToken = 'tempora';
    $request->listHubContentsRequest->sortBy = HubContentSortByEnum::CREATION_TIME;
    $request->listHubContentsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = ListHubContentsXAmzTargetEnum::SAGE_MAKER_LIST_HUB_CONTENTS;

    $response = $sdk->sdk->listHubContents($request);

    if ($response->listHubContentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHubs

<p>List all existing hubs.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHubsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHubsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HubSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHubsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHubsRequest();
    $request->listHubsRequest = new ListHubsRequest();
    $request->listHubsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T18:09:07.427Z');
    $request->listHubsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T13:51:38.816Z');
    $request->listHubsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-11T13:32:57.106Z');
    $request->listHubsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-12T05:40:24.512Z');
    $request->listHubsRequest->maxResults = 420985;
    $request->listHubsRequest->nameContains = 'nesciunt';
    $request->listHubsRequest->nextToken = 'cupiditate';
    $request->listHubsRequest->sortBy = HubSortByEnum::HUB_STATUS;
    $request->listHubsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ListHubsXAmzTargetEnum::SAGE_MAKER_LIST_HUBS;

    $response = $sdk->sdk->listHubs($request);

    if ($response->listHubsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHumanTaskUis

Returns information about the human task user interfaces in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHumanTaskUisRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHumanTaskUisRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHumanTaskUisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHumanTaskUisRequest();
    $request->listHumanTaskUisRequest = new ListHumanTaskUisRequest();
    $request->listHumanTaskUisRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T08:19:23.491Z');
    $request->listHumanTaskUisRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T04:20:18.679Z');
    $request->listHumanTaskUisRequest->maxResults = 453880;
    $request->listHumanTaskUisRequest->nextToken = 'nisi';
    $request->listHumanTaskUisRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'provident';
    $request->nextToken = 'laboriosam';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = ListHumanTaskUisXAmzTargetEnum::SAGE_MAKER_LIST_HUMAN_TASK_UIS;

    $response = $sdk->sdk->listHumanTaskUis($request);

    if ($response->listHumanTaskUisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHyperParameterTuningJobs

Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHyperParameterTuningJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHyperParameterTuningJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobSortByOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHyperParameterTuningJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHyperParameterTuningJobsRequest();
    $request->listHyperParameterTuningJobsRequest = new ListHyperParameterTuningJobsRequest();
    $request->listHyperParameterTuningJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T00:54:53.039Z');
    $request->listHyperParameterTuningJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-12T20:46:36.515Z');
    $request->listHyperParameterTuningJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-27T11:42:55.462Z');
    $request->listHyperParameterTuningJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-25T08:20:49.928Z');
    $request->listHyperParameterTuningJobsRequest->maxResults = 601626;
    $request->listHyperParameterTuningJobsRequest->nameContains = 'similique';
    $request->listHyperParameterTuningJobsRequest->nextToken = 'eligendi';
    $request->listHyperParameterTuningJobsRequest->sortBy = HyperParameterTuningJobSortByOptionsEnum::CREATION_TIME;
    $request->listHyperParameterTuningJobsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listHyperParameterTuningJobsRequest->statusEquals = HyperParameterTuningJobStatusEnum::STOPPING;
    $request->maxResults = 'nobis';
    $request->nextToken = 'asperiores';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = ListHyperParameterTuningJobsXAmzTargetEnum::SAGE_MAKER_LIST_HYPER_PARAMETER_TUNING_JOBS;

    $response = $sdk->sdk->listHyperParameterTuningJobs($request);

    if ($response->listHyperParameterTuningJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageVersions

Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImageVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImageVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageVersionSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageVersionSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImageVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageVersionsRequest();
    $request->listImageVersionsRequest = new ListImageVersionsRequest();
    $request->listImageVersionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T05:35:32.331Z');
    $request->listImageVersionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-09T18:54:18.793Z');
    $request->listImageVersionsRequest->imageName = 'doloremque';
    $request->listImageVersionsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T20:46:54.246Z');
    $request->listImageVersionsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T02:06:07.148Z');
    $request->listImageVersionsRequest->maxResults = 595986;
    $request->listImageVersionsRequest->nextToken = 'quam';
    $request->listImageVersionsRequest->sortBy = ImageVersionSortByEnum::LAST_MODIFIED_TIME;
    $request->listImageVersionsRequest->sortOrder = ImageVersionSortOrderEnum::DESCENDING;
    $request->maxResults = 'ex';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListImageVersionsXAmzTargetEnum::SAGE_MAKER_LIST_IMAGE_VERSIONS;

    $response = $sdk->sdk->listImageVersions($request);

    if ($response->listImageVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImages

Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagesRequest();
    $request->listImagesRequest = new ListImagesRequest();
    $request->listImagesRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T06:50:48.884Z');
    $request->listImagesRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-09T16:27:22.070Z');
    $request->listImagesRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T11:02:07.974Z');
    $request->listImagesRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-02T06:41:37.594Z');
    $request->listImagesRequest->maxResults = 960523;
    $request->listImagesRequest->nameContains = 'reiciendis';
    $request->listImagesRequest->nextToken = 'quod';
    $request->listImagesRequest->sortBy = ImageSortByEnum::LAST_MODIFIED_TIME;
    $request->listImagesRequest->sortOrder = ImageSortOrderEnum::ASCENDING;
    $request->maxResults = 'facere';
    $request->nextToken = 'maxime';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = ListImagesXAmzTargetEnum::SAGE_MAKER_LIST_IMAGES;

    $response = $sdk->sdk->listImages($request);

    if ($response->listImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceExperiments

Returns the list of all inference experiments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceExperimentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceExperimentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortInferenceExperimentsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceExperimentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceExperimentsRequest();
    $request->listInferenceExperimentsRequest = new ListInferenceExperimentsRequest();
    $request->listInferenceExperimentsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T12:33:19.270Z');
    $request->listInferenceExperimentsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-16T04:21:36.088Z');
    $request->listInferenceExperimentsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-13T07:18:04.819Z');
    $request->listInferenceExperimentsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T00:08:09.247Z');
    $request->listInferenceExperimentsRequest->maxResults = 959696;
    $request->listInferenceExperimentsRequest->nameContains = 'velit';
    $request->listInferenceExperimentsRequest->nextToken = 'adipisci';
    $request->listInferenceExperimentsRequest->sortBy = SortInferenceExperimentsByEnum::NAME;
    $request->listInferenceExperimentsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listInferenceExperimentsRequest->statusEquals = InferenceExperimentStatusEnum::COMPLETED;
    $request->listInferenceExperimentsRequest->type = InferenceExperimentTypeEnum::SHADOW_MODE;
    $request->maxResults = 'at';
    $request->nextToken = 'tenetur';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListInferenceExperimentsXAmzTargetEnum::SAGE_MAKER_LIST_INFERENCE_EXPERIMENTS;

    $response = $sdk->sdk->listInferenceExperiments($request);

    if ($response->listInferenceExperimentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceRecommendationsJobSteps

<p>Returns a list of the subtasks for an Inference Recommender job.</p> <p>The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceRecommendationsJobStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceRecommendationsJobStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationStepTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceRecommendationsJobStepsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceRecommendationsJobStepsRequest();
    $request->listInferenceRecommendationsJobStepsRequest = new ListInferenceRecommendationsJobStepsRequest();
    $request->listInferenceRecommendationsJobStepsRequest->jobName = 'quasi';
    $request->listInferenceRecommendationsJobStepsRequest->maxResults = 555194;
    $request->listInferenceRecommendationsJobStepsRequest->nextToken = 'odio';
    $request->listInferenceRecommendationsJobStepsRequest->status = RecommendationJobStatusEnum::COMPLETED;
    $request->listInferenceRecommendationsJobStepsRequest->stepType = RecommendationStepTypeEnum::BENCHMARK;
    $request->maxResults = 'porro';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListInferenceRecommendationsJobStepsXAmzTargetEnum::SAGE_MAKER_LIST_INFERENCE_RECOMMENDATIONS_JOB_STEPS;

    $response = $sdk->sdk->listInferenceRecommendationsJobSteps($request);

    if ($response->listInferenceRecommendationsJobStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceRecommendationsJobs

Lists recommendation jobs that satisfy various filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceRecommendationsJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceRecommendationsJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceRecommendationsJobsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceRecommendationsJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceRecommendationsJobsRequest();
    $request->listInferenceRecommendationsJobsRequest = new ListInferenceRecommendationsJobsRequest();
    $request->listInferenceRecommendationsJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-25T00:39:09.630Z');
    $request->listInferenceRecommendationsJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-13T00:37:41.372Z');
    $request->listInferenceRecommendationsJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-09T16:14:03.266Z');
    $request->listInferenceRecommendationsJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T14:31:19.145Z');
    $request->listInferenceRecommendationsJobsRequest->maxResults = 926027;
    $request->listInferenceRecommendationsJobsRequest->nameContains = 'quisquam';
    $request->listInferenceRecommendationsJobsRequest->nextToken = 'facere';
    $request->listInferenceRecommendationsJobsRequest->sortBy = ListInferenceRecommendationsJobsSortByEnum::CREATION_TIME;
    $request->listInferenceRecommendationsJobsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listInferenceRecommendationsJobsRequest->statusEquals = RecommendationJobStatusEnum::FAILED;
    $request->maxResults = 'dolor';
    $request->nextToken = 'sint';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = ListInferenceRecommendationsJobsXAmzTargetEnum::SAGE_MAKER_LIST_INFERENCE_RECOMMENDATIONS_JOBS;

    $response = $sdk->sdk->listInferenceRecommendationsJobs($request);

    if ($response->listInferenceRecommendationsJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLabelingJobs

Gets a list of labeling jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelingJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelingJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLabelingJobsRequest();
    $request->listLabelingJobsRequest = new ListLabelingJobsRequest();
    $request->listLabelingJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T18:26:39.282Z');
    $request->listLabelingJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T00:52:58.130Z');
    $request->listLabelingJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T21:11:03.072Z');
    $request->listLabelingJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T05:31:52.329Z');
    $request->listLabelingJobsRequest->maxResults = 242532;
    $request->listLabelingJobsRequest->nameContains = 'ratione';
    $request->listLabelingJobsRequest->nextToken = 'quas';
    $request->listLabelingJobsRequest->sortBy = SortByEnum::STATUS;
    $request->listLabelingJobsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listLabelingJobsRequest->statusEquals = LabelingJobStatusEnum::STOPPING;
    $request->maxResults = 'doloremque';
    $request->nextToken = 'totam';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = ListLabelingJobsXAmzTargetEnum::SAGE_MAKER_LIST_LABELING_JOBS;

    $response = $sdk->sdk->listLabelingJobs($request);

    if ($response->listLabelingJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLabelingJobsForWorkteam

Gets a list of labeling jobs assigned to a specified work team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelingJobsForWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelingJobsForWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelingJobsForWorkteamSortByOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelingJobsForWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLabelingJobsForWorkteamRequest();
    $request->listLabelingJobsForWorkteamRequest = new ListLabelingJobsForWorkteamRequest();
    $request->listLabelingJobsForWorkteamRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T06:41:35.111Z');
    $request->listLabelingJobsForWorkteamRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T16:13:53.889Z');
    $request->listLabelingJobsForWorkteamRequest->jobReferenceCodeContains = 'quidem';
    $request->listLabelingJobsForWorkteamRequest->maxResults = 247615;
    $request->listLabelingJobsForWorkteamRequest->nextToken = 'beatae';
    $request->listLabelingJobsForWorkteamRequest->sortBy = ListLabelingJobsForWorkteamSortByOptionsEnum::CREATION_TIME;
    $request->listLabelingJobsForWorkteamRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listLabelingJobsForWorkteamRequest->workteamArn = 'molestias';
    $request->maxResults = 'beatae';
    $request->nextToken = 'autem';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = ListLabelingJobsForWorkteamXAmzTargetEnum::SAGE_MAKER_LIST_LABELING_JOBS_FOR_WORKTEAM;

    $response = $sdk->sdk->listLabelingJobsForWorkteam($request);

    if ($response->listLabelingJobsForWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLineageGroups

A list of lineage groups shared with your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLineageGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLineageGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortLineageGroupsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLineageGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLineageGroupsRequest();
    $request->listLineageGroupsRequest = new ListLineageGroupsRequest();
    $request->listLineageGroupsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-05T22:49:54.160Z');
    $request->listLineageGroupsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T19:43:33.262Z');
    $request->listLineageGroupsRequest->maxResults = 310195;
    $request->listLineageGroupsRequest->nextToken = 'consequatur';
    $request->listLineageGroupsRequest->sortBy = SortLineageGroupsByEnum::CREATION_TIME;
    $request->listLineageGroupsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'commodi';
    $request->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = ListLineageGroupsXAmzTargetEnum::SAGE_MAKER_LIST_LINEAGE_GROUPS;

    $response = $sdk->sdk->listLineageGroups($request);

    if ($response->listLineageGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelBiasJobDefinitions

Lists model bias jobs definitions that satisfy various filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelBiasJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelBiasJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinitionSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelBiasJobDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelBiasJobDefinitionsRequest();
    $request->listModelBiasJobDefinitionsRequest = new ListModelBiasJobDefinitionsRequest();
    $request->listModelBiasJobDefinitionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T19:47:59.278Z');
    $request->listModelBiasJobDefinitionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-29T07:00:16.197Z');
    $request->listModelBiasJobDefinitionsRequest->endpointName = 'ex';
    $request->listModelBiasJobDefinitionsRequest->maxResults = 845078;
    $request->listModelBiasJobDefinitionsRequest->nameContains = 'dicta';
    $request->listModelBiasJobDefinitionsRequest->nextToken = 'quia';
    $request->listModelBiasJobDefinitionsRequest->sortBy = MonitoringJobDefinitionSortKeyEnum::NAME;
    $request->listModelBiasJobDefinitionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = ListModelBiasJobDefinitionsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_BIAS_JOB_DEFINITIONS;

    $response = $sdk->sdk->listModelBiasJobDefinitions($request);

    if ($response->listModelBiasJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelCardExportJobs

List the export jobs for the Amazon SageMaker Model Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelCardExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardExportJobSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardExportJobSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardExportJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelCardExportJobsRequest();
    $request->listModelCardExportJobsRequest = new ListModelCardExportJobsRequest();
    $request->listModelCardExportJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-16T19:22:26.586Z');
    $request->listModelCardExportJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-06T19:16:47.821Z');
    $request->listModelCardExportJobsRequest->maxResults = 115561;
    $request->listModelCardExportJobsRequest->modelCardExportJobNameContains = 'sapiente';
    $request->listModelCardExportJobsRequest->modelCardName = 'ipsum';
    $request->listModelCardExportJobsRequest->modelCardVersion = 9358;
    $request->listModelCardExportJobsRequest->nextToken = 'soluta';
    $request->listModelCardExportJobsRequest->sortBy = ModelCardExportJobSortByEnum::STATUS;
    $request->listModelCardExportJobsRequest->sortOrder = ModelCardExportJobSortOrderEnum::ASCENDING;
    $request->listModelCardExportJobsRequest->statusEquals = ModelCardExportJobStatusEnum::FAILED;
    $request->maxResults = 'labore';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = ListModelCardExportJobsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_CARD_EXPORT_JOBS;

    $response = $sdk->sdk->listModelCardExportJobs($request);

    if ($response->listModelCardExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelCardVersions

List existing versions of an Amazon SageMaker Model Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelCardVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardVersionSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelCardVersionsRequest();
    $request->listModelCardVersionsRequest = new ListModelCardVersionsRequest();
    $request->listModelCardVersionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T13:55:43.105Z');
    $request->listModelCardVersionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T07:02:13.830Z');
    $request->listModelCardVersionsRequest->maxResults = 324999;
    $request->listModelCardVersionsRequest->modelCardName = 'sit';
    $request->listModelCardVersionsRequest->modelCardStatus = ModelCardStatusEnum::PENDING_REVIEW;
    $request->listModelCardVersionsRequest->nextToken = 'laboriosam';
    $request->listModelCardVersionsRequest->sortBy = ModelCardVersionSortByEnum::VERSION;
    $request->listModelCardVersionsRequest->sortOrder = ModelCardSortOrderEnum::ASCENDING;
    $request->maxResults = 'quasi';
    $request->nextToken = 'rem';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = ListModelCardVersionsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_CARD_VERSIONS;

    $response = $sdk->sdk->listModelCardVersions($request);

    if ($response->listModelCardVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelCards

List existing model cards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelCardsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelCardsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelCardsRequest();
    $request->listModelCardsRequest = new ListModelCardsRequest();
    $request->listModelCardsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-13T15:44:04.050Z');
    $request->listModelCardsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T18:02:47.466Z');
    $request->listModelCardsRequest->maxResults = 7919;
    $request->listModelCardsRequest->modelCardStatus = ModelCardStatusEnum::DRAFT;
    $request->listModelCardsRequest->nameContains = 'doloremque';
    $request->listModelCardsRequest->nextToken = 'optio';
    $request->listModelCardsRequest->sortBy = ModelCardSortByEnum::NAME;
    $request->listModelCardsRequest->sortOrder = ModelCardSortOrderEnum::DESCENDING;
    $request->maxResults = 'cumque';
    $request->nextToken = 'maxime';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ListModelCardsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_CARDS;

    $response = $sdk->sdk->listModelCards($request);

    if ($response->listModelCardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelExplainabilityJobDefinitions

Lists model explainability job definitions that satisfy various filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelExplainabilityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelExplainabilityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinitionSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelExplainabilityJobDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelExplainabilityJobDefinitionsRequest();
    $request->listModelExplainabilityJobDefinitionsRequest = new ListModelExplainabilityJobDefinitionsRequest();
    $request->listModelExplainabilityJobDefinitionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-28T06:31:34.790Z');
    $request->listModelExplainabilityJobDefinitionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T02:45:20.375Z');
    $request->listModelExplainabilityJobDefinitionsRequest->endpointName = 'suscipit';
    $request->listModelExplainabilityJobDefinitionsRequest->maxResults = 512370;
    $request->listModelExplainabilityJobDefinitionsRequest->nameContains = 'facilis';
    $request->listModelExplainabilityJobDefinitionsRequest->nextToken = 'laudantium';
    $request->listModelExplainabilityJobDefinitionsRequest->sortBy = MonitoringJobDefinitionSortKeyEnum::NAME;
    $request->listModelExplainabilityJobDefinitionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'quia';
    $request->nextToken = 'officia';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = ListModelExplainabilityJobDefinitionsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_EXPLAINABILITY_JOB_DEFINITIONS;

    $response = $sdk->sdk->listModelExplainabilityJobDefinitions($request);

    if ($response->listModelExplainabilityJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelMetadata

Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelMetadataSearchExpression;
use \OpenAPI\OpenAPI\Models\Shared\ModelMetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\ModelMetadataFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelMetadataRequest();
    $request->listModelMetadataRequest = new ListModelMetadataRequest();
    $request->listModelMetadataRequest->maxResults = 697591;
    $request->listModelMetadataRequest->nextToken = 'quisquam';
    $request->listModelMetadataRequest->searchExpression = new ModelMetadataSearchExpression();
    $request->listModelMetadataRequest->searchExpression->filters = [
        new ModelMetadataFilter(),
        new ModelMetadataFilter(),
        new ModelMetadataFilter(),
    ];
    $request->maxResults = 'tempora';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = ListModelMetadataXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_METADATA;

    $response = $sdk->sdk->listModelMetadata($request);

    if ($response->listModelMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelPackageGroups

Gets a list of the model groups in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelPackageGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelPackageGroupsInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageGroupSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelPackageGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelPackageGroupsRequest();
    $request->listModelPackageGroupsInput = new ListModelPackageGroupsInput();
    $request->listModelPackageGroupsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-20T01:23:19.954Z');
    $request->listModelPackageGroupsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-20T06:27:06.667Z');
    $request->listModelPackageGroupsInput->maxResults = 678695;
    $request->listModelPackageGroupsInput->nameContains = 'quibusdam';
    $request->listModelPackageGroupsInput->nextToken = 'earum';
    $request->listModelPackageGroupsInput->sortBy = ModelPackageGroupSortByEnum::CREATION_TIME;
    $request->listModelPackageGroupsInput->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'molestiae';
    $request->nextToken = 'impedit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = ListModelPackageGroupsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_PACKAGE_GROUPS;

    $response = $sdk->sdk->listModelPackageGroups($request);

    if ($response->listModelPackageGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelPackages

Lists the model packages that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelPackagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelPackagesInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelPackagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelPackagesRequest();
    $request->listModelPackagesInput = new ListModelPackagesInput();
    $request->listModelPackagesInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T22:57:33.802Z');
    $request->listModelPackagesInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T12:31:57.467Z');
    $request->listModelPackagesInput->maxResults = 400492;
    $request->listModelPackagesInput->modelApprovalStatus = ModelApprovalStatusEnum::REJECTED;
    $request->listModelPackagesInput->modelPackageGroupName = 'vel';
    $request->listModelPackagesInput->modelPackageType = ModelPackageTypeEnum::VERSIONED;
    $request->listModelPackagesInput->nameContains = 'quos';
    $request->listModelPackagesInput->nextToken = 'illo';
    $request->listModelPackagesInput->sortBy = ModelPackageSortByEnum::NAME;
    $request->listModelPackagesInput->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'fugiat';
    $request->nextToken = 'impedit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListModelPackagesXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_PACKAGES;

    $response = $sdk->sdk->listModelPackages($request);

    if ($response->listModelPackagesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelQualityJobDefinitions

Gets a list of model quality monitoring job definitions in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelQualityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelQualityJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinitionSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelQualityJobDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelQualityJobDefinitionsRequest();
    $request->listModelQualityJobDefinitionsRequest = new ListModelQualityJobDefinitionsRequest();
    $request->listModelQualityJobDefinitionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-13T02:47:14.695Z');
    $request->listModelQualityJobDefinitionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-26T14:11:20.622Z');
    $request->listModelQualityJobDefinitionsRequest->endpointName = 'ipsam';
    $request->listModelQualityJobDefinitionsRequest->maxResults = 578081;
    $request->listModelQualityJobDefinitionsRequest->nameContains = 'ipsum';
    $request->listModelQualityJobDefinitionsRequest->nextToken = 'accusamus';
    $request->listModelQualityJobDefinitionsRequest->sortBy = MonitoringJobDefinitionSortKeyEnum::CREATION_TIME;
    $request->listModelQualityJobDefinitionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'fugit';
    $request->nextToken = 'quo';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = ListModelQualityJobDefinitionsXAmzTargetEnum::SAGE_MAKER_LIST_MODEL_QUALITY_JOB_DEFINITIONS;

    $response = $sdk->sdk->listModelQualityJobDefinitions($request);

    if ($response->listModelQualityJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModels

Lists models created with the <code>CreateModel</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelsInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelsRequest();
    $request->listModelsInput = new ListModelsInput();
    $request->listModelsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-16T20:51:35.405Z');
    $request->listModelsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-15T01:03:52.923Z');
    $request->listModelsInput->maxResults = 813975;
    $request->listModelsInput->nameContains = 'nobis';
    $request->listModelsInput->nextToken = 'at';
    $request->listModelsInput->sortBy = ModelSortKeyEnum::CREATION_TIME;
    $request->listModelsInput->sortOrder = OrderKeyEnum::ASCENDING;
    $request->maxResults = 'temporibus';
    $request->nextToken = 'tenetur';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListModelsXAmzTargetEnum::SAGE_MAKER_LIST_MODELS;

    $response = $sdk->sdk->listModels($request);

    if ($response->listModelsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitoringAlertHistory

Gets a list of past alerts in a model monitoring schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringAlertHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitoringAlertHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringAlertHistorySortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringAlertStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringAlertHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitoringAlertHistoryRequest();
    $request->listMonitoringAlertHistoryRequest = new ListMonitoringAlertHistoryRequest();
    $request->listMonitoringAlertHistoryRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T21:02:26.251Z');
    $request->listMonitoringAlertHistoryRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T12:15:56.921Z');
    $request->listMonitoringAlertHistoryRequest->maxResults = 771289;
    $request->listMonitoringAlertHistoryRequest->monitoringAlertName = 'minima';
    $request->listMonitoringAlertHistoryRequest->monitoringScheduleName = 'quos';
    $request->listMonitoringAlertHistoryRequest->nextToken = 'blanditiis';
    $request->listMonitoringAlertHistoryRequest->sortBy = MonitoringAlertHistorySortKeyEnum::STATUS;
    $request->listMonitoringAlertHistoryRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listMonitoringAlertHistoryRequest->statusEquals = MonitoringAlertStatusEnum::OK;
    $request->maxResults = 'quas';
    $request->nextToken = 'ipsum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = ListMonitoringAlertHistoryXAmzTargetEnum::SAGE_MAKER_LIST_MONITORING_ALERT_HISTORY;

    $response = $sdk->sdk->listMonitoringAlertHistory($request);

    if ($response->listMonitoringAlertHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitoringAlerts

Gets the alerts for a single monitoring schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringAlertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitoringAlertsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringAlertsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitoringAlertsRequest();
    $request->listMonitoringAlertsRequest = new ListMonitoringAlertsRequest();
    $request->listMonitoringAlertsRequest->maxResults = 234964;
    $request->listMonitoringAlertsRequest->monitoringScheduleName = 'sapiente';
    $request->listMonitoringAlertsRequest->nextToken = 'voluptatibus';
    $request->maxResults = 'assumenda';
    $request->nextToken = 'repellendus';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListMonitoringAlertsXAmzTargetEnum::SAGE_MAKER_LIST_MONITORING_ALERTS;

    $response = $sdk->sdk->listMonitoringAlerts($request);

    if ($response->listMonitoringAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitoringExecutions

Returns list of all monitoring job executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitoringExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringExecutionSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitoringExecutionsRequest();
    $request->listMonitoringExecutionsRequest = new ListMonitoringExecutionsRequest();
    $request->listMonitoringExecutionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-08T23:10:36.760Z');
    $request->listMonitoringExecutionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T09:26:05.109Z');
    $request->listMonitoringExecutionsRequest->endpointName = 'neque';
    $request->listMonitoringExecutionsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T07:57:22.107Z');
    $request->listMonitoringExecutionsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:33:21.860Z');
    $request->listMonitoringExecutionsRequest->maxResults = 784059;
    $request->listMonitoringExecutionsRequest->monitoringJobDefinitionName = 'fugiat';
    $request->listMonitoringExecutionsRequest->monitoringScheduleName = 'soluta';
    $request->listMonitoringExecutionsRequest->monitoringTypeEquals = MonitoringTypeEnum::DATA_QUALITY;
    $request->listMonitoringExecutionsRequest->nextToken = 'reiciendis';
    $request->listMonitoringExecutionsRequest->scheduledTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T16:22:51.183Z');
    $request->listMonitoringExecutionsRequest->scheduledTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T04:23:42.889Z');
    $request->listMonitoringExecutionsRequest->sortBy = MonitoringExecutionSortKeyEnum::CREATION_TIME;
    $request->listMonitoringExecutionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listMonitoringExecutionsRequest->statusEquals = ExecutionStatusEnum::IN_PROGRESS;
    $request->maxResults = 'iusto';
    $request->nextToken = 'fugiat';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListMonitoringExecutionsXAmzTargetEnum::SAGE_MAKER_LIST_MONITORING_EXECUTIONS;

    $response = $sdk->sdk->listMonitoringExecutions($request);

    if ($response->listMonitoringExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitoringSchedules

Returns list of all monitoring schedules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitoringSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringScheduleSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoringSchedulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitoringSchedulesRequest();
    $request->listMonitoringSchedulesRequest = new ListMonitoringSchedulesRequest();
    $request->listMonitoringSchedulesRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-20T11:05:09.885Z');
    $request->listMonitoringSchedulesRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T17:03:01.012Z');
    $request->listMonitoringSchedulesRequest->endpointName = 'animi';
    $request->listMonitoringSchedulesRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-17T02:32:36.716Z');
    $request->listMonitoringSchedulesRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T09:17:21.956Z');
    $request->listMonitoringSchedulesRequest->maxResults = 909093;
    $request->listMonitoringSchedulesRequest->monitoringJobDefinitionName = 'laboriosam';
    $request->listMonitoringSchedulesRequest->monitoringTypeEquals = MonitoringTypeEnum::DATA_QUALITY;
    $request->listMonitoringSchedulesRequest->nameContains = 'blanditiis';
    $request->listMonitoringSchedulesRequest->nextToken = 'quidem';
    $request->listMonitoringSchedulesRequest->sortBy = MonitoringScheduleSortKeyEnum::STATUS;
    $request->listMonitoringSchedulesRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listMonitoringSchedulesRequest->statusEquals = ScheduleStatusEnum::STOPPED;
    $request->maxResults = 'dolores';
    $request->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = ListMonitoringSchedulesXAmzTargetEnum::SAGE_MAKER_LIST_MONITORING_SCHEDULES;

    $response = $sdk->sdk->listMonitoringSchedules($request);

    if ($response->listMonitoringSchedulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotebookInstanceLifecycleConfigs

Lists notebook instance lifestyle configurations created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookInstanceLifecycleConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNotebookInstanceLifecycleConfigsInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceLifecycleConfigSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceLifecycleConfigSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotebookInstanceLifecycleConfigsRequest();
    $request->listNotebookInstanceLifecycleConfigsInput = new ListNotebookInstanceLifecycleConfigsInput();
    $request->listNotebookInstanceLifecycleConfigsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-12T22:17:34.698Z');
    $request->listNotebookInstanceLifecycleConfigsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T08:54:06.874Z');
    $request->listNotebookInstanceLifecycleConfigsInput->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T01:43:07.124Z');
    $request->listNotebookInstanceLifecycleConfigsInput->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T06:45:02.544Z');
    $request->listNotebookInstanceLifecycleConfigsInput->maxResults = 223717;
    $request->listNotebookInstanceLifecycleConfigsInput->nameContains = 'ad';
    $request->listNotebookInstanceLifecycleConfigsInput->nextToken = 'atque';
    $request->listNotebookInstanceLifecycleConfigsInput->sortBy = NotebookInstanceLifecycleConfigSortKeyEnum::NAME;
    $request->listNotebookInstanceLifecycleConfigsInput->sortOrder = NotebookInstanceLifecycleConfigSortOrderEnum::DESCENDING;
    $request->maxResults = 'reprehenderit';
    $request->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListNotebookInstanceLifecycleConfigsXAmzTargetEnum::SAGE_MAKER_LIST_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIGS;

    $response = $sdk->sdk->listNotebookInstanceLifecycleConfigs($request);

    if ($response->listNotebookInstanceLifecycleConfigsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotebookInstances

Returns a list of the SageMaker notebook instances in the requester's account in an Amazon Web Services Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNotebookInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotebookInstancesRequest();
    $request->listNotebookInstancesInput = new ListNotebookInstancesInput();
    $request->listNotebookInstancesInput->additionalCodeRepositoryEquals = 'vitae';
    $request->listNotebookInstancesInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-15T21:46:49.215Z');
    $request->listNotebookInstancesInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T08:06:02.567Z');
    $request->listNotebookInstancesInput->defaultCodeRepositoryContains = 'repudiandae';
    $request->listNotebookInstancesInput->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T09:58:06.659Z');
    $request->listNotebookInstancesInput->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T12:42:18.572Z');
    $request->listNotebookInstancesInput->maxResults = 82396;
    $request->listNotebookInstancesInput->nameContains = 'voluptate';
    $request->listNotebookInstancesInput->nextToken = 'sed';
    $request->listNotebookInstancesInput->notebookInstanceLifecycleConfigNameContains = 'dolorem';
    $request->listNotebookInstancesInput->sortBy = NotebookInstanceSortKeyEnum::NAME;
    $request->listNotebookInstancesInput->sortOrder = NotebookInstanceSortOrderEnum::ASCENDING;
    $request->listNotebookInstancesInput->statusEquals = NotebookInstanceStatusEnum::IN_SERVICE;
    $request->maxResults = 'voluptate';
    $request->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = ListNotebookInstancesXAmzTargetEnum::SAGE_MAKER_LIST_NOTEBOOK_INSTANCES;

    $response = $sdk->sdk->listNotebookInstances($request);

    if ($response->listNotebookInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelineExecutionSteps

Gets a list of <code>PipeLineExecutionStep</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelineExecutionStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionStepsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelineExecutionStepsRequest();
    $request->listPipelineExecutionStepsRequest = new ListPipelineExecutionStepsRequest();
    $request->listPipelineExecutionStepsRequest->maxResults = 986594;
    $request->listPipelineExecutionStepsRequest->nextToken = 'omnis';
    $request->listPipelineExecutionStepsRequest->pipelineExecutionArn = 'quam';
    $request->listPipelineExecutionStepsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'voluptates';
    $request->nextToken = 'sequi';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListPipelineExecutionStepsXAmzTargetEnum::SAGE_MAKER_LIST_PIPELINE_EXECUTION_STEPS;

    $response = $sdk->sdk->listPipelineExecutionSteps($request);

    if ($response->listPipelineExecutionStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelineExecutions

Gets a list of the pipeline executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelineExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortPipelineExecutionsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelineExecutionsRequest();
    $request->listPipelineExecutionsRequest = new ListPipelineExecutionsRequest();
    $request->listPipelineExecutionsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-25T19:10:58.985Z');
    $request->listPipelineExecutionsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-19T12:32:11.312Z');
    $request->listPipelineExecutionsRequest->maxResults = 225001;
    $request->listPipelineExecutionsRequest->nextToken = 'repellendus';
    $request->listPipelineExecutionsRequest->pipelineName = 'temporibus';
    $request->listPipelineExecutionsRequest->sortBy = SortPipelineExecutionsByEnum::PIPELINE_EXECUTION_ARN;
    $request->listPipelineExecutionsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'a';
    $request->nextToken = 'beatae';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = ListPipelineExecutionsXAmzTargetEnum::SAGE_MAKER_LIST_PIPELINE_EXECUTIONS;

    $response = $sdk->sdk->listPipelineExecutions($request);

    if ($response->listPipelineExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelineParametersForExecution

Gets a list of parameters for a pipeline execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineParametersForExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelineParametersForExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineParametersForExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelineParametersForExecutionRequest();
    $request->listPipelineParametersForExecutionRequest = new ListPipelineParametersForExecutionRequest();
    $request->listPipelineParametersForExecutionRequest->maxResults = 140909;
    $request->listPipelineParametersForExecutionRequest->nextToken = 'aliquid';
    $request->listPipelineParametersForExecutionRequest->pipelineExecutionArn = 'pariatur';
    $request->maxResults = 'enim';
    $request->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = ListPipelineParametersForExecutionXAmzTargetEnum::SAGE_MAKER_LIST_PIPELINE_PARAMETERS_FOR_EXECUTION;

    $response = $sdk->sdk->listPipelineParametersForExecution($request);

    if ($response->listPipelineParametersForExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelines

Gets a list of pipelines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortPipelinesByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelinesRequest();
    $request->listPipelinesRequest = new ListPipelinesRequest();
    $request->listPipelinesRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-04T01:52:53.735Z');
    $request->listPipelinesRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-08T12:06:36.486Z');
    $request->listPipelinesRequest->maxResults = 112751;
    $request->listPipelinesRequest->nextToken = 'odio';
    $request->listPipelinesRequest->pipelineNamePrefix = 'quas';
    $request->listPipelinesRequest->sortBy = SortPipelinesByEnum::NAME;
    $request->listPipelinesRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'placeat';
    $request->nextToken = 'quod';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListPipelinesXAmzTargetEnum::SAGE_MAKER_LIST_PIPELINES;

    $response = $sdk->sdk->listPipelines($request);

    if ($response->listPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProcessingJobs

Lists processing jobs that satisfy various filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProcessingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProcessingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProcessingJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProcessingJobsRequest();
    $request->listProcessingJobsRequest = new ListProcessingJobsRequest();
    $request->listProcessingJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-28T22:51:49.912Z');
    $request->listProcessingJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T23:25:35.619Z');
    $request->listProcessingJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-16T14:45:25.198Z');
    $request->listProcessingJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-21T19:40:11.351Z');
    $request->listProcessingJobsRequest->maxResults = 704644;
    $request->listProcessingJobsRequest->nameContains = 'aliquam';
    $request->listProcessingJobsRequest->nextToken = 'repudiandae';
    $request->listProcessingJobsRequest->sortBy = SortByEnum::NAME;
    $request->listProcessingJobsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listProcessingJobsRequest->statusEquals = ProcessingJobStatusEnum::IN_PROGRESS;
    $request->maxResults = 'officiis';
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListProcessingJobsXAmzTargetEnum::SAGE_MAKER_LIST_PROCESSING_JOBS;

    $response = $sdk->sdk->listProcessingJobs($request);

    if ($response->listProcessingJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Gets a list of the projects in an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProjectsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->listProjectsInput = new ListProjectsInput();
    $request->listProjectsInput->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T17:36:10.080Z');
    $request->listProjectsInput->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-07T06:13:25.375Z');
    $request->listProjectsInput->maxResults = 256813;
    $request->listProjectsInput->nameContains = 'enim';
    $request->listProjectsInput->nextToken = 'cupiditate';
    $request->listProjectsInput->sortBy = ProjectSortByEnum::CREATION_TIME;
    $request->listProjectsInput->sortOrder = ProjectSortOrderEnum::DESCENDING;
    $request->maxResults = 'fuga';
    $request->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListProjectsXAmzTargetEnum::SAGE_MAKER_LIST_PROJECTS;

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSpaces

Lists spaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSpacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSpacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpaceSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSpacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSpacesRequest();
    $request->listSpacesRequest = new ListSpacesRequest();
    $request->listSpacesRequest->domainIdEquals = 'nobis';
    $request->listSpacesRequest->maxResults = 186130;
    $request->listSpacesRequest->nextToken = 'accusantium';
    $request->listSpacesRequest->sortBy = SpaceSortKeyEnum::CREATION_TIME;
    $request->listSpacesRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listSpacesRequest->spaceNameContains = 'recusandae';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ListSpacesXAmzTargetEnum::SAGE_MAKER_LIST_SPACES;

    $response = $sdk->sdk->listSpaces($request);

    if ($response->listSpacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStageDevices

Lists devices allocated to the stage, containing detailed device information and deployment status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStageDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStageDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStageDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStageDevicesRequest();
    $request->listStageDevicesRequest = new ListStageDevicesRequest();
    $request->listStageDevicesRequest->edgeDeploymentPlanName = 'in';
    $request->listStageDevicesRequest->excludeDevicesDeployedInOtherStage = false;
    $request->listStageDevicesRequest->maxResults = 635314;
    $request->listStageDevicesRequest->nextToken = 'doloremque';
    $request->listStageDevicesRequest->stageName = 'fuga';
    $request->maxResults = 'dicta';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = ListStageDevicesXAmzTargetEnum::SAGE_MAKER_LIST_STAGE_DEVICES;

    $response = $sdk->sdk->listStageDevices($request);

    if ($response->listStageDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudioLifecycleConfigs

Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioLifecycleConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStudioLifecycleConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StudioLifecycleConfigAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StudioLifecycleConfigSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioLifecycleConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudioLifecycleConfigsRequest();
    $request->listStudioLifecycleConfigsRequest = new ListStudioLifecycleConfigsRequest();
    $request->listStudioLifecycleConfigsRequest->appTypeEquals = StudioLifecycleConfigAppTypeEnum::JUPYTER_SERVER;
    $request->listStudioLifecycleConfigsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-19T12:07:32.819Z');
    $request->listStudioLifecycleConfigsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T04:09:59.591Z');
    $request->listStudioLifecycleConfigsRequest->maxResults = 644397;
    $request->listStudioLifecycleConfigsRequest->modifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-09T23:04:31.816Z');
    $request->listStudioLifecycleConfigsRequest->modifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T20:02:05.121Z');
    $request->listStudioLifecycleConfigsRequest->nameContains = 'deserunt';
    $request->listStudioLifecycleConfigsRequest->nextToken = 'hic';
    $request->listStudioLifecycleConfigsRequest->sortBy = StudioLifecycleConfigSortKeyEnum::LAST_MODIFIED_TIME;
    $request->listStudioLifecycleConfigsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'ipsam';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListStudioLifecycleConfigsXAmzTargetEnum::SAGE_MAKER_LIST_STUDIO_LIFECYCLE_CONFIGS;

    $response = $sdk->sdk->listStudioLifecycleConfigs($request);

    if ($response->listStudioLifecycleConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscribedWorkteams

Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribedWorkteamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSubscribedWorkteamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribedWorkteamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscribedWorkteamsRequest();
    $request->listSubscribedWorkteamsRequest = new ListSubscribedWorkteamsRequest();
    $request->listSubscribedWorkteamsRequest->maxResults = 9284;
    $request->listSubscribedWorkteamsRequest->nameContains = 'fugiat';
    $request->listSubscribedWorkteamsRequest->nextToken = 'voluptatum';
    $request->maxResults = 'velit';
    $request->nextToken = 'hic';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ListSubscribedWorkteamsXAmzTargetEnum::SAGE_MAKER_LIST_SUBSCRIBED_WORKTEAMS;

    $response = $sdk->sdk->listSubscribedWorkteams($request);

    if ($response->listSubscribedWorkteamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Returns the tags for the specified SageMaker resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->listTagsInput = new ListTagsInput();
    $request->listTagsInput->maxResults = 581889;
    $request->listTagsInput->nextToken = 'assumenda';
    $request->listTagsInput->resourceArn = 'sunt';
    $request->maxResults = 'odit';
    $request->nextToken = 'vero';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::SAGE_MAKER_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrainingJobs

<p>Lists training jobs.</p> <note> <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same time, the <code>MaxResults</code> number of training jobs are first retrieved ignoring the <code>StatusEquals</code> parameter and then they are filtered by the <code>StatusEquals</code> parameter, which is returned as a response.</p> <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p> <p> <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code> </p> <p>First, 100 trainings jobs with any status, including those other than <code>InProgress</code>, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of <code>InProgress</code> are returned.</p> <p>You can quickly test the API using the following Amazon Web Services CLI code.</p> <p> <code>aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</code> </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrainingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTrainingJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WarmPoolResourceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTrainingJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrainingJobsRequest();
    $request->listTrainingJobsRequest = new ListTrainingJobsRequest();
    $request->listTrainingJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T16:15:25.092Z');
    $request->listTrainingJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-21T00:52:01.213Z');
    $request->listTrainingJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-15T23:02:08.900Z');
    $request->listTrainingJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T22:49:19.159Z');
    $request->listTrainingJobsRequest->maxResults = 166324;
    $request->listTrainingJobsRequest->nameContains = 'cumque';
    $request->listTrainingJobsRequest->nextToken = 'quos';
    $request->listTrainingJobsRequest->sortBy = SortByEnum::CREATION_TIME;
    $request->listTrainingJobsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listTrainingJobsRequest->statusEquals = TrainingJobStatusEnum::STOPPED;
    $request->listTrainingJobsRequest->warmPoolStatusEquals = WarmPoolResourceStatusEnum::AVAILABLE;
    $request->maxResults = 'minus';
    $request->nextToken = 'consequuntur';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListTrainingJobsXAmzTargetEnum::SAGE_MAKER_LIST_TRAINING_JOBS;

    $response = $sdk->sdk->listTrainingJobs($request);

    if ($response->listTrainingJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrainingJobsForHyperParameterTuningJob

Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrainingJobsForHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTrainingJobsForHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrainingJobSortByOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrainingJobsForHyperParameterTuningJobRequest();
    $request->listTrainingJobsForHyperParameterTuningJobRequest = new ListTrainingJobsForHyperParameterTuningJobRequest();
    $request->listTrainingJobsForHyperParameterTuningJobRequest->hyperParameterTuningJobName = 'illo';
    $request->listTrainingJobsForHyperParameterTuningJobRequest->maxResults = 751347;
    $request->listTrainingJobsForHyperParameterTuningJobRequest->nextToken = 'esse';
    $request->listTrainingJobsForHyperParameterTuningJobRequest->sortBy = TrainingJobSortByOptionsEnum::CREATION_TIME;
    $request->listTrainingJobsForHyperParameterTuningJobRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listTrainingJobsForHyperParameterTuningJobRequest->statusEquals = TrainingJobStatusEnum::IN_PROGRESS;
    $request->maxResults = 'alias';
    $request->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum::SAGE_MAKER_LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB;

    $response = $sdk->sdk->listTrainingJobsForHyperParameterTuningJob($request);

    if ($response->listTrainingJobsForHyperParameterTuningJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransformJobs

Lists transform jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTransformJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTransformJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTransformJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTransformJobsRequest();
    $request->listTransformJobsRequest = new ListTransformJobsRequest();
    $request->listTransformJobsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T21:58:15.396Z');
    $request->listTransformJobsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-22T06:20:19.804Z');
    $request->listTransformJobsRequest->lastModifiedTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-02T10:58:44.985Z');
    $request->listTransformJobsRequest->lastModifiedTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T05:46:49.105Z');
    $request->listTransformJobsRequest->maxResults = 866703;
    $request->listTransformJobsRequest->nameContains = 'expedita';
    $request->listTransformJobsRequest->nextToken = 'autem';
    $request->listTransformJobsRequest->sortBy = SortByEnum::STATUS;
    $request->listTransformJobsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listTransformJobsRequest->statusEquals = TransformJobStatusEnum::COMPLETED;
    $request->maxResults = 'officia';
    $request->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListTransformJobsXAmzTargetEnum::SAGE_MAKER_LIST_TRANSFORM_JOBS;

    $response = $sdk->sdk->listTransformJobs($request);

    if ($response->listTransformJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrialComponents

<p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrialComponentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTrialComponentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortTrialComponentsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTrialComponentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrialComponentsRequest();
    $request->listTrialComponentsRequest = new ListTrialComponentsRequest();
    $request->listTrialComponentsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-30T21:03:41.157Z');
    $request->listTrialComponentsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T07:18:50.543Z');
    $request->listTrialComponentsRequest->experimentName = 'voluptatem';
    $request->listTrialComponentsRequest->maxResults = 838176;
    $request->listTrialComponentsRequest->nextToken = 'id';
    $request->listTrialComponentsRequest->sortBy = SortTrialComponentsByEnum::NAME;
    $request->listTrialComponentsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listTrialComponentsRequest->sourceArn = 'a';
    $request->listTrialComponentsRequest->trialName = 'minus';
    $request->maxResults = 'sed';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListTrialComponentsXAmzTargetEnum::SAGE_MAKER_LIST_TRIAL_COMPONENTS;

    $response = $sdk->sdk->listTrialComponents($request);

    if ($response->listTrialComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrials

Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTrialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortTrialsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTrialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrialsRequest();
    $request->listTrialsRequest = new ListTrialsRequest();
    $request->listTrialsRequest->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-06T04:33:53.232Z');
    $request->listTrialsRequest->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-25T03:33:41.992Z');
    $request->listTrialsRequest->experimentName = 'rem';
    $request->listTrialsRequest->maxResults = 366327;
    $request->listTrialsRequest->nextToken = 'non';
    $request->listTrialsRequest->sortBy = SortTrialsByEnum::CREATION_TIME;
    $request->listTrialsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->listTrialsRequest->trialComponentName = 'ipsa';
    $request->maxResults = 'aliquam';
    $request->nextToken = 'dolor';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = ListTrialsXAmzTargetEnum::SAGE_MAKER_LIST_TRIALS;

    $response = $sdk->sdk->listTrials($request);

    if ($response->listTrialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserProfiles

Lists user profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserProfileSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUserProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserProfilesRequest();
    $request->listUserProfilesRequest = new ListUserProfilesRequest();
    $request->listUserProfilesRequest->domainIdEquals = 'ipsam';
    $request->listUserProfilesRequest->maxResults = 426819;
    $request->listUserProfilesRequest->nextToken = 'cupiditate';
    $request->listUserProfilesRequest->sortBy = UserProfileSortKeyEnum::CREATION_TIME;
    $request->listUserProfilesRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->listUserProfilesRequest->userProfileNameContains = 'explicabo';
    $request->maxResults = 'modi';
    $request->nextToken = 'doloremque';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListUserProfilesXAmzTargetEnum::SAGE_MAKER_LIST_USER_PROFILES;

    $response = $sdk->sdk->listUserProfiles($request);

    if ($response->listUserProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkforces

Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkforcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkforcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkforcesSortByOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkforcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkforcesRequest();
    $request->listWorkforcesRequest = new ListWorkforcesRequest();
    $request->listWorkforcesRequest->maxResults = 726244;
    $request->listWorkforcesRequest->nameContains = 'ratione';
    $request->listWorkforcesRequest->nextToken = 'molestiae';
    $request->listWorkforcesRequest->sortBy = ListWorkforcesSortByOptionsEnum::CREATE_DATE;
    $request->listWorkforcesRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'maiores';
    $request->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListWorkforcesXAmzTargetEnum::SAGE_MAKER_LIST_WORKFORCES;

    $response = $sdk->sdk->listWorkforces($request);

    if ($response->listWorkforcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkteams

Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkteamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkteamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkteamsSortByOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkteamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkteamsRequest();
    $request->listWorkteamsRequest = new ListWorkteamsRequest();
    $request->listWorkteamsRequest->maxResults = 852737;
    $request->listWorkteamsRequest->nameContains = 'quidem';
    $request->listWorkteamsRequest->nextToken = 'exercitationem';
    $request->listWorkteamsRequest->sortBy = ListWorkteamsSortByOptionsEnum::NAME;
    $request->listWorkteamsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'quasi';
    $request->nextToken = 'quae';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = ListWorkteamsXAmzTargetEnum::SAGE_MAKER_LIST_WORKTEAMS;

    $response = $sdk->sdk->listWorkteams($request);

    if ($response->listWorkteamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putModelPackageGroupPolicy

Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutModelPackageGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutModelPackageGroupPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\PutModelPackageGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutModelPackageGroupPolicyRequest();
    $request->putModelPackageGroupPolicyInput = new PutModelPackageGroupPolicyInput();
    $request->putModelPackageGroupPolicyInput->modelPackageGroupName = 'doloribus';
    $request->putModelPackageGroupPolicyInput->resourcePolicy = 'provident';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = PutModelPackageGroupPolicyXAmzTargetEnum::SAGE_MAKER_PUT_MODEL_PACKAGE_GROUP_POLICY;

    $response = $sdk->sdk->putModelPackageGroupPolicy($request);

    if ($response->putModelPackageGroupPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryLineage

Use this action to inspect your lineage and discover relationships between entities. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html"> Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryLineageRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryLineageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryFilters;
use \OpenAPI\OpenAPI\Models\Shared\LineageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLineageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryLineageRequest();
    $request->maxResults = 'facere';
    $request->nextToken = 'impedit';
    $request->queryLineageRequest = new QueryLineageRequest();
    $request->queryLineageRequest->direction = DirectionEnum::ASCENDANTS;
    $request->queryLineageRequest->filters = new QueryFilters();
    $request->queryLineageRequest->filters->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T04:04:20.256Z');
    $request->queryLineageRequest->filters->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T07:26:39.700Z');
    $request->queryLineageRequest->filters->lineageTypes = [
        LineageTypeEnum::CONTEXT,
        LineageTypeEnum::CONTEXT,
    ];
    $request->queryLineageRequest->filters->modifiedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-15T17:46:29.299Z');
    $request->queryLineageRequest->filters->modifiedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-09T04:56:45.775Z');
    $request->queryLineageRequest->filters->properties = [
        'nam' => 'amet',
        'adipisci' => 'minus',
        'hic' => 'similique',
    ];
    $request->queryLineageRequest->filters->types = [
        'consectetur',
        'labore',
        'laudantium',
    ];
    $request->queryLineageRequest->includeEdges = false;
    $request->queryLineageRequest->maxDepth = 768999;
    $request->queryLineageRequest->maxResults = 240027;
    $request->queryLineageRequest->nextToken = 'veritatis';
    $request->queryLineageRequest->startArns = [
        'voluptatibus',
        'magnam',
        'aperiam',
    ];
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = QueryLineageXAmzTargetEnum::SAGE_MAKER_QUERY_LINEAGE;

    $response = $sdk->sdk->queryLineage($request);

    if ($response->queryLineageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerDevices

Register devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDevicesRequest();
    $request->registerDevicesRequest = new RegisterDevicesRequest();
    $request->registerDevicesRequest->deviceFleetName = 'alias';
    $request->registerDevicesRequest->devices = [
        new Device(),
        new Device(),
        new Device(),
        new Device(),
    ];
    $request->registerDevicesRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = RegisterDevicesXAmzTargetEnum::SAGE_MAKER_REGISTER_DEVICES;

    $response = $sdk->sdk->registerDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renderUiTemplate

Renders the UI template so that you can preview the worker's experience. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenderUiTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenderUiTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenderableTask;
use \OpenAPI\OpenAPI\Models\Shared\UiTemplate;
use \OpenAPI\OpenAPI\Models\Operations\RenderUiTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenderUiTemplateRequest();
    $request->renderUiTemplateRequest = new RenderUiTemplateRequest();
    $request->renderUiTemplateRequest->humanTaskUiArn = 'nisi';
    $request->renderUiTemplateRequest->roleArn = 'consequuntur';
    $request->renderUiTemplateRequest->task = new RenderableTask();
    $request->renderUiTemplateRequest->task->input = 'voluptas';
    $request->renderUiTemplateRequest->uiTemplate = new UiTemplate();
    $request->renderUiTemplateRequest->uiTemplate->content = 'ratione';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = RenderUiTemplateXAmzTargetEnum::SAGE_MAKER_RENDER_UI_TEMPLATE;

    $response = $sdk->sdk->renderUiTemplate($request);

    if ($response->renderUiTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryPipelineExecution

Retry the execution of the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetryPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\RetryPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryPipelineExecutionRequest();
    $request->retryPipelineExecutionRequest = new RetryPipelineExecutionRequest();
    $request->retryPipelineExecutionRequest->clientRequestToken = 'nisi';
    $request->retryPipelineExecutionRequest->parallelismConfiguration = new ParallelismConfiguration();
    $request->retryPipelineExecutionRequest->parallelismConfiguration->maxParallelExecutionSteps = 392022;
    $request->retryPipelineExecutionRequest->pipelineExecutionArn = 'dolor';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = RetryPipelineExecutionXAmzTargetEnum::SAGE_MAKER_RETRY_PIPELINE_EXECUTION;

    $response = $sdk->sdk->retryPipelineExecution($request);

    if ($response->retryPipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

<p>Finds SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p> <note> <p>The Search API may provide access to otherwise restricted data. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference</a> for more information.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchExpression;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NestedFilters;
use \OpenAPI\OpenAPI\Models\Shared\BooleanOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->maxResults = 'impedit';
    $request->nextToken = 'totam';
    $request->searchRequest = new SearchRequest();
    $request->searchRequest->maxResults = 762297;
    $request->searchRequest->nextToken = 'est';
    $request->searchRequest->resource = ResourceTypeEnum::EXPERIMENT;
    $request->searchRequest->searchExpression = new SearchExpression();
    $request->searchRequest->searchExpression->filters = [
        new Filter(),
    ];
    $request->searchRequest->searchExpression->nestedFilters = [
        new NestedFilters(),
        new NestedFilters(),
        new NestedFilters(),
        new NestedFilters(),
    ];
    $request->searchRequest->searchExpression->operator = BooleanOperatorEnum::AND;
    $request->searchRequest->searchExpression->subExpressions = [
        new SearchExpression(),
    ];
    $request->searchRequest->sortBy = 'enim';
    $request->searchRequest->sortOrder = SearchSortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = SearchXAmzTargetEnum::SAGE_MAKER_SEARCH;

    $response = $sdk->sdk->search($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendPipelineExecutionStepFailure

Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendPipelineExecutionStepFailureRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendPipelineExecutionStepFailureRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendPipelineExecutionStepFailureXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendPipelineExecutionStepFailureRequest();
    $request->sendPipelineExecutionStepFailureRequest = new SendPipelineExecutionStepFailureRequest();
    $request->sendPipelineExecutionStepFailureRequest->callbackToken = 'ipsam';
    $request->sendPipelineExecutionStepFailureRequest->clientRequestToken = 'odio';
    $request->sendPipelineExecutionStepFailureRequest->failureReason = 'fugit';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = SendPipelineExecutionStepFailureXAmzTargetEnum::SAGE_MAKER_SEND_PIPELINE_EXECUTION_STEP_FAILURE;

    $response = $sdk->sdk->sendPipelineExecutionStepFailure($request);

    if ($response->sendPipelineExecutionStepFailureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendPipelineExecutionStepSuccess

Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendPipelineExecutionStepSuccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendPipelineExecutionStepSuccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputParameter;
use \OpenAPI\OpenAPI\Models\Operations\SendPipelineExecutionStepSuccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendPipelineExecutionStepSuccessRequest();
    $request->sendPipelineExecutionStepSuccessRequest = new SendPipelineExecutionStepSuccessRequest();
    $request->sendPipelineExecutionStepSuccessRequest->callbackToken = 'voluptatum';
    $request->sendPipelineExecutionStepSuccessRequest->clientRequestToken = 'facilis';
    $request->sendPipelineExecutionStepSuccessRequest->outputParameters = [
        new OutputParameter(),
        new OutputParameter(),
        new OutputParameter(),
        new OutputParameter(),
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = SendPipelineExecutionStepSuccessXAmzTargetEnum::SAGE_MAKER_SEND_PIPELINE_EXECUTION_STEP_SUCCESS;

    $response = $sdk->sdk->sendPipelineExecutionStepSuccess($request);

    if ($response->sendPipelineExecutionStepSuccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEdgeDeploymentStage

Starts a stage in an edge deployment plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartEdgeDeploymentStageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEdgeDeploymentStageRequest();
    $request->startEdgeDeploymentStageRequest = new StartEdgeDeploymentStageRequest();
    $request->startEdgeDeploymentStageRequest->edgeDeploymentPlanName = 'natus';
    $request->startEdgeDeploymentStageRequest->stageName = 'nisi';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = StartEdgeDeploymentStageXAmzTargetEnum::SAGE_MAKER_START_EDGE_DEPLOYMENT_STAGE;

    $response = $sdk->sdk->startEdgeDeploymentStage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startInferenceExperiment

Starts an inference experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartInferenceExperimentRequest();
    $request->startInferenceExperimentRequest = new StartInferenceExperimentRequest();
    $request->startInferenceExperimentRequest->name = 'Dana Franecki';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = StartInferenceExperimentXAmzTargetEnum::SAGE_MAKER_START_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->startInferenceExperiment($request);

    if ($response->startInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMonitoringSchedule

<p>Starts a previously stopped monitoring schedule.</p> <note> <p>By default, when you successfully create a new schedule, the status of a monitoring schedule is <code>scheduled</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMonitoringScheduleRequest();
    $request->startMonitoringScheduleRequest = new StartMonitoringScheduleRequest();
    $request->startMonitoringScheduleRequest->monitoringScheduleName = 'amet';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = StartMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_START_MONITORING_SCHEDULE;

    $response = $sdk->sdk->startMonitoringSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startNotebookInstance

Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\StartNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartNotebookInstanceRequest();
    $request->startNotebookInstanceInput = new StartNotebookInstanceInput();
    $request->startNotebookInstanceInput->notebookInstanceName = 'voluptatibus';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = StartNotebookInstanceXAmzTargetEnum::SAGE_MAKER_START_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->startNotebookInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPipelineExecution

Starts a pipeline execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Parameter;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPipelineExecutionRequest();
    $request->startPipelineExecutionRequest = new StartPipelineExecutionRequest();
    $request->startPipelineExecutionRequest->clientRequestToken = 'commodi';
    $request->startPipelineExecutionRequest->parallelismConfiguration = new ParallelismConfiguration();
    $request->startPipelineExecutionRequest->parallelismConfiguration->maxParallelExecutionSteps = 142978;
    $request->startPipelineExecutionRequest->pipelineExecutionDescription = 'ullam';
    $request->startPipelineExecutionRequest->pipelineExecutionDisplayName = 'ullam';
    $request->startPipelineExecutionRequest->pipelineName = 'doloremque';
    $request->startPipelineExecutionRequest->pipelineParameters = [
        new Parameter(),
        new Parameter(),
        new Parameter(),
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = StartPipelineExecutionXAmzTargetEnum::SAGE_MAKER_START_PIPELINE_EXECUTION;

    $response = $sdk->sdk->startPipelineExecution($request);

    if ($response->startPipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAutoMLJob

A method for forcing a running job to shut down.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopAutoMLJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopAutoMLJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopAutoMLJobRequest();
    $request->stopAutoMLJobRequest = new StopAutoMLJobRequest();
    $request->stopAutoMLJobRequest->autoMLJobName = 'incidunt';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = StopAutoMLJobXAmzTargetEnum::SAGE_MAKER_STOP_AUTO_ML_JOB;

    $response = $sdk->sdk->stopAutoMLJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCompilationJob

<p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <code>CompilationJobStatus</code> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <code>CompilationJobStatus</code> to <code>Stopped</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopCompilationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopCompilationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCompilationJobRequest();
    $request->stopCompilationJobRequest = new StopCompilationJobRequest();
    $request->stopCompilationJobRequest->compilationJobName = 'inventore';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = StopCompilationJobXAmzTargetEnum::SAGE_MAKER_STOP_COMPILATION_JOB;

    $response = $sdk->sdk->stopCompilationJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEdgeDeploymentStage

Stops a stage in an edge deployment plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEdgeDeploymentStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEdgeDeploymentStageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEdgeDeploymentStageRequest();
    $request->stopEdgeDeploymentStageRequest = new StopEdgeDeploymentStageRequest();
    $request->stopEdgeDeploymentStageRequest->edgeDeploymentPlanName = 'illo';
    $request->stopEdgeDeploymentStageRequest->stageName = 'iure';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = StopEdgeDeploymentStageXAmzTargetEnum::SAGE_MAKER_STOP_EDGE_DEPLOYMENT_STAGE;

    $response = $sdk->sdk->stopEdgeDeploymentStage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEdgePackagingJob

Request to stop an edge packaging job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEdgePackagingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEdgePackagingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEdgePackagingJobRequest();
    $request->stopEdgePackagingJobRequest = new StopEdgePackagingJobRequest();
    $request->stopEdgePackagingJobRequest->edgePackagingJobName = 'asperiores';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = StopEdgePackagingJobXAmzTargetEnum::SAGE_MAKER_STOP_EDGE_PACKAGING_JOB;

    $response = $sdk->sdk->stopEdgePackagingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopHyperParameterTuningJob

<p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopHyperParameterTuningJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopHyperParameterTuningJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopHyperParameterTuningJobRequest();
    $request->stopHyperParameterTuningJobRequest = new StopHyperParameterTuningJobRequest();
    $request->stopHyperParameterTuningJobRequest->hyperParameterTuningJobName = 'quisquam';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = StopHyperParameterTuningJobXAmzTargetEnum::SAGE_MAKER_STOP_HYPER_PARAMETER_TUNING_JOB;

    $response = $sdk->sdk->stopHyperParameterTuningJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopInferenceExperiment

Stops an inference experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RealTimeInferenceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentStopDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelVariantActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopInferenceExperimentRequest();
    $request->stopInferenceExperimentRequest = new StopInferenceExperimentRequest();
    $request->stopInferenceExperimentRequest->desiredModelVariants = [
        new ModelVariantConfig(),
    ];
    $request->stopInferenceExperimentRequest->desiredState = InferenceExperimentStopDesiredStateEnum::COMPLETED;
    $request->stopInferenceExperimentRequest->modelVariantActions = [
        'ex' => ModelVariantActionEnum::RETAIN,
        'quod' => ModelVariantActionEnum::RETAIN,
        'alias' => ModelVariantActionEnum::RETAIN,
    ];
    $request->stopInferenceExperimentRequest->name = 'Bryant Ondricka';
    $request->stopInferenceExperimentRequest->reason = 'aperiam';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = StopInferenceExperimentXAmzTargetEnum::SAGE_MAKER_STOP_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->stopInferenceExperiment($request);

    if ($response->stopInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopInferenceRecommendationsJob

Stops an Inference Recommender job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInferenceRecommendationsJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceRecommendationsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopInferenceRecommendationsJobRequest();
    $request->stopInferenceRecommendationsJobRequest = new StopInferenceRecommendationsJobRequest();
    $request->stopInferenceRecommendationsJobRequest->jobName = 'sint';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = StopInferenceRecommendationsJobXAmzTargetEnum::SAGE_MAKER_STOP_INFERENCE_RECOMMENDATIONS_JOB;

    $response = $sdk->sdk->stopInferenceRecommendationsJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopLabelingJob

Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopLabelingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopLabelingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopLabelingJobRequest();
    $request->stopLabelingJobRequest = new StopLabelingJobRequest();
    $request->stopLabelingJobRequest->labelingJobName = 'expedita';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = StopLabelingJobXAmzTargetEnum::SAGE_MAKER_STOP_LABELING_JOB;

    $response = $sdk->sdk->stopLabelingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopMonitoringSchedule

Stops a previously started monitoring schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopMonitoringScheduleRequest();
    $request->stopMonitoringScheduleRequest = new StopMonitoringScheduleRequest();
    $request->stopMonitoringScheduleRequest->monitoringScheduleName = 'consequatur';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = StopMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_STOP_MONITORING_SCHEDULE;

    $response = $sdk->sdk->stopMonitoringSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopNotebookInstance

<p>Terminates the ML compute instance. Before terminating the instance, SageMaker disconnects the ML storage volume from it. SageMaker preserves the ML storage volume. SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\StopNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopNotebookInstanceRequest();
    $request->stopNotebookInstanceInput = new StopNotebookInstanceInput();
    $request->stopNotebookInstanceInput->notebookInstanceName = 'non';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = StopNotebookInstanceXAmzTargetEnum::SAGE_MAKER_STOP_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->stopNotebookInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPipelineExecution

<p>Stops a pipeline execution.</p> <p> <b>Callback Step</b> </p> <p>A pipeline execution won't stop while a callback step is running. When you call <code>StopPipelineExecution</code> on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping".</p> <p>You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to <code>SendPipelineExecutionStepSuccess</code> or <code>SendPipelineExecutionStepFailure</code>.</p> <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p> <p> <b>Lambda Step</b> </p> <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit the pipeline execution status is <code>Failed</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPipelineExecutionRequest();
    $request->stopPipelineExecutionRequest = new StopPipelineExecutionRequest();
    $request->stopPipelineExecutionRequest->clientRequestToken = 'excepturi';
    $request->stopPipelineExecutionRequest->pipelineExecutionArn = 'eos';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = StopPipelineExecutionXAmzTargetEnum::SAGE_MAKER_STOP_PIPELINE_EXECUTION;

    $response = $sdk->sdk->stopPipelineExecution($request);

    if ($response->stopPipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopProcessingJob

Stops a processing job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopProcessingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopProcessingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopProcessingJobRequest();
    $request->stopProcessingJobRequest = new StopProcessingJobRequest();
    $request->stopProcessingJobRequest->processingJobName = 'similique';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = StopProcessingJobXAmzTargetEnum::SAGE_MAKER_STOP_PROCESSING_JOB;

    $response = $sdk->sdk->stopProcessingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTrainingJob

<p>Stops a training job. To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, SageMaker changes the status of the job to <code>Stopping</code>. After SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTrainingJobRequest();
    $request->stopTrainingJobRequest = new StopTrainingJobRequest();
    $request->stopTrainingJobRequest->trainingJobName = 'iste';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = StopTrainingJobXAmzTargetEnum::SAGE_MAKER_STOP_TRAINING_JOB;

    $response = $sdk->sdk->stopTrainingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTransformJob

<p>Stops a batch transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTransformJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTransformJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTransformJobRequest();
    $request->stopTransformJobRequest = new StopTransformJobRequest();
    $request->stopTransformJobRequest->transformJobName = 'similique';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = StopTransformJobXAmzTargetEnum::SAGE_MAKER_STOP_TRANSFORM_JOB;

    $response = $sdk->sdk->stopTransformJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAction

Updates an action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActionRequest();
    $request->updateActionRequest = new UpdateActionRequest();
    $request->updateActionRequest->actionName = 'quam';
    $request->updateActionRequest->description = 'nulla';
    $request->updateActionRequest->properties = [
        'voluptates' => 'a',
    ];
    $request->updateActionRequest->propertiesToRemove = [
        'quaerat',
    ];
    $request->updateActionRequest->status = ActionStatusEnum::FAILED;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = UpdateActionXAmzTargetEnum::SAGE_MAKER_UPDATE_ACTION;

    $response = $sdk->sdk->updateAction($request);

    if ($response->updateActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAppImageConfig

Updates the properties of an AppImageConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAppImageConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayImageConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemConfig;
use \OpenAPI\OpenAPI\Models\Shared\KernelSpec;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppImageConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppImageConfigRequest();
    $request->updateAppImageConfigRequest = new UpdateAppImageConfigRequest();
    $request->updateAppImageConfigRequest->appImageConfigName = 'atque';
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig = new KernelGatewayImageConfig();
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig = new FileSystemConfig();
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->defaultGid = 191425;
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->defaultUid = 114588;
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig->fileSystemConfig->mountPath = 'quisquam';
    $request->updateAppImageConfigRequest->kernelGatewayImageConfig->kernelSpecs = [
        new KernelSpec(),
        new KernelSpec(),
        new KernelSpec(),
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = UpdateAppImageConfigXAmzTargetEnum::SAGE_MAKER_UPDATE_APP_IMAGE_CONFIG;

    $response = $sdk->sdk->updateAppImageConfig($request);

    if ($response->updateAppImageConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifact

Updates an artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactRequest();
    $request->updateArtifactRequest = new UpdateArtifactRequest();
    $request->updateArtifactRequest->artifactArn = 'reiciendis';
    $request->updateArtifactRequest->artifactName = 'repellendus';
    $request->updateArtifactRequest->properties = [
        'ab' => 'mollitia',
        'possimus' => 'praesentium',
        'neque' => 'quam',
        'animi' => 'debitis',
    ];
    $request->updateArtifactRequest->propertiesToRemove = [
        'voluptatem',
        'quisquam',
        'vitae',
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UpdateArtifactXAmzTargetEnum::SAGE_MAKER_UPDATE_ARTIFACT;

    $response = $sdk->sdk->updateArtifact($request);

    if ($response->updateArtifactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCodeRepository

Updates the specified Git repository with the specified values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCodeRepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\GitConfigForUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCodeRepositoryRequest();
    $request->updateCodeRepositoryInput = new UpdateCodeRepositoryInput();
    $request->updateCodeRepositoryInput->codeRepositoryName = 'officia';
    $request->updateCodeRepositoryInput->gitConfig = new GitConfigForUpdate();
    $request->updateCodeRepositoryInput->gitConfig->secretArn = 'iste';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = UpdateCodeRepositoryXAmzTargetEnum::SAGE_MAKER_UPDATE_CODE_REPOSITORY;

    $response = $sdk->sdk->updateCodeRepository($request);

    if ($response->updateCodeRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContext

Updates a context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContextRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContextRequest();
    $request->updateContextRequest = new UpdateContextRequest();
    $request->updateContextRequest->contextName = 'dolor';
    $request->updateContextRequest->description = 'hic';
    $request->updateContextRequest->properties = [
        'sint' => 'autem',
        'iste' => 'cupiditate',
    ];
    $request->updateContextRequest->propertiesToRemove = [
        'fuga',
    ];
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = UpdateContextXAmzTargetEnum::SAGE_MAKER_UPDATE_CONTEXT;

    $response = $sdk->sdk->updateContext($request);

    if ($response->updateContextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceFleet

Updates a fleet of devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EdgeOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\EdgePresetDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceFleetRequest();
    $request->updateDeviceFleetRequest = new UpdateDeviceFleetRequest();
    $request->updateDeviceFleetRequest->description = 'consectetur';
    $request->updateDeviceFleetRequest->deviceFleetName = 'autem';
    $request->updateDeviceFleetRequest->enableIotRoleAlias = false;
    $request->updateDeviceFleetRequest->outputConfig = new EdgeOutputConfig();
    $request->updateDeviceFleetRequest->outputConfig->kmsKeyId = 'vitae';
    $request->updateDeviceFleetRequest->outputConfig->presetDeploymentConfig = 'numquam';
    $request->updateDeviceFleetRequest->outputConfig->presetDeploymentType = EdgePresetDeploymentTypeEnum::GREENGRASS_V2_COMPONENT;
    $request->updateDeviceFleetRequest->outputConfig->s3OutputLocation = 'incidunt';
    $request->updateDeviceFleetRequest->roleArn = 'modi';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = UpdateDeviceFleetXAmzTargetEnum::SAGE_MAKER_UPDATE_DEVICE_FLEET;

    $response = $sdk->sdk->updateDeviceFleet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevices

Updates one or more devices in a fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDevicesRequest();
    $request->updateDevicesRequest = new UpdateDevicesRequest();
    $request->updateDevicesRequest->deviceFleetName = 'consequatur';
    $request->updateDevicesRequest->devices = [
        new Device(),
        new Device(),
        new Device(),
        new Device(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = UpdateDevicesXAmzTargetEnum::SAGE_MAKER_UPDATE_DEVICES;

    $response = $sdk->sdk->updateDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomain

Updates the default settings for new user profiles in the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppSecurityGroupManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultSpaceSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\CanvasAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\ModelRegisterSettings;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesForecastingSettings;
use \OpenAPI\OpenAPI\Models\Shared\RSessionAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAccessStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProUserGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharingSettings;
use \OpenAPI\OpenAPI\Models\Shared\NotebookOutputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TensorBoardAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\DomainSettingsForUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionRoleIdentityConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProDomainSettingsForUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainRequest();
    $request->updateDomainRequest = new UpdateDomainRequest();
    $request->updateDomainRequest->appSecurityGroupManagement = AppSecurityGroupManagementEnum::SERVICE;
    $request->updateDomainRequest->defaultSpaceSettings = new DefaultSpaceSettings();
    $request->updateDomainRequest->defaultSpaceSettings->executionRole = 'voluptatum';
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G524XLARGE;
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'itaque';
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'eveniet';
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'repellat';
    $request->updateDomainRequest->defaultSpaceSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'adipisci',
        'aliquam',
        'illo',
    ];
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
    ];
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M5_XLARGE;
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'necessitatibus';
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'possimus';
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'dignissimos';
    $request->updateDomainRequest->defaultSpaceSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'explicabo',
        'ullam',
        'non',
        'delectus',
    ];
    $request->updateDomainRequest->defaultSpaceSettings->securityGroups = [
        'quod',
        'sunt',
    ];
    $request->updateDomainRequest->defaultUserSettings = new UserSettings();
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings = new CanvasAppSettings();
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings = new ModelRegisterSettings();
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings->crossAccountModelRegisterRoleArn = 'ullam';
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->modelRegisterSettings->status = FeatureStatusEnum::ENABLED;
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings = new TimeSeriesForecastingSettings();
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings->amazonForecastRoleArn = 'illum';
    $request->updateDomainRequest->defaultUserSettings->canvasAppSettings->timeSeriesForecastingSettings->status = FeatureStatusEnum::DISABLED;
    $request->updateDomainRequest->defaultUserSettings->executionRole = 'officia';
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_C52XLARGE;
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'illo';
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'voluptate';
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'consequatur';
    $request->updateDomainRequest->defaultUserSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'incidunt',
        'dolore',
        'nemo',
        'est',
    ];
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_R512XLARGE;
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'delectus';
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'laboriosam';
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'laboriosam';
    $request->updateDomainRequest->defaultUserSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'fuga',
        'officia',
    ];
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings = new RSessionAppSettings();
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_P3DN24XLARGE;
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->lifecycleConfigArn = 'soluta';
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageArn = 'tempore';
    $request->updateDomainRequest->defaultUserSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'culpa';
    $request->updateDomainRequest->defaultUserSettings->rStudioServerProAppSettings = new RStudioServerProAppSettings();
    $request->updateDomainRequest->defaultUserSettings->rStudioServerProAppSettings->accessStatus = RStudioServerProAccessStatusEnum::DISABLED;
    $request->updateDomainRequest->defaultUserSettings->rStudioServerProAppSettings->userGroup = RStudioServerProUserGroupEnum::R_STUDIO_ADMIN;
    $request->updateDomainRequest->defaultUserSettings->securityGroups = [
        'ad',
        'sapiente',
        'voluptates',
    ];
    $request->updateDomainRequest->defaultUserSettings->sharingSettings = new SharingSettings();
    $request->updateDomainRequest->defaultUserSettings->sharingSettings->notebookOutputOption = NotebookOutputOptionEnum::ALLOWED;
    $request->updateDomainRequest->defaultUserSettings->sharingSettings->s3KmsKeyId = 'nesciunt';
    $request->updateDomainRequest->defaultUserSettings->sharingSettings->s3OutputPath = 'ab';
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings = new TensorBoardAppSettings();
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_R524XLARGE;
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->lifecycleConfigArn = 'suscipit';
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageArn = 'quidem';
    $request->updateDomainRequest->defaultUserSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'delectus';
    $request->updateDomainRequest->domainId = 'nemo';
    $request->updateDomainRequest->domainSettingsForUpdate = new DomainSettingsForUpdate();
    $request->updateDomainRequest->domainSettingsForUpdate->executionRoleIdentityConfig = ExecutionRoleIdentityConfigEnum::DISABLED;
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate = new RStudioServerProDomainSettingsForUpdate();
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->defaultResourceSpec = new ResourceSpec();
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_C524XLARGE;
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->defaultResourceSpec->lifecycleConfigArn = 'sequi';
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->defaultResourceSpec->sageMakerImageArn = 'atque';
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->defaultResourceSpec->sageMakerImageVersionArn = 'maiores';
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->domainExecutionRoleArn = 'expedita';
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->rStudioConnectUrl = 'rerum';
    $request->updateDomainRequest->domainSettingsForUpdate->rStudioServerProDomainSettingsForUpdate->rStudioPackageManagerUrl = 'totam';
    $request->updateDomainRequest->domainSettingsForUpdate->securityGroupIds = [
        'aspernatur',
        'eaque',
        'impedit',
        'nam',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UpdateDomainXAmzTargetEnum::SAGE_MAKER_UPDATE_DOMAIN;

    $response = $sdk->sdk->updateDomain($request);

    if ($response->updateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpoint

<p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackConfig;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySize;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariantProperty;
use \OpenAPI\OpenAPI\Models\Shared\VariantPropertyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointRequest();
    $request->updateEndpointInput = new UpdateEndpointInput();
    $request->updateEndpointInput->deploymentConfig = new DeploymentConfig();
    $request->updateEndpointInput->deploymentConfig->autoRollbackConfiguration = new AutoRollbackConfig();
    $request->updateEndpointInput->deploymentConfig->autoRollbackConfiguration->alarms = [
        new Alarm(),
    ];
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy = new BlueGreenUpdatePolicy();
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->maximumExecutionTimeoutInSeconds = 333507;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->terminationWaitInSeconds = 918720;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration = new TrafficRoutingConfig();
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize = new CapacitySize();
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize->type = CapacitySizeTypeEnum::CAPACITY_PERCENT;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->canarySize->value = 577707;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize = new CapacitySize();
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize->type = CapacitySizeTypeEnum::CAPACITY_PERCENT;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->linearStepSize->value = 385726;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->type = TrafficRoutingConfigTypeEnum::ALL_AT_ONCE;
    $request->updateEndpointInput->deploymentConfig->blueGreenUpdatePolicy->trafficRoutingConfiguration->waitIntervalInSeconds = 227706;
    $request->updateEndpointInput->endpointConfigName = 'incidunt';
    $request->updateEndpointInput->endpointName = 'porro';
    $request->updateEndpointInput->excludeRetainedVariantProperties = [
        new VariantProperty(),
        new VariantProperty(),
        new VariantProperty(),
    ];
    $request->updateEndpointInput->retainAllVariantProperties = false;
    $request->updateEndpointInput->retainDeploymentConfig = false;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = UpdateEndpointXAmzTargetEnum::SAGE_MAKER_UPDATE_ENDPOINT;

    $response = $sdk->sdk->updateEndpoint($request);

    if ($response->updateEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpointWeightsAndCapacities

Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointWeightsAndCapacitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEndpointWeightsAndCapacitiesInput;
use \OpenAPI\OpenAPI\Models\Shared\DesiredWeightAndCapacity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointWeightsAndCapacitiesRequest();
    $request->updateEndpointWeightsAndCapacitiesInput = new UpdateEndpointWeightsAndCapacitiesInput();
    $request->updateEndpointWeightsAndCapacitiesInput->desiredWeightsAndCapacities = [
        new DesiredWeightAndCapacity(),
        new DesiredWeightAndCapacity(),
        new DesiredWeightAndCapacity(),
        new DesiredWeightAndCapacity(),
    ];
    $request->updateEndpointWeightsAndCapacitiesInput->endpointName = 'expedita';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum::SAGE_MAKER_UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES;

    $response = $sdk->sdk->updateEndpointWeightsAndCapacities($request);

    if ($response->updateEndpointWeightsAndCapacitiesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExperiment

Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExperimentRequest();
    $request->updateExperimentRequest = new UpdateExperimentRequest();
    $request->updateExperimentRequest->description = 'vero';
    $request->updateExperimentRequest->displayName = 'dolore';
    $request->updateExperimentRequest->experimentName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = UpdateExperimentXAmzTargetEnum::SAGE_MAKER_UPDATE_EXPERIMENT;

    $response = $sdk->sdk->updateExperiment($request);

    if ($response->updateExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFeatureGroup

Updates the feature group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFeatureGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureDefinition;
use \OpenAPI\OpenAPI\Models\Shared\FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFeatureGroupRequest();
    $request->updateFeatureGroupRequest = new UpdateFeatureGroupRequest();
    $request->updateFeatureGroupRequest->featureAdditions = [
        new FeatureDefinition(),
        new FeatureDefinition(),
    ];
    $request->updateFeatureGroupRequest->featureGroupName = 'eveniet';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateFeatureGroupXAmzTargetEnum::SAGE_MAKER_UPDATE_FEATURE_GROUP;

    $response = $sdk->sdk->updateFeatureGroup($request);

    if ($response->updateFeatureGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFeatureMetadata

Updates the description and parameters of the feature group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFeatureMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureParameter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFeatureMetadataRequest();
    $request->updateFeatureMetadataRequest = new UpdateFeatureMetadataRequest();
    $request->updateFeatureMetadataRequest->description = 'nam';
    $request->updateFeatureMetadataRequest->featureGroupName = 'numquam';
    $request->updateFeatureMetadataRequest->featureName = 'odio';
    $request->updateFeatureMetadataRequest->parameterAdditions = [
        new FeatureParameter(),
        new FeatureParameter(),
    ];
    $request->updateFeatureMetadataRequest->parameterRemovals = [
        'veritatis',
        'autem',
        'earum',
        'minima',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = UpdateFeatureMetadataXAmzTargetEnum::SAGE_MAKER_UPDATE_FEATURE_METADATA;

    $response = $sdk->sdk->updateFeatureMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHub

<p>Update a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHubRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHubXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHubRequest();
    $request->updateHubRequest = new UpdateHubRequest();
    $request->updateHubRequest->hubDescription = 'maxime';
    $request->updateHubRequest->hubDisplayName = 'numquam';
    $request->updateHubRequest->hubName = 'laborum';
    $request->updateHubRequest->hubSearchKeywords = [
        'autem',
        'adipisci',
        'sunt',
        'rerum',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = UpdateHubXAmzTargetEnum::SAGE_MAKER_UPDATE_HUB;

    $response = $sdk->sdk->updateHub($request);

    if ($response->updateHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImage

Updates the properties of a SageMaker image. To change the image's tags, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html">DeleteTags</a> APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImageRequest();
    $request->updateImageRequest = new UpdateImageRequest();
    $request->updateImageRequest->deleteProperties = [
        'blanditiis',
        'a',
        'natus',
        'sapiente',
    ];
    $request->updateImageRequest->description = 'repellendus';
    $request->updateImageRequest->displayName = 'facilis';
    $request->updateImageRequest->imageName = 'molestias';
    $request->updateImageRequest->roleArn = 'dolore';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = UpdateImageXAmzTargetEnum::SAGE_MAKER_UPDATE_IMAGE;

    $response = $sdk->sdk->updateImage($request);

    if ($response->updateImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImageVersion

Updates the properties of a SageMaker image version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateImageVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VendorGuidanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImageVersionRequest();
    $request->updateImageVersionRequest = new UpdateImageVersionRequest();
    $request->updateImageVersionRequest->alias = 'hic';
    $request->updateImageVersionRequest->aliasesToAdd = [
        'vitae',
        'iusto',
        'atque',
    ];
    $request->updateImageVersionRequest->aliasesToDelete = [
        'molestiae',
    ];
    $request->updateImageVersionRequest->horovod = false;
    $request->updateImageVersionRequest->imageName = 'nam';
    $request->updateImageVersionRequest->jobType = JobTypeEnum::TRAINING;
    $request->updateImageVersionRequest->mlFramework = 'vitae';
    $request->updateImageVersionRequest->processor = ProcessorEnum::GPU;
    $request->updateImageVersionRequest->programmingLang = 'asperiores';
    $request->updateImageVersionRequest->releaseNotes = 'at';
    $request->updateImageVersionRequest->vendorGuidance = VendorGuidanceEnum::ARCHIVED;
    $request->updateImageVersionRequest->version = 461853;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = UpdateImageVersionXAmzTargetEnum::SAGE_MAKER_UPDATE_IMAGE_VERSION;

    $response = $sdk->sdk->updateImageVersion($request);

    if ($response->updateImageVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInferenceExperiment

 Updates an inference experiment that you created. The status of the inference experiment has to be either <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInferenceExperimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentDataStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\CaptureContentTypeHeader;
use \OpenAPI\OpenAPI\Models\Shared\ModelVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelInfrastructureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RealTimeInferenceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ShadowModeConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShadowModelVariantConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInferenceExperimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInferenceExperimentRequest();
    $request->updateInferenceExperimentRequest = new UpdateInferenceExperimentRequest();
    $request->updateInferenceExperimentRequest->dataStorageConfig = new InferenceExperimentDataStorageConfig();
    $request->updateInferenceExperimentRequest->dataStorageConfig->contentType = new CaptureContentTypeHeader();
    $request->updateInferenceExperimentRequest->dataStorageConfig->contentType->csvContentTypes = [
        'accusamus',
        'distinctio',
        'incidunt',
    ];
    $request->updateInferenceExperimentRequest->dataStorageConfig->contentType->jsonContentTypes = [
        'blanditiis',
        'ducimus',
    ];
    $request->updateInferenceExperimentRequest->dataStorageConfig->destination = 'consectetur';
    $request->updateInferenceExperimentRequest->dataStorageConfig->kmsKey = 'sapiente';
    $request->updateInferenceExperimentRequest->description = 'quis';
    $request->updateInferenceExperimentRequest->modelVariants = [
        new ModelVariantConfig(),
    ];
    $request->updateInferenceExperimentRequest->name = 'Ms. Kim Zboncak';
    $request->updateInferenceExperimentRequest->schedule = new InferenceExperimentSchedule();
    $request->updateInferenceExperimentRequest->schedule->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-06T15:53:40.796Z');
    $request->updateInferenceExperimentRequest->schedule->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-03T16:46:25.219Z');
    $request->updateInferenceExperimentRequest->shadowModeConfig = new ShadowModeConfig();
    $request->updateInferenceExperimentRequest->shadowModeConfig->shadowModelVariants = [
        new ShadowModelVariantConfig(),
        new ShadowModelVariantConfig(),
    ];
    $request->updateInferenceExperimentRequest->shadowModeConfig->sourceModelVariantName = 'nobis';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = UpdateInferenceExperimentXAmzTargetEnum::SAGE_MAKER_UPDATE_INFERENCE_EXPERIMENT;

    $response = $sdk->sdk->updateInferenceExperiment($request);

    if ($response->updateInferenceExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateModelCard

<p>Update an Amazon SageMaker Model Card.</p> <important> <p>You cannot update both model card content and model card status in a single call.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateModelCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelCardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateModelCardRequest();
    $request->updateModelCardRequest = new UpdateModelCardRequest();
    $request->updateModelCardRequest->content = 'expedita';
    $request->updateModelCardRequest->modelCardName = 'error';
    $request->updateModelCardRequest->modelCardStatus = ModelCardStatusEnum::ARCHIVED;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UpdateModelCardXAmzTargetEnum::SAGE_MAKER_UPDATE_MODEL_CARD;

    $response = $sdk->sdk->updateModelCard($request);

    if ($response->updateModelCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateModelPackage

Updates a versioned model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelPackageRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateModelPackageInput;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalInferenceSpecificationDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelPackageContainerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductionVariantInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelPackageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateModelPackageRequest();
    $request->updateModelPackageInput = new UpdateModelPackageInput();
    $request->updateModelPackageInput->additionalInferenceSpecificationsToAdd = [
        new AdditionalInferenceSpecificationDefinition(),
        new AdditionalInferenceSpecificationDefinition(),
        new AdditionalInferenceSpecificationDefinition(),
    ];
    $request->updateModelPackageInput->approvalDescription = 'vel';
    $request->updateModelPackageInput->customerMetadataProperties = [
        'alias' => 'itaque',
        'ab' => 'sunt',
        'amet' => 'cum',
    ];
    $request->updateModelPackageInput->customerMetadataPropertiesToRemove = [
        'corrupti',
        'non',
    ];
    $request->updateModelPackageInput->modelApprovalStatus = ModelApprovalStatusEnum::REJECTED;
    $request->updateModelPackageInput->modelPackageArn = 'vero';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = UpdateModelPackageXAmzTargetEnum::SAGE_MAKER_UPDATE_MODEL_PACKAGE;

    $response = $sdk->sdk->updateModelPackage($request);

    if ($response->updateModelPackageOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonitoringAlert

Update the parameters of a model monitor alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitoringAlertRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMonitoringAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitoringAlertXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonitoringAlertRequest();
    $request->updateMonitoringAlertRequest = new UpdateMonitoringAlertRequest();
    $request->updateMonitoringAlertRequest->datapointsToAlert = 449861;
    $request->updateMonitoringAlertRequest->evaluationPeriod = 995671;
    $request->updateMonitoringAlertRequest->monitoringAlertName = 'amet';
    $request->updateMonitoringAlertRequest->monitoringScheduleName = 'cumque';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = UpdateMonitoringAlertXAmzTargetEnum::SAGE_MAKER_UPDATE_MONITORING_ALERT;

    $response = $sdk->sdk->updateMonitoringAlert($request);

    if ($response->updateMonitoringAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonitoringSchedule

Updates a previously created schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMonitoringScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringScheduleConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringBaselineConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConstraintsResource;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStatisticsResource;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringAppSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchTransformInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringCsvDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringJsonDatasetFormat;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3DataDistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3InputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringOutput;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringS3Output;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingS3UploadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringResources;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringStoppingCondition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitoringScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonitoringScheduleRequest();
    $request->updateMonitoringScheduleRequest = new UpdateMonitoringScheduleRequest();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig = new MonitoringScheduleConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition = new MonitoringJobDefinition();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig = new MonitoringBaselineConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->baseliningJobName = 'illum';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->constraintsResource = new MonitoringConstraintsResource();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->constraintsResource->s3Uri = 'iusto';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->statisticsResource = new MonitoringStatisticsResource();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->baselineConfig->statisticsResource->s3Uri = 'aliquid';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->environment = [
        'aliquid' => 'repellat',
        'sapiente' => 'consectetur',
        'eligendi' => 'ullam',
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification = new MonitoringAppSpecification();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->containerArguments = [
        'eius',
        'dignissimos',
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->containerEntrypoint = [
        'perferendis',
        'architecto',
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->imageUri = 'amet';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->postAnalyticsProcessorSourceUri = 'corporis';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringAppSpecification->recordPreprocessorSourceUri = 'nihil';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringInputs = [
        new MonitoringInput(),
        new MonitoringInput(),
        new MonitoringInput(),
        new MonitoringInput(),
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig = new MonitoringOutputConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig->kmsKeyId = 'dolore';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringOutputConfig->monitoringOutputs = [
        new MonitoringOutput(),
        new MonitoringOutput(),
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources = new MonitoringResources();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig = new MonitoringClusterConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->instanceCount = 981817;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->instanceType = ProcessingInstanceTypeEnum::ML_P32XLARGE;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->volumeKmsKeyId = 'dicta';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->monitoringResources->clusterConfig->volumeSizeInGB = 944475;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig = new NetworkConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->enableInterContainerTrafficEncryption = false;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->enableNetworkIsolation = false;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig = new VpcConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig->securityGroupIds = [
        'libero',
        'consequatur',
        'totam',
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->networkConfig->vpcConfig->subnets = [
        'quo',
        'dolor',
    ];
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->roleArn = 'sunt';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->stoppingCondition = new MonitoringStoppingCondition();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinition->stoppingCondition->maxRuntimeInSeconds = 605089;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringJobDefinitionName = 'quam';
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->monitoringType = MonitoringTypeEnum::MODEL_EXPLAINABILITY;
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->scheduleConfig = new ScheduleConfig();
    $request->updateMonitoringScheduleRequest->monitoringScheduleConfig->scheduleConfig->scheduleExpression = 'dicta';
    $request->updateMonitoringScheduleRequest->monitoringScheduleName = 'excepturi';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = UpdateMonitoringScheduleXAmzTargetEnum::SAGE_MAKER_UPDATE_MONITORING_SCHEDULE;

    $response = $sdk->sdk->updateMonitoringSchedule($request);

    if ($response->updateMonitoringScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotebookInstance

Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotebookInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceAcceleratorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMetadataServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotebookInstanceRequest();
    $request->updateNotebookInstanceInput = new UpdateNotebookInstanceInput();
    $request->updateNotebookInstanceInput->acceleratorTypes = [
        NotebookInstanceAcceleratorTypeEnum::ML_EIA2_XLARGE,
        NotebookInstanceAcceleratorTypeEnum::ML_EIA2_MEDIUM,
    ];
    $request->updateNotebookInstanceInput->additionalCodeRepositories = [
        'corrupti',
        'nihil',
    ];
    $request->updateNotebookInstanceInput->defaultCodeRepository = 'eius';
    $request->updateNotebookInstanceInput->disassociateAcceleratorTypes = false;
    $request->updateNotebookInstanceInput->disassociateAdditionalCodeRepositories = false;
    $request->updateNotebookInstanceInput->disassociateDefaultCodeRepository = false;
    $request->updateNotebookInstanceInput->disassociateLifecycleConfig = false;
    $request->updateNotebookInstanceInput->instanceMetadataServiceConfiguration = new InstanceMetadataServiceConfiguration();
    $request->updateNotebookInstanceInput->instanceMetadataServiceConfiguration->minimumInstanceMetadataServiceVersion = 'placeat';
    $request->updateNotebookInstanceInput->instanceType = InstanceTypeEnum::ML_M44XLARGE;
    $request->updateNotebookInstanceInput->lifecycleConfigName = 'facere';
    $request->updateNotebookInstanceInput->notebookInstanceName = 'ipsam';
    $request->updateNotebookInstanceInput->roleArn = 'nobis';
    $request->updateNotebookInstanceInput->rootAccess = RootAccessEnum::DISABLED;
    $request->updateNotebookInstanceInput->volumeSizeInGB = 287834;
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = UpdateNotebookInstanceXAmzTargetEnum::SAGE_MAKER_UPDATE_NOTEBOOK_INSTANCE;

    $response = $sdk->sdk->updateNotebookInstance($request);

    if ($response->updateNotebookInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotebookInstanceLifecycleConfig

Updates a notebook instance lifecycle configuration created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookInstanceLifecycleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotebookInstanceLifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookInstanceLifecycleHook;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotebookInstanceLifecycleConfigRequest();
    $request->updateNotebookInstanceLifecycleConfigInput = new UpdateNotebookInstanceLifecycleConfigInput();
    $request->updateNotebookInstanceLifecycleConfigInput->notebookInstanceLifecycleConfigName = 'iure';
    $request->updateNotebookInstanceLifecycleConfigInput->onCreate = [
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
    ];
    $request->updateNotebookInstanceLifecycleConfigInput->onStart = [
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
        new NotebookInstanceLifecycleHook(),
    ];
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum::SAGE_MAKER_UPDATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG;

    $response = $sdk->sdk->updateNotebookInstanceLifecycleConfig($request);

    if ($response->updateNotebookInstanceLifecycleConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipeline

Updates a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDefinitionS3Location;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineRequest();
    $request->updatePipelineRequest = new UpdatePipelineRequest();
    $request->updatePipelineRequest->parallelismConfiguration = new ParallelismConfiguration();
    $request->updatePipelineRequest->parallelismConfiguration->maxParallelExecutionSteps = 31605;
    $request->updatePipelineRequest->pipelineDefinition = 'libero';
    $request->updatePipelineRequest->pipelineDefinitionS3Location = new PipelineDefinitionS3Location();
    $request->updatePipelineRequest->pipelineDefinitionS3Location->bucket = 'excepturi';
    $request->updatePipelineRequest->pipelineDefinitionS3Location->objectKey = 'odio';
    $request->updatePipelineRequest->pipelineDefinitionS3Location->versionId = 'omnis';
    $request->updatePipelineRequest->pipelineDescription = 'officiis';
    $request->updatePipelineRequest->pipelineDisplayName = 'delectus';
    $request->updatePipelineRequest->pipelineName = 'magni';
    $request->updatePipelineRequest->roleArn = 'sit';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = UpdatePipelineXAmzTargetEnum::SAGE_MAKER_UPDATE_PIPELINE;

    $response = $sdk->sdk->updatePipeline($request);

    if ($response->updatePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipelineExecution

Updates a pipeline execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineExecutionRequest();
    $request->updatePipelineExecutionRequest = new UpdatePipelineExecutionRequest();
    $request->updatePipelineExecutionRequest->parallelismConfiguration = new ParallelismConfiguration();
    $request->updatePipelineExecutionRequest->parallelismConfiguration->maxParallelExecutionSteps = 587489;
    $request->updatePipelineExecutionRequest->pipelineExecutionArn = 'aut';
    $request->updatePipelineExecutionRequest->pipelineExecutionDescription = 'impedit';
    $request->updatePipelineExecutionRequest->pipelineExecutionDisplayName = 'quod';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = UpdatePipelineExecutionXAmzTargetEnum::SAGE_MAKER_UPDATE_PIPELINE_EXECUTION;

    $response = $sdk->sdk->updatePipelineExecution($request);

    if ($response->updatePipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

<p>Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model.</p> <note> <p>You must not update a project that is in use. If you update the <code>ServiceCatalogProvisioningUpdateDetails</code> of a project that is active or being created, or updated, you may lose resources already created by the project.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCatalogProvisioningUpdateDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningParameter;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->updateProjectInput = new UpdateProjectInput();
    $request->updateProjectInput->projectDescription = 'voluptatem';
    $request->updateProjectInput->projectName = 'non';
    $request->updateProjectInput->serviceCatalogProvisioningUpdateDetails = new ServiceCatalogProvisioningUpdateDetails();
    $request->updateProjectInput->serviceCatalogProvisioningUpdateDetails->provisioningArtifactId = 'beatae';
    $request->updateProjectInput->serviceCatalogProvisioningUpdateDetails->provisioningParameters = [
        new ProvisioningParameter(),
    ];
    $request->updateProjectInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateProjectXAmzTargetEnum::SAGE_MAKER_UPDATE_PROJECT;

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpace

Updates the settings of a space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSpaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpaceSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpaceRequest();
    $request->updateSpaceRequest = new UpdateSpaceRequest();
    $request->updateSpaceRequest->domainId = 'aliquid';
    $request->updateSpaceRequest->spaceName = 'ullam';
    $request->updateSpaceRequest->spaceSettings = new SpaceSettings();
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_G54XLARGE;
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'reprehenderit';
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'eos';
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'assumenda';
    $request->updateSpaceRequest->spaceSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'ut',
        'quae',
        'nihil',
        'quam',
    ];
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::SYSTEM;
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'cumque';
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'placeat';
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'adipisci';
    $request->updateSpaceRequest->spaceSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'non',
        'accusantium',
        'corrupti',
        'itaque',
    ];
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = UpdateSpaceXAmzTargetEnum::SAGE_MAKER_UPDATE_SPACE;

    $response = $sdk->sdk->updateSpace($request);

    if ($response->updateSpaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrainingJob

Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrainingJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfilerConfigForUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ProfilerRuleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfigForUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrainingJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrainingJobRequest();
    $request->updateTrainingJobRequest = new UpdateTrainingJobRequest();
    $request->updateTrainingJobRequest->profilerConfig = new ProfilerConfigForUpdate();
    $request->updateTrainingJobRequest->profilerConfig->disableProfiler = false;
    $request->updateTrainingJobRequest->profilerConfig->profilingIntervalInMilliseconds = 296257;
    $request->updateTrainingJobRequest->profilerConfig->profilingParameters = [
        'ea' => 'officiis',
        'quasi' => 'accusamus',
        'animi' => 'necessitatibus',
        'voluptatem' => 'maiores',
    ];
    $request->updateTrainingJobRequest->profilerConfig->s3OutputPath = 'odio';
    $request->updateTrainingJobRequest->profilerRuleConfigurations = [
        new ProfilerRuleConfiguration(),
        new ProfilerRuleConfiguration(),
    ];
    $request->updateTrainingJobRequest->resourceConfig = new ResourceConfigForUpdate();
    $request->updateTrainingJobRequest->resourceConfig->keepAlivePeriodInSeconds = 683192;
    $request->updateTrainingJobRequest->trainingJobName = 'itaque';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = UpdateTrainingJobXAmzTargetEnum::SAGE_MAKER_UPDATE_TRAINING_JOB;

    $response = $sdk->sdk->updateTrainingJob($request);

    if ($response->updateTrainingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrial

Updates the display name of a trial.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrialXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrialRequest();
    $request->updateTrialRequest = new UpdateTrialRequest();
    $request->updateTrialRequest->displayName = 'corporis';
    $request->updateTrialRequest->trialName = 'quas';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = UpdateTrialXAmzTargetEnum::SAGE_MAKER_UPDATE_TRIAL;

    $response = $sdk->sdk->updateTrial($request);

    if ($response->updateTrialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrialComponent

Updates one or more properties of a trial component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrialComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentArtifact;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentStatus;
use \OpenAPI\OpenAPI\Models\Shared\TrialComponentPrimaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrialComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrialComponentRequest();
    $request->updateTrialComponentRequest = new UpdateTrialComponentRequest();
    $request->updateTrialComponentRequest->displayName = 'suscipit';
    $request->updateTrialComponentRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-25T23:58:31.105Z');
    $request->updateTrialComponentRequest->inputArtifacts = [
        'quaerat' => new TrialComponentArtifact(),
        'corrupti' => new TrialComponentArtifact(),
        'sint' => new TrialComponentArtifact(),
    ];
    $request->updateTrialComponentRequest->inputArtifactsToRemove = [
        'vel',
        'quasi',
    ];
    $request->updateTrialComponentRequest->outputArtifacts = [
        'odio' => new TrialComponentArtifact(),
        'numquam' => new TrialComponentArtifact(),
        'fugit' => new TrialComponentArtifact(),
        'inventore' => new TrialComponentArtifact(),
    ];
    $request->updateTrialComponentRequest->outputArtifactsToRemove = [
        'nobis',
        'recusandae',
        'commodi',
        'possimus',
    ];
    $request->updateTrialComponentRequest->parameters = [
        'veniam' => new TrialComponentParameterValue(),
        'sit' => new TrialComponentParameterValue(),
        'fugit' => new TrialComponentParameterValue(),
    ];
    $request->updateTrialComponentRequest->parametersToRemove = [
        'consequatur',
        'vero',
        'id',
        'error',
    ];
    $request->updateTrialComponentRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T18:49:06.078Z');
    $request->updateTrialComponentRequest->status = new TrialComponentStatus();
    $request->updateTrialComponentRequest->status->message = 'distinctio';
    $request->updateTrialComponentRequest->status->primaryStatus = TrialComponentPrimaryStatusEnum::COMPLETED;
    $request->updateTrialComponentRequest->trialComponentName = 'sint';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = UpdateTrialComponentXAmzTargetEnum::SAGE_MAKER_UPDATE_TRIAL_COMPONENT;

    $response = $sdk->sdk->updateTrialComponent($request);

    if ($response->updateTrialComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserProfile

Updates a user profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\CanvasAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\ModelRegisterSettings;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesForecastingSettings;
use \OpenAPI\OpenAPI\Models\Shared\JupyterServerAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AppInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KernelGatewayAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CustomImage;
use \OpenAPI\OpenAPI\Models\Shared\RSessionAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAppSettings;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProAccessStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RStudioServerProUserGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharingSettings;
use \OpenAPI\OpenAPI\Models\Shared\NotebookOutputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TensorBoardAppSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest->domainId = 'explicabo';
    $request->updateUserProfileRequest->userProfileName = 'delectus';
    $request->updateUserProfileRequest->userSettings = new UserSettings();
    $request->updateUserProfileRequest->userSettings->canvasAppSettings = new CanvasAppSettings();
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings = new ModelRegisterSettings();
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings->crossAccountModelRegisterRoleArn = 'quos';
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->modelRegisterSettings->status = FeatureStatusEnum::DISABLED;
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings = new TimeSeriesForecastingSettings();
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings->amazonForecastRoleArn = 'enim';
    $request->updateUserProfileRequest->userSettings->canvasAppSettings->timeSeriesForecastingSettings->status = FeatureStatusEnum::ENABLED;
    $request->updateUserProfileRequest->userSettings->executionRole = 'voluptatem';
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings = new JupyterServerAppSettings();
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->codeRepositories = [
        new CodeRepository(),
        new CodeRepository(),
        new CodeRepository(),
    ];
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_T3_MICRO;
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->lifecycleConfigArn = 'tempora';
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageArn = 'occaecati';
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'quasi';
    $request->updateUserProfileRequest->userSettings->jupyterServerAppSettings->lifecycleConfigArns = [
        'ex',
    ];
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings = new KernelGatewayAppSettings();
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->customImages = [
        new CustomImage(),
    ];
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_P38XLARGE;
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->lifecycleConfigArn = 'dolores';
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageArn = 'perferendis';
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'esse';
    $request->updateUserProfileRequest->userSettings->kernelGatewayAppSettings->lifecycleConfigArns = [
        'blanditiis',
        'laudantium',
        'voluptates',
    ];
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings = new RSessionAppSettings();
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->customImages = [
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
        new CustomImage(),
    ];
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_C5_XLARGE;
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->lifecycleConfigArn = 'vel';
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageArn = 'beatae';
    $request->updateUserProfileRequest->userSettings->rSessionAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'quos';
    $request->updateUserProfileRequest->userSettings->rStudioServerProAppSettings = new RStudioServerProAppSettings();
    $request->updateUserProfileRequest->userSettings->rStudioServerProAppSettings->accessStatus = RStudioServerProAccessStatusEnum::ENABLED;
    $request->updateUserProfileRequest->userSettings->rStudioServerProAppSettings->userGroup = RStudioServerProUserGroupEnum::R_STUDIO_USER;
    $request->updateUserProfileRequest->userSettings->securityGroups = [
        'necessitatibus',
        'perspiciatis',
        'suscipit',
        'ullam',
    ];
    $request->updateUserProfileRequest->userSettings->sharingSettings = new SharingSettings();
    $request->updateUserProfileRequest->userSettings->sharingSettings->notebookOutputOption = NotebookOutputOptionEnum::DISABLED;
    $request->updateUserProfileRequest->userSettings->sharingSettings->s3KmsKeyId = 'debitis';
    $request->updateUserProfileRequest->userSettings->sharingSettings->s3OutputPath = 'quidem';
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings = new TensorBoardAppSettings();
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec = new ResourceSpec();
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->instanceType = AppInstanceTypeEnum::ML_M5D2XLARGE;
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->lifecycleConfigArn = 'doloremque';
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageArn = 'accusamus';
    $request->updateUserProfileRequest->userSettings->tensorBoardAppSettings->defaultResourceSpec->sageMakerImageVersionArn = 'quod';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = UpdateUserProfileXAmzTargetEnum::SAGE_MAKER_UPDATE_USER_PROFILE;

    $response = $sdk->sdk->updateUserProfile($request);

    if ($response->updateUserProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkforce

<p>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p> <p>The worker portal is now supported in VPC and public internet.</p> <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a <code>Not Found</code> error message on the worker portal.</p> <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p> <important> <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p> </important> <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using your own OIDC IdP. </p> <important> <p>You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p> </important> <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a> operation.</p> <important> <p>This operation only applies to private workforces.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkforceRequest;
use \OpenAPI\OpenAPI\Models\Shared\OidcConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkforceVpcConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkforceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkforceRequest();
    $request->updateWorkforceRequest = new UpdateWorkforceRequest();
    $request->updateWorkforceRequest->oidcConfig = new OidcConfig();
    $request->updateWorkforceRequest->oidcConfig->authorizationEndpoint = 'rerum';
    $request->updateWorkforceRequest->oidcConfig->clientId = 'perferendis';
    $request->updateWorkforceRequest->oidcConfig->clientSecret = 'nam';
    $request->updateWorkforceRequest->oidcConfig->issuer = 'ullam';
    $request->updateWorkforceRequest->oidcConfig->jwksUri = 'ratione';
    $request->updateWorkforceRequest->oidcConfig->logoutEndpoint = 'eos';
    $request->updateWorkforceRequest->oidcConfig->tokenEndpoint = 'id';
    $request->updateWorkforceRequest->oidcConfig->userInfoEndpoint = 'modi';
    $request->updateWorkforceRequest->sourceIpConfig = new SourceIpConfig();
    $request->updateWorkforceRequest->sourceIpConfig->cidrs = [
        'error',
        'consectetur',
        'reprehenderit',
        'eligendi',
    ];
    $request->updateWorkforceRequest->workforceName = 'cum';
    $request->updateWorkforceRequest->workforceVpcConfig = new WorkforceVpcConfigRequest();
    $request->updateWorkforceRequest->workforceVpcConfig->securityGroupIds = [
        'culpa',
        'a',
        'magnam',
    ];
    $request->updateWorkforceRequest->workforceVpcConfig->subnets = [
        'ad',
        'quia',
    ];
    $request->updateWorkforceRequest->workforceVpcConfig->vpcId = 'quod';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UpdateWorkforceXAmzTargetEnum::SAGE_MAKER_UPDATE_WORKFORCE;

    $response = $sdk->sdk->updateWorkforce($request);

    if ($response->updateWorkforceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkteam

Updates an existing work team with new member definitions or description.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkteamRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\CognitoMemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\OidcMemberDefinition;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkteamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkteamRequest();
    $request->updateWorkteamRequest = new UpdateWorkteamRequest();
    $request->updateWorkteamRequest->description = 'odit';
    $request->updateWorkteamRequest->memberDefinitions = [
        new MemberDefinition(),
        new MemberDefinition(),
        new MemberDefinition(),
    ];
    $request->updateWorkteamRequest->notificationConfiguration = new NotificationConfiguration();
    $request->updateWorkteamRequest->notificationConfiguration->notificationTopicArn = 'at';
    $request->updateWorkteamRequest->workteamName = 'ipsum';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateWorkteamXAmzTargetEnum::SAGE_MAKER_UPDATE_WORKTEAM;

    $response = $sdk->sdk->updateWorkteam($request);

    if ($response->updateWorkteamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
