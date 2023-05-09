# SDK

## Overview

<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-3.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/opsworks/>
### Available Operations

* [assignInstance](#assigninstance) - <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [assignVolume](#assignvolume) - <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [associateElasticIp](#associateelasticip) - <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [attachElasticLoadBalancer](#attachelasticloadbalancer) - <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [cloneStack](#clonestack) - <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createApp](#createapp) - <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createDeployment](#createdeployment) - <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createInstance](#createinstance) - <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createLayer](#createlayer) - <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createStack](#createstack) - <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [createUserProfile](#createuserprofile) - <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deleteApp](#deleteapp) - <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deleteInstance](#deleteinstance) - <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deleteLayer](#deletelayer) - <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deleteStack](#deletestack) - <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deleteUserProfile](#deleteuserprofile) - <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deregisterEcsCluster](#deregisterecscluster) - <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
* [deregisterElasticIp](#deregisterelasticip) - <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deregisterInstance](#deregisterinstance) - <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deregisterRdsDbInstance](#deregisterrdsdbinstance) - <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [deregisterVolume](#deregistervolume) - <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeAgentVersions](#describeagentversions) - Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.
* [describeApps](#describeapps) - <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeCommands](#describecommands) - <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeDeployments](#describedeployments) - <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeEcsClusters](#describeecsclusters) - <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [describeElasticIps](#describeelasticips) - <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeElasticLoadBalancers](#describeelasticloadbalancers) - <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeInstances](#describeinstances) - <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeLayers](#describelayers) - <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeLoadBasedAutoScaling](#describeloadbasedautoscaling) - <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeMyUserProfile](#describemyuserprofile) - <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeOperatingSystems](#describeoperatingsystems) - Describes the operating systems that are supported by AWS OpsWorks Stacks.
* [describePermissions](#describepermissions) - <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeRaidArrays](#describeraidarrays) - <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeRdsDbInstances](#describerdsdbinstances) - <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [describeServiceErrors](#describeserviceerrors) - <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
* [describeStackProvisioningParameters](#describestackprovisioningparameters) - <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeStackSummary](#describestacksummary) - <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeStacks](#describestacks) - <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeTimeBasedAutoScaling](#describetimebasedautoscaling) - <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeUserProfiles](#describeuserprofiles) - <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [describeVolumes](#describevolumes) - <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [detachElasticLoadBalancer](#detachelasticloadbalancer) - <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [disassociateElasticIp](#disassociateelasticip) - <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [getHostnameSuggestion](#gethostnamesuggestion) - <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [grantAccess](#grantaccess) - <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
* [listTags](#listtags) - Returns a list of tags that are applied to the specified stack or layer.
* [rebootInstance](#rebootinstance) - <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [registerEcsCluster](#registerecscluster) - <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
* [registerElasticIp](#registerelasticip) - <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [registerInstance](#registerinstance) - <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [registerRdsDbInstance](#registerrdsdbinstance) - <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [registerVolume](#registervolume) - <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [setLoadBasedAutoScaling](#setloadbasedautoscaling) - <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [setPermission](#setpermission) - <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [setTimeBasedAutoScaling](#settimebasedautoscaling) - <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [startInstance](#startinstance) - <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [startStack](#startstack) - <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [stopInstance](#stopinstance) - <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [stopStack](#stopstack) - <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [tagResource](#tagresource) - Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.
* [unassignInstance](#unassigninstance) - <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [unassignVolume](#unassignvolume) - <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [untagResource](#untagresource) - Removes tags from a specified stack or layer.
* [updateApp](#updateapp) - <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateElasticIp](#updateelasticip) - <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateInstance](#updateinstance) - <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateLayer](#updatelayer) - <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateMyUserProfile](#updatemyuserprofile) - <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateRdsDbInstance](#updaterdsdbinstance) - <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateStack](#updatestack) - <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateUserProfile](#updateuserprofile) - <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
* [updateVolume](#updatevolume) - <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

## assignInstance

<p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignInstanceRequest;
import org.openapis.openapi.models.operations.AssignInstanceResponse;
import org.openapis.openapi.models.operations.AssignInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignInstanceRequest req = new AssignInstanceRequest(                new AssignInstanceRequest("debitis",                 new String[]{{
                                                add("delectus"),
                                            }});, AssignInstanceXAmzTargetEnum.OPS_WORKS20130218_ASSIGN_INSTANCE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssignInstanceResponse res = sdk.sdk.assignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assignVolume

<p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignVolumeRequest;
import org.openapis.openapi.models.operations.AssignVolumeResponse;
import org.openapis.openapi.models.operations.AssignVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignVolumeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignVolumeRequest req = new AssignVolumeRequest(                new AssignVolumeRequest("nisi") {{
                                instanceId = "recusandae";
                            }};, AssignVolumeXAmzTargetEnum.OPS_WORKS20130218_ASSIGN_VOLUME) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            AssignVolumeResponse res = sdk.sdk.assignVolume(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateElasticIp

<p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateElasticIpRequest;
import org.openapis.openapi.models.operations.AssociateElasticIpResponse;
import org.openapis.openapi.models.operations.AssociateElasticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateElasticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateElasticIpRequest req = new AssociateElasticIpRequest(                new AssociateElasticIpRequest("sapiente") {{
                                instanceId = "quo";
                            }};, AssociateElasticIpXAmzTargetEnum.OPS_WORKS20130218_ASSOCIATE_ELASTIC_IP) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            AssociateElasticIpResponse res = sdk.sdk.associateElasticIp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachElasticLoadBalancer

<p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachElasticLoadBalancerRequest;
import org.openapis.openapi.models.operations.AttachElasticLoadBalancerResponse;
import org.openapis.openapi.models.operations.AttachElasticLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachElasticLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachElasticLoadBalancerRequest req = new AttachElasticLoadBalancerRequest(                new AttachElasticLoadBalancerRequest("totam", "porro");, AttachElasticLoadBalancerXAmzTargetEnum.OPS_WORKS20130218_ATTACH_ELASTIC_LOAD_BALANCER) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            AttachElasticLoadBalancerResponse res = sdk.sdk.attachElasticLoadBalancer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneStack

<p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneStackRequest;
import org.openapis.openapi.models.operations.CloneStackResponse;
import org.openapis.openapi.models.operations.CloneStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChefConfiguration;
import org.openapis.openapi.models.shared.CloneStackRequest;
import org.openapis.openapi.models.shared.RootDeviceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.StackConfigurationManager;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneStackRequest req = new CloneStackRequest(                new CloneStackRequest("optio", "totam") {{
                                agentVersion = "beatae";
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                                chefConfiguration = new ChefConfiguration() {{
                                    berkshelfVersion = "cum";
                                    manageBerkshelf = false;
                                }};;
                                cloneAppIds = new String[]{{
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                clonePermissions = false;
                                configurationManager = new StackConfigurationManager() {{
                                    name = "Dorothy Hane";
                                    version = "iste";
                                }};;
                                customCookbooksSource = new Source() {{
                                    password = "dolor";
                                    revision = "natus";
                                    sshKey = "laboriosam";
                                    type = SourceTypeEnum.S3;
                                    url = "saepe";
                                    username = "Marisa_Kirlin";
                                }};;
                                customJson = "iure";
                                defaultAvailabilityZone = "saepe";
                                defaultInstanceProfileArn = "quidem";
                                defaultOs = "architecto";
                                defaultRootDeviceType = RootDeviceTypeEnum.EBS;
                                defaultSshKeyName = "reiciendis";
                                defaultSubnetId = "est";
                                hostnameTheme = "mollitia";
                                name = "Ernest Ebert";
                                region = "nobis";
                                useCustomCookbooks = false;
                                useOpsworksSecurityGroups = false;
                                vpcId = "enim";
                            }};, CloneStackXAmzTargetEnum.OPS_WORKS20130218_CLONE_STACK) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CloneStackResponse res = sdk.sdk.cloneStack(req);

            if (res.cloneStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApp

<p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.operations.CreateAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppTypeEnum;
import org.openapis.openapi.models.shared.CreateAppRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.SslConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequest("sapiente", "architecto", AppTypeEnum.NODEJS) {{
                                appSource = new Source() {{
                                    password = "dolorem";
                                    revision = "culpa";
                                    sshKey = "consequuntur";
                                    type = SourceTypeEnum.S3;
                                    url = "mollitia";
                                    username = "Kristina.Fritsch";
                                }};;
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("velit", "error");
                                    put("quia", "quis");
                                }};
                                dataSources = new org.openapis.openapi.models.shared.DataSource[]{{
                                    add(new DataSource() {{
                                        arn = "laborum";
                                        databaseName = "animi";
                                        type = "enim";
                                    }}),
                                }};
                                description = "odit";
                                domains = new String[]{{
                                    add("sequi"),
                                    add("tenetur"),
                                    add("ipsam"),
                                    add("id"),
                                }};
                                enableSsl = false;
                                environment = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                    add(new EnvironmentVariable("error", "temporibus") {{
                                        key = "aut";
                                        secure = false;
                                        value = "quasi";
                                    }}),
                                    add(new EnvironmentVariable("reiciendis", "voluptatibus") {{
                                        key = "laborum";
                                        secure = false;
                                        value = "quasi";
                                    }}),
                                    add(new EnvironmentVariable("praesentium", "voluptatibus") {{
                                        key = "vero";
                                        secure = false;
                                        value = "nihil";
                                    }}),
                                    add(new EnvironmentVariable("voluptate", "cum") {{
                                        key = "ipsa";
                                        secure = false;
                                        value = "omnis";
                                    }}),
                                }};
                                shortname = "perferendis";
                                sslConfiguration = new SslConfiguration("doloremque", "reprehenderit") {{
                                    chain = "ut";
                                }};;
                            }};, CreateAppXAmzTargetEnum.OPS_WORKS20130218_CREATE_APP) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            CreateAppResponse res = sdk.sdk.createApp(req);

            if (res.createAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

<p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.operations.CreateDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDeploymentRequest;
import org.openapis.openapi.models.shared.DeploymentCommand;
import org.openapis.openapi.models.shared.DeploymentCommandNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentRequest(                new DeploymentCommand(DeploymentCommandNameEnum.RESTART) {{
                                                args = new java.util.HashMap<String, String[]>() {{
                                                    put("repudiandae", new String[]{{
                                                        add("ipsum"),
                                                    }});
                                                    put("quidem", new String[]{{
                                                        add("excepturi"),
                                                        add("pariatur"),
                                                        add("modi"),
                                                    }});
                                                }};
                                            }};, "praesentium") {{
                                appId = "rem";
                                comment = "voluptates";
                                customJson = "quasi";
                                instanceIds = new String[]{{
                                    add("sint"),
                                    add("veritatis"),
                                    add("itaque"),
                                    add("incidunt"),
                                }};
                                layerIds = new String[]{{
                                    add("consequatur"),
                                    add("est"),
                                }};
                            }};, CreateDeploymentXAmzTargetEnum.OPS_WORKS20130218_CREATE_DEPLOYMENT) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstance

<p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstanceRequest;
import org.openapis.openapi.models.operations.CreateInstanceResponse;
import org.openapis.openapi.models.operations.CreateInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.AutoScalingTypeEnum;
import org.openapis.openapi.models.shared.BlockDeviceMapping;
import org.openapis.openapi.models.shared.CreateInstanceRequest;
import org.openapis.openapi.models.shared.EbsBlockDevice;
import org.openapis.openapi.models.shared.RootDeviceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VolumeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstanceRequest req = new CreateInstanceRequest(                new CreateInstanceRequest("aliquid",                 new String[]{{
                                                add("quos"),
                                                add("perferendis"),
                                                add("magni"),
                                            }}, "assumenda") {{
                                agentVersion = "ipsam";
                                amiId = "alias";
                                architecture = ArchitectureEnum.X8664;
                                autoScalingType = AutoScalingTypeEnum.TIMER;
                                availabilityZone = "excepturi";
                                blockDeviceMappings = new org.openapis.openapi.models.shared.BlockDeviceMapping[]{{
                                    add(new BlockDeviceMapping() {{
                                        deviceName = "facilis";
                                        ebs = new EbsBlockDevice() {{
                                            deleteOnTermination = false;
                                            iops = 735194L;
                                            snapshotId = "labore";
                                            volumeSize = 962189L;
                                            volumeType = VolumeTypeEnum.IO1;
                                        }};
                                        noDevice = "non";
                                        virtualName = "eligendi";
                                    }}),
                                    add(new BlockDeviceMapping() {{
                                        deviceName = "sint";
                                        ebs = new EbsBlockDevice() {{
                                            deleteOnTermination = false;
                                            iops = 396098L;
                                            snapshotId = "provident";
                                            volumeSize = 896039L;
                                            volumeType = VolumeTypeEnum.IO1;
                                        }};
                                        noDevice = "officia";
                                        virtualName = "dolor";
                                    }}),
                                }};
                                ebsOptimized = false;
                                hostname = "unimportant-venture.net";
                                installUpdatesOnBoot = false;
                                os = "in";
                                rootDeviceType = RootDeviceTypeEnum.EBS;
                                sshKeyName = "illum";
                                subnetId = "maiores";
                                tenancy = "rerum";
                                virtualizationType = "dicta";
                            }};, CreateInstanceXAmzTargetEnum.OPS_WORKS20130218_CREATE_INSTANCE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateInstanceResponse res = sdk.sdk.createInstance(req);

            if (res.createInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLayer

<p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLayerRequest;
import org.openapis.openapi.models.operations.CreateLayerResponse;
import org.openapis.openapi.models.operations.CreateLayerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfiguration;
import org.openapis.openapi.models.shared.CloudWatchLogsEncodingEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsInitialPositionEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsLogStream;
import org.openapis.openapi.models.shared.CloudWatchLogsTimeZoneEnum;
import org.openapis.openapi.models.shared.CreateLayerRequest;
import org.openapis.openapi.models.shared.LayerTypeEnum;
import org.openapis.openapi.models.shared.LifecycleEventConfiguration;
import org.openapis.openapi.models.shared.Recipes;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShutdownEventConfiguration;
import org.openapis.openapi.models.shared.VolumeConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLayerRequest req = new CreateLayerRequest(                new CreateLayerRequest("occaecati", "enim", "accusamus", LayerTypeEnum.CUSTOM) {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("provident", "nam");
                                    put("id", "blanditiis");
                                    put("deleniti", "sapiente");
                                }};
                                autoAssignElasticIps = false;
                                autoAssignPublicIps = false;
                                cloudWatchLogsConfiguration = new CloudWatchLogsConfiguration() {{
                                    enabled = false;
                                    logStreams = new org.openapis.openapi.models.shared.CloudWatchLogsLogStream[]{{
                                        add(new CloudWatchLogsLogStream() {{
                                            batchCount = 643990L;
                                            batchSize = 394869L;
                                            bufferDuration = 423855L;
                                            datetimeFormat = "natus";
                                            encoding = CloudWatchLogsEncodingEnum.ISO2022_KR;
                                            file = "molestiae";
                                            fileFingerprintLines = "perferendis";
                                            initialPosition = CloudWatchLogsInitialPositionEnum.START_OF_FILE;
                                            logGroupName = "magnam";
                                            multiLineStartPattern = "distinctio";
                                            timeZone = CloudWatchLogsTimeZoneEnum.UTC;
                                        }}),
                                    }};
                                }};;
                                customInstanceProfileArn = "labore";
                                customJson = "labore";
                                customRecipes = new Recipes() {{
                                    configure = new String[]{{
                                        add("natus"),
                                        add("nobis"),
                                    }};
                                    deploy = new String[]{{
                                        add("vero"),
                                        add("aspernatur"),
                                    }};
                                    setup = new String[]{{
                                        add("magnam"),
                                    }};
                                    shutdown = new String[]{{
                                        add("excepturi"),
                                    }};
                                    undeploy = new String[]{{
                                        add("provident"),
                                        add("quos"),
                                    }};
                                }};;
                                customSecurityGroupIds = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                                enableAutoHealing = false;
                                installUpdatesOnBoot = false;
                                lifecycleEventConfiguration = new LifecycleEventConfiguration() {{
                                    shutdown = new ShutdownEventConfiguration() {{
                                        delayUntilElbConnectionsDrained = false;
                                        executionTimeout = 652103L;
                                    }};;
                                }};;
                                packages = new String[]{{
                                    add("eum"),
                                    add("dolor"),
                                }};
                                useEbsOptimizedInstances = false;
                                volumeConfigurations = new org.openapis.openapi.models.shared.VolumeConfiguration[]{{
                                    add(new VolumeConfiguration("eius", 806194L, 537023L) {{
                                        encrypted = false;
                                        iops = 141264L;
                                        mountPoint = "nemo";
                                        numberOfDisks = 97260L;
                                        raidLevel = 435865L;
                                        size = 984043L;
                                        volumeType = "debitis";
                                    }}),
                                    add(new VolumeConfiguration("expedita", 469249L, 998848L) {{
                                        encrypted = false;
                                        iops = 703889L;
                                        mountPoint = "in";
                                        numberOfDisks = 100226L;
                                        raidLevel = 99569L;
                                        size = 919483L;
                                        volumeType = "ullam";
                                    }}),
                                    add(new VolumeConfiguration("praesentium", 615560L, 166847L) {{
                                        encrypted = false;
                                        iops = 841140L;
                                        mountPoint = "sed";
                                        numberOfDisks = 904648L;
                                        raidLevel = 868126L;
                                        size = 37559L;
                                        volumeType = "consequuntur";
                                    }}),
                                    add(new VolumeConfiguration("excepturi", 139972L, 407183L) {{
                                        encrypted = false;
                                        iops = 123820L;
                                        mountPoint = "quo";
                                        numberOfDisks = 848009L;
                                        raidLevel = 864934L;
                                        size = 807319L;
                                        volumeType = "ea";
                                    }}),
                                }};
                            }};, CreateLayerXAmzTargetEnum.OPS_WORKS20130218_CREATE_LAYER) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            CreateLayerResponse res = sdk.sdk.createLayer(req);

            if (res.createLayerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStack

<p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStackRequest;
import org.openapis.openapi.models.operations.CreateStackResponse;
import org.openapis.openapi.models.operations.CreateStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChefConfiguration;
import org.openapis.openapi.models.shared.CreateStackRequest;
import org.openapis.openapi.models.shared.RootDeviceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.StackConfigurationManager;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStackRequest req = new CreateStackRequest(                new CreateStackRequest("eaque", "pariatur", "nemo", "voluptatibus") {{
                                agentVersion = "perferendis";
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("amet", "aut");
                                    put("cumque", "corporis");
                                    put("hic", "libero");
                                    put("nobis", "dolores");
                                }};
                                chefConfiguration = new ChefConfiguration() {{
                                    berkshelfVersion = "quis";
                                    manageBerkshelf = false;
                                }};;
                                configurationManager = new StackConfigurationManager() {{
                                    name = "Lance Becker";
                                    version = "eos";
                                }};;
                                customCookbooksSource = new Source() {{
                                    password = "perferendis";
                                    revision = "dolores";
                                    sshKey = "minus";
                                    type = SourceTypeEnum.SVN;
                                    url = "dolor";
                                    username = "Seamus_Hegmann60";
                                }};;
                                customJson = "facilis";
                                defaultAvailabilityZone = "perspiciatis";
                                defaultOs = "voluptatem";
                                defaultRootDeviceType = RootDeviceTypeEnum.INSTANCE_STORE;
                                defaultSshKeyName = "consequuntur";
                                defaultSubnetId = "blanditiis";
                                hostnameTheme = "error";
                                useCustomCookbooks = false;
                                useOpsworksSecurityGroups = false;
                                vpcId = "eaque";
                            }};, CreateStackXAmzTargetEnum.OPS_WORKS20130218_CREATE_STACK) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            CreateStackResponse res = sdk.sdk.createStack(req);

            if (res.createStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserProfile

<p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserProfileRequest;
import org.openapis.openapi.models.operations.CreateUserProfileResponse;
import org.openapis.openapi.models.operations.CreateUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserProfileRequest req = new CreateUserProfileRequest(                new CreateUserProfileRequest("deleniti") {{
                                allowSelfManagement = false;
                                sshPublicKey = "pariatur";
                                sshUsername = "provident";
                            }};, CreateUserProfileXAmzTargetEnum.OPS_WORKS20130218_CREATE_USER_PROFILE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "libero";
                xAmzCredential = "delectus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "quos";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateUserProfileResponse res = sdk.sdk.createUserProfile(req);

            if (res.createUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApp

<p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppRequest;
import org.openapis.openapi.models.operations.DeleteAppResponse;
import org.openapis.openapi.models.operations.DeleteAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppRequest req = new DeleteAppRequest(                new DeleteAppRequest("dolor");, DeleteAppXAmzTargetEnum.OPS_WORKS20130218_DELETE_APP) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteAppResponse res = sdk.sdk.deleteApp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstance

<p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceRequest;
import org.openapis.openapi.models.operations.DeleteInstanceResponse;
import org.openapis.openapi.models.operations.DeleteInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceRequest req = new DeleteInstanceRequest(                new DeleteInstanceRequest("amet") {{
                                deleteElasticIp = false;
                                deleteVolumes = false;
                            }};, DeleteInstanceXAmzTargetEnum.OPS_WORKS20130218_DELETE_INSTANCE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteInstanceResponse res = sdk.sdk.deleteInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLayer

<p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLayerRequest;
import org.openapis.openapi.models.operations.DeleteLayerResponse;
import org.openapis.openapi.models.operations.DeleteLayerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLayerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLayerRequest req = new DeleteLayerRequest(                new DeleteLayerRequest("accusamus");, DeleteLayerXAmzTargetEnum.OPS_WORKS20130218_DELETE_LAYER) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            DeleteLayerResponse res = sdk.sdk.deleteLayer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStack

<p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStackRequest;
import org.openapis.openapi.models.operations.DeleteStackResponse;
import org.openapis.openapi.models.operations.DeleteStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStackRequest req = new DeleteStackRequest(                new DeleteStackRequest("ab");, DeleteStackXAmzTargetEnum.OPS_WORKS20130218_DELETE_STACK) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteStackResponse res = sdk.sdk.deleteStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserProfile

<p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserProfileRequest;
import org.openapis.openapi.models.operations.DeleteUserProfileResponse;
import org.openapis.openapi.models.operations.DeleteUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserProfileRequest req = new DeleteUserProfileRequest(                new DeleteUserProfileRequest("distinctio");, DeleteUserProfileXAmzTargetEnum.OPS_WORKS20130218_DELETE_USER_PROFILE) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            DeleteUserProfileResponse res = sdk.sdk.deleteUserProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterEcsCluster

<p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterEcsClusterRequest;
import org.openapis.openapi.models.operations.DeregisterEcsClusterResponse;
import org.openapis.openapi.models.operations.DeregisterEcsClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterEcsClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterEcsClusterRequest req = new DeregisterEcsClusterRequest(                new DeregisterEcsClusterRequest("perferendis");, DeregisterEcsClusterXAmzTargetEnum.OPS_WORKS20130218_DEREGISTER_ECS_CLUSTER) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeregisterEcsClusterResponse res = sdk.sdk.deregisterEcsCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterElasticIp

<p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterElasticIpRequest;
import org.openapis.openapi.models.operations.DeregisterElasticIpResponse;
import org.openapis.openapi.models.operations.DeregisterElasticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterElasticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterElasticIpRequest req = new DeregisterElasticIpRequest(                new DeregisterElasticIpRequest("minima");, DeregisterElasticIpXAmzTargetEnum.OPS_WORKS20130218_DEREGISTER_ELASTIC_IP) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            DeregisterElasticIpResponse res = sdk.sdk.deregisterElasticIp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterInstance

<p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterInstanceRequest req = new DeregisterInstanceRequest(                new DeregisterInstanceRequest("quod");, DeregisterInstanceXAmzTargetEnum.OPS_WORKS20130218_DEREGISTER_INSTANCE) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            DeregisterInstanceResponse res = sdk.sdk.deregisterInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterRdsDbInstance

<p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterRdsDbInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterRdsDbInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterRdsDbInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterRdsDbInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterRdsDbInstanceRequest req = new DeregisterRdsDbInstanceRequest(                new DeregisterRdsDbInstanceRequest("quisquam");, DeregisterRdsDbInstanceXAmzTargetEnum.OPS_WORKS20130218_DEREGISTER_RDS_DB_INSTANCE) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeregisterRdsDbInstanceResponse res = sdk.sdk.deregisterRdsDbInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterVolume

<p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterVolumeRequest;
import org.openapis.openapi.models.operations.DeregisterVolumeResponse;
import org.openapis.openapi.models.operations.DeregisterVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterVolumeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterVolumeRequest req = new DeregisterVolumeRequest(                new DeregisterVolumeRequest("totam");, DeregisterVolumeXAmzTargetEnum.OPS_WORKS20130218_DEREGISTER_VOLUME) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            DeregisterVolumeResponse res = sdk.sdk.deregisterVolume(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAgentVersions

Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAgentVersionsRequest;
import org.openapis.openapi.models.operations.DescribeAgentVersionsResponse;
import org.openapis.openapi.models.operations.DescribeAgentVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAgentVersionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackConfigurationManager;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAgentVersionsRequest req = new DescribeAgentVersionsRequest(                new DescribeAgentVersionsRequest() {{
                                configurationManager = new StackConfigurationManager() {{
                                    name = "Darryl Emard";
                                    version = "cupiditate";
                                }};;
                                stackId = "maxime";
                            }};, DescribeAgentVersionsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_AGENT_VERSIONS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribeAgentVersionsResponse res = sdk.sdk.describeAgentVersions(req);

            if (res.describeAgentVersionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApps

<p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppsRequest;
import org.openapis.openapi.models.operations.DescribeAppsResponse;
import org.openapis.openapi.models.operations.DescribeAppsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAppsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppsRequest req = new DescribeAppsRequest(                new DescribeAppsRequest() {{
                                appIds = new String[]{{
                                    add("facilis"),
                                    add("aliquid"),
                                    add("quam"),
                                }};
                                stackId = "molestias";
                            }};, DescribeAppsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_APPS) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "qui";
                xAmzCredential = "neque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "magni";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "sunt";
            }};            

            DescribeAppsResponse res = sdk.sdk.describeApps(req);

            if (res.describeAppsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCommands

<p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCommandsRequest;
import org.openapis.openapi.models.operations.DescribeCommandsResponse;
import org.openapis.openapi.models.operations.DescribeCommandsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCommandsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCommandsRequest req = new DescribeCommandsRequest(                new DescribeCommandsRequest() {{
                                commandIds = new String[]{{
                                    add("hic"),
                                    add("voluptatem"),
                                    add("cumque"),
                                }};
                                deploymentId = "soluta";
                                instanceId = "nobis";
                            }};, DescribeCommandsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_COMMANDS) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            DescribeCommandsResponse res = sdk.sdk.describeCommands(req);

            if (res.describeCommandsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDeployments

<p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeploymentsRequest;
import org.openapis.openapi.models.operations.DescribeDeploymentsResponse;
import org.openapis.openapi.models.operations.DescribeDeploymentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDeploymentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeploymentsRequest req = new DescribeDeploymentsRequest(                new DescribeDeploymentsRequest() {{
                                appId = "aperiam";
                                deploymentIds = new String[]{{
                                    add("dolorem"),
                                    add("dolore"),
                                    add("labore"),
                                    add("adipisci"),
                                }};
                                stackId = "dolorum";
                            }};, DescribeDeploymentsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_DEPLOYMENTS) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DescribeDeploymentsResponse res = sdk.sdk.describeDeployments(req);

            if (res.describeDeploymentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEcsClusters

<p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEcsClustersRequest;
import org.openapis.openapi.models.operations.DescribeEcsClustersResponse;
import org.openapis.openapi.models.operations.DescribeEcsClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEcsClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEcsClustersRequest req = new DescribeEcsClustersRequest(                new DescribeEcsClustersRequest() {{
                                ecsClusterArns = new String[]{{
                                    add("doloribus"),
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                }};
                                maxResults = 181631L;
                                nextToken = "quae";
                                stackId = "laudantium";
                            }};, DescribeEcsClustersXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_ECS_CLUSTERS) {{
                maxResults = "odio";
                nextToken = "occaecati";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            DescribeEcsClustersResponse res = sdk.sdk.describeEcsClusters(req);

            if (res.describeEcsClustersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeElasticIps

<p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeElasticIpsRequest;
import org.openapis.openapi.models.operations.DescribeElasticIpsResponse;
import org.openapis.openapi.models.operations.DescribeElasticIpsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeElasticIpsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeElasticIpsRequest req = new DescribeElasticIpsRequest(                new DescribeElasticIpsRequest() {{
                                instanceId = "consectetur";
                                ips = new String[]{{
                                    add("tenetur"),
                                    add("dignissimos"),
                                    add("hic"),
                                    add("distinctio"),
                                }};
                                stackId = "quod";
                            }};, DescribeElasticIpsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_ELASTIC_IPS) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DescribeElasticIpsResponse res = sdk.sdk.describeElasticIps(req);

            if (res.describeElasticIpsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeElasticLoadBalancers

<p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeElasticLoadBalancersRequest;
import org.openapis.openapi.models.operations.DescribeElasticLoadBalancersResponse;
import org.openapis.openapi.models.operations.DescribeElasticLoadBalancersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeElasticLoadBalancersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeElasticLoadBalancersRequest req = new DescribeElasticLoadBalancersRequest(                new DescribeElasticLoadBalancersRequest() {{
                                layerIds = new String[]{{
                                    add("natus"),
                                }};
                                stackId = "impedit";
                            }};, DescribeElasticLoadBalancersXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_ELASTIC_LOAD_BALANCERS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeElasticLoadBalancersResponse res = sdk.sdk.describeElasticLoadBalancers(req);

            if (res.describeElasticLoadBalancersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstances

<p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstancesRequest;
import org.openapis.openapi.models.operations.DescribeInstancesResponse;
import org.openapis.openapi.models.operations.DescribeInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstancesRequest req = new DescribeInstancesRequest(                new DescribeInstancesRequest() {{
                                instanceIds = new String[]{{
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                layerId = "alias";
                                stackId = "officia";
                            }};, DescribeInstancesXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_INSTANCES) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeInstancesResponse res = sdk.sdk.describeInstances(req);

            if (res.describeInstancesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLayers

<p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLayersRequest;
import org.openapis.openapi.models.operations.DescribeLayersResponse;
import org.openapis.openapi.models.operations.DescribeLayersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLayersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLayersRequest req = new DescribeLayersRequest(                new DescribeLayersRequest() {{
                                layerIds = new String[]{{
                                    add("laudantium"),
                                    add("dicta"),
                                }};
                                stackId = "dolor";
                            }};, DescribeLayersXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_LAYERS) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
            }};            

            DescribeLayersResponse res = sdk.sdk.describeLayers(req);

            if (res.describeLayersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoadBasedAutoScaling

<p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoadBasedAutoScalingRequest;
import org.openapis.openapi.models.operations.DescribeLoadBasedAutoScalingResponse;
import org.openapis.openapi.models.operations.DescribeLoadBasedAutoScalingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLoadBasedAutoScalingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoadBasedAutoScalingRequest req = new DescribeLoadBasedAutoScalingRequest(                new DescribeLoadBasedAutoScalingRequest(                new String[]{{
                                                add("saepe"),
                                                add("ea"),
                                                add("impedit"),
                                                add("corporis"),
                                            }});, DescribeLoadBasedAutoScalingXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_LOAD_BASED_AUTO_SCALING) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "inventore";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "consectetur";
            }};            

            DescribeLoadBasedAutoScalingResponse res = sdk.sdk.describeLoadBasedAutoScaling(req);

            if (res.describeLoadBasedAutoScalingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMyUserProfile

<p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMyUserProfileRequest;
import org.openapis.openapi.models.operations.DescribeMyUserProfileResponse;
import org.openapis.openapi.models.operations.DescribeMyUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMyUserProfileRequest req = new DescribeMyUserProfileRequest(DescribeMyUserProfileXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_MY_USER_PROFILE) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeMyUserProfileResponse res = sdk.sdk.describeMyUserProfile(req);

            if (res.describeMyUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOperatingSystems

Describes the operating systems that are supported by AWS OpsWorks Stacks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOperatingSystemsRequest;
import org.openapis.openapi.models.operations.DescribeOperatingSystemsResponse;
import org.openapis.openapi.models.operations.DescribeOperatingSystemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOperatingSystemsRequest req = new DescribeOperatingSystemsRequest(DescribeOperatingSystemsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_OPERATING_SYSTEMS) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "fugit";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "non";
                xAmzSignedHeaders = "et";
            }};            

            DescribeOperatingSystemsResponse res = sdk.sdk.describeOperatingSystems(req);

            if (res.describeOperatingSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePermissions

<p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePermissionsRequest;
import org.openapis.openapi.models.operations.DescribePermissionsResponse;
import org.openapis.openapi.models.operations.DescribePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePermissionsRequest req = new DescribePermissionsRequest(                new DescribePermissionsRequest() {{
                                iamUserArn = "laborum";
                                stackId = "placeat";
                            }};, DescribePermissionsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_PERMISSIONS) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "eum";
                xAmzCredential = "autem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nulla";
            }};            

            DescribePermissionsResponse res = sdk.sdk.describePermissions(req);

            if (res.describePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRaidArrays

<p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRaidArraysRequest;
import org.openapis.openapi.models.operations.DescribeRaidArraysResponse;
import org.openapis.openapi.models.operations.DescribeRaidArraysXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRaidArraysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRaidArraysRequest req = new DescribeRaidArraysRequest(                new DescribeRaidArraysRequest() {{
                                instanceId = "libero";
                                raidArrayIds = new String[]{{
                                    add("tempora"),
                                }};
                                stackId = "numquam";
                            }};, DescribeRaidArraysXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_RAID_ARRAYS) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "provident";
                xAmzCredential = "ipsa";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeRaidArraysResponse res = sdk.sdk.describeRaidArrays(req);

            if (res.describeRaidArraysResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRdsDbInstances

<p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRdsDbInstancesRequest;
import org.openapis.openapi.models.operations.DescribeRdsDbInstancesResponse;
import org.openapis.openapi.models.operations.DescribeRdsDbInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRdsDbInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRdsDbInstancesRequest req = new DescribeRdsDbInstancesRequest(                new DescribeRdsDbInstancesRequest("esse") {{
                                rdsDbInstanceArns = new String[]{{
                                    add("fuga"),
                                    add("reprehenderit"),
                                    add("quidem"),
                                }};
                            }};, DescribeRdsDbInstancesXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_RDS_DB_INSTANCES) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
            }};            

            DescribeRdsDbInstancesResponse res = sdk.sdk.describeRdsDbInstances(req);

            if (res.describeRdsDbInstancesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServiceErrors

<p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceErrorsRequest;
import org.openapis.openapi.models.operations.DescribeServiceErrorsResponse;
import org.openapis.openapi.models.operations.DescribeServiceErrorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServiceErrorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceErrorsRequest req = new DescribeServiceErrorsRequest(                new DescribeServiceErrorsRequest() {{
                                instanceId = "veritatis";
                                serviceErrorIds = new String[]{{
                                    add("id"),
                                }};
                                stackId = "quidem";
                            }};, DescribeServiceErrorsXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_SERVICE_ERRORS) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
            }};            

            DescribeServiceErrorsResponse res = sdk.sdk.describeServiceErrors(req);

            if (res.describeServiceErrorsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStackProvisioningParameters

<p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStackProvisioningParametersRequest;
import org.openapis.openapi.models.operations.DescribeStackProvisioningParametersResponse;
import org.openapis.openapi.models.operations.DescribeStackProvisioningParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStackProvisioningParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStackProvisioningParametersRequest req = new DescribeStackProvisioningParametersRequest(                new DescribeStackProvisioningParametersRequest("ab");, DescribeStackProvisioningParametersXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_STACK_PROVISIONING_PARAMETERS) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            DescribeStackProvisioningParametersResponse res = sdk.sdk.describeStackProvisioningParameters(req);

            if (res.describeStackProvisioningParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStackSummary

<p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStackSummaryRequest;
import org.openapis.openapi.models.operations.DescribeStackSummaryResponse;
import org.openapis.openapi.models.operations.DescribeStackSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStackSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStackSummaryRequest req = new DescribeStackSummaryRequest(                new DescribeStackSummaryRequest("esse");, DescribeStackSummaryXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_STACK_SUMMARY) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
            }};            

            DescribeStackSummaryResponse res = sdk.sdk.describeStackSummary(req);

            if (res.describeStackSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStacks

<p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStacksRequest;
import org.openapis.openapi.models.operations.DescribeStacksResponse;
import org.openapis.openapi.models.operations.DescribeStacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStacksRequest req = new DescribeStacksRequest(                new DescribeStacksRequest() {{
                                stackIds = new String[]{{
                                    add("aliquam"),
                                    add("odio"),
                                    add("occaecati"),
                                    add("commodi"),
                                }};
                            }};, DescribeStacksXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_STACKS) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
            }};            

            DescribeStacksResponse res = sdk.sdk.describeStacks(req);

            if (res.describeStacksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTimeBasedAutoScaling

<p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTimeBasedAutoScalingRequest;
import org.openapis.openapi.models.operations.DescribeTimeBasedAutoScalingResponse;
import org.openapis.openapi.models.operations.DescribeTimeBasedAutoScalingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTimeBasedAutoScalingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTimeBasedAutoScalingRequest req = new DescribeTimeBasedAutoScalingRequest(                new DescribeTimeBasedAutoScalingRequest(                new String[]{{
                                                add("consequuntur"),
                                                add("deleniti"),
                                                add("fugit"),
                                            }});, DescribeTimeBasedAutoScalingXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_TIME_BASED_AUTO_SCALING) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            DescribeTimeBasedAutoScalingResponse res = sdk.sdk.describeTimeBasedAutoScaling(req);

            if (res.describeTimeBasedAutoScalingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserProfiles

<p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserProfilesRequest;
import org.openapis.openapi.models.operations.DescribeUserProfilesResponse;
import org.openapis.openapi.models.operations.DescribeUserProfilesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserProfilesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserProfilesRequest req = new DescribeUserProfilesRequest(                new DescribeUserProfilesRequest() {{
                                iamUserArns = new String[]{{
                                    add("consequuntur"),
                                    add("ratione"),
                                    add("explicabo"),
                                    add("saepe"),
                                }};
                            }};, DescribeUserProfilesXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_USER_PROFILES) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            DescribeUserProfilesResponse res = sdk.sdk.describeUserProfiles(req);

            if (res.describeUserProfilesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVolumes

<p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVolumesRequest;
import org.openapis.openapi.models.operations.DescribeVolumesResponse;
import org.openapis.openapi.models.operations.DescribeVolumesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVolumesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVolumesRequest req = new DescribeVolumesRequest(                new DescribeVolumesRequest() {{
                                instanceId = "quod";
                                raidArrayId = "nam";
                                stackId = "vero";
                                volumeIds = new String[]{{
                                    add("quasi"),
                                    add("saepe"),
                                }};
                            }};, DescribeVolumesXAmzTargetEnum.OPS_WORKS20130218_DESCRIBE_VOLUMES) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "harum";
                xAmzCredential = "molestiae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeVolumesResponse res = sdk.sdk.describeVolumes(req);

            if (res.describeVolumesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachElasticLoadBalancer

<p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachElasticLoadBalancerRequest;
import org.openapis.openapi.models.operations.DetachElasticLoadBalancerResponse;
import org.openapis.openapi.models.operations.DetachElasticLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachElasticLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachElasticLoadBalancerRequest req = new DetachElasticLoadBalancerRequest(                new DetachElasticLoadBalancerRequest("sit", "culpa");, DetachElasticLoadBalancerXAmzTargetEnum.OPS_WORKS20130218_DETACH_ELASTIC_LOAD_BALANCER) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cumque";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quaerat";
            }};            

            DetachElasticLoadBalancerResponse res = sdk.sdk.detachElasticLoadBalancer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateElasticIp

<p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateElasticIpRequest;
import org.openapis.openapi.models.operations.DisassociateElasticIpResponse;
import org.openapis.openapi.models.operations.DisassociateElasticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateElasticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateElasticIpRequest req = new DisassociateElasticIpRequest(                new DisassociateElasticIpRequest("consectetur");, DisassociateElasticIpXAmzTargetEnum.OPS_WORKS20130218_DISASSOCIATE_ELASTIC_IP) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "provident";
                xAmzDate = "a";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "esse";
            }};            

            DisassociateElasticIpResponse res = sdk.sdk.disassociateElasticIp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHostnameSuggestion

<p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostnameSuggestionRequest;
import org.openapis.openapi.models.operations.GetHostnameSuggestionResponse;
import org.openapis.openapi.models.operations.GetHostnameSuggestionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetHostnameSuggestionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHostnameSuggestionRequest req = new GetHostnameSuggestionRequest(                new GetHostnameSuggestionRequest("a");, GetHostnameSuggestionXAmzTargetEnum.OPS_WORKS20130218_GET_HOSTNAME_SUGGESTION) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetHostnameSuggestionResponse res = sdk.sdk.getHostnameSuggestion(req);

            if (res.getHostnameSuggestionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## grantAccess

<note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GrantAccessRequest;
import org.openapis.openapi.models.operations.GrantAccessResponse;
import org.openapis.openapi.models.operations.GrantAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.GrantAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GrantAccessRequest req = new GrantAccessRequest(                new GrantAccessRequest("veritatis") {{
                                validForInMinutes = 159414L;
                            }};, GrantAccessXAmzTargetEnum.OPS_WORKS20130218_GRANT_ACCESS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            GrantAccessResponse res = sdk.sdk.grantAccess(req);

            if (res.grantAccessResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Returns a list of tags that are applied to the specified stack or layer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.operations.ListTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest("in") {{
                                maxResults = 258684L;
                                nextToken = "libero";
                            }};, ListTagsXAmzTargetEnum.OPS_WORKS20130218_LIST_TAGS) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootInstance

<p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootInstanceRequest;
import org.openapis.openapi.models.operations.RebootInstanceResponse;
import org.openapis.openapi.models.operations.RebootInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootInstanceRequest req = new RebootInstanceRequest(                new RebootInstanceRequest("ullam");, RebootInstanceXAmzTargetEnum.OPS_WORKS20130218_REBOOT_INSTANCE) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            RebootInstanceResponse res = sdk.sdk.rebootInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerEcsCluster

<p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterEcsClusterRequest;
import org.openapis.openapi.models.operations.RegisterEcsClusterResponse;
import org.openapis.openapi.models.operations.RegisterEcsClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterEcsClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterEcsClusterRequest req = new RegisterEcsClusterRequest(                new RegisterEcsClusterRequest("dolorum", "architecto");, RegisterEcsClusterXAmzTargetEnum.OPS_WORKS20130218_REGISTER_ECS_CLUSTER) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            RegisterEcsClusterResponse res = sdk.sdk.registerEcsCluster(req);

            if (res.registerEcsClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerElasticIp

<p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterElasticIpRequest;
import org.openapis.openapi.models.operations.RegisterElasticIpResponse;
import org.openapis.openapi.models.operations.RegisterElasticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterElasticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterElasticIpRequest req = new RegisterElasticIpRequest(                new RegisterElasticIpRequest("veritatis", "consectetur");, RegisterElasticIpXAmzTargetEnum.OPS_WORKS20130218_REGISTER_ELASTIC_IP) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "iste";
                xAmzCredential = "temporibus";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "laudantium";
            }};            

            RegisterElasticIpResponse res = sdk.sdk.registerElasticIp(req);

            if (res.registerElasticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerInstance

<p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterInstanceRequest;
import org.openapis.openapi.models.operations.RegisterInstanceResponse;
import org.openapis.openapi.models.operations.RegisterInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstanceIdentity;
import org.openapis.openapi.models.shared.RegisterInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterInstanceRequest req = new RegisterInstanceRequest(                new RegisterInstanceRequest("mollitia") {{
                                hostname = "bewitched-marten.biz";
                                instanceIdentity = new InstanceIdentity() {{
                                    document = "voluptatem";
                                    signature = "dolor";
                                }};;
                                privateIp = "occaecati";
                                publicIp = "numquam";
                                rsaPublicKey = "impedit";
                                rsaPublicKeyFingerprint = "explicabo";
                            }};, RegisterInstanceXAmzTargetEnum.OPS_WORKS20130218_REGISTER_INSTANCE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "aut";
                xAmzCredential = "dignissimos";
                xAmzDate = "dicta";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "velit";
            }};            

            RegisterInstanceResponse res = sdk.sdk.registerInstance(req);

            if (res.registerInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerRdsDbInstance

<p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterRdsDbInstanceRequest;
import org.openapis.openapi.models.operations.RegisterRdsDbInstanceResponse;
import org.openapis.openapi.models.operations.RegisterRdsDbInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterRdsDbInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterRdsDbInstanceRequest req = new RegisterRdsDbInstanceRequest(                new RegisterRdsDbInstanceRequest("voluptas", "asperiores", "aperiam", "ea");, RegisterRdsDbInstanceXAmzTargetEnum.OPS_WORKS20130218_REGISTER_RDS_DB_INSTANCE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellendus";
                xAmzDate = "officia";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "officia";
            }};            

            RegisterRdsDbInstanceResponse res = sdk.sdk.registerRdsDbInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerVolume

<p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterVolumeRequest;
import org.openapis.openapi.models.operations.RegisterVolumeResponse;
import org.openapis.openapi.models.operations.RegisterVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterVolumeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterVolumeRequest req = new RegisterVolumeRequest(                new RegisterVolumeRequest("nemo") {{
                                ec2VolumeId = "quae";
                            }};, RegisterVolumeXAmzTargetEnum.OPS_WORKS20130218_REGISTER_VOLUME) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "porro";
                xAmzCredential = "quod";
                xAmzDate = "labore";
                xAmzSecurityToken = "ab";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "fuga";
            }};            

            RegisterVolumeResponse res = sdk.sdk.registerVolume(req);

            if (res.registerVolumeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setLoadBasedAutoScaling

<p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetLoadBasedAutoScalingRequest;
import org.openapis.openapi.models.operations.SetLoadBasedAutoScalingResponse;
import org.openapis.openapi.models.operations.SetLoadBasedAutoScalingXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoScalingThresholds;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetLoadBasedAutoScalingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetLoadBasedAutoScalingRequest req = new SetLoadBasedAutoScalingRequest(                new SetLoadBasedAutoScalingRequest("suscipit") {{
                                downScaling = new AutoScalingThresholds() {{
                                    alarms = new String[]{{
                                        add("culpa"),
                                    }};
                                    cpuThreshold = 6658.59;
                                    ignoreMetricsTime = 926880L;
                                    instanceCount = 517309L;
                                    loadThreshold = 8539.4;
                                    memoryThreshold = 4240.89;
                                    thresholdsWaitTime = 497678L;
                                }};;
                                enable = false;
                                upScaling = new AutoScalingThresholds() {{
                                    alarms = new String[]{{
                                        add("vel"),
                                        add("labore"),
                                        add("possimus"),
                                    }};
                                    cpuThreshold = 7065.75;
                                    ignoreMetricsTime = 738227L;
                                    instanceCount = 414857L;
                                    loadThreshold = 4471.44;
                                    memoryThreshold = 3605.45;
                                    thresholdsWaitTime = 968904L;
                                }};;
                            }};, SetLoadBasedAutoScalingXAmzTargetEnum.OPS_WORKS20130218_SET_LOAD_BASED_AUTO_SCALING) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
            }};            

            SetLoadBasedAutoScalingResponse res = sdk.sdk.setLoadBasedAutoScaling(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPermission

<p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPermissionRequest;
import org.openapis.openapi.models.operations.SetPermissionResponse;
import org.openapis.openapi.models.operations.SetPermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetPermissionRequest req = new SetPermissionRequest(                new SetPermissionRequest("exercitationem", "earum") {{
                                allowSsh = false;
                                allowSudo = false;
                                level = "facere";
                            }};, SetPermissionXAmzTargetEnum.OPS_WORKS20130218_SET_PERMISSION) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            SetPermissionResponse res = sdk.sdk.setPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTimeBasedAutoScaling

<p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTimeBasedAutoScalingRequest;
import org.openapis.openapi.models.operations.SetTimeBasedAutoScalingResponse;
import org.openapis.openapi.models.operations.SetTimeBasedAutoScalingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTimeBasedAutoScalingRequest;
import org.openapis.openapi.models.shared.WeeklyAutoScalingSchedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTimeBasedAutoScalingRequest req = new SetTimeBasedAutoScalingRequest(                new SetTimeBasedAutoScalingRequest("sunt") {{
                                autoScalingSchedule = new WeeklyAutoScalingSchedule() {{
                                    friday = new java.util.HashMap<String, String>() {{
                                        put("adipisci", "non");
                                        put("amet", "beatae");
                                        put("dignissimos", "a");
                                        put("debitis", "consectetur");
                                    }};
                                    monday = new java.util.HashMap<String, String>() {{
                                        put("harum", "laboriosam");
                                        put("ipsa", "voluptates");
                                    }};
                                    saturday = new java.util.HashMap<String, String>() {{
                                        put("vitae", "accusamus");
                                        put("similique", "tempora");
                                        put("aspernatur", "voluptas");
                                    }};
                                    sunday = new java.util.HashMap<String, String>() {{
                                        put("voluptas", "minima");
                                        put("nobis", "dolorum");
                                    }};
                                    thursday = new java.util.HashMap<String, String>() {{
                                        put("minus", "dolores");
                                    }};
                                    tuesday = new java.util.HashMap<String, String>() {{
                                        put("in", "dolore");
                                        put("aliquam", "officiis");
                                        put("temporibus", "ullam");
                                    }};
                                    wednesday = new java.util.HashMap<String, String>() {{
                                        put("cum", "blanditiis");
                                    }};
                                }};;
                            }};, SetTimeBasedAutoScalingXAmzTargetEnum.OPS_WORKS20130218_SET_TIME_BASED_AUTO_SCALING) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "hic";
                xAmzCredential = "nesciunt";
                xAmzDate = "culpa";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "totam";
            }};            

            SetTimeBasedAutoScalingResponse res = sdk.sdk.setTimeBasedAutoScaling(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startInstance

<p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartInstanceRequest;
import org.openapis.openapi.models.operations.StartInstanceResponse;
import org.openapis.openapi.models.operations.StartInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartInstanceRequest req = new StartInstanceRequest(                new StartInstanceRequest("exercitationem");, StartInstanceXAmzTargetEnum.OPS_WORKS20130218_START_INSTANCE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "sit";
                xAmzCredential = "rerum";
                xAmzDate = "sed";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "asperiores";
            }};            

            StartInstanceResponse res = sdk.sdk.startInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startStack

<p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartStackRequest;
import org.openapis.openapi.models.operations.StartStackResponse;
import org.openapis.openapi.models.operations.StartStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartStackRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartStackRequest req = new StartStackRequest(                new StartStackRequest("voluptate");, StartStackXAmzTargetEnum.OPS_WORKS20130218_START_STACK) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "ab";
                xAmzCredential = "iste";
                xAmzDate = "dolore";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "in";
            }};            

            StartStackResponse res = sdk.sdk.startStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopInstance

<p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopInstanceRequest;
import org.openapis.openapi.models.operations.StopInstanceResponse;
import org.openapis.openapi.models.operations.StopInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopInstanceRequest req = new StopInstanceRequest(                new StopInstanceRequest("quidem") {{
                                force = false;
                            }};, StopInstanceXAmzTargetEnum.OPS_WORKS20130218_STOP_INSTANCE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            StopInstanceResponse res = sdk.sdk.stopInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopStack

<p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopStackRequest;
import org.openapis.openapi.models.operations.StopStackResponse;
import org.openapis.openapi.models.operations.StopStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopStackRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopStackRequest req = new StopStackRequest(                new StopStackRequest("reiciendis");, StopStackXAmzTargetEnum.OPS_WORKS20130218_STOP_STACK) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "maiores";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "sed";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "eius";
            }};            

            StopStackResponse res = sdk.sdk.stopStack(req);

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

Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("ipsum",                 new java.util.HashMap<String, String>() {{
                                                put("occaecati", "quos");
                                                put("voluptatibus", "tempora");
                                            }});, TagResourceXAmzTargetEnum.OPS_WORKS20130218_TAG_RESOURCE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unassignInstance

<p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnassignInstanceRequest;
import org.openapis.openapi.models.operations.UnassignInstanceResponse;
import org.openapis.openapi.models.operations.UnassignInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnassignInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnassignInstanceRequest req = new UnassignInstanceRequest(                new UnassignInstanceRequest("facilis");, UnassignInstanceXAmzTargetEnum.OPS_WORKS20130218_UNASSIGN_INSTANCE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            UnassignInstanceResponse res = sdk.sdk.unassignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unassignVolume

<p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnassignVolumeRequest;
import org.openapis.openapi.models.operations.UnassignVolumeResponse;
import org.openapis.openapi.models.operations.UnassignVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnassignVolumeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnassignVolumeRequest req = new UnassignVolumeRequest(                new UnassignVolumeRequest("veniam");, UnassignVolumeXAmzTargetEnum.OPS_WORKS20130218_UNASSIGN_VOLUME) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            UnassignVolumeResponse res = sdk.sdk.unassignVolume(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a specified stack or layer.

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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("veniam",                 new String[]{{
                                                add("officiis"),
                                                add("beatae"),
                                            }});, UntagResourceXAmzTargetEnum.OPS_WORKS20130218_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "praesentium";
                xAmzDate = "cum";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "voluptatum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApp

<p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppRequest;
import org.openapis.openapi.models.operations.UpdateAppResponse;
import org.openapis.openapi.models.operations.UpdateAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppTypeEnum;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.SslConfiguration;
import org.openapis.openapi.models.shared.UpdateAppRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppRequest req = new UpdateAppRequest(                new UpdateAppRequest("hic") {{
                                appSource = new Source() {{
                                    password = "expedita";
                                    revision = "debitis";
                                    sshKey = "neque";
                                    type = SourceTypeEnum.ARCHIVE;
                                    url = "nostrum";
                                    username = "Lucas_Padberg";
                                }};;
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("atque", "fugit");
                                    put("ut", "fugiat");
                                }};
                                dataSources = new org.openapis.openapi.models.shared.DataSource[]{{
                                    add(new DataSource() {{
                                        arn = "culpa";
                                        databaseName = "expedita";
                                        type = "magnam";
                                    }}),
                                }};
                                description = "consequatur";
                                domains = new String[]{{
                                    add("ipsam"),
                                    add("sit"),
                                }};
                                enableSsl = false;
                                environment = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                    add(new EnvironmentVariable("corporis", "et") {{
                                        key = "quas";
                                        secure = false;
                                        value = "repudiandae";
                                    }}),
                                    add(new EnvironmentVariable("sed", "sit") {{
                                        key = "blanditiis";
                                        secure = false;
                                        value = "ex";
                                    }}),
                                    add(new EnvironmentVariable("saepe", "error") {{
                                        key = "vel";
                                        secure = false;
                                        value = "nostrum";
                                    }}),
                                }};
                                name = "Eva Wisozk";
                                sslConfiguration = new SslConfiguration("dicta", "architecto") {{
                                    chain = "occaecati";
                                }};;
                                type = AppTypeEnum.RAILS;
                            }};, UpdateAppXAmzTargetEnum.OPS_WORKS20130218_UPDATE_APP) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "atque";
                xAmzCredential = "laborum";
                xAmzDate = "nam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "alias";
            }};            

            UpdateAppResponse res = sdk.sdk.updateApp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateElasticIp

<p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateElasticIpRequest;
import org.openapis.openapi.models.operations.UpdateElasticIpResponse;
import org.openapis.openapi.models.operations.UpdateElasticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateElasticIpRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateElasticIpRequest req = new UpdateElasticIpRequest(                new UpdateElasticIpRequest("deserunt") {{
                                name = "Lindsey Witting";
                            }};, UpdateElasticIpXAmzTargetEnum.OPS_WORKS20130218_UPDATE_ELASTIC_IP) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "perferendis";
                xAmzDate = "est";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "facere";
            }};            

            UpdateElasticIpResponse res = sdk.sdk.updateElasticIp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstance

<p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstanceRequest;
import org.openapis.openapi.models.operations.UpdateInstanceResponse;
import org.openapis.openapi.models.operations.UpdateInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.AutoScalingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstanceRequest req = new UpdateInstanceRequest(                new UpdateInstanceRequest("praesentium") {{
                                agentVersion = "mollitia";
                                amiId = "veniam";
                                architecture = ArchitectureEnum.X8664;
                                autoScalingType = AutoScalingTypeEnum.TIMER;
                                ebsOptimized = false;
                                hostname = "vacant-borrowing.name";
                                installUpdatesOnBoot = false;
                                instanceType = "reprehenderit";
                                layerIds = new String[]{{
                                    add("totam"),
                                    add("suscipit"),
                                    add("quidem"),
                                    add("maxime"),
                                }};
                                os = "et";
                                sshKeyName = "esse";
                            }};, UpdateInstanceXAmzTargetEnum.OPS_WORKS20130218_UPDATE_INSTANCE) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ea";
                xAmzDate = "atque";
                xAmzSecurityToken = "error";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateInstanceResponse res = sdk.sdk.updateInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLayer

<p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLayerRequest;
import org.openapis.openapi.models.operations.UpdateLayerResponse;
import org.openapis.openapi.models.operations.UpdateLayerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfiguration;
import org.openapis.openapi.models.shared.CloudWatchLogsEncodingEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsInitialPositionEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsLogStream;
import org.openapis.openapi.models.shared.CloudWatchLogsTimeZoneEnum;
import org.openapis.openapi.models.shared.LifecycleEventConfiguration;
import org.openapis.openapi.models.shared.Recipes;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShutdownEventConfiguration;
import org.openapis.openapi.models.shared.UpdateLayerRequest;
import org.openapis.openapi.models.shared.VolumeConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLayerRequest req = new UpdateLayerRequest(                new UpdateLayerRequest("natus") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "ex");
                                    put("maiores", "corrupti");
                                }};
                                autoAssignElasticIps = false;
                                autoAssignPublicIps = false;
                                cloudWatchLogsConfiguration = new CloudWatchLogsConfiguration() {{
                                    enabled = false;
                                    logStreams = new org.openapis.openapi.models.shared.CloudWatchLogsLogStream[]{{
                                        add(new CloudWatchLogsLogStream() {{
                                            batchCount = 621693L;
                                            batchSize = 502721L;
                                            bufferDuration = 379356L;
                                            datetimeFormat = "repudiandae";
                                            encoding = CloudWatchLogsEncodingEnum.ISO2022_JP;
                                            file = "atque";
                                            fileFingerprintLines = "sunt";
                                            initialPosition = CloudWatchLogsInitialPositionEnum.END_OF_FILE;
                                            logGroupName = "dolorum";
                                            multiLineStartPattern = "repellendus";
                                            timeZone = CloudWatchLogsTimeZoneEnum.LOCAL;
                                        }}),
                                        add(new CloudWatchLogsLogStream() {{
                                            batchCount = 968287L;
                                            batchSize = 42976L;
                                            bufferDuration = 919783L;
                                            datetimeFormat = "dicta";
                                            encoding = CloudWatchLogsEncodingEnum.CP037;
                                            file = "beatae";
                                            fileFingerprintLines = "dolores";
                                            initialPosition = CloudWatchLogsInitialPositionEnum.START_OF_FILE;
                                            logGroupName = "laboriosam";
                                            multiLineStartPattern = "velit";
                                            timeZone = CloudWatchLogsTimeZoneEnum.UTC;
                                        }}),
                                        add(new CloudWatchLogsLogStream() {{
                                            batchCount = 562783L;
                                            batchSize = 300029L;
                                            bufferDuration = 906355L;
                                            datetimeFormat = "consequuntur";
                                            encoding = CloudWatchLogsEncodingEnum.ISO2022_JP3;
                                            file = "officiis";
                                            fileFingerprintLines = "perspiciatis";
                                            initialPosition = CloudWatchLogsInitialPositionEnum.START_OF_FILE;
                                            logGroupName = "adipisci";
                                            multiLineStartPattern = "eveniet";
                                            timeZone = CloudWatchLogsTimeZoneEnum.UTC;
                                        }}),
                                        add(new CloudWatchLogsLogStream() {{
                                            batchCount = 160230L;
                                            batchSize = 145870L;
                                            bufferDuration = 661118L;
                                            datetimeFormat = "quis";
                                            encoding = CloudWatchLogsEncodingEnum.CP1258;
                                            file = "error";
                                            fileFingerprintLines = "illo";
                                            initialPosition = CloudWatchLogsInitialPositionEnum.START_OF_FILE;
                                            logGroupName = "quidem";
                                            multiLineStartPattern = "eveniet";
                                            timeZone = CloudWatchLogsTimeZoneEnum.LOCAL;
                                        }}),
                                    }};
                                }};;
                                customInstanceProfileArn = "vero";
                                customJson = "doloremque";
                                customRecipes = new Recipes() {{
                                    configure = new String[]{{
                                        add("ipsa"),
                                        add("totam"),
                                    }};
                                    deploy = new String[]{{
                                        add("molestiae"),
                                    }};
                                    setup = new String[]{{
                                        add("qui"),
                                        add("cum"),
                                        add("iure"),
                                        add("necessitatibus"),
                                    }};
                                    shutdown = new String[]{{
                                        add("laborum"),
                                    }};
                                    undeploy = new String[]{{
                                        add("voluptatum"),
                                        add("rem"),
                                        add("aliquam"),
                                    }};
                                }};;
                                customSecurityGroupIds = new String[]{{
                                    add("repellat"),
                                    add("alias"),
                                }};
                                enableAutoHealing = false;
                                installUpdatesOnBoot = false;
                                lifecycleEventConfiguration = new LifecycleEventConfiguration() {{
                                    shutdown = new ShutdownEventConfiguration() {{
                                        delayUntilElbConnectionsDrained = false;
                                        executionTimeout = 362189L;
                                    }};;
                                }};;
                                name = "Christian O'Conner DVM";
                                packages = new String[]{{
                                    add("dolores"),
                                    add("id"),
                                    add("minima"),
                                    add("dolore"),
                                }};
                                shortname = "dolorum";
                                useEbsOptimizedInstances = false;
                                volumeConfigurations = new org.openapis.openapi.models.shared.VolumeConfiguration[]{{
                                    add(new VolumeConfiguration("ut", 633062L, 238413L) {{
                                        encrypted = false;
                                        iops = 63207L;
                                        mountPoint = "recusandae";
                                        numberOfDisks = 607249L;
                                        raidLevel = 309251L;
                                        size = 477646L;
                                        volumeType = "ex";
                                    }}),
                                }};
                            }};, UpdateLayerXAmzTargetEnum.OPS_WORKS20130218_UPDATE_LAYER) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateLayerResponse res = sdk.sdk.updateLayer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMyUserProfile

<p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMyUserProfileRequest;
import org.openapis.openapi.models.operations.UpdateMyUserProfileResponse;
import org.openapis.openapi.models.operations.UpdateMyUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMyUserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMyUserProfileRequest req = new UpdateMyUserProfileRequest(                new UpdateMyUserProfileRequest() {{
                                sshPublicKey = "eum";
                            }};, UpdateMyUserProfileXAmzTargetEnum.OPS_WORKS20130218_UPDATE_MY_USER_PROFILE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "aspernatur";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "nostrum";
            }};            

            UpdateMyUserProfileResponse res = sdk.sdk.updateMyUserProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRdsDbInstance

<p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRdsDbInstanceRequest;
import org.openapis.openapi.models.operations.UpdateRdsDbInstanceResponse;
import org.openapis.openapi.models.operations.UpdateRdsDbInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRdsDbInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRdsDbInstanceRequest req = new UpdateRdsDbInstanceRequest(                new UpdateRdsDbInstanceRequest("provident") {{
                                dbPassword = "possimus";
                                dbUser = "animi";
                            }};, UpdateRdsDbInstanceXAmzTargetEnum.OPS_WORKS20130218_UPDATE_RDS_DB_INSTANCE) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "accusantium";
                xAmzDate = "repellat";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "in";
            }};            

            UpdateRdsDbInstanceResponse res = sdk.sdk.updateRdsDbInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStack

<p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStackRequest;
import org.openapis.openapi.models.operations.UpdateStackResponse;
import org.openapis.openapi.models.operations.UpdateStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChefConfiguration;
import org.openapis.openapi.models.shared.RootDeviceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.StackConfigurationManager;
import org.openapis.openapi.models.shared.UpdateStackRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStackRequest req = new UpdateStackRequest(                new UpdateStackRequest("earum") {{
                                agentVersion = "officia";
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("placeat", "modi");
                                    put("voluptatibus", "molestias");
                                    put("officiis", "sapiente");
                                }};
                                chefConfiguration = new ChefConfiguration() {{
                                    berkshelfVersion = "cumque";
                                    manageBerkshelf = false;
                                }};;
                                configurationManager = new StackConfigurationManager() {{
                                    name = "Luz Goldner Sr.";
                                    version = "cumque";
                                }};;
                                customCookbooksSource = new Source() {{
                                    password = "quae";
                                    revision = "perferendis";
                                    sshKey = "velit";
                                    type = SourceTypeEnum.GIT;
                                    url = "eum";
                                    username = "Deven_Lebsack17";
                                }};;
                                customJson = "sapiente";
                                defaultAvailabilityZone = "eum";
                                defaultInstanceProfileArn = "dicta";
                                defaultOs = "minima";
                                defaultRootDeviceType = RootDeviceTypeEnum.EBS;
                                defaultSshKeyName = "cupiditate";
                                defaultSubnetId = "provident";
                                hostnameTheme = "earum";
                                name = "Dr. Terrell Stanton";
                                serviceRoleArn = "maiores";
                                useCustomCookbooks = false;
                                useOpsworksSecurityGroups = false;
                            }};, UpdateStackXAmzTargetEnum.OPS_WORKS20130218_UPDATE_STACK) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "porro";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "cumque";
            }};            

            UpdateStackResponse res = sdk.sdk.updateStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserProfile

<p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserProfileRequest;
import org.openapis.openapi.models.operations.UpdateUserProfileResponse;
import org.openapis.openapi.models.operations.UpdateUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserProfileRequest req = new UpdateUserProfileRequest(                new UpdateUserProfileRequest("ratione") {{
                                allowSelfManagement = false;
                                sshPublicKey = "animi";
                                sshUsername = "necessitatibus";
                            }};, UpdateUserProfileXAmzTargetEnum.OPS_WORKS20130218_UPDATE_USER_PROFILE) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "quasi";
                xAmzDate = "et";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateUserProfileResponse res = sdk.sdk.updateUserProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVolume

<p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVolumeRequest;
import org.openapis.openapi.models.operations.UpdateVolumeResponse;
import org.openapis.openapi.models.operations.UpdateVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVolumeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVolumeRequest req = new UpdateVolumeRequest(                new UpdateVolumeRequest("adipisci") {{
                                mountPoint = "quasi";
                                name = "Melba Stokes I";
                            }};, UpdateVolumeXAmzTargetEnum.OPS_WORKS20130218_UPDATE_VOLUME) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "dicta";
                xAmzDate = "iusto";
                xAmzSecurityToken = "esse";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateVolumeResponse res = sdk.sdk.updateVolume(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
