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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignInstanceRequest();
    $request->assignInstanceRequest = new AssignInstanceRequest();
    $request->assignInstanceRequest->instanceId = 'iure';
    $request->assignInstanceRequest->layerIds = [
        'debitis',
        'ipsa',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = AssignInstanceXAmzTargetEnum::OPS_WORKS20130218_ASSIGN_INSTANCE;

    $response = $sdk->sdk->assignInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assignVolume

<p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignVolumeRequest();
    $request->assignVolumeRequest = new AssignVolumeRequest();
    $request->assignVolumeRequest->instanceId = 'iusto';
    $request->assignVolumeRequest->volumeId = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AssignVolumeXAmzTargetEnum::OPS_WORKS20130218_ASSIGN_VOLUME;

    $response = $sdk->sdk->assignVolume($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateElasticIp

<p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateElasticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateElasticIpRequest();
    $request->associateElasticIpRequest = new AssociateElasticIpRequest();
    $request->associateElasticIpRequest->elasticIp = 'perferendis';
    $request->associateElasticIpRequest->instanceId = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = AssociateElasticIpXAmzTargetEnum::OPS_WORKS20130218_ASSOCIATE_ELASTIC_IP;

    $response = $sdk->sdk->associateElasticIp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachElasticLoadBalancer

<p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachElasticLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachElasticLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachElasticLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachElasticLoadBalancerRequest();
    $request->attachElasticLoadBalancerRequest = new AttachElasticLoadBalancerRequest();
    $request->attachElasticLoadBalancerRequest->elasticLoadBalancerName = 'molestiae';
    $request->attachElasticLoadBalancerRequest->layerId = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = AttachElasticLoadBalancerXAmzTargetEnum::OPS_WORKS20130218_ATTACH_ELASTIC_LOAD_BALANCER;

    $response = $sdk->sdk->attachElasticLoadBalancer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneStack

<p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloneStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChefConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StackConfigurationManager;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloneStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneStackRequest();
    $request->cloneStackRequest = new CloneStackRequest();
    $request->cloneStackRequest->agentVersion = 'officia';
    $request->cloneStackRequest->attributes = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->cloneStackRequest->chefConfiguration = new ChefConfiguration();
    $request->cloneStackRequest->chefConfiguration->berkshelfVersion = 'commodi';
    $request->cloneStackRequest->chefConfiguration->manageBerkshelf = false;
    $request->cloneStackRequest->cloneAppIds = [
        'modi',
        'qui',
    ];
    $request->cloneStackRequest->clonePermissions = false;
    $request->cloneStackRequest->configurationManager = new StackConfigurationManager();
    $request->cloneStackRequest->configurationManager->name = 'Jonathon Klocko';
    $request->cloneStackRequest->configurationManager->version = 'aspernatur';
    $request->cloneStackRequest->customCookbooksSource = new Source();
    $request->cloneStackRequest->customCookbooksSource->password = 'perferendis';
    $request->cloneStackRequest->customCookbooksSource->revision = 'ad';
    $request->cloneStackRequest->customCookbooksSource->sshKey = 'natus';
    $request->cloneStackRequest->customCookbooksSource->type = SourceTypeEnum::GIT;
    $request->cloneStackRequest->customCookbooksSource->url = 'iste';
    $request->cloneStackRequest->customCookbooksSource->username = 'Dameon_Morissette';
    $request->cloneStackRequest->customJson = 'saepe';
    $request->cloneStackRequest->defaultAvailabilityZone = 'fuga';
    $request->cloneStackRequest->defaultInstanceProfileArn = 'in';
    $request->cloneStackRequest->defaultOs = 'corporis';
    $request->cloneStackRequest->defaultRootDeviceType = RootDeviceTypeEnum::INSTANCE_STORE;
    $request->cloneStackRequest->defaultSshKeyName = 'iure';
    $request->cloneStackRequest->defaultSubnetId = 'saepe';
    $request->cloneStackRequest->hostnameTheme = 'quidem';
    $request->cloneStackRequest->name = 'Brenda Wisozk';
    $request->cloneStackRequest->region = 'laborum';
    $request->cloneStackRequest->serviceRoleArn = 'dolores';
    $request->cloneStackRequest->sourceStackId = 'dolorem';
    $request->cloneStackRequest->useCustomCookbooks = false;
    $request->cloneStackRequest->useOpsworksSecurityGroups = false;
    $request->cloneStackRequest->vpcId = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CloneStackXAmzTargetEnum::OPS_WORKS20130218_CLONE_STACK;

    $response = $sdk->sdk->cloneStack($request);

    if ($response->cloneStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApp

<p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\SslConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->createAppRequest = new CreateAppRequest();
    $request->createAppRequest->appSource = new Source();
    $request->createAppRequest->appSource->password = 'accusantium';
    $request->createAppRequest->appSource->revision = 'iure';
    $request->createAppRequest->appSource->sshKey = 'culpa';
    $request->createAppRequest->appSource->type = SourceTypeEnum::S3;
    $request->createAppRequest->appSource->url = 'sapiente';
    $request->createAppRequest->appSource->username = 'Bart63';
    $request->createAppRequest->attributes = [
        'repellat' => 'mollitia',
    ];
    $request->createAppRequest->dataSources = [
        new DataSource(),
        new DataSource(),
        new DataSource(),
    ];
    $request->createAppRequest->description = 'numquam';
    $request->createAppRequest->domains = [
        'quam',
        'molestiae',
    ];
    $request->createAppRequest->enableSsl = false;
    $request->createAppRequest->environment = [
        new EnvironmentVariable(),
    ];
    $request->createAppRequest->name = 'Miss Eugene Hauck';
    $request->createAppRequest->shortname = 'enim';
    $request->createAppRequest->sslConfiguration = new SslConfiguration();
    $request->createAppRequest->sslConfiguration->certificate = 'odit';
    $request->createAppRequest->sslConfiguration->chain = 'quo';
    $request->createAppRequest->sslConfiguration->privateKey = 'sequi';
    $request->createAppRequest->stackId = 'tenetur';
    $request->createAppRequest->type = AppTypeEnum::RAILS;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateAppXAmzTargetEnum::OPS_WORKS20130218_CREATE_APP;

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

<p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentCommand;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentCommandNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->createDeploymentRequest = new CreateDeploymentRequest();
    $request->createDeploymentRequest->appId = 'quasi';
    $request->createDeploymentRequest->command = new DeploymentCommand();
    $request->createDeploymentRequest->command->args = [
        'voluptatibus' => [
            'nihil',
            'praesentium',
            'voluptatibus',
            'ipsa',
        ],
        'omnis' => [
            'cum',
            'perferendis',
        ],
        'doloremque' => [
            'ut',
            'maiores',
        ],
        'dicta' => [
            'dolore',
            'iusto',
        ],
    ];
    $request->createDeploymentRequest->command->name = DeploymentCommandNameEnum::UPDATE_DEPENDENCIES;
    $request->createDeploymentRequest->comment = 'harum';
    $request->createDeploymentRequest->customJson = 'enim';
    $request->createDeploymentRequest->instanceIds = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->createDeploymentRequest->layerIds = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->createDeploymentRequest->stackId = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = CreateDeploymentXAmzTargetEnum::OPS_WORKS20130218_CREATE_DEPLOYMENT;

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstance

<p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlockDeviceMapping;
use \OpenAPI\OpenAPI\Models\Shared\EbsBlockDevice;
use \OpenAPI\OpenAPI\Models\Shared\VolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstanceRequest();
    $request->createInstanceRequest = new CreateInstanceRequest();
    $request->createInstanceRequest->agentVersion = 'itaque';
    $request->createInstanceRequest->amiId = 'incidunt';
    $request->createInstanceRequest->architecture = ArchitectureEnum::X8664;
    $request->createInstanceRequest->autoScalingType = AutoScalingTypeEnum::LOAD;
    $request->createInstanceRequest->availabilityZone = 'est';
    $request->createInstanceRequest->blockDeviceMappings = [
        new BlockDeviceMapping(),
        new BlockDeviceMapping(),
        new BlockDeviceMapping(),
        new BlockDeviceMapping(),
    ];
    $request->createInstanceRequest->ebsOptimized = false;
    $request->createInstanceRequest->hostname = 'compassionate-penguin.net';
    $request->createInstanceRequest->installUpdatesOnBoot = false;
    $request->createInstanceRequest->instanceType = 'quibusdam';
    $request->createInstanceRequest->layerIds = [
        'modi',
        'qui',
    ];
    $request->createInstanceRequest->os = 'aliquid';
    $request->createInstanceRequest->rootDeviceType = RootDeviceTypeEnum::INSTANCE_STORE;
    $request->createInstanceRequest->sshKeyName = 'quos';
    $request->createInstanceRequest->stackId = 'perferendis';
    $request->createInstanceRequest->subnetId = 'magni';
    $request->createInstanceRequest->tenancy = 'assumenda';
    $request->createInstanceRequest->virtualizationType = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = CreateInstanceXAmzTargetEnum::OPS_WORKS20130218_CREATE_INSTANCE;

    $response = $sdk->sdk->createInstance($request);

    if ($response->createInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLayer

<p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsLogStream;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsInitialPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipes;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ShutdownEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LayerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateLayerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLayerRequest();
    $request->createLayerRequest = new CreateLayerRequest();
    $request->createLayerRequest->attributes = [
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->createLayerRequest->autoAssignElasticIps = false;
    $request->createLayerRequest->autoAssignPublicIps = false;
    $request->createLayerRequest->cloudWatchLogsConfiguration = new CloudWatchLogsConfiguration();
    $request->createLayerRequest->cloudWatchLogsConfiguration->enabled = false;
    $request->createLayerRequest->cloudWatchLogsConfiguration->logStreams = [
        new CloudWatchLogsLogStream(),
        new CloudWatchLogsLogStream(),
        new CloudWatchLogsLogStream(),
    ];
    $request->createLayerRequest->customInstanceProfileArn = 'aliquid';
    $request->createLayerRequest->customJson = 'provident';
    $request->createLayerRequest->customRecipes = new Recipes();
    $request->createLayerRequest->customRecipes->configure = [
        'sint',
        'officia',
        'dolor',
        'debitis',
    ];
    $request->createLayerRequest->customRecipes->deploy = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->createLayerRequest->customRecipes->setup = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createLayerRequest->customRecipes->shutdown = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->createLayerRequest->customRecipes->undeploy = [
        'occaecati',
    ];
    $request->createLayerRequest->customSecurityGroupIds = [
        'accusamus',
        'delectus',
    ];
    $request->createLayerRequest->enableAutoHealing = false;
    $request->createLayerRequest->installUpdatesOnBoot = false;
    $request->createLayerRequest->lifecycleEventConfiguration = new LifecycleEventConfiguration();
    $request->createLayerRequest->lifecycleEventConfiguration->shutdown = new ShutdownEventConfiguration();
    $request->createLayerRequest->lifecycleEventConfiguration->shutdown->delayUntilElbConnectionsDrained = false;
    $request->createLayerRequest->lifecycleEventConfiguration->shutdown->executionTimeout = 692532;
    $request->createLayerRequest->name = 'Marco Olson';
    $request->createLayerRequest->packages = [
        'amet',
        'deserunt',
        'nisi',
        'vel',
    ];
    $request->createLayerRequest->shortname = 'natus';
    $request->createLayerRequest->stackId = 'omnis';
    $request->createLayerRequest->type = LayerTypeEnum::PHP_APP;
    $request->createLayerRequest->useEbsOptimizedInstances = false;
    $request->createLayerRequest->volumeConfigurations = [
        new VolumeConfiguration(),
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = CreateLayerXAmzTargetEnum::OPS_WORKS20130218_CREATE_LAYER;

    $response = $sdk->sdk->createLayer($request);

    if ($response->createLayerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStack

<p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChefConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StackConfigurationManager;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStackRequest();
    $request->createStackRequest = new CreateStackRequest();
    $request->createStackRequest->agentVersion = 'natus';
    $request->createStackRequest->attributes = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->createStackRequest->chefConfiguration = new ChefConfiguration();
    $request->createStackRequest->chefConfiguration->berkshelfVersion = 'excepturi';
    $request->createStackRequest->chefConfiguration->manageBerkshelf = false;
    $request->createStackRequest->configurationManager = new StackConfigurationManager();
    $request->createStackRequest->configurationManager->name = 'Ramona Lueilwitz MD';
    $request->createStackRequest->configurationManager->version = 'reiciendis';
    $request->createStackRequest->customCookbooksSource = new Source();
    $request->createStackRequest->customCookbooksSource->password = 'mollitia';
    $request->createStackRequest->customCookbooksSource->revision = 'ad';
    $request->createStackRequest->customCookbooksSource->sshKey = 'eum';
    $request->createStackRequest->customCookbooksSource->type = SourceTypeEnum::GIT;
    $request->createStackRequest->customCookbooksSource->url = 'necessitatibus';
    $request->createStackRequest->customCookbooksSource->username = 'Brown43';
    $request->createStackRequest->customJson = 'doloribus';
    $request->createStackRequest->defaultAvailabilityZone = 'debitis';
    $request->createStackRequest->defaultInstanceProfileArn = 'eius';
    $request->createStackRequest->defaultOs = 'maxime';
    $request->createStackRequest->defaultRootDeviceType = RootDeviceTypeEnum::INSTANCE_STORE;
    $request->createStackRequest->defaultSshKeyName = 'facilis';
    $request->createStackRequest->defaultSubnetId = 'in';
    $request->createStackRequest->hostnameTheme = 'architecto';
    $request->createStackRequest->name = 'Elvira Herman';
    $request->createStackRequest->region = 'repellat';
    $request->createStackRequest->serviceRoleArn = 'quibusdam';
    $request->createStackRequest->useCustomCookbooks = false;
    $request->createStackRequest->useOpsworksSecurityGroups = false;
    $request->createStackRequest->vpcId = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = CreateStackXAmzTargetEnum::OPS_WORKS20130218_CREATE_STACK;

    $response = $sdk->sdk->createStack($request);

    if ($response->createStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserProfile

<p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserProfileRequest();
    $request->createUserProfileRequest = new CreateUserProfileRequest();
    $request->createUserProfileRequest->allowSelfManagement = false;
    $request->createUserProfileRequest->iamUserArn = 'sunt';
    $request->createUserProfileRequest->sshPublicKey = 'quo';
    $request->createUserProfileRequest->sshUsername = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateUserProfileXAmzTargetEnum::OPS_WORKS20130218_CREATE_USER_PROFILE;

    $response = $sdk->sdk->createUserProfile($request);

    if ($response->createUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

<p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->deleteAppRequest = new DeleteAppRequest();
    $request->deleteAppRequest->appId = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = DeleteAppXAmzTargetEnum::OPS_WORKS20130218_DELETE_APP;

    $response = $sdk->sdk->deleteApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstance

<p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceRequest();
    $request->deleteInstanceRequest = new DeleteInstanceRequest();
    $request->deleteInstanceRequest->deleteElasticIp = false;
    $request->deleteInstanceRequest->deleteVolumes = false;
    $request->deleteInstanceRequest->instanceId = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DeleteInstanceXAmzTargetEnum::OPS_WORKS20130218_DELETE_INSTANCE;

    $response = $sdk->sdk->deleteInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLayer

<p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLayerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLayerRequest();
    $request->deleteLayerRequest = new DeleteLayerRequest();
    $request->deleteLayerRequest->layerId = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DeleteLayerXAmzTargetEnum::OPS_WORKS20130218_DELETE_LAYER;

    $response = $sdk->sdk->deleteLayer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStack

<p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStackRequest();
    $request->deleteStackRequest = new DeleteStackRequest();
    $request->deleteStackRequest->stackId = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DeleteStackXAmzTargetEnum::OPS_WORKS20130218_DELETE_STACK;

    $response = $sdk->sdk->deleteStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserProfile

<p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

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
    $request->deleteUserProfileRequest->iamUserArn = 'dolor';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = DeleteUserProfileXAmzTargetEnum::OPS_WORKS20130218_DELETE_USER_PROFILE;

    $response = $sdk->sdk->deleteUserProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterEcsCluster

<p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterEcsClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterEcsClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterEcsClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterEcsClusterRequest();
    $request->deregisterEcsClusterRequest = new DeregisterEcsClusterRequest();
    $request->deregisterEcsClusterRequest->ecsClusterArn = 'voluptatem';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = DeregisterEcsClusterXAmzTargetEnum::OPS_WORKS20130218_DEREGISTER_ECS_CLUSTER;

    $response = $sdk->sdk->deregisterEcsCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterElasticIp

<p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterElasticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterElasticIpRequest();
    $request->deregisterElasticIpRequest = new DeregisterElasticIpRequest();
    $request->deregisterElasticIpRequest->elasticIp = 'adipisci';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeregisterElasticIpXAmzTargetEnum::OPS_WORKS20130218_DEREGISTER_ELASTIC_IP;

    $response = $sdk->sdk->deregisterElasticIp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterInstance

<p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterInstanceRequest();
    $request->deregisterInstanceRequest = new DeregisterInstanceRequest();
    $request->deregisterInstanceRequest->instanceId = 'provident';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeregisterInstanceXAmzTargetEnum::OPS_WORKS20130218_DEREGISTER_INSTANCE;

    $response = $sdk->sdk->deregisterInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterRdsDbInstance

<p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterRdsDbInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterRdsDbInstanceRequest();
    $request->deregisterRdsDbInstanceRequest = new DeregisterRdsDbInstanceRequest();
    $request->deregisterRdsDbInstanceRequest->rdsDbInstanceArn = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeregisterRdsDbInstanceXAmzTargetEnum::OPS_WORKS20130218_DEREGISTER_RDS_DB_INSTANCE;

    $response = $sdk->sdk->deregisterRdsDbInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterVolume

<p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterVolumeRequest();
    $request->deregisterVolumeRequest = new DeregisterVolumeRequest();
    $request->deregisterVolumeRequest->volumeId = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeregisterVolumeXAmzTargetEnum::OPS_WORKS20130218_DEREGISTER_VOLUME;

    $response = $sdk->sdk->deregisterVolume($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAgentVersions

Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAgentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StackConfigurationManager;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAgentVersionsRequest();
    $request->describeAgentVersionsRequest = new DescribeAgentVersionsRequest();
    $request->describeAgentVersionsRequest->configurationManager = new StackConfigurationManager();
    $request->describeAgentVersionsRequest->configurationManager->name = 'Viola Hahn';
    $request->describeAgentVersionsRequest->configurationManager->version = 'voluptatibus';
    $request->describeAgentVersionsRequest->stackId = 'voluptas';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = DescribeAgentVersionsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_AGENT_VERSIONS;

    $response = $sdk->sdk->describeAgentVersions($request);

    if ($response->describeAgentVersionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApps

<p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppsRequest();
    $request->describeAppsRequest = new DescribeAppsRequest();
    $request->describeAppsRequest->appIds = [
        'iusto',
        'voluptate',
        'dolorum',
    ];
    $request->describeAppsRequest->stackId = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeAppsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_APPS;

    $response = $sdk->sdk->describeApps($request);

    if ($response->describeAppsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCommands

<p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCommandsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCommandsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCommandsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCommandsRequest();
    $request->describeCommandsRequest = new DescribeCommandsRequest();
    $request->describeCommandsRequest->commandIds = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->describeCommandsRequest->deploymentId = 'perferendis';
    $request->describeCommandsRequest->instanceId = 'amet';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DescribeCommandsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_COMMANDS;

    $response = $sdk->sdk->describeCommands($request);

    if ($response->describeCommandsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeployments

<p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeploymentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeploymentsRequest();
    $request->describeDeploymentsRequest = new DescribeDeploymentsRequest();
    $request->describeDeploymentsRequest->appId = 'minima';
    $request->describeDeploymentsRequest->deploymentIds = [
        'totam',
        'similique',
        'alias',
        'at',
    ];
    $request->describeDeploymentsRequest->stackId = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = DescribeDeploymentsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_DEPLOYMENTS;

    $response = $sdk->sdk->describeDeployments($request);

    if ($response->describeDeploymentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEcsClusters

<p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEcsClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEcsClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEcsClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEcsClustersRequest();
    $request->describeEcsClustersRequest = new DescribeEcsClustersRequest();
    $request->describeEcsClustersRequest->ecsClusterArns = [
        'harum',
        'iusto',
    ];
    $request->describeEcsClustersRequest->maxResults = 215507;
    $request->describeEcsClustersRequest->nextToken = 'quisquam';
    $request->describeEcsClustersRequest->stackId = 'tenetur';
    $request->maxResults = 'amet';
    $request->nextToken = 'tempore';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DescribeEcsClustersXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_ECS_CLUSTERS;

    $response = $sdk->sdk->describeEcsClusters($request);

    if ($response->describeEcsClustersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeElasticIps

<p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeElasticIpsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeElasticIpsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeElasticIpsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeElasticIpsRequest();
    $request->describeElasticIpsRequest = new DescribeElasticIpsRequest();
    $request->describeElasticIpsRequest->instanceId = 'sit';
    $request->describeElasticIpsRequest->ips = [
        'neque',
        'sed',
        'vel',
    ];
    $request->describeElasticIpsRequest->stackId = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeElasticIpsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_ELASTIC_IPS;

    $response = $sdk->sdk->describeElasticIps($request);

    if ($response->describeElasticIpsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeElasticLoadBalancers

<p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeElasticLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeElasticLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeElasticLoadBalancersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeElasticLoadBalancersRequest();
    $request->describeElasticLoadBalancersRequest = new DescribeElasticLoadBalancersRequest();
    $request->describeElasticLoadBalancersRequest->layerIds = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->describeElasticLoadBalancersRequest->stackId = 'totam';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeElasticLoadBalancersXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_ELASTIC_LOAD_BALANCERS;

    $response = $sdk->sdk->describeElasticLoadBalancers($request);

    if ($response->describeElasticLoadBalancersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstances

<p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstancesRequest();
    $request->describeInstancesRequest = new DescribeInstancesRequest();
    $request->describeInstancesRequest->instanceIds = [
        'temporibus',
        'qui',
        'neque',
    ];
    $request->describeInstancesRequest->layerId = 'fugit';
    $request->describeInstancesRequest->stackId = 'magni';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeInstancesXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_INSTANCES;

    $response = $sdk->sdk->describeInstances($request);

    if ($response->describeInstancesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLayers

<p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLayersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLayersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLayersRequest();
    $request->describeLayersRequest = new DescribeLayersRequest();
    $request->describeLayersRequest->layerIds = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->describeLayersRequest->stackId = 'ipsum';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DescribeLayersXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_LAYERS;

    $response = $sdk->sdk->describeLayers($request);

    if ($response->describeLayersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoadBasedAutoScaling

<p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoadBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLoadBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoadBasedAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoadBasedAutoScalingRequest();
    $request->describeLoadBasedAutoScalingRequest = new DescribeLoadBasedAutoScalingRequest();
    $request->describeLoadBasedAutoScalingRequest->layerIds = [
        'dolore',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DescribeLoadBasedAutoScalingXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_LOAD_BASED_AUTO_SCALING;

    $response = $sdk->sdk->describeLoadBasedAutoScaling($request);

    if ($response->describeLoadBasedAutoScalingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMyUserProfile

<p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMyUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMyUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMyUserProfileRequest();
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DescribeMyUserProfileXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_MY_USER_PROFILE;

    $response = $sdk->sdk->describeMyUserProfile($request);

    if ($response->describeMyUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOperatingSystems

Describes the operating systems that are supported by AWS OpsWorks Stacks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOperatingSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOperatingSystemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOperatingSystemsRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DescribeOperatingSystemsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_OPERATING_SYSTEMS;

    $response = $sdk->sdk->describeOperatingSystems($request);

    if ($response->describeOperatingSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePermissions

<p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePermissionsRequest();
    $request->describePermissionsRequest = new DescribePermissionsRequest();
    $request->describePermissionsRequest->iamUserArn = 'voluptatibus';
    $request->describePermissionsRequest->stackId = 'quisquam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = DescribePermissionsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_PERMISSIONS;

    $response = $sdk->sdk->describePermissions($request);

    if ($response->describePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRaidArrays

<p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRaidArraysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRaidArraysRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRaidArraysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRaidArraysRequest();
    $request->describeRaidArraysRequest = new DescribeRaidArraysRequest();
    $request->describeRaidArraysRequest->instanceId = 'vero';
    $request->describeRaidArraysRequest->raidArrayIds = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->describeRaidArraysRequest->stackId = 'odio';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeRaidArraysXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_RAID_ARRAYS;

    $response = $sdk->sdk->describeRaidArrays($request);

    if ($response->describeRaidArraysResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRdsDbInstances

<p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRdsDbInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRdsDbInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRdsDbInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRdsDbInstancesRequest();
    $request->describeRdsDbInstancesRequest = new DescribeRdsDbInstancesRequest();
    $request->describeRdsDbInstancesRequest->rdsDbInstanceArns = [
        'natus',
    ];
    $request->describeRdsDbInstancesRequest->stackId = 'impedit';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeRdsDbInstancesXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_RDS_DB_INSTANCES;

    $response = $sdk->sdk->describeRdsDbInstances($request);

    if ($response->describeRdsDbInstancesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServiceErrors

<p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceErrorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServiceErrorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceErrorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceErrorsRequest();
    $request->describeServiceErrorsRequest = new DescribeServiceErrorsRequest();
    $request->describeServiceErrorsRequest->instanceId = 'doloribus';
    $request->describeServiceErrorsRequest->serviceErrorIds = [
        'eligendi',
        'ducimus',
    ];
    $request->describeServiceErrorsRequest->stackId = 'alias';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DescribeServiceErrorsXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_SERVICE_ERRORS;

    $response = $sdk->sdk->describeServiceErrors($request);

    if ($response->describeServiceErrorsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStackProvisioningParameters

<p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStackProvisioningParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStackProvisioningParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStackProvisioningParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStackProvisioningParametersRequest();
    $request->describeStackProvisioningParametersRequest = new DescribeStackProvisioningParametersRequest();
    $request->describeStackProvisioningParametersRequest->stackId = 'magnam';
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeStackProvisioningParametersXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_STACK_PROVISIONING_PARAMETERS;

    $response = $sdk->sdk->describeStackProvisioningParameters($request);

    if ($response->describeStackProvisioningParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStackSummary

<p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStackSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStackSummaryRequest();
    $request->describeStackSummaryRequest = new DescribeStackSummaryRequest();
    $request->describeStackSummaryRequest->stackId = 'ex';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DescribeStackSummaryXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_STACK_SUMMARY;

    $response = $sdk->sdk->describeStackSummary($request);

    if ($response->describeStackSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStacks

<p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStacksRequest();
    $request->describeStacksRequest = new DescribeStacksRequest();
    $request->describeStacksRequest->stackIds = [
        'impedit',
        'corporis',
    ];
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = DescribeStacksXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_STACKS;

    $response = $sdk->sdk->describeStacks($request);

    if ($response->describeStacksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTimeBasedAutoScaling

<p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTimeBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTimeBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTimeBasedAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTimeBasedAutoScalingRequest();
    $request->describeTimeBasedAutoScalingRequest = new DescribeTimeBasedAutoScalingRequest();
    $request->describeTimeBasedAutoScalingRequest->instanceIds = [
        'aspernatur',
        'minima',
        'eaque',
        'a',
    ];
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DescribeTimeBasedAutoScalingXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_TIME_BASED_AUTO_SCALING;

    $response = $sdk->sdk->describeTimeBasedAutoScaling($request);

    if ($response->describeTimeBasedAutoScalingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserProfiles

<p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserProfilesRequest();
    $request->describeUserProfilesRequest = new DescribeUserProfilesRequest();
    $request->describeUserProfilesRequest->iamUserArns = [
        'inventore',
        'non',
        'et',
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DescribeUserProfilesXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_USER_PROFILES;

    $response = $sdk->sdk->describeUserProfiles($request);

    if ($response->describeUserProfilesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVolumes

<p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVolumesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVolumesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVolumesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVolumesRequest();
    $request->describeVolumesRequest = new DescribeVolumesRequest();
    $request->describeVolumesRequest->instanceId = 'assumenda';
    $request->describeVolumesRequest->raidArrayId = 'nulla';
    $request->describeVolumesRequest->stackId = 'voluptas';
    $request->describeVolumesRequest->volumeIds = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DescribeVolumesXAmzTargetEnum::OPS_WORKS20130218_DESCRIBE_VOLUMES;

    $response = $sdk->sdk->describeVolumes($request);

    if ($response->describeVolumesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachElasticLoadBalancer

<p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachElasticLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachElasticLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachElasticLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachElasticLoadBalancerRequest();
    $request->detachElasticLoadBalancerRequest = new DetachElasticLoadBalancerRequest();
    $request->detachElasticLoadBalancerRequest->elasticLoadBalancerName = 'esse';
    $request->detachElasticLoadBalancerRequest->layerId = 'esse';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DetachElasticLoadBalancerXAmzTargetEnum::OPS_WORKS20130218_DETACH_ELASTIC_LOAD_BALANCER;

    $response = $sdk->sdk->detachElasticLoadBalancer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateElasticIp

<p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateElasticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateElasticIpRequest();
    $request->disassociateElasticIpRequest = new DisassociateElasticIpRequest();
    $request->disassociateElasticIpRequest->elasticIp = 'suscipit';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DisassociateElasticIpXAmzTargetEnum::OPS_WORKS20130218_DISASSOCIATE_ELASTIC_IP;

    $response = $sdk->sdk->disassociateElasticIp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHostnameSuggestion

<p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHostnameSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetHostnameSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHostnameSuggestionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostnameSuggestionRequest();
    $request->getHostnameSuggestionRequest = new GetHostnameSuggestionRequest();
    $request->getHostnameSuggestionRequest->layerId = 'quidem';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = GetHostnameSuggestionXAmzTargetEnum::OPS_WORKS20130218_GET_HOSTNAME_SUGGESTION;

    $response = $sdk->sdk->getHostnameSuggestion($request);

    if ($response->getHostnameSuggestionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## grantAccess

<note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GrantAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GrantAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GrantAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GrantAccessRequest();
    $request->grantAccessRequest = new GrantAccessRequest();
    $request->grantAccessRequest->instanceId = 'voluptas';
    $request->grantAccessRequest->validForInMinutes = 69859;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = GrantAccessXAmzTargetEnum::OPS_WORKS20130218_GRANT_ACCESS;

    $response = $sdk->sdk->grantAccess($request);

    if ($response->grantAccessResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Returns a list of tags that are applied to the specified stack or layer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->listTagsRequest = new ListTagsRequest();
    $request->listTagsRequest->maxResults = 779192;
    $request->listTagsRequest->nextToken = 'esse';
    $request->listTagsRequest->resourceArn = 'recusandae';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::OPS_WORKS20130218_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootInstance

<p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebootInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootInstanceRequest();
    $request->rebootInstanceRequest = new RebootInstanceRequest();
    $request->rebootInstanceRequest->instanceId = 'accusamus';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = RebootInstanceXAmzTargetEnum::OPS_WORKS20130218_REBOOT_INSTANCE;

    $response = $sdk->sdk->rebootInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerEcsCluster

<p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterEcsClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterEcsClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterEcsClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterEcsClusterRequest();
    $request->registerEcsClusterRequest = new RegisterEcsClusterRequest();
    $request->registerEcsClusterRequest->ecsClusterArn = 'molestiae';
    $request->registerEcsClusterRequest->stackId = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = RegisterEcsClusterXAmzTargetEnum::OPS_WORKS20130218_REGISTER_ECS_CLUSTER;

    $response = $sdk->sdk->registerEcsCluster($request);

    if ($response->registerEcsClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerElasticIp

<p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterElasticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterElasticIpRequest();
    $request->registerElasticIpRequest = new RegisterElasticIpRequest();
    $request->registerElasticIpRequest->elasticIp = 'fuga';
    $request->registerElasticIpRequest->stackId = 'mollitia';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = RegisterElasticIpXAmzTargetEnum::OPS_WORKS20130218_REGISTER_ELASTIC_IP;

    $response = $sdk->sdk->registerElasticIp($request);

    if ($response->registerElasticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerInstance

<p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceIdentity;
use \OpenAPI\OpenAPI\Models\Operations\RegisterInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterInstanceRequest();
    $request->registerInstanceRequest = new RegisterInstanceRequest();
    $request->registerInstanceRequest->hostname = 'cumbersome-community.com';
    $request->registerInstanceRequest->instanceIdentity = new InstanceIdentity();
    $request->registerInstanceRequest->instanceIdentity->document = 'saepe';
    $request->registerInstanceRequest->instanceIdentity->signature = 'occaecati';
    $request->registerInstanceRequest->privateIp = 'atque';
    $request->registerInstanceRequest->publicIp = 'et';
    $request->registerInstanceRequest->rsaPublicKey = 'esse';
    $request->registerInstanceRequest->rsaPublicKeyFingerprint = 'eveniet';
    $request->registerInstanceRequest->stackId = 'accusamus';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = RegisterInstanceXAmzTargetEnum::OPS_WORKS20130218_REGISTER_INSTANCE;

    $response = $sdk->sdk->registerInstance($request);

    if ($response->registerInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerRdsDbInstance

<p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterRdsDbInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRdsDbInstanceRequest();
    $request->registerRdsDbInstanceRequest = new RegisterRdsDbInstanceRequest();
    $request->registerRdsDbInstanceRequest->dbPassword = 'saepe';
    $request->registerRdsDbInstanceRequest->dbUser = 'vel';
    $request->registerRdsDbInstanceRequest->rdsDbInstanceArn = 'harum';
    $request->registerRdsDbInstanceRequest->stackId = 'molestiae';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = RegisterRdsDbInstanceXAmzTargetEnum::OPS_WORKS20130218_REGISTER_RDS_DB_INSTANCE;

    $response = $sdk->sdk->registerRdsDbInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerVolume

<p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterVolumeRequest();
    $request->registerVolumeRequest = new RegisterVolumeRequest();
    $request->registerVolumeRequest->ec2VolumeId = 'tempore';
    $request->registerVolumeRequest->stackId = 'adipisci';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = RegisterVolumeXAmzTargetEnum::OPS_WORKS20130218_REGISTER_VOLUME;

    $response = $sdk->sdk->registerVolume($request);

    if ($response->registerVolumeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setLoadBasedAutoScaling

<p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetLoadBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetLoadBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingThresholds;
use \OpenAPI\OpenAPI\Models\Operations\SetLoadBasedAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetLoadBasedAutoScalingRequest();
    $request->setLoadBasedAutoScalingRequest = new SetLoadBasedAutoScalingRequest();
    $request->setLoadBasedAutoScalingRequest->downScaling = new AutoScalingThresholds();
    $request->setLoadBasedAutoScalingRequest->downScaling->alarms = [
        'blanditiis',
        'provident',
    ];
    $request->setLoadBasedAutoScalingRequest->downScaling->cpuThreshold = 9537.22;
    $request->setLoadBasedAutoScalingRequest->downScaling->ignoreMetricsTime = 857723;
    $request->setLoadBasedAutoScalingRequest->downScaling->instanceCount = 557811;
    $request->setLoadBasedAutoScalingRequest->downScaling->loadThreshold = 4572.23;
    $request->setLoadBasedAutoScalingRequest->downScaling->memoryThreshold = 974.68;
    $request->setLoadBasedAutoScalingRequest->downScaling->thresholdsWaitTime = 951875;
    $request->setLoadBasedAutoScalingRequest->enable = false;
    $request->setLoadBasedAutoScalingRequest->layerId = 'error';
    $request->setLoadBasedAutoScalingRequest->upScaling = new AutoScalingThresholds();
    $request->setLoadBasedAutoScalingRequest->upScaling->alarms = [
        'pariatur',
        'possimus',
        'quia',
    ];
    $request->setLoadBasedAutoScalingRequest->upScaling->cpuThreshold = 9088.44;
    $request->setLoadBasedAutoScalingRequest->upScaling->ignoreMetricsTime = 992430;
    $request->setLoadBasedAutoScalingRequest->upScaling->instanceCount = 815524;
    $request->setLoadBasedAutoScalingRequest->upScaling->loadThreshold = 850.01;
    $request->setLoadBasedAutoScalingRequest->upScaling->memoryThreshold = 1594.14;
    $request->setLoadBasedAutoScalingRequest->upScaling->thresholdsWaitTime = 94458;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = SetLoadBasedAutoScalingXAmzTargetEnum::OPS_WORKS20130218_SET_LOAD_BASED_AUTO_SCALING;

    $response = $sdk->sdk->setLoadBasedAutoScaling($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPermission

<p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetPermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPermissionRequest();
    $request->setPermissionRequest = new SetPermissionRequest();
    $request->setPermissionRequest->allowSsh = false;
    $request->setPermissionRequest->allowSudo = false;
    $request->setPermissionRequest->iamUserArn = 'in';
    $request->setPermissionRequest->level = 'eius';
    $request->setPermissionRequest->stackId = 'libero';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = SetPermissionXAmzTargetEnum::OPS_WORKS20130218_SET_PERMISSION;

    $response = $sdk->sdk->setPermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTimeBasedAutoScaling

<p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTimeBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetTimeBasedAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyAutoScalingSchedule;
use \OpenAPI\OpenAPI\Models\Operations\SetTimeBasedAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTimeBasedAutoScalingRequest();
    $request->setTimeBasedAutoScalingRequest = new SetTimeBasedAutoScalingRequest();
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule = new WeeklyAutoScalingSchedule();
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->friday = [
        'ullam' => 'nisi',
        'aut' => 'voluptatum',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->monday = [
        'quibusdam' => 'ex',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->saturday = [
        'itaque' => 'dolorum',
        'architecto' => 'omnis',
        'tenetur' => 'quasi',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->sunday = [
        'et' => 'voluptate',
        'ipsa' => 'minima',
        'veritatis' => 'consectetur',
        'adipisci' => 'iste',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->thursday = [
        'accusantium' => 'rem',
        'aut' => 'laudantium',
        'eum' => 'mollitia',
        'ab' => 'corrupti',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->tuesday = [
        'voluptatem' => 'dolor',
        'occaecati' => 'numquam',
    ];
    $request->setTimeBasedAutoScalingRequest->autoScalingSchedule->wednesday = [
        'explicabo' => 'voluptas',
        'aut' => 'dignissimos',
        'dicta' => 'maiores',
        'natus' => 'velit',
    ];
    $request->setTimeBasedAutoScalingRequest->instanceId = 'voluptatibus';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = SetTimeBasedAutoScalingXAmzTargetEnum::OPS_WORKS20130218_SET_TIME_BASED_AUTO_SCALING;

    $response = $sdk->sdk->setTimeBasedAutoScaling($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startInstance

<p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartInstanceRequest();
    $request->startInstanceRequest = new StartInstanceRequest();
    $request->startInstanceRequest->instanceId = 'officia';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = StartInstanceXAmzTargetEnum::OPS_WORKS20130218_START_INSTANCE;

    $response = $sdk->sdk->startInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startStack

<p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartStackRequest();
    $request->startStackRequest = new StartStackRequest();
    $request->startStackRequest->stackId = 'porro';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = StartStackXAmzTargetEnum::OPS_WORKS20130218_START_STACK;

    $response = $sdk->sdk->startStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopInstance

<p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopInstanceRequest();
    $request->stopInstanceRequest = new StopInstanceRequest();
    $request->stopInstanceRequest->force = false;
    $request->stopInstanceRequest->instanceId = 'velit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = StopInstanceXAmzTargetEnum::OPS_WORKS20130218_STOP_INSTANCE;

    $response = $sdk->sdk->stopInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopStack

<p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopStackRequest();
    $request->stopStackRequest = new StopStackRequest();
    $request->stopStackRequest->stackId = 'quos';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = StopStackXAmzTargetEnum::OPS_WORKS20130218_STOP_STACK;

    $response = $sdk->sdk->stopStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'corporis';
    $request->tagResourceRequest->tags = [
        'assumenda' => 'nemo',
        'recusandae' => 'aliquid',
        'aperiam' => 'cum',
        'consectetur' => 'in',
    ];
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::OPS_WORKS20130218_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unassignInstance

<p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnassignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnassignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnassignInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnassignInstanceRequest();
    $request->unassignInstanceRequest = new UnassignInstanceRequest();
    $request->unassignInstanceRequest->instanceId = 'quidem';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = UnassignInstanceXAmzTargetEnum::OPS_WORKS20130218_UNASSIGN_INSTANCE;

    $response = $sdk->sdk->unassignInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unassignVolume

<p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnassignVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnassignVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnassignVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnassignVolumeRequest();
    $request->unassignVolumeRequest = new UnassignVolumeRequest();
    $request->unassignVolumeRequest->volumeId = 'amet';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = UnassignVolumeXAmzTargetEnum::OPS_WORKS20130218_UNASSIGN_VOLUME;

    $response = $sdk->sdk->unassignVolume($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a specified stack or layer.

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
    $request->untagResourceRequest->resourceArn = 'laboriosam';
    $request->untagResourceRequest->tagKeys = [
        'voluptates',
    ];
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::OPS_WORKS20130218_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApp

<p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\SslConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppRequest();
    $request->updateAppRequest = new UpdateAppRequest();
    $request->updateAppRequest->appId = 'voluptas';
    $request->updateAppRequest->appSource = new Source();
    $request->updateAppRequest->appSource->password = 'voluptas';
    $request->updateAppRequest->appSource->revision = 'minima';
    $request->updateAppRequest->appSource->sshKey = 'nobis';
    $request->updateAppRequest->appSource->type = SourceTypeEnum::ARCHIVE;
    $request->updateAppRequest->appSource->url = 'adipisci';
    $request->updateAppRequest->appSource->username = 'Pete.DAmore';
    $request->updateAppRequest->attributes = [
        'aliquam' => 'officiis',
        'temporibus' => 'ullam',
    ];
    $request->updateAppRequest->dataSources = [
        new DataSource(),
    ];
    $request->updateAppRequest->description = 'cum';
    $request->updateAppRequest->domains = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->updateAppRequest->enableSsl = false;
    $request->updateAppRequest->environment = [
        new EnvironmentVariable(),
        new EnvironmentVariable(),
        new EnvironmentVariable(),
    ];
    $request->updateAppRequest->name = 'Dewey Leannon';
    $request->updateAppRequest->sslConfiguration = new SslConfiguration();
    $request->updateAppRequest->sslConfiguration->certificate = 'nobis';
    $request->updateAppRequest->sslConfiguration->chain = 'sit';
    $request->updateAppRequest->sslConfiguration->privateKey = 'rerum';
    $request->updateAppRequest->type = AppTypeEnum::JAVA;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = UpdateAppXAmzTargetEnum::OPS_WORKS20130218_UPDATE_APP;

    $response = $sdk->sdk->updateApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateElasticIp

<p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateElasticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateElasticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateElasticIpRequest();
    $request->updateElasticIpRequest = new UpdateElasticIpRequest();
    $request->updateElasticIpRequest->elasticIp = 'iste';
    $request->updateElasticIpRequest->name = 'Janie Cremin';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = UpdateElasticIpXAmzTargetEnum::OPS_WORKS20130218_UPDATE_ELASTIC_IP;

    $response = $sdk->sdk->updateElasticIp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstance

<p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstanceRequest();
    $request->updateInstanceRequest = new UpdateInstanceRequest();
    $request->updateInstanceRequest->agentVersion = 'debitis';
    $request->updateInstanceRequest->amiId = 'illo';
    $request->updateInstanceRequest->architecture = ArchitectureEnum::I386;
    $request->updateInstanceRequest->autoScalingType = AutoScalingTypeEnum::LOAD;
    $request->updateInstanceRequest->ebsOptimized = false;
    $request->updateInstanceRequest->hostname = 'motionless-whisker.biz';
    $request->updateInstanceRequest->installUpdatesOnBoot = false;
    $request->updateInstanceRequest->instanceId = 'sed';
    $request->updateInstanceRequest->instanceType = 'provident';
    $request->updateInstanceRequest->layerIds = [
        'necessitatibus',
        'ipsum',
    ];
    $request->updateInstanceRequest->os = 'ea';
    $request->updateInstanceRequest->sshKeyName = 'occaecati';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = UpdateInstanceXAmzTargetEnum::OPS_WORKS20130218_UPDATE_INSTANCE;

    $response = $sdk->sdk->updateInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLayer

<p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsLogStream;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsInitialPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipes;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ShutdownEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLayerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLayerRequest();
    $request->updateLayerRequest = new UpdateLayerRequest();
    $request->updateLayerRequest->attributes = [
        'non' => 'officiis',
    ];
    $request->updateLayerRequest->autoAssignElasticIps = false;
    $request->updateLayerRequest->autoAssignPublicIps = false;
    $request->updateLayerRequest->cloudWatchLogsConfiguration = new CloudWatchLogsConfiguration();
    $request->updateLayerRequest->cloudWatchLogsConfiguration->enabled = false;
    $request->updateLayerRequest->cloudWatchLogsConfiguration->logStreams = [
        new CloudWatchLogsLogStream(),
        new CloudWatchLogsLogStream(),
        new CloudWatchLogsLogStream(),
    ];
    $request->updateLayerRequest->customInstanceProfileArn = 'facilis';
    $request->updateLayerRequest->customJson = 'quaerat';
    $request->updateLayerRequest->customRecipes = new Recipes();
    $request->updateLayerRequest->customRecipes->configure = [
        'ipsam',
        'debitis',
    ];
    $request->updateLayerRequest->customRecipes->deploy = [
        'sit',
        'nobis',
        'error',
    ];
    $request->updateLayerRequest->customRecipes->setup = [
        'minima',
        'recusandae',
    ];
    $request->updateLayerRequest->customRecipes->shutdown = [
        'nulla',
        'magni',
        'aperiam',
        'saepe',
    ];
    $request->updateLayerRequest->customRecipes->undeploy = [
        'veniam',
        'in',
    ];
    $request->updateLayerRequest->customSecurityGroupIds = [
        'beatae',
        'laudantium',
        'exercitationem',
        'praesentium',
    ];
    $request->updateLayerRequest->enableAutoHealing = false;
    $request->updateLayerRequest->installUpdatesOnBoot = false;
    $request->updateLayerRequest->layerId = 'cum';
    $request->updateLayerRequest->lifecycleEventConfiguration = new LifecycleEventConfiguration();
    $request->updateLayerRequest->lifecycleEventConfiguration->shutdown = new ShutdownEventConfiguration();
    $request->updateLayerRequest->lifecycleEventConfiguration->shutdown->delayUntilElbConnectionsDrained = false;
    $request->updateLayerRequest->lifecycleEventConfiguration->shutdown->executionTimeout = 386827;
    $request->updateLayerRequest->name = 'Bob Mueller';
    $request->updateLayerRequest->packages = [
        'neque',
        'dolorum',
        'nostrum',
        'officia',
    ];
    $request->updateLayerRequest->shortname = 'dolorum';
    $request->updateLayerRequest->useEbsOptimizedInstances = false;
    $request->updateLayerRequest->volumeConfigurations = [
        new VolumeConfiguration(),
        new VolumeConfiguration(),
        new VolumeConfiguration(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = UpdateLayerXAmzTargetEnum::OPS_WORKS20130218_UPDATE_LAYER;

    $response = $sdk->sdk->updateLayer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMyUserProfile

<p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMyUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMyUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMyUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMyUserProfileRequest();
    $request->updateMyUserProfileRequest = new UpdateMyUserProfileRequest();
    $request->updateMyUserProfileRequest->sshPublicKey = 'culpa';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = UpdateMyUserProfileXAmzTargetEnum::OPS_WORKS20130218_UPDATE_MY_USER_PROFILE;

    $response = $sdk->sdk->updateMyUserProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRdsDbInstance

<p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRdsDbInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRdsDbInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRdsDbInstanceRequest();
    $request->updateRdsDbInstanceRequest = new UpdateRdsDbInstanceRequest();
    $request->updateRdsDbInstanceRequest->dbPassword = 'quas';
    $request->updateRdsDbInstanceRequest->dbUser = 'repudiandae';
    $request->updateRdsDbInstanceRequest->rdsDbInstanceArn = 'corporis';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = UpdateRdsDbInstanceXAmzTargetEnum::OPS_WORKS20130218_UPDATE_RDS_DB_INSTANCE;

    $response = $sdk->sdk->updateRdsDbInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStack

<p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChefConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StackConfigurationManager;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStackRequest();
    $request->updateStackRequest = new UpdateStackRequest();
    $request->updateStackRequest->agentVersion = 'saepe';
    $request->updateStackRequest->attributes = [
        'consequatur' => 'incidunt',
        'reiciendis' => 'dolorem',
        'harum' => 'dicta',
    ];
    $request->updateStackRequest->chefConfiguration = new ChefConfiguration();
    $request->updateStackRequest->chefConfiguration->berkshelfVersion = 'architecto';
    $request->updateStackRequest->chefConfiguration->manageBerkshelf = false;
    $request->updateStackRequest->configurationManager = new StackConfigurationManager();
    $request->updateStackRequest->configurationManager->name = 'Francisco Powlowski';
    $request->updateStackRequest->configurationManager->version = 'nam';
    $request->updateStackRequest->customCookbooksSource = new Source();
    $request->updateStackRequest->customCookbooksSource->password = 'tenetur';
    $request->updateStackRequest->customCookbooksSource->revision = 'laboriosam';
    $request->updateStackRequest->customCookbooksSource->sshKey = 'alias';
    $request->updateStackRequest->customCookbooksSource->type = SourceTypeEnum::GIT;
    $request->updateStackRequest->customCookbooksSource->url = 'deserunt';
    $request->updateStackRequest->customCookbooksSource->username = 'Jackeline_Miller83';
    $request->updateStackRequest->customJson = 'delectus';
    $request->updateStackRequest->defaultAvailabilityZone = 'voluptates';
    $request->updateStackRequest->defaultInstanceProfileArn = 'perferendis';
    $request->updateStackRequest->defaultOs = 'est';
    $request->updateStackRequest->defaultRootDeviceType = RootDeviceTypeEnum::INSTANCE_STORE;
    $request->updateStackRequest->defaultSshKeyName = 'reprehenderit';
    $request->updateStackRequest->defaultSubnetId = 'facere';
    $request->updateStackRequest->hostnameTheme = 'fuga';
    $request->updateStackRequest->name = 'Miss Hubert Hartmann';
    $request->updateStackRequest->serviceRoleArn = 'quasi';
    $request->updateStackRequest->stackId = 'atque';
    $request->updateStackRequest->useCustomCookbooks = false;
    $request->updateStackRequest->useOpsworksSecurityGroups = false;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = UpdateStackXAmzTargetEnum::OPS_WORKS20130218_UPDATE_STACK;

    $response = $sdk->sdk->updateStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserProfile

<p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest->allowSelfManagement = false;
    $request->updateUserProfileRequest->iamUserArn = 'esse';
    $request->updateUserProfileRequest->sshPublicKey = 'amet';
    $request->updateUserProfileRequest->sshUsername = 'assumenda';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = UpdateUserProfileXAmzTargetEnum::OPS_WORKS20130218_UPDATE_USER_PROFILE;

    $response = $sdk->sdk->updateUserProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVolume

<p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVolumeRequest();
    $request->updateVolumeRequest = new UpdateVolumeRequest();
    $request->updateVolumeRequest->mountPoint = 'minima';
    $request->updateVolumeRequest->name = 'Tara Wuckert';
    $request->updateVolumeRequest->volumeId = 'error';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UpdateVolumeXAmzTargetEnum::OPS_WORKS20130218_UPDATE_VOLUME;

    $response = $sdk->sdk->updateVolume($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
