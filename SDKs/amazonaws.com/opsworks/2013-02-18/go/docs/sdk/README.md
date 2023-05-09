# SDK

## Overview

<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-3.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/opsworks/>
### Available Operations

* [AssignInstance](#assigninstance) - <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [AssignVolume](#assignvolume) - <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [AssociateElasticIP](#associateelasticip) - <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [AttachElasticLoadBalancer](#attachelasticloadbalancer) - <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CloneStack](#clonestack) - <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateApp](#createapp) - <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateDeployment](#createdeployment) - <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateInstance](#createinstance) - <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateLayer](#createlayer) - <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateStack](#createstack) - <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [CreateUserProfile](#createuserprofile) - <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeleteApp](#deleteapp) - <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeleteInstance](#deleteinstance) - <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeleteLayer](#deletelayer) - <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeleteStack](#deletestack) - <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeleteUserProfile](#deleteuserprofile) - <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeregisterEcsCluster](#deregisterecscluster) - <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
* [DeregisterElasticIP](#deregisterelasticip) - <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeregisterInstance](#deregisterinstance) - <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeregisterRdsDbInstance](#deregisterrdsdbinstance) - <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DeregisterVolume](#deregistervolume) - <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeAgentVersions](#describeagentversions) - Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.
* [DescribeApps](#describeapps) - <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeCommands](#describecommands) - <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeDeployments](#describedeployments) - <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeEcsClusters](#describeecsclusters) - <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [DescribeElasticIps](#describeelasticips) - <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeElasticLoadBalancers](#describeelasticloadbalancers) - <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeInstances](#describeinstances) - <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeLayers](#describelayers) - <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeLoadBasedAutoScaling](#describeloadbasedautoscaling) - <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeMyUserProfile](#describemyuserprofile) - <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeOperatingSystems](#describeoperatingsystems) - Describes the operating systems that are supported by AWS OpsWorks Stacks.
* [DescribePermissions](#describepermissions) - <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeRaidArrays](#describeraidarrays) - <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeRdsDbInstances](#describerdsdbinstances) - <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [DescribeServiceErrors](#describeserviceerrors) - <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [DescribeStackProvisioningParameters](#describestackprovisioningparameters) - <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeStackSummary](#describestacksummary) - <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeStacks](#describestacks) - <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeTimeBasedAutoScaling](#describetimebasedautoscaling) - <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeUserProfiles](#describeuserprofiles) - <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DescribeVolumes](#describevolumes) - <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DetachElasticLoadBalancer](#detachelasticloadbalancer) - <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [DisassociateElasticIP](#disassociateelasticip) - <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [GetHostnameSuggestion](#gethostnamesuggestion) - <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [GrantAccess](#grantaccess) - <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
* [ListTags](#listtags) - Returns a list of tags that are applied to the specified stack or layer.
* [RebootInstance](#rebootinstance) - <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [RegisterEcsCluster](#registerecscluster) - <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
* [RegisterElasticIP](#registerelasticip) - <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [RegisterInstance](#registerinstance) - <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [RegisterRdsDbInstance](#registerrdsdbinstance) - <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [RegisterVolume](#registervolume) - <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [SetLoadBasedAutoScaling](#setloadbasedautoscaling) - <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [SetPermission](#setpermission) - <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [SetTimeBasedAutoScaling](#settimebasedautoscaling) - <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [StartInstance](#startinstance) - <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [StartStack](#startstack) - <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [StopInstance](#stopinstance) - <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [StopStack](#stopstack) - <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [TagResource](#tagresource) - Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.
* [UnassignInstance](#unassigninstance) - <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UnassignVolume](#unassignvolume) - <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UntagResource](#untagresource) - Removes tags from a specified stack or layer.
* [UpdateApp](#updateapp) - <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateElasticIP](#updateelasticip) - <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateInstance](#updateinstance) - <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateLayer](#updatelayer) - <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateMyUserProfile](#updatemyuserprofile) - <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateRdsDbInstance](#updaterdsdbinstance) - <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateStack](#updatestack) - <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateUserProfile](#updateuserprofile) - <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [UpdateVolume](#updatevolume) - <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

## AssignInstance

<p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssignInstance(ctx, operations.AssignInstanceRequest{
        AssignInstanceRequest: shared.AssignInstanceRequest{
            InstanceID: "iure",
            LayerIds: []string{
                "debitis",
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.AssignInstanceXAmzTargetEnumOpsWorks20130218AssignInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssignVolume

<p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssignVolume(ctx, operations.AssignVolumeRequest{
        AssignVolumeRequest: shared.AssignVolumeRequest{
            InstanceID: sdk.String("iusto"),
            VolumeID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AssignVolumeXAmzTargetEnumOpsWorks20130218AssignVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssociateElasticIP

<p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateElasticIP(ctx, operations.AssociateElasticIPRequest{
        AssociateElasticIPRequest: shared.AssociateElasticIPRequest{
            ElasticIP: "perferendis",
            InstanceID: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.AssociateElasticIPXAmzTargetEnumOpsWorks20130218AssociateElasticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AttachElasticLoadBalancer

<p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AttachElasticLoadBalancer(ctx, operations.AttachElasticLoadBalancerRequest{
        AttachElasticLoadBalancerRequest: shared.AttachElasticLoadBalancerRequest{
            ElasticLoadBalancerName: "molestiae",
            LayerID: "quod",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.AttachElasticLoadBalancerXAmzTargetEnumOpsWorks20130218AttachElasticLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CloneStack

<p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CloneStack(ctx, operations.CloneStackRequest{
        CloneStackRequest: shared.CloneStackRequest{
            AgentVersion: sdk.String("officia"),
            Attributes: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            ChefConfiguration: &shared.ChefConfiguration{
                BerkshelfVersion: sdk.String("commodi"),
                ManageBerkshelf: sdk.Bool(false),
            },
            CloneAppIds: []string{
                "modi",
                "qui",
            },
            ClonePermissions: sdk.Bool(false),
            ConfigurationManager: &shared.StackConfigurationManager{
                Name: sdk.String("Jonathon Klocko"),
                Version: sdk.String("aspernatur"),
            },
            CustomCookbooksSource: &shared.Source{
                Password: sdk.String("perferendis"),
                Revision: sdk.String("ad"),
                SSHKey: sdk.String("natus"),
                Type: shared.SourceTypeEnumGit.ToPointer(),
                URL: sdk.String("iste"),
                Username: sdk.String("Dameon_Morissette"),
            },
            CustomJSON: sdk.String("saepe"),
            DefaultAvailabilityZone: sdk.String("fuga"),
            DefaultInstanceProfileArn: sdk.String("in"),
            DefaultOs: sdk.String("corporis"),
            DefaultRootDeviceType: shared.RootDeviceTypeEnumInstanceStore.ToPointer(),
            DefaultSSHKeyName: sdk.String("iure"),
            DefaultSubnetID: sdk.String("saepe"),
            HostnameTheme: sdk.String("quidem"),
            Name: sdk.String("Brenda Wisozk"),
            Region: sdk.String("laborum"),
            ServiceRoleArn: "dolores",
            SourceStackID: "dolorem",
            UseCustomCookbooks: sdk.Bool(false),
            UseOpsworksSecurityGroups: sdk.Bool(false),
            VpcID: sdk.String("corporis"),
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CloneStackXAmzTargetEnumOpsWorks20130218CloneStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneStackResult != nil {
        // handle response
    }
}
```

## CreateApp

<p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            AppSource: &shared.Source{
                Password: sdk.String("accusantium"),
                Revision: sdk.String("iure"),
                SSHKey: sdk.String("culpa"),
                Type: shared.SourceTypeEnumS3.ToPointer(),
                URL: sdk.String("sapiente"),
                Username: sdk.String("Bart63"),
            },
            Attributes: map[string]string{
                "repellat": "mollitia",
            },
            DataSources: []shared.DataSource{
                shared.DataSource{
                    Arn: sdk.String("numquam"),
                    DatabaseName: sdk.String("commodi"),
                    Type: sdk.String("quam"),
                },
                shared.DataSource{
                    Arn: sdk.String("molestiae"),
                    DatabaseName: sdk.String("velit"),
                    Type: sdk.String("error"),
                },
                shared.DataSource{
                    Arn: sdk.String("quia"),
                    DatabaseName: sdk.String("quis"),
                    Type: sdk.String("vitae"),
                },
            },
            Description: sdk.String("laborum"),
            Domains: []string{
                "enim",
                "odit",
                "quo",
            },
            EnableSsl: sdk.Bool(false),
            Environment: []shared.EnvironmentVariable{
                shared.EnvironmentVariable{
                    Key: "tenetur",
                    Secure: sdk.Bool(false),
                    Value: "ipsam",
                },
            },
            Name: "Miss Rufus Ankunding",
            Shortname: sdk.String("laborum"),
            SslConfiguration: &shared.SslConfiguration{
                Certificate: "quasi",
                Chain: sdk.String("reiciendis"),
                PrivateKey: "voluptatibus",
            },
            StackID: "vero",
            Type: shared.AppTypeEnumPhp,
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CreateAppXAmzTargetEnumOpsWorks20130218CreateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResult != nil {
        // handle response
    }
}
```

## CreateDeployment

<p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        CreateDeploymentRequest: shared.CreateDeploymentRequest{
            AppID: sdk.String("doloremque"),
            Command: shared.DeploymentCommand{
                Args: map[string][]string{
                    "ut": []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    "dicta": []string{
                        "enim",
                        "accusamus",
                        "commodi",
                    },
                },
                Name: shared.DeploymentCommandNameEnumUndeploy,
            },
            Comment: sdk.String("quae"),
            CustomJSON: sdk.String("ipsum"),
            InstanceIds: []string{
                "molestias",
                "excepturi",
                "pariatur",
            },
            LayerIds: []string{
                "praesentium",
                "rem",
            },
            StackID: "voluptates",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.CreateDeploymentXAmzTargetEnumOpsWorks20130218CreateDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResult != nil {
        // handle response
    }
}
```

## CreateInstance

<p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateInstance(ctx, operations.CreateInstanceRequest{
        CreateInstanceRequest: shared.CreateInstanceRequest{
            AgentVersion: sdk.String("consequatur"),
            AmiID: sdk.String("est"),
            Architecture: shared.ArchitectureEnumI386.ToPointer(),
            AutoScalingType: shared.AutoScalingTypeEnumLoad.ToPointer(),
            AvailabilityZone: sdk.String("deserunt"),
            BlockDeviceMappings: []shared.BlockDeviceMapping{
                shared.BlockDeviceMapping{
                    DeviceName: sdk.String("quibusdam"),
                    Ebs: &shared.EbsBlockDevice{
                        DeleteOnTermination: sdk.Bool(false),
                        Iops: sdk.Int64(289406),
                        SnapshotID: sdk.String("modi"),
                        VolumeSize: sdk.Int64(183191),
                        VolumeType: shared.VolumeTypeEnumIo1.ToPointer(),
                    },
                    NoDevice: sdk.String("cupiditate"),
                    VirtualName: sdk.String("quos"),
                },
                shared.BlockDeviceMapping{
                    DeviceName: sdk.String("perferendis"),
                    Ebs: &shared.EbsBlockDevice{
                        DeleteOnTermination: sdk.Bool(false),
                        Iops: sdk.Int64(164940),
                        SnapshotID: sdk.String("assumenda"),
                        VolumeSize: sdk.Int64(369808),
                        VolumeType: shared.VolumeTypeEnumGp2.ToPointer(),
                    },
                    NoDevice: sdk.String("fugit"),
                    VirtualName: sdk.String("dolorum"),
                },
                shared.BlockDeviceMapping{
                    DeviceName: sdk.String("excepturi"),
                    Ebs: &shared.EbsBlockDevice{
                        DeleteOnTermination: sdk.Bool(false),
                        Iops: sdk.Int64(270008),
                        SnapshotID: sdk.String("facilis"),
                        VolumeSize: sdk.Int64(735194),
                        VolumeType: shared.VolumeTypeEnumGp2.ToPointer(),
                    },
                    NoDevice: sdk.String("delectus"),
                    VirtualName: sdk.String("eum"),
                },
            },
            EbsOptimized: sdk.Bool(false),
            Hostname: sdk.String("excellent-roll.name"),
            InstallUpdatesOnBoot: sdk.Bool(false),
            InstanceType: "aliquid",
            LayerIds: []string{
                "necessitatibus",
                "sint",
                "officia",
            },
            Os: sdk.String("dolor"),
            RootDeviceType: shared.RootDeviceTypeEnumInstanceStore.ToPointer(),
            SSHKeyName: sdk.String("a"),
            StackID: "dolorum",
            SubnetID: sdk.String("in"),
            Tenancy: sdk.String("in"),
            VirtualizationType: sdk.String("illum"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.CreateInstanceXAmzTargetEnumOpsWorks20130218CreateInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstanceResult != nil {
        // handle response
    }
}
```

## CreateLayer

<p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateLayer(ctx, operations.CreateLayerRequest{
        CreateLayerRequest: shared.CreateLayerRequest{
            Attributes: map[string]string{
                "laborum": "accusamus",
                "non": "occaecati",
            },
            AutoAssignElasticIps: sdk.Bool(false),
            AutoAssignPublicIps: sdk.Bool(false),
            CloudWatchLogsConfiguration: &shared.CloudWatchLogsConfiguration{
                Enabled: sdk.Bool(false),
                LogStreams: []shared.CloudWatchLogsLogStream{
                    shared.CloudWatchLogsLogStream{
                        BatchCount: sdk.Int64(881736),
                        BatchSize: sdk.Int64(965417),
                        BufferDuration: sdk.Int64(692532),
                        DatetimeFormat: sdk.String("provident"),
                        Encoding: shared.CloudWatchLogsEncodingEnumIso885913.ToPointer(),
                        File: sdk.String("id"),
                        FileFingerprintLines: sdk.String("blanditiis"),
                        InitialPosition: shared.CloudWatchLogsInitialPositionEnumEndOfFile.ToPointer(),
                        LogGroupName: sdk.String("sapiente"),
                        MultiLineStartPattern: sdk.String("amet"),
                        TimeZone: shared.CloudWatchLogsTimeZoneEnumUtc.ToPointer(),
                    },
                    shared.CloudWatchLogsLogStream{
                        BatchCount: sdk.Int64(394869),
                        BatchSize: sdk.Int64(423855),
                        BufferDuration: sdk.Int64(618809),
                        DatetimeFormat: sdk.String("omnis"),
                        Encoding: shared.CloudWatchLogsEncodingEnumEucJisx0213.ToPointer(),
                        File: sdk.String("perferendis"),
                        FileFingerprintLines: sdk.String("nihil"),
                        InitialPosition: shared.CloudWatchLogsInitialPositionEnumStartOfFile.ToPointer(),
                        LogGroupName: sdk.String("distinctio"),
                        MultiLineStartPattern: sdk.String("id"),
                        TimeZone: shared.CloudWatchLogsTimeZoneEnumLocal.ToPointer(),
                    },
                },
            },
            CustomInstanceProfileArn: sdk.String("labore"),
            CustomJSON: sdk.String("suscipit"),
            CustomRecipes: &shared.Recipes{
                Configure: []string{
                    "nobis",
                    "eum",
                    "vero",
                },
                Deploy: []string{
                    "architecto",
                },
                Setup: []string{
                    "et",
                    "excepturi",
                },
                Shutdown: []string{
                    "provident",
                    "quos",
                },
                Undeploy: []string{
                    "accusantium",
                    "mollitia",
                    "reiciendis",
                },
            },
            CustomSecurityGroupIds: []string{
                "ad",
                "eum",
                "dolor",
            },
            EnableAutoHealing: sdk.Bool(false),
            InstallUpdatesOnBoot: sdk.Bool(false),
            LifecycleEventConfiguration: &shared.LifecycleEventConfiguration{
                Shutdown: &shared.ShutdownEventConfiguration{
                    DelayUntilElbConnectionsDrained: sdk.Bool(false),
                    ExecutionTimeout: sdk.Int64(896547),
                },
            },
            Name: "Vivian Boyle",
            Packages: []string{
                "eius",
                "maxime",
                "deleniti",
                "facilis",
            },
            Shortname: "in",
            StackID: "architecto",
            Type: shared.LayerTypeEnumEcsCluster,
            UseEbsOptimizedInstances: sdk.Bool(false),
            VolumeConfigurations: []shared.VolumeConfiguration{
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(352312),
                    MountPoint: "expedita",
                    NumberOfDisks: 469249,
                    RaidLevel: sdk.Int64(998848),
                    Size: 841140,
                    VolumeType: sdk.String("sed"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(904648),
                    MountPoint: "pariatur",
                    NumberOfDisks: 37559,
                    RaidLevel: sdk.Int64(162493),
                    Size: 508315,
                    VolumeType: sdk.String("natus"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(166847),
                    MountPoint: "sunt",
                    NumberOfDisks: 779051,
                    RaidLevel: sdk.Int64(848009),
                    Size: 864934,
                    VolumeType: sdk.String("maxime"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(411397),
                    MountPoint: "excepturi",
                    NumberOfDisks: 139972,
                    RaidLevel: sdk.Int64(407183),
                    Size: 33222,
                    VolumeType: sdk.String("ab"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.CreateLayerXAmzTargetEnumOpsWorks20130218CreateLayer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLayerResult != nil {
        // handle response
    }
}
```

## CreateStack

<p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateStack(ctx, operations.CreateStackRequest{
        CreateStackRequest: shared.CreateStackRequest{
            AgentVersion: sdk.String("pariatur"),
            Attributes: map[string]string{
                "voluptatibus": "perferendis",
                "fugiat": "amet",
            },
            ChefConfiguration: &shared.ChefConfiguration{
                BerkshelfVersion: sdk.String("aut"),
                ManageBerkshelf: sdk.Bool(false),
            },
            ConfigurationManager: &shared.StackConfigurationManager{
                Name: sdk.String("Lewis Welch"),
                Version: sdk.String("dolores"),
            },
            CustomCookbooksSource: &shared.Source{
                Password: sdk.String("quis"),
                Revision: sdk.String("totam"),
                SSHKey: sdk.String("dignissimos"),
                Type: shared.SourceTypeEnumGit.ToPointer(),
                URL: sdk.String("quis"),
                Username: sdk.String("Cody17"),
            },
            CustomJSON: sdk.String("minus"),
            DefaultAvailabilityZone: sdk.String("quam"),
            DefaultInstanceProfileArn: "dolor",
            DefaultOs: sdk.String("vero"),
            DefaultRootDeviceType: shared.RootDeviceTypeEnumEbs.ToPointer(),
            DefaultSSHKeyName: sdk.String("hic"),
            DefaultSubnetID: sdk.String("recusandae"),
            HostnameTheme: sdk.String("omnis"),
            Name: "Freddie Bartoletti",
            Region: "blanditiis",
            ServiceRoleArn: "error",
            UseCustomCookbooks: sdk.Bool(false),
            UseOpsworksSecurityGroups: sdk.Bool(false),
            VpcID: sdk.String("eaque"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.CreateStackXAmzTargetEnumOpsWorks20130218CreateStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStackResult != nil {
        // handle response
    }
}
```

## CreateUserProfile

<p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            AllowSelfManagement: sdk.Bool(false),
            IamUserArn: "dolorum",
            SSHPublicKey: sdk.String("deleniti"),
            SSHUsername: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.CreateUserProfileXAmzTargetEnumOpsWorks20130218CreateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserProfileResult != nil {
        // handle response
    }
}
```

## DeleteApp

<p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            AppID: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DeleteAppXAmzTargetEnumOpsWorks20130218DeleteApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInstance

<p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteInstance(ctx, operations.DeleteInstanceRequest{
        DeleteInstanceRequest: shared.DeleteInstanceRequest{
            DeleteElasticIP: sdk.Bool(false),
            DeleteVolumes: sdk.Bool(false),
            InstanceID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DeleteInstanceXAmzTargetEnumOpsWorks20130218DeleteInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLayer

<p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLayer(ctx, operations.DeleteLayerRequest{
        DeleteLayerRequest: shared.DeleteLayerRequest{
            LayerID: "ipsa",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DeleteLayerXAmzTargetEnumOpsWorks20130218DeleteLayer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStack

<p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStack(ctx, operations.DeleteStackRequest{
        DeleteStackRequest: shared.DeleteStackRequest{
            StackID: "natus",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteStackXAmzTargetEnumOpsWorks20130218DeleteStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserProfile

<p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            IamUserArn: "iusto",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteUserProfileXAmzTargetEnumOpsWorks20130218DeleteUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterEcsCluster

<p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterEcsCluster(ctx, operations.DeregisterEcsClusterRequest{
        DeregisterEcsClusterRequest: shared.DeregisterEcsClusterRequest{
            EcsClusterArn: "nihil",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeregisterEcsClusterXAmzTargetEnumOpsWorks20130218DeregisterEcsCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterElasticIP

<p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterElasticIP(ctx, operations.DeregisterElasticIPRequest{
        DeregisterElasticIPRequest: shared.DeregisterElasticIPRequest{
            ElasticIP: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeregisterElasticIPXAmzTargetEnumOpsWorks20130218DeregisterElasticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterInstance

<p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterInstance(ctx, operations.DeregisterInstanceRequest{
        DeregisterInstanceRequest: shared.DeregisterInstanceRequest{
            InstanceID: "minima",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.DeregisterInstanceXAmzTargetEnumOpsWorks20130218DeregisterInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterRdsDbInstance

<p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterRdsDbInstance(ctx, operations.DeregisterRdsDbInstanceRequest{
        DeregisterRdsDbInstanceRequest: shared.DeregisterRdsDbInstanceRequest{
            RdsDbInstanceArn: "vel",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.DeregisterRdsDbInstanceXAmzTargetEnumOpsWorks20130218DeregisterRdsDbInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterVolume

<p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterVolume(ctx, operations.DeregisterVolumeRequest{
        DeregisterVolumeRequest: shared.DeregisterVolumeRequest{
            VolumeID: "iusto",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DeregisterVolumeXAmzTargetEnumOpsWorks20130218DeregisterVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAgentVersions

Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAgentVersions(ctx, operations.DescribeAgentVersionsRequest{
        DescribeAgentVersionsRequest: shared.DescribeAgentVersionsRequest{
            ConfigurationManager: &shared.StackConfigurationManager{
                Name: sdk.String("Florence Will"),
                Version: sdk.String("sit"),
            },
            StackID: sdk.String("expedita"),
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.DescribeAgentVersionsXAmzTargetEnumOpsWorks20130218DescribeAgentVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAgentVersionsResult != nil {
        // handle response
    }
}
```

## DescribeApps

<p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeApps(ctx, operations.DescribeAppsRequest{
        DescribeAppsRequest: shared.DescribeAppsRequest{
            AppIds: []string{
                "incidunt",
            },
            StackID: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeAppsXAmzTargetEnumOpsWorks20130218DescribeApps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppsResult != nil {
        // handle response
    }
}
```

## DescribeCommands

<p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCommands(ctx, operations.DescribeCommandsRequest{
        DescribeCommandsRequest: shared.DescribeCommandsRequest{
            CommandIds: []string{
                "aspernatur",
                "dolores",
            },
            DeploymentID: sdk.String("distinctio"),
            InstanceID: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DescribeCommandsXAmzTargetEnumOpsWorks20130218DescribeCommands,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCommandsResult != nil {
        // handle response
    }
}
```

## DescribeDeployments

<p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDeployments(ctx, operations.DescribeDeploymentsRequest{
        DescribeDeploymentsRequest: shared.DescribeDeploymentsRequest{
            AppID: sdk.String("magni"),
            DeploymentIds: []string{
                "sunt",
                "ullam",
            },
            StackID: sdk.String("nam"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DescribeDeploymentsXAmzTargetEnumOpsWorks20130218DescribeDeployments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeploymentsResult != nil {
        // handle response
    }
}
```

## DescribeEcsClusters

<p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEcsClusters(ctx, operations.DescribeEcsClustersRequest{
        DescribeEcsClustersRequest: shared.DescribeEcsClustersRequest{
            EcsClusterArns: []string{
                "veritatis",
            },
            MaxResults: sdk.Int64(749255),
            NextToken: sdk.String("quos"),
            StackID: sdk.String("tempore"),
        },
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("aperiam"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DescribeEcsClustersXAmzTargetEnumOpsWorks20130218DescribeEcsClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEcsClustersResult != nil {
        // handle response
    }
}
```

## DescribeElasticIps

<p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeElasticIps(ctx, operations.DescribeElasticIpsRequest{
        DescribeElasticIpsRequest: shared.DescribeElasticIpsRequest{
            InstanceID: sdk.String("quae"),
            Ips: []string{
                "quas",
            },
            StackID: sdk.String("itaque"),
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeElasticIpsXAmzTargetEnumOpsWorks20130218DescribeElasticIps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeElasticIpsResult != nil {
        // handle response
    }
}
```

## DescribeElasticLoadBalancers

<p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeElasticLoadBalancers(ctx, operations.DescribeElasticLoadBalancersRequest{
        DescribeElasticLoadBalancersRequest: shared.DescribeElasticLoadBalancersRequest{
            LayerIds: []string{
                "qui",
                "quae",
                "laudantium",
            },
            StackID: sdk.String("odio"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeElasticLoadBalancersXAmzTargetEnumOpsWorks20130218DescribeElasticLoadBalancers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeElasticLoadBalancersResult != nil {
        // handle response
    }
}
```

## DescribeInstances

<p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeInstances(ctx, operations.DescribeInstancesRequest{
        DescribeInstancesRequest: shared.DescribeInstancesRequest{
            InstanceIds: []string{
                "voluptate",
                "consectetur",
                "vero",
                "tenetur",
            },
            LayerID: sdk.String("dignissimos"),
            StackID: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.DescribeInstancesXAmzTargetEnumOpsWorks20130218DescribeInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstancesResult != nil {
        // handle response
    }
}
```

## DescribeLayers

<p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLayers(ctx, operations.DescribeLayersRequest{
        DescribeLayersRequest: shared.DescribeLayersRequest{
            LayerIds: []string{
                "quibusdam",
                "illum",
            },
            StackID: sdk.String("sequi"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DescribeLayersXAmzTargetEnumOpsWorks20130218DescribeLayers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLayersResult != nil {
        // handle response
    }
}
```

## DescribeLoadBasedAutoScaling

<p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLoadBasedAutoScaling(ctx, operations.DescribeLoadBasedAutoScalingRequest{
        DescribeLoadBasedAutoScalingRequest: shared.DescribeLoadBasedAutoScalingRequest{
            LayerIds: []string{
                "maiores",
                "doloribus",
                "iusto",
                "eligendi",
            },
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DescribeLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218DescribeLoadBasedAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLoadBasedAutoScalingResult != nil {
        // handle response
    }
}
```

## DescribeMyUserProfile

<p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

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
    res, err := s.SDK.DescribeMyUserProfile(ctx, operations.DescribeMyUserProfileRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeMyUserProfileXAmzTargetEnumOpsWorks20130218DescribeMyUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMyUserProfileResult != nil {
        // handle response
    }
}
```

## DescribeOperatingSystems

Describes the operating systems that are supported by AWS OpsWorks Stacks.

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
    res, err := s.SDK.DescribeOperatingSystems(ctx, operations.DescribeOperatingSystemsRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeOperatingSystemsXAmzTargetEnumOpsWorks20130218DescribeOperatingSystems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOperatingSystemsResponse != nil {
        // handle response
    }
}
```

## DescribePermissions

<p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePermissions(ctx, operations.DescribePermissionsRequest{
        DescribePermissionsRequest: shared.DescribePermissionsRequest{
            IamUserArn: sdk.String("nostrum"),
            StackID: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DescribePermissionsXAmzTargetEnumOpsWorks20130218DescribePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePermissionsResult != nil {
        // handle response
    }
}
```

## DescribeRaidArrays

<p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRaidArrays(ctx, operations.DescribeRaidArraysRequest{
        DescribeRaidArraysRequest: shared.DescribeRaidArraysRequest{
            InstanceID: sdk.String("inventore"),
            RaidArrayIds: []string{
                "ea",
                "quo",
            },
            StackID: sdk.String("consectetur"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeRaidArraysXAmzTargetEnumOpsWorks20130218DescribeRaidArrays,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRaidArraysResult != nil {
        // handle response
    }
}
```

## DescribeRdsDbInstances

<p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRdsDbInstances(ctx, operations.DescribeRdsDbInstancesRequest{
        DescribeRdsDbInstancesRequest: shared.DescribeRdsDbInstancesRequest{
            RdsDbInstanceArns: []string{
                "deleniti",
            },
            StackID: "impedit",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeRdsDbInstancesXAmzTargetEnumOpsWorks20130218DescribeRdsDbInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRdsDbInstancesResult != nil {
        // handle response
    }
}
```

## DescribeServiceErrors

<p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeServiceErrors(ctx, operations.DescribeServiceErrorsRequest{
        DescribeServiceErrorsRequest: shared.DescribeServiceErrorsRequest{
            InstanceID: sdk.String("laborum"),
            ServiceErrorIds: []string{
                "velit",
                "eum",
                "autem",
                "nobis",
            },
            StackID: sdk.String("quas"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DescribeServiceErrorsXAmzTargetEnumOpsWorks20130218DescribeServiceErrors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceErrorsResult != nil {
        // handle response
    }
}
```

## DescribeStackProvisioningParameters

<p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStackProvisioningParameters(ctx, operations.DescribeStackProvisioningParametersRequest{
        DescribeStackProvisioningParametersRequest: shared.DescribeStackProvisioningParametersRequest{
            StackID: "explicabo",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DescribeStackProvisioningParametersXAmzTargetEnumOpsWorks20130218DescribeStackProvisioningParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStackProvisioningParametersResult != nil {
        // handle response
    }
}
```

## DescribeStackSummary

<p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStackSummary(ctx, operations.DescribeStackSummaryRequest{
        DescribeStackSummaryRequest: shared.DescribeStackSummaryRequest{
            StackID: "esse",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DescribeStackSummaryXAmzTargetEnumOpsWorks20130218DescribeStackSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStackSummaryResult != nil {
        // handle response
    }
}
```

## DescribeStacks

<p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStacks(ctx, operations.DescribeStacksRequest{
        DescribeStacksRequest: shared.DescribeStacksRequest{
            StackIds: []string{
                "assumenda",
                "eos",
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DescribeStacksXAmzTargetEnumOpsWorks20130218DescribeStacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStacksResult != nil {
        // handle response
    }
}
```

## DescribeTimeBasedAutoScaling

<p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTimeBasedAutoScaling(ctx, operations.DescribeTimeBasedAutoScalingRequest{
        DescribeTimeBasedAutoScalingRequest: shared.DescribeTimeBasedAutoScalingRequest{
            InstanceIds: []string{
                "illum",
                "quo",
                "fuga",
                "eius",
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DescribeTimeBasedAutoScalingXAmzTargetEnumOpsWorks20130218DescribeTimeBasedAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTimeBasedAutoScalingResult != nil {
        // handle response
    }
}
```

## DescribeUserProfiles

<p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserProfiles(ctx, operations.DescribeUserProfilesRequest{
        DescribeUserProfilesRequest: shared.DescribeUserProfilesRequest{
            IamUserArns: []string{
                "aspernatur",
                "sequi",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeUserProfilesXAmzTargetEnumOpsWorks20130218DescribeUserProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserProfilesResult != nil {
        // handle response
    }
}
```

## DescribeVolumes

<p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVolumes(ctx, operations.DescribeVolumesRequest{
        DescribeVolumesRequest: shared.DescribeVolumesRequest{
            InstanceID: sdk.String("inventore"),
            RaidArrayID: sdk.String("nihil"),
            StackID: sdk.String("totam"),
            VolumeIds: []string{
                "aliquam",
                "odio",
                "occaecati",
                "commodi",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DescribeVolumesXAmzTargetEnumOpsWorks20130218DescribeVolumes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVolumesResult != nil {
        // handle response
    }
}
```

## DetachElasticLoadBalancer

<p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DetachElasticLoadBalancer(ctx, operations.DetachElasticLoadBalancerRequest{
        DetachElasticLoadBalancerRequest: shared.DetachElasticLoadBalancerRequest{
            ElasticLoadBalancerName: "quas",
            LayerID: "praesentium",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DetachElasticLoadBalancerXAmzTargetEnumOpsWorks20130218DetachElasticLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateElasticIP

<p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateElasticIP(ctx, operations.DisassociateElasticIPRequest{
        DisassociateElasticIPRequest: shared.DisassociateElasticIPRequest{
            ElasticIP: "explicabo",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DisassociateElasticIPXAmzTargetEnumOpsWorks20130218DisassociateElasticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHostnameSuggestion

<p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHostnameSuggestion(ctx, operations.GetHostnameSuggestionRequest{
        GetHostnameSuggestionRequest: shared.GetHostnameSuggestionRequest{
            LayerID: "saepe",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.GetHostnameSuggestionXAmzTargetEnumOpsWorks20130218GetHostnameSuggestion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHostnameSuggestionResult != nil {
        // handle response
    }
}
```

## GrantAccess

<note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GrantAccess(ctx, operations.GrantAccessRequest{
        GrantAccessRequest: shared.GrantAccessRequest{
            InstanceID: "esse",
            ValidForInMinutes: sdk.Int64(800379),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.GrantAccessXAmzTargetEnumOpsWorks20130218GrantAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GrantAccessResult != nil {
        // handle response
    }
}
```

## ListTags

Returns a list of tags that are applied to the specified stack or layer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
        ListTagsRequest: shared.ListTagsRequest{
            MaxResults: sdk.Int64(473221),
            NextToken: sdk.String("rerum"),
            ResourceArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumOpsWorks20130218ListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResult != nil {
        // handle response
    }
}
```

## RebootInstance

<p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RebootInstance(ctx, operations.RebootInstanceRequest{
        RebootInstanceRequest: shared.RebootInstanceRequest{
            InstanceID: "cumque",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.RebootInstanceXAmzTargetEnumOpsWorks20130218RebootInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterEcsCluster

<p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterEcsCluster(ctx, operations.RegisterEcsClusterRequest{
        RegisterEcsClusterRequest: shared.RegisterEcsClusterRequest{
            EcsClusterArn: "blanditiis",
            StackID: "provident",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.RegisterEcsClusterXAmzTargetEnumOpsWorks20130218RegisterEcsCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterEcsClusterResult != nil {
        // handle response
    }
}
```

## RegisterElasticIP

<p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterElasticIP(ctx, operations.RegisterElasticIPRequest{
        RegisterElasticIPRequest: shared.RegisterElasticIPRequest{
            ElasticIP: "sint",
            StackID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.RegisterElasticIPXAmzTargetEnumOpsWorks20130218RegisterElasticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterElasticIPResult != nil {
        // handle response
    }
}
```

## RegisterInstance

<p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterInstance(ctx, operations.RegisterInstanceRequest{
        RegisterInstanceRequest: shared.RegisterInstanceRequest{
            Hostname: sdk.String("brown-panpipe.name"),
            InstanceIdentity: &shared.InstanceIdentity{
                Document: sdk.String("aliquid"),
                Signature: sdk.String("tenetur"),
            },
            PrivateIP: sdk.String("quae"),
            PublicIP: sdk.String("earum"),
            RsaPublicKey: sdk.String("vel"),
            RsaPublicKeyFingerprint: sdk.String("in"),
            StackID: "eius",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.RegisterInstanceXAmzTargetEnumOpsWorks20130218RegisterInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterInstanceResult != nil {
        // handle response
    }
}
```

## RegisterRdsDbInstance

<p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterRdsDbInstance(ctx, operations.RegisterRdsDbInstanceRequest{
        RegisterRdsDbInstanceRequest: shared.RegisterRdsDbInstanceRequest{
            DbPassword: "ullam",
            DbUser: "reprehenderit",
            RdsDbInstanceArn: "ullam",
            StackID: "nisi",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.RegisterRdsDbInstanceXAmzTargetEnumOpsWorks20130218RegisterRdsDbInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterVolume

<p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterVolume(ctx, operations.RegisterVolumeRequest{
        RegisterVolumeRequest: shared.RegisterVolumeRequest{
            Ec2VolumeID: sdk.String("dolorum"),
            StackID: "architecto",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.RegisterVolumeXAmzTargetEnumOpsWorks20130218RegisterVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterVolumeResult != nil {
        // handle response
    }
}
```

## SetLoadBasedAutoScaling

<p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetLoadBasedAutoScaling(ctx, operations.SetLoadBasedAutoScalingRequest{
        SetLoadBasedAutoScalingRequest: shared.SetLoadBasedAutoScalingRequest{
            DownScaling: &shared.AutoScalingThresholds{
                Alarms: []string{
                    "veritatis",
                    "consectetur",
                },
                CPUThreshold: sdk.Float64(2371.73),
                IgnoreMetricsTime: sdk.Int64(614465),
                InstanceCount: sdk.Int64(839513),
                LoadThreshold: sdk.Float64(330.74),
                MemoryThreshold: sdk.Float64(5223.71),
                ThresholdsWaitTime: sdk.Int64(15606),
            },
            Enable: sdk.Bool(false),
            LayerID: "laudantium",
            UpScaling: &shared.AutoScalingThresholds{
                Alarms: []string{
                    "mollitia",
                    "ab",
                },
                CPUThreshold: sdk.Float64(5445.91),
                IgnoreMetricsTime: sdk.Int64(251941),
                InstanceCount: sdk.Int64(32465),
                LoadThreshold: sdk.Float64(2211.61),
                MemoryThreshold: sdk.Float64(5801.52),
                ThresholdsWaitTime: sdk.Int64(253191),
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.SetLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetLoadBasedAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetPermission

<p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetPermission(ctx, operations.SetPermissionRequest{
        SetPermissionRequest: shared.SetPermissionRequest{
            AllowSSH: sdk.Bool(false),
            AllowSudo: sdk.Bool(false),
            IamUserArn: "natus",
            Level: sdk.String("velit"),
            StackID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.SetPermissionXAmzTargetEnumOpsWorks20130218SetPermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetTimeBasedAutoScaling

<p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetTimeBasedAutoScaling(ctx, operations.SetTimeBasedAutoScalingRequest{
        SetTimeBasedAutoScalingRequest: shared.SetTimeBasedAutoScalingRequest{
            AutoScalingSchedule: &shared.WeeklyAutoScalingSchedule{
                Friday: map[string]string{
                    "maxime": "dignissimos",
                    "officia": "asperiores",
                    "nemo": "quae",
                },
                Monday: map[string]string{
                    "porro": "quod",
                    "labore": "ab",
                },
                Saturday: map[string]string{
                    "fuga": "id",
                },
                Sunday: map[string]string{
                    "velit": "culpa",
                    "est": "recusandae",
                },
                Thursday: map[string]string{
                    "fugiat": "vel",
                    "ducimus": "quos",
                    "vel": "labore",
                },
                Tuesday: map[string]string{
                    "facilis": "cum",
                    "commodi": "in",
                    "corporis": "reiciendis",
                    "assumenda": "nemo",
                },
                Wednesday: map[string]string{
                    "aliquid": "aperiam",
                    "cum": "consectetur",
                    "in": "exercitationem",
                    "earum": "facere",
                },
            },
            InstanceID: "numquam",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.SetTimeBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetTimeBasedAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartInstance

<p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartInstance(ctx, operations.StartInstanceRequest{
        StartInstanceRequest: shared.StartInstanceRequest{
            InstanceID: "sunt",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.StartInstanceXAmzTargetEnumOpsWorks20130218StartInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartStack

<p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartStack(ctx, operations.StartStackRequest{
        StartStackRequest: shared.StartStackRequest{
            StackID: "debitis",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.StartStackXAmzTargetEnumOpsWorks20130218StartStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopInstance

<p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopInstance(ctx, operations.StopInstanceRequest{
        StopInstanceRequest: shared.StopInstanceRequest{
            Force: sdk.Bool(false),
            InstanceID: "vitae",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.StopInstanceXAmzTargetEnumOpsWorks20130218StopInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopStack

<p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopStack(ctx, operations.StopStackRequest{
        StopStackRequest: shared.StopStackRequest{
            StackID: "minima",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.StopStackXAmzTargetEnumOpsWorks20130218StopStack,
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

Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "dolore",
            Tags: map[string]string{
                "officiis": "temporibus",
                "ullam": "adipisci",
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumOpsWorks20130218TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnassignInstance

<p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UnassignInstance(ctx, operations.UnassignInstanceRequest{
        UnassignInstanceRequest: shared.UnassignInstanceRequest{
            InstanceID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.UnassignInstanceXAmzTargetEnumOpsWorks20130218UnassignInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnassignVolume

<p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UnassignVolume(ctx, operations.UnassignVolumeRequest{
        UnassignVolumeRequest: shared.UnassignVolumeRequest{
            VolumeID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.UnassignVolumeXAmzTargetEnumOpsWorks20130218UnassignVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Removes tags from a specified stack or layer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "dolore",
            TagKeys: []string{
                "sed",
                "in",
                "commodi",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumOpsWorks20130218UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateApp

<p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateApp(ctx, operations.UpdateAppRequest{
        UpdateAppRequest: shared.UpdateAppRequest{
            AppID: "debitis",
            AppSource: &shared.Source{
                Password: sdk.String("illo"),
                Revision: sdk.String("reiciendis"),
                SSHKey: sdk.String("perferendis"),
                Type: shared.SourceTypeEnumArchive.ToPointer(),
                URL: sdk.String("maiores"),
                Username: sdk.String("Dorothy.Cormier"),
            },
            Attributes: map[string]string{
                "ipsum": "ea",
                "occaecati": "quos",
                "voluptatibus": "tempora",
                "tempora": "voluptate",
            },
            DataSources: []shared.DataSource{
                shared.DataSource{
                    Arn: sdk.String("ex"),
                    DatabaseName: sdk.String("sit"),
                    Type: sdk.String("non"),
                },
                shared.DataSource{
                    Arn: sdk.String("officiis"),
                    DatabaseName: sdk.String("praesentium"),
                    Type: sdk.String("facilis"),
                },
                shared.DataSource{
                    Arn: sdk.String("quaerat"),
                    DatabaseName: sdk.String("incidunt"),
                    Type: sdk.String("ipsam"),
                },
                shared.DataSource{
                    Arn: sdk.String("debitis"),
                    DatabaseName: sdk.String("rem"),
                    Type: sdk.String("sit"),
                },
            },
            Description: sdk.String("nobis"),
            Domains: []string{
                "veniam",
                "minima",
                "recusandae",
            },
            EnableSsl: sdk.Bool(false),
            Environment: []shared.EnvironmentVariable{
                shared.EnvironmentVariable{
                    Key: "nulla",
                    Secure: sdk.Bool(false),
                    Value: "magni",
                },
                shared.EnvironmentVariable{
                    Key: "aperiam",
                    Secure: sdk.Bool(false),
                    Value: "saepe",
                },
                shared.EnvironmentVariable{
                    Key: "numquam",
                    Secure: sdk.Bool(false),
                    Value: "veniam",
                },
                shared.EnvironmentVariable{
                    Key: "in",
                    Secure: sdk.Bool(false),
                    Value: "officiis",
                },
            },
            Name: sdk.String("Marsha Heidenreich"),
            SslConfiguration: &shared.SslConfiguration{
                Certificate: "laboriosam",
                Chain: sdk.String("dolorum"),
                PrivateKey: "voluptatum",
            },
            Type: shared.AppTypeEnumNodejs.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.UpdateAppXAmzTargetEnumOpsWorks20130218UpdateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateElasticIP

<p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateElasticIP(ctx, operations.UpdateElasticIPRequest{
        UpdateElasticIPRequest: shared.UpdateElasticIPRequest{
            ElasticIP: "dolorum",
            Name: sdk.String("Caleb Goldner"),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.UpdateElasticIPXAmzTargetEnumOpsWorks20130218UpdateElasticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInstance

<p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateInstance(ctx, operations.UpdateInstanceRequest{
        UpdateInstanceRequest: shared.UpdateInstanceRequest{
            AgentVersion: sdk.String("esse"),
            AmiID: sdk.String("ipsam"),
            Architecture: shared.ArchitectureEnumX8664.ToPointer(),
            AutoScalingType: shared.AutoScalingTypeEnumTimer.ToPointer(),
            EbsOptimized: sdk.Bool(false),
            Hostname: sdk.String("naughty-trainer.info"),
            InstallUpdatesOnBoot: sdk.Bool(false),
            InstanceID: "et",
            InstanceType: sdk.String("blanditiis"),
            LayerIds: []string{
                "sed",
                "sit",
            },
            Os: sdk.String("vel"),
            SSHKeyName: sdk.String("nostrum"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.UpdateInstanceXAmzTargetEnumOpsWorks20130218UpdateInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateLayer

<p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateLayer(ctx, operations.UpdateLayerRequest{
        UpdateLayerRequest: shared.UpdateLayerRequest{
            Attributes: map[string]string{
                "architecto": "occaecati",
            },
            AutoAssignElasticIps: sdk.Bool(false),
            AutoAssignPublicIps: sdk.Bool(false),
            CloudWatchLogsConfiguration: &shared.CloudWatchLogsConfiguration{
                Enabled: sdk.Bool(false),
                LogStreams: []shared.CloudWatchLogsLogStream{
                    shared.CloudWatchLogsLogStream{
                        BatchCount: sdk.Int64(695270),
                        BatchSize: sdk.Int64(539074),
                        BufferDuration: sdk.Int64(671957),
                        DatetimeFormat: sdk.String("nam"),
                        Encoding: shared.CloudWatchLogsEncodingEnumUtf16Be.ToPointer(),
                        File: sdk.String("laboriosam"),
                        FileFingerprintLines: sdk.String("alias"),
                        InitialPosition: shared.CloudWatchLogsInitialPositionEnumStartOfFile.ToPointer(),
                        LogGroupName: sdk.String("deserunt"),
                        MultiLineStartPattern: sdk.String("voluptate"),
                        TimeZone: shared.CloudWatchLogsTimeZoneEnumUtc.ToPointer(),
                    },
                    shared.CloudWatchLogsLogStream{
                        BatchCount: sdk.Int64(972083),
                        BatchSize: sdk.Int64(588740),
                        BufferDuration: sdk.Int64(833819),
                        DatetimeFormat: sdk.String("delectus"),
                        Encoding: shared.CloudWatchLogsEncodingEnumUtf32Be.ToPointer(),
                        File: sdk.String("perferendis"),
                        FileFingerprintLines: sdk.String("est"),
                        InitialPosition: shared.CloudWatchLogsInitialPositionEnumEndOfFile.ToPointer(),
                        LogGroupName: sdk.String("reprehenderit"),
                        MultiLineStartPattern: sdk.String("facere"),
                        TimeZone: shared.CloudWatchLogsTimeZoneEnumUtc.ToPointer(),
                    },
                },
            },
            CustomInstanceProfileArn: sdk.String("praesentium"),
            CustomJSON: sdk.String("mollitia"),
            CustomRecipes: &shared.Recipes{
                Configure: []string{
                    "voluptatem",
                    "quisquam",
                },
                Deploy: []string{
                    "quasi",
                    "atque",
                    "reprehenderit",
                    "asperiores",
                },
                Setup: []string{
                    "suscipit",
                    "quidem",
                    "maxime",
                },
                Shutdown: []string{
                    "esse",
                },
                Undeploy: []string{
                    "assumenda",
                },
            },
            CustomSecurityGroupIds: []string{
                "atque",
                "error",
            },
            EnableAutoHealing: sdk.Bool(false),
            InstallUpdatesOnBoot: sdk.Bool(false),
            LayerID: "officiis",
            LifecycleEventConfiguration: &shared.LifecycleEventConfiguration{
                Shutdown: &shared.ShutdownEventConfiguration{
                    DelayUntilElbConnectionsDrained: sdk.Bool(false),
                    ExecutionTimeout: sdk.Int64(886961),
                },
            },
            Name: sdk.String("Wendell Harber"),
            Packages: []string{
                "corrupti",
                "at",
                "error",
                "blanditiis",
            },
            Shortname: sdk.String("suscipit"),
            UseEbsOptimizedInstances: sdk.Bool(false),
            VolumeConfigurations: []shared.VolumeConfiguration{
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(542129),
                    MountPoint: "atque",
                    NumberOfDisks: 120919,
                    RaidLevel: sdk.Int64(923306),
                    Size: 680697,
                    VolumeType: sdk.String("repellendus"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(287119),
                    MountPoint: "reiciendis",
                    NumberOfDisks: 42976,
                    RaidLevel: sdk.Int64(919783),
                    Size: 116098,
                    VolumeType: sdk.String("accusantium"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(106429),
                    MountPoint: "dolores",
                    NumberOfDisks: 316488,
                    RaidLevel: sdk.Int64(389135),
                    Size: 246535,
                    VolumeType: sdk.String("a"),
                },
                shared.VolumeConfiguration{
                    Encrypted: sdk.Bool(false),
                    Iops: sdk.Int64(562783),
                    MountPoint: "magnam",
                    NumberOfDisks: 906355,
                    RaidLevel: sdk.Int64(160467),
                    Size: 580107,
                    VolumeType: sdk.String("officiis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.UpdateLayerXAmzTargetEnumOpsWorks20130218UpdateLayer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateMyUserProfile

<p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMyUserProfile(ctx, operations.UpdateMyUserProfileRequest{
        UpdateMyUserProfileRequest: shared.UpdateMyUserProfileRequest{
            SSHPublicKey: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.UpdateMyUserProfileXAmzTargetEnumOpsWorks20130218UpdateMyUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRdsDbInstance

<p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRdsDbInstance(ctx, operations.UpdateRdsDbInstanceRequest{
        UpdateRdsDbInstanceRequest: shared.UpdateRdsDbInstanceRequest{
            DbPassword: sdk.String("non"),
            DbUser: sdk.String("vero"),
            RdsDbInstanceArn: "doloremque",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.UpdateRdsDbInstanceXAmzTargetEnumOpsWorks20130218UpdateRdsDbInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateStack

<p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateStack(ctx, operations.UpdateStackRequest{
        UpdateStackRequest: shared.UpdateStackRequest{
            AgentVersion: sdk.String("cum"),
            Attributes: map[string]string{
                "necessitatibus": "ratione",
                "laborum": "distinctio",
            },
            ChefConfiguration: &shared.ChefConfiguration{
                BerkshelfVersion: sdk.String("voluptatum"),
                ManageBerkshelf: sdk.Bool(false),
            },
            ConfigurationManager: &shared.StackConfigurationManager{
                Name: sdk.String("Jim Hammes II"),
                Version: sdk.String("perspiciatis"),
            },
            CustomCookbooksSource: &shared.Source{
                Password: sdk.String("nihil"),
                Revision: sdk.String("mollitia"),
                SSHKey: sdk.String("voluptas"),
                Type: shared.SourceTypeEnumGit.ToPointer(),
                URL: sdk.String("maiores"),
                Username: sdk.String("Waldo.Daniel"),
            },
            CustomJSON: sdk.String("dolore"),
            DefaultAvailabilityZone: sdk.String("dolorum"),
            DefaultInstanceProfileArn: sdk.String("nesciunt"),
            DefaultOs: sdk.String("quae"),
            DefaultRootDeviceType: shared.RootDeviceTypeEnumInstanceStore.ToPointer(),
            DefaultSSHKeyName: sdk.String("omnis"),
            DefaultSubnetID: sdk.String("quaerat"),
            HostnameTheme: sdk.String("molestiae"),
            Name: sdk.String("April Nader"),
            ServiceRoleArn: sdk.String("laudantium"),
            StackID: "eum",
            UseCustomCookbooks: sdk.Bool(false),
            UseOpsworksSecurityGroups: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateStackXAmzTargetEnumOpsWorks20130218UpdateStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateUserProfile

<p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            AllowSelfManagement: sdk.Bool(false),
            IamUserArn: "provident",
            SSHPublicKey: sdk.String("aspernatur"),
            SSHUsername: sdk.String("ullam"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.UpdateUserProfileXAmzTargetEnumOpsWorks20130218UpdateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVolume

<p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVolume(ctx, operations.UpdateVolumeRequest{
        UpdateVolumeRequest: shared.UpdateVolumeRequest{
            MountPoint: sdk.String("ex"),
            Name: sdk.String("Ruth Zulauf"),
            VolumeID: "in",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.UpdateVolumeXAmzTargetEnumOpsWorks20130218UpdateVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
