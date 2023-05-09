# SDK

## Overview

<fullname>Config</fullname> <p>Config provides a way to keep track of the configurations of all the Amazon Web Services resources associated with your Amazon Web Services account. You can use Config to get the current and historical configurations of each Amazon Web Services resource and also to get information about the relationship between the resources. An Amazon Web Services resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p> <p>You can access and manage Config through the Amazon Web Services Management Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config API, or the Amazon Web Services SDKs for Config. This reference guide contains documentation for the Config API and the Amazon Web Services CLI commands that you can use to manage Config. The Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. For detailed information about Config features and their associated actions or commands, as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/config/>
### Available Operations

* [BatchGetAggregateResourceConfig](#batchgetaggregateresourceconfig) - <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
* [BatchGetResourceConfig](#batchgetresourceconfig) - <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
* [DeleteAggregationAuthorization](#deleteaggregationauthorization) - Deletes the authorization granted to the specified configuration aggregator account in a specified region.
* [DeleteConfigRule](#deleteconfigrule) - <p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
* [DeleteConfigurationAggregator](#deleteconfigurationaggregator) - Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
* [DeleteConfigurationRecorder](#deleteconfigurationrecorder) - <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>
* [DeleteConformancePack](#deleteconformancepack) - <p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
* [DeleteDeliveryChannel](#deletedeliverychannel) - <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
* [DeleteEvaluationResults](#deleteevaluationresults) - Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.
* [DeleteOrganizationConfigRule](#deleteorganizationconfigrule) - <p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
* [DeleteOrganizationConformancePack](#deleteorganizationconformancepack) - <p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
* [DeletePendingAggregationRequest](#deletependingaggregationrequest) - Deletes pending authorization requests for a specified aggregator account in a specified region.
* [DeleteRemediationConfiguration](#deleteremediationconfiguration) - Deletes the remediation configuration.
* [DeleteRemediationExceptions](#deleteremediationexceptions) - <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>
* [DeleteResourceConfig](#deleteresourceconfig) - Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 
* [DeleteRetentionConfiguration](#deleteretentionconfiguration) - Deletes the retention configuration.
* [DeleteStoredQuery](#deletestoredquery) - Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.
* [DeliverConfigSnapshot](#deliverconfigsnapshot) - <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
* [DescribeAggregateComplianceByConfigRules](#describeaggregatecompliancebyconfigrules) - <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [DescribeAggregateComplianceByConformancePacks](#describeaggregatecompliancebyconformancepacks) - <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [DescribeAggregationAuthorizations](#describeaggregationauthorizations) - Returns a list of authorizations granted to various aggregator accounts and regions.
* [DescribeComplianceByConfigRule](#describecompliancebyconfigrule) - <p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
* [DescribeComplianceByResource](#describecompliancebyresource) - <p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
* [DescribeConfigRuleEvaluationStatus](#describeconfigruleevaluationstatus) - Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.
* [DescribeConfigRules](#describeconfigrules) - Returns details about your Config rules.
* [DescribeConfigurationAggregatorSourcesStatus](#describeconfigurationaggregatorsourcesstatus) - Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 
* [DescribeConfigurationAggregators](#describeconfigurationaggregators) - Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 
* [DescribeConfigurationRecorderStatus](#describeconfigurationrecorderstatus) - <p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>
* [DescribeConfigurationRecorders](#describeconfigurationrecorders) - <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
* [DescribeConformancePackCompliance](#describeconformancepackcompliance) - <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
* [DescribeConformancePackStatus](#describeconformancepackstatus) - <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
* [DescribeConformancePacks](#describeconformancepacks) - Returns a list of one or more conformance packs.
* [DescribeDeliveryChannelStatus](#describedeliverychannelstatus) - <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
* [DescribeDeliveryChannels](#describedeliverychannels) - <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
* [DescribeOrganizationConfigRuleStatuses](#describeorganizationconfigrulestatuses) - <p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>
* [DescribeOrganizationConfigRules](#describeorganizationconfigrules) - <p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
* [DescribeOrganizationConformancePackStatuses](#describeorganizationconformancepackstatuses) - <p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>
* [DescribeOrganizationConformancePacks](#describeorganizationconformancepacks) - <p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
* [DescribePendingAggregationRequests](#describependingaggregationrequests) - Returns a list of all pending aggregation requests.
* [DescribeRemediationConfigurations](#describeremediationconfigurations) - Returns the details of one or more remediation configurations.
* [DescribeRemediationExceptions](#describeremediationexceptions) - <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
* [DescribeRemediationExecutionStatus](#describeremediationexecutionstatus) - Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.
* [DescribeRetentionConfigurations](#describeretentionconfigurations) - <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
* [GetAggregateComplianceDetailsByConfigRule](#getaggregatecompliancedetailsbyconfigrule) - <p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
* [GetAggregateConfigRuleComplianceSummary](#getaggregateconfigrulecompliancesummary) - <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
* [GetAggregateConformancePackComplianceSummary](#getaggregateconformancepackcompliancesummary) - <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
* [GetAggregateDiscoveredResourceCounts](#getaggregatediscoveredresourcecounts) - <p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
* [GetAggregateResourceConfig](#getaggregateresourceconfig) - Returns configuration item that is aggregated for your specific resource in a specific source account and region.
* [GetComplianceDetailsByConfigRule](#getcompliancedetailsbyconfigrule) - Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
* [GetComplianceDetailsByResource](#getcompliancedetailsbyresource) - Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.
* [GetComplianceSummaryByConfigRule](#getcompliancesummarybyconfigrule) - Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
* [GetComplianceSummaryByResourceType](#getcompliancesummarybyresourcetype) - Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
* [GetConformancePackComplianceDetails](#getconformancepackcompliancedetails) - Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.
* [GetConformancePackComplianceSummary](#getconformancepackcompliancesummary) - Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
* [GetCustomRulePolicy](#getcustomrulepolicy) - Returns the policy definition containing the logic for your Config Custom Policy rule.
* [GetDiscoveredResourceCounts](#getdiscoveredresourcecounts) - <p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
* [GetOrganizationConfigRuleDetailedStatus](#getorganizationconfigruledetailedstatus) - Returns detailed status for each member account within an organization for a given organization Config rule.
* [GetOrganizationConformancePackDetailedStatus](#getorganizationconformancepackdetailedstatus) - Returns detailed status for each member account within an organization for a given organization conformance pack.
* [GetOrganizationCustomRulePolicy](#getorganizationcustomrulepolicy) - Returns the policy definition containing the logic for your organization Config Custom Policy rule.
* [GetResourceConfigHistory](#getresourceconfighistory) - <p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
* [GetResourceEvaluationSummary](#getresourceevaluationsummary) - <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>
* [GetStoredQuery](#getstoredquery) - Returns the details of a specific stored query.
* [ListAggregateDiscoveredResources](#listaggregatediscoveredresources) - <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
* [ListConformancePackComplianceScores](#listconformancepackcompliancescores) - <p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>
* [ListDiscoveredResources](#listdiscoveredresources) - <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
* [ListResourceEvaluations](#listresourceevaluations) - Returns a list of proactive resource evaluations.
* [ListStoredQueries](#liststoredqueries) - Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 
* [ListTagsForResource](#listtagsforresource) - List the tags for Config resource.
* [PutAggregationAuthorization](#putaggregationauthorization) - <p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [PutConfigRule](#putconfigrule) - <p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [PutConfigurationAggregator](#putconfigurationaggregator) - <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [PutConfigurationRecorder](#putconfigurationrecorder) - <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
* [PutConformancePack](#putconformancepack) - <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>
* [PutDeliveryChannel](#putdeliverychannel) - <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
* [PutEvaluations](#putevaluations) - Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.
* [PutExternalEvaluation](#putexternalevaluation) - Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.
* [PutOrganizationConfigRule](#putorganizationconfigrule) - <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>
* [PutOrganizationConformancePack](#putorganizationconformancepack) - <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>
* [PutRemediationConfigurations](#putremediationconfigurations) - <p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>
* [PutRemediationExceptions](#putremediationexceptions) - <p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>
* [PutResourceConfig](#putresourceconfig) - <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>
* [PutRetentionConfiguration](#putretentionconfiguration) - <p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
* [PutStoredQuery](#putstoredquery) - <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [SelectAggregateResourceConfig](#selectaggregateresourceconfig) - <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>
* [SelectResourceConfig](#selectresourceconfig) - <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>
* [StartConfigRulesEvaluation](#startconfigrulesevaluation) - <p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
* [StartConfigurationRecorder](#startconfigurationrecorder) - <p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
* [StartRemediationExecution](#startremediationexecution) - <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
* [StartResourceEvaluation](#startresourceevaluation) - <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>
* [StopConfigurationRecorder](#stopconfigurationrecorder) - Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.

## BatchGetAggregateResourceConfig

<p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetAggregateResourceConfig(ctx, operations.BatchGetAggregateResourceConfigRequest{
        BatchGetAggregateResourceConfigRequest: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "excepturi",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "recusandae",
                    ResourceName: sdk.String("temporibus"),
                    ResourceType: shared.ResourceTypeEnumAwsEc2VpcEndpointService,
                    SourceAccountID: "quis",
                    SourceRegion: "veritatis",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "deserunt",
                    ResourceName: sdk.String("perferendis"),
                    ResourceType: shared.ResourceTypeEnumAwsBackupRecoveryPoint,
                    SourceAccountID: "repellendus",
                    SourceRegion: "sapiente",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.BatchGetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetAggregateResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAggregateResourceConfigResponse != nil {
        // handle response
    }
}
```

## BatchGetResourceConfig

<p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetResourceConfig(ctx, operations.BatchGetResourceConfigRequest{
        BatchGetResourceConfigRequest: shared.BatchGetResourceConfigRequest{
            ResourceKeys: []shared.ResourceKey{
                shared.ResourceKey{
                    ResourceID: "esse",
                    ResourceType: shared.ResourceTypeEnumAwsEc2TransitGatewayRouteTable,
                },
                shared.ResourceKey{
                    ResourceID: "porro",
                    ResourceType: shared.ResourceTypeEnumAwsFisExperimentTemplate,
                },
                shared.ResourceKey{
                    ResourceID: "dicta",
                    ResourceType: shared.ResourceTypeEnumAwsEventSchemasDiscoverer,
                },
                shared.ResourceKey{
                    ResourceID: "officia",
                    ResourceType: shared.ResourceTypeEnumAwsServiceDiscoveryService,
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.BatchGetResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetResourceConfigResponse != nil {
        // handle response
    }
}
```

## DeleteAggregationAuthorization

Deletes the authorization granted to the specified configuration aggregator account in a specified region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAggregationAuthorization(ctx, operations.DeleteAggregationAuthorizationRequest{
        DeleteAggregationAuthorizationRequest: shared.DeleteAggregationAuthorizationRequest{
            AuthorizedAccountID: "molestiae",
            AuthorizedAwsRegion: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DeleteAggregationAuthorizationXAmzTargetEnumStarlingDoveServiceDeleteAggregationAuthorization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConfigRule

<p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfigRule(ctx, operations.DeleteConfigRuleRequest{
        DeleteConfigRuleRequest: shared.DeleteConfigRuleRequest{
            ConfigRuleName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.DeleteConfigRuleXAmzTargetEnumStarlingDoveServiceDeleteConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConfigurationAggregator

Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfigurationAggregator(ctx, operations.DeleteConfigurationAggregatorRequest{
        DeleteConfigurationAggregatorRequest: shared.DeleteConfigurationAggregatorRequest{
            ConfigurationAggregatorName: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteConfigurationAggregatorXAmzTargetEnumStarlingDoveServiceDeleteConfigurationAggregator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConfigurationRecorder

<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfigurationRecorder(ctx, operations.DeleteConfigurationRecorderRequest{
        DeleteConfigurationRecorderRequest: shared.DeleteConfigurationRecorderRequest{
            ConfigurationRecorderName: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteConfigurationRecorderXAmzTargetEnumStarlingDoveServiceDeleteConfigurationRecorder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConformancePack

<p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConformancePack(ctx, operations.DeleteConformancePackRequest{
        DeleteConformancePackRequest: shared.DeleteConformancePackRequest{
            ConformancePackName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.DeleteConformancePackXAmzTargetEnumStarlingDoveServiceDeleteConformancePack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeliveryChannel

<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDeliveryChannel(ctx, operations.DeleteDeliveryChannelRequest{
        DeleteDeliveryChannelRequest: shared.DeleteDeliveryChannelRequest{
            DeliveryChannelName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DeleteDeliveryChannelXAmzTargetEnumStarlingDoveServiceDeleteDeliveryChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEvaluationResults

Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteEvaluationResults(ctx, operations.DeleteEvaluationResultsRequest{
        DeleteEvaluationResultsRequest: shared.DeleteEvaluationResultsRequest{
            ConfigRuleName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DeleteEvaluationResultsXAmzTargetEnumStarlingDoveServiceDeleteEvaluationResults,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEvaluationResultsResponse != nil {
        // handle response
    }
}
```

## DeleteOrganizationConfigRule

<p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOrganizationConfigRule(ctx, operations.DeleteOrganizationConfigRuleRequest{
        DeleteOrganizationConfigRuleRequest: shared.DeleteOrganizationConfigRuleRequest{
            OrganizationConfigRuleName: "quam",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteOrganizationConfigRuleXAmzTargetEnumStarlingDoveServiceDeleteOrganizationConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationConformancePack

<p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOrganizationConformancePack(ctx, operations.DeleteOrganizationConformancePackRequest{
        DeleteOrganizationConformancePackRequest: shared.DeleteOrganizationConformancePackRequest{
            OrganizationConformancePackName: "animi",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DeleteOrganizationConformancePackXAmzTargetEnumStarlingDoveServiceDeleteOrganizationConformancePack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePendingAggregationRequest

Deletes pending authorization requests for a specified aggregator account in a specified region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePendingAggregationRequest(ctx, operations.DeletePendingAggregationRequestRequest{
        DeletePendingAggregationRequestRequest: shared.DeletePendingAggregationRequestRequest{
            RequesterAccountID: "possimus",
            RequesterAwsRegion: "aut",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DeletePendingAggregationRequestXAmzTargetEnumStarlingDoveServiceDeletePendingAggregationRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRemediationConfiguration

Deletes the remediation configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRemediationConfiguration(ctx, operations.DeleteRemediationConfigurationRequest{
        DeleteRemediationConfigurationRequest: shared.DeleteRemediationConfigurationRequest{
            ConfigRuleName: "vero",
            ResourceType: sdk.String("nihil"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteRemediationConfigurationXAmzTargetEnumStarlingDoveServiceDeleteRemediationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRemediationConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteRemediationExceptions

<p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRemediationExceptions(ctx, operations.DeleteRemediationExceptionsRequest{
        DeleteRemediationExceptionsRequest: shared.DeleteRemediationExceptionsRequest{
            ConfigRuleName: "doloremque",
            ResourceKeys: []shared.RemediationExceptionResourceKey{
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("ut"),
                    ResourceType: sdk.String("maiores"),
                },
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("dicta"),
                    ResourceType: sdk.String("corporis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DeleteRemediationExceptionsXAmzTargetEnumStarlingDoveServiceDeleteRemediationExceptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRemediationExceptionsResponse != nil {
        // handle response
    }
}
```

## DeleteResourceConfig

Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourceConfig(ctx, operations.DeleteResourceConfigRequest{
        DeleteResourceConfigRequest: shared.DeleteResourceConfigRequest{
            ResourceID: "repudiandae",
            ResourceType: "quae",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.DeleteResourceConfigXAmzTargetEnumStarlingDoveServiceDeleteResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRetentionConfiguration

Deletes the retention configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRetentionConfiguration(ctx, operations.DeleteRetentionConfigurationRequest{
        DeleteRetentionConfigurationRequest: shared.DeleteRetentionConfigurationRequest{
            RetentionConfigurationName: "rem",
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DeleteRetentionConfigurationXAmzTargetEnumStarlingDoveServiceDeleteRetentionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStoredQuery

Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStoredQuery(ctx, operations.DeleteStoredQueryRequest{
        DeleteStoredQueryRequest: shared.DeleteStoredQueryRequest{
            QueryName: "enim",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.DeleteStoredQueryXAmzTargetEnumStarlingDoveServiceDeleteStoredQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStoredQueryResponse != nil {
        // handle response
    }
}
```

## DeliverConfigSnapshot

<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeliverConfigSnapshot(ctx, operations.DeliverConfigSnapshotRequest{
        DeliverConfigSnapshotRequest: shared.DeliverConfigSnapshotRequest{
            DeliveryChannelName: "labore",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DeliverConfigSnapshotXAmzTargetEnumStarlingDoveServiceDeliverConfigSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeliverConfigSnapshotResponse != nil {
        // handle response
    }
}
```

## DescribeAggregateComplianceByConfigRules

<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAggregateComplianceByConfigRules(ctx, operations.DescribeAggregateComplianceByConfigRulesRequest{
        DescribeAggregateComplianceByConfigRulesRequest: shared.DescribeAggregateComplianceByConfigRulesRequest{
            ConfigurationAggregatorName: "assumenda",
            Filters: &shared.ConfigRuleComplianceFilters{
                AccountID: sdk.String("ipsam"),
                AwsRegion: sdk.String("alias"),
                ComplianceType: shared.ComplianceTypeEnumCompliant.ToPointer(),
                ConfigRuleName: sdk.String("dolorum"),
            },
            Limit: sdk.Int64(569618),
            NextToken: sdk.String("tempora"),
        },
        Limit: sdk.String("facilis"),
        NextToken: sdk.String("tempore"),
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DescribeAggregateComplianceByConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeAggregateComplianceByConfigRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAggregateComplianceByConfigRulesResponse != nil {
        // handle response
    }
}
```

## DescribeAggregateComplianceByConformancePacks

<p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAggregateComplianceByConformancePacks(ctx, operations.DescribeAggregateComplianceByConformancePacksRequest{
        DescribeAggregateComplianceByConformancePacksRequest: shared.DescribeAggregateComplianceByConformancePacksRequest{
            ConfigurationAggregatorName: "provident",
            Filters: &shared.AggregateConformancePackComplianceFilters{
                AccountID: sdk.String("necessitatibus"),
                AwsRegion: sdk.String("sint"),
                ComplianceType: shared.ConformancePackComplianceTypeEnumNonCompliant.ToPointer(),
                ConformancePackName: sdk.String("dolor"),
            },
            Limit: sdk.Int64(891555),
            NextToken: sdk.String("a"),
        },
        Limit: sdk.String("dolorum"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.DescribeAggregateComplianceByConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeAggregateComplianceByConformancePacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAggregateComplianceByConformancePacksResponse != nil {
        // handle response
    }
}
```

## DescribeAggregationAuthorizations

Returns a list of authorizations granted to various aggregator accounts and regions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAggregationAuthorizations(ctx, operations.DescribeAggregationAuthorizationsRequest{
        DescribeAggregationAuthorizationsRequest: shared.DescribeAggregationAuthorizationsRequest{
            Limit: sdk.Int64(813798),
            NextToken: sdk.String("ea"),
        },
        Limit: sdk.String("aliquid"),
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribeAggregationAuthorizationsXAmzTargetEnumStarlingDoveServiceDescribeAggregationAuthorizations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAggregationAuthorizationsResponse != nil {
        // handle response
    }
}
```

## DescribeComplianceByConfigRule

<p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeComplianceByConfigRule(ctx, operations.DescribeComplianceByConfigRuleRequest{
        DescribeComplianceByConfigRuleRequest: shared.DescribeComplianceByConfigRuleRequest{
            ComplianceTypes: []shared.ComplianceTypeEnum{
                shared.ComplianceTypeEnumNotApplicable,
                shared.ComplianceTypeEnumNotApplicable,
                shared.ComplianceTypeEnumNotApplicable,
            },
            ConfigRuleNames: []string{
                "sapiente",
                "amet",
                "deserunt",
            },
            NextToken: sdk.String("nisi"),
        },
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeComplianceByConfigRuleXAmzTargetEnumStarlingDoveServiceDescribeComplianceByConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComplianceByConfigRuleResponse != nil {
        // handle response
    }
}
```

## DescribeComplianceByResource

<p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeComplianceByResource(ctx, operations.DescribeComplianceByResourceRequest{
        DescribeComplianceByResourceRequest: shared.DescribeComplianceByResourceRequest{
            ComplianceTypes: []shared.ComplianceTypeEnum{
                shared.ComplianceTypeEnumNonCompliant,
                shared.ComplianceTypeEnumNonCompliant,
                shared.ComplianceTypeEnumNonCompliant,
            },
            Limit: sdk.Int64(618016),
            NextToken: sdk.String("nobis"),
            ResourceID: sdk.String("eum"),
            ResourceType: sdk.String("vero"),
        },
        Limit: sdk.String("aspernatur"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DescribeComplianceByResourceXAmzTargetEnumStarlingDoveServiceDescribeComplianceByResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComplianceByResourceResponse != nil {
        // handle response
    }
}
```

## DescribeConfigRuleEvaluationStatus

Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigRuleEvaluationStatus(ctx, operations.DescribeConfigRuleEvaluationStatusRequest{
        DescribeConfigRuleEvaluationStatusRequest: shared.DescribeConfigRuleEvaluationStatusRequest{
            ConfigRuleNames: []string{
                "mollitia",
            },
            Limit: sdk.Int64(968962),
            NextToken: sdk.String("mollitia"),
        },
        Limit: sdk.String("ad"),
        NextToken: sdk.String("eum"),
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DescribeConfigRuleEvaluationStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigRuleEvaluationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigRuleEvaluationStatusResponse != nil {
        // handle response
    }
}
```

## DescribeConfigRules

Returns details about your Config rules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigRules(ctx, operations.DescribeConfigRulesRequest{
        DescribeConfigRulesRequest: shared.DescribeConfigRulesRequest{
            ConfigRuleNames: []string{
                "eius",
                "maxime",
                "deleniti",
                "facilis",
            },
            Filters: &shared.DescribeConfigRulesFilters{
                EvaluationMode: shared.EvaluationModeEnumDetective.ToPointer(),
            },
            NextToken: sdk.String("architecto"),
        },
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DescribeConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeConfigRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigRulesResponse != nil {
        // handle response
    }
}
```

## DescribeConfigurationAggregatorSourcesStatus

Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigurationAggregatorSourcesStatus(ctx, operations.DescribeConfigurationAggregatorSourcesStatusRequest{
        DescribeConfigurationAggregatorSourcesStatusRequest: shared.DescribeConfigurationAggregatorSourcesStatusRequest{
            ConfigurationAggregatorName: "saepe",
            Limit: sdk.Int64(868126),
            NextToken: sdk.String("accusantium"),
            UpdateStatus: []shared.AggregatedSourceStatusTypeEnum{
                shared.AggregatedSourceStatusTypeEnumSucceeded,
            },
        },
        Limit: sdk.String("natus"),
        NextToken: sdk.String("magni"),
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationAggregatorSourcesStatusResponse != nil {
        // handle response
    }
}
```

## DescribeConfigurationAggregators

Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigurationAggregators(ctx, operations.DescribeConfigurationAggregatorsRequest{
        DescribeConfigurationAggregatorsRequest: shared.DescribeConfigurationAggregatorsRequest{
            ConfigurationAggregatorNames: []string{
                "ea",
            },
            Limit: sdk.Int64(33222),
            NextToken: sdk.String("ab"),
        },
        Limit: sdk.String("maiores"),
        NextToken: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DescribeConfigurationAggregatorsXAmzTargetEnumStarlingDoveServiceDescribeConfigurationAggregators,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationAggregatorsResponse != nil {
        // handle response
    }
}
```

## DescribeConfigurationRecorderStatus

<p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigurationRecorderStatus(ctx, operations.DescribeConfigurationRecorderStatusRequest{
        DescribeConfigurationRecorderStatusRequest: shared.DescribeConfigurationRecorderStatusRequest{
            ConfigurationRecorderNames: []string{
                "perferendis",
                "fugiat",
                "amet",
                "aut",
            },
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeConfigurationRecorderStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorderStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationRecorderStatusResponse != nil {
        // handle response
    }
}
```

## DescribeConfigurationRecorders

<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConfigurationRecorders(ctx, operations.DescribeConfigurationRecordersRequest{
        DescribeConfigurationRecordersRequest: shared.DescribeConfigurationRecordersRequest{
            ConfigurationRecorderNames: []string{
                "dignissimos",
                "eaque",
                "quis",
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeConfigurationRecordersXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationRecordersResponse != nil {
        // handle response
    }
}
```

## DescribeConformancePackCompliance

<p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConformancePackCompliance(ctx, operations.DescribeConformancePackComplianceRequest{
        DescribeConformancePackComplianceRequest: shared.DescribeConformancePackComplianceRequest{
            ConformancePackName: "vero",
            Filters: &shared.ConformancePackComplianceFilters{
                ComplianceType: shared.ConformancePackComplianceTypeEnumNonCompliant.ToPointer(),
                ConfigRuleNames: []string{
                    "recusandae",
                    "omnis",
                    "facilis",
                    "perspiciatis",
                },
            },
            Limit: sdk.Int64(31838),
            NextToken: sdk.String("porro"),
        },
        Limit: sdk.String("consequuntur"),
        NextToken: sdk.String("blanditiis"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.DescribeConformancePackComplianceXAmzTargetEnumStarlingDoveServiceDescribeConformancePackCompliance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConformancePackComplianceResponse != nil {
        // handle response
    }
}
```

## DescribeConformancePackStatus

<p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConformancePackStatus(ctx, operations.DescribeConformancePackStatusRequest{
        DescribeConformancePackStatusRequest: shared.DescribeConformancePackStatusRequest{
            ConformancePackNames: []string{
                "iste",
                "dolorum",
            },
            Limit: sdk.Int64(535633),
            NextToken: sdk.String("pariatur"),
        },
        Limit: sdk.String("provident"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeConformancePackStatusXAmzTargetEnumStarlingDoveServiceDescribeConformancePackStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConformancePackStatusResponse != nil {
        // handle response
    }
}
```

## DescribeConformancePacks

Returns a list of one or more conformance packs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConformancePacks(ctx, operations.DescribeConformancePacksRequest{
        DescribeConformancePacksRequest: shared.DescribeConformancePacksRequest{
            ConformancePackNames: []string{
                "qui",
            },
            Limit: sdk.Int64(218749),
            NextToken: sdk.String("hic"),
        },
        Limit: sdk.String("excepturi"),
        NextToken: sdk.String("cum"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.DescribeConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeConformancePacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConformancePacksResponse != nil {
        // handle response
    }
}
```

## DescribeDeliveryChannelStatus

<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDeliveryChannelStatus(ctx, operations.DescribeDeliveryChannelStatusRequest{
        DescribeDeliveryChannelStatusRequest: shared.DescribeDeliveryChannelStatusRequest{
            DeliveryChannelNames: []string{
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DescribeDeliveryChannelStatusXAmzTargetEnumStarlingDoveServiceDescribeDeliveryChannelStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeliveryChannelStatusResponse != nil {
        // handle response
    }
}
```

## DescribeDeliveryChannels

<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDeliveryChannels(ctx, operations.DescribeDeliveryChannelsRequest{
        DescribeDeliveryChannelsRequest: shared.DescribeDeliveryChannelsRequest{
            DeliveryChannelNames: []string{
                "eos",
                "atque",
                "sit",
            },
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeDeliveryChannelsXAmzTargetEnumStarlingDoveServiceDescribeDeliveryChannels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeliveryChannelsResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConfigRuleStatuses

<p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganizationConfigRuleStatuses(ctx, operations.DescribeOrganizationConfigRuleStatusesRequest{
        DescribeOrganizationConfigRuleStatusesRequest: shared.DescribeOrganizationConfigRuleStatusesRequest{
            Limit: sdk.Int64(536579),
            NextToken: sdk.String("omnis"),
            OrganizationConfigRuleNames: []string{
                "distinctio",
                "asperiores",
                "nihil",
                "ipsum",
            },
        },
        Limit: sdk.String("voluptate"),
        NextToken: sdk.String("id"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DescribeOrganizationConfigRuleStatusesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConfigRuleStatuses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConfigRuleStatusesResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConfigRules

<p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganizationConfigRules(ctx, operations.DescribeOrganizationConfigRulesRequest{
        DescribeOrganizationConfigRulesRequest: shared.DescribeOrganizationConfigRulesRequest{
            Limit: sdk.Int64(320017),
            NextToken: sdk.String("saepe"),
            OrganizationConfigRuleNames: []string{
                "deserunt",
                "provident",
            },
        },
        Limit: sdk.String("minima"),
        NextToken: sdk.String("repellendus"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeOrganizationConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConfigRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConfigRulesResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConformancePackStatuses

<p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganizationConformancePackStatuses(ctx, operations.DescribeOrganizationConformancePackStatusesRequest{
        DescribeOrganizationConformancePackStatusesRequest: shared.DescribeOrganizationConformancePackStatusesRequest{
            Limit: sdk.Int64(798047),
            NextToken: sdk.String("officiis"),
            OrganizationConformancePackNames: []string{
                "dolorum",
            },
        },
        Limit: sdk.String("a"),
        NextToken: sdk.String("esse"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.DescribeOrganizationConformancePackStatusesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConformancePackStatuses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConformancePackStatusesResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConformancePacks

<p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganizationConformancePacks(ctx, operations.DescribeOrganizationConformancePacksRequest{
        DescribeOrganizationConformancePacksRequest: shared.DescribeOrganizationConformancePacksRequest{
            Limit: sdk.Int64(880298),
            NextToken: sdk.String("numquam"),
            OrganizationConformancePackNames: []string{
                "dolorem",
                "sapiente",
            },
        },
        Limit: sdk.String("totam"),
        NextToken: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DescribeOrganizationConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConformancePacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConformancePacksResponse != nil {
        // handle response
    }
}
```

## DescribePendingAggregationRequests

Returns a list of all pending aggregation requests.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePendingAggregationRequests(ctx, operations.DescribePendingAggregationRequestsRequest{
        DescribePendingAggregationRequestsRequest: shared.DescribePendingAggregationRequestsRequest{
            Limit: sdk.Int64(646265),
            NextToken: sdk.String("quam"),
        },
        Limit: sdk.String("ipsum"),
        NextToken: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribePendingAggregationRequestsXAmzTargetEnumStarlingDoveServiceDescribePendingAggregationRequests,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePendingAggregationRequestsResponse != nil {
        // handle response
    }
}
```

## DescribeRemediationConfigurations

Returns the details of one or more remediation configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRemediationConfigurations(ctx, operations.DescribeRemediationConfigurationsRequest{
        DescribeRemediationConfigurationsRequest: shared.DescribeRemediationConfigurationsRequest{
            ConfigRuleNames: []string{
                "incidunt",
                "aspernatur",
                "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DescribeRemediationConfigurationsXAmzTargetEnumStarlingDoveServiceDescribeRemediationConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRemediationConfigurationsResponse != nil {
        // handle response
    }
}
```

## DescribeRemediationExceptions

<p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRemediationExceptions(ctx, operations.DescribeRemediationExceptionsRequest{
        DescribeRemediationExceptionsRequest: shared.DescribeRemediationExceptionsRequest{
            ConfigRuleName: "neque",
            Limit: sdk.Int64(144847),
            NextToken: sdk.String("magni"),
            ResourceKeys: []shared.RemediationExceptionResourceKey{
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("sunt"),
                    ResourceType: sdk.String("ullam"),
                },
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("nam"),
                    ResourceType: sdk.String("hic"),
                },
            },
        },
        Limit: sdk.String("voluptatem"),
        NextToken: sdk.String("cumque"),
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeRemediationExceptionsXAmzTargetEnumStarlingDoveServiceDescribeRemediationExceptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRemediationExceptionsResponse != nil {
        // handle response
    }
}
```

## DescribeRemediationExecutionStatus

Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRemediationExecutionStatus(ctx, operations.DescribeRemediationExecutionStatusRequest{
        DescribeRemediationExecutionStatusRequest: shared.DescribeRemediationExecutionStatusRequest{
            ConfigRuleName: "quos",
            Limit: sdk.Int64(731694),
            NextToken: sdk.String("cupiditate"),
            ResourceKeys: []shared.ResourceKey{
                shared.ResourceKey{
                    ResourceID: "delectus",
                    ResourceType: shared.ResourceTypeEnumAwsWafWebACL,
                },
            },
        },
        Limit: sdk.String("dolore"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DescribeRemediationExecutionStatusXAmzTargetEnumStarlingDoveServiceDescribeRemediationExecutionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRemediationExecutionStatusResponse != nil {
        // handle response
    }
}
```

## DescribeRetentionConfigurations

<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRetentionConfigurations(ctx, operations.DescribeRetentionConfigurationsRequest{
        DescribeRetentionConfigurationsRequest: shared.DescribeRetentionConfigurationsRequest{
            NextToken: sdk.String("consequatur"),
            RetentionConfigurationNames: []string{
                "repellendus",
                "porro",
                "doloribus",
            },
        },
        NextToken: sdk.String("ut"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeRetentionConfigurationsXAmzTargetEnumStarlingDoveServiceDescribeRetentionConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRetentionConfigurationsResponse != nil {
        // handle response
    }
}
```

## GetAggregateComplianceDetailsByConfigRule

<p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAggregateComplianceDetailsByConfigRule(ctx, operations.GetAggregateComplianceDetailsByConfigRuleRequest{
        GetAggregateComplianceDetailsByConfigRuleRequest: shared.GetAggregateComplianceDetailsByConfigRuleRequest{
            AccountID: "voluptatibus",
            AwsRegion: "quisquam",
            ComplianceType: shared.ComplianceTypeEnumInsufficientData.ToPointer(),
            ConfigRuleName: "omnis",
            ConfigurationAggregatorName: "quis",
            Limit: sdk.Int64(218403),
            NextToken: sdk.String("delectus"),
        },
        Limit: sdk.String("voluptate"),
        NextToken: sdk.String("consectetur"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnumStarlingDoveServiceGetAggregateComplianceDetailsByConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAggregateComplianceDetailsByConfigRuleResponse != nil {
        // handle response
    }
}
```

## GetAggregateConfigRuleComplianceSummary

<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAggregateConfigRuleComplianceSummary(ctx, operations.GetAggregateConfigRuleComplianceSummaryRequest{
        GetAggregateConfigRuleComplianceSummaryRequest: shared.GetAggregateConfigRuleComplianceSummaryRequest{
            ConfigurationAggregatorName: "similique",
            Filters: &shared.ConfigRuleComplianceSummaryFilters{
                AccountID: sdk.String("facilis"),
                AwsRegion: sdk.String("vero"),
            },
            GroupByKey: shared.ConfigRuleComplianceSummaryGroupKeyEnumAccountID.ToPointer(),
            Limit: sdk.Int64(293020),
            NextToken: sdk.String("quibusdam"),
        },
        Limit: sdk.String("illum"),
        NextToken: sdk.String("sequi"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.GetAggregateConfigRuleComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetAggregateConfigRuleComplianceSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAggregateConfigRuleComplianceSummaryResponse != nil {
        // handle response
    }
}
```

## GetAggregateConformancePackComplianceSummary

<p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAggregateConformancePackComplianceSummary(ctx, operations.GetAggregateConformancePackComplianceSummaryRequest{
        GetAggregateConformancePackComplianceSummaryRequest: shared.GetAggregateConformancePackComplianceSummaryRequest{
            ConfigurationAggregatorName: "porro",
            Filters: &shared.AggregateConformancePackComplianceSummaryFilters{
                AccountID: sdk.String("maiores"),
                AwsRegion: sdk.String("doloribus"),
            },
            GroupByKey: shared.AggregateConformancePackComplianceSummaryGroupKeyEnumAccountID.ToPointer(),
            Limit: sdk.Int64(753570),
            NextToken: sdk.String("ducimus"),
        },
        Limit: sdk.String("alias"),
        NextToken: sdk.String("officia"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.GetAggregateConformancePackComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetAggregateConformancePackComplianceSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAggregateConformancePackComplianceSummaryResponse != nil {
        // handle response
    }
}
```

## GetAggregateDiscoveredResourceCounts

<p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAggregateDiscoveredResourceCounts(ctx, operations.GetAggregateDiscoveredResourceCountsRequest{
        GetAggregateDiscoveredResourceCountsRequest: shared.GetAggregateDiscoveredResourceCountsRequest{
            ConfigurationAggregatorName: "ratione",
            Filters: &shared.ResourceCountFilters{
                AccountID: sdk.String("ex"),
                Region: sdk.String("laudantium"),
                ResourceType: shared.ResourceTypeEnumAwsRdsDbCluster.ToPointer(),
            },
            GroupByKey: shared.ResourceCountGroupKeyEnumResourceType.ToPointer(),
            Limit: sdk.Int64(980700),
            NextToken: sdk.String("quasi"),
        },
        Limit: sdk.String("ex"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.GetAggregateDiscoveredResourceCountsXAmzTargetEnumStarlingDoveServiceGetAggregateDiscoveredResourceCounts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAggregateDiscoveredResourceCountsResponse != nil {
        // handle response
    }
}
```

## GetAggregateResourceConfig

Returns configuration item that is aggregated for your specific resource in a specific source account and region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAggregateResourceConfig(ctx, operations.GetAggregateResourceConfigRequest{
        GetAggregateResourceConfigRequest: shared.GetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "impedit",
            ResourceIdentifier: shared.AggregateResourceIdentifier{
                ResourceID: "corporis",
                ResourceName: sdk.String("veniam"),
                ResourceType: shared.ResourceTypeEnumAwsEc2TransitGateway,
                SourceAccountID: "inventore",
                SourceRegion: "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.GetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceGetAggregateResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAggregateResourceConfigResponse != nil {
        // handle response
    }
}
```

## GetComplianceDetailsByConfigRule

Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComplianceDetailsByConfigRule(ctx, operations.GetComplianceDetailsByConfigRuleRequest{
        GetComplianceDetailsByConfigRuleRequest: shared.GetComplianceDetailsByConfigRuleRequest{
            ComplianceTypes: []shared.ComplianceTypeEnum{
                shared.ComplianceTypeEnumNotApplicable,
                shared.ComplianceTypeEnumCompliant,
                shared.ComplianceTypeEnumCompliant,
                shared.ComplianceTypeEnumNotApplicable,
            },
            ConfigRuleName: "impedit",
            Limit: sdk.Int64(304582),
            NextToken: sdk.String("fugit"),
        },
        Limit: sdk.String("accusamus"),
        NextToken: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.GetComplianceDetailsByConfigRuleXAmzTargetEnumStarlingDoveServiceGetComplianceDetailsByConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComplianceDetailsByConfigRuleResponse != nil {
        // handle response
    }
}
```

## GetComplianceDetailsByResource

Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComplianceDetailsByResource(ctx, operations.GetComplianceDetailsByResourceRequest{
        GetComplianceDetailsByResourceRequest: shared.GetComplianceDetailsByResourceRequest{
            ComplianceTypes: []shared.ComplianceTypeEnum{
                shared.ComplianceTypeEnumInsufficientData,
                shared.ComplianceTypeEnumNotApplicable,
            },
            NextToken: sdk.String("assumenda"),
            ResourceEvaluationID: sdk.String("nulla"),
            ResourceID: sdk.String("voluptas"),
            ResourceType: sdk.String("libero"),
        },
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.GetComplianceDetailsByResourceXAmzTargetEnumStarlingDoveServiceGetComplianceDetailsByResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComplianceDetailsByResourceResponse != nil {
        // handle response
    }
}
```

## GetComplianceSummaryByConfigRule

Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.

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
    res, err := s.SDK.GetComplianceSummaryByConfigRule(ctx, operations.GetComplianceSummaryByConfigRuleRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.GetComplianceSummaryByConfigRuleXAmzTargetEnumStarlingDoveServiceGetComplianceSummaryByConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComplianceSummaryByConfigRuleResponse != nil {
        // handle response
    }
}
```

## GetComplianceSummaryByResourceType

Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComplianceSummaryByResourceType(ctx, operations.GetComplianceSummaryByResourceTypeRequest{
        GetComplianceSummaryByResourceTypeRequest: shared.GetComplianceSummaryByResourceTypeRequest{
            ResourceTypes: []string{
                "fugiat",
                "ut",
                "eum",
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.GetComplianceSummaryByResourceTypeXAmzTargetEnumStarlingDoveServiceGetComplianceSummaryByResourceType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComplianceSummaryByResourceTypeResponse != nil {
        // handle response
    }
}
```

## GetConformancePackComplianceDetails

Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConformancePackComplianceDetails(ctx, operations.GetConformancePackComplianceDetailsRequest{
        GetConformancePackComplianceDetailsRequest: shared.GetConformancePackComplianceDetailsRequest{
            ConformancePackName: "id",
            Filters: &shared.ConformancePackEvaluationFilters{
                ComplianceType: shared.ConformancePackComplianceTypeEnumInsufficientData.ToPointer(),
                ConfigRuleNames: []string{
                    "quo",
                },
                ResourceIds: []string{
                    "quo",
                    "fuga",
                    "eius",
                    "eos",
                },
                ResourceType: sdk.String("voluptas"),
            },
            Limit: sdk.Int64(69859),
            NextToken: sdk.String("cupiditate"),
        },
        Limit: sdk.String("consequatur"),
        NextToken: sdk.String("tempora"),
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.GetConformancePackComplianceDetailsXAmzTargetEnumStarlingDoveServiceGetConformancePackComplianceDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConformancePackComplianceDetailsResponse != nil {
        // handle response
    }
}
```

## GetConformancePackComplianceSummary

Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConformancePackComplianceSummary(ctx, operations.GetConformancePackComplianceSummaryRequest{
        GetConformancePackComplianceSummaryRequest: shared.GetConformancePackComplianceSummaryRequest{
            ConformancePackNames: []string{
                "distinctio",
            },
            Limit: sdk.Int64(799796),
            NextToken: sdk.String("dignissimos"),
        },
        Limit: sdk.String("inventore"),
        NextToken: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.GetConformancePackComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetConformancePackComplianceSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConformancePackComplianceSummaryResponse != nil {
        // handle response
    }
}
```

## GetCustomRulePolicy

Returns the policy definition containing the logic for your Config Custom Policy rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCustomRulePolicy(ctx, operations.GetCustomRulePolicyRequest{
        GetCustomRulePolicyRequest: shared.GetCustomRulePolicyRequest{
            ConfigRuleName: sdk.String("dolores"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.GetCustomRulePolicyXAmzTargetEnumStarlingDoveServiceGetCustomRulePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomRulePolicyResponse != nil {
        // handle response
    }
}
```

## GetDiscoveredResourceCounts

<p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDiscoveredResourceCounts(ctx, operations.GetDiscoveredResourceCountsRequest{
        GetDiscoveredResourceCountsRequest: shared.GetDiscoveredResourceCountsRequest{
            Limit: sdk.Int64(159867),
            NextToken: sdk.String("deleniti"),
            ResourceTypes: []string{
                "fuga",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.GetDiscoveredResourceCountsXAmzTargetEnumStarlingDoveServiceGetDiscoveredResourceCounts,
        Limit: sdk.String("sapiente"),
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiscoveredResourceCountsResponse != nil {
        // handle response
    }
}
```

## GetOrganizationConfigRuleDetailedStatus

Returns detailed status for each member account within an organization for a given organization Config rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOrganizationConfigRuleDetailedStatus(ctx, operations.GetOrganizationConfigRuleDetailedStatusRequest{
        GetOrganizationConfigRuleDetailedStatusRequest: shared.GetOrganizationConfigRuleDetailedStatusRequest{
            Filters: &shared.StatusDetailFilters{
                AccountID: sdk.String("ratione"),
                MemberAccountRuleStatus: shared.MemberAccountRuleStatusEnumCreateInProgress.ToPointer(),
            },
            Limit: sdk.Int64(903984),
            NextToken: sdk.String("occaecati"),
            OrganizationConfigRuleName: "atque",
        },
        Limit: sdk.String("et"),
        NextToken: sdk.String("esse"),
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.GetOrganizationConfigRuleDetailedStatusXAmzTargetEnumStarlingDoveServiceGetOrganizationConfigRuleDetailedStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigRuleDetailedStatusResponse != nil {
        // handle response
    }
}
```

## GetOrganizationConformancePackDetailedStatus

Returns detailed status for each member account within an organization for a given organization conformance pack.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOrganizationConformancePackDetailedStatus(ctx, operations.GetOrganizationConformancePackDetailedStatusRequest{
        GetOrganizationConformancePackDetailedStatusRequest: shared.GetOrganizationConformancePackDetailedStatusRequest{
            Filters: &shared.OrganizationResourceDetailedStatusFilters{
                AccountID: sdk.String("aliquid"),
                Status: shared.OrganizationResourceDetailedStatusEnumCreateSuccessful.ToPointer(),
            },
            Limit: sdk.Int64(904045),
            NextToken: sdk.String("vel"),
            OrganizationConformancePackName: "harum",
        },
        Limit: sdk.String("molestiae"),
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.GetOrganizationConformancePackDetailedStatusXAmzTargetEnumStarlingDoveServiceGetOrganizationConformancePackDetailedStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConformancePackDetailedStatusResponse != nil {
        // handle response
    }
}
```

## GetOrganizationCustomRulePolicy

Returns the policy definition containing the logic for your organization Config Custom Policy rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOrganizationCustomRulePolicy(ctx, operations.GetOrganizationCustomRulePolicyRequest{
        GetOrganizationCustomRulePolicyRequest: shared.GetOrganizationCustomRulePolicyRequest{
            OrganizationConfigRuleName: "adipisci",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.GetOrganizationCustomRulePolicyXAmzTargetEnumStarlingDoveServiceGetOrganizationCustomRulePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCustomRulePolicyResponse != nil {
        // handle response
    }
}
```

## GetResourceConfigHistory

<p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>

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
    res, err := s.SDK.GetResourceConfigHistory(ctx, operations.GetResourceConfigHistoryRequest{
        GetResourceConfigHistoryRequest: shared.GetResourceConfigHistoryRequest{
            ChronologicalOrder: shared.ChronologicalOrderEnumReverse.ToPointer(),
            EarlierTime: types.MustTimeFromString("2021-10-26T13:57:26.455Z"),
            LaterTime: types.MustTimeFromString("2020-06-05T19:02:55.998Z"),
            Limit: sdk.Int64(557811),
            NextToken: sdk.String("esse"),
            ResourceID: "quasi",
            ResourceType: shared.ResourceTypeEnumAwsRoboMakerRobotApplication,
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.GetResourceConfigHistoryXAmzTargetEnumStarlingDoveServiceGetResourceConfigHistory,
        Limit: sdk.String("facere"),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceConfigHistoryResponse != nil {
        // handle response
    }
}
```

## GetResourceEvaluationSummary

<p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourceEvaluationSummary(ctx, operations.GetResourceEvaluationSummaryRequest{
        GetResourceEvaluationSummaryRequest: shared.GetResourceEvaluationSummaryRequest{
            ResourceEvaluationID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.GetResourceEvaluationSummaryXAmzTargetEnumStarlingDoveServiceGetResourceEvaluationSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceEvaluationSummaryResponse != nil {
        // handle response
    }
}
```

## GetStoredQuery

Returns the details of a specific stored query.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStoredQuery(ctx, operations.GetStoredQueryRequest{
        GetStoredQueryRequest: shared.GetStoredQueryRequest{
            QueryName: "vel",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.GetStoredQueryXAmzTargetEnumStarlingDoveServiceGetStoredQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStoredQueryResponse != nil {
        // handle response
    }
}
```

## ListAggregateDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAggregateDiscoveredResources(ctx, operations.ListAggregateDiscoveredResourcesRequest{
        Limit: sdk.String("sapiente"),
        ListAggregateDiscoveredResourcesRequest: shared.ListAggregateDiscoveredResourcesRequest{
            ConfigurationAggregatorName: "dicta",
            Filters: &shared.ResourceFilters{
                AccountID: sdk.String("ullam"),
                Region: sdk.String("reprehenderit"),
                ResourceID: sdk.String("ullam"),
                ResourceName: sdk.String("nisi"),
            },
            Limit: sdk.Int64(16328),
            NextToken: sdk.String("voluptatum"),
            ResourceType: shared.ResourceTypeEnumAwsAutoScalingScalingPolicy,
        },
        NextToken: sdk.String("quibusdam"),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.ListAggregateDiscoveredResourcesXAmzTargetEnumStarlingDoveServiceListAggregateDiscoveredResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAggregateDiscoveredResourcesResponse != nil {
        // handle response
    }
}
```

## ListConformancePackComplianceScores

<p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConformancePackComplianceScores(ctx, operations.ListConformancePackComplianceScoresRequest{
        Limit: sdk.String("quasi"),
        ListConformancePackComplianceScoresRequest: shared.ListConformancePackComplianceScoresRequest{
            Filters: &shared.ConformancePackComplianceScoresFilters{
                ConformancePackNames: []string{
                    "et",
                    "voluptate",
                    "ipsa",
                    "minima",
                },
            },
            Limit: sdk.Int64(86532),
            NextToken: sdk.String("consectetur"),
            SortBy: shared.SortByEnumScore.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        NextToken: sdk.String("iste"),
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.ListConformancePackComplianceScoresXAmzTargetEnumStarlingDoveServiceListConformancePackComplianceScores,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConformancePackComplianceScoresResponse != nil {
        // handle response
    }
}
```

## ListDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDiscoveredResources(ctx, operations.ListDiscoveredResourcesRequest{
        ListDiscoveredResourcesRequest: shared.ListDiscoveredResourcesRequest{
            IncludeDeletedResources: sdk.Bool(false),
            Limit: sdk.Int64(68074),
            NextToken: sdk.String("corrupti"),
            ResourceIds: []string{
                "voluptatem",
                "dolor",
            },
            ResourceName: sdk.String("occaecati"),
            ResourceType: shared.ResourceTypeEnumAwsElasticBeanstalkApplicationVersion,
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListDiscoveredResourcesXAmzTargetEnumStarlingDoveServiceListDiscoveredResources,
        Limit: sdk.String("natus"),
        NextToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDiscoveredResourcesResponse != nil {
        // handle response
    }
}
```

## ListResourceEvaluations

Returns a list of proactive resource evaluations.

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
    res, err := s.SDK.ListResourceEvaluations(ctx, operations.ListResourceEvaluationsRequest{
        Limit: sdk.String("voluptatibus"),
        ListResourceEvaluationsRequest: shared.ListResourceEvaluationsRequest{
            Filters: &shared.ResourceEvaluationFilters{
                EvaluationContextIdentifier: sdk.String("voluptas"),
                EvaluationMode: shared.EvaluationModeEnumProactive.ToPointer(),
                TimeWindow: &shared.TimeWindow{
                    EndTime: types.MustTimeFromString("2022-08-04T16:41:09.494Z"),
                    StartTime: types.MustTimeFromString("2022-11-02T12:31:08.461Z"),
                },
            },
            Limit: sdk.Int64(831520),
            NextToken: sdk.String("officia"),
        },
        NextToken: sdk.String("maxime"),
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ListResourceEvaluationsXAmzTargetEnumStarlingDoveServiceListResourceEvaluations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceEvaluationsResponse != nil {
        // handle response
    }
}
```

## ListStoredQueries

Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStoredQueries(ctx, operations.ListStoredQueriesRequest{
        ListStoredQueriesRequest: shared.ListStoredQueriesRequest{
            MaxResults: sdk.Int64(801836),
            NextToken: sdk.String("labore"),
        },
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("adipisci"),
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ListStoredQueriesXAmzTargetEnumStarlingDoveServiceListStoredQueries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStoredQueriesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for Config resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
        Limit: sdk.String("totam"),
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            Limit: sdk.Int64(853940),
            NextToken: sdk.String("vel"),
            ResourceArn: "ducimus",
        },
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumStarlingDoveServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutAggregationAuthorization

<p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAggregationAuthorization(ctx, operations.PutAggregationAuthorizationRequest{
        PutAggregationAuthorizationRequest: shared.PutAggregationAuthorizationRequest{
            AuthorizedAccountID: "corporis",
            AuthorizedAwsRegion: "reiciendis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nemo"),
                    Value: sdk.String("recusandae"),
                },
                shared.Tag{
                    Key: sdk.String("aliquid"),
                    Value: sdk.String("aperiam"),
                },
                shared.Tag{
                    Key: sdk.String("cum"),
                    Value: sdk.String("consectetur"),
                },
                shared.Tag{
                    Key: sdk.String("in"),
                    Value: sdk.String("exercitationem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.PutAggregationAuthorizationXAmzTargetEnumStarlingDoveServicePutAggregationAuthorization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAggregationAuthorizationResponse != nil {
        // handle response
    }
}
```

## PutConfigRule

<p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutConfigRule(ctx, operations.PutConfigRuleRequest{
        PutConfigRuleRequest: shared.PutConfigRuleRequest{
            ConfigRule: shared.ConfigRule{
                ConfigRuleArn: sdk.String("saepe"),
                ConfigRuleID: sdk.String("necessitatibus"),
                ConfigRuleName: sdk.String("dolore"),
                ConfigRuleState: shared.ConfigRuleStateEnumActive.ToPointer(),
                CreatedBy: sdk.String("asperiores"),
                Description: sdk.String("adipisci"),
                EvaluationModes: []shared.EvaluationModeConfiguration{
                    shared.EvaluationModeConfiguration{
                        Mode: shared.EvaluationModeEnumDetective.ToPointer(),
                    },
                },
                InputParameters: sdk.String("beatae"),
                MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumSixHours.ToPointer(),
                Scope: &shared.Scope{
                    ComplianceResourceID: sdk.String("a"),
                    ComplianceResourceTypes: []string{
                        "consectetur",
                        "corporis",
                        "harum",
                        "laboriosam",
                    },
                    TagKey: sdk.String("ipsa"),
                    TagValue: sdk.String("voluptates"),
                },
                Source: shared.Source{
                    CustomPolicyDetails: &shared.CustomPolicyDetails{
                        EnableDebugLogDelivery: sdk.Bool(false),
                        PolicyRuntime: "libero",
                        PolicyText: "vitae",
                    },
                    Owner: shared.OwnerEnumCustomPolicy,
                    SourceDetails: []shared.SourceDetail{
                        shared.SourceDetail{
                            EventSource: shared.EventSourceEnumAwsConfig.ToPointer(),
                            MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumThreeHours.ToPointer(),
                            MessageType: shared.MessageTypeEnumConfigurationItemChangeNotification.ToPointer(),
                        },
                        shared.SourceDetail{
                            EventSource: shared.EventSourceEnumAwsConfig.ToPointer(),
                            MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumThreeHours.ToPointer(),
                            MessageType: shared.MessageTypeEnumConfigurationSnapshotDeliveryCompleted.ToPointer(),
                        },
                        shared.SourceDetail{
                            EventSource: shared.EventSourceEnumAwsConfig.ToPointer(),
                            MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumThreeHours.ToPointer(),
                            MessageType: shared.MessageTypeEnumConfigurationSnapshotDeliveryCompleted.ToPointer(),
                        },
                    },
                    SourceIdentifier: sdk.String("nobis"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("adipisci"),
                    Value: sdk.String("minus"),
                },
                shared.Tag{
                    Key: sdk.String("dolores"),
                    Value: sdk.String("blanditiis"),
                },
                shared.Tag{
                    Key: sdk.String("in"),
                    Value: sdk.String("dolore"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.PutConfigRuleXAmzTargetEnumStarlingDoveServicePutConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutConfigurationAggregator

<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutConfigurationAggregator(ctx, operations.PutConfigurationAggregatorRequest{
        PutConfigurationAggregatorRequest: shared.PutConfigurationAggregatorRequest{
            AccountAggregationSources: []shared.AccountAggregationSource{
                shared.AccountAggregationSource{
                    AccountIds: []string{
                        "nesciunt",
                        "culpa",
                        "corrupti",
                        "pariatur",
                    },
                    AllAwsRegions: sdk.Bool(false),
                    AwsRegions: []string{
                        "hic",
                        "exercitationem",
                        "nobis",
                    },
                },
                shared.AccountAggregationSource{
                    AccountIds: []string{
                        "rerum",
                    },
                    AllAwsRegions: sdk.Bool(false),
                    AwsRegions: []string{
                        "reiciendis",
                    },
                },
                shared.AccountAggregationSource{
                    AccountIds: []string{
                        "asperiores",
                    },
                    AllAwsRegions: sdk.Bool(false),
                    AwsRegions: []string{
                        "voluptate",
                        "expedita",
                        "ab",
                    },
                },
            },
            ConfigurationAggregatorName: "iste",
            OrganizationAggregationSource: &shared.OrganizationAggregationSource{
                AllAwsRegions: sdk.Bool(false),
                AwsRegions: []string{
                    "laborum",
                    "sed",
                },
                RoleArn: "in",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("quidem"),
                    Value: sdk.String("explicabo"),
                },
                shared.Tag{
                    Key: sdk.String("voluptas"),
                    Value: sdk.String("unde"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.PutConfigurationAggregatorXAmzTargetEnumStarlingDoveServicePutConfigurationAggregator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationAggregatorResponse != nil {
        // handle response
    }
}
```

## PutConfigurationRecorder

<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutConfigurationRecorder(ctx, operations.PutConfigurationRecorderRequest{
        PutConfigurationRecorderRequest: shared.PutConfigurationRecorderRequest{
            ConfigurationRecorder: shared.ConfigurationRecorder{
                Name: sdk.String("Emilio Goodwin"),
                RecordingGroup: &shared.RecordingGroup{
                    AllSupported: sdk.Bool(false),
                    IncludeGlobalResourceTypes: sdk.Bool(false),
                    ResourceTypes: []shared.ResourceTypeEnum{
                        shared.ResourceTypeEnumAwsEc2TrafficMirrorTarget,
                        shared.ResourceTypeEnumAwsWafRegionalRule,
                    },
                },
                RoleARN: sdk.String("ea"),
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.PutConfigurationRecorderXAmzTargetEnumStarlingDoveServicePutConfigurationRecorder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutConformancePack

<p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutConformancePack(ctx, operations.PutConformancePackRequest{
        PutConformancePackRequest: shared.PutConformancePackRequest{
            ConformancePackInputParameters: []shared.ConformancePackInputParameter{
                shared.ConformancePackInputParameter{
                    ParameterName: "sit",
                    ParameterValue: "non",
                },
                shared.ConformancePackInputParameter{
                    ParameterName: "officiis",
                    ParameterValue: "praesentium",
                },
            },
            ConformancePackName: "facilis",
            DeliveryS3Bucket: sdk.String("quaerat"),
            DeliveryS3KeyPrefix: sdk.String("incidunt"),
            TemplateBody: sdk.String("ipsam"),
            TemplateS3URI: sdk.String("debitis"),
            TemplateSSMDocumentDetails: &shared.TemplateSSMDocumentDetails{
                DocumentName: "rem",
                DocumentVersion: sdk.String("sit"),
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.PutConformancePackXAmzTargetEnumStarlingDoveServicePutConformancePack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConformancePackResponse != nil {
        // handle response
    }
}
```

## PutDeliveryChannel

<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutDeliveryChannel(ctx, operations.PutDeliveryChannelRequest{
        PutDeliveryChannelRequest: shared.PutDeliveryChannelRequest{
            DeliveryChannel: shared.DeliveryChannel{
                ConfigSnapshotDeliveryProperties: &shared.ConfigSnapshotDeliveryProperties{
                    DeliveryFrequency: shared.MaximumExecutionFrequencyEnumOneHour.ToPointer(),
                },
                Name: sdk.String("Gwen Fritsch"),
                S3BucketName: sdk.String("officiis"),
                S3KeyPrefix: sdk.String("beatae"),
                S3KmsKeyArn: sdk.String("laudantium"),
                SnsTopicARN: sdk.String("exercitationem"),
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.PutDeliveryChannelXAmzTargetEnumStarlingDoveServicePutDeliveryChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutEvaluations

Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.

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
    res, err := s.SDK.PutEvaluations(ctx, operations.PutEvaluationsRequest{
        PutEvaluationsRequest: shared.PutEvaluationsRequest{
            Evaluations: []shared.Evaluation{
                shared.Evaluation{
                    Annotation: sdk.String("debitis"),
                    ComplianceResourceID: "neque",
                    ComplianceResourceType: "dolorum",
                    ComplianceType: shared.ComplianceTypeEnumNonCompliant,
                    OrderingTimestamp: types.MustTimeFromString("2021-08-25T08:13:54.077Z"),
                },
                shared.Evaluation{
                    Annotation: sdk.String("corrupti"),
                    ComplianceResourceID: "accusamus",
                    ComplianceResourceType: "tempora",
                    ComplianceType: shared.ComplianceTypeEnumNotApplicable,
                    OrderingTimestamp: types.MustTimeFromString("2022-09-19T19:33:03.218Z"),
                },
                shared.Evaluation{
                    Annotation: sdk.String("fugiat"),
                    ComplianceResourceID: "voluptatem",
                    ComplianceResourceType: "culpa",
                    ComplianceType: shared.ComplianceTypeEnumNotApplicable,
                    OrderingTimestamp: types.MustTimeFromString("2022-12-29T02:56:05.947Z"),
                },
            },
            ResultToken: "esse",
            TestMode: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.PutEvaluationsXAmzTargetEnumStarlingDoveServicePutEvaluations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEvaluationsResponse != nil {
        // handle response
    }
}
```

## PutExternalEvaluation

Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.

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
    res, err := s.SDK.PutExternalEvaluation(ctx, operations.PutExternalEvaluationRequest{
        PutExternalEvaluationRequest: shared.PutExternalEvaluationRequest{
            ConfigRuleName: "blanditiis",
            ExternalEvaluation: shared.ExternalEvaluation{
                Annotation: sdk.String("ex"),
                ComplianceResourceID: "sed",
                ComplianceResourceType: "sit",
                ComplianceType: shared.ComplianceTypeEnumNonCompliant,
                OrderingTimestamp: types.MustTimeFromString("2022-02-04T05:56:04.733Z"),
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.PutExternalEvaluationXAmzTargetEnumStarlingDoveServicePutExternalEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutExternalEvaluationResponse != nil {
        // handle response
    }
}
```

## PutOrganizationConfigRule

<p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutOrganizationConfigRule(ctx, operations.PutOrganizationConfigRuleRequest{
        PutOrganizationConfigRuleRequest: shared.PutOrganizationConfigRuleRequest{
            ExcludedAccounts: []string{
                "occaecati",
            },
            OrganizationConfigRuleName: "labore",
            OrganizationCustomPolicyRuleMetadata: &shared.OrganizationCustomPolicyRuleMetadata{
                DebugLogDeliveryAccounts: []string{
                    "atque",
                    "laborum",
                    "nam",
                },
                Description: sdk.String("tenetur"),
                InputParameters: sdk.String("laboriosam"),
                MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumOneHour.ToPointer(),
                OrganizationConfigRuleTriggerTypes: []shared.OrganizationConfigRuleTriggerTypeNoSNEnum{
                    shared.OrganizationConfigRuleTriggerTypeNoSNEnumOversizedConfigurationItemChangeNotification,
                },
                PolicyRuntime: "voluptate",
                PolicyText: "unde",
                ResourceIDScope: sdk.String("reiciendis"),
                ResourceTypesScope: []string{
                    "repellendus",
                    "delectus",
                    "voluptates",
                },
                TagKeyScope: sdk.String("perferendis"),
                TagValueScope: sdk.String("est"),
            },
            OrganizationCustomRuleMetadata: &shared.OrganizationCustomRuleMetadata{
                Description: sdk.String("quidem"),
                InputParameters: sdk.String("reprehenderit"),
                LambdaFunctionArn: "facere",
                MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumTwelveHours.ToPointer(),
                OrganizationConfigRuleTriggerTypes: []shared.OrganizationConfigRuleTriggerTypeEnum{
                    shared.OrganizationConfigRuleTriggerTypeEnumOversizedConfigurationItemChangeNotification,
                    shared.OrganizationConfigRuleTriggerTypeEnumOversizedConfigurationItemChangeNotification,
                    shared.OrganizationConfigRuleTriggerTypeEnumConfigurationItemChangeNotification,
                },
                ResourceIDScope: sdk.String("quisquam"),
                ResourceTypesScope: []string{
                    "quasi",
                    "atque",
                    "reprehenderit",
                    "asperiores",
                },
                TagKeyScope: sdk.String("totam"),
                TagValueScope: sdk.String("suscipit"),
            },
            OrganizationManagedRuleMetadata: &shared.OrganizationManagedRuleMetadata{
                Description: sdk.String("quidem"),
                InputParameters: sdk.String("maxime"),
                MaximumExecutionFrequency: shared.MaximumExecutionFrequencyEnumOneHour.ToPointer(),
                ResourceIDScope: sdk.String("esse"),
                ResourceTypesScope: []string{
                    "assumenda",
                },
                RuleIdentifier: "ea",
                TagKeyScope: sdk.String("atque"),
                TagValueScope: sdk.String("error"),
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.PutOrganizationConfigRuleXAmzTargetEnumStarlingDoveServicePutOrganizationConfigRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutOrganizationConfigRuleResponse != nil {
        // handle response
    }
}
```

## PutOrganizationConformancePack

<p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutOrganizationConformancePack(ctx, operations.PutOrganizationConformancePackRequest{
        PutOrganizationConformancePackRequest: shared.PutOrganizationConformancePackRequest{
            ConformancePackInputParameters: []shared.ConformancePackInputParameter{
                shared.ConformancePackInputParameter{
                    ParameterName: "corrupti",
                    ParameterValue: "at",
                },
                shared.ConformancePackInputParameter{
                    ParameterName: "error",
                    ParameterValue: "blanditiis",
                },
                shared.ConformancePackInputParameter{
                    ParameterName: "suscipit",
                    ParameterValue: "repudiandae",
                },
                shared.ConformancePackInputParameter{
                    ParameterName: "atque",
                    ParameterValue: "atque",
                },
            },
            DeliveryS3Bucket: sdk.String("sunt"),
            DeliveryS3KeyPrefix: sdk.String("recusandae"),
            ExcludedAccounts: []string{
                "repellendus",
                "labore",
                "reiciendis",
            },
            OrganizationConformancePackName: "doloremque",
            TemplateBody: sdk.String("repudiandae"),
            TemplateS3URI: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.PutOrganizationConformancePackXAmzTargetEnumStarlingDoveServicePutOrganizationConformancePack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutOrganizationConformancePackResponse != nil {
        // handle response
    }
}
```

## PutRemediationConfigurations

<p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutRemediationConfigurations(ctx, operations.PutRemediationConfigurationsRequest{
        PutRemediationConfigurationsRequest: shared.PutRemediationConfigurationsRequest{
            RemediationConfigurations: []shared.RemediationConfiguration{
                shared.RemediationConfiguration{
                    Arn: sdk.String("magnam"),
                    Automatic: sdk.Bool(false),
                    ConfigRuleName: "saepe",
                    CreatedByService: sdk.String("consequuntur"),
                    ExecutionControls: &shared.ExecutionControls{
                        SsmControls: &shared.SsmControls{
                            ConcurrentExecutionRatePercentage: sdk.Int64(580107),
                            ErrorPercentage: sdk.Int64(886305),
                        },
                    },
                    MaximumAutomaticAttempts: sdk.Int64(597937),
                    Parameters: map[string]shared.RemediationParameterValue{
                        "adipisci": shared.RemediationParameterValue{
                            ResourceValue: &shared.ResourceValue{
                                Value: shared.ResourceValueTypeEnumResourceID,
                            },
                            StaticValue: &shared.StaticValue{
                                Values: []string{
                                    "occaecati",
                                    "consequuntur",
                                    "fugit",
                                    "id",
                                },
                            },
                        },
                        "quis": shared.RemediationParameterValue{
                            ResourceValue: &shared.ResourceValue{
                                Value: shared.ResourceValueTypeEnumResourceID,
                            },
                            StaticValue: &shared.StaticValue{
                                Values: []string{
                                    "error",
                                    "illo",
                                },
                            },
                        },
                    },
                    ResourceType: sdk.String("corporis"),
                    RetryAttemptSeconds: sdk.Int64(696463),
                    TargetID: "eveniet",
                    TargetType: shared.RemediationTargetTypeEnumSsmDocument,
                    TargetVersion: sdk.String("non"),
                },
                shared.RemediationConfiguration{
                    Arn: sdk.String("vero"),
                    Automatic: sdk.Bool(false),
                    ConfigRuleName: "doloremque",
                    CreatedByService: sdk.String("iure"),
                    ExecutionControls: &shared.ExecutionControls{
                        SsmControls: &shared.SsmControls{
                            ConcurrentExecutionRatePercentage: sdk.Int64(59944),
                            ErrorPercentage: sdk.Int64(517612),
                        },
                    },
                    MaximumAutomaticAttempts: sdk.Int64(61078),
                    Parameters: map[string]shared.RemediationParameterValue{
                        "eveniet": shared.RemediationParameterValue{
                            ResourceValue: &shared.ResourceValue{
                                Value: shared.ResourceValueTypeEnumResourceID,
                            },
                            StaticValue: &shared.StaticValue{
                                Values: []string{
                                    "cum",
                                },
                            },
                        },
                        "iure": shared.RemediationParameterValue{
                            ResourceValue: &shared.ResourceValue{
                                Value: shared.ResourceValueTypeEnumResourceID,
                            },
                            StaticValue: &shared.StaticValue{
                                Values: []string{
                                    "ratione",
                                    "laborum",
                                    "distinctio",
                                    "voluptatum",
                                },
                            },
                        },
                    },
                    ResourceType: sdk.String("rem"),
                    RetryAttemptSeconds: sdk.Int64(304446),
                    TargetID: "ad",
                    TargetType: shared.RemediationTargetTypeEnumSsmDocument,
                    TargetVersion: sdk.String("repellat"),
                },
                shared.RemediationConfiguration{
                    Arn: sdk.String("alias"),
                    Automatic: sdk.Bool(false),
                    ConfigRuleName: "corporis",
                    CreatedByService: sdk.String("perspiciatis"),
                    ExecutionControls: &shared.ExecutionControls{
                        SsmControls: &shared.SsmControls{
                            ConcurrentExecutionRatePercentage: sdk.Int64(470649),
                            ErrorPercentage: sdk.Int64(649078),
                        },
                    },
                    MaximumAutomaticAttempts: sdk.Int64(378245),
                    Parameters: map[string]shared.RemediationParameterValue{
                        "maiores": shared.RemediationParameterValue{
                            ResourceValue: &shared.ResourceValue{
                                Value: shared.ResourceValueTypeEnumResourceID,
                            },
                            StaticValue: &shared.StaticValue{
                                Values: []string{
                                    "dolores",
                                    "id",
                                    "minima",
                                    "dolore",
                                },
                            },
                        },
                    },
                    ResourceType: sdk.String("dolorum"),
                    RetryAttemptSeconds: sdk.Int64(200364),
                    TargetID: "quae",
                    TargetType: shared.RemediationTargetTypeEnumSsmDocument,
                    TargetVersion: sdk.String("recusandae"),
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
        XAmzTarget: operations.PutRemediationConfigurationsXAmzTargetEnumStarlingDoveServicePutRemediationConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRemediationConfigurationsResponse != nil {
        // handle response
    }
}
```

## PutRemediationExceptions

<p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>

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
    res, err := s.SDK.PutRemediationExceptions(ctx, operations.PutRemediationExceptionsRequest{
        PutRemediationExceptionsRequest: shared.PutRemediationExceptionsRequest{
            ConfigRuleName: "debitis",
            ExpirationTime: types.MustTimeFromString("2022-02-19T04:44:11.304Z"),
            Message: sdk.String("nemo"),
            ResourceKeys: []shared.RemediationExceptionResourceKey{
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("esse"),
                    ResourceType: sdk.String("provident"),
                },
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("quis"),
                    ResourceType: sdk.String("eum"),
                },
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("reiciendis"),
                    ResourceType: sdk.String("provident"),
                },
                shared.RemediationExceptionResourceKey{
                    ResourceID: sdk.String("aspernatur"),
                    ResourceType: sdk.String("ullam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.PutRemediationExceptionsXAmzTargetEnumStarlingDoveServicePutRemediationExceptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRemediationExceptionsResponse != nil {
        // handle response
    }
}
```

## PutResourceConfig

<p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutResourceConfig(ctx, operations.PutResourceConfigRequest{
        PutResourceConfigRequest: shared.PutResourceConfigRequest{
            Configuration: "ex",
            ResourceID: "aliquid",
            ResourceName: sdk.String("accusantium"),
            ResourceType: "repellat",
            SchemaVersionID: "doloribus",
            Tags: map[string]string{
                "in": "nam",
                "earum": "officia",
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.PutResourceConfigXAmzTargetEnumStarlingDoveServicePutResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutRetentionConfiguration

<p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutRetentionConfiguration(ctx, operations.PutRetentionConfigurationRequest{
        PutRetentionConfigurationRequest: shared.PutRetentionConfigurationRequest{
            RetentionPeriodInDays: 764562,
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.PutRetentionConfigurationXAmzTargetEnumStarlingDoveServicePutRetentionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRetentionConfigurationResponse != nil {
        // handle response
    }
}
```

## PutStoredQuery

<p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutStoredQuery(ctx, operations.PutStoredQueryRequest{
        PutStoredQueryRequest: shared.PutStoredQueryRequest{
            StoredQuery: shared.StoredQuery{
                Description: sdk.String("quae"),
                Expression: sdk.String("perferendis"),
                QueryArn: sdk.String("velit"),
                QueryID: sdk.String("aspernatur"),
                QueryName: "eum",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("rem"),
                    Value: sdk.String("at"),
                },
                shared.Tag{
                    Key: sdk.String("impedit"),
                    Value: sdk.String("eos"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.PutStoredQueryXAmzTargetEnumStarlingDoveServicePutStoredQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutStoredQueryResponse != nil {
        // handle response
    }
}
```

## SelectAggregateResourceConfig

<p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SelectAggregateResourceConfig(ctx, operations.SelectAggregateResourceConfigRequest{
        Limit: sdk.String("earum"),
        NextToken: sdk.String("soluta"),
        SelectAggregateResourceConfigRequest: shared.SelectAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "hic",
            Expression: "illum",
            Limit: sdk.Int64(52508),
            MaxResults: sdk.Int64(935833),
            NextToken: sdk.String("perspiciatis"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.SelectAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceSelectAggregateResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectAggregateResourceConfigResponse != nil {
        // handle response
    }
}
```

## SelectResourceConfig

<p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SelectResourceConfig(ctx, operations.SelectResourceConfigRequest{
        Limit: sdk.String("cumque"),
        NextToken: sdk.String("fuga"),
        SelectResourceConfigRequest: shared.SelectResourceConfigRequest{
            Expression: "ratione",
            Limit: sdk.Int64(656762),
            NextToken: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.SelectResourceConfigXAmzTargetEnumStarlingDoveServiceSelectResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectResourceConfigResponse != nil {
        // handle response
    }
}
```

## StartConfigRulesEvaluation

<p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartConfigRulesEvaluation(ctx, operations.StartConfigRulesEvaluationRequest{
        StartConfigRulesEvaluationRequest: shared.StartConfigRulesEvaluationRequest{
            ConfigRuleNames: []string{
                "adipisci",
                "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.StartConfigRulesEvaluationXAmzTargetEnumStarlingDoveServiceStartConfigRulesEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartConfigRulesEvaluationResponse != nil {
        // handle response
    }
}
```

## StartConfigurationRecorder

<p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartConfigurationRecorder(ctx, operations.StartConfigurationRecorderRequest{
        StartConfigurationRecorderRequest: shared.StartConfigurationRecorderRequest{
            ConfigurationRecorderName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.StartConfigurationRecorderXAmzTargetEnumStarlingDoveServiceStartConfigurationRecorder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartRemediationExecution

<p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartRemediationExecution(ctx, operations.StartRemediationExecutionRequest{
        StartRemediationExecutionRequest: shared.StartRemediationExecutionRequest{
            ConfigRuleName: "architecto",
            ResourceKeys: []shared.ResourceKey{
                shared.ResourceKey{
                    ResourceID: "doloremque",
                    ResourceType: shared.ResourceTypeEnumAwsRdsDbSnapshot,
                },
                shared.ResourceKey{
                    ResourceID: "odio",
                    ResourceType: shared.ResourceTypeEnumAwsWaFv2RegexPatternSet,
                },
                shared.ResourceKey{
                    ResourceID: "esse",
                    ResourceType: shared.ResourceTypeEnumAwsKinesisStream,
                },
                shared.ResourceKey{
                    ResourceID: "consectetur",
                    ResourceType: shared.ResourceTypeEnumAwsEc2TransitGateway,
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.StartRemediationExecutionXAmzTargetEnumStarlingDoveServiceStartRemediationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRemediationExecutionResponse != nil {
        // handle response
    }
}
```

## StartResourceEvaluation

<p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartResourceEvaluation(ctx, operations.StartResourceEvaluationRequest{
        StartResourceEvaluationRequest: shared.StartResourceEvaluationRequest{
            ClientToken: sdk.String("officia"),
            EvaluationContext: &shared.EvaluationContext{
                EvaluationContextIdentifier: sdk.String("suscipit"),
            },
            EvaluationMode: shared.EvaluationModeEnumDetective,
            EvaluationTimeout: sdk.Int64(21973),
            ResourceDetails: shared.ResourceDetails{
                ResourceConfiguration: "eum",
                ResourceConfigurationSchemaType: shared.ResourceConfigurationSchemaTypeEnumCfnResourceSchema.ToPointer(),
                ResourceID: "voluptas",
                ResourceType: "iste",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.StartResourceEvaluationXAmzTargetEnumStarlingDoveServiceStartResourceEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartResourceEvaluationResponse != nil {
        // handle response
    }
}
```

## StopConfigurationRecorder

Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopConfigurationRecorder(ctx, operations.StopConfigurationRecorderRequest{
        StopConfigurationRecorderRequest: shared.StopConfigurationRecorderRequest{
            ConfigurationRecorderName: "libero",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.StopConfigurationRecorderXAmzTargetEnumStarlingDoveServiceStopConfigurationRecorder,
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

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            ResourceArn: "ex",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ad"),
                    Value: sdk.String("expedita"),
                },
                shared.Tag{
                    Key: sdk.String("voluptatem"),
                    Value: sdk.String("molestias"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumStarlingDoveServiceTagResource,
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
            ResourceArn: "est",
            TagKeys: []string{
                "voluptatem",
                "sapiente",
                "officiis",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumStarlingDoveServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
