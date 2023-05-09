# SDK

## Overview

<fullname>Amazon EC2 Auto Scaling</fullname> <p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/autoscaling/>
### Available Operations

* [getAttachInstances](#getattachinstances) - <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getAttachLoadBalancerTargetGroups](#getattachloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [getAttachLoadBalancers](#getattachloadbalancers) - <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getBatchDeleteScheduledAction](#getbatchdeletescheduledaction) - Deletes one or more scheduled actions for the specified Auto Scaling group.
* [getCancelInstanceRefresh](#getcancelinstancerefresh) - <p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>
* [getCompleteLifecycleAction](#getcompletelifecycleaction) - <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDeleteAutoScalingGroup](#getdeleteautoscalinggroup) - <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDeleteLaunchConfiguration](#getdeletelaunchconfiguration) - <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
* [getDeleteLifecycleHook](#getdeletelifecyclehook) - <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
* [getDeleteNotificationConfiguration](#getdeletenotificationconfiguration) - Deletes the specified notification.
* [getDeletePolicy](#getdeletepolicy) - <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDeleteScheduledAction](#getdeletescheduledaction) - Deletes the specified scheduled action.
* [getDeleteWarmPool](#getdeletewarmpool) - <p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDescribeAccountLimits](#getdescribeaccountlimits) - <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDescribeAdjustmentTypes](#getdescribeadjustmenttypes) - <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
* [getDescribeAutoScalingInstances](#getdescribeautoscalinginstances) - Gets information about the Auto Scaling instances in the account and Region.
* [getDescribeAutoScalingNotificationTypes](#getdescribeautoscalingnotificationtypes) - Describes the notification types that are supported by Amazon EC2 Auto Scaling.
* [getDescribeInstanceRefreshes](#getdescribeinstancerefreshes) - <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>
* [getDescribeLaunchConfigurations](#getdescribelaunchconfigurations) - Gets information about the launch configurations in the account and Region.
* [getDescribeLifecycleHookTypes](#getdescribelifecyclehooktypes) - <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
* [getDescribeLifecycleHooks](#getdescribelifecyclehooks) - Gets information about the lifecycle hooks for the specified Auto Scaling group.
* [getDescribeLoadBalancerTargetGroups](#getdescribeloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
* [getDescribeLoadBalancers](#getdescribeloadbalancers) - <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [getDescribeMetricCollectionTypes](#getdescribemetriccollectiontypes) - Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.
* [getDescribeNotificationConfigurations](#getdescribenotificationconfigurations) - Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
* [getDescribePolicies](#getdescribepolicies) - Gets information about the scaling policies in the account and Region.
* [getDescribeScalingActivities](#getdescribescalingactivities) - <p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [getDescribeScalingProcessTypes](#getdescribescalingprocesstypes) - Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
* [getDescribeScheduledActions](#getdescribescheduledactions) - <p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
* [getDescribeTerminationPolicyTypes](#getdescribeterminationpolicytypes) - <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDescribeTrafficSources](#getdescribetrafficsources) - <p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>
* [getDescribeWarmPool](#getdescribewarmpool) - <p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDetachInstances](#getdetachinstances) - <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getDetachLoadBalancerTargetGroups](#getdetachloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
* [getDetachLoadBalancers](#getdetachloadbalancers) - <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
* [getDisableMetricsCollection](#getdisablemetricscollection) - Disables group metrics collection for the specified Auto Scaling group.
* [getEnableMetricsCollection](#getenablemetricscollection) - <p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getEnterStandby](#getenterstandby) - <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getExecutePolicy](#getexecutepolicy) - Executes the specified policy. This can be useful for testing the design of your scaling policy.
* [getExitStandby](#getexitstandby) - <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getGETPredictiveScalingForecast](#getgetpredictivescalingforecast) - <p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getPutLifecycleHook](#getputlifecyclehook) - <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
* [getPutNotificationConfiguration](#getputnotificationconfiguration) - <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
* [getPutScheduledUpdateGroupAction](#getputscheduledupdategroupaction) - <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
* [getPutWarmPool](#getputwarmpool) - <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
* [getRecordLifecycleActionHeartbeat](#getrecordlifecycleactionheartbeat) - <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getResumeProcesses](#getresumeprocesses) - <p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getRollbackInstanceRefresh](#getrollbackinstancerefresh) - <p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>
* [getSetDesiredCapacity](#getsetdesiredcapacity) - <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getSetInstanceHealth](#getsetinstancehealth) - <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [getSetInstanceProtection](#getsetinstanceprotection) - <p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
* [getSuspendProcesses](#getsuspendprocesses) - <p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
* [getTerminateInstanceInAutoScalingGroup](#getterminateinstanceinautoscalinggroup) - <p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postAttachInstances](#postattachinstances) - <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postAttachLoadBalancerTargetGroups](#postattachloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [postAttachLoadBalancers](#postattachloadbalancers) - <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postAttachTrafficSources](#postattachtrafficsources) - <p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>
* [postBatchDeleteScheduledAction](#postbatchdeletescheduledaction) - Deletes one or more scheduled actions for the specified Auto Scaling group.
* [postBatchPutScheduledUpdateGroupAction](#postbatchputscheduledupdategroupaction) - Creates or updates one or more scheduled scaling actions for an Auto Scaling group.
* [postCancelInstanceRefresh](#postcancelinstancerefresh) - <p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>
* [postCompleteLifecycleAction](#postcompletelifecycleaction) - <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postCreateAutoScalingGroup](#postcreateautoscalinggroup) - <p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>
* [postCreateLaunchConfiguration](#postcreatelaunchconfiguration) - <p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>
* [postCreateOrUpdateTags](#postcreateorupdatetags) - <p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDeleteAutoScalingGroup](#postdeleteautoscalinggroup) - <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDeleteLaunchConfiguration](#postdeletelaunchconfiguration) - <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
* [postDeleteLifecycleHook](#postdeletelifecyclehook) - <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
* [postDeleteNotificationConfiguration](#postdeletenotificationconfiguration) - Deletes the specified notification.
* [postDeletePolicy](#postdeletepolicy) - <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDeleteScheduledAction](#postdeletescheduledaction) - Deletes the specified scheduled action.
* [postDeleteTags](#postdeletetags) - Deletes the specified tags.
* [postDeleteWarmPool](#postdeletewarmpool) - <p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDescribeAccountLimits](#postdescribeaccountlimits) - <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDescribeAdjustmentTypes](#postdescribeadjustmenttypes) - <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
* [postDescribeAutoScalingGroups](#postdescribeautoscalinggroups) - <p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
* [postDescribeAutoScalingInstances](#postdescribeautoscalinginstances) - Gets information about the Auto Scaling instances in the account and Region.
* [postDescribeAutoScalingNotificationTypes](#postdescribeautoscalingnotificationtypes) - Describes the notification types that are supported by Amazon EC2 Auto Scaling.
* [postDescribeInstanceRefreshes](#postdescribeinstancerefreshes) - <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>
* [postDescribeLaunchConfigurations](#postdescribelaunchconfigurations) - Gets information about the launch configurations in the account and Region.
* [postDescribeLifecycleHookTypes](#postdescribelifecyclehooktypes) - <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
* [postDescribeLifecycleHooks](#postdescribelifecyclehooks) - Gets information about the lifecycle hooks for the specified Auto Scaling group.
* [postDescribeLoadBalancerTargetGroups](#postdescribeloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
* [postDescribeLoadBalancers](#postdescribeloadbalancers) - <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [postDescribeMetricCollectionTypes](#postdescribemetriccollectiontypes) - Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.
* [postDescribeNotificationConfigurations](#postdescribenotificationconfigurations) - Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
* [postDescribePolicies](#postdescribepolicies) - Gets information about the scaling policies in the account and Region.
* [postDescribeScalingActivities](#postdescribescalingactivities) - <p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
* [postDescribeScalingProcessTypes](#postdescribescalingprocesstypes) - Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
* [postDescribeScheduledActions](#postdescribescheduledactions) - <p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
* [postDescribeTags](#postdescribetags) - <p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDescribeTerminationPolicyTypes](#postdescribeterminationpolicytypes) - <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDescribeTrafficSources](#postdescribetrafficsources) - <p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>
* [postDescribeWarmPool](#postdescribewarmpool) - <p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDetachInstances](#postdetachinstances) - <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postDetachLoadBalancerTargetGroups](#postdetachloadbalancertargetgroups) - <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
* [postDetachLoadBalancers](#postdetachloadbalancers) - <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
* [postDetachTrafficSources](#postdetachtrafficsources) - <p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a taffic, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>
* [postDisableMetricsCollection](#postdisablemetricscollection) - Disables group metrics collection for the specified Auto Scaling group.
* [postEnableMetricsCollection](#postenablemetricscollection) - <p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postEnterStandby](#postenterstandby) - <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postExecutePolicy](#postexecutepolicy) - Executes the specified policy. This can be useful for testing the design of your scaling policy.
* [postExitStandby](#postexitstandby) - <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postGetPredictiveScalingForecast](#postgetpredictivescalingforecast) - <p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postPutLifecycleHook](#postputlifecyclehook) - <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
* [postPutNotificationConfiguration](#postputnotificationconfiguration) - <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
* [postPutScalingPolicy](#postputscalingpolicy) - <p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>
* [postPutScheduledUpdateGroupAction](#postputscheduledupdategroupaction) - <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
* [postPutWarmPool](#postputwarmpool) - <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
* [postRecordLifecycleActionHeartbeat](#postrecordlifecycleactionheartbeat) - <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postResumeProcesses](#postresumeprocesses) - <p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postRollbackInstanceRefresh](#postrollbackinstancerefresh) - <p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>
* [postSetDesiredCapacity](#postsetdesiredcapacity) - <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postSetInstanceHealth](#postsetinstancehealth) - <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postSetInstanceProtection](#postsetinstanceprotection) - <p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
* [postStartInstanceRefresh](#poststartinstancerefresh) - <p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>
* [postSuspendProcesses](#postsuspendprocesses) - <p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
* [postTerminateInstanceInAutoScalingGroup](#postterminateinstanceinautoscalinggroup) - <p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
* [postUpdateAutoScalingGroup](#postupdateautoscalinggroup) - <p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>

## getAttachInstances

<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachInstancesActionEnum;
import org.openapis.openapi.models.operations.GETAttachInstancesRequest;
import org.openapis.openapi.models.operations.GETAttachInstancesResponse;
import org.openapis.openapi.models.operations.GETAttachInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachInstancesRequest req = new GETAttachInstancesRequest(GETAttachInstancesActionEnum.ATTACH_INSTANCES, "debitis", GETAttachInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("delectus"),
                }};
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            GETAttachInstancesResponse res = sdk.sdk.getAttachInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachLoadBalancerTargetGroupsRequest req = new GETAttachLoadBalancerTargetGroupsRequest(GETAttachLoadBalancerTargetGroupsActionEnum.ATTACH_LOAD_BALANCER_TARGET_GROUPS, "nisi",                 new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }}, GETAttachLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            GETAttachLoadBalancerTargetGroupsResponse res = sdk.sdk.getAttachLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachLoadBalancers

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.GETAttachLoadBalancersRequest;
import org.openapis.openapi.models.operations.GETAttachLoadBalancersResponse;
import org.openapis.openapi.models.operations.GETAttachLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachLoadBalancersRequest req = new GETAttachLoadBalancersRequest(GETAttachLoadBalancersActionEnum.ATTACH_LOAD_BALANCERS, "at",                 new String[]{{
                                add("molestiae"),
                                add("quod"),
                                add("quod"),
                                add("esse"),
                            }}, GETAttachLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETAttachLoadBalancersResponse res = sdk.sdk.getAttachLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchDeleteScheduledAction

Deletes one or more scheduled actions for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBatchDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.GETBatchDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.GETBatchDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.GETBatchDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBatchDeleteScheduledActionRequest req = new GETBatchDeleteScheduledActionRequest(GETBatchDeleteScheduledActionActionEnum.BATCH_DELETE_SCHEDULED_ACTION, "deleniti",                 new String[]{{
                                add("optio"),
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                            }}, GETBatchDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETBatchDeleteScheduledActionResponse res = sdk.sdk.getBatchDeleteScheduledAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCancelInstanceRefresh

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelInstanceRefreshActionEnum;
import org.openapis.openapi.models.operations.GETCancelInstanceRefreshRequest;
import org.openapis.openapi.models.operations.GETCancelInstanceRefreshResponse;
import org.openapis.openapi.models.operations.GETCancelInstanceRefreshVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelInstanceRefreshRequest req = new GETCancelInstanceRefreshRequest(GETCancelInstanceRefreshActionEnum.CANCEL_INSTANCE_REFRESH, "aspernatur", GETCancelInstanceRefreshVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            GETCancelInstanceRefreshResponse res = sdk.sdk.getCancelInstanceRefresh(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompleteLifecycleAction

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCompleteLifecycleActionActionEnum;
import org.openapis.openapi.models.operations.GETCompleteLifecycleActionRequest;
import org.openapis.openapi.models.operations.GETCompleteLifecycleActionResponse;
import org.openapis.openapi.models.operations.GETCompleteLifecycleActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCompleteLifecycleActionRequest req = new GETCompleteLifecycleActionRequest(GETCompleteLifecycleActionActionEnum.COMPLETE_LIFECYCLE_ACTION, "hic", "saepe", "fuga", GETCompleteLifecycleActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceId = "in";
                lifecycleActionToken = "corporis";
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETCompleteLifecycleActionResponse res = sdk.sdk.getCompleteLifecycleAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAutoScalingGroup

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAutoScalingGroupRequest req = new GETDeleteAutoScalingGroupRequest(GETDeleteAutoScalingGroupActionEnum.DELETE_AUTO_SCALING_GROUP, "mollitia", GETDeleteAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                forceDelete = false;
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            GETDeleteAutoScalingGroupResponse res = sdk.sdk.getDeleteAutoScalingGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteLaunchConfiguration

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLaunchConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.GETDeleteLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.GETDeleteLaunchConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLaunchConfigurationRequest req = new GETDeleteLaunchConfigurationRequest(GETDeleteLaunchConfigurationActionEnum.DELETE_LAUNCH_CONFIGURATION, "nemo", GETDeleteLaunchConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETDeleteLaunchConfigurationResponse res = sdk.sdk.getDeleteLaunchConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteLifecycleHook

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLifecycleHookActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLifecycleHookRequest;
import org.openapis.openapi.models.operations.GETDeleteLifecycleHookResponse;
import org.openapis.openapi.models.operations.GETDeleteLifecycleHookVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLifecycleHookRequest req = new GETDeleteLifecycleHookRequest(GETDeleteLifecycleHookActionEnum.DELETE_LIFECYCLE_HOOK, "mollitia", "dolorem", GETDeleteLifecycleHookVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            GETDeleteLifecycleHookResponse res = sdk.sdk.getDeleteLifecycleHook(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteNotificationConfiguration

Deletes the specified notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteNotificationConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.GETDeleteNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.GETDeleteNotificationConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteNotificationConfigurationRequest req = new GETDeleteNotificationConfigurationRequest(GETDeleteNotificationConfigurationActionEnum.DELETE_NOTIFICATION_CONFIGURATION, "molestiae", "velit", GETDeleteNotificationConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quis";
                xAmzDate = "vitae";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "enim";
            }};            

            GETDeleteNotificationConfigurationResponse res = sdk.sdk.getDeleteNotificationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletePolicy

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeletePolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeletePolicyRequest;
import org.openapis.openapi.models.operations.GETDeletePolicyResponse;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeletePolicyRequest req = new GETDeletePolicyRequest(GETDeletePolicyActionEnum.DELETE_POLICY, "quo", GETDeletePolicyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupName = "sequi";
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            GETDeletePolicyResponse res = sdk.sdk.getDeletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteScheduledAction

Deletes the specified scheduled action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteScheduledActionRequest req = new GETDeleteScheduledActionRequest(GETDeleteScheduledActionActionEnum.DELETE_SCHEDULED_ACTION, "laborum", "quasi", GETDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            GETDeleteScheduledActionResponse res = sdk.sdk.getDeleteScheduledAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteWarmPool

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteWarmPoolActionEnum;
import org.openapis.openapi.models.operations.GETDeleteWarmPoolRequest;
import org.openapis.openapi.models.operations.GETDeleteWarmPoolResponse;
import org.openapis.openapi.models.operations.GETDeleteWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteWarmPoolRequest req = new GETDeleteWarmPoolRequest(GETDeleteWarmPoolActionEnum.DELETE_WARM_POOL, "voluptate", GETDeleteWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                forceDelete = false;
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            GETDeleteWarmPoolResponse res = sdk.sdk.getDeleteWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountLimits

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountLimitsRequest req = new GETDescribeAccountLimitsRequest(GETDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, GETDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            GETDescribeAccountLimitsResponse res = sdk.sdk.getDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAdjustmentTypes

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAdjustmentTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAdjustmentTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeAdjustmentTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeAdjustmentTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAdjustmentTypesRequest req = new GETDescribeAdjustmentTypesRequest(GETDescribeAdjustmentTypesActionEnum.DESCRIBE_ADJUSTMENT_TYPES, GETDescribeAdjustmentTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            GETDescribeAdjustmentTypesResponse res = sdk.sdk.getDescribeAdjustmentTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAutoScalingInstances

Gets information about the Auto Scaling instances in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingInstancesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingInstancesRequest;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingInstancesResponse;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAutoScalingInstancesRequest req = new GETDescribeAutoScalingInstancesRequest(GETDescribeAutoScalingInstancesActionEnum.DESCRIBE_AUTO_SCALING_INSTANCES, GETDescribeAutoScalingInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("voluptates"),
                    add("quasi"),
                    add("repudiandae"),
                }};
                maxRecords = 575947L;
                nextToken = "veritatis";
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GETDescribeAutoScalingInstancesResponse res = sdk.sdk.getDescribeAutoScalingInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAutoScalingNotificationTypes

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingNotificationTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingNotificationTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingNotificationTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeAutoScalingNotificationTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAutoScalingNotificationTypesRequest req = new GETDescribeAutoScalingNotificationTypesRequest(GETDescribeAutoScalingNotificationTypesActionEnum.DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES, GETDescribeAutoScalingNotificationTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETDescribeAutoScalingNotificationTypesResponse res = sdk.sdk.getDescribeAutoScalingNotificationTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeInstanceRefreshes

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeInstanceRefreshesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeInstanceRefreshesRequest;
import org.openapis.openapi.models.operations.GETDescribeInstanceRefreshesResponse;
import org.openapis.openapi.models.operations.GETDescribeInstanceRefreshesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeInstanceRefreshesRequest req = new GETDescribeInstanceRefreshesRequest(GETDescribeInstanceRefreshesActionEnum.DESCRIBE_INSTANCE_REFRESHES, "perferendis", GETDescribeInstanceRefreshesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceRefreshIds = new String[]{{
                    add("assumenda"),
                }};
                maxRecords = 369808L;
                nextToken = "alias";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            GETDescribeInstanceRefreshesResponse res = sdk.sdk.getDescribeInstanceRefreshes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLaunchConfigurations

Gets information about the launch configurations in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLaunchConfigurationsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLaunchConfigurationsRequest;
import org.openapis.openapi.models.operations.GETDescribeLaunchConfigurationsResponse;
import org.openapis.openapi.models.operations.GETDescribeLaunchConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLaunchConfigurationsRequest req = new GETDescribeLaunchConfigurationsRequest(GETDescribeLaunchConfigurationsActionEnum.DESCRIBE_LAUNCH_CONFIGURATIONS, GETDescribeLaunchConfigurationsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                launchConfigurationNames = new String[]{{
                    add("non"),
                    add("eligendi"),
                }};
                maxRecords = 576157L;
                nextToken = "aliquid";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            GETDescribeLaunchConfigurationsResponse res = sdk.sdk.getDescribeLaunchConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLifecycleHookTypes

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHookTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHookTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHookTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHookTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLifecycleHookTypesRequest req = new GETDescribeLifecycleHookTypesRequest(GETDescribeLifecycleHookTypesActionEnum.DESCRIBE_LIFECYCLE_HOOK_TYPES, GETDescribeLifecycleHookTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            GETDescribeLifecycleHookTypesResponse res = sdk.sdk.getDescribeLifecycleHookTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLifecycleHooks

Gets information about the lifecycle hooks for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHooksActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHooksRequest;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHooksResponse;
import org.openapis.openapi.models.operations.GETDescribeLifecycleHooksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLifecycleHooksRequest req = new GETDescribeLifecycleHooksRequest(GETDescribeLifecycleHooksActionEnum.DESCRIBE_LIFECYCLE_HOOKS, "facere", GETDescribeLifecycleHooksVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                lifecycleHookNames = new String[]{{
                    add("aliquid"),
                    add("laborum"),
                }};
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            GETDescribeLifecycleHooksResponse res = sdk.sdk.getDescribeLifecycleHooks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancerTargetGroupsRequest req = new GETDescribeLoadBalancerTargetGroupsRequest(GETDescribeLoadBalancerTargetGroupsActionEnum.DESCRIBE_LOAD_BALANCER_TARGET_GROUPS, "nam", GETDescribeLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = 659669L;
                nextToken = "blanditiis";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            GETDescribeLoadBalancerTargetGroupsResponse res = sdk.sdk.getDescribeLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoadBalancers

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancersRequest req = new GETDescribeLoadBalancersRequest(GETDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, "molestiae", GETDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = 19193L;
                nextToken = "nihil";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            GETDescribeLoadBalancersResponse res = sdk.sdk.getDescribeLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeMetricCollectionTypes

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeMetricCollectionTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeMetricCollectionTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeMetricCollectionTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeMetricCollectionTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeMetricCollectionTypesRequest req = new GETDescribeMetricCollectionTypesRequest(GETDescribeMetricCollectionTypesActionEnum.DESCRIBE_METRIC_COLLECTION_TYPES, GETDescribeMetricCollectionTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDescribeMetricCollectionTypesResponse res = sdk.sdk.getDescribeMetricCollectionTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeNotificationConfigurations

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeNotificationConfigurationsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeNotificationConfigurationsRequest;
import org.openapis.openapi.models.operations.GETDescribeNotificationConfigurationsResponse;
import org.openapis.openapi.models.operations.GETDescribeNotificationConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeNotificationConfigurationsRequest req = new GETDescribeNotificationConfigurationsRequest(GETDescribeNotificationConfigurationsActionEnum.DESCRIBE_NOTIFICATION_CONFIGURATIONS, GETDescribeNotificationConfigurationsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupNames = new String[]{{
                    add("quos"),
                    add("sint"),
                    add("accusantium"),
                }};
                maxRecords = 653201L;
                nextToken = "reiciendis";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            GETDescribeNotificationConfigurationsResponse res = sdk.sdk.getDescribeNotificationConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribePolicies

Gets information about the scaling policies in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribePoliciesActionEnum;
import org.openapis.openapi.models.operations.GETDescribePoliciesRequest;
import org.openapis.openapi.models.operations.GETDescribePoliciesResponse;
import org.openapis.openapi.models.operations.GETDescribePoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribePoliciesRequest req = new GETDescribePoliciesRequest(GETDescribePoliciesActionEnum.DESCRIBE_POLICIES, GETDescribePoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupName = "iure";
                maxRecords = 984043L;
                nextToken = "debitis";
                policyNames = new String[]{{
                    add("maxime"),
                    add("deleniti"),
                }};
                policyTypes = new String[]{{
                    add("in"),
                    add("architecto"),
                    add("architecto"),
                }};
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            GETDescribePoliciesResponse res = sdk.sdk.getDescribePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeScalingActivities

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeScalingActivitiesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeScalingActivitiesRequest;
import org.openapis.openapi.models.operations.GETDescribeScalingActivitiesResponse;
import org.openapis.openapi.models.operations.GETDescribeScalingActivitiesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeScalingActivitiesRequest req = new GETDescribeScalingActivitiesRequest(GETDescribeScalingActivitiesActionEnum.DESCRIBE_SCALING_ACTIVITIES, GETDescribeScalingActivitiesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                activityIds = new String[]{{
                    add("accusantium"),
                    add("consequuntur"),
                    add("praesentium"),
                    add("natus"),
                }};
                autoScalingGroupName = "magni";
                includeDeletedGroups = false;
                maxRecords = 123820L;
                nextToken = "quo";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            GETDescribeScalingActivitiesResponse res = sdk.sdk.getDescribeScalingActivities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeScalingProcessTypes

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeScalingProcessTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeScalingProcessTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeScalingProcessTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeScalingProcessTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeScalingProcessTypesRequest req = new GETDescribeScalingProcessTypesRequest(GETDescribeScalingProcessTypesActionEnum.DESCRIBE_SCALING_PROCESS_TYPES, GETDescribeScalingProcessTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GETDescribeScalingProcessTypesResponse res = sdk.sdk.getDescribeScalingProcessTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeScheduledActions

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeScheduledActionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeScheduledActionsRequest;
import org.openapis.openapi.models.operations.GETDescribeScheduledActionsResponse;
import org.openapis.openapi.models.operations.GETDescribeScheduledActionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeScheduledActionsRequest req = new GETDescribeScheduledActionsRequest(GETDescribeScheduledActionsActionEnum.DESCRIBE_SCHEDULED_ACTIONS, GETDescribeScheduledActionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupName = "pariatur";
                endTime = OffsetDateTime.parse("2022-01-09T22:25:53.570Z");
                maxRecords = 16627L;
                nextToken = "fugiat";
                scheduledActionNames = new String[]{{
                    add("aut"),
                }};
                startTime = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GETDescribeScheduledActionsResponse res = sdk.sdk.getDescribeScheduledActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTerminationPolicyTypes

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTerminationPolicyTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTerminationPolicyTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeTerminationPolicyTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeTerminationPolicyTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTerminationPolicyTypesRequest req = new GETDescribeTerminationPolicyTypesRequest(GETDescribeTerminationPolicyTypesActionEnum.DESCRIBE_TERMINATION_POLICY_TYPES, GETDescribeTerminationPolicyTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            GETDescribeTerminationPolicyTypesResponse res = sdk.sdk.getDescribeTerminationPolicyTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTrafficSources

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTrafficSourcesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTrafficSourcesRequest;
import org.openapis.openapi.models.operations.GETDescribeTrafficSourcesResponse;
import org.openapis.openapi.models.operations.GETDescribeTrafficSourcesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTrafficSourcesRequest req = new GETDescribeTrafficSourcesRequest(GETDescribeTrafficSourcesActionEnum.DESCRIBE_TRAFFIC_SOURCES, "vero", GETDescribeTrafficSourcesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = 345352L;
                nextToken = "hic";
                trafficSourceType = "recusandae";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            GETDescribeTrafficSourcesResponse res = sdk.sdk.getDescribeTrafficSources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeWarmPool

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeWarmPoolActionEnum;
import org.openapis.openapi.models.operations.GETDescribeWarmPoolRequest;
import org.openapis.openapi.models.operations.GETDescribeWarmPoolResponse;
import org.openapis.openapi.models.operations.GETDescribeWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeWarmPoolRequest req = new GETDescribeWarmPoolRequest(GETDescribeWarmPoolActionEnum.DESCRIBE_WARM_POOL, "eaque", GETDescribeWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = 577229L;
                nextToken = "rerum";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETDescribeWarmPoolResponse res = sdk.sdk.getDescribeWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachInstances

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachInstancesActionEnum;
import org.openapis.openapi.models.operations.GETDetachInstancesRequest;
import org.openapis.openapi.models.operations.GETDetachInstancesResponse;
import org.openapis.openapi.models.operations.GETDetachInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachInstancesRequest req = new GETDetachInstancesRequest(GETDetachInstancesActionEnum.DETACH_INSTANCES, "provident", false, GETDetachInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("libero"),
                    add("delectus"),
                    add("quaerat"),
                    add("quos"),
                }};
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            GETDetachInstancesResponse res = sdk.sdk.getDetachInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachLoadBalancerTargetGroupsRequest req = new GETDetachLoadBalancerTargetGroupsRequest(GETDetachLoadBalancerTargetGroupsActionEnum.DETACH_LOAD_BALANCER_TARGET_GROUPS, "cum",                 new String[]{{
                                add("dignissimos"),
                                add("reiciendis"),
                            }}, GETDetachLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
            }};            

            GETDetachLoadBalancerTargetGroupsResponse res = sdk.sdk.getDetachLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachLoadBalancers

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.GETDetachLoadBalancersRequest;
import org.openapis.openapi.models.operations.GETDetachLoadBalancersResponse;
import org.openapis.openapi.models.operations.GETDetachLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachLoadBalancersRequest req = new GETDetachLoadBalancersRequest(GETDetachLoadBalancersActionEnum.DETACH_LOAD_BALANCERS, "quaerat",                 new String[]{{
                                add("quidem"),
                                add("voluptatibus"),
                                add("voluptas"),
                                add("natus"),
                            }}, GETDetachLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDetachLoadBalancersResponse res = sdk.sdk.getDetachLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableMetricsCollection

Disables group metrics collection for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableMetricsCollectionActionEnum;
import org.openapis.openapi.models.operations.GETDisableMetricsCollectionRequest;
import org.openapis.openapi.models.operations.GETDisableMetricsCollectionResponse;
import org.openapis.openapi.models.operations.GETDisableMetricsCollectionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableMetricsCollectionRequest req = new GETDisableMetricsCollectionRequest(GETDisableMetricsCollectionActionEnum.DISABLE_METRICS_COLLECTION, "voluptate", GETDisableMetricsCollectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                metrics = new String[]{{
                    add("deleniti"),
                    add("omnis"),
                    add("necessitatibus"),
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            GETDisableMetricsCollectionResponse res = sdk.sdk.getDisableMetricsCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableMetricsCollection

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableMetricsCollectionActionEnum;
import org.openapis.openapi.models.operations.GETEnableMetricsCollectionRequest;
import org.openapis.openapi.models.operations.GETEnableMetricsCollectionResponse;
import org.openapis.openapi.models.operations.GETEnableMetricsCollectionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableMetricsCollectionRequest req = new GETEnableMetricsCollectionRequest(GETEnableMetricsCollectionActionEnum.ENABLE_METRICS_COLLECTION, "aspernatur", "perferendis", GETEnableMetricsCollectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                metrics = new String[]{{
                    add("optio"),
                }};
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            GETEnableMetricsCollectionResponse res = sdk.sdk.getEnableMetricsCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnterStandby

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnterStandbyActionEnum;
import org.openapis.openapi.models.operations.GETEnterStandbyRequest;
import org.openapis.openapi.models.operations.GETEnterStandbyResponse;
import org.openapis.openapi.models.operations.GETEnterStandbyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnterStandbyRequest req = new GETEnterStandbyRequest(GETEnterStandbyActionEnum.ENTER_STANDBY, "totam", false, GETEnterStandbyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("alias"),
                    add("at"),
                    add("quaerat"),
                }};
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            GETEnterStandbyResponse res = sdk.sdk.getEnterStandby(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExecutePolicy

Executes the specified policy. This can be useful for testing the design of your scaling policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExecutePolicyActionEnum;
import org.openapis.openapi.models.operations.GETExecutePolicyRequest;
import org.openapis.openapi.models.operations.GETExecutePolicyResponse;
import org.openapis.openapi.models.operations.GETExecutePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETExecutePolicyRequest req = new GETExecutePolicyRequest(GETExecutePolicyActionEnum.EXECUTE_POLICY, "harum", GETExecutePolicyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupName = "iusto";
                breachThreshold = 2155.07;
                honorCooldown = false;
                metricValue = 7887.4;
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETExecutePolicyResponse res = sdk.sdk.getExecutePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExitStandby

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExitStandbyActionEnum;
import org.openapis.openapi.models.operations.GETExitStandbyRequest;
import org.openapis.openapi.models.operations.GETExitStandbyResponse;
import org.openapis.openapi.models.operations.GETExitStandbyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETExitStandbyRequest req = new GETExitStandbyRequest(GETExitStandbyActionEnum.EXIT_STANDBY, "totam", GETExitStandbyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("sit"),
                    add("expedita"),
                }};
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            GETExitStandbyResponse res = sdk.sdk.getExitStandby(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETPredictiveScalingForecast

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETPredictiveScalingForecastActionEnum;
import org.openapis.openapi.models.operations.GETGETPredictiveScalingForecastRequest;
import org.openapis.openapi.models.operations.GETGETPredictiveScalingForecastResponse;
import org.openapis.openapi.models.operations.GETGETPredictiveScalingForecastVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETPredictiveScalingForecastRequest req = new GETGETPredictiveScalingForecastRequest(GETGETPredictiveScalingForecastActionEnum.GET_PREDICTIVE_SCALING_FORECAST, "incidunt", OffsetDateTime.parse("2022-05-31T19:46:08.472Z"), "maxime", OffsetDateTime.parse("2020-10-04T22:45:05.165Z"), GETGETPredictiveScalingForecastVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETGETPredictiveScalingForecastResponse res = sdk.sdk.getGETPredictiveScalingForecast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutLifecycleHook

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutLifecycleHookActionEnum;
import org.openapis.openapi.models.operations.GETPutLifecycleHookRequest;
import org.openapis.openapi.models.operations.GETPutLifecycleHookResponse;
import org.openapis.openapi.models.operations.GETPutLifecycleHookVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutLifecycleHookRequest req = new GETPutLifecycleHookRequest(GETPutLifecycleHookActionEnum.PUT_LIFECYCLE_HOOK, "aliquid", "quam", GETPutLifecycleHookVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                defaultResult = "molestias";
                heartbeatTimeout = 840429L;
                lifecycleTransition = "qui";
                notificationMetadata = "neque";
                notificationTargetARN = "fugit";
                roleARN = "magni";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            GETPutLifecycleHookResponse res = sdk.sdk.getPutLifecycleHook(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutNotificationConfiguration

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutNotificationConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETPutNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.GETPutNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.GETPutNotificationConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutNotificationConfigurationRequest req = new GETPutNotificationConfigurationRequest(GETPutNotificationConfigurationActionEnum.PUT_NOTIFICATION_CONFIGURATION, "nobis",                 new String[]{{
                                add("saepe"),
                            }}, "ipsum", GETPutNotificationConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            GETPutNotificationConfigurationResponse res = sdk.sdk.getPutNotificationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutScheduledUpdateGroupAction

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutScheduledUpdateGroupActionActionEnum;
import org.openapis.openapi.models.operations.GETPutScheduledUpdateGroupActionRequest;
import org.openapis.openapi.models.operations.GETPutScheduledUpdateGroupActionResponse;
import org.openapis.openapi.models.operations.GETPutScheduledUpdateGroupActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutScheduledUpdateGroupActionRequest req = new GETPutScheduledUpdateGroupActionRequest(GETPutScheduledUpdateGroupActionActionEnum.PUT_SCHEDULED_UPDATE_GROUP_ACTION, "dolore", "labore", GETPutScheduledUpdateGroupActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                desiredCapacity = 240829L;
                endTime = OffsetDateTime.parse("2022-10-19T18:50:59.428Z");
                maxSize = 63038L;
                minSize = 16429L;
                recurrence = "quas";
                startTime = OffsetDateTime.parse("2022-12-21T21:10:14.455Z");
                time = OffsetDateTime.parse("2021-05-02T21:10:21.125Z");
                timeZone = "porro";
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
            }};            

            GETPutScheduledUpdateGroupActionResponse res = sdk.sdk.getPutScheduledUpdateGroupAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutWarmPool

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutWarmPoolActionEnum;
import org.openapis.openapi.models.operations.GETPutWarmPoolInstanceReusePolicy;
import org.openapis.openapi.models.operations.GETPutWarmPoolPoolStateEnum;
import org.openapis.openapi.models.operations.GETPutWarmPoolRequest;
import org.openapis.openapi.models.operations.GETPutWarmPoolResponse;
import org.openapis.openapi.models.operations.GETPutWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutWarmPoolRequest req = new GETPutWarmPoolRequest(GETPutWarmPoolActionEnum.PUT_WARM_POOL, "occaecati", GETPutWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceReusePolicy = new GETPutWarmPoolInstanceReusePolicy() {{
                    reuseOnScaleIn = false;
                }};;
                maxGroupPreparedCapacity = 977496L;
                minSize = 787542L;
                poolState = GETPutWarmPoolPoolStateEnum.HIBERNATED;
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            GETPutWarmPoolResponse res = sdk.sdk.getPutWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecordLifecycleActionHeartbeat

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRecordLifecycleActionHeartbeatActionEnum;
import org.openapis.openapi.models.operations.GETRecordLifecycleActionHeartbeatRequest;
import org.openapis.openapi.models.operations.GETRecordLifecycleActionHeartbeatResponse;
import org.openapis.openapi.models.operations.GETRecordLifecycleActionHeartbeatVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRecordLifecycleActionHeartbeatRequest req = new GETRecordLifecycleActionHeartbeatRequest(GETRecordLifecycleActionHeartbeatActionEnum.RECORD_LIFECYCLE_ACTION_HEARTBEAT, "dignissimos", "hic", GETRecordLifecycleActionHeartbeatVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceId = "distinctio";
                lifecycleActionToken = "quod";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETRecordLifecycleActionHeartbeatResponse res = sdk.sdk.getRecordLifecycleActionHeartbeat(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResumeProcesses

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETResumeProcessesActionEnum;
import org.openapis.openapi.models.operations.GETResumeProcessesRequest;
import org.openapis.openapi.models.operations.GETResumeProcessesResponse;
import org.openapis.openapi.models.operations.GETResumeProcessesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETResumeProcessesRequest req = new GETResumeProcessesRequest(GETResumeProcessesActionEnum.RESUME_PROCESSES, "sequi", GETResumeProcessesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                scalingProcesses = new String[]{{
                    add("impedit"),
                    add("aut"),
                    add("voluptatibus"),
                }};
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "fugit";
                xAmzDate = "porro";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "iusto";
            }};            

            GETResumeProcessesResponse res = sdk.sdk.getResumeProcesses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRollbackInstanceRefresh

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRollbackInstanceRefreshActionEnum;
import org.openapis.openapi.models.operations.GETRollbackInstanceRefreshRequest;
import org.openapis.openapi.models.operations.GETRollbackInstanceRefreshResponse;
import org.openapis.openapi.models.operations.GETRollbackInstanceRefreshVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRollbackInstanceRefreshRequest req = new GETRollbackInstanceRefreshRequest(GETRollbackInstanceRefreshActionEnum.ROLLBACK_INSTANCE_REFRESH, GETRollbackInstanceRefreshVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                autoScalingGroupName = "ducimus";
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            GETRollbackInstanceRefreshResponse res = sdk.sdk.getRollbackInstanceRefresh(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetDesiredCapacity

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetDesiredCapacityActionEnum;
import org.openapis.openapi.models.operations.GETSetDesiredCapacityRequest;
import org.openapis.openapi.models.operations.GETSetDesiredCapacityResponse;
import org.openapis.openapi.models.operations.GETSetDesiredCapacityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetDesiredCapacityRequest req = new GETSetDesiredCapacityRequest(GETSetDesiredCapacityActionEnum.SET_DESIRED_CAPACITY, "magnam", 189848L, GETSetDesiredCapacityVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                honorCooldown = false;
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "dicta";
                xAmzDate = "dolor";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "ex";
            }};            

            GETSetDesiredCapacityResponse res = sdk.sdk.getSetDesiredCapacity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetInstanceHealth

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetInstanceHealthActionEnum;
import org.openapis.openapi.models.operations.GETSetInstanceHealthRequest;
import org.openapis.openapi.models.operations.GETSetInstanceHealthResponse;
import org.openapis.openapi.models.operations.GETSetInstanceHealthVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetInstanceHealthRequest req = new GETSetInstanceHealthRequest(GETSetInstanceHealthActionEnum.SET_INSTANCE_HEALTH, "excepturi", "voluptatibus", GETSetInstanceHealthVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                shouldRespectGracePeriod = false;
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
            }};            

            GETSetInstanceHealthResponse res = sdk.sdk.getSetInstanceHealth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetInstanceProtection

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetInstanceProtectionActionEnum;
import org.openapis.openapi.models.operations.GETSetInstanceProtectionRequest;
import org.openapis.openapi.models.operations.GETSetInstanceProtectionResponse;
import org.openapis.openapi.models.operations.GETSetInstanceProtectionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetInstanceProtectionRequest req = new GETSetInstanceProtectionRequest(GETSetInstanceProtectionActionEnum.SET_INSTANCE_PROTECTION, "aliquid",                 new String[]{{
                                add("magnam"),
                            }}, false, GETSetInstanceProtectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            GETSetInstanceProtectionResponse res = sdk.sdk.getSetInstanceProtection(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuspendProcesses

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSuspendProcessesActionEnum;
import org.openapis.openapi.models.operations.GETSuspendProcessesRequest;
import org.openapis.openapi.models.operations.GETSuspendProcessesResponse;
import org.openapis.openapi.models.operations.GETSuspendProcessesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSuspendProcessesRequest req = new GETSuspendProcessesRequest(GETSuspendProcessesActionEnum.SUSPEND_PROCESSES, "libero", GETSuspendProcessesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                scalingProcesses = new String[]{{
                    add("aut"),
                }};
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            GETSuspendProcessesResponse res = sdk.sdk.getSuspendProcesses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTerminateInstanceInAutoScalingGroup

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTerminateInstanceInAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.GETTerminateInstanceInAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.GETTerminateInstanceInAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.GETTerminateInstanceInAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTerminateInstanceInAutoScalingGroupRequest req = new GETTerminateInstanceInAutoScalingGroupRequest(GETTerminateInstanceInAutoScalingGroupActionEnum.TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP, "dolorum", false, GETTerminateInstanceInAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            GETTerminateInstanceInAutoScalingGroupResponse res = sdk.sdk.getTerminateInstanceInAutoScalingGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachInstances

<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTAttachInstancesRequest;
import org.openapis.openapi.models.operations.POSTAttachInstancesResponse;
import org.openapis.openapi.models.operations.POSTAttachInstancesVersionEnum;
import org.openapis.openapi.models.shared.AttachInstancesQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachInstancesRequest req = new POSTAttachInstancesRequest(POSTAttachInstancesActionEnum.ATTACH_INSTANCES, POSTAttachInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "nulla".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "libero";
                xAmzCredential = "quasi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "provident";
            }};            

            POSTAttachInstancesResponse res = sdk.sdk.postAttachInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.AttachLoadBalancerTargetGroupsType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachLoadBalancerTargetGroupsRequest req = new POSTAttachLoadBalancerTargetGroupsRequest(POSTAttachLoadBalancerTargetGroupsActionEnum.ATTACH_LOAD_BALANCER_TARGET_GROUPS, POSTAttachLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTAttachLoadBalancerTargetGroupsResponse res = sdk.sdk.postAttachLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachLoadBalancers

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancersRequest;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancersResponse;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.AttachLoadBalancersType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachLoadBalancersRequest req = new POSTAttachLoadBalancersRequest(POSTAttachLoadBalancersActionEnum.ATTACH_LOAD_BALANCERS, POSTAttachLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTAttachLoadBalancersResponse res = sdk.sdk.postAttachLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachTrafficSources

<p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachTrafficSourcesActionEnum;
import org.openapis.openapi.models.operations.POSTAttachTrafficSourcesRequest;
import org.openapis.openapi.models.operations.POSTAttachTrafficSourcesResponse;
import org.openapis.openapi.models.operations.POSTAttachTrafficSourcesVersionEnum;
import org.openapis.openapi.models.shared.AttachTrafficSourcesType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrafficSourceIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachTrafficSourcesRequest req = new POSTAttachTrafficSourcesRequest(POSTAttachTrafficSourcesActionEnum.ATTACH_TRAFFIC_SOURCES, POSTAttachTrafficSourcesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "id";
                xAmzCredential = "quidem";
                xAmzDate = "neque";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "quo";
            }};            

            POSTAttachTrafficSourcesResponse res = sdk.sdk.postAttachTrafficSources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchDeleteScheduledAction

Deletes one or more scheduled actions for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.POSTBatchDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.POSTBatchDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.POSTBatchDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.BatchDeleteScheduledActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchDeleteScheduledActionRequest req = new POSTBatchDeleteScheduledActionRequest(POSTBatchDeleteScheduledActionActionEnum.BATCH_DELETE_SCHEDULED_ACTION, POSTBatchDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "ab";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTBatchDeleteScheduledActionResponse res = sdk.sdk.postBatchDeleteScheduledAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchPutScheduledUpdateGroupAction

Creates or updates one or more scheduled scaling actions for an Auto Scaling group.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchPutScheduledUpdateGroupActionActionEnum;
import org.openapis.openapi.models.operations.POSTBatchPutScheduledUpdateGroupActionRequest;
import org.openapis.openapi.models.operations.POSTBatchPutScheduledUpdateGroupActionResponse;
import org.openapis.openapi.models.operations.POSTBatchPutScheduledUpdateGroupActionVersionEnum;
import org.openapis.openapi.models.shared.BatchPutScheduledUpdateGroupActionType;
import org.openapis.openapi.models.shared.ScheduledUpdateGroupActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchPutScheduledUpdateGroupActionRequest req = new POSTBatchPutScheduledUpdateGroupActionRequest(POSTBatchPutScheduledUpdateGroupActionActionEnum.BATCH_PUT_SCHEDULED_UPDATE_GROUP_ACTION, POSTBatchPutScheduledUpdateGroupActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "aspernatur".getBytes();
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            POSTBatchPutScheduledUpdateGroupActionResponse res = sdk.sdk.postBatchPutScheduledUpdateGroupAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCancelInstanceRefresh

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCancelInstanceRefreshActionEnum;
import org.openapis.openapi.models.operations.POSTCancelInstanceRefreshRequest;
import org.openapis.openapi.models.operations.POSTCancelInstanceRefreshResponse;
import org.openapis.openapi.models.operations.POSTCancelInstanceRefreshVersionEnum;
import org.openapis.openapi.models.shared.CancelInstanceRefreshType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCancelInstanceRefreshRequest req = new POSTCancelInstanceRefreshRequest(POSTCancelInstanceRefreshActionEnum.CANCEL_INSTANCE_REFRESH, POSTCancelInstanceRefreshVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "inventore".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "totam";
                xAmzCredential = "accusamus";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "commodi";
            }};            

            POSTCancelInstanceRefreshResponse res = sdk.sdk.postCancelInstanceRefresh(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompleteLifecycleAction

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCompleteLifecycleActionActionEnum;
import org.openapis.openapi.models.operations.POSTCompleteLifecycleActionRequest;
import org.openapis.openapi.models.operations.POSTCompleteLifecycleActionResponse;
import org.openapis.openapi.models.operations.POSTCompleteLifecycleActionVersionEnum;
import org.openapis.openapi.models.shared.CompleteLifecycleActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCompleteLifecycleActionRequest req = new POSTCompleteLifecycleActionRequest(POSTCompleteLifecycleActionActionEnum.COMPLETE_LIFECYCLE_ACTION, POSTCompleteLifecycleActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "accusantium";
                xAmzDate = "porro";
                xAmzSecurityToken = "eum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTCompleteLifecycleActionResponse res = sdk.sdk.postCompleteLifecycleAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAutoScalingGroup

<p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.AcceleratorCountRequest;
import org.openapis.openapi.models.shared.AcceleratorManufacturerEnum;
import org.openapis.openapi.models.shared.AcceleratorNameEnum;
import org.openapis.openapi.models.shared.AcceleratorTotalMemoryMiBRequest;
import org.openapis.openapi.models.shared.AcceleratorTypeEnum;
import org.openapis.openapi.models.shared.BareMetalEnum;
import org.openapis.openapi.models.shared.BaselineEbsBandwidthMbpsRequest;
import org.openapis.openapi.models.shared.BurstablePerformanceEnum;
import org.openapis.openapi.models.shared.CpuManufacturerEnum;
import org.openapis.openapi.models.shared.CreateAutoScalingGroupType;
import org.openapis.openapi.models.shared.InstanceGenerationEnum;
import org.openapis.openapi.models.shared.InstanceRequirements;
import org.openapis.openapi.models.shared.InstancesDistribution;
import org.openapis.openapi.models.shared.LaunchTemplate;
import org.openapis.openapi.models.shared.LaunchTemplateOverrides;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.LifecycleHookSpecification;
import org.openapis.openapi.models.shared.LocalStorageEnum;
import org.openapis.openapi.models.shared.LocalStorageTypeEnum;
import org.openapis.openapi.models.shared.MemoryGiBPerVCpuRequest;
import org.openapis.openapi.models.shared.MemoryMiBRequest;
import org.openapis.openapi.models.shared.MixedInstancesPolicy;
import org.openapis.openapi.models.shared.NetworkBandwidthGbpsRequest;
import org.openapis.openapi.models.shared.NetworkInterfaceCountRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TotalLocalStorageGBRequest;
import org.openapis.openapi.models.shared.TrafficSourceIdentifier;
import org.openapis.openapi.models.shared.VCpuCountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateAutoScalingGroupRequest req = new POSTCreateAutoScalingGroupRequest(POSTCreateAutoScalingGroupActionEnum.CREATE_AUTO_SCALING_GROUP, POSTCreateAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            POSTCreateAutoScalingGroupResponse res = sdk.sdk.postCreateAutoScalingGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateLaunchConfiguration

<p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLaunchConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.POSTCreateLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.POSTCreateLaunchConfigurationVersionEnum;
import org.openapis.openapi.models.shared.BlockDeviceMapping;
import org.openapis.openapi.models.shared.CreateLaunchConfigurationType;
import org.openapis.openapi.models.shared.Ebs;
import org.openapis.openapi.models.shared.InstanceMetadataEndpointStateEnum;
import org.openapis.openapi.models.shared.InstanceMetadataHttpTokensStateEnum;
import org.openapis.openapi.models.shared.InstanceMetadataOptions;
import org.openapis.openapi.models.shared.InstanceMonitoring;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLaunchConfigurationRequest req = new POSTCreateLaunchConfigurationRequest(POSTCreateLaunchConfigurationActionEnum.CREATE_LAUNCH_CONFIGURATION, POSTCreateLaunchConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "ratione";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "atque";
            }};            

            POSTCreateLaunchConfigurationResponse res = sdk.sdk.postCreateLaunchConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateOrUpdateTags

<p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateOrUpdateTagsActionEnum;
import org.openapis.openapi.models.operations.POSTCreateOrUpdateTagsRequest;
import org.openapis.openapi.models.operations.POSTCreateOrUpdateTagsResponse;
import org.openapis.openapi.models.operations.POSTCreateOrUpdateTagsVersionEnum;
import org.openapis.openapi.models.shared.CreateOrUpdateTagsType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOrUpdateTagsRequest req = new POSTCreateOrUpdateTagsRequest(POSTCreateOrUpdateTagsActionEnum.CREATE_OR_UPDATE_TAGS, POSTCreateOrUpdateTagsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "veritatis";
                xAmzDate = "esse";
                xAmzSecurityToken = "quod";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "vero";
            }};            

            POSTCreateOrUpdateTagsResponse res = sdk.sdk.postCreateOrUpdateTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAutoScalingGroup

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteAutoScalingGroupType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAutoScalingGroupRequest req = new POSTDeleteAutoScalingGroupRequest(POSTDeleteAutoScalingGroupActionEnum.DELETE_AUTO_SCALING_GROUP, POSTDeleteAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "vel";
                xAmzCredential = "harum";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "minima";
            }};            

            POSTDeleteAutoScalingGroupResponse res = sdk.sdk.postDeleteAutoScalingGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLaunchConfiguration

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLaunchConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.POSTDeleteLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.POSTDeleteLaunchConfigurationVersionEnum;
import org.openapis.openapi.models.shared.LaunchConfigurationNameType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLaunchConfigurationRequest req = new POSTDeleteLaunchConfigurationRequest(POSTDeleteLaunchConfigurationActionEnum.DELETE_LAUNCH_CONFIGURATION, POSTDeleteLaunchConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
            }};            

            POSTDeleteLaunchConfigurationResponse res = sdk.sdk.postDeleteLaunchConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLifecycleHook

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLifecycleHookActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLifecycleHookRequest;
import org.openapis.openapi.models.operations.POSTDeleteLifecycleHookResponse;
import org.openapis.openapi.models.operations.POSTDeleteLifecycleHookVersionEnum;
import org.openapis.openapi.models.shared.DeleteLifecycleHookType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLifecycleHookRequest req = new POSTDeleteLifecycleHookRequest(POSTDeleteLifecycleHookActionEnum.DELETE_LIFECYCLE_HOOK, POSTDeleteLifecycleHookVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTDeleteLifecycleHookResponse res = sdk.sdk.postDeleteLifecycleHook(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteNotificationConfiguration

Deletes the specified notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteNotificationConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.POSTDeleteNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.POSTDeleteNotificationConfigurationVersionEnum;
import org.openapis.openapi.models.shared.DeleteNotificationConfigurationType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteNotificationConfigurationRequest req = new POSTDeleteNotificationConfigurationRequest(POSTDeleteNotificationConfigurationActionEnum.DELETE_NOTIFICATION_CONFIGURATION, POSTDeleteNotificationConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
            }};            

            POSTDeleteNotificationConfigurationResponse res = sdk.sdk.postDeleteNotificationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeletePolicy

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeletePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeletePolicyRequest;
import org.openapis.openapi.models.operations.POSTDeletePolicyResponse;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionEnum;
import org.openapis.openapi.models.shared.DeletePolicyType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeletePolicyRequest req = new POSTDeletePolicyRequest(POSTDeletePolicyActionEnum.DELETE_POLICY, POSTDeletePolicyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "asperiores".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consequuntur";
                xAmzDate = "quasi";
                xAmzSecurityToken = "similique";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "aliquid";
            }};            

            POSTDeletePolicyResponse res = sdk.sdk.postDeletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteScheduledAction

Deletes the specified scheduled action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.DeleteScheduledActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteScheduledActionRequest req = new POSTDeleteScheduledActionRequest(POSTDeleteScheduledActionActionEnum.DELETE_SCHEDULED_ACTION, POSTDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "in";
                xAmzDate = "eius";
                xAmzSecurityToken = "libero";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "soluta";
            }};            

            POSTDeleteScheduledActionResponse res = sdk.sdk.postDeleteScheduledAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteTags

Deletes the specified tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteTagsActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteTagsRequest;
import org.openapis.openapi.models.operations.POSTDeleteTagsResponse;
import org.openapis.openapi.models.operations.POSTDeleteTagsVersionEnum;
import org.openapis.openapi.models.shared.DeleteTagsType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteTagsRequest req = new POSTDeleteTagsRequest(POSTDeleteTagsActionEnum.DELETE_TAGS, POSTDeleteTagsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "ullam";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDeleteTagsResponse res = sdk.sdk.postDeleteTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteWarmPool

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteWarmPoolActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteWarmPoolRequest;
import org.openapis.openapi.models.operations.POSTDeleteWarmPoolResponse;
import org.openapis.openapi.models.operations.POSTDeleteWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.DeleteWarmPoolType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteWarmPoolRequest req = new POSTDeleteWarmPoolRequest(POSTDeleteWarmPoolActionEnum.DELETE_WARM_POOL, POSTDeleteWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "ex";
                xAmzCredential = "deleniti";
                xAmzDate = "itaque";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "omnis";
            }};            

            POSTDeleteWarmPoolResponse res = sdk.sdk.postDeleteWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountLimits

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountLimitsRequest req = new POSTDescribeAccountLimitsRequest(POSTDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, POSTDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "at";
                xAmzCredential = "et";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTDescribeAccountLimitsResponse res = sdk.sdk.postDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAdjustmentTypes

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAdjustmentTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAdjustmentTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAdjustmentTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAdjustmentTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAdjustmentTypesRequest req = new POSTDescribeAdjustmentTypesRequest(POSTDescribeAdjustmentTypesActionEnum.DESCRIBE_ADJUSTMENT_TYPES, POSTDescribeAdjustmentTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "iste";
                xAmzCredential = "temporibus";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTDescribeAdjustmentTypesResponse res = sdk.sdk.postDescribeAdjustmentTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAutoScalingGroups

<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingGroupsVersionEnum;
import org.openapis.openapi.models.shared.AutoScalingGroupNamesType;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAutoScalingGroupsRequest req = new POSTDescribeAutoScalingGroupsRequest(POSTDescribeAutoScalingGroupsActionEnum.DESCRIBE_AUTO_SCALING_GROUPS, POSTDescribeAutoScalingGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "mollitia";
                nextToken = "ab";
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "dolor";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "explicabo";
            }};            

            POSTDescribeAutoScalingGroupsResponse res = sdk.sdk.postDescribeAutoScalingGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAutoScalingInstances

Gets information about the Auto Scaling instances in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingInstancesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingInstancesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingInstancesVersionEnum;
import org.openapis.openapi.models.shared.DescribeAutoScalingInstancesType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAutoScalingInstancesRequest req = new POSTDescribeAutoScalingInstancesRequest(POSTDescribeAutoScalingInstancesActionEnum.DESCRIBE_AUTO_SCALING_INSTANCES, POSTDescribeAutoScalingInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "aut";
                nextToken = "dignissimos";
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "natus";
                xAmzCredential = "velit";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTDescribeAutoScalingInstancesResponse res = sdk.sdk.postDescribeAutoScalingInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAutoScalingNotificationTypes

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingNotificationTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingNotificationTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingNotificationTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAutoScalingNotificationTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAutoScalingNotificationTypesRequest req = new POSTDescribeAutoScalingNotificationTypesRequest(POSTDescribeAutoScalingNotificationTypesActionEnum.DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES, POSTDescribeAutoScalingNotificationTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellendus";
                xAmzDate = "officia";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "officia";
            }};            

            POSTDescribeAutoScalingNotificationTypesResponse res = sdk.sdk.postDescribeAutoScalingNotificationTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeInstanceRefreshes

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeInstanceRefreshesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeInstanceRefreshesRequest;
import org.openapis.openapi.models.operations.POSTDescribeInstanceRefreshesResponse;
import org.openapis.openapi.models.operations.POSTDescribeInstanceRefreshesVersionEnum;
import org.openapis.openapi.models.shared.DescribeInstanceRefreshesType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeInstanceRefreshesRequest req = new POSTDescribeInstanceRefreshesRequest(POSTDescribeInstanceRefreshesActionEnum.DESCRIBE_INSTANCE_REFRESHES, POSTDescribeInstanceRefreshesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "porro";
                xAmzDate = "quod";
                xAmzSecurityToken = "labore";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "adipisci";
            }};            

            POSTDescribeInstanceRefreshesResponse res = sdk.sdk.postDescribeInstanceRefreshes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLaunchConfigurations

Gets information about the launch configurations in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLaunchConfigurationsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLaunchConfigurationsRequest;
import org.openapis.openapi.models.operations.POSTDescribeLaunchConfigurationsResponse;
import org.openapis.openapi.models.operations.POSTDescribeLaunchConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.LaunchConfigurationNamesType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLaunchConfigurationsRequest req = new POSTDescribeLaunchConfigurationsRequest(POSTDescribeLaunchConfigurationsActionEnum.DESCRIBE_LAUNCH_CONFIGURATIONS, POSTDescribeLaunchConfigurationsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "id";
                nextToken = "suscipit";
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "est";
                xAmzCredential = "recusandae";
                xAmzDate = "totam";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTDescribeLaunchConfigurationsResponse res = sdk.sdk.postDescribeLaunchConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLifecycleHookTypes

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHookTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHookTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHookTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHookTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLifecycleHookTypesRequest req = new POSTDescribeLifecycleHookTypesRequest(POSTDescribeLifecycleHookTypesActionEnum.DESCRIBE_LIFECYCLE_HOOK_TYPES, POSTDescribeLifecycleHookTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "labore";
                xAmzCredential = "possimus";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cum";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "in";
            }};            

            POSTDescribeLifecycleHookTypesResponse res = sdk.sdk.postDescribeLifecycleHookTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLifecycleHooks

Gets information about the lifecycle hooks for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHooksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHooksRequest;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHooksResponse;
import org.openapis.openapi.models.operations.POSTDescribeLifecycleHooksVersionEnum;
import org.openapis.openapi.models.shared.DescribeLifecycleHooksType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLifecycleHooksRequest req = new POSTDescribeLifecycleHooksRequest(POSTDescribeLifecycleHooksActionEnum.DESCRIBE_LIFECYCLE_HOOKS, POSTDescribeLifecycleHooksVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTDescribeLifecycleHooksResponse res = sdk.sdk.postDescribeLifecycleHooks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancerTargetGroupsRequest req = new POSTDescribeLoadBalancerTargetGroupsRequest(POSTDescribeLoadBalancerTargetGroupsActionEnum.DESCRIBE_LOAD_BALANCER_TARGET_GROUPS, POSTDescribeLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "exercitationem".getBytes();
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "facere";
                xAmzCredential = "numquam";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDescribeLoadBalancerTargetGroupsResponse res = sdk.sdk.postDescribeLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoadBalancers

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancersRequest req = new POSTDescribeLoadBalancersRequest(POSTDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, POSTDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "asperiores";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "non";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "beatae";
            }};            

            POSTDescribeLoadBalancersResponse res = sdk.sdk.postDescribeLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeMetricCollectionTypes

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeMetricCollectionTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeMetricCollectionTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeMetricCollectionTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeMetricCollectionTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeMetricCollectionTypesRequest req = new POSTDescribeMetricCollectionTypesRequest(POSTDescribeMetricCollectionTypesActionEnum.DESCRIBE_METRIC_COLLECTION_TYPES, POSTDescribeMetricCollectionTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "consectetur";
                xAmzDate = "corporis";
                xAmzSecurityToken = "harum";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeMetricCollectionTypesResponse res = sdk.sdk.postDescribeMetricCollectionTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeNotificationConfigurations

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeNotificationConfigurationsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeNotificationConfigurationsRequest;
import org.openapis.openapi.models.operations.POSTDescribeNotificationConfigurationsResponse;
import org.openapis.openapi.models.operations.POSTDescribeNotificationConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.DescribeNotificationConfigurationsType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeNotificationConfigurationsRequest req = new POSTDescribeNotificationConfigurationsRequest(POSTDescribeNotificationConfigurationsActionEnum.DESCRIBE_NOTIFICATION_CONFIGURATIONS, POSTDescribeNotificationConfigurationsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "libero";
                nextToken = "vitae";
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            POSTDescribeNotificationConfigurationsResponse res = sdk.sdk.postDescribeNotificationConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribePolicies

Gets information about the scaling policies in the account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribePoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribePoliciesRequest;
import org.openapis.openapi.models.operations.POSTDescribePoliciesResponse;
import org.openapis.openapi.models.operations.POSTDescribePoliciesVersionEnum;
import org.openapis.openapi.models.shared.DescribePoliciesType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePoliciesRequest req = new POSTDescribePoliciesRequest(POSTDescribePoliciesActionEnum.DESCRIBE_POLICIES, POSTDescribePoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "dolorum";
                nextToken = "adipisci";
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "in";
                xAmzDate = "dolore";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "temporibus";
            }};            

            POSTDescribePoliciesResponse res = sdk.sdk.postDescribePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeScalingActivities

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeScalingActivitiesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeScalingActivitiesRequest;
import org.openapis.openapi.models.operations.POSTDescribeScalingActivitiesResponse;
import org.openapis.openapi.models.operations.POSTDescribeScalingActivitiesVersionEnum;
import org.openapis.openapi.models.shared.DescribeScalingActivitiesType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeScalingActivitiesRequest req = new POSTDescribeScalingActivitiesRequest(POSTDescribeScalingActivitiesActionEnum.DESCRIBE_SCALING_ACTIVITIES, POSTDescribeScalingActivitiesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "adipisci";
                nextToken = "cum";
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "hic";
                xAmzCredential = "nesciunt";
                xAmzDate = "culpa";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "totam";
            }};            

            POSTDescribeScalingActivitiesResponse res = sdk.sdk.postDescribeScalingActivities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeScalingProcessTypes

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeScalingProcessTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeScalingProcessTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeScalingProcessTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeScalingProcessTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeScalingProcessTypesRequest req = new POSTDescribeScalingProcessTypesRequest(POSTDescribeScalingProcessTypesActionEnum.DESCRIBE_SCALING_PROCESS_TYPES, POSTDescribeScalingProcessTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "sit";
                xAmzDate = "rerum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "explicabo";
            }};            

            POSTDescribeScalingProcessTypesResponse res = sdk.sdk.postDescribeScalingProcessTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeScheduledActions

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeScheduledActionsType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeScheduledActionsRequest req = new POSTDescribeScheduledActionsRequest(POSTDescribeScheduledActionsActionEnum.DESCRIBE_SCHEDULED_ACTIONS, POSTDescribeScheduledActionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "facilis";
                nextToken = "voluptate";
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolore";
                xAmzDate = "laborum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "in";
                xAmzSignedHeaders = "commodi";
            }};            

            POSTDescribeScheduledActionsResponse res = sdk.sdk.postDescribeScheduledActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTags

<p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTagsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTagsRequest;
import org.openapis.openapi.models.operations.POSTDescribeTagsResponse;
import org.openapis.openapi.models.operations.POSTDescribeTagsVersionEnum;
import org.openapis.openapi.models.shared.DescribeTagsType;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTagsRequest req = new POSTDescribeTagsRequest(POSTDescribeTagsActionEnum.DESCRIBE_TAGS, POSTDescribeTagsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "explicabo";
                nextToken = "voluptas";
                requestBody = "unde".getBytes();
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTDescribeTagsResponse res = sdk.sdk.postDescribeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTerminationPolicyTypes

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTerminationPolicyTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTerminationPolicyTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeTerminationPolicyTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeTerminationPolicyTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTerminationPolicyTypesRequest req = new POSTDescribeTerminationPolicyTypesRequest(POSTDescribeTerminationPolicyTypesActionEnum.DESCRIBE_TERMINATION_POLICY_TYPES, POSTDescribeTerminationPolicyTypesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "sed";
                xAmzDate = "provident";
                xAmzSecurityToken = "eius";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTDescribeTerminationPolicyTypesResponse res = sdk.sdk.postDescribeTerminationPolicyTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTrafficSources

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTrafficSourcesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTrafficSourcesRequest;
import org.openapis.openapi.models.operations.POSTDescribeTrafficSourcesResponse;
import org.openapis.openapi.models.operations.POSTDescribeTrafficSourcesVersionEnum;
import org.openapis.openapi.models.shared.DescribeTrafficSourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTrafficSourcesRequest req = new POSTDescribeTrafficSourcesRequest(POSTDescribeTrafficSourcesActionEnum.DESCRIBE_TRAFFIC_SOURCES, POSTDescribeTrafficSourcesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                maxRecords = "occaecati";
                nextToken = "quos";
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "voluptate";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "non";
            }};            

            POSTDescribeTrafficSourcesResponse res = sdk.sdk.postDescribeTrafficSources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeWarmPool

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeWarmPoolActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeWarmPoolRequest;
import org.openapis.openapi.models.operations.POSTDescribeWarmPoolResponse;
import org.openapis.openapi.models.operations.POSTDescribeWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.DescribeWarmPoolType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeWarmPoolRequest req = new POSTDescribeWarmPoolRequest(POSTDescribeWarmPoolActionEnum.DESCRIBE_WARM_POOL, POSTDescribeWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "incidunt";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "sit";
            }};            

            POSTDescribeWarmPoolResponse res = sdk.sdk.postDescribeWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachInstances

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDetachInstancesRequest;
import org.openapis.openapi.models.operations.POSTDetachInstancesResponse;
import org.openapis.openapi.models.operations.POSTDetachInstancesVersionEnum;
import org.openapis.openapi.models.shared.DetachInstancesQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachInstancesRequest req = new POSTDetachInstancesRequest(POSTDetachInstancesActionEnum.DETACH_INSTANCES, POSTDetachInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTDetachInstancesResponse res = sdk.sdk.postDetachInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerTargetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerTargetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DetachLoadBalancerTargetGroupsType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachLoadBalancerTargetGroupsRequest req = new POSTDetachLoadBalancerTargetGroupsRequest(POSTDetachLoadBalancerTargetGroupsActionEnum.DETACH_LOAD_BALANCER_TARGET_GROUPS, POSTDetachLoadBalancerTargetGroupsVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "in";
                xAmzCredential = "officiis";
                xAmzDate = "beatae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTDetachLoadBalancerTargetGroupsResponse res = sdk.sdk.postDetachLoadBalancerTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachLoadBalancers

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancersRequest;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancersResponse;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.DetachLoadBalancersType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachLoadBalancersRequest req = new POSTDetachLoadBalancersRequest(POSTDetachLoadBalancersActionEnum.DETACH_LOAD_BALANCERS, POSTDetachLoadBalancersVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "error";
                xAmzDate = "hic";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "neque";
            }};            

            POSTDetachLoadBalancersResponse res = sdk.sdk.postDetachLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachTrafficSources

<p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a taffic, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachTrafficSourcesActionEnum;
import org.openapis.openapi.models.operations.POSTDetachTrafficSourcesRequest;
import org.openapis.openapi.models.operations.POSTDetachTrafficSourcesResponse;
import org.openapis.openapi.models.operations.POSTDetachTrafficSourcesVersionEnum;
import org.openapis.openapi.models.shared.DetachTrafficSourcesType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrafficSourceIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachTrafficSourcesRequest req = new POSTDetachTrafficSourcesRequest(POSTDetachTrafficSourcesActionEnum.DETACH_TRAFFIC_SOURCES, POSTDetachTrafficSourcesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "corrupti";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTDetachTrafficSourcesResponse res = sdk.sdk.postDetachTrafficSources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableMetricsCollection

Disables group metrics collection for the specified Auto Scaling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableMetricsCollectionActionEnum;
import org.openapis.openapi.models.operations.POSTDisableMetricsCollectionRequest;
import org.openapis.openapi.models.operations.POSTDisableMetricsCollectionResponse;
import org.openapis.openapi.models.operations.POSTDisableMetricsCollectionVersionEnum;
import org.openapis.openapi.models.shared.DisableMetricsCollectionQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableMetricsCollectionRequest req = new POSTDisableMetricsCollectionRequest(POSTDisableMetricsCollectionActionEnum.DISABLE_METRICS_COLLECTION, POSTDisableMetricsCollectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "expedita";
                xAmzDate = "magnam";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsam";
            }};            

            POSTDisableMetricsCollectionResponse res = sdk.sdk.postDisableMetricsCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableMetricsCollection

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableMetricsCollectionActionEnum;
import org.openapis.openapi.models.operations.POSTEnableMetricsCollectionRequest;
import org.openapis.openapi.models.operations.POSTEnableMetricsCollectionResponse;
import org.openapis.openapi.models.operations.POSTEnableMetricsCollectionVersionEnum;
import org.openapis.openapi.models.shared.EnableMetricsCollectionQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableMetricsCollectionRequest req = new POSTEnableMetricsCollectionRequest(POSTEnableMetricsCollectionActionEnum.ENABLE_METRICS_COLLECTION, POSTEnableMetricsCollectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "voluptatum".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "corporis";
                xAmzDate = "et";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sed";
            }};            

            POSTEnableMetricsCollectionResponse res = sdk.sdk.postEnableMetricsCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnterStandby

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnterStandbyActionEnum;
import org.openapis.openapi.models.operations.POSTEnterStandbyRequest;
import org.openapis.openapi.models.operations.POSTEnterStandbyResponse;
import org.openapis.openapi.models.operations.POSTEnterStandbyVersionEnum;
import org.openapis.openapi.models.shared.EnterStandbyQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnterStandbyRequest req = new POSTEnterStandbyRequest(POSTEnterStandbyActionEnum.ENTER_STANDBY, POSTEnterStandbyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "error";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTEnterStandbyResponse res = sdk.sdk.postEnterStandby(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExecutePolicy

Executes the specified policy. This can be useful for testing the design of your scaling policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTExecutePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTExecutePolicyRequest;
import org.openapis.openapi.models.operations.POSTExecutePolicyResponse;
import org.openapis.openapi.models.operations.POSTExecutePolicyVersionEnum;
import org.openapis.openapi.models.shared.ExecutePolicyType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTExecutePolicyRequest req = new POSTExecutePolicyRequest(POSTExecutePolicyActionEnum.EXECUTE_POLICY, POSTExecutePolicyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "labore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "atque";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "nam";
            }};            

            POSTExecutePolicyResponse res = sdk.sdk.postExecutePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExitStandby

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTExitStandbyActionEnum;
import org.openapis.openapi.models.operations.POSTExitStandbyRequest;
import org.openapis.openapi.models.operations.POSTExitStandbyResponse;
import org.openapis.openapi.models.operations.POSTExitStandbyVersionEnum;
import org.openapis.openapi.models.shared.ExitStandbyQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTExitStandbyRequest req = new POSTExitStandbyRequest(POSTExitStandbyActionEnum.EXIT_STANDBY, POSTExitStandbyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            POSTExitStandbyResponse res = sdk.sdk.postExitStandby(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetPredictiveScalingForecast

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetPredictiveScalingForecastActionEnum;
import org.openapis.openapi.models.operations.POSTGetPredictiveScalingForecastRequest;
import org.openapis.openapi.models.operations.POSTGetPredictiveScalingForecastResponse;
import org.openapis.openapi.models.operations.POSTGetPredictiveScalingForecastVersionEnum;
import org.openapis.openapi.models.shared.GetPredictiveScalingForecastType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetPredictiveScalingForecastRequest req = new POSTGetPredictiveScalingForecastRequest(POSTGetPredictiveScalingForecastActionEnum.GET_PREDICTIVE_SCALING_FORECAST, POSTGetPredictiveScalingForecastVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTGetPredictiveScalingForecastResponse res = sdk.sdk.postGetPredictiveScalingForecast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutLifecycleHook

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutLifecycleHookActionEnum;
import org.openapis.openapi.models.operations.POSTPutLifecycleHookRequest;
import org.openapis.openapi.models.operations.POSTPutLifecycleHookResponse;
import org.openapis.openapi.models.operations.POSTPutLifecycleHookVersionEnum;
import org.openapis.openapi.models.shared.PutLifecycleHookType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutLifecycleHookRequest req = new POSTPutLifecycleHookRequest(POSTPutLifecycleHookActionEnum.PUT_LIFECYCLE_HOOK, POSTPutLifecycleHookVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "quisquam";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            POSTPutLifecycleHookResponse res = sdk.sdk.postPutLifecycleHook(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutNotificationConfiguration

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutNotificationConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTPutNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.POSTPutNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.POSTPutNotificationConfigurationVersionEnum;
import org.openapis.openapi.models.shared.PutNotificationConfigurationType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutNotificationConfigurationRequest req = new POSTPutNotificationConfigurationRequest(POSTPutNotificationConfigurationActionEnum.PUT_NOTIFICATION_CONFIGURATION, POSTPutNotificationConfigurationVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "maxime";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "assumenda";
            }};            

            POSTPutNotificationConfigurationResponse res = sdk.sdk.postPutNotificationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutScalingPolicy

<p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutScalingPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTPutScalingPolicyRequest;
import org.openapis.openapi.models.operations.POSTPutScalingPolicyResponse;
import org.openapis.openapi.models.operations.POSTPutScalingPolicyVersionEnum;
import org.openapis.openapi.models.shared.CustomizedMetricSpecification;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricDataQuery;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.MetricStat;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.PredefinedLoadMetricTypeEnum;
import org.openapis.openapi.models.shared.PredefinedMetricPairTypeEnum;
import org.openapis.openapi.models.shared.PredefinedMetricSpecification;
import org.openapis.openapi.models.shared.PredefinedScalingMetricTypeEnum;
import org.openapis.openapi.models.shared.PredictiveScalingConfiguration;
import org.openapis.openapi.models.shared.PredictiveScalingCustomizedCapacityMetric;
import org.openapis.openapi.models.shared.PredictiveScalingCustomizedLoadMetric;
import org.openapis.openapi.models.shared.PredictiveScalingCustomizedScalingMetric;
import org.openapis.openapi.models.shared.PredictiveScalingMaxCapacityBreachBehaviorEnum;
import org.openapis.openapi.models.shared.PredictiveScalingMetricSpecification;
import org.openapis.openapi.models.shared.PredictiveScalingModeEnum;
import org.openapis.openapi.models.shared.PredictiveScalingPredefinedLoadMetric;
import org.openapis.openapi.models.shared.PredictiveScalingPredefinedMetricPair;
import org.openapis.openapi.models.shared.PredictiveScalingPredefinedScalingMetric;
import org.openapis.openapi.models.shared.PutScalingPolicyType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepAdjustment;
import org.openapis.openapi.models.shared.TargetTrackingConfiguration;
import org.openapis.openapi.models.shared.TargetTrackingMetricDataQuery;
import org.openapis.openapi.models.shared.TargetTrackingMetricStat;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutScalingPolicyRequest req = new POSTPutScalingPolicyRequest(POSTPutScalingPolicyActionEnum.PUT_SCALING_POLICY, POSTPutScalingPolicyVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "officiis";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "natus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTPutScalingPolicyResponse res = sdk.sdk.postPutScalingPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutScheduledUpdateGroupAction

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutScheduledUpdateGroupActionActionEnum;
import org.openapis.openapi.models.operations.POSTPutScheduledUpdateGroupActionRequest;
import org.openapis.openapi.models.operations.POSTPutScheduledUpdateGroupActionResponse;
import org.openapis.openapi.models.operations.POSTPutScheduledUpdateGroupActionVersionEnum;
import org.openapis.openapi.models.shared.PutScheduledUpdateGroupActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutScheduledUpdateGroupActionRequest req = new POSTPutScheduledUpdateGroupActionRequest(POSTPutScheduledUpdateGroupActionActionEnum.PUT_SCHEDULED_UPDATE_GROUP_ACTION, POSTPutScheduledUpdateGroupActionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "at";
                xAmzCredential = "error";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "atque";
            }};            

            POSTPutScheduledUpdateGroupActionResponse res = sdk.sdk.postPutScheduledUpdateGroupAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutWarmPool

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutWarmPoolActionEnum;
import org.openapis.openapi.models.operations.POSTPutWarmPoolRequest;
import org.openapis.openapi.models.operations.POSTPutWarmPoolResponse;
import org.openapis.openapi.models.operations.POSTPutWarmPoolVersionEnum;
import org.openapis.openapi.models.shared.InstanceReusePolicy;
import org.openapis.openapi.models.shared.PutWarmPoolType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WarmPoolStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutWarmPoolRequest req = new POSTPutWarmPoolRequest(POSTPutWarmPoolActionEnum.PUT_WARM_POOL, POSTPutWarmPoolVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "repellendus";
                xAmzDate = "labore";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTPutWarmPoolResponse res = sdk.sdk.postPutWarmPool(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRecordLifecycleActionHeartbeat

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRecordLifecycleActionHeartbeatActionEnum;
import org.openapis.openapi.models.operations.POSTRecordLifecycleActionHeartbeatRequest;
import org.openapis.openapi.models.operations.POSTRecordLifecycleActionHeartbeatResponse;
import org.openapis.openapi.models.operations.POSTRecordLifecycleActionHeartbeatVersionEnum;
import org.openapis.openapi.models.shared.RecordLifecycleActionHeartbeatType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRecordLifecycleActionHeartbeatRequest req = new POSTRecordLifecycleActionHeartbeatRequest(POSTRecordLifecycleActionHeartbeatActionEnum.RECORD_LIFECYCLE_ACTION_HEARTBEAT, POSTRecordLifecycleActionHeartbeatVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "accusantium".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "enim";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "velit";
                xAmzSignature = "a";
                xAmzSignedHeaders = "molestias";
            }};            

            POSTRecordLifecycleActionHeartbeatResponse res = sdk.sdk.postRecordLifecycleActionHeartbeat(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResumeProcesses

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResumeProcessesActionEnum;
import org.openapis.openapi.models.operations.POSTResumeProcessesRequest;
import org.openapis.openapi.models.operations.POSTResumeProcessesResponse;
import org.openapis.openapi.models.operations.POSTResumeProcessesVersionEnum;
import org.openapis.openapi.models.shared.ScalingProcessQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResumeProcessesRequest req = new POSTResumeProcessesRequest(POSTResumeProcessesActionEnum.RESUME_PROCESSES, POSTResumeProcessesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "officiis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "in";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "eveniet";
            }};            

            POSTResumeProcessesResponse res = sdk.sdk.postResumeProcesses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRollbackInstanceRefresh

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRollbackInstanceRefreshActionEnum;
import org.openapis.openapi.models.operations.POSTRollbackInstanceRefreshRequest;
import org.openapis.openapi.models.operations.POSTRollbackInstanceRefreshResponse;
import org.openapis.openapi.models.operations.POSTRollbackInstanceRefreshVersionEnum;
import org.openapis.openapi.models.shared.RollbackInstanceRefreshType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRollbackInstanceRefreshRequest req = new POSTRollbackInstanceRefreshRequest(POSTRollbackInstanceRefreshActionEnum.ROLLBACK_INSTANCE_REFRESH, POSTRollbackInstanceRefreshVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "id";
                xAmzCredential = "quis";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "error";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "corporis";
            }};            

            POSTRollbackInstanceRefreshResponse res = sdk.sdk.postRollbackInstanceRefresh(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetDesiredCapacity

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetDesiredCapacityActionEnum;
import org.openapis.openapi.models.operations.POSTSetDesiredCapacityRequest;
import org.openapis.openapi.models.operations.POSTSetDesiredCapacityResponse;
import org.openapis.openapi.models.operations.POSTSetDesiredCapacityVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetDesiredCapacityType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetDesiredCapacityRequest req = new POSTSetDesiredCapacityRequest(POSTSetDesiredCapacityActionEnum.SET_DESIRED_CAPACITY, POSTSetDesiredCapacityVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "eveniet".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "vero";
                xAmzCredential = "doloremque";
                xAmzDate = "iure";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "quae";
            }};            

            POSTSetDesiredCapacityResponse res = sdk.sdk.postSetDesiredCapacity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetInstanceHealth

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetInstanceHealthActionEnum;
import org.openapis.openapi.models.operations.POSTSetInstanceHealthRequest;
import org.openapis.openapi.models.operations.POSTSetInstanceHealthResponse;
import org.openapis.openapi.models.operations.POSTSetInstanceHealthVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetInstanceHealthQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetInstanceHealthRequest req = new POSTSetInstanceHealthRequest(POSTSetInstanceHealthActionEnum.SET_INSTANCE_HEALTH, POSTSetInstanceHealthVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "eveniet".getBytes();
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cum";
                xAmzCredential = "iure";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTSetInstanceHealthResponse res = sdk.sdk.postSetInstanceHealth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetInstanceProtection

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetInstanceProtectionActionEnum;
import org.openapis.openapi.models.operations.POSTSetInstanceProtectionRequest;
import org.openapis.openapi.models.operations.POSTSetInstanceProtectionResponse;
import org.openapis.openapi.models.operations.POSTSetInstanceProtectionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetInstanceProtectionQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetInstanceProtectionRequest req = new POSTSetInstanceProtectionRequest(POSTSetInstanceProtectionActionEnum.SET_INSTANCE_PROTECTION, POSTSetInstanceProtectionVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "ad";
                xAmzCredential = "repellat";
                xAmzDate = "alias";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTSetInstanceProtectionResponse res = sdk.sdk.postSetInstanceProtection(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartInstanceRefresh

<p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartInstanceRefreshActionEnum;
import org.openapis.openapi.models.operations.POSTStartInstanceRefreshRequest;
import org.openapis.openapi.models.operations.POSTStartInstanceRefreshResponse;
import org.openapis.openapi.models.operations.POSTStartInstanceRefreshVersionEnum;
import org.openapis.openapi.models.shared.AcceleratorCountRequest;
import org.openapis.openapi.models.shared.AcceleratorManufacturerEnum;
import org.openapis.openapi.models.shared.AcceleratorNameEnum;
import org.openapis.openapi.models.shared.AcceleratorTotalMemoryMiBRequest;
import org.openapis.openapi.models.shared.AcceleratorTypeEnum;
import org.openapis.openapi.models.shared.BareMetalEnum;
import org.openapis.openapi.models.shared.BaselineEbsBandwidthMbpsRequest;
import org.openapis.openapi.models.shared.BurstablePerformanceEnum;
import org.openapis.openapi.models.shared.CpuManufacturerEnum;
import org.openapis.openapi.models.shared.DesiredConfiguration;
import org.openapis.openapi.models.shared.InstanceGenerationEnum;
import org.openapis.openapi.models.shared.InstanceRequirements;
import org.openapis.openapi.models.shared.InstancesDistribution;
import org.openapis.openapi.models.shared.LaunchTemplate;
import org.openapis.openapi.models.shared.LaunchTemplateOverrides;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.LocalStorageEnum;
import org.openapis.openapi.models.shared.LocalStorageTypeEnum;
import org.openapis.openapi.models.shared.MemoryGiBPerVCpuRequest;
import org.openapis.openapi.models.shared.MemoryMiBRequest;
import org.openapis.openapi.models.shared.MixedInstancesPolicy;
import org.openapis.openapi.models.shared.NetworkBandwidthGbpsRequest;
import org.openapis.openapi.models.shared.NetworkInterfaceCountRequest;
import org.openapis.openapi.models.shared.RefreshPreferences;
import org.openapis.openapi.models.shared.RefreshStrategyEnum;
import org.openapis.openapi.models.shared.ScaleInProtectedInstancesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandbyInstancesEnum;
import org.openapis.openapi.models.shared.StartInstanceRefreshType;
import org.openapis.openapi.models.shared.TotalLocalStorageGBRequest;
import org.openapis.openapi.models.shared.VCpuCountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartInstanceRefreshRequest req = new POSTStartInstanceRefreshRequest(POSTStartInstanceRefreshActionEnum.START_INSTANCE_REFRESH, POSTStartInstanceRefreshVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "reiciendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "id";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTStartInstanceRefreshResponse res = sdk.sdk.postStartInstanceRefresh(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSuspendProcesses

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSuspendProcessesActionEnum;
import org.openapis.openapi.models.operations.POSTSuspendProcessesRequest;
import org.openapis.openapi.models.operations.POSTSuspendProcessesResponse;
import org.openapis.openapi.models.operations.POSTSuspendProcessesVersionEnum;
import org.openapis.openapi.models.shared.ScalingProcessQuery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSuspendProcessesRequest req = new POSTSuspendProcessesRequest(POSTSuspendProcessesActionEnum.SUSPEND_PROCESSES, POSTSuspendProcessesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "nesciunt".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            POSTSuspendProcessesResponse res = sdk.sdk.postSuspendProcesses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTerminateInstanceInAutoScalingGroup

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTerminateInstanceInAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.POSTTerminateInstanceInAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.POSTTerminateInstanceInAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.POSTTerminateInstanceInAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateInstanceInAutoScalingGroupType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTerminateInstanceInAutoScalingGroupRequest req = new POSTTerminateInstanceInAutoScalingGroupRequest(POSTTerminateInstanceInAutoScalingGroupActionEnum.TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP, POSTTerminateInstanceInAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "provident";
            }};            

            POSTTerminateInstanceInAutoScalingGroupResponse res = sdk.sdk.postTerminateInstanceInAutoScalingGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAutoScalingGroup

<p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAutoScalingGroupActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAutoScalingGroupRequest;
import org.openapis.openapi.models.operations.POSTUpdateAutoScalingGroupResponse;
import org.openapis.openapi.models.operations.POSTUpdateAutoScalingGroupVersionEnum;
import org.openapis.openapi.models.shared.AcceleratorCountRequest;
import org.openapis.openapi.models.shared.AcceleratorManufacturerEnum;
import org.openapis.openapi.models.shared.AcceleratorNameEnum;
import org.openapis.openapi.models.shared.AcceleratorTotalMemoryMiBRequest;
import org.openapis.openapi.models.shared.AcceleratorTypeEnum;
import org.openapis.openapi.models.shared.BareMetalEnum;
import org.openapis.openapi.models.shared.BaselineEbsBandwidthMbpsRequest;
import org.openapis.openapi.models.shared.BurstablePerformanceEnum;
import org.openapis.openapi.models.shared.CpuManufacturerEnum;
import org.openapis.openapi.models.shared.InstanceGenerationEnum;
import org.openapis.openapi.models.shared.InstanceRequirements;
import org.openapis.openapi.models.shared.InstancesDistribution;
import org.openapis.openapi.models.shared.LaunchTemplate;
import org.openapis.openapi.models.shared.LaunchTemplateOverrides;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.LocalStorageEnum;
import org.openapis.openapi.models.shared.LocalStorageTypeEnum;
import org.openapis.openapi.models.shared.MemoryGiBPerVCpuRequest;
import org.openapis.openapi.models.shared.MemoryMiBRequest;
import org.openapis.openapi.models.shared.MixedInstancesPolicy;
import org.openapis.openapi.models.shared.NetworkBandwidthGbpsRequest;
import org.openapis.openapi.models.shared.NetworkInterfaceCountRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TotalLocalStorageGBRequest;
import org.openapis.openapi.models.shared.UpdateAutoScalingGroupType;
import org.openapis.openapi.models.shared.VCpuCountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAutoScalingGroupRequest req = new POSTUpdateAutoScalingGroupRequest(POSTUpdateAutoScalingGroupActionEnum.UPDATE_AUTO_SCALING_GROUP, POSTUpdateAutoScalingGroupVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "aspernatur";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTUpdateAutoScalingGroupResponse res = sdk.sdk.postUpdateAutoScalingGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
