# SDK

## Overview

<fullname>Config</fullname> <p>Config provides a way to keep track of the configurations of all the Amazon Web Services resources associated with your Amazon Web Services account. You can use Config to get the current and historical configurations of each Amazon Web Services resource and also to get information about the relationship between the resources. An Amazon Web Services resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p> <p>You can access and manage Config through the Amazon Web Services Management Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config API, or the Amazon Web Services SDKs for Config. This reference guide contains documentation for the Config API and the Amazon Web Services CLI commands that you can use to manage Config. The Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. For detailed information about Config features and their associated actions or commands, as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/config/>
### Available Operations

* [batchGetAggregateResourceConfig](#batchgetaggregateresourceconfig) - <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
* [batchGetResourceConfig](#batchgetresourceconfig) - <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
* [deleteAggregationAuthorization](#deleteaggregationauthorization) - Deletes the authorization granted to the specified configuration aggregator account in a specified region.
* [deleteConfigRule](#deleteconfigrule) - <p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
* [deleteConfigurationAggregator](#deleteconfigurationaggregator) - Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
* [deleteConfigurationRecorder](#deleteconfigurationrecorder) - <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>
* [deleteConformancePack](#deleteconformancepack) - <p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
* [deleteDeliveryChannel](#deletedeliverychannel) - <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
* [deleteEvaluationResults](#deleteevaluationresults) - Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.
* [deleteOrganizationConfigRule](#deleteorganizationconfigrule) - <p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
* [deleteOrganizationConformancePack](#deleteorganizationconformancepack) - <p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
* [deletePendingAggregationRequest](#deletependingaggregationrequest) - Deletes pending authorization requests for a specified aggregator account in a specified region.
* [deleteRemediationConfiguration](#deleteremediationconfiguration) - Deletes the remediation configuration.
* [deleteRemediationExceptions](#deleteremediationexceptions) - <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>
* [deleteResourceConfig](#deleteresourceconfig) - Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 
* [deleteRetentionConfiguration](#deleteretentionconfiguration) - Deletes the retention configuration.
* [deleteStoredQuery](#deletestoredquery) - Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.
* [deliverConfigSnapshot](#deliverconfigsnapshot) - <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
* [describeAggregateComplianceByConfigRules](#describeaggregatecompliancebyconfigrules) - <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [describeAggregateComplianceByConformancePacks](#describeaggregatecompliancebyconformancepacks) - <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [describeAggregationAuthorizations](#describeaggregationauthorizations) - Returns a list of authorizations granted to various aggregator accounts and regions.
* [describeComplianceByConfigRule](#describecompliancebyconfigrule) - <p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
* [describeComplianceByResource](#describecompliancebyresource) - <p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
* [describeConfigRuleEvaluationStatus](#describeconfigruleevaluationstatus) - Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.
* [describeConfigRules](#describeconfigrules) - Returns details about your Config rules.
* [describeConfigurationAggregatorSourcesStatus](#describeconfigurationaggregatorsourcesstatus) - Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 
* [describeConfigurationAggregators](#describeconfigurationaggregators) - Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 
* [describeConfigurationRecorderStatus](#describeconfigurationrecorderstatus) - <p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>
* [describeConfigurationRecorders](#describeconfigurationrecorders) - <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
* [describeConformancePackCompliance](#describeconformancepackcompliance) - <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
* [describeConformancePackStatus](#describeconformancepackstatus) - <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
* [describeConformancePacks](#describeconformancepacks) - Returns a list of one or more conformance packs.
* [describeDeliveryChannelStatus](#describedeliverychannelstatus) - <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
* [describeDeliveryChannels](#describedeliverychannels) - <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
* [describeOrganizationConfigRuleStatuses](#describeorganizationconfigrulestatuses) - <p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>
* [describeOrganizationConfigRules](#describeorganizationconfigrules) - <p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
* [describeOrganizationConformancePackStatuses](#describeorganizationconformancepackstatuses) - <p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>
* [describeOrganizationConformancePacks](#describeorganizationconformancepacks) - <p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
* [describePendingAggregationRequests](#describependingaggregationrequests) - Returns a list of all pending aggregation requests.
* [describeRemediationConfigurations](#describeremediationconfigurations) - Returns the details of one or more remediation configurations.
* [describeRemediationExceptions](#describeremediationexceptions) - <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
* [describeRemediationExecutionStatus](#describeremediationexecutionstatus) - Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.
* [describeRetentionConfigurations](#describeretentionconfigurations) - <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
* [getAggregateComplianceDetailsByConfigRule](#getaggregatecompliancedetailsbyconfigrule) - <p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [getAggregateConfigRuleComplianceSummary](#getaggregateconfigrulecompliancesummary) - <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
* [getAggregateConformancePackComplianceSummary](#getaggregateconformancepackcompliancesummary) - <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
* [getAggregateDiscoveredResourceCounts](#getaggregatediscoveredresourcecounts) - <p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
* [getAggregateResourceConfig](#getaggregateresourceconfig) - Returns configuration item that is aggregated for your specific resource in a specific source account and region.
* [getComplianceDetailsByConfigRule](#getcompliancedetailsbyconfigrule) - Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
* [getComplianceDetailsByResource](#getcompliancedetailsbyresource) - Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.
* [getComplianceSummaryByConfigRule](#getcompliancesummarybyconfigrule) - Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
* [getComplianceSummaryByResourceType](#getcompliancesummarybyresourcetype) - Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
* [getConformancePackComplianceDetails](#getconformancepackcompliancedetails) - Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.
* [getConformancePackComplianceSummary](#getconformancepackcompliancesummary) - Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
* [getCustomRulePolicy](#getcustomrulepolicy) - Returns the policy definition containing the logic for your Config Custom Policy rule.
* [getDiscoveredResourceCounts](#getdiscoveredresourcecounts) - <p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
* [getOrganizationConfigRuleDetailedStatus](#getorganizationconfigruledetailedstatus) - Returns detailed status for each member account within an organization for a given organization Config rule.
* [getOrganizationConformancePackDetailedStatus](#getorganizationconformancepackdetailedstatus) - Returns detailed status for each member account within an organization for a given organization conformance pack.
* [getOrganizationCustomRulePolicy](#getorganizationcustomrulepolicy) - Returns the policy definition containing the logic for your organization Config Custom Policy rule.
* [getResourceConfigHistory](#getresourceconfighistory) - <p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
* [getResourceEvaluationSummary](#getresourceevaluationsummary) - <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>
* [getStoredQuery](#getstoredquery) - Returns the details of a specific stored query.
* [listAggregateDiscoveredResources](#listaggregatediscoveredresources) - <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
* [listConformancePackComplianceScores](#listconformancepackcompliancescores) - <p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>
* [listDiscoveredResources](#listdiscoveredresources) - <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
* [listResourceEvaluations](#listresourceevaluations) - Returns a list of proactive resource evaluations.
* [listStoredQueries](#liststoredqueries) - Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 
* [listTagsForResource](#listtagsforresource) - List the tags for Config resource.
* [putAggregationAuthorization](#putaggregationauthorization) - <p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [putConfigRule](#putconfigrule) - <p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [putConfigurationAggregator](#putconfigurationaggregator) - <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [putConfigurationRecorder](#putconfigurationrecorder) - <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
* [putConformancePack](#putconformancepack) - <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>
* [putDeliveryChannel](#putdeliverychannel) - <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
* [putEvaluations](#putevaluations) - Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.
* [putExternalEvaluation](#putexternalevaluation) - Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.
* [putOrganizationConfigRule](#putorganizationconfigrule) - <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>
* [putOrganizationConformancePack](#putorganizationconformancepack) - <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>
* [putRemediationConfigurations](#putremediationconfigurations) - <p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>
* [putRemediationExceptions](#putremediationexceptions) - <p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>
* [putResourceConfig](#putresourceconfig) - <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>
* [putRetentionConfiguration](#putretentionconfiguration) - <p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
* [putStoredQuery](#putstoredquery) - <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [selectAggregateResourceConfig](#selectaggregateresourceconfig) - <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>
* [selectResourceConfig](#selectresourceconfig) - <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>
* [startConfigRulesEvaluation](#startconfigrulesevaluation) - <p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
* [startConfigurationRecorder](#startconfigurationrecorder) - <p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
* [startRemediationExecution](#startremediationexecution) - <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
* [startResourceEvaluation](#startresourceevaluation) - <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>
* [stopConfigurationRecorder](#stopconfigurationrecorder) - Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.
* [untagResource](#untagresource) - Deletes specified tags from a resource.

## batchGetAggregateResourceConfig

<p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigResponse;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregateResourceIdentifier;
import org.openapis.openapi.models.shared.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAggregateResourceConfigRequest req = new BatchGetAggregateResourceConfigRequest(                new BatchGetAggregateResourceConfigRequest("at",                 new org.openapis.openapi.models.shared.AggregateResourceIdentifier[]{{
                                                add(new AggregateResourceIdentifier("totam", ResourceTypeEnum.AWSEKS_IDENTITY_PROVIDER_CONFIG, "dolorum", "dicta") {{
                                                    resourceId = "maiores";
                                                    resourceName = "molestiae";
                                                    resourceType = ResourceTypeEnum.AWS_IO_T_TWIN_MAKER_WORKSPACE;
                                                    sourceAccountId = "quod";
                                                    sourceRegion = "esse";
                                                }}),
                                                add(new AggregateResourceIdentifier("hic", ResourceTypeEnum.AWS_LIGHTSAIL_BUCKET, "totam", "beatae") {{
                                                    resourceId = "nam";
                                                    resourceName = "officia";
                                                    resourceType = ResourceTypeEnum.AWS_SERVICE_DISCOVERY_SERVICE;
                                                    sourceAccountId = "fugit";
                                                    sourceRegion = "deleniti";
                                                }}),
                                                add(new AggregateResourceIdentifier("cum", ResourceTypeEnum.AWSDMS_EVENT_SUBSCRIPTION, "ipsum", "excepturi") {{
                                                    resourceId = "commodi";
                                                    resourceName = "molestiae";
                                                    resourceType = ResourceTypeEnum.AWSWA_FV2_RULE_GROUP;
                                                    sourceAccountId = "qui";
                                                    sourceRegion = "impedit";
                                                }}),
                                                add(new AggregateResourceIdentifier("iste", ResourceTypeEnum.AWSWAF_REGIONAL_RULE_GROUP, "natus", "laboriosam") {{
                                                    resourceId = "aspernatur";
                                                    resourceName = "perferendis";
                                                    resourceType = ResourceTypeEnum.AWS_SERVICE_CATALOG_CLOUD_FORMATION_PROVISIONED_PRODUCT;
                                                    sourceAccountId = "natus";
                                                    sourceRegion = "sed";
                                                }}),
                                            }});, BatchGetAggregateResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_BATCH_GET_AGGREGATE_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            BatchGetAggregateResourceConfigResponse res = sdk.sdk.batchGetAggregateResourceConfig(req);

            if (res.batchGetAggregateResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetResourceConfig

<p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetResourceConfigRequest;
import org.openapis.openapi.models.operations.BatchGetResourceConfigResponse;
import org.openapis.openapi.models.operations.BatchGetResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetResourceConfigRequest;
import org.openapis.openapi.models.shared.ResourceKey;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetResourceConfigRequest req = new BatchGetResourceConfigRequest(                new BatchGetResourceConfigRequest(                new org.openapis.openapi.models.shared.ResourceKey[]{{
                                                add(new ResourceKey("reiciendis", ResourceTypeEnum.AWSSES_RECEIPT_RULE_SET) {{
                                                    resourceId = "architecto";
                                                    resourceType = ResourceTypeEnum.AWS_EC2_NAT_GATEWAY;
                                                }}),
                                                add(new ResourceKey("dolores", ResourceTypeEnum.AWSWAF_WEB_ACL) {{
                                                    resourceId = "mollitia";
                                                    resourceType = ResourceTypeEnum.AWS_EVENTS_ARCHIVE;
                                                }}),
                                                add(new ResourceKey("nobis", ResourceTypeEnum.AWS_API_GATEWAY_V2_API) {{
                                                    resourceId = "corporis";
                                                    resourceType = ResourceTypeEnum.AWSRDS_EVENT_SUBSCRIPTION;
                                                }}),
                                            }});, BatchGetResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_BATCH_GET_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            BatchGetResourceConfigResponse res = sdk.sdk.batchGetResourceConfig(req);

            if (res.batchGetResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAggregationAuthorization

Deletes the authorization granted to the specified configuration aggregator account in a specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAggregationAuthorizationRequest;
import org.openapis.openapi.models.operations.DeleteAggregationAuthorizationResponse;
import org.openapis.openapi.models.operations.DeleteAggregationAuthorizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAggregationAuthorizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAggregationAuthorizationRequest req = new DeleteAggregationAuthorizationRequest(                new DeleteAggregationAuthorizationRequest("sapiente", "architecto");, DeleteAggregationAuthorizationXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_AGGREGATION_AUTHORIZATION) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteAggregationAuthorizationResponse res = sdk.sdk.deleteAggregationAuthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigRule

<p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigRuleRequest;
import org.openapis.openapi.models.operations.DeleteConfigRuleResponse;
import org.openapis.openapi.models.operations.DeleteConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigRuleRequest req = new DeleteConfigRuleRequest(                new DeleteConfigRuleRequest("commodi");, DeleteConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_CONFIG_RULE) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            DeleteConfigRuleResponse res = sdk.sdk.deleteConfigRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationAggregator

Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationAggregatorRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationAggregatorResponse;
import org.openapis.openapi.models.operations.DeleteConfigurationAggregatorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationAggregatorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationAggregatorRequest req = new DeleteConfigurationAggregatorRequest(                new DeleteConfigurationAggregatorRequest("animi");, DeleteConfigurationAggregatorXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_CONFIGURATION_AGGREGATOR) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteConfigurationAggregatorResponse res = sdk.sdk.deleteConfigurationAggregator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationRecorder

<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationRecorderRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationRecorderResponse;
import org.openapis.openapi.models.operations.DeleteConfigurationRecorderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationRecorderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigurationRecorderRequest req = new DeleteConfigurationRecorderRequest(                new DeleteConfigurationRecorderRequest("aut");, DeleteConfigurationRecorderXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_CONFIGURATION_RECORDER) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteConfigurationRecorderResponse res = sdk.sdk.deleteConfigurationRecorder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConformancePack

<p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConformancePackRequest;
import org.openapis.openapi.models.operations.DeleteConformancePackResponse;
import org.openapis.openapi.models.operations.DeleteConformancePackXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConformancePackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConformancePackRequest req = new DeleteConformancePackRequest(                new DeleteConformancePackRequest("nihil");, DeleteConformancePackXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_CONFORMANCE_PACK) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteConformancePackResponse res = sdk.sdk.deleteConformancePack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeliveryChannel

<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeliveryChannelRequest;
import org.openapis.openapi.models.operations.DeleteDeliveryChannelResponse;
import org.openapis.openapi.models.operations.DeleteDeliveryChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDeliveryChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeliveryChannelRequest req = new DeleteDeliveryChannelRequest(                new DeleteDeliveryChannelRequest("reprehenderit");, DeleteDeliveryChannelXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_DELIVERY_CHANNEL) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteDeliveryChannelResponse res = sdk.sdk.deleteDeliveryChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEvaluationResults

Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEvaluationResultsRequest;
import org.openapis.openapi.models.operations.DeleteEvaluationResultsResponse;
import org.openapis.openapi.models.operations.DeleteEvaluationResultsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEvaluationResultsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEvaluationResultsRequest req = new DeleteEvaluationResultsRequest(                new DeleteEvaluationResultsRequest("enim");, DeleteEvaluationResultsXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_EVALUATION_RESULTS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            DeleteEvaluationResultsResponse res = sdk.sdk.deleteEvaluationResults(req);

            if (res.deleteEvaluationResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationConfigRule

<p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigRuleRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigRuleResponse;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOrganizationConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationConfigRuleRequest req = new DeleteOrganizationConfigRuleRequest(                new DeleteOrganizationConfigRuleRequest("pariatur");, DeleteOrganizationConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_ORGANIZATION_CONFIG_RULE) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteOrganizationConfigRuleResponse res = sdk.sdk.deleteOrganizationConfigRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationConformancePack

<p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationConformancePackRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationConformancePackResponse;
import org.openapis.openapi.models.operations.DeleteOrganizationConformancePackXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOrganizationConformancePackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationConformancePackRequest req = new DeleteOrganizationConformancePackRequest(                new DeleteOrganizationConformancePackRequest("itaque");, DeleteOrganizationConformancePackXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_ORGANIZATION_CONFORMANCE_PACK) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeleteOrganizationConformancePackResponse res = sdk.sdk.deleteOrganizationConformancePack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePendingAggregationRequest

Deletes pending authorization requests for a specified aggregator account in a specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePendingAggregationRequestRequest;
import org.openapis.openapi.models.operations.DeletePendingAggregationRequestResponse;
import org.openapis.openapi.models.operations.DeletePendingAggregationRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePendingAggregationRequestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePendingAggregationRequestRequest req = new DeletePendingAggregationRequestRequest(                new DeletePendingAggregationRequestRequest("quibusdam", "labore");, DeletePendingAggregationRequestXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_PENDING_AGGREGATION_REQUEST) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            DeletePendingAggregationRequestResponse res = sdk.sdk.deletePendingAggregationRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRemediationConfiguration

Deletes the remediation configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRemediationConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteRemediationConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteRemediationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRemediationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRemediationConfigurationRequest req = new DeleteRemediationConfigurationRequest(                new DeleteRemediationConfigurationRequest("ipsam") {{
                                resourceType = "alias";
                            }};, DeleteRemediationConfigurationXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_REMEDIATION_CONFIGURATION) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteRemediationConfigurationResponse res = sdk.sdk.deleteRemediationConfiguration(req);

            if (res.deleteRemediationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRemediationExceptions

<p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRemediationExceptionsRequest;
import org.openapis.openapi.models.operations.DeleteRemediationExceptionsResponse;
import org.openapis.openapi.models.operations.DeleteRemediationExceptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRemediationExceptionsRequest;
import org.openapis.openapi.models.shared.RemediationExceptionResourceKey;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRemediationExceptionsRequest req = new DeleteRemediationExceptionsRequest(                new DeleteRemediationExceptionsRequest("eum",                 new org.openapis.openapi.models.shared.RemediationExceptionResourceKey[]{{
                                                add(new RemediationExceptionResourceKey() {{
                                                    resourceId = "eligendi";
                                                    resourceType = "sint";
                                                }}),
                                            }});, DeleteRemediationExceptionsXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_REMEDIATION_EXCEPTIONS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteRemediationExceptionsResponse res = sdk.sdk.deleteRemediationExceptions(req);

            if (res.deleteRemediationExceptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceConfig

Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceConfigRequest;
import org.openapis.openapi.models.operations.DeleteResourceConfigResponse;
import org.openapis.openapi.models.operations.DeleteResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceConfigRequest req = new DeleteResourceConfigRequest(                new DeleteResourceConfigRequest("dolorum", "in");, DeleteResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            DeleteResourceConfigResponse res = sdk.sdk.deleteResourceConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRetentionConfiguration

Deletes the retention configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRetentionConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteRetentionConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteRetentionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRetentionConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRetentionConfigurationRequest req = new DeleteRetentionConfigurationRequest(                new DeleteRetentionConfigurationRequest("ea");, DeleteRetentionConfigurationXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_RETENTION_CONFIGURATION) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteRetentionConfigurationResponse res = sdk.sdk.deleteRetentionConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStoredQuery

Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStoredQueryRequest;
import org.openapis.openapi.models.operations.DeleteStoredQueryResponse;
import org.openapis.openapi.models.operations.DeleteStoredQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStoredQueryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStoredQueryRequest req = new DeleteStoredQueryRequest(                new DeleteStoredQueryRequest("quidem");, DeleteStoredQueryXAmzTargetEnum.STARLING_DOVE_SERVICE_DELETE_STORED_QUERY) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteStoredQueryResponse res = sdk.sdk.deleteStoredQuery(req);

            if (res.deleteStoredQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deliverConfigSnapshot

<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeliverConfigSnapshotRequest;
import org.openapis.openapi.models.operations.DeliverConfigSnapshotResponse;
import org.openapis.openapi.models.operations.DeliverConfigSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeliverConfigSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeliverConfigSnapshotRequest req = new DeliverConfigSnapshotRequest(                new DeliverConfigSnapshotRequest("nisi");, DeliverConfigSnapshotXAmzTargetEnum.STARLING_DOVE_SERVICE_DELIVER_CONFIG_SNAPSHOT) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            DeliverConfigSnapshotResponse res = sdk.sdk.deliverConfigSnapshot(req);

            if (res.deliverConfigSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAggregateComplianceByConfigRules

<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConfigRulesRequest;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConfigRulesResponse;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConfigRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.ConfigRuleComplianceFilters;
import org.openapis.openapi.models.shared.DescribeAggregateComplianceByConfigRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAggregateComplianceByConfigRulesRequest req = new DescribeAggregateComplianceByConfigRulesRequest(                new DescribeAggregateComplianceByConfigRulesRequest("id") {{
                                filters = new ConfigRuleComplianceFilters() {{
                                    accountId = "labore";
                                    awsRegion = "labore";
                                    complianceType = ComplianceTypeEnum.NON_COMPLIANT;
                                    configRuleName = "natus";
                                }};;
                                limit = 749170L;
                                nextToken = "eum";
                            }};, DescribeAggregateComplianceByConfigRulesXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFIG_RULES) {{
                limit = "vero";
                nextToken = "aspernatur";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DescribeAggregateComplianceByConfigRulesResponse res = sdk.sdk.describeAggregateComplianceByConfigRules(req);

            if (res.describeAggregateComplianceByConfigRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAggregateComplianceByConformancePacks

<p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConformancePacksRequest;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConformancePacksResponse;
import org.openapis.openapi.models.operations.DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregateConformancePackComplianceFilters;
import org.openapis.openapi.models.shared.ConformancePackComplianceTypeEnum;
import org.openapis.openapi.models.shared.DescribeAggregateComplianceByConformancePacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAggregateComplianceByConformancePacksRequest req = new DescribeAggregateComplianceByConformancePacksRequest(                new DescribeAggregateComplianceByConformancePacksRequest("accusantium") {{
                                filters = new AggregateConformancePackComplianceFilters() {{
                                    accountId = "mollitia";
                                    awsRegion = "reiciendis";
                                    complianceType = ConformancePackComplianceTypeEnum.NON_COMPLIANT;
                                    conformancePackName = "ad";
                                }};;
                                limit = 431418L;
                                nextToken = "dolor";
                            }};, DescribeAggregateComplianceByConformancePacksXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFORMANCE_PACKS) {{
                limit = "necessitatibus";
                nextToken = "odit";
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            DescribeAggregateComplianceByConformancePacksResponse res = sdk.sdk.describeAggregateComplianceByConformancePacks(req);

            if (res.describeAggregateComplianceByConformancePacksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAggregationAuthorizations

Returns a list of authorizations granted to various aggregator accounts and regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAggregationAuthorizationsRequest;
import org.openapis.openapi.models.operations.DescribeAggregationAuthorizationsResponse;
import org.openapis.openapi.models.operations.DescribeAggregationAuthorizationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAggregationAuthorizationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAggregationAuthorizationsRequest req = new DescribeAggregationAuthorizationsRequest(                new DescribeAggregationAuthorizationsRequest() {{
                                limit = 703889L;
                                nextToken = "in";
                            }};, DescribeAggregationAuthorizationsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATION_AUTHORIZATIONS) {{
                limit = "architecto";
                nextToken = "architecto";
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            DescribeAggregationAuthorizationsResponse res = sdk.sdk.describeAggregationAuthorizations(req);

            if (res.describeAggregationAuthorizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComplianceByConfigRule

<p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComplianceByConfigRuleRequest;
import org.openapis.openapi.models.operations.DescribeComplianceByConfigRuleResponse;
import org.openapis.openapi.models.operations.DescribeComplianceByConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.DescribeComplianceByConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComplianceByConfigRuleRequest req = new DescribeComplianceByConfigRuleRequest(                new DescribeComplianceByConfigRuleRequest() {{
                                complianceTypes = new org.openapis.openapi.models.shared.ComplianceTypeEnum[]{{
                                    add(ComplianceTypeEnum.COMPLIANT),
                                    add(ComplianceTypeEnum.COMPLIANT),
                                    add(ComplianceTypeEnum.NOT_APPLICABLE),
                                    add(ComplianceTypeEnum.NOT_APPLICABLE),
                                }};
                                configRuleNames = new String[]{{
                                    add("sunt"),
                                }};
                                nextToken = "quo";
                            }};, DescribeComplianceByConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_CONFIG_RULE) {{
                nextToken = "illum";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
            }};            

            DescribeComplianceByConfigRuleResponse res = sdk.sdk.describeComplianceByConfigRule(req);

            if (res.describeComplianceByConfigRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComplianceByResource

<p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComplianceByResourceRequest;
import org.openapis.openapi.models.operations.DescribeComplianceByResourceResponse;
import org.openapis.openapi.models.operations.DescribeComplianceByResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.DescribeComplianceByResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComplianceByResourceRequest req = new DescribeComplianceByResourceRequest(                new DescribeComplianceByResourceRequest() {{
                                complianceTypes = new org.openapis.openapi.models.shared.ComplianceTypeEnum[]{{
                                    add(ComplianceTypeEnum.NOT_APPLICABLE),
                                    add(ComplianceTypeEnum.NON_COMPLIANT),
                                    add(ComplianceTypeEnum.NON_COMPLIANT),
                                    add(ComplianceTypeEnum.NON_COMPLIANT),
                                }};
                                limit = 722056L;
                                nextToken = "eaque";
                                resourceId = "pariatur";
                                resourceType = "nemo";
                            }};, DescribeComplianceByResourceXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_RESOURCE) {{
                limit = "voluptatibus";
                nextToken = "perferendis";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeComplianceByResourceResponse res = sdk.sdk.describeComplianceByResource(req);

            if (res.describeComplianceByResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigRuleEvaluationStatus

Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigRuleEvaluationStatusRequest;
import org.openapis.openapi.models.operations.DescribeConfigRuleEvaluationStatusResponse;
import org.openapis.openapi.models.operations.DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigRuleEvaluationStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigRuleEvaluationStatusRequest req = new DescribeConfigRuleEvaluationStatusRequest(                new DescribeConfigRuleEvaluationStatusRequest() {{
                                configRuleNames = new String[]{{
                                    add("quis"),
                                }};
                                limit = 521037L;
                                nextToken = "dignissimos";
                            }};, DescribeConfigRuleEvaluationStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIG_RULE_EVALUATION_STATUS) {{
                limit = "eaque";
                nextToken = "quis";
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeConfigRuleEvaluationStatusResponse res = sdk.sdk.describeConfigRuleEvaluationStatus(req);

            if (res.describeConfigRuleEvaluationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigRules

Returns details about your Config rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigRulesRequest;
import org.openapis.openapi.models.operations.DescribeConfigRulesResponse;
import org.openapis.openapi.models.operations.DescribeConfigRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigRulesFilters;
import org.openapis.openapi.models.shared.DescribeConfigRulesRequest;
import org.openapis.openapi.models.shared.EvaluationModeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigRulesRequest req = new DescribeConfigRulesRequest(                new DescribeConfigRulesRequest() {{
                                configRuleNames = new String[]{{
                                    add("hic"),
                                    add("recusandae"),
                                }};
                                filters = new DescribeConfigRulesFilters() {{
                                    evaluationMode = EvaluationModeEnum.PROACTIVE;
                                }};;
                                nextToken = "facilis";
                            }};, DescribeConfigRulesXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIG_RULES) {{
                nextToken = "perspiciatis";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeConfigRulesResponse res = sdk.sdk.describeConfigRules(req);

            if (res.describeConfigRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurationAggregatorSourcesStatus

Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorSourcesStatusRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorSourcesStatusResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregatedSourceStatusTypeEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationAggregatorSourcesStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationAggregatorSourcesStatusRequest req = new DescribeConfigurationAggregatorSourcesStatusRequest(                new DescribeConfigurationAggregatorSourcesStatusRequest("adipisci") {{
                                limit = 992397L;
                                nextToken = "earum";
                                updateStatus = new org.openapis.openapi.models.shared.AggregatedSourceStatusTypeEnum[]{{
                                    add(AggregatedSourceStatusTypeEnum.SUCCEEDED),
                                    add(AggregatedSourceStatusTypeEnum.OUTDATED),
                                }};
                            }};, DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_AGGREGATOR_SOURCES_STATUS) {{
                limit = "deleniti";
                nextToken = "pariatur";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "libero";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "aliquid";
            }};            

            DescribeConfigurationAggregatorSourcesStatusResponse res = sdk.sdk.describeConfigurationAggregatorSourcesStatus(req);

            if (res.describeConfigurationAggregatorSourcesStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurationAggregators

Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorsRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorsResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationAggregatorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationAggregatorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationAggregatorsRequest req = new DescribeConfigurationAggregatorsRequest(                new DescribeConfigurationAggregatorsRequest() {{
                                configurationAggregatorNames = new String[]{{
                                    add("dolor"),
                                }};
                                limit = 186193L;
                                nextToken = "ipsum";
                            }};, DescribeConfigurationAggregatorsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_AGGREGATORS) {{
                limit = "hic";
                nextToken = "excepturi";
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            DescribeConfigurationAggregatorsResponse res = sdk.sdk.describeConfigurationAggregators(req);

            if (res.describeConfigurationAggregatorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurationRecorderStatus

<p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationRecorderStatusRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationRecorderStatusResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationRecorderStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationRecorderStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationRecorderStatusRequest req = new DescribeConfigurationRecorderStatusRequest(                new DescribeConfigurationRecorderStatusRequest() {{
                                configurationRecorderNames = new String[]{{
                                    add("ipsa"),
                                }};
                            }};, DescribeConfigurationRecorderStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDER_STATUS) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            DescribeConfigurationRecorderStatusResponse res = sdk.sdk.describeConfigurationRecorderStatus(req);

            if (res.describeConfigurationRecorderStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurationRecorders

<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationRecordersRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationRecordersResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationRecordersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationRecordersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationRecordersRequest req = new DescribeConfigurationRecordersRequest(                new DescribeConfigurationRecordersRequest() {{
                                configurationRecorderNames = new String[]{{
                                    add("atque"),
                                }};
                            }};, DescribeConfigurationRecordersXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDERS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            DescribeConfigurationRecordersResponse res = sdk.sdk.describeConfigurationRecorders(req);

            if (res.describeConfigurationRecordersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConformancePackCompliance

<p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConformancePackComplianceRequest;
import org.openapis.openapi.models.operations.DescribeConformancePackComplianceResponse;
import org.openapis.openapi.models.operations.DescribeConformancePackComplianceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConformancePackComplianceFilters;
import org.openapis.openapi.models.shared.ConformancePackComplianceTypeEnum;
import org.openapis.openapi.models.shared.DescribeConformancePackComplianceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConformancePackComplianceRequest req = new DescribeConformancePackComplianceRequest(                new DescribeConformancePackComplianceRequest("deleniti") {{
                                filters = new ConformancePackComplianceFilters() {{
                                    complianceType = ConformancePackComplianceTypeEnum.NON_COMPLIANT;
                                    configRuleNames = new String[]{{
                                        add("distinctio"),
                                        add("asperiores"),
                                        add("nihil"),
                                        add("ipsum"),
                                    }};
                                }};;
                                limit = 456015L;
                                nextToken = "id";
                            }};, DescribeConformancePackComplianceXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACK_COMPLIANCE) {{
                limit = "saepe";
                nextToken = "eius";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribeConformancePackComplianceResponse res = sdk.sdk.describeConformancePackCompliance(req);

            if (res.describeConformancePackComplianceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConformancePackStatus

<p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConformancePackStatusRequest;
import org.openapis.openapi.models.operations.DescribeConformancePackStatusResponse;
import org.openapis.openapi.models.operations.DescribeConformancePackStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConformancePackStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConformancePackStatusRequest req = new DescribeConformancePackStatusRequest(                new DescribeConformancePackStatusRequest() {{
                                conformancePackNames = new String[]{{
                                    add("provident"),
                                    add("minima"),
                                    add("repellendus"),
                                }};
                                limit = 519711L;
                                nextToken = "similique";
                            }};, DescribeConformancePackStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACK_STATUS) {{
                limit = "alias";
                nextToken = "at";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeConformancePackStatusResponse res = sdk.sdk.describeConformancePackStatus(req);

            if (res.describeConformancePackStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConformancePacks

Returns a list of one or more conformance packs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConformancePacksRequest;
import org.openapis.openapi.models.operations.DescribeConformancePacksResponse;
import org.openapis.openapi.models.operations.DescribeConformancePacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConformancePacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConformancePacksRequest req = new DescribeConformancePacksRequest(                new DescribeConformancePacksRequest() {{
                                conformancePackNames = new String[]{{
                                    add("harum"),
                                    add("iusto"),
                                }};
                                limit = 215507L;
                                nextToken = "quisquam";
                            }};, DescribeConformancePacksXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACKS) {{
                limit = "tenetur";
                nextToken = "amet";
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            DescribeConformancePacksResponse res = sdk.sdk.describeConformancePacks(req);

            if (res.describeConformancePacksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDeliveryChannelStatus

<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelStatusRequest;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelStatusResponse;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDeliveryChannelStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeliveryChannelStatusRequest req = new DescribeDeliveryChannelStatusRequest(                new DescribeDeliveryChannelStatusRequest() {{
                                deliveryChannelNames = new String[]{{
                                    add("expedita"),
                                }};
                            }};, DescribeDeliveryChannelStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNEL_STATUS) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            DescribeDeliveryChannelStatusResponse res = sdk.sdk.describeDeliveryChannelStatus(req);

            if (res.describeDeliveryChannelStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDeliveryChannels

<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelsRequest;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelsResponse;
import org.openapis.openapi.models.operations.DescribeDeliveryChannelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDeliveryChannelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeliveryChannelsRequest req = new DescribeDeliveryChannelsRequest(                new DescribeDeliveryChannelsRequest() {{
                                deliveryChannelNames = new String[]{{
                                    add("qui"),
                                    add("cupiditate"),
                                }};
                            }};, DescribeDeliveryChannelsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNELS) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "soluta";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "incidunt";
            }};            

            DescribeDeliveryChannelsResponse res = sdk.sdk.describeDeliveryChannels(req);

            if (res.describeDeliveryChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConfigRuleStatuses

<p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRuleStatusesRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRuleStatusesResponse;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrganizationConfigRuleStatusesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConfigRuleStatusesRequest req = new DescribeOrganizationConfigRuleStatusesRequest(                new DescribeOrganizationConfigRuleStatusesRequest() {{
                                limit = 174909L;
                                nextToken = "distinctio";
                                organizationConfigRuleNames = new String[]{{
                                    add("aliquid"),
                                    add("quam"),
                                    add("molestias"),
                                }};
                            }};, DescribeOrganizationConfigRuleStatusesXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES) {{
                limit = "temporibus";
                nextToken = "qui";
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
            }};            

            DescribeOrganizationConfigRuleStatusesResponse res = sdk.sdk.describeOrganizationConfigRuleStatuses(req);

            if (res.describeOrganizationConfigRuleStatusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConfigRules

<p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRulesRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRulesResponse;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrganizationConfigRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConfigRulesRequest req = new DescribeOrganizationConfigRulesRequest(                new DescribeOrganizationConfigRulesRequest() {{
                                limit = 30452L;
                                nextToken = "cumque";
                                organizationConfigRuleNames = new String[]{{
                                    add("nobis"),
                                    add("et"),
                                    add("saepe"),
                                }};
                            }};, DescribeOrganizationConfigRulesXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULES) {{
                limit = "ipsum";
                nextToken = "veritatis";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            DescribeOrganizationConfigRulesResponse res = sdk.sdk.describeOrganizationConfigRules(req);

            if (res.describeOrganizationConfigRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConformancePackStatuses

<p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePackStatusesRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePackStatusesResponse;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePackStatusesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrganizationConformancePackStatusesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConformancePackStatusesRequest req = new DescribeOrganizationConformancePackStatusesRequest(                new DescribeOrganizationConformancePackStatusesRequest() {{
                                limit = 286915L;
                                nextToken = "adipisci";
                                organizationConformancePackNames = new String[]{{
                                    add("architecto"),
                                    add("quae"),
                                    add("aut"),
                                }};
                            }};, DescribeOrganizationConformancePackStatusesXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACK_STATUSES) {{
                limit = "quas";
                nextToken = "itaque";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
            }};            

            DescribeOrganizationConformancePackStatusesResponse res = sdk.sdk.describeOrganizationConformancePackStatuses(req);

            if (res.describeOrganizationConformancePackStatusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConformancePacks

<p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePacksRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePacksResponse;
import org.openapis.openapi.models.operations.DescribeOrganizationConformancePacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrganizationConformancePacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConformancePacksRequest req = new DescribeOrganizationConformancePacksRequest(                new DescribeOrganizationConformancePacksRequest() {{
                                limit = 181631L;
                                nextToken = "quae";
                                organizationConformancePackNames = new String[]{{
                                    add("odio"),
                                    add("occaecati"),
                                    add("voluptatibus"),
                                }};
                            }};, DescribeOrganizationConformancePacksXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS) {{
                limit = "quisquam";
                nextToken = "vero";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            DescribeOrganizationConformancePacksResponse res = sdk.sdk.describeOrganizationConformancePacks(req);

            if (res.describeOrganizationConformancePacksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePendingAggregationRequests

Returns a list of all pending aggregation requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePendingAggregationRequestsRequest;
import org.openapis.openapi.models.operations.DescribePendingAggregationRequestsResponse;
import org.openapis.openapi.models.operations.DescribePendingAggregationRequestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePendingAggregationRequestsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePendingAggregationRequestsRequest req = new DescribePendingAggregationRequestsRequest(                new DescribePendingAggregationRequestsRequest() {{
                                limit = 492268L;
                                nextToken = "hic";
                            }};, DescribePendingAggregationRequestsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_PENDING_AGGREGATION_REQUESTS) {{
                limit = "distinctio";
                nextToken = "quod";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DescribePendingAggregationRequestsResponse res = sdk.sdk.describePendingAggregationRequests(req);

            if (res.describePendingAggregationRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRemediationConfigurations

Returns the details of one or more remediation configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRemediationConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeRemediationConfigurationsResponse;
import org.openapis.openapi.models.operations.DescribeRemediationConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRemediationConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRemediationConfigurationsRequest req = new DescribeRemediationConfigurationsRequest(                new DescribeRemediationConfigurationsRequest(                new String[]{{
                                                add("natus"),
                                            }});, DescribeRemediationConfigurationsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_CONFIGURATIONS) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            DescribeRemediationConfigurationsResponse res = sdk.sdk.describeRemediationConfigurations(req);

            if (res.describeRemediationConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRemediationExceptions

<p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRemediationExceptionsRequest;
import org.openapis.openapi.models.operations.DescribeRemediationExceptionsResponse;
import org.openapis.openapi.models.operations.DescribeRemediationExceptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRemediationExceptionsRequest;
import org.openapis.openapi.models.shared.RemediationExceptionResourceKey;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRemediationExceptionsRequest req = new DescribeRemediationExceptionsRequest(                new DescribeRemediationExceptionsRequest("doloribus") {{
                                limit = 478370L;
                                nextToken = "eligendi";
                                resourceKeys = new org.openapis.openapi.models.shared.RemediationExceptionResourceKey[]{{
                                    add(new RemediationExceptionResourceKey() {{
                                        resourceId = "alias";
                                        resourceType = "officia";
                                    }}),
                                    add(new RemediationExceptionResourceKey() {{
                                        resourceId = "tempora";
                                        resourceType = "ipsam";
                                    }}),
                                }};
                            }};, DescribeRemediationExceptionsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_EXCEPTIONS) {{
                limit = "ea";
                nextToken = "aspernatur";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeRemediationExceptionsResponse res = sdk.sdk.describeRemediationExceptions(req);

            if (res.describeRemediationExceptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRemediationExecutionStatus

Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRemediationExecutionStatusRequest;
import org.openapis.openapi.models.operations.DescribeRemediationExecutionStatusResponse;
import org.openapis.openapi.models.operations.DescribeRemediationExecutionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRemediationExecutionStatusRequest;
import org.openapis.openapi.models.shared.ResourceKey;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRemediationExecutionStatusRequest req = new DescribeRemediationExecutionStatusRequest(                new DescribeRemediationExecutionStatusRequest("maiores") {{
                                limit = 97844L;
                                nextToken = "ex";
                                resourceKeys = new org.openapis.openapi.models.shared.ResourceKey[]{{
                                    add(new ResourceKey("nostrum", ResourceTypeEnum.AWS_PINPOINT_APPLICATION_SETTINGS) {{
                                        resourceId = "excepturi";
                                        resourceType = ResourceTypeEnum.AWS_EC2_NETWORK_INSIGHTS_PATH;
                                    }}),
                                    add(new ResourceKey("ea", ResourceTypeEnum.AWS_TRANSFER_WORKFLOW) {{
                                        resourceId = "quisquam";
                                        resourceType = ResourceTypeEnum.AWS_EVENTS_CONNECTION;
                                    }}),
                                    add(new ResourceKey("aliquid", ResourceTypeEnum.AWS_ELASTICSEARCH_DOMAIN) {{
                                        resourceId = "corporis";
                                        resourceType = ResourceTypeEnum.AWSSQS_QUEUE;
                                    }}),
                                    add(new ResourceKey("quo", ResourceTypeEnum.AWS_CLOUD_FRONT_STREAMING_DISTRIBUTION) {{
                                        resourceId = "magnam";
                                        resourceType = ResourceTypeEnum.AWS_KINESIS_STREAM_CONSUMER;
                                    }}),
                                }};
                            }};, DescribeRemediationExecutionStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_EXECUTION_STATUS) {{
                limit = "recusandae";
                nextToken = "aspernatur";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "a";
                xAmzDate = "libero";
                xAmzSecurityToken = "aut";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeRemediationExecutionStatusResponse res = sdk.sdk.describeRemediationExecutionStatus(req);

            if (res.describeRemediationExecutionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRetentionConfigurations

<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRetentionConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeRetentionConfigurationsResponse;
import org.openapis.openapi.models.operations.DescribeRetentionConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRetentionConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRetentionConfigurationsRequest req = new DescribeRetentionConfigurationsRequest(                new DescribeRetentionConfigurationsRequest() {{
                                nextToken = "aliquam";
                                retentionConfigurationNames = new String[]{{
                                    add("accusamus"),
                                }};
                            }};, DescribeRetentionConfigurationsXAmzTargetEnum.STARLING_DOVE_SERVICE_DESCRIBE_RETENTION_CONFIGURATIONS) {{
                nextToken = "inventore";
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            DescribeRetentionConfigurationsResponse res = sdk.sdk.describeRetentionConfigurations(req);

            if (res.describeRetentionConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAggregateComplianceDetailsByConfigRule

<p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregateComplianceDetailsByConfigRuleRequest;
import org.openapis.openapi.models.operations.GetAggregateComplianceDetailsByConfigRuleResponse;
import org.openapis.openapi.models.operations.GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.GetAggregateComplianceDetailsByConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAggregateComplianceDetailsByConfigRuleRequest req = new GetAggregateComplianceDetailsByConfigRuleRequest(                new GetAggregateComplianceDetailsByConfigRuleRequest("nobis", "quas", "assumenda", "nulla") {{
                                complianceType = ComplianceTypeEnum.NON_COMPLIANT;
                                limit = 727044L;
                                nextToken = "quasi";
                            }};, GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE) {{
                limit = "tempora";
                nextToken = "numquam";
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "provident";
                xAmzCredential = "ipsa";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "eius";
            }};            

            GetAggregateComplianceDetailsByConfigRuleResponse res = sdk.sdk.getAggregateComplianceDetailsByConfigRule(req);

            if (res.getAggregateComplianceDetailsByConfigRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAggregateConfigRuleComplianceSummary

<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregateConfigRuleComplianceSummaryRequest;
import org.openapis.openapi.models.operations.GetAggregateConfigRuleComplianceSummaryResponse;
import org.openapis.openapi.models.operations.GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigRuleComplianceSummaryFilters;
import org.openapis.openapi.models.shared.ConfigRuleComplianceSummaryGroupKeyEnum;
import org.openapis.openapi.models.shared.GetAggregateConfigRuleComplianceSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAggregateConfigRuleComplianceSummaryRequest req = new GetAggregateConfigRuleComplianceSummaryRequest(                new GetAggregateConfigRuleComplianceSummaryRequest("esse") {{
                                filters = new ConfigRuleComplianceSummaryFilters() {{
                                    accountId = "rem";
                                    awsRegion = "fuga";
                                }};;
                                groupByKey = ConfigRuleComplianceSummaryGroupKeyEnum.ACCOUNT_ID;
                                limit = 695626L;
                                nextToken = "fugiat";
                            }};, GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_AGGREGATE_CONFIG_RULE_COMPLIANCE_SUMMARY) {{
                limit = "ut";
                nextToken = "eum";
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "eos";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetAggregateConfigRuleComplianceSummaryResponse res = sdk.sdk.getAggregateConfigRuleComplianceSummary(req);

            if (res.getAggregateConfigRuleComplianceSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAggregateConformancePackComplianceSummary

<p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregateConformancePackComplianceSummaryRequest;
import org.openapis.openapi.models.operations.GetAggregateConformancePackComplianceSummaryResponse;
import org.openapis.openapi.models.operations.GetAggregateConformancePackComplianceSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregateConformancePackComplianceSummaryFilters;
import org.openapis.openapi.models.shared.AggregateConformancePackComplianceSummaryGroupKeyEnum;
import org.openapis.openapi.models.shared.GetAggregateConformancePackComplianceSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAggregateConformancePackComplianceSummaryRequest req = new GetAggregateConformancePackComplianceSummaryRequest(                new GetAggregateConformancePackComplianceSummaryRequest("quidem") {{
                                filters = new AggregateConformancePackComplianceSummaryFilters() {{
                                    accountId = "neque";
                                    awsRegion = "quo";
                                }};;
                                groupByKey = AggregateConformancePackComplianceSummaryGroupKeyEnum.AWS_REGION;
                                limit = 777408L;
                                nextToken = "fuga";
                            }};, GetAggregateConformancePackComplianceSummaryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY) {{
                limit = "eius";
                nextToken = "eos";
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
            }};            

            GetAggregateConformancePackComplianceSummaryResponse res = sdk.sdk.getAggregateConformancePackComplianceSummary(req);

            if (res.getAggregateConformancePackComplianceSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAggregateDiscoveredResourceCounts

<p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregateDiscoveredResourceCountsRequest;
import org.openapis.openapi.models.operations.GetAggregateDiscoveredResourceCountsResponse;
import org.openapis.openapi.models.operations.GetAggregateDiscoveredResourceCountsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAggregateDiscoveredResourceCountsRequest;
import org.openapis.openapi.models.shared.ResourceCountFilters;
import org.openapis.openapi.models.shared.ResourceCountGroupKeyEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAggregateDiscoveredResourceCountsRequest req = new GetAggregateDiscoveredResourceCountsRequest(                new GetAggregateDiscoveredResourceCountsRequest("sequi") {{
                                filters = new ResourceCountFilters() {{
                                    accountId = "quo";
                                    region = "esse";
                                    resourceType = ResourceTypeEnum.AWS_LOOKOUT_VISION_PROJECT;
                                }};;
                                groupByKey = ResourceCountGroupKeyEnum.RESOURCE_TYPE;
                                limit = 715179L;
                                nextToken = "quod";
                            }};, GetAggregateDiscoveredResourceCountsXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_AGGREGATE_DISCOVERED_RESOURCE_COUNTS) {{
                limit = "dignissimos";
                nextToken = "inventore";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "totam";
                xAmzCredential = "accusamus";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "commodi";
            }};            

            GetAggregateDiscoveredResourceCountsResponse res = sdk.sdk.getAggregateDiscoveredResourceCounts(req);

            if (res.getAggregateDiscoveredResourceCountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAggregateResourceConfig

Returns configuration item that is aggregated for your specific resource in a specific source account and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregateResourceConfigRequest;
import org.openapis.openapi.models.operations.GetAggregateResourceConfigResponse;
import org.openapis.openapi.models.operations.GetAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregateResourceIdentifier;
import org.openapis.openapi.models.shared.GetAggregateResourceConfigRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAggregateResourceConfigRequest req = new GetAggregateResourceConfigRequest(                new GetAggregateResourceConfigRequest("dolores",                 new AggregateResourceIdentifier("deserunt", ResourceTypeEnum.AWS_ELASTIC_LOAD_BALANCING_V2_LISTENER, "accusantium", "porro") {{
                                                resourceName = "eum";
                                            }};);, GetAggregateResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_AGGREGATE_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "consequuntur";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetAggregateResourceConfigResponse res = sdk.sdk.getAggregateResourceConfig(req);

            if (res.getAggregateResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceDetailsByConfigRule

Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceDetailsByConfigRuleRequest;
import org.openapis.openapi.models.operations.GetComplianceDetailsByConfigRuleResponse;
import org.openapis.openapi.models.operations.GetComplianceDetailsByConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.GetComplianceDetailsByConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceDetailsByConfigRuleRequest req = new GetComplianceDetailsByConfigRuleRequest(                new GetComplianceDetailsByConfigRuleRequest("atque") {{
                                complianceTypes = new org.openapis.openapi.models.shared.ComplianceTypeEnum[]{{
                                    add(ComplianceTypeEnum.NON_COMPLIANT),
                                }};
                                limit = 392676L;
                                nextToken = "fugit";
                            }};, GetComplianceDetailsByConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE) {{
                limit = "sapiente";
                nextToken = "consequuntur";
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "saepe";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "atque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
            }};            

            GetComplianceDetailsByConfigRuleResponse res = sdk.sdk.getComplianceDetailsByConfigRule(req);

            if (res.getComplianceDetailsByConfigRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceDetailsByResource

Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceDetailsByResourceRequest;
import org.openapis.openapi.models.operations.GetComplianceDetailsByResourceResponse;
import org.openapis.openapi.models.operations.GetComplianceDetailsByResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.GetComplianceDetailsByResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceDetailsByResourceRequest req = new GetComplianceDetailsByResourceRequest(                new GetComplianceDetailsByResourceRequest() {{
                                complianceTypes = new org.openapis.openapi.models.shared.ComplianceTypeEnum[]{{
                                    add(ComplianceTypeEnum.COMPLIANT),
                                    add(ComplianceTypeEnum.NON_COMPLIANT),
                                    add(ComplianceTypeEnum.INSUFFICIENT_DATA),
                                    add(ComplianceTypeEnum.NOT_APPLICABLE),
                                }};
                                nextToken = "vero";
                                resourceEvaluationId = "aliquid";
                                resourceId = "quasi";
                                resourceType = "saepe";
                            }};, GetComplianceDetailsByResourceXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_RESOURCE) {{
                nextToken = "vel";
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
            }};            

            GetComplianceDetailsByResourceResponse res = sdk.sdk.getComplianceDetailsByResource(req);

            if (res.getComplianceDetailsByResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceSummaryByConfigRule

Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceSummaryByConfigRuleRequest;
import org.openapis.openapi.models.operations.GetComplianceSummaryByConfigRuleResponse;
import org.openapis.openapi.models.operations.GetComplianceSummaryByConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceSummaryByConfigRuleRequest req = new GetComplianceSummaryByConfigRuleRequest(GetComplianceSummaryByConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "adipisci";
                xAmzDate = "cumque";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "minus";
            }};            

            GetComplianceSummaryByConfigRuleResponse res = sdk.sdk.getComplianceSummaryByConfigRule(req);

            if (res.getComplianceSummaryByConfigRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceSummaryByResourceType

Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceSummaryByResourceTypeRequest;
import org.openapis.openapi.models.operations.GetComplianceSummaryByResourceTypeResponse;
import org.openapis.openapi.models.operations.GetComplianceSummaryByResourceTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComplianceSummaryByResourceTypeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceSummaryByResourceTypeRequest req = new GetComplianceSummaryByResourceTypeRequest(                new GetComplianceSummaryByResourceTypeRequest() {{
                                resourceTypes = new String[]{{
                                    add("consectetur"),
                                    add("esse"),
                                    add("blanditiis"),
                                    add("provident"),
                                }};
                            }};, GetComplianceSummaryByResourceTypeXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "quas";
                xAmzDate = "esse";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "a";
                xAmzSignedHeaders = "error";
            }};            

            GetComplianceSummaryByResourceTypeResponse res = sdk.sdk.getComplianceSummaryByResourceType(req);

            if (res.getComplianceSummaryByResourceTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConformancePackComplianceDetails

Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConformancePackComplianceDetailsRequest;
import org.openapis.openapi.models.operations.GetConformancePackComplianceDetailsResponse;
import org.openapis.openapi.models.operations.GetConformancePackComplianceDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConformancePackComplianceTypeEnum;
import org.openapis.openapi.models.shared.ConformancePackEvaluationFilters;
import org.openapis.openapi.models.shared.GetConformancePackComplianceDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConformancePackComplianceDetailsRequest req = new GetConformancePackComplianceDetailsRequest(                new GetConformancePackComplianceDetailsRequest("pariatur") {{
                                filters = new ConformancePackEvaluationFilters() {{
                                    complianceType = ConformancePackComplianceTypeEnum.INSUFFICIENT_DATA;
                                    configRuleNames = new String[]{{
                                        add("eveniet"),
                                    }};
                                    resourceIds = new String[]{{
                                        add("facere"),
                                        add("veritatis"),
                                        add("consequuntur"),
                                        add("quasi"),
                                    }};
                                    resourceType = "similique";
                                }};;
                                limit = 633608L;
                                nextToken = "aliquid";
                            }};, GetConformancePackComplianceDetailsXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS) {{
                limit = "tenetur";
                nextToken = "quae";
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "in";
                xAmzDate = "eius";
                xAmzSecurityToken = "libero";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "soluta";
            }};            

            GetConformancePackComplianceDetailsResponse res = sdk.sdk.getConformancePackComplianceDetails(req);

            if (res.getConformancePackComplianceDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConformancePackComplianceSummary

Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConformancePackComplianceSummaryRequest;
import org.openapis.openapi.models.operations.GetConformancePackComplianceSummaryResponse;
import org.openapis.openapi.models.operations.GetConformancePackComplianceSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetConformancePackComplianceSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConformancePackComplianceSummaryRequest req = new GetConformancePackComplianceSummaryRequest(                new GetConformancePackComplianceSummaryRequest(                new String[]{{
                                                add("sapiente"),
                                                add("dicta"),
                                            }}) {{
                                limit = 355369L;
                                nextToken = "reprehenderit";
                            }};, GetConformancePackComplianceSummaryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_SUMMARY) {{
                limit = "ullam";
                nextToken = "nisi";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "qui";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "ex";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "itaque";
            }};            

            GetConformancePackComplianceSummaryResponse res = sdk.sdk.getConformancePackComplianceSummary(req);

            if (res.getConformancePackComplianceSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomRulePolicy

Returns the policy definition containing the logic for your Config Custom Policy rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomRulePolicyRequest;
import org.openapis.openapi.models.operations.GetCustomRulePolicyResponse;
import org.openapis.openapi.models.operations.GetCustomRulePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCustomRulePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomRulePolicyRequest req = new GetCustomRulePolicyRequest(                new GetCustomRulePolicyRequest() {{
                                configRuleName = "architecto";
                            }};, GetCustomRulePolicyXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_CUSTOM_RULE_POLICY) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetCustomRulePolicyResponse res = sdk.sdk.getCustomRulePolicy(req);

            if (res.getCustomRulePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveredResourceCounts

<p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveredResourceCountsRequest;
import org.openapis.openapi.models.operations.GetDiscoveredResourceCountsResponse;
import org.openapis.openapi.models.operations.GetDiscoveredResourceCountsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDiscoveredResourceCountsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDiscoveredResourceCountsRequest req = new GetDiscoveredResourceCountsRequest(                new GetDiscoveredResourceCountsRequest() {{
                                limit = 86532L;
                                nextToken = "consectetur";
                                resourceTypes = new String[]{{
                                    add("iste"),
                                }};
                            }};, GetDiscoveredResourceCountsXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_DISCOVERED_RESOURCE_COUNTS) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "rem";
                xAmzDate = "aut";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "mollitia";
                limit = "ab";
                nextToken = "corrupti";
            }};            

            GetDiscoveredResourceCountsResponse res = sdk.sdk.getDiscoveredResourceCounts(req);

            if (res.getDiscoveredResourceCountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigRuleDetailedStatus

Returns detailed status for each member account within an organization for a given organization Config rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigRuleDetailedStatusRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigRuleDetailedStatusResponse;
import org.openapis.openapi.models.operations.GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOrganizationConfigRuleDetailedStatusRequest;
import org.openapis.openapi.models.shared.MemberAccountRuleStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusDetailFilters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigRuleDetailedStatusRequest req = new GetOrganizationConfigRuleDetailedStatusRequest(                new GetOrganizationConfigRuleDetailedStatusRequest("voluptatem") {{
                                filters = new StatusDetailFilters() {{
                                    accountId = "dolor";
                                    memberAccountRuleStatus = MemberAccountRuleStatusEnum.DELETE_IN_PROGRESS;
                                }};;
                                limit = 253191L;
                                nextToken = "impedit";
                            }};, GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS) {{
                limit = "explicabo";
                nextToken = "voluptas";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "dicta";
                xAmzDate = "maiores";
                xAmzSecurityToken = "natus";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetOrganizationConfigRuleDetailedStatusResponse res = sdk.sdk.getOrganizationConfigRuleDetailedStatus(req);

            if (res.getOrganizationConfigRuleDetailedStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConformancePackDetailedStatus

Returns detailed status for each member account within an organization for a given organization conformance pack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConformancePackDetailedStatusRequest;
import org.openapis.openapi.models.operations.GetOrganizationConformancePackDetailedStatusResponse;
import org.openapis.openapi.models.operations.GetOrganizationConformancePackDetailedStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOrganizationConformancePackDetailedStatusRequest;
import org.openapis.openapi.models.shared.OrganizationResourceDetailedStatusEnum;
import org.openapis.openapi.models.shared.OrganizationResourceDetailedStatusFilters;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConformancePackDetailedStatusRequest req = new GetOrganizationConformancePackDetailedStatusRequest(                new GetOrganizationConformancePackDetailedStatusRequest("asperiores") {{
                                filters = new OrganizationResourceDetailedStatusFilters() {{
                                    accountId = "aperiam";
                                    status = OrganizationResourceDetailedStatusEnum.DELETE_SUCCESSFUL;
                                }};;
                                limit = 310067L;
                                nextToken = "consequuntur";
                            }};, GetOrganizationConformancePackDetailedStatusXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS) {{
                limit = "repellendus";
                nextToken = "officia";
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "officia";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetOrganizationConformancePackDetailedStatusResponse res = sdk.sdk.getOrganizationConformancePackDetailedStatus(req);

            if (res.getOrganizationConformancePackDetailedStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCustomRulePolicy

Returns the policy definition containing the logic for your organization Config Custom Policy rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCustomRulePolicyRequest;
import org.openapis.openapi.models.operations.GetOrganizationCustomRulePolicyResponse;
import org.openapis.openapi.models.operations.GetOrganizationCustomRulePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOrganizationCustomRulePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCustomRulePolicyRequest req = new GetOrganizationCustomRulePolicyRequest(                new GetOrganizationCustomRulePolicyRequest("quod");, GetOrganizationCustomRulePolicyXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_ORGANIZATION_CUSTOM_RULE_POLICY) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "ab";
                xAmzCredential = "adipisci";
                xAmzDate = "fuga";
                xAmzSecurityToken = "id";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "velit";
            }};            

            GetOrganizationCustomRulePolicyResponse res = sdk.sdk.getOrganizationCustomRulePolicy(req);

            if (res.getOrganizationCustomRulePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceConfigHistory

<p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceConfigHistoryRequest;
import org.openapis.openapi.models.operations.GetResourceConfigHistoryResponse;
import org.openapis.openapi.models.operations.GetResourceConfigHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChronologicalOrderEnum;
import org.openapis.openapi.models.shared.GetResourceConfigHistoryRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceConfigHistoryRequest req = new GetResourceConfigHistoryRequest(                new GetResourceConfigHistoryRequest("est", ResourceTypeEnum.AWS_LOOKOUT_VISION_PROJECT) {{
                                chronologicalOrder = ChronologicalOrderEnum.FORWARD;
                                earlierTime = OffsetDateTime.parse("2021-09-23T14:56:28.537Z");
                                laterTime = OffsetDateTime.parse("2022-06-12T12:56:04.738Z");
                                limit = 427834L;
                                nextToken = "labore";
                            }};, GetResourceConfigHistoryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_RESOURCE_CONFIG_HISTORY) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cum";
                xAmzDate = "commodi";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "reiciendis";
                limit = "assumenda";
                nextToken = "nemo";
            }};            

            GetResourceConfigHistoryResponse res = sdk.sdk.getResourceConfigHistory(req);

            if (res.getResourceConfigHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceEvaluationSummary

<p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceEvaluationSummaryRequest;
import org.openapis.openapi.models.operations.GetResourceEvaluationSummaryResponse;
import org.openapis.openapi.models.operations.GetResourceEvaluationSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourceEvaluationSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceEvaluationSummaryRequest req = new GetResourceEvaluationSummaryRequest(                new GetResourceEvaluationSummaryRequest("aliquid");, GetResourceEvaluationSummaryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_RESOURCE_EVALUATION_SUMMARY) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cum";
                xAmzCredential = "consectetur";
                xAmzDate = "in";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "facere";
            }};            

            GetResourceEvaluationSummaryResponse res = sdk.sdk.getResourceEvaluationSummary(req);

            if (res.getResourceEvaluationSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoredQuery

Returns the details of a specific stored query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoredQueryRequest;
import org.openapis.openapi.models.operations.GetStoredQueryResponse;
import org.openapis.openapi.models.operations.GetStoredQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetStoredQueryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStoredQueryRequest req = new GetStoredQueryRequest(                new GetStoredQueryRequest("doloribus");, GetStoredQueryXAmzTargetEnum.STARLING_DOVE_SERVICE_GET_STORED_QUERY) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "quidem";
                xAmzDate = "saepe";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "sunt";
            }};            

            GetStoredQueryResponse res = sdk.sdk.getStoredQuery(req);

            if (res.getStoredQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAggregateDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAggregateDiscoveredResourcesRequest;
import org.openapis.openapi.models.operations.ListAggregateDiscoveredResourcesResponse;
import org.openapis.openapi.models.operations.ListAggregateDiscoveredResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAggregateDiscoveredResourcesRequest;
import org.openapis.openapi.models.shared.ResourceFilters;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAggregateDiscoveredResourcesRequest req = new ListAggregateDiscoveredResourcesRequest(                new ListAggregateDiscoveredResourcesRequest("adipisci", ResourceTypeEnum.AWS_ELASTIC_BEANSTALK_APPLICATION) {{
                                filters = new ResourceFilters() {{
                                    accountId = "amet";
                                    region = "beatae";
                                    resourceId = "dignissimos";
                                    resourceName = "a";
                                }};;
                                limit = 891523L;
                                nextToken = "consectetur";
                            }};, ListAggregateDiscoveredResourcesXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_AGGREGATE_DISCOVERED_RESOURCES) {{
                limit = "corporis";
                nextToken = "harum";
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "voluptates";
                xAmzDate = "libero";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "similique";
            }};            

            ListAggregateDiscoveredResourcesResponse res = sdk.sdk.listAggregateDiscoveredResources(req);

            if (res.listAggregateDiscoveredResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConformancePackComplianceScores

<p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConformancePackComplianceScoresRequest;
import org.openapis.openapi.models.operations.ListConformancePackComplianceScoresResponse;
import org.openapis.openapi.models.operations.ListConformancePackComplianceScoresXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConformancePackComplianceScoresFilters;
import org.openapis.openapi.models.shared.ListConformancePackComplianceScoresRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConformancePackComplianceScoresRequest req = new ListConformancePackComplianceScoresRequest(                new ListConformancePackComplianceScoresRequest() {{
                                filters = new ConformancePackComplianceScoresFilters(                new String[]{{
                                                    add("voluptas"),
                                                }});;
                                limit = 374244L;
                                nextToken = "voluptas";
                                sortBy = SortByEnum.SCORE;
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, ListConformancePackComplianceScoresXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_CONFORMANCE_PACK_COMPLIANCE_SCORES) {{
                limit = "nobis";
                nextToken = "dolorum";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
            }};            

            ListConformancePackComplianceScoresResponse res = sdk.sdk.listConformancePackComplianceScores(req);

            if (res.listConformancePackComplianceScoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesResponse;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDiscoveredResourcesRequest req = new ListDiscoveredResourcesRequest(                new ListDiscoveredResourcesRequest(ResourceTypeEnum.AWSIVS_PLAYBACK_KEY_PAIR) {{
                                includeDeletedResources = false;
                                limit = 351870L;
                                nextToken = "adipisci";
                                resourceIds = new String[]{{
                                    add("blanditiis"),
                                    add("quas"),
                                    add("hic"),
                                }};
                                resourceName = "nesciunt";
                            }};, ListDiscoveredResourcesXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_DISCOVERED_RESOURCES) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "pariatur";
                xAmzDate = "totam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nobis";
                limit = "sit";
                nextToken = "rerum";
            }};            

            ListDiscoveredResourcesResponse res = sdk.sdk.listDiscoveredResources(req);

            if (res.listDiscoveredResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceEvaluations

Returns a list of proactive resource evaluations.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceEvaluationsRequest;
import org.openapis.openapi.models.operations.ListResourceEvaluationsResponse;
import org.openapis.openapi.models.operations.ListResourceEvaluationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EvaluationModeEnum;
import org.openapis.openapi.models.shared.ListResourceEvaluationsRequest;
import org.openapis.openapi.models.shared.ResourceEvaluationFilters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeWindow;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceEvaluationsRequest req = new ListResourceEvaluationsRequest(                new ListResourceEvaluationsRequest() {{
                                filters = new ResourceEvaluationFilters() {{
                                    evaluationContextIdentifier = "reiciendis";
                                    evaluationMode = EvaluationModeEnum.DETECTIVE;
                                    timeWindow = new TimeWindow() {{
                                        endTime = OffsetDateTime.parse("2020-11-16T19:55:44.497Z");
                                        startTime = OffsetDateTime.parse("2022-04-17T04:31:41.347Z");
                                    }};;
                                }};;
                                limit = 70869L;
                                nextToken = "iste";
                            }};, ListResourceEvaluationsXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_RESOURCE_EVALUATIONS) {{
                limit = "dolore";
                nextToken = "laborum";
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            ListResourceEvaluationsResponse res = sdk.sdk.listResourceEvaluations(req);

            if (res.listResourceEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStoredQueries

Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStoredQueriesRequest;
import org.openapis.openapi.models.operations.ListStoredQueriesResponse;
import org.openapis.openapi.models.operations.ListStoredQueriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStoredQueriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStoredQueriesRequest req = new ListStoredQueriesRequest(                new ListStoredQueriesRequest() {{
                                maxResults = 382808L;
                                nextToken = "sapiente";
                            }};, ListStoredQueriesXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_STORED_QUERIES) {{
                maxResults = "debitis";
                nextToken = "illo";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            ListStoredQueriesResponse res = sdk.sdk.listStoredQueries(req);

            if (res.listStoredQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for Config resource.

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
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("necessitatibus") {{
                                limit = 215529L;
                                nextToken = "ea";
                            }};, ListTagsForResourceXAmzTargetEnum.STARLING_DOVE_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                limit = "occaecati";
                nextToken = "quos";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "tempora";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sit";
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

## putAggregationAuthorization

<p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAggregationAuthorizationRequest;
import org.openapis.openapi.models.operations.PutAggregationAuthorizationResponse;
import org.openapis.openapi.models.operations.PutAggregationAuthorizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutAggregationAuthorizationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAggregationAuthorizationRequest req = new PutAggregationAuthorizationRequest(                new PutAggregationAuthorizationRequest("officiis", "praesentium") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quaerat";
                                        value = "incidunt";
                                    }}),
                                    add(new Tag() {{
                                        key = "ipsam";
                                        value = "debitis";
                                    }}),
                                    add(new Tag() {{
                                        key = "rem";
                                        value = "sit";
                                    }}),
                                }};
                            }};, PutAggregationAuthorizationXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_AGGREGATION_AUTHORIZATION) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "error";
                xAmzCredential = "veniam";
                xAmzDate = "minima";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "nulla";
            }};            

            PutAggregationAuthorizationResponse res = sdk.sdk.putAggregationAuthorization(req);

            if (res.putAggregationAuthorizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigRule

<p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigRuleRequest;
import org.openapis.openapi.models.operations.PutConfigRuleResponse;
import org.openapis.openapi.models.operations.PutConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigRule;
import org.openapis.openapi.models.shared.ConfigRuleStateEnum;
import org.openapis.openapi.models.shared.CustomPolicyDetails;
import org.openapis.openapi.models.shared.EvaluationModeConfiguration;
import org.openapis.openapi.models.shared.EvaluationModeEnum;
import org.openapis.openapi.models.shared.EventSourceEnum;
import org.openapis.openapi.models.shared.MaximumExecutionFrequencyEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.OwnerEnum;
import org.openapis.openapi.models.shared.PutConfigRuleRequest;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceDetail;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigRuleRequest req = new PutConfigRuleRequest(                new PutConfigRuleRequest(                new ConfigRule(                new Source(OwnerEnum.CUSTOM_LAMBDA) {{
                                                                customPolicyDetails = new CustomPolicyDetails("saepe", "numquam") {{
                                                                    enableDebugLogDelivery = false;
                                                                }};;
                                                                sourceDetails = new org.openapis.openapi.models.shared.SourceDetail[]{{
                                                                    add(new SourceDetail() {{
                                                                        eventSource = EventSourceEnum.AWS_CONFIG;
                                                                        maximumExecutionFrequency = MaximumExecutionFrequencyEnum.SIX_HOURS;
                                                                        messageType = MessageTypeEnum.OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION;
                                                                    }}),
                                                                    add(new SourceDetail() {{
                                                                        eventSource = EventSourceEnum.AWS_CONFIG;
                                                                        maximumExecutionFrequency = MaximumExecutionFrequencyEnum.ONE_HOUR;
                                                                        messageType = MessageTypeEnum.SCHEDULED_NOTIFICATION;
                                                                    }}),
                                                                }};
                                                                sourceIdentifier = "exercitationem";
                                                            }};) {{
                                                configRuleArn = "praesentium";
                                                configRuleId = "cum";
                                                configRuleName = "laboriosam";
                                                configRuleState = ConfigRuleStateEnum.DELETING_RESULTS;
                                                createdBy = "voluptatum";
                                                description = "error";
                                                evaluationModes = new org.openapis.openapi.models.shared.EvaluationModeConfiguration[]{{
                                                    add(new EvaluationModeConfiguration() {{
                                                        mode = EvaluationModeEnum.PROACTIVE;
                                                    }}),
                                                    add(new EvaluationModeConfiguration() {{
                                                        mode = EvaluationModeEnum.PROACTIVE;
                                                    }}),
                                                    add(new EvaluationModeConfiguration() {{
                                                        mode = EvaluationModeEnum.DETECTIVE;
                                                    }}),
                                                    add(new EvaluationModeConfiguration() {{
                                                        mode = EvaluationModeEnum.PROACTIVE;
                                                    }}),
                                                }};
                                                inputParameters = "nostrum";
                                                maximumExecutionFrequency = MaximumExecutionFrequencyEnum.TWELVE_HOURS;
                                                scope = new Scope() {{
                                                    complianceResourceId = "dolorum";
                                                    complianceResourceTypes = new String[]{{
                                                        add("accusamus"),
                                                        add("tempora"),
                                                        add("atque"),
                                                    }};
                                                    tagKey = "fugit";
                                                    tagValue = "ut";
                                                }};;
                                            }};) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "voluptatem";
                                        value = "culpa";
                                    }}),
                                    add(new Tag() {{
                                        key = "expedita";
                                        value = "magnam";
                                    }}),
                                    add(new Tag() {{
                                        key = "consequatur";
                                        value = "esse";
                                    }}),
                                    add(new Tag() {{
                                        key = "ipsam";
                                        value = "sit";
                                    }}),
                                }};
                            }};, PutConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_CONFIG_RULE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "repudiandae";
                xAmzDate = "corporis";
                xAmzSecurityToken = "et";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "ex";
            }};            

            PutConfigRuleResponse res = sdk.sdk.putConfigRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationAggregator

<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationAggregatorRequest;
import org.openapis.openapi.models.operations.PutConfigurationAggregatorResponse;
import org.openapis.openapi.models.operations.PutConfigurationAggregatorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountAggregationSource;
import org.openapis.openapi.models.shared.OrganizationAggregationSource;
import org.openapis.openapi.models.shared.PutConfigurationAggregatorRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationAggregatorRequest req = new PutConfigurationAggregatorRequest(                new PutConfigurationAggregatorRequest("sit") {{
                                accountAggregationSources = new org.openapis.openapi.models.shared.AccountAggregationSource[]{{
                                    add(new AccountAggregationSource(                new String[]{{
                                                        add("dolorem"),
                                                        add("harum"),
                                                        add("dicta"),
                                                        add("architecto"),
                                                    }}) {{
                                        accountIds = new String[]{{
                                            add("saepe"),
                                            add("error"),
                                        }};
                                        allAwsRegions = false;
                                        awsRegions = new String[]{{
                                            add("incidunt"),
                                        }};
                                    }}),
                                    add(new AccountAggregationSource(                new String[]{{
                                                        add("amet"),
                                                    }}) {{
                                        accountIds = new String[]{{
                                            add("labore"),
                                            add("quidem"),
                                            add("atque"),
                                        }};
                                        allAwsRegions = false;
                                        awsRegions = new String[]{{
                                            add("nam"),
                                            add("tenetur"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                }};
                                organizationAggregationSource = new OrganizationAggregationSource("deserunt") {{
                                    allAwsRegions = false;
                                    awsRegions = new String[]{{
                                        add("unde"),
                                        add("reiciendis"),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "repellendus";
                                        value = "delectus";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptates";
                                        value = "perferendis";
                                    }}),
                                    add(new Tag() {{
                                        key = "est";
                                        value = "quidem";
                                    }}),
                                }};
                            }};, PutConfigurationAggregatorXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_CONFIGURATION_AGGREGATOR) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            PutConfigurationAggregatorResponse res = sdk.sdk.putConfigurationAggregator(req);

            if (res.putConfigurationAggregatorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConfigurationRecorder

<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConfigurationRecorderRequest;
import org.openapis.openapi.models.operations.PutConfigurationRecorderResponse;
import org.openapis.openapi.models.operations.PutConfigurationRecorderXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigurationRecorder;
import org.openapis.openapi.models.shared.PutConfigurationRecorderRequest;
import org.openapis.openapi.models.shared.RecordingGroup;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConfigurationRecorderRequest req = new PutConfigurationRecorderRequest(                new PutConfigurationRecorderRequest(                new ConfigurationRecorder() {{
                                                name = "Ryan Littel";
                                                recordingGroup = new RecordingGroup() {{
                                                    allSupported = false;
                                                    includeGlobalResourceTypes = false;
                                                    resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                                                        add(ResourceTypeEnum.AWSECS_TASK_DEFINITION),
                                                        add(ResourceTypeEnum.AWSSES_TEMPLATE),
                                                        add(ResourceTypeEnum.AWS_IO_T_ANALYTICS_PIPELINE),
                                                    }};
                                                }};;
                                                roleARN = "et";
                                            }};);, PutConfigurationRecorderXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_CONFIGURATION_RECORDER) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            PutConfigurationRecorderResponse res = sdk.sdk.putConfigurationRecorder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConformancePack

<p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConformancePackRequest;
import org.openapis.openapi.models.operations.PutConformancePackResponse;
import org.openapis.openapi.models.operations.PutConformancePackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConformancePackInputParameter;
import org.openapis.openapi.models.shared.PutConformancePackRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateSSMDocumentDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConformancePackRequest req = new PutConformancePackRequest(                new PutConformancePackRequest("accusamus") {{
                                conformancePackInputParameters = new org.openapis.openapi.models.shared.ConformancePackInputParameter[]{{
                                    add(new ConformancePackInputParameter("ex", "maiores") {{
                                        parameterName = "minima";
                                        parameterValue = "aspernatur";
                                    }}),
                                    add(new ConformancePackInputParameter("error", "blanditiis") {{
                                        parameterName = "corrupti";
                                        parameterValue = "at";
                                    }}),
                                    add(new ConformancePackInputParameter("atque", "atque") {{
                                        parameterName = "suscipit";
                                        parameterValue = "repudiandae";
                                    }}),
                                }};
                                deliveryS3Bucket = "sunt";
                                deliveryS3KeyPrefix = "recusandae";
                                templateBody = "dolorum";
                                templateS3Uri = "repellendus";
                                templateSSMDocumentDetails = new TemplateSSMDocumentDetails("labore") {{
                                    documentVersion = "reiciendis";
                                }};;
                            }};, PutConformancePackXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_CONFORMANCE_PACK) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "dicta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "enim";
            }};            

            PutConformancePackResponse res = sdk.sdk.putConformancePack(req);

            if (res.putConformancePackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDeliveryChannel

<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDeliveryChannelRequest;
import org.openapis.openapi.models.operations.PutDeliveryChannelResponse;
import org.openapis.openapi.models.operations.PutDeliveryChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigSnapshotDeliveryProperties;
import org.openapis.openapi.models.shared.DeliveryChannel;
import org.openapis.openapi.models.shared.MaximumExecutionFrequencyEnum;
import org.openapis.openapi.models.shared.PutDeliveryChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDeliveryChannelRequest req = new PutDeliveryChannelRequest(                new PutDeliveryChannelRequest(                new DeliveryChannel() {{
                                                configSnapshotDeliveryProperties = new ConfigSnapshotDeliveryProperties() {{
                                                    deliveryFrequency = MaximumExecutionFrequencyEnum.THREE_HOURS;
                                                }};;
                                                name = "Ross Gusikowski";
                                                s3BucketName = "occaecati";
                                                s3KeyPrefix = "officiis";
                                                s3KmsKeyArn = "perspiciatis";
                                                snsTopicARN = "in";
                                            }};);, PutDeliveryChannelXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_DELIVERY_CHANNEL) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "occaecati";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quis";
            }};            

            PutDeliveryChannelResponse res = sdk.sdk.putDeliveryChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEvaluations

Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEvaluationsRequest;
import org.openapis.openapi.models.operations.PutEvaluationsResponse;
import org.openapis.openapi.models.operations.PutEvaluationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.Evaluation;
import org.openapis.openapi.models.shared.PutEvaluationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEvaluationsRequest req = new PutEvaluationsRequest(                new PutEvaluationsRequest("error") {{
                                evaluations = new org.openapis.openapi.models.shared.Evaluation[]{{
                                    add(new Evaluation("iure", "ipsa", ComplianceTypeEnum.NOT_APPLICABLE, OffsetDateTime.parse("2022-07-11T17:54:29.915Z")) {{
                                        annotation = "corporis";
                                        complianceResourceId = "quidem";
                                        complianceResourceType = "eveniet";
                                        complianceType = ComplianceTypeEnum.COMPLIANT;
                                        orderingTimestamp = OffsetDateTime.parse("2022-11-18T14:54:13.655Z");
                                    }}),
                                }};
                                testMode = false;
                            }};, PutEvaluationsXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_EVALUATIONS) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cum";
                xAmzDate = "iure";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "laborum";
            }};            

            PutEvaluationsResponse res = sdk.sdk.putEvaluations(req);

            if (res.putEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putExternalEvaluation

Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutExternalEvaluationRequest;
import org.openapis.openapi.models.operations.PutExternalEvaluationResponse;
import org.openapis.openapi.models.operations.PutExternalEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceTypeEnum;
import org.openapis.openapi.models.shared.ExternalEvaluation;
import org.openapis.openapi.models.shared.PutExternalEvaluationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutExternalEvaluationRequest req = new PutExternalEvaluationRequest(                new PutExternalEvaluationRequest("voluptatum",                 new ExternalEvaluation("rem", "aliquam", ComplianceTypeEnum.NON_COMPLIANT, OffsetDateTime.parse("2022-12-28T14:32:37.413Z")) {{
                                                annotation = "corporis";
                                            }};);, PutExternalEvaluationXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_EXTERNAL_EVALUATION) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "mollitia";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "alias";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "reiciendis";
            }};            

            PutExternalEvaluationResponse res = sdk.sdk.putExternalEvaluation(req);

            if (res.putExternalEvaluationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganizationConfigRule

<p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganizationConfigRuleRequest;
import org.openapis.openapi.models.operations.PutOrganizationConfigRuleResponse;
import org.openapis.openapi.models.operations.PutOrganizationConfigRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.MaximumExecutionFrequencyEnum;
import org.openapis.openapi.models.shared.OrganizationConfigRuleTriggerTypeEnum;
import org.openapis.openapi.models.shared.OrganizationConfigRuleTriggerTypeNoSNEnum;
import org.openapis.openapi.models.shared.OrganizationCustomPolicyRuleMetadata;
import org.openapis.openapi.models.shared.OrganizationCustomRuleMetadata;
import org.openapis.openapi.models.shared.OrganizationManagedRuleMetadata;
import org.openapis.openapi.models.shared.PutOrganizationConfigRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOrganizationConfigRuleRequest req = new PutOrganizationConfigRuleRequest(                new PutOrganizationConfigRuleRequest("id") {{
                                excludedAccounts = new String[]{{
                                    add("dolore"),
                                    add("dolorum"),
                                }};
                                organizationCustomPolicyRuleMetadata = new OrganizationCustomPolicyRuleMetadata("nesciunt", "quae") {{
                                    debugLogDeliveryAccounts = new String[]{{
                                        add("omnis"),
                                        add("quaerat"),
                                        add("molestiae"),
                                        add("ex"),
                                    }};
                                    description = "ut";
                                    inputParameters = "culpa";
                                    maximumExecutionFrequency = MaximumExecutionFrequencyEnum.THREE_HOURS;
                                    organizationConfigRuleTriggerTypes = new org.openapis.openapi.models.shared.OrganizationConfigRuleTriggerTypeNoSNEnum[]{{
                                        add(OrganizationConfigRuleTriggerTypeNoSNEnum.OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION),
                                        add(OrganizationConfigRuleTriggerTypeNoSNEnum.CONFIGURATION_ITEM_CHANGE_NOTIFICATION),
                                        add(OrganizationConfigRuleTriggerTypeNoSNEnum.CONFIGURATION_ITEM_CHANGE_NOTIFICATION),
                                        add(OrganizationConfigRuleTriggerTypeNoSNEnum.OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION),
                                    }};
                                    resourceIdScope = "esse";
                                    resourceTypesScope = new String[]{{
                                        add("quis"),
                                        add("eum"),
                                        add("reiciendis"),
                                    }};
                                    tagKeyScope = "provident";
                                    tagValueScope = "aspernatur";
                                }};;
                                organizationCustomRuleMetadata = new OrganizationCustomRuleMetadata("ullam",                 new org.openapis.openapi.models.shared.OrganizationConfigRuleTriggerTypeEnum[]{{
                                                    add(OrganizationConfigRuleTriggerTypeEnum.OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION),
                                                }}) {{
                                    description = "nostrum";
                                    inputParameters = "mollitia";
                                    maximumExecutionFrequency = MaximumExecutionFrequencyEnum.SIX_HOURS;
                                    resourceIdScope = "possimus";
                                    resourceTypesScope = new String[]{{
                                        add("ex"),
                                        add("aliquid"),
                                        add("accusantium"),
                                    }};
                                    tagKeyScope = "repellat";
                                    tagValueScope = "doloribus";
                                }};;
                                organizationManagedRuleMetadata = new OrganizationManagedRuleMetadata("ullam") {{
                                    description = "in";
                                    inputParameters = "nam";
                                    maximumExecutionFrequency = MaximumExecutionFrequencyEnum.TWENTY_FOUR_HOURS;
                                    resourceIdScope = "officia";
                                    resourceTypesScope = new String[]{{
                                        add("placeat"),
                                        add("modi"),
                                        add("voluptatibus"),
                                    }};
                                    tagKeyScope = "molestias";
                                    tagValueScope = "officiis";
                                }};;
                            }};, PutOrganizationConfigRuleXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFIG_RULE) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "vitae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "inventore";
            }};            

            PutOrganizationConfigRuleResponse res = sdk.sdk.putOrganizationConfigRule(req);

            if (res.putOrganizationConfigRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganizationConformancePack

<p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganizationConformancePackRequest;
import org.openapis.openapi.models.operations.PutOrganizationConformancePackResponse;
import org.openapis.openapi.models.operations.PutOrganizationConformancePackXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConformancePackInputParameter;
import org.openapis.openapi.models.shared.PutOrganizationConformancePackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOrganizationConformancePackRequest req = new PutOrganizationConformancePackRequest(                new PutOrganizationConformancePackRequest("cumque") {{
                                conformancePackInputParameters = new org.openapis.openapi.models.shared.ConformancePackInputParameter[]{{
                                    add(new ConformancePackInputParameter("aspernatur", "eum") {{
                                        parameterName = "perferendis";
                                        parameterValue = "velit";
                                    }}),
                                }};
                                deliveryS3Bucket = "eius";
                                deliveryS3KeyPrefix = "rem";
                                excludedAccounts = new String[]{{
                                    add("impedit"),
                                    add("eos"),
                                    add("sapiente"),
                                    add("eum"),
                                }};
                                templateBody = "dicta";
                                templateS3Uri = "minima";
                            }};, PutOrganizationConformancePackXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFORMANCE_PACK) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "provident";
                xAmzDate = "earum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "illum";
            }};            

            PutOrganizationConformancePackResponse res = sdk.sdk.putOrganizationConformancePack(req);

            if (res.putOrganizationConformancePackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRemediationConfigurations

<p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRemediationConfigurationsRequest;
import org.openapis.openapi.models.operations.PutRemediationConfigurationsResponse;
import org.openapis.openapi.models.operations.PutRemediationConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecutionControls;
import org.openapis.openapi.models.shared.PutRemediationConfigurationsRequest;
import org.openapis.openapi.models.shared.RemediationConfiguration;
import org.openapis.openapi.models.shared.RemediationParameterValue;
import org.openapis.openapi.models.shared.RemediationTargetTypeEnum;
import org.openapis.openapi.models.shared.ResourceValue;
import org.openapis.openapi.models.shared.ResourceValueTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmControls;
import org.openapis.openapi.models.shared.StaticValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRemediationConfigurationsRequest req = new PutRemediationConfigurationsRequest(                new PutRemediationConfigurationsRequest(                new org.openapis.openapi.models.shared.RemediationConfiguration[]{{
                                                add(new RemediationConfiguration("quasi", "magni", RemediationTargetTypeEnum.SSM_DOCUMENT) {{
                                                    arn = "perspiciatis";
                                                    automatic = false;
                                                    configRuleName = "maiores";
                                                    createdByService = "debitis";
                                                    executionControls = new ExecutionControls() {{
                                                        ssmControls = new SsmControls() {{
                                                            concurrentExecutionRatePercentage = 399802L;
                                                            errorPercentage = 780931L;
                                                        }};
                                                    }};
                                                    maximumAutomaticAttempts = 380335L;
                                                    parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.RemediationParameterValue>() {{
                                                        put("fugit", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("consequatur"),
                                                                                add("quasi"),
                                                                                add("et"),
                                                                                add("ducimus"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("fuga"),
                                                                    add("ratione"),
                                                                    add("animi"),
                                                                    add("necessitatibus"),
                                                                }};
                                                            }};
                                                        }});
                                                    }};
                                                    resourceType = "natus";
                                                    retryAttemptSeconds = 581082L;
                                                    targetId = "suscipit";
                                                    targetType = RemediationTargetTypeEnum.SSM_DOCUMENT;
                                                    targetVersion = "adipisci";
                                                }}),
                                                add(new RemediationConfiguration("sunt", "nostrum", RemediationTargetTypeEnum.SSM_DOCUMENT) {{
                                                    arn = "doloribus";
                                                    automatic = false;
                                                    configRuleName = "nulla";
                                                    createdByService = "necessitatibus";
                                                    executionControls = new ExecutionControls() {{
                                                        ssmControls = new SsmControls() {{
                                                            concurrentExecutionRatePercentage = 58534L;
                                                            errorPercentage = 271113L;
                                                        }};
                                                    }};
                                                    maximumAutomaticAttempts = 470621L;
                                                    parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.RemediationParameterValue>() {{
                                                        put("dicta", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("reiciendis"),
                                                                                add("vel"),
                                                                                add("architecto"),
                                                                                add("fugiat"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("esse"),
                                                                    add("praesentium"),
                                                                }};
                                                            }};
                                                        }});
                                                        put("doloremque", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("esse"),
                                                                                add("ex"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("odio"),
                                                                }};
                                                            }};
                                                        }});
                                                    }};
                                                    resourceType = "consectetur";
                                                    retryAttemptSeconds = 399812L;
                                                    targetId = "ipsa";
                                                    targetType = RemediationTargetTypeEnum.SSM_DOCUMENT;
                                                    targetVersion = "laborum";
                                                }}),
                                                add(new RemediationConfiguration("libero", "ad", RemediationTargetTypeEnum.SSM_DOCUMENT) {{
                                                    arn = "fugiat";
                                                    automatic = false;
                                                    configRuleName = "expedita";
                                                    createdByService = "aliquid";
                                                    executionControls = new ExecutionControls() {{
                                                        ssmControls = new SsmControls() {{
                                                            concurrentExecutionRatePercentage = 639187L;
                                                            errorPercentage = 381397L;
                                                        }};
                                                    }};
                                                    maximumAutomaticAttempts = 399161L;
                                                    parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.RemediationParameterValue>() {{
                                                        put("eum", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("error"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("iste"),
                                                                    add("id"),
                                                                }};
                                                            }};
                                                        }});
                                                    }};
                                                    resourceType = "possimus";
                                                    retryAttemptSeconds = 913992L;
                                                    targetId = "mollitia";
                                                    targetType = RemediationTargetTypeEnum.SSM_DOCUMENT;
                                                    targetVersion = "laborum";
                                                }}),
                                                add(new RemediationConfiguration("voluptatem", "alias", RemediationTargetTypeEnum.SSM_DOCUMENT) {{
                                                    arn = "deleniti";
                                                    automatic = false;
                                                    configRuleName = "enim";
                                                    createdByService = "vitae";
                                                    executionControls = new ExecutionControls() {{
                                                        ssmControls = new SsmControls() {{
                                                            concurrentExecutionRatePercentage = 833316L;
                                                            errorPercentage = 405036L;
                                                        }};
                                                    }};
                                                    maximumAutomaticAttempts = 775803L;
                                                    parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.RemediationParameterValue>() {{
                                                        put("ut", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("cum"),
                                                                                add("aliquid"),
                                                                                add("beatae"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("expedita"),
                                                                    add("voluptatem"),
                                                                }};
                                                            }};
                                                        }});
                                                        put("voluptatum", new RemediationParameterValue() {{
                                                            resourceValue = new ResourceValue(ResourceValueTypeEnum.RESOURCE_ID) {{
                                                                value = ResourceValueTypeEnum.RESOURCE_ID;
                                                            }};
                                                            staticValue = new StaticValue(                new String[]{{
                                                                                add("voluptatem"),
                                                                                add("sapiente"),
                                                                                add("officiis"),
                                                                            }}) {{
                                                                values = new String[]{{
                                                                    add("veritatis"),
                                                                    add("rerum"),
                                                                    add("est"),
                                                                }};
                                                            }};
                                                        }});
                                                    }};
                                                    resourceType = "architecto";
                                                    retryAttemptSeconds = 682119L;
                                                    targetId = "pariatur";
                                                    targetType = RemediationTargetTypeEnum.SSM_DOCUMENT;
                                                    targetVersion = "debitis";
                                                }}),
                                            }});, PutRemediationConfigurationsXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_REMEDIATION_CONFIGURATIONS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "earum";
                xAmzCredential = "ex";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "rem";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "nemo";
            }};            

            PutRemediationConfigurationsResponse res = sdk.sdk.putRemediationConfigurations(req);

            if (res.putRemediationConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRemediationExceptions

<p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRemediationExceptionsRequest;
import org.openapis.openapi.models.operations.PutRemediationExceptionsResponse;
import org.openapis.openapi.models.operations.PutRemediationExceptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRemediationExceptionsRequest;
import org.openapis.openapi.models.shared.RemediationExceptionResourceKey;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRemediationExceptionsRequest req = new PutRemediationExceptionsRequest(                new PutRemediationExceptionsRequest("ratione",                 new org.openapis.openapi.models.shared.RemediationExceptionResourceKey[]{{
                                                add(new RemediationExceptionResourceKey() {{
                                                    resourceId = "perferendis";
                                                    resourceType = "illum";
                                                }}),
                                                add(new RemediationExceptionResourceKey() {{
                                                    resourceId = "totam";
                                                    resourceType = "impedit";
                                                }}),
                                            }}) {{
                                expirationTime = OffsetDateTime.parse("2020-11-03T00:32:12.114Z");
                                message = "ipsam";
                            }};, PutRemediationExceptionsXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_REMEDIATION_EXCEPTIONS) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "aliquam";
                xAmzDate = "inventore";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "tempora";
            }};            

            PutRemediationExceptionsResponse res = sdk.sdk.putRemediationExceptions(req);

            if (res.putRemediationExceptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourceConfig

<p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourceConfigRequest;
import org.openapis.openapi.models.operations.PutResourceConfigResponse;
import org.openapis.openapi.models.operations.PutResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourceConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourceConfigRequest req = new PutResourceConfigRequest(                new PutResourceConfigRequest("consequatur", "architecto", "sit", "modi") {{
                                resourceName = "fugit";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laudantium", "quae");
                                }};
                            }};, PutResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ipsam";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "eveniet";
            }};            

            PutResourceConfigResponse res = sdk.sdk.putResourceConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRetentionConfiguration

<p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRetentionConfigurationRequest;
import org.openapis.openapi.models.operations.PutRetentionConfigurationResponse;
import org.openapis.openapi.models.operations.PutRetentionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRetentionConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRetentionConfigurationRequest req = new PutRetentionConfigurationRequest(                new PutRetentionConfigurationRequest(884952L);, PutRetentionConfigurationXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_RETENTION_CONFIGURATION) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sed";
                xAmzDate = "veniam";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "eum";
            }};            

            PutRetentionConfigurationResponse res = sdk.sdk.putRetentionConfiguration(req);

            if (res.putRetentionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putStoredQuery

<p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutStoredQueryRequest;
import org.openapis.openapi.models.operations.PutStoredQueryResponse;
import org.openapis.openapi.models.operations.PutStoredQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutStoredQueryRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StoredQuery;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutStoredQueryRequest req = new PutStoredQueryRequest(                new PutStoredQueryRequest(                new StoredQuery("voluptatum") {{
                                                description = "magnam";
                                                expression = "exercitationem";
                                                queryArn = "ab";
                                                queryId = "porro";
                                            }};) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "nobis";
                                        value = "laboriosam";
                                    }}),
                                    add(new Tag() {{
                                        key = "recusandae";
                                        value = "consequuntur";
                                    }}),
                                }};
                            }};, PutStoredQueryXAmzTargetEnum.STARLING_DOVE_SERVICE_PUT_STORED_QUERY) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "necessitatibus";
                xAmzDate = "quasi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "vero";
            }};            

            PutStoredQueryResponse res = sdk.sdk.putStoredQuery(req);

            if (res.putStoredQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## selectAggregateResourceConfig

<p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SelectAggregateResourceConfigRequest;
import org.openapis.openapi.models.operations.SelectAggregateResourceConfigResponse;
import org.openapis.openapi.models.operations.SelectAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectAggregateResourceConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SelectAggregateResourceConfigRequest req = new SelectAggregateResourceConfigRequest(                new SelectAggregateResourceConfigRequest("harum", "sequi") {{
                                limit = 987349L;
                                maxResults = 918092L;
                                nextToken = "optio";
                            }};, SelectAggregateResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_SELECT_AGGREGATE_RESOURCE_CONFIG) {{
                limit = "occaecati";
                nextToken = "nemo";
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "officia";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quos";
            }};            

            SelectAggregateResourceConfigResponse res = sdk.sdk.selectAggregateResourceConfig(req);

            if (res.selectAggregateResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## selectResourceConfig

<p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SelectResourceConfigRequest;
import org.openapis.openapi.models.operations.SelectResourceConfigResponse;
import org.openapis.openapi.models.operations.SelectResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectResourceConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SelectResourceConfigRequest req = new SelectResourceConfigRequest(                new SelectResourceConfigRequest("aspernatur") {{
                                limit = 495970L;
                                nextToken = "nesciunt";
                            }};, SelectResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_SELECT_RESOURCE_CONFIG) {{
                limit = "fuga";
                nextToken = "laudantium";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "rem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "consequuntur";
            }};            

            SelectResourceConfigResponse res = sdk.sdk.selectResourceConfig(req);

            if (res.selectResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startConfigRulesEvaluation

<p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartConfigRulesEvaluationRequest;
import org.openapis.openapi.models.operations.StartConfigRulesEvaluationResponse;
import org.openapis.openapi.models.operations.StartConfigRulesEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartConfigRulesEvaluationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartConfigRulesEvaluationRequest req = new StartConfigRulesEvaluationRequest(                new StartConfigRulesEvaluationRequest() {{
                                configRuleNames = new String[]{{
                                    add("cupiditate"),
                                }};
                            }};, StartConfigRulesEvaluationXAmzTargetEnum.STARLING_DOVE_SERVICE_START_CONFIG_RULES_EVALUATION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "alias";
                xAmzDate = "omnis";
                xAmzSecurityToken = "eos";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "iste";
            }};            

            StartConfigRulesEvaluationResponse res = sdk.sdk.startConfigRulesEvaluation(req);

            if (res.startConfigRulesEvaluationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startConfigurationRecorder

<p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartConfigurationRecorderRequest;
import org.openapis.openapi.models.operations.StartConfigurationRecorderResponse;
import org.openapis.openapi.models.operations.StartConfigurationRecorderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartConfigurationRecorderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartConfigurationRecorderRequest req = new StartConfigurationRecorderRequest(                new StartConfigurationRecorderRequest("inventore");, StartConfigurationRecorderXAmzTargetEnum.STARLING_DOVE_SERVICE_START_CONFIGURATION_RECORDER) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "voluptatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "minima";
            }};            

            StartConfigurationRecorderResponse res = sdk.sdk.startConfigurationRecorder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRemediationExecution

<p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRemediationExecutionRequest;
import org.openapis.openapi.models.operations.StartRemediationExecutionResponse;
import org.openapis.openapi.models.operations.StartRemediationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceKey;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRemediationExecutionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRemediationExecutionRequest req = new StartRemediationExecutionRequest(                new StartRemediationExecutionRequest("maxime",                 new org.openapis.openapi.models.shared.ResourceKey[]{{
                                                add(new ResourceKey("commodi", ResourceTypeEnum.AWS_ROUTE53_RECOVERY_CONTROL_SAFETY_RULE) {{
                                                    resourceId = "temporibus";
                                                    resourceType = ResourceTypeEnum.AWS_DATA_SYNC_TASK;
                                                }}),
                                                add(new ResourceKey("earum", ResourceTypeEnum.AWSWA_FV2_IP_SET) {{
                                                    resourceId = "commodi";
                                                    resourceType = ResourceTypeEnum.AWS_EC2_TRANSIT_GATEWAY_ROUTE_TABLE;
                                                }}),
                                            }});, StartRemediationExecutionXAmzTargetEnum.STARLING_DOVE_SERVICE_START_REMEDIATION_EXECUTION) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "voluptatem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "vel";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "quasi";
            }};            

            StartRemediationExecutionResponse res = sdk.sdk.startRemediationExecution(req);

            if (res.startRemediationExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startResourceEvaluation

<p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartResourceEvaluationRequest;
import org.openapis.openapi.models.operations.StartResourceEvaluationResponse;
import org.openapis.openapi.models.operations.StartResourceEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EvaluationContext;
import org.openapis.openapi.models.shared.EvaluationModeEnum;
import org.openapis.openapi.models.shared.ResourceConfigurationSchemaTypeEnum;
import org.openapis.openapi.models.shared.ResourceDetails;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartResourceEvaluationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartResourceEvaluationRequest req = new StartResourceEvaluationRequest(                new StartResourceEvaluationRequest(EvaluationModeEnum.PROACTIVE,                 new ResourceDetails("enim", "sint", "nulla") {{
                                                resourceConfigurationSchemaType = ResourceConfigurationSchemaTypeEnum.CFN_RESOURCE_SCHEMA;
                                            }};) {{
                                clientToken = "deserunt";
                                evaluationContext = new EvaluationContext() {{
                                    evaluationContextIdentifier = "esse";
                                }};;
                                evaluationTimeout = 364463L;
                            }};, StartResourceEvaluationXAmzTargetEnum.STARLING_DOVE_SERVICE_START_RESOURCE_EVALUATION) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "est";
                xAmzCredential = "quis";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "hic";
            }};            

            StartResourceEvaluationResponse res = sdk.sdk.startResourceEvaluation(req);

            if (res.startResourceEvaluationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopConfigurationRecorder

Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopConfigurationRecorderRequest;
import org.openapis.openapi.models.operations.StopConfigurationRecorderResponse;
import org.openapis.openapi.models.operations.StopConfigurationRecorderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopConfigurationRecorderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopConfigurationRecorderRequest req = new StopConfigurationRecorderRequest(                new StopConfigurationRecorderRequest("asperiores");, StopConfigurationRecorderXAmzTargetEnum.STARLING_DOVE_SERVICE_STOP_CONFIGURATION_RECORDER) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "debitis";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "fuga";
            }};            

            StopConfigurationRecorderResponse res = sdk.sdk.stopConfigurationRecorder(req);

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

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.

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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("consectetur",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "atque";
                                                    value = "ipsum";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.STARLING_DOVE_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "soluta";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("sequi",                 new String[]{{
                                                add("neque"),
                                                add("quo"),
                                            }});, UntagResourceXAmzTargetEnum.STARLING_DOVE_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "iure";
                xAmzDate = "odit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "magnam";
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
