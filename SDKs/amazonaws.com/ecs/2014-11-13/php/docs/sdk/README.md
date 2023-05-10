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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingGroupProvider;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScaling;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScalingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedTerminationProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCapacityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCapacityProviderRequest();
    $request->createCapacityProviderRequest = new CreateCapacityProviderRequest();
    $request->createCapacityProviderRequest->autoScalingGroupProvider = new AutoScalingGroupProvider();
    $request->createCapacityProviderRequest->autoScalingGroupProvider->autoScalingGroupArn = 'minus';
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling = new ManagedScaling();
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->instanceWarmupPeriod = 812169;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->maximumScalingStepSize = 528895;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->minimumScalingStepSize = 479977;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->status = ManagedScalingStatusEnum::DISABLED;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->targetCapacity = 392785;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedTerminationProtection = ManagedTerminationProtectionEnum::DISABLED;
    $request->createCapacityProviderRequest->name = 'Miss Raymond Hauck III';
    $request->createCapacityProviderRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateCapacityProviderXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CAPACITY_PROVIDER;

    $response = $sdk->sdk->createCapacityProvider($request);

    if ($response->createCapacityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCluster

<p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandLoggingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\ClusterServiceConnectDefaultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSetting;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSettingNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->capacityProviders = [
        'quod',
        'esse',
        'totam',
        'porro',
    ];
    $request->createClusterRequest->clusterName = 'dolorum';
    $request->createClusterRequest->configuration = new ClusterConfiguration();
    $request->createClusterRequest->configuration->executeCommandConfiguration = new ExecuteCommandConfiguration();
    $request->createClusterRequest->configuration->executeCommandConfiguration->kmsKeyId = 'dicta';
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration = new ExecuteCommandLogConfiguration();
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration->cloudWatchEncryptionEnabled = false;
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration->cloudWatchLogGroupName = 'nam';
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3BucketName = 'officia';
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3EncryptionEnabled = false;
    $request->createClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3KeyPrefix = 'occaecati';
    $request->createClusterRequest->configuration->executeCommandConfiguration->logging = ExecuteCommandLoggingEnum::NONE;
    $request->createClusterRequest->defaultCapacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->createClusterRequest->serviceConnectDefaults = new ClusterServiceConnectDefaultsRequest();
    $request->createClusterRequest->serviceConnectDefaults->namespace = 'hic';
    $request->createClusterRequest->settings = [
        new ClusterSetting(),
        new ClusterSetting(),
        new ClusterSetting(),
        new ClusterSetting(),
    ];
    $request->createClusterRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CLUSTER;

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

<p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentAlarms;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentCircuitBreaker;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentController;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentControllerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancer;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDriverEnum;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectService;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectClientAlias;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRegistry;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRequest();
    $request->createServiceRequest = new CreateServiceRequest();
    $request->createServiceRequest->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->createServiceRequest->clientToken = 'ipsum';
    $request->createServiceRequest->cluster = 'excepturi';
    $request->createServiceRequest->deploymentConfiguration = new DeploymentConfiguration();
    $request->createServiceRequest->deploymentConfiguration->alarms = new DeploymentAlarms();
    $request->createServiceRequest->deploymentConfiguration->alarms->alarmNames = [
        'perferendis',
    ];
    $request->createServiceRequest->deploymentConfiguration->alarms->enable = false;
    $request->createServiceRequest->deploymentConfiguration->alarms->rollback = false;
    $request->createServiceRequest->deploymentConfiguration->deploymentCircuitBreaker = new DeploymentCircuitBreaker();
    $request->createServiceRequest->deploymentConfiguration->deploymentCircuitBreaker->enable = false;
    $request->createServiceRequest->deploymentConfiguration->deploymentCircuitBreaker->rollback = false;
    $request->createServiceRequest->deploymentConfiguration->maximumPercent = 324141;
    $request->createServiceRequest->deploymentConfiguration->minimumHealthyPercent = 617636;
    $request->createServiceRequest->deploymentController = new DeploymentController();
    $request->createServiceRequest->deploymentController->type = DeploymentControllerTypeEnum::ECS;
    $request->createServiceRequest->desiredCount = 612096;
    $request->createServiceRequest->enableECSManagedTags = false;
    $request->createServiceRequest->enableExecuteCommand = false;
    $request->createServiceRequest->healthCheckGracePeriodSeconds = 222321;
    $request->createServiceRequest->launchType = LaunchTypeEnum::FARGATE;
    $request->createServiceRequest->loadBalancers = [
        new LoadBalancer(),
        new LoadBalancer(),
    ];
    $request->createServiceRequest->networkConfiguration = new NetworkConfiguration();
    $request->createServiceRequest->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->createServiceRequest->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->createServiceRequest->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->createServiceRequest->networkConfiguration->awsvpcConfiguration->subnets = [
        'saepe',
        'quidem',
    ];
    $request->createServiceRequest->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->createServiceRequest->placementStrategy = [
        new PlacementStrategy(),
    ];
    $request->createServiceRequest->platformVersion = 'reiciendis';
    $request->createServiceRequest->propagateTags = PropagateTagsEnum::NONE;
    $request->createServiceRequest->role = 'mollitia';
    $request->createServiceRequest->schedulingStrategy = SchedulingStrategyEnum::DAEMON;
    $request->createServiceRequest->serviceConnectConfiguration = new ServiceConnectConfiguration();
    $request->createServiceRequest->serviceConnectConfiguration->enabled = false;
    $request->createServiceRequest->serviceConnectConfiguration->logConfiguration = new LogConfiguration();
    $request->createServiceRequest->serviceConnectConfiguration->logConfiguration->logDriver = LogDriverEnum::SYSLOG;
    $request->createServiceRequest->serviceConnectConfiguration->logConfiguration->options = [
        'corporis' => 'explicabo',
    ];
    $request->createServiceRequest->serviceConnectConfiguration->logConfiguration->secretOptions = [
        new Secret(),
        new Secret(),
        new Secret(),
        new Secret(),
    ];
    $request->createServiceRequest->serviceConnectConfiguration->namespace = 'enim';
    $request->createServiceRequest->serviceConnectConfiguration->services = [
        new ServiceConnectService(),
        new ServiceConnectService(),
        new ServiceConnectService(),
    ];
    $request->createServiceRequest->serviceName = 'nemo';
    $request->createServiceRequest->serviceRegistries = [
        new ServiceRegistry(),
        new ServiceRegistry(),
    ];
    $request->createServiceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createServiceRequest->taskDefinition = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = CreateServiceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_SERVICE;

    $response = $sdk->sdk->createService($request);

    if ($response->createServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTaskSet

Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancer;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scale;
use \OpenAPI\OpenAPI\Models\Shared\ScaleUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRegistry;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskSetRequest();
    $request->createTaskSetRequest = new CreateTaskSetRequest();
    $request->createTaskSetRequest->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->createTaskSetRequest->clientToken = 'consequuntur';
    $request->createTaskSetRequest->cluster = 'repellat';
    $request->createTaskSetRequest->externalId = 'mollitia';
    $request->createTaskSetRequest->launchType = LaunchTypeEnum::FARGATE;
    $request->createTaskSetRequest->loadBalancers = [
        new LoadBalancer(),
        new LoadBalancer(),
    ];
    $request->createTaskSetRequest->networkConfiguration = new NetworkConfiguration();
    $request->createTaskSetRequest->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->createTaskSetRequest->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->createTaskSetRequest->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'molestiae',
        'velit',
    ];
    $request->createTaskSetRequest->networkConfiguration->awsvpcConfiguration->subnets = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->createTaskSetRequest->platformVersion = 'laborum';
    $request->createTaskSetRequest->scale = new Scale();
    $request->createTaskSetRequest->scale->unit = ScaleUnitEnum::PERCENT;
    $request->createTaskSetRequest->scale->value = 6563.3;
    $request->createTaskSetRequest->service = 'enim';
    $request->createTaskSetRequest->serviceRegistries = [
        new ServiceRegistry(),
    ];
    $request->createTaskSetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createTaskSetRequest->taskDefinition = 'sequi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateTaskSetXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_TASK_SET;

    $response = $sdk->sdk->createTaskSet($request);

    if ($response->createTaskSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountSetting

Disables an account setting for a specified user, role, or the root user for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccountSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountSettingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountSettingRequest();
    $request->deleteAccountSettingRequest = new DeleteAccountSettingRequest();
    $request->deleteAccountSettingRequest->name = SettingNameEnum::FARGATE_FIPS_MODE;
    $request->deleteAccountSettingRequest->principalArn = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteAccountSettingXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_ACCOUNT_SETTING;

    $response = $sdk->sdk->deleteAccountSetting($request);

    if ($response->deleteAccountSettingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAttributes

Deletes one or more custom attributes from an Amazon ECS resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttributesRequest();
    $request->deleteAttributesRequest = new DeleteAttributesRequest();
    $request->deleteAttributesRequest->attributes = [
        new Attribute(),
    ];
    $request->deleteAttributesRequest->cluster = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteAttributesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_ATTRIBUTES;

    $response = $sdk->sdk->deleteAttributes($request);

    if ($response->deleteAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCapacityProvider

<p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCapacityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCapacityProviderRequest();
    $request->deleteCapacityProviderRequest = new DeleteCapacityProviderRequest();
    $request->deleteCapacityProviderRequest->capacityProvider = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteCapacityProviderXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_CAPACITY_PROVIDER;

    $response = $sdk->sdk->deleteCapacityProvider($request);

    if ($response->deleteCapacityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

<p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterRequest();
    $request->deleteClusterRequest = new DeleteClusterRequest();
    $request->deleteClusterRequest->cluster = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteClusterXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_CLUSTER;

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

<p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->deleteServiceRequest = new DeleteServiceRequest();
    $request->deleteServiceRequest->cluster = 'modi';
    $request->deleteServiceRequest->force = false;
    $request->deleteServiceRequest->service = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DeleteServiceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_SERVICE;

    $response = $sdk->sdk->deleteService($request);

    if ($response->deleteServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTaskDefinitions

<p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTaskDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskDefinitionsRequest();
    $request->deleteTaskDefinitionsRequest = new DeleteTaskDefinitionsRequest();
    $request->deleteTaskDefinitionsRequest->taskDefinitions = [
        'enim',
        'consequatur',
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DeleteTaskDefinitionsXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_TASK_DEFINITIONS;

    $response = $sdk->sdk->deleteTaskDefinitions($request);

    if ($response->deleteTaskDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTaskSet

Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskSetRequest();
    $request->deleteTaskSetRequest = new DeleteTaskSetRequest();
    $request->deleteTaskSetRequest->cluster = 'modi';
    $request->deleteTaskSetRequest->force = false;
    $request->deleteTaskSetRequest->service = 'qui';
    $request->deleteTaskSetRequest->taskSet = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DeleteTaskSetXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_TASK_SET;

    $response = $sdk->sdk->deleteTaskSet($request);

    if ($response->deleteTaskSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterContainerInstance

<p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterContainerInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterContainerInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterContainerInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterContainerInstanceRequest();
    $request->deregisterContainerInstanceRequest = new DeregisterContainerInstanceRequest();
    $request->deregisterContainerInstanceRequest->cluster = 'fugit';
    $request->deregisterContainerInstanceRequest->containerInstance = 'dolorum';
    $request->deregisterContainerInstanceRequest->force = false;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DeregisterContainerInstanceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DEREGISTER_CONTAINER_INSTANCE;

    $response = $sdk->sdk->deregisterContainerInstance($request);

    if ($response->deregisterContainerInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterTaskDefinition

<p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTaskDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterTaskDefinitionRequest();
    $request->deregisterTaskDefinitionRequest = new DeregisterTaskDefinitionRequest();
    $request->deregisterTaskDefinitionRequest->taskDefinition = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeregisterTaskDefinitionXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DEREGISTER_TASK_DEFINITION;

    $response = $sdk->sdk->deregisterTaskDefinition($request);

    if ($response->deregisterTaskDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCapacityProviders

Describes one or more of your capacity providers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCapacityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCapacityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCapacityProvidersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCapacityProvidersRequest();
    $request->describeCapacityProvidersRequest = new DescribeCapacityProvidersRequest();
    $request->describeCapacityProvidersRequest->capacityProviders = [
        'debitis',
    ];
    $request->describeCapacityProvidersRequest->include = [
        CapacityProviderFieldEnum::TAGS,
        CapacityProviderFieldEnum::TAGS,
        CapacityProviderFieldEnum::TAGS,
        CapacityProviderFieldEnum::TAGS,
    ];
    $request->describeCapacityProvidersRequest->maxResults = 680056;
    $request->describeCapacityProvidersRequest->nextToken = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeCapacityProvidersXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CAPACITY_PROVIDERS;

    $response = $sdk->sdk->describeCapacityProviders($request);

    if ($response->describeCapacityProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClusters

Describes one or more of your clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClustersRequest();
    $request->describeClustersRequest = new DescribeClustersRequest();
    $request->describeClustersRequest->clusters = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->describeClustersRequest->include = [
        ClusterFieldEnum::SETTINGS,
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DescribeClustersXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CLUSTERS;

    $response = $sdk->sdk->describeClusters($request);

    if ($response->describeClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContainerInstances

Describes one or more container instances. Returns metadata about each container instance requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContainerInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContainerInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInstanceFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContainerInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContainerInstancesRequest();
    $request->describeContainerInstancesRequest = new DescribeContainerInstancesRequest();
    $request->describeContainerInstancesRequest->cluster = 'blanditiis';
    $request->describeContainerInstancesRequest->containerInstances = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->describeContainerInstancesRequest->include = [
        ContainerInstanceFieldEnum::TAGS,
        ContainerInstanceFieldEnum::CONTAINER_INSTANCE_HEALTH,
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DescribeContainerInstancesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_CONTAINER_INSTANCES;

    $response = $sdk->sdk->describeContainerInstances($request);

    if ($response->describeContainerInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServices

Describes the specified services running in your cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServicesRequest();
    $request->describeServicesRequest = new DescribeServicesRequest();
    $request->describeServicesRequest->cluster = 'labore';
    $request->describeServicesRequest->include = [
        ServiceFieldEnum::TAGS,
        ServiceFieldEnum::TAGS,
    ];
    $request->describeServicesRequest->services = [
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
    $request->xAmzTarget = DescribeServicesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_SERVICES;

    $response = $sdk->sdk->describeServices($request);

    if ($response->describeServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTaskDefinition

<p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskDefinitionFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTaskDefinitionRequest();
    $request->describeTaskDefinitionRequest = new DescribeTaskDefinitionRequest();
    $request->describeTaskDefinitionRequest->include = [
        TaskDefinitionFieldEnum::TAGS,
        TaskDefinitionFieldEnum::TAGS,
    ];
    $request->describeTaskDefinitionRequest->taskDefinition = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = DescribeTaskDefinitionXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASK_DEFINITION;

    $response = $sdk->sdk->describeTaskDefinition($request);

    if ($response->describeTaskDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTaskSets

Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTaskSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskSetFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTaskSetsRequest();
    $request->describeTaskSetsRequest = new DescribeTaskSetsRequest();
    $request->describeTaskSetsRequest->cluster = 'eum';
    $request->describeTaskSetsRequest->include = [
        TaskSetFieldEnum::TAGS,
    ];
    $request->describeTaskSetsRequest->service = 'necessitatibus';
    $request->describeTaskSetsRequest->taskSets = [
        'nemo',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DescribeTaskSetsXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASK_SETS;

    $response = $sdk->sdk->describeTaskSets($request);

    if ($response->describeTaskSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTasks

<p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTasksRequest();
    $request->describeTasksRequest = new DescribeTasksRequest();
    $request->describeTasksRequest->cluster = 'facilis';
    $request->describeTasksRequest->include = [
        TaskFieldEnum::TAGS,
        TaskFieldEnum::TAGS,
    ];
    $request->describeTasksRequest->tasks = [
        'architecto',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DescribeTasksXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASKS;

    $response = $sdk->sdk->describeTasks($request);

    if ($response->describeTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverPollEndpoint

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverPollEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverPollEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverPollEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoverPollEndpointRequest();
    $request->discoverPollEndpointRequest = new DiscoverPollEndpointRequest();
    $request->discoverPollEndpointRequest->cluster = 'saepe';
    $request->discoverPollEndpointRequest->containerInstance = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = DiscoverPollEndpointXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_DISCOVER_POLL_ENDPOINT;

    $response = $sdk->sdk->discoverPollEndpoint($request);

    if ($response->discoverPollEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeCommand

<p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteCommandXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteCommandRequest();
    $request->executeCommandRequest = new ExecuteCommandRequest();
    $request->executeCommandRequest->cluster = 'illum';
    $request->executeCommandRequest->command = 'pariatur';
    $request->executeCommandRequest->container = 'maxime';
    $request->executeCommandRequest->interactive = false;
    $request->executeCommandRequest->task = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ExecuteCommandXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_EXECUTE_COMMAND;

    $response = $sdk->sdk->executeCommand($request);

    if ($response->executeCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskProtection

Retrieves the protection status of tasks in an Amazon ECS service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTaskProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskProtectionRequest();
    $request->getTaskProtectionRequest = new GetTaskProtectionRequest();
    $request->getTaskProtectionRequest->cluster = 'ipsam';
    $request->getTaskProtectionRequest->tasks = [
        'autem',
        'nam',
    ];
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = GetTaskProtectionXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_GET_TASK_PROTECTION;

    $response = $sdk->sdk->getTaskProtection($request);

    if ($response->getTaskProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountSettings

Lists the account settings for a specified principal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountSettingsRequest();
    $request->listAccountSettingsRequest = new ListAccountSettingsRequest();
    $request->listAccountSettingsRequest->effectiveSettings = false;
    $request->listAccountSettingsRequest->maxResults = 11714;
    $request->listAccountSettingsRequest->name = SettingNameEnum::FARGATE_FIPS_MODE;
    $request->listAccountSettingsRequest->nextToken = 'corporis';
    $request->listAccountSettingsRequest->principalArn = 'hic';
    $request->listAccountSettingsRequest->value = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ListAccountSettingsXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_ACCOUNT_SETTINGS;
    $request->maxResults = 'nesciunt';
    $request->nextToken = 'eos';

    $response = $sdk->sdk->listAccountSettings($request);

    if ($response->listAccountSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAttributes

Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAttributesRequest();
    $request->listAttributesRequest = new ListAttributesRequest();
    $request->listAttributesRequest->attributeName = 'perferendis';
    $request->listAttributesRequest->attributeValue = 'dolores';
    $request->listAttributesRequest->cluster = 'minus';
    $request->listAttributesRequest->maxResults = 463451;
    $request->listAttributesRequest->nextToken = 'dolor';
    $request->listAttributesRequest->targetType = TargetTypeEnum::CONTAINER_INSTANCE;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListAttributesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_ATTRIBUTES;
    $request->maxResults = 'voluptatem';
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listAttributes($request);

    if ($response->listAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Returns a list of existing clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->listClustersRequest = new ListClustersRequest();
    $request->listClustersRequest->maxResults = 164694;
    $request->listClustersRequest->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ListClustersXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_CLUSTERS;
    $request->maxResults = 'modi';
    $request->nextToken = 'iste';

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContainerInstances

Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContainerInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContainerInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListContainerInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContainerInstancesRequest();
    $request->listContainerInstancesRequest = new ListContainerInstancesRequest();
    $request->listContainerInstancesRequest->cluster = 'dolorum';
    $request->listContainerInstancesRequest->filter = 'deleniti';
    $request->listContainerInstancesRequest->maxResults = 864282;
    $request->listContainerInstancesRequest->nextToken = 'provident';
    $request->listContainerInstancesRequest->status = ContainerInstanceStatusEnum::DEREGISTERING;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListContainerInstancesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_CONTAINER_INSTANCES;
    $request->maxResults = 'dolor';
    $request->nextToken = 'qui';

    $response = $sdk->sdk->listContainerInstances($request);

    if ($response->listContainerInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->listServicesRequest = new ListServicesRequest();
    $request->listServicesRequest->cluster = 'ipsum';
    $request->listServicesRequest->launchType = LaunchTypeEnum::EXTERNAL;
    $request->listServicesRequest->maxResults = 569574;
    $request->listServicesRequest->nextToken = 'cum';
    $request->listServicesRequest->schedulingStrategy = SchedulingStrategyEnum::REPLICA;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListServicesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_SERVICES;
    $request->maxResults = 'ipsa';
    $request->nextToken = 'iure';

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServicesByNamespace

This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesByNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesByNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesByNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesByNamespaceRequest();
    $request->listServicesByNamespaceRequest = new ListServicesByNamespaceRequest();
    $request->listServicesByNamespaceRequest->maxResults = 487838;
    $request->listServicesByNamespaceRequest->namespace = 'quaerat';
    $request->listServicesByNamespaceRequest->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = ListServicesByNamespaceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_SERVICES_BY_NAMESPACE;
    $request->maxResults = 'fugiat';
    $request->nextToken = 'ab';

    $response = $sdk->sdk->listServicesByNamespace($request);

    if ($response->listServicesByNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an Amazon ECS resource.

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
    $request->listTagsForResourceRequest->resourceArn = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskDefinitionFamilies

<p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskDefinitionFamiliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTaskDefinitionFamiliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskDefinitionFamilyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskDefinitionFamiliesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskDefinitionFamiliesRequest();
    $request->listTaskDefinitionFamiliesRequest = new ListTaskDefinitionFamiliesRequest();
    $request->listTaskDefinitionFamiliesRequest->familyPrefix = 'distinctio';
    $request->listTaskDefinitionFamiliesRequest->maxResults = 990339;
    $request->listTaskDefinitionFamiliesRequest->nextToken = 'nihil';
    $request->listTaskDefinitionFamiliesRequest->status = TaskDefinitionFamilyStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListTaskDefinitionFamiliesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITION_FAMILIES;
    $request->maxResults = 'optio';
    $request->nextToken = 'accusamus';

    $response = $sdk->sdk->listTaskDefinitionFamilies($request);

    if ($response->listTaskDefinitionFamiliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskDefinitions

Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTaskDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskDefinitionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskDefinitionsRequest();
    $request->listTaskDefinitionsRequest = new ListTaskDefinitionsRequest();
    $request->listTaskDefinitionsRequest->familyPrefix = 'ad';
    $request->listTaskDefinitionsRequest->maxResults = 904425;
    $request->listTaskDefinitionsRequest->nextToken = 'suscipit';
    $request->listTaskDefinitionsRequest->sort = SortOrderEnum::DESC;
    $request->listTaskDefinitionsRequest->status = TaskDefinitionStatusEnum::INACTIVE;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListTaskDefinitionsXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITIONS;
    $request->maxResults = 'tempora';
    $request->nextToken = 'vel';

    $response = $sdk->sdk->listTaskDefinitions($request);

    if ($response->listTaskDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTasks

<p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DesiredStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTasksRequest();
    $request->listTasksRequest = new ListTasksRequest();
    $request->listTasksRequest->cluster = 'quod';
    $request->listTasksRequest->containerInstance = 'officiis';
    $request->listTasksRequest->desiredStatus = DesiredStatusEnum::RUNNING;
    $request->listTasksRequest->family = 'dolorum';
    $request->listTasksRequest->launchType = LaunchTypeEnum::EXTERNAL;
    $request->listTasksRequest->maxResults = 456130;
    $request->listTasksRequest->nextToken = 'harum';
    $request->listTasksRequest->serviceName = 'iusto';
    $request->listTasksRequest->startedBy = 'ipsum';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListTasksXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASKS;
    $request->maxResults = 'dolorem';
    $request->nextToken = 'sapiente';

    $response = $sdk->sdk->listTasks($request);

    if ($response->listTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountSetting

<p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAccountSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSettingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountSettingRequest();
    $request->putAccountSettingRequest = new PutAccountSettingRequest();
    $request->putAccountSettingRequest->name = SettingNameEnum::AWSVPC_TRUNKING;
    $request->putAccountSettingRequest->principalArn = 'nihil';
    $request->putAccountSettingRequest->value = 'sit';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = PutAccountSettingXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ACCOUNT_SETTING;

    $response = $sdk->sdk->putAccountSetting($request);

    if ($response->putAccountSettingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountSettingDefault

Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSettingDefaultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAccountSettingDefaultRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountSettingDefaultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountSettingDefaultRequest();
    $request->putAccountSettingDefaultRequest = new PutAccountSettingDefaultRequest();
    $request->putAccountSettingDefaultRequest->name = SettingNameEnum::AWSVPC_TRUNKING;
    $request->putAccountSettingDefaultRequest->value = 'ipsum';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = PutAccountSettingDefaultXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ACCOUNT_SETTING_DEFAULT;

    $response = $sdk->sdk->putAccountSettingDefault($request);

    if ($response->putAccountSettingDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAttributes

Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAttributesRequest();
    $request->putAttributesRequest = new PutAttributesRequest();
    $request->putAttributesRequest->attributes = [
        new Attribute(),
        new Attribute(),
        new Attribute(),
    ];
    $request->putAttributesRequest->cluster = 'totam';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = PutAttributesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_ATTRIBUTES;

    $response = $sdk->sdk->putAttributes($request);

    if ($response->putAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putClusterCapacityProviders

<p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutClusterCapacityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutClusterCapacityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Operations\PutClusterCapacityProvidersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutClusterCapacityProvidersRequest();
    $request->putClusterCapacityProvidersRequest = new PutClusterCapacityProvidersRequest();
    $request->putClusterCapacityProvidersRequest->capacityProviders = [
        'temporibus',
        'qui',
        'neque',
    ];
    $request->putClusterCapacityProvidersRequest->cluster = 'fugit';
    $request->putClusterCapacityProvidersRequest->defaultCapacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
    ];
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = PutClusterCapacityProvidersXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_CLUSTER_CAPACITY_PROVIDERS;

    $response = $sdk->sdk->putClusterCapacityProviders($request);

    if ($response->putClusterCapacityProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerContainerInstance

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterContainerInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterContainerInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformDevice;
use \OpenAPI\OpenAPI\Models\Shared\PlatformDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\VersionInfo;
use \OpenAPI\OpenAPI\Models\Operations\RegisterContainerInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterContainerInstanceRequest();
    $request->registerContainerInstanceRequest = new RegisterContainerInstanceRequest();
    $request->registerContainerInstanceRequest->attributes = [
        new Attribute(),
        new Attribute(),
        new Attribute(),
    ];
    $request->registerContainerInstanceRequest->cluster = 'nobis';
    $request->registerContainerInstanceRequest->containerInstanceArn = 'et';
    $request->registerContainerInstanceRequest->instanceIdentityDocument = 'saepe';
    $request->registerContainerInstanceRequest->instanceIdentityDocumentSignature = 'ipsum';
    $request->registerContainerInstanceRequest->platformDevices = [
        new PlatformDevice(),
    ];
    $request->registerContainerInstanceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->registerContainerInstanceRequest->totalResources = [
        new Resource(),
        new Resource(),
        new Resource(),
    ];
    $request->registerContainerInstanceRequest->versionInfo = new VersionInfo();
    $request->registerContainerInstanceRequest->versionInfo->agentHash = 'tempore';
    $request->registerContainerInstanceRequest->versionInfo->agentVersion = 'cupiditate';
    $request->registerContainerInstanceRequest->versionInfo->dockerVersion = 'aperiam';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = RegisterContainerInstanceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_REGISTER_CONTAINER_INSTANCE;

    $response = $sdk->sdk->registerContainerInstance($request);

    if ($response->registerContainerInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerTaskDefinition

<p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterTaskDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDependency;
use \OpenAPI\OpenAPI\Models\Shared\ContainerConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFile;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostEntry;
use \OpenAPI\OpenAPI\Models\Shared\FirelensConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FirelensConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\LinuxParameters;
use \OpenAPI\OpenAPI\Models\Shared\KernelCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCgroupPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tmpfs;
use \OpenAPI\OpenAPI\Models\Shared\LogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDriverEnum;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MountPoint;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransportProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SystemControl;
use \OpenAPI\OpenAPI\Models\Shared\Ulimit;
use \OpenAPI\OpenAPI\Models\Shared\UlimitNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeFrom;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\InferenceAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\IpcModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PidModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskDefinitionPlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\TaskDefinitionPlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProxyConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimePlatform;
use \OpenAPI\OpenAPI\Models\Shared\CPUArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\DockerVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EFSVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EFSAuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\EFSAuthorizationConfigIAMEnum;
use \OpenAPI\OpenAPI\Models\Shared\EFSTransitEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FSxWindowsFileServerVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FSxWindowsFileServerAuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\HostVolumeProperties;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTaskDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterTaskDefinitionRequest();
    $request->registerTaskDefinitionRequest = new RegisterTaskDefinitionRequest();
    $request->registerTaskDefinitionRequest->containerDefinitions = [
        new ContainerDefinition(),
    ];
    $request->registerTaskDefinitionRequest->cpu = 'aut';
    $request->registerTaskDefinitionRequest->ephemeralStorage = new EphemeralStorage();
    $request->registerTaskDefinitionRequest->ephemeralStorage->sizeInGiB = 555649;
    $request->registerTaskDefinitionRequest->executionRoleArn = 'itaque';
    $request->registerTaskDefinitionRequest->family = 'consequatur';
    $request->registerTaskDefinitionRequest->inferenceAccelerators = [
        new InferenceAccelerator(),
        new InferenceAccelerator(),
        new InferenceAccelerator(),
    ];
    $request->registerTaskDefinitionRequest->ipcMode = IpcModeEnum::NONE;
    $request->registerTaskDefinitionRequest->memory = 'porro';
    $request->registerTaskDefinitionRequest->networkMode = NetworkModeEnum::NONE;
    $request->registerTaskDefinitionRequest->pidMode = PidModeEnum::HOST;
    $request->registerTaskDefinitionRequest->placementConstraints = [
        new TaskDefinitionPlacementConstraint(),
        new TaskDefinitionPlacementConstraint(),
        new TaskDefinitionPlacementConstraint(),
    ];
    $request->registerTaskDefinitionRequest->proxyConfiguration = new ProxyConfiguration();
    $request->registerTaskDefinitionRequest->proxyConfiguration->containerName = 'cupiditate';
    $request->registerTaskDefinitionRequest->proxyConfiguration->properties = 'qui';
    $request->registerTaskDefinitionRequest->proxyConfiguration->type = ProxyConfigurationTypeEnum::APPMESH;
    $request->registerTaskDefinitionRequest->requiresCompatibilities = [
        CompatibilityEnum::FARGATE,
    ];
    $request->registerTaskDefinitionRequest->runtimePlatform = new RuntimePlatform();
    $request->registerTaskDefinitionRequest->runtimePlatform->cpuArchitecture = CPUArchitectureEnum::X8664;
    $request->registerTaskDefinitionRequest->runtimePlatform->operatingSystemFamily = OSFamilyEnum::WINDOWS_SERVER2022_CORE;
    $request->registerTaskDefinitionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->registerTaskDefinitionRequest->taskRoleArn = 'quisquam';
    $request->registerTaskDefinitionRequest->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = RegisterTaskDefinitionXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_REGISTER_TASK_DEFINITION;

    $response = $sdk->sdk->registerTaskDefinition($request);

    if ($response->registerTaskDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runTask

<p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskOverride;
use \OpenAPI\OpenAPI\Models\Shared\ContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFile;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\InferenceAcceleratorOverride;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RunTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunTaskRequest();
    $request->runTaskRequest = new RunTaskRequest();
    $request->runTaskRequest->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->runTaskRequest->cluster = 'dignissimos';
    $request->runTaskRequest->count = 941378;
    $request->runTaskRequest->enableECSManagedTags = false;
    $request->runTaskRequest->enableExecuteCommand = false;
    $request->runTaskRequest->group = 'distinctio';
    $request->runTaskRequest->launchType = LaunchTypeEnum::EXTERNAL;
    $request->runTaskRequest->networkConfiguration = new NetworkConfiguration();
    $request->runTaskRequest->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->runTaskRequest->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->runTaskRequest->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'facilis',
        'vero',
        'ducimus',
    ];
    $request->runTaskRequest->networkConfiguration->awsvpcConfiguration->subnets = [
        'quibusdam',
        'illum',
    ];
    $request->runTaskRequest->overrides = new TaskOverride();
    $request->runTaskRequest->overrides->containerOverrides = [
        new ContainerOverride(),
    ];
    $request->runTaskRequest->overrides->cpu = 'natus';
    $request->runTaskRequest->overrides->ephemeralStorage = new EphemeralStorage();
    $request->runTaskRequest->overrides->ephemeralStorage->sizeInGiB = 773326;
    $request->runTaskRequest->overrides->executionRoleArn = 'aut';
    $request->runTaskRequest->overrides->inferenceAcceleratorOverrides = [
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
    ];
    $request->runTaskRequest->overrides->memory = 'exercitationem';
    $request->runTaskRequest->overrides->taskRoleArn = 'nulla';
    $request->runTaskRequest->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->runTaskRequest->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->runTaskRequest->platformVersion = 'maiores';
    $request->runTaskRequest->propagateTags = PropagateTagsEnum::NONE;
    $request->runTaskRequest->referenceId = 'iusto';
    $request->runTaskRequest->startedBy = 'eligendi';
    $request->runTaskRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->runTaskRequest->taskDefinition = 'alias';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = RunTaskXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_RUN_TASK;

    $response = $sdk->sdk->runTask($request);

    if ($response->runTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTask

<p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskOverride;
use \OpenAPI\OpenAPI\Models\Shared\ContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFile;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\InferenceAcceleratorOverride;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTaskRequest();
    $request->startTaskRequest = new StartTaskRequest();
    $request->startTaskRequest->cluster = 'magnam';
    $request->startTaskRequest->containerInstances = [
        'ex',
    ];
    $request->startTaskRequest->enableECSManagedTags = false;
    $request->startTaskRequest->enableExecuteCommand = false;
    $request->startTaskRequest->group = 'laudantium';
    $request->startTaskRequest->networkConfiguration = new NetworkConfiguration();
    $request->startTaskRequest->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->startTaskRequest->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->startTaskRequest->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'maiores',
    ];
    $request->startTaskRequest->networkConfiguration->awsvpcConfiguration->subnets = [
        'ex',
    ];
    $request->startTaskRequest->overrides = new TaskOverride();
    $request->startTaskRequest->overrides->containerOverrides = [
        new ContainerOverride(),
        new ContainerOverride(),
        new ContainerOverride(),
        new ContainerOverride(),
    ];
    $request->startTaskRequest->overrides->cpu = 'excepturi';
    $request->startTaskRequest->overrides->ephemeralStorage = new EphemeralStorage();
    $request->startTaskRequest->overrides->ephemeralStorage->sizeInGiB = 972920;
    $request->startTaskRequest->overrides->executionRoleArn = 'nostrum';
    $request->startTaskRequest->overrides->inferenceAcceleratorOverrides = [
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
        new InferenceAcceleratorOverride(),
    ];
    $request->startTaskRequest->overrides->memory = 'quisquam';
    $request->startTaskRequest->overrides->taskRoleArn = 'saepe';
    $request->startTaskRequest->propagateTags = PropagateTagsEnum::SERVICE;
    $request->startTaskRequest->referenceId = 'impedit';
    $request->startTaskRequest->startedBy = 'corporis';
    $request->startTaskRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->startTaskRequest->taskDefinition = 'aliquid';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = StartTaskXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_START_TASK;

    $response = $sdk->sdk->startTask($request);

    if ($response->startTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTask

<p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTaskRequest();
    $request->stopTaskRequest = new StopTaskRequest();
    $request->stopTaskRequest->cluster = 'minima';
    $request->stopTaskRequest->reason = 'eaque';
    $request->stopTaskRequest->task = 'a';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = StopTaskXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_STOP_TASK;

    $response = $sdk->sdk->stopTask($request);

    if ($response->stopTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitAttachmentStateChanges

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitAttachmentStateChangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubmitAttachmentStateChangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentStateChange;
use \OpenAPI\OpenAPI\Models\Operations\SubmitAttachmentStateChangesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitAttachmentStateChangesRequest();
    $request->submitAttachmentStateChangesRequest = new SubmitAttachmentStateChangesRequest();
    $request->submitAttachmentStateChangesRequest->attachments = [
        new AttachmentStateChange(),
        new AttachmentStateChange(),
        new AttachmentStateChange(),
        new AttachmentStateChange(),
    ];
    $request->submitAttachmentStateChangesRequest->cluster = 'inventore';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = SubmitAttachmentStateChangesXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_ATTACHMENT_STATE_CHANGES;

    $response = $sdk->sdk->submitAttachmentStateChanges($request);

    if ($response->submitAttachmentStateChangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitContainerStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitContainerStateChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubmitContainerStateChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkBinding;
use \OpenAPI\OpenAPI\Models\Shared\TransportProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubmitContainerStateChangeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitContainerStateChangeRequest();
    $request->submitContainerStateChangeRequest = new SubmitContainerStateChangeRequest();
    $request->submitContainerStateChangeRequest->cluster = 'autem';
    $request->submitContainerStateChangeRequest->containerName = 'nobis';
    $request->submitContainerStateChangeRequest->exitCode = 557369;
    $request->submitContainerStateChangeRequest->networkBindings = [
        new NetworkBinding(),
        new NetworkBinding(),
        new NetworkBinding(),
        new NetworkBinding(),
    ];
    $request->submitContainerStateChangeRequest->reason = 'nulla';
    $request->submitContainerStateChangeRequest->runtimeId = 'voluptas';
    $request->submitContainerStateChangeRequest->status = 'libero';
    $request->submitContainerStateChangeRequest->task = 'quasi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = SubmitContainerStateChangeXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_CONTAINER_STATE_CHANGE;

    $response = $sdk->sdk->submitContainerStateChange($request);

    if ($response->submitContainerStateChangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitTaskStateChange

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitTaskStateChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubmitTaskStateChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentStateChange;
use \OpenAPI\OpenAPI\Models\Shared\ContainerStateChange;
use \OpenAPI\OpenAPI\Models\Shared\NetworkBinding;
use \OpenAPI\OpenAPI\Models\Shared\TransportProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedAgentStateChange;
use \OpenAPI\OpenAPI\Models\Shared\ManagedAgentNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubmitTaskStateChangeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitTaskStateChangeRequest();
    $request->submitTaskStateChangeRequest = new SubmitTaskStateChangeRequest();
    $request->submitTaskStateChangeRequest->attachments = [
        new AttachmentStateChange(),
        new AttachmentStateChange(),
    ];
    $request->submitTaskStateChangeRequest->cluster = 'eius';
    $request->submitTaskStateChangeRequest->containers = [
        new ContainerStateChange(),
        new ContainerStateChange(),
    ];
    $request->submitTaskStateChangeRequest->executionStoppedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-23T12:34:06.790Z');
    $request->submitTaskStateChangeRequest->managedAgents = [
        new ManagedAgentStateChange(),
        new ManagedAgentStateChange(),
        new ManagedAgentStateChange(),
    ];
    $request->submitTaskStateChangeRequest->pullStartedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T02:19:15.622Z');
    $request->submitTaskStateChangeRequest->pullStoppedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-24T13:07:28.067Z');
    $request->submitTaskStateChangeRequest->reason = 'eum';
    $request->submitTaskStateChangeRequest->status = 'suscipit';
    $request->submitTaskStateChangeRequest->task = 'assumenda';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = SubmitTaskStateChangeXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_TASK_STATE_CHANGE;

    $response = $sdk->sdk->submitTaskStateChange($request);

    if ($response->submitTaskStateChangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.

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
    $request->tagResourceRequest->resourceArn = 'neque';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes specified tags from a resource.

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
    $request->untagResourceRequest->resourceArn = 'cupiditate';
    $request->untagResourceRequest->tagKeys = [
        'tempora',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCapacityProvider

Modifies the parameters for a capacity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingGroupProviderUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScaling;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScalingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedTerminationProtectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCapacityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCapacityProviderRequest();
    $request->updateCapacityProviderRequest = new UpdateCapacityProviderRequest();
    $request->updateCapacityProviderRequest->autoScalingGroupProvider = new AutoScalingGroupProviderUpdate();
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling = new ManagedScaling();
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling->instanceWarmupPeriod = 44612;
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling->maximumScalingStepSize = 715179;
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling->minimumScalingStepSize = 799796;
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling->status = ManagedScalingStatusEnum::ENABLED;
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedScaling->targetCapacity = 76956;
    $request->updateCapacityProviderRequest->autoScalingGroupProvider->managedTerminationProtection = ManagedTerminationProtectionEnum::ENABLED;
    $request->updateCapacityProviderRequest->name = 'Sheldon Hackett';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = UpdateCapacityProviderXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CAPACITY_PROVIDER;

    $response = $sdk->sdk->updateCapacityProvider($request);

    if ($response->updateCapacityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

Updates the cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandLoggingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterServiceConnectDefaultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSetting;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->updateClusterRequest = new UpdateClusterRequest();
    $request->updateClusterRequest->cluster = 'eum';
    $request->updateClusterRequest->configuration = new ClusterConfiguration();
    $request->updateClusterRequest->configuration->executeCommandConfiguration = new ExecuteCommandConfiguration();
    $request->updateClusterRequest->configuration->executeCommandConfiguration->kmsKeyId = 'quas';
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration = new ExecuteCommandLogConfiguration();
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration->cloudWatchEncryptionEnabled = false;
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration->cloudWatchLogGroupName = 'praesentium';
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3BucketName = 'consequuntur';
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3EncryptionEnabled = false;
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logConfiguration->s3KeyPrefix = 'deleniti';
    $request->updateClusterRequest->configuration->executeCommandConfiguration->logging = ExecuteCommandLoggingEnum::NONE;
    $request->updateClusterRequest->serviceConnectDefaults = new ClusterServiceConnectDefaultsRequest();
    $request->updateClusterRequest->serviceConnectDefaults->namespace = 'fuga';
    $request->updateClusterRequest->settings = [
        new ClusterSetting(),
        new ClusterSetting(),
        new ClusterSetting(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = UpdateClusterXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CLUSTER;

    $response = $sdk->sdk->updateCluster($request);

    if ($response->updateClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClusterSettings

Modifies the settings to use for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSetting;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSettingNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterSettingsRequest();
    $request->updateClusterSettingsRequest = new UpdateClusterSettingsRequest();
    $request->updateClusterSettingsRequest->cluster = 'consequuntur';
    $request->updateClusterSettingsRequest->settings = [
        new ClusterSetting(),
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = UpdateClusterSettingsXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CLUSTER_SETTINGS;

    $response = $sdk->sdk->updateClusterSettings($request);

    if ($response->updateClusterSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContainerAgent

<p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContainerAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerAgentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContainerAgentRequest();
    $request->updateContainerAgentRequest = new UpdateContainerAgentRequest();
    $request->updateContainerAgentRequest->cluster = 'accusamus';
    $request->updateContainerAgentRequest->containerInstance = 'veritatis';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = UpdateContainerAgentXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CONTAINER_AGENT;

    $response = $sdk->sdk->updateContainerAgent($request);

    if ($response->updateContainerAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContainerInstancesState

<p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerInstancesStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContainerInstancesStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerInstancesStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContainerInstancesStateRequest();
    $request->updateContainerInstancesStateRequest = new UpdateContainerInstancesStateRequest();
    $request->updateContainerInstancesStateRequest->cluster = 'vel';
    $request->updateContainerInstancesStateRequest->containerInstances = [
        'molestiae',
        'rerum',
        'occaecati',
    ];
    $request->updateContainerInstancesStateRequest->status = ContainerInstanceStatusEnum::DRAINING;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = UpdateContainerInstancesStateXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CONTAINER_INSTANCES_STATE;

    $response = $sdk->sdk->updateContainerInstancesState($request);

    if ($response->updateContainerInstancesStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

<p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties. If you specified a custom role when you created the service, Amazon ECS automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p> <code>loadBalancers,</code> </p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentAlarms;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentCircuitBreaker;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancer;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDriverEnum;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectService;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConnectClientAlias;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRegistry;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->updateServiceRequest = new UpdateServiceRequest();
    $request->updateServiceRequest->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
    ];
    $request->updateServiceRequest->cluster = 'consequatur';
    $request->updateServiceRequest->deploymentConfiguration = new DeploymentConfiguration();
    $request->updateServiceRequest->deploymentConfiguration->alarms = new DeploymentAlarms();
    $request->updateServiceRequest->deploymentConfiguration->alarms->alarmNames = [
        'quaerat',
        'sapiente',
        'consectetur',
        'esse',
    ];
    $request->updateServiceRequest->deploymentConfiguration->alarms->enable = false;
    $request->updateServiceRequest->deploymentConfiguration->alarms->rollback = false;
    $request->updateServiceRequest->deploymentConfiguration->deploymentCircuitBreaker = new DeploymentCircuitBreaker();
    $request->updateServiceRequest->deploymentConfiguration->deploymentCircuitBreaker->enable = false;
    $request->updateServiceRequest->deploymentConfiguration->deploymentCircuitBreaker->rollback = false;
    $request->updateServiceRequest->deploymentConfiguration->maximumPercent = 503427;
    $request->updateServiceRequest->deploymentConfiguration->minimumHealthyPercent = 590984;
    $request->updateServiceRequest->desiredCount = 953722;
    $request->updateServiceRequest->enableECSManagedTags = false;
    $request->updateServiceRequest->enableExecuteCommand = false;
    $request->updateServiceRequest->forceNewDeployment = false;
    $request->updateServiceRequest->healthCheckGracePeriodSeconds = 857723;
    $request->updateServiceRequest->loadBalancers = [
        new LoadBalancer(),
        new LoadBalancer(),
        new LoadBalancer(),
    ];
    $request->updateServiceRequest->networkConfiguration = new NetworkConfiguration();
    $request->updateServiceRequest->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->updateServiceRequest->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->updateServiceRequest->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'a',
    ];
    $request->updateServiceRequest->networkConfiguration->awsvpcConfiguration->subnets = [
        'sint',
        'pariatur',
        'possimus',
    ];
    $request->updateServiceRequest->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->updateServiceRequest->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->updateServiceRequest->platformVersion = 'asperiores';
    $request->updateServiceRequest->propagateTags = PropagateTagsEnum::NONE;
    $request->updateServiceRequest->service = 'veritatis';
    $request->updateServiceRequest->serviceConnectConfiguration = new ServiceConnectConfiguration();
    $request->updateServiceRequest->serviceConnectConfiguration->enabled = false;
    $request->updateServiceRequest->serviceConnectConfiguration->logConfiguration = new LogConfiguration();
    $request->updateServiceRequest->serviceConnectConfiguration->logConfiguration->logDriver = LogDriverEnum::SYSLOG;
    $request->updateServiceRequest->serviceConnectConfiguration->logConfiguration->options = [
        'similique' => 'culpa',
    ];
    $request->updateServiceRequest->serviceConnectConfiguration->logConfiguration->secretOptions = [
        new Secret(),
        new Secret(),
    ];
    $request->updateServiceRequest->serviceConnectConfiguration->namespace = 'tenetur';
    $request->updateServiceRequest->serviceConnectConfiguration->services = [
        new ServiceConnectService(),
    ];
    $request->updateServiceRequest->serviceRegistries = [
        new ServiceRegistry(),
        new ServiceRegistry(),
        new ServiceRegistry(),
        new ServiceRegistry(),
    ];
    $request->updateServiceRequest->taskDefinition = 'vel';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = UpdateServiceXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_SERVICE;

    $response = $sdk->sdk->updateService($request);

    if ($response->updateServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServicePrimaryTaskSet

Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServicePrimaryTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServicePrimaryTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServicePrimaryTaskSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServicePrimaryTaskSetRequest();
    $request->updateServicePrimaryTaskSetRequest = new UpdateServicePrimaryTaskSetRequest();
    $request->updateServicePrimaryTaskSetRequest->cluster = 'sapiente';
    $request->updateServicePrimaryTaskSetRequest->primaryTaskSet = 'dicta';
    $request->updateServicePrimaryTaskSetRequest->service = 'ullam';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = UpdateServicePrimaryTaskSetXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_SERVICE_PRIMARY_TASK_SET;

    $response = $sdk->sdk->updateServicePrimaryTaskSet($request);

    if ($response->updateServicePrimaryTaskSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskProtection

<p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTaskProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskProtectionRequest();
    $request->updateTaskProtectionRequest = new UpdateTaskProtectionRequest();
    $request->updateTaskProtectionRequest->cluster = 'ex';
    $request->updateTaskProtectionRequest->expiresInMinutes = 536275;
    $request->updateTaskProtectionRequest->protectionEnabled = false;
    $request->updateTaskProtectionRequest->tasks = [
        'dolorum',
        'architecto',
        'omnis',
        'tenetur',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = UpdateTaskProtectionXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_TASK_PROTECTION;

    $response = $sdk->sdk->updateTaskProtection($request);

    if ($response->updateTaskProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskSet

Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTaskSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Scale;
use \OpenAPI\OpenAPI\Models\Shared\ScaleUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskSetRequest();
    $request->updateTaskSetRequest = new UpdateTaskSetRequest();
    $request->updateTaskSetRequest->cluster = 'consectetur';
    $request->updateTaskSetRequest->scale = new Scale();
    $request->updateTaskSetRequest->scale->unit = ScaleUnitEnum::PERCENT;
    $request->updateTaskSetRequest->scale->value = 2371.73;
    $request->updateTaskSetRequest->service = 'iste';
    $request->updateTaskSetRequest->taskSet = 'temporibus';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = UpdateTaskSetXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_TASK_SET;

    $response = $sdk->sdk->updateTaskSet($request);

    if ($response->updateTaskSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
