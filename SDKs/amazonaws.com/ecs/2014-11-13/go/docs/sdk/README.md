# SDK

## Overview

<fullname>Amazon Elastic Container Service</fullname> <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes it easy to run, stop, and manage Docker containers. You can host your cluster on a serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) or External (on-premises) instances that you manage.</p> <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API calls. This makes it easy to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. With Amazon ECS, you don't need to operate your own cluster management and configuration management systems. You also don't need to worry about scaling your management infrastructure.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecs/>
### Available Operations

* [CreateCapacityProvider](#createcapacityprovider) - <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>
* [CreateCluster](#createcluster) - <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
* [CreateService](#createservice) - <p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [CreateTaskSet](#createtaskset) - Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [DeleteAccountSetting](#deleteaccountsetting) - Disables an account setting for a specified user, role, or the root user for an account.
* [DeleteAttributes](#deleteattributes) - Deletes one or more custom attributes from an Amazon ECS resource.
* [DeleteCapacityProvider](#deletecapacityprovider) - <p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
* [DeleteCluster](#deletecluster) - <p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
* [DeleteService](#deleteservice) - <p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>
* [DeleteTaskDefinitions](#deletetaskdefinitions) - <p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p>
* [DeleteTaskSet](#deletetaskset) - Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [DeregisterContainerInstance](#deregistercontainerinstance) - <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>
* [DeregisterTaskDefinition](#deregistertaskdefinition) - <p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>
* [DescribeCapacityProviders](#describecapacityproviders) - Describes one or more of your capacity providers.
* [DescribeClusters](#describeclusters) - Describes one or more of your clusters.
* [DescribeContainerInstances](#describecontainerinstances) - Describes one or more container instances. Returns metadata about each container instance requested.
* [DescribeServices](#describeservices) - Describes the specified services running in your cluster.
* [DescribeTaskDefinition](#describetaskdefinition) - <p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>
* [DescribeTaskSets](#describetasksets) - Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [DescribeTasks](#describetasks) - <p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>
* [DiscoverPollEndpoint](#discoverpollendpoint) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
* [ExecuteCommand](#executecommand) - <p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
* [GetTaskProtection](#gettaskprotection) - Retrieves the protection status of tasks in an Amazon ECS service.
* [ListAccountSettings](#listaccountsettings) - Lists the account settings for a specified principal.
* [ListAttributes](#listattributes) - Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 
* [ListClusters](#listclusters) - Returns a list of existing clusters.
* [ListContainerInstances](#listcontainerinstances) - Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [ListServices](#listservices) - Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.
* [ListServicesByNamespace](#listservicesbynamespace) - This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [ListTagsForResource](#listtagsforresource) - List the tags for an Amazon ECS resource.
* [ListTaskDefinitionFamilies](#listtaskdefinitionfamilies) - <p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>
* [ListTaskDefinitions](#listtaskdefinitions) - Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.
* [ListTasks](#listtasks) - <p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour.</p>
* [PutAccountSetting](#putaccountsetting) - <p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>
* [PutAccountSettingDefault](#putaccountsettingdefault) - Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
* [PutAttributes](#putattributes) - Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [PutClusterCapacityProviders](#putclustercapacityproviders) - <p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>
* [RegisterContainerInstance](#registercontainerinstance) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>
* [RegisterTaskDefinition](#registertaskdefinition) - <p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [RunTask](#runtask) - <p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>
* [StartTask](#starttask) - <p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [StopTask](#stoptask) - <p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
* [SubmitAttachmentStateChanges](#submitattachmentstatechanges) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>
* [SubmitContainerStateChange](#submitcontainerstatechange) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>
* [SubmitTaskStateChange](#submittaskstatechange) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.
* [UpdateCapacityProvider](#updatecapacityprovider) - Modifies the parameters for a capacity provider.
* [UpdateCluster](#updatecluster) - Updates the cluster.
* [UpdateClusterSettings](#updateclustersettings) - Modifies the settings to use for a cluster.
* [UpdateContainerAgent](#updatecontaineragent) - <p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [UpdateContainerInstancesState](#updatecontainerinstancesstate) - <p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>
* [UpdateService](#updateservice) - <p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties. If you specified a custom role when you created the service, Amazon ECS automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p> <code>loadBalancers,</code> </p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> </note>
* [UpdateServicePrimaryTaskSet](#updateserviceprimarytaskset) - Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [UpdateTaskProtection](#updatetaskprotection) - <p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>
* [UpdateTaskSet](#updatetaskset) - Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

## CreateCapacityProvider

<p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCapacityProvider(ctx, operations.CreateCapacityProviderRequest{
        CreateCapacityProviderRequest: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "excepturi",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: sdk.Int64(392785),
                    MaximumScalingStepSize: sdk.Int64(925597),
                    MinimumScalingStepSize: sdk.Int64(836079),
                    Status: shared.ManagedScalingStatusEnumEnabled.ToPointer(),
                    TargetCapacity: sdk.Int64(337396),
                },
                ManagedTerminationProtection: shared.ManagedTerminationProtectionEnumEnabled.ToPointer(),
            },
            Name: "Christopher Hills",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("odit"),
                    Value: sdk.String("at"),
                },
                shared.Tag{
                    Key: sdk.String("at"),
                    Value: sdk.String("maiores"),
                },
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("quod"),
                },
                shared.Tag{
                    Key: sdk.String("quod"),
                    Value: sdk.String("esse"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateCapacityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCapacityProviderResponse != nil {
        // handle response
    }
}
```

## CreateCluster

<p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        CreateClusterRequest: shared.CreateClusterRequest{
            CapacityProviders: []string{
                "deleniti",
            },
            ClusterName: sdk.String("hic"),
            Configuration: &shared.ClusterConfiguration{
                ExecuteCommandConfiguration: &shared.ExecuteCommandConfiguration{
                    KmsKeyID: sdk.String("optio"),
                    LogConfiguration: &shared.ExecuteCommandLogConfiguration{
                        CloudWatchEncryptionEnabled: sdk.Bool(false),
                        CloudWatchLogGroupName: sdk.String("totam"),
                        S3BucketName: sdk.String("beatae"),
                        S3EncryptionEnabled: sdk.Bool(false),
                        S3KeyPrefix: sdk.String("commodi"),
                    },
                    Logging: shared.ExecuteCommandLoggingEnumDefault.ToPointer(),
                },
            },
            DefaultCapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(186332),
                    CapacityProvider: "impedit",
                    Weight: sdk.Int64(736918),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(456150),
                    CapacityProvider: "ipsum",
                    Weight: sdk.Int64(568434),
                },
            },
            ServiceConnectDefaults: &shared.ClusterServiceConnectDefaultsRequest{
                Namespace: "aspernatur",
            },
            Settings: []shared.ClusterSetting{
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("ad"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("sed"),
                    Value: sdk.String("iste"),
                },
                shared.Tag{
                    Key: sdk.String("dolor"),
                    Value: sdk.String("natus"),
                },
                shared.Tag{
                    Key: sdk.String("laboriosam"),
                    Value: sdk.String("hic"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```

## CreateService

<p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceRequest{
        CreateServiceRequest: shared.CreateServiceRequest{
            CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(99280),
                    CapacityProvider: "ipsa",
                    Weight: sdk.Int64(969810),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(666767),
                    CapacityProvider: "mollitia",
                    Weight: sdk.Int64(670638),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(170909),
                    CapacityProvider: "dolorem",
                    Weight: sdk.Int64(358152),
                },
            },
            ClientToken: sdk.String("explicabo"),
            Cluster: sdk.String("nobis"),
            DeploymentConfiguration: &shared.DeploymentConfiguration{
                Alarms: &shared.DeploymentAlarms{
                    AlarmNames: []string{
                        "omnis",
                        "nemo",
                    },
                    Enable: false,
                    Rollback: false,
                },
                DeploymentCircuitBreaker: &shared.DeploymentCircuitBreaker{
                    Enable: false,
                    Rollback: false,
                },
                MaximumPercent: sdk.Int64(325047),
                MinimumHealthyPercent: sdk.Int64(570197),
            },
            DeploymentController: &shared.DeploymentController{
                Type: shared.DeploymentControllerTypeEnumEcs,
            },
            DesiredCount: sdk.Int64(438601),
            EnableECSManagedTags: sdk.Bool(false),
            EnableExecuteCommand: sdk.Bool(false),
            HealthCheckGracePeriodSeconds: sdk.Int64(634274),
            LaunchType: shared.LaunchTypeEnumExternal.ToPointer(),
            LoadBalancers: []shared.LoadBalancer{
                shared.LoadBalancer{
                    ContainerName: sdk.String("architecto"),
                    ContainerPort: sdk.Int64(652790),
                    LoadBalancerName: sdk.String("dolorem"),
                    TargetGroupArn: sdk.String("culpa"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("consequuntur"),
                    ContainerPort: sdk.Int64(995300),
                    LoadBalancerName: sdk.String("mollitia"),
                    TargetGroupArn: sdk.String("occaecati"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("numquam"),
                    ContainerPort: sdk.Int64(414369),
                    LoadBalancerName: sdk.String("quam"),
                    TargetGroupArn: sdk.String("molestiae"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("velit"),
                    ContainerPort: sdk.Int64(623510),
                    LoadBalancerName: sdk.String("quia"),
                    TargetGroupArn: sdk.String("quis"),
                },
            },
            NetworkConfiguration: &shared.NetworkConfiguration{
                AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumEnabled.ToPointer(),
                    SecurityGroups: []string{
                        "animi",
                        "enim",
                        "odit",
                    },
                    Subnets: []string{
                        "sequi",
                        "tenetur",
                        "ipsam",
                        "id",
                    },
                },
            },
            PlacementConstraints: []shared.PlacementConstraint{
                shared.PlacementConstraint{
                    Expression: sdk.String("aut"),
                    Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("error"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("laborum"),
                    Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("reiciendis"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
            },
            PlacementStrategy: []shared.PlacementStrategy{
                shared.PlacementStrategy{
                    Field: sdk.String("nihil"),
                    Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("voluptatibus"),
                    Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("omnis"),
                    Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("cum"),
                    Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                },
            },
            PlatformVersion: sdk.String("doloremque"),
            PropagateTags: shared.PropagateTagsEnumService.ToPointer(),
            Role: sdk.String("ut"),
            SchedulingStrategy: shared.SchedulingStrategyEnumDaemon.ToPointer(),
            ServiceConnectConfiguration: &shared.ServiceConnectConfiguration{
                Enabled: false,
                LogConfiguration: &shared.LogConfiguration{
                    LogDriver: shared.LogDriverEnumJSONFile,
                    Options: map[string]string{
                        "dolore": "iusto",
                        "dicta": "harum",
                    },
                    SecretOptions: []shared.Secret{
                        shared.Secret{
                            Name: "Mrs. Leslie VonRueden",
                            ValueFrom: "molestias",
                        },
                        shared.Secret{
                            Name: "Ervin Gleason",
                            ValueFrom: "voluptates",
                        },
                    },
                },
                Namespace: sdk.String("quasi"),
                Services: []shared.ServiceConnectService{
                    shared.ServiceConnectService{
                        ClientAliases: []shared.ServiceConnectClientAlias{
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("veritatis"),
                                Port: 929297,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("incidunt"),
                                Port: 318569,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("consequatur"),
                                Port: 667411,
                            },
                        },
                        DiscoveryName: sdk.String("quibusdam"),
                        IngressPortOverride: sdk.Int64(131797),
                        PortName: "deserunt",
                    },
                    shared.ServiceConnectService{
                        ClientAliases: []shared.ServiceConnectClientAlias{
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("quibusdam"),
                                Port: 289406,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("modi"),
                                Port: 183191,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("aliquid"),
                                Port: 586513,
                            },
                        },
                        DiscoveryName: sdk.String("quos"),
                        IngressPortOverride: sdk.Int64(20107),
                        PortName: "magni",
                    },
                    shared.ServiceConnectService{
                        ClientAliases: []shared.ServiceConnectClientAlias{
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("ipsam"),
                                Port: 4695,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("fugit"),
                                Port: 677817,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("excepturi"),
                                Port: 270008,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("facilis"),
                                Port: 735194,
                            },
                        },
                        DiscoveryName: sdk.String("labore"),
                        IngressPortOverride: sdk.Int64(962189),
                        PortName: "eum",
                    },
                    shared.ServiceConnectService{
                        ClientAliases: []shared.ServiceConnectClientAlias{
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("eligendi"),
                                Port: 576157,
                            },
                        },
                        DiscoveryName: sdk.String("aliquid"),
                        IngressPortOverride: sdk.Int64(592042),
                        PortName: "necessitatibus",
                    },
                },
            },
            ServiceName: "sint",
            ServiceRegistries: []shared.ServiceRegistry{
                shared.ServiceRegistry{
                    ContainerName: sdk.String("dolor"),
                    ContainerPort: sdk.Int64(891555),
                    Port: sdk.Int64(952749),
                    RegistryArn: sdk.String("dolorum"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("in"),
                    ContainerPort: sdk.Int64(449198),
                    Port: sdk.Int64(846409),
                    RegistryArn: sdk.String("maiores"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("rerum"),
                    ContainerPort: sdk.Int64(116202),
                    Port: sdk.Int64(297437),
                    RegistryArn: sdk.String("cumque"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ea"),
                    Value: sdk.String("aliquid"),
                },
                shared.Tag{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("accusamus"),
                },
                shared.Tag{
                    Key: sdk.String("non"),
                    Value: sdk.String("occaecati"),
                },
                shared.Tag{
                    Key: sdk.String("enim"),
                    Value: sdk.String("accusamus"),
                },
            },
            TaskDefinition: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceResponse != nil {
        // handle response
    }
}
```

## CreateTaskSet

Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTaskSet(ctx, operations.CreateTaskSetRequest{
        CreateTaskSetRequest: shared.CreateTaskSetRequest{
            CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(643990),
                    CapacityProvider: "nisi",
                    Weight: sdk.Int64(423855),
                },
            },
            ClientToken: sdk.String("natus"),
            Cluster: "omnis",
            ExternalID: sdk.String("molestiae"),
            LaunchType: shared.LaunchTypeEnumEc2.ToPointer(),
            LoadBalancers: []shared.LoadBalancer{
                shared.LoadBalancer{
                    ContainerName: sdk.String("magnam"),
                    ContainerPort: sdk.Int64(716075),
                    LoadBalancerName: sdk.String("id"),
                    TargetGroupArn: sdk.String("labore"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("labore"),
                    ContainerPort: sdk.Int64(383462),
                    LoadBalancerName: sdk.String("natus"),
                    TargetGroupArn: sdk.String("nobis"),
                },
            },
            NetworkConfiguration: &shared.NetworkConfiguration{
                AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumEnabled.ToPointer(),
                    SecurityGroups: []string{
                        "aspernatur",
                        "architecto",
                        "magnam",
                        "et",
                    },
                    Subnets: []string{
                        "ullam",
                        "provident",
                        "quos",
                    },
                },
            },
            PlatformVersion: sdk.String("sint"),
            Scale: &shared.Scale{
                Unit: shared.ScaleUnitEnumPercent.ToPointer(),
                Value: sdk.Float64(336.25),
            },
            Service: "mollitia",
            ServiceRegistries: []shared.ServiceRegistry{
                shared.ServiceRegistry{
                    ContainerName: sdk.String("mollitia"),
                    ContainerPort: sdk.Int64(320997),
                    Port: sdk.Int64(431418),
                    RegistryArn: sdk.String("dolor"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("necessitatibus"),
                    ContainerPort: sdk.Int64(141264),
                    Port: sdk.Int64(367562),
                    RegistryArn: sdk.String("quasi"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("iure"),
                    ContainerPort: sdk.Int64(984043),
                    Port: sdk.Int64(891924),
                    RegistryArn: sdk.String("eius"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("maxime"),
                    ContainerPort: sdk.Int64(537023),
                    Port: sdk.Int64(703889),
                    RegistryArn: sdk.String("in"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("architecto"),
                    Value: sdk.String("repudiandae"),
                },
            },
            TaskDefinition: "ullam",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateTaskSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTaskSetResponse != nil {
        // handle response
    }
}
```

## DeleteAccountSetting

Disables an account setting for a specified user, role, or the root user for an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccountSetting(ctx, operations.DeleteAccountSettingRequest{
        DeleteAccountSettingRequest: shared.DeleteAccountSettingRequest{
            Name: shared.SettingNameEnumServiceLongArnFormat,
            PrincipalArn: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DeleteAccountSettingXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteAccountSetting,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccountSettingResponse != nil {
        // handle response
    }
}
```

## DeleteAttributes

Deletes one or more custom attributes from an Amazon ECS resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAttributes(ctx, operations.DeleteAttributesRequest{
        DeleteAttributesRequest: shared.DeleteAttributesRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Name: "Miriam Connelly Jr.",
                    TargetID: sdk.String("maiores"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("quidem"),
                },
                shared.Attribute{
                    Name: "Colleen Johnston PhD",
                    TargetID: sdk.String("nemo"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("voluptatibus"),
                },
                shared.Attribute{
                    Name: "Miss Ginger Feeney",
                    TargetID: sdk.String("hic"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("libero"),
                },
                shared.Attribute{
                    Name: "Ernest Hayes",
                    TargetID: sdk.String("eaque"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("quis"),
                },
            },
            Cluster: sdk.String("nesciunt"),
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAttributesResponse != nil {
        // handle response
    }
}
```

## DeleteCapacityProvider

<p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCapacityProvider(ctx, operations.DeleteCapacityProviderRequest{
        DeleteCapacityProviderRequest: shared.DeleteCapacityProviderRequest{
            CapacityProvider: "nostrum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeleteCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteCapacityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCapacityProviderResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

<p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCluster(ctx, operations.DeleteClusterRequest{
        DeleteClusterRequest: shared.DeleteClusterRequest{
            Cluster: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterResponse != nil {
        // handle response
    }
}
```

## DeleteService

<p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        DeleteServiceRequest: shared.DeleteServiceRequest{
            Cluster: sdk.String("earum"),
            Force: sdk.Bool(false),
            Service: "modi",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DeleteServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceResponse != nil {
        // handle response
    }
}
```

## DeleteTaskDefinitions

<p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTaskDefinitions(ctx, operations.DeleteTaskDefinitionsRequest{
        DeleteTaskDefinitionsRequest: shared.DeleteTaskDefinitionsRequest{
            TaskDefinitions: []string{
                "quaerat",
                "quos",
                "aliquid",
                "dolorem",
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DeleteTaskDefinitionsXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteTaskDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTaskDefinitionsResponse != nil {
        // handle response
    }
}
```

## DeleteTaskSet

Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTaskSet(ctx, operations.DeleteTaskSetRequest{
        DeleteTaskSetRequest: shared.DeleteTaskSetRequest{
            Cluster: "voluptate",
            Force: sdk.Bool(false),
            Service: "dignissimos",
            TaskSet: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DeleteTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteTaskSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTaskSetResponse != nil {
        // handle response
    }
}
```

## DeregisterContainerInstance

<p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterContainerInstance(ctx, operations.DeregisterContainerInstanceRequest{
        DeregisterContainerInstanceRequest: shared.DeregisterContainerInstanceRequest{
            Cluster: sdk.String("odio"),
            ContainerInstance: "quaerat",
            Force: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DeregisterContainerInstanceXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeregisterContainerInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterContainerInstanceResponse != nil {
        // handle response
    }
}
```

## DeregisterTaskDefinition

<p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterTaskDefinition(ctx, operations.DeregisterTaskDefinitionRequest{
        DeregisterTaskDefinitionRequest: shared.DeregisterTaskDefinitionRequest{
            TaskDefinition: "sit",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeregisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeregisterTaskDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterTaskDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeCapacityProviders

Describes one or more of your capacity providers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCapacityProviders(ctx, operations.DescribeCapacityProvidersRequest{
        DescribeCapacityProvidersRequest: shared.DescribeCapacityProvidersRequest{
            CapacityProviders: []string{
                "omnis",
                "necessitatibus",
                "distinctio",
            },
            Include: []shared.CapacityProviderFieldEnum{
                shared.CapacityProviderFieldEnumTags,
                shared.CapacityProviderFieldEnumTags,
                shared.CapacityProviderFieldEnumTags,
                shared.CapacityProviderFieldEnumTags,
            },
            MaxResults: sdk.Int64(469497),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DescribeCapacityProvidersXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeCapacityProviders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCapacityProvidersResponse != nil {
        // handle response
    }
}
```

## DescribeClusters

Describes one or more of your clusters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeClusters(ctx, operations.DescribeClustersRequest{
        DescribeClustersRequest: shared.DescribeClustersRequest{
            Clusters: []string{
                "accusamus",
                "ad",
                "saepe",
                "suscipit",
            },
            Include: []shared.ClusterFieldEnum{
                shared.ClusterFieldEnumSettings,
                shared.ClusterFieldEnumConfigurations,
                shared.ClusterFieldEnumTags,
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeClustersXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClustersResponse != nil {
        // handle response
    }
}
```

## DescribeContainerInstances

Describes one or more container instances. Returns metadata about each container instance requested.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeContainerInstances(ctx, operations.DescribeContainerInstancesRequest{
        DescribeContainerInstancesRequest: shared.DescribeContainerInstancesRequest{
            Cluster: sdk.String("quod"),
            ContainerInstances: []string{
                "qui",
                "dolorum",
                "a",
                "esse",
            },
            Include: []shared.ContainerInstanceFieldEnum{
                shared.ContainerInstanceFieldEnumTags,
                shared.ContainerInstanceFieldEnumTags,
                shared.ContainerInstanceFieldEnumContainerInstanceHealth,
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeContainerInstancesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeContainerInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContainerInstancesResponse != nil {
        // handle response
    }
}
```

## DescribeServices

Describes the specified services running in your cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeServices(ctx, operations.DescribeServicesRequest{
        DescribeServicesRequest: shared.DescribeServicesRequest{
            Cluster: sdk.String("sapiente"),
            Include: []shared.ServiceFieldEnum{
                shared.ServiceFieldEnumTags,
                shared.ServiceFieldEnumTags,
                shared.ServiceFieldEnumTags,
            },
            Services: []string{
                "sit",
                "expedita",
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.DescribeServicesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServicesResponse != nil {
        // handle response
    }
}
```

## DescribeTaskDefinition

<p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTaskDefinition(ctx, operations.DescribeTaskDefinitionRequest{
        DescribeTaskDefinitionRequest: shared.DescribeTaskDefinitionRequest{
            Include: []shared.TaskDefinitionFieldEnum{
                shared.TaskDefinitionFieldEnumTags,
            },
            TaskDefinition: "incidunt",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribeTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTaskDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTaskDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeTaskSets

Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTaskSets(ctx, operations.DescribeTaskSetsRequest{
        DescribeTaskSetsRequest: shared.DescribeTaskSetsRequest{
            Cluster: "totam",
            Include: []shared.TaskSetFieldEnum{
                shared.TaskSetFieldEnumTags,
                shared.TaskSetFieldEnumTags,
            },
            Service: "aspernatur",
            TaskSets: []string{
                "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DescribeTaskSetsXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTaskSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTaskSetsResponse != nil {
        // handle response
    }
}
```

## DescribeTasks

<p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTasks(ctx, operations.DescribeTasksRequest{
        DescribeTasksRequest: shared.DescribeTasksRequest{
            Cluster: sdk.String("fugit"),
            Include: []shared.TaskFieldEnum{
                shared.TaskFieldEnumTags,
            },
            Tasks: []string{
                "sunt",
                "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.DescribeTasksXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTasksResponse != nil {
        // handle response
    }
}
```

## DiscoverPollEndpoint

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DiscoverPollEndpoint(ctx, operations.DiscoverPollEndpointRequest{
        DiscoverPollEndpointRequest: shared.DiscoverPollEndpointRequest{
            Cluster: sdk.String("saepe"),
            ContainerInstance: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DiscoverPollEndpointXAmzTargetEnumAmazonEc2ContainerServiceV20141113DiscoverPollEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverPollEndpointResponse != nil {
        // handle response
    }
}
```

## ExecuteCommand

<p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteCommand(ctx, operations.ExecuteCommandRequest{
        ExecuteCommandRequest: shared.ExecuteCommandRequest{
            Cluster: sdk.String("dolorem"),
            Command: "dolore",
            Container: sdk.String("labore"),
            Interactive: false,
            Task: "adipisci",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.ExecuteCommandXAmzTargetEnumAmazonEc2ContainerServiceV20141113ExecuteCommand,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteCommandResponse != nil {
        // handle response
    }
}
```

## GetTaskProtection

Retrieves the protection status of tasks in an Amazon ECS service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTaskProtection(ctx, operations.GetTaskProtectionRequest{
        GetTaskProtectionRequest: shared.GetTaskProtectionRequest{
            Cluster: "est",
            Tasks: []string{
                "porro",
                "doloribus",
                "ut",
                "facilis",
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetTaskProtectionXAmzTargetEnumAmazonEc2ContainerServiceV20141113GetTaskProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaskProtectionResponse != nil {
        // handle response
    }
}
```

## ListAccountSettings

Lists the account settings for a specified principal.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAccountSettings(ctx, operations.ListAccountSettingsRequest{
        ListAccountSettingsRequest: shared.ListAccountSettingsRequest{
            EffectiveSettings: sdk.Bool(false),
            MaxResults: sdk.Int64(787542),
            Name: shared.SettingNameEnumTagResourceAuthorization.ToPointer(),
            NextToken: sdk.String("omnis"),
            PrincipalArn: sdk.String("quis"),
            Value: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.ListAccountSettingsXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListAccountSettings,
        MaxResults: sdk.String("distinctio"),
        NextToken: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountSettingsResponse != nil {
        // handle response
    }
}
```

## ListAttributes

Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAttributes(ctx, operations.ListAttributesRequest{
        ListAttributesRequest: shared.ListAttributesRequest{
            AttributeName: sdk.String("odio"),
            AttributeValue: sdk.String("similique"),
            Cluster: sdk.String("facilis"),
            MaxResults: sdk.Int64(874288),
            NextToken: sdk.String("ducimus"),
            TargetType: shared.TargetTypeEnumContainerInstance,
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListAttributes,
        MaxResults: sdk.String("voluptatibus"),
        NextToken: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttributesResponse != nil {
        // handle response
    }
}
```

## ListClusters

Returns a list of existing clusters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        ListClustersRequest: shared.ListClustersRequest{
            MaxResults: sdk.Int64(862310),
            NextToken: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.ListClustersXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListClusters,
        MaxResults: sdk.String("officia"),
        NextToken: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## ListContainerInstances

Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContainerInstances(ctx, operations.ListContainerInstancesRequest{
        ListContainerInstancesRequest: shared.ListContainerInstancesRequest{
            Cluster: sdk.String("ipsam"),
            Filter: sdk.String("ea"),
            MaxResults: sdk.Int64(136900),
            NextToken: sdk.String("vel"),
            Status: shared.ContainerInstanceStatusEnumRegistrationFailed.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListContainerInstancesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListContainerInstances,
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContainerInstancesResponse != nil {
        // handle response
    }
}
```

## ListServices

Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServices(ctx, operations.ListServicesRequest{
        ListServicesRequest: shared.ListServicesRequest{
            Cluster: sdk.String("nulla"),
            LaunchType: shared.LaunchTypeEnumFargate.ToPointer(),
            MaxResults: sdk.Int64(972920),
            NextToken: sdk.String("nostrum"),
            SchedulingStrategy: shared.SchedulingStrategyEnumDaemon.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ListServicesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListServices,
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ListServicesByNamespace

This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServicesByNamespace(ctx, operations.ListServicesByNamespaceRequest{
        ListServicesByNamespaceRequest: shared.ListServicesByNamespaceRequest{
            MaxResults: sdk.Int64(407241),
            Namespace: "quo",
            NextToken: sdk.String("consectetur"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListServicesByNamespaceXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListServicesByNamespace,
        MaxResults: sdk.String("aut"),
        NextToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesByNamespaceResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an Amazon ECS resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "impedit",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTaskDefinitionFamilies

<p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTaskDefinitionFamilies(ctx, operations.ListTaskDefinitionFamiliesRequest{
        ListTaskDefinitionFamiliesRequest: shared.ListTaskDefinitionFamiliesRequest{
            FamilyPrefix: sdk.String("laborum"),
            MaxResults: sdk.Int64(810424),
            NextToken: sdk.String("velit"),
            Status: shared.TaskDefinitionFamilyStatusEnumInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListTaskDefinitionFamiliesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies,
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskDefinitionFamiliesResponse != nil {
        // handle response
    }
}
```

## ListTaskDefinitions

Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTaskDefinitions(ctx, operations.ListTaskDefinitionsRequest{
        ListTaskDefinitionsRequest: shared.ListTaskDefinitionsRequest{
            FamilyPrefix: sdk.String("numquam"),
            MaxResults: sdk.Int64(131482),
            NextToken: sdk.String("provident"),
            Sort: shared.SortOrderEnumAsc.ToPointer(),
            Status: shared.TaskDefinitionStatusEnumInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.ListTaskDefinitionsXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTaskDefinitions,
        MaxResults: sdk.String("reprehenderit"),
        NextToken: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListTasks

<p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTasks(ctx, operations.ListTasksRequest{
        ListTasksRequest: shared.ListTasksRequest{
            Cluster: sdk.String("fugiat"),
            ContainerInstance: sdk.String("ut"),
            DesiredStatus: shared.DesiredStatusEnumPending.ToPointer(),
            Family: sdk.String("suscipit"),
            LaunchType: shared.LaunchTypeEnumExternal.ToPointer(),
            MaxResults: sdk.Int64(181151),
            NextToken: sdk.String("praesentium"),
            ServiceName: sdk.String("quisquam"),
            StartedBy: sdk.String("veritatis"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.ListTasksXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTasks,
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksResponse != nil {
        // handle response
    }
}
```

## PutAccountSetting

<p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAccountSetting(ctx, operations.PutAccountSettingRequest{
        PutAccountSettingRequest: shared.PutAccountSettingRequest{
            Name: shared.SettingNameEnumTaskLongArnFormat,
            PrincipalArn: sdk.String("voluptas"),
            Value: "ab",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.PutAccountSettingXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAccountSetting,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountSettingResponse != nil {
        // handle response
    }
}
```

## PutAccountSettingDefault

Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAccountSettingDefault(ctx, operations.PutAccountSettingDefaultRequest{
        PutAccountSettingDefaultRequest: shared.PutAccountSettingDefaultRequest{
            Name: shared.SettingNameEnumFargateFipsMode,
            Value: "esse",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.PutAccountSettingDefaultXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAccountSettingDefault,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountSettingDefaultResponse != nil {
        // handle response
    }
}
```

## PutAttributes

Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAttributes(ctx, operations.PutAttributesRequest{
        PutAttributesRequest: shared.PutAttributesRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Name: "Tom Kuhn",
                    TargetID: sdk.String("sapiente"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("dolores"),
                },
                shared.Attribute{
                    Name: "Fernando Barton",
                    TargetID: sdk.String("quas"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("praesentium"),
                },
                shared.Attribute{
                    Name: "Cassandra Considine",
                    TargetID: sdk.String("incidunt"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("atque"),
                },
            },
            Cluster: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.PutAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAttributesResponse != nil {
        // handle response
    }
}
```

## PutClusterCapacityProviders

<p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutClusterCapacityProviders(ctx, operations.PutClusterCapacityProvidersRequest{
        PutClusterCapacityProvidersRequest: shared.PutClusterCapacityProvidersRequest{
            CapacityProviders: []string{
                "occaecati",
                "atque",
                "et",
                "esse",
            },
            Cluster: "eveniet",
            DefaultCapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(82971),
                    CapacityProvider: "esse",
                    Weight: sdk.Int64(800379),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(724168),
                    CapacityProvider: "vero",
                    Weight: sdk.Int64(399025),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(93459),
                    CapacityProvider: "saepe",
                    Weight: sdk.Int64(426306),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(690025),
                    CapacityProvider: "molestiae",
                    Weight: sdk.Int64(699622),
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.PutClusterCapacityProvidersXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutClusterCapacityProviders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutClusterCapacityProvidersResponse != nil {
        // handle response
    }
}
```

## RegisterContainerInstance

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterContainerInstance(ctx, operations.RegisterContainerInstanceRequest{
        RegisterContainerInstanceRequest: shared.RegisterContainerInstanceRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Name: "Carlos Altenwerth",
                    TargetID: sdk.String("sapiente"),
                    TargetType: shared.TargetTypeEnumContainerInstance.ToPointer(),
                    Value: sdk.String("consectetur"),
                },
            },
            Cluster: sdk.String("esse"),
            ContainerInstanceArn: sdk.String("blanditiis"),
            InstanceIdentityDocument: sdk.String("provident"),
            InstanceIdentityDocumentSignature: sdk.String("a"),
            PlatformDevices: []shared.PlatformDevice{
                shared.PlatformDevice{
                    ID: "871f99dd-2efd-4121-aa6f-1e674bdb04f1",
                    Type: shared.PlatformDeviceTypeEnumGpu,
                },
                shared.PlatformDevice{
                    ID: "5756082d-68ea-419f-9d17-051339d08086",
                    Type: shared.PlatformDeviceTypeEnumGpu,
                },
                shared.PlatformDevice{
                    ID: "a1840394-c260-471f-93f5-f0642dac7af5",
                    Type: shared.PlatformDeviceTypeEnumGpu,
                },
                shared.PlatformDevice{
                    ID: "15cc413a-a63a-4ae8-9678-64dbb675fd5e",
                    Type: shared.PlatformDeviceTypeEnumGpu,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("aperiam"),
                    Value: sdk.String("cum"),
                },
                shared.Tag{
                    Key: sdk.String("consectetur"),
                    Value: sdk.String("in"),
                },
            },
            TotalResources: []shared.Resource{
                shared.Resource{
                    DoubleValue: sdk.Float64(9372.85),
                    IntegerValue: sdk.Int64(814967),
                    LongValue: sdk.Int64(257233),
                    Name: sdk.String("Ricardo Wisozk"),
                    StringSetValue: []string{
                        "dolore",
                        "sunt",
                        "asperiores",
                        "adipisci",
                    },
                    Type: sdk.String("non"),
                },
                shared.Resource{
                    DoubleValue: sdk.Float64(2282.63),
                    IntegerValue: sdk.Int64(105906),
                    LongValue: sdk.Int64(489509),
                    Name: sdk.String("Doyle Feest"),
                    StringSetValue: []string{
                        "ipsa",
                        "voluptates",
                    },
                    Type: sdk.String("libero"),
                },
            },
            VersionInfo: &shared.VersionInfo{
                AgentHash: sdk.String("vitae"),
                AgentVersion: sdk.String("accusamus"),
                DockerVersion: sdk.String("similique"),
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.RegisterContainerInstanceXAmzTargetEnumAmazonEc2ContainerServiceV20141113RegisterContainerInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterContainerInstanceResponse != nil {
        // handle response
    }
}
```

## RegisterTaskDefinition

<p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterTaskDefinition(ctx, operations.RegisterTaskDefinitionRequest{
        RegisterTaskDefinitionRequest: shared.RegisterTaskDefinitionRequest{
            ContainerDefinitions: []shared.ContainerDefinition{
                shared.ContainerDefinition{
                    Command: []string{
                        "minus",
                    },
                    CPU: sdk.Int64(171853),
                    DependsOn: []shared.ContainerDependency{
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumComplete,
                            ContainerName: "dolore",
                        },
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumComplete,
                            ContainerName: "officiis",
                        },
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumHealthy,
                            ContainerName: "ullam",
                        },
                    },
                    DisableNetworking: sdk.Bool(false),
                    DNSSearchDomains: []string{
                        "cum",
                    },
                    DNSServers: []string{
                        "quas",
                        "hic",
                        "nesciunt",
                    },
                    DockerLabels: map[string]string{
                        "corrupti": "pariatur",
                        "totam": "hic",
                        "exercitationem": "nobis",
                    },
                    DockerSecurityOptions: []string{
                        "rerum",
                    },
                    EntryPoint: []string{
                        "reiciendis",
                    },
                    Environment: []shared.KeyValuePair{
                        shared.KeyValuePair{
                            Name: sdk.String("Johnathan Klein V"),
                            Value: sdk.String("dolore"),
                        },
                    },
                    EnvironmentFiles: []shared.EnvironmentFile{
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "sed",
                        },
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "in",
                        },
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "commodi",
                        },
                    },
                    Essential: sdk.Bool(false),
                    ExtraHosts: []shared.HostEntry{
                        shared.HostEntry{
                            Hostname: "common-gather.name",
                            IPAddress: "architecto",
                        },
                        shared.HostEntry{
                            Hostname: "hidden-vision.org",
                            IPAddress: "illo",
                        },
                        shared.HostEntry{
                            Hostname: "wicked-alcove.name",
                            IPAddress: "maiores",
                        },
                    },
                    FirelensConfiguration: &shared.FirelensConfiguration{
                        Options: map[string]string{
                            "sed": "provident",
                            "eius": "necessitatibus",
                        },
                        Type: shared.FirelensConfigurationTypeEnumFluentd,
                    },
                    HealthCheck: &shared.HealthCheck{
                        Command: []string{
                            "occaecati",
                            "quos",
                        },
                        Interval: sdk.Int64(975752),
                        Retries: sdk.Int64(271653),
                        StartPeriod: sdk.Int64(273009),
                        Timeout: sdk.Int64(455444),
                    },
                    Hostname: sdk.String("wiggly-gripper.com"),
                    Image: sdk.String("non"),
                    Interactive: sdk.Bool(false),
                    Links: []string{
                        "praesentium",
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                    LinuxParameters: &shared.LinuxParameters{
                        Capabilities: &shared.KernelCapabilities{
                            Add: []string{
                                "debitis",
                                "rem",
                            },
                            Drop: []string{
                                "nobis",
                            },
                        },
                        Devices: []shared.Device{
                            shared.Device{
                                ContainerPath: sdk.String("veniam"),
                                HostPath: "minima",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumRead,
                                    shared.DeviceCgroupPermissionEnumRead,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("saepe"),
                                HostPath: "numquam",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumWrite,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("beatae"),
                                HostPath: "laudantium",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumWrite,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                },
                            },
                        },
                        InitProcessEnabled: sdk.Bool(false),
                        MaxSwap: sdk.Int64(386827),
                        SharedMemorySize: sdk.Int64(680515),
                        Swappiness: sdk.Int64(530089),
                        Tmpfs: []shared.Tmpfs{
                            shared.Tmpfs{
                                ContainerPath: "hic",
                                MountOptions: []string{
                                    "debitis",
                                    "neque",
                                    "dolorum",
                                },
                                Size: 341698,
                            },
                            shared.Tmpfs{
                                ContainerPath: "officia",
                                MountOptions: []string{
                                    "corrupti",
                                    "accusamus",
                                    "tempora",
                                },
                                Size: 543678,
                            },
                            shared.Tmpfs{
                                ContainerPath: "fugit",
                                MountOptions: []string{
                                    "fugiat",
                                    "voluptatem",
                                },
                                Size: 635057,
                            },
                        },
                    },
                    LogConfiguration: &shared.LogConfiguration{
                        LogDriver: shared.LogDriverEnumAwslogs,
                        Options: map[string]string{
                            "consequatur": "esse",
                            "ipsam": "sit",
                        },
                        SecretOptions: []shared.Secret{
                            shared.Secret{
                                Name: "Ms. Lamar Hessel",
                                ValueFrom: "sed",
                            },
                            shared.Secret{
                                Name: "Gina Heathcote",
                                ValueFrom: "consequatur",
                            },
                            shared.Secret{
                                Name: "Lela Ebert Sr.",
                                ValueFrom: "occaecati",
                            },
                        },
                    },
                    Memory: sdk.Int64(289776),
                    MemoryReservation: sdk.Int64(695270),
                    MountPoints: []shared.MountPoint{
                        shared.MountPoint{
                            ContainerPath: sdk.String("laborum"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("nam"),
                        },
                        shared.MountPoint{
                            ContainerPath: sdk.String("tenetur"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("laboriosam"),
                        },
                        shared.MountPoint{
                            ContainerPath: sdk.String("alias"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("amet"),
                        },
                    },
                    Name: sdk.String("Karl Miller"),
                    PortMappings: []shared.PortMapping{
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumGrpc.ToPointer(),
                            ContainerPort: sdk.Int64(914791),
                            ContainerPortRange: sdk.String("perferendis"),
                            HostPort: sdk.Int64(667285),
                            Name: sdk.String("Ron Schulist"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHttp2.ToPointer(),
                            ContainerPort: sdk.Int64(29100),
                            ContainerPortRange: sdk.String("quisquam"),
                            HostPort: sdk.Int64(919532),
                            Name: sdk.String("Kay Kihn"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumGrpc.ToPointer(),
                            ContainerPort: sdk.Int64(806670),
                            ContainerPortRange: sdk.String("et"),
                            HostPort: sdk.Int64(461007),
                            Name: sdk.String("Angelina Jenkins"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumGrpc.ToPointer(),
                            ContainerPort: sdk.Int64(880107),
                            ContainerPortRange: sdk.String("natus"),
                            HostPort: sdk.Int64(328303),
                            Name: sdk.String("Tara Wuckert"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                    },
                    Privileged: sdk.Bool(false),
                    PseudoTerminal: sdk.Bool(false),
                    ReadonlyRootFilesystem: sdk.Bool(false),
                    RepositoryCredentials: &shared.RepositoryCredentials{
                        CredentialsParameter: "blanditiis",
                    },
                    ResourceRequirements: []shared.ResourceRequirement{
                        shared.ResourceRequirement{
                            Type: shared.ResourceTypeEnumInferenceAccelerator,
                            Value: "atque",
                        },
                        shared.ResourceRequirement{
                            Type: shared.ResourceTypeEnumInferenceAccelerator,
                            Value: "sunt",
                        },
                    },
                    Secrets: []shared.Secret{
                        shared.Secret{
                            Name: "Mack Grant DVM",
                            ValueFrom: "dicta",
                        },
                        shared.Secret{
                            Name: "Teresa Daniel",
                            ValueFrom: "velit",
                        },
                        shared.Secret{
                            Name: "Ross Gusikowski",
                            ValueFrom: "occaecati",
                        },
                        shared.Secret{
                            Name: "Freddie King",
                            ValueFrom: "occaecati",
                        },
                    },
                    StartTimeout: sdk.Int64(160230),
                    StopTimeout: sdk.Int64(145870),
                    SystemControls: []shared.SystemControl{
                        shared.SystemControl{
                            Namespace: sdk.String("quis"),
                            Value: sdk.String("reprehenderit"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("error"),
                            Value: sdk.String("illo"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("corporis"),
                            Value: sdk.String("quidem"),
                        },
                    },
                    Ulimits: []shared.Ulimit{
                        shared.Ulimit{
                            HardLimit: 247399,
                            Name: shared.UlimitNameEnumSigpending,
                            SoftLimit: 39615,
                        },
                        shared.Ulimit{
                            HardLimit: 434156,
                            Name: shared.UlimitNameEnumCore,
                            SoftLimit: 517612,
                        },
                        shared.Ulimit{
                            HardLimit: 61078,
                            Name: shared.UlimitNameEnumNice,
                            SoftLimit: 907733,
                        },
                        shared.Ulimit{
                            HardLimit: 184362,
                            Name: shared.UlimitNameEnumRtprio,
                            SoftLimit: 434761,
                        },
                    },
                    User: sdk.String("necessitatibus"),
                    VolumesFrom: []shared.VolumeFrom{
                        shared.VolumeFrom{
                            ReadOnly: sdk.Bool(false),
                            SourceContainer: sdk.String("laborum"),
                        },
                    },
                    WorkingDirectory: sdk.String("distinctio"),
                },
                shared.ContainerDefinition{
                    Command: []string{
                        "rem",
                        "aliquam",
                        "ad",
                    },
                    CPU: sdk.Int64(997963),
                    DependsOn: []shared.ContainerDependency{
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumComplete,
                            ContainerName: "perspiciatis",
                        },
                    },
                    DisableNetworking: sdk.Bool(false),
                    DNSSearchDomains: []string{
                        "mollitia",
                        "voluptas",
                    },
                    DNSServers: []string{
                        "maiores",
                    },
                    DockerLabels: map[string]string{
                        "dolores": "id",
                        "minima": "dolore",
                        "dolorum": "nesciunt",
                        "quae": "recusandae",
                    },
                    DockerSecurityOptions: []string{
                        "quaerat",
                        "molestiae",
                        "ex",
                    },
                    EntryPoint: []string{
                        "culpa",
                        "adipisci",
                    },
                    Environment: []shared.KeyValuePair{
                        shared.KeyValuePair{
                            Name: sdk.String("Andre Hills"),
                            Value: sdk.String("provident"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Natalie Witting"),
                            Value: sdk.String("ullam"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Lynda Heathcote"),
                            Value: sdk.String("possimus"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Dr. Reginald Hyatt"),
                            Value: sdk.String("ullam"),
                        },
                    },
                    EnvironmentFiles: []shared.EnvironmentFile{
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "nam",
                        },
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "earum",
                        },
                    },
                    Essential: sdk.Bool(false),
                    ExtraHosts: []shared.HostEntry{
                        shared.HostEntry{
                            Hostname: "quick-witted-slate.biz",
                            IPAddress: "voluptatibus",
                        },
                        shared.HostEntry{
                            Hostname: "negligible-tea.org",
                            IPAddress: "cumque",
                        },
                        shared.HostEntry{
                            Hostname: "cheap-proliferation.biz",
                            IPAddress: "quis",
                        },
                    },
                    FirelensConfiguration: &shared.FirelensConfiguration{
                        Options: map[string]string{
                            "fugit": "cumque",
                        },
                        Type: shared.FirelensConfigurationTypeEnumFluentd,
                    },
                    HealthCheck: &shared.HealthCheck{
                        Command: []string{
                            "velit",
                        },
                        Interval: sdk.Int64(137251),
                        Retries: sdk.Int64(432281),
                        StartPeriod: sdk.Int64(260628),
                        Timeout: sdk.Int64(521996),
                    },
                    Hostname: sdk.String("trivial-scanner.biz"),
                    Image: sdk.String("sapiente"),
                    Interactive: sdk.Bool(false),
                    Links: []string{
                        "dicta",
                        "minima",
                    },
                    LinuxParameters: &shared.LinuxParameters{
                        Capabilities: &shared.KernelCapabilities{
                            Add: []string{
                                "cupiditate",
                            },
                            Drop: []string{
                                "earum",
                                "soluta",
                                "hic",
                            },
                        },
                        Devices: []shared.Device{
                            shared.Device{
                                ContainerPath: sdk.String("eaque"),
                                HostPath: "earum",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumWrite,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("porro"),
                                HostPath: "suscipit",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumRead,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("cumque"),
                                HostPath: "fuga",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumWrite,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("necessitatibus"),
                                HostPath: "nulla",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumRead,
                                },
                            },
                        },
                        InitProcessEnabled: sdk.Bool(false),
                        MaxSwap: sdk.Int64(90233),
                        SharedMemorySize: sdk.Int64(497777),
                        Swappiness: sdk.Int64(619183),
                        Tmpfs: []shared.Tmpfs{
                            shared.Tmpfs{
                                ContainerPath: "suscipit",
                                MountOptions: []string{
                                    "quasi",
                                },
                                Size: 169025,
                            },
                            shared.Tmpfs{
                                ContainerPath: "doloribus",
                                MountOptions: []string{
                                    "necessitatibus",
                                    "ipsa",
                                    "tempora",
                                    "nihil",
                                },
                                Size: 473190,
                            },
                            shared.Tmpfs{
                                ContainerPath: "dicta",
                                MountOptions: []string{
                                    "esse",
                                    "praesentium",
                                },
                                Size: 979963,
                            },
                        },
                    },
                    LogConfiguration: &shared.LogConfiguration{
                        LogDriver: shared.LogDriverEnumAwsfirelens,
                        Options: map[string]string{
                            "architecto": "fugiat",
                            "doloremque": "dicta",
                        },
                        SecretOptions: []shared.Secret{
                            shared.Secret{
                                Name: "Joy Jacobson",
                                ValueFrom: "ipsa",
                            },
                            shared.Secret{
                                Name: "Ralph Hegmann",
                                ValueFrom: "aliquid",
                            },
                        },
                    },
                    Memory: sdk.Int64(639187),
                    MemoryReservation: sdk.Int64(381397),
                    MountPoints: []shared.MountPoint{
                        shared.MountPoint{
                            ContainerPath: sdk.String("perferendis"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("eum"),
                        },
                        shared.MountPoint{
                            ContainerPath: sdk.String("voluptas"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("iste"),
                        },
                    },
                    Name: sdk.String("Raymond Muller"),
                    PortMappings: []shared.PortMapping{
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumGrpc.ToPointer(),
                            ContainerPort: sdk.Int64(726343),
                            ContainerPortRange: sdk.String("ad"),
                            HostPort: sdk.Int64(536923),
                            Name: sdk.String("Gloria Skiles"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHTTP.ToPointer(),
                            ContainerPort: sdk.Int64(321043),
                            ContainerPortRange: sdk.String("expedita"),
                            HostPort: sdk.Int64(29950),
                            Name: sdk.String("Ms. Jonathon Jacobs"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumGrpc.ToPointer(),
                            ContainerPort: sdk.Int64(665678),
                            ContainerPortRange: sdk.String("culpa"),
                            HostPort: sdk.Int64(29634),
                            Name: sdk.String("Stewart Brakus"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                    },
                    Privileged: sdk.Bool(false),
                    PseudoTerminal: sdk.Bool(false),
                    ReadonlyRootFilesystem: sdk.Bool(false),
                    RepositoryCredentials: &shared.RepositoryCredentials{
                        CredentialsParameter: "voluptatem",
                    },
                    ResourceRequirements: []shared.ResourceRequirement{
                        shared.ResourceRequirement{
                            Type: shared.ResourceTypeEnumInferenceAccelerator,
                            Value: "earum",
                        },
                    },
                    Secrets: []shared.Secret{
                        shared.Secret{
                            Name: "Ian Schinner",
                            ValueFrom: "ratione",
                        },
                        shared.Secret{
                            Name: "Dorothy Stanton",
                            ValueFrom: "quibusdam",
                        },
                    },
                    StartTimeout: sdk.Int64(720528),
                    StopTimeout: sdk.Int64(373216),
                    SystemControls: []shared.SystemControl{
                        shared.SystemControl{
                            Namespace: sdk.String("dolor"),
                            Value: sdk.String("aliquam"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("inventore"),
                            Value: sdk.String("deleniti"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("veritatis"),
                            Value: sdk.String("tempora"),
                        },
                    },
                    Ulimits: []shared.Ulimit{
                        shared.Ulimit{
                            HardLimit: 8689,
                            Name: shared.UlimitNameEnumCPU,
                            SoftLimit: 24944,
                        },
                    },
                    User: sdk.String("modi"),
                    VolumesFrom: []shared.VolumeFrom{
                        shared.VolumeFrom{
                            ReadOnly: sdk.Bool(false),
                            SourceContainer: sdk.String("ab"),
                        },
                    },
                    WorkingDirectory: sdk.String("laudantium"),
                },
                shared.ContainerDefinition{
                    Command: []string{
                        "dolor",
                    },
                    CPU: sdk.Int64(856277),
                    DependsOn: []shared.ContainerDependency{
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumStart,
                            ContainerName: "ipsa",
                        },
                        shared.ContainerDependency{
                            Condition: shared.ContainerConditionEnumSuccess,
                            ContainerName: "eveniet",
                        },
                    },
                    DisableNetworking: sdk.Bool(false),
                    DNSSearchDomains: []string{
                        "officiis",
                        "esse",
                        "necessitatibus",
                        "sed",
                    },
                    DNSServers: []string{
                        "nesciunt",
                        "expedita",
                    },
                    DockerLabels: map[string]string{
                        "vel": "voluptatum",
                        "magnam": "exercitationem",
                    },
                    DockerSecurityOptions: []string{
                        "porro",
                    },
                    EntryPoint: []string{
                        "nobis",
                        "laboriosam",
                    },
                    Environment: []shared.KeyValuePair{
                        shared.KeyValuePair{
                            Name: sdk.String("Helen Heller III"),
                            Value: sdk.String("at"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Carlton Pollich"),
                            Value: sdk.String("repudiandae"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Marion Hickle"),
                            Value: sdk.String("officia"),
                        },
                        shared.KeyValuePair{
                            Name: sdk.String("Marjorie Hickle"),
                            Value: sdk.String("aspernatur"),
                        },
                    },
                    EnvironmentFiles: []shared.EnvironmentFile{
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "nesciunt",
                        },
                        shared.EnvironmentFile{
                            Type: shared.EnvironmentFileTypeEnumS3,
                            Value: "fuga",
                        },
                    },
                    Essential: sdk.Bool(false),
                    ExtraHosts: []shared.HostEntry{
                        shared.HostEntry{
                            Hostname: "feline-boss.name",
                            IPAddress: "fugiat",
                        },
                        shared.HostEntry{
                            Hostname: "circular-grand.com",
                            IPAddress: "consectetur",
                        },
                        shared.HostEntry{
                            Hostname: "assured-mycoplasma.org",
                            IPAddress: "soluta",
                        },
                    },
                    FirelensConfiguration: &shared.FirelensConfiguration{
                        Options: map[string]string{
                            "omnis": "eos",
                        },
                        Type: shared.FirelensConfigurationTypeEnumFluentbit,
                    },
                    HealthCheck: &shared.HealthCheck{
                        Command: []string{
                            "magni",
                            "inventore",
                            "fuga",
                        },
                        Interval: sdk.Int64(881897),
                        Retries: sdk.Int64(976802),
                        StartPeriod: sdk.Int64(719620),
                        Timeout: sdk.Int64(608593),
                    },
                    Hostname: sdk.String("whole-extremist.name"),
                    Image: sdk.String("maxime"),
                    Interactive: sdk.Bool(false),
                    Links: []string{
                        "temporibus",
                        "quos",
                    },
                    LinuxParameters: &shared.LinuxParameters{
                        Capabilities: &shared.KernelCapabilities{
                            Add: []string{
                                "itaque",
                                "commodi",
                            },
                            Drop: []string{
                                "earum",
                                "modi",
                                "nam",
                            },
                        },
                        Devices: []shared.Device{
                            shared.Device{
                                ContainerPath: sdk.String("voluptatem"),
                                HostPath: "ipsam",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumRead,
                                    shared.DeviceCgroupPermissionEnumRead,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("non"),
                                HostPath: "maiores",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumWrite,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("deserunt"),
                                HostPath: "esse",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumWrite,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                },
                            },
                            shared.Device{
                                ContainerPath: sdk.String("quis"),
                                HostPath: "sint",
                                Permissions: []shared.DeviceCgroupPermissionEnum{
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                    shared.DeviceCgroupPermissionEnumMknod,
                                },
                            },
                        },
                        InitProcessEnabled: sdk.Bool(false),
                        MaxSwap: sdk.Int64(404306),
                        SharedMemorySize: sdk.Int64(376741),
                        Swappiness: sdk.Int64(895346),
                        Tmpfs: []shared.Tmpfs{
                            shared.Tmpfs{
                                ContainerPath: "quae",
                                MountOptions: []string{
                                    "fuga",
                                    "laborum",
                                    "consectetur",
                                    "velit",
                                },
                                Size: 538869,
                            },
                            shared.Tmpfs{
                                ContainerPath: "ipsum",
                                MountOptions: []string{
                                    "magni",
                                    "soluta",
                                    "repudiandae",
                                    "nam",
                                },
                                Size: 294076,
                            },
                            shared.Tmpfs{
                                ContainerPath: "iusto",
                                MountOptions: []string{
                                    "sequi",
                                    "dignissimos",
                                },
                                Size: 205566,
                            },
                            shared.Tmpfs{
                                ContainerPath: "quo",
                                MountOptions: []string{
                                    "quibusdam",
                                    "iure",
                                    "odit",
                                },
                                Size: 974990,
                            },
                        },
                    },
                    LogConfiguration: &shared.LogConfiguration{
                        LogDriver: shared.LogDriverEnumGelf,
                        Options: map[string]string{
                            "quibusdam": "inventore",
                            "facere": "libero",
                        },
                        SecretOptions: []shared.Secret{
                            shared.Secret{
                                Name: "Howard Sauer",
                                ValueFrom: "illo",
                            },
                        },
                    },
                    Memory: sdk.Int64(36561),
                    MemoryReservation: sdk.Int64(424663),
                    MountPoints: []shared.MountPoint{
                        shared.MountPoint{
                            ContainerPath: sdk.String("beatae"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("vero"),
                        },
                        shared.MountPoint{
                            ContainerPath: sdk.String("excepturi"),
                            ReadOnly: sdk.Bool(false),
                            SourceVolume: sdk.String("eum"),
                        },
                    },
                    Name: sdk.String("Leslie Metz DDS"),
                    PortMappings: []shared.PortMapping{
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHttp2.ToPointer(),
                            ContainerPort: sdk.Int64(932562),
                            ContainerPortRange: sdk.String("alias"),
                            HostPort: sdk.Int64(391797),
                            Name: sdk.String("Jacob Pacocha"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHTTP.ToPointer(),
                            ContainerPort: sdk.Int64(39992),
                            ContainerPortRange: sdk.String("consequatur"),
                            HostPort: sdk.Int64(639705),
                            Name: sdk.String("Angel Pouros"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHttp2.ToPointer(),
                            ContainerPort: sdk.Int64(709036),
                            ContainerPortRange: sdk.String("deleniti"),
                            HostPort: sdk.Int64(954334),
                            Name: sdk.String("June Miller"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                        shared.PortMapping{
                            AppProtocol: shared.ApplicationProtocolEnumHttp2.ToPointer(),
                            ContainerPort: sdk.Int64(357425),
                            ContainerPortRange: sdk.String("est"),
                            HostPort: sdk.Int64(621666),
                            Name: sdk.String("Lucille Bogan"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                    },
                    Privileged: sdk.Bool(false),
                    PseudoTerminal: sdk.Bool(false),
                    ReadonlyRootFilesystem: sdk.Bool(false),
                    RepositoryCredentials: &shared.RepositoryCredentials{
                        CredentialsParameter: "inventore",
                    },
                    ResourceRequirements: []shared.ResourceRequirement{
                        shared.ResourceRequirement{
                            Type: shared.ResourceTypeEnumGpu,
                            Value: "qui",
                        },
                    },
                    Secrets: []shared.Secret{
                        shared.Secret{
                            Name: "Vivian Rodriguez",
                            ValueFrom: "dolorum",
                        },
                        shared.Secret{
                            Name: "Beverly Abbott",
                            ValueFrom: "quae",
                        },
                        shared.Secret{
                            Name: "Pauline Durgan",
                            ValueFrom: "et",
                        },
                    },
                    StartTimeout: sdk.Int64(215398),
                    StopTimeout: sdk.Int64(602229),
                    SystemControls: []shared.SystemControl{
                        shared.SystemControl{
                            Namespace: sdk.String("distinctio"),
                            Value: sdk.String("maxime"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("quia"),
                            Value: sdk.String("quia"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("nostrum"),
                            Value: sdk.String("omnis"),
                        },
                        shared.SystemControl{
                            Namespace: sdk.String("libero"),
                            Value: sdk.String("dicta"),
                        },
                    },
                    Ulimits: []shared.Ulimit{
                        shared.Ulimit{
                            HardLimit: 727888,
                            Name: shared.UlimitNameEnumRttime,
                            SoftLimit: 637462,
                        },
                        shared.Ulimit{
                            HardLimit: 554603,
                            Name: shared.UlimitNameEnumRttime,
                            SoftLimit: 25756,
                        },
                        shared.Ulimit{
                            HardLimit: 479385,
                            Name: shared.UlimitNameEnumCore,
                            SoftLimit: 914864,
                        },
                    },
                    User: sdk.String("inventore"),
                    VolumesFrom: []shared.VolumeFrom{
                        shared.VolumeFrom{
                            ReadOnly: sdk.Bool(false),
                            SourceContainer: sdk.String("totam"),
                        },
                    },
                    WorkingDirectory: sdk.String("dolore"),
                },
            },
            CPU: sdk.String("eligendi"),
            EphemeralStorage: &shared.EphemeralStorage{
                SizeInGiB: 715053,
            },
            ExecutionRoleArn: sdk.String("voluptatem"),
            Family: "autem",
            InferenceAccelerators: []shared.InferenceAccelerator{
                shared.InferenceAccelerator{
                    DeviceName: "dolores",
                    DeviceType: "assumenda",
                },
                shared.InferenceAccelerator{
                    DeviceName: "beatae",
                    DeviceType: "est",
                },
            },
            IpcMode: shared.IpcModeEnumNone.ToPointer(),
            Memory: sdk.String("corrupti"),
            NetworkMode: shared.NetworkModeEnumHost.ToPointer(),
            PidMode: shared.PidModeEnumTask.ToPointer(),
            PlacementConstraints: []shared.TaskDefinitionPlacementConstraint{
                shared.TaskDefinitionPlacementConstraint{
                    Expression: sdk.String("necessitatibus"),
                    Type: shared.TaskDefinitionPlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.TaskDefinitionPlacementConstraint{
                    Expression: sdk.String("tempore"),
                    Type: shared.TaskDefinitionPlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.TaskDefinitionPlacementConstraint{
                    Expression: sdk.String("sint"),
                    Type: shared.TaskDefinitionPlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.TaskDefinitionPlacementConstraint{
                    Expression: sdk.String("ea"),
                    Type: shared.TaskDefinitionPlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
            },
            ProxyConfiguration: &shared.ProxyConfiguration{
                ContainerName: "autem",
                Properties: sdk.String("ipsam"),
                Type: shared.ProxyConfigurationTypeEnumAppmesh.ToPointer(),
            },
            RequiresCompatibilities: []shared.CompatibilityEnum{
                shared.CompatibilityEnumFargate,
                shared.CompatibilityEnumFargate,
                shared.CompatibilityEnumExternal,
            },
            RuntimePlatform: &shared.RuntimePlatform{
                CPUArchitecture: shared.CPUArchitectureEnumArm64.ToPointer(),
                OperatingSystemFamily: shared.OSFamilyEnumWindowsServer2022Full.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("alias"),
                    Value: sdk.String("quia"),
                },
                shared.Tag{
                    Key: sdk.String("quidem"),
                    Value: sdk.String("fuga"),
                },
                shared.Tag{
                    Key: sdk.String("repudiandae"),
                    Value: sdk.String("accusantium"),
                },
                shared.Tag{
                    Key: sdk.String("expedita"),
                    Value: sdk.String("officiis"),
                },
            },
            TaskRoleArn: sdk.String("eos"),
            Volumes: []shared.Volume{
                shared.Volume{
                    DockerVolumeConfiguration: &shared.DockerVolumeConfiguration{
                        Autoprovision: sdk.Bool(false),
                        Driver: sdk.String("odio"),
                        DriverOpts: map[string]string{
                            "odit": "explicabo",
                            "corporis": "error",
                            "earum": "adipisci",
                        },
                        Labels: map[string]string{
                            "similique": "ut",
                            "quidem": "quis",
                            "beatae": "unde",
                            "molestiae": "delectus",
                        },
                        Scope: shared.ScopeEnumShared.ToPointer(),
                    },
                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                            AccessPointID: sdk.String("fugit"),
                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                        },
                        FileSystemID: "numquam",
                        RootDirectory: sdk.String("nesciunt"),
                        TransitEncryption: shared.EFSTransitEncryptionEnumDisabled.ToPointer(),
                        TransitEncryptionPort: sdk.Int64(637856),
                    },
                    FsxWindowsFileServerVolumeConfiguration: &shared.FSxWindowsFileServerVolumeConfiguration{
                        AuthorizationConfig: shared.FSxWindowsFileServerAuthorizationConfig{
                            CredentialsParameter: "dignissimos",
                            Domain: "optio",
                        },
                        FileSystemID: "necessitatibus",
                        RootDirectory: "corporis",
                    },
                    Host: &shared.HostVolumeProperties{
                        SourcePath: sdk.String("qui"),
                    },
                    Name: sdk.String("Jaime McGlynn"),
                },
                shared.Volume{
                    DockerVolumeConfiguration: &shared.DockerVolumeConfiguration{
                        Autoprovision: sdk.Bool(false),
                        Driver: sdk.String("enim"),
                        DriverOpts: map[string]string{
                            "in": "minus",
                        },
                        Labels: map[string]string{
                            "modi": "corporis",
                            "magnam": "voluptates",
                        },
                        Scope: shared.ScopeEnumShared.ToPointer(),
                    },
                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                            AccessPointID: sdk.String("tempore"),
                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                        },
                        FileSystemID: "libero",
                        RootDirectory: sdk.String("ratione"),
                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                        TransitEncryptionPort: sdk.Int64(520875),
                    },
                    FsxWindowsFileServerVolumeConfiguration: &shared.FSxWindowsFileServerVolumeConfiguration{
                        AuthorizationConfig: shared.FSxWindowsFileServerAuthorizationConfig{
                            CredentialsParameter: "occaecati",
                            Domain: "voluptas",
                        },
                        FileSystemID: "quo",
                        RootDirectory: "velit",
                    },
                    Host: &shared.HostVolumeProperties{
                        SourcePath: sdk.String("minus"),
                    },
                    Name: sdk.String("Dean Ortiz"),
                },
                shared.Volume{
                    DockerVolumeConfiguration: &shared.DockerVolumeConfiguration{
                        Autoprovision: sdk.Bool(false),
                        Driver: sdk.String("tempore"),
                        DriverOpts: map[string]string{
                            "odit": "repellat",
                            "pariatur": "nemo",
                            "reprehenderit": "aperiam",
                            "odio": "minima",
                        },
                        Labels: map[string]string{
                            "ducimus": "excepturi",
                            "dolores": "error",
                        },
                        Scope: shared.ScopeEnumTask.ToPointer(),
                    },
                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                            AccessPointID: sdk.String("ducimus"),
                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                        },
                        FileSystemID: "pariatur",
                        RootDirectory: sdk.String("itaque"),
                        TransitEncryption: shared.EFSTransitEncryptionEnumDisabled.ToPointer(),
                        TransitEncryptionPort: sdk.Int64(763165),
                    },
                    FsxWindowsFileServerVolumeConfiguration: &shared.FSxWindowsFileServerVolumeConfiguration{
                        AuthorizationConfig: shared.FSxWindowsFileServerAuthorizationConfig{
                            CredentialsParameter: "ex",
                            Domain: "quaerat",
                        },
                        FileSystemID: "commodi",
                        RootDirectory: "officiis",
                    },
                    Host: &shared.HostVolumeProperties{
                        SourcePath: sdk.String("placeat"),
                    },
                    Name: sdk.String("Jorge Kohler"),
                },
                shared.Volume{
                    DockerVolumeConfiguration: &shared.DockerVolumeConfiguration{
                        Autoprovision: sdk.Bool(false),
                        Driver: sdk.String("ipsa"),
                        DriverOpts: map[string]string{
                            "vero": "sequi",
                            "repudiandae": "cum",
                            "dicta": "earum",
                        },
                        Labels: map[string]string{
                            "animi": "dolores",
                            "nam": "dicta",
                        },
                        Scope: shared.ScopeEnumTask.ToPointer(),
                    },
                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                            AccessPointID: sdk.String("necessitatibus"),
                            Iam: shared.EFSAuthorizationConfigIAMEnumDisabled.ToPointer(),
                        },
                        FileSystemID: "ipsa",
                        RootDirectory: sdk.String("ducimus"),
                        TransitEncryption: shared.EFSTransitEncryptionEnumDisabled.ToPointer(),
                        TransitEncryptionPort: sdk.Int64(87382),
                    },
                    FsxWindowsFileServerVolumeConfiguration: &shared.FSxWindowsFileServerVolumeConfiguration{
                        AuthorizationConfig: shared.FSxWindowsFileServerAuthorizationConfig{
                            CredentialsParameter: "quasi",
                            Domain: "laboriosam",
                        },
                        FileSystemID: "pariatur",
                        RootDirectory: "libero",
                    },
                    Host: &shared.HostVolumeProperties{
                        SourcePath: sdk.String("excepturi"),
                    },
                    Name: sdk.String("Maurice Haag"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.RegisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113RegisterTaskDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterTaskDefinitionResponse != nil {
        // handle response
    }
}
```

## RunTask

<p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RunTask(ctx, operations.RunTaskRequest{
        RunTaskRequest: shared.RunTaskRequest{
            CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(484966),
                    CapacityProvider: "eaque",
                    Weight: sdk.Int64(901163),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(104078),
                    CapacityProvider: "quos",
                    Weight: sdk.Int64(614438),
                },
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(826862),
                    CapacityProvider: "tempore",
                    Weight: sdk.Int64(725574),
                },
            },
            Cluster: sdk.String("velit"),
            Count: sdk.Int64(38557),
            EnableECSManagedTags: sdk.Bool(false),
            EnableExecuteCommand: sdk.Bool(false),
            Group: sdk.String("delectus"),
            LaunchType: shared.LaunchTypeEnumExternal.ToPointer(),
            NetworkConfiguration: &shared.NetworkConfiguration{
                AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                    SecurityGroups: []string{
                        "adipisci",
                    },
                    Subnets: []string{
                        "deserunt",
                        "doloremque",
                        "quis",
                        "veniam",
                    },
                },
            },
            Overrides: &shared.TaskOverride{
                ContainerOverrides: []shared.ContainerOverride{
                    shared.ContainerOverride{
                        Command: []string{
                            "cupiditate",
                        },
                        CPU: sdk.Int64(475589),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Kyle Gusikowski"),
                                Value: sdk.String("asperiores"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Louise Schulist"),
                                Value: sdk.String("pariatur"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Yvonne Bernhard"),
                                Value: sdk.String("tempore"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Tami Hahn"),
                                Value: sdk.String("nisi"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "nisi",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "libero",
                            },
                        },
                        Memory: sdk.Int64(794507),
                        MemoryReservation: sdk.Int64(815200),
                        Name: sdk.String("Dale Hamill"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "labore",
                            },
                        },
                    },
                    shared.ContainerOverride{
                        Command: []string{
                            "eos",
                            "reprehenderit",
                            "nostrum",
                        },
                        CPU: sdk.Int64(207296),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Jordan Romaguera"),
                                Value: sdk.String("officiis"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Carmen Carroll"),
                                Value: sdk.String("vitae"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "esse",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "fugiat",
                            },
                        },
                        Memory: sdk.Int64(322333),
                        MemoryReservation: sdk.Int64(134818),
                        Name: sdk.String("Marta Kub"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumGpu,
                                Value: "incidunt",
                            },
                        },
                    },
                    shared.ContainerOverride{
                        Command: []string{
                            "saepe",
                            "tempore",
                            "veniam",
                            "eos",
                        },
                        CPU: sdk.Int64(970079),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Maxine Hilll"),
                                Value: sdk.String("sequi"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Nina Blanda"),
                                Value: sdk.String("aliquam"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Eduardo Larkin DDS"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Rudolph Macejkovic"),
                                Value: sdk.String("rerum"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "corporis",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "vero",
                            },
                        },
                        Memory: sdk.Int64(629377),
                        MemoryReservation: sdk.Int64(833982),
                        Name: sdk.String("Florence Jerde"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumGpu,
                                Value: "ad",
                            },
                        },
                    },
                },
                CPU: sdk.String("quae"),
                EphemeralStorage: &shared.EphemeralStorage{
                    SizeInGiB: 229567,
                },
                ExecutionRoleArn: sdk.String("illum"),
                InferenceAcceleratorOverrides: []shared.InferenceAcceleratorOverride{
                    shared.InferenceAcceleratorOverride{
                        DeviceName: sdk.String("quidem"),
                        DeviceType: sdk.String("cum"),
                    },
                    shared.InferenceAcceleratorOverride{
                        DeviceName: sdk.String("amet"),
                        DeviceType: sdk.String("quasi"),
                    },
                    shared.InferenceAcceleratorOverride{
                        DeviceName: sdk.String("dicta"),
                        DeviceType: sdk.String("laudantium"),
                    },
                },
                Memory: sdk.String("doloremque"),
                TaskRoleArn: sdk.String("earum"),
            },
            PlacementConstraints: []shared.PlacementConstraint{
                shared.PlacementConstraint{
                    Expression: sdk.String("amet"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("dolorum"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
            },
            PlacementStrategy: []shared.PlacementStrategy{
                shared.PlacementStrategy{
                    Field: sdk.String("repudiandae"),
                    Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("nemo"),
                    Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("itaque"),
                    Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                },
            },
            PlatformVersion: sdk.String("corrupti"),
            PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
            ReferenceID: sdk.String("sint"),
            StartedBy: sdk.String("accusamus"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("dicta"),
                },
            },
            TaskDefinition: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.RunTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113RunTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunTaskResponse != nil {
        // handle response
    }
}
```

## StartTask

<p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartTask(ctx, operations.StartTaskRequest{
        StartTaskRequest: shared.StartTaskRequest{
            Cluster: sdk.String("beatae"),
            ContainerInstances: []string{
                "labore",
                "minus",
                "esse",
                "voluptatem",
            },
            EnableECSManagedTags: sdk.Bool(false),
            EnableExecuteCommand: sdk.Bool(false),
            Group: sdk.String("perferendis"),
            NetworkConfiguration: &shared.NetworkConfiguration{
                AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                    SecurityGroups: []string{
                        "aperiam",
                        "dignissimos",
                    },
                    Subnets: []string{
                        "velit",
                        "porro",
                        "provident",
                        "consectetur",
                    },
                },
            },
            Overrides: &shared.TaskOverride{
                ContainerOverrides: []shared.ContainerOverride{
                    shared.ContainerOverride{
                        Command: []string{
                            "consectetur",
                            "soluta",
                        },
                        CPU: sdk.Int64(620500),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Marvin White"),
                                Value: sdk.String("itaque"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Cameron Kuhn"),
                                Value: sdk.String("consectetur"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Roy Christiansen"),
                                Value: sdk.String("non"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Pamela Welch"),
                                Value: sdk.String("non"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "in",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "exercitationem",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "labore",
                            },
                        },
                        Memory: sdk.Int64(254382),
                        MemoryReservation: sdk.Int64(921193),
                        Name: sdk.String("Maureen Champlin"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumGpu,
                                Value: "deleniti",
                            },
                        },
                    },
                    shared.ContainerOverride{
                        Command: []string{
                            "voluptate",
                            "similique",
                        },
                        CPU: sdk.Int64(326118),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Karen Gleichner"),
                                Value: sdk.String("mollitia"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Hope Hegmann"),
                                Value: sdk.String("reiciendis"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Dr. Pauline Ankunding"),
                                Value: sdk.String("commodi"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "dolorum",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "possimus",
                            },
                        },
                        Memory: sdk.Int64(452399),
                        MemoryReservation: sdk.Int64(232772),
                        Name: sdk.String("Bertha Ward MD"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "et",
                            },
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "amet",
                            },
                        },
                    },
                    shared.ContainerOverride{
                        Command: []string{
                            "fuga",
                            "alias",
                        },
                        CPU: sdk.Int64(526413),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Mr. Dwayne Sipes PhD"),
                                Value: sdk.String("delectus"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "nulla",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "officia",
                            },
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "sed",
                            },
                        },
                        Memory: sdk.Int64(30208),
                        MemoryReservation: sdk.Int64(664),
                        Name: sdk.String("Terrell Barrows"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "harum",
                            },
                        },
                    },
                    shared.ContainerOverride{
                        Command: []string{
                            "beatae",
                        },
                        CPU: sdk.Int64(397988),
                        Environment: []shared.KeyValuePair{
                            shared.KeyValuePair{
                                Name: sdk.String("Courtney Maggio"),
                                Value: sdk.String("totam"),
                            },
                            shared.KeyValuePair{
                                Name: sdk.String("Beth Jenkins"),
                                Value: sdk.String("odit"),
                            },
                        },
                        EnvironmentFiles: []shared.EnvironmentFile{
                            shared.EnvironmentFile{
                                Type: shared.EnvironmentFileTypeEnumS3,
                                Value: "reiciendis",
                            },
                        },
                        Memory: sdk.Int64(997918),
                        MemoryReservation: sdk.Int64(861123),
                        Name: sdk.String("Mrs. Luther Torp"),
                        ResourceRequirements: []shared.ResourceRequirement{
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "non",
                            },
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumInferenceAccelerator,
                                Value: "quia",
                            },
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumGpu,
                                Value: "quisquam",
                            },
                            shared.ResourceRequirement{
                                Type: shared.ResourceTypeEnumGpu,
                                Value: "voluptatibus",
                            },
                        },
                    },
                },
                CPU: sdk.String("eligendi"),
                EphemeralStorage: &shared.EphemeralStorage{
                    SizeInGiB: 62035,
                },
                ExecutionRoleArn: sdk.String("officiis"),
                InferenceAcceleratorOverrides: []shared.InferenceAcceleratorOverride{
                    shared.InferenceAcceleratorOverride{
                        DeviceName: sdk.String("architecto"),
                        DeviceType: sdk.String("enim"),
                    },
                },
                Memory: sdk.String("optio"),
                TaskRoleArn: sdk.String("rem"),
            },
            PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
            ReferenceID: sdk.String("facilis"),
            StartedBy: sdk.String("reiciendis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("iste"),
                    Value: sdk.String("dicta"),
                },
                shared.Tag{
                    Key: sdk.String("quos"),
                    Value: sdk.String("ullam"),
                },
                shared.Tag{
                    Key: sdk.String("dolore"),
                    Value: sdk.String("modi"),
                },
                shared.Tag{
                    Key: sdk.String("itaque"),
                    Value: sdk.String("maxime"),
                },
            },
            TaskDefinition: "modi",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.StartTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113StartTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTaskResponse != nil {
        // handle response
    }
}
```

## StopTask

<p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopTask(ctx, operations.StopTaskRequest{
        StopTaskRequest: shared.StopTaskRequest{
            Cluster: sdk.String("totam"),
            Reason: sdk.String("reiciendis"),
            Task: "ab",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.StopTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113StopTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTaskResponse != nil {
        // handle response
    }
}
```

## SubmitAttachmentStateChanges

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SubmitAttachmentStateChanges(ctx, operations.SubmitAttachmentStateChangesRequest{
        SubmitAttachmentStateChangesRequest: shared.SubmitAttachmentStateChangesRequest{
            Attachments: []shared.AttachmentStateChange{
                shared.AttachmentStateChange{
                    AttachmentArn: "neque",
                    Status: "corporis",
                },
                shared.AttachmentStateChange{
                    AttachmentArn: "voluptas",
                    Status: "consequuntur",
                },
            },
            Cluster: sdk.String("officia"),
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.SubmitAttachmentStateChangesXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitAttachmentStateChangesResponse != nil {
        // handle response
    }
}
```

## SubmitContainerStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SubmitContainerStateChange(ctx, operations.SubmitContainerStateChangeRequest{
        SubmitContainerStateChangeRequest: shared.SubmitContainerStateChangeRequest{
            Cluster: sdk.String("veniam"),
            ContainerName: sdk.String("saepe"),
            ExitCode: sdk.Int64(206063),
            NetworkBindings: []shared.NetworkBinding{
                shared.NetworkBinding{
                    BindIP: sdk.String("aliquam"),
                    ContainerPort: sdk.Int64(552581),
                    ContainerPortRange: sdk.String("doloribus"),
                    HostPort: sdk.Int64(851809),
                    HostPortRange: sdk.String("est"),
                    Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                },
                shared.NetworkBinding{
                    BindIP: sdk.String("velit"),
                    ContainerPort: sdk.Int64(110522),
                    ContainerPortRange: sdk.String("nesciunt"),
                    HostPort: sdk.Int64(630832),
                    HostPortRange: sdk.String("illo"),
                    Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                },
                shared.NetworkBinding{
                    BindIP: sdk.String("nemo"),
                    ContainerPort: sdk.Int64(987890),
                    ContainerPortRange: sdk.String("possimus"),
                    HostPort: sdk.Int64(603323),
                    HostPortRange: sdk.String("incidunt"),
                    Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                },
                shared.NetworkBinding{
                    BindIP: sdk.String("ipsam"),
                    ContainerPort: sdk.Int64(583193),
                    ContainerPortRange: sdk.String("optio"),
                    HostPort: sdk.Int64(2064),
                    HostPortRange: sdk.String("quidem"),
                    Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                },
            },
            Reason: sdk.String("commodi"),
            RuntimeID: sdk.String("sapiente"),
            Status: sdk.String("consequuntur"),
            Task: sdk.String("veniam"),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.SubmitContainerStateChangeXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitContainerStateChange,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitContainerStateChangeResponse != nil {
        // handle response
    }
}
```

## SubmitTaskStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>

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
    res, err := s.SDK.SubmitTaskStateChange(ctx, operations.SubmitTaskStateChangeRequest{
        SubmitTaskStateChangeRequest: shared.SubmitTaskStateChangeRequest{
            Attachments: []shared.AttachmentStateChange{
                shared.AttachmentStateChange{
                    AttachmentArn: "in",
                    Status: "minima",
                },
                shared.AttachmentStateChange{
                    AttachmentArn: "ex",
                    Status: "minus",
                },
                shared.AttachmentStateChange{
                    AttachmentArn: "ab",
                    Status: "beatae",
                },
            },
            Cluster: sdk.String("hic"),
            Containers: []shared.ContainerStateChange{
                shared.ContainerStateChange{
                    ContainerName: sdk.String("quisquam"),
                    ExitCode: sdk.Int64(221218),
                    ImageDigest: sdk.String("ducimus"),
                    NetworkBindings: []shared.NetworkBinding{
                        shared.NetworkBinding{
                            BindIP: sdk.String("minima"),
                            ContainerPort: sdk.Int64(102446),
                            ContainerPortRange: sdk.String("qui"),
                            HostPort: sdk.Int64(397026),
                            HostPortRange: sdk.String("magni"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.NetworkBinding{
                            BindIP: sdk.String("adipisci"),
                            ContainerPort: sdk.Int64(506343),
                            ContainerPortRange: sdk.String("dolor"),
                            HostPort: sdk.Int64(349898),
                            HostPortRange: sdk.String("expedita"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                        shared.NetworkBinding{
                            BindIP: sdk.String("impedit"),
                            ContainerPort: sdk.Int64(24577),
                            ContainerPortRange: sdk.String("nemo"),
                            HostPort: sdk.Int64(633987),
                            HostPortRange: sdk.String("consequuntur"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                    },
                    Reason: sdk.String("deserunt"),
                    RuntimeID: sdk.String("modi"),
                    Status: sdk.String("veniam"),
                },
                shared.ContainerStateChange{
                    ContainerName: sdk.String("quod"),
                    ExitCode: sdk.Int64(932250),
                    ImageDigest: sdk.String("a"),
                    NetworkBindings: []shared.NetworkBinding{
                        shared.NetworkBinding{
                            BindIP: sdk.String("enim"),
                            ContainerPort: sdk.Int64(987759),
                            ContainerPortRange: sdk.String("assumenda"),
                            HostPort: sdk.Int64(887363),
                            HostPortRange: sdk.String("architecto"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.NetworkBinding{
                            BindIP: sdk.String("culpa"),
                            ContainerPort: sdk.Int64(60335),
                            ContainerPortRange: sdk.String("nobis"),
                            HostPort: sdk.Int64(898193),
                            HostPortRange: sdk.String("quia"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.NetworkBinding{
                            BindIP: sdk.String("vel"),
                            ContainerPort: sdk.Int64(595584),
                            ContainerPortRange: sdk.String("debitis"),
                            HostPort: sdk.Int64(354821),
                            HostPortRange: sdk.String("architecto"),
                            Protocol: shared.TransportProtocolEnumTCP.ToPointer(),
                        },
                        shared.NetworkBinding{
                            BindIP: sdk.String("perferendis"),
                            ContainerPort: sdk.Int64(82876),
                            ContainerPortRange: sdk.String("provident"),
                            HostPort: sdk.Int64(765833),
                            HostPortRange: sdk.String("iure"),
                            Protocol: shared.TransportProtocolEnumUDP.ToPointer(),
                        },
                    },
                    Reason: sdk.String("quod"),
                    RuntimeID: sdk.String("nemo"),
                    Status: sdk.String("recusandae"),
                },
            },
            ExecutionStoppedAt: types.MustTimeFromString("2022-09-13T19:24:49.853Z"),
            ManagedAgents: []shared.ManagedAgentStateChange{
                shared.ManagedAgentStateChange{
                    ContainerName: "laboriosam",
                    ManagedAgentName: shared.ManagedAgentNameEnumExecuteCommandAgent,
                    Reason: sdk.String("sed"),
                    Status: "odio",
                },
                shared.ManagedAgentStateChange{
                    ContainerName: "natus",
                    ManagedAgentName: shared.ManagedAgentNameEnumExecuteCommandAgent,
                    Reason: sdk.String("provident"),
                    Status: "cum",
                },
            },
            PullStartedAt: types.MustTimeFromString("2020-11-21T03:47:05.182Z"),
            PullStoppedAt: types.MustTimeFromString("2021-02-19T13:57:53.084Z"),
            Reason: sdk.String("laboriosam"),
            Status: sdk.String("unde"),
            Task: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.SubmitTaskStateChangeXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitTaskStateChange,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitTaskStateChangeResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "recusandae",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("id"),
                    Value: sdk.String("saepe"),
                },
                shared.Tag{
                    Key: sdk.String("autem"),
                    Value: sdk.String("quo"),
                },
                shared.Tag{
                    Key: sdk.String("nesciunt"),
                    Value: sdk.String("illum"),
                },
                shared.Tag{
                    Key: sdk.String("nemo"),
                    Value: sdk.String("illum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonEc2ContainerServiceV20141113TagResource,
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

Deletes specified tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "ad",
            TagKeys: []string{
                "laborum",
                "eveniet",
                "laborum",
                "incidunt",
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonEc2ContainerServiceV20141113UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateCapacityProvider

Modifies the parameters for a capacity provider.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCapacityProvider(ctx, operations.UpdateCapacityProviderRequest{
        UpdateCapacityProviderRequest: shared.UpdateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProviderUpdate{
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: sdk.Int64(668218),
                    MaximumScalingStepSize: sdk.Int64(577413),
                    MinimumScalingStepSize: sdk.Int64(286716),
                    Status: shared.ManagedScalingStatusEnumDisabled.ToPointer(),
                    TargetCapacity: sdk.Int64(19462),
                },
                ManagedTerminationProtection: shared.ManagedTerminationProtectionEnumEnabled.ToPointer(),
            },
            Name: "Megan Hackett",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.UpdateCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateCapacityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCapacityProviderResponse != nil {
        // handle response
    }
}
```

## UpdateCluster

Updates the cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCluster(ctx, operations.UpdateClusterRequest{
        UpdateClusterRequest: shared.UpdateClusterRequest{
            Cluster: "nostrum",
            Configuration: &shared.ClusterConfiguration{
                ExecuteCommandConfiguration: &shared.ExecuteCommandConfiguration{
                    KmsKeyID: sdk.String("esse"),
                    LogConfiguration: &shared.ExecuteCommandLogConfiguration{
                        CloudWatchEncryptionEnabled: sdk.Bool(false),
                        CloudWatchLogGroupName: sdk.String("corrupti"),
                        S3BucketName: sdk.String("fuga"),
                        S3EncryptionEnabled: sdk.Bool(false),
                        S3KeyPrefix: sdk.String("facere"),
                    },
                    Logging: shared.ExecuteCommandLoggingEnumOverride.ToPointer(),
                },
            },
            ServiceConnectDefaults: &shared.ClusterServiceConnectDefaultsRequest{
                Namespace: "quasi",
            },
            Settings: []shared.ClusterSetting{
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("quod"),
                },
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("laboriosam"),
                },
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("doloremque"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.UpdateClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterResponse != nil {
        // handle response
    }
}
```

## UpdateClusterSettings

Modifies the settings to use for a cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateClusterSettings(ctx, operations.UpdateClusterSettingsRequest{
        UpdateClusterSettingsRequest: shared.UpdateClusterSettingsRequest{
            Cluster: "similique",
            Settings: []shared.ClusterSetting{
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("blanditiis"),
                },
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("quae"),
                },
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("magni"),
                },
                shared.ClusterSetting{
                    Name: shared.ClusterSettingNameEnumContainerInsights.ToPointer(),
                    Value: sdk.String("officiis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.UpdateClusterSettingsXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateClusterSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateContainerAgent

<p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateContainerAgent(ctx, operations.UpdateContainerAgentRequest{
        UpdateContainerAgentRequest: shared.UpdateContainerAgentRequest{
            Cluster: sdk.String("laudantium"),
            ContainerInstance: "maiores",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.UpdateContainerAgentXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateContainerAgent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContainerAgentResponse != nil {
        // handle response
    }
}
```

## UpdateContainerInstancesState

<p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateContainerInstancesState(ctx, operations.UpdateContainerInstancesStateRequest{
        UpdateContainerInstancesStateRequest: shared.UpdateContainerInstancesStateRequest{
            Cluster: sdk.String("velit"),
            ContainerInstances: []string{
                "esse",
                "in",
            },
            Status: shared.ContainerInstanceStatusEnumDeregistering,
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.UpdateContainerInstancesStateXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateContainerInstancesState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContainerInstancesStateResponse != nil {
        // handle response
    }
}
```

## UpdateService

<p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties. If you specified a custom role when you created the service, Amazon ECS automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p> <code>loadBalancers,</code> </p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        UpdateServiceRequest: shared.UpdateServiceRequest{
            CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                shared.CapacityProviderStrategyItem{
                    Base: sdk.Int64(278329),
                    CapacityProvider: "dicta",
                    Weight: sdk.Int64(139133),
                },
            },
            Cluster: sdk.String("corporis"),
            DeploymentConfiguration: &shared.DeploymentConfiguration{
                Alarms: &shared.DeploymentAlarms{
                    AlarmNames: []string{
                        "alias",
                        "error",
                        "vel",
                    },
                    Enable: false,
                    Rollback: false,
                },
                DeploymentCircuitBreaker: &shared.DeploymentCircuitBreaker{
                    Enable: false,
                    Rollback: false,
                },
                MaximumPercent: sdk.Int64(35581),
                MinimumHealthyPercent: sdk.Int64(664197),
            },
            DesiredCount: sdk.Int64(388169),
            EnableECSManagedTags: sdk.Bool(false),
            EnableExecuteCommand: sdk.Bool(false),
            ForceNewDeployment: sdk.Bool(false),
            HealthCheckGracePeriodSeconds: sdk.Int64(401688),
            LoadBalancers: []shared.LoadBalancer{
                shared.LoadBalancer{
                    ContainerName: sdk.String("veritatis"),
                    ContainerPort: sdk.Int64(356440),
                    LoadBalancerName: sdk.String("quae"),
                    TargetGroupArn: sdk.String("similique"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("incidunt"),
                    ContainerPort: sdk.Int64(462583),
                    LoadBalancerName: sdk.String("magni"),
                    TargetGroupArn: sdk.String("deserunt"),
                },
                shared.LoadBalancer{
                    ContainerName: sdk.String("delectus"),
                    ContainerPort: sdk.Int64(609537),
                    LoadBalancerName: sdk.String("sed"),
                    TargetGroupArn: sdk.String("nesciunt"),
                },
            },
            NetworkConfiguration: &shared.NetworkConfiguration{
                AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                    SecurityGroups: []string{
                        "cupiditate",
                        "aliquam",
                    },
                    Subnets: []string{
                        "maiores",
                        "laudantium",
                        "velit",
                    },
                },
            },
            PlacementConstraints: []shared.PlacementConstraint{
                shared.PlacementConstraint{
                    Expression: sdk.String("amet"),
                    Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("ipsa"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("tenetur"),
                    Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                },
                shared.PlacementConstraint{
                    Expression: sdk.String("molestiae"),
                    Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                },
            },
            PlacementStrategy: []shared.PlacementStrategy{
                shared.PlacementStrategy{
                    Field: sdk.String("a"),
                    Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("perspiciatis"),
                    Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("dicta"),
                    Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                },
                shared.PlacementStrategy{
                    Field: sdk.String("commodi"),
                    Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                },
            },
            PlatformVersion: sdk.String("porro"),
            PropagateTags: shared.PropagateTagsEnumNone.ToPointer(),
            Service: "quidem",
            ServiceConnectConfiguration: &shared.ServiceConnectConfiguration{
                Enabled: false,
                LogConfiguration: &shared.LogConfiguration{
                    LogDriver: shared.LogDriverEnumJournald,
                    Options: map[string]string{
                        "fugit": "eius",
                        "sequi": "eligendi",
                        "asperiores": "esse",
                        "blanditiis": "sint",
                    },
                    SecretOptions: []shared.Secret{
                        shared.Secret{
                            Name: "Lynn Wuckert",
                            ValueFrom: "deserunt",
                        },
                        shared.Secret{
                            Name: "Sheila Torphy",
                            ValueFrom: "saepe",
                        },
                        shared.Secret{
                            Name: "Delia Barton",
                            ValueFrom: "quasi",
                        },
                        shared.Secret{
                            Name: "Frederick Schaden",
                            ValueFrom: "natus",
                        },
                    },
                },
                Namespace: sdk.String("minus"),
                Services: []shared.ServiceConnectService{
                    shared.ServiceConnectService{
                        ClientAliases: []shared.ServiceConnectClientAlias{
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("reprehenderit"),
                                Port: 800799,
                            },
                            shared.ServiceConnectClientAlias{
                                DNSName: sdk.String("quos"),
                                Port: 548846,
                            },
                        },
                        DiscoveryName: sdk.String("amet"),
                        IngressPortOverride: sdk.Int64(473326),
                        PortName: "amet",
                    },
                },
            },
            ServiceRegistries: []shared.ServiceRegistry{
                shared.ServiceRegistry{
                    ContainerName: sdk.String("modi"),
                    ContainerPort: sdk.Int64(21358),
                    Port: sdk.Int64(897058),
                    RegistryArn: sdk.String("architecto"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("molestias"),
                    ContainerPort: sdk.Int64(292177),
                    Port: sdk.Int64(125811),
                    RegistryArn: sdk.String("maiores"),
                },
                shared.ServiceRegistry{
                    ContainerName: sdk.String("neque"),
                    ContainerPort: sdk.Int64(139745),
                    Port: sdk.Int64(936845),
                    RegistryArn: sdk.String("veniam"),
                },
            },
            TaskDefinition: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.UpdateServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceResponse != nil {
        // handle response
    }
}
```

## UpdateServicePrimaryTaskSet

Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateServicePrimaryTaskSet(ctx, operations.UpdateServicePrimaryTaskSetRequest{
        UpdateServicePrimaryTaskSetRequest: shared.UpdateServicePrimaryTaskSetRequest{
            Cluster: "quis",
            PrimaryTaskSet: "quibusdam",
            Service: "nemo",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.UpdateServicePrimaryTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServicePrimaryTaskSetResponse != nil {
        // handle response
    }
}
```

## UpdateTaskProtection

<p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTaskProtection(ctx, operations.UpdateTaskProtectionRequest{
        UpdateTaskProtectionRequest: shared.UpdateTaskProtectionRequest{
            Cluster: "sapiente",
            ExpiresInMinutes: sdk.Int64(152364),
            ProtectionEnabled: false,
            Tasks: []string{
                "repellat",
                "repudiandae",
                "architecto",
                "adipisci",
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.UpdateTaskProtectionXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateTaskProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTaskProtectionResponse != nil {
        // handle response
    }
}
```

## UpdateTaskSet

Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTaskSet(ctx, operations.UpdateTaskSetRequest{
        UpdateTaskSetRequest: shared.UpdateTaskSetRequest{
            Cluster: "soluta",
            Scale: shared.Scale{
                Unit: shared.ScaleUnitEnumPercent.ToPointer(),
                Value: sdk.Float64(6775.09),
            },
            Service: "velit",
            TaskSet: "earum",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.UpdateTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateTaskSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTaskSetResponse != nil {
        // handle response
    }
}
```
