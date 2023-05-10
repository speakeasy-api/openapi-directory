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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachInstancesRequest();
    $request->action = GETAttachInstancesActionEnum::ATTACH_INSTANCES;
    $request->autoScalingGroupName = 'iure';
    $request->instanceIds = [
        'debitis',
        'ipsa',
    ];
    $request->version = GETAttachInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->getAttachInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachLoadBalancerTargetGroupsRequest();
    $request->action = GETAttachLoadBalancerTargetGroupsActionEnum::ATTACH_LOAD_BALANCER_TARGET_GROUPS;
    $request->autoScalingGroupName = 'iusto';
    $request->targetGroupARNs = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->version = GETAttachLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->getAttachLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachLoadBalancers

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachLoadBalancersRequest();
    $request->action = GETAttachLoadBalancersActionEnum::ATTACH_LOAD_BALANCERS;
    $request->autoScalingGroupName = 'sapiente';
    $request->loadBalancerNames = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->version = GETAttachLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getAttachLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchDeleteScheduledAction

Deletes one or more scheduled actions for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBatchDeleteScheduledActionRequest();
    $request->action = GETBatchDeleteScheduledActionActionEnum::BATCH_DELETE_SCHEDULED_ACTION;
    $request->autoScalingGroupName = 'dicta';
    $request->scheduledActionNames = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->version = GETBatchDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getBatchDeleteScheduledAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCancelInstanceRefresh

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelInstanceRefreshRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelInstanceRefreshActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelInstanceRefreshVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCancelInstanceRefreshRequest();
    $request->action = GETCancelInstanceRefreshActionEnum::CANCEL_INSTANCE_REFRESH;
    $request->autoScalingGroupName = 'modi';
    $request->version = GETCancelInstanceRefreshVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getCancelInstanceRefresh($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompleteLifecycleAction

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteLifecycleActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteLifecycleActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteLifecycleActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCompleteLifecycleActionRequest();
    $request->action = GETCompleteLifecycleActionActionEnum::COMPLETE_LIFECYCLE_ACTION;
    $request->autoScalingGroupName = 'perferendis';
    $request->instanceId = 'ad';
    $request->lifecycleActionResult = 'natus';
    $request->lifecycleActionToken = 'sed';
    $request->lifecycleHookName = 'iste';
    $request->version = GETCompleteLifecycleActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getCompleteLifecycleAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAutoScalingGroup

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAutoScalingGroupRequest();
    $request->action = GETDeleteAutoScalingGroupActionEnum::DELETE_AUTO_SCALING_GROUP;
    $request->autoScalingGroupName = 'corporis';
    $request->forceDelete = false;
    $request->version = GETDeleteAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getDeleteAutoScalingGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLaunchConfiguration

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLaunchConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLaunchConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLaunchConfigurationRequest();
    $request->action = GETDeleteLaunchConfigurationActionEnum::DELETE_LAUNCH_CONFIGURATION;
    $request->launchConfigurationName = 'est';
    $request->version = GETDeleteLaunchConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDeleteLaunchConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLifecycleHook

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLifecycleHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLifecycleHookActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLifecycleHookVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLifecycleHookRequest();
    $request->action = GETDeleteLifecycleHookActionEnum::DELETE_LIFECYCLE_HOOK;
    $request->autoScalingGroupName = 'enim';
    $request->lifecycleHookName = 'omnis';
    $request->version = GETDeleteLifecycleHookVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->getDeleteLifecycleHook($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteNotificationConfiguration

Deletes the specified notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteNotificationConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteNotificationConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteNotificationConfigurationRequest();
    $request->action = GETDeleteNotificationConfigurationActionEnum::DELETE_NOTIFICATION_CONFIGURATION;
    $request->autoScalingGroupName = 'sapiente';
    $request->topicARN = 'architecto';
    $request->version = GETDeleteNotificationConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getDeleteNotificationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletePolicy

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeletePolicyRequest();
    $request->action = GETDeletePolicyActionEnum::DELETE_POLICY;
    $request->autoScalingGroupName = 'numquam';
    $request->policyName = 'commodi';
    $request->version = GETDeletePolicyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->getDeletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteScheduledAction

Deletes the specified scheduled action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteScheduledActionRequest();
    $request->action = GETDeleteScheduledActionActionEnum::DELETE_SCHEDULED_ACTION;
    $request->autoScalingGroupName = 'laborum';
    $request->scheduledActionName = 'animi';
    $request->version = GETDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->getDeleteScheduledAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteWarmPool

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteWarmPoolRequest();
    $request->action = GETDeleteWarmPoolActionEnum::DELETE_WARM_POOL;
    $request->autoScalingGroupName = 'possimus';
    $request->forceDelete = false;
    $request->version = GETDeleteWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getDeleteWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountLimits

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountLimitsRequest();
    $request->action = GETDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->version = GETDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAdjustmentTypes

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAdjustmentTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAdjustmentTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAdjustmentTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAdjustmentTypesRequest();
    $request->action = GETDescribeAdjustmentTypesActionEnum::DESCRIBE_ADJUSTMENT_TYPES;
    $request->version = GETDescribeAdjustmentTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getDescribeAdjustmentTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAutoScalingInstances

Gets information about the Auto Scaling instances in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAutoScalingInstancesRequest();
    $request->action = GETDescribeAutoScalingInstancesActionEnum::DESCRIBE_AUTO_SCALING_INSTANCES;
    $request->instanceIds = [
        'corporis',
    ];
    $request->maxRecords = 296140;
    $request->nextToken = 'iusto';
    $request->version = GETDescribeAutoScalingInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getDescribeAutoScalingInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAutoScalingNotificationTypes

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingNotificationTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingNotificationTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAutoScalingNotificationTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAutoScalingNotificationTypesRequest();
    $request->action = GETDescribeAutoScalingNotificationTypesActionEnum::DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES;
    $request->version = GETDescribeAutoScalingNotificationTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getDescribeAutoScalingNotificationTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeInstanceRefreshes

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstanceRefreshesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstanceRefreshesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstanceRefreshesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeInstanceRefreshesRequest();
    $request->action = GETDescribeInstanceRefreshesActionEnum::DESCRIBE_INSTANCE_REFRESHES;
    $request->autoScalingGroupName = 'rem';
    $request->instanceRefreshIds = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->maxRecords = 929297;
    $request->nextToken = 'incidunt';
    $request->version = GETDescribeInstanceRefreshesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->getDescribeInstanceRefreshes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLaunchConfigurations

Gets information about the launch configurations in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLaunchConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLaunchConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLaunchConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLaunchConfigurationsRequest();
    $request->action = GETDescribeLaunchConfigurationsActionEnum::DESCRIBE_LAUNCH_CONFIGURATIONS;
    $request->launchConfigurationNames = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->maxRecords = 586513;
    $request->nextToken = 'quos';
    $request->version = GETDescribeLaunchConfigurationsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getDescribeLaunchConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLifecycleHookTypes

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHookTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHookTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHookTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLifecycleHookTypesRequest();
    $request->action = GETDescribeLifecycleHookTypesActionEnum::DESCRIBE_LIFECYCLE_HOOK_TYPES;
    $request->version = GETDescribeLifecycleHookTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getDescribeLifecycleHookTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLifecycleHooks

Gets information about the lifecycle hooks for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHooksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLifecycleHooksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLifecycleHooksRequest();
    $request->action = GETDescribeLifecycleHooksActionEnum::DESCRIBE_LIFECYCLE_HOOKS;
    $request->autoScalingGroupName = 'non';
    $request->lifecycleHookNames = [
        'sint',
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->version = GETDescribeLifecycleHooksVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getDescribeLifecycleHooks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancerTargetGroupsRequest();
    $request->action = GETDescribeLoadBalancerTargetGroupsActionEnum::DESCRIBE_LOAD_BALANCER_TARGET_GROUPS;
    $request->autoScalingGroupName = 'in';
    $request->maxRecords = 846409;
    $request->nextToken = 'maiores';
    $request->version = GETDescribeLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDescribeLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancers

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancersRequest();
    $request->action = GETDescribeLoadBalancersActionEnum::DESCRIBE_LOAD_BALANCERS;
    $request->autoScalingGroupName = 'laborum';
    $request->maxRecords = 881104;
    $request->nextToken = 'non';
    $request->version = GETDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeMetricCollectionTypes

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeMetricCollectionTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeMetricCollectionTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeMetricCollectionTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeMetricCollectionTypesRequest();
    $request->action = GETDescribeMetricCollectionTypesActionEnum::DESCRIBE_METRIC_COLLECTION_TYPES;
    $request->version = GETDescribeMetricCollectionTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->getDescribeMetricCollectionTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeNotificationConfigurations

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeNotificationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeNotificationConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeNotificationConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeNotificationConfigurationsRequest();
    $request->action = GETDescribeNotificationConfigurationsActionEnum::DESCRIBE_NOTIFICATION_CONFIGURATIONS;
    $request->autoScalingGroupNames = [
        'natus',
        'omnis',
    ];
    $request->maxRecords = 474867;
    $request->nextToken = 'perferendis';
    $request->version = GETDescribeNotificationConfigurationsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getDescribeNotificationConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribePolicies

Gets information about the scaling policies in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribePoliciesRequest();
    $request->action = GETDescribePoliciesActionEnum::DESCRIBE_POLICIES;
    $request->autoScalingGroupName = 'natus';
    $request->maxRecords = 749170;
    $request->nextToken = 'eum';
    $request->policyNames = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->policyTypes = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->version = GETDescribePoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getDescribePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeScalingActivities

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingActivitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingActivitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeScalingActivitiesRequest();
    $request->action = GETDescribeScalingActivitiesActionEnum::DESCRIBE_SCALING_ACTIVITIES;
    $request->activityIds = [
        'necessitatibus',
    ];
    $request->autoScalingGroupName = 'odit';
    $request->includeDeletedGroups = false;
    $request->maxRecords = 367562;
    $request->nextToken = 'quasi';
    $request->version = GETDescribeScalingActivitiesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getDescribeScalingActivities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeScalingProcessTypes

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingProcessTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingProcessTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingProcessTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeScalingProcessTypesRequest();
    $request->action = GETDescribeScalingProcessTypesActionEnum::DESCRIBE_SCALING_PROCESS_TYPES;
    $request->version = GETDescribeScalingProcessTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDescribeScalingProcessTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeScheduledActions

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScheduledActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScheduledActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScheduledActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeScheduledActionsRequest();
    $request->action = GETDescribeScheduledActionsActionEnum::DESCRIBE_SCHEDULED_ACTIONS;
    $request->autoScalingGroupName = 'repellat';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T08:29:53.942Z');
    $request->maxRecords = 904648;
    $request->nextToken = 'pariatur';
    $request->scheduledActionNames = [
        'consequuntur',
    ];
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-08T15:23:46.576Z');
    $request->version = GETDescribeScheduledActionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getDescribeScheduledActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTerminationPolicyTypes

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTerminationPolicyTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTerminationPolicyTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTerminationPolicyTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTerminationPolicyTypesRequest();
    $request->action = GETDescribeTerminationPolicyTypesActionEnum::DESCRIBE_TERMINATION_POLICY_TYPES;
    $request->version = GETDescribeTerminationPolicyTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getDescribeTerminationPolicyTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTrafficSources

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTrafficSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTrafficSourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTrafficSourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTrafficSourcesRequest();
    $request->action = GETDescribeTrafficSourcesActionEnum::DESCRIBE_TRAFFIC_SOURCES;
    $request->autoScalingGroupName = 'ipsam';
    $request->maxRecords = 453543;
    $request->nextToken = 'autem';
    $request->trafficSourceType = 'nam';
    $request->version = GETDescribeTrafficSourcesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getDescribeTrafficSources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeWarmPool

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeWarmPoolRequest();
    $request->action = GETDescribeWarmPoolActionEnum::DESCRIBE_WARM_POOL;
    $request->autoScalingGroupName = 'aut';
    $request->maxRecords = 764912;
    $request->nextToken = 'corporis';
    $request->version = GETDescribeWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->getDescribeWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachInstances

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachInstancesRequest();
    $request->action = GETDetachInstancesActionEnum::DETACH_INSTANCES;
    $request->autoScalingGroupName = 'eaque';
    $request->instanceIds = [
        'nesciunt',
        'eos',
    ];
    $request->shouldDecrementDesiredCapacity = false;
    $request->version = GETDetachInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->getDetachInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachLoadBalancerTargetGroupsRequest();
    $request->action = GETDetachLoadBalancerTargetGroupsActionEnum::DETACH_LOAD_BALANCER_TARGET_GROUPS;
    $request->autoScalingGroupName = 'hic';
    $request->targetGroupARNs = [
        'omnis',
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->version = GETDetachLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->getDetachLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachLoadBalancers

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachLoadBalancersRequest();
    $request->action = GETDetachLoadBalancersActionEnum::DETACH_LOAD_BALANCERS;
    $request->autoScalingGroupName = 'adipisci';
    $request->loadBalancerNames = [
        'earum',
        'modi',
        'iste',
        'dolorum',
    ];
    $request->version = GETDetachLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->getDetachLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableMetricsCollection

Disables group metrics collection for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableMetricsCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableMetricsCollectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableMetricsCollectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableMetricsCollectionRequest();
    $request->action = GETDisableMetricsCollectionActionEnum::DISABLE_METRICS_COLLECTION;
    $request->autoScalingGroupName = 'quos';
    $request->metrics = [
        'dolorem',
        'dolorem',
    ];
    $request->version = GETDisableMetricsCollectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDisableMetricsCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableMetricsCollection

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMetricsCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMetricsCollectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMetricsCollectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableMetricsCollectionRequest();
    $request->action = GETEnableMetricsCollectionActionEnum::ENABLE_METRICS_COLLECTION;
    $request->autoScalingGroupName = 'dignissimos';
    $request->granularity = 'reiciendis';
    $request->metrics = [
        'dolorum',
    ];
    $request->version = GETEnableMetricsCollectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->getEnableMetricsCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnterStandby

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnterStandbyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnterStandbyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnterStandbyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnterStandbyRequest();
    $request->action = GETEnterStandbyActionEnum::ENTER_STANDBY;
    $request->autoScalingGroupName = 'accusamus';
    $request->instanceIds = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->shouldDecrementDesiredCapacity = false;
    $request->version = GETEnterStandbyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getEnterStandby($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExecutePolicy

Executes the specified policy. This can be useful for testing the design of your scaling policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETExecutePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETExecutePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETExecutePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExecutePolicyRequest();
    $request->action = GETExecutePolicyActionEnum::EXECUTE_POLICY;
    $request->autoScalingGroupName = 'iusto';
    $request->breachThreshold = 4536.97;
    $request->honorCooldown = false;
    $request->metricValue = 6770.82;
    $request->policyName = 'deleniti';
    $request->version = GETExecutePolicyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getExecutePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExitStandby

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETExitStandbyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETExitStandbyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETExitStandbyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExitStandbyRequest();
    $request->action = GETExitStandbyActionEnum::EXIT_STANDBY;
    $request->autoScalingGroupName = 'id';
    $request->instanceIds = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->version = GETExitStandbyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getExitStandby($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETPredictiveScalingForecast

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPredictiveScalingForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPredictiveScalingForecastActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPredictiveScalingForecastVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETPredictiveScalingForecastRequest();
    $request->action = GETGETPredictiveScalingForecastActionEnum::GET_PREDICTIVE_SCALING_FORECAST;
    $request->autoScalingGroupName = 'minima';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T21:59:23.045Z');
    $request->policyName = 'similique';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T11:34:48.736Z');
    $request->version = GETGETPredictiveScalingForecastVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getGETPredictiveScalingForecast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutLifecycleHook

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutLifecycleHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutLifecycleHookActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutLifecycleHookVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutLifecycleHookRequest();
    $request->action = GETPutLifecycleHookActionEnum::PUT_LIFECYCLE_HOOK;
    $request->autoScalingGroupName = 'a';
    $request->defaultResult = 'esse';
    $request->heartbeatTimeout = 687488;
    $request->lifecycleHookName = 'iusto';
    $request->lifecycleTransition = 'ipsum';
    $request->notificationMetadata = 'quisquam';
    $request->notificationTargetARN = 'tenetur';
    $request->roleARN = 'amet';
    $request->version = GETPutLifecycleHookVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getPutLifecycleHook($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutNotificationConfiguration

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutNotificationConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutNotificationConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutNotificationConfigurationRequest();
    $request->action = GETPutNotificationConfigurationActionEnum::PUT_NOTIFICATION_CONFIGURATION;
    $request->autoScalingGroupName = 'nihil';
    $request->notificationTypes = [
        'expedita',
    ];
    $request->topicARN = 'neque';
    $request->version = GETPutNotificationConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getPutNotificationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutScheduledUpdateGroupAction

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutScheduledUpdateGroupActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutScheduledUpdateGroupActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutScheduledUpdateGroupActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutScheduledUpdateGroupActionRequest();
    $request->action = GETPutScheduledUpdateGroupActionActionEnum::PUT_SCHEDULED_UPDATE_GROUP_ACTION;
    $request->autoScalingGroupName = 'incidunt';
    $request->desiredCapacity = 186458;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-21T11:11:37.334Z');
    $request->maxSize = 863856;
    $request->minSize = 747080;
    $request->recurrence = 'dicta';
    $request->scheduledActionName = 'laborum';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T20:49:16.541Z');
    $request->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T03:47:52.981Z');
    $request->timeZone = 'distinctio';
    $request->version = GETPutScheduledUpdateGroupActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->getPutScheduledUpdateGroupAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutWarmPool

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutWarmPoolInstanceReusePolicy;
use \OpenAPI\OpenAPI\Models\Operations\GETPutWarmPoolPoolStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutWarmPoolRequest();
    $request->action = GETPutWarmPoolActionEnum::PUT_WARM_POOL;
    $request->autoScalingGroupName = 'fugit';
    $request->instanceReusePolicy = new GETPutWarmPoolInstanceReusePolicy();
    $request->instanceReusePolicy->reuseOnScaleIn = false;
    $request->maxGroupPreparedCapacity = 164959;
    $request->minSize = 488056;
    $request->poolState = GETPutWarmPoolPoolStateEnum::STOPPED;
    $request->version = GETPutWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getPutWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecordLifecycleActionHeartbeat

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordLifecycleActionHeartbeatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordLifecycleActionHeartbeatActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordLifecycleActionHeartbeatVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRecordLifecycleActionHeartbeatRequest();
    $request->action = GETRecordLifecycleActionHeartbeatActionEnum::RECORD_LIFECYCLE_ACTION_HEARTBEAT;
    $request->autoScalingGroupName = 'et';
    $request->instanceId = 'saepe';
    $request->lifecycleActionToken = 'ipsum';
    $request->lifecycleHookName = 'veritatis';
    $request->version = GETRecordLifecycleActionHeartbeatVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getRecordLifecycleActionHeartbeat($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResumeProcesses

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeProcessesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeProcessesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeProcessesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETResumeProcessesRequest();
    $request->action = GETResumeProcessesActionEnum::RESUME_PROCESSES;
    $request->autoScalingGroupName = 'dolore';
    $request->scalingProcesses = [
        'adipisci',
        'dolorum',
    ];
    $request->version = GETResumeProcessesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getResumeProcesses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRollbackInstanceRefresh

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackInstanceRefreshRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackInstanceRefreshActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackInstanceRefreshVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRollbackInstanceRefreshRequest();
    $request->action = GETRollbackInstanceRefreshActionEnum::ROLLBACK_INSTANCE_REFRESH;
    $request->autoScalingGroupName = 'repellendus';
    $request->version = GETRollbackInstanceRefreshVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getRollbackInstanceRefresh($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetDesiredCapacity

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDesiredCapacityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDesiredCapacityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDesiredCapacityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetDesiredCapacityRequest();
    $request->action = GETSetDesiredCapacityActionEnum::SET_DESIRED_CAPACITY;
    $request->autoScalingGroupName = 'laudantium';
    $request->desiredCapacity = 485628;
    $request->honorCooldown = false;
    $request->version = GETSetDesiredCapacityVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getSetDesiredCapacity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetInstanceHealth

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetInstanceHealthRequest();
    $request->action = GETSetInstanceHealthActionEnum::SET_INSTANCE_HEALTH;
    $request->healthStatus = 'delectus';
    $request->instanceId = 'voluptate';
    $request->shouldRespectGracePeriod = false;
    $request->version = GETSetInstanceHealthVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getSetInstanceHealth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetInstanceProtection

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceProtectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetInstanceProtectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetInstanceProtectionRequest();
    $request->action = GETSetInstanceProtectionActionEnum::SET_INSTANCE_PROTECTION;
    $request->autoScalingGroupName = 'odio';
    $request->instanceIds = [
        'facilis',
        'vero',
        'ducimus',
    ];
    $request->protectedFromScaleIn = false;
    $request->version = GETSetInstanceProtectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->getSetInstanceProtection($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuspendProcesses

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSuspendProcessesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSuspendProcessesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSuspendProcessesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSuspendProcessesRequest();
    $request->action = GETSuspendProcessesActionEnum::SUSPEND_PROCESSES;
    $request->autoScalingGroupName = 'voluptatibus';
    $request->scalingProcesses = [
        'nulla',
        'fugit',
    ];
    $request->version = GETSuspendProcessesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getSuspendProcesses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminateInstanceInAutoScalingGroup

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateInstanceInAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateInstanceInAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateInstanceInAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTerminateInstanceInAutoScalingGroupRequest();
    $request->action = GETTerminateInstanceInAutoScalingGroupActionEnum::TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP;
    $request->instanceId = 'officia';
    $request->shouldDecrementDesiredCapacity = false;
    $request->version = GETTerminateInstanceInAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getTerminateInstanceInAutoScalingGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachInstances

<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachInstancesRequest();
    $request->action = POSTAttachInstancesActionEnum::ATTACH_INSTANCES;
    $request->requestBody = 'ratione';
    $request->version = POSTAttachInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->postAttachInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachLoadBalancerTargetGroupsRequest();
    $request->action = POSTAttachLoadBalancerTargetGroupsActionEnum::ATTACH_LOAD_BALANCER_TARGET_GROUPS;
    $request->requestBody = 'nulla';
    $request->version = POSTAttachLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postAttachLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachLoadBalancers

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachLoadBalancersRequest();
    $request->action = POSTAttachLoadBalancersActionEnum::ATTACH_LOAD_BALANCERS;
    $request->requestBody = 'impedit';
    $request->version = POSTAttachLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->postAttachLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachTrafficSources

<p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachTrafficSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachTrafficSourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachTrafficSourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachTrafficSourcesRequest();
    $request->action = POSTAttachTrafficSourcesActionEnum::ATTACH_TRAFFIC_SOURCES;
    $request->requestBody = 'consectetur';
    $request->version = POSTAttachTrafficSourcesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postAttachTrafficSources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchDeleteScheduledAction

Deletes one or more scheduled actions for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchDeleteScheduledActionRequest();
    $request->action = POSTBatchDeleteScheduledActionActionEnum::BATCH_DELETE_SCHEDULED_ACTION;
    $request->requestBody = 'aut';
    $request->version = POSTBatchDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postBatchDeleteScheduledAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchPutScheduledUpdateGroupAction

Creates or updates one or more scheduled scaling actions for an Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutScheduledUpdateGroupActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutScheduledUpdateGroupActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutScheduledUpdateGroupActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchPutScheduledUpdateGroupActionRequest();
    $request->action = POSTBatchPutScheduledUpdateGroupActionActionEnum::BATCH_PUT_SCHEDULED_UPDATE_GROUP_ACTION;
    $request->requestBody = 'et';
    $request->version = POSTBatchPutScheduledUpdateGroupActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postBatchPutScheduledUpdateGroupAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCancelInstanceRefresh

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelInstanceRefreshRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelInstanceRefreshActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelInstanceRefreshVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCancelInstanceRefreshRequest();
    $request->action = POSTCancelInstanceRefreshActionEnum::CANCEL_INSTANCE_REFRESH;
    $request->requestBody = 'quas';
    $request->version = POSTCancelInstanceRefreshVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postCancelInstanceRefresh($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompleteLifecycleAction

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteLifecycleActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteLifecycleActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteLifecycleActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCompleteLifecycleActionRequest();
    $request->action = POSTCompleteLifecycleActionActionEnum::COMPLETE_LIFECYCLE_ACTION;
    $request->requestBody = 'explicabo';
    $request->version = POSTCompleteLifecycleActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postCompleteLifecycleAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAutoScalingGroup

<p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateAutoScalingGroupRequest();
    $request->action = POSTCreateAutoScalingGroupActionEnum::CREATE_AUTO_SCALING_GROUP;
    $request->requestBody = 'esse';
    $request->version = POSTCreateAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postCreateAutoScalingGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLaunchConfiguration

<p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLaunchConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLaunchConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLaunchConfigurationRequest();
    $request->action = POSTCreateLaunchConfigurationActionEnum::CREATE_LAUNCH_CONFIGURATION;
    $request->requestBody = 'suscipit';
    $request->version = POSTCreateLaunchConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postCreateLaunchConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateOrUpdateTags

<p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOrUpdateTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOrUpdateTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOrUpdateTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateOrUpdateTagsRequest();
    $request->action = POSTCreateOrUpdateTagsActionEnum::CREATE_OR_UPDATE_TAGS;
    $request->requestBody = 'quidem';
    $request->version = POSTCreateOrUpdateTagsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->postCreateOrUpdateTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAutoScalingGroup

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAutoScalingGroupRequest();
    $request->action = POSTDeleteAutoScalingGroupActionEnum::DELETE_AUTO_SCALING_GROUP;
    $request->requestBody = 'voluptas';
    $request->version = POSTDeleteAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postDeleteAutoScalingGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLaunchConfiguration

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLaunchConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLaunchConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLaunchConfigurationRequest();
    $request->action = POSTDeleteLaunchConfigurationActionEnum::DELETE_LAUNCH_CONFIGURATION;
    $request->requestBody = 'sequi';
    $request->version = POSTDeleteLaunchConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postDeleteLaunchConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLifecycleHook

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLifecycleHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLifecycleHookActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLifecycleHookVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLifecycleHookRequest();
    $request->action = POSTDeleteLifecycleHookActionEnum::DELETE_LIFECYCLE_HOOK;
    $request->requestBody = 'inventore';
    $request->version = POSTDeleteLifecycleHookVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postDeleteLifecycleHook($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteNotificationConfiguration

Deletes the specified notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteNotificationConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteNotificationConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteNotificationConfigurationRequest();
    $request->action = POSTDeleteNotificationConfigurationActionEnum::DELETE_NOTIFICATION_CONFIGURATION;
    $request->requestBody = 'sapiente';
    $request->version = POSTDeleteNotificationConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postDeleteNotificationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeletePolicy

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeletePolicyRequest();
    $request->action = POSTDeletePolicyActionEnum::DELETE_POLICY;
    $request->requestBody = 'praesentium';
    $request->version = POSTDeletePolicyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->postDeletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteScheduledAction

Deletes the specified scheduled action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteScheduledActionRequest();
    $request->action = POSTDeleteScheduledActionActionEnum::DELETE_SCHEDULED_ACTION;
    $request->requestBody = 'explicabo';
    $request->version = POSTDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postDeleteScheduledAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteTags

Deletes the specified tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteTagsRequest();
    $request->action = POSTDeleteTagsActionEnum::DELETE_TAGS;
    $request->requestBody = 'saepe';
    $request->version = POSTDeleteTagsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->postDeleteTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteWarmPool

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteWarmPoolRequest();
    $request->action = POSTDeleteWarmPoolActionEnum::DELETE_WARM_POOL;
    $request->requestBody = 'esse';
    $request->version = POSTDeleteWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDeleteWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountLimits

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountLimitsRequest();
    $request->action = POSTDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->version = POSTDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAdjustmentTypes

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAdjustmentTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAdjustmentTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAdjustmentTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAdjustmentTypesRequest();
    $request->action = POSTDescribeAdjustmentTypesActionEnum::DESCRIBE_ADJUSTMENT_TYPES;
    $request->version = POSTDescribeAdjustmentTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->postDescribeAdjustmentTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAutoScalingGroups

<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAutoScalingGroupsRequest();
    $request->action = POSTDescribeAutoScalingGroupsActionEnum::DESCRIBE_AUTO_SCALING_GROUPS;
    $request->maxRecords = 'minus';
    $request->nextToken = 'quaerat';
    $request->requestBody = 'sapiente';
    $request->version = POSTDescribeAutoScalingGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postDescribeAutoScalingGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAutoScalingInstances

Gets information about the Auto Scaling instances in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAutoScalingInstancesRequest();
    $request->action = POSTDescribeAutoScalingInstancesActionEnum::DESCRIBE_AUTO_SCALING_INSTANCES;
    $request->maxRecords = 'esse';
    $request->nextToken = 'quasi';
    $request->requestBody = 'a';
    $request->version = POSTDescribeAutoScalingInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->postDescribeAutoScalingInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAutoScalingNotificationTypes

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingNotificationTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingNotificationTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAutoScalingNotificationTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAutoScalingNotificationTypesRequest();
    $request->action = POSTDescribeAutoScalingNotificationTypesActionEnum::DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES;
    $request->version = POSTDescribeAutoScalingNotificationTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postDescribeAutoScalingNotificationTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeInstanceRefreshes

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceRefreshesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceRefreshesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceRefreshesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeInstanceRefreshesRequest();
    $request->action = POSTDescribeInstanceRefreshesActionEnum::DESCRIBE_INSTANCE_REFRESHES;
    $request->requestBody = 'tenetur';
    $request->version = POSTDescribeInstanceRefreshesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postDescribeInstanceRefreshes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLaunchConfigurations

Gets information about the launch configurations in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLaunchConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLaunchConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLaunchConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLaunchConfigurationsRequest();
    $request->action = POSTDescribeLaunchConfigurationsActionEnum::DESCRIBE_LAUNCH_CONFIGURATIONS;
    $request->maxRecords = 'soluta';
    $request->nextToken = 'accusantium';
    $request->requestBody = 'aliquam';
    $request->version = POSTDescribeLaunchConfigurationsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postDescribeLaunchConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLifecycleHookTypes

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHookTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHookTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHookTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLifecycleHookTypesRequest();
    $request->action = POSTDescribeLifecycleHookTypesActionEnum::DESCRIBE_LIFECYCLE_HOOK_TYPES;
    $request->version = POSTDescribeLifecycleHookTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postDescribeLifecycleHookTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLifecycleHooks

Gets information about the lifecycle hooks for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHooksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLifecycleHooksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLifecycleHooksRequest();
    $request->action = POSTDescribeLifecycleHooksActionEnum::DESCRIBE_LIFECYCLE_HOOKS;
    $request->requestBody = 'architecto';
    $request->version = POSTDescribeLifecycleHooksVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postDescribeLifecycleHooks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancerTargetGroupsRequest();
    $request->action = POSTDescribeLoadBalancerTargetGroupsActionEnum::DESCRIBE_LOAD_BALANCER_TARGET_GROUPS;
    $request->requestBody = 'minima';
    $request->version = POSTDescribeLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postDescribeLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancers

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancersRequest();
    $request->action = POSTDescribeLoadBalancersActionEnum::DESCRIBE_LOAD_BALANCERS;
    $request->requestBody = 'aut';
    $request->version = POSTDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeMetricCollectionTypes

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeMetricCollectionTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeMetricCollectionTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeMetricCollectionTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeMetricCollectionTypesRequest();
    $request->action = POSTDescribeMetricCollectionTypesActionEnum::DESCRIBE_METRIC_COLLECTION_TYPES;
    $request->version = POSTDescribeMetricCollectionTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postDescribeMetricCollectionTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeNotificationConfigurations

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNotificationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNotificationConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNotificationConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeNotificationConfigurationsRequest();
    $request->action = POSTDescribeNotificationConfigurationsActionEnum::DESCRIBE_NOTIFICATION_CONFIGURATIONS;
    $request->maxRecords = 'dignissimos';
    $request->nextToken = 'dicta';
    $request->requestBody = 'maiores';
    $request->version = POSTDescribeNotificationConfigurationsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postDescribeNotificationConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePolicies

Gets information about the scaling policies in the account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribePoliciesRequest();
    $request->action = POSTDescribePoliciesActionEnum::DESCRIBE_POLICIES;
    $request->maxRecords = 'quaerat';
    $request->nextToken = 'consequuntur';
    $request->requestBody = 'repellendus';
    $request->version = POSTDescribePoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postDescribePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeScalingActivities

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingActivitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingActivitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeScalingActivitiesRequest();
    $request->action = POSTDescribeScalingActivitiesActionEnum::DESCRIBE_SCALING_ACTIVITIES;
    $request->maxRecords = 'quaerat';
    $request->nextToken = 'porro';
    $request->requestBody = 'quod';
    $request->version = POSTDescribeScalingActivitiesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->postDescribeScalingActivities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeScalingProcessTypes

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingProcessTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingProcessTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingProcessTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeScalingProcessTypesRequest();
    $request->action = POSTDescribeScalingProcessTypesActionEnum::DESCRIBE_SCALING_PROCESS_TYPES;
    $request->version = POSTDescribeScalingProcessTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postDescribeScalingProcessTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeScheduledActions

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeScheduledActionsRequest();
    $request->action = POSTDescribeScheduledActionsActionEnum::DESCRIBE_SCHEDULED_ACTIONS;
    $request->maxRecords = 'quos';
    $request->nextToken = 'vel';
    $request->requestBody = 'labore';
    $request->version = POSTDescribeScheduledActionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postDescribeScheduledActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTags

<p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTagsRequest();
    $request->action = POSTDescribeTagsActionEnum::DESCRIBE_TAGS;
    $request->maxRecords = 'assumenda';
    $request->nextToken = 'nemo';
    $request->requestBody = 'recusandae';
    $request->version = POSTDescribeTagsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTerminationPolicyTypes

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTerminationPolicyTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTerminationPolicyTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTerminationPolicyTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTerminationPolicyTypesRequest();
    $request->action = POSTDescribeTerminationPolicyTypesActionEnum::DESCRIBE_TERMINATION_POLICY_TYPES;
    $request->version = POSTDescribeTerminationPolicyTypesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postDescribeTerminationPolicyTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTrafficSources

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTrafficSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTrafficSourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTrafficSourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTrafficSourcesRequest();
    $request->action = POSTDescribeTrafficSourcesActionEnum::DESCRIBE_TRAFFIC_SOURCES;
    $request->maxRecords = 'necessitatibus';
    $request->nextToken = 'dolore';
    $request->requestBody = 'sunt';
    $request->version = POSTDescribeTrafficSourcesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->postDescribeTrafficSources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeWarmPool

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeWarmPoolRequest();
    $request->action = POSTDescribeWarmPoolActionEnum::DESCRIBE_WARM_POOL;
    $request->requestBody = 'debitis';
    $request->version = POSTDescribeWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postDescribeWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachInstances

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachInstancesRequest();
    $request->action = POSTDetachInstancesActionEnum::DETACH_INSTANCES;
    $request->requestBody = 'vitae';
    $request->version = POSTDetachInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDetachInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachLoadBalancerTargetGroups

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachLoadBalancerTargetGroupsRequest();
    $request->action = POSTDetachLoadBalancerTargetGroupsActionEnum::DETACH_LOAD_BALANCER_TARGET_GROUPS;
    $request->requestBody = 'minima';
    $request->version = POSTDetachLoadBalancerTargetGroupsVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postDetachLoadBalancerTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachLoadBalancers

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachLoadBalancersRequest();
    $request->action = POSTDetachLoadBalancersActionEnum::DETACH_LOAD_BALANCERS;
    $request->requestBody = 'dolore';
    $request->version = POSTDetachLoadBalancersVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDetachLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachTrafficSources

<p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a taffic, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachTrafficSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachTrafficSourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachTrafficSourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachTrafficSourcesRequest();
    $request->action = POSTDetachTrafficSourcesActionEnum::DETACH_TRAFFIC_SOURCES;
    $request->requestBody = 'quas';
    $request->version = POSTDetachTrafficSourcesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postDetachTrafficSources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableMetricsCollection

Disables group metrics collection for the specified Auto Scaling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableMetricsCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableMetricsCollectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableMetricsCollectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableMetricsCollectionRequest();
    $request->action = POSTDisableMetricsCollectionActionEnum::DISABLE_METRICS_COLLECTION;
    $request->requestBody = 'exercitationem';
    $request->version = POSTDisableMetricsCollectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->postDisableMetricsCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableMetricsCollection

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMetricsCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMetricsCollectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMetricsCollectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableMetricsCollectionRequest();
    $request->action = POSTEnableMetricsCollectionActionEnum::ENABLE_METRICS_COLLECTION;
    $request->requestBody = 'facilis';
    $request->version = POSTEnableMetricsCollectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postEnableMetricsCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnterStandby

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnterStandbyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnterStandbyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnterStandbyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnterStandbyRequest();
    $request->action = POSTEnterStandbyActionEnum::ENTER_STANDBY;
    $request->requestBody = 'in';
    $request->version = POSTEnterStandbyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postEnterStandby($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExecutePolicy

Executes the specified policy. This can be useful for testing the design of your scaling policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecutePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecutePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecutePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTExecutePolicyRequest();
    $request->action = POSTExecutePolicyActionEnum::EXECUTE_POLICY;
    $request->requestBody = 'sapiente';
    $request->version = POSTExecutePolicyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'illo';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->postExecutePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExitStandby

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTExitStandbyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTExitStandbyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTExitStandbyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTExitStandbyRequest();
    $request->action = POSTExitStandbyActionEnum::EXIT_STANDBY;
    $request->requestBody = 'sed';
    $request->version = POSTExitStandbyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postExitStandby($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetPredictiveScalingForecast

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPredictiveScalingForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPredictiveScalingForecastActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPredictiveScalingForecastVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetPredictiveScalingForecastRequest();
    $request->action = POSTGetPredictiveScalingForecastActionEnum::GET_PREDICTIVE_SCALING_FORECAST;
    $request->requestBody = 'voluptatibus';
    $request->version = POSTGetPredictiveScalingForecastVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postGetPredictiveScalingForecast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutLifecycleHook

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutLifecycleHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutLifecycleHookActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutLifecycleHookVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutLifecycleHookRequest();
    $request->action = POSTPutLifecycleHookActionEnum::PUT_LIFECYCLE_HOOK;
    $request->requestBody = 'officiis';
    $request->version = POSTPutLifecycleHookVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postPutLifecycleHook($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutNotificationConfiguration

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutNotificationConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutNotificationConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutNotificationConfigurationRequest();
    $request->action = POSTPutNotificationConfigurationActionEnum::PUT_NOTIFICATION_CONFIGURATION;
    $request->requestBody = 'sit';
    $request->version = POSTPutNotificationConfigurationVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postPutNotificationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutScalingPolicy

<p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScalingPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScalingPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutScalingPolicyRequest();
    $request->action = POSTPutScalingPolicyActionEnum::PUT_SCALING_POLICY;
    $request->requestBody = 'magni';
    $request->version = POSTPutScalingPolicyVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postPutScalingPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutScheduledUpdateGroupAction

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScheduledUpdateGroupActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScheduledUpdateGroupActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutScheduledUpdateGroupActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutScheduledUpdateGroupActionRequest();
    $request->action = POSTPutScheduledUpdateGroupActionActionEnum::PUT_SCHEDULED_UPDATE_GROUP_ACTION;
    $request->requestBody = 'laudantium';
    $request->version = POSTPutScheduledUpdateGroupActionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->postPutScheduledUpdateGroupAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutWarmPool

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutWarmPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutWarmPoolActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutWarmPoolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutWarmPoolRequest();
    $request->action = POSTPutWarmPoolActionEnum::PUT_WARM_POOL;
    $request->requestBody = 'hic';
    $request->version = POSTPutWarmPoolVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postPutWarmPool($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRecordLifecycleActionHeartbeat

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordLifecycleActionHeartbeatRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordLifecycleActionHeartbeatActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordLifecycleActionHeartbeatVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRecordLifecycleActionHeartbeatRequest();
    $request->action = POSTRecordLifecycleActionHeartbeatActionEnum::RECORD_LIFECYCLE_ACTION_HEARTBEAT;
    $request->requestBody = 'corrupti';
    $request->version = POSTRecordLifecycleActionHeartbeatVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postRecordLifecycleActionHeartbeat($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResumeProcesses

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeProcessesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeProcessesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeProcessesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResumeProcessesRequest();
    $request->action = POSTResumeProcessesActionEnum::RESUME_PROCESSES;
    $request->requestBody = 'culpa';
    $request->version = POSTResumeProcessesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->postResumeProcesses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRollbackInstanceRefresh

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackInstanceRefreshRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackInstanceRefreshActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackInstanceRefreshVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRollbackInstanceRefreshRequest();
    $request->action = POSTRollbackInstanceRefreshActionEnum::ROLLBACK_INSTANCE_REFRESH;
    $request->requestBody = 'quas';
    $request->version = POSTRollbackInstanceRefreshVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->postRollbackInstanceRefresh($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetDesiredCapacity

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDesiredCapacityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDesiredCapacityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDesiredCapacityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetDesiredCapacityRequest();
    $request->action = POSTSetDesiredCapacityActionEnum::SET_DESIRED_CAPACITY;
    $request->requestBody = 'vel';
    $request->version = POSTSetDesiredCapacityVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->postSetDesiredCapacity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetInstanceHealth

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetInstanceHealthRequest();
    $request->action = POSTSetInstanceHealthActionEnum::SET_INSTANCE_HEALTH;
    $request->requestBody = 'harum';
    $request->version = POSTSetInstanceHealthVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postSetInstanceHealth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetInstanceProtection

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceProtectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetInstanceProtectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetInstanceProtectionRequest();
    $request->action = POSTSetInstanceProtectionActionEnum::SET_INSTANCE_PROTECTION;
    $request->requestBody = 'nam';
    $request->version = POSTSetInstanceProtectionVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'unde';

    $response = $sdk->sdk->postSetInstanceProtection($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartInstanceRefresh

<p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartInstanceRefreshRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartInstanceRefreshActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartInstanceRefreshVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartInstanceRefreshRequest();
    $request->action = POSTStartInstanceRefreshActionEnum::START_INSTANCE_REFRESH;
    $request->requestBody = 'reiciendis';
    $request->version = POSTStartInstanceRefreshVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postStartInstanceRefresh($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSuspendProcesses

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSuspendProcessesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSuspendProcessesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSuspendProcessesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSuspendProcessesRequest();
    $request->action = POSTSuspendProcessesActionEnum::SUSPEND_PROCESSES;
    $request->requestBody = 'reprehenderit';
    $request->version = POSTSuspendProcessesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->postSuspendProcesses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTerminateInstanceInAutoScalingGroup

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateInstanceInAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateInstanceInAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateInstanceInAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTerminateInstanceInAutoScalingGroupRequest();
    $request->action = POSTTerminateInstanceInAutoScalingGroupActionEnum::TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP;
    $request->requestBody = 'repudiandae';
    $request->version = POSTTerminateInstanceInAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postTerminateInstanceInAutoScalingGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAutoScalingGroup

<p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAutoScalingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAutoScalingGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAutoScalingGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAutoScalingGroupRequest();
    $request->action = POSTUpdateAutoScalingGroupActionEnum::UPDATE_AUTO_SCALING_GROUP;
    $request->requestBody = 'maxime';
    $request->version = POSTUpdateAutoScalingGroupVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->postUpdateAutoScalingGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
