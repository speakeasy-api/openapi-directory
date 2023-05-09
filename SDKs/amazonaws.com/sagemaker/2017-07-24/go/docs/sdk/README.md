# SDK

## Overview

<p>Provides APIs for creating and managing SageMaker resources. </p> <p>Other Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">SageMaker Developer Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI Runtime API Reference</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [AddAssociation](#addassociation) - Creates an <i>association</i> between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [AddTags](#addtags) - <p>Adds or overwrites one or more tags for the specified SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html">CreateHyperParameterTuningJob</a> </p> </note> <note> <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html">CreateUserProfile</a>.</p> </note>
* [AssociateTrialComponent](#associatetrialcomponent) - Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.
* [BatchDescribeModelPackage](#batchdescribemodelpackage) - This action batch describes a list of versioned model packages
* [CreateAction](#createaction) - Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [CreateAlgorithm](#createalgorithm) - Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.
* [CreateApp](#createapp) - Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
* [CreateAppImageConfig](#createappimageconfig) - Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the kernels in the image.
* [CreateArtifact](#createartifact) - Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [CreateAutoMLJob](#createautomljob) - <p>Creates an Autopilot job.</p> <p>Find the best-performing model after you run an Autopilot job by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a>.</p> <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model Development with Amazon SageMaker Autopilot</a>.</p>
* [CreateAutoMLJobV2](#createautomljobv2) - <p>Creates an Amazon SageMaker AutoML job that uses non-tabular data such as images or text for Computer Vision or Natural Language Processing problems.</p> <p>Find the resulting model after you run an AutoML job V2 by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a>.</p> <p>To create an <code>AutoMLJob</code> using tabular data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>
* [CreateCodeRepository](#createcoderepository) - <p>Creates a Git repository as a resource in your SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>
* [CreateCompilationJob](#createcompilationjob) - <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job. </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopCompilationJob.html">StopCompilationJob</a>. To get information about a particular model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
* [CreateContext](#createcontext) - Creates a <i>context</i>. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
* [CreateDataQualityJobDefinition](#createdataqualityjobdefinition) - Creates a definition for a job that monitors data quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
* [CreateDeviceFleet](#createdevicefleet) - Creates a device fleet.
* [CreateDomain](#createdomain) - <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.</p> <p> <b>EFS storage</b> </p> <p>When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.</p> <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at Rest Using Encryption</a>.</p> <p> <b>VPC configuration</b> </p> <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code> parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you choose when you onboard to Studio. The following options are available:</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.</p> </li> <li> <p> <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.</p> <p>When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.</p> </li> </ul> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
* [CreateEdgeDeploymentPlan](#createedgedeploymentplan) - Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.
* [CreateEdgeDeploymentStage](#createedgedeploymentstage) - Creates a new stage in an existing edge deployment plan.
* [CreateEdgePackagingJob](#createedgepackagingjob) - Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.
* [CreateEndpoint](#createendpoint) - <p>Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. </p> <p>When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p> <note> <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API operations, add the following policies to the role. </p> <ul> <li> <p>Option 1: For a full SageMaker access, search and attach the <code>AmazonSageMakerFullAccess</code> policy.</p> </li> <li> <p>Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: </p> <p> <code>"Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]</code> </p> <p> <code>"Resource": [</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code> </p> <p> <code>]</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">SageMaker API Permissions: Actions, Permissions, and Resources Reference</a>.</p> </li> </ul> </note>
* [CreateEndpointConfig](#createendpointconfig) - <p>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want SageMaker to provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>
* [CreateExperiment](#createexperiment) - <p>Creates a SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <note> <p>In the Studio UI, trials are referred to as <i>run groups</i> and trial components are referred to as <i>runs</i>.</p> </note> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListExperiments.html">ListExperiments</a> API. To view an experiment's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To create a trial call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrial.html">CreateTrial</a> API.</p>
* [CreateFeatureGroup](#createfeaturegroup) - <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of <code>Features</code> defined in the <code>FeatureStore</code> to describe a <code>Record</code>. </p> <p>The <code>FeatureGroup</code> defines the schema and features contained in the FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code> and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p> <important> <p>You must include at least one of <code>OnlineStoreConfig</code> and <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p> </important>
* [CreateFlowDefinition](#createflowdefinition) - Creates a flow definition.
* [CreateHub](#createhub) - <p>Create a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [CreateHumanTaskUI](#createhumantaskui) - Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
* [CreateHyperParameterTuningJob](#createhyperparametertuningjob) - <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.</p> <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View Experiments, Trials, and Trial Components</a>.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important>
* [CreateImage](#createimage) - Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Elastic Container Registry (ECR). For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
* [CreateImageVersion](#createimageversion) - Creates a version of the SageMaker image specified by <code>ImageName</code>. The version represents the Amazon Elastic Container Registry (ECR) container image specified by <code>BaseImage</code>.
* [CreateInferenceExperiment](#createinferenceexperiment) - <p> Creates an inference experiment using the configurations specified in the request. </p> <p> Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>. </p> <p> Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. </p> <p> While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html">View, monitor, and edit shadow tests</a>. </p>
* [CreateInferenceRecommendationsJob](#createinferencerecommendationsjob) - Starts a recommendation job. You can create either an instance recommendation or load test job.
* [CreateLabelingJob](#createlabelingjob) - <p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. </p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p> <p>You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (<code>InProgress</code>) streaming labeling job in real time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling Job</a>.</p>
* [CreateModel](#createmodel) - <p>Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>
* [CreateModelBiasJobDefinition](#createmodelbiasjobdefinition) - Creates the definition for a model bias job.
* [CreateModelCard](#createmodelcard) - <p>Creates an Amazon SageMaker Model Card.</p> <p>For information about how to use model cards, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html">Amazon SageMaker Model Card</a>.</p>
* [CreateModelCardExportJob](#createmodelcardexportjob) - Creates an Amazon SageMaker Model Card export job.
* [CreateModelExplainabilityJobDefinition](#createmodelexplainabilityjobdefinition) - Creates the definition for a model explainability job.
* [CreateModelPackage](#createmodelpackage) - <p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p> <note> <p>There are two types of model packages:</p> <ul> <li> <p>Versioned - a model that is part of a model group in the model registry.</p> </li> <li> <p>Unversioned - a model package that is not part of a model group.</p> </li> </ul> </note>
* [CreateModelPackageGroup](#createmodelpackagegroup) - Creates a model group. A model group contains a group of model versions.
* [CreateModelQualityJobDefinition](#createmodelqualityjobdefinition) - Creates a definition for a job that monitors model quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
* [CreateMonitoringSchedule](#createmonitoringschedule) - Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endpoint.
* [CreateNotebookInstance](#createnotebookinstance) - <p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
* [CreateNotebookInstanceLifecycleConfig](#createnotebookinstancelifecycleconfig) - <p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
* [CreatePipeline](#createpipeline) - Creates a pipeline using a JSON pipeline definition.
* [CreatePresignedDomainURL](#createpresigneddomainurl) - <p>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. </p> <p>The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a> .</p> <note> <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
* [CreatePresignedNotebookInstanceURL](#createpresignednotebookinstanceurl) - <p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker console, when you choose <code>Open</code> next to a notebook instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
* [CreateProcessingJob](#createprocessingjob) - Creates a processing job.
* [CreateProject](#createproject) - Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.
* [CreateSpace](#createspace) - Creates a space used for real time collaboration in a Domain.
* [CreateStudioLifecycleConfig](#createstudiolifecycleconfig) - Creates a new Studio Lifecycle Configuration.
* [CreateTrainingJob](#createtrainingjob) - <p>Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important> </li> <li> <p> <code>InputDataConfig</code> - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. </p> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot training job has to complete. </p> </li> <li> <p> <code>Environment</code> - The environment variables to set in the Docker container.</p> </li> <li> <p> <code>RetryStrategy</code> - The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p> </li> </ul> <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
* [CreateTransformJob](#createtransformjob) - <p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>
* [CreateTrial](#createtrial) - <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single SageMaker <i>experiment</i>.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To view a trial's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API. To create a trial component, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> API.</p>
* [CreateTrialComponent](#createtrialcomponent) - <p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p>
* [CreateUserProfile](#createuserprofile) - Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 
* [CreateWorkforce](#createworkforce) - <p>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API operation to delete the existing workforce and then use <code>CreateWorkforce</code> to create a new workforce.</p> <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in <code>CognitoConfig</code>. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html"> Create a Private Workforce (Amazon Cognito)</a>.</p> <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i> because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html"> Create a Private Workforce (OIDC IdP)</a>.</p>
* [CreateWorkteam](#createworkteam) - <p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>
* [DeleteAction](#deleteaction) - Deletes an action.
* [DeleteAlgorithm](#deletealgorithm) - Removes the specified algorithm from your account.
* [DeleteApp](#deleteapp) - Used to stop and delete an app.
* [DeleteAppImageConfig](#deleteappimageconfig) - Deletes an AppImageConfig.
* [DeleteArtifact](#deleteartifact) - Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be specified.
* [DeleteAssociation](#deleteassociation) - Deletes an association.
* [DeleteCodeRepository](#deletecoderepository) - Deletes the specified Git repository from your account.
* [DeleteContext](#deletecontext) - Deletes an context.
* [DeleteDataQualityJobDefinition](#deletedataqualityjobdefinition) - Deletes a data quality monitoring job definition.
* [DeleteDeviceFleet](#deletedevicefleet) - Deletes a fleet.
* [DeleteDomain](#deletedomain) - Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 
* [DeleteEdgeDeploymentPlan](#deleteedgedeploymentplan) - Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.
* [DeleteEdgeDeploymentStage](#deleteedgedeploymentstage) - Delete a stage in an edge deployment plan if (and only if) the stage is inactive.
* [DeleteEndpoint](#deleteendpoint) - <p>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p> <p>When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html#sagemaker-CreateModel-request-ExecutionRoleArn">ExecutionRoleArn</a> </code>, otherwise SageMaker cannot delete these resources.</p>
* [DeleteEndpointConfig](#deleteendpointconfig) - <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>
* [DeleteExperiment](#deleteexperiment) - Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API to get a list of the trials associated with the experiment.
* [DeleteFeatureGroup](#deletefeaturegroup) - <p>Delete the <code>FeatureGroup</code> and any data that was written to the <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p> <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your <code>OfflineStore</code> are not deleted. </p>
* [DeleteFlowDefinition](#deleteflowdefinition) - Deletes the specified flow definition.
* [DeleteHub](#deletehub) - <p>Delete a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [DeleteHubContent](#deletehubcontent) - <p>Delete the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [DeleteHumanTaskUI](#deletehumantaskui) - <p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListHumanTaskUis.html">ListHumanTaskUis</a>. When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
* [DeleteImage](#deleteimage) - Deletes a SageMaker image and all versions of the image. The container images aren't deleted.
* [DeleteImageVersion](#deleteimageversion) - Deletes a version of a SageMaker image. The container image the version represents isn't deleted.
* [DeleteInferenceExperiment](#deleteinferenceexperiment) - <p>Deletes an inference experiment.</p> <note> <p> This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment. </p> </note>
* [DeleteModel](#deletemodel) - Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 
* [DeleteModelBiasJobDefinition](#deletemodelbiasjobdefinition) - Deletes an Amazon SageMaker model bias job definition.
* [DeleteModelCard](#deletemodelcard) - Deletes an Amazon SageMaker Model Card.
* [DeleteModelExplainabilityJobDefinition](#deletemodelexplainabilityjobdefinition) - Deletes an Amazon SageMaker model explainability job definition.
* [DeleteModelPackage](#deletemodelpackage) - <p>Deletes a model package.</p> <p>A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>
* [DeleteModelPackageGroup](#deletemodelpackagegroup) - Deletes the specified model group.
* [DeleteModelPackageGroupPolicy](#deletemodelpackagegrouppolicy) - Deletes a model group resource policy.
* [DeleteModelQualityJobDefinition](#deletemodelqualityjobdefinition) - Deletes the secified model quality monitoring job definition.
* [DeleteMonitoringSchedule](#deletemonitoringschedule) - Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 
* [DeleteNotebookInstance](#deletenotebookinstance) - <p> Deletes an SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>
* [DeleteNotebookInstanceLifecycleConfig](#deletenotebookinstancelifecycleconfig) - Deletes a notebook instance lifecycle configuration.
* [DeletePipeline](#deletepipeline) - Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the pipeline are deleted.
* [DeleteProject](#deleteproject) - Delete the specified project.
* [DeleteSpace](#deletespace) - Used to delete a space.
* [DeleteStudioLifecycleConfig](#deletestudiolifecycleconfig) - Deletes the Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.
* [DeleteTags](#deletetags) - <p>Deletes the specified tags from an SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note> <note> <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile launched before you called this API.</p> </note>
* [DeleteTrial](#deletetrial) - Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API to get the list of trial components.
* [DeleteTrialComponent](#deletetrialcomponent) - Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.
* [DeleteUserProfile](#deleteuserprofile) - Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
* [DeleteWorkforce](#deleteworkforce) - <p>Use this operation to delete a workforce.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateWorkforce.html">CreateWorkforce</a> to create a new workforce.</p> <important> <p>If a private workforce contains one or more work teams, you must use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a <code>ResourceInUse</code> error.</p> </important>
* [DeleteWorkteam](#deleteworkteam) - Deletes an existing work team. This operation can't be undone.
* [DeregisterDevices](#deregisterdevices) - Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.
* [DescribeAction](#describeaction) - Describes an action.
* [DescribeAlgorithm](#describealgorithm) - Returns a description of the specified algorithm that is in your account.
* [DescribeApp](#describeapp) - Describes the app.
* [DescribeAppImageConfig](#describeappimageconfig) - Describes an AppImageConfig.
* [DescribeArtifact](#describeartifact) - Describes an artifact.
* [DescribeAutoMLJob](#describeautomljob) - Returns information about an Amazon SageMaker AutoML job.
* [DescribeAutoMLJobV2](#describeautomljobv2) - <p>Returns information about an Amazon SageMaker AutoML V2 job.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>
* [DescribeCodeRepository](#describecoderepository) - Gets details about the specified Git repository.
* [DescribeCompilationJob](#describecompilationjob) - <p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
* [DescribeContext](#describecontext) - Describes a context.
* [DescribeDataQualityJobDefinition](#describedataqualityjobdefinition) - Gets the details of a data quality monitoring job definition.
* [DescribeDevice](#describedevice) - Describes the device.
* [DescribeDeviceFleet](#describedevicefleet) - A description of the fleet the device belongs to.
* [DescribeDomain](#describedomain) - The description of the domain.
* [DescribeEdgeDeploymentPlan](#describeedgedeploymentplan) - Describes an edge deployment plan with deployment status per stage.
* [DescribeEdgePackagingJob](#describeedgepackagingjob) - A description of edge packaging jobs.
* [DescribeEndpoint](#describeendpoint) - Returns the description of an endpoint.
* [DescribeEndpointConfig](#describeendpointconfig) - Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.
* [DescribeExperiment](#describeexperiment) - Provides a list of an experiment's properties.
* [DescribeFeatureGroup](#describefeaturegroup) - Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.
* [DescribeFeatureMetadata](#describefeaturemetadata) - Shows the metadata for a feature within a feature group.
* [DescribeFlowDefinition](#describeflowdefinition) - Returns information about the specified flow definition.
* [DescribeHub](#describehub) - <p>Describe a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [DescribeHubContent](#describehubcontent) - <p>Describe the content of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [DescribeHumanTaskUI](#describehumantaskui) - Returns information about the requested human task user interface (worker task template).
* [DescribeHyperParameterTuningJob](#describehyperparametertuningjob) - Gets a description of a hyperparameter tuning job.
* [DescribeImage](#describeimage) - Describes a SageMaker image.
* [DescribeImageVersion](#describeimageversion) - Describes a version of a SageMaker image.
* [DescribeInferenceExperiment](#describeinferenceexperiment) - Returns details about an inference experiment.
* [DescribeInferenceRecommendationsJob](#describeinferencerecommendationsjob) - Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.
* [DescribeLabelingJob](#describelabelingjob) - Gets information about a labeling job.
* [DescribeLineageGroup](#describelineagegroup) - Provides a list of properties for the requested lineage group. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.
* [DescribeModel](#describemodel) - Describes a model that you created using the <code>CreateModel</code> API.
* [DescribeModelBiasJobDefinition](#describemodelbiasjobdefinition) - Returns a description of a model bias job definition.
* [DescribeModelCard](#describemodelcard) - Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.
* [DescribeModelCardExportJob](#describemodelcardexportjob) - Describes an Amazon SageMaker Model Card export job.
* [DescribeModelExplainabilityJobDefinition](#describemodelexplainabilityjobdefinition) - Returns a description of a model explainability job definition.
* [DescribeModelPackage](#describemodelpackage) - <p>Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace.</p> <p>To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</p>
* [DescribeModelPackageGroup](#describemodelpackagegroup) - Gets a description for the specified model group.
* [DescribeModelQualityJobDefinition](#describemodelqualityjobdefinition) - Returns a description of a model quality job definition.
* [DescribeMonitoringSchedule](#describemonitoringschedule) - Describes the schedule for a monitoring job.
* [DescribeNotebookInstance](#describenotebookinstance) - Returns information about a notebook instance.
* [DescribeNotebookInstanceLifecycleConfig](#describenotebookinstancelifecycleconfig) - <p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
* [DescribePipeline](#describepipeline) - Describes the details of a pipeline.
* [DescribePipelineDefinitionForExecution](#describepipelinedefinitionforexecution) - Describes the details of an execution's pipeline definition.
* [DescribePipelineExecution](#describepipelineexecution) - Describes the details of a pipeline execution.
* [DescribeProcessingJob](#describeprocessingjob) - Returns a description of a processing job.
* [DescribeProject](#describeproject) - Describes the details of a project.
* [DescribeSpace](#describespace) - Describes the space.
* [DescribeStudioLifecycleConfig](#describestudiolifecycleconfig) - Describes the Studio Lifecycle Configuration.
* [DescribeSubscribedWorkteam](#describesubscribedworkteam) - Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.
* [DescribeTrainingJob](#describetrainingjob) - <p>Returns information about a training job. </p> <p>Some of the attributes below only appear if the training job successfully starts. If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and, depending on the <code>FailureReason</code>, attributes like <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>, <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be present in the response.</p>
* [DescribeTransformJob](#describetransformjob) - Returns information about a transform job.
* [DescribeTrial](#describetrial) - Provides a list of a trial's properties.
* [DescribeTrialComponent](#describetrialcomponent) - Provides a list of a trials component's properties.
* [DescribeUserProfile](#describeuserprofile) - Describes a user profile. For more information, see <code>CreateUserProfile</code>.
* [DescribeWorkforce](#describeworkforce) - <p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>
* [DescribeWorkteam](#describeworkteam) - Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
* [DisableSagemakerServicecatalogPortfolio](#disablesagemakerservicecatalogportfolio) - Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [DisassociateTrialComponent](#disassociatetrialcomponent) - <p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AssociateTrialComponent.html">AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
* [EnableSagemakerServicecatalogPortfolio](#enablesagemakerservicecatalogportfolio) - Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [GetDeviceFleetReport](#getdevicefleetreport) - Describes a fleet.
* [GetLineageGroupPolicy](#getlineagegrouppolicy) - The resource policy for the lineage group.
* [GetModelPackageGroupPolicy](#getmodelpackagegrouppolicy) - Gets a resource policy that manages access for a model group. For information about resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
* [GetSagemakerServicecatalogPortfolioStatus](#getsagemakerservicecatalogportfoliostatus) - Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
* [GetSearchSuggestions](#getsearchsuggestions) - An auto-complete API for the search functionality in the SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.
* [ImportHubContent](#importhubcontent) - <p>Import hub content.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [ListActions](#listactions) - Lists the actions in your account and their properties.
* [ListAlgorithms](#listalgorithms) - Lists the machine learning algorithms that have been created.
* [ListAliases](#listaliases) - Lists the aliases of a specified image or image version.
* [ListAppImageConfigs](#listappimageconfigs) - Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.
* [ListApps](#listapps) - Lists apps.
* [ListArtifacts](#listartifacts) - Lists the artifacts in your account and their properties.
* [ListAssociations](#listassociations) - Lists the associations in your account and their properties.
* [ListAutoMLJobs](#listautomljobs) - Request a list of jobs.
* [ListCandidatesForAutoMLJob](#listcandidatesforautomljob) - List the candidates created for the job.
* [ListCodeRepositories](#listcoderepositories) - Gets a list of the Git repositories in your account.
* [ListCompilationJobs](#listcompilationjobs) - <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>.</p>
* [ListContexts](#listcontexts) - Lists the contexts in your account and their properties.
* [ListDataQualityJobDefinitions](#listdataqualityjobdefinitions) - Lists the data quality job definitions in your account.
* [ListDeviceFleets](#listdevicefleets) - Returns a list of devices in the fleet.
* [ListDevices](#listdevices) - A list of devices.
* [ListDomains](#listdomains) - Lists the domains.
* [ListEdgeDeploymentPlans](#listedgedeploymentplans) - Lists all edge deployment plans.
* [ListEdgePackagingJobs](#listedgepackagingjobs) - Returns a list of edge packaging jobs.
* [ListEndpointConfigs](#listendpointconfigs) - Lists endpoint configurations.
* [ListEndpoints](#listendpoints) - Lists endpoints.
* [ListExperiments](#listexperiments) - Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
* [ListFeatureGroups](#listfeaturegroups) - List <code>FeatureGroup</code>s based on given filter and order.
* [ListFlowDefinitions](#listflowdefinitions) - Returns information about the flow definitions in your account.
* [ListHubContentVersions](#listhubcontentversions) - <p>List hub content versions.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [ListHubContents](#listhubcontents) - <p>List the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [ListHubs](#listhubs) - <p>List all existing hubs.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [ListHumanTaskUis](#listhumantaskuis) - Returns information about the human task user interfaces in your account.
* [ListHyperParameterTuningJobs](#listhyperparametertuningjobs) - Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.
* [ListImageVersions](#listimageversions) - Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.
* [ListImages](#listimages) - Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.
* [ListInferenceExperiments](#listinferenceexperiments) - Returns the list of all inference experiments.
* [ListInferenceRecommendationsJobSteps](#listinferencerecommendationsjobsteps) - <p>Returns a list of the subtasks for an Inference Recommender job.</p> <p>The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</p>
* [ListInferenceRecommendationsJobs](#listinferencerecommendationsjobs) - Lists recommendation jobs that satisfy various filters.
* [ListLabelingJobs](#listlabelingjobs) - Gets a list of labeling jobs.
* [ListLabelingJobsForWorkteam](#listlabelingjobsforworkteam) - Gets a list of labeling jobs assigned to a specified work team.
* [ListLineageGroups](#listlineagegroups) - A list of lineage groups shared with your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.
* [ListModelBiasJobDefinitions](#listmodelbiasjobdefinitions) - Lists model bias jobs definitions that satisfy various filters.
* [ListModelCardExportJobs](#listmodelcardexportjobs) - List the export jobs for the Amazon SageMaker Model Card.
* [ListModelCardVersions](#listmodelcardversions) - List existing versions of an Amazon SageMaker Model Card.
* [ListModelCards](#listmodelcards) - List existing model cards.
* [ListModelExplainabilityJobDefinitions](#listmodelexplainabilityjobdefinitions) - Lists model explainability job definitions that satisfy various filters.
* [ListModelMetadata](#listmodelmetadata) - Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.
* [ListModelPackageGroups](#listmodelpackagegroups) - Gets a list of the model groups in your Amazon Web Services account.
* [ListModelPackages](#listmodelpackages) - Lists the model packages that have been created.
* [ListModelQualityJobDefinitions](#listmodelqualityjobdefinitions) - Gets a list of model quality monitoring job definitions in your account.
* [ListModels](#listmodels) - Lists models created with the <code>CreateModel</code> API.
* [ListMonitoringAlertHistory](#listmonitoringalerthistory) - Gets a list of past alerts in a model monitoring schedule.
* [ListMonitoringAlerts](#listmonitoringalerts) - Gets the alerts for a single monitoring schedule.
* [ListMonitoringExecutions](#listmonitoringexecutions) - Returns list of all monitoring job executions.
* [ListMonitoringSchedules](#listmonitoringschedules) - Returns list of all monitoring schedules.
* [ListNotebookInstanceLifecycleConfigs](#listnotebookinstancelifecycleconfigs) - Lists notebook instance lifestyle configurations created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.
* [ListNotebookInstances](#listnotebookinstances) - Returns a list of the SageMaker notebook instances in the requester's account in an Amazon Web Services Region. 
* [ListPipelineExecutionSteps](#listpipelineexecutionsteps) - Gets a list of <code>PipeLineExecutionStep</code> objects.
* [ListPipelineExecutions](#listpipelineexecutions) - Gets a list of the pipeline executions.
* [ListPipelineParametersForExecution](#listpipelineparametersforexecution) - Gets a list of parameters for a pipeline execution.
* [ListPipelines](#listpipelines) - Gets a list of pipelines.
* [ListProcessingJobs](#listprocessingjobs) - Lists processing jobs that satisfy various filters.
* [ListProjects](#listprojects) - Gets a list of the projects in an Amazon Web Services account.
* [ListSpaces](#listspaces) - Lists spaces.
* [ListStageDevices](#liststagedevices) - Lists devices allocated to the stage, containing detailed device information and deployment status.
* [ListStudioLifecycleConfigs](#liststudiolifecycleconfigs) - Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.
* [ListSubscribedWorkteams](#listsubscribedworkteams) - Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
* [ListTags](#listtags) - Returns the tags for the specified SageMaker resource.
* [ListTrainingJobs](#listtrainingjobs) - <p>Lists training jobs.</p> <note> <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same time, the <code>MaxResults</code> number of training jobs are first retrieved ignoring the <code>StatusEquals</code> parameter and then they are filtered by the <code>StatusEquals</code> parameter, which is returned as a response.</p> <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p> <p> <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code> </p> <p>First, 100 trainings jobs with any status, including those other than <code>InProgress</code>, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of <code>InProgress</code> are returned.</p> <p>You can quickly test the API using the following Amazon Web Services CLI code.</p> <p> <code>aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</code> </p> </note>
* [ListTrainingJobsForHyperParameterTuningJob](#listtrainingjobsforhyperparametertuningjob) - Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.
* [ListTransformJobs](#listtransformjobs) - Lists transform jobs.
* [ListTrialComponents](#listtrialcomponents) - <p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>
* [ListTrials](#listtrials) - Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
* [ListUserProfiles](#listuserprofiles) - Lists user profiles.
* [ListWorkforces](#listworkforces) - Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.
* [ListWorkteams](#listworkteams) - Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
* [PutModelPackageGroupPolicy](#putmodelpackagegrouppolicy) - Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
* [QueryLineage](#querylineage) - Use this action to inspect your lineage and discover relationships between entities. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html"> Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.
* [RegisterDevices](#registerdevices) - Register devices.
* [RenderUITemplate](#renderuitemplate) - Renders the UI template so that you can preview the worker's experience. 
* [RetryPipelineExecution](#retrypipelineexecution) - Retry the execution of the pipeline.
* [Search](#search) - <p>Finds SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p> <note> <p>The Search API may provide access to otherwise restricted data. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference</a> for more information.</p> </note>
* [SendPipelineExecutionStepFailure](#sendpipelineexecutionstepfailure) - Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
* [SendPipelineExecutionStepSuccess](#sendpipelineexecutionstepsuccess) - Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
* [StartEdgeDeploymentStage](#startedgedeploymentstage) - Starts a stage in an edge deployment plan.
* [StartInferenceExperiment](#startinferenceexperiment) - Starts an inference experiment.
* [StartMonitoringSchedule](#startmonitoringschedule) - <p>Starts a previously stopped monitoring schedule.</p> <note> <p>By default, when you successfully create a new schedule, the status of a monitoring schedule is <code>scheduled</code>.</p> </note>
* [StartNotebookInstance](#startnotebookinstance) - Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. 
* [StartPipelineExecution](#startpipelineexecution) - Starts a pipeline execution.
* [StopAutoMLJob](#stopautomljob) - A method for forcing a running job to shut down.
* [StopCompilationJob](#stopcompilationjob) - <p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <code>CompilationJobStatus</code> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <code>CompilationJobStatus</code> to <code>Stopped</code>. </p>
* [StopEdgeDeploymentStage](#stopedgedeploymentstage) - Stops a stage in an edge deployment plan.
* [StopEdgePackagingJob](#stopedgepackagingjob) - Request to stop an edge packaging job.
* [StopHyperParameterTuningJob](#stophyperparametertuningjob) - <p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>
* [StopInferenceExperiment](#stopinferenceexperiment) - Stops an inference experiment.
* [StopInferenceRecommendationsJob](#stopinferencerecommendationsjob) - Stops an Inference Recommender job.
* [StopLabelingJob](#stoplabelingjob) - Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
* [StopMonitoringSchedule](#stopmonitoringschedule) - Stops a previously started monitoring schedule.
* [StopNotebookInstance](#stopnotebookinstance) - <p>Terminates the ML compute instance. Before terminating the instance, SageMaker disconnects the ML storage volume from it. SageMaker preserves the ML storage volume. SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>
* [StopPipelineExecution](#stoppipelineexecution) - <p>Stops a pipeline execution.</p> <p> <b>Callback Step</b> </p> <p>A pipeline execution won't stop while a callback step is running. When you call <code>StopPipelineExecution</code> on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping".</p> <p>You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to <code>SendPipelineExecutionStepSuccess</code> or <code>SendPipelineExecutionStepFailure</code>.</p> <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p> <p> <b>Lambda Step</b> </p> <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit the pipeline execution status is <code>Failed</code>.</p>
* [StopProcessingJob](#stopprocessingjob) - Stops a processing job.
* [StopTrainingJob](#stoptrainingjob) - <p>Stops a training job. To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, SageMaker changes the status of the job to <code>Stopping</code>. After SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>
* [StopTransformJob](#stoptransformjob) - <p>Stops a batch transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
* [UpdateAction](#updateaction) - Updates an action.
* [UpdateAppImageConfig](#updateappimageconfig) - Updates the properties of an AppImageConfig.
* [UpdateArtifact](#updateartifact) - Updates an artifact.
* [UpdateCodeRepository](#updatecoderepository) - Updates the specified Git repository with the specified values.
* [UpdateContext](#updatecontext) - Updates a context.
* [UpdateDeviceFleet](#updatedevicefleet) - Updates a fleet of devices.
* [UpdateDevices](#updatedevices) - Updates one or more devices in a fleet.
* [UpdateDomain](#updatedomain) - Updates the default settings for new user profiles in the domain.
* [UpdateEndpoint](#updateendpoint) - <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>
* [UpdateEndpointWeightsAndCapacities](#updateendpointweightsandcapacities) - Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. 
* [UpdateExperiment](#updateexperiment) - Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
* [UpdateFeatureGroup](#updatefeaturegroup) - Updates the feature group.
* [UpdateFeatureMetadata](#updatefeaturemetadata) - Updates the description and parameters of the feature group.
* [UpdateHub](#updatehub) - <p>Update a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>
* [UpdateImage](#updateimage) - Updates the properties of a SageMaker image. To change the image's tags, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html">DeleteTags</a> APIs.
* [UpdateImageVersion](#updateimageversion) - Updates the properties of a SageMaker image version.
* [UpdateInferenceExperiment](#updateinferenceexperiment) -  Updates an inference experiment that you created. The status of the inference experiment has to be either <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>. 
* [UpdateModelCard](#updatemodelcard) - <p>Update an Amazon SageMaker Model Card.</p> <important> <p>You cannot update both model card content and model card status in a single call.</p> </important>
* [UpdateModelPackage](#updatemodelpackage) - Updates a versioned model.
* [UpdateMonitoringAlert](#updatemonitoringalert) - Update the parameters of a model monitor alert.
* [UpdateMonitoringSchedule](#updatemonitoringschedule) - Updates a previously created schedule.
* [UpdateNotebookInstance](#updatenotebookinstance) - Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
* [UpdateNotebookInstanceLifecycleConfig](#updatenotebookinstancelifecycleconfig) - Updates a notebook instance lifecycle configuration created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.
* [UpdatePipeline](#updatepipeline) - Updates a pipeline.
* [UpdatePipelineExecution](#updatepipelineexecution) - Updates a pipeline execution.
* [UpdateProject](#updateproject) - <p>Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model.</p> <note> <p>You must not update a project that is in use. If you update the <code>ServiceCatalogProvisioningUpdateDetails</code> of a project that is active or being created, or updated, you may lose resources already created by the project.</p> </note>
* [UpdateSpace](#updatespace) - Updates the settings of a space.
* [UpdateTrainingJob](#updatetrainingjob) - Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.
* [UpdateTrial](#updatetrial) - Updates the display name of a trial.
* [UpdateTrialComponent](#updatetrialcomponent) - Updates one or more properties of a trial component.
* [UpdateUserProfile](#updateuserprofile) - Updates a user profile.
* [UpdateWorkforce](#updateworkforce) - <p>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p> <p>The worker portal is now supported in VPC and public internet.</p> <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a <code>Not Found</code> error message on the worker portal.</p> <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p> <important> <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p> </important> <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using your own OIDC IdP. </p> <important> <p>You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p> </important> <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a> operation.</p> <important> <p>This operation only applies to private workforces.</p> </important>
* [UpdateWorkteam](#updateworkteam) - Updates an existing work team with new member definitions or description.

## AddAssociation

Creates an <i>association</i> between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

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
    res, err := s.SDK.AddAssociation(ctx, operations.AddAssociationRequest{
        AddAssociationRequest: shared.AddAssociationRequest{
            AssociationType: shared.AssociationEdgeTypeEnumDerivedFrom.ToPointer(),
            DestinationArn: "suscipit",
            SourceArn: "iure",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AddAssociationXAmzTargetEnumSageMakerAddAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAssociationResponse != nil {
        // handle response
    }
}
```

## AddTags

<p>Adds or overwrites one or more tags for the specified SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html">CreateHyperParameterTuningJob</a> </p> </note> <note> <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html">CreateUserProfile</a>.</p> </note>

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
    res, err := s.SDK.AddTags(ctx, operations.AddTagsRequest{
        AddTagsInput: shared.AddTagsInput{
            ResourceArn: "minus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "nisi",
                },
                shared.Tag{
                    Key: "recusandae",
                    Value: "temporibus",
                },
                shared.Tag{
                    Key: "ab",
                    Value: "quis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumSageMakerAddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
}
```

## AssociateTrialComponent

Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.

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
    res, err := s.SDK.AssociateTrialComponent(ctx, operations.AssociateTrialComponentRequest{
        AssociateTrialComponentRequest: shared.AssociateTrialComponentRequest{
            TrialComponentName: "odit",
            TrialName: "at",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.AssociateTrialComponentXAmzTargetEnumSageMakerAssociateTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTrialComponentResponse != nil {
        // handle response
    }
}
```

## BatchDescribeModelPackage

This action batch describes a list of versioned model packages

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
    res, err := s.SDK.BatchDescribeModelPackage(ctx, operations.BatchDescribeModelPackageRequest{
        BatchDescribeModelPackageInput: shared.BatchDescribeModelPackageInput{
            ModelPackageArnList: []string{
                "dolorum",
                "dicta",
                "nam",
                "officia",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.BatchDescribeModelPackageXAmzTargetEnumSageMakerBatchDescribeModelPackage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDescribeModelPackageOutput != nil {
        // handle response
    }
}
```

## CreateAction

Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

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
    res, err := s.SDK.CreateAction(ctx, operations.CreateActionRequest{
        CreateActionRequest: shared.CreateActionRequest{
            ActionName: "commodi",
            ActionType: "molestiae",
            Description: sdk.String("modi"),
            MetadataProperties: &shared.MetadataProperties{
                CommitID: sdk.String("qui"),
                GeneratedBy: sdk.String("impedit"),
                ProjectID: sdk.String("cum"),
                Repository: sdk.String("esse"),
            },
            Properties: map[string]string{
                "excepturi": "aspernatur",
            },
            Source: shared.ActionSource{
                SourceID: sdk.String("perferendis"),
                SourceType: sdk.String("ad"),
                SourceURI: "natus",
            },
            Status: shared.ActionStatusEnumUnknown.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolor",
                    Value: "natus",
                },
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateActionXAmzTargetEnumSageMakerCreateAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActionResponse != nil {
        // handle response
    }
}
```

## CreateAlgorithm

Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.

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
    res, err := s.SDK.CreateAlgorithm(ctx, operations.CreateAlgorithmRequest{
        CreateAlgorithmInput: shared.CreateAlgorithmInput{
            AlgorithmDescription: sdk.String("ipsa"),
            AlgorithmName: "reiciendis",
            CertifyForMarketplace: sdk.Bool(false),
            InferenceSpecification: &shared.InferenceSpecification{
                Containers: []shared.ModelPackageContainerDefinition{
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("mollitia"),
                        Environment: map[string]string{
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                            "nobis": "enim",
                        },
                        Framework: sdk.String("omnis"),
                        FrameworkVersion: sdk.String("nemo"),
                        Image: "minima",
                        ImageDigest: sdk.String("excepturi"),
                        ModelDataURL: sdk.String("accusantium"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "iure",
                        },
                        NearestModelName: sdk.String("culpa"),
                        ProductID: sdk.String("doloribus"),
                    },
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("sapiente"),
                        Environment: map[string]string{
                            "mollitia": "dolorem",
                        },
                        Framework: sdk.String("culpa"),
                        FrameworkVersion: sdk.String("consequuntur"),
                        Image: "repellat",
                        ImageDigest: sdk.String("mollitia"),
                        ModelDataURL: sdk.String("occaecati"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "numquam",
                        },
                        NearestModelName: sdk.String("commodi"),
                        ProductID: sdk.String("quam"),
                    },
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("molestiae"),
                        Environment: map[string]string{
                            "error": "quia",
                        },
                        Framework: sdk.String("quis"),
                        FrameworkVersion: sdk.String("vitae"),
                        Image: "laborum",
                        ImageDigest: sdk.String("animi"),
                        ModelDataURL: sdk.String("enim"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "odit",
                        },
                        NearestModelName: sdk.String("quo"),
                        ProductID: sdk.String("sequi"),
                    },
                },
                SupportedContentTypes: []string{
                    "ipsam",
                    "id",
                    "possimus",
                    "aut",
                },
                SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                    shared.ProductionVariantInstanceTypeEnumMlC7g4xlarge,
                },
                SupportedResponseMIMETypes: []string{
                    "laborum",
                    "quasi",
                    "reiciendis",
                    "voluptatibus",
                },
                SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                    shared.TransformInstanceTypeEnumMlP316xlarge,
                    shared.TransformInstanceTypeEnumMlC52xlarge,
                    shared.TransformInstanceTypeEnumMlG4dn16xlarge,
                    shared.TransformInstanceTypeEnumMlM42xlarge,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptate",
                    Value: "cum",
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: "doloremque",
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: "ut",
                },
            },
            TrainingSpecification: shared.TrainingSpecification{
                MetricDefinitions: []shared.MetricDefinition{
                    shared.MetricDefinition{
                        Name: "Stacy Gulgowski MD",
                        Regex: "enim",
                    },
                    shared.MetricDefinition{
                        Name: "Mrs. Leslie VonRueden",
                        Regex: "molestias",
                    },
                    shared.MetricDefinition{
                        Name: "Ervin Gleason",
                        Regex: "voluptates",
                    },
                    shared.MetricDefinition{
                        Name: "Dr. Casey Mayer",
                        Regex: "enim",
                    },
                },
                SupportedHyperParameters: []shared.HyperParameterSpecification{
                    shared.HyperParameterSpecification{
                        DefaultValue: sdk.String("est"),
                        Description: sdk.String("quibusdam"),
                        IsRequired: sdk.Bool(false),
                        IsTunable: sdk.Bool(false),
                        Name: "Joanna Rau",
                        Range: &shared.ParameterRange{
                            CategoricalParameterRangeSpecification: &shared.CategoricalParameterRangeSpecification{
                                Values: []string{
                                    "qui",
                                    "aliquid",
                                },
                            },
                            ContinuousParameterRangeSpecification: &shared.ContinuousParameterRangeSpecification{
                                MaxValue: "cupiditate",
                                MinValue: "quos",
                            },
                            IntegerParameterRangeSpecification: &shared.IntegerParameterRangeSpecification{
                                MaxValue: "perferendis",
                                MinValue: "magni",
                            },
                        },
                        Type: shared.ParameterTypeEnumFreeText,
                    },
                },
                SupportedTrainingInstanceTypes: []shared.TrainingInstanceTypeEnum{
                    shared.TrainingInstanceTypeEnumMlM4Xlarge,
                    shared.TrainingInstanceTypeEnumMlG4dn4xlarge,
                },
                SupportedTuningJobObjectiveMetrics: []shared.HyperParameterTuningJobObjective{
                    shared.HyperParameterTuningJobObjective{
                        MetricName: "excepturi",
                        Type: shared.HyperParameterTuningJobObjectiveTypeEnumMaximize,
                    },
                    shared.HyperParameterTuningJobObjective{
                        MetricName: "facilis",
                        Type: shared.HyperParameterTuningJobObjectiveTypeEnumMinimize,
                    },
                    shared.HyperParameterTuningJobObjective{
                        MetricName: "labore",
                        Type: shared.HyperParameterTuningJobObjectiveTypeEnumMinimize,
                    },
                },
                SupportsDistributedTraining: sdk.Bool(false),
                TrainingChannels: []shared.ChannelSpecification{
                    shared.ChannelSpecification{
                        Description: sdk.String("non"),
                        IsRequired: sdk.Bool(false),
                        Name: "Sergio Hyatt",
                        SupportedCompressionTypes: []shared.CompressionTypeEnum{
                            shared.CompressionTypeEnumGzip,
                            shared.CompressionTypeEnumNone,
                            shared.CompressionTypeEnumGzip,
                        },
                        SupportedContentTypes: []string{
                            "dolorum",
                            "in",
                            "in",
                            "illum",
                        },
                        SupportedInputModes: []shared.TrainingInputModeEnum{
                            shared.TrainingInputModeEnumFastFile,
                            shared.TrainingInputModeEnumPipe,
                            shared.TrainingInputModeEnumPipe,
                            shared.TrainingInputModeEnumFastFile,
                        },
                    },
                    shared.ChannelSpecification{
                        Description: sdk.String("facere"),
                        IsRequired: sdk.Bool(false),
                        Name: "Beth Padberg",
                        SupportedCompressionTypes: []shared.CompressionTypeEnum{
                            shared.CompressionTypeEnumNone,
                            shared.CompressionTypeEnumGzip,
                            shared.CompressionTypeEnumGzip,
                        },
                        SupportedContentTypes: []string{
                            "provident",
                            "nam",
                            "id",
                        },
                        SupportedInputModes: []shared.TrainingInputModeEnum{
                            shared.TrainingInputModeEnumFile,
                            shared.TrainingInputModeEnumFastFile,
                            shared.TrainingInputModeEnumPipe,
                        },
                    },
                },
                TrainingImage: "deserunt",
                TrainingImageDigest: sdk.String("nisi"),
            },
            ValidationSpecification: &shared.AlgorithmValidationSpecification{
                ValidationProfiles: []shared.AlgorithmValidationProfile{
                    shared.AlgorithmValidationProfile{
                        ProfileName: "natus",
                        TrainingJobDefinition: shared.TrainingJobDefinition{
                            HyperParameters: map[string]string{
                                "molestiae": "perferendis",
                                "nihil": "magnam",
                                "distinctio": "id",
                            },
                            InputDataConfig: []shared.Channel{
                                shared.Channel{
                                    ChannelName: "labore",
                                    CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                                    ContentType: sdk.String("natus"),
                                    DataSource: shared.DataSource{
                                        FileSystemDataSource: &shared.FileSystemDataSource{
                                            DirectoryPath: "nobis",
                                            FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                                            FileSystemID: "vero",
                                            FileSystemType: shared.FileSystemTypeEnumEfs,
                                        },
                                        S3DataSource: &shared.S3DataSource{
                                            AttributeNames: []string{
                                                "magnam",
                                            },
                                            InstanceGroupNames: []string{
                                                "excepturi",
                                            },
                                            S3DataDistributionType: shared.S3DataDistributionEnumFullyReplicated.ToPointer(),
                                            S3DataType: shared.S3DataTypeEnumS3Prefix,
                                            S3URI: "quos",
                                        },
                                    },
                                    InputMode: shared.TrainingInputModeEnumFile.ToPointer(),
                                    RecordWrapperType: shared.RecordWrapperEnumNone.ToPointer(),
                                    ShuffleConfig: &shared.ShuffleConfig{
                                        Seed: 653201,
                                    },
                                },
                                shared.Channel{
                                    ChannelName: "reiciendis",
                                    CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                                    ContentType: sdk.String("ad"),
                                    DataSource: shared.DataSource{
                                        FileSystemDataSource: &shared.FileSystemDataSource{
                                            DirectoryPath: "eum",
                                            FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                                            FileSystemID: "necessitatibus",
                                            FileSystemType: shared.FileSystemTypeEnumEfs,
                                        },
                                        S3DataSource: &shared.S3DataSource{
                                            AttributeNames: []string{
                                                "quasi",
                                                "iure",
                                            },
                                            InstanceGroupNames: []string{
                                                "debitis",
                                                "eius",
                                                "maxime",
                                                "deleniti",
                                            },
                                            S3DataDistributionType: shared.S3DataDistributionEnumShardedByS3Key.ToPointer(),
                                            S3DataType: shared.S3DataTypeEnumS3Prefix,
                                            S3URI: "architecto",
                                        },
                                    },
                                    InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                                    RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                                    ShuffleConfig: &shared.ShuffleConfig{
                                        Seed: 352312,
                                    },
                                },
                            },
                            OutputDataConfig: shared.OutputDataConfig{
                                KmsKeyID: sdk.String("expedita"),
                                S3OutputPath: "nihil",
                            },
                            ResourceConfig: shared.ResourceConfig{
                                InstanceCount: sdk.Int64(998848),
                                InstanceGroups: []shared.InstanceGroup{
                                    shared.InstanceGroup{
                                        InstanceCount: 149448,
                                        InstanceGroupName: "saepe",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlG58xlarge,
                                    },
                                    shared.InstanceGroup{
                                        InstanceCount: 37559,
                                        InstanceGroupName: "consequuntur",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlP32xlarge,
                                    },
                                    shared.InstanceGroup{
                                        InstanceCount: 615560,
                                        InstanceGroupName: "magni",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlG4dn2xlarge,
                                    },
                                    shared.InstanceGroup{
                                        InstanceCount: 779051,
                                        InstanceGroupName: "illum",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlG58xlarge,
                                    },
                                },
                                InstanceType: shared.TrainingInstanceTypeEnumMlG5Xlarge.ToPointer(),
                                KeepAlivePeriodInSeconds: sdk.Int64(411397),
                                VolumeKmsKeyID: sdk.String("excepturi"),
                                VolumeSizeInGB: 139972,
                            },
                            StoppingCondition: shared.StoppingCondition{
                                MaxRuntimeInSeconds: sdk.Int64(407183),
                                MaxWaitTimeInSeconds: sdk.Int64(33222),
                            },
                            TrainingInputMode: shared.TrainingInputModeEnumPipe,
                        },
                        TransformJobDefinition: &shared.TransformJobDefinition{
                            BatchStrategy: shared.BatchStrategyEnumSingleRecord.ToPointer(),
                            Environment: map[string]string{
                                "ipsam": "voluptate",
                                "autem": "nam",
                                "eaque": "pariatur",
                            },
                            MaxConcurrentTransforms: sdk.Int64(365496),
                            MaxPayloadInMB: sdk.Int64(975522),
                            TransformInput: shared.TransformInput{
                                CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                                ContentType: sdk.String("fugiat"),
                                DataSource: shared.TransformDataSource{
                                    S3DataSource: shared.TransformS3DataSource{
                                        S3DataType: shared.S3DataTypeEnumManifestFile,
                                        S3URI: "aut",
                                    },
                                },
                                SplitType: shared.SplitTypeEnumTfRecord.ToPointer(),
                            },
                            TransformOutput: shared.TransformOutput{
                                Accept: sdk.String("corporis"),
                                AssembleWith: shared.AssemblyTypeEnumLine.ToPointer(),
                                KmsKeyID: sdk.String("libero"),
                                S3OutputPath: "nobis",
                            },
                            TransformResources: shared.TransformResources{
                                InstanceCount: 171629,
                                InstanceType: shared.TransformInstanceTypeEnumMlP28xlarge,
                                VolumeKmsKeyID: sdk.String("totam"),
                            },
                        },
                    },
                    shared.AlgorithmValidationProfile{
                        ProfileName: "dignissimos",
                        TrainingJobDefinition: shared.TrainingJobDefinition{
                            HyperParameters: map[string]string{
                                "quis": "nesciunt",
                            },
                            InputDataConfig: []shared.Channel{
                                shared.Channel{
                                    ChannelName: "perferendis",
                                    CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                                    ContentType: sdk.String("minus"),
                                    DataSource: shared.DataSource{
                                        FileSystemDataSource: &shared.FileSystemDataSource{
                                            DirectoryPath: "quam",
                                            FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                                            FileSystemID: "vero",
                                            FileSystemType: shared.FileSystemTypeEnumEfs,
                                        },
                                        S3DataSource: &shared.S3DataSource{
                                            AttributeNames: []string{
                                                "recusandae",
                                                "omnis",
                                                "facilis",
                                                "perspiciatis",
                                            },
                                            InstanceGroupNames: []string{
                                                "porro",
                                            },
                                            S3DataDistributionType: shared.S3DataDistributionEnumFullyReplicated.ToPointer(),
                                            S3DataType: shared.S3DataTypeEnumS3Prefix,
                                            S3URI: "error",
                                        },
                                    },
                                    InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                                    RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                                    ShuffleConfig: &shared.ShuffleConfig{
                                        Seed: 699098,
                                    },
                                },
                            },
                            OutputDataConfig: shared.OutputDataConfig{
                                KmsKeyID: sdk.String("adipisci"),
                                S3OutputPath: "asperiores",
                            },
                            ResourceConfig: shared.ResourceConfig{
                                InstanceCount: sdk.Int64(934214),
                                InstanceGroups: []shared.InstanceGroup{
                                    shared.InstanceGroup{
                                        InstanceCount: 613966,
                                        InstanceGroupName: "dolorum",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlP316xlarge,
                                    },
                                    shared.InstanceGroup{
                                        InstanceCount: 864282,
                                        InstanceGroupName: "provident",
                                        InstanceType: shared.TrainingInstanceTypeEnumMlC5n4xlarge,
                                    },
                                },
                                InstanceType: shared.TrainingInstanceTypeEnumMlC5n2xlarge.ToPointer(),
                                KeepAlivePeriodInSeconds: sdk.Int64(964490),
                                VolumeKmsKeyID: sdk.String("quaerat"),
                                VolumeSizeInGB: 554242,
                            },
                            StoppingCondition: shared.StoppingCondition{
                                MaxRuntimeInSeconds: sdk.Int64(398221),
                                MaxWaitTimeInSeconds: sdk.Int64(212390),
                            },
                            TrainingInputMode: shared.TrainingInputModeEnumPipe,
                        },
                        TransformJobDefinition: &shared.TransformJobDefinition{
                            BatchStrategy: shared.BatchStrategyEnumMultiRecord.ToPointer(),
                            Environment: map[string]string{
                                "ipsum": "hic",
                            },
                            MaxConcurrentTransforms: sdk.Int64(569574),
                            MaxPayloadInMB: sdk.Int64(739551),
                            TransformInput: shared.TransformInput{
                                CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                                ContentType: sdk.String("dignissimos"),
                                DataSource: shared.TransformDataSource{
                                    S3DataSource: shared.TransformS3DataSource{
                                        S3DataType: shared.S3DataTypeEnumAugmentedManifestFile,
                                        S3URI: "amet",
                                    },
                                },
                                SplitType: shared.SplitTypeEnumRecordIo.ToPointer(),
                            },
                            TransformOutput: shared.TransformOutput{
                                Accept: sdk.String("numquam"),
                                AssembleWith: shared.AssemblyTypeEnumNone.ToPointer(),
                                KmsKeyID: sdk.String("ipsa"),
                                S3OutputPath: "ipsa",
                            },
                            TransformResources: shared.TransformResources{
                                InstanceCount: 434417,
                                InstanceType: shared.TransformInstanceTypeEnumMlC5Xlarge,
                                VolumeKmsKeyID: sdk.String("quaerat"),
                            },
                        },
                    },
                },
                ValidationRole: "accusamus",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.CreateAlgorithmXAmzTargetEnumSageMakerCreateAlgorithm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlgorithmOutput != nil {
        // handle response
    }
}
```

## CreateApp

Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.

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
    res, err := s.SDK.CreateApp(ctx, operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            AppName: "fugiat",
            AppType: shared.AppTypeEnumJupyterServer,
            DomainID: "soluta",
            ResourceSpec: &shared.ResourceSpec{
                InstanceType: shared.AppInstanceTypeEnumMlG4dn12xlarge.ToPointer(),
                LifecycleConfigArn: sdk.String("iusto"),
                SageMakerImageArn: sdk.String("voluptate"),
                SageMakerImageVersionArn: sdk.String("dolorum"),
            },
            SpaceName: sdk.String("deleniti"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "necessitatibus",
                    Value: "distinctio",
                },
                shared.Tag{
                    Key: "asperiores",
                    Value: "nihil",
                },
                shared.Tag{
                    Key: "ipsum",
                    Value: "voluptate",
                },
            },
            UserProfileName: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.CreateAppXAmzTargetEnumSageMakerCreateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```

## CreateAppImageConfig

Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the kernels in the image.

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
    res, err := s.SDK.CreateAppImageConfig(ctx, operations.CreateAppImageConfigRequest{
        CreateAppImageConfigRequest: shared.CreateAppImageConfigRequest{
            AppImageConfigName: "ad",
            KernelGatewayImageConfig: &shared.KernelGatewayImageConfig{
                FileSystemConfig: &shared.FileSystemConfig{
                    DefaultGid: sdk.Int64(904425),
                    DefaultUID: sdk.Int64(383464),
                    MountPath: sdk.String("deserunt"),
                },
                KernelSpecs: []shared.KernelSpec{
                    shared.KernelSpec{
                        DisplayName: sdk.String("minima"),
                        Name: "Dr. Jimmie Murphy",
                    },
                    shared.KernelSpec{
                        DisplayName: sdk.String("tempora"),
                        Name: "Bernadette Torp",
                    },
                    shared.KernelSpec{
                        DisplayName: sdk.String("a"),
                        Name: "Fannie Kub",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "amet",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "accusamus",
                    Value: "numquam",
                },
                shared.Tag{
                    Key: "enim",
                    Value: "dolorem",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "totam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.CreateAppImageConfigXAmzTargetEnumSageMakerCreateAppImageConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppImageConfigResponse != nil {
        // handle response
    }
}
```

## CreateArtifact

Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

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
    res, err := s.SDK.CreateArtifact(ctx, operations.CreateArtifactRequest{
        CreateArtifactRequest: shared.CreateArtifactRequest{
            ArtifactName: sdk.String("voluptas"),
            ArtifactType: "deserunt",
            MetadataProperties: &shared.MetadataProperties{
                CommitID: sdk.String("quam"),
                GeneratedBy: sdk.String("ipsum"),
                ProjectID: sdk.String("incidunt"),
                Repository: sdk.String("qui"),
            },
            Properties: map[string]string{
                "maxime": "pariatur",
                "soluta": "dicta",
                "laborum": "totam",
            },
            Source: shared.ArtifactSource{
                SourceTypes: []shared.ArtifactSourceType{
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumMd5Hash,
                        Value: "dolores",
                    },
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumS3Version,
                        Value: "facilis",
                    },
                },
                SourceURI: "aliquid",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestias",
                    Value: "temporibus",
                },
                shared.Tag{
                    Key: "qui",
                    Value: "neque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateArtifactXAmzTargetEnumSageMakerCreateArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateArtifactResponse != nil {
        // handle response
    }
}
```

## CreateAutoMLJob

<p>Creates an Autopilot job.</p> <p>Find the best-performing model after you run an Autopilot job by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a>.</p> <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model Development with Amazon SageMaker Autopilot</a>.</p>

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
    res, err := s.SDK.CreateAutoMLJob(ctx, operations.CreateAutoMLJobRequest{
        CreateAutoMLJobRequest: shared.CreateAutoMLJobRequest{
            AutoMLJobConfig: &shared.AutoMLJobConfig{
                CandidateGenerationConfig: &shared.AutoMLCandidateGenerationConfig{
                    AlgorithmsConfig: []shared.AutoMLAlgorithmConfig{
                        shared.AutoMLAlgorithmConfig{
                            AutoMLAlgorithms: []shared.AutoMLAlgorithmEnum{
                                shared.AutoMLAlgorithmEnumExtraTrees,
                                shared.AutoMLAlgorithmEnumExtraTrees,
                                shared.AutoMLAlgorithmEnumXgboost,
                                shared.AutoMLAlgorithmEnumFastai,
                            },
                        },
                    },
                    FeatureSpecificationS3URI: sdk.String("ipsum"),
                },
                CompletionCriteria: &shared.AutoMLJobCompletionCriteria{
                    MaxAutoMLJobRuntimeInSeconds: sdk.Int64(83422),
                    MaxCandidates: sdk.Int64(749255),
                    MaxRuntimePerTrainingJobInSeconds: sdk.Int64(552193),
                },
                DataSplitConfig: &shared.AutoMLDataSplitConfig{
                    ValidationFraction: sdk.Float32(7316.94),
                },
                Mode: shared.AutoMLModeEnumEnsembling.ToPointer(),
                SecurityConfig: &shared.AutoMLSecurityConfig{
                    EnableInterContainerTrafficEncryption: sdk.Bool(false),
                    VolumeKmsKeyID: sdk.String("aperiam"),
                    VpcConfig: &shared.VpcConfig{
                        SecurityGroupIds: []string{
                            "dolorem",
                            "dolore",
                            "labore",
                            "adipisci",
                        },
                        Subnets: []string{
                            "architecto",
                            "quae",
                            "aut",
                        },
                    },
                },
            },
            AutoMLJobName: "quas",
            AutoMLJobObjective: &shared.AutoMLJobObjective{
                MetricName: shared.AutoMLMetricEnumEnumRecallMacro,
            },
            GenerateCandidateDefinitionsOnly: sdk.Bool(false),
            InputDataConfig: []shared.AutoMLChannel{
                shared.AutoMLChannel{
                    ChannelType: shared.AutoMLChannelTypeEnumValidation.ToPointer(),
                    CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                    ContentType: sdk.String("porro"),
                    DataSource: shared.AutoMLDataSource{
                        S3DataSource: shared.AutoMls3DataSource{
                            S3DataType: shared.AutoMls3DataTypeEnumAugmentedManifestFile,
                            S3URI: "ut",
                        },
                    },
                    TargetAttributeName: "facilis",
                },
            },
            ModelDeployConfig: &shared.ModelDeployConfig{
                AutoGenerateEndpointName: sdk.Bool(false),
                EndpointName: sdk.String("cupiditate"),
            },
            OutputDataConfig: shared.AutoMLOutputDataConfig{
                KmsKeyID: sdk.String("qui"),
                S3OutputPath: "quae",
            },
            ProblemType: shared.ProblemTypeEnumMulticlassClassification.ToPointer(),
            RoleArn: "odio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "quisquam",
                },
                shared.Tag{
                    Key: "vero",
                    Value: "omnis",
                },
                shared.Tag{
                    Key: "quis",
                    Value: "ipsum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateAutoMLJobXAmzTargetEnumSageMakerCreateAutoMlJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoMLJobResponse != nil {
        // handle response
    }
}
```

## CreateAutoMLJobV2

<p>Creates an Amazon SageMaker AutoML job that uses non-tabular data such as images or text for Computer Vision or Natural Language Processing problems.</p> <p>Find the resulting model after you run an AutoML job V2 by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a>.</p> <p>To create an <code>AutoMLJob</code> using tabular data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>

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
    res, err := s.SDK.CreateAutoMLJobV2(ctx, operations.CreateAutoMLJobV2Request{
        CreateAutoMLJobV2Request: shared.CreateAutoMLJobV2Request{
            AutoMLJobInputDataConfig: []shared.AutoMLJobChannel{
                shared.AutoMLJobChannel{
                    ChannelType: shared.AutoMLChannelTypeEnumValidation.ToPointer(),
                    CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                    ContentType: sdk.String("similique"),
                    DataSource: &shared.AutoMLDataSource{
                        S3DataSource: shared.AutoMls3DataSource{
                            S3DataType: shared.AutoMls3DataTypeEnumAugmentedManifestFile,
                            S3URI: "vero",
                        },
                    },
                },
                shared.AutoMLJobChannel{
                    ChannelType: shared.AutoMLChannelTypeEnumTraining.ToPointer(),
                    CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                    ContentType: sdk.String("quibusdam"),
                    DataSource: &shared.AutoMLDataSource{
                        S3DataSource: shared.AutoMls3DataSource{
                            S3DataType: shared.AutoMls3DataTypeEnumAugmentedManifestFile,
                            S3URI: "sequi",
                        },
                    },
                },
                shared.AutoMLJobChannel{
                    ChannelType: shared.AutoMLChannelTypeEnumValidation.ToPointer(),
                    CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                    ContentType: sdk.String("aut"),
                    DataSource: &shared.AutoMLDataSource{
                        S3DataSource: shared.AutoMls3DataSource{
                            S3DataType: shared.AutoMls3DataTypeEnumAugmentedManifestFile,
                            S3URI: "exercitationem",
                        },
                    },
                },
            },
            AutoMLJobName: "nulla",
            AutoMLJobObjective: &shared.AutoMLJobObjective{
                MetricName: shared.AutoMLMetricEnumEnumMse,
            },
            AutoMLProblemTypeConfig: shared.AutoMLProblemTypeConfig{
                ImageClassificationJobConfig: &shared.ImageClassificationJobConfig{
                    CompletionCriteria: &shared.AutoMLJobCompletionCriteria{
                        MaxAutoMLJobRuntimeInSeconds: sdk.Int64(780427),
                        MaxCandidates: sdk.Int64(981830),
                        MaxRuntimePerTrainingJobInSeconds: sdk.Int64(985033),
                    },
                },
                TextClassificationJobConfig: &shared.TextClassificationJobConfig{
                    CompletionCriteria: &shared.AutoMLJobCompletionCriteria{
                        MaxAutoMLJobRuntimeInSeconds: sdk.Int64(478370),
                        MaxCandidates: sdk.Int64(753570),
                        MaxRuntimePerTrainingJobInSeconds: sdk.Int64(497391),
                    },
                    ContentColumn: sdk.String("alias"),
                    TargetLabelColumn: sdk.String("officia"),
                },
            },
            DataSplitConfig: &shared.AutoMLDataSplitConfig{
                ValidationFraction: sdk.Float32(2694.79),
            },
            ModelDeployConfig: &shared.ModelDeployConfig{
                AutoGenerateEndpointName: sdk.Bool(false),
                EndpointName: sdk.String("ipsam"),
            },
            OutputDataConfig: shared.AutoMLOutputDataConfig{
                KmsKeyID: sdk.String("ea"),
                S3OutputPath: "aspernatur",
            },
            RoleArn: "vel",
            SecurityConfig: &shared.AutoMLSecurityConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                VolumeKmsKeyID: sdk.String("possimus"),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "ratione",
                        "ex",
                    },
                    Subnets: []string{
                        "dicta",
                        "dolor",
                        "maiores",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ex",
                    Value: "nulla",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.CreateAutoMLJobV2XAmzTargetEnumSageMakerCreateAutoMlJobV2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoMLJobV2Response != nil {
        // handle response
    }
}
```

## CreateCodeRepository

<p>Creates a Git repository as a resource in your SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>

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
    res, err := s.SDK.CreateCodeRepository(ctx, operations.CreateCodeRepositoryRequest{
        CreateCodeRepositoryInput: shared.CreateCodeRepositoryInput{
            CodeRepositoryName: "impedit",
            GitConfig: shared.GitConfig{
                Branch: sdk.String("corporis"),
                RepositoryURL: "veniam",
                SecretArn: sdk.String("aliquid"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magnam",
                    Value: "ea",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.CreateCodeRepositoryXAmzTargetEnumSageMakerCreateCodeRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCodeRepositoryOutput != nil {
        // handle response
    }
}
```

## CreateCompilationJob

<p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job. </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopCompilationJob.html">StopCompilationJob</a>. To get information about a particular model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>

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
    res, err := s.SDK.CreateCompilationJob(ctx, operations.CreateCompilationJobRequest{
        CreateCompilationJobRequest: shared.CreateCompilationJobRequest{
            CompilationJobName: "libero",
            InputConfig: &shared.InputConfig{
                DataInputConfig: "aut",
                Framework: shared.FrameworkEnumTensorflow,
                FrameworkVersion: sdk.String("deleniti"),
                S3URI: "impedit",
            },
            ModelPackageVersionArn: sdk.String("aliquam"),
            OutputConfig: shared.OutputConfig{
                CompilerOptions: sdk.String("fugit"),
                KmsKeyID: sdk.String("accusamus"),
                S3OutputLocation: "inventore",
                TargetDevice: shared.TargetDeviceEnumMlInf1.ToPointer(),
                TargetPlatform: &shared.TargetPlatform{
                    Accelerator: shared.TargetPlatformAcceleratorEnumIntelGraphics.ToPointer(),
                    Arch: shared.TargetPlatformArchEnumArmEabi,
                    Os: shared.TargetPlatformOsEnumLinux,
                },
            },
            RoleArn: "placeat",
            StoppingCondition: shared.StoppingCondition{
                MaxRuntimeInSeconds: sdk.Int64(245367),
                MaxWaitTimeInSeconds: sdk.Int64(432148),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nobis",
                    Value: "quas",
                },
                shared.Tag{
                    Key: "assumenda",
                    Value: "nulla",
                },
            },
            VpcConfig: &shared.NeoVpcConfig{
                SecurityGroupIds: []string{
                    "libero",
                    "quasi",
                },
                Subnets: []string{
                    "numquam",
                    "explicabo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.CreateCompilationJobXAmzTargetEnumSageMakerCreateCompilationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCompilationJobResponse != nil {
        // handle response
    }
}
```

## CreateContext

Creates a <i>context</i>. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.

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
    res, err := s.SDK.CreateContext(ctx, operations.CreateContextRequest{
        CreateContextRequest: shared.CreateContextRequest{
            ContextName: "esse",
            ContextType: "rem",
            Description: sdk.String("fuga"),
            Properties: map[string]string{
                "quidem": "fugiat",
                "ut": "eum",
            },
            Source: shared.ContextSource{
                SourceID: sdk.String("suscipit"),
                SourceType: sdk.String("assumenda"),
                SourceURI: "eos",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: "veritatis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "id",
                },
                shared.Tag{
                    Key: "quidem",
                    Value: "neque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.CreateContextXAmzTargetEnumSageMakerCreateContext,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContextResponse != nil {
        // handle response
    }
}
```

## CreateDataQualityJobDefinition

Creates a definition for a job that monitors data quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.

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
    res, err := s.SDK.CreateDataQualityJobDefinition(ctx, operations.CreateDataQualityJobDefinitionRequest{
        CreateDataQualityJobDefinitionRequest: shared.CreateDataQualityJobDefinitionRequest{
            DataQualityAppSpecification: shared.DataQualityAppSpecification{
                ContainerArguments: []string{
                    "cupiditate",
                },
                ContainerEntrypoint: []string{
                    "tempora",
                },
                Environment: map[string]string{
                    "ipsam": "aspernatur",
                    "sequi": "quo",
                    "esse": "recusandae",
                    "aperiam": "distinctio",
                },
                ImageURI: "quod",
                PostAnalyticsProcessorSourceURI: sdk.String("dignissimos"),
                RecordPreprocessorSourceURI: sdk.String("inventore"),
            },
            DataQualityBaselineConfig: &shared.DataQualityBaselineConfig{
                BaseliningJobName: sdk.String("nihil"),
                ConstraintsResource: &shared.MonitoringConstraintsResource{
                    S3URI: sdk.String("totam"),
                },
                StatisticsResource: &shared.MonitoringStatisticsResource{
                    S3URI: sdk.String("accusamus"),
                },
            },
            DataQualityJobInput: shared.DataQualityJobInput{
                BatchTransformInput: &shared.BatchTransformInput{
                    DataCapturedDestinationS3URI: "aliquam",
                    DatasetFormat: shared.MonitoringDatasetFormat{
                        Csv: &shared.MonitoringCsvDatasetFormat{
                            Header: sdk.Bool(false),
                        },
                        JSON: &shared.MonitoringJSONDatasetFormat{
                            Line: sdk.Bool(false),
                        },
                        Parquet: map[string]interface{}{
                            "occaecati": "commodi",
                            "sapiente": "dolores",
                        },
                    },
                    EndTimeOffset: sdk.String("deserunt"),
                    FeaturesAttribute: sdk.String("molestiae"),
                    InferenceAttribute: sdk.String("accusantium"),
                    LocalPath: "porro",
                    ProbabilityAttribute: sdk.String("eum"),
                    ProbabilityThresholdAttribute: sdk.Float64(5564.29),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                    StartTimeOffset: sdk.String("deleniti"),
                },
                EndpointInput: &shared.EndpointInput{
                    EndTimeOffset: sdk.String("fugit"),
                    EndpointName: "fuga",
                    FeaturesAttribute: sdk.String("mollitia"),
                    InferenceAttribute: sdk.String("incidunt"),
                    LocalPath: "atque",
                    ProbabilityAttribute: sdk.String("explicabo"),
                    ProbabilityThresholdAttribute: sdk.Float64(3256.85),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                    StartTimeOffset: sdk.String("sapiente"),
                },
            },
            DataQualityJobOutputConfig: shared.MonitoringOutputConfig{
                KmsKeyID: sdk.String("consequuntur"),
                MonitoringOutputs: []shared.MonitoringOutput{
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "explicabo",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "occaecati",
                        },
                    },
                },
            },
            JobDefinitionName: "atque",
            JobResources: shared.MonitoringResources{
                ClusterConfig: shared.MonitoringClusterConfig{
                    InstanceCount: 92260,
                    InstanceType: shared.ProcessingInstanceTypeEnumMlC52xlarge,
                    VolumeKmsKeyID: sdk.String("eveniet"),
                    VolumeSizeInGB: 882042,
                },
            },
            NetworkConfig: &shared.MonitoringNetworkConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "esse",
                    },
                    Subnets: []string{
                        "nam",
                        "vero",
                        "aliquid",
                        "quasi",
                    },
                },
            },
            RoleArn: "saepe",
            StoppingCondition: &shared.MonitoringStoppingCondition{
                MaxRuntimeInSeconds: 426306,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "rerum",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "minima",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "eligendi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.CreateDataQualityJobDefinitionXAmzTargetEnumSageMakerCreateDataQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataQualityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateDeviceFleet

Creates a device fleet.

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
    res, err := s.SDK.CreateDeviceFleet(ctx, operations.CreateDeviceFleetRequest{
        CreateDeviceFleetRequest: shared.CreateDeviceFleetRequest{
            Description: sdk.String("minus"),
            DeviceFleetName: "quaerat",
            EnableIotRoleAlias: sdk.Bool(false),
            OutputConfig: shared.EdgeOutputConfig{
                KmsKeyID: sdk.String("sapiente"),
                PresetDeploymentConfig: sdk.String("consectetur"),
                PresetDeploymentType: shared.EdgePresetDeploymentTypeEnumGreengrassV2Component.ToPointer(),
                S3OutputLocation: "esse",
            },
            RoleArn: sdk.String("blanditiis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "a",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "quas",
                    Value: "esse",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "a",
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.CreateDeviceFleetXAmzTargetEnumSageMakerCreateDeviceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateDomain

<p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.</p> <p> <b>EFS storage</b> </p> <p>When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.</p> <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at Rest Using Encryption</a>.</p> <p> <b>VPC configuration</b> </p> <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code> parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you choose when you onboard to Studio. The following options are available:</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.</p> </li> <li> <p> <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.</p> <p>When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.</p> </li> </ul> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect SageMaker Studio Notebooks to Resources in a VPC</a>.</p>

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
    res, err := s.SDK.CreateDomain(ctx, operations.CreateDomainRequest{
        CreateDomainRequest: shared.CreateDomainRequest{
            AppNetworkAccessType: shared.AppNetworkAccessTypeEnumVpcOnly.ToPointer(),
            AppSecurityGroupManagement: shared.AppSecurityGroupManagementEnumService.ToPointer(),
            AuthMode: shared.AuthModeEnumSso,
            DefaultSpaceSettings: &shared.DefaultSpaceSettings{
                ExecutionRole: sdk.String("quasi"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "culpa",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "aliquid",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "tenetur",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlT3Medium.ToPointer(),
                        LifecycleConfigArn: sdk.String("earum"),
                        SageMakerImageArn: sdk.String("vel"),
                        SageMakerImageVersionArn: sdk.String("in"),
                    },
                    LifecycleConfigArns: []string{
                        "libero",
                        "illum",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "accusantium",
                            ImageName: "aliquam",
                            ImageVersionNumber: sdk.Int64(958983),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "dicta",
                            ImageName: "ullam",
                            ImageVersionNumber: sdk.Int64(443879),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "ullam",
                            ImageName: "nisi",
                            ImageVersionNumber: sdk.Int64(16328),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlC524xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("qui"),
                        SageMakerImageArn: sdk.String("quibusdam"),
                        SageMakerImageVersionArn: sdk.String("ex"),
                    },
                    LifecycleConfigArns: []string{
                        "itaque",
                        "dolorum",
                        "architecto",
                    },
                },
                SecurityGroups: []string{
                    "tenetur",
                    "quasi",
                    "at",
                },
            },
            DefaultUserSettings: shared.UserSettings{
                CanvasAppSettings: &shared.CanvasAppSettings{
                    ModelRegisterSettings: &shared.ModelRegisterSettings{
                        CrossAccountModelRegisterRoleArn: sdk.String("et"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                    TimeSeriesForecastingSettings: &shared.TimeSeriesForecastingSettings{
                        AmazonForecastRoleArn: sdk.String("ipsa"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                },
                ExecutionRole: sdk.String("veritatis"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "adipisci",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG4dnXlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("temporibus"),
                        SageMakerImageArn: sdk.String("accusantium"),
                        SageMakerImageVersionArn: sdk.String("rem"),
                    },
                    LifecycleConfigArns: []string{
                        "laudantium",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "mollitia",
                            ImageName: "ab",
                            ImageVersionNumber: sdk.Int64(544591),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "non",
                            ImageName: "voluptatem",
                            ImageVersionNumber: sdk.Int64(221161),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlP316xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("numquam"),
                        SageMakerImageArn: sdk.String("impedit"),
                        SageMakerImageVersionArn: sdk.String("explicabo"),
                    },
                    LifecycleConfigArns: []string{
                        "aut",
                        "dignissimos",
                    },
                },
                RSessionAppSettings: &shared.RSessionAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "maiores",
                            ImageName: "natus",
                            ImageVersionNumber: sdk.Int64(244651),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG548xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("voluptas"),
                        SageMakerImageArn: sdk.String("asperiores"),
                        SageMakerImageVersionArn: sdk.String("aperiam"),
                    },
                },
                RStudioServerProAppSettings: &shared.RStudioServerProAppSettings{
                    AccessStatus: shared.RStudioServerProAccessStatusEnumEnabled.ToPointer(),
                    UserGroup: shared.RStudioServerProUserGroupEnumRStudioAdmin.ToPointer(),
                },
                SecurityGroups: []string{
                    "repellendus",
                },
                SharingSettings: &shared.SharingSettings{
                    NotebookOutputOption: shared.NotebookOutputOptionEnumDisabled.ToPointer(),
                    S3KmsKeyID: sdk.String("maxime"),
                    S3OutputPath: sdk.String("dignissimos"),
                },
                TensorBoardAppSettings: &shared.TensorBoardAppSettings{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG4dn4xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("asperiores"),
                        SageMakerImageArn: sdk.String("nemo"),
                        SageMakerImageVersionArn: sdk.String("quae"),
                    },
                },
            },
            DomainName: "quaerat",
            DomainSettings: &shared.DomainSettings{
                ExecutionRoleIdentityConfig: shared.ExecutionRoleIdentityConfigEnumDisabled.ToPointer(),
                RStudioServerProDomainSettings: &shared.RStudioServerProDomainSettings{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlR512xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("labore"),
                        SageMakerImageArn: sdk.String("ab"),
                        SageMakerImageVersionArn: sdk.String("adipisci"),
                    },
                    DomainExecutionRoleArn: "fuga",
                    RStudioConnectURL: sdk.String("id"),
                    RStudioPackageManagerURL: sdk.String("suscipit"),
                },
                SecurityGroupIds: []string{
                    "culpa",
                },
            },
            HomeEfsFileSystemKmsKeyID: sdk.String("est"),
            KmsKeyID: sdk.String("recusandae"),
            SubnetIds: []string{
                "fugiat",
                "vel",
                "ducimus",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: "labore",
                },
                shared.Tag{
                    Key: "possimus",
                    Value: "facilis",
                },
                shared.Tag{
                    Key: "cum",
                    Value: "commodi",
                },
            },
            VpcID: "in",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.CreateDomainXAmzTargetEnumSageMakerCreateDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResponse != nil {
        // handle response
    }
}
```

## CreateEdgeDeploymentPlan

Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.

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
    res, err := s.SDK.CreateEdgeDeploymentPlan(ctx, operations.CreateEdgeDeploymentPlanRequest{
        CreateEdgeDeploymentPlanRequest: shared.CreateEdgeDeploymentPlanRequest{
            DeviceFleetName: "cum",
            EdgeDeploymentPlanName: "consectetur",
            ModelConfigs: []shared.EdgeDeploymentModelConfig{
                shared.EdgeDeploymentModelConfig{
                    EdgePackagingJobName: "exercitationem",
                    ModelHandle: "earum",
                },
                shared.EdgeDeploymentModelConfig{
                    EdgePackagingJobName: "facere",
                    ModelHandle: "numquam",
                },
            },
            Stages: []shared.DeploymentStage{
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumRollbackOnFailure,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("reiciendis"),
                        DeviceNames: []string{
                            "saepe",
                            "necessitatibus",
                            "dolore",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumPercentage,
                        Percentage: sdk.Int64(992012),
                    },
                    StageName: "adipisci",
                },
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumRollbackOnFailure,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("amet"),
                        DeviceNames: []string{
                            "dignissimos",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumNamecontains,
                        Percentage: sdk.Int64(891523),
                    },
                    StageName: "consectetur",
                },
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumRollbackOnFailure,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("harum"),
                        DeviceNames: []string{
                            "ipsa",
                            "voluptates",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumNamecontains,
                        Percentage: sdk.Int64(113816),
                    },
                    StageName: "accusamus",
                },
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumDoNothing,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("tempora"),
                        DeviceNames: []string{
                            "voluptas",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumSelection,
                        Percentage: sdk.Int64(374296),
                    },
                    StageName: "minima",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "adipisci",
                },
                shared.Tag{
                    Key: "minus",
                    Value: "dolores",
                },
                shared.Tag{
                    Key: "blanditiis",
                    Value: "in",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateEdgeDeploymentPlanXAmzTargetEnumSageMakerCreateEdgeDeploymentPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEdgeDeploymentPlanResponse != nil {
        // handle response
    }
}
```

## CreateEdgeDeploymentStage

Creates a new stage in an existing edge deployment plan.

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
    res, err := s.SDK.CreateEdgeDeploymentStage(ctx, operations.CreateEdgeDeploymentStageRequest{
        CreateEdgeDeploymentStageRequest: shared.CreateEdgeDeploymentStageRequest{
            EdgeDeploymentPlanName: "blanditiis",
            Stages: []shared.DeploymentStage{
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumDoNothing,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("nesciunt"),
                        DeviceNames: []string{
                            "corrupti",
                            "pariatur",
                            "totam",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumNamecontains,
                        Percentage: sdk.Int64(348783),
                    },
                    StageName: "nobis",
                },
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumRollbackOnFailure,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("rerum"),
                        DeviceNames: []string{
                            "reiciendis",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumPercentage,
                        Percentage: sdk.Int64(994401),
                    },
                    StageName: "facilis",
                },
                shared.DeploymentStage{
                    DeploymentConfig: &shared.EdgeDeploymentConfig{
                        FailureHandlingPolicy: shared.FailureHandlingPolicyEnumRollbackOnFailure,
                    },
                    DeviceSelectionConfig: shared.DeviceSelectionConfig{
                        DeviceNameContains: sdk.String("expedita"),
                        DeviceNames: []string{
                            "iste",
                        },
                        DeviceSubsetType: shared.DeviceSubsetTypeEnumPercentage,
                        Percentage: sdk.Int64(671907),
                    },
                    StageName: "sed",
                },
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateEdgeDeploymentStageXAmzTargetEnumSageMakerCreateEdgeDeploymentStage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateEdgePackagingJob

Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.

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
    res, err := s.SDK.CreateEdgePackagingJob(ctx, operations.CreateEdgePackagingJobRequest{
        CreateEdgePackagingJobRequest: shared.CreateEdgePackagingJobRequest{
            CompilationJobName: "suscipit",
            EdgePackagingJobName: "sapiente",
            ModelName: "debitis",
            ModelVersion: "illo",
            OutputConfig: shared.EdgeOutputConfig{
                KmsKeyID: sdk.String("reiciendis"),
                PresetDeploymentConfig: sdk.String("perferendis"),
                PresetDeploymentType: shared.EdgePresetDeploymentTypeEnumGreengrassV2Component.ToPointer(),
                S3OutputLocation: "corrupti",
            },
            ResourceKey: sdk.String("maiores"),
            RoleArn: "incidunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: "eius",
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.CreateEdgePackagingJobXAmzTargetEnumSageMakerCreateEdgePackagingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateEndpoint

<p>Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. </p> <p>When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p> <note> <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API operations, add the following policies to the role. </p> <ul> <li> <p>Option 1: For a full SageMaker access, search and attach the <code>AmazonSageMakerFullAccess</code> policy.</p> </li> <li> <p>Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: </p> <p> <code>"Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]</code> </p> <p> <code>"Resource": [</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code> </p> <p> <code>]</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">SageMaker API Permissions: Actions, Permissions, and Resources Reference</a>.</p> </li> </ul> </note>

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
    res, err := s.SDK.CreateEndpoint(ctx, operations.CreateEndpointRequest{
        CreateEndpointInput: shared.CreateEndpointInput{
            DeploymentConfig: &shared.DeploymentConfig{
                AutoRollbackConfiguration: &shared.AutoRollbackConfig{
                    Alarms: []shared.Alarm{
                        shared.Alarm{
                            AlarmName: sdk.String("voluptate"),
                        },
                        shared.Alarm{
                            AlarmName: sdk.String("reiciendis"),
                        },
                    },
                },
                BlueGreenUpdatePolicy: shared.BlueGreenUpdatePolicy{
                    MaximumExecutionTimeoutInSeconds: sdk.Int64(401713),
                    TerminationWaitInSeconds: sdk.Int64(25497),
                    TrafficRoutingConfiguration: shared.TrafficRoutingConfig{
                        CanarySize: &shared.CapacitySize{
                            Type: shared.CapacitySizeTypeEnumInstanceCount,
                            Value: 888044,
                        },
                        LinearStepSize: &shared.CapacitySize{
                            Type: shared.CapacitySizeTypeEnumCapacityPercent,
                            Value: 708609,
                        },
                        Type: shared.TrafficRoutingConfigTypeEnumAllAtOnce,
                        WaitIntervalInSeconds: 277773,
                    },
                },
            },
            EndpointConfigName: "ipsam",
            EndpointName: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sit",
                    Value: "nobis",
                },
                shared.Tag{
                    Key: "error",
                    Value: "veniam",
                },
                shared.Tag{
                    Key: "minima",
                    Value: "recusandae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.CreateEndpointXAmzTargetEnumSageMakerCreateEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointOutput != nil {
        // handle response
    }
}
```

## CreateEndpointConfig

<p>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want SageMaker to provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <note> <p>When you call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpointConfig.html">DescribeEndpointConfig</a> before calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>

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
    res, err := s.SDK.CreateEndpointConfig(ctx, operations.CreateEndpointConfigRequest{
        CreateEndpointConfigInput: shared.CreateEndpointConfigInput{
            AsyncInferenceConfig: &shared.AsyncInferenceConfig{
                ClientConfig: &shared.AsyncInferenceClientConfig{
                    MaxConcurrentInvocationsPerInstance: sdk.Int64(446135),
                },
                OutputConfig: shared.AsyncInferenceOutputConfig{
                    KmsKeyID: sdk.String("officiis"),
                    NotificationConfig: &shared.AsyncInferenceNotificationConfig{
                        ErrorTopic: sdk.String("beatae"),
                        IncludeInferenceResponseIn: []shared.AsyncNotificationTopicTypesEnum{
                            shared.AsyncNotificationTopicTypesEnumSuccessNotificationTopic,
                            shared.AsyncNotificationTopicTypesEnumErrorNotificationTopic,
                            shared.AsyncNotificationTopicTypesEnumErrorNotificationTopic,
                        },
                        SuccessTopic: sdk.String("laboriosam"),
                    },
                    S3FailurePath: sdk.String("dolorum"),
                    S3OutputPath: sdk.String("voluptatum"),
                },
            },
            DataCaptureConfig: &shared.DataCaptureConfig{
                CaptureContentTypeHeader: &shared.CaptureContentTypeHeader{
                    CsvContentTypes: []string{
                        "hic",
                        "expedita",
                        "debitis",
                    },
                    JSONContentTypes: []string{
                        "dolorum",
                    },
                },
                CaptureOptions: []shared.CaptureOption{
                    shared.CaptureOption{
                        CaptureMode: shared.CaptureModeEnumOutput,
                    },
                    shared.CaptureOption{
                        CaptureMode: shared.CaptureModeEnumOutput,
                    },
                },
                DestinationS3URI: "corrupti",
                EnableCapture: sdk.Bool(false),
                InitialSamplingPercentage: 879235,
                KmsKeyID: sdk.String("tempora"),
            },
            EndpointConfigName: "atque",
            ExplainerConfig: &shared.ExplainerConfig{
                ClarifyExplainerConfig: &shared.ClarifyExplainerConfig{
                    EnableExplanations: sdk.String("fugit"),
                    InferenceConfig: &shared.ClarifyInferenceConfig{
                        ContentTemplate: sdk.String("ut"),
                        FeatureHeaders: []string{
                            "voluptatem",
                            "culpa",
                            "expedita",
                            "magnam",
                        },
                        FeatureTypes: []shared.ClarifyFeatureTypeEnum{
                            shared.ClarifyFeatureTypeEnumCategorical,
                        },
                        FeaturesAttribute: sdk.String("ipsam"),
                        LabelAttribute: sdk.String("sit"),
                        LabelHeaders: []string{
                            "quas",
                            "repudiandae",
                            "corporis",
                        },
                        LabelIndex: sdk.Int64(89494),
                        MaxPayloadInMB: sdk.Int64(502710),
                        MaxRecordCount: sdk.Int64(405942),
                        ProbabilityAttribute: sdk.String("sed"),
                        ProbabilityIndex: sdk.Int64(24313),
                    },
                    ShapConfig: shared.ClarifyShapConfig{
                        NumberOfSamples: sdk.Int64(425508),
                        Seed: sdk.Int64(342611),
                        ShapBaselineConfig: shared.ClarifyShapBaselineConfig{
                            MimeType: sdk.String("saepe"),
                            ShapBaseline: sdk.String("error"),
                            ShapBaselineURI: sdk.String("consequatur"),
                        },
                        TextConfig: &shared.ClarifyTextConfig{
                            Granularity: shared.ClarifyTextGranularityEnumToken,
                            Language: shared.ClarifyTextLanguageEnumLij,
                        },
                        UseLogit: sdk.Bool(false),
                    },
                },
            },
            KmsKeyID: sdk.String("dolorem"),
            ProductionVariants: []shared.ProductionVariant{
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia1Medium.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(99416),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "occaecati",
                        KmsKeyID: sdk.String("labore"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(695270),
                    InitialVariantWeight: sdk.Float32(5390.74),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlM6g4xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(724148),
                    ModelName: "tenetur",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 388867,
                        MemorySizeInMB: 2703,
                    },
                    VariantName: "amet",
                    VolumeSizeInGB: sdk.Int64(647197),
                },
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia1Xlarge.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(600392),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "reiciendis",
                        KmsKeyID: sdk.String("provident"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(833819),
                    InitialVariantWeight: sdk.Float32(9627.71),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlR6g2xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(16871),
                    ModelName: "est",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 696483,
                        MemorySizeInMB: 440666,
                    },
                    VariantName: "facere",
                    VolumeSizeInGB: sdk.Int64(685092),
                },
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia2Medium.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(648598),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "veniam",
                        KmsKeyID: sdk.String("voluptatem"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(790840),
                    InitialVariantWeight: sdk.Float32(9195.32),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlM512xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(542457),
                    ModelName: "reprehenderit",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 991142,
                        MemorySizeInMB: 519952,
                    },
                    VariantName: "suscipit",
                    VolumeSizeInGB: sdk.Int64(693957),
                },
            },
            ShadowProductionVariants: []shared.ProductionVariant{
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia1Medium.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(461007),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "amet",
                        KmsKeyID: sdk.String("assumenda"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(410301),
                    InitialVariantWeight: sdk.Float32(5391.18),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlC7g4xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(887265),
                    ModelName: "officiis",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 880107,
                        MemorySizeInMB: 618826,
                    },
                    VariantName: "minima",
                    VolumeSizeInGB: sdk.Int64(133461),
                },
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia1Xlarge.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(980581),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "corrupti",
                        KmsKeyID: sdk.String("at"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(621693),
                    InitialVariantWeight: sdk.Float32(5027.21),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlR54xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(922348),
                    ModelName: "atque",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 541381,
                        MemorySizeInMB: 120919,
                    },
                    VariantName: "recusandae",
                    VolumeSizeInGB: sdk.Int64(680697),
                },
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia2Large.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(287119),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "reiciendis",
                        KmsKeyID: sdk.String("doloremque"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(919783),
                    InitialVariantWeight: sdk.Float32(1160.98),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlM42xlarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(106429),
                    ModelName: "dolores",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 316488,
                        MemorySizeInMB: 389135,
                    },
                    VariantName: "velit",
                    VolumeSizeInGB: sdk.Int64(952143),
                },
                shared.ProductionVariant{
                    AcceleratorType: shared.ProductionVariantAcceleratorTypeEnumMlEia2Medium.ToPointer(),
                    ContainerStartupHealthCheckTimeoutInSeconds: sdk.Int64(300029),
                    CoreDumpConfig: &shared.ProductionVariantCoreDumpConfig{
                        DestinationS3URI: "saepe",
                        KmsKeyID: sdk.String("consequuntur"),
                    },
                    EnableSSMAccess: sdk.Bool(false),
                    InitialInstanceCount: sdk.Int64(580107),
                    InitialVariantWeight: sdk.Float32(8863.05),
                    InstanceType: shared.ProductionVariantInstanceTypeEnumMlC7gLarge.ToPointer(),
                    ModelDataDownloadTimeoutInSeconds: sdk.Int64(446394),
                    ModelName: "adipisci",
                    ServerlessConfig: &shared.ProductionVariantServerlessConfig{
                        MaxConcurrency: 907876,
                        MemorySizeInMB: 580887,
                    },
                    VariantName: "consequuntur",
                    VolumeSizeInGB: sdk.Int64(145870),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quis",
                    Value: "reprehenderit",
                },
                shared.Tag{
                    Key: "error",
                    Value: "illo",
                },
                shared.Tag{
                    Key: "corporis",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreateEndpointConfigXAmzTargetEnumSageMakerCreateEndpointConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointConfigOutput != nil {
        // handle response
    }
}
```

## CreateExperiment

<p>Creates a SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <note> <p>In the Studio UI, trials are referred to as <i>run groups</i> and trial components are referred to as <i>runs</i>.</p> </note> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListExperiments.html">ListExperiments</a> API. To view an experiment's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To create a trial call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrial.html">CreateTrial</a> API.</p>

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
    res, err := s.SDK.CreateExperiment(ctx, operations.CreateExperimentRequest{
        CreateExperimentRequest: shared.CreateExperimentRequest{
            Description: sdk.String("quae"),
            DisplayName: sdk.String("molestiae"),
            ExperimentName: "eveniet",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "cum",
                    Value: "iure",
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.CreateExperimentXAmzTargetEnumSageMakerCreateExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentResponse != nil {
        // handle response
    }
}
```

## CreateFeatureGroup

<p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of <code>Features</code> defined in the <code>FeatureStore</code> to describe a <code>Record</code>. </p> <p>The <code>FeatureGroup</code> defines the schema and features contained in the FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code> and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p> <important> <p>You must include at least one of <code>OnlineStoreConfig</code> and <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p> </important>

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
    res, err := s.SDK.CreateFeatureGroup(ctx, operations.CreateFeatureGroupRequest{
        CreateFeatureGroupRequest: shared.CreateFeatureGroupRequest{
            Description: sdk.String("ad"),
            EventTimeFeatureName: "repellat",
            FeatureDefinitions: []shared.FeatureDefinition{
                shared.FeatureDefinition{
                    FeatureName: sdk.String("corporis"),
                    FeatureType: shared.FeatureTypeEnumFractional.ToPointer(),
                },
            },
            FeatureGroupName: "nihil",
            OfflineStoreConfig: &shared.OfflineStoreConfig{
                DataCatalogConfig: &shared.DataCatalogConfig{
                    Catalog: "mollitia",
                    Database: "voluptas",
                    TableName: "alias",
                },
                DisableGlueTableCreation: sdk.Bool(false),
                S3StorageConfig: shared.S3StorageConfig{
                    KmsKeyID: sdk.String("maiores"),
                    ResolvedOutputS3URI: sdk.String("reiciendis"),
                    S3URI: "dolores",
                },
                TableFormat: shared.TableFormatEnumIceberg.ToPointer(),
            },
            OnlineStoreConfig: &shared.OnlineStoreConfig{
                EnableOnlineStore: sdk.Bool(false),
                SecurityConfig: &shared.OnlineStoreSecurityConfig{
                    KmsKeyID: sdk.String("minima"),
                },
            },
            RecordIdentifierFeatureName: "dolore",
            RoleArn: sdk.String("dolorum"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quae",
                    Value: "recusandae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.CreateFeatureGroupXAmzTargetEnumSageMakerCreateFeatureGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFeatureGroupResponse != nil {
        // handle response
    }
}
```

## CreateFlowDefinition

Creates a flow definition.

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
    res, err := s.SDK.CreateFlowDefinition(ctx, operations.CreateFlowDefinitionRequest{
        CreateFlowDefinitionRequest: shared.CreateFlowDefinitionRequest{
            FlowDefinitionName: "debitis",
            HumanLoopActivationConfig: &shared.HumanLoopActivationConfig{
                HumanLoopActivationConditionsConfig: shared.HumanLoopActivationConditionsConfig{
                    HumanLoopActivationConditions: "laudantium",
                },
            },
            HumanLoopConfig: shared.HumanLoopConfig{
                HumanTaskUIArn: "eum",
                PublicWorkforceTaskPrice: &shared.PublicWorkforceTaskPrice{
                    AmountInUsd: &shared.Usd{
                        Cents: sdk.Int64(367927),
                        Dollars: sdk.Int64(928219),
                        TenthFractionsOfACent: sdk.Int64(456520),
                    },
                },
                TaskAvailabilityLifetimeInSeconds: sdk.Int64(592081),
                TaskCount: 337477,
                TaskDescription: "eum",
                TaskKeywords: []string{
                    "provident",
                    "aspernatur",
                    "ullam",
                    "quasi",
                },
                TaskTimeLimitInSeconds: sdk.Int64(657020),
                TaskTitle: "nostrum",
                WorkteamArn: "mollitia",
            },
            HumanLoopRequestSource: &shared.HumanLoopRequestSource{
                AwsManagedHumanLoopRequestSource: shared.AwsManagedHumanLoopRequestSourceEnumAwsTextractAnalyzeDocumentFormsV1,
            },
            OutputConfig: shared.FlowDefinitionOutputConfig{
                KmsKeyID: sdk.String("possimus"),
                S3OutputPath: "animi",
            },
            RoleArn: "ex",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusantium",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "doloribus",
                    Value: "ullam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.CreateFlowDefinitionXAmzTargetEnumSageMakerCreateFlowDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFlowDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateHub

<p>Create a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.CreateHub(ctx, operations.CreateHubRequest{
        CreateHubRequest: shared.CreateHubRequest{
            HubDescription: "voluptatibus",
            HubDisplayName: sdk.String("molestias"),
            HubName: "officiis",
            HubSearchKeywords: []string{
                "cumque",
                "vitae",
                "rerum",
                "tempora",
            },
            S3StorageConfig: &shared.HubS3StorageConfig{
                S3OutputPath: sdk.String("quis"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "fugit",
                    Value: "cumque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.CreateHubXAmzTargetEnumSageMakerCreateHub,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHubResponse != nil {
        // handle response
    }
}
```

## CreateHumanTaskUI

Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.

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
    res, err := s.SDK.CreateHumanTaskUI(ctx, operations.CreateHumanTaskUIRequest{
        CreateHumanTaskUIRequest: shared.CreateHumanTaskUIRequest{
            HumanTaskUIName: "at",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eos",
                    Value: "sapiente",
                },
                shared.Tag{
                    Key: "eum",
                    Value: "dicta",
                },
                shared.Tag{
                    Key: "minima",
                    Value: "beatae",
                },
                shared.Tag{
                    Key: "cupiditate",
                    Value: "provident",
                },
            },
            UITemplate: shared.UITemplate{
                Content: "earum",
            },
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.CreateHumanTaskUIXAmzTargetEnumSageMakerCreateHumanTaskUI,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHumanTaskUIResponse != nil {
        // handle response
    }
}
```

## CreateHyperParameterTuningJob

<p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.</p> <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View Experiments, Trials, and Trial Components</a>.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important>

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
    res, err := s.SDK.CreateHyperParameterTuningJob(ctx, operations.CreateHyperParameterTuningJobRequest{
        CreateHyperParameterTuningJobRequest: shared.CreateHyperParameterTuningJobRequest{
            HyperParameterTuningJobConfig: shared.HyperParameterTuningJobConfig{
                HyperParameterTuningJobObjective: &shared.HyperParameterTuningJobObjective{
                    MetricName: "debitis",
                    Type: shared.HyperParameterTuningJobObjectiveTypeEnumMaximize,
                },
                ParameterRanges: &shared.ParameterRanges{
                    CategoricalParameterRanges: []shared.CategoricalParameterRange{
                        shared.CategoricalParameterRange{
                            Name: "Connie Corkery",
                            Values: []string{
                                "animi",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Mr. Jody Altenwerth",
                            Values: []string{
                                "occaecati",
                                "suscipit",
                                "adipisci",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Anne Wyman",
                            Values: []string{
                                "tempora",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Tanya Buckridge",
                            Values: []string{
                                "maiores",
                                "reiciendis",
                                "vel",
                            },
                        },
                    },
                    ContinuousParameterRanges: []shared.ContinuousParameterRange{
                        shared.ContinuousParameterRange{
                            MaxValue: "fugiat",
                            MinValue: "doloremque",
                            Name: "Glenda Goldner",
                            ScalingType: shared.HyperParameterScalingTypeEnumAuto.ToPointer(),
                        },
                    },
                    IntegerParameterRanges: []shared.IntegerParameterRange{
                        shared.IntegerParameterRange{
                            MaxValue: "ipsa",
                            MinValue: "laborum",
                            Name: "Audrey Stiedemann",
                            ScalingType: shared.HyperParameterScalingTypeEnumLogarithmic.ToPointer(),
                        },
                        shared.IntegerParameterRange{
                            MaxValue: "suscipit",
                            MinValue: "aliquid",
                            Name: "Natalie Hirthe",
                            ScalingType: shared.HyperParameterScalingTypeEnumAuto.ToPointer(),
                        },
                    },
                },
                RandomSeed: sdk.Int64(625358),
                ResourceLimits: shared.ResourceLimits{
                    MaxNumberOfTrainingJobs: sdk.Int64(822407),
                    MaxParallelTrainingJobs: 913992,
                    MaxRuntimeInSeconds: sdk.Int64(653421),
                },
                Strategy: shared.HyperParameterTuningJobStrategyTypeEnumHyperband,
                StrategyConfig: &shared.HyperParameterTuningJobStrategyConfig{
                    HyperbandStrategyConfig: &shared.HyperbandStrategyConfig{
                        MaxResource: sdk.Int64(726343),
                        MinResource: sdk.Int64(324083),
                    },
                },
                TrainingJobEarlyStoppingType: shared.TrainingJobEarlyStoppingTypeEnumAuto.ToPointer(),
                TuningJobCompletionCriteria: &shared.TuningJobCompletionCriteria{
                    BestObjectiveNotImproving: &shared.BestObjectiveNotImproving{
                        MaxNumberOfTrainingJobsNotImproving: sdk.Int64(316220),
                    },
                    ConvergenceDetected: &shared.ConvergenceDetected{
                        CompleteOnConvergence: shared.CompleteOnConvergenceEnumDisabled.ToPointer(),
                    },
                    TargetObjectiveMetricValue: sdk.Float32(8333.16),
                },
            },
            HyperParameterTuningJobName: "ex",
            Tags: []shared.Tag{
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
                shared.Tag{
                    Key: "cum",
                    Value: "aliquid",
                },
            },
            TrainingJobDefinition: &shared.HyperParameterTrainingJobDefinition{
                AlgorithmSpecification: shared.HyperParameterAlgorithmSpecification{
                    AlgorithmName: sdk.String("beatae"),
                    MetricDefinitions: []shared.MetricDefinition{
                        shared.MetricDefinition{
                            Name: "Peter Prosacco",
                            Regex: "voluptatem",
                        },
                        shared.MetricDefinition{
                            Name: "Stewart Brakus",
                            Regex: "debitis",
                        },
                        shared.MetricDefinition{
                            Name: "Mary Leuschke",
                            Regex: "sapiente",
                        },
                    },
                    TrainingImage: sdk.String("rem"),
                    TrainingInputMode: shared.TrainingInputModeEnumFastFile,
                },
                CheckpointConfig: &shared.CheckpointConfig{
                    LocalPath: sdk.String("nemo"),
                    S3URI: "asperiores",
                },
                DefinitionName: sdk.String("ratione"),
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableManagedSpotTraining: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                Environment: map[string]string{
                    "perferendis": "illum",
                    "totam": "impedit",
                },
                HyperParameterRanges: &shared.ParameterRanges{
                    CategoricalParameterRanges: []shared.CategoricalParameterRange{
                        shared.CategoricalParameterRange{
                            Name: "Clyde Nader",
                            Values: []string{
                                "deleniti",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Mr. Hazel Ernser I",
                            Values: []string{
                                "ab",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Eric Fadel",
                            Values: []string{
                                "ipsa",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Conrad Rutherford",
                            Values: []string{
                                "sed",
                                "veniam",
                                "nesciunt",
                                "expedita",
                            },
                        },
                    },
                    ContinuousParameterRanges: []shared.ContinuousParameterRange{
                        shared.ContinuousParameterRange{
                            MaxValue: "vel",
                            MinValue: "voluptatum",
                            Name: "Annette Bernier",
                            ScalingType: shared.HyperParameterScalingTypeEnumReverseLogarithmic.ToPointer(),
                        },
                        shared.ContinuousParameterRange{
                            MaxValue: "laboriosam",
                            MinValue: "recusandae",
                            Name: "Helen Heller III",
                            ScalingType: shared.HyperParameterScalingTypeEnumReverseLogarithmic.ToPointer(),
                        },
                    },
                    IntegerParameterRanges: []shared.IntegerParameterRange{
                        shared.IntegerParameterRange{
                            MaxValue: "est",
                            MinValue: "harum",
                            Name: "Ora VonRueden",
                            ScalingType: shared.HyperParameterScalingTypeEnumLinear.ToPointer(),
                        },
                        shared.IntegerParameterRange{
                            MaxValue: "voluptate",
                            MinValue: "blanditiis",
                            Name: "Hector Funk",
                            ScalingType: shared.HyperParameterScalingTypeEnumLinear.ToPointer(),
                        },
                        shared.IntegerParameterRange{
                            MaxValue: "aspernatur",
                            MinValue: "ducimus",
                            Name: "Lee Larkin IV",
                            ScalingType: shared.HyperParameterScalingTypeEnumReverseLogarithmic.ToPointer(),
                        },
                        shared.IntegerParameterRange{
                            MaxValue: "dicta",
                            MinValue: "nisi",
                            Name: "Edith Beahan",
                            ScalingType: shared.HyperParameterScalingTypeEnumLogarithmic.ToPointer(),
                        },
                    },
                },
                HyperParameterTuningResourceConfig: &shared.HyperParameterTuningResourceConfig{
                    AllocationStrategy: shared.HyperParameterTuningAllocationStrategyEnumPrioritized.ToPointer(),
                    InstanceConfigs: []shared.HyperParameterTuningInstanceConfig{
                        shared.HyperParameterTuningInstanceConfig{
                            InstanceCount: 608989,
                            InstanceType: shared.TrainingInstanceTypeEnumMlG4dn8xlarge,
                            VolumeSizeInGB: 579011,
                        },
                    },
                    InstanceCount: sdk.Int64(612867),
                    InstanceType: shared.TrainingInstanceTypeEnumMlG4dn8xlarge.ToPointer(),
                    VolumeKmsKeyID: sdk.String("inventore"),
                    VolumeSizeInGB: sdk.Int64(686362),
                },
                InputDataConfig: []shared.Channel{
                    shared.Channel{
                        ChannelName: "voluptatibus",
                        CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                        ContentType: sdk.String("omnis"),
                        DataSource: shared.DataSource{
                            FileSystemDataSource: &shared.FileSystemDataSource{
                                DirectoryPath: "delectus",
                                FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                                FileSystemID: "praesentium",
                                FileSystemType: shared.FileSystemTypeEnumFSxLustre,
                            },
                            S3DataSource: &shared.S3DataSource{
                                AttributeNames: []string{
                                    "temporibus",
                                    "quos",
                                },
                                InstanceGroupNames: []string{
                                    "itaque",
                                    "commodi",
                                },
                                S3DataDistributionType: shared.S3DataDistributionEnumShardedByS3Key.ToPointer(),
                                S3DataType: shared.S3DataTypeEnumAugmentedManifestFile,
                                S3URI: "modi",
                            },
                        },
                        InputMode: shared.TrainingInputModeEnumFastFile.ToPointer(),
                        RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                        ShuffleConfig: &shared.ShuffleConfig{
                            Seed: 32901,
                        },
                    },
                    shared.Channel{
                        ChannelName: "ipsam",
                        CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                        ContentType: sdk.String("alias"),
                        DataSource: shared.DataSource{
                            FileSystemDataSource: &shared.FileSystemDataSource{
                                DirectoryPath: "quasi",
                                FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                                FileSystemID: "maiores",
                                FileSystemType: shared.FileSystemTypeEnumEfs,
                            },
                            S3DataSource: &shared.S3DataSource{
                                AttributeNames: []string{
                                    "nulla",
                                    "deserunt",
                                    "esse",
                                },
                                InstanceGroupNames: []string{
                                    "reprehenderit",
                                    "est",
                                },
                                S3DataDistributionType: shared.S3DataDistributionEnumFullyReplicated.ToPointer(),
                                S3DataType: shared.S3DataTypeEnumS3Prefix,
                                S3URI: "accusamus",
                            },
                        },
                        InputMode: shared.TrainingInputModeEnumFastFile.ToPointer(),
                        RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                        ShuffleConfig: &shared.ShuffleConfig{
                            Seed: 900103,
                        },
                    },
                    shared.Channel{
                        ChannelName: "asperiores",
                        CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                        ContentType: sdk.String("voluptas"),
                        DataSource: shared.DataSource{
                            FileSystemDataSource: &shared.FileSystemDataSource{
                                DirectoryPath: "debitis",
                                FileSystemAccessMode: shared.FileSystemAccessModeEnumRo,
                                FileSystemID: "quae",
                                FileSystemType: shared.FileSystemTypeEnumFSxLustre,
                            },
                            S3DataSource: &shared.S3DataSource{
                                AttributeNames: []string{
                                    "laborum",
                                    "consectetur",
                                    "velit",
                                },
                                InstanceGroupNames: []string{
                                    "ipsum",
                                    "impedit",
                                    "magni",
                                },
                                S3DataDistributionType: shared.S3DataDistributionEnumShardedByS3Key.ToPointer(),
                                S3DataType: shared.S3DataTypeEnumAugmentedManifestFile,
                                S3URI: "nam",
                            },
                        },
                        InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                        RecordWrapperType: shared.RecordWrapperEnumNone.ToPointer(),
                        ShuffleConfig: &shared.ShuffleConfig{
                            Seed: 453094,
                        },
                    },
                    shared.Channel{
                        ChannelName: "sequi",
                        CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                        ContentType: sdk.String("neque"),
                        DataSource: shared.DataSource{
                            FileSystemDataSource: &shared.FileSystemDataSource{
                                DirectoryPath: "quo",
                                FileSystemAccessMode: shared.FileSystemAccessModeEnumRo,
                                FileSystemID: "quibusdam",
                                FileSystemType: shared.FileSystemTypeEnumEfs,
                            },
                            S3DataSource: &shared.S3DataSource{
                                AttributeNames: []string{
                                    "voluptatibus",
                                },
                                InstanceGroupNames: []string{
                                    "magnam",
                                    "quibusdam",
                                },
                                S3DataDistributionType: shared.S3DataDistributionEnumFullyReplicated.ToPointer(),
                                S3DataType: shared.S3DataTypeEnumAugmentedManifestFile,
                                S3URI: "libero",
                            },
                        },
                        InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                        RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                        ShuffleConfig: &shared.ShuffleConfig{
                            Seed: 156383,
                        },
                    },
                },
                OutputDataConfig: shared.OutputDataConfig{
                    KmsKeyID: sdk.String("porro"),
                    S3OutputPath: "aliquam",
                },
                ResourceConfig: &shared.ResourceConfig{
                    InstanceCount: sdk.Int64(247045),
                    InstanceGroups: []shared.InstanceGroup{
                        shared.InstanceGroup{
                            InstanceCount: 36561,
                            InstanceGroupName: "vel",
                            InstanceType: shared.TrainingInstanceTypeEnumMlC44xlarge,
                        },
                    },
                    InstanceType: shared.TrainingInstanceTypeEnumMlG4dnXlarge.ToPointer(),
                    KeepAlivePeriodInSeconds: sdk.Int64(877751),
                    VolumeKmsKeyID: sdk.String("excepturi"),
                    VolumeSizeInGB: 431994,
                },
                RetryStrategy: &shared.RetryStrategy{
                    MaximumRetryAttempts: 246557,
                },
                RoleArn: "ut",
                StaticHyperParameters: map[string]string{
                    "earum": "dicta",
                    "impedit": "voluptatibus",
                    "iste": "itaque",
                },
                StoppingCondition: shared.StoppingCondition{
                    MaxRuntimeInSeconds: sdk.Int64(2677),
                    MaxWaitTimeInSeconds: sdk.Int64(391797),
                },
                TuningObjective: &shared.HyperParameterTuningJobObjective{
                    MetricName: "itaque",
                    Type: shared.HyperParameterTuningJobObjectiveTypeEnumMaximize,
                },
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "non",
                        "dolor",
                        "iusto",
                    },
                    Subnets: []string{
                        "doloremque",
                    },
                },
            },
            TrainingJobDefinitions: []shared.HyperParameterTrainingJobDefinition{
                shared.HyperParameterTrainingJobDefinition{
                    AlgorithmSpecification: shared.HyperParameterAlgorithmSpecification{
                        AlgorithmName: sdk.String("officia"),
                        MetricDefinitions: []shared.MetricDefinition{
                            shared.MetricDefinition{
                                Name: "Alison Hodkiewicz",
                                Regex: "perspiciatis",
                            },
                            shared.MetricDefinition{
                                Name: "Alfredo Wilkinson",
                                Regex: "unde",
                            },
                            shared.MetricDefinition{
                                Name: "Lyle Russel",
                                Regex: "est",
                            },
                            shared.MetricDefinition{
                                Name: "Dr. Cory Green",
                                Regex: "vitae",
                            },
                        },
                        TrainingImage: sdk.String("inventore"),
                        TrainingInputMode: shared.TrainingInputModeEnumPipe,
                    },
                    CheckpointConfig: &shared.CheckpointConfig{
                        LocalPath: sdk.String("ad"),
                        S3URI: "qui",
                    },
                    DefinitionName: sdk.String("iste"),
                    EnableInterContainerTrafficEncryption: sdk.Bool(false),
                    EnableManagedSpotTraining: sdk.Bool(false),
                    EnableNetworkIsolation: sdk.Bool(false),
                    Environment: map[string]string{
                        "nemo": "soluta",
                        "libero": "rem",
                    },
                    HyperParameterRanges: &shared.ParameterRanges{
                        CategoricalParameterRanges: []shared.CategoricalParameterRange{
                            shared.CategoricalParameterRange{
                                Name: "Beverly Abbott",
                                Values: []string{
                                    "quae",
                                },
                            },
                            shared.CategoricalParameterRange{
                                Name: "Dawn Heidenreich I",
                                Values: []string{
                                    "nulla",
                                    "distinctio",
                                    "maxime",
                                },
                            },
                            shared.CategoricalParameterRange{
                                Name: "Marilyn Heaney",
                                Values: []string{
                                    "id",
                                },
                            },
                        },
                        ContinuousParameterRanges: []shared.ContinuousParameterRange{
                            shared.ContinuousParameterRange{
                                MaxValue: "fugiat",
                                MinValue: "officia",
                                Name: "Clark Balistreri DVM",
                                ScalingType: shared.HyperParameterScalingTypeEnumAuto.ToPointer(),
                            },
                            shared.ContinuousParameterRange{
                                MaxValue: "aperiam",
                                MinValue: "totam",
                                Name: "Ms. Lynne Rau",
                                ScalingType: shared.HyperParameterScalingTypeEnumAuto.ToPointer(),
                            },
                            shared.ContinuousParameterRange{
                                MaxValue: "assumenda",
                                MinValue: "beatae",
                                Name: "Bryant Lockman",
                                ScalingType: shared.HyperParameterScalingTypeEnumReverseLogarithmic.ToPointer(),
                            },
                        },
                        IntegerParameterRanges: []shared.IntegerParameterRange{
                            shared.IntegerParameterRange{
                                MaxValue: "tempore",
                                MinValue: "sint",
                                Name: "Stacey Hintz",
                                ScalingType: shared.HyperParameterScalingTypeEnumLinear.ToPointer(),
                            },
                            shared.IntegerParameterRange{
                                MaxValue: "officiis",
                                MinValue: "voluptatibus",
                                Name: "Josh Abshire",
                                ScalingType: shared.HyperParameterScalingTypeEnumLogarithmic.ToPointer(),
                            },
                            shared.IntegerParameterRange{
                                MaxValue: "repudiandae",
                                MinValue: "accusantium",
                                Name: "Erick Dare",
                                ScalingType: shared.HyperParameterScalingTypeEnumLogarithmic.ToPointer(),
                            },
                            shared.IntegerParameterRange{
                                MaxValue: "odit",
                                MinValue: "explicabo",
                                Name: "Natasha Wehner",
                                ScalingType: shared.HyperParameterScalingTypeEnumLogarithmic.ToPointer(),
                            },
                        },
                    },
                    HyperParameterTuningResourceConfig: &shared.HyperParameterTuningResourceConfig{
                        AllocationStrategy: shared.HyperParameterTuningAllocationStrategyEnumPrioritized.ToPointer(),
                        InstanceConfigs: []shared.HyperParameterTuningInstanceConfig{
                            shared.HyperParameterTuningInstanceConfig{
                                InstanceCount: 693746,
                                InstanceType: shared.TrainingInstanceTypeEnumMlM524xlarge,
                                VolumeSizeInGB: 106255,
                            },
                            shared.HyperParameterTuningInstanceConfig{
                                InstanceCount: 600213,
                                InstanceType: shared.TrainingInstanceTypeEnumMlP216xlarge,
                                VolumeSizeInGB: 963198,
                            },
                        },
                        InstanceCount: sdk.Int64(585593),
                        InstanceType: shared.TrainingInstanceTypeEnumMlG4dn4xlarge.ToPointer(),
                        VolumeKmsKeyID: sdk.String("numquam"),
                        VolumeSizeInGB: sdk.Int64(256916),
                    },
                    InputDataConfig: []shared.Channel{
                        shared.Channel{
                            ChannelName: "at",
                            CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                            ContentType: sdk.String("dignissimos"),
                            DataSource: shared.DataSource{
                                FileSystemDataSource: &shared.FileSystemDataSource{
                                    DirectoryPath: "optio",
                                    FileSystemAccessMode: shared.FileSystemAccessModeEnumRo,
                                    FileSystemID: "corporis",
                                    FileSystemType: shared.FileSystemTypeEnumEfs,
                                },
                                S3DataSource: &shared.S3DataSource{
                                    AttributeNames: []string{
                                        "voluptatum",
                                        "cupiditate",
                                        "minima",
                                    },
                                    InstanceGroupNames: []string{
                                        "enim",
                                        "neque",
                                        "in",
                                        "minus",
                                    },
                                    S3DataDistributionType: shared.S3DataDistributionEnumFullyReplicated.ToPointer(),
                                    S3DataType: shared.S3DataTypeEnumManifestFile,
                                    S3URI: "corporis",
                                },
                            },
                            InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                            RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                            ShuffleConfig: &shared.ShuffleConfig{
                                Seed: 978173,
                            },
                        },
                    },
                    OutputDataConfig: shared.OutputDataConfig{
                        KmsKeyID: sdk.String("tempore"),
                        S3OutputPath: "aperiam",
                    },
                    ResourceConfig: &shared.ResourceConfig{
                        InstanceCount: sdk.Int64(727547),
                        InstanceGroups: []shared.InstanceGroup{
                            shared.InstanceGroup{
                                InstanceCount: 289913,
                                InstanceGroupName: "totam",
                                InstanceType: shared.TrainingInstanceTypeEnumMlP4d24xlarge,
                            },
                        },
                        InstanceType: shared.TrainingInstanceTypeEnumMlC42xlarge.ToPointer(),
                        KeepAlivePeriodInSeconds: sdk.Int64(779180),
                        VolumeKmsKeyID: sdk.String("velit"),
                        VolumeSizeInGB: 795591,
                    },
                    RetryStrategy: &shared.RetryStrategy{
                        MaximumRetryAttempts: 684553,
                    },
                    RoleArn: "nostrum",
                    StaticHyperParameters: map[string]string{
                        "impedit": "delectus",
                        "tempore": "vero",
                        "odit": "repellat",
                    },
                    StoppingCondition: shared.StoppingCondition{
                        MaxRuntimeInSeconds: sdk.Int64(865946),
                        MaxWaitTimeInSeconds: sdk.Int64(362888),
                    },
                    TuningObjective: &shared.HyperParameterTuningJobObjective{
                        MetricName: "reprehenderit",
                        Type: shared.HyperParameterTuningJobObjectiveTypeEnumMaximize,
                    },
                    VpcConfig: &shared.VpcConfig{
                        SecurityGroupIds: []string{
                            "minima",
                            "in",
                        },
                        Subnets: []string{
                            "excepturi",
                            "dolores",
                        },
                    },
                },
            },
            WarmStartConfig: &shared.HyperParameterTuningJobWarmStartConfig{
                ParentHyperParameterTuningJobs: []shared.ParentHyperParameterTuningJob{
                    shared.ParentHyperParameterTuningJob{
                        HyperParameterTuningJobName: sdk.String("veritatis"),
                    },
                    shared.ParentHyperParameterTuningJob{
                        HyperParameterTuningJobName: sdk.String("ducimus"),
                    },
                    shared.ParentHyperParameterTuningJob{
                        HyperParameterTuningJobName: sdk.String("voluptate"),
                    },
                },
                WarmStartType: shared.HyperParameterTuningJobWarmStartTypeEnumTransferLearning,
            },
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.CreateHyperParameterTuningJobXAmzTargetEnumSageMakerCreateHyperParameterTuningJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHyperParameterTuningJobResponse != nil {
        // handle response
    }
}
```

## CreateImage

Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Elastic Container Registry (ECR). For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.

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
    res, err := s.SDK.CreateImage(ctx, operations.CreateImageRequest{
        CreateImageRequest: shared.CreateImageRequest{
            Description: sdk.String("placeat"),
            DisplayName: sdk.String("quidem"),
            ImageName: "exercitationem",
            RoleArn: "quam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "modi",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.CreateImageXAmzTargetEnumSageMakerCreateImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageResponse != nil {
        // handle response
    }
}
```

## CreateImageVersion

Creates a version of the SageMaker image specified by <code>ImageName</code>. The version represents the Amazon Elastic Container Registry (ECR) container image specified by <code>BaseImage</code>.

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
    res, err := s.SDK.CreateImageVersion(ctx, operations.CreateImageVersionRequest{
        CreateImageVersionRequest: shared.CreateImageVersionRequest{
            Aliases: []string{
                "animi",
                "dolores",
            },
            BaseImage: "nam",
            ClientToken: "dicta",
            Horovod: sdk.Bool(false),
            ImageName: "consequuntur",
            JobType: shared.JobTypeEnumNotebookKernel.ToPointer(),
            MLFramework: sdk.String("nobis"),
            Processor: shared.ProcessorEnumCPU.ToPointer(),
            ProgrammingLang: sdk.String("ducimus"),
            ReleaseNotes: sdk.String("maiores"),
            VendorGuidance: shared.VendorGuidanceEnumNotProvided.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.CreateImageVersionXAmzTargetEnumSageMakerCreateImageVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageVersionResponse != nil {
        // handle response
    }
}
```

## CreateInferenceExperiment

<p> Creates an inference experiment using the configurations specified in the request. </p> <p> Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>. </p> <p> Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. </p> <p> While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html">View, monitor, and edit shadow tests</a>. </p>

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
    res, err := s.SDK.CreateInferenceExperiment(ctx, operations.CreateInferenceExperimentRequest{
        CreateInferenceExperimentRequest: shared.CreateInferenceExperimentRequest{
            DataStorageConfig: &shared.InferenceExperimentDataStorageConfig{
                ContentType: &shared.CaptureContentTypeHeader{
                    CsvContentTypes: []string{
                        "nostrum",
                        "doloribus",
                    },
                    JSONContentTypes: []string{
                        "sint",
                        "enim",
                        "hic",
                        "animi",
                    },
                },
                Destination: "quas",
                KmsKey: sdk.String("totam"),
            },
            Description: sdk.String("molestias"),
            EndpointName: "odio",
            KmsKey: sdk.String("eaque"),
            ModelVariants: []shared.ModelVariantConfig{
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 104078,
                            InstanceType: shared.InstanceTypeEnumMlC5d9xlarge,
                        },
                    },
                    ModelName: "iste",
                    VariantName: "assumenda",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 731634,
                            InstanceType: shared.InstanceTypeEnumMlG4dn8xlarge,
                        },
                    },
                    ModelName: "velit",
                    VariantName: "doloremque",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 963976,
                            InstanceType: shared.InstanceTypeEnumMlR5Large,
                        },
                    },
                    ModelName: "cum",
                    VariantName: "ipsum",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 238011,
                            InstanceType: shared.InstanceTypeEnumMlG52xlarge,
                        },
                    },
                    ModelName: "deserunt",
                    VariantName: "doloremque",
                },
            },
            Name: "Ms. Sally Rempel",
            RoleArn: "eligendi",
            Schedule: &shared.InferenceExperimentSchedule{
                EndTime: types.MustTimeFromString("2022-03-31T15:31:53.121Z"),
                StartTime: types.MustTimeFromString("2022-01-25T17:05:34.945Z"),
            },
            ShadowModeConfig: shared.ShadowModeConfig{
                ShadowModelVariants: []shared.ShadowModelVariantConfig{
                    shared.ShadowModelVariantConfig{
                        SamplingPercentage: 993002,
                        ShadowModelVariantName: "veniam",
                    },
                },
                SourceModelVariantName: "consequuntur",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laudantium",
                    Value: "odit",
                },
                shared.Tag{
                    Key: "pariatur",
                    Value: "amet",
                },
                shared.Tag{
                    Key: "exercitationem",
                    Value: "ab",
                },
                shared.Tag{
                    Key: "velit",
                    Value: "facilis",
                },
            },
            Type: shared.InferenceExperimentTypeEnumShadowMode,
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.CreateInferenceExperimentXAmzTargetEnumSageMakerCreateInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## CreateInferenceRecommendationsJob

Starts a recommendation job. You can create either an instance recommendation or load test job.

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
    res, err := s.SDK.CreateInferenceRecommendationsJob(ctx, operations.CreateInferenceRecommendationsJobRequest{
        CreateInferenceRecommendationsJobRequest: shared.CreateInferenceRecommendationsJobRequest{
            InputConfig: shared.RecommendationJobInputConfig{
                ContainerConfig: &shared.RecommendationJobContainerConfig{
                    DataInputConfig: sdk.String("quis"),
                    Domain: sdk.String("nisi"),
                    Framework: sdk.String("libero"),
                    FrameworkVersion: sdk.String("minus"),
                    NearestModelName: sdk.String("facere"),
                    PayloadConfig: &shared.RecommendationJobPayloadConfig{
                        SamplePayloadURL: sdk.String("facilis"),
                        SupportedContentTypes: []string{
                            "ad",
                        },
                    },
                    SupportedInstanceTypes: []string{
                        "voluptatibus",
                        "consequuntur",
                        "debitis",
                        "labore",
                    },
                    Task: sdk.String("rerum"),
                },
                EndpointConfigurations: []shared.EndpointInputConfiguration{
                    shared.EndpointInputConfiguration{
                        EnvironmentParameterRanges: &shared.EnvironmentParameterRanges{
                            CategoricalParameterRanges: []shared.CategoricalParameter{
                                shared.CategoricalParameter{
                                    Name: "Rita Kshlerin",
                                    Value: []string{
                                        "fugiat",
                                        "unde",
                                        "officiis",
                                        "ducimus",
                                    },
                                },
                                shared.CategoricalParameter{
                                    Name: "Mildred Mueller IV",
                                    Value: []string{
                                        "fugiat",
                                        "ad",
                                    },
                                },
                            },
                        },
                        InferenceSpecificationName: sdk.String("aspernatur"),
                        InstanceType: shared.ProductionVariantInstanceTypeEnumMlG4dnXlarge,
                    },
                },
                Endpoints: []shared.EndpointInfo{
                    shared.EndpointInfo{
                        EndpointName: "iusto",
                    },
                    shared.EndpointInfo{
                        EndpointName: "dignissimos",
                    },
                    shared.EndpointInfo{
                        EndpointName: "libero",
                    },
                    shared.EndpointInfo{
                        EndpointName: "illo",
                    },
                },
                JobDurationInSeconds: sdk.Int64(69182),
                ModelName: sdk.String("incidunt"),
                ModelPackageVersionArn: sdk.String("accusamus"),
                ResourceLimit: &shared.RecommendationJobResourceLimit{
                    MaxNumberOfTests: sdk.Int64(902581),
                    MaxParallelOfTests: sdk.Int64(734814),
                },
                TrafficPattern: &shared.TrafficPattern{
                    Phases: []shared.Phase{
                        shared.Phase{
                            DurationInSeconds: sdk.Int64(176499),
                            InitialNumberOfUsers: sdk.Int64(970079),
                            SpawnRate: sdk.Int64(939161),
                        },
                        shared.Phase{
                            DurationInSeconds: sdk.Int64(444121),
                            InitialNumberOfUsers: sdk.Int64(506312),
                            SpawnRate: sdk.Int64(367046),
                        },
                    },
                    TrafficType: shared.TrafficTypeEnumPhases.ToPointer(),
                },
                VolumeKmsKeyID: sdk.String("repellat"),
                VpcConfig: &shared.RecommendationJobVpcConfig{
                    SecurityGroupIds: []string{
                        "sequi",
                        "nihil",
                        "deleniti",
                        "illo",
                    },
                    Subnets: []string{
                        "assumenda",
                        "aliquam",
                    },
                },
            },
            JobDescription: sdk.String("quisquam"),
            JobName: "provident",
            JobType: shared.RecommendationJobTypeEnumAdvanced,
            OutputConfig: &shared.RecommendationJobOutputConfig{
                CompiledOutputConfig: &shared.RecommendationJobCompiledOutputConfig{
                    S3OutputURI: sdk.String("repudiandae"),
                },
                KmsKeyID: sdk.String("consequatur"),
            },
            RoleArn: "maxime",
            StoppingConditions: &shared.RecommendationJobStoppingConditions{
                MaxInvocations: sdk.Int64(136357),
                ModelLatencyThresholds: []shared.ModelLatencyThreshold{
                    shared.ModelLatencyThreshold{
                        Percentile: sdk.String("expedita"),
                        ValueInMilliseconds: sdk.Int64(559174),
                    },
                    shared.ModelLatencyThreshold{
                        Percentile: sdk.String("provident"),
                        ValueInMilliseconds: sdk.Int64(922299),
                    },
                    shared.ModelLatencyThreshold{
                        Percentile: sdk.String("rerum"),
                        ValueInMilliseconds: sdk.Int64(492361),
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vero",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "iure",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.CreateInferenceRecommendationsJobXAmzTargetEnumSageMakerCreateInferenceRecommendationsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInferenceRecommendationsJobResponse != nil {
        // handle response
    }
}
```

## CreateLabelingJob

<p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. </p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p> <p>You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (<code>InProgress</code>) streaming labeling job in real time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling Job</a>.</p>

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
    res, err := s.SDK.CreateLabelingJob(ctx, operations.CreateLabelingJobRequest{
        CreateLabelingJobRequest: shared.CreateLabelingJobRequest{
            HumanTaskConfig: shared.HumanTaskConfig{
                AnnotationConsolidationConfig: shared.AnnotationConsolidationConfig{
                    AnnotationConsolidationLambdaArn: "quae",
                },
                MaxConcurrentTaskCount: sdk.Int64(229567),
                NumberOfHumanWorkersPerDataObject: 849320,
                PreHumanTaskLambdaArn: "praesentium",
                PublicWorkforceTaskPrice: &shared.PublicWorkforceTaskPrice{
                    AmountInUsd: &shared.Usd{
                        Cents: sdk.Int64(695526),
                        Dollars: sdk.Int64(736853),
                        TenthFractionsOfACent: sdk.Int64(230411),
                    },
                },
                TaskAvailabilityLifetimeInSeconds: sdk.Int64(97676),
                TaskDescription: "dicta",
                TaskKeywords: []string{
                    "doloremque",
                    "earum",
                    "iusto",
                },
                TaskTimeLimitInSeconds: 228646,
                TaskTitle: "provident",
                UIConfig: shared.UIConfig{
                    HumanTaskUIArn: sdk.String("dolorum"),
                    UITemplateS3URI: sdk.String("necessitatibus"),
                },
                WorkteamArn: "provident",
            },
            InputConfig: shared.LabelingJobInputConfig{
                DataAttributes: &shared.LabelingJobDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                        shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                        shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                        shared.ContentClassifierEnumFreeOfAdultContent,
                    },
                },
                DataSource: shared.LabelingJobDataSource{
                    S3DataSource: &shared.LabelingJobS3DataSource{
                        ManifestS3URI: "facilis",
                    },
                    SnsDataSource: &shared.LabelingJobSnsDataSource{
                        SnsTopicArn: "corrupti",
                    },
                },
            },
            LabelAttributeName: "aperiam",
            LabelCategoryConfigS3URI: sdk.String("sint"),
            LabelingJobAlgorithmsConfig: &shared.LabelingJobAlgorithmsConfig{
                InitialActiveLearningModelArn: sdk.String("accusamus"),
                LabelingJobAlgorithmSpecificationArn: "eos",
                LabelingJobResourceConfig: &shared.LabelingJobResourceConfig{
                    VolumeKmsKeyID: sdk.String("totam"),
                    VpcConfig: &shared.VpcConfig{
                        SecurityGroupIds: []string{
                            "voluptatem",
                        },
                        Subnets: []string{
                            "dolor",
                        },
                    },
                },
            },
            LabelingJobName: "sunt",
            OutputConfig: shared.LabelingJobOutputConfig{
                KmsKeyID: sdk.String("a"),
                S3OutputPath: "dolor",
                SnsTopicArn: sdk.String("occaecati"),
            },
            RoleArn: "atque",
            StoppingConditions: &shared.LabelingJobStoppingConditions{
                MaxHumanLabeledObjectCount: sdk.Int64(107472),
                MaxPercentageOfInputDatasetLabeled: sdk.Int64(868255),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "minus",
                    Value: "esse",
                },
                shared.Tag{
                    Key: "voluptatem",
                    Value: "perferendis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.CreateLabelingJobXAmzTargetEnumSageMakerCreateLabelingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelingJobResponse != nil {
        // handle response
    }
}
```

## CreateModel

<p>Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>

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
    res, err := s.SDK.CreateModel(ctx, operations.CreateModelRequest{
        CreateModelInput: shared.CreateModelInput{
            Containers: []shared.ContainerDefinition{
                shared.ContainerDefinition{
                    ContainerHostname: sdk.String("consectetur"),
                    Environment: map[string]string{
                        "dignissimos": "consectetur",
                        "soluta": "natus",
                        "temporibus": "officia",
                        "amet": "tenetur",
                    },
                    Image: sdk.String("aspernatur"),
                    ImageConfig: &shared.ImageConfig{
                        RepositoryAccessMode: shared.RepositoryAccessModeEnumVpc,
                        RepositoryAuthConfig: &shared.RepositoryAuthConfig{
                            RepositoryCredentialsProviderArn: "itaque",
                        },
                    },
                    InferenceSpecificationName: sdk.String("illum"),
                    Mode: shared.ContainerModeEnumMultiModel.ToPointer(),
                    ModelDataURL: sdk.String("dignissimos"),
                    ModelPackageName: sdk.String("vero"),
                    MultiModelConfig: &shared.MultiModelConfig{
                        ModelCacheSetting: shared.ModelCacheSettingEnumEnabled.ToPointer(),
                    },
                },
                shared.ContainerDefinition{
                    ContainerHostname: sdk.String("consectetur"),
                    Environment: map[string]string{
                        "explicabo": "explicabo",
                        "exercitationem": "nihil",
                        "non": "ab",
                        "illo": "hic",
                    },
                    Image: sdk.String("deserunt"),
                    ImageConfig: &shared.ImageConfig{
                        RepositoryAccessMode: shared.RepositoryAccessModeEnumVpc,
                        RepositoryAuthConfig: &shared.RepositoryAuthConfig{
                            RepositoryCredentialsProviderArn: "non",
                        },
                    },
                    InferenceSpecificationName: sdk.String("distinctio"),
                    Mode: shared.ContainerModeEnumSingleModel.ToPointer(),
                    ModelDataURL: sdk.String("exercitationem"),
                    ModelPackageName: sdk.String("labore"),
                    MultiModelConfig: &shared.MultiModelConfig{
                        ModelCacheSetting: shared.ModelCacheSettingEnumEnabled.ToPointer(),
                    },
                },
                shared.ContainerDefinition{
                    ContainerHostname: sdk.String("repudiandae"),
                    Environment: map[string]string{
                        "in": "explicabo",
                        "accusamus": "rem",
                    },
                    Image: sdk.String("aperiam"),
                    ImageConfig: &shared.ImageConfig{
                        RepositoryAccessMode: shared.RepositoryAccessModeEnumPlatform,
                        RepositoryAuthConfig: &shared.RepositoryAuthConfig{
                            RepositoryCredentialsProviderArn: "deleniti",
                        },
                    },
                    InferenceSpecificationName: sdk.String("enim"),
                    Mode: shared.ContainerModeEnumSingleModel.ToPointer(),
                    ModelDataURL: sdk.String("similique"),
                    ModelPackageName: sdk.String("minima"),
                    MultiModelConfig: &shared.MultiModelConfig{
                        ModelCacheSetting: shared.ModelCacheSettingEnumDisabled.ToPointer(),
                    },
                },
            },
            EnableNetworkIsolation: sdk.Bool(false),
            ExecutionRoleArn: "magnam",
            InferenceExecutionConfig: &shared.InferenceExecutionConfig{
                Mode: shared.InferenceExecutionModeEnumSerial,
            },
            ModelName: "modi",
            PrimaryContainer: &shared.ContainerDefinition{
                ContainerHostname: sdk.String("eum"),
                Environment: map[string]string{
                    "mollitia": "dignissimos",
                },
                Image: sdk.String("fugiat"),
                ImageConfig: &shared.ImageConfig{
                    RepositoryAccessMode: shared.RepositoryAccessModeEnumPlatform,
                    RepositoryAuthConfig: &shared.RepositoryAuthConfig{
                        RepositoryCredentialsProviderArn: "molestiae",
                    },
                },
                InferenceSpecificationName: sdk.String("veniam"),
                Mode: shared.ContainerModeEnumMultiModel.ToPointer(),
                ModelDataURL: sdk.String("ab"),
                ModelPackageName: sdk.String("modi"),
                MultiModelConfig: &shared.MultiModelConfig{
                    ModelCacheSetting: shared.ModelCacheSettingEnumEnabled.ToPointer(),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eveniet",
                    Value: "odio",
                },
            },
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "numquam",
                    "dolorum",
                },
                Subnets: []string{
                    "voluptate",
                    "consectetur",
                    "nesciunt",
                    "quaerat",
                },
            },
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.CreateModelXAmzTargetEnumSageMakerCreateModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelOutput != nil {
        // handle response
    }
}
```

## CreateModelBiasJobDefinition

Creates the definition for a model bias job.

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
    res, err := s.SDK.CreateModelBiasJobDefinition(ctx, operations.CreateModelBiasJobDefinitionRequest{
        CreateModelBiasJobDefinitionRequest: shared.CreateModelBiasJobDefinitionRequest{
            JobDefinitionName: "facilis",
            JobResources: shared.MonitoringResources{
                ClusterConfig: shared.MonitoringClusterConfig{
                    InstanceCount: 229276,
                    InstanceType: shared.ProcessingInstanceTypeEnumMlP316xlarge,
                    VolumeKmsKeyID: sdk.String("fuga"),
                    VolumeSizeInGB: 5310,
                },
            },
            ModelBiasAppSpecification: shared.ModelBiasAppSpecification{
                ConfigURI: "rem",
                Environment: map[string]string{
                    "quos": "laudantium",
                },
                ImageURI: "repellendus",
            },
            ModelBiasBaselineConfig: &shared.ModelBiasBaselineConfig{
                BaseliningJobName: sdk.String("veritatis"),
                ConstraintsResource: &shared.MonitoringConstraintsResource{
                    S3URI: sdk.String("quae"),
                },
            },
            ModelBiasJobInput: shared.ModelBiasJobInput{
                BatchTransformInput: &shared.BatchTransformInput{
                    DataCapturedDestinationS3URI: "eaque",
                    DatasetFormat: shared.MonitoringDatasetFormat{
                        Csv: &shared.MonitoringCsvDatasetFormat{
                            Header: sdk.Bool(false),
                        },
                        JSON: &shared.MonitoringJSONDatasetFormat{
                            Line: sdk.Bool(false),
                        },
                        Parquet: map[string]interface{}{
                            "delectus": "mollitia",
                            "nulla": "officia",
                            "sed": "voluptatem",
                            "alias": "eveniet",
                        },
                    },
                    EndTimeOffset: sdk.String("hic"),
                    FeaturesAttribute: sdk.String("voluptatem"),
                    InferenceAttribute: sdk.String("incidunt"),
                    LocalPath: "qui",
                    ProbabilityAttribute: sdk.String("qui"),
                    ProbabilityThresholdAttribute: sdk.Float64(8959.12),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                    StartTimeOffset: sdk.String("beatae"),
                },
                EndpointInput: &shared.EndpointInput{
                    EndTimeOffset: sdk.String("aliquid"),
                    EndpointName: "modi",
                    FeaturesAttribute: sdk.String("optio"),
                    InferenceAttribute: sdk.String("voluptatibus"),
                    LocalPath: "molestias",
                    ProbabilityAttribute: sdk.String("officia"),
                    ProbabilityThresholdAttribute: sdk.Float64(7304.78),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                    StartTimeOffset: sdk.String("aliquid"),
                },
                GroundTruthS3Input: shared.MonitoringGroundTruthS3Input{
                    S3URI: sdk.String("ea"),
                },
            },
            ModelBiasJobOutputConfig: shared.MonitoringOutputConfig{
                KmsKeyID: sdk.String("impedit"),
                MonitoringOutputs: []shared.MonitoringOutput{
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "odit",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                            S3URI: "reiciendis",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "repellat",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "laborum",
                        },
                    },
                },
            },
            NetworkConfig: &shared.MonitoringNetworkConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "accusamus",
                        "doloremque",
                        "nisi",
                    },
                    Subnets: []string{
                        "recusandae",
                        "voluptates",
                        "non",
                    },
                },
            },
            RoleArn: "rem",
            StoppingCondition: &shared.MonitoringStoppingCondition{
                MaxRuntimeInSeconds: 157884,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: "dicta",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "eligendi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.CreateModelBiasJobDefinitionXAmzTargetEnumSageMakerCreateModelBiasJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelBiasJobDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateModelCard

<p>Creates an Amazon SageMaker Model Card.</p> <p>For information about how to use model cards, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html">Amazon SageMaker Model Card</a>.</p>

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
    res, err := s.SDK.CreateModelCard(ctx, operations.CreateModelCardRequest{
        CreateModelCardRequest: shared.CreateModelCardRequest{
            Content: "perferendis",
            ModelCardName: "facilis",
            ModelCardStatus: shared.ModelCardStatusEnumArchived,
            SecurityConfig: &shared.ModelCardSecurityConfig{
                KmsKeyID: sdk.String("a"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: "quos",
                },
                shared.Tag{
                    Key: "ullam",
                    Value: "dolore",
                },
                shared.Tag{
                    Key: "modi",
                    Value: "itaque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.CreateModelCardXAmzTargetEnumSageMakerCreateModelCard,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelCardResponse != nil {
        // handle response
    }
}
```

## CreateModelCardExportJob

Creates an Amazon SageMaker Model Card export job.

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
    res, err := s.SDK.CreateModelCardExportJob(ctx, operations.CreateModelCardExportJobRequest{
        CreateModelCardExportJobRequest: shared.CreateModelCardExportJobRequest{
            ModelCardExportJobName: "porro",
            ModelCardName: "accusamus",
            ModelCardVersion: sdk.Int64(518990),
            OutputConfig: shared.ModelCardExportOutputConfig{
                S3OutputPath: "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.CreateModelCardExportJobXAmzTargetEnumSageMakerCreateModelCardExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelCardExportJobResponse != nil {
        // handle response
    }
}
```

## CreateModelExplainabilityJobDefinition

Creates the definition for a model explainability job.

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
    res, err := s.SDK.CreateModelExplainabilityJobDefinition(ctx, operations.CreateModelExplainabilityJobDefinitionRequest{
        CreateModelExplainabilityJobDefinitionRequest: shared.CreateModelExplainabilityJobDefinitionRequest{
            JobDefinitionName: "debitis",
            JobResources: shared.MonitoringResources{
                ClusterConfig: shared.MonitoringClusterConfig{
                    InstanceCount: 423588,
                    InstanceType: shared.ProcessingInstanceTypeEnumMlC4Xlarge,
                    VolumeKmsKeyID: sdk.String("corporis"),
                    VolumeSizeInGB: 375350,
                },
            },
            ModelExplainabilityAppSpecification: shared.ModelExplainabilityAppSpecification{
                ConfigURI: "consequuntur",
                Environment: map[string]string{
                    "reprehenderit": "distinctio",
                    "eius": "ipsa",
                    "rem": "maiores",
                },
                ImageURI: "accusantium",
            },
            ModelExplainabilityBaselineConfig: &shared.ModelExplainabilityBaselineConfig{
                BaseliningJobName: sdk.String("veniam"),
                ConstraintsResource: &shared.MonitoringConstraintsResource{
                    S3URI: sdk.String("saepe"),
                },
            },
            ModelExplainabilityJobInput: shared.ModelExplainabilityJobInput{
                BatchTransformInput: &shared.BatchTransformInput{
                    DataCapturedDestinationS3URI: "neque",
                    DatasetFormat: shared.MonitoringDatasetFormat{
                        Csv: &shared.MonitoringCsvDatasetFormat{
                            Header: sdk.Bool(false),
                        },
                        JSON: &shared.MonitoringJSONDatasetFormat{
                            Line: sdk.Bool(false),
                        },
                        Parquet: map[string]interface{}{
                            "aliquam": "quos",
                            "doloribus": "fugiat",
                            "est": "delectus",
                            "velit": "vitae",
                        },
                    },
                    EndTimeOffset: sdk.String("nesciunt"),
                    FeaturesAttribute: sdk.String("similique"),
                    InferenceAttribute: sdk.String("illo"),
                    LocalPath: "repellat",
                    ProbabilityAttribute: sdk.String("nemo"),
                    ProbabilityThresholdAttribute: sdk.Float64(9878.9),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                    StartTimeOffset: sdk.String("incidunt"),
                },
                EndpointInput: &shared.EndpointInput{
                    EndTimeOffset: sdk.String("explicabo"),
                    EndpointName: "ipsam",
                    FeaturesAttribute: sdk.String("cupiditate"),
                    InferenceAttribute: sdk.String("optio"),
                    LocalPath: "alias",
                    ProbabilityAttribute: sdk.String("quidem"),
                    ProbabilityThresholdAttribute: sdk.Float64(1989.11),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                    StartTimeOffset: sdk.String("consequuntur"),
                },
            },
            ModelExplainabilityJobOutputConfig: shared.MonitoringOutputConfig{
                KmsKeyID: sdk.String("veniam"),
                MonitoringOutputs: []shared.MonitoringOutput{
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "officia",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "ut",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "numquam",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "adipisci",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "libero",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                            S3URI: "minima",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "ex",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "ab",
                        },
                    },
                },
            },
            NetworkConfig: &shared.MonitoringNetworkConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "hic",
                    },
                    Subnets: []string{
                        "quisquam",
                        "dolor",
                    },
                },
            },
            RoleArn: "ducimus",
            StoppingCondition: &shared.MonitoringStoppingCondition{
                MaxRuntimeInSeconds: 683727,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "architecto",
                    Value: "qui",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "magni",
                },
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.CreateModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerCreateModelExplainabilityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelExplainabilityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateModelPackage

<p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p> <note> <p>There are two types of model packages:</p> <ul> <li> <p>Versioned - a model that is part of a model group in the model registry.</p> </li> <li> <p>Unversioned - a model package that is not part of a model group.</p> </li> </ul> </note>

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
    res, err := s.SDK.CreateModelPackage(ctx, operations.CreateModelPackageRequest{
        CreateModelPackageInput: shared.CreateModelPackageInput{
            AdditionalInferenceSpecifications: []shared.AdditionalInferenceSpecificationDefinition{
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("nemo"),
                            Environment: map[string]string{
                                "consequuntur": "amet",
                                "deserunt": "modi",
                                "veniam": "quod",
                            },
                            Framework: sdk.String("itaque"),
                            FrameworkVersion: sdk.String("a"),
                            Image: "quisquam",
                            ImageDigest: sdk.String("enim"),
                            ModelDataURL: sdk.String("doloribus"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "assumenda",
                            },
                            NearestModelName: sdk.String("officiis"),
                            ProductID: sdk.String("architecto"),
                        },
                    },
                    Description: sdk.String("alias"),
                    Name: "Frank Rolfson",
                    SupportedContentTypes: []string{
                        "vel",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlC6gn16xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlR5Large,
                        shared.ProductionVariantInstanceTypeEnumMlM524xlarge,
                    },
                    SupportedResponseMIMETypes: []string{
                        "perferendis",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlC59xlarge,
                    },
                },
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("iure"),
                            Environment: map[string]string{
                                "quod": "nemo",
                                "recusandae": "velit",
                                "magnam": "dignissimos",
                                "laboriosam": "sed",
                            },
                            Framework: sdk.String("odio"),
                            FrameworkVersion: sdk.String("natus"),
                            Image: "provident",
                            ImageDigest: sdk.String("cum"),
                            ModelDataURL: sdk.String("doloribus"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "facilis",
                            },
                            NearestModelName: sdk.String("quidem"),
                            ProductID: sdk.String("itaque"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("laboriosam"),
                            Environment: map[string]string{
                                "modi": "perspiciatis",
                                "hic": "cum",
                                "aspernatur": "libero",
                            },
                            Framework: sdk.String("nam"),
                            FrameworkVersion: sdk.String("incidunt"),
                            Image: "recusandae",
                            ImageDigest: sdk.String("quod"),
                            ModelDataURL: sdk.String("id"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "saepe",
                            },
                            NearestModelName: sdk.String("autem"),
                            ProductID: sdk.String("quo"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("nesciunt"),
                            Environment: map[string]string{
                                "nemo": "illum",
                                "facilis": "non",
                                "mollitia": "assumenda",
                                "recusandae": "distinctio",
                            },
                            Framework: sdk.String("pariatur"),
                            FrameworkVersion: sdk.String("ad"),
                            Image: "facere",
                            ImageDigest: sdk.String("laborum"),
                            ModelDataURL: sdk.String("eveniet"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "laborum",
                            },
                            NearestModelName: sdk.String("incidunt"),
                            ProductID: sdk.String("maxime"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("ipsam"),
                            Environment: map[string]string{
                                "suscipit": "deserunt",
                            },
                            Framework: sdk.String("molestias"),
                            FrameworkVersion: sdk.String("laborum"),
                            Image: "est",
                            ImageDigest: sdk.String("occaecati"),
                            ModelDataURL: sdk.String("labore"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "quo",
                            },
                            NearestModelName: sdk.String("perferendis"),
                            ProductID: sdk.String("fugit"),
                        },
                    },
                    Description: sdk.String("aliquid"),
                    Name: "Gail Roob",
                    SupportedContentTypes: []string{
                        "unde",
                        "nulla",
                        "error",
                        "mollitia",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlG4dn12xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlInf16xlarge,
                    },
                    SupportedResponseMIMETypes: []string{
                        "fuga",
                        "facere",
                        "impedit",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlM5Large,
                    },
                },
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("laboriosam"),
                            Environment: map[string]string{
                                "voluptatem": "facere",
                            },
                            Framework: sdk.String("necessitatibus"),
                            FrameworkVersion: sdk.String("maxime"),
                            Image: "consequatur",
                            ImageDigest: sdk.String("eaque"),
                            ModelDataURL: sdk.String("architecto"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "similique",
                            },
                            NearestModelName: sdk.String("porro"),
                            ProductID: sdk.String("blanditiis"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("quae"),
                            Environment: map[string]string{
                                "officiis": "sed",
                            },
                            Framework: sdk.String("necessitatibus"),
                            FrameworkVersion: sdk.String("impedit"),
                            Image: "ipsa",
                            ImageDigest: sdk.String("excepturi"),
                            ModelDataURL: sdk.String("a"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "maiores",
                            },
                            NearestModelName: sdk.String("laudantium"),
                            ProductID: sdk.String("maiores"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("alias"),
                            Environment: map[string]string{
                                "rem": "dicta",
                                "suscipit": "earum",
                                "doloribus": "velit",
                                "eius": "esse",
                            },
                            Framework: sdk.String("in"),
                            FrameworkVersion: sdk.String("eligendi"),
                            Image: "quasi",
                            ImageDigest: sdk.String("neque"),
                            ModelDataURL: sdk.String("vero"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "excepturi",
                            },
                            NearestModelName: sdk.String("accusantium"),
                            ProductID: sdk.String("qui"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("impedit"),
                            Environment: map[string]string{
                                "incidunt": "dicta",
                            },
                            Framework: sdk.String("odit"),
                            FrameworkVersion: sdk.String("corporis"),
                            Image: "rerum",
                            ImageDigest: sdk.String("alias"),
                            ModelDataURL: sdk.String("error"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "vel",
                            },
                            NearestModelName: sdk.String("accusantium"),
                            ProductID: sdk.String("id"),
                        },
                    },
                    Description: sdk.String("laboriosam"),
                    Name: "Billie Bogan V",
                    SupportedContentTypes: []string{
                        "quam",
                        "magni",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlR6gd4xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlC7gXlarge,
                        shared.ProductionVariantInstanceTypeEnumMlC4Large,
                    },
                    SupportedResponseMIMETypes: []string{
                        "maxime",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlC59xlarge,
                        shared.TransformInstanceTypeEnumMlP2Xlarge,
                    },
                },
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("maiores"),
                            Environment: map[string]string{
                                "velit": "reiciendis",
                                "amet": "nemo",
                                "ipsa": "quisquam",
                            },
                            Framework: sdk.String("tenetur"),
                            FrameworkVersion: sdk.String("quas"),
                            Image: "molestiae",
                            ImageDigest: sdk.String("aliquid"),
                            ModelDataURL: sdk.String("asperiores"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "a",
                            },
                            NearestModelName: sdk.String("nobis"),
                            ProductID: sdk.String("perspiciatis"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("accusantium"),
                            Environment: map[string]string{
                                "minus": "commodi",
                            },
                            Framework: sdk.String("eveniet"),
                            FrameworkVersion: sdk.String("porro"),
                            Image: "tempore",
                            ImageDigest: sdk.String("quidem"),
                            ModelDataURL: sdk.String("modi"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "voluptates",
                            },
                            NearestModelName: sdk.String("fugit"),
                            ProductID: sdk.String("eius"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("sequi"),
                            Environment: map[string]string{
                                "asperiores": "esse",
                                "blanditiis": "sint",
                                "repellat": "a",
                                "animi": "maiores",
                            },
                            Framework: sdk.String("itaque"),
                            FrameworkVersion: sdk.String("nulla"),
                            Image: "deserunt",
                            ImageDigest: sdk.String("corporis"),
                            ModelDataURL: sdk.String("velit"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "officiis",
                            },
                            NearestModelName: sdk.String("enim"),
                            ProductID: sdk.String("officia"),
                        },
                    },
                    Description: sdk.String("saepe"),
                    Name: "Delia Barton",
                    SupportedContentTypes: []string{
                        "blanditiis",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlC6g12xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlC48xlarge,
                    },
                    SupportedResponseMIMETypes: []string{
                        "natus",
                        "minus",
                        "quia",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlP316xlarge,
                        shared.TransformInstanceTypeEnumMlM524xlarge,
                    },
                },
            },
            CertifyForMarketplace: sdk.Bool(false),
            ClientToken: sdk.String("quos"),
            CustomerMetadataProperties: map[string]string{
                "amet": "molestiae",
                "amet": "laborum",
                "modi": "perferendis",
            },
            Domain: sdk.String("necessitatibus"),
            DriftCheckBaselines: &shared.DriftCheckBaselines{
                Bias: &shared.DriftCheckBias{
                    ConfigFile: &shared.FileSource{
                        ContentDigest: sdk.String("architecto"),
                        ContentType: sdk.String("molestias"),
                        S3URI: "dolore",
                    },
                    PostTrainingConstraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("sunt"),
                        ContentType: "maiores",
                        S3URI: "neque",
                    },
                    PreTrainingConstraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("odit"),
                        ContentType: "earum",
                        S3URI: "veniam",
                    },
                },
                Explainability: &shared.DriftCheckExplainability{
                    ConfigFile: &shared.FileSource{
                        ContentDigest: sdk.String("ipsam"),
                        ContentType: sdk.String("eaque"),
                        S3URI: "exercitationem",
                    },
                    Constraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("veniam"),
                        ContentType: "nihil",
                        S3URI: "ad",
                    },
                },
                ModelDataQuality: &shared.DriftCheckModelDataQuality{
                    Constraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("nisi"),
                        ContentType: "tenetur",
                        S3URI: "quis",
                    },
                    Statistics: &shared.MetricsSource{
                        ContentDigest: sdk.String("quibusdam"),
                        ContentType: "nemo",
                        S3URI: "suscipit",
                    },
                },
                ModelQuality: &shared.DriftCheckModelQuality{
                    Constraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("pariatur"),
                        ContentType: "sit",
                        S3URI: "quidem",
                    },
                    Statistics: &shared.MetricsSource{
                        ContentDigest: sdk.String("repellendus"),
                        ContentType: "perferendis",
                        S3URI: "id",
                    },
                },
            },
            InferenceSpecification: &shared.InferenceSpecification{
                Containers: []shared.ModelPackageContainerDefinition{
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("sed"),
                        Environment: map[string]string{
                            "repellat": "repudiandae",
                            "architecto": "adipisci",
                            "pariatur": "harum",
                            "dolore": "voluptatibus",
                        },
                        Framework: sdk.String("iure"),
                        FrameworkVersion: sdk.String("explicabo"),
                        Image: "minus",
                        ImageDigest: sdk.String("soluta"),
                        ModelDataURL: sdk.String("dolorum"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "velit",
                        },
                        NearestModelName: sdk.String("earum"),
                        ProductID: sdk.String("praesentium"),
                    },
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("error"),
                        Environment: map[string]string{
                            "quasi": "mollitia",
                            "accusamus": "harum",
                        },
                        Framework: sdk.String("cumque"),
                        FrameworkVersion: sdk.String("doloremque"),
                        Image: "expedita",
                        ImageDigest: sdk.String("corrupti"),
                        ModelDataURL: sdk.String("eaque"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "deserunt",
                        },
                        NearestModelName: sdk.String("aliquid"),
                        ProductID: sdk.String("excepturi"),
                    },
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("magni"),
                        Environment: map[string]string{
                            "possimus": "dolor",
                            "rerum": "sed",
                        },
                        Framework: sdk.String("accusamus"),
                        FrameworkVersion: sdk.String("optio"),
                        Image: "delectus",
                        ImageDigest: sdk.String("minus"),
                        ModelDataURL: sdk.String("quo"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "quos",
                        },
                        NearestModelName: sdk.String("asperiores"),
                        ProductID: sdk.String("voluptatum"),
                    },
                    shared.ModelPackageContainerDefinition{
                        ContainerHostname: sdk.String("iste"),
                        Environment: map[string]string{
                            "accusantium": "illo",
                            "aut": "doloribus",
                        },
                        Framework: sdk.String("nostrum"),
                        FrameworkVersion: sdk.String("at"),
                        Image: "possimus",
                        ImageDigest: sdk.String("neque"),
                        ModelDataURL: sdk.String("pariatur"),
                        ModelInput: &shared.ModelInput{
                            DataInputConfig: "vel",
                        },
                        NearestModelName: sdk.String("sapiente"),
                        ProductID: sdk.String("mollitia"),
                    },
                },
                SupportedContentTypes: []string{
                    "quos",
                },
                SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                    shared.ProductionVariantInstanceTypeEnumMlC54xlarge,
                },
                SupportedResponseMIMETypes: []string{
                    "ad",
                    "aliquam",
                    "quisquam",
                    "quas",
                },
                SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                    shared.TransformInstanceTypeEnumMlG4dn16xlarge,
                },
            },
            MetadataProperties: &shared.MetadataProperties{
                CommitID: sdk.String("inventore"),
                GeneratedBy: sdk.String("aliquid"),
                ProjectID: sdk.String("laudantium"),
                Repository: sdk.String("est"),
            },
            ModelApprovalStatus: shared.ModelApprovalStatusEnumApproved.ToPointer(),
            ModelMetrics: &shared.ModelMetrics{
                Bias: &shared.Bias{
                    PostTrainingReport: &shared.MetricsSource{
                        ContentDigest: sdk.String("aliquid"),
                        ContentType: "consectetur",
                        S3URI: "cumque",
                    },
                    PreTrainingReport: &shared.MetricsSource{
                        ContentDigest: sdk.String("rem"),
                        ContentType: "voluptatum",
                        S3URI: "ducimus",
                    },
                    Report: &shared.MetricsSource{
                        ContentDigest: sdk.String("adipisci"),
                        ContentType: "recusandae",
                        S3URI: "tempora",
                    },
                },
                Explainability: &shared.Explainability{
                    Report: &shared.MetricsSource{
                        ContentDigest: sdk.String("blanditiis"),
                        ContentType: "numquam",
                        S3URI: "sequi",
                    },
                },
                ModelDataQuality: &shared.ModelDataQuality{
                    Constraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("voluptatum"),
                        ContentType: "sit",
                        S3URI: "rerum",
                    },
                    Statistics: &shared.MetricsSource{
                        ContentDigest: sdk.String("veritatis"),
                        ContentType: "tenetur",
                        S3URI: "autem",
                    },
                },
                ModelQuality: &shared.ModelQuality{
                    Constraints: &shared.MetricsSource{
                        ContentDigest: sdk.String("quidem"),
                        ContentType: "totam",
                        S3URI: "porro",
                    },
                    Statistics: &shared.MetricsSource{
                        ContentDigest: sdk.String("deserunt"),
                        ContentType: "magni",
                        S3URI: "nihil",
                    },
                },
            },
            ModelPackageDescription: sdk.String("voluptas"),
            ModelPackageGroupName: sdk.String("animi"),
            ModelPackageName: sdk.String("commodi"),
            SamplePayloadURL: sdk.String("alias"),
            SourceAlgorithmSpecification: &shared.SourceAlgorithmSpecification{
                SourceAlgorithms: []shared.SourceAlgorithm{
                    shared.SourceAlgorithm{
                        AlgorithmName: "aut",
                        ModelDataURL: sdk.String("dolore"),
                    },
                    shared.SourceAlgorithm{
                        AlgorithmName: "maxime",
                        ModelDataURL: sdk.String("aliquam"),
                    },
                    shared.SourceAlgorithm{
                        AlgorithmName: "iste",
                        ModelDataURL: sdk.String("ullam"),
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptas",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "illo",
                    Value: "nihil",
                },
                shared.Tag{
                    Key: "inventore",
                    Value: "libero",
                },
            },
            Task: sdk.String("ipsam"),
            ValidationSpecification: &shared.ModelPackageValidationSpecification{
                ValidationProfiles: []shared.ModelPackageValidationProfile{
                    shared.ModelPackageValidationProfile{
                        ProfileName: "cumque",
                        TransformJobDefinition: shared.TransformJobDefinition{
                            BatchStrategy: shared.BatchStrategyEnumMultiRecord.ToPointer(),
                            Environment: map[string]string{
                                "facere": "facilis",
                                "beatae": "cumque",
                                "delectus": "labore",
                            },
                            MaxConcurrentTransforms: sdk.Int64(712640),
                            MaxPayloadInMB: sdk.Int64(548256),
                            TransformInput: shared.TransformInput{
                                CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                                ContentType: sdk.String("atque"),
                                DataSource: shared.TransformDataSource{
                                    S3DataSource: shared.TransformS3DataSource{
                                        S3DataType: shared.S3DataTypeEnumAugmentedManifestFile,
                                        S3URI: "cum",
                                    },
                                },
                                SplitType: shared.SplitTypeEnumTfRecord.ToPointer(),
                            },
                            TransformOutput: shared.TransformOutput{
                                Accept: sdk.String("sapiente"),
                                AssembleWith: shared.AssemblyTypeEnumLine.ToPointer(),
                                KmsKeyID: sdk.String("incidunt"),
                                S3OutputPath: "quod",
                            },
                            TransformResources: shared.TransformResources{
                                InstanceCount: 793282,
                                InstanceType: shared.TransformInstanceTypeEnumMlM524xlarge,
                                VolumeKmsKeyID: sdk.String("id"),
                            },
                        },
                    },
                },
                ValidationRole: "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.CreateModelPackageXAmzTargetEnumSageMakerCreateModelPackage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelPackageOutput != nil {
        // handle response
    }
}
```

## CreateModelPackageGroup

Creates a model group. A model group contains a group of model versions.

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
    res, err := s.SDK.CreateModelPackageGroup(ctx, operations.CreateModelPackageGroupRequest{
        CreateModelPackageGroupInput: shared.CreateModelPackageGroupInput{
            ModelPackageGroupDescription: sdk.String("soluta"),
            ModelPackageGroupName: "fugit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eligendi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "veritatis",
                    Value: "aut",
                },
                shared.Tag{
                    Key: "laudantium",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "dolor",
                    Value: "voluptates",
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.CreateModelPackageGroupXAmzTargetEnumSageMakerCreateModelPackageGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelPackageGroupOutput != nil {
        // handle response
    }
}
```

## CreateModelQualityJobDefinition

Creates a definition for a job that monitors model quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.

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
    res, err := s.SDK.CreateModelQualityJobDefinition(ctx, operations.CreateModelQualityJobDefinitionRequest{
        CreateModelQualityJobDefinitionRequest: shared.CreateModelQualityJobDefinitionRequest{
            JobDefinitionName: "eum",
            JobResources: shared.MonitoringResources{
                ClusterConfig: shared.MonitoringClusterConfig{
                    InstanceCount: 444479,
                    InstanceType: shared.ProcessingInstanceTypeEnumMlC518xlarge,
                    VolumeKmsKeyID: sdk.String("blanditiis"),
                    VolumeSizeInGB: 470647,
                },
            },
            ModelQualityAppSpecification: shared.ModelQualityAppSpecification{
                ContainerArguments: []string{
                    "rerum",
                    "deserunt",
                    "atque",
                },
                ContainerEntrypoint: []string{
                    "atque",
                    "architecto",
                },
                Environment: map[string]string{
                    "enim": "rem",
                    "magni": "quae",
                    "quas": "placeat",
                },
                ImageURI: "enim",
                PostAnalyticsProcessorSourceURI: sdk.String("labore"),
                ProblemType: shared.MonitoringProblemTypeEnumRegression.ToPointer(),
                RecordPreprocessorSourceURI: sdk.String("saepe"),
            },
            ModelQualityBaselineConfig: &shared.ModelQualityBaselineConfig{
                BaseliningJobName: sdk.String("delectus"),
                ConstraintsResource: &shared.MonitoringConstraintsResource{
                    S3URI: sdk.String("officia"),
                },
            },
            ModelQualityJobInput: shared.ModelQualityJobInput{
                BatchTransformInput: &shared.BatchTransformInput{
                    DataCapturedDestinationS3URI: "natus",
                    DatasetFormat: shared.MonitoringDatasetFormat{
                        Csv: &shared.MonitoringCsvDatasetFormat{
                            Header: sdk.Bool(false),
                        },
                        JSON: &shared.MonitoringJSONDatasetFormat{
                            Line: sdk.Bool(false),
                        },
                        Parquet: map[string]interface{}{
                            "natus": "quaerat",
                            "doloribus": "quia",
                            "officiis": "mollitia",
                            "cumque": "quis",
                        },
                    },
                    EndTimeOffset: sdk.String("enim"),
                    FeaturesAttribute: sdk.String("eum"),
                    InferenceAttribute: sdk.String("nemo"),
                    LocalPath: "illum",
                    ProbabilityAttribute: sdk.String("nesciunt"),
                    ProbabilityThresholdAttribute: sdk.Float64(223.31),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                    StartTimeOffset: sdk.String("asperiores"),
                },
                EndpointInput: &shared.EndpointInput{
                    EndTimeOffset: sdk.String("recusandae"),
                    EndpointName: "voluptates",
                    FeaturesAttribute: sdk.String("praesentium"),
                    InferenceAttribute: sdk.String("dicta"),
                    LocalPath: "fugit",
                    ProbabilityAttribute: sdk.String("sit"),
                    ProbabilityThresholdAttribute: sdk.Float64(3962.34),
                    S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                    S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                    StartTimeOffset: sdk.String("deleniti"),
                },
                GroundTruthS3Input: shared.MonitoringGroundTruthS3Input{
                    S3URI: sdk.String("sunt"),
                },
            },
            ModelQualityJobOutputConfig: shared.MonitoringOutputConfig{
                KmsKeyID: sdk.String("nesciunt"),
                MonitoringOutputs: []shared.MonitoringOutput{
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "laborum",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                            S3URI: "deserunt",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "modi",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                            S3URI: "impedit",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "eius",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                            S3URI: "ipsa",
                        },
                    },
                    shared.MonitoringOutput{
                        S3Output: shared.MonitoringS3Output{
                            LocalPath: "at",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                            S3URI: "repellat",
                        },
                    },
                },
            },
            NetworkConfig: &shared.MonitoringNetworkConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "inventore",
                    },
                    Subnets: []string{
                        "fugit",
                    },
                },
            },
            RoleArn: "fuga",
            StoppingCondition: &shared.MonitoringStoppingCondition{
                MaxRuntimeInSeconds: 943103,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "architecto",
                },
            },
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateModelQualityJobDefinitionXAmzTargetEnumSageMakerCreateModelQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelQualityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateMonitoringSchedule

Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endpoint.

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
    res, err := s.SDK.CreateMonitoringSchedule(ctx, operations.CreateMonitoringScheduleRequest{
        CreateMonitoringScheduleRequest: shared.CreateMonitoringScheduleRequest{
            MonitoringScheduleConfig: shared.MonitoringScheduleConfig{
                MonitoringJobDefinition: &shared.MonitoringJobDefinition{
                    BaselineConfig: &shared.MonitoringBaselineConfig{
                        BaseliningJobName: sdk.String("numquam"),
                        ConstraintsResource: &shared.MonitoringConstraintsResource{
                            S3URI: sdk.String("optio"),
                        },
                        StatisticsResource: &shared.MonitoringStatisticsResource{
                            S3URI: sdk.String("nobis"),
                        },
                    },
                    Environment: map[string]string{
                        "repellat": "quae",
                        "deleniti": "expedita",
                    },
                    MonitoringAppSpecification: shared.MonitoringAppSpecification{
                        ContainerArguments: []string{
                            "excepturi",
                            "aliquid",
                            "sed",
                            "beatae",
                        },
                        ContainerEntrypoint: []string{
                            "ea",
                            "animi",
                            "dolore",
                        },
                        ImageURI: "tenetur",
                        PostAnalyticsProcessorSourceURI: sdk.String("dignissimos"),
                        RecordPreprocessorSourceURI: sdk.String("esse"),
                    },
                    MonitoringInputs: []shared.MonitoringInput{
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "laudantium",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "eveniet": "earum",
                                        "velit": "officiis",
                                    },
                                },
                                EndTimeOffset: sdk.String("eius"),
                                FeaturesAttribute: sdk.String("rerum"),
                                InferenceAttribute: sdk.String("itaque"),
                                LocalPath: "dignissimos",
                                ProbabilityAttribute: sdk.String("ipsam"),
                                ProbabilityThresholdAttribute: sdk.Float64(1316.87),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("quis"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("facilis"),
                                EndpointName: "ipsum",
                                FeaturesAttribute: sdk.String("ut"),
                                InferenceAttribute: sdk.String("quaerat"),
                                LocalPath: "architecto",
                                ProbabilityAttribute: sdk.String("praesentium"),
                                ProbabilityThresholdAttribute: sdk.Float64(9078.99),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("libero"),
                            },
                        },
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "iste",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "minus": "quos",
                                    },
                                },
                                EndTimeOffset: sdk.String("temporibus"),
                                FeaturesAttribute: sdk.String("sint"),
                                InferenceAttribute: sdk.String("iusto"),
                                LocalPath: "enim",
                                ProbabilityAttribute: sdk.String("accusamus"),
                                ProbabilityThresholdAttribute: sdk.Float64(444.67),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("tempora"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("quae"),
                                EndpointName: "omnis",
                                FeaturesAttribute: sdk.String("illum"),
                                InferenceAttribute: sdk.String("rem"),
                                LocalPath: "tenetur",
                                ProbabilityAttribute: sdk.String("deleniti"),
                                ProbabilityThresholdAttribute: sdk.Float64(2649.58),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("aliquam"),
                            },
                        },
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "labore",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "sequi": "saepe",
                                        "consequatur": "esse",
                                        "debitis": "facere",
                                        "quisquam": "cumque",
                                    },
                                },
                                EndTimeOffset: sdk.String("aliquam"),
                                FeaturesAttribute: sdk.String("dolorum"),
                                InferenceAttribute: sdk.String("deserunt"),
                                LocalPath: "ad",
                                ProbabilityAttribute: sdk.String("reiciendis"),
                                ProbabilityThresholdAttribute: sdk.Float64(1964.51),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("nobis"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("quibusdam"),
                                EndpointName: "omnis",
                                FeaturesAttribute: sdk.String("aut"),
                                InferenceAttribute: sdk.String("ipsam"),
                                LocalPath: "officia",
                                ProbabilityAttribute: sdk.String("cupiditate"),
                                ProbabilityThresholdAttribute: sdk.Float64(4428.73),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("accusantium"),
                            },
                        },
                    },
                    MonitoringOutputConfig: shared.MonitoringOutputConfig{
                        KmsKeyID: sdk.String("ad"),
                        MonitoringOutputs: []shared.MonitoringOutput{
                            shared.MonitoringOutput{
                                S3Output: shared.MonitoringS3Output{
                                    LocalPath: "molestiae",
                                    S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                                    S3URI: "laudantium",
                                },
                            },
                            shared.MonitoringOutput{
                                S3Output: shared.MonitoringS3Output{
                                    LocalPath: "sed",
                                    S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous.ToPointer(),
                                    S3URI: "iusto",
                                },
                            },
                        },
                    },
                    MonitoringResources: shared.MonitoringResources{
                        ClusterConfig: shared.MonitoringClusterConfig{
                            InstanceCount: 712893,
                            InstanceType: shared.ProcessingInstanceTypeEnumMlM410xlarge,
                            VolumeKmsKeyID: sdk.String("repellendus"),
                            VolumeSizeInGB: 199879,
                        },
                    },
                    NetworkConfig: &shared.NetworkConfig{
                        EnableInterContainerTrafficEncryption: sdk.Bool(false),
                        EnableNetworkIsolation: sdk.Bool(false),
                        VpcConfig: &shared.VpcConfig{
                            SecurityGroupIds: []string{
                                "sint",
                            },
                            Subnets: []string{
                                "esse",
                                "accusantium",
                            },
                        },
                    },
                    RoleArn: "distinctio",
                    StoppingCondition: &shared.MonitoringStoppingCondition{
                        MaxRuntimeInSeconds: 956545,
                    },
                },
                MonitoringJobDefinitionName: sdk.String("quam"),
                MonitoringType: shared.MonitoringTypeEnumModelBias.ToPointer(),
                ScheduleConfig: &shared.ScheduleConfig{
                    ScheduleExpression: "aliquam",
                },
            },
            MonitoringScheduleName: "delectus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "quod",
                    Value: "voluptatibus",
                },
                shared.Tag{
                    Key: "voluptas",
                    Value: "non",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateMonitoringScheduleXAmzTargetEnumSageMakerCreateMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitoringScheduleResponse != nil {
        // handle response
    }
}
```

## CreateNotebookInstance

<p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>

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
    res, err := s.SDK.CreateNotebookInstance(ctx, operations.CreateNotebookInstanceRequest{
        CreateNotebookInstanceInput: shared.CreateNotebookInstanceInput{
            AcceleratorTypes: []shared.NotebookInstanceAcceleratorTypeEnum{
                shared.NotebookInstanceAcceleratorTypeEnumMlEia2Xlarge,
                shared.NotebookInstanceAcceleratorTypeEnumMlEia2Large,
            },
            AdditionalCodeRepositories: []string{
                "laboriosam",
                "voluptatem",
                "optio",
                "sequi",
            },
            DefaultCodeRepository: sdk.String("sunt"),
            DirectInternetAccess: shared.DirectInternetAccessEnumEnabled.ToPointer(),
            InstanceMetadataServiceConfiguration: &shared.InstanceMetadataServiceConfiguration{
                MinimumInstanceMetadataServiceVersion: "voluptatibus",
            },
            InstanceType: shared.InstanceTypeEnumMlT2Xlarge,
            KmsKeyID: sdk.String("sed"),
            LifecycleConfigName: sdk.String("amet"),
            NotebookInstanceName: "rerum",
            PlatformIdentifier: sdk.String("in"),
            RoleArn: "nostrum",
            RootAccess: shared.RootAccessEnumDisabled.ToPointer(),
            SecurityGroupIds: []string{
                "dolor",
            },
            SubnetID: sdk.String("nisi"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "reiciendis",
                    Value: "itaque",
                },
                shared.Tag{
                    Key: "vitae",
                    Value: "est",
                },
            },
            VolumeSizeInGB: sdk.Int64(33093),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.CreateNotebookInstanceXAmzTargetEnumSageMakerCreateNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotebookInstanceOutput != nil {
        // handle response
    }
}
```

## CreateNotebookInstanceLifecycleConfig

<p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>

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
    res, err := s.SDK.CreateNotebookInstanceLifecycleConfig(ctx, operations.CreateNotebookInstanceLifecycleConfigRequest{
        CreateNotebookInstanceLifecycleConfigInput: shared.CreateNotebookInstanceLifecycleConfigInput{
            NotebookInstanceLifecycleConfigName: "sapiente",
            OnCreate: []shared.NotebookInstanceLifecycleHook{
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("similique"),
                },
            },
            OnStart: []shared.NotebookInstanceLifecycleHook{
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("provident"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerCreateNotebookInstanceLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotebookInstanceLifecycleConfigOutput != nil {
        // handle response
    }
}
```

## CreatePipeline

Creates a pipeline using a JSON pipeline definition.

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
    res, err := s.SDK.CreatePipeline(ctx, operations.CreatePipelineRequest{
        CreatePipelineRequest: shared.CreatePipelineRequest{
            ClientRequestToken: "labore",
            ParallelismConfiguration: &shared.ParallelismConfiguration{
                MaxParallelExecutionSteps: 710059,
            },
            PipelineDefinition: sdk.String("in"),
            PipelineDefinitionS3Location: &shared.PipelineDefinitionS3Location{
                Bucket: "quisquam",
                ObjectKey: "sunt",
                VersionID: sdk.String("enim"),
            },
            PipelineDescription: sdk.String("nulla"),
            PipelineDisplayName: sdk.String("maiores"),
            PipelineName: "distinctio",
            RoleArn: "mollitia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "et",
                },
                shared.Tag{
                    Key: "quas",
                    Value: "blanditiis",
                },
                shared.Tag{
                    Key: "cum",
                    Value: "dicta",
                },
                shared.Tag{
                    Key: "impedit",
                    Value: "tempora",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.CreatePipelineXAmzTargetEnumSageMakerCreatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineResponse != nil {
        // handle response
    }
}
```

## CreatePresignedDomainURL

<p>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. </p> <p>The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a> .</p> <note> <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>

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
    res, err := s.SDK.CreatePresignedDomainURL(ctx, operations.CreatePresignedDomainURLRequest{
        CreatePresignedDomainURLRequest: shared.CreatePresignedDomainURLRequest{
            DomainID: "eligendi",
            ExpiresInSeconds: sdk.Int64(923159),
            SessionExpirationDurationInSeconds: sdk.Int64(404643),
            SpaceName: sdk.String("beatae"),
            UserProfileName: "veritatis",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.CreatePresignedDomainURLXAmzTargetEnumSageMakerCreatePresignedDomainURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePresignedDomainURLResponse != nil {
        // handle response
    }
}
```

## CreatePresignedNotebookInstanceURL

<p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker console, when you choose <code>Open</code> next to a notebook instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>

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
    res, err := s.SDK.CreatePresignedNotebookInstanceURL(ctx, operations.CreatePresignedNotebookInstanceURLRequest{
        CreatePresignedNotebookInstanceURLInput: shared.CreatePresignedNotebookInstanceURLInput{
            NotebookInstanceName: "minus",
            SessionExpirationDurationInSeconds: sdk.Int64(717560),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.CreatePresignedNotebookInstanceURLXAmzTargetEnumSageMakerCreatePresignedNotebookInstanceURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePresignedNotebookInstanceURLOutput != nil {
        // handle response
    }
}
```

## CreateProcessingJob

Creates a processing job.

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
    res, err := s.SDK.CreateProcessingJob(ctx, operations.CreateProcessingJobRequest{
        CreateProcessingJobRequest: shared.CreateProcessingJobRequest{
            AppSpecification: shared.AppSpecification{
                ContainerArguments: []string{
                    "ipsum",
                    "ducimus",
                },
                ContainerEntrypoint: []string{
                    "rerum",
                    "deserunt",
                    "odit",
                },
                ImageURI: "ad",
            },
            Environment: map[string]string{
                "beatae": "iusto",
            },
            ExperimentConfig: &shared.ExperimentConfig{
                ExperimentName: sdk.String("esse"),
                RunName: sdk.String("magnam"),
                TrialComponentDisplayName: sdk.String("odio"),
                TrialName: sdk.String("nulla"),
            },
            NetworkConfig: &shared.NetworkConfig{
                EnableInterContainerTrafficEncryption: sdk.Bool(false),
                EnableNetworkIsolation: sdk.Bool(false),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "cupiditate",
                        "illo",
                        "exercitationem",
                        "laborum",
                    },
                    Subnets: []string{
                        "fugit",
                        "maxime",
                        "dolorum",
                        "repellat",
                    },
                },
            },
            ProcessingInputs: []shared.ProcessingInput{
                shared.ProcessingInput{
                    AppManaged: sdk.Bool(false),
                    DatasetDefinition: &shared.DatasetDefinition{
                        AthenaDatasetDefinition: &shared.AthenaDatasetDefinition{
                            Catalog: "illum",
                            Database: "quibusdam",
                            KmsKeyID: sdk.String("commodi"),
                            OutputCompression: shared.AthenaResultCompressionTypeEnumSnappy.ToPointer(),
                            OutputFormat: shared.AthenaResultFormatEnumParquet,
                            OutputS3URI: "consectetur",
                            QueryString: "temporibus",
                            WorkGroup: sdk.String("optio"),
                        },
                        DataDistributionType: shared.DataDistributionTypeEnumFullyReplicated.ToPointer(),
                        InputMode: shared.InputModeEnumFile.ToPointer(),
                        LocalPath: sdk.String("exercitationem"),
                        RedshiftDatasetDefinition: &shared.RedshiftDatasetDefinition{
                            ClusterID: "culpa",
                            ClusterRoleArn: "repudiandae",
                            Database: "aspernatur",
                            DbUser: "sapiente",
                            KmsKeyID: sdk.String("neque"),
                            OutputCompression: shared.RedshiftResultCompressionTypeEnumZstd.ToPointer(),
                            OutputFormat: shared.RedshiftResultFormatEnumParquet,
                            OutputS3URI: "harum",
                            QueryString: "ducimus",
                        },
                    },
                    InputName: "doloremque",
                    S3Input: &shared.ProcessingS3Input{
                        LocalPath: sdk.String("perferendis"),
                        S3CompressionType: shared.ProcessingS3CompressionTypeEnumGzip.ToPointer(),
                        S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                        S3DataType: shared.ProcessingS3DataTypeEnumS3Prefix,
                        S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                        S3URI: "quis",
                    },
                },
                shared.ProcessingInput{
                    AppManaged: sdk.Bool(false),
                    DatasetDefinition: &shared.DatasetDefinition{
                        AthenaDatasetDefinition: &shared.AthenaDatasetDefinition{
                            Catalog: "iure",
                            Database: "ab",
                            KmsKeyID: sdk.String("quaerat"),
                            OutputCompression: shared.AthenaResultCompressionTypeEnumGzip.ToPointer(),
                            OutputFormat: shared.AthenaResultFormatEnumTextfile,
                            OutputS3URI: "corporis",
                            QueryString: "est",
                            WorkGroup: sdk.String("iure"),
                        },
                        DataDistributionType: shared.DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                        InputMode: shared.InputModeEnumFile.ToPointer(),
                        LocalPath: sdk.String("laudantium"),
                        RedshiftDatasetDefinition: &shared.RedshiftDatasetDefinition{
                            ClusterID: "nam",
                            ClusterRoleArn: "nemo",
                            Database: "enim",
                            DbUser: "ipsam",
                            KmsKeyID: sdk.String("minima"),
                            OutputCompression: shared.RedshiftResultCompressionTypeEnumGzip.ToPointer(),
                            OutputFormat: shared.RedshiftResultFormatEnumParquet,
                            OutputS3URI: "corrupti",
                            QueryString: "doloremque",
                        },
                    },
                    InputName: "fugiat",
                    S3Input: &shared.ProcessingS3Input{
                        LocalPath: sdk.String("numquam"),
                        S3CompressionType: shared.ProcessingS3CompressionTypeEnumNone.ToPointer(),
                        S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                        S3DataType: shared.ProcessingS3DataTypeEnumS3Prefix,
                        S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                        S3URI: "porro",
                    },
                },
            },
            ProcessingJobName: "impedit",
            ProcessingOutputConfig: &shared.ProcessingOutputConfig{
                KmsKeyID: sdk.String("nisi"),
                Outputs: []shared.ProcessingOutput{
                    shared.ProcessingOutput{
                        AppManaged: sdk.Bool(false),
                        FeatureStoreOutput: &shared.ProcessingFeatureStoreOutput{
                            FeatureGroupName: "soluta",
                        },
                        OutputName: "fugiat",
                        S3Output: &shared.ProcessingS3Output{
                            LocalPath: "laboriosam",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob,
                            S3URI: "enim",
                        },
                    },
                    shared.ProcessingOutput{
                        AppManaged: sdk.Bool(false),
                        FeatureStoreOutput: &shared.ProcessingFeatureStoreOutput{
                            FeatureGroupName: "maiores",
                        },
                        OutputName: "consectetur",
                        S3Output: &shared.ProcessingS3Output{
                            LocalPath: "necessitatibus",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob,
                            S3URI: "cupiditate",
                        },
                    },
                    shared.ProcessingOutput{
                        AppManaged: sdk.Bool(false),
                        FeatureStoreOutput: &shared.ProcessingFeatureStoreOutput{
                            FeatureGroupName: "voluptatem",
                        },
                        OutputName: "provident",
                        S3Output: &shared.ProcessingS3Output{
                            LocalPath: "adipisci",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous,
                            S3URI: "magnam",
                        },
                    },
                    shared.ProcessingOutput{
                        AppManaged: sdk.Bool(false),
                        FeatureStoreOutput: &shared.ProcessingFeatureStoreOutput{
                            FeatureGroupName: "repellat",
                        },
                        OutputName: "omnis",
                        S3Output: &shared.ProcessingS3Output{
                            LocalPath: "explicabo",
                            S3UploadMode: shared.ProcessingS3UploadModeEnumContinuous,
                            S3URI: "cum",
                        },
                    },
                },
            },
            ProcessingResources: shared.ProcessingResources{
                ClusterConfig: shared.ProcessingClusterConfig{
                    InstanceCount: 663062,
                    InstanceType: shared.ProcessingInstanceTypeEnumMlR516xlarge,
                    VolumeKmsKeyID: sdk.String("fugit"),
                    VolumeSizeInGB: 373054,
                },
            },
            RoleArn: "nostrum",
            StoppingCondition: &shared.ProcessingStoppingCondition{
                MaxRuntimeInSeconds: 196852,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quasi",
                    Value: "error",
                },
                shared.Tag{
                    Key: "nobis",
                    Value: "tempora",
                },
                shared.Tag{
                    Key: "voluptate",
                    Value: "eius",
                },
            },
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.CreateProcessingJobXAmzTargetEnumSageMakerCreateProcessingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProcessingJobResponse != nil {
        // handle response
    }
}
```

## CreateProject

Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.

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
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        CreateProjectInput: shared.CreateProjectInput{
            ProjectDescription: sdk.String("corporis"),
            ProjectName: "ea",
            ServiceCatalogProvisioningDetails: shared.ServiceCatalogProvisioningDetails{
                PathID: sdk.String("eos"),
                ProductID: "aliquam",
                ProvisioningArtifactID: sdk.String("blanditiis"),
                ProvisioningParameters: []shared.ProvisioningParameter{
                    shared.ProvisioningParameter{
                        Key: sdk.String("maiores"),
                        Value: sdk.String("asperiores"),
                    },
                    shared.ProvisioningParameter{
                        Key: sdk.String("autem"),
                        Value: sdk.String("nesciunt"),
                    },
                    shared.ProvisioningParameter{
                        Key: sdk.String("cupiditate"),
                        Value: sdk.String("animi"),
                    },
                    shared.ProvisioningParameter{
                        Key: sdk.String("provident"),
                        Value: sdk.String("beatae"),
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "mollitia",
                    Value: "nam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.CreateProjectXAmzTargetEnumSageMakerCreateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectOutput != nil {
        // handle response
    }
}
```

## CreateSpace

Creates a space used for real time collaboration in a Domain.

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
    res, err := s.SDK.CreateSpace(ctx, operations.CreateSpaceRequest{
        CreateSpaceRequest: shared.CreateSpaceRequest{
            DomainID: "voluptate",
            SpaceName: "nisi",
            SpaceSettings: &shared.SpaceSettings{
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "provident",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "laboriosam",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG54xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("ab"),
                        SageMakerImageArn: sdk.String("itaque"),
                        SageMakerImageVersionArn: sdk.String("quisquam"),
                    },
                    LifecycleConfigArns: []string{
                        "alias",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "consequuntur",
                            ImageName: "vitae",
                            ImageVersionNumber: sdk.Int64(696828),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM58xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("amet"),
                        SageMakerImageArn: sdk.String("exercitationem"),
                        SageMakerImageVersionArn: sdk.String("illum"),
                    },
                    LifecycleConfigArns: []string{
                        "unde",
                        "similique",
                        "eligendi",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "amet",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "nobis",
                    Value: "asperiores",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "id",
                },
            },
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.CreateSpaceXAmzTargetEnumSageMakerCreateSpace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSpaceResponse != nil {
        // handle response
    }
}
```

## CreateStudioLifecycleConfig

Creates a new Studio Lifecycle Configuration.

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
    res, err := s.SDK.CreateStudioLifecycleConfig(ctx, operations.CreateStudioLifecycleConfigRequest{
        CreateStudioLifecycleConfigRequest: shared.CreateStudioLifecycleConfigRequest{
            StudioLifecycleConfigAppType: shared.StudioLifecycleConfigAppTypeEnumKernelGateway,
            StudioLifecycleConfigContent: "earum",
            StudioLifecycleConfigName: "doloremque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "alias",
                    Value: "doloremque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateStudioLifecycleConfigXAmzTargetEnumSageMakerCreateStudioLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStudioLifecycleConfigResponse != nil {
        // handle response
    }
}
```

## CreateTrainingJob

<p>Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.</p> </important> </li> <li> <p> <code>InputDataConfig</code> - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. </p> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot training job has to complete. </p> </li> <li> <p> <code>Environment</code> - The environment variables to set in the Docker container.</p> </li> <li> <p> <code>RetryStrategy</code> - The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p> </li> </ul> <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>

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
    res, err := s.SDK.CreateTrainingJob(ctx, operations.CreateTrainingJobRequest{
        CreateTrainingJobRequest: shared.CreateTrainingJobRequest{
            AlgorithmSpecification: shared.AlgorithmSpecification{
                AlgorithmName: sdk.String("a"),
                ContainerArguments: []string{
                    "veritatis",
                    "quod",
                    "a",
                },
                ContainerEntrypoint: []string{
                    "accusantium",
                },
                EnableSageMakerMetricsTimeSeries: sdk.Bool(false),
                MetricDefinitions: []shared.MetricDefinition{
                    shared.MetricDefinition{
                        Name: "Jimmie West",
                        Regex: "quod",
                    },
                    shared.MetricDefinition{
                        Name: "Dixie Wisozk",
                        Regex: "inventore",
                    },
                },
                TrainingImage: sdk.String("facere"),
                TrainingImageConfig: &shared.TrainingImageConfig{
                    TrainingRepositoryAccessMode: shared.TrainingRepositoryAccessModeEnumVpc,
                    TrainingRepositoryAuthConfig: &shared.TrainingRepositoryAuthConfig{
                        TrainingRepositoryCredentialsProviderArn: "fuga",
                    },
                },
                TrainingInputMode: shared.TrainingInputModeEnumPipe,
            },
            CheckpointConfig: &shared.CheckpointConfig{
                LocalPath: sdk.String("ex"),
                S3URI: "consectetur",
            },
            DebugHookConfig: &shared.DebugHookConfig{
                CollectionConfigurations: []shared.CollectionConfiguration{
                    shared.CollectionConfiguration{
                        CollectionName: sdk.String("sed"),
                        CollectionParameters: map[string]string{
                            "sequi": "eligendi",
                            "voluptatum": "perferendis",
                            "laborum": "omnis",
                        },
                    },
                    shared.CollectionConfiguration{
                        CollectionName: sdk.String("nihil"),
                        CollectionParameters: map[string]string{
                            "sapiente": "velit",
                            "adipisci": "non",
                            "optio": "illum",
                            "at": "tenetur",
                        },
                    },
                    shared.CollectionConfiguration{
                        CollectionName: sdk.String("molestias"),
                        CollectionParameters: map[string]string{
                            "esse": "laborum",
                            "perspiciatis": "voluptates",
                        },
                    },
                    shared.CollectionConfiguration{
                        CollectionName: sdk.String("eum"),
                        CollectionParameters: map[string]string{
                            "quas": "odio",
                        },
                    },
                },
                HookParameters: map[string]string{
                    "porro": "aliquid",
                    "mollitia": "quidem",
                },
                LocalPath: sdk.String("explicabo"),
                S3OutputPath: "et",
            },
            DebugRuleConfigurations: []shared.DebugRuleConfiguration{
                shared.DebugRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlM410xlarge.ToPointer(),
                    LocalPath: sdk.String("natus"),
                    RuleConfigurationName: "illum",
                    RuleEvaluatorImage: "a",
                    RuleParameters: map[string]string{
                        "unde": "ut",
                        "facere": "voluptas",
                        "doloribus": "recusandae",
                        "quisquam": "facere",
                    },
                    S3OutputPath: sdk.String("dignissimos"),
                    VolumeSizeInGB: sdk.Int64(614346),
                },
                shared.DebugRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlM5Xlarge.ToPointer(),
                    LocalPath: sdk.String("dolor"),
                    RuleConfigurationName: "sint",
                    RuleEvaluatorImage: "aperiam",
                    RuleParameters: map[string]string{
                        "eum": "laboriosam",
                    },
                    S3OutputPath: sdk.String("laborum"),
                    VolumeSizeInGB: sdk.Int64(422276),
                },
                shared.DebugRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlR516xlarge.ToPointer(),
                    LocalPath: sdk.String("explicabo"),
                    RuleConfigurationName: "fugiat",
                    RuleEvaluatorImage: "doloremque",
                    RuleParameters: map[string]string{
                        "alias": "velit",
                    },
                    S3OutputPath: sdk.String("ullam"),
                    VolumeSizeInGB: sdk.Int64(339094),
                },
                shared.DebugRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlC42xlarge.ToPointer(),
                    LocalPath: sdk.String("ratione"),
                    RuleConfigurationName: "quas",
                    RuleEvaluatorImage: "maxime",
                    RuleParameters: map[string]string{
                        "cumque": "doloremque",
                        "totam": "iure",
                        "maiores": "est",
                        "fugit": "veritatis",
                    },
                    S3OutputPath: sdk.String("necessitatibus"),
                    VolumeSizeInGB: sdk.Int64(611970),
                },
            },
            EnableInterContainerTrafficEncryption: sdk.Bool(false),
            EnableManagedSpotTraining: sdk.Bool(false),
            EnableNetworkIsolation: sdk.Bool(false),
            Environment: map[string]string{
                "ipsam": "consequuntur",
            },
            ExperimentConfig: &shared.ExperimentConfig{
                ExperimentName: sdk.String("cumque"),
                RunName: sdk.String("quidem"),
                TrialComponentDisplayName: sdk.String("non"),
                TrialName: sdk.String("beatae"),
            },
            HyperParameters: map[string]string{
                "molestias": "beatae",
            },
            InputDataConfig: []shared.Channel{
                shared.Channel{
                    ChannelName: "ducimus",
                    CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                    ContentType: sdk.String("molestias"),
                    DataSource: shared.DataSource{
                        FileSystemDataSource: &shared.FileSystemDataSource{
                            DirectoryPath: "necessitatibus",
                            FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                            FileSystemID: "impedit",
                            FileSystemType: shared.FileSystemTypeEnumFSxLustre,
                        },
                        S3DataSource: &shared.S3DataSource{
                            AttributeNames: []string{
                                "distinctio",
                                "voluptatem",
                                "non",
                                "quaerat",
                            },
                            InstanceGroupNames: []string{
                                "laudantium",
                            },
                            S3DataDistributionType: shared.S3DataDistributionEnumShardedByS3Key.ToPointer(),
                            S3DataType: shared.S3DataTypeEnumS3Prefix,
                            S3URI: "quibusdam",
                        },
                    },
                    InputMode: shared.TrainingInputModeEnumPipe.ToPointer(),
                    RecordWrapperType: shared.RecordWrapperEnumNone.ToPointer(),
                    ShuffleConfig: &shared.ShuffleConfig{
                        Seed: 307874,
                    },
                },
                shared.Channel{
                    ChannelName: "earum",
                    CompressionType: shared.CompressionTypeEnumGzip.ToPointer(),
                    ContentType: sdk.String("assumenda"),
                    DataSource: shared.DataSource{
                        FileSystemDataSource: &shared.FileSystemDataSource{
                            DirectoryPath: "dolore",
                            FileSystemAccessMode: shared.FileSystemAccessModeEnumRw,
                            FileSystemID: "ullam",
                            FileSystemType: shared.FileSystemTypeEnumFSxLustre,
                        },
                        S3DataSource: &shared.S3DataSource{
                            AttributeNames: []string{
                                "ex",
                            },
                            InstanceGroupNames: []string{
                                "dicta",
                                "quia",
                                "commodi",
                                "neque",
                            },
                            S3DataDistributionType: shared.S3DataDistributionEnumShardedByS3Key.ToPointer(),
                            S3DataType: shared.S3DataTypeEnumManifestFile,
                            S3URI: "rem",
                        },
                    },
                    InputMode: shared.TrainingInputModeEnumFastFile.ToPointer(),
                    RecordWrapperType: shared.RecordWrapperEnumRecordIo.ToPointer(),
                    ShuffleConfig: &shared.ShuffleConfig{
                        Seed: 206451,
                    },
                },
            },
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("corporis"),
                S3OutputPath: "quod",
            },
            ProfilerConfig: &shared.ProfilerConfig{
                DisableProfiler: sdk.Bool(false),
                ProfilingIntervalInMilliseconds: sdk.Int64(175803),
                ProfilingParameters: map[string]string{
                    "excepturi": "recusandae",
                    "quos": "dicta",
                    "sapiente": "ipsum",
                    "consequatur": "soluta",
                },
                S3OutputPath: sdk.String("necessitatibus"),
            },
            ProfilerRuleConfigurations: []shared.ProfilerRuleConfiguration{
                shared.ProfilerRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlG4dn4xlarge.ToPointer(),
                    LocalPath: sdk.String("labore"),
                    RuleConfigurationName: "adipisci",
                    RuleEvaluatorImage: "magni",
                    RuleParameters: map[string]string{
                        "dolores": "illum",
                    },
                    S3OutputPath: sdk.String("iusto"),
                    VolumeSizeInGB: sdk.Int64(168976),
                },
            },
            ResourceConfig: shared.ResourceConfig{
                InstanceCount: sdk.Int64(109683),
                InstanceGroups: []shared.InstanceGroup{
                    shared.InstanceGroup{
                        InstanceCount: 321697,
                        InstanceGroupName: "voluptate",
                        InstanceType: shared.TrainingInstanceTypeEnumMlC48xlarge,
                    },
                    shared.InstanceGroup{
                        InstanceCount: 324999,
                        InstanceGroupName: "sit",
                        InstanceType: shared.TrainingInstanceTypeEnumMlC48xlarge,
                    },
                },
                InstanceType: shared.TrainingInstanceTypeEnumMlC44xlarge.ToPointer(),
                KeepAlivePeriodInSeconds: sdk.Int64(311247),
                VolumeKmsKeyID: sdk.String("quasi"),
                VolumeSizeInGB: 525223,
            },
            RetryStrategy: &shared.RetryStrategy{
                MaximumRetryAttempts: 493579,
            },
            RoleArn: "doloremque",
            StoppingCondition: shared.StoppingCondition{
                MaxRuntimeInSeconds: sdk.Int64(825739),
                MaxWaitTimeInSeconds: sdk.Int64(590969),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "inventore",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "repellendus",
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: "adipisci",
                },
            },
            TensorBoardOutputConfig: &shared.TensorBoardOutputConfig{
                LocalPath: sdk.String("doloremque"),
                S3OutputPath: "optio",
            },
            TrainingJobName: "tempora",
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "cumque",
                    "maxime",
                    "et",
                    "beatae",
                },
                Subnets: []string{
                    "consequatur",
                    "quos",
                    "ratione",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.CreateTrainingJobXAmzTargetEnumSageMakerCreateTrainingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrainingJobResponse != nil {
        // handle response
    }
}
```

## CreateTransformJob

<p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>

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
    res, err := s.SDK.CreateTransformJob(ctx, operations.CreateTransformJobRequest{
        CreateTransformJobRequest: shared.CreateTransformJobRequest{
            BatchStrategy: shared.BatchStrategyEnumSingleRecord.ToPointer(),
            DataCaptureConfig: &shared.BatchDataCaptureConfig{
                DestinationS3URI: "laudantium",
                GenerateInferenceID: sdk.Bool(false),
                KmsKeyID: sdk.String("ullam"),
            },
            DataProcessing: &shared.DataProcessing{
                InputFilter: sdk.String("aut"),
                JoinSource: shared.JoinSourceEnumInput.ToPointer(),
                OutputFilter: sdk.String("officia"),
            },
            Environment: map[string]string{
                "corporis": "accusamus",
                "iusto": "sapiente",
            },
            ExperimentConfig: &shared.ExperimentConfig{
                ExperimentName: sdk.String("esse"),
                RunName: sdk.String("neque"),
                TrialComponentDisplayName: sdk.String("quidem"),
                TrialName: sdk.String("quisquam"),
            },
            MaxConcurrentTransforms: sdk.Int64(506245),
            MaxPayloadInMB: sdk.Int64(273349),
            ModelClientConfig: &shared.ModelClientConfig{
                InvocationsMaxRetries: sdk.Int64(370052),
                InvocationsTimeoutInSeconds: sdk.Int64(887132),
            },
            ModelName: "sequi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatem",
                    Value: "est",
                },
            },
            TransformInput: shared.TransformInput{
                CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                ContentType: sdk.String("veritatis"),
                DataSource: shared.TransformDataSource{
                    S3DataSource: shared.TransformS3DataSource{
                        S3DataType: shared.S3DataTypeEnumS3Prefix,
                        S3URI: "voluptatibus",
                    },
                },
                SplitType: shared.SplitTypeEnumLine.ToPointer(),
            },
            TransformJobName: "rerum",
            TransformOutput: shared.TransformOutput{
                Accept: sdk.String("dolorum"),
                AssembleWith: shared.AssemblyTypeEnumLine.ToPointer(),
                KmsKeyID: sdk.String("earum"),
                S3OutputPath: "excepturi",
            },
            TransformResources: shared.TransformResources{
                InstanceCount: 256567,
                InstanceType: shared.TransformInstanceTypeEnumMlC5Xlarge,
                VolumeKmsKeyID: sdk.String("impedit"),
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.CreateTransformJobXAmzTargetEnumSageMakerCreateTransformJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTransformJobResponse != nil {
        // handle response
    }
}
```

## CreateTrial

<p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single SageMaker <i>experiment</i>.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API. To view a trial's properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API. To create a trial component, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> API.</p>

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
    res, err := s.SDK.CreateTrial(ctx, operations.CreateTrialRequest{
        CreateTrialRequest: shared.CreateTrialRequest{
            DisplayName: sdk.String("incidunt"),
            ExperimentName: "eos",
            MetadataProperties: &shared.MetadataProperties{
                CommitID: sdk.String("magnam"),
                GeneratedBy: sdk.String("dolores"),
                ProjectID: sdk.String("aliquid"),
                Repository: sdk.String("eum"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ad",
                    Value: "quos",
                },
                shared.Tag{
                    Key: "illo",
                    Value: "suscipit",
                },
            },
            TrialName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.CreateTrialXAmzTargetEnumSageMakerCreateTrial,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrialResponse != nil {
        // handle response
    }
}
```

## CreateTrialComponent

<p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search for the tags.</p>

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
    res, err := s.SDK.CreateTrialComponent(ctx, operations.CreateTrialComponentRequest{
        CreateTrialComponentRequest: shared.CreateTrialComponentRequest{
            DisplayName: sdk.String("illo"),
            EndTime: types.MustTimeFromString("2020-09-13T11:55:50.882Z"),
            InputArtifacts: map[string]shared.TrialComponentArtifact{
                "modi": shared.TrialComponentArtifact{
                    MediaType: sdk.String("cumque"),
                    Value: "ipsam",
                },
                "occaecati": shared.TrialComponentArtifact{
                    MediaType: sdk.String("ipsum"),
                    Value: "accusamus",
                },
                "quisquam": shared.TrialComponentArtifact{
                    MediaType: sdk.String("quasi"),
                    Value: "fugit",
                },
            },
            MetadataProperties: &shared.MetadataProperties{
                CommitID: sdk.String("quo"),
                GeneratedBy: sdk.String("temporibus"),
                ProjectID: sdk.String("mollitia"),
                Repository: sdk.String("id"),
            },
            OutputArtifacts: map[string]shared.TrialComponentArtifact{
                "ipsa": shared.TrialComponentArtifact{
                    MediaType: sdk.String("accusamus"),
                    Value: "placeat",
                },
                "quam": shared.TrialComponentArtifact{
                    MediaType: sdk.String("similique"),
                    Value: "delectus",
                },
                "saepe": shared.TrialComponentArtifact{
                    MediaType: sdk.String("facere"),
                    Value: "nobis",
                },
                "at": shared.TrialComponentArtifact{
                    MediaType: sdk.String("molestias"),
                    Value: "aut",
                },
            },
            Parameters: map[string]shared.TrialComponentParameterValue{
                "tenetur": shared.TrialComponentParameterValue{
                    NumberValue: sdk.Float64(2780.5),
                    StringValue: sdk.String("numquam"),
                },
                "corrupti": shared.TrialComponentParameterValue{
                    NumberValue: sdk.Float64(6302.37),
                    StringValue: sdk.String("dolore"),
                },
                "esse": shared.TrialComponentParameterValue{
                    NumberValue: sdk.Float64(9682.05),
                    StringValue: sdk.String("iste"),
                },
                "amet": shared.TrialComponentParameterValue{
                    NumberValue: sdk.Float64(5810.19),
                    StringValue: sdk.String("aut"),
                },
            },
            StartTime: types.MustTimeFromString("2022-01-09T04:32:04.690Z"),
            Status: &shared.TrialComponentStatus{
                Message: sdk.String("quos"),
                PrimaryStatus: shared.TrialComponentPrimaryStatusEnumFailed.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatem",
                    Value: "provident",
                },
                shared.Tag{
                    Key: "quas",
                    Value: "ipsum",
                },
                shared.Tag{
                    Key: "vero",
                    Value: "fuga",
                },
            },
            TrialComponentName: "facilis",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.CreateTrialComponentXAmzTargetEnumSageMakerCreateTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrialComponentResponse != nil {
        // handle response
    }
}
```

## CreateUserProfile

Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 

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
    res, err := s.SDK.CreateUserProfile(ctx, operations.CreateUserProfileRequest{
        CreateUserProfileRequest: shared.CreateUserProfileRequest{
            DomainID: "assumenda",
            SingleSignOnUserIdentifier: sdk.String("repellendus"),
            SingleSignOnUserValue: sdk.String("omnis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "odio",
                    Value: "voluptatibus",
                },
                shared.Tag{
                    Key: "aut",
                    Value: "quam",
                },
                shared.Tag{
                    Key: "omnis",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "asperiores",
                    Value: "modi",
                },
            },
            UserProfileName: "facere",
            UserSettings: &shared.UserSettings{
                CanvasAppSettings: &shared.CanvasAppSettings{
                    ModelRegisterSettings: &shared.ModelRegisterSettings{
                        CrossAccountModelRegisterRoleArn: sdk.String("neque"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                    TimeSeriesForecastingSettings: &shared.TimeSeriesForecastingSettings{
                        AmazonForecastRoleArn: sdk.String("in"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                },
                ExecutionRole: sdk.String("non"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "fugiat",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "soluta",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "ipsa",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "reiciendis",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM5dXlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("vero"),
                        SageMakerImageArn: sdk.String("eos"),
                        SageMakerImageVersionArn: sdk.String("quas"),
                    },
                    LifecycleConfigArns: []string{
                        "architecto",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "iusto",
                            ImageName: "fugiat",
                            ImageVersionNumber: sdk.Int64(313695),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "iure",
                            ImageName: "laudantium",
                            ImageVersionNumber: sdk.Int64(265303),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "magnam",
                            ImageName: "accusamus",
                            ImageVersionNumber: sdk.Int64(861823),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG516xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("quibusdam"),
                        SageMakerImageArn: sdk.String("praesentium"),
                        SageMakerImageVersionArn: sdk.String("enim"),
                    },
                    LifecycleConfigArns: []string{
                        "unde",
                        "quae",
                        "eum",
                    },
                },
                RSessionAppSettings: &shared.RSessionAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "eveniet",
                            ImageName: "laboriosam",
                            ImageVersionNumber: sdk.Int64(187361),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "blanditiis",
                            ImageName: "quidem",
                            ImageVersionNumber: sdk.Int64(848649),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG548xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("placeat"),
                        SageMakerImageArn: sdk.String("dolores"),
                        SageMakerImageVersionArn: sdk.String("consequatur"),
                    },
                },
                RStudioServerProAppSettings: &shared.RStudioServerProAppSettings{
                    AccessStatus: shared.RStudioServerProAccessStatusEnumEnabled.ToPointer(),
                    UserGroup: shared.RStudioServerProUserGroupEnumRStudioAdmin.ToPointer(),
                },
                SecurityGroups: []string{
                    "voluptas",
                    "quo",
                    "laudantium",
                },
                SharingSettings: &shared.SharingSettings{
                    NotebookOutputOption: shared.NotebookOutputOptionEnumAllowed.ToPointer(),
                    S3KmsKeyID: sdk.String("omnis"),
                    S3OutputPath: sdk.String("omnis"),
                },
                TensorBoardAppSettings: &shared.TensorBoardAppSettings{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM5Xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("dolorem"),
                        SageMakerImageArn: sdk.String("quidem"),
                        SageMakerImageVersionArn: sdk.String("molestiae"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.CreateUserProfileXAmzTargetEnumSageMakerCreateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserProfileResponse != nil {
        // handle response
    }
}
```

## CreateWorkforce

<p>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API operation to delete the existing workforce and then use <code>CreateWorkforce</code> to create a new workforce.</p> <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in <code>CognitoConfig</code>. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html"> Create a Private Workforce (Amazon Cognito)</a>.</p> <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i> because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html"> Create a Private Workforce (OIDC IdP)</a>.</p>

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
    res, err := s.SDK.CreateWorkforce(ctx, operations.CreateWorkforceRequest{
        CreateWorkforceRequest: shared.CreateWorkforceRequest{
            CognitoConfig: &shared.CognitoConfig{
                ClientID: "reprehenderit",
                UserPool: "deserunt",
            },
            OidcConfig: &shared.OidcConfig{
                AuthorizationEndpoint: "itaque",
                ClientID: "et",
                ClientSecret: "eos",
                Issuer: "impedit",
                JwksURI: "ex",
                LogoutEndpoint: "praesentium",
                TokenEndpoint: "natus",
                UserInfoEndpoint: "vitae",
            },
            SourceIPConfig: &shared.SourceIPConfig{
                Cidrs: []string{
                    "laudantium",
                    "aspernatur",
                    "eligendi",
                    "repudiandae",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "inventore",
                    Value: "ullam",
                },
            },
            WorkforceName: "iusto",
            WorkforceVpcConfig: &shared.WorkforceVpcConfigRequest{
                SecurityGroupIds: []string{
                    "voluptate",
                },
                Subnets: []string{
                    "dolorem",
                },
                VpcID: sdk.String("eaque"),
            },
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.CreateWorkforceXAmzTargetEnumSageMakerCreateWorkforce,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkforceResponse != nil {
        // handle response
    }
}
```

## CreateWorkteam

<p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>

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
    res, err := s.SDK.CreateWorkteam(ctx, operations.CreateWorkteamRequest{
        CreateWorkteamRequest: shared.CreateWorkteamRequest{
            Description: "fuga",
            MemberDefinitions: []shared.MemberDefinition{
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "cupiditate",
                        UserGroup: "at",
                        UserPool: "doloribus",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "quam",
                            "exercitationem",
                            "voluptates",
                        },
                    },
                },
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "sequi",
                        UserGroup: "quis",
                        UserPool: "commodi",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "rem",
                            "aliquid",
                        },
                    },
                },
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "aperiam",
                        UserGroup: "perspiciatis",
                        UserPool: "fugit",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "unde",
                            "cumque",
                            "dolor",
                            "repellendus",
                        },
                    },
                },
            },
            NotificationConfiguration: &shared.NotificationConfiguration{
                NotificationTopicArn: sdk.String("temporibus"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "minima",
                    Value: "a",
                },
                shared.Tag{
                    Key: "beatae",
                    Value: "vitae",
                },
                shared.Tag{
                    Key: "veritatis",
                    Value: "facere",
                },
                shared.Tag{
                    Key: "earum",
                    Value: "laborum",
                },
            },
            WorkforceName: sdk.String("dicta"),
            WorkteamName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.CreateWorkteamXAmzTargetEnumSageMakerCreateWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkteamResponse != nil {
        // handle response
    }
}
```

## DeleteAction

Deletes an action.

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
    res, err := s.SDK.DeleteAction(ctx, operations.DeleteActionRequest{
        DeleteActionRequest: shared.DeleteActionRequest{
            ActionName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.DeleteActionXAmzTargetEnumSageMakerDeleteAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteActionResponse != nil {
        // handle response
    }
}
```

## DeleteAlgorithm

Removes the specified algorithm from your account.

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
    res, err := s.SDK.DeleteAlgorithm(ctx, operations.DeleteAlgorithmRequest{
        DeleteAlgorithmInput: shared.DeleteAlgorithmInput{
            AlgorithmName: "quia",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteAlgorithmXAmzTargetEnumSageMakerDeleteAlgorithm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteApp

Used to stop and delete an app.

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
    res, err := s.SDK.DeleteApp(ctx, operations.DeleteAppRequest{
        DeleteAppRequest: shared.DeleteAppRequest{
            AppName: "eligendi",
            AppType: shared.AppTypeEnumJupyterServer,
            DomainID: "possimus",
            SpaceName: sdk.String("distinctio"),
            UserProfileName: sdk.String("distinctio"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DeleteAppXAmzTargetEnumSageMakerDeleteApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAppImageConfig

Deletes an AppImageConfig.

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
    res, err := s.SDK.DeleteAppImageConfig(ctx, operations.DeleteAppImageConfigRequest{
        DeleteAppImageConfigRequest: shared.DeleteAppImageConfigRequest{
            AppImageConfigName: "doloremque",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteAppImageConfigXAmzTargetEnumSageMakerDeleteAppImageConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteArtifact

Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be specified.

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
    res, err := s.SDK.DeleteArtifact(ctx, operations.DeleteArtifactRequest{
        DeleteArtifactRequest: shared.DeleteArtifactRequest{
            ArtifactArn: sdk.String("ab"),
            Source: &shared.ArtifactSource{
                SourceTypes: []shared.ArtifactSourceType{
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumS3ETag,
                        Value: "rerum",
                    },
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumCustom,
                        Value: "ab",
                    },
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumS3ETag,
                        Value: "blanditiis",
                    },
                    shared.ArtifactSourceType{
                        SourceIDType: shared.ArtifactSourceIDTypeEnumCustom,
                        Value: "labore",
                    },
                },
                SourceURI: "impedit",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DeleteArtifactXAmzTargetEnumSageMakerDeleteArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteArtifactResponse != nil {
        // handle response
    }
}
```

## DeleteAssociation

Deletes an association.

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
    res, err := s.SDK.DeleteAssociation(ctx, operations.DeleteAssociationRequest{
        DeleteAssociationRequest: shared.DeleteAssociationRequest{
            DestinationArn: "itaque",
            SourceArn: "fuga",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.DeleteAssociationXAmzTargetEnumSageMakerDeleteAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssociationResponse != nil {
        // handle response
    }
}
```

## DeleteCodeRepository

Deletes the specified Git repository from your account.

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
    res, err := s.SDK.DeleteCodeRepository(ctx, operations.DeleteCodeRepositoryRequest{
        DeleteCodeRepositoryInput: shared.DeleteCodeRepositoryInput{
            CodeRepositoryName: "sint",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteCodeRepositoryXAmzTargetEnumSageMakerDeleteCodeRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteContext

Deletes an context.

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
    res, err := s.SDK.DeleteContext(ctx, operations.DeleteContextRequest{
        DeleteContextRequest: shared.DeleteContextRequest{
            ContextName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DeleteContextXAmzTargetEnumSageMakerDeleteContext,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContextResponse != nil {
        // handle response
    }
}
```

## DeleteDataQualityJobDefinition

Deletes a data quality monitoring job definition.

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
    res, err := s.SDK.DeleteDataQualityJobDefinition(ctx, operations.DeleteDataQualityJobDefinitionRequest{
        DeleteDataQualityJobDefinitionRequest: shared.DeleteDataQualityJobDefinitionRequest{
            JobDefinitionName: "in",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.DeleteDataQualityJobDefinitionXAmzTargetEnumSageMakerDeleteDataQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeviceFleet

Deletes a fleet.

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
    res, err := s.SDK.DeleteDeviceFleet(ctx, operations.DeleteDeviceFleetRequest{
        DeleteDeviceFleetRequest: shared.DeleteDeviceFleetRequest{
            DeviceFleetName: "officiis",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteDeviceFleetXAmzTargetEnumSageMakerDeleteDeviceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDomain

Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 

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
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        DeleteDomainRequest: shared.DeleteDomainRequest{
            DomainID: "esse",
            RetentionPolicy: &shared.RetentionPolicy{
                HomeEfsFileSystem: shared.RetentionTypeEnumDelete.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DeleteDomainXAmzTargetEnumSageMakerDeleteDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEdgeDeploymentPlan

Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.

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
    res, err := s.SDK.DeleteEdgeDeploymentPlan(ctx, operations.DeleteEdgeDeploymentPlanRequest{
        DeleteEdgeDeploymentPlanRequest: shared.DeleteEdgeDeploymentPlanRequest{
            EdgeDeploymentPlanName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DeleteEdgeDeploymentPlanXAmzTargetEnumSageMakerDeleteEdgeDeploymentPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEdgeDeploymentStage

Delete a stage in an edge deployment plan if (and only if) the stage is inactive.

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
    res, err := s.SDK.DeleteEdgeDeploymentStage(ctx, operations.DeleteEdgeDeploymentStageRequest{
        DeleteEdgeDeploymentStageRequest: shared.DeleteEdgeDeploymentStageRequest{
            EdgeDeploymentPlanName: "explicabo",
            StageName: "consequatur",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.DeleteEdgeDeploymentStageXAmzTargetEnumSageMakerDeleteEdgeDeploymentStage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEndpoint

<p>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p> <p>When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html#sagemaker-CreateModel-request-ExecutionRoleArn">ExecutionRoleArn</a> </code>, otherwise SageMaker cannot delete these resources.</p>

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
    res, err := s.SDK.DeleteEndpoint(ctx, operations.DeleteEndpointRequest{
        DeleteEndpointInput: shared.DeleteEndpointInput{
            EndpointName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.DeleteEndpointXAmzTargetEnumSageMakerDeleteEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEndpointConfig

<p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>

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
    res, err := s.SDK.DeleteEndpointConfig(ctx, operations.DeleteEndpointConfigRequest{
        DeleteEndpointConfigInput: shared.DeleteEndpointConfigInput{
            EndpointConfigName: "sunt",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DeleteEndpointConfigXAmzTargetEnumSageMakerDeleteEndpointConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteExperiment

Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html">ListTrials</a> API to get a list of the trials associated with the experiment.

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
    res, err := s.SDK.DeleteExperiment(ctx, operations.DeleteExperimentRequest{
        DeleteExperimentRequest: shared.DeleteExperimentRequest{
            ExperimentName: "magnam",
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DeleteExperimentXAmzTargetEnumSageMakerDeleteExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteExperimentResponse != nil {
        // handle response
    }
}
```

## DeleteFeatureGroup

<p>Delete the <code>FeatureGroup</code> and any data that was written to the <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p> <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your <code>OfflineStore</code> are not deleted. </p>

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
    res, err := s.SDK.DeleteFeatureGroup(ctx, operations.DeleteFeatureGroupRequest{
        DeleteFeatureGroupRequest: shared.DeleteFeatureGroupRequest{
            FeatureGroupName: "porro",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.DeleteFeatureGroupXAmzTargetEnumSageMakerDeleteFeatureGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFlowDefinition

Deletes the specified flow definition.

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
    res, err := s.SDK.DeleteFlowDefinition(ctx, operations.DeleteFlowDefinitionRequest{
        DeleteFlowDefinitionRequest: shared.DeleteFlowDefinitionRequest{
            FlowDefinitionName: "sed",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.DeleteFlowDefinitionXAmzTargetEnumSageMakerDeleteFlowDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFlowDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteHub

<p>Delete a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.DeleteHub(ctx, operations.DeleteHubRequest{
        DeleteHubRequest: shared.DeleteHubRequest{
            HubName: "hic",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.DeleteHubXAmzTargetEnumSageMakerDeleteHub,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHubContent

<p>Delete the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.DeleteHubContent(ctx, operations.DeleteHubContentRequest{
        DeleteHubContentRequest: shared.DeleteHubContentRequest{
            HubContentName: "alias",
            HubContentType: shared.HubContentTypeEnumNotebook,
            HubContentVersion: "quos",
            HubName: "numquam",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.DeleteHubContentXAmzTargetEnumSageMakerDeleteHubContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHumanTaskUI

<p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListHumanTaskUis.html">ListHumanTaskUis</a>. When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>

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
    res, err := s.SDK.DeleteHumanTaskUI(ctx, operations.DeleteHumanTaskUIRequest{
        DeleteHumanTaskUIRequest: shared.DeleteHumanTaskUIRequest{
            HumanTaskUIName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.DeleteHumanTaskUIXAmzTargetEnumSageMakerDeleteHumanTaskUI,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHumanTaskUIResponse != nil {
        // handle response
    }
}
```

## DeleteImage

Deletes a SageMaker image and all versions of the image. The container images aren't deleted.

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
    res, err := s.SDK.DeleteImage(ctx, operations.DeleteImageRequest{
        DeleteImageRequest: shared.DeleteImageRequest{
            ImageName: "autem",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DeleteImageXAmzTargetEnumSageMakerDeleteImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageResponse != nil {
        // handle response
    }
}
```

## DeleteImageVersion

Deletes a version of a SageMaker image. The container image the version represents isn't deleted.

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
    res, err := s.SDK.DeleteImageVersion(ctx, operations.DeleteImageVersionRequest{
        DeleteImageVersionRequest: shared.DeleteImageVersionRequest{
            Alias: sdk.String("excepturi"),
            ImageName: "natus",
            Version: sdk.Int64(536456),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DeleteImageVersionXAmzTargetEnumSageMakerDeleteImageVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageVersionResponse != nil {
        // handle response
    }
}
```

## DeleteInferenceExperiment

<p>Deletes an inference experiment.</p> <note> <p> This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment. </p> </note>

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
    res, err := s.SDK.DeleteInferenceExperiment(ctx, operations.DeleteInferenceExperimentRequest{
        DeleteInferenceExperimentRequest: shared.DeleteInferenceExperimentRequest{
            Name: "Alfonso Berge",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteInferenceExperimentXAmzTargetEnumSageMakerDeleteInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## DeleteModel

Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 

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
    res, err := s.SDK.DeleteModel(ctx, operations.DeleteModelRequest{
        DeleteModelInput: shared.DeleteModelInput{
            ModelName: "sed",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DeleteModelXAmzTargetEnumSageMakerDeleteModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelBiasJobDefinition

Deletes an Amazon SageMaker model bias job definition.

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
    res, err := s.SDK.DeleteModelBiasJobDefinition(ctx, operations.DeleteModelBiasJobDefinitionRequest{
        DeleteModelBiasJobDefinitionRequest: shared.DeleteModelBiasJobDefinitionRequest{
            JobDefinitionName: "nemo",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DeleteModelBiasJobDefinitionXAmzTargetEnumSageMakerDeleteModelBiasJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelCard

Deletes an Amazon SageMaker Model Card.

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
    res, err := s.SDK.DeleteModelCard(ctx, operations.DeleteModelCardRequest{
        DeleteModelCardRequest: shared.DeleteModelCardRequest{
            ModelCardName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DeleteModelCardXAmzTargetEnumSageMakerDeleteModelCard,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelExplainabilityJobDefinition

Deletes an Amazon SageMaker model explainability job definition.

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
    res, err := s.SDK.DeleteModelExplainabilityJobDefinition(ctx, operations.DeleteModelExplainabilityJobDefinitionRequest{
        DeleteModelExplainabilityJobDefinitionRequest: shared.DeleteModelExplainabilityJobDefinitionRequest{
            JobDefinitionName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DeleteModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerDeleteModelExplainabilityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelPackage

<p>Deletes a model package.</p> <p>A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>

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
    res, err := s.SDK.DeleteModelPackage(ctx, operations.DeleteModelPackageRequest{
        DeleteModelPackageInput: shared.DeleteModelPackageInput{
            ModelPackageName: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DeleteModelPackageXAmzTargetEnumSageMakerDeleteModelPackage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelPackageGroup

Deletes the specified model group.

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
    res, err := s.SDK.DeleteModelPackageGroup(ctx, operations.DeleteModelPackageGroupRequest{
        DeleteModelPackageGroupInput: shared.DeleteModelPackageGroupInput{
            ModelPackageGroupName: "optio",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DeleteModelPackageGroupXAmzTargetEnumSageMakerDeleteModelPackageGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelPackageGroupPolicy

Deletes a model group resource policy.

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
    res, err := s.SDK.DeleteModelPackageGroupPolicy(ctx, operations.DeleteModelPackageGroupPolicyRequest{
        DeleteModelPackageGroupPolicyInput: shared.DeleteModelPackageGroupPolicyInput{
            ModelPackageGroupName: "vitae",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeleteModelPackageGroupPolicyXAmzTargetEnumSageMakerDeleteModelPackageGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModelQualityJobDefinition

Deletes the secified model quality monitoring job definition.

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
    res, err := s.SDK.DeleteModelQualityJobDefinition(ctx, operations.DeleteModelQualityJobDefinitionRequest{
        DeleteModelQualityJobDefinitionRequest: shared.DeleteModelQualityJobDefinitionRequest{
            JobDefinitionName: "quasi",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DeleteModelQualityJobDefinitionXAmzTargetEnumSageMakerDeleteModelQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMonitoringSchedule

Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 

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
    res, err := s.SDK.DeleteMonitoringSchedule(ctx, operations.DeleteMonitoringScheduleRequest{
        DeleteMonitoringScheduleRequest: shared.DeleteMonitoringScheduleRequest{
            MonitoringScheduleName: "est",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DeleteMonitoringScheduleXAmzTargetEnumSageMakerDeleteMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNotebookInstance

<p> Deletes an SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>

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
    res, err := s.SDK.DeleteNotebookInstance(ctx, operations.DeleteNotebookInstanceRequest{
        DeleteNotebookInstanceInput: shared.DeleteNotebookInstanceInput{
            NotebookInstanceName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteNotebookInstanceXAmzTargetEnumSageMakerDeleteNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNotebookInstanceLifecycleConfig

Deletes a notebook instance lifecycle configuration.

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
    res, err := s.SDK.DeleteNotebookInstanceLifecycleConfig(ctx, operations.DeleteNotebookInstanceLifecycleConfigRequest{
        DeleteNotebookInstanceLifecycleConfigInput: shared.DeleteNotebookInstanceLifecycleConfigInput{
            NotebookInstanceLifecycleConfigName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DeleteNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerDeleteNotebookInstanceLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePipeline

Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the pipeline are deleted.

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
    res, err := s.SDK.DeletePipeline(ctx, operations.DeletePipelineRequest{
        DeletePipelineRequest: shared.DeletePipelineRequest{
            ClientRequestToken: "libero",
            PipelineName: "nam",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DeletePipelineXAmzTargetEnumSageMakerDeletePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePipelineResponse != nil {
        // handle response
    }
}
```

## DeleteProject

Delete the specified project.

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
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        DeleteProjectInput: shared.DeleteProjectInput{
            ProjectName: "labore",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DeleteProjectXAmzTargetEnumSageMakerDeleteProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpace

Used to delete a space.

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
    res, err := s.SDK.DeleteSpace(ctx, operations.DeleteSpaceRequest{
        DeleteSpaceRequest: shared.DeleteSpaceRequest{
            DomainID: "aperiam",
            SpaceName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.DeleteSpaceXAmzTargetEnumSageMakerDeleteSpace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStudioLifecycleConfig

Deletes the Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.

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
    res, err := s.SDK.DeleteStudioLifecycleConfig(ctx, operations.DeleteStudioLifecycleConfigRequest{
        DeleteStudioLifecycleConfigRequest: shared.DeleteStudioLifecycleConfigRequest{
            StudioLifecycleConfigName: "impedit",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.DeleteStudioLifecycleConfigXAmzTargetEnumSageMakerDeleteStudioLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTags

<p>Deletes the specified tags from an SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note> <note> <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile launched before you called this API.</p> </note>

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
    res, err := s.SDK.DeleteTags(ctx, operations.DeleteTagsRequest{
        DeleteTagsInput: shared.DeleteTagsInput{
            ResourceArn: "ullam",
            TagKeys: []string{
                "consequuntur",
                "voluptas",
            },
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DeleteTagsXAmzTargetEnumSageMakerDeleteTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagsOutput != nil {
        // handle response
    }
}
```

## DeleteTrial

Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API to get the list of trial components.

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
    res, err := s.SDK.DeleteTrial(ctx, operations.DeleteTrialRequest{
        DeleteTrialRequest: shared.DeleteTrialRequest{
            TrialName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.DeleteTrialXAmzTargetEnumSageMakerDeleteTrial,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrialResponse != nil {
        // handle response
    }
}
```

## DeleteTrialComponent

Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.

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
    res, err := s.SDK.DeleteTrialComponent(ctx, operations.DeleteTrialComponentRequest{
        DeleteTrialComponentRequest: shared.DeleteTrialComponentRequest{
            TrialComponentName: "expedita",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.DeleteTrialComponentXAmzTargetEnumSageMakerDeleteTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrialComponentResponse != nil {
        // handle response
    }
}
```

## DeleteUserProfile

Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.

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
    res, err := s.SDK.DeleteUserProfile(ctx, operations.DeleteUserProfileRequest{
        DeleteUserProfileRequest: shared.DeleteUserProfileRequest{
            DomainID: "consequuntur",
            UserProfileName: "repellendus",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DeleteUserProfileXAmzTargetEnumSageMakerDeleteUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkforce

<p>Use this operation to delete a workforce.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateWorkforce.html">CreateWorkforce</a> to create a new workforce.</p> <important> <p>If a private workforce contains one or more work teams, you must use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a <code>ResourceInUse</code> error.</p> </important>

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
    res, err := s.SDK.DeleteWorkforce(ctx, operations.DeleteWorkforceRequest{
        DeleteWorkforceRequest: shared.DeleteWorkforceRequest{
            WorkforceName: "alias",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DeleteWorkforceXAmzTargetEnumSageMakerDeleteWorkforce,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkforceResponse != nil {
        // handle response
    }
}
```

## DeleteWorkteam

Deletes an existing work team. This operation can't be undone.

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
    res, err := s.SDK.DeleteWorkteam(ctx, operations.DeleteWorkteamRequest{
        DeleteWorkteamRequest: shared.DeleteWorkteamRequest{
            WorkteamName: "at",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteWorkteamXAmzTargetEnumSageMakerDeleteWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkteamResponse != nil {
        // handle response
    }
}
```

## DeregisterDevices

Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.

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
    res, err := s.SDK.DeregisterDevices(ctx, operations.DeregisterDevicesRequest{
        DeregisterDevicesRequest: shared.DeregisterDevicesRequest{
            DeviceFleetName: "placeat",
            DeviceNames: []string{
                "dolores",
                "dolore",
                "pariatur",
                "facilis",
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeregisterDevicesXAmzTargetEnumSageMakerDeregisterDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAction

Describes an action.

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
    res, err := s.SDK.DescribeAction(ctx, operations.DescribeActionRequest{
        DescribeActionRequest: shared.DescribeActionRequest{
            ActionName: "nostrum",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeActionXAmzTargetEnumSageMakerDescribeAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeActionResponse != nil {
        // handle response
    }
}
```

## DescribeAlgorithm

Returns a description of the specified algorithm that is in your account.

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
        DescribeAlgorithmInput: shared.DescribeAlgorithmInput{
            AlgorithmName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DescribeAlgorithmXAmzTargetEnumSageMakerDescribeAlgorithm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAlgorithmOutput != nil {
        // handle response
    }
}
```

## DescribeApp

Describes the app.

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
    res, err := s.SDK.DescribeApp(ctx, operations.DescribeAppRequest{
        DescribeAppRequest: shared.DescribeAppRequest{
            AppName: "amet",
            AppType: shared.AppTypeEnumRStudioServerPro,
            DomainID: "vel",
            SpaceName: sdk.String("necessitatibus"),
            UserProfileName: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DescribeAppXAmzTargetEnumSageMakerDescribeApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppResponse != nil {
        // handle response
    }
}
```

## DescribeAppImageConfig

Describes an AppImageConfig.

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
    res, err := s.SDK.DescribeAppImageConfig(ctx, operations.DescribeAppImageConfigRequest{
        DescribeAppImageConfigRequest: shared.DescribeAppImageConfigRequest{
            AppImageConfigName: "cum",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.DescribeAppImageConfigXAmzTargetEnumSageMakerDescribeAppImageConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppImageConfigResponse != nil {
        // handle response
    }
}
```

## DescribeArtifact

Describes an artifact.

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
    res, err := s.SDK.DescribeArtifact(ctx, operations.DescribeArtifactRequest{
        DescribeArtifactRequest: shared.DescribeArtifactRequest{
            ArtifactArn: "doloremque",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeArtifactXAmzTargetEnumSageMakerDescribeArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeArtifactResponse != nil {
        // handle response
    }
}
```

## DescribeAutoMLJob

Returns information about an Amazon SageMaker AutoML job.

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
    res, err := s.SDK.DescribeAutoMLJob(ctx, operations.DescribeAutoMLJobRequest{
        DescribeAutoMLJobRequest: shared.DescribeAutoMLJobRequest{
            AutoMLJobName: "eligendi",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DescribeAutoMLJobXAmzTargetEnumSageMakerDescribeAutoMlJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutoMLJobResponse != nil {
        // handle response
    }
}
```

## DescribeAutoMLJobV2

<p>Returns information about an Amazon SageMaker AutoML V2 job.</p> <note> <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI or an SDK results in an error.</p> </note>

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
    res, err := s.SDK.DescribeAutoMLJobV2(ctx, operations.DescribeAutoMLJobV2Request{
        DescribeAutoMLJobV2Request: shared.DescribeAutoMLJobV2Request{
            AutoMLJobName: "consectetur",
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DescribeAutoMLJobV2XAmzTargetEnumSageMakerDescribeAutoMlJobV2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutoMLJobV2Response != nil {
        // handle response
    }
}
```

## DescribeCodeRepository

Gets details about the specified Git repository.

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
    res, err := s.SDK.DescribeCodeRepository(ctx, operations.DescribeCodeRepositoryRequest{
        DescribeCodeRepositoryInput: shared.DescribeCodeRepositoryInput{
            CodeRepositoryName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DescribeCodeRepositoryXAmzTargetEnumSageMakerDescribeCodeRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCodeRepositoryOutput != nil {
        // handle response
    }
}
```

## DescribeCompilationJob

<p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>

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
    res, err := s.SDK.DescribeCompilationJob(ctx, operations.DescribeCompilationJobRequest{
        DescribeCompilationJobRequest: shared.DescribeCompilationJobRequest{
            CompilationJobName: "veniam",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.DescribeCompilationJobXAmzTargetEnumSageMakerDescribeCompilationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCompilationJobResponse != nil {
        // handle response
    }
}
```

## DescribeContext

Describes a context.

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
    res, err := s.SDK.DescribeContext(ctx, operations.DescribeContextRequest{
        DescribeContextRequest: shared.DescribeContextRequest{
            ContextName: "architecto",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeContextXAmzTargetEnumSageMakerDescribeContext,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContextResponse != nil {
        // handle response
    }
}
```

## DescribeDataQualityJobDefinition

Gets the details of a data quality monitoring job definition.

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
    res, err := s.SDK.DescribeDataQualityJobDefinition(ctx, operations.DescribeDataQualityJobDefinitionRequest{
        DescribeDataQualityJobDefinitionRequest: shared.DescribeDataQualityJobDefinitionRequest{
            JobDefinitionName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DescribeDataQualityJobDefinitionXAmzTargetEnumSageMakerDescribeDataQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataQualityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeDevice

Describes the device.

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
    res, err := s.SDK.DescribeDevice(ctx, operations.DescribeDeviceRequest{
        DescribeDeviceRequest: shared.DescribeDeviceRequest{
            DeviceFleetName: "eos",
            DeviceName: "alias",
            NextToken: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeDeviceXAmzTargetEnumSageMakerDescribeDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceResponse != nil {
        // handle response
    }
}
```

## DescribeDeviceFleet

A description of the fleet the device belongs to.

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
    res, err := s.SDK.DescribeDeviceFleet(ctx, operations.DescribeDeviceFleetRequest{
        DescribeDeviceFleetRequest: shared.DescribeDeviceFleetRequest{
            DeviceFleetName: "quam",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribeDeviceFleetXAmzTargetEnumSageMakerDescribeDeviceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceFleetResponse != nil {
        // handle response
    }
}
```

## DescribeDomain

The description of the domain.

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
    res, err := s.SDK.DescribeDomain(ctx, operations.DescribeDomainRequest{
        DescribeDomainRequest: shared.DescribeDomainRequest{
            DomainID: "dolor",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DescribeDomainXAmzTargetEnumSageMakerDescribeDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDomainResponse != nil {
        // handle response
    }
}
```

## DescribeEdgeDeploymentPlan

Describes an edge deployment plan with deployment status per stage.

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
    res, err := s.SDK.DescribeEdgeDeploymentPlan(ctx, operations.DescribeEdgeDeploymentPlanRequest{
        DescribeEdgeDeploymentPlanRequest: shared.DescribeEdgeDeploymentPlanRequest{
            EdgeDeploymentPlanName: "maiores",
            MaxResults: sdk.Int64(412024),
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.DescribeEdgeDeploymentPlanXAmzTargetEnumSageMakerDescribeEdgeDeploymentPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEdgeDeploymentPlanResponse != nil {
        // handle response
    }
}
```

## DescribeEdgePackagingJob

A description of edge packaging jobs.

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
    res, err := s.SDK.DescribeEdgePackagingJob(ctx, operations.DescribeEdgePackagingJobRequest{
        DescribeEdgePackagingJobRequest: shared.DescribeEdgePackagingJobRequest{
            EdgePackagingJobName: "provident",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeEdgePackagingJobXAmzTargetEnumSageMakerDescribeEdgePackagingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEdgePackagingJobResponse != nil {
        // handle response
    }
}
```

## DescribeEndpoint

Returns the description of an endpoint.

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
    res, err := s.SDK.DescribeEndpoint(ctx, operations.DescribeEndpointRequest{
        DescribeEndpointInput: shared.DescribeEndpointInput{
            EndpointName: "enim",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.DescribeEndpointXAmzTargetEnumSageMakerDescribeEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointOutput != nil {
        // handle response
    }
}
```

## DescribeEndpointConfig

Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.

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
    res, err := s.SDK.DescribeEndpointConfig(ctx, operations.DescribeEndpointConfigRequest{
        DescribeEndpointConfigInput: shared.DescribeEndpointConfigInput{
            EndpointConfigName: "repellendus",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeEndpointConfigXAmzTargetEnumSageMakerDescribeEndpointConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointConfigOutput != nil {
        // handle response
    }
}
```

## DescribeExperiment

Provides a list of an experiment's properties.

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
    res, err := s.SDK.DescribeExperiment(ctx, operations.DescribeExperimentRequest{
        DescribeExperimentRequest: shared.DescribeExperimentRequest{
            ExperimentName: "recusandae",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeExperimentXAmzTargetEnumSageMakerDescribeExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExperimentResponse != nil {
        // handle response
    }
}
```

## DescribeFeatureGroup

Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.

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
    res, err := s.SDK.DescribeFeatureGroup(ctx, operations.DescribeFeatureGroupRequest{
        DescribeFeatureGroupRequest: shared.DescribeFeatureGroupRequest{
            FeatureGroupName: "ullam",
            NextToken: sdk.String("atque"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DescribeFeatureGroupXAmzTargetEnumSageMakerDescribeFeatureGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFeatureGroupResponse != nil {
        // handle response
    }
}
```

## DescribeFeatureMetadata

Shows the metadata for a feature within a feature group.

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
    res, err := s.SDK.DescribeFeatureMetadata(ctx, operations.DescribeFeatureMetadataRequest{
        DescribeFeatureMetadataRequest: shared.DescribeFeatureMetadataRequest{
            FeatureGroupName: "animi",
            FeatureName: "labore",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.DescribeFeatureMetadataXAmzTargetEnumSageMakerDescribeFeatureMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFeatureMetadataResponse != nil {
        // handle response
    }
}
```

## DescribeFlowDefinition

Returns information about the specified flow definition.

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
    res, err := s.SDK.DescribeFlowDefinition(ctx, operations.DescribeFlowDefinitionRequest{
        DescribeFlowDefinitionRequest: shared.DescribeFlowDefinitionRequest{
            FlowDefinitionName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.DescribeFlowDefinitionXAmzTargetEnumSageMakerDescribeFlowDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFlowDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeHub

<p>Describe a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.DescribeHub(ctx, operations.DescribeHubRequest{
        DescribeHubRequest: shared.DescribeHubRequest{
            HubName: "culpa",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DescribeHubXAmzTargetEnumSageMakerDescribeHub,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHubResponse != nil {
        // handle response
    }
}
```

## DescribeHubContent

<p>Describe the content of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.DescribeHubContent(ctx, operations.DescribeHubContentRequest{
        DescribeHubContentRequest: shared.DescribeHubContentRequest{
            HubContentName: "culpa",
            HubContentType: shared.HubContentTypeEnumNotebook,
            HubContentVersion: sdk.String("a"),
            HubName: "ad",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeHubContentXAmzTargetEnumSageMakerDescribeHubContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHubContentResponse != nil {
        // handle response
    }
}
```

## DescribeHumanTaskUI

Returns information about the requested human task user interface (worker task template).

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
    res, err := s.SDK.DescribeHumanTaskUI(ctx, operations.DescribeHumanTaskUIRequest{
        DescribeHumanTaskUIRequest: shared.DescribeHumanTaskUIRequest{
            HumanTaskUIName: "possimus",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DescribeHumanTaskUIXAmzTargetEnumSageMakerDescribeHumanTaskUI,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHumanTaskUIResponse != nil {
        // handle response
    }
}
```

## DescribeHyperParameterTuningJob

Gets a description of a hyperparameter tuning job.

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
    res, err := s.SDK.DescribeHyperParameterTuningJob(ctx, operations.DescribeHyperParameterTuningJobRequest{
        DescribeHyperParameterTuningJobRequest: shared.DescribeHyperParameterTuningJobRequest{
            HyperParameterTuningJobName: "quisquam",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeHyperParameterTuningJobXAmzTargetEnumSageMakerDescribeHyperParameterTuningJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHyperParameterTuningJobResponse != nil {
        // handle response
    }
}
```

## DescribeImage

Describes a SageMaker image.

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
    res, err := s.SDK.DescribeImage(ctx, operations.DescribeImageRequest{
        DescribeImageRequest: shared.DescribeImageRequest{
            ImageName: "tempore",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.DescribeImageXAmzTargetEnumSageMakerDescribeImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageResponse != nil {
        // handle response
    }
}
```

## DescribeImageVersion

Describes a version of a SageMaker image.

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
    res, err := s.SDK.DescribeImageVersion(ctx, operations.DescribeImageVersionRequest{
        DescribeImageVersionRequest: shared.DescribeImageVersionRequest{
            Alias: sdk.String("sapiente"),
            ImageName: "deserunt",
            Version: sdk.Int64(221240),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribeImageVersionXAmzTargetEnumSageMakerDescribeImageVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageVersionResponse != nil {
        // handle response
    }
}
```

## DescribeInferenceExperiment

Returns details about an inference experiment.

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
    res, err := s.SDK.DescribeInferenceExperiment(ctx, operations.DescribeInferenceExperimentRequest{
        DescribeInferenceExperimentRequest: shared.DescribeInferenceExperimentRequest{
            Name: "Randal Fadel",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DescribeInferenceExperimentXAmzTargetEnumSageMakerDescribeInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## DescribeInferenceRecommendationsJob

Provides the results of the Inference Recommender job. One or more recommendation jobs are returned.

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
    res, err := s.SDK.DescribeInferenceRecommendationsJob(ctx, operations.DescribeInferenceRecommendationsJobRequest{
        DescribeInferenceRecommendationsJobRequest: shared.DescribeInferenceRecommendationsJobRequest{
            JobName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.DescribeInferenceRecommendationsJobXAmzTargetEnumSageMakerDescribeInferenceRecommendationsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInferenceRecommendationsJobResponse != nil {
        // handle response
    }
}
```

## DescribeLabelingJob

Gets information about a labeling job.

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
    res, err := s.SDK.DescribeLabelingJob(ctx, operations.DescribeLabelingJobRequest{
        DescribeLabelingJobRequest: shared.DescribeLabelingJobRequest{
            LabelingJobName: "animi",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeLabelingJobXAmzTargetEnumSageMakerDescribeLabelingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLabelingJobResponse != nil {
        // handle response
    }
}
```

## DescribeLineageGroup

Provides a list of properties for the requested lineage group. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.

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
    res, err := s.SDK.DescribeLineageGroup(ctx, operations.DescribeLineageGroupRequest{
        DescribeLineageGroupRequest: shared.DescribeLineageGroupRequest{
            LineageGroupName: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.DescribeLineageGroupXAmzTargetEnumSageMakerDescribeLineageGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLineageGroupResponse != nil {
        // handle response
    }
}
```

## DescribeModel

Describes a model that you created using the <code>CreateModel</code> API.

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
    res, err := s.SDK.DescribeModel(ctx, operations.DescribeModelRequest{
        DescribeModelInput: shared.DescribeModelInput{
            ModelName: "repellat",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeModelXAmzTargetEnumSageMakerDescribeModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelOutput != nil {
        // handle response
    }
}
```

## DescribeModelBiasJobDefinition

Returns a description of a model bias job definition.

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
    res, err := s.SDK.DescribeModelBiasJobDefinition(ctx, operations.DescribeModelBiasJobDefinitionRequest{
        DescribeModelBiasJobDefinitionRequest: shared.DescribeModelBiasJobDefinitionRequest{
            JobDefinitionName: "possimus",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DescribeModelBiasJobDefinitionXAmzTargetEnumSageMakerDescribeModelBiasJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelBiasJobDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeModelCard

Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.

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
    res, err := s.SDK.DescribeModelCard(ctx, operations.DescribeModelCardRequest{
        DescribeModelCardRequest: shared.DescribeModelCardRequest{
            ModelCardName: "quod",
            ModelCardVersion: sdk.Int64(123546),
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeModelCardXAmzTargetEnumSageMakerDescribeModelCard,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelCardResponse != nil {
        // handle response
    }
}
```

## DescribeModelCardExportJob

Describes an Amazon SageMaker Model Card export job.

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
    res, err := s.SDK.DescribeModelCardExportJob(ctx, operations.DescribeModelCardExportJobRequest{
        DescribeModelCardExportJobRequest: shared.DescribeModelCardExportJobRequest{
            ModelCardExportJobArn: "illo",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.DescribeModelCardExportJobXAmzTargetEnumSageMakerDescribeModelCardExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelCardExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeModelExplainabilityJobDefinition

Returns a description of a model explainability job definition.

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
    res, err := s.SDK.DescribeModelExplainabilityJobDefinition(ctx, operations.DescribeModelExplainabilityJobDefinitionRequest{
        DescribeModelExplainabilityJobDefinitionRequest: shared.DescribeModelExplainabilityJobDefinitionRequest{
            JobDefinitionName: "quo",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.DescribeModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerDescribeModelExplainabilityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelExplainabilityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeModelPackage

<p>Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace.</p> <p>To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</p>

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
    res, err := s.SDK.DescribeModelPackage(ctx, operations.DescribeModelPackageRequest{
        DescribeModelPackageInput: shared.DescribeModelPackageInput{
            ModelPackageName: "repellat",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DescribeModelPackageXAmzTargetEnumSageMakerDescribeModelPackage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelPackageOutput != nil {
        // handle response
    }
}
```

## DescribeModelPackageGroup

Gets a description for the specified model group.

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
    res, err := s.SDK.DescribeModelPackageGroup(ctx, operations.DescribeModelPackageGroupRequest{
        DescribeModelPackageGroupInput: shared.DescribeModelPackageGroupInput{
            ModelPackageGroupName: "ad",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.DescribeModelPackageGroupXAmzTargetEnumSageMakerDescribeModelPackageGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelPackageGroupOutput != nil {
        // handle response
    }
}
```

## DescribeModelQualityJobDefinition

Returns a description of a model quality job definition.

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
    res, err := s.SDK.DescribeModelQualityJobDefinition(ctx, operations.DescribeModelQualityJobDefinitionRequest{
        DescribeModelQualityJobDefinitionRequest: shared.DescribeModelQualityJobDefinitionRequest{
            JobDefinitionName: "quidem",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeModelQualityJobDefinitionXAmzTargetEnumSageMakerDescribeModelQualityJobDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelQualityJobDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeMonitoringSchedule

Describes the schedule for a monitoring job.

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
    res, err := s.SDK.DescribeMonitoringSchedule(ctx, operations.DescribeMonitoringScheduleRequest{
        DescribeMonitoringScheduleRequest: shared.DescribeMonitoringScheduleRequest{
            MonitoringScheduleName: "expedita",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DescribeMonitoringScheduleXAmzTargetEnumSageMakerDescribeMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMonitoringScheduleResponse != nil {
        // handle response
    }
}
```

## DescribeNotebookInstance

Returns information about a notebook instance.

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
    res, err := s.SDK.DescribeNotebookInstance(ctx, operations.DescribeNotebookInstanceRequest{
        DescribeNotebookInstanceInput: shared.DescribeNotebookInstanceInput{
            NotebookInstanceName: "ex",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.DescribeNotebookInstanceXAmzTargetEnumSageMakerDescribeNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotebookInstanceOutput != nil {
        // handle response
    }
}
```

## DescribeNotebookInstanceLifecycleConfig

<p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>

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
    res, err := s.SDK.DescribeNotebookInstanceLifecycleConfig(ctx, operations.DescribeNotebookInstanceLifecycleConfigRequest{
        DescribeNotebookInstanceLifecycleConfigInput: shared.DescribeNotebookInstanceLifecycleConfigInput{
            NotebookInstanceLifecycleConfigName: "veniam",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DescribeNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerDescribeNotebookInstanceLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotebookInstanceLifecycleConfigOutput != nil {
        // handle response
    }
}
```

## DescribePipeline

Describes the details of a pipeline.

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
    res, err := s.SDK.DescribePipeline(ctx, operations.DescribePipelineRequest{
        DescribePipelineRequest: shared.DescribePipelineRequest{
            PipelineName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DescribePipelineXAmzTargetEnumSageMakerDescribePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipelineResponse != nil {
        // handle response
    }
}
```

## DescribePipelineDefinitionForExecution

Describes the details of an execution's pipeline definition.

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
    res, err := s.SDK.DescribePipelineDefinitionForExecution(ctx, operations.DescribePipelineDefinitionForExecutionRequest{
        DescribePipelineDefinitionForExecutionRequest: shared.DescribePipelineDefinitionForExecutionRequest{
            PipelineExecutionArn: "possimus",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DescribePipelineDefinitionForExecutionXAmzTargetEnumSageMakerDescribePipelineDefinitionForExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipelineDefinitionForExecutionResponse != nil {
        // handle response
    }
}
```

## DescribePipelineExecution

Describes the details of a pipeline execution.

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
    res, err := s.SDK.DescribePipelineExecution(ctx, operations.DescribePipelineExecutionRequest{
        DescribePipelineExecutionRequest: shared.DescribePipelineExecutionRequest{
            PipelineExecutionArn: "quod",
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribePipelineExecutionXAmzTargetEnumSageMakerDescribePipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipelineExecutionResponse != nil {
        // handle response
    }
}
```

## DescribeProcessingJob

Returns a description of a processing job.

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
    res, err := s.SDK.DescribeProcessingJob(ctx, operations.DescribeProcessingJobRequest{
        DescribeProcessingJobRequest: shared.DescribeProcessingJobRequest{
            ProcessingJobName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DescribeProcessingJobXAmzTargetEnumSageMakerDescribeProcessingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProcessingJobResponse != nil {
        // handle response
    }
}
```

## DescribeProject

Describes the details of a project.

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
    res, err := s.SDK.DescribeProject(ctx, operations.DescribeProjectRequest{
        DescribeProjectInput: shared.DescribeProjectInput{
            ProjectName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DescribeProjectXAmzTargetEnumSageMakerDescribeProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProjectOutput != nil {
        // handle response
    }
}
```

## DescribeSpace

Describes the space.

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
    res, err := s.SDK.DescribeSpace(ctx, operations.DescribeSpaceRequest{
        DescribeSpaceRequest: shared.DescribeSpaceRequest{
            DomainID: "odio",
            SpaceName: "nostrum",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.DescribeSpaceXAmzTargetEnumSageMakerDescribeSpace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSpaceResponse != nil {
        // handle response
    }
}
```

## DescribeStudioLifecycleConfig

Describes the Studio Lifecycle Configuration.

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
    res, err := s.SDK.DescribeStudioLifecycleConfig(ctx, operations.DescribeStudioLifecycleConfigRequest{
        DescribeStudioLifecycleConfigRequest: shared.DescribeStudioLifecycleConfigRequest{
            StudioLifecycleConfigName: "nesciunt",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribeStudioLifecycleConfigXAmzTargetEnumSageMakerDescribeStudioLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStudioLifecycleConfigResponse != nil {
        // handle response
    }
}
```

## DescribeSubscribedWorkteam

Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.

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
    res, err := s.SDK.DescribeSubscribedWorkteam(ctx, operations.DescribeSubscribedWorkteamRequest{
        DescribeSubscribedWorkteamRequest: shared.DescribeSubscribedWorkteamRequest{
            WorkteamArn: "eligendi",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeSubscribedWorkteamXAmzTargetEnumSageMakerDescribeSubscribedWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSubscribedWorkteamResponse != nil {
        // handle response
    }
}
```

## DescribeTrainingJob

<p>Returns information about a training job. </p> <p>Some of the attributes below only appear if the training job successfully starts. If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and, depending on the <code>FailureReason</code>, attributes like <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>, <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be present in the response.</p>

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
    res, err := s.SDK.DescribeTrainingJob(ctx, operations.DescribeTrainingJobRequest{
        DescribeTrainingJobRequest: shared.DescribeTrainingJobRequest{
            TrainingJobName: "fugit",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeTrainingJobXAmzTargetEnumSageMakerDescribeTrainingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrainingJobResponse != nil {
        // handle response
    }
}
```

## DescribeTransformJob

Returns information about a transform job.

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
    res, err := s.SDK.DescribeTransformJob(ctx, operations.DescribeTransformJobRequest{
        DescribeTransformJobRequest: shared.DescribeTransformJobRequest{
            TransformJobName: "sapiente",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeTransformJobXAmzTargetEnumSageMakerDescribeTransformJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTransformJobResponse != nil {
        // handle response
    }
}
```

## DescribeTrial

Provides a list of a trial's properties.

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
    res, err := s.SDK.DescribeTrial(ctx, operations.DescribeTrialRequest{
        DescribeTrialRequest: shared.DescribeTrialRequest{
            TrialName: "nisi",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DescribeTrialXAmzTargetEnumSageMakerDescribeTrial,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrialResponse != nil {
        // handle response
    }
}
```

## DescribeTrialComponent

Provides a list of a trials component's properties.

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
    res, err := s.SDK.DescribeTrialComponent(ctx, operations.DescribeTrialComponentRequest{
        DescribeTrialComponentRequest: shared.DescribeTrialComponentRequest{
            TrialComponentName: "atque",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DescribeTrialComponentXAmzTargetEnumSageMakerDescribeTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrialComponentResponse != nil {
        // handle response
    }
}
```

## DescribeUserProfile

Describes a user profile. For more information, see <code>CreateUserProfile</code>.

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
    res, err := s.SDK.DescribeUserProfile(ctx, operations.DescribeUserProfileRequest{
        DescribeUserProfileRequest: shared.DescribeUserProfileRequest{
            DomainID: "at",
            UserProfileName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DescribeUserProfileXAmzTargetEnumSageMakerDescribeUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserProfileResponse != nil {
        // handle response
    }
}
```

## DescribeWorkforce

<p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>

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
    res, err := s.SDK.DescribeWorkforce(ctx, operations.DescribeWorkforceRequest{
        DescribeWorkforceRequest: shared.DescribeWorkforceRequest{
            WorkforceName: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.DescribeWorkforceXAmzTargetEnumSageMakerDescribeWorkforce,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkforceResponse != nil {
        // handle response
    }
}
```

## DescribeWorkteam

Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).

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
    res, err := s.SDK.DescribeWorkteam(ctx, operations.DescribeWorkteamRequest{
        DescribeWorkteamRequest: shared.DescribeWorkteamRequest{
            WorkteamName: "consectetur",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DescribeWorkteamXAmzTargetEnumSageMakerDescribeWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkteamResponse != nil {
        // handle response
    }
}
```

## DisableSagemakerServicecatalogPortfolio

Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableSagemakerServicecatalogPortfolio(ctx, operations.DisableSagemakerServicecatalogPortfolioRequest{
        RequestBody: map[string]interface{}{
            "possimus": "tempore",
            "asperiores": "quasi",
            "consequuntur": "nemo",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DisableSagemakerServicecatalogPortfolioXAmzTargetEnumSageMakerDisableSagemakerServicecatalogPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableSagemakerServicecatalogPortfolioOutput != nil {
        // handle response
    }
}
```

## DisassociateTrialComponent

<p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AssociateTrialComponent.html">AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>

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
    res, err := s.SDK.DisassociateTrialComponent(ctx, operations.DisassociateTrialComponentRequest{
        DisassociateTrialComponentRequest: shared.DisassociateTrialComponentRequest{
            TrialComponentName: "error",
            TrialName: "expedita",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DisassociateTrialComponentXAmzTargetEnumSageMakerDisassociateTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateTrialComponentResponse != nil {
        // handle response
    }
}
```

## EnableSagemakerServicecatalogPortfolio

Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableSagemakerServicecatalogPortfolio(ctx, operations.EnableSagemakerServicecatalogPortfolioRequest{
        RequestBody: map[string]interface{}{
            "eius": "error",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.EnableSagemakerServicecatalogPortfolioXAmzTargetEnumSageMakerEnableSagemakerServicecatalogPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableSagemakerServicecatalogPortfolioOutput != nil {
        // handle response
    }
}
```

## GetDeviceFleetReport

Describes a fleet.

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
    res, err := s.SDK.GetDeviceFleetReport(ctx, operations.GetDeviceFleetReportRequest{
        GetDeviceFleetReportRequest: shared.GetDeviceFleetReportRequest{
            DeviceFleetName: "cum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.GetDeviceFleetReportXAmzTargetEnumSageMakerGetDeviceFleetReport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceFleetReportResponse != nil {
        // handle response
    }
}
```

## GetLineageGroupPolicy

The resource policy for the lineage group.

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
    res, err := s.SDK.GetLineageGroupPolicy(ctx, operations.GetLineageGroupPolicyRequest{
        GetLineageGroupPolicyRequest: shared.GetLineageGroupPolicyRequest{
            LineageGroupName: "omnis",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.GetLineageGroupPolicyXAmzTargetEnumSageMakerGetLineageGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLineageGroupPolicyResponse != nil {
        // handle response
    }
}
```

## GetModelPackageGroupPolicy

Gets a resource policy that manages access for a model group. For information about resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.

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
    res, err := s.SDK.GetModelPackageGroupPolicy(ctx, operations.GetModelPackageGroupPolicyRequest{
        GetModelPackageGroupPolicyInput: shared.GetModelPackageGroupPolicyInput{
            ModelPackageGroupName: "cumque",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.GetModelPackageGroupPolicyXAmzTargetEnumSageMakerGetModelPackageGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModelPackageGroupPolicyOutput != nil {
        // handle response
    }
}
```

## GetSagemakerServicecatalogPortfolioStatus

Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSagemakerServicecatalogPortfolioStatus(ctx, operations.GetSagemakerServicecatalogPortfolioStatusRequest{
        RequestBody: map[string]interface{}{
            "iusto": "aliquid",
            "sint": "aliquid",
            "repellat": "sapiente",
            "consectetur": "eligendi",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnumSageMakerGetSagemakerServicecatalogPortfolioStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSagemakerServicecatalogPortfolioStatusOutput != nil {
        // handle response
    }
}
```

## GetSearchSuggestions

An auto-complete API for the search functionality in the SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.

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
    res, err := s.SDK.GetSearchSuggestions(ctx, operations.GetSearchSuggestionsRequest{
        GetSearchSuggestionsRequest: shared.GetSearchSuggestionsRequest{
            Resource: shared.ResourceTypeEnumExperimentTrialComponent,
            SuggestionQuery: &shared.SuggestionQuery{
                PropertyNameQuery: &shared.PropertyNameQuery{
                    PropertyNameHint: "corporis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.GetSearchSuggestionsXAmzTargetEnumSageMakerGetSearchSuggestions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearchSuggestionsResponse != nil {
        // handle response
    }
}
```

## ImportHubContent

<p>Import hub content.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.ImportHubContent(ctx, operations.ImportHubContentRequest{
        ImportHubContentRequest: shared.ImportHubContentRequest{
            DocumentSchemaVersion: "hic",
            HubContentDescription: sdk.String("praesentium"),
            HubContentDisplayName: sdk.String("libero"),
            HubContentDocument: "consequatur",
            HubContentMarkdown: sdk.String("totam"),
            HubContentName: "tempora",
            HubContentSearchKeywords: []string{
                "dolor",
                "sunt",
                "omnis",
                "quam",
            },
            HubContentType: shared.HubContentTypeEnumNotebook,
            HubContentVersion: sdk.String("dicta"),
            HubName: "excepturi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "odit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.ImportHubContentXAmzTargetEnumSageMakerImportHubContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportHubContentResponse != nil {
        // handle response
    }
}
```

## ListActions

Lists the actions in your account and their properties.

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
    res, err := s.SDK.ListActions(ctx, operations.ListActionsRequest{
        ListActionsRequest: shared.ListActionsRequest{
            ActionType: sdk.String("modi"),
            CreatedAfter: types.MustTimeFromString("2022-01-21T03:02:47.125Z"),
            CreatedBefore: types.MustTimeFromString("2022-03-10T20:18:58.815Z"),
            MaxResults: sdk.Int64(145973),
            NextToken: sdk.String("facere"),
            SortBy: shared.SortActionsByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            SourceURI: sdk.String("porro"),
        },
        MaxResults: sdk.String("labore"),
        NextToken: sdk.String("perspiciatis"),
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.ListActionsXAmzTargetEnumSageMakerListActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionsResponse != nil {
        // handle response
    }
}
```

## ListAlgorithms

Lists the machine learning algorithms that have been created.

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
    res, err := s.SDK.ListAlgorithms(ctx, operations.ListAlgorithmsRequest{
        ListAlgorithmsInput: shared.ListAlgorithmsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-04-06T09:55:55.525Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-06-03T09:21:56.039Z"),
            MaxResults: sdk.Int64(977472),
            NameContains: sdk.String("officiis"),
            NextToken: sdk.String("corporis"),
            SortBy: shared.AlgorithmSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.ListAlgorithmsXAmzTargetEnumSageMakerListAlgorithms,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlgorithmsOutput != nil {
        // handle response
    }
}
```

## ListAliases

Lists the aliases of a specified image or image version.

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
    res, err := s.SDK.ListAliases(ctx, operations.ListAliasesRequest{
        ListAliasesRequest: shared.ListAliasesRequest{
            Alias: sdk.String("velit"),
            ImageName: "voluptatum",
            MaxResults: sdk.Int64(471642),
            NextToken: sdk.String("neque"),
            Version: sdk.Int64(135775),
        },
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("corporis"),
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.ListAliasesXAmzTargetEnumSageMakerListAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAliasesResponse != nil {
        // handle response
    }
}
```

## ListAppImageConfigs

Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.

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
    res, err := s.SDK.ListAppImageConfigs(ctx, operations.ListAppImageConfigsRequest{
        ListAppImageConfigsRequest: shared.ListAppImageConfigsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-03-09T22:17:56.070Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-12-15T18:05:43.333Z"),
            MaxResults: sdk.Int64(30015),
            ModifiedTimeAfter: types.MustTimeFromString("2022-11-21T23:04:12.814Z"),
            ModifiedTimeBefore: types.MustTimeFromString("2022-04-20T18:52:30.171Z"),
            NameContains: sdk.String("ipsum"),
            NextToken: sdk.String("debitis"),
            SortBy: shared.AppImageConfigSortKeyEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("incidunt"),
        NextToken: sdk.String("ut"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.ListAppImageConfigsXAmzTargetEnumSageMakerListAppImageConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppImageConfigsResponse != nil {
        // handle response
    }
}
```

## ListApps

Lists apps.

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
    res, err := s.SDK.ListApps(ctx, operations.ListAppsRequest{
        ListAppsRequest: shared.ListAppsRequest{
            DomainIDEquals: sdk.String("assumenda"),
            MaxResults: sdk.Int64(763747),
            NextToken: sdk.String("ut"),
            SortBy: shared.AppSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            SpaceNameEquals: sdk.String("nihil"),
            UserProfileNameEquals: sdk.String("quam"),
        },
        MaxResults: sdk.String("assumenda"),
        NextToken: sdk.String("consequatur"),
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.ListAppsXAmzTargetEnumSageMakerListApps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsResponse != nil {
        // handle response
    }
}
```

## ListArtifacts

Lists the artifacts in your account and their properties.

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
    res, err := s.SDK.ListArtifacts(ctx, operations.ListArtifactsRequest{
        ListArtifactsRequest: shared.ListArtifactsRequest{
            ArtifactType: sdk.String("itaque"),
            CreatedAfter: types.MustTimeFromString("2020-09-05T15:07:10.628Z"),
            CreatedBefore: types.MustTimeFromString("2022-08-23T00:22:20.586Z"),
            MaxResults: sdk.Int64(772062),
            NextToken: sdk.String("eveniet"),
            SortBy: shared.SortArtifactsByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            SourceURI: sdk.String("dolore"),
        },
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("ea"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListArtifactsXAmzTargetEnumSageMakerListArtifacts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactsResponse != nil {
        // handle response
    }
}
```

## ListAssociations

Lists the associations in your account and their properties.

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
    res, err := s.SDK.ListAssociations(ctx, operations.ListAssociationsRequest{
        ListAssociationsRequest: shared.ListAssociationsRequest{
            AssociationType: shared.AssociationEdgeTypeEnumAssociatedWith.ToPointer(),
            CreatedAfter: types.MustTimeFromString("2022-04-26T15:14:21.697Z"),
            CreatedBefore: types.MustTimeFromString("2020-07-15T17:52:33.252Z"),
            DestinationArn: sdk.String("tenetur"),
            DestinationType: sdk.String("sed"),
            MaxResults: sdk.Int64(648182),
            NextToken: sdk.String("eligendi"),
            SortBy: shared.SortAssociationsByEnumDestinationType.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            SourceArn: sdk.String("corporis"),
            SourceType: sdk.String("quas"),
        },
        MaxResults: sdk.String("soluta"),
        NextToken: sdk.String("cupiditate"),
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.ListAssociationsXAmzTargetEnumSageMakerListAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociationsResponse != nil {
        // handle response
    }
}
```

## ListAutoMLJobs

Request a list of jobs.

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
    res, err := s.SDK.ListAutoMLJobs(ctx, operations.ListAutoMLJobsRequest{
        ListAutoMLJobsRequest: shared.ListAutoMLJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2020-10-30T21:31:51.670Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-06-15T17:31:08.491Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-06-25T09:45:59.184Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-11-26T08:22:25.392Z"),
            MaxResults: sdk.Int64(876262),
            NameContains: sdk.String("odio"),
            NextToken: sdk.String("numquam"),
            SortBy: shared.AutoMLSortByEnumName.ToPointer(),
            SortOrder: shared.AutoMLSortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.AutoMLJobStatusEnumStopped.ToPointer(),
        },
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.ListAutoMLJobsXAmzTargetEnumSageMakerListAutoMlJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAutoMLJobsResponse != nil {
        // handle response
    }
}
```

## ListCandidatesForAutoMLJob

List the candidates created for the job.

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
    res, err := s.SDK.ListCandidatesForAutoMLJob(ctx, operations.ListCandidatesForAutoMLJobRequest{
        ListCandidatesForAutoMLJobRequest: shared.ListCandidatesForAutoMLJobRequest{
            AutoMLJobName: "consequatur",
            CandidateNameEquals: sdk.String("vero"),
            MaxResults: sdk.Int64(663658),
            NextToken: sdk.String("error"),
            SortBy: shared.CandidateSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.AutoMLSortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.CandidateStatusEnumStopped.ToPointer(),
        },
        MaxResults: sdk.String("voluptas"),
        NextToken: sdk.String("sint"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListCandidatesForAutoMLJobXAmzTargetEnumSageMakerListCandidatesForAutoMlJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCandidatesForAutoMLJobResponse != nil {
        // handle response
    }
}
```

## ListCodeRepositories

Gets a list of the Git repositories in your account.

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
    res, err := s.SDK.ListCodeRepositories(ctx, operations.ListCodeRepositoriesRequest{
        ListCodeRepositoriesInput: shared.ListCodeRepositoriesInput{
            CreationTimeAfter: types.MustTimeFromString("2022-01-13T03:22:38.452Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-12-06T15:54:45.514Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-12-23T00:22:35.107Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-05-19T18:47:47.015Z"),
            MaxResults: sdk.Int64(29346),
            NameContains: sdk.String("tempora"),
            NextToken: sdk.String("occaecati"),
            SortBy: shared.CodeRepositorySortByEnumName.ToPointer(),
            SortOrder: shared.CodeRepositorySortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("ex"),
        NextToken: sdk.String("doloremque"),
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.ListCodeRepositoriesXAmzTargetEnumSageMakerListCodeRepositories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCodeRepositoriesOutput != nil {
        // handle response
    }
}
```

## ListCompilationJobs

<p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>.</p>

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
    res, err := s.SDK.ListCompilationJobs(ctx, operations.ListCompilationJobsRequest{
        ListCompilationJobsRequest: shared.ListCompilationJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2020-08-14T16:05:15.385Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-07-30T09:42:12.301Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-06-12T23:46:26.725Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-04-05T03:59:54.448Z"),
            MaxResults: sdk.Int64(945409),
            NameContains: sdk.String("necessitatibus"),
            NextToken: sdk.String("perspiciatis"),
            SortBy: shared.ListCompilationJobsSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.CompilationJobStatusEnumStarting.ToPointer(),
        },
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.ListCompilationJobsXAmzTargetEnumSageMakerListCompilationJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompilationJobsResponse != nil {
        // handle response
    }
}
```

## ListContexts

Lists the contexts in your account and their properties.

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
    res, err := s.SDK.ListContexts(ctx, operations.ListContextsRequest{
        ListContextsRequest: shared.ListContextsRequest{
            ContextType: sdk.String("est"),
            CreatedAfter: types.MustTimeFromString("2021-08-02T12:40:05.211Z"),
            CreatedBefore: types.MustTimeFromString("2022-04-19T15:30:32.385Z"),
            MaxResults: sdk.Int64(17548),
            NextToken: sdk.String("nam"),
            SortBy: shared.SortContextsByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            SourceURI: sdk.String("eos"),
        },
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("modi"),
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.ListContextsXAmzTargetEnumSageMakerListContexts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContextsResponse != nil {
        // handle response
    }
}
```

## ListDataQualityJobDefinitions

Lists the data quality job definitions in your account.

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
    res, err := s.SDK.ListDataQualityJobDefinitions(ctx, operations.ListDataQualityJobDefinitionsRequest{
        ListDataQualityJobDefinitionsRequest: shared.ListDataQualityJobDefinitionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-02-02T18:11:30.850Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-09-28T00:14:23.092Z"),
            EndpointName: sdk.String("ad"),
            MaxResults: sdk.Int64(154277),
            NameContains: sdk.String("quod"),
            NextToken: sdk.String("quaerat"),
            SortBy: shared.MonitoringJobDefinitionSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("explicabo"),
        NextToken: sdk.String("eligendi"),
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.ListDataQualityJobDefinitionsXAmzTargetEnumSageMakerListDataQualityJobDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataQualityJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListDeviceFleets

Returns a list of devices in the fleet.

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
    res, err := s.SDK.ListDeviceFleets(ctx, operations.ListDeviceFleetsRequest{
        ListDeviceFleetsRequest: shared.ListDeviceFleetsRequest{
            CreationTimeAfter: types.MustTimeFromString("2020-12-28T23:57:16.474Z"),
            CreationTimeBefore: types.MustTimeFromString("2020-04-23T23:49:24.056Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-10-21T08:52:32.010Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2021-12-09T22:19:55.347Z"),
            MaxResults: sdk.Int64(500692),
            NameContains: sdk.String("sapiente"),
            NextToken: sdk.String("ut"),
            SortBy: shared.ListDeviceFleetsSortByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("ut"),
        NextToken: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListDeviceFleetsXAmzTargetEnumSageMakerListDeviceFleets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceFleetsResponse != nil {
        // handle response
    }
}
```

## ListDevices

A list of devices.

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
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        ListDevicesRequest: shared.ListDevicesRequest{
            DeviceFleetName: sdk.String("quam"),
            LatestHeartbeatAfter: types.MustTimeFromString("2022-08-19T22:52:38.662Z"),
            MaxResults: sdk.Int64(198616),
            ModelName: sdk.String("earum"),
            NextToken: sdk.String("eum"),
        },
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("placeat"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("unde"),
        XAmzTarget: operations.ListDevicesXAmzTargetEnumSageMakerListDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## ListDomains

Lists the domains.

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
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        ListDomainsRequest: shared.ListDomainsRequest{
            MaxResults: sdk.Int64(646321),
            NextToken: sdk.String("id"),
        },
        MaxResults: sdk.String("ex"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListDomainsXAmzTargetEnumSageMakerListDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ListEdgeDeploymentPlans

Lists all edge deployment plans.

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
    res, err := s.SDK.ListEdgeDeploymentPlans(ctx, operations.ListEdgeDeploymentPlansRequest{
        ListEdgeDeploymentPlansRequest: shared.ListEdgeDeploymentPlansRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-06-03T13:50:31.881Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-02-05T03:44:43.502Z"),
            DeviceFleetNameContains: sdk.String("dicta"),
            LastModifiedTimeAfter: types.MustTimeFromString("2021-08-20T05:05:50.222Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-06-25T19:21:38.946Z"),
            MaxResults: sdk.Int64(168546),
            NameContains: sdk.String("eos"),
            NextToken: sdk.String("harum"),
            SortBy: shared.ListEdgeDeploymentPlansSortByEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.ListEdgeDeploymentPlansXAmzTargetEnumSageMakerListEdgeDeploymentPlans,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEdgeDeploymentPlansResponse != nil {
        // handle response
    }
}
```

## ListEdgePackagingJobs

Returns a list of edge packaging jobs.

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
    res, err := s.SDK.ListEdgePackagingJobs(ctx, operations.ListEdgePackagingJobsRequest{
        ListEdgePackagingJobsRequest: shared.ListEdgePackagingJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-05-13T07:41:28.529Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-04-18T03:41:40.682Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-01-07T04:20:03.262Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2021-03-26T19:22:41.352Z"),
            MaxResults: sdk.Int64(370374),
            ModelNameContains: sdk.String("fugiat"),
            NameContains: sdk.String("odio"),
            NextToken: sdk.String("ullam"),
            SortBy: shared.ListEdgePackagingJobsSortByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.EdgePackagingJobStatusEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("necessitatibus"),
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.ListEdgePackagingJobsXAmzTargetEnumSageMakerListEdgePackagingJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEdgePackagingJobsResponse != nil {
        // handle response
    }
}
```

## ListEndpointConfigs

Lists endpoint configurations.

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
    res, err := s.SDK.ListEndpointConfigs(ctx, operations.ListEndpointConfigsRequest{
        ListEndpointConfigsInput: shared.ListEndpointConfigsInput{
            CreationTimeAfter: types.MustTimeFromString("2020-06-04T23:12:34.367Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-04-05T00:49:29.619Z"),
            MaxResults: sdk.Int64(293176),
            NameContains: sdk.String("enim"),
            NextToken: sdk.String("alias"),
            SortBy: shared.EndpointConfigSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.OrderKeyEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("illo"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.ListEndpointConfigsXAmzTargetEnumSageMakerListEndpointConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointConfigsOutput != nil {
        // handle response
    }
}
```

## ListEndpoints

Lists endpoints.

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
    res, err := s.SDK.ListEndpoints(ctx, operations.ListEndpointsRequest{
        ListEndpointsInput: shared.ListEndpointsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-07-19T03:34:33.290Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-01-18T07:41:24.384Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-01-21T08:17:02.208Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-09-20T23:55:39.171Z"),
            MaxResults: sdk.Int64(472763),
            NameContains: sdk.String("accusamus"),
            NextToken: sdk.String("quia"),
            SortBy: shared.EndpointSortKeyEnumName.ToPointer(),
            SortOrder: shared.OrderKeyEnumDescending.ToPointer(),
            StatusEquals: shared.EndpointStatusEnumRollingBack.ToPointer(),
        },
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListEndpointsXAmzTargetEnumSageMakerListEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointsOutput != nil {
        // handle response
    }
}
```

## ListExperiments

Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.

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
    res, err := s.SDK.ListExperiments(ctx, operations.ListExperimentsRequest{
        ListExperimentsRequest: shared.ListExperimentsRequest{
            CreatedAfter: types.MustTimeFromString("2021-09-23T04:09:53.301Z"),
            CreatedBefore: types.MustTimeFromString("2021-10-30T02:25:02.152Z"),
            MaxResults: sdk.Int64(942840),
            NextToken: sdk.String("quis"),
            SortBy: shared.SortExperimentsByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListExperimentsXAmzTargetEnumSageMakerListExperiments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperimentsResponse != nil {
        // handle response
    }
}
```

## ListFeatureGroups

List <code>FeatureGroup</code>s based on given filter and order.

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
    res, err := s.SDK.ListFeatureGroups(ctx, operations.ListFeatureGroupsRequest{
        ListFeatureGroupsRequest: shared.ListFeatureGroupsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-11-24T07:30:05.595Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-12-18T01:23:11.053Z"),
            FeatureGroupStatusEquals: shared.FeatureGroupStatusEnumCreated.ToPointer(),
            MaxResults: sdk.Int64(96803),
            NameContains: sdk.String("sed"),
            NextToken: sdk.String("officiis"),
            OfflineStoreStatusEquals: shared.OfflineStoreStatusValueEnumActive.ToPointer(),
            SortBy: shared.FeatureGroupSortByEnumName.ToPointer(),
            SortOrder: shared.FeatureGroupSortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListFeatureGroupsXAmzTargetEnumSageMakerListFeatureGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeatureGroupsResponse != nil {
        // handle response
    }
}
```

## ListFlowDefinitions

Returns information about the flow definitions in your account.

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
    res, err := s.SDK.ListFlowDefinitions(ctx, operations.ListFlowDefinitionsRequest{
        ListFlowDefinitionsRequest: shared.ListFlowDefinitionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-11-08T17:29:46.483Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-05-15T00:58:22.386Z"),
            MaxResults: sdk.Int64(705753),
            NextToken: sdk.String("minus"),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("omnis"),
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.ListFlowDefinitionsXAmzTargetEnumSageMakerListFlowDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlowDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListHubContentVersions

<p>List hub content versions.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.ListHubContentVersions(ctx, operations.ListHubContentVersionsRequest{
        ListHubContentVersionsRequest: shared.ListHubContentVersionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-12-26T03:03:47.339Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-08-14T02:26:58.251Z"),
            HubContentName: "vitae",
            HubContentType: shared.HubContentTypeEnumNotebook,
            HubName: "laboriosam",
            MaxResults: sdk.Int64(796513),
            MaxSchemaVersion: sdk.String("labore"),
            MinVersion: sdk.String("quas"),
            NextToken: sdk.String("sed"),
            SortBy: shared.HubContentSortByEnumHubContentName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.ListHubContentVersionsXAmzTargetEnumSageMakerListHubContentVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHubContentVersionsResponse != nil {
        // handle response
    }
}
```

## ListHubContents

<p>List the contents of a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.ListHubContents(ctx, operations.ListHubContentsRequest{
        ListHubContentsRequest: shared.ListHubContentsRequest{
            CreationTimeAfter: types.MustTimeFromString("2020-05-21T04:40:13.377Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-07-21T09:02:53.615Z"),
            HubContentType: shared.HubContentTypeEnumModel,
            HubName: "aut",
            MaxResults: sdk.Int64(8446),
            MaxSchemaVersion: sdk.String("iste"),
            NameContains: sdk.String("accusamus"),
            NextToken: sdk.String("repellat"),
            SortBy: shared.HubContentSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ListHubContentsXAmzTargetEnumSageMakerListHubContents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHubContentsResponse != nil {
        // handle response
    }
}
```

## ListHubs

<p>List all existing hubs.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.ListHubs(ctx, operations.ListHubsRequest{
        ListHubsRequest: shared.ListHubsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-12-26T02:26:54.560Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-02-02T22:19:15.058Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-04-17T14:30:04.124Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2021-01-20T08:18:53.517Z"),
            MaxResults: sdk.Int64(58176),
            NameContains: sdk.String("quos"),
            NextToken: sdk.String("quo"),
            SortBy: shared.HubSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.ListHubsXAmzTargetEnumSageMakerListHubs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHubsResponse != nil {
        // handle response
    }
}
```

## ListHumanTaskUis

Returns information about the human task user interfaces in your account.

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
    res, err := s.SDK.ListHumanTaskUis(ctx, operations.ListHumanTaskUisRequest{
        ListHumanTaskUisRequest: shared.ListHumanTaskUisRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-11-25T19:21:08.744Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-02-13T06:45:24.040Z"),
            MaxResults: sdk.Int64(76873),
            NextToken: sdk.String("excepturi"),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ListHumanTaskUisXAmzTargetEnumSageMakerListHumanTaskUis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHumanTaskUisResponse != nil {
        // handle response
    }
}
```

## ListHyperParameterTuningJobs

Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.

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
    res, err := s.SDK.ListHyperParameterTuningJobs(ctx, operations.ListHyperParameterTuningJobsRequest{
        ListHyperParameterTuningJobsRequest: shared.ListHyperParameterTuningJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-06-07T14:17:38.408Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-10-07T20:01:30.265Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-12-16T08:19:54.009Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-03-26T22:14:30.303Z"),
            MaxResults: sdk.Int64(259341),
            NameContains: sdk.String("maiores"),
            NextToken: sdk.String("delectus"),
            SortBy: shared.HyperParameterTuningJobSortByOptionsEnumStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.HyperParameterTuningJobStatusEnumStopping.ToPointer(),
        },
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ListHyperParameterTuningJobsXAmzTargetEnumSageMakerListHyperParameterTuningJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHyperParameterTuningJobsResponse != nil {
        // handle response
    }
}
```

## ListImageVersions

Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.

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
    res, err := s.SDK.ListImageVersions(ctx, operations.ListImageVersionsRequest{
        ListImageVersionsRequest: shared.ListImageVersionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-05-17T18:52:45.867Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-01-27T05:49:42.278Z"),
            ImageName: "numquam",
            LastModifiedTimeAfter: types.MustTimeFromString("2021-09-12T09:38:45.445Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-03-28T03:48:50.113Z"),
            MaxResults: sdk.Int64(557651),
            NextToken: sdk.String("quis"),
            SortBy: shared.ImageVersionSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.ImageVersionSortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("iste"),
        NextToken: sdk.String("ea"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListImageVersionsXAmzTargetEnumSageMakerListImageVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageVersionsResponse != nil {
        // handle response
    }
}
```

## ListImages

Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.

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
    res, err := s.SDK.ListImages(ctx, operations.ListImagesRequest{
        ListImagesRequest: shared.ListImagesRequest{
            CreationTimeAfter: types.MustTimeFromString("2020-08-24T08:27:20.153Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-03-03T18:16:48.691Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-06-29T11:32:33.368Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-03-19T13:47:36.994Z"),
            MaxResults: sdk.Int64(711819),
            NameContains: sdk.String("in"),
            NextToken: sdk.String("eaque"),
            SortBy: shared.ImageSortByEnumImageName.ToPointer(),
            SortOrder: shared.ImageSortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("tenetur"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListImagesXAmzTargetEnumSageMakerListImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagesResponse != nil {
        // handle response
    }
}
```

## ListInferenceExperiments

Returns the list of all inference experiments.

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
    res, err := s.SDK.ListInferenceExperiments(ctx, operations.ListInferenceExperimentsRequest{
        ListInferenceExperimentsRequest: shared.ListInferenceExperimentsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-04-22T20:08:10.603Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-08-27T09:00:26.332Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2021-02-04T08:32:50.502Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-09-17T18:03:56.773Z"),
            MaxResults: sdk.Int64(511054),
            NameContains: sdk.String("dolore"),
            NextToken: sdk.String("aliquid"),
            SortBy: shared.SortInferenceExperimentsByEnumStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.InferenceExperimentStatusEnumCompleted.ToPointer(),
            Type: shared.InferenceExperimentTypeEnumShadowMode.ToPointer(),
        },
        MaxResults: sdk.String("dolorem"),
        NextToken: sdk.String("neque"),
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.ListInferenceExperimentsXAmzTargetEnumSageMakerListInferenceExperiments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceExperimentsResponse != nil {
        // handle response
    }
}
```

## ListInferenceRecommendationsJobSteps

<p>Returns a list of the subtasks for an Inference Recommender job.</p> <p>The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</p>

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
    res, err := s.SDK.ListInferenceRecommendationsJobSteps(ctx, operations.ListInferenceRecommendationsJobStepsRequest{
        ListInferenceRecommendationsJobStepsRequest: shared.ListInferenceRecommendationsJobStepsRequest{
            JobName: "iure",
            MaxResults: sdk.Int64(842461),
            NextToken: sdk.String("sint"),
            Status: shared.RecommendationJobStatusEnumStopped.ToPointer(),
            StepType: shared.RecommendationStepTypeEnumBenchmark.ToPointer(),
        },
        MaxResults: sdk.String("nihil"),
        NextToken: sdk.String("ad"),
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.ListInferenceRecommendationsJobStepsXAmzTargetEnumSageMakerListInferenceRecommendationsJobSteps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceRecommendationsJobStepsResponse != nil {
        // handle response
    }
}
```

## ListInferenceRecommendationsJobs

Lists recommendation jobs that satisfy various filters.

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
    res, err := s.SDK.ListInferenceRecommendationsJobs(ctx, operations.ListInferenceRecommendationsJobsRequest{
        ListInferenceRecommendationsJobsRequest: shared.ListInferenceRecommendationsJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-05-23T15:43:21.861Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-03-23T18:36:14.220Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-12-04T04:58:05.244Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-09-07T14:47:35.738Z"),
            MaxResults: sdk.Int64(332237),
            NameContains: sdk.String("est"),
            NextToken: sdk.String("rem"),
            SortBy: shared.ListInferenceRecommendationsJobsSortByEnumStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.RecommendationJobStatusEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("sunt"),
        NextToken: sdk.String("maiores"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.ListInferenceRecommendationsJobsXAmzTargetEnumSageMakerListInferenceRecommendationsJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceRecommendationsJobsResponse != nil {
        // handle response
    }
}
```

## ListLabelingJobs

Gets a list of labeling jobs.

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
    res, err := s.SDK.ListLabelingJobs(ctx, operations.ListLabelingJobsRequest{
        ListLabelingJobsRequest: shared.ListLabelingJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-08-27T10:02:33.600Z"),
            CreationTimeBefore: types.MustTimeFromString("2021-02-13T02:11:36.009Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2021-07-07T09:10:06.875Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2021-06-21T05:39:24.978Z"),
            MaxResults: sdk.Int64(129156),
            NameContains: sdk.String("odit"),
            NextToken: sdk.String("illo"),
            SortBy: shared.SortByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.LabelingJobStatusEnumInProgress.ToPointer(),
        },
        MaxResults: sdk.String("velit"),
        NextToken: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListLabelingJobsXAmzTargetEnumSageMakerListLabelingJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLabelingJobsResponse != nil {
        // handle response
    }
}
```

## ListLabelingJobsForWorkteam

Gets a list of labeling jobs assigned to a specified work team.

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
    res, err := s.SDK.ListLabelingJobsForWorkteam(ctx, operations.ListLabelingJobsForWorkteamRequest{
        ListLabelingJobsForWorkteamRequest: shared.ListLabelingJobsForWorkteamRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-07-22T03:24:51.832Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-02-04T05:29:57.197Z"),
            JobReferenceCodeContains: sdk.String("cupiditate"),
            MaxResults: sdk.Int64(803546),
            NextToken: sdk.String("assumenda"),
            SortBy: shared.ListLabelingJobsForWorkteamSortByOptionsEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            WorkteamArn: "sed",
        },
        MaxResults: sdk.String("optio"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.ListLabelingJobsForWorkteamXAmzTargetEnumSageMakerListLabelingJobsForWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLabelingJobsForWorkteamResponse != nil {
        // handle response
    }
}
```

## ListLineageGroups

A list of lineage groups shared with your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.

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
    res, err := s.SDK.ListLineageGroups(ctx, operations.ListLineageGroupsRequest{
        ListLineageGroupsRequest: shared.ListLineageGroupsRequest{
            CreatedAfter: types.MustTimeFromString("2022-07-15T07:16:53.819Z"),
            CreatedBefore: types.MustTimeFromString("2022-05-23T16:27:54.446Z"),
            MaxResults: sdk.Int64(970108),
            NextToken: sdk.String("qui"),
            SortBy: shared.SortLineageGroupsByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListLineageGroupsXAmzTargetEnumSageMakerListLineageGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLineageGroupsResponse != nil {
        // handle response
    }
}
```

## ListModelBiasJobDefinitions

Lists model bias jobs definitions that satisfy various filters.

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
    res, err := s.SDK.ListModelBiasJobDefinitions(ctx, operations.ListModelBiasJobDefinitionsRequest{
        ListModelBiasJobDefinitionsRequest: shared.ListModelBiasJobDefinitionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-11-19T17:09:34.760Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-06-05T20:33:25.469Z"),
            EndpointName: sdk.String("id"),
            MaxResults: sdk.Int64(750075),
            NameContains: sdk.String("quasi"),
            NextToken: sdk.String("itaque"),
            SortBy: shared.MonitoringJobDefinitionSortKeyEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("voluptatum"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListModelBiasJobDefinitionsXAmzTargetEnumSageMakerListModelBiasJobDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelBiasJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListModelCardExportJobs

List the export jobs for the Amazon SageMaker Model Card.

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
    res, err := s.SDK.ListModelCardExportJobs(ctx, operations.ListModelCardExportJobsRequest{
        ListModelCardExportJobsRequest: shared.ListModelCardExportJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-09-18T05:42:09.800Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-06-18T10:44:07.180Z"),
            MaxResults: sdk.Int64(845191),
            ModelCardExportJobNameContains: sdk.String("repellat"),
            ModelCardName: "mollitia",
            ModelCardVersion: sdk.Int64(309192),
            NextToken: sdk.String("officia"),
            SortBy: shared.ModelCardExportJobSortByEnumName.ToPointer(),
            SortOrder: shared.ModelCardExportJobSortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.ModelCardExportJobStatusEnumCompleted.ToPointer(),
        },
        MaxResults: sdk.String("a"),
        NextToken: sdk.String("iure"),
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListModelCardExportJobsXAmzTargetEnumSageMakerListModelCardExportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelCardExportJobsResponse != nil {
        // handle response
    }
}
```

## ListModelCardVersions

List existing versions of an Amazon SageMaker Model Card.

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
    res, err := s.SDK.ListModelCardVersions(ctx, operations.ListModelCardVersionsRequest{
        ListModelCardVersionsRequest: shared.ListModelCardVersionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-01-15T00:47:03.305Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-08-20T21:58:29.841Z"),
            MaxResults: sdk.Int64(449369),
            ModelCardName: "architecto",
            ModelCardStatus: shared.ModelCardStatusEnumDraft.ToPointer(),
            NextToken: sdk.String("voluptatem"),
            SortBy: shared.ModelCardVersionSortByEnumVersion.ToPointer(),
            SortOrder: shared.ModelCardSortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("deleniti"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.ListModelCardVersionsXAmzTargetEnumSageMakerListModelCardVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelCardVersionsResponse != nil {
        // handle response
    }
}
```

## ListModelCards

List existing model cards.

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
    res, err := s.SDK.ListModelCards(ctx, operations.ListModelCardsRequest{
        ListModelCardsRequest: shared.ListModelCardsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-02-18T17:52:15.029Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-04-09T18:48:48.082Z"),
            MaxResults: sdk.Int64(291649),
            ModelCardStatus: shared.ModelCardStatusEnumPendingReview.ToPointer(),
            NameContains: sdk.String("dolor"),
            NextToken: sdk.String("perspiciatis"),
            SortBy: shared.ModelCardSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.ModelCardSortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("quia"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListModelCardsXAmzTargetEnumSageMakerListModelCards,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelCardsResponse != nil {
        // handle response
    }
}
```

## ListModelExplainabilityJobDefinitions

Lists model explainability job definitions that satisfy various filters.

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
    res, err := s.SDK.ListModelExplainabilityJobDefinitions(ctx, operations.ListModelExplainabilityJobDefinitionsRequest{
        ListModelExplainabilityJobDefinitionsRequest: shared.ListModelExplainabilityJobDefinitionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-06-17T01:31:12.921Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-09-02T21:49:05.811Z"),
            EndpointName: sdk.String("magnam"),
            MaxResults: sdk.Int64(112513),
            NameContains: sdk.String("quos"),
            NextToken: sdk.String("atque"),
            SortBy: shared.MonitoringJobDefinitionSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("corporis"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.ListModelExplainabilityJobDefinitionsXAmzTargetEnumSageMakerListModelExplainabilityJobDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelExplainabilityJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListModelMetadata

Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.

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
    res, err := s.SDK.ListModelMetadata(ctx, operations.ListModelMetadataRequest{
        ListModelMetadataRequest: shared.ListModelMetadataRequest{
            MaxResults: sdk.Int64(514626),
            NextToken: sdk.String("dolorem"),
            SearchExpression: &shared.ModelMetadataSearchExpression{
                Filters: []shared.ModelMetadataFilter{
                    shared.ModelMetadataFilter{
                        Name: shared.ModelMetadataFilterTypeEnumFrameworkVersion,
                        Value: "mollitia",
                    },
                },
            },
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("fugiat"),
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.ListModelMetadataXAmzTargetEnumSageMakerListModelMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelMetadataResponse != nil {
        // handle response
    }
}
```

## ListModelPackageGroups

Gets a list of the model groups in your Amazon Web Services account.

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
    res, err := s.SDK.ListModelPackageGroups(ctx, operations.ListModelPackageGroupsRequest{
        ListModelPackageGroupsInput: shared.ListModelPackageGroupsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-01-11T23:55:28.629Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-05-14T13:25:21.962Z"),
            MaxResults: sdk.Int64(305695),
            NameContains: sdk.String("ut"),
            NextToken: sdk.String("quidem"),
            SortBy: shared.ModelPackageGroupSortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("architecto"),
        NextToken: sdk.String("tempore"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.ListModelPackageGroupsXAmzTargetEnumSageMakerListModelPackageGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelPackageGroupsOutput != nil {
        // handle response
    }
}
```

## ListModelPackages

Lists the model packages that have been created.

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
    res, err := s.SDK.ListModelPackages(ctx, operations.ListModelPackagesRequest{
        ListModelPackagesInput: shared.ListModelPackagesInput{
            CreationTimeAfter: types.MustTimeFromString("2022-08-05T06:34:33.185Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-06-27T07:18:30.484Z"),
            MaxResults: sdk.Int64(186303),
            ModelApprovalStatus: shared.ModelApprovalStatusEnumPendingManualApproval.ToPointer(),
            ModelPackageGroupName: sdk.String("maiores"),
            ModelPackageType: shared.ModelPackageTypeEnumBoth.ToPointer(),
            NameContains: sdk.String("pariatur"),
            NextToken: sdk.String("quod"),
            SortBy: shared.ModelPackageSortByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("delectus"),
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListModelPackagesXAmzTargetEnumSageMakerListModelPackages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelPackagesOutput != nil {
        // handle response
    }
}
```

## ListModelQualityJobDefinitions

Gets a list of model quality monitoring job definitions in your account.

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
    res, err := s.SDK.ListModelQualityJobDefinitions(ctx, operations.ListModelQualityJobDefinitionsRequest{
        ListModelQualityJobDefinitionsRequest: shared.ListModelQualityJobDefinitionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-01-05T17:56:44.910Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-05-06T23:45:07.291Z"),
            EndpointName: sdk.String("impedit"),
            MaxResults: sdk.Int64(703431),
            NameContains: sdk.String("amet"),
            NextToken: sdk.String("quis"),
            SortBy: shared.MonitoringJobDefinitionSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("nisi"),
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListModelQualityJobDefinitionsXAmzTargetEnumSageMakerListModelQualityJobDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelQualityJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListModels

Lists models created with the <code>CreateModel</code> API.

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
    res, err := s.SDK.ListModels(ctx, operations.ListModelsRequest{
        ListModelsInput: shared.ListModelsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-06-17T17:57:28.702Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-08-20T00:14:29.556Z"),
            MaxResults: sdk.Int64(592760),
            NameContains: sdk.String("accusamus"),
            NextToken: sdk.String("minus"),
            SortBy: shared.ModelSortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.OrderKeyEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("cumque"),
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListModelsXAmzTargetEnumSageMakerListModels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsOutput != nil {
        // handle response
    }
}
```

## ListMonitoringAlertHistory

Gets a list of past alerts in a model monitoring schedule.

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
    res, err := s.SDK.ListMonitoringAlertHistory(ctx, operations.ListMonitoringAlertHistoryRequest{
        ListMonitoringAlertHistoryRequest: shared.ListMonitoringAlertHistoryRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-06-29T20:26:41.809Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-04-05T04:53:49.318Z"),
            MaxResults: sdk.Int64(657520),
            MonitoringAlertName: sdk.String("molestiae"),
            MonitoringScheduleName: sdk.String("nesciunt"),
            NextToken: sdk.String("quas"),
            SortBy: shared.MonitoringAlertHistorySortKeyEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.MonitoringAlertStatusEnumOk.ToPointer(),
        },
        MaxResults: sdk.String("quaerat"),
        NextToken: sdk.String("repellat"),
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.ListMonitoringAlertHistoryXAmzTargetEnumSageMakerListMonitoringAlertHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoringAlertHistoryResponse != nil {
        // handle response
    }
}
```

## ListMonitoringAlerts

Gets the alerts for a single monitoring schedule.

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
    res, err := s.SDK.ListMonitoringAlerts(ctx, operations.ListMonitoringAlertsRequest{
        ListMonitoringAlertsRequest: shared.ListMonitoringAlertsRequest{
            MaxResults: sdk.Int64(457685),
            MonitoringScheduleName: "cumque",
            NextToken: sdk.String("pariatur"),
        },
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListMonitoringAlertsXAmzTargetEnumSageMakerListMonitoringAlerts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoringAlertsResponse != nil {
        // handle response
    }
}
```

## ListMonitoringExecutions

Returns list of all monitoring job executions.

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
    res, err := s.SDK.ListMonitoringExecutions(ctx, operations.ListMonitoringExecutionsRequest{
        ListMonitoringExecutionsRequest: shared.ListMonitoringExecutionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-06-27T22:51:48.665Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-07-12T13:23:25.563Z"),
            EndpointName: sdk.String("harum"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-08-07T18:14:27.200Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-06-03T03:13:44.524Z"),
            MaxResults: sdk.Int64(918293),
            MonitoringJobDefinitionName: sdk.String("reiciendis"),
            MonitoringScheduleName: sdk.String("asperiores"),
            MonitoringTypeEquals: shared.MonitoringTypeEnumModelQuality.ToPointer(),
            NextToken: sdk.String("voluptatem"),
            ScheduledTimeAfter: types.MustTimeFromString("2022-10-25T17:14:13.781Z"),
            ScheduledTimeBefore: types.MustTimeFromString("2022-02-28T04:43:08.190Z"),
            SortBy: shared.MonitoringExecutionSortKeyEnumScheduledTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.ExecutionStatusEnumStopping.ToPointer(),
        },
        MaxResults: sdk.String("voluptatibus"),
        NextToken: sdk.String("tenetur"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ListMonitoringExecutionsXAmzTargetEnumSageMakerListMonitoringExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoringExecutionsResponse != nil {
        // handle response
    }
}
```

## ListMonitoringSchedules

Returns list of all monitoring schedules.

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
    res, err := s.SDK.ListMonitoringSchedules(ctx, operations.ListMonitoringSchedulesRequest{
        ListMonitoringSchedulesRequest: shared.ListMonitoringSchedulesRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-12-30T22:34:31.185Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-11-11T00:09:42.792Z"),
            EndpointName: sdk.String("ab"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-04-09T04:54:12.953Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-04-21T06:15:45.065Z"),
            MaxResults: sdk.Int64(282825),
            MonitoringJobDefinitionName: sdk.String("tempora"),
            MonitoringTypeEquals: shared.MonitoringTypeEnumModelBias.ToPointer(),
            NameContains: sdk.String("nulla"),
            NextToken: sdk.String("nesciunt"),
            SortBy: shared.MonitoringScheduleSortKeyEnumStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.ScheduleStatusEnumPending.ToPointer(),
        },
        MaxResults: sdk.String("veritatis"),
        NextToken: sdk.String("veniam"),
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListMonitoringSchedulesXAmzTargetEnumSageMakerListMonitoringSchedules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoringSchedulesResponse != nil {
        // handle response
    }
}
```

## ListNotebookInstanceLifecycleConfigs

Lists notebook instance lifestyle configurations created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.

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
    res, err := s.SDK.ListNotebookInstanceLifecycleConfigs(ctx, operations.ListNotebookInstanceLifecycleConfigsRequest{
        ListNotebookInstanceLifecycleConfigsInput: shared.ListNotebookInstanceLifecycleConfigsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-10-12T01:24:54.441Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-12-24T00:29:31.363Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-11-19T09:20:26.460Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-10-08T20:33:06.925Z"),
            MaxResults: sdk.Int64(578452),
            NameContains: sdk.String("quos"),
            NextToken: sdk.String("aliquid"),
            SortBy: shared.NotebookInstanceLifecycleConfigSortKeyEnumName.ToPointer(),
            SortOrder: shared.NotebookInstanceLifecycleConfigSortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("modi"),
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.ListNotebookInstanceLifecycleConfigsXAmzTargetEnumSageMakerListNotebookInstanceLifecycleConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotebookInstanceLifecycleConfigsOutput != nil {
        // handle response
    }
}
```

## ListNotebookInstances

Returns a list of the SageMaker notebook instances in the requester's account in an Amazon Web Services Region. 

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
    res, err := s.SDK.ListNotebookInstances(ctx, operations.ListNotebookInstancesRequest{
        ListNotebookInstancesInput: shared.ListNotebookInstancesInput{
            AdditionalCodeRepositoryEquals: sdk.String("porro"),
            CreationTimeAfter: types.MustTimeFromString("2022-01-12T02:27:30.187Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-01-22T00:15:50.167Z"),
            DefaultCodeRepositoryContains: sdk.String("porro"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-04-19T04:42:02.526Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-03-19T15:46:12.017Z"),
            MaxResults: sdk.Int64(576077),
            NameContains: sdk.String("id"),
            NextToken: sdk.String("ut"),
            NotebookInstanceLifecycleConfigNameContains: sdk.String("et"),
            SortBy: shared.NotebookInstanceSortKeyEnumStatus.ToPointer(),
            SortOrder: shared.NotebookInstanceSortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.NotebookInstanceStatusEnumDeleting.ToPointer(),
        },
        MaxResults: sdk.String("itaque"),
        NextToken: sdk.String("iste"),
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.ListNotebookInstancesXAmzTargetEnumSageMakerListNotebookInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotebookInstancesOutput != nil {
        // handle response
    }
}
```

## ListPipelineExecutionSteps

Gets a list of <code>PipeLineExecutionStep</code> objects.

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
    res, err := s.SDK.ListPipelineExecutionSteps(ctx, operations.ListPipelineExecutionStepsRequest{
        ListPipelineExecutionStepsRequest: shared.ListPipelineExecutionStepsRequest{
            MaxResults: sdk.Int64(935800),
            NextToken: sdk.String("commodi"),
            PipelineExecutionArn: sdk.String("veniam"),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("doloremque"),
        NextToken: sdk.String("esse"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListPipelineExecutionStepsXAmzTargetEnumSageMakerListPipelineExecutionSteps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelineExecutionStepsResponse != nil {
        // handle response
    }
}
```

## ListPipelineExecutions

Gets a list of the pipeline executions.

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
    res, err := s.SDK.ListPipelineExecutions(ctx, operations.ListPipelineExecutionsRequest{
        ListPipelineExecutionsRequest: shared.ListPipelineExecutionsRequest{
            CreatedAfter: types.MustTimeFromString("2022-11-23T05:40:16.974Z"),
            CreatedBefore: types.MustTimeFromString("2022-02-02T06:51:15.723Z"),
            MaxResults: sdk.Int64(652029),
            NextToken: sdk.String("ipsam"),
            PipelineName: "porro",
            SortBy: shared.SortPipelineExecutionsByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("modi"),
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.ListPipelineExecutionsXAmzTargetEnumSageMakerListPipelineExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelineExecutionsResponse != nil {
        // handle response
    }
}
```

## ListPipelineParametersForExecution

Gets a list of parameters for a pipeline execution.

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
    res, err := s.SDK.ListPipelineParametersForExecution(ctx, operations.ListPipelineParametersForExecutionRequest{
        ListPipelineParametersForExecutionRequest: shared.ListPipelineParametersForExecutionRequest{
            MaxResults: sdk.Int64(993395),
            NextToken: sdk.String("aspernatur"),
            PipelineExecutionArn: "officiis",
        },
        MaxResults: sdk.String("sit"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.ListPipelineParametersForExecutionXAmzTargetEnumSageMakerListPipelineParametersForExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelineParametersForExecutionResponse != nil {
        // handle response
    }
}
```

## ListPipelines

Gets a list of pipelines.

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
    res, err := s.SDK.ListPipelines(ctx, operations.ListPipelinesRequest{
        ListPipelinesRequest: shared.ListPipelinesRequest{
            CreatedAfter: types.MustTimeFromString("2022-01-13T02:49:36.397Z"),
            CreatedBefore: types.MustTimeFromString("2021-02-17T18:30:07.959Z"),
            MaxResults: sdk.Int64(148248),
            NextToken: sdk.String("repudiandae"),
            PipelineNamePrefix: sdk.String("vitae"),
            SortBy: shared.SortPipelinesByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.ListPipelinesXAmzTargetEnumSageMakerListPipelines,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelinesResponse != nil {
        // handle response
    }
}
```

## ListProcessingJobs

Lists processing jobs that satisfy various filters.

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
    res, err := s.SDK.ListProcessingJobs(ctx, operations.ListProcessingJobsRequest{
        ListProcessingJobsRequest: shared.ListProcessingJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-07-22T18:14:05.430Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-01-04T13:54:43.971Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-01-04T17:39:15.073Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-12-01T01:21:50.387Z"),
            MaxResults: sdk.Int64(503802),
            NameContains: sdk.String("magnam"),
            NextToken: sdk.String("excepturi"),
            SortBy: shared.SortByEnumStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.ProcessingJobStatusEnumStopping.ToPointer(),
        },
        MaxResults: sdk.String("itaque"),
        NextToken: sdk.String("assumenda"),
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.ListProcessingJobsXAmzTargetEnumSageMakerListProcessingJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProcessingJobsResponse != nil {
        // handle response
    }
}
```

## ListProjects

Gets a list of the projects in an Amazon Web Services account.

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
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        ListProjectsInput: shared.ListProjectsInput{
            CreationTimeAfter: types.MustTimeFromString("2022-07-17T14:41:15.722Z"),
            CreationTimeBefore: types.MustTimeFromString("2020-05-20T06:53:27.332Z"),
            MaxResults: sdk.Int64(567821),
            NameContains: sdk.String("eos"),
            NextToken: sdk.String("odit"),
            SortBy: shared.ProjectSortByEnumName.ToPointer(),
            SortOrder: shared.ProjectSortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListProjectsXAmzTargetEnumSageMakerListProjects,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsOutput != nil {
        // handle response
    }
}
```

## ListSpaces

Lists spaces.

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
    res, err := s.SDK.ListSpaces(ctx, operations.ListSpacesRequest{
        ListSpacesRequest: shared.ListSpacesRequest{
            DomainIDEquals: sdk.String("id"),
            MaxResults: sdk.Int64(689974),
            NextToken: sdk.String("sapiente"),
            SortBy: shared.SpaceSortKeyEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            SpaceNameContains: sdk.String("vero"),
        },
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("eum"),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListSpacesXAmzTargetEnumSageMakerListSpaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSpacesResponse != nil {
        // handle response
    }
}
```

## ListStageDevices

Lists devices allocated to the stage, containing detailed device information and deployment status.

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
    res, err := s.SDK.ListStageDevices(ctx, operations.ListStageDevicesRequest{
        ListStageDevicesRequest: shared.ListStageDevicesRequest{
            EdgeDeploymentPlanName: "labore",
            ExcludeDevicesDeployedInOtherStage: sdk.Bool(false),
            MaxResults: sdk.Int64(337570),
            NextToken: sdk.String("aliquid"),
            StageName: "vero",
        },
        MaxResults: sdk.String("reiciendis"),
        NextToken: sdk.String("dicta"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ListStageDevicesXAmzTargetEnumSageMakerListStageDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStageDevicesResponse != nil {
        // handle response
    }
}
```

## ListStudioLifecycleConfigs

Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.

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
    res, err := s.SDK.ListStudioLifecycleConfigs(ctx, operations.ListStudioLifecycleConfigsRequest{
        ListStudioLifecycleConfigsRequest: shared.ListStudioLifecycleConfigsRequest{
            AppTypeEquals: shared.StudioLifecycleConfigAppTypeEnumKernelGateway.ToPointer(),
            CreationTimeAfter: types.MustTimeFromString("2022-11-20T08:52:50.169Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-08-13T09:54:46.492Z"),
            MaxResults: sdk.Int64(38173),
            ModifiedTimeAfter: types.MustTimeFromString("2022-11-26T13:03:58.735Z"),
            ModifiedTimeBefore: types.MustTimeFromString("2022-07-15T23:19:42.151Z"),
            NameContains: sdk.String("aspernatur"),
            NextToken: sdk.String("minus"),
            SortBy: shared.StudioLifecycleConfigSortKeyEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("exercitationem"),
        NextToken: sdk.String("quod"),
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListStudioLifecycleConfigsXAmzTargetEnumSageMakerListStudioLifecycleConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudioLifecycleConfigsResponse != nil {
        // handle response
    }
}
```

## ListSubscribedWorkteams

Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.

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
    res, err := s.SDK.ListSubscribedWorkteams(ctx, operations.ListSubscribedWorkteamsRequest{
        ListSubscribedWorkteamsRequest: shared.ListSubscribedWorkteamsRequest{
            MaxResults: sdk.Int64(516482),
            NameContains: sdk.String("ut"),
            NextToken: sdk.String("possimus"),
        },
        MaxResults: sdk.String("nihil"),
        NextToken: sdk.String("voluptas"),
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.ListSubscribedWorkteamsXAmzTargetEnumSageMakerListSubscribedWorkteams,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscribedWorkteamsResponse != nil {
        // handle response
    }
}
```

## ListTags

Returns the tags for the specified SageMaker resource.

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
    res, err := s.SDK.ListTags(ctx, operations.ListTagsRequest{
        ListTagsInput: shared.ListTagsInput{
            MaxResults: sdk.Int64(126733),
            NextToken: sdk.String("sit"),
            ResourceArn: "eligendi",
        },
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumSageMakerListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsOutput != nil {
        // handle response
    }
}
```

## ListTrainingJobs

<p>Lists training jobs.</p> <note> <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same time, the <code>MaxResults</code> number of training jobs are first retrieved ignoring the <code>StatusEquals</code> parameter and then they are filtered by the <code>StatusEquals</code> parameter, which is returned as a response.</p> <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p> <p> <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code> </p> <p>First, 100 trainings jobs with any status, including those other than <code>InProgress</code>, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of <code>InProgress</code> are returned.</p> <p>You can quickly test the API using the following Amazon Web Services CLI code.</p> <p> <code>aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</code> </p> </note>

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
    res, err := s.SDK.ListTrainingJobs(ctx, operations.ListTrainingJobsRequest{
        ListTrainingJobsRequest: shared.ListTrainingJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-12-03T19:36:39.519Z"),
            CreationTimeBefore: types.MustTimeFromString("2020-09-05T02:00:16.229Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2021-11-17T22:15:09.305Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-12-01T21:21:23.991Z"),
            MaxResults: sdk.Int64(558305),
            NameContains: sdk.String("molestiae"),
            NextToken: sdk.String("officiis"),
            SortBy: shared.SortByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.TrainingJobStatusEnumStopped.ToPointer(),
            WarmPoolStatusEquals: shared.WarmPoolResourceStatusEnumAvailable.ToPointer(),
        },
        MaxResults: sdk.String("ut"),
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.ListTrainingJobsXAmzTargetEnumSageMakerListTrainingJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrainingJobsResponse != nil {
        // handle response
    }
}
```

## ListTrainingJobsForHyperParameterTuningJob

Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.

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
    res, err := s.SDK.ListTrainingJobsForHyperParameterTuningJob(ctx, operations.ListTrainingJobsForHyperParameterTuningJobRequest{
        ListTrainingJobsForHyperParameterTuningJobRequest: shared.ListTrainingJobsForHyperParameterTuningJobRequest{
            HyperParameterTuningJobName: "pariatur",
            MaxResults: sdk.Int64(697401),
            NextToken: sdk.String("labore"),
            SortBy: shared.TrainingJobSortByOptionsEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            StatusEquals: shared.TrainingJobStatusEnumStopping.ToPointer(),
        },
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnumSageMakerListTrainingJobsForHyperParameterTuningJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrainingJobsForHyperParameterTuningJobResponse != nil {
        // handle response
    }
}
```

## ListTransformJobs

Lists transform jobs.

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
    res, err := s.SDK.ListTransformJobs(ctx, operations.ListTransformJobsRequest{
        ListTransformJobsRequest: shared.ListTransformJobsRequest{
            CreationTimeAfter: types.MustTimeFromString("2021-02-03T14:45:41.389Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-12-03T11:20:04.601Z"),
            LastModifiedTimeAfter: types.MustTimeFromString("2022-11-29T04:13:23.205Z"),
            LastModifiedTimeBefore: types.MustTimeFromString("2022-11-05T05:50:08.633Z"),
            MaxResults: sdk.Int64(114692),
            NameContains: sdk.String("qui"),
            NextToken: sdk.String("unde"),
            SortBy: shared.SortByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            StatusEquals: shared.TransformJobStatusEnumCompleted.ToPointer(),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListTransformJobsXAmzTargetEnumSageMakerListTransformJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransformJobsResponse != nil {
        // handle response
    }
}
```

## ListTrialComponents

<p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>

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
    res, err := s.SDK.ListTrialComponents(ctx, operations.ListTrialComponentsRequest{
        ListTrialComponentsRequest: shared.ListTrialComponentsRequest{
            CreatedAfter: types.MustTimeFromString("2022-05-22T16:46:39.904Z"),
            CreatedBefore: types.MustTimeFromString("2022-09-13T11:43:14.045Z"),
            ExperimentName: sdk.String("aspernatur"),
            MaxResults: sdk.Int64(956150),
            NextToken: sdk.String("nemo"),
            SortBy: shared.SortTrialComponentsByEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            SourceArn: sdk.String("quidem"),
            TrialName: sdk.String("iusto"),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ListTrialComponentsXAmzTargetEnumSageMakerListTrialComponents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrialComponentsResponse != nil {
        // handle response
    }
}
```

## ListTrials

Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.

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
    res, err := s.SDK.ListTrials(ctx, operations.ListTrialsRequest{
        ListTrialsRequest: shared.ListTrialsRequest{
            CreatedAfter: types.MustTimeFromString("2022-03-11T11:31:59.311Z"),
            CreatedBefore: types.MustTimeFromString("2021-03-11T09:23:41.480Z"),
            ExperimentName: sdk.String("ipsa"),
            MaxResults: sdk.Int64(492974),
            NextToken: sdk.String("veritatis"),
            SortBy: shared.SortTrialsByEnumCreationTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            TrialComponentName: sdk.String("ab"),
        },
        MaxResults: sdk.String("ex"),
        NextToken: sdk.String("dolor"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListTrialsXAmzTargetEnumSageMakerListTrials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrialsResponse != nil {
        // handle response
    }
}
```

## ListUserProfiles

Lists user profiles.

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
    res, err := s.SDK.ListUserProfiles(ctx, operations.ListUserProfilesRequest{
        ListUserProfilesRequest: shared.ListUserProfilesRequest{
            DomainIDEquals: sdk.String("ipsa"),
            MaxResults: sdk.Int64(502406),
            NextToken: sdk.String("aliquam"),
            SortBy: shared.UserProfileSortKeyEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            UserProfileNameContains: sdk.String("omnis"),
        },
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.ListUserProfilesXAmzTargetEnumSageMakerListUserProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserProfilesResponse != nil {
        // handle response
    }
}
```

## ListWorkforces

Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.

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
    res, err := s.SDK.ListWorkforces(ctx, operations.ListWorkforcesRequest{
        ListWorkforcesRequest: shared.ListWorkforcesRequest{
            MaxResults: sdk.Int64(57207),
            NameContains: sdk.String("quas"),
            NextToken: sdk.String("incidunt"),
            SortBy: shared.ListWorkforcesSortByOptionsEnumName.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.ListWorkforcesXAmzTargetEnumSageMakerListWorkforces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkforcesResponse != nil {
        // handle response
    }
}
```

## ListWorkteams

Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.

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
    res, err := s.SDK.ListWorkteams(ctx, operations.ListWorkteamsRequest{
        ListWorkteamsRequest: shared.ListWorkteamsRequest{
            MaxResults: sdk.Int64(812431),
            NameContains: sdk.String("tempore"),
            NextToken: sdk.String("facere"),
            SortBy: shared.ListWorkteamsSortByOptionsEnumCreateDate.ToPointer(),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.ListWorkteamsXAmzTargetEnumSageMakerListWorkteams,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkteamsResponse != nil {
        // handle response
    }
}
```

## PutModelPackageGroupPolicy

Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.

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
    res, err := s.SDK.PutModelPackageGroupPolicy(ctx, operations.PutModelPackageGroupPolicyRequest{
        PutModelPackageGroupPolicyInput: shared.PutModelPackageGroupPolicyInput{
            ModelPackageGroupName: "consectetur",
            ResourcePolicy: "corporis",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.PutModelPackageGroupPolicyXAmzTargetEnumSageMakerPutModelPackageGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutModelPackageGroupPolicyOutput != nil {
        // handle response
    }
}
```

## QueryLineage

Use this action to inspect your lineage and discover relationships between entities. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html"> Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.

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
    res, err := s.SDK.QueryLineage(ctx, operations.QueryLineageRequest{
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("ipsam"),
        QueryLineageRequest: shared.QueryLineageRequest{
            Direction: shared.DirectionEnumDescendants.ToPointer(),
            Filters: &shared.QueryFilters{
                CreatedAfter: types.MustTimeFromString("2022-05-23T06:32:00.655Z"),
                CreatedBefore: types.MustTimeFromString("2022-03-20T19:25:56.778Z"),
                LineageTypes: []shared.LineageTypeEnum{
                    shared.LineageTypeEnumArtifact,
                },
                ModifiedAfter: types.MustTimeFromString("2022-04-03T03:13:51.405Z"),
                ModifiedBefore: types.MustTimeFromString("2022-08-04T21:27:35.841Z"),
                Properties: map[string]string{
                    "et": "fugit",
                    "quos": "molestiae",
                    "voluptate": "autem",
                },
                Types: []string{
                    "voluptates",
                    "debitis",
                },
            },
            IncludeEdges: sdk.Bool(false),
            MaxDepth: sdk.Int64(937743),
            MaxResults: sdk.Int64(382853),
            NextToken: sdk.String("assumenda"),
            StartArns: []string{
                "porro",
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.QueryLineageXAmzTargetEnumSageMakerQueryLineage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryLineageResponse != nil {
        // handle response
    }
}
```

## RegisterDevices

Register devices.

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
    res, err := s.SDK.RegisterDevices(ctx, operations.RegisterDevicesRequest{
        RegisterDevicesRequest: shared.RegisterDevicesRequest{
            DeviceFleetName: "in",
            Devices: []shared.Device{
                shared.Device{
                    Description: sdk.String("temporibus"),
                    DeviceName: "temporibus",
                    IotThingName: sdk.String("eum"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ut",
                    Value: "nostrum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.RegisterDevicesXAmzTargetEnumSageMakerRegisterDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RenderUITemplate

Renders the UI template so that you can preview the worker's experience. 

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
    res, err := s.SDK.RenderUITemplate(ctx, operations.RenderUITemplateRequest{
        RenderUITemplateRequest: shared.RenderUITemplateRequest{
            HumanTaskUIArn: sdk.String("recusandae"),
            RoleArn: "deleniti",
            Task: shared.RenderableTask{
                Input: "dignissimos",
            },
            UITemplate: &shared.UITemplate{
                Content: "doloremque",
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.RenderUITemplateXAmzTargetEnumSageMakerRenderUITemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderUITemplateResponse != nil {
        // handle response
    }
}
```

## RetryPipelineExecution

Retry the execution of the pipeline.

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
    res, err := s.SDK.RetryPipelineExecution(ctx, operations.RetryPipelineExecutionRequest{
        RetryPipelineExecutionRequest: shared.RetryPipelineExecutionRequest{
            ClientRequestToken: "perspiciatis",
            ParallelismConfiguration: &shared.ParallelismConfiguration{
                MaxParallelExecutionSteps: 802188,
            },
            PipelineExecutionArn: "magni",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.RetryPipelineExecutionXAmzTargetEnumSageMakerRetryPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryPipelineExecutionResponse != nil {
        // handle response
    }
}
```

## Search

<p>Finds SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p> <note> <p>The Search API may provide access to otherwise restricted data. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference</a> for more information.</p> </note>

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
    res, err := s.SDK.Search(ctx, operations.SearchRequest{
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("illo"),
        SearchRequest: shared.SearchRequest{
            MaxResults: sdk.Int64(970032),
            NextToken: sdk.String("ipsum"),
            Resource: shared.ResourceTypeEnumTrainingJob,
            SearchExpression: &shared.SearchExpression{
                Filters: []shared.Filter{
                    shared.Filter{
                        Name: "Ethel Schultz",
                        Operator: shared.OperatorEnumContains.ToPointer(),
                        Value: sdk.String("ea"),
                    },
                    shared.Filter{
                        Name: "Evelyn Marks",
                        Operator: shared.OperatorEnumEquals.ToPointer(),
                        Value: sdk.String("reiciendis"),
                    },
                    shared.Filter{
                        Name: "Andrea Orn",
                        Operator: shared.OperatorEnumExists.ToPointer(),
                        Value: sdk.String("modi"),
                    },
                    shared.Filter{
                        Name: "Penny Swaniawski",
                        Operator: shared.OperatorEnumExists.ToPointer(),
                        Value: sdk.String("eos"),
                    },
                },
                NestedFilters: []shared.NestedFilters{
                    shared.NestedFilters{
                        Filters: []shared.Filter{
                            shared.Filter{
                                Name: "Erika Carter",
                                Operator: shared.OperatorEnumGreaterThan.ToPointer(),
                                Value: sdk.String("ad"),
                            },
                        },
                        NestedPropertyName: "voluptates",
                    },
                    shared.NestedFilters{
                        Filters: []shared.Filter{
                            shared.Filter{
                                Name: "Russell Beier",
                                Operator: shared.OperatorEnumExists.ToPointer(),
                                Value: sdk.String("excepturi"),
                            },
                        },
                        NestedPropertyName: "porro",
                    },
                },
                Operator: shared.BooleanOperatorEnumAnd.ToPointer(),
                SubExpressions: []shared.SearchExpression{
                    shared.SearchExpression{},
                    shared.SearchExpression{},
                    shared.SearchExpression{},
                    shared.SearchExpression{},
                },
            },
            SortBy: sdk.String("veniam"),
            SortOrder: shared.SearchSortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.SearchXAmzTargetEnumSageMakerSearch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```

## SendPipelineExecutionStepFailure

Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

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
    res, err := s.SDK.SendPipelineExecutionStepFailure(ctx, operations.SendPipelineExecutionStepFailureRequest{
        SendPipelineExecutionStepFailureRequest: shared.SendPipelineExecutionStepFailureRequest{
            CallbackToken: "odio",
            ClientRequestToken: sdk.String("suscipit"),
            FailureReason: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.SendPipelineExecutionStepFailureXAmzTargetEnumSageMakerSendPipelineExecutionStepFailure,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendPipelineExecutionStepFailureResponse != nil {
        // handle response
    }
}
```

## SendPipelineExecutionStepSuccess

Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

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
    res, err := s.SDK.SendPipelineExecutionStepSuccess(ctx, operations.SendPipelineExecutionStepSuccessRequest{
        SendPipelineExecutionStepSuccessRequest: shared.SendPipelineExecutionStepSuccessRequest{
            CallbackToken: "possimus",
            ClientRequestToken: sdk.String("laborum"),
            OutputParameters: []shared.OutputParameter{
                shared.OutputParameter{
                    Name: "Mr. Joe Wisozk",
                    Value: "inventore",
                },
                shared.OutputParameter{
                    Name: "Bernadette Waelchi",
                    Value: "sequi",
                },
                shared.OutputParameter{
                    Name: "Sheldon Leuschke",
                    Value: "enim",
                },
                shared.OutputParameter{
                    Name: "Taylor Barton V",
                    Value: "quibusdam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.SendPipelineExecutionStepSuccessXAmzTargetEnumSageMakerSendPipelineExecutionStepSuccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendPipelineExecutionStepSuccessResponse != nil {
        // handle response
    }
}
```

## StartEdgeDeploymentStage

Starts a stage in an edge deployment plan.

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
    res, err := s.SDK.StartEdgeDeploymentStage(ctx, operations.StartEdgeDeploymentStageRequest{
        StartEdgeDeploymentStageRequest: shared.StartEdgeDeploymentStageRequest{
            EdgeDeploymentPlanName: "necessitatibus",
            StageName: "velit",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.StartEdgeDeploymentStageXAmzTargetEnumSageMakerStartEdgeDeploymentStage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartInferenceExperiment

Starts an inference experiment.

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
    res, err := s.SDK.StartInferenceExperiment(ctx, operations.StartInferenceExperimentRequest{
        StartInferenceExperimentRequest: shared.StartInferenceExperimentRequest{
            Name: "Jon Wintheiser",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.StartInferenceExperimentXAmzTargetEnumSageMakerStartInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## StartMonitoringSchedule

<p>Starts a previously stopped monitoring schedule.</p> <note> <p>By default, when you successfully create a new schedule, the status of a monitoring schedule is <code>scheduled</code>.</p> </note>

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
    res, err := s.SDK.StartMonitoringSchedule(ctx, operations.StartMonitoringScheduleRequest{
        StartMonitoringScheduleRequest: shared.StartMonitoringScheduleRequest{
            MonitoringScheduleName: "ratione",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.StartMonitoringScheduleXAmzTargetEnumSageMakerStartMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartNotebookInstance

Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. 

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
    res, err := s.SDK.StartNotebookInstance(ctx, operations.StartNotebookInstanceRequest{
        StartNotebookInstanceInput: shared.StartNotebookInstanceInput{
            NotebookInstanceName: "aliquid",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.StartNotebookInstanceXAmzTargetEnumSageMakerStartNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartPipelineExecution

Starts a pipeline execution.

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
    res, err := s.SDK.StartPipelineExecution(ctx, operations.StartPipelineExecutionRequest{
        StartPipelineExecutionRequest: shared.StartPipelineExecutionRequest{
            ClientRequestToken: "perspiciatis",
            ParallelismConfiguration: &shared.ParallelismConfiguration{
                MaxParallelExecutionSteps: 415783,
            },
            PipelineExecutionDescription: sdk.String("dolores"),
            PipelineExecutionDisplayName: sdk.String("dicta"),
            PipelineName: "molestiae",
            PipelineParameters: []shared.Parameter{
                shared.Parameter{
                    Name: "Felicia Koepp",
                    Value: "voluptate",
                },
                shared.Parameter{
                    Name: "Edith Frami",
                    Value: "ad",
                },
                shared.Parameter{
                    Name: "Mary Fisher",
                    Value: "asperiores",
                },
                shared.Parameter{
                    Name: "Darrell McDermott PhD",
                    Value: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.StartPipelineExecutionXAmzTargetEnumSageMakerStartPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPipelineExecutionResponse != nil {
        // handle response
    }
}
```

## StopAutoMLJob

A method for forcing a running job to shut down.

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
    res, err := s.SDK.StopAutoMLJob(ctx, operations.StopAutoMLJobRequest{
        StopAutoMLJobRequest: shared.StopAutoMLJobRequest{
            AutoMLJobName: "adipisci",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.StopAutoMLJobXAmzTargetEnumSageMakerStopAutoMlJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopCompilationJob

<p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <code>CompilationJobStatus</code> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <code>CompilationJobStatus</code> to <code>Stopped</code>. </p>

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
    res, err := s.SDK.StopCompilationJob(ctx, operations.StopCompilationJobRequest{
        StopCompilationJobRequest: shared.StopCompilationJobRequest{
            CompilationJobName: "cumque",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.StopCompilationJobXAmzTargetEnumSageMakerStopCompilationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopEdgeDeploymentStage

Stops a stage in an edge deployment plan.

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
    res, err := s.SDK.StopEdgeDeploymentStage(ctx, operations.StopEdgeDeploymentStageRequest{
        StopEdgeDeploymentStageRequest: shared.StopEdgeDeploymentStageRequest{
            EdgeDeploymentPlanName: "unde",
            StageName: "labore",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.StopEdgeDeploymentStageXAmzTargetEnumSageMakerStopEdgeDeploymentStage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopEdgePackagingJob

Request to stop an edge packaging job.

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
    res, err := s.SDK.StopEdgePackagingJob(ctx, operations.StopEdgePackagingJobRequest{
        StopEdgePackagingJobRequest: shared.StopEdgePackagingJobRequest{
            EdgePackagingJobName: "officiis",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.StopEdgePackagingJobXAmzTargetEnumSageMakerStopEdgePackagingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopHyperParameterTuningJob

<p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>

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
    res, err := s.SDK.StopHyperParameterTuningJob(ctx, operations.StopHyperParameterTuningJobRequest{
        StopHyperParameterTuningJobRequest: shared.StopHyperParameterTuningJobRequest{
            HyperParameterTuningJobName: "iste",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.StopHyperParameterTuningJobXAmzTargetEnumSageMakerStopHyperParameterTuningJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopInferenceExperiment

Stops an inference experiment.

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
    res, err := s.SDK.StopInferenceExperiment(ctx, operations.StopInferenceExperimentRequest{
        StopInferenceExperimentRequest: shared.StopInferenceExperimentRequest{
            DesiredModelVariants: []shared.ModelVariantConfig{
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 127086,
                            InstanceType: shared.InstanceTypeEnumMlT2Xlarge,
                        },
                    },
                    ModelName: "eum",
                    VariantName: "nesciunt",
                },
            },
            DesiredState: shared.InferenceExperimentStopDesiredStateEnumCompleted.ToPointer(),
            ModelVariantActions: map[string]shared.ModelVariantActionEnum{
                "atque": shared.ModelVariantActionEnumRetain,
                "totam": shared.ModelVariantActionEnumRemove,
                "nemo": shared.ModelVariantActionEnumRetain,
            },
            Name: "Mr. Pete Bergstrom III",
            Reason: sdk.String("tempore"),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.StopInferenceExperimentXAmzTargetEnumSageMakerStopInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## StopInferenceRecommendationsJob

Stops an Inference Recommender job.

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
    res, err := s.SDK.StopInferenceRecommendationsJob(ctx, operations.StopInferenceRecommendationsJobRequest{
        StopInferenceRecommendationsJobRequest: shared.StopInferenceRecommendationsJobRequest{
            JobName: "quod",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.StopInferenceRecommendationsJobXAmzTargetEnumSageMakerStopInferenceRecommendationsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopLabelingJob

Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.

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
    res, err := s.SDK.StopLabelingJob(ctx, operations.StopLabelingJobRequest{
        StopLabelingJobRequest: shared.StopLabelingJobRequest{
            LabelingJobName: "perspiciatis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.StopLabelingJobXAmzTargetEnumSageMakerStopLabelingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopMonitoringSchedule

Stops a previously started monitoring schedule.

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
    res, err := s.SDK.StopMonitoringSchedule(ctx, operations.StopMonitoringScheduleRequest{
        StopMonitoringScheduleRequest: shared.StopMonitoringScheduleRequest{
            MonitoringScheduleName: "eveniet",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.StopMonitoringScheduleXAmzTargetEnumSageMakerStopMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopNotebookInstance

<p>Terminates the ML compute instance. Before terminating the instance, SageMaker disconnects the ML storage volume from it. SageMaker preserves the ML storage volume. SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>

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
    res, err := s.SDK.StopNotebookInstance(ctx, operations.StopNotebookInstanceRequest{
        StopNotebookInstanceInput: shared.StopNotebookInstanceInput{
            NotebookInstanceName: "veniam",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.StopNotebookInstanceXAmzTargetEnumSageMakerStopNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopPipelineExecution

<p>Stops a pipeline execution.</p> <p> <b>Callback Step</b> </p> <p>A pipeline execution won't stop while a callback step is running. When you call <code>StopPipelineExecution</code> on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping".</p> <p>You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to <code>SendPipelineExecutionStepSuccess</code> or <code>SendPipelineExecutionStepFailure</code>.</p> <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p> <p> <b>Lambda Step</b> </p> <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit the pipeline execution status is <code>Failed</code>.</p>

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
    res, err := s.SDK.StopPipelineExecution(ctx, operations.StopPipelineExecutionRequest{
        StopPipelineExecutionRequest: shared.StopPipelineExecutionRequest{
            ClientRequestToken: "sequi",
            PipelineExecutionArn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.StopPipelineExecutionXAmzTargetEnumSageMakerStopPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPipelineExecutionResponse != nil {
        // handle response
    }
}
```

## StopProcessingJob

Stops a processing job.

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
    res, err := s.SDK.StopProcessingJob(ctx, operations.StopProcessingJobRequest{
        StopProcessingJobRequest: shared.StopProcessingJobRequest{
            ProcessingJobName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.StopProcessingJobXAmzTargetEnumSageMakerStopProcessingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopTrainingJob

<p>Stops a training job. To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, SageMaker changes the status of the job to <code>Stopping</code>. After SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>

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
    res, err := s.SDK.StopTrainingJob(ctx, operations.StopTrainingJobRequest{
        StopTrainingJobRequest: shared.StopTrainingJobRequest{
            TrainingJobName: "nobis",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.StopTrainingJobXAmzTargetEnumSageMakerStopTrainingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopTransformJob

<p>Stops a batch transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>

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
    res, err := s.SDK.StopTransformJob(ctx, operations.StopTransformJobRequest{
        StopTransformJobRequest: shared.StopTransformJobRequest{
            TransformJobName: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.StopTransformJobXAmzTargetEnumSageMakerStopTransformJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAction

Updates an action.

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
    res, err := s.SDK.UpdateAction(ctx, operations.UpdateActionRequest{
        UpdateActionRequest: shared.UpdateActionRequest{
            ActionName: "libero",
            Description: sdk.String("dolor"),
            Properties: map[string]string{
                "vitae": "pariatur",
            },
            PropertiesToRemove: []string{
                "provident",
                "quia",
            },
            Status: shared.ActionStatusEnumStopped.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.UpdateActionXAmzTargetEnumSageMakerUpdateAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateActionResponse != nil {
        // handle response
    }
}
```

## UpdateAppImageConfig

Updates the properties of an AppImageConfig.

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
    res, err := s.SDK.UpdateAppImageConfig(ctx, operations.UpdateAppImageConfigRequest{
        UpdateAppImageConfigRequest: shared.UpdateAppImageConfigRequest{
            AppImageConfigName: "aperiam",
            KernelGatewayImageConfig: &shared.KernelGatewayImageConfig{
                FileSystemConfig: &shared.FileSystemConfig{
                    DefaultGid: sdk.Int64(906373),
                    DefaultUID: sdk.Int64(27863),
                    MountPath: sdk.String("soluta"),
                },
                KernelSpecs: []shared.KernelSpec{
                    shared.KernelSpec{
                        DisplayName: sdk.String("beatae"),
                        Name: "Ms. Casey Corkery",
                    },
                    shared.KernelSpec{
                        DisplayName: sdk.String("dignissimos"),
                        Name: "Drew Adams",
                    },
                    shared.KernelSpec{
                        DisplayName: sdk.String("impedit"),
                        Name: "Darren Kling",
                    },
                    shared.KernelSpec{
                        DisplayName: sdk.String("tempore"),
                        Name: "Mr. Bridget Koepp MD",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.UpdateAppImageConfigXAmzTargetEnumSageMakerUpdateAppImageConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppImageConfigResponse != nil {
        // handle response
    }
}
```

## UpdateArtifact

Updates an artifact.

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
    res, err := s.SDK.UpdateArtifact(ctx, operations.UpdateArtifactRequest{
        UpdateArtifactRequest: shared.UpdateArtifactRequest{
            ArtifactArn: "aliquam",
            ArtifactName: sdk.String("repudiandae"),
            Properties: map[string]string{
                "excepturi": "voluptatibus",
                "facilis": "doloremque",
                "officiis": "nisi",
            },
            PropertiesToRemove: []string{
                "necessitatibus",
                "alias",
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.UpdateArtifactXAmzTargetEnumSageMakerUpdateArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateArtifactResponse != nil {
        // handle response
    }
}
```

## UpdateCodeRepository

Updates the specified Git repository with the specified values.

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
    res, err := s.SDK.UpdateCodeRepository(ctx, operations.UpdateCodeRepositoryRequest{
        UpdateCodeRepositoryInput: shared.UpdateCodeRepositoryInput{
            CodeRepositoryName: "exercitationem",
            GitConfig: &shared.GitConfigForUpdate{
                SecretArn: sdk.String("exercitationem"),
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.UpdateCodeRepositoryXAmzTargetEnumSageMakerUpdateCodeRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCodeRepositoryOutput != nil {
        // handle response
    }
}
```

## UpdateContext

Updates a context.

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
    res, err := s.SDK.UpdateContext(ctx, operations.UpdateContextRequest{
        UpdateContextRequest: shared.UpdateContextRequest{
            ContextName: "velit",
            Description: sdk.String("ut"),
            Properties: map[string]string{
                "quasi": "rerum",
                "blanditiis": "sapiente",
                "recusandae": "perspiciatis",
            },
            PropertiesToRemove: []string{
                "reprehenderit",
                "dolorem",
                "sunt",
            },
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.UpdateContextXAmzTargetEnumSageMakerUpdateContext,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContextResponse != nil {
        // handle response
    }
}
```

## UpdateDeviceFleet

Updates a fleet of devices.

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
    res, err := s.SDK.UpdateDeviceFleet(ctx, operations.UpdateDeviceFleetRequest{
        UpdateDeviceFleetRequest: shared.UpdateDeviceFleetRequest{
            Description: sdk.String("quis"),
            DeviceFleetName: "fuga",
            EnableIotRoleAlias: sdk.Bool(false),
            OutputConfig: shared.EdgeOutputConfig{
                KmsKeyID: sdk.String("eveniet"),
                PresetDeploymentConfig: sdk.String("consequuntur"),
                PresetDeploymentType: shared.EdgePresetDeploymentTypeEnumGreengrassV2Component.ToPointer(),
                S3OutputLocation: "illum",
            },
            RoleArn: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.UpdateDeviceFleetXAmzTargetEnumSageMakerUpdateDeviceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDevices

Updates one or more devices in a fleet.

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
    res, err := s.SDK.UpdateDevices(ctx, operations.UpdateDevicesRequest{
        UpdateDevicesRequest: shared.UpdateDevicesRequest{
            DeviceFleetName: "odio",
            Devices: []shared.Device{
                shared.Device{
                    Description: sdk.String("magni"),
                    DeviceName: "sint",
                    IotThingName: sdk.String("consequatur"),
                },
                shared.Device{
                    Description: sdk.String("illum"),
                    DeviceName: "adipisci",
                    IotThingName: sdk.String("dolorem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.UpdateDevicesXAmzTargetEnumSageMakerUpdateDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDomain

Updates the default settings for new user profiles in the domain.

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
    res, err := s.SDK.UpdateDomain(ctx, operations.UpdateDomainRequest{
        UpdateDomainRequest: shared.UpdateDomainRequest{
            AppSecurityGroupManagement: shared.AppSecurityGroupManagementEnumService.ToPointer(),
            DefaultSpaceSettings: &shared.DefaultSpaceSettings{
                ExecutionRole: sdk.String("iure"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "doloribus",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "praesentium",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "iste",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "tempora",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM5d4xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("ab"),
                        SageMakerImageArn: sdk.String("harum"),
                        SageMakerImageVersionArn: sdk.String("facere"),
                    },
                    LifecycleConfigArns: []string{
                        "nisi",
                        "accusamus",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "necessitatibus",
                            ImageName: "nam",
                            ImageVersionNumber: sdk.Int64(367350),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "veritatis",
                            ImageName: "molestias",
                            ImageVersionNumber: sdk.Int64(772125),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "modi",
                            ImageName: "possimus",
                            ImageVersionNumber: sdk.Int64(626637),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "architecto",
                            ImageName: "asperiores",
                            ImageVersionNumber: sdk.Int64(670249),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlR524xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("dolor"),
                        SageMakerImageArn: sdk.String("nemo"),
                        SageMakerImageVersionArn: sdk.String("quis"),
                    },
                    LifecycleConfigArns: []string{
                        "odit",
                    },
                },
                SecurityGroups: []string{
                    "doloremque",
                    "laboriosam",
                    "nulla",
                    "dolore",
                },
            },
            DefaultUserSettings: &shared.UserSettings{
                CanvasAppSettings: &shared.CanvasAppSettings{
                    ModelRegisterSettings: &shared.ModelRegisterSettings{
                        CrossAccountModelRegisterRoleArn: sdk.String("itaque"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                    TimeSeriesForecastingSettings: &shared.TimeSeriesForecastingSettings{
                        AmazonForecastRoleArn: sdk.String("nam"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                },
                ExecutionRole: sdk.String("consequuntur"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "alias",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "doloribus",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "nemo",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "dolore",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlP32xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("exercitationem"),
                        SageMakerImageArn: sdk.String("commodi"),
                        SageMakerImageVersionArn: sdk.String("laudantium"),
                    },
                    LifecycleConfigArns: []string{
                        "consequatur",
                        "incidunt",
                        "dolores",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "earum",
                            ImageName: "consequatur",
                            ImageVersionNumber: sdk.Int64(29435),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "officia",
                            ImageName: "architecto",
                            ImageVersionNumber: sdk.Int64(845984),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlC5Xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("voluptates"),
                        SageMakerImageArn: sdk.String("tempore"),
                        SageMakerImageVersionArn: sdk.String("cupiditate"),
                    },
                    LifecycleConfigArns: []string{
                        "ratione",
                        "aliquam",
                    },
                },
                RSessionAppSettings: &shared.RSessionAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "aliquam",
                            ImageName: "corporis",
                            ImageVersionNumber: sdk.Int64(872602),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "ipsa",
                            ImageName: "amet",
                            ImageVersionNumber: sdk.Int64(14082),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlP38xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("quaerat"),
                        SageMakerImageArn: sdk.String("repellat"),
                        SageMakerImageVersionArn: sdk.String("expedita"),
                    },
                },
                RStudioServerProAppSettings: &shared.RStudioServerProAppSettings{
                    AccessStatus: shared.RStudioServerProAccessStatusEnumDisabled.ToPointer(),
                    UserGroup: shared.RStudioServerProUserGroupEnumRStudioUser.ToPointer(),
                },
                SecurityGroups: []string{
                    "cumque",
                    "cumque",
                },
                SharingSettings: &shared.SharingSettings{
                    NotebookOutputOption: shared.NotebookOutputOptionEnumDisabled.ToPointer(),
                    S3KmsKeyID: sdk.String("a"),
                    S3OutputPath: sdk.String("tenetur"),
                },
                TensorBoardAppSettings: &shared.TensorBoardAppSettings{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM5d16xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("quod"),
                        SageMakerImageArn: sdk.String("facilis"),
                        SageMakerImageVersionArn: sdk.String("doloremque"),
                    },
                },
            },
            DomainID: "illo",
            DomainSettingsForUpdate: &shared.DomainSettingsForUpdate{
                ExecutionRoleIdentityConfig: shared.ExecutionRoleIdentityConfigEnumDisabled.ToPointer(),
                RStudioServerProDomainSettingsForUpdate: &shared.RStudioServerProDomainSettingsForUpdate{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG54xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("enim"),
                        SageMakerImageArn: sdk.String("quasi"),
                        SageMakerImageVersionArn: sdk.String("accusamus"),
                    },
                    DomainExecutionRoleArn: "ipsam",
                    RStudioConnectURL: sdk.String("aspernatur"),
                    RStudioPackageManagerURL: sdk.String("atque"),
                },
                SecurityGroupIds: []string{
                    "eius",
                    "ad",
                    "mollitia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.UpdateDomainXAmzTargetEnumSageMakerUpdateDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainResponse != nil {
        // handle response
    }
}
```

## UpdateEndpoint

<p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>

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
    res, err := s.SDK.UpdateEndpoint(ctx, operations.UpdateEndpointRequest{
        UpdateEndpointInput: shared.UpdateEndpointInput{
            DeploymentConfig: &shared.DeploymentConfig{
                AutoRollbackConfiguration: &shared.AutoRollbackConfig{
                    Alarms: []shared.Alarm{
                        shared.Alarm{
                            AlarmName: sdk.String("libero"),
                        },
                        shared.Alarm{
                            AlarmName: sdk.String("placeat"),
                        },
                        shared.Alarm{
                            AlarmName: sdk.String("explicabo"),
                        },
                    },
                },
                BlueGreenUpdatePolicy: shared.BlueGreenUpdatePolicy{
                    MaximumExecutionTimeoutInSeconds: sdk.Int64(810697),
                    TerminationWaitInSeconds: sdk.Int64(658217),
                    TrafficRoutingConfiguration: shared.TrafficRoutingConfig{
                        CanarySize: &shared.CapacitySize{
                            Type: shared.CapacitySizeTypeEnumCapacityPercent,
                            Value: 671397,
                        },
                        LinearStepSize: &shared.CapacitySize{
                            Type: shared.CapacitySizeTypeEnumCapacityPercent,
                            Value: 825782,
                        },
                        Type: shared.TrafficRoutingConfigTypeEnumLinear,
                        WaitIntervalInSeconds: 296732,
                    },
                },
            },
            EndpointConfigName: "veritatis",
            EndpointName: "fugit",
            ExcludeRetainedVariantProperties: []shared.VariantProperty{
                shared.VariantProperty{
                    VariantPropertyType: shared.VariantPropertyTypeEnumDataCaptureConfig,
                },
                shared.VariantProperty{
                    VariantPropertyType: shared.VariantPropertyTypeEnumDataCaptureConfig,
                },
            },
            RetainAllVariantProperties: sdk.Bool(false),
            RetainDeploymentConfig: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.UpdateEndpointXAmzTargetEnumSageMakerUpdateEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEndpointOutput != nil {
        // handle response
    }
}
```

## UpdateEndpointWeightsAndCapacities

Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. 

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
    res, err := s.SDK.UpdateEndpointWeightsAndCapacities(ctx, operations.UpdateEndpointWeightsAndCapacitiesRequest{
        UpdateEndpointWeightsAndCapacitiesInput: shared.UpdateEndpointWeightsAndCapacitiesInput{
            DesiredWeightsAndCapacities: []shared.DesiredWeightAndCapacity{
                shared.DesiredWeightAndCapacity{
                    DesiredInstanceCount: sdk.Int64(81613),
                    DesiredWeight: sdk.Float32(6266.14),
                    VariantName: "id",
                },
            },
            EndpointName: "et",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UpdateEndpointWeightsAndCapacitiesXAmzTargetEnumSageMakerUpdateEndpointWeightsAndCapacities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEndpointWeightsAndCapacitiesOutput != nil {
        // handle response
    }
}
```

## UpdateExperiment

Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.

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
    res, err := s.SDK.UpdateExperiment(ctx, operations.UpdateExperimentRequest{
        UpdateExperimentRequest: shared.UpdateExperimentRequest{
            Description: sdk.String("placeat"),
            DisplayName: sdk.String("necessitatibus"),
            ExperimentName: "quisquam",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.UpdateExperimentXAmzTargetEnumSageMakerUpdateExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateExperimentResponse != nil {
        // handle response
    }
}
```

## UpdateFeatureGroup

Updates the feature group.

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
    res, err := s.SDK.UpdateFeatureGroup(ctx, operations.UpdateFeatureGroupRequest{
        UpdateFeatureGroupRequest: shared.UpdateFeatureGroupRequest{
            FeatureAdditions: []shared.FeatureDefinition{
                shared.FeatureDefinition{
                    FeatureName: sdk.String("deleniti"),
                    FeatureType: shared.FeatureTypeEnumIntegral.ToPointer(),
                },
                shared.FeatureDefinition{
                    FeatureName: sdk.String("totam"),
                    FeatureType: shared.FeatureTypeEnumString.ToPointer(),
                },
            },
            FeatureGroupName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.UpdateFeatureGroupXAmzTargetEnumSageMakerUpdateFeatureGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFeatureGroupResponse != nil {
        // handle response
    }
}
```

## UpdateFeatureMetadata

Updates the description and parameters of the feature group.

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
    res, err := s.SDK.UpdateFeatureMetadata(ctx, operations.UpdateFeatureMetadataRequest{
        UpdateFeatureMetadataRequest: shared.UpdateFeatureMetadataRequest{
            Description: sdk.String("architecto"),
            FeatureGroupName: "nulla",
            FeatureName: "qui",
            ParameterAdditions: []shared.FeatureParameter{
                shared.FeatureParameter{
                    Key: sdk.String("ratione"),
                    Value: sdk.String("soluta"),
                },
                shared.FeatureParameter{
                    Key: sdk.String("quos"),
                    Value: sdk.String("sit"),
                },
                shared.FeatureParameter{
                    Key: sdk.String("laudantium"),
                    Value: sdk.String("sit"),
                },
                shared.FeatureParameter{
                    Key: sdk.String("perspiciatis"),
                    Value: sdk.String("quaerat"),
                },
            },
            ParameterRemovals: []string{
                "molestiae",
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.UpdateFeatureMetadataXAmzTargetEnumSageMakerUpdateFeatureMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateHub

<p>Update a hub.</p> <note> <p>Hub APIs are only callable through SageMaker Studio.</p> </note>

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
    res, err := s.SDK.UpdateHub(ctx, operations.UpdateHubRequest{
        UpdateHubRequest: shared.UpdateHubRequest{
            HubDescription: sdk.String("excepturi"),
            HubDisplayName: sdk.String("soluta"),
            HubName: "voluptates",
            HubSearchKeywords: []string{
                "cum",
                "est",
                "fugiat",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.UpdateHubXAmzTargetEnumSageMakerUpdateHub,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHubResponse != nil {
        // handle response
    }
}
```

## UpdateImage

Updates the properties of a SageMaker image. To change the image's tags, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html">DeleteTags</a> APIs.

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
    res, err := s.SDK.UpdateImage(ctx, operations.UpdateImageRequest{
        UpdateImageRequest: shared.UpdateImageRequest{
            DeleteProperties: []string{
                "quod",
                "a",
                "et",
            },
            Description: sdk.String("ipsam"),
            DisplayName: sdk.String("eos"),
            ImageName: "exercitationem",
            RoleArn: sdk.String("minima"),
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.UpdateImageXAmzTargetEnumSageMakerUpdateImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImageResponse != nil {
        // handle response
    }
}
```

## UpdateImageVersion

Updates the properties of a SageMaker image version.

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
    res, err := s.SDK.UpdateImageVersion(ctx, operations.UpdateImageVersionRequest{
        UpdateImageVersionRequest: shared.UpdateImageVersionRequest{
            Alias: sdk.String("itaque"),
            AliasesToAdd: []string{
                "porro",
                "nulla",
            },
            AliasesToDelete: []string{
                "qui",
            },
            Horovod: sdk.Bool(false),
            ImageName: "in",
            JobType: shared.JobTypeEnumTraining.ToPointer(),
            MLFramework: sdk.String("vel"),
            Processor: shared.ProcessorEnumGpu.ToPointer(),
            ProgrammingLang: sdk.String("consectetur"),
            ReleaseNotes: sdk.String("quis"),
            VendorGuidance: shared.VendorGuidanceEnumStable.ToPointer(),
            Version: sdk.Int64(668155),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.UpdateImageVersionXAmzTargetEnumSageMakerUpdateImageVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImageVersionResponse != nil {
        // handle response
    }
}
```

## UpdateInferenceExperiment

 Updates an inference experiment that you created. The status of the inference experiment has to be either <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>. 

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
    res, err := s.SDK.UpdateInferenceExperiment(ctx, operations.UpdateInferenceExperimentRequest{
        UpdateInferenceExperimentRequest: shared.UpdateInferenceExperimentRequest{
            DataStorageConfig: &shared.InferenceExperimentDataStorageConfig{
                ContentType: &shared.CaptureContentTypeHeader{
                    CsvContentTypes: []string{
                        "inventore",
                        "esse",
                        "ex",
                        "amet",
                    },
                    JSONContentTypes: []string{
                        "ad",
                        "explicabo",
                        "alias",
                        "blanditiis",
                    },
                },
                Destination: "eligendi",
                KmsKey: sdk.String("qui"),
            },
            Description: sdk.String("amet"),
            ModelVariants: []shared.ModelVariantConfig{
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 597921,
                            InstanceType: shared.InstanceTypeEnumMlC5d4xlarge,
                        },
                    },
                    ModelName: "sit",
                    VariantName: "magni",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 834499,
                            InstanceType: shared.InstanceTypeEnumMlC5d9xlarge,
                        },
                    },
                    ModelName: "ratione",
                    VariantName: "sapiente",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 4768,
                            InstanceType: shared.InstanceTypeEnumMlR58xlarge,
                        },
                    },
                    ModelName: "magnam",
                    VariantName: "quis",
                },
                shared.ModelVariantConfig{
                    InfrastructureConfig: shared.ModelInfrastructureConfig{
                        InfrastructureType: shared.ModelInfrastructureTypeEnumRealTimeInference,
                        RealTimeInferenceConfig: shared.RealTimeInferenceConfig{
                            InstanceCount: 920488,
                            InstanceType: shared.InstanceTypeEnumMlG4dn12xlarge,
                        },
                    },
                    ModelName: "eius",
                    VariantName: "fuga",
                },
            },
            Name: "Robin Jaskolski",
            Schedule: &shared.InferenceExperimentSchedule{
                EndTime: types.MustTimeFromString("2020-03-21T13:08:52.539Z"),
                StartTime: types.MustTimeFromString("2022-03-19T00:24:16.492Z"),
            },
            ShadowModeConfig: &shared.ShadowModeConfig{
                ShadowModelVariants: []shared.ShadowModelVariantConfig{
                    shared.ShadowModelVariantConfig{
                        SamplingPercentage: 761914,
                        ShadowModelVariantName: "sunt",
                    },
                    shared.ShadowModelVariantConfig{
                        SamplingPercentage: 526107,
                        ShadowModelVariantName: "itaque",
                    },
                    shared.ShadowModelVariantConfig{
                        SamplingPercentage: 824862,
                        ShadowModelVariantName: "optio",
                    },
                    shared.ShadowModelVariantConfig{
                        SamplingPercentage: 458429,
                        ShadowModelVariantName: "a",
                    },
                },
                SourceModelVariantName: "quam",
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.UpdateInferenceExperimentXAmzTargetEnumSageMakerUpdateInferenceExperiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInferenceExperimentResponse != nil {
        // handle response
    }
}
```

## UpdateModelCard

<p>Update an Amazon SageMaker Model Card.</p> <important> <p>You cannot update both model card content and model card status in a single call.</p> </important>

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
    res, err := s.SDK.UpdateModelCard(ctx, operations.UpdateModelCardRequest{
        UpdateModelCardRequest: shared.UpdateModelCardRequest{
            Content: sdk.String("eius"),
            ModelCardName: "rerum",
            ModelCardStatus: shared.ModelCardStatusEnumDraft.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.UpdateModelCardXAmzTargetEnumSageMakerUpdateModelCard,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModelCardResponse != nil {
        // handle response
    }
}
```

## UpdateModelPackage

Updates a versioned model.

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
    res, err := s.SDK.UpdateModelPackage(ctx, operations.UpdateModelPackageRequest{
        UpdateModelPackageInput: shared.UpdateModelPackageInput{
            AdditionalInferenceSpecificationsToAdd: []shared.AdditionalInferenceSpecificationDefinition{
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("aut"),
                            Environment: map[string]string{
                                "voluptatibus": "dolore",
                                "aspernatur": "harum",
                                "illum": "dolor",
                                "porro": "iste",
                            },
                            Framework: sdk.String("earum"),
                            FrameworkVersion: sdk.String("vitae"),
                            Image: "impedit",
                            ImageDigest: sdk.String("eligendi"),
                            ModelDataURL: sdk.String("veniam"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "aperiam",
                            },
                            NearestModelName: sdk.String("consectetur"),
                            ProductID: sdk.String("repellat"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("voluptas"),
                            Environment: map[string]string{
                                "nesciunt": "iste",
                                "distinctio": "cumque",
                                "assumenda": "alias",
                                "deserunt": "vel",
                            },
                            Framework: sdk.String("qui"),
                            FrameworkVersion: sdk.String("perspiciatis"),
                            Image: "accusantium",
                            ImageDigest: sdk.String("voluptatibus"),
                            ModelDataURL: sdk.String("occaecati"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "nemo",
                            },
                            NearestModelName: sdk.String("quam"),
                            ProductID: sdk.String("reiciendis"),
                        },
                    },
                    Description: sdk.String("nesciunt"),
                    Name: "Vernon Bernhard",
                    SupportedContentTypes: []string{
                        "possimus",
                        "molestiae",
                        "officiis",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlC6i32xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlM44xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlInf1Xlarge,
                        shared.ProductionVariantInstanceTypeEnumMlM6gXlarge,
                    },
                    SupportedResponseMIMETypes: []string{
                        "eveniet",
                        "quae",
                        "adipisci",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlC42xlarge,
                        shared.TransformInstanceTypeEnumMlC44xlarge,
                        shared.TransformInstanceTypeEnumMlM512xlarge,
                        shared.TransformInstanceTypeEnumMlM5Large,
                    },
                },
                shared.AdditionalInferenceSpecificationDefinition{
                    Containers: []shared.ModelPackageContainerDefinition{
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("unde"),
                            Environment: map[string]string{
                                "nam": "provident",
                                "fugiat": "recusandae",
                                "non": "aut",
                                "neque": "quia",
                            },
                            Framework: sdk.String("soluta"),
                            FrameworkVersion: sdk.String("fuga"),
                            Image: "qui",
                            ImageDigest: sdk.String("commodi"),
                            ModelDataURL: sdk.String("a"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "temporibus",
                            },
                            NearestModelName: sdk.String("sequi"),
                            ProductID: sdk.String("eum"),
                        },
                        shared.ModelPackageContainerDefinition{
                            ContainerHostname: sdk.String("rem"),
                            Environment: map[string]string{
                                "animi": "excepturi",
                                "dolores": "dicta",
                                "laboriosam": "distinctio",
                            },
                            Framework: sdk.String("quo"),
                            FrameworkVersion: sdk.String("facilis"),
                            Image: "magnam",
                            ImageDigest: sdk.String("dicta"),
                            ModelDataURL: sdk.String("nostrum"),
                            ModelInput: &shared.ModelInput{
                                DataInputConfig: "molestias",
                            },
                            NearestModelName: sdk.String("neque"),
                            ProductID: sdk.String("quis"),
                        },
                    },
                    Description: sdk.String("optio"),
                    Name: "Sylvia Jones IV",
                    SupportedContentTypes: []string{
                        "ratione",
                    },
                    SupportedRealtimeInferenceInstanceTypes: []shared.ProductionVariantInstanceTypeEnum{
                        shared.ProductionVariantInstanceTypeEnumMlC5Large,
                    },
                    SupportedResponseMIMETypes: []string{
                        "recusandae",
                    },
                    SupportedTransformInstanceTypes: []shared.TransformInstanceTypeEnum{
                        shared.TransformInstanceTypeEnumMlM524xlarge,
                        shared.TransformInstanceTypeEnumMlM4Xlarge,
                        shared.TransformInstanceTypeEnumMlC48xlarge,
                        shared.TransformInstanceTypeEnumMlP38xlarge,
                    },
                },
            },
            ApprovalDescription: sdk.String("rerum"),
            CustomerMetadataProperties: map[string]string{
                "nemo": "architecto",
                "vel": "amet",
                "facilis": "libero",
                "maxime": "deserunt",
            },
            CustomerMetadataPropertiesToRemove: []string{
                "molestias",
                "dolores",
            },
            ModelApprovalStatus: shared.ModelApprovalStatusEnumApproved.ToPointer(),
            ModelPackageArn: "reprehenderit",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.UpdateModelPackageXAmzTargetEnumSageMakerUpdateModelPackage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModelPackageOutput != nil {
        // handle response
    }
}
```

## UpdateMonitoringAlert

Update the parameters of a model monitor alert.

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
    res, err := s.SDK.UpdateMonitoringAlert(ctx, operations.UpdateMonitoringAlertRequest{
        UpdateMonitoringAlertRequest: shared.UpdateMonitoringAlertRequest{
            DatapointsToAlert: 326775,
            EvaluationPeriod: 369223,
            MonitoringAlertName: "sequi",
            MonitoringScheduleName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.UpdateMonitoringAlertXAmzTargetEnumSageMakerUpdateMonitoringAlert,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMonitoringAlertResponse != nil {
        // handle response
    }
}
```

## UpdateMonitoringSchedule

Updates a previously created schedule.

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
    res, err := s.SDK.UpdateMonitoringSchedule(ctx, operations.UpdateMonitoringScheduleRequest{
        UpdateMonitoringScheduleRequest: shared.UpdateMonitoringScheduleRequest{
            MonitoringScheduleConfig: shared.MonitoringScheduleConfig{
                MonitoringJobDefinition: &shared.MonitoringJobDefinition{
                    BaselineConfig: &shared.MonitoringBaselineConfig{
                        BaseliningJobName: sdk.String("quidem"),
                        ConstraintsResource: &shared.MonitoringConstraintsResource{
                            S3URI: sdk.String("harum"),
                        },
                        StatisticsResource: &shared.MonitoringStatisticsResource{
                            S3URI: sdk.String("adipisci"),
                        },
                    },
                    Environment: map[string]string{
                        "minima": "reprehenderit",
                        "quo": "vitae",
                        "voluptates": "tempora",
                        "iste": "molestias",
                    },
                    MonitoringAppSpecification: shared.MonitoringAppSpecification{
                        ContainerArguments: []string{
                            "itaque",
                        },
                        ContainerEntrypoint: []string{
                            "dolorum",
                            "similique",
                            "qui",
                        },
                        ImageURI: "enim",
                        PostAnalyticsProcessorSourceURI: sdk.String("quam"),
                        RecordPreprocessorSourceURI: sdk.String("assumenda"),
                    },
                    MonitoringInputs: []shared.MonitoringInput{
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "porro",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "sint": "inventore",
                                    },
                                },
                                EndTimeOffset: sdk.String("fugit"),
                                FeaturesAttribute: sdk.String("earum"),
                                InferenceAttribute: sdk.String("quidem"),
                                LocalPath: "at",
                                ProbabilityAttribute: sdk.String("debitis"),
                                ProbabilityThresholdAttribute: sdk.Float64(4286.45),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("sapiente"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("porro"),
                                EndpointName: "impedit",
                                FeaturesAttribute: sdk.String("veniam"),
                                InferenceAttribute: sdk.String("magnam"),
                                LocalPath: "iure",
                                ProbabilityAttribute: sdk.String("natus"),
                                ProbabilityThresholdAttribute: sdk.Float64(8606.63),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("architecto"),
                            },
                        },
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "quis",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "reiciendis": "est",
                                        "esse": "iste",
                                        "ex": "odit",
                                        "voluptatem": "voluptas",
                                    },
                                },
                                EndTimeOffset: sdk.String("libero"),
                                FeaturesAttribute: sdk.String("vero"),
                                InferenceAttribute: sdk.String("hic"),
                                LocalPath: "consequuntur",
                                ProbabilityAttribute: sdk.String("quidem"),
                                ProbabilityThresholdAttribute: sdk.Float64(479.02),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("itaque"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("non"),
                                EndpointName: "quia",
                                FeaturesAttribute: sdk.String("porro"),
                                InferenceAttribute: sdk.String("architecto"),
                                LocalPath: "deserunt",
                                ProbabilityAttribute: sdk.String("fuga"),
                                ProbabilityThresholdAttribute: sdk.Float64(173.42),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("eveniet"),
                            },
                        },
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "excepturi",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "culpa": "quo",
                                        "sunt": "necessitatibus",
                                        "iste": "veritatis",
                                    },
                                },
                                EndTimeOffset: sdk.String("adipisci"),
                                FeaturesAttribute: sdk.String("quis"),
                                InferenceAttribute: sdk.String("quis"),
                                LocalPath: "quos",
                                ProbabilityAttribute: sdk.String("ea"),
                                ProbabilityThresholdAttribute: sdk.Float64(8538.36),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("delectus"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("sint"),
                                EndpointName: "voluptatibus",
                                FeaturesAttribute: sdk.String("sint"),
                                InferenceAttribute: sdk.String("reprehenderit"),
                                LocalPath: "est",
                                ProbabilityAttribute: sdk.String("numquam"),
                                ProbabilityThresholdAttribute: sdk.Float64(7240.97),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("facere"),
                            },
                        },
                        shared.MonitoringInput{
                            BatchTransformInput: &shared.BatchTransformInput{
                                DataCapturedDestinationS3URI: "odit",
                                DatasetFormat: shared.MonitoringDatasetFormat{
                                    Csv: &shared.MonitoringCsvDatasetFormat{
                                        Header: sdk.Bool(false),
                                    },
                                    JSON: &shared.MonitoringJSONDatasetFormat{
                                        Line: sdk.Bool(false),
                                    },
                                    Parquet: map[string]interface{}{
                                        "asperiores": "quam",
                                        "fugiat": "ea",
                                        "molestiae": "quo",
                                    },
                                },
                                EndTimeOffset: sdk.String("deserunt"),
                                FeaturesAttribute: sdk.String("totam"),
                                InferenceAttribute: sdk.String("modi"),
                                LocalPath: "id",
                                ProbabilityAttribute: sdk.String("repellendus"),
                                ProbabilityThresholdAttribute: sdk.Float64(5661.93),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumShardedByS3Key.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumFile.ToPointer(),
                                StartTimeOffset: sdk.String("eius"),
                            },
                            EndpointInput: &shared.EndpointInput{
                                EndTimeOffset: sdk.String("quasi"),
                                EndpointName: "quibusdam",
                                FeaturesAttribute: sdk.String("voluptas"),
                                InferenceAttribute: sdk.String("quasi"),
                                LocalPath: "magni",
                                ProbabilityAttribute: sdk.String("numquam"),
                                ProbabilityThresholdAttribute: sdk.Float64(2420.44),
                                S3DataDistributionType: shared.ProcessingS3DataDistributionTypeEnumFullyReplicated.ToPointer(),
                                S3InputMode: shared.ProcessingS3InputModeEnumPipe.ToPointer(),
                                StartTimeOffset: sdk.String("sunt"),
                            },
                        },
                    },
                    MonitoringOutputConfig: shared.MonitoringOutputConfig{
                        KmsKeyID: sdk.String("blanditiis"),
                        MonitoringOutputs: []shared.MonitoringOutput{
                            shared.MonitoringOutput{
                                S3Output: shared.MonitoringS3Output{
                                    LocalPath: "perferendis",
                                    S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                                    S3URI: "delectus",
                                },
                            },
                            shared.MonitoringOutput{
                                S3Output: shared.MonitoringS3Output{
                                    LocalPath: "ea",
                                    S3UploadMode: shared.ProcessingS3UploadModeEnumEndOfJob.ToPointer(),
                                    S3URI: "quidem",
                                },
                            },
                        },
                    },
                    MonitoringResources: shared.MonitoringResources{
                        ClusterConfig: shared.MonitoringClusterConfig{
                            InstanceCount: 52571,
                            InstanceType: shared.ProcessingInstanceTypeEnumMlM416xlarge,
                            VolumeKmsKeyID: sdk.String("fuga"),
                            VolumeSizeInGB: 827030,
                        },
                    },
                    NetworkConfig: &shared.NetworkConfig{
                        EnableInterContainerTrafficEncryption: sdk.Bool(false),
                        EnableNetworkIsolation: sdk.Bool(false),
                        VpcConfig: &shared.VpcConfig{
                            SecurityGroupIds: []string{
                                "dolores",
                                "beatae",
                            },
                            Subnets: []string{
                                "repellendus",
                                "ut",
                                "nesciunt",
                            },
                        },
                    },
                    RoleArn: "facere",
                    StoppingCondition: &shared.MonitoringStoppingCondition{
                        MaxRuntimeInSeconds: 104754,
                    },
                },
                MonitoringJobDefinitionName: sdk.String("delectus"),
                MonitoringType: shared.MonitoringTypeEnumDataQuality.ToPointer(),
                ScheduleConfig: &shared.ScheduleConfig{
                    ScheduleExpression: "quo",
                },
            },
            MonitoringScheduleName: "libero",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.UpdateMonitoringScheduleXAmzTargetEnumSageMakerUpdateMonitoringSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMonitoringScheduleResponse != nil {
        // handle response
    }
}
```

## UpdateNotebookInstance

Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.

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
    res, err := s.SDK.UpdateNotebookInstance(ctx, operations.UpdateNotebookInstanceRequest{
        UpdateNotebookInstanceInput: shared.UpdateNotebookInstanceInput{
            AcceleratorTypes: []shared.NotebookInstanceAcceleratorTypeEnum{
                shared.NotebookInstanceAcceleratorTypeEnumMlEia1Large,
                shared.NotebookInstanceAcceleratorTypeEnumMlEia1Medium,
                shared.NotebookInstanceAcceleratorTypeEnumMlEia2Xlarge,
            },
            AdditionalCodeRepositories: []string{
                "tempore",
                "dolorem",
                "dolorum",
            },
            DefaultCodeRepository: sdk.String("in"),
            DisassociateAcceleratorTypes: sdk.Bool(false),
            DisassociateAdditionalCodeRepositories: sdk.Bool(false),
            DisassociateDefaultCodeRepository: sdk.Bool(false),
            DisassociateLifecycleConfig: sdk.Bool(false),
            InstanceMetadataServiceConfiguration: &shared.InstanceMetadataServiceConfiguration{
                MinimumInstanceMetadataServiceVersion: "aperiam",
            },
            InstanceType: shared.InstanceTypeEnumMlR516xlarge.ToPointer(),
            LifecycleConfigName: sdk.String("excepturi"),
            NotebookInstanceName: "aliquam",
            RoleArn: sdk.String("voluptatibus"),
            RootAccess: shared.RootAccessEnumDisabled.ToPointer(),
            VolumeSizeInGB: sdk.Int64(646495),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.UpdateNotebookInstanceXAmzTargetEnumSageMakerUpdateNotebookInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotebookInstanceOutput != nil {
        // handle response
    }
}
```

## UpdateNotebookInstanceLifecycleConfig

Updates a notebook instance lifecycle configuration created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.

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
    res, err := s.SDK.UpdateNotebookInstanceLifecycleConfig(ctx, operations.UpdateNotebookInstanceLifecycleConfigRequest{
        UpdateNotebookInstanceLifecycleConfigInput: shared.UpdateNotebookInstanceLifecycleConfigInput{
            NotebookInstanceLifecycleConfigName: "dicta",
            OnCreate: []shared.NotebookInstanceLifecycleHook{
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("vero"),
                },
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("quibusdam"),
                },
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("maxime"),
                },
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("consequuntur"),
                },
            },
            OnStart: []shared.NotebookInstanceLifecycleHook{
                shared.NotebookInstanceLifecycleHook{
                    Content: sdk.String("nostrum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.UpdateNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerUpdateNotebookInstanceLifecycleConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotebookInstanceLifecycleConfigOutput != nil {
        // handle response
    }
}
```

## UpdatePipeline

Updates a pipeline.

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
    res, err := s.SDK.UpdatePipeline(ctx, operations.UpdatePipelineRequest{
        UpdatePipelineRequest: shared.UpdatePipelineRequest{
            ParallelismConfiguration: &shared.ParallelismConfiguration{
                MaxParallelExecutionSteps: 777784,
            },
            PipelineDefinition: sdk.String("repudiandae"),
            PipelineDefinitionS3Location: &shared.PipelineDefinitionS3Location{
                Bucket: "ab",
                ObjectKey: "praesentium",
                VersionID: sdk.String("nostrum"),
            },
            PipelineDescription: sdk.String("labore"),
            PipelineDisplayName: sdk.String("iusto"),
            PipelineName: "sunt",
            RoleArn: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.UpdatePipelineXAmzTargetEnumSageMakerUpdatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineResponse != nil {
        // handle response
    }
}
```

## UpdatePipelineExecution

Updates a pipeline execution.

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
    res, err := s.SDK.UpdatePipelineExecution(ctx, operations.UpdatePipelineExecutionRequest{
        UpdatePipelineExecutionRequest: shared.UpdatePipelineExecutionRequest{
            ParallelismConfiguration: &shared.ParallelismConfiguration{
                MaxParallelExecutionSteps: 404542,
            },
            PipelineExecutionArn: "error",
            PipelineExecutionDescription: sdk.String("deleniti"),
            PipelineExecutionDisplayName: sdk.String("tempore"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.UpdatePipelineExecutionXAmzTargetEnumSageMakerUpdatePipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineExecutionResponse != nil {
        // handle response
    }
}
```

## UpdateProject

<p>Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model.</p> <note> <p>You must not update a project that is in use. If you update the <code>ServiceCatalogProvisioningUpdateDetails</code> of a project that is active or being created, or updated, you may lose resources already created by the project.</p> </note>

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
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        UpdateProjectInput: shared.UpdateProjectInput{
            ProjectDescription: sdk.String("porro"),
            ProjectName: "blanditiis",
            ServiceCatalogProvisioningUpdateDetails: &shared.ServiceCatalogProvisioningUpdateDetails{
                ProvisioningArtifactID: sdk.String("libero"),
                ProvisioningParameters: []shared.ProvisioningParameter{
                    shared.ProvisioningParameter{
                        Key: sdk.String("laborum"),
                        Value: sdk.String("fugit"),
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dignissimos",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "quo",
                    Value: "nisi",
                },
                shared.Tag{
                    Key: "quo",
                    Value: "inventore",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.UpdateProjectXAmzTargetEnumSageMakerUpdateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectOutput != nil {
        // handle response
    }
}
```

## UpdateSpace

Updates the settings of a space.

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
    res, err := s.SDK.UpdateSpace(ctx, operations.UpdateSpaceRequest{
        UpdateSpaceRequest: shared.UpdateSpaceRequest{
            DomainID: "voluptate",
            SpaceName: "repellendus",
            SpaceSettings: &shared.SpaceSettings{
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "deserunt",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG4dn2xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("impedit"),
                        SageMakerImageArn: sdk.String("laudantium"),
                        SageMakerImageVersionArn: sdk.String("nihil"),
                    },
                    LifecycleConfigArns: []string{
                        "repudiandae",
                        "nemo",
                        "voluptatem",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "vitae",
                            ImageName: "vel",
                            ImageVersionNumber: sdk.Int64(376017),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "laboriosam",
                            ImageName: "veritatis",
                            ImageVersionNumber: sdk.Int64(626381),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "veritatis",
                            ImageName: "temporibus",
                            ImageVersionNumber: sdk.Int64(566873),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "veritatis",
                            ImageName: "ipsum",
                            ImageVersionNumber: sdk.Int64(437446),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG4dn2xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("molestiae"),
                        SageMakerImageArn: sdk.String("itaque"),
                        SageMakerImageVersionArn: sdk.String("voluptatum"),
                    },
                    LifecycleConfigArns: []string{
                        "minima",
                        "non",
                        "qui",
                        "et",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.UpdateSpaceXAmzTargetEnumSageMakerUpdateSpace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSpaceResponse != nil {
        // handle response
    }
}
```

## UpdateTrainingJob

Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.

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
    res, err := s.SDK.UpdateTrainingJob(ctx, operations.UpdateTrainingJobRequest{
        UpdateTrainingJobRequest: shared.UpdateTrainingJobRequest{
            ProfilerConfig: &shared.ProfilerConfigForUpdate{
                DisableProfiler: sdk.Bool(false),
                ProfilingIntervalInMilliseconds: sdk.Int64(460677),
                ProfilingParameters: map[string]string{
                    "fugit": "assumenda",
                    "expedita": "molestiae",
                },
                S3OutputPath: sdk.String("autem"),
            },
            ProfilerRuleConfigurations: []shared.ProfilerRuleConfiguration{
                shared.ProfilerRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlR512xlarge.ToPointer(),
                    LocalPath: sdk.String("nostrum"),
                    RuleConfigurationName: "occaecati",
                    RuleEvaluatorImage: "asperiores",
                    RuleParameters: map[string]string{
                        "id": "veniam",
                    },
                    S3OutputPath: sdk.String("ea"),
                    VolumeSizeInGB: sdk.Int64(808596),
                },
                shared.ProfilerRuleConfiguration{
                    InstanceType: shared.ProcessingInstanceTypeEnumMlG4dn2xlarge.ToPointer(),
                    LocalPath: sdk.String("harum"),
                    RuleConfigurationName: "cumque",
                    RuleEvaluatorImage: "culpa",
                    RuleParameters: map[string]string{
                        "laborum": "consequuntur",
                        "omnis": "maxime",
                        "officia": "iusto",
                        "natus": "ab",
                    },
                    S3OutputPath: sdk.String("deleniti"),
                    VolumeSizeInGB: sdk.Int64(92036),
                },
            },
            ResourceConfig: &shared.ResourceConfigForUpdate{
                KeepAlivePeriodInSeconds: 757747,
            },
            TrainingJobName: "sint",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.UpdateTrainingJobXAmzTargetEnumSageMakerUpdateTrainingJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrainingJobResponse != nil {
        // handle response
    }
}
```

## UpdateTrial

Updates the display name of a trial.

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
    res, err := s.SDK.UpdateTrial(ctx, operations.UpdateTrialRequest{
        UpdateTrialRequest: shared.UpdateTrialRequest{
            DisplayName: sdk.String("minus"),
            TrialName: "ad",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateTrialXAmzTargetEnumSageMakerUpdateTrial,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrialResponse != nil {
        // handle response
    }
}
```

## UpdateTrialComponent

Updates one or more properties of a trial component.

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
    res, err := s.SDK.UpdateTrialComponent(ctx, operations.UpdateTrialComponentRequest{
        UpdateTrialComponentRequest: shared.UpdateTrialComponentRequest{
            DisplayName: sdk.String("et"),
            EndTime: types.MustTimeFromString("2022-10-12T12:48:46.355Z"),
            InputArtifacts: map[string]shared.TrialComponentArtifact{
                "non": shared.TrialComponentArtifact{
                    MediaType: sdk.String("suscipit"),
                    Value: "amet",
                },
                "deleniti": shared.TrialComponentArtifact{
                    MediaType: sdk.String("exercitationem"),
                    Value: "illo",
                },
                "fugit": shared.TrialComponentArtifact{
                    MediaType: sdk.String("id"),
                    Value: "tempore",
                },
            },
            InputArtifactsToRemove: []string{
                "nostrum",
            },
            OutputArtifacts: map[string]shared.TrialComponentArtifact{
                "sunt": shared.TrialComponentArtifact{
                    MediaType: sdk.String("quidem"),
                    Value: "perspiciatis",
                },
            },
            OutputArtifactsToRemove: []string{
                "eos",
                "saepe",
                "ipsa",
                "esse",
            },
            Parameters: map[string]shared.TrialComponentParameterValue{
                "aliquam": shared.TrialComponentParameterValue{
                    NumberValue: sdk.Float64(4199.95),
                    StringValue: sdk.String("reprehenderit"),
                },
            },
            ParametersToRemove: []string{
                "quas",
                "officia",
                "modi",
            },
            StartTime: types.MustTimeFromString("2022-04-12T13:59:24.092Z"),
            Status: &shared.TrialComponentStatus{
                Message: sdk.String("minus"),
                PrimaryStatus: shared.TrialComponentPrimaryStatusEnumInProgress.ToPointer(),
            },
            TrialComponentName: "quis",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.UpdateTrialComponentXAmzTargetEnumSageMakerUpdateTrialComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrialComponentResponse != nil {
        // handle response
    }
}
```

## UpdateUserProfile

Updates a user profile.

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
    res, err := s.SDK.UpdateUserProfile(ctx, operations.UpdateUserProfileRequest{
        UpdateUserProfileRequest: shared.UpdateUserProfileRequest{
            DomainID: "perferendis",
            UserProfileName: "itaque",
            UserSettings: &shared.UserSettings{
                CanvasAppSettings: &shared.CanvasAppSettings{
                    ModelRegisterSettings: &shared.ModelRegisterSettings{
                        CrossAccountModelRegisterRoleArn: sdk.String("facere"),
                        Status: shared.FeatureStatusEnumDisabled.ToPointer(),
                    },
                    TimeSeriesForecastingSettings: &shared.TimeSeriesForecastingSettings{
                        AmazonForecastRoleArn: sdk.String("ratione"),
                        Status: shared.FeatureStatusEnumEnabled.ToPointer(),
                    },
                },
                ExecutionRole: sdk.String("laborum"),
                JupyterServerAppSettings: &shared.JupyterServerAppSettings{
                    CodeRepositories: []shared.CodeRepository{
                        shared.CodeRepository{
                            RepositoryURL: "incidunt",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "pariatur",
                        },
                        shared.CodeRepository{
                            RepositoryURL: "aspernatur",
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlT3Small.ToPointer(),
                        LifecycleConfigArn: sdk.String("itaque"),
                        SageMakerImageArn: sdk.String("quo"),
                        SageMakerImageVersionArn: sdk.String("perspiciatis"),
                    },
                    LifecycleConfigArns: []string{
                        "debitis",
                    },
                },
                KernelGatewayAppSettings: &shared.KernelGatewayAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "aliquam",
                            ImageName: "quasi",
                            ImageVersionNumber: sdk.Int64(829836),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "architecto",
                            ImageName: "hic",
                            ImageVersionNumber: sdk.Int64(287530),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "nisi",
                            ImageName: "voluptas",
                            ImageVersionNumber: sdk.Int64(904131),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlC518xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("veniam"),
                        SageMakerImageArn: sdk.String("ab"),
                        SageMakerImageVersionArn: sdk.String("minima"),
                    },
                    LifecycleConfigArns: []string{
                        "repellat",
                        "sapiente",
                    },
                },
                RSessionAppSettings: &shared.RSessionAppSettings{
                    CustomImages: []shared.CustomImage{
                        shared.CustomImage{
                            AppImageConfigName: "molestiae",
                            ImageName: "amet",
                            ImageVersionNumber: sdk.Int64(975410),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "temporibus",
                            ImageName: "tenetur",
                            ImageVersionNumber: sdk.Int64(342458),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "tempora",
                            ImageName: "maiores",
                            ImageVersionNumber: sdk.Int64(814385),
                        },
                        shared.CustomImage{
                            AppImageConfigName: "illum",
                            ImageName: "exercitationem",
                            ImageVersionNumber: sdk.Int64(904920),
                        },
                    },
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlG4dn4xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("sint"),
                        SageMakerImageArn: sdk.String("minima"),
                        SageMakerImageVersionArn: sdk.String("dolore"),
                    },
                },
                RStudioServerProAppSettings: &shared.RStudioServerProAppSettings{
                    AccessStatus: shared.RStudioServerProAccessStatusEnumEnabled.ToPointer(),
                    UserGroup: shared.RStudioServerProUserGroupEnumRStudioAdmin.ToPointer(),
                },
                SecurityGroups: []string{
                    "voluptatum",
                    "illum",
                    "laborum",
                },
                SharingSettings: &shared.SharingSettings{
                    NotebookOutputOption: shared.NotebookOutputOptionEnumDisabled.ToPointer(),
                    S3KmsKeyID: sdk.String("soluta"),
                    S3OutputPath: sdk.String("eius"),
                },
                TensorBoardAppSettings: &shared.TensorBoardAppSettings{
                    DefaultResourceSpec: &shared.ResourceSpec{
                        InstanceType: shared.AppInstanceTypeEnumMlM52xlarge.ToPointer(),
                        LifecycleConfigArn: sdk.String("dolorum"),
                        SageMakerImageArn: sdk.String("deleniti"),
                        SageMakerImageVersionArn: sdk.String("assumenda"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.UpdateUserProfileXAmzTargetEnumSageMakerUpdateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserProfileResponse != nil {
        // handle response
    }
}
```

## UpdateWorkforce

<p>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p> <p>The worker portal is now supported in VPC and public internet.</p> <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a <code>Not Found</code> error message on the worker portal.</p> <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p> <important> <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p> </important> <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using your own OIDC IdP. </p> <important> <p>You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p> </important> <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a> operation.</p> <important> <p>This operation only applies to private workforces.</p> </important>

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
    res, err := s.SDK.UpdateWorkforce(ctx, operations.UpdateWorkforceRequest{
        UpdateWorkforceRequest: shared.UpdateWorkforceRequest{
            OidcConfig: &shared.OidcConfig{
                AuthorizationEndpoint: "pariatur",
                ClientID: "deleniti",
                ClientSecret: "aut",
                Issuer: "nesciunt",
                JwksURI: "error",
                LogoutEndpoint: "necessitatibus",
                TokenEndpoint: "culpa",
                UserInfoEndpoint: "quis",
            },
            SourceIPConfig: &shared.SourceIPConfig{
                Cidrs: []string{
                    "iste",
                    "harum",
                    "sunt",
                    "atque",
                },
            },
            WorkforceName: "similique",
            WorkforceVpcConfig: &shared.WorkforceVpcConfigRequest{
                SecurityGroupIds: []string{
                    "tempora",
                },
                Subnets: []string{
                    "sapiente",
                    "possimus",
                },
                VpcID: sdk.String("nisi"),
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.UpdateWorkforceXAmzTargetEnumSageMakerUpdateWorkforce,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkforceResponse != nil {
        // handle response
    }
}
```

## UpdateWorkteam

Updates an existing work team with new member definitions or description.

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
    res, err := s.SDK.UpdateWorkteam(ctx, operations.UpdateWorkteamRequest{
        UpdateWorkteamRequest: shared.UpdateWorkteamRequest{
            Description: sdk.String("maxime"),
            MemberDefinitions: []shared.MemberDefinition{
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "velit",
                        UserGroup: "voluptatum",
                        UserPool: "eveniet",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "doloremque",
                            "assumenda",
                            "nobis",
                            "laboriosam",
                        },
                    },
                },
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "esse",
                        UserGroup: "et",
                        UserPool: "temporibus",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "quam",
                            "delectus",
                            "quae",
                            "vero",
                        },
                    },
                },
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "amet",
                        UserGroup: "culpa",
                        UserPool: "asperiores",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "veniam",
                        },
                    },
                },
                shared.MemberDefinition{
                    CognitoMemberDefinition: &shared.CognitoMemberDefinition{
                        ClientID: "provident",
                        UserGroup: "consequuntur",
                        UserPool: "aut",
                    },
                    OidcMemberDefinition: &shared.OidcMemberDefinition{
                        Groups: []string{
                            "provident",
                            "aperiam",
                            "repellendus",
                            "ab",
                        },
                    },
                },
            },
            NotificationConfiguration: &shared.NotificationConfiguration{
                NotificationTopicArn: sdk.String("cum"),
            },
            WorkteamName: "magnam",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.UpdateWorkteamXAmzTargetEnumSageMakerUpdateWorkteam,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkteamResponse != nil {
        // handle response
    }
}
```
