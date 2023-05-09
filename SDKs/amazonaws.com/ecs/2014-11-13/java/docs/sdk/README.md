# SDK

## Overview

<fullname>Amazon Elastic Container Service</fullname> <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes it easy to run, stop, and manage Docker containers. You can host your cluster on a serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) or External (on-premises) instances that you manage.</p> <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API calls. This makes it easy to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. With Amazon ECS, you don't need to operate your own cluster management and configuration management systems. You also don't need to worry about scaling your management infrastructure.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecs/>
### Available Operations

* [createCapacityProvider](#createcapacityprovider) - <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>
* [createCluster](#createcluster) - <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
* [createService](#createservice) - <p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [createTaskSet](#createtaskset) - Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [deleteAccountSetting](#deleteaccountsetting) - Disables an account setting for a specified user, role, or the root user for an account.
* [deleteAttributes](#deleteattributes) - Deletes one or more custom attributes from an Amazon ECS resource.
* [deleteCapacityProvider](#deletecapacityprovider) - <p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
* [deleteCluster](#deletecluster) - <p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
* [deleteService](#deleteservice) - <p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>
* [deleteTaskDefinitions](#deletetaskdefinitions) - <p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p>
* [deleteTaskSet](#deletetaskset) - Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [deregisterContainerInstance](#deregistercontainerinstance) - <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>
* [deregisterTaskDefinition](#deregistertaskdefinition) - <p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>
* [describeCapacityProviders](#describecapacityproviders) - Describes one or more of your capacity providers.
* [describeClusters](#describeclusters) - Describes one or more of your clusters.
* [describeContainerInstances](#describecontainerinstances) - Describes one or more container instances. Returns metadata about each container instance requested.
* [describeServices](#describeservices) - Describes the specified services running in your cluster.
* [describeTaskDefinition](#describetaskdefinition) - <p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>
* [describeTaskSets](#describetasksets) - Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [describeTasks](#describetasks) - <p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>
* [discoverPollEndpoint](#discoverpollendpoint) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
* [executeCommand](#executecommand) - <p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
* [getTaskProtection](#gettaskprotection) - Retrieves the protection status of tasks in an Amazon ECS service.
* [listAccountSettings](#listaccountsettings) - Lists the account settings for a specified principal.
* [listAttributes](#listattributes) - Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 
* [listClusters](#listclusters) - Returns a list of existing clusters.
* [listContainerInstances](#listcontainerinstances) - Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [listServices](#listservices) - Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.
* [listServicesByNamespace](#listservicesbynamespace) - This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [listTagsForResource](#listtagsforresource) - List the tags for an Amazon ECS resource.
* [listTaskDefinitionFamilies](#listtaskdefinitionfamilies) - <p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>
* [listTaskDefinitions](#listtaskdefinitions) - Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.
* [listTasks](#listtasks) - <p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour.</p>
* [putAccountSetting](#putaccountsetting) - <p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>
* [putAccountSettingDefault](#putaccountsettingdefault) - Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
* [putAttributes](#putattributes) - Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [putClusterCapacityProviders](#putclustercapacityproviders) - <p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>
* [registerContainerInstance](#registercontainerinstance) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>
* [registerTaskDefinition](#registertaskdefinition) - <p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [runTask](#runtask) - <p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>
* [startTask](#starttask) - <p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [stopTask](#stoptask) - <p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
* [submitAttachmentStateChanges](#submitattachmentstatechanges) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>
* [submitContainerStateChange](#submitcontainerstatechange) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>
* [submitTaskStateChange](#submittaskstatechange) - <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.
* [untagResource](#untagresource) - Deletes specified tags from a resource.
* [updateCapacityProvider](#updatecapacityprovider) - Modifies the parameters for a capacity provider.
* [updateCluster](#updatecluster) - Updates the cluster.
* [updateClusterSettings](#updateclustersettings) - Modifies the settings to use for a cluster.
* [updateContainerAgent](#updatecontaineragent) - <p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
* [updateContainerInstancesState](#updatecontainerinstancesstate) - <p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>
* [updateService](#updateservice) - <p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties. If you specified a custom role when you created the service, Amazon ECS automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p> <code>loadBalancers,</code> </p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> </note>
* [updateServicePrimaryTaskSet](#updateserviceprimarytaskset) - Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
* [updateTaskProtection](#updatetaskprotection) - <p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>
* [updateTaskSet](#updatetaskset) - Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

## createCapacityProvider

<p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCapacityProviderRequest;
import org.openapis.openapi.models.operations.CreateCapacityProviderResponse;
import org.openapis.openapi.models.operations.CreateCapacityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoScalingGroupProvider;
import org.openapis.openapi.models.shared.CreateCapacityProviderRequest;
import org.openapis.openapi.models.shared.ManagedScaling;
import org.openapis.openapi.models.shared.ManagedScalingStatusEnum;
import org.openapis.openapi.models.shared.ManagedTerminationProtectionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCapacityProviderRequest req = new CreateCapacityProviderRequest(                new CreateCapacityProviderRequest(                new AutoScalingGroupProvider("excepturi") {{
                                                managedScaling = new ManagedScaling() {{
                                                    instanceWarmupPeriod = 392785L;
                                                    maximumScalingStepSize = 925597L;
                                                    minimumScalingStepSize = 836079L;
                                                    status = ManagedScalingStatusEnum.ENABLED;
                                                    targetCapacity = 337396L;
                                                }};;
                                                managedTerminationProtection = ManagedTerminationProtectionEnum.ENABLED;
                                            }};, "deserunt") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsam";
                                        value = "repellendus";
                                    }}),
                                }};
                            }};, CreateCapacityProviderXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CAPACITY_PROVIDER) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateCapacityProviderResponse res = sdk.sdk.createCapacityProvider(req);

            if (res.createCapacityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCluster

<p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterServiceConnectDefaultsRequest;
import org.openapis.openapi.models.shared.ClusterSetting;
import org.openapis.openapi.models.shared.ClusterSettingNameEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.ExecuteCommandConfiguration;
import org.openapis.openapi.models.shared.ExecuteCommandLogConfiguration;
import org.openapis.openapi.models.shared.ExecuteCommandLoggingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest() {{
                                capacityProviders = new String[]{{
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                    add("dolorum"),
                                }};
                                clusterName = "dicta";
                                configuration = new ClusterConfiguration() {{
                                    executeCommandConfiguration = new ExecuteCommandConfiguration() {{
                                        kmsKeyId = "nam";
                                        logConfiguration = new ExecuteCommandLogConfiguration() {{
                                            cloudWatchEncryptionEnabled = false;
                                            cloudWatchLogGroupName = "officia";
                                            s3BucketName = "occaecati";
                                            s3EncryptionEnabled = false;
                                            s3KeyPrefix = "fugit";
                                        }};;
                                        logging = ExecuteCommandLoggingEnum.DEFAULT_;
                                    }};;
                                }};;
                                defaultCapacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                    add(new CapacityProviderStrategyItem("commodi") {{
                                        base = 758616L;
                                        capacityProvider = "totam";
                                        weight = 105907L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("impedit") {{
                                        base = 473600L;
                                        capacityProvider = "modi";
                                        weight = 186332L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("excepturi") {{
                                        base = 736918L;
                                        capacityProvider = "esse";
                                        weight = 216550L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("natus") {{
                                        base = 135218L;
                                        capacityProvider = "perferendis";
                                        weight = 324141L;
                                    }}),
                                }};
                                serviceConnectDefaults = new ClusterServiceConnectDefaultsRequest("sed");;
                                settings = new org.openapis.openapi.models.shared.ClusterSetting[]{{
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "dolor";
                                    }}),
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "natus";
                                    }}),
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "laboriosam";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "saepe";
                                        value = "fuga";
                                    }}),
                                    add(new Tag() {{
                                        key = "in";
                                        value = "corporis";
                                    }}),
                                    add(new Tag() {{
                                        key = "iste";
                                        value = "iure";
                                    }}),
                                    add(new Tag() {{
                                        key = "saepe";
                                        value = "quidem";
                                    }}),
                                }};
                            }};, CreateClusterXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CLUSTER) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

<p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.CreateServiceRequest;
import org.openapis.openapi.models.shared.DeploymentAlarms;
import org.openapis.openapi.models.shared.DeploymentCircuitBreaker;
import org.openapis.openapi.models.shared.DeploymentConfiguration;
import org.openapis.openapi.models.shared.DeploymentController;
import org.openapis.openapi.models.shared.DeploymentControllerTypeEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancer;
import org.openapis.openapi.models.shared.LogConfiguration;
import org.openapis.openapi.models.shared.LogDriverEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.SchedulingStrategyEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceConnectClientAlias;
import org.openapis.openapi.models.shared.ServiceConnectConfiguration;
import org.openapis.openapi.models.shared.ServiceConnectService;
import org.openapis.openapi.models.shared.ServiceRegistry;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceRequest req = new CreateServiceRequest(                new CreateServiceRequest("corporis") {{
                                capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                    add(new CapacityProviderStrategyItem("nemo") {{
                                        base = 750686L;
                                        capacityProvider = "enim";
                                        weight = 607831L;
                                    }}),
                                }};
                                clientToken = "minima";
                                cluster = "excepturi";
                                deploymentConfiguration = new DeploymentConfiguration() {{
                                    alarms = new DeploymentAlarms(                new String[]{{
                                                        add("iure"),
                                                    }}, false, false);;
                                    deploymentCircuitBreaker = new DeploymentCircuitBreaker(false, false);;
                                    maximumPercent = 634274L;
                                    minimumHealthyPercent = 988374L;
                                }};;
                                deploymentController = new DeploymentController(DeploymentControllerTypeEnum.EXTERNAL);;
                                desiredCount = 102044L;
                                enableECSManagedTags = false;
                                enableExecuteCommand = false;
                                healthCheckGracePeriodSeconds = 652790L;
                                launchType = LaunchTypeEnum.EC2;
                                loadBalancers = new org.openapis.openapi.models.shared.LoadBalancer[]{{
                                    add(new LoadBalancer() {{
                                        containerName = "consequuntur";
                                        containerPort = 995300L;
                                        loadBalancerName = "mollitia";
                                        targetGroupArn = "occaecati";
                                    }}),
                                    add(new LoadBalancer() {{
                                        containerName = "numquam";
                                        containerPort = 414369L;
                                        loadBalancerName = "quam";
                                        targetGroupArn = "molestiae";
                                    }}),
                                    add(new LoadBalancer() {{
                                        containerName = "velit";
                                        containerPort = 623510L;
                                        loadBalancerName = "quia";
                                        targetGroupArn = "quis";
                                    }}),
                                }};
                                networkConfiguration = new NetworkConfiguration() {{
                                    awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                        add("laborum"),
                                                    }}) {{
                                        assignPublicIp = AssignPublicIpEnum.DISABLED;
                                        securityGroups = new String[]{{
                                            add("odit"),
                                            add("quo"),
                                        }};
                                    }};;
                                }};;
                                placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                    add(new PlacementConstraint() {{
                                        expression = "tenetur";
                                        type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                    }}),
                                }};
                                placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                    add(new PlacementStrategy() {{
                                        field = "possimus";
                                        type = PlacementStrategyTypeEnum.RANDOM;
                                    }}),
                                    add(new PlacementStrategy() {{
                                        field = "quasi";
                                        type = PlacementStrategyTypeEnum.SPREAD;
                                    }}),
                                    add(new PlacementStrategy() {{
                                        field = "temporibus";
                                        type = PlacementStrategyTypeEnum.BINPACK;
                                    }}),
                                }};
                                platformVersion = "quasi";
                                propagateTags = PropagateTagsEnum.NONE;
                                role = "voluptatibus";
                                schedulingStrategy = SchedulingStrategyEnum.DAEMON;
                                serviceConnectConfiguration = new ServiceConnectConfiguration(false) {{
                                    logConfiguration = new LogConfiguration(LogDriverEnum.GELF) {{
                                        options = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "ipsa");
                                            put("omnis", "voluptate");
                                            put("cum", "perferendis");
                                        }};
                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                            add(new Secret("dicta", "harum") {{
                                                name = "Mrs. April Wuckert";
                                                valueFrom = "iusto";
                                            }}),
                                        }};
                                    }};;
                                    namespace = "enim";
                                    services = new org.openapis.openapi.models.shared.ServiceConnectService[]{{
                                        add(new ServiceConnectService("rem") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(216822L) {{
                                                    dnsName = "repudiandae";
                                                    port = 64147L;
                                                }}),
                                                add(new ServiceConnectClientAlias(566602L) {{
                                                    dnsName = "quidem";
                                                    port = 565189L;
                                                }}),
                                            }};
                                            discoveryName = "pariatur";
                                            ingressPortOverride = 265389L;
                                            portName = "praesentium";
                                        }}),
                                        add(new ServiceConnectService("modi") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(575947L) {{
                                                    dnsName = "quasi";
                                                    port = 921158L;
                                                }}),
                                                add(new ServiceConnectClientAlias(277718L) {{
                                                    dnsName = "veritatis";
                                                    port = 929297L;
                                                }}),
                                                add(new ServiceConnectClientAlias(667411L) {{
                                                    dnsName = "enim";
                                                    port = 9356L;
                                                }}),
                                                add(new ServiceConnectClientAlias(647174L) {{
                                                    dnsName = "quibusdam";
                                                    port = 131797L;
                                                }}),
                                            }};
                                            discoveryName = "distinctio";
                                            ingressPortOverride = 841386L;
                                            portName = "labore";
                                        }}),
                                        add(new ServiceConnectService("ipsam") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(552822L) {{
                                                    dnsName = "aliquid";
                                                    port = 586513L;
                                                }}),
                                            }};
                                            discoveryName = "perferendis";
                                            ingressPortOverride = 164940L;
                                            portName = "assumenda";
                                        }}),
                                        add(new ServiceConnectService("labore") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(569618L) {{
                                                    dnsName = "fugit";
                                                    port = 677817L;
                                                }}),
                                            }};
                                            discoveryName = "tempora";
                                            ingressPortOverride = 703737L;
                                            portName = "tempore";
                                        }}),
                                    }};
                                }};;
                                serviceRegistries = new org.openapis.openapi.models.shared.ServiceRegistry[]{{
                                    add(new ServiceRegistry() {{
                                        containerName = "eum";
                                        containerPort = 248753L;
                                        port = 756107L;
                                        registryArn = "sint";
                                    }}),
                                    add(new ServiceRegistry() {{
                                        containerName = "aliquid";
                                        containerPort = 592042L;
                                        port = 896039L;
                                        registryArn = "sint";
                                    }}),
                                    add(new ServiceRegistry() {{
                                        containerName = "officia";
                                        containerPort = 223081L;
                                        port = 891555L;
                                        registryArn = "a";
                                    }}),
                                    add(new ServiceRegistry() {{
                                        containerName = "dolorum";
                                        containerPort = 447125L;
                                        port = 449198L;
                                        registryArn = "illum";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "rerum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag() {{
                                        key = "magnam";
                                        value = "cumque";
                                    }}),
                                    add(new Tag() {{
                                        key = "facere";
                                        value = "ea";
                                    }}),
                                    add(new Tag() {{
                                        key = "aliquid";
                                        value = "laborum";
                                    }}),
                                }};
                                taskDefinition = "accusamus";
                            }};, CreateServiceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_SERVICE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req);

            if (res.createServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTaskSet

Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskSetRequest;
import org.openapis.openapi.models.operations.CreateTaskSetResponse;
import org.openapis.openapi.models.operations.CreateTaskSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.CreateTaskSetRequest;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancer;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.Scale;
import org.openapis.openapi.models.shared.ScaleUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceRegistry;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTaskSetRequest req = new CreateTaskSetRequest(                new CreateTaskSetRequest("id", "blanditiis", "deleniti") {{
                                capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                    add(new CapacityProviderStrategyItem("vel") {{
                                        base = 230533L;
                                        capacityProvider = "deserunt";
                                        weight = 394869L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("perferendis") {{
                                        base = 618809L;
                                        capacityProvider = "omnis";
                                        weight = 474867L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("id") {{
                                        base = 470132L;
                                        capacityProvider = "magnam";
                                        weight = 716075L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("natus") {{
                                        base = 287991L;
                                        capacityProvider = "labore";
                                        weight = 383462L;
                                    }}),
                                }};
                                clientToken = "nobis";
                                externalId = "eum";
                                launchType = LaunchTypeEnum.EXTERNAL;
                                loadBalancers = new org.openapis.openapi.models.shared.LoadBalancer[]{{
                                    add(new LoadBalancer() {{
                                        containerName = "architecto";
                                        containerPort = 298282L;
                                        loadBalancerName = "et";
                                        targetGroupArn = "excepturi";
                                    }}),
                                }};
                                networkConfiguration = new NetworkConfiguration() {{
                                    awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                        add("provident"),
                                                        add("quos"),
                                                    }}) {{
                                        assignPublicIp = AssignPublicIpEnum.DISABLED;
                                        securityGroups = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }};;
                                }};;
                                platformVersion = "reiciendis";
                                scale = new Scale() {{
                                    unit = ScaleUnitEnum.PERCENT;
                                    value = 6521.03;
                                }};;
                                serviceRegistries = new org.openapis.openapi.models.shared.ServiceRegistry[]{{
                                    add(new ServiceRegistry() {{
                                        containerName = "eum";
                                        containerPort = 221262L;
                                        port = 896547L;
                                        registryArn = "odit";
                                    }}),
                                    add(new ServiceRegistry() {{
                                        containerName = "nemo";
                                        containerPort = 97260L;
                                        port = 435865L;
                                        registryArn = "doloribus";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "eius";
                                        value = "maxime";
                                    }}),
                                    add(new Tag() {{
                                        key = "deleniti";
                                        value = "facilis";
                                    }}),
                                    add(new Tag() {{
                                        key = "in";
                                        value = "architecto";
                                    }}),
                                    add(new Tag() {{
                                        key = "architecto";
                                        value = "repudiandae";
                                    }}),
                                }};
                            }};, CreateTaskSetXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_TASK_SET) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateTaskSetResponse res = sdk.sdk.createTaskSet(req);

            if (res.createTaskSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountSetting

Disables an account setting for a specified user, role, or the root user for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountSettingRequest;
import org.openapis.openapi.models.operations.DeleteAccountSettingResponse;
import org.openapis.openapi.models.operations.DeleteAccountSettingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAccountSettingRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccountSettingRequest req = new DeleteAccountSettingRequest(                new DeleteAccountSettingRequest(SettingNameEnum.SERVICE_LONG_ARN_FORMAT) {{
                                principalArn = "consequuntur";
                            }};, DeleteAccountSettingXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_ACCOUNT_SETTING) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeleteAccountSettingResponse res = sdk.sdk.deleteAccountSetting(req);

            if (res.deleteAccountSettingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAttributes

Deletes one or more custom attributes from an Amazon ECS resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttributesRequest;
import org.openapis.openapi.models.operations.DeleteAttributesResponse;
import org.openapis.openapi.models.operations.DeleteAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.DeleteAttributesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAttributesRequest req = new DeleteAttributesRequest(                new DeleteAttributesRequest(                new org.openapis.openapi.models.shared.Attribute[]{{
                                                add(new Attribute("voluptate") {{
                                                    name = "Mr. Harry Jaskolski";
                                                    targetId = "quidem";
                                                    targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                                    value = "ipsam";
                                                }}),
                                                add(new Attribute("fugiat") {{
                                                    name = "Candice Beatty";
                                                    targetId = "voluptatibus";
                                                    targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                                    value = "perferendis";
                                                }}),
                                            }}) {{
                                cluster = "amet";
                            }};, DeleteAttributesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_ATTRIBUTES) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteAttributesResponse res = sdk.sdk.deleteAttributes(req);

            if (res.deleteAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCapacityProvider

<p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCapacityProviderRequest;
import org.openapis.openapi.models.operations.DeleteCapacityProviderResponse;
import org.openapis.openapi.models.operations.DeleteCapacityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCapacityProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCapacityProviderRequest req = new DeleteCapacityProviderRequest(                new DeleteCapacityProviderRequest("totam");, DeleteCapacityProviderXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_CAPACITY_PROVIDER) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteCapacityProviderResponse res = sdk.sdk.deleteCapacityProvider(req);

            if (res.deleteCapacityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

<p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterRequest;
import org.openapis.openapi.models.operations.DeleteClusterResponse;
import org.openapis.openapi.models.operations.DeleteClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest(                new DeleteClusterRequest("quam");, DeleteClusterXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_CLUSTER) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            DeleteClusterResponse res = sdk.sdk.deleteCluster(req);

            if (res.deleteClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

<p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest(                new DeleteServiceRequest("voluptatem") {{
                                cluster = "porro";
                                force = false;
                            }};, DeleteServiceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_SERVICE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            DeleteServiceResponse res = sdk.sdk.deleteService(req);

            if (res.deleteServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTaskDefinitions

<p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskDefinitionsRequest;
import org.openapis.openapi.models.operations.DeleteTaskDefinitionsResponse;
import org.openapis.openapi.models.operations.DeleteTaskDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTaskDefinitionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTaskDefinitionsRequest req = new DeleteTaskDefinitionsRequest(                new DeleteTaskDefinitionsRequest(                new String[]{{
                                                add("modi"),
                                                add("iste"),
                                                add("dolorum"),
                                                add("deleniti"),
                                            }});, DeleteTaskDefinitionsXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_TASK_DEFINITIONS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteTaskDefinitionsResponse res = sdk.sdk.deleteTaskDefinitions(req);

            if (res.deleteTaskDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTaskSet

Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskSetRequest;
import org.openapis.openapi.models.operations.DeleteTaskSetResponse;
import org.openapis.openapi.models.operations.DeleteTaskSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTaskSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTaskSetRequest req = new DeleteTaskSetRequest(                new DeleteTaskSetRequest("dolorem", "dolorem", "dolor") {{
                                force = false;
                            }};, DeleteTaskSetXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_TASK_SET) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteTaskSetResponse res = sdk.sdk.deleteTaskSet(req);

            if (res.deleteTaskSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterContainerInstance

<p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterContainerInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterContainerInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterContainerInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterContainerInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterContainerInstanceRequest req = new DeregisterContainerInstanceRequest(                new DeregisterContainerInstanceRequest("amet") {{
                                cluster = "dolorum";
                                force = false;
                            }};, DeregisterContainerInstanceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DEREGISTER_CONTAINER_INSTANCE) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            DeregisterContainerInstanceResponse res = sdk.sdk.deregisterContainerInstance(req);

            if (res.deregisterContainerInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterTaskDefinition

<p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterTaskDefinitionRequest;
import org.openapis.openapi.models.operations.DeregisterTaskDefinitionResponse;
import org.openapis.openapi.models.operations.DeregisterTaskDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterTaskDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterTaskDefinitionRequest req = new DeregisterTaskDefinitionRequest(                new DeregisterTaskDefinitionRequest("quidem");, DeregisterTaskDefinitionXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DEREGISTER_TASK_DEFINITION) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "natus";
                xAmzDate = "eos";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugiat";
            }};            

            DeregisterTaskDefinitionResponse res = sdk.sdk.deregisterTaskDefinition(req);

            if (res.deregisterTaskDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCapacityProviders

Describes one or more of your capacity providers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCapacityProvidersRequest;
import org.openapis.openapi.models.operations.DescribeCapacityProvidersResponse;
import org.openapis.openapi.models.operations.DescribeCapacityProvidersXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityProviderFieldEnum;
import org.openapis.openapi.models.shared.DescribeCapacityProvidersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCapacityProvidersRequest req = new DescribeCapacityProvidersRequest(                new DescribeCapacityProvidersRequest() {{
                                capacityProviders = new String[]{{
                                    add("dolorum"),
                                    add("iusto"),
                                    add("voluptate"),
                                }};
                                include = new org.openapis.openapi.models.shared.CapacityProviderFieldEnum[]{{
                                    add(CapacityProviderFieldEnum.TAGS),
                                    add(CapacityProviderFieldEnum.TAGS),
                                    add(CapacityProviderFieldEnum.TAGS),
                                }};
                                maxResults = 536579L;
                                nextToken = "omnis";
                            }};, DescribeCapacityProvidersXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CAPACITY_PROVIDERS) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
            }};            

            DescribeCapacityProvidersResponse res = sdk.sdk.describeCapacityProviders(req);

            if (res.describeCapacityProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClusters

Describes one or more of your clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClustersRequest;
import org.openapis.openapi.models.operations.DescribeClustersResponse;
import org.openapis.openapi.models.operations.DescribeClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterFieldEnum;
import org.openapis.openapi.models.shared.DescribeClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClustersRequest req = new DescribeClustersRequest(                new DescribeClustersRequest() {{
                                clusters = new String[]{{
                                    add("aspernatur"),
                                    add("perferendis"),
                                }};
                                include = new org.openapis.openapi.models.shared.ClusterFieldEnum[]{{
                                    add(ClusterFieldEnum.STATISTICS),
                                }};
                            }};, DescribeClustersXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CLUSTERS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeClustersResponse res = sdk.sdk.describeClusters(req);

            if (res.describeClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeContainerInstances

Describes one or more container instances. Returns metadata about each container instance requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeContainerInstancesRequest;
import org.openapis.openapi.models.operations.DescribeContainerInstancesResponse;
import org.openapis.openapi.models.operations.DescribeContainerInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerInstanceFieldEnum;
import org.openapis.openapi.models.shared.DescribeContainerInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeContainerInstancesRequest req = new DescribeContainerInstancesRequest(                new DescribeContainerInstancesRequest(                new String[]{{
                                                add("similique"),
                                                add("alias"),
                                                add("at"),
                                            }}) {{
                                cluster = "quaerat";
                                include = new org.openapis.openapi.models.shared.ContainerInstanceFieldEnum[]{{
                                    add(ContainerInstanceFieldEnum.TAGS),
                                    add(ContainerInstanceFieldEnum.CONTAINER_INSTANCE_HEALTH),
                                }};
                            }};, DescribeContainerInstancesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CONTAINER_INSTANCES) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            DescribeContainerInstancesResponse res = sdk.sdk.describeContainerInstances(req);

            if (res.describeContainerInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServices

Describes the specified services running in your cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServicesRequest;
import org.openapis.openapi.models.operations.DescribeServicesResponse;
import org.openapis.openapi.models.operations.DescribeServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServicesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceFieldEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServicesRequest req = new DescribeServicesRequest(                new DescribeServicesRequest(                new String[]{{
                                                add("tenetur"),
                                                add("amet"),
                                                add("tempore"),
                                                add("accusamus"),
                                            }}) {{
                                cluster = "numquam";
                                include = new org.openapis.openapi.models.shared.ServiceFieldEnum[]{{
                                    add(ServiceFieldEnum.TAGS),
                                    add(ServiceFieldEnum.TAGS),
                                }};
                            }};, DescribeServicesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_SERVICES) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            DescribeServicesResponse res = sdk.sdk.describeServices(req);

            if (res.describeServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTaskDefinition

<p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTaskDefinitionRequest;
import org.openapis.openapi.models.operations.DescribeTaskDefinitionResponse;
import org.openapis.openapi.models.operations.DescribeTaskDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTaskDefinitionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskDefinitionFieldEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTaskDefinitionRequest req = new DescribeTaskDefinitionRequest(                new DescribeTaskDefinitionRequest("vel") {{
                                include = new org.openapis.openapi.models.shared.TaskDefinitionFieldEnum[]{{
                                    add(TaskDefinitionFieldEnum.TAGS),
                                    add(TaskDefinitionFieldEnum.TAGS),
                                    add(TaskDefinitionFieldEnum.TAGS),
                                }};
                            }};, DescribeTaskDefinitionXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASK_DEFINITION) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "quam";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DescribeTaskDefinitionResponse res = sdk.sdk.describeTaskDefinition(req);

            if (res.describeTaskDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTaskSets

Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTaskSetsRequest;
import org.openapis.openapi.models.operations.DescribeTaskSetsResponse;
import org.openapis.openapi.models.operations.DescribeTaskSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTaskSetsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskSetFieldEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTaskSetsRequest req = new DescribeTaskSetsRequest(                new DescribeTaskSetsRequest("pariatur", "soluta") {{
                                include = new org.openapis.openapi.models.shared.TaskSetFieldEnum[]{{
                                    add(TaskSetFieldEnum.TAGS),
                                }};
                                taskSets = new String[]{{
                                    add("totam"),
                                    add("incidunt"),
                                    add("aspernatur"),
                                }};
                            }};, DescribeTaskSetsXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASK_SETS) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            DescribeTaskSetsResponse res = sdk.sdk.describeTaskSets(req);

            if (res.describeTaskSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTasks

<p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTasksRequest;
import org.openapis.openapi.models.operations.DescribeTasksResponse;
import org.openapis.openapi.models.operations.DescribeTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTasksRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskFieldEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTasksRequest req = new DescribeTasksRequest(                new DescribeTasksRequest(                new String[]{{
                                                add("fugit"),
                                            }}) {{
                                cluster = "magni";
                                include = new org.openapis.openapi.models.shared.TaskFieldEnum[]{{
                                    add(TaskFieldEnum.TAGS),
                                    add(TaskFieldEnum.TAGS),
                                }};
                            }};, DescribeTasksXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASKS) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            DescribeTasksResponse res = sdk.sdk.describeTasks(req);

            if (res.describeTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverPollEndpoint

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoverPollEndpointRequest;
import org.openapis.openapi.models.operations.DiscoverPollEndpointResponse;
import org.openapis.openapi.models.operations.DiscoverPollEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DiscoverPollEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DiscoverPollEndpointRequest req = new DiscoverPollEndpointRequest(                new DiscoverPollEndpointRequest() {{
                                cluster = "et";
                                containerInstance = "saepe";
                            }};, DiscoverPollEndpointXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_DISCOVER_POLL_ENDPOINT) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            DiscoverPollEndpointResponse res = sdk.sdk.discoverPollEndpoint(req);

            if (res.discoverPollEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeCommand

<p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteCommandRequest;
import org.openapis.openapi.models.operations.ExecuteCommandResponse;
import org.openapis.openapi.models.operations.ExecuteCommandXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecuteCommandRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteCommandRequest req = new ExecuteCommandRequest(                new ExecuteCommandRequest("dolorem", false, "dolore") {{
                                cluster = "labore";
                                container = "adipisci";
                            }};, ExecuteCommandXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_EXECUTE_COMMAND) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            ExecuteCommandResponse res = sdk.sdk.executeCommand(req);

            if (res.executeCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskProtection

Retrieves the protection status of tasks in an Amazon ECS service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskProtectionRequest;
import org.openapis.openapi.models.operations.GetTaskProtectionResponse;
import org.openapis.openapi.models.operations.GetTaskProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTaskProtectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaskProtectionRequest req = new GetTaskProtectionRequest(                new GetTaskProtectionRequest("repellendus") {{
                                tasks = new String[]{{
                                    add("doloribus"),
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                }};
                            }};, GetTaskProtectionXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_GET_TASK_PROTECTION) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            GetTaskProtectionResponse res = sdk.sdk.getTaskProtection(req);

            if (res.getTaskProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountSettings

Lists the account settings for a specified principal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountSettingsRequest;
import org.openapis.openapi.models.operations.ListAccountSettingsResponse;
import org.openapis.openapi.models.operations.ListAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccountSettingsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountSettingsRequest req = new ListAccountSettingsRequest(                new ListAccountSettingsRequest() {{
                                effectiveSettings = false;
                                maxResults = 606476L;
                                name = SettingNameEnum.CONTAINER_INSTANCE_LONG_ARN_FORMAT;
                                nextToken = "ipsum";
                                principalArn = "delectus";
                                value = "voluptate";
                            }};, ListAccountSettingsXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
                maxResults = "odio";
                nextToken = "similique";
            }};            

            ListAccountSettingsResponse res = sdk.sdk.listAccountSettings(req);

            if (res.listAccountSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttributes

Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttributesRequest;
import org.openapis.openapi.models.operations.ListAttributesResponse;
import org.openapis.openapi.models.operations.ListAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAttributesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttributesRequest req = new ListAttributesRequest(                new ListAttributesRequest(TargetTypeEnum.CONTAINER_INSTANCE) {{
                                attributeName = "vero";
                                attributeValue = "ducimus";
                                cluster = "dolore";
                                maxResults = 844550L;
                                nextToken = "illum";
                            }};, ListAttributesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_ATTRIBUTES) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
                maxResults = "fugit";
                nextToken = "porro";
            }};            

            ListAttributesResponse res = sdk.sdk.listAttributes(req);

            if (res.listAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

Returns a list of existing clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.operations.ListClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClustersRequest req = new ListClustersRequest(                new ListClustersRequest() {{
                                maxResults = 985033L;
                                nextToken = "iusto";
                            }};, ListClustersXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_CLUSTERS) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "alias";
                xAmzDate = "officia";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "ea";
                maxResults = "aspernatur";
                nextToken = "vel";
            }};            

            ListClustersResponse res = sdk.sdk.listClusters(req);

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContainerInstances

Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContainerInstancesRequest;
import org.openapis.openapi.models.operations.ListContainerInstancesResponse;
import org.openapis.openapi.models.operations.ListContainerInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerInstanceStatusEnum;
import org.openapis.openapi.models.shared.ListContainerInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContainerInstancesRequest req = new ListContainerInstancesRequest(                new ListContainerInstancesRequest() {{
                                cluster = "magnam";
                                filter = "ratione";
                                maxResults = 401132L;
                                nextToken = "laudantium";
                                status = ContainerInstanceStatusEnum.ACTIVE;
                            }};, ListContainerInstancesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_CONTAINER_INSTANCES) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = "nostrum";
                nextToken = "sapiente";
            }};            

            ListContainerInstancesResponse res = sdk.sdk.listContainerInstances(req);

            if (res.listContainerInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.ListServicesRequest;
import org.openapis.openapi.models.shared.SchedulingStrategyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest(                new ListServicesRequest() {{
                                cluster = "saepe";
                                launchType = LaunchTypeEnum.FARGATE;
                                maxResults = 774048L;
                                nextToken = "corporis";
                                schedulingStrategy = SchedulingStrategyEnum.REPLICA;
                            }};, ListServicesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_SERVICES) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
                maxResults = "aspernatur";
                nextToken = "minima";
            }};            

            ListServicesResponse res = sdk.sdk.listServices(req);

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServicesByNamespace

This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesByNamespaceRequest;
import org.openapis.openapi.models.operations.ListServicesByNamespaceResponse;
import org.openapis.openapi.models.operations.ListServicesByNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicesByNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesByNamespaceRequest req = new ListServicesByNamespaceRequest(                new ListServicesByNamespaceRequest("a") {{
                                maxResults = 725595L;
                                nextToken = "aut";
                            }};, ListServicesByNamespaceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_SERVICES_BY_NAMESPACE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
                maxResults = "non";
                nextToken = "et";
            }};            

            ListServicesByNamespaceResponse res = sdk.sdk.listServicesByNamespace(req);

            if (res.listServicesByNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for an Amazon ECS resource.

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("laborum");, ListTagsForResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "eum";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "assumenda";
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

## listTaskDefinitionFamilies

<p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskDefinitionFamiliesRequest;
import org.openapis.openapi.models.operations.ListTaskDefinitionFamiliesResponse;
import org.openapis.openapi.models.operations.ListTaskDefinitionFamiliesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTaskDefinitionFamiliesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskDefinitionFamilyStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTaskDefinitionFamiliesRequest req = new ListTaskDefinitionFamiliesRequest(                new ListTaskDefinitionFamiliesRequest() {{
                                familyPrefix = "voluptas";
                                maxResults = 727044L;
                                nextToken = "quasi";
                                status = TaskDefinitionFamilyStatusEnum.ACTIVE;
                            }};, ListTaskDefinitionFamiliesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITION_FAMILIES) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
                maxResults = "eius";
                nextToken = "esse";
            }};            

            ListTaskDefinitionFamiliesResponse res = sdk.sdk.listTaskDefinitionFamilies(req);

            if (res.listTaskDefinitionFamiliesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskDefinitions

Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskDefinitionsRequest;
import org.openapis.openapi.models.operations.ListTaskDefinitionsResponse;
import org.openapis.openapi.models.operations.ListTaskDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTaskDefinitionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TaskDefinitionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTaskDefinitionsRequest req = new ListTaskDefinitionsRequest(                new ListTaskDefinitionsRequest() {{
                                familyPrefix = "rem";
                                maxResults = 683282L;
                                nextToken = "reprehenderit";
                                sort = SortOrderEnum.DESC;
                                status = TaskDefinitionStatusEnum.DELETE_IN_PROGRESS;
                            }};, ListTaskDefinitionsXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITIONS) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "eum";
                xAmzCredential = "suscipit";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "eos";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "quisquam";
                maxResults = "veritatis";
                nextToken = "ipsa";
            }};            

            ListTaskDefinitionsResponse res = sdk.sdk.listTaskDefinitions(req);

            if (res.listTaskDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTasks

<p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTasksRequest;
import org.openapis.openapi.models.operations.ListTasksResponse;
import org.openapis.openapi.models.operations.ListTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DesiredStatusEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.ListTasksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTasksRequest req = new ListTasksRequest(                new ListTasksRequest() {{
                                cluster = "quidem";
                                containerInstance = "neque";
                                desiredStatus = DesiredStatusEnum.STOPPED;
                                family = "illum";
                                launchType = LaunchTypeEnum.EXTERNAL;
                                maxResults = 681359L;
                                nextToken = "eius";
                                serviceName = "eos";
                                startedBy = "voluptas";
                            }};, ListTasksXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASKS) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
                maxResults = "sequi";
                nextToken = "quo";
            }};            

            ListTasksResponse res = sdk.sdk.listTasks(req);

            if (res.listTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountSetting

<p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountSettingRequest;
import org.openapis.openapi.models.operations.PutAccountSettingResponse;
import org.openapis.openapi.models.operations.PutAccountSettingXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutAccountSettingRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountSettingRequest req = new PutAccountSettingRequest(                new PutAccountSettingRequest(SettingNameEnum.TAG_RESOURCE_AUTHORIZATION, "aperiam") {{
                                principalArn = "distinctio";
                            }};, PutAccountSettingXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ACCOUNT_SETTING) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            PutAccountSettingResponse res = sdk.sdk.putAccountSetting(req);

            if (res.putAccountSettingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountSettingDefault

Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountSettingDefaultRequest;
import org.openapis.openapi.models.operations.PutAccountSettingDefaultResponse;
import org.openapis.openapi.models.operations.PutAccountSettingDefaultXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutAccountSettingDefaultRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountSettingDefaultRequest req = new PutAccountSettingDefaultRequest(                new PutAccountSettingDefaultRequest(SettingNameEnum.CONTAINER_INSIGHTS, "commodi");, PutAccountSettingDefaultXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ACCOUNT_SETTING_DEFAULT) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
            }};            

            PutAccountSettingDefaultResponse res = sdk.sdk.putAccountSettingDefault(req);

            if (res.putAccountSettingDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAttributes

Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAttributesRequest;
import org.openapis.openapi.models.operations.PutAttributesResponse;
import org.openapis.openapi.models.operations.PutAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.PutAttributesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAttributesRequest req = new PutAttributesRequest(                new PutAttributesRequest(                new org.openapis.openapi.models.shared.Attribute[]{{
                                                add(new Attribute("explicabo") {{
                                                    name = "Cassandra Considine";
                                                    targetId = "incidunt";
                                                    targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                                    value = "atque";
                                                }}),
                                                add(new Attribute("saepe") {{
                                                    name = "Sue Corkery";
                                                    targetId = "ratione";
                                                    targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                                    value = "explicabo";
                                                }}),
                                                add(new Attribute("esse") {{
                                                    name = "Ivan Bosco";
                                                    targetId = "accusamus";
                                                    targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                                    value = "veritatis";
                                                }}),
                                            }}) {{
                                cluster = "quod";
                            }};, PutAttributesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ATTRIBUTES) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
            }};            

            PutAttributesResponse res = sdk.sdk.putAttributes(req);

            if (res.putAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putClusterCapacityProviders

<p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutClusterCapacityProvidersRequest;
import org.openapis.openapi.models.operations.PutClusterCapacityProvidersResponse;
import org.openapis.openapi.models.operations.PutClusterCapacityProvidersXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.PutClusterCapacityProvidersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutClusterCapacityProvidersRequest req = new PutClusterCapacityProvidersRequest(                new PutClusterCapacityProvidersRequest(                new String[]{{
                                                add("occaecati"),
                                                add("minima"),
                                                add("distinctio"),
                                            }}, "eligendi",                 new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                                add(new CapacityProviderStrategyItem("cumque") {{
                                                    base = 636061L;
                                                    capacityProvider = "tempore";
                                                    weight = 240020L;
                                                }}),
                                            }});, PutClusterCapacityProvidersXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_CLUSTER_CAPACITY_PROVIDERS) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "minus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "esse";
            }};            

            PutClusterCapacityProvidersResponse res = sdk.sdk.putClusterCapacityProviders(req);

            if (res.putClusterCapacityProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerContainerInstance

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterContainerInstanceRequest;
import org.openapis.openapi.models.operations.RegisterContainerInstanceResponse;
import org.openapis.openapi.models.operations.RegisterContainerInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.PlatformDevice;
import org.openapis.openapi.models.shared.PlatformDeviceTypeEnum;
import org.openapis.openapi.models.shared.RegisterContainerInstanceRequest;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetTypeEnum;
import org.openapis.openapi.models.shared.VersionInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterContainerInstanceRequest req = new RegisterContainerInstanceRequest(                new RegisterContainerInstanceRequest() {{
                                attributes = new org.openapis.openapi.models.shared.Attribute[]{{
                                    add(new Attribute("pariatur") {{
                                        name = "Ismael Lynch DVM";
                                        targetId = "error";
                                        targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                        value = "sint";
                                    }}),
                                    add(new Attribute("quasi") {{
                                        name = "Howard Upton";
                                        targetId = "veritatis";
                                        targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                        value = "consequuntur";
                                    }}),
                                    add(new Attribute("eius") {{
                                        name = "Shannon Jacobi DVM";
                                        targetId = "vel";
                                        targetType = TargetTypeEnum.CONTAINER_INSTANCE;
                                        value = "in";
                                    }}),
                                }};
                                cluster = "libero";
                                containerInstanceArn = "illum";
                                instanceIdentityDocument = "soluta";
                                instanceIdentityDocumentSignature = "accusantium";
                                platformDevices = new org.openapis.openapi.models.shared.PlatformDevice[]{{
                                    add(new PlatformDevice("laudantium", PlatformDeviceTypeEnum.GPU) {{
                                        id = "f1575608-2d68-4ea1-9f1d-17051339d080";
                                        type = PlatformDeviceTypeEnum.GPU;
                                    }}),
                                    add(new PlatformDevice("nemo", PlatformDeviceTypeEnum.GPU) {{
                                        id = "6a184039-4c26-4071-b93f-5f0642dac7af";
                                        type = PlatformDeviceTypeEnum.GPU;
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quaerat";
                                        value = "porro";
                                    }}),
                                }};
                                totalResources = new org.openapis.openapi.models.shared.Resource[]{{
                                    add(new Resource() {{
                                        doubleValue = 2883.98;
                                        integerValue = 70447L;
                                        longValue = 241418L;
                                        name = "Orlando Homenick";
                                        stringSetValue = new String[]{{
                                            add("recusandae"),
                                            add("totam"),
                                            add("fugiat"),
                                        }};
                                        type = "vel";
                                    }}),
                                    add(new Resource() {{
                                        doubleValue = 4976.78;
                                        integerValue = 554688L;
                                        longValue = 427834L;
                                        name = "Elena Quigley";
                                        stringSetValue = new String[]{{
                                            add("corporis"),
                                            add("reiciendis"),
                                        }};
                                        type = "assumenda";
                                    }}),
                                    add(new Resource() {{
                                        doubleValue = 3631.61;
                                        integerValue = 924967L;
                                        longValue = 397533L;
                                        name = "Karla Feest";
                                        stringSetValue = new String[]{{
                                            add("facere"),
                                            add("numquam"),
                                            add("doloribus"),
                                            add("suscipit"),
                                        }};
                                        type = "reiciendis";
                                    }}),
                                    add(new Resource() {{
                                        doubleValue = 6971.42;
                                        integerValue = 904949L;
                                        longValue = 897071L;
                                        name = "Katherine Zemlak";
                                        stringSetValue = new String[]{{
                                            add("beatae"),
                                        }};
                                        type = "dignissimos";
                                    }}),
                                }};
                                versionInfo = new VersionInfo() {{
                                    agentHash = "a";
                                    agentVersion = "debitis";
                                    dockerVersion = "consectetur";
                                }};;
                            }};, RegisterContainerInstanceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_REGISTER_CONTAINER_INSTANCE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "harum";
                xAmzCredential = "laboriosam";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "vitae";
            }};            

            RegisterContainerInstanceResponse res = sdk.sdk.registerContainerInstance(req);

            if (res.registerContainerInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerTaskDefinition

<p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterTaskDefinitionRequest;
import org.openapis.openapi.models.operations.RegisterTaskDefinitionResponse;
import org.openapis.openapi.models.operations.RegisterTaskDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationProtocolEnum;
import org.openapis.openapi.models.shared.CPUArchitectureEnum;
import org.openapis.openapi.models.shared.CompatibilityEnum;
import org.openapis.openapi.models.shared.ContainerConditionEnum;
import org.openapis.openapi.models.shared.ContainerDefinition;
import org.openapis.openapi.models.shared.ContainerDependency;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum;
import org.openapis.openapi.models.shared.DockerVolumeConfiguration;
import org.openapis.openapi.models.shared.EFSAuthorizationConfig;
import org.openapis.openapi.models.shared.EFSAuthorizationConfigIAMEnum;
import org.openapis.openapi.models.shared.EFSTransitEncryptionEnum;
import org.openapis.openapi.models.shared.EFSVolumeConfiguration;
import org.openapis.openapi.models.shared.EnvironmentFile;
import org.openapis.openapi.models.shared.EnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EphemeralStorage;
import org.openapis.openapi.models.shared.FSxWindowsFileServerAuthorizationConfig;
import org.openapis.openapi.models.shared.FSxWindowsFileServerVolumeConfiguration;
import org.openapis.openapi.models.shared.FirelensConfiguration;
import org.openapis.openapi.models.shared.FirelensConfigurationTypeEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HostEntry;
import org.openapis.openapi.models.shared.HostVolumeProperties;
import org.openapis.openapi.models.shared.InferenceAccelerator;
import org.openapis.openapi.models.shared.IpcModeEnum;
import org.openapis.openapi.models.shared.KernelCapabilities;
import org.openapis.openapi.models.shared.KeyValuePair;
import org.openapis.openapi.models.shared.LinuxParameters;
import org.openapis.openapi.models.shared.LogConfiguration;
import org.openapis.openapi.models.shared.LogDriverEnum;
import org.openapis.openapi.models.shared.MountPoint;
import org.openapis.openapi.models.shared.NetworkModeEnum;
import org.openapis.openapi.models.shared.OSFamilyEnum;
import org.openapis.openapi.models.shared.PidModeEnum;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.ProxyConfiguration;
import org.openapis.openapi.models.shared.ProxyConfigurationTypeEnum;
import org.openapis.openapi.models.shared.RegisterTaskDefinitionRequest;
import org.openapis.openapi.models.shared.RepositoryCredentials;
import org.openapis.openapi.models.shared.ResourceRequirement;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.RuntimePlatform;
import org.openapis.openapi.models.shared.ScopeEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SystemControl;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaskDefinitionPlacementConstraint;
import org.openapis.openapi.models.shared.TaskDefinitionPlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.Tmpfs;
import org.openapis.openapi.models.shared.TransportProtocolEnum;
import org.openapis.openapi.models.shared.Ulimit;
import org.openapis.openapi.models.shared.UlimitNameEnum;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeFrom;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterTaskDefinitionRequest req = new RegisterTaskDefinitionRequest(                new RegisterTaskDefinitionRequest(                new org.openapis.openapi.models.shared.ContainerDefinition[]{{
                                                add(new ContainerDefinition() {{
                                                    command = new String[]{{
                                                        add("aspernatur"),
                                                        add("voluptas"),
                                                    }};
                                                    cpu = 374244L;
                                                    dependsOn = new org.openapis.openapi.models.shared.ContainerDependency[]{{
                                                        add(new ContainerDependency(ContainerConditionEnum.SUCCESS, "adipisci") {{
                                                            condition = ContainerConditionEnum.COMPLETE;
                                                            containerName = "nobis";
                                                        }}),
                                                        add(new ContainerDependency(ContainerConditionEnum.SUCCESS, "in") {{
                                                            condition = ContainerConditionEnum.HEALTHY;
                                                            containerName = "dolores";
                                                        }}),
                                                    }};
                                                    disableNetworking = false;
                                                    dnsSearchDomains = new String[]{{
                                                        add("aliquam"),
                                                        add("officiis"),
                                                    }};
                                                    dnsServers = new String[]{{
                                                        add("ullam"),
                                                        add("adipisci"),
                                                        add("cum"),
                                                        add("blanditiis"),
                                                    }};
                                                    dockerLabels = new java.util.HashMap<String, String>() {{
                                                        put("hic", "nesciunt");
                                                        put("culpa", "corrupti");
                                                        put("pariatur", "totam");
                                                    }};
                                                    dockerSecurityOptions = new String[]{{
                                                        add("exercitationem"),
                                                        add("nobis"),
                                                        add("sit"),
                                                        add("rerum"),
                                                    }};
                                                    entryPoint = new String[]{{
                                                        add("reiciendis"),
                                                    }};
                                                    environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                        add(new KeyValuePair() {{
                                                            name = "Johnathan Klein V";
                                                            value = "dolore";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "in") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "sed";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "quidem") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "commodi";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "voluptas") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "explicabo";
                                                        }}),
                                                    }};
                                                    essential = false;
                                                    extraHosts = new org.openapis.openapi.models.shared.HostEntry[]{{
                                                        add(new HostEntry("illo", "reiciendis") {{
                                                            hostname = "burly-geometry.org";
                                                            ipAddress = "debitis";
                                                        }}),
                                                        add(new HostEntry("sed", "provident") {{
                                                            hostname = "aggressive-mate.org";
                                                            ipAddress = "incidunt";
                                                        }}),
                                                        add(new HostEntry("occaecati", "quos") {{
                                                            hostname = "extra-small-termination.biz";
                                                            ipAddress = "ea";
                                                        }}),
                                                    }};
                                                    firelensConfiguration = new FirelensConfiguration(FirelensConfigurationTypeEnum.FLUENTBIT) {{
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "tempora");
                                                            put("voluptate", "reiciendis");
                                                            put("ex", "sit");
                                                            put("non", "officiis");
                                                        }};
                                                        type = FirelensConfigurationTypeEnum.FLUENTBIT;
                                                    }};
                                                    healthCheck = new HealthCheck(                new String[]{{
                                                                        add("veniam"),
                                                                        add("minima"),
                                                                        add("recusandae"),
                                                                    }}) {{
                                                        command = new String[]{{
                                                            add("incidunt"),
                                                            add("ipsam"),
                                                        }};
                                                        interval = 894864L;
                                                        retries = 524970L;
                                                        startPeriod = 26522L;
                                                        timeout = 750595L;
                                                    }};
                                                    hostname = "whopping-stumbling.biz";
                                                    image = "aperiam";
                                                    interactive = false;
                                                    links = new String[]{{
                                                        add("numquam"),
                                                        add("veniam"),
                                                        add("in"),
                                                        add("officiis"),
                                                    }};
                                                    linuxParameters = new LinuxParameters() {{
                                                        capabilities = new KernelCapabilities() {{
                                                            add = new String[]{{
                                                                add("laudantium"),
                                                            }};
                                                            drop = new String[]{{
                                                                add("praesentium"),
                                                                add("cum"),
                                                            }};
                                                        }};
                                                        devices = new org.openapis.openapi.models.shared.Device[]{{
                                                            add(new Device("neque") {{
                                                                containerPath = "dolorum";
                                                                hostPath = "voluptatum";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                }};
                                                            }}),
                                                            add(new Device("tempora") {{
                                                                containerPath = "dolorum";
                                                                hostPath = "nostrum";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.WRITE),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                }};
                                                            }}),
                                                        }};
                                                        initProcessEnabled = false;
                                                        maxSwap = 543678L;
                                                        sharedMemorySize = 148268L;
                                                        swappiness = 282699L;
                                                        tmpfs = new org.openapis.openapi.models.shared.Tmpfs[]{{
                                                            add(new Tmpfs("ipsam", 24527L) {{
                                                                containerPath = "voluptatem";
                                                                mountOptions = new String[]{{
                                                                    add("expedita"),
                                                                    add("magnam"),
                                                                    add("consequatur"),
                                                                }};
                                                                size = 460220L;
                                                            }}),
                                                            add(new Tmpfs("ex", 153627L) {{
                                                                containerPath = "voluptatum";
                                                                mountOptions = new String[]{{
                                                                    add("repudiandae"),
                                                                    add("corporis"),
                                                                    add("et"),
                                                                }};
                                                                size = 502710L;
                                                            }}),
                                                            add(new Tmpfs("consequatur", 279068L) {{
                                                                containerPath = "sit";
                                                                mountOptions = new String[]{{
                                                                    add("nostrum"),
                                                                    add("saepe"),
                                                                }};
                                                                size = 622231L;
                                                            }}),
                                                            add(new Tmpfs("architecto", 577140L) {{
                                                                containerPath = "reiciendis";
                                                                mountOptions = new String[]{{
                                                                    add("harum"),
                                                                }};
                                                                size = 115703L;
                                                            }}),
                                                        }};
                                                    }};
                                                    logConfiguration = new LogConfiguration(LogDriverEnum.JSON_FILE) {{
                                                        logDriver = LogDriverEnum.JOURNALD;
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("atque", "laborum");
                                                            put("nam", "tenetur");
                                                            put("laboriosam", "alias");
                                                        }};
                                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                                            add(new Secret("delectus", "voluptates") {{
                                                                name = "Karl Miller";
                                                                valueFrom = "repellendus";
                                                            }}),
                                                        }};
                                                    }};
                                                    memory = 667285L;
                                                    memoryReservation = 696483L;
                                                    mountPoints = new org.openapis.openapi.models.shared.MountPoint[]{{
                                                        add(new MountPoint() {{
                                                            containerPath = "facere";
                                                            readOnly = false;
                                                            sourceVolume = "fuga";
                                                        }}),
                                                        add(new MountPoint() {{
                                                            containerPath = "praesentium";
                                                            readOnly = false;
                                                            sourceVolume = "mollitia";
                                                        }}),
                                                    }};
                                                    name = "Helen Schiller IV";
                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                        add(new PortMapping() {{
                                                            appProtocol = ApplicationProtocolEnum.GRPC;
                                                            containerPort = 519952L;
                                                            containerPortRange = "suscipit";
                                                            hostPort = 693957L;
                                                            name = "Henry Koepp";
                                                            protocol = TransportProtocolEnum.TCP;
                                                        }}),
                                                        add(new PortMapping() {{
                                                            appProtocol = ApplicationProtocolEnum.HTTP2;
                                                            containerPort = 623295L;
                                                            containerPortRange = "officiis";
                                                            hostPort = 886961L;
                                                            name = "Wendell Harber";
                                                            protocol = TransportProtocolEnum.UDP;
                                                        }}),
                                                    }};
                                                    privileged = false;
                                                    pseudoTerminal = false;
                                                    readonlyRootFilesystem = false;
                                                    repositoryCredentials = new RepositoryCredentials("at") {{
                                                        credentialsParameter = "corrupti";
                                                    }};
                                                    resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                        add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "atque") {{
                                                            type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "suscipit";
                                                        }}),
                                                        add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "dolorum") {{
                                                            type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "sunt";
                                                        }}),
                                                        add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "doloremque") {{
                                                            type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "labore";
                                                        }}),
                                                    }};
                                                    secrets = new org.openapis.openapi.models.shared.Secret[]{{
                                                        add(new Secret("velit", "a") {{
                                                            name = "Ruth Breitenberg";
                                                            valueFrom = "laboriosam";
                                                        }}),
                                                        add(new Secret("perspiciatis", "in") {{
                                                            name = "Oscar Ullrich";
                                                            valueFrom = "officiis";
                                                        }}),
                                                        add(new Secret("quis", "reprehenderit") {{
                                                            name = "Tricia McClure";
                                                            valueFrom = "id";
                                                        }}),
                                                        add(new Secret("vero", "doloremque") {{
                                                            name = "Jerry Hessel";
                                                            valueFrom = "non";
                                                        }}),
                                                    }};
                                                    startTimeout = 434156L;
                                                    stopTimeout = 59944L;
                                                    systemControls = new org.openapis.openapi.models.shared.SystemControl[]{{
                                                        add(new SystemControl() {{
                                                            namespace = "quae";
                                                            value = "molestiae";
                                                        }}),
                                                        add(new SystemControl() {{
                                                            namespace = "eveniet";
                                                            value = "qui";
                                                        }}),
                                                        add(new SystemControl() {{
                                                            namespace = "cum";
                                                            value = "iure";
                                                        }}),
                                                    }};
                                                    ulimits = new org.openapis.openapi.models.shared.Ulimit[]{{
                                                        add(new Ulimit(528940L, UlimitNameEnum.NICE, 304446L) {{
                                                            hardLimit = 187552L;
                                                            name = UlimitNameEnum.RSS;
                                                            softLimit = 715208L;
                                                        }}),
                                                        add(new Ulimit(362189L, UlimitNameEnum.NOFILE, 470649L) {{
                                                            hardLimit = 320565L;
                                                            name = UlimitNameEnum.STACK;
                                                            softLimit = 3099L;
                                                        }}),
                                                        add(new Ulimit(979527L, UlimitNameEnum.STACK, 174658L) {{
                                                            hardLimit = 649078L;
                                                            name = UlimitNameEnum.MEMLOCK;
                                                            softLimit = 5189L;
                                                        }}),
                                                        add(new Ulimit(680349L, UlimitNameEnum.FSIZE, 63207L) {{
                                                            hardLimit = 663866L;
                                                            name = UlimitNameEnum.LOCKS;
                                                            softLimit = 293144L;
                                                        }}),
                                                    }};
                                                    user = "recusandae";
                                                    volumesFrom = new org.openapis.openapi.models.shared.VolumeFrom[]{{
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "quaerat";
                                                        }}),
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "molestiae";
                                                        }}),
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "ex";
                                                        }}),
                                                    }};
                                                    workingDirectory = "ut";
                                                }}),
                                                add(new ContainerDefinition() {{
                                                    command = new String[]{{
                                                        add("adipisci"),
                                                        add("debitis"),
                                                        add("laudantium"),
                                                    }};
                                                    cpu = 432606L;
                                                    dependsOn = new org.openapis.openapi.models.shared.ContainerDependency[]{{
                                                        add(new ContainerDependency(ContainerConditionEnum.SUCCESS, "quis") {{
                                                            condition = ContainerConditionEnum.HEALTHY;
                                                            containerName = "esse";
                                                        }}),
                                                        add(new ContainerDependency(ContainerConditionEnum.SUCCESS, "aspernatur") {{
                                                            condition = ContainerConditionEnum.COMPLETE;
                                                            containerName = "reiciendis";
                                                        }}),
                                                    }};
                                                    disableNetworking = false;
                                                    dnsSearchDomains = new String[]{{
                                                        add("quasi"),
                                                        add("animi"),
                                                    }};
                                                    dnsServers = new String[]{{
                                                        add("mollitia"),
                                                        add("provident"),
                                                    }};
                                                    dockerLabels = new java.util.HashMap<String, String>() {{
                                                        put("animi", "ex");
                                                        put("aliquid", "accusantium");
                                                        put("repellat", "doloribus");
                                                        put("ullam", "in");
                                                    }};
                                                    dockerSecurityOptions = new String[]{{
                                                        add("earum"),
                                                        add("officia"),
                                                        add("laborum"),
                                                    }};
                                                    entryPoint = new String[]{{
                                                        add("modi"),
                                                        add("voluptatibus"),
                                                        add("molestias"),
                                                        add("officiis"),
                                                    }};
                                                    environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                        add(new KeyValuePair() {{
                                                            name = "Terry Price";
                                                            value = "inventore";
                                                        }}),
                                                        add(new KeyValuePair() {{
                                                            name = "Mrs. Erma Berge";
                                                            value = "eum";
                                                        }}),
                                                        add(new KeyValuePair() {{
                                                            name = "Deanna Swaniawski";
                                                            value = "sapiente";
                                                        }}),
                                                        add(new KeyValuePair() {{
                                                            name = "Ms. Cheryl Hane";
                                                            value = "earum";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "illum") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "hic";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "earum") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "eaque";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "maiores") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "perspiciatis";
                                                        }}),
                                                    }};
                                                    essential = false;
                                                    extraHosts = new org.openapis.openapi.models.shared.HostEntry[]{{
                                                        add(new HostEntry("fugit", "cumque") {{
                                                            hostname = "icky-seal.info";
                                                            ipAddress = "dolorem";
                                                        }}),
                                                        add(new HostEntry("nulla", "consequatur") {{
                                                            hostname = "reasonable-completion.name";
                                                            ipAddress = "necessitatibus";
                                                        }}),
                                                        add(new HostEntry("occaecati", "suscipit") {{
                                                            hostname = "bumpy-blowgun.info";
                                                            ipAddress = "natus";
                                                        }}),
                                                        add(new HostEntry("nulla", "necessitatibus") {{
                                                            hostname = "essential-booty.biz";
                                                            ipAddress = "doloribus";
                                                        }}),
                                                    }};
                                                    firelensConfiguration = new FirelensConfiguration(FirelensConfigurationTypeEnum.FLUENTD) {{
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "nihil");
                                                        }};
                                                        type = FirelensConfigurationTypeEnum.FLUENTD;
                                                    }};
                                                    healthCheck = new HealthCheck(                new String[]{{
                                                                        add("doloremque"),
                                                                        add("dicta"),
                                                                        add("odio"),
                                                                        add("tempora"),
                                                                    }}) {{
                                                        command = new String[]{{
                                                            add("esse"),
                                                            add("praesentium"),
                                                        }};
                                                        interval = 979963L;
                                                        retries = 967260L;
                                                        startPeriod = 423706L;
                                                        timeout = 99958L;
                                                    }};
                                                    hostname = "joyous-guerrilla.biz";
                                                    image = "aliquid";
                                                    interactive = false;
                                                    links = new String[]{{
                                                        add("laborum"),
                                                    }};
                                                    linuxParameters = new LinuxParameters() {{
                                                        capabilities = new KernelCapabilities() {{
                                                            add = new String[]{{
                                                                add("nostrum"),
                                                            }};
                                                            drop = new String[]{{
                                                                add("expedita"),
                                                                add("aliquid"),
                                                                add("officia"),
                                                                add("suscipit"),
                                                            }};
                                                        }};
                                                        devices = new org.openapis.openapi.models.shared.Device[]{{
                                                            add(new Device("ab") {{
                                                                containerPath = "perferendis";
                                                                hostPath = "eum";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.WRITE),
                                                                    add(DeviceCgroupPermissionEnum.WRITE),
                                                                }};
                                                            }}),
                                                            add(new Device("deleniti") {{
                                                                containerPath = "error";
                                                                hostPath = "possimus";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.WRITE),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.READ),
                                                                }};
                                                            }}),
                                                        }};
                                                        initProcessEnabled = false;
                                                        maxSwap = 316220L;
                                                        sharedMemorySize = 110477L;
                                                        swappiness = 833316L;
                                                        tmpfs = new org.openapis.openapi.models.shared.Tmpfs[]{{
                                                            add(new Tmpfs("voluptatem", 561577L) {{
                                                                containerPath = "quo";
                                                                mountOptions = new String[]{{
                                                                    add("ut"),
                                                                    add("ad"),
                                                                }};
                                                                size = 713927L;
                                                            }}),
                                                            add(new Tmpfs("veritatis", 703218L) {{
                                                                containerPath = "cum";
                                                                mountOptions = new String[]{{
                                                                    add("beatae"),
                                                                    add("voluptatum"),
                                                                }};
                                                                size = 606308L;
                                                            }}),
                                                        }};
                                                    }};
                                                    logConfiguration = new LogConfiguration(LogDriverEnum.JSON_FILE) {{
                                                        logDriver = LogDriverEnum.AWSLOGS;
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("voluptatem", "sapiente");
                                                            put("officiis", "architecto");
                                                            put("fuga", "pariatur");
                                                        }};
                                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                                            add(new Secret("rem", "minus") {{
                                                                name = "Mary Leuschke";
                                                                valueFrom = "sapiente";
                                                            }}),
                                                            add(new Secret("impedit", "quibusdam") {{
                                                                name = "Ollie Dicki PhD";
                                                                valueFrom = "totam";
                                                            }}),
                                                            add(new Secret("deleniti", "veritatis") {{
                                                                name = "Clyde Nader";
                                                                valueFrom = "inventore";
                                                            }}),
                                                            add(new Secret("ab", "laudantium") {{
                                                                name = "Mr. Carmen Altenwerth";
                                                                valueFrom = "fugit";
                                                            }}),
                                                        }};
                                                    }};
                                                    memory = 222658L;
                                                    memoryReservation = 856277L;
                                                    mountPoints = new org.openapis.openapi.models.shared.MountPoint[]{{
                                                        add(new MountPoint() {{
                                                            containerPath = "consequuntur";
                                                            readOnly = false;
                                                            sourceVolume = "ipsa";
                                                        }}),
                                                        add(new MountPoint() {{
                                                            containerPath = "quas";
                                                            readOnly = false;
                                                            sourceVolume = "eveniet";
                                                        }}),
                                                    }};
                                                    name = "Erick Klocko";
                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                        add(new PortMapping() {{
                                                            appProtocol = ApplicationProtocolEnum.HTTP;
                                                            containerPort = 712927L;
                                                            containerPortRange = "eum";
                                                            hostPort = 426943L;
                                                            name = "Miss Oscar Heller";
                                                            protocol = TransportProtocolEnum.UDP;
                                                        }}),
                                                        add(new PortMapping() {{
                                                            appProtocol = ApplicationProtocolEnum.HTTP2;
                                                            containerPort = 927212L;
                                                            containerPortRange = "consequuntur";
                                                            hostPort = 28952L;
                                                            name = "Alyssa Boyer";
                                                            protocol = TransportProtocolEnum.UDP;
                                                        }}),
                                                    }};
                                                    privileged = false;
                                                    pseudoTerminal = false;
                                                    readonlyRootFilesystem = false;
                                                    repositoryCredentials = new RepositoryCredentials("harum") {{
                                                        credentialsParameter = "est";
                                                    }};
                                                    resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                        add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "occaecati") {{
                                                            type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "repudiandae";
                                                        }}),
                                                    }};
                                                    secrets = new org.openapis.openapi.models.shared.Secret[]{{
                                                        add(new Secret("quos", "eius") {{
                                                            name = "Vickie Nitzsche";
                                                            valueFrom = "nemo";
                                                        }}),
                                                        add(new Secret("quasi", "rem") {{
                                                            name = "Caroline Dooley";
                                                            valueFrom = "incidunt";
                                                        }}),
                                                    }};
                                                    startTimeout = 851854L;
                                                    stopTimeout = 117380L;
                                                    systemControls = new org.openapis.openapi.models.shared.SystemControl[]{{
                                                        add(new SystemControl() {{
                                                            namespace = "consequuntur";
                                                            value = "consectetur";
                                                        }}),
                                                        add(new SystemControl() {{
                                                            namespace = "aperiam";
                                                            value = "cupiditate";
                                                        }}),
                                                    }};
                                                    ulimits = new org.openapis.openapi.models.shared.Ulimit[]{{
                                                        add(new Ulimit(178580L, UlimitNameEnum.NOFILE, 612867L) {{
                                                            hardLimit = 746837L;
                                                            name = UlimitNameEnum.CORE;
                                                            softLimit = 608989L;
                                                        }}),
                                                        add(new Ulimit(881897L, UlimitNameEnum.STACK, 719620L) {{
                                                            hardLimit = 170099L;
                                                            name = UlimitNameEnum.CPU;
                                                            softLimit = 686362L;
                                                        }}),
                                                        add(new Ulimit(507636L, UlimitNameEnum.RTTIME, 300403L) {{
                                                            hardLimit = 608593L;
                                                            name = UlimitNameEnum.STACK;
                                                            softLimit = 328379L;
                                                        }}),
                                                        add(new Ulimit(930819L, UlimitNameEnum.MSGQUEUE, 520761L) {{
                                                            hardLimit = 836364L;
                                                            name = UlimitNameEnum.NOFILE;
                                                            softLimit = 415280L;
                                                        }}),
                                                    }};
                                                    user = "earum";
                                                    volumesFrom = new org.openapis.openapi.models.shared.VolumeFrom[]{{
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "nam";
                                                        }}),
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "vero";
                                                        }}),
                                                    }};
                                                    workingDirectory = "voluptatem";
                                                }}),
                                                add(new ContainerDefinition() {{
                                                    command = new String[]{{
                                                        add("vel"),
                                                        add("alias"),
                                                    }};
                                                    cpu = 93894L;
                                                    dependsOn = new org.openapis.openapi.models.shared.ContainerDependency[]{{
                                                        add(new ContainerDependency(ContainerConditionEnum.SUCCESS, "nulla") {{
                                                            condition = ContainerConditionEnum.HEALTHY;
                                                            containerName = "enim";
                                                        }}),
                                                    }};
                                                    disableNetworking = false;
                                                    dnsSearchDomains = new String[]{{
                                                        add("esse"),
                                                        add("nemo"),
                                                        add("reprehenderit"),
                                                    }};
                                                    dnsServers = new String[]{{
                                                        add("quis"),
                                                        add("sint"),
                                                        add("accusamus"),
                                                    }};
                                                    dockerLabels = new java.util.HashMap<String, String>() {{
                                                        put("hic", "necessitatibus");
                                                        put("asperiores", "ex");
                                                        put("voluptas", "debitis");
                                                        put("delectus", "quae");
                                                    }};
                                                    dockerSecurityOptions = new String[]{{
                                                        add("fuga"),
                                                        add("laborum"),
                                                        add("consectetur"),
                                                        add("velit"),
                                                    }};
                                                    entryPoint = new String[]{{
                                                        add("ipsum"),
                                                        add("impedit"),
                                                        add("magni"),
                                                    }};
                                                    environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                        add(new KeyValuePair() {{
                                                            name = "Alton Grimes";
                                                            value = "sequi";
                                                        }}),
                                                        add(new KeyValuePair() {{
                                                            name = "Gladys Satterfield";
                                                            value = "iure";
                                                        }}),
                                                        add(new KeyValuePair() {{
                                                            name = "Camille Kautzer";
                                                            value = "inventore";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "architecto") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "libero";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "quia") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "voluptatibus";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "aliquam") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "porro";
                                                        }}),
                                                        add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "illo") {{
                                                            type = EnvironmentFileTypeEnum.S3;
                                                            value = "velit";
                                                        }}),
                                                    }};
                                                    essential = false;
                                                    extraHosts = new org.openapis.openapi.models.shared.HostEntry[]{{
                                                        add(new HostEntry("excepturi", "eum") {{
                                                            hostname = "improbable-gymnastics.com";
                                                            ipAddress = "vero";
                                                        }}),
                                                    }};
                                                    firelensConfiguration = new FirelensConfiguration(FirelensConfigurationTypeEnum.FLUENTD) {{
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("ut", "perspiciatis");
                                                        }};
                                                        type = FirelensConfigurationTypeEnum.FLUENTBIT;
                                                    }};
                                                    healthCheck = new HealthCheck(                new String[]{{
                                                                        add("dolor"),
                                                                        add("iusto"),
                                                                    }}) {{
                                                        command = new String[]{{
                                                            add("voluptatibus"),
                                                            add("iste"),
                                                            add("itaque"),
                                                            add("alias"),
                                                        }};
                                                        interval = 391797L;
                                                        retries = 931505L;
                                                        startPeriod = 242178L;
                                                        timeout = 673838L;
                                                    }};
                                                    hostname = "alert-architect.com";
                                                    image = "officia";
                                                    interactive = false;
                                                    links = new String[]{{
                                                        add("ea"),
                                                        add("quidem"),
                                                        add("voluptas"),
                                                        add("facilis"),
                                                    }};
                                                    linuxParameters = new LinuxParameters() {{
                                                        capabilities = new KernelCapabilities() {{
                                                            add = new String[]{{
                                                                add("perspiciatis"),
                                                                add("expedita"),
                                                                add("deleniti"),
                                                                add("a"),
                                                            }};
                                                            drop = new String[]{{
                                                                add("ullam"),
                                                                add("unde"),
                                                            }};
                                                        }};
                                                        devices = new org.openapis.openapi.models.shared.Device[]{{
                                                            add(new Device("error") {{
                                                                containerPath = "animi";
                                                                hostPath = "impedit";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.WRITE),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                }};
                                                            }}),
                                                            add(new Device("consectetur") {{
                                                                containerPath = "esse";
                                                                hostPath = "labore";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                }};
                                                            }}),
                                                            add(new Device("qui") {{
                                                                containerPath = "vitae";
                                                                hostPath = "inventore";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.READ),
                                                                }};
                                                            }}),
                                                            add(new Device("rem") {{
                                                                containerPath = "iste";
                                                                hostPath = "ex";
                                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                    add(DeviceCgroupPermissionEnum.MKNOD),
                                                                }};
                                                            }}),
                                                        }};
                                                        initProcessEnabled = false;
                                                        maxSwap = 678060L;
                                                        sharedMemorySize = 487676L;
                                                        swappiness = 144691L;
                                                        tmpfs = new org.openapis.openapi.models.shared.Tmpfs[]{{
                                                            add(new Tmpfs("neque", 348357L) {{
                                                                containerPath = "magni";
                                                                mountOptions = new String[]{{
                                                                    add("quae"),
                                                                    add("quae"),
                                                                }};
                                                                size = 264333L;
                                                            }}),
                                                        }};
                                                    }};
                                                    logConfiguration = new LogConfiguration(LogDriverEnum.FLUENTD) {{
                                                        logDriver = LogDriverEnum.AWSFIRELENS;
                                                        options = new java.util.HashMap<String, String>() {{
                                                            put("ipsum", "unde");
                                                        }};
                                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                                            add(new Secret("libero", "dicta") {{
                                                                name = "Wilbert Crona";
                                                                valueFrom = "omnis";
                                                            }}),
                                                            add(new Secret("sit", "iusto") {{
                                                                name = "Wm Steuber";
                                                                valueFrom = "placeat";
                                                            }}),
                                                            add(new Secret("distinctio", "voluptatem") {{
                                                                name = "Ms. Tasha Block";
                                                                valueFrom = "eligendi";
                                                            }}),
                                                            add(new Secret("corrupti", "molestiae") {{
                                                                name = "Tamara D'Amore MD";
                                                                valueFrom = "facere";
                                                            }}),
                                                        }};
                                                    }};
                                                    memory = 882284L;
                                                    memoryReservation = 896480L;
                                                    mountPoints = new org.openapis.openapi.models.shared.MountPoint[]{{
                                                        add(new MountPoint() {{
                                                            containerPath = "sint";
                                                            readOnly = false;
                                                            sourceVolume = "ea";
                                                        }}),
                                                        add(new MountPoint() {{
                                                            containerPath = "autem";
                                                            readOnly = false;
                                                            sourceVolume = "ipsam";
                                                        }}),
                                                        add(new MountPoint() {{
                                                            containerPath = "rerum";
                                                            readOnly = false;
                                                            sourceVolume = "laudantium";
                                                        }}),
                                                    }};
                                                    name = "Cecelia Wiza";
                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                        add(new PortMapping() {{
                                                            appProtocol = ApplicationProtocolEnum.HTTP;
                                                            containerPort = 694158L;
                                                            containerPortRange = "fuga";
                                                            hostPort = 919508L;
                                                            name = "Mamie Torp";
                                                            protocol = TransportProtocolEnum.TCP;
                                                        }}),
                                                    }};
                                                    privileged = false;
                                                    pseudoTerminal = false;
                                                    readonlyRootFilesystem = false;
                                                    repositoryCredentials = new RepositoryCredentials("odit") {{
                                                        credentialsParameter = "praesentium";
                                                    }};
                                                    resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                        add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "adipisci") {{
                                                            type = ResourceTypeEnum.GPU;
                                                            value = "error";
                                                        }}),
                                                    }};
                                                    secrets = new org.openapis.openapi.models.shared.Secret[]{{
                                                        add(new Secret("delectus", "cupiditate") {{
                                                            name = "Bernard Powlowski V";
                                                            valueFrom = "molestiae";
                                                        }}),
                                                        add(new Secret("dignissimos", "optio") {{
                                                            name = "Elaine Gerhold";
                                                            valueFrom = "officia";
                                                        }}),
                                                        add(new Secret("minima", "placeat") {{
                                                            name = "Lewis Denesik";
                                                            valueFrom = "cupiditate";
                                                        }}),
                                                        add(new Secret("corporis", "magnam") {{
                                                            name = "Gladys King";
                                                            valueFrom = "modi";
                                                        }}),
                                                    }};
                                                    startTimeout = 914971L;
                                                    stopTimeout = 978173L;
                                                    systemControls = new org.openapis.openapi.models.shared.SystemControl[]{{
                                                        add(new SystemControl() {{
                                                            namespace = "aperiam";
                                                            value = "libero";
                                                        }}),
                                                        add(new SystemControl() {{
                                                            namespace = "ratione";
                                                            value = "labore";
                                                        }}),
                                                        add(new SystemControl() {{
                                                            namespace = "totam";
                                                            value = "occaecati";
                                                        }}),
                                                    }};
                                                    ulimits = new org.openapis.openapi.models.shared.Ulimit[]{{
                                                        add(new Ulimit(684553L, UlimitNameEnum.MEMLOCK, 669237L) {{
                                                            hardLimit = 779180L;
                                                            name = UlimitNameEnum.FSIZE;
                                                            softLimit = 795591L;
                                                        }}),
                                                        add(new Ulimit(878601L, UlimitNameEnum.DATA, 997437L) {{
                                                            hardLimit = 770873L;
                                                            name = UlimitNameEnum.STACK;
                                                            softLimit = 735894L;
                                                        }}),
                                                    }};
                                                    user = "pariatur";
                                                    volumesFrom = new org.openapis.openapi.models.shared.VolumeFrom[]{{
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "reprehenderit";
                                                        }}),
                                                        add(new VolumeFrom() {{
                                                            readOnly = false;
                                                            sourceContainer = "aperiam";
                                                        }}),
                                                    }};
                                                    workingDirectory = "odio";
                                                }}),
                                            }}, "minima") {{
                                cpu = "in";
                                ephemeralStorage = new EphemeralStorage(496915L);;
                                executionRoleArn = "excepturi";
                                inferenceAccelerators = new org.openapis.openapi.models.shared.InferenceAccelerator[]{{
                                    add(new InferenceAccelerator("ducimus", "voluptate") {{
                                        deviceName = "error";
                                        deviceType = "veritatis";
                                    }}),
                                }};
                                ipcMode = IpcModeEnum.NONE;
                                memory = "itaque";
                                networkMode = NetworkModeEnum.AWSVPC;
                                pidMode = PidModeEnum.TASK;
                                placementConstraints = new org.openapis.openapi.models.shared.TaskDefinitionPlacementConstraint[]{{
                                    add(new TaskDefinitionPlacementConstraint() {{
                                        expression = "quaerat";
                                        type = TaskDefinitionPlacementConstraintTypeEnum.MEMBER_OF;
                                    }}),
                                    add(new TaskDefinitionPlacementConstraint() {{
                                        expression = "commodi";
                                        type = TaskDefinitionPlacementConstraintTypeEnum.MEMBER_OF;
                                    }}),
                                }};
                                proxyConfiguration = new ProxyConfiguration("officiis") {{
                                    properties = "placeat";
                                    type = ProxyConfigurationTypeEnum.APPMESH;
                                }};;
                                requiresCompatibilities = new org.openapis.openapi.models.shared.CompatibilityEnum[]{{
                                    add(CompatibilityEnum.FARGATE),
                                    add(CompatibilityEnum.FARGATE),
                                    add(CompatibilityEnum.EC2),
                                }};
                                runtimePlatform = new RuntimePlatform() {{
                                    cpuArchitecture = CPUArchitectureEnum.X8664;
                                    operatingSystemFamily = OSFamilyEnum.WINDOWS_SERVER2019_FULL;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "vero";
                                        value = "sequi";
                                    }}),
                                    add(new Tag() {{
                                        key = "repudiandae";
                                        value = "cum";
                                    }}),
                                    add(new Tag() {{
                                        key = "dicta";
                                        value = "earum";
                                    }}),
                                }};
                                taskRoleArn = "veniam";
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        dockerVolumeConfiguration = new DockerVolumeConfiguration() {{
                                            autoprovision = false;
                                            driver = "dolores";
                                            driverOpts = new java.util.HashMap<String, String>() {{
                                                put("dicta", "consequuntur");
                                                put("necessitatibus", "nobis");
                                                put("ipsa", "ducimus");
                                            }};
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("veritatis", "quasi");
                                                put("laboriosam", "pariatur");
                                                put("libero", "excepturi");
                                                put("occaecati", "nemo");
                                            }};
                                            scope = ScopeEnum.TASK;
                                        }};
                                        efsVolumeConfiguration = new EFSVolumeConfiguration("animi") {{
                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                accessPointId = "nostrum";
                                                iam = EFSAuthorizationConfigIAMEnum.DISABLED;
                                            }};
                                            fileSystemId = "eligendi";
                                            rootDirectory = "sint";
                                            transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                            transitEncryptionPort = 944950L;
                                        }};
                                        fsxWindowsFileServerVolumeConfiguration = new FSxWindowsFileServerVolumeConfiguration(                new FSxWindowsFileServerAuthorizationConfig("architecto", "quos");, "iste", "assumenda") {{
                                            authorizationConfig = new FSxWindowsFileServerAuthorizationConfig("molestias", "odio") {{
                                                credentialsParameter = "quas";
                                                domain = "totam";
                                            }};
                                            fileSystemId = "eaque";
                                            rootDirectory = "saepe";
                                        }};
                                        host = new HostVolumeProperties() {{
                                            sourcePath = "tempore";
                                        }};
                                        name = "Lee Batz";
                                    }}),
                                    add(new Volume() {{
                                        dockerVolumeConfiguration = new DockerVolumeConfiguration() {{
                                            autoprovision = false;
                                            driver = "cum";
                                            driverOpts = new java.util.HashMap<String, String>() {{
                                                put("adipisci", "saepe");
                                            }};
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("doloremque", "quis");
                                                put("veniam", "libero");
                                                put("architecto", "cupiditate");
                                            }};
                                            scope = ScopeEnum.TASK;
                                        }};
                                        efsVolumeConfiguration = new EFSVolumeConfiguration("asperiores") {{
                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                accessPointId = "eligendi";
                                                iam = EFSAuthorizationConfigIAMEnum.DISABLED;
                                            }};
                                            fileSystemId = "non";
                                            rootDirectory = "magnam";
                                            transitEncryption = EFSTransitEncryptionEnum.DISABLED;
                                            transitEncryptionPort = 150935L;
                                        }};
                                        fsxWindowsFileServerVolumeConfiguration = new FSxWindowsFileServerVolumeConfiguration(                new FSxWindowsFileServerAuthorizationConfig("amet", "exercitationem");, "ab", "velit") {{
                                            authorizationConfig = new FSxWindowsFileServerAuthorizationConfig("facere", "laudantium") {{
                                                credentialsParameter = "veniam";
                                                domain = "consequuntur";
                                            }};
                                            fileSystemId = "odit";
                                            rootDirectory = "pariatur";
                                        }};
                                        host = new HostVolumeProperties() {{
                                            sourcePath = "facilis";
                                        }};
                                        name = "Tyler Wolff";
                                    }}),
                                    add(new Volume() {{
                                        dockerVolumeConfiguration = new DockerVolumeConfiguration() {{
                                            autoprovision = false;
                                            driver = "distinctio";
                                            driverOpts = new java.util.HashMap<String, String>() {{
                                                put("quis", "nisi");
                                                put("libero", "minus");
                                            }};
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("facilis", "ipsum");
                                                put("ad", "voluptatibus");
                                                put("voluptatibus", "consequuntur");
                                                put("debitis", "labore");
                                            }};
                                            scope = ScopeEnum.SHARED;
                                        }};
                                        efsVolumeConfiguration = new EFSVolumeConfiguration("rem") {{
                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                accessPointId = "eos";
                                                iam = EFSAuthorizationConfigIAMEnum.ENABLED;
                                            }};
                                            fileSystemId = "nostrum";
                                            rootDirectory = "neque";
                                            transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                            transitEncryptionPort = 664965L;
                                        }};
                                        fsxWindowsFileServerVolumeConfiguration = new FSxWindowsFileServerVolumeConfiguration(                new FSxWindowsFileServerAuthorizationConfig("dicta", "error");, "porro", "vitae") {{
                                            authorizationConfig = new FSxWindowsFileServerAuthorizationConfig("unde", "officiis") {{
                                                credentialsParameter = "eligendi";
                                                domain = "fugiat";
                                            }};
                                            fileSystemId = "ducimus";
                                            rootDirectory = "dolor";
                                        }};
                                        host = new HostVolumeProperties() {{
                                            sourcePath = "dignissimos";
                                        }};
                                        name = "Ginger Hand";
                                    }}),
                                }};
                            }};, RegisterTaskDefinitionXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_REGISTER_TASK_DEFINITION) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dignissimos";
                xAmzDate = "libero";
                xAmzSecurityToken = "illo";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "incidunt";
            }};            

            RegisterTaskDefinitionResponse res = sdk.sdk.registerTaskDefinition(req);

            if (res.registerTaskDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runTask

<p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunTaskRequest;
import org.openapis.openapi.models.operations.RunTaskResponse;
import org.openapis.openapi.models.operations.RunTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.ContainerOverride;
import org.openapis.openapi.models.shared.EnvironmentFile;
import org.openapis.openapi.models.shared.EnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EphemeralStorage;
import org.openapis.openapi.models.shared.InferenceAcceleratorOverride;
import org.openapis.openapi.models.shared.KeyValuePair;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.ResourceRequirement;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.RunTaskRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaskOverride;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RunTaskRequest req = new RunTaskRequest(                new RunTaskRequest("saepe") {{
                                capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                    add(new CapacityProviderStrategyItem("earum") {{
                                        base = 334018L;
                                        capacityProvider = "eos";
                                        weight = 970079L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("repellat") {{
                                        base = 444121L;
                                        capacityProvider = "praesentium";
                                        weight = 367046L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("deleniti") {{
                                        base = 789770L;
                                        capacityProvider = "sequi";
                                        weight = 467119L;
                                    }}),
                                }};
                                cluster = "illo";
                                count = 290248L;
                                enableECSManagedTags = false;
                                enableExecuteCommand = false;
                                group = "assumenda";
                                launchType = LaunchTypeEnum.EC2;
                                networkConfiguration = new NetworkConfiguration() {{
                                    awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                        add("provident"),
                                                        add("laudantium"),
                                                        add("repudiandae"),
                                                        add("consequatur"),
                                                    }}) {{
                                        assignPublicIp = AssignPublicIpEnum.DISABLED;
                                        securityGroups = new String[]{{
                                            add("nam"),
                                        }};
                                    }};;
                                }};;
                                overrides = new TaskOverride() {{
                                    containerOverrides = new org.openapis.openapi.models.shared.ContainerOverride[]{{
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("provident"),
                                                add("repudiandae"),
                                                add("rerum"),
                                            }};
                                            cpu = 492361L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Donnie Skiles";
                                                    value = "commodi";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Mrs. Leslie Anderson I";
                                                    value = "illum";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "cum") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "quidem";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "quasi") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "amet";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "laudantium") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "dicta";
                                                }}),
                                            }};
                                            memory = 40710L;
                                            memoryReservation = 938412L;
                                            name = "Wendy McKenzie";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "molestiae") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "consequatur";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "aperiam") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "facilis";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "totam") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "accusamus";
                                                }}),
                                            }};
                                        }}),
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("voluptatem"),
                                            }};
                                            cpu = 244376L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Elsa Fadel";
                                                    value = "beatae";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "minus") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "labore";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "voluptatem") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "esse";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "rerum") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "perferendis";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "aperiam") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "ea";
                                                }}),
                                            }};
                                            memory = 489459L;
                                            memoryReservation = 998026L;
                                            name = "Francis McKenzie";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "temporibus") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "soluta";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "aspernatur") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "amet";
                                                }}),
                                            }};
                                        }}),
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("itaque"),
                                                add("illum"),
                                                add("laborum"),
                                                add("dignissimos"),
                                            }};
                                            cpu = 876285L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Jaime Champlin";
                                                    value = "nihil";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "illo") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "ab";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "deserunt") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "hic";
                                                }}),
                                            }};
                                            memory = 964925L;
                                            memoryReservation = 251212L;
                                            name = "Jared Heller";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "accusamus") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "in";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "deleniti") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "aperiam";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "minima") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "voluptate";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "modi") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "magnam";
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    cpu = "eum";
                                    ephemeralStorage = new EphemeralStorage(199529L);;
                                    executionRoleArn = "mollitia";
                                    inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.InferenceAcceleratorOverride[]{{
                                        add(new InferenceAcceleratorOverride() {{
                                            deviceName = "fugiat";
                                            deviceType = "nostrum";
                                        }}),
                                        add(new InferenceAcceleratorOverride() {{
                                            deviceName = "molestiae";
                                            deviceType = "veniam";
                                        }}),
                                    }};
                                    memory = "reiciendis";
                                    taskRoleArn = "ab";
                                }};;
                                placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                    add(new PlacementConstraint() {{
                                        expression = "aut";
                                        type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                    }}),
                                    add(new PlacementConstraint() {{
                                        expression = "eveniet";
                                        type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                    }}),
                                }};
                                placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                    add(new PlacementStrategy() {{
                                        field = "numquam";
                                        type = PlacementStrategyTypeEnum.BINPACK;
                                    }}),
                                    add(new PlacementStrategy() {{
                                        field = "possimus";
                                        type = PlacementStrategyTypeEnum.SPREAD;
                                    }}),
                                }};
                                platformVersion = "consectetur";
                                propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                referenceId = "quaerat";
                                startedBy = "itaque";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "sunt";
                                        value = "distinctio";
                                    }}),
                                    add(new Tag() {{
                                        key = "iusto";
                                        value = "quas";
                                    }}),
                                    add(new Tag() {{
                                        key = "et";
                                        value = "facilis";
                                    }}),
                                    add(new Tag() {{
                                        key = "amet";
                                        value = "autem";
                                    }}),
                                }};
                            }};, RunTaskXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_RUN_TASK) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "alias";
                xAmzCredential = "rem";
                xAmzDate = "aut";
                xAmzSecurityToken = "quos";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "repellendus";
            }};            

            RunTaskResponse res = sdk.sdk.runTask(req);

            if (res.runTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTask

<p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTaskRequest;
import org.openapis.openapi.models.operations.StartTaskResponse;
import org.openapis.openapi.models.operations.StartTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.ContainerOverride;
import org.openapis.openapi.models.shared.EnvironmentFile;
import org.openapis.openapi.models.shared.EnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EphemeralStorage;
import org.openapis.openapi.models.shared.InferenceAcceleratorOverride;
import org.openapis.openapi.models.shared.KeyValuePair;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.ResourceRequirement;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTaskRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaskOverride;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTaskRequest req = new StartTaskRequest(                new StartTaskRequest(                new String[]{{
                                                add("eaque"),
                                            }}, "saepe") {{
                                cluster = "delectus";
                                enableECSManagedTags = false;
                                enableExecuteCommand = false;
                                group = "mollitia";
                                networkConfiguration = new NetworkConfiguration() {{
                                    awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                        add("officia"),
                                                        add("sed"),
                                                        add("voluptatem"),
                                                        add("alias"),
                                                    }}) {{
                                        assignPublicIp = AssignPublicIpEnum.DISABLED;
                                        securityGroups = new String[]{{
                                            add("voluptatem"),
                                            add("incidunt"),
                                            add("qui"),
                                            add("qui"),
                                        }};
                                    }};;
                                }};;
                                overrides = new TaskOverride() {{
                                    containerOverrides = new org.openapis.openapi.models.shared.ContainerOverride[]{{
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("explicabo"),
                                                add("beatae"),
                                                add("aliquid"),
                                            }};
                                            cpu = 264649L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Ross Nikolaus";
                                                    value = "sequi";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Gertrude Ryan";
                                                    value = "velit";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Jerald Stoltenberg";
                                                    value = "accusamus";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Sue Prohaska";
                                                    value = "non";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "ullam") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "quia";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "dicta") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "quisquam";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "eligendi") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "voluptatibus";
                                                }}),
                                            }};
                                            memory = 62035L;
                                            memoryReservation = 885022L;
                                            name = "Alice Hamill";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "iste") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "reiciendis";
                                                }}),
                                            }};
                                        }}),
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("quos"),
                                            }};
                                            cpu = 356315L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Patti Schoen";
                                                    value = "assumenda";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Domingo Rutherford";
                                                    value = "totam";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "sint") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "ab";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "esse") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "nihil";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "odio") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "iure";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "debitis") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "nesciunt";
                                                }}),
                                            }};
                                            memory = 423588L;
                                            memoryReservation = 208683L;
                                            name = "Melanie Cruickshank";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "maiores") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "ipsa";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "neque") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "veniam";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "doloribus") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "aliquam";
                                                }}),
                                            }};
                                        }}),
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("est"),
                                                add("delectus"),
                                                add("velit"),
                                                add("vitae"),
                                            }};
                                            cpu = 201096L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Winifred Hettinger";
                                                    value = "unde";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Rose Hills";
                                                    value = "alias";
                                                }}),
                                                add(new KeyValuePair() {{
                                                    name = "Antonio Jerde";
                                                    value = "veniam";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "sint") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "officia";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "numquam") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "ut";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "adipisci") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "tenetur";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "in") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "libero";
                                                }}),
                                            }};
                                            memory = 329651L;
                                            memoryReservation = 403147L;
                                            name = "Andrew Brekke";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "minima") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "ducimus";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "magni") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "qui";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "dolor") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "adipisci";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "impedit") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "expedita";
                                                }}),
                                            }};
                                        }}),
                                        add(new ContainerOverride() {{
                                            command = new String[]{{
                                                add("nemo"),
                                            }};
                                            cpu = 633987L;
                                            environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                add(new KeyValuePair() {{
                                                    name = "Rosie Glover";
                                                    value = "itaque";
                                                }}),
                                            }};
                                            environmentFiles = new org.openapis.openapi.models.shared.EnvironmentFile[]{{
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "enim") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "quisquam";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "assumenda") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "doloribus";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "architecto") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "officiis";
                                                }}),
                                                add(new EnvironmentFile(EnvironmentFileTypeEnum.S3, "culpa") {{
                                                    type = EnvironmentFileTypeEnum.S3;
                                                    value = "alias";
                                                }}),
                                            }};
                                            memory = 60335L;
                                            memoryReservation = 751033L;
                                            name = "Randy Carter";
                                            resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "perferendis") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "architecto";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.INFERENCE_ACCELERATOR, "iure") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "provident";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "recusandae") {{
                                                    type = ResourceTypeEnum.INFERENCE_ACCELERATOR;
                                                    value = "quod";
                                                }}),
                                                add(new ResourceRequirement(ResourceTypeEnum.GPU, "laboriosam") {{
                                                    type = ResourceTypeEnum.GPU;
                                                    value = "magnam";
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    cpu = "sed";
                                    ephemeralStorage = new EphemeralStorage(486272L);;
                                    executionRoleArn = "natus";
                                    inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.InferenceAcceleratorOverride[]{{
                                        add(new InferenceAcceleratorOverride() {{
                                            deviceName = "cum";
                                            deviceType = "doloribus";
                                        }}),
                                        add(new InferenceAcceleratorOverride() {{
                                            deviceName = "facilis";
                                            deviceType = "quidem";
                                        }}),
                                        add(new InferenceAcceleratorOverride() {{
                                            deviceName = "itaque";
                                            deviceType = "laboriosam";
                                        }}),
                                    }};
                                    memory = "unde";
                                    taskRoleArn = "modi";
                                }};;
                                propagateTags = PropagateTagsEnum.SERVICE;
                                referenceId = "hic";
                                startedBy = "cum";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "libero";
                                        value = "nam";
                                    }}),
                                }};
                            }};, StartTaskXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_START_TASK) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "quod";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "quo";
            }};            

            StartTaskResponse res = sdk.sdk.startTask(req);

            if (res.startTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTask

<p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTaskRequest;
import org.openapis.openapi.models.operations.StopTaskResponse;
import org.openapis.openapi.models.operations.StopTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTaskRequest req = new StopTaskRequest(                new StopTaskRequest("illum") {{
                                cluster = "nemo";
                                reason = "illum";
                            }};, StopTaskXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_STOP_TASK) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "non";
                xAmzCredential = "mollitia";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "pariatur";
            }};            

            StopTaskResponse res = sdk.sdk.stopTask(req);

            if (res.stopTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitAttachmentStateChanges

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitAttachmentStateChangesRequest;
import org.openapis.openapi.models.operations.SubmitAttachmentStateChangesResponse;
import org.openapis.openapi.models.operations.SubmitAttachmentStateChangesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachmentStateChange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitAttachmentStateChangesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitAttachmentStateChangesRequest req = new SubmitAttachmentStateChangesRequest(                new SubmitAttachmentStateChangesRequest(                new org.openapis.openapi.models.shared.AttachmentStateChange[]{{
                                                add(new AttachmentStateChange("laborum", "incidunt") {{
                                                    attachmentArn = "laborum";
                                                    status = "eveniet";
                                                }}),
                                                add(new AttachmentStateChange("alias", "suscipit") {{
                                                    attachmentArn = "maxime";
                                                    status = "ipsam";
                                                }}),
                                                add(new AttachmentStateChange("laborum", "est") {{
                                                    attachmentArn = "deserunt";
                                                    status = "molestias";
                                                }}),
                                                add(new AttachmentStateChange("quo", "perferendis") {{
                                                    attachmentArn = "occaecati";
                                                    status = "labore";
                                                }}),
                                            }}) {{
                                cluster = "fugit";
                            }};, SubmitAttachmentStateChangesXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_ATTACHMENT_STATE_CHANGES) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "quaerat";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "hic";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "officiis";
            }};            

            SubmitAttachmentStateChangesResponse res = sdk.sdk.submitAttachmentStateChanges(req);

            if (res.submitAttachmentStateChangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitContainerStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitContainerStateChangeRequest;
import org.openapis.openapi.models.operations.SubmitContainerStateChangeResponse;
import org.openapis.openapi.models.operations.SubmitContainerStateChangeXAmzTargetEnum;
import org.openapis.openapi.models.shared.NetworkBinding;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitContainerStateChangeRequest;
import org.openapis.openapi.models.shared.TransportProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitContainerStateChangeRequest req = new SubmitContainerStateChangeRequest(                new SubmitContainerStateChangeRequest() {{
                                cluster = "nulla";
                                containerName = "error";
                                exitCode = 653000L;
                                networkBindings = new org.openapis.openapi.models.shared.NetworkBinding[]{{
                                    add(new NetworkBinding() {{
                                        bindIP = "nostrum";
                                        containerPort = 460909L;
                                        containerPortRange = "corrupti";
                                        hostPort = 684799L;
                                        hostPortRange = "facere";
                                        protocol = TransportProtocolEnum.UDP;
                                    }}),
                                    add(new NetworkBinding() {{
                                        bindIP = "quasi";
                                        containerPort = 647218L;
                                        containerPortRange = "quod";
                                        hostPort = 385739L;
                                        hostPortRange = "doloremque";
                                        protocol = TransportProtocolEnum.TCP;
                                    }}),
                                }};
                                reason = "facere";
                                runtimeId = "necessitatibus";
                                status = "maxime";
                                task = "consequatur";
                            }};, SubmitContainerStateChangeXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_CONTAINER_STATE_CHANGE) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "similique";
                xAmzDate = "porro";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "magni";
            }};            

            SubmitContainerStateChangeResponse res = sdk.sdk.submitContainerStateChange(req);

            if (res.submitContainerStateChangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitTaskStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitTaskStateChangeRequest;
import org.openapis.openapi.models.operations.SubmitTaskStateChangeResponse;
import org.openapis.openapi.models.operations.SubmitTaskStateChangeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachmentStateChange;
import org.openapis.openapi.models.shared.ContainerStateChange;
import org.openapis.openapi.models.shared.ManagedAgentNameEnum;
import org.openapis.openapi.models.shared.ManagedAgentStateChange;
import org.openapis.openapi.models.shared.NetworkBinding;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitTaskStateChangeRequest;
import org.openapis.openapi.models.shared.TransportProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitTaskStateChangeRequest req = new SubmitTaskStateChangeRequest(                new SubmitTaskStateChangeRequest() {{
                                attachments = new org.openapis.openapi.models.shared.AttachmentStateChange[]{{
                                    add(new AttachmentStateChange("ipsa", "excepturi") {{
                                        attachmentArn = "necessitatibus";
                                        status = "impedit";
                                    }}),
                                }};
                                cluster = "a";
                                containers = new org.openapis.openapi.models.shared.ContainerStateChange[]{{
                                    add(new ContainerStateChange() {{
                                        containerName = "laudantium";
                                        exitCode = 982248L;
                                        imageDigest = "alias";
                                        networkBindings = new org.openapis.openapi.models.shared.NetworkBinding[]{{
                                            add(new NetworkBinding() {{
                                                bindIP = "rem";
                                                containerPort = 118615L;
                                                containerPortRange = "suscipit";
                                                hostPort = 938257L;
                                                hostPortRange = "doloribus";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "eius";
                                                containerPort = 458212L;
                                                containerPortRange = "in";
                                                hostPort = 757407L;
                                                hostPortRange = "quasi";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "vero";
                                                containerPort = 566312L;
                                                containerPortRange = "accusantium";
                                                hostPort = 185816L;
                                                hostPortRange = "impedit";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "incidunt";
                                                containerPort = 116558L;
                                                containerPortRange = "odit";
                                                hostPort = 357639L;
                                                hostPortRange = "rerum";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                        }};
                                        reason = "error";
                                        runtimeId = "vel";
                                        status = "accusantium";
                                    }}),
                                    add(new ContainerStateChange() {{
                                        containerName = "id";
                                        exitCode = 388169L;
                                        imageDigest = "ex";
                                        networkBindings = new org.openapis.openapi.models.shared.NetworkBinding[]{{
                                            add(new NetworkBinding() {{
                                                bindIP = "veritatis";
                                                containerPort = 356440L;
                                                containerPortRange = "quae";
                                                hostPort = 631719L;
                                                hostPortRange = "incidunt";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "magni";
                                                containerPort = 646329L;
                                                containerPortRange = "delectus";
                                                hostPort = 609537L;
                                                hostPortRange = "sed";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "maxime";
                                                containerPort = 337841L;
                                                containerPortRange = "cupiditate";
                                                hostPort = 303253L;
                                                hostPortRange = "excepturi";
                                                protocol = TransportProtocolEnum.UDP;
                                            }}),
                                        }};
                                        reason = "laudantium";
                                        runtimeId = "velit";
                                        status = "reiciendis";
                                    }}),
                                    add(new ContainerStateChange() {{
                                        containerName = "amet";
                                        exitCode = 363845L;
                                        imageDigest = "ipsa";
                                        networkBindings = new org.openapis.openapi.models.shared.NetworkBinding[]{{
                                            add(new NetworkBinding() {{
                                                bindIP = "tenetur";
                                                containerPort = 555294L;
                                                containerPortRange = "molestiae";
                                                hostPort = 395634L;
                                                hostPortRange = "asperiores";
                                                protocol = TransportProtocolEnum.UDP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "nobis";
                                                containerPort = 598316L;
                                                containerPortRange = "accusantium";
                                                hostPort = 118917L;
                                                hostPortRange = "minus";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "eveniet";
                                                containerPort = 781582L;
                                                containerPortRange = "tempore";
                                                hostPort = 693747L;
                                                hostPortRange = "modi";
                                                protocol = TransportProtocolEnum.UDP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "fugit";
                                                containerPort = 259377L;
                                                containerPortRange = "sequi";
                                                hostPort = 758194L;
                                                hostPortRange = "asperiores";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                        }};
                                        reason = "blanditiis";
                                        runtimeId = "sint";
                                        status = "repellat";
                                    }}),
                                    add(new ContainerStateChange() {{
                                        containerName = "a";
                                        exitCode = 658604L;
                                        imageDigest = "maiores";
                                        networkBindings = new org.openapis.openapi.models.shared.NetworkBinding[]{{
                                            add(new NetworkBinding() {{
                                                bindIP = "nulla";
                                                containerPort = 643419L;
                                                containerPortRange = "corporis";
                                                hostPort = 246577L;
                                                hostPortRange = "officiis";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "officia";
                                                containerPort = 902979L;
                                                containerPortRange = "eum";
                                                hostPort = 922094L;
                                                hostPortRange = "accusantium";
                                                protocol = TransportProtocolEnum.UDP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "impedit";
                                                containerPort = 97896L;
                                                containerPortRange = "blanditiis";
                                                hostPort = 260911L;
                                                hostPortRange = "quisquam";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                            add(new NetworkBinding() {{
                                                bindIP = "nobis";
                                                containerPort = 620054L;
                                                containerPortRange = "minus";
                                                hostPort = 154389L;
                                                hostPortRange = "magnam";
                                                protocol = TransportProtocolEnum.TCP;
                                            }}),
                                        }};
                                        reason = "quod";
                                        runtimeId = "quos";
                                        status = "corrupti";
                                    }}),
                                }};
                                executionStoppedAt = OffsetDateTime.parse("2022-07-12T05:39:44.455Z");
                                managedAgents = new org.openapis.openapi.models.shared.ManagedAgentStateChange[]{{
                                    add(new ManagedAgentStateChange("necessitatibus", ManagedAgentNameEnum.EXECUTE_COMMAND_AGENT, "architecto") {{
                                        containerName = "laborum";
                                        managedAgentName = ManagedAgentNameEnum.EXECUTE_COMMAND_AGENT;
                                        reason = "modi";
                                        status = "perferendis";
                                    }}),
                                }};
                                pullStartedAt = OffsetDateTime.parse("2022-06-01T17:03:08.326Z");
                                pullStoppedAt = OffsetDateTime.parse("2022-01-07T05:00:23.813Z");
                                reason = "neque";
                                status = "odit";
                                task = "earum";
                            }};, SubmitTaskStateChangeXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_TASK_STATE_CHANGE) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "eaque";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ad";
            }};            

            SubmitTaskStateChangeResponse res = sdk.sdk.submitTaskStateChange(req);

            if (res.submitTaskStateChangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.

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
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("tenetur",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "quibusdam";
                                                    value = "nemo";
                                                }}),
                                                add(new Tag() {{
                                                    key = "suscipit";
                                                    value = "pariatur";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_TAG_RESOURCE) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "repellendus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "id";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "sed";
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

Deletes specified tags from a resource.

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
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("repellat",                 new String[]{{
                                                add("architecto"),
                                                add("adipisci"),
                                                add("pariatur"),
                                                add("harum"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "iure";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minus";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
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

## updateCapacityProvider

Modifies the parameters for a capacity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCapacityProviderRequest;
import org.openapis.openapi.models.operations.UpdateCapacityProviderResponse;
import org.openapis.openapi.models.operations.UpdateCapacityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoScalingGroupProviderUpdate;
import org.openapis.openapi.models.shared.ManagedScaling;
import org.openapis.openapi.models.shared.ManagedScalingStatusEnum;
import org.openapis.openapi.models.shared.ManagedTerminationProtectionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCapacityProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCapacityProviderRequest req = new UpdateCapacityProviderRequest(                new UpdateCapacityProviderRequest(                new AutoScalingGroupProviderUpdate() {{
                                                managedScaling = new ManagedScaling() {{
                                                    instanceWarmupPeriod = 937865L;
                                                    maximumScalingStepSize = 510020L;
                                                    minimumScalingStepSize = 621140L;
                                                    status = ManagedScalingStatusEnum.ENABLED;
                                                    targetCapacity = 97810L;
                                                }};;
                                                managedTerminationProtection = ManagedTerminationProtectionEnum.DISABLED;
                                            }};, "accusamus");, UpdateCapacityProviderXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CAPACITY_PROVIDER) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "doloremque";
                xAmzDate = "expedita";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "deserunt";
            }};            

            UpdateCapacityProviderResponse res = sdk.sdk.updateCapacityProvider(req);

            if (res.updateCapacityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCluster

Updates the cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.operations.UpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterServiceConnectDefaultsRequest;
import org.openapis.openapi.models.shared.ClusterSetting;
import org.openapis.openapi.models.shared.ClusterSettingNameEnum;
import org.openapis.openapi.models.shared.ExecuteCommandConfiguration;
import org.openapis.openapi.models.shared.ExecuteCommandLogConfiguration;
import org.openapis.openapi.models.shared.ExecuteCommandLoggingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateClusterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new UpdateClusterRequest("excepturi") {{
                                configuration = new ClusterConfiguration() {{
                                    executeCommandConfiguration = new ExecuteCommandConfiguration() {{
                                        kmsKeyId = "magni";
                                        logConfiguration = new ExecuteCommandLogConfiguration() {{
                                            cloudWatchEncryptionEnabled = false;
                                            cloudWatchLogGroupName = "tempora";
                                            s3BucketName = "possimus";
                                            s3EncryptionEnabled = false;
                                            s3KeyPrefix = "dolor";
                                        }};;
                                        logging = ExecuteCommandLoggingEnum.OVERRIDE;
                                    }};;
                                }};;
                                serviceConnectDefaults = new ClusterServiceConnectDefaultsRequest("sed");;
                                settings = new org.openapis.openapi.models.shared.ClusterSetting[]{{
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "optio";
                                    }}),
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "delectus";
                                    }}),
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "minus";
                                    }}),
                                    add(new ClusterSetting() {{
                                        name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                        value = "quo";
                                    }}),
                                }};
                            }};, UpdateClusterXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "voluptatum";
                xAmzDate = "iste";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "illo";
            }};            

            UpdateClusterResponse res = sdk.sdk.updateCluster(req);

            if (res.updateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClusterSettings

Modifies the settings to use for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterSettingsRequest;
import org.openapis.openapi.models.operations.UpdateClusterSettingsResponse;
import org.openapis.openapi.models.operations.UpdateClusterSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterSetting;
import org.openapis.openapi.models.shared.ClusterSettingNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateClusterSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterSettingsRequest req = new UpdateClusterSettingsRequest(                new UpdateClusterSettingsRequest("doloribus",                 new org.openapis.openapi.models.shared.ClusterSetting[]{{
                                                add(new ClusterSetting() {{
                                                    name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                                    value = "at";
                                                }}),
                                                add(new ClusterSetting() {{
                                                    name = ClusterSettingNameEnum.CONTAINER_INSIGHTS;
                                                    value = "possimus";
                                                }}),
                                            }});, UpdateClusterSettingsXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CLUSTER_SETTINGS) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "vel";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quos";
            }};            

            UpdateClusterSettingsResponse res = sdk.sdk.updateClusterSettings(req);

            if (res.updateClusterSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContainerAgent

<p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContainerAgentRequest;
import org.openapis.openapi.models.operations.UpdateContainerAgentResponse;
import org.openapis.openapi.models.operations.UpdateContainerAgentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateContainerAgentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContainerAgentRequest req = new UpdateContainerAgentRequest(                new UpdateContainerAgentRequest("non") {{
                                cluster = "voluptates";
                            }};, UpdateContainerAgentXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CONTAINER_AGENT) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "quisquam";
                xAmzDate = "quas";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "inventore";
            }};            

            UpdateContainerAgentResponse res = sdk.sdk.updateContainerAgent(req);

            if (res.updateContainerAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContainerInstancesState

<p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContainerInstancesStateRequest;
import org.openapis.openapi.models.operations.UpdateContainerInstancesStateResponse;
import org.openapis.openapi.models.operations.UpdateContainerInstancesStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerInstanceStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateContainerInstancesStateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContainerInstancesStateRequest req = new UpdateContainerInstancesStateRequest(                new UpdateContainerInstancesStateRequest(                new String[]{{
                                                add("est"),
                                                add("dolor"),
                                                add("aliquid"),
                                            }}, ContainerInstanceStatusEnum.DRAINING) {{
                                cluster = "cumque";
                            }};, UpdateContainerInstancesStateXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CONTAINER_INSTANCES_STATE) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "ducimus";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UpdateContainerInstancesStateResponse res = sdk.sdk.updateContainerInstancesState(req);

            if (res.updateContainerInstancesStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

<p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties. If you specified a custom role when you created the service, Amazon ECS automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p> <code>loadBalancers,</code> </p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeploymentAlarms;
import org.openapis.openapi.models.shared.DeploymentCircuitBreaker;
import org.openapis.openapi.models.shared.DeploymentConfiguration;
import org.openapis.openapi.models.shared.LoadBalancer;
import org.openapis.openapi.models.shared.LogConfiguration;
import org.openapis.openapi.models.shared.LogDriverEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceConnectClientAlias;
import org.openapis.openapi.models.shared.ServiceConnectConfiguration;
import org.openapis.openapi.models.shared.ServiceConnectService;
import org.openapis.openapi.models.shared.ServiceRegistry;
import org.openapis.openapi.models.shared.UpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new UpdateServiceRequest("sequi") {{
                                capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                    add(new CapacityProviderStrategyItem("tenetur") {{
                                        base = 27078L;
                                        capacityProvider = "rerum";
                                        weight = 84178L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("porro") {{
                                        base = 419858L;
                                        capacityProvider = "quidem";
                                        weight = 517121L;
                                    }}),
                                    add(new CapacityProviderStrategyItem("voluptas") {{
                                        base = 646491L;
                                        capacityProvider = "magni";
                                        weight = 471207L;
                                    }}),
                                }};
                                cluster = "animi";
                                deploymentConfiguration = new DeploymentConfiguration() {{
                                    alarms = new DeploymentAlarms(                new String[]{{
                                                        add("alias"),
                                                        add("fuga"),
                                                    }}, false, false);;
                                    deploymentCircuitBreaker = new DeploymentCircuitBreaker(false, false);;
                                    maximumPercent = 14780L;
                                    minimumHealthyPercent = 295892L;
                                }};;
                                desiredCount = 802734L;
                                enableECSManagedTags = false;
                                enableExecuteCommand = false;
                                forceNewDeployment = false;
                                healthCheckGracePeriodSeconds = 303292L;
                                loadBalancers = new org.openapis.openapi.models.shared.LoadBalancer[]{{
                                    add(new LoadBalancer() {{
                                        containerName = "ullam";
                                        containerPort = 755738L;
                                        loadBalancerName = "placeat";
                                        targetGroupArn = "voluptas";
                                    }}),
                                    add(new LoadBalancer() {{
                                        containerName = "occaecati";
                                        containerPort = 600934L;
                                        loadBalancerName = "illo";
                                        targetGroupArn = "nihil";
                                    }}),
                                    add(new LoadBalancer() {{
                                        containerName = "inventore";
                                        containerPort = 725316L;
                                        loadBalancerName = "ipsam";
                                        targetGroupArn = "quasi";
                                    }}),
                                }};
                                networkConfiguration = new NetworkConfiguration() {{
                                    awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                        add("dicta"),
                                                        add("harum"),
                                                        add("facere"),
                                                        add("facilis"),
                                                    }}) {{
                                        assignPublicIp = AssignPublicIpEnum.ENABLED;
                                        securityGroups = new String[]{{
                                            add("delectus"),
                                            add("labore"),
                                            add("expedita"),
                                            add("corrupti"),
                                        }};
                                    }};;
                                }};;
                                placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                    add(new PlacementConstraint() {{
                                        expression = "atque";
                                        type = PlacementConstraintTypeEnum.MEMBER_OF;
                                    }}),
                                    add(new PlacementConstraint() {{
                                        expression = "cum";
                                        type = PlacementConstraintTypeEnum.MEMBER_OF;
                                    }}),
                                    add(new PlacementConstraint() {{
                                        expression = "sapiente";
                                        type = PlacementConstraintTypeEnum.MEMBER_OF;
                                    }}),
                                }};
                                placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                    add(new PlacementStrategy() {{
                                        field = "quod";
                                        type = PlacementStrategyTypeEnum.BINPACK;
                                    }}),
                                    add(new PlacementStrategy() {{
                                        field = "porro";
                                        type = PlacementStrategyTypeEnum.SPREAD;
                                    }}),
                                }};
                                platformVersion = "excepturi";
                                propagateTags = PropagateTagsEnum.SERVICE;
                                serviceConnectConfiguration = new ServiceConnectConfiguration(false) {{
                                    logConfiguration = new LogConfiguration(LogDriverEnum.AWSLOGS) {{
                                        options = new java.util.HashMap<String, String>() {{
                                            put("esse", "hic");
                                            put("maxime", "accusantium");
                                            put("soluta", "fugit");
                                            put("pariatur", "eligendi");
                                        }};
                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                            add(new Secret("tempora", "magni") {{
                                                name = "Maria Larson";
                                                valueFrom = "voluptates";
                                            }}),
                                            add(new Secret("reprehenderit", "voluptatum") {{
                                                name = "Brian Bartell";
                                                valueFrom = "eum";
                                            }}),
                                            add(new Secret("nostrum", "atque") {{
                                                name = "Christian Lindgren";
                                                valueFrom = "atque";
                                            }}),
                                            add(new Secret("quas", "placeat") {{
                                                name = "Monique Hamill";
                                                valueFrom = "quae";
                                            }}),
                                        }};
                                    }};;
                                    namespace = "enim";
                                    services = new org.openapis.openapi.models.shared.ServiceConnectService[]{{
                                        add(new ServiceConnectService("nemo") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(642234L) {{
                                                    dnsName = "saepe";
                                                    port = 965735L;
                                                }}),
                                                add(new ServiceConnectClientAlias(617497L) {{
                                                    dnsName = "natus";
                                                    port = 763869L;
                                                }}),
                                                add(new ServiceConnectClientAlias(156098L) {{
                                                    dnsName = "quaerat";
                                                    port = 985379L;
                                                }}),
                                                add(new ServiceConnectClientAlias(765070L) {{
                                                    dnsName = "officiis";
                                                    port = 651467L;
                                                }}),
                                            }};
                                            discoveryName = "quis";
                                            ingressPortOverride = 313590L;
                                            portName = "eum";
                                        }}),
                                        add(new ServiceConnectService("sunt") {{
                                            clientAliases = new org.openapis.openapi.models.shared.ServiceConnectClientAlias[]{{
                                                add(new ServiceConnectClientAlias(487148L) {{
                                                    dnsName = "nesciunt";
                                                    port = 22331L;
                                                }}),
                                                add(new ServiceConnectClientAlias(924293L) {{
                                                    dnsName = "minus";
                                                    port = 990369L;
                                                }}),
                                                add(new ServiceConnectClientAlias(118349L) {{
                                                    dnsName = "voluptates";
                                                    port = 506250L;
                                                }}),
                                                add(new ServiceConnectClientAlias(396234L) {{
                                                    dnsName = "fugit";
                                                    port = 25190L;
                                                }}),
                                            }};
                                            discoveryName = "necessitatibus";
                                            ingressPortOverride = 148975L;
                                            portName = "deleniti";
                                        }}),
                                    }};
                                }};;
                                serviceRegistries = new org.openapis.openapi.models.shared.ServiceRegistry[]{{
                                    add(new ServiceRegistry() {{
                                        containerName = "delectus";
                                        containerPort = 673653L;
                                        port = 303421L;
                                        registryArn = "deserunt";
                                    }}),
                                }};
                                taskDefinition = "modi";
                            }};, UpdateServiceXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_SERVICE) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "eius";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "at";
                xAmzSignedHeaders = "dolorem";
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req);

            if (res.updateServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServicePrimaryTaskSet

Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServicePrimaryTaskSetRequest;
import org.openapis.openapi.models.operations.UpdateServicePrimaryTaskSetResponse;
import org.openapis.openapi.models.operations.UpdateServicePrimaryTaskSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServicePrimaryTaskSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServicePrimaryTaskSetRequest req = new UpdateServicePrimaryTaskSetRequest(                new UpdateServicePrimaryTaskSetRequest("aspernatur", "inventore", "sequi");, UpdateServicePrimaryTaskSetXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_SERVICE_PRIMARY_TASK_SET) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "hic";
                xAmzDate = "eaque";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "aperiam";
            }};            

            UpdateServicePrimaryTaskSetResponse res = sdk.sdk.updateServicePrimaryTaskSet(req);

            if (res.updateServicePrimaryTaskSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskProtection

<p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskProtectionRequest;
import org.openapis.openapi.models.operations.UpdateTaskProtectionResponse;
import org.openapis.openapi.models.operations.UpdateTaskProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTaskProtectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTaskProtectionRequest req = new UpdateTaskProtectionRequest(                new UpdateTaskProtectionRequest("nulla", false,                 new String[]{{
                                                add("illo"),
                                                add("magnam"),
                                            }}) {{
                                expiresInMinutes = 961842L;
                            }};, UpdateTaskProtectionXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_TASK_PROTECTION) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "optio";
                xAmzCredential = "nobis";
                xAmzDate = "ex";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "deleniti";
            }};            

            UpdateTaskProtectionResponse res = sdk.sdk.updateTaskProtection(req);

            if (res.updateTaskProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskSet

Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskSetRequest;
import org.openapis.openapi.models.operations.UpdateTaskSetResponse;
import org.openapis.openapi.models.operations.UpdateTaskSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Scale;
import org.openapis.openapi.models.shared.ScaleUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTaskSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTaskSetRequest req = new UpdateTaskSetRequest(                new UpdateTaskSetRequest("hic",                 new Scale() {{
                                                unit = ScaleUnitEnum.PERCENT;
                                                value = 5698.34;
                                            }};, "aliquid", "sed");, UpdateTaskSetXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_TASK_SET) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "similique";
                xAmzCredential = "ea";
                xAmzDate = "animi";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
            }};            

            UpdateTaskSetResponse res = sdk.sdk.updateTaskSet(req);

            if (res.updateTaskSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
