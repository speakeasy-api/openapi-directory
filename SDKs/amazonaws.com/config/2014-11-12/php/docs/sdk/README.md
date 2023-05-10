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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAggregateResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAggregateResourceConfigRequest();
    $request->batchGetAggregateResourceConfigRequest = new BatchGetAggregateResourceConfigRequest();
    $request->batchGetAggregateResourceConfigRequest->configurationAggregatorName = 'error';
    $request->batchGetAggregateResourceConfigRequest->resourceIdentifiers = [
        new AggregateResourceIdentifier(),
        new AggregateResourceIdentifier(),
        new AggregateResourceIdentifier(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = BatchGetAggregateResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_BATCH_GET_AGGREGATE_RESOURCE_CONFIG;

    $response = $sdk->sdk->batchGetAggregateResourceConfig($request);

    if ($response->batchGetAggregateResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetResourceConfig

<p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceKey;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetResourceConfigRequest();
    $request->batchGetResourceConfigRequest = new BatchGetResourceConfigRequest();
    $request->batchGetResourceConfigRequest->resourceKeys = [
        new ResourceKey(),
        new ResourceKey(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = BatchGetResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_BATCH_GET_RESOURCE_CONFIG;

    $response = $sdk->sdk->batchGetResourceConfig($request);

    if ($response->batchGetResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAggregationAuthorization

Deletes the authorization granted to the specified configuration aggregator account in a specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAggregationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAggregationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAggregationAuthorizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAggregationAuthorizationRequest();
    $request->deleteAggregationAuthorizationRequest = new DeleteAggregationAuthorizationRequest();
    $request->deleteAggregationAuthorizationRequest->authorizedAccountId = 'recusandae';
    $request->deleteAggregationAuthorizationRequest->authorizedAwsRegion = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = DeleteAggregationAuthorizationXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_AGGREGATION_AUTHORIZATION;

    $response = $sdk->sdk->deleteAggregationAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigRule

<p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigRuleRequest();
    $request->deleteConfigRuleRequest = new DeleteConfigRuleRequest();
    $request->deleteConfigRuleRequest->configRuleName = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeleteConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_CONFIG_RULE;

    $response = $sdk->sdk->deleteConfigRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationAggregator

Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConfigurationAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationAggregatorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationAggregatorRequest();
    $request->deleteConfigurationAggregatorRequest = new DeleteConfigurationAggregatorRequest();
    $request->deleteConfigurationAggregatorRequest->configurationAggregatorName = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeleteConfigurationAggregatorXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_CONFIGURATION_AGGREGATOR;

    $response = $sdk->sdk->deleteConfigurationAggregator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationRecorder

<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationRecorderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationRecorderRequest();
    $request->deleteConfigurationRecorderRequest = new DeleteConfigurationRecorderRequest();
    $request->deleteConfigurationRecorderRequest->configurationRecorderName = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteConfigurationRecorderXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_CONFIGURATION_RECORDER;

    $response = $sdk->sdk->deleteConfigurationRecorder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConformancePack

<p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConformancePackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConformancePackRequest();
    $request->deleteConformancePackRequest = new DeleteConformancePackRequest();
    $request->deleteConformancePackRequest->conformancePackName = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteConformancePackXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_CONFORMANCE_PACK;

    $response = $sdk->sdk->deleteConformancePack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeliveryChannel

<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeliveryChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeliveryChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeliveryChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeliveryChannelRequest();
    $request->deleteDeliveryChannelRequest = new DeleteDeliveryChannelRequest();
    $request->deleteDeliveryChannelRequest->deliveryChannelName = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteDeliveryChannelXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_DELIVERY_CHANNEL;

    $response = $sdk->sdk->deleteDeliveryChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEvaluationResults

Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEvaluationResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEvaluationResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEvaluationResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEvaluationResultsRequest();
    $request->deleteEvaluationResultsRequest = new DeleteEvaluationResultsRequest();
    $request->deleteEvaluationResultsRequest->configRuleName = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteEvaluationResultsXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_EVALUATION_RESULTS;

    $response = $sdk->sdk->deleteEvaluationResults($request);

    if ($response->deleteEvaluationResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationConfigRule

<p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOrganizationConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationConfigRuleRequest();
    $request->deleteOrganizationConfigRuleRequest = new DeleteOrganizationConfigRuleRequest();
    $request->deleteOrganizationConfigRuleRequest->organizationConfigRuleName = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteOrganizationConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_ORGANIZATION_CONFIG_RULE;

    $response = $sdk->sdk->deleteOrganizationConfigRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationConformancePack

<p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOrganizationConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConformancePackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationConformancePackRequest();
    $request->deleteOrganizationConformancePackRequest = new DeleteOrganizationConformancePackRequest();
    $request->deleteOrganizationConformancePackRequest->organizationConformancePackName = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteOrganizationConformancePackXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_ORGANIZATION_CONFORMANCE_PACK;

    $response = $sdk->sdk->deleteOrganizationConformancePack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePendingAggregationRequest

Deletes pending authorization requests for a specified aggregator account in a specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePendingAggregationRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePendingAggregationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePendingAggregationRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePendingAggregationRequestRequest();
    $request->deletePendingAggregationRequestRequest = new DeletePendingAggregationRequestRequest();
    $request->deletePendingAggregationRequestRequest->requesterAccountId = 'minima';
    $request->deletePendingAggregationRequestRequest->requesterAwsRegion = 'excepturi';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeletePendingAggregationRequestXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_PENDING_AGGREGATION_REQUEST;

    $response = $sdk->sdk->deletePendingAggregationRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRemediationConfiguration

Deletes the remediation configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemediationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRemediationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemediationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRemediationConfigurationRequest();
    $request->deleteRemediationConfigurationRequest = new DeleteRemediationConfigurationRequest();
    $request->deleteRemediationConfigurationRequest->configRuleName = 'dolorem';
    $request->deleteRemediationConfigurationRequest->resourceType = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DeleteRemediationConfigurationXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_REMEDIATION_CONFIGURATION;

    $response = $sdk->sdk->deleteRemediationConfiguration($request);

    if ($response->deleteRemediationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRemediationExceptions

<p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemediationExceptionResourceKey;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemediationExceptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRemediationExceptionsRequest();
    $request->deleteRemediationExceptionsRequest = new DeleteRemediationExceptionsRequest();
    $request->deleteRemediationExceptionsRequest->configRuleName = 'molestiae';
    $request->deleteRemediationExceptionsRequest->resourceKeys = [
        new RemediationExceptionResourceKey(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteRemediationExceptionsXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_REMEDIATION_EXCEPTIONS;

    $response = $sdk->sdk->deleteRemediationExceptions($request);

    if ($response->deleteRemediationExceptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceConfig

Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceConfigRequest();
    $request->deleteResourceConfigRequest = new DeleteResourceConfigRequest();
    $request->deleteResourceConfigRequest->resourceId = 'odit';
    $request->deleteResourceConfigRequest->resourceType = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_RESOURCE_CONFIG;

    $response = $sdk->sdk->deleteResourceConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRetentionConfiguration

Deletes the retention configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRetentionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRetentionConfigurationRequest();
    $request->deleteRetentionConfigurationRequest = new DeleteRetentionConfigurationRequest();
    $request->deleteRetentionConfigurationRequest->retentionConfigurationName = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DeleteRetentionConfigurationXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_RETENTION_CONFIGURATION;

    $response = $sdk->sdk->deleteRetentionConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStoredQuery

Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStoredQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStoredQueryRequest();
    $request->deleteStoredQueryRequest = new DeleteStoredQueryRequest();
    $request->deleteStoredQueryRequest->queryName = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = DeleteStoredQueryXAmzTargetEnum::STARLING_DOVE_SERVICE_DELETE_STORED_QUERY;

    $response = $sdk->sdk->deleteStoredQuery($request);

    if ($response->deleteStoredQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deliverConfigSnapshot

<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeliverConfigSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeliverConfigSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeliverConfigSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeliverConfigSnapshotRequest();
    $request->deliverConfigSnapshotRequest = new DeliverConfigSnapshotRequest();
    $request->deliverConfigSnapshotRequest->deliveryChannelName = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeliverConfigSnapshotXAmzTargetEnum::STARLING_DOVE_SERVICE_DELIVER_CONFIG_SNAPSHOT;

    $response = $sdk->sdk->deliverConfigSnapshot($request);

    if ($response->deliverConfigSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAggregateComplianceByConfigRules

<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregateComplianceByConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAggregateComplianceByConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigRuleComplianceFilters;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregateComplianceByConfigRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAggregateComplianceByConfigRulesRequest();
    $request->describeAggregateComplianceByConfigRulesRequest = new DescribeAggregateComplianceByConfigRulesRequest();
    $request->describeAggregateComplianceByConfigRulesRequest->configurationAggregatorName = 'harum';
    $request->describeAggregateComplianceByConfigRulesRequest->filters = new ConfigRuleComplianceFilters();
    $request->describeAggregateComplianceByConfigRulesRequest->filters->accountId = 'enim';
    $request->describeAggregateComplianceByConfigRulesRequest->filters->awsRegion = 'accusamus';
    $request->describeAggregateComplianceByConfigRulesRequest->filters->complianceType = ComplianceTypeEnum::NON_COMPLIANT;
    $request->describeAggregateComplianceByConfigRulesRequest->filters->configRuleName = 'repudiandae';
    $request->describeAggregateComplianceByConfigRulesRequest->limit = 64147;
    $request->describeAggregateComplianceByConfigRulesRequest->nextToken = 'ipsum';
    $request->limit = 'quidem';
    $request->nextToken = 'molestias';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeAggregateComplianceByConfigRulesXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFIG_RULES;

    $response = $sdk->sdk->describeAggregateComplianceByConfigRules($request);

    if ($response->describeAggregateComplianceByConfigRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAggregateComplianceByConformancePacks

<p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregateComplianceByConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAggregateComplianceByConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateConformancePackComplianceFilters;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAggregateComplianceByConformancePacksRequest();
    $request->describeAggregateComplianceByConformancePacksRequest = new DescribeAggregateComplianceByConformancePacksRequest();
    $request->describeAggregateComplianceByConformancePacksRequest->configurationAggregatorName = 'repudiandae';
    $request->describeAggregateComplianceByConformancePacksRequest->filters = new AggregateConformancePackComplianceFilters();
    $request->describeAggregateComplianceByConformancePacksRequest->filters->accountId = 'sint';
    $request->describeAggregateComplianceByConformancePacksRequest->filters->awsRegion = 'veritatis';
    $request->describeAggregateComplianceByConformancePacksRequest->filters->complianceType = ConformancePackComplianceTypeEnum::INSUFFICIENT_DATA;
    $request->describeAggregateComplianceByConformancePacksRequest->filters->conformancePackName = 'incidunt';
    $request->describeAggregateComplianceByConformancePacksRequest->limit = 318569;
    $request->describeAggregateComplianceByConformancePacksRequest->nextToken = 'consequatur';
    $request->limit = 'est';
    $request->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeAggregateComplianceByConformancePacksXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFORMANCE_PACKS;

    $response = $sdk->sdk->describeAggregateComplianceByConformancePacks($request);

    if ($response->describeAggregateComplianceByConformancePacksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAggregationAuthorizations

Returns a list of authorizations granted to various aggregator accounts and regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregationAuthorizationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAggregationAuthorizationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAggregationAuthorizationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAggregationAuthorizationsRequest();
    $request->describeAggregationAuthorizationsRequest = new DescribeAggregationAuthorizationsRequest();
    $request->describeAggregationAuthorizationsRequest->limit = 397821;
    $request->describeAggregationAuthorizationsRequest->nextToken = 'cupiditate';
    $request->limit = 'quos';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeAggregationAuthorizationsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_AGGREGATION_AUTHORIZATIONS;

    $response = $sdk->sdk->describeAggregationAuthorizations($request);

    if ($response->describeAggregationAuthorizationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComplianceByConfigRule

<p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComplianceByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComplianceByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComplianceByConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComplianceByConfigRuleRequest();
    $request->describeComplianceByConfigRuleRequest = new DescribeComplianceByConfigRuleRequest();
    $request->describeComplianceByConfigRuleRequest->complianceTypes = [
        ComplianceTypeEnum::NOT_APPLICABLE,
        ComplianceTypeEnum::NOT_APPLICABLE,
    ];
    $request->describeComplianceByConfigRuleRequest->configRuleNames = [
        'delectus',
        'eum',
    ];
    $request->describeComplianceByConfigRuleRequest->nextToken = 'non';
    $request->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeComplianceByConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_CONFIG_RULE;

    $response = $sdk->sdk->describeComplianceByConfigRule($request);

    if ($response->describeComplianceByConfigRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComplianceByResource

<p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComplianceByResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComplianceByResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComplianceByResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComplianceByResourceRequest();
    $request->describeComplianceByResourceRequest = new DescribeComplianceByResourceRequest();
    $request->describeComplianceByResourceRequest->complianceTypes = [
        ComplianceTypeEnum::INSUFFICIENT_DATA,
        ComplianceTypeEnum::NOT_APPLICABLE,
        ComplianceTypeEnum::NON_COMPLIANT,
        ComplianceTypeEnum::NON_COMPLIANT,
    ];
    $request->describeComplianceByResourceRequest->limit = 846409;
    $request->describeComplianceByResourceRequest->nextToken = 'maiores';
    $request->describeComplianceByResourceRequest->resourceId = 'rerum';
    $request->describeComplianceByResourceRequest->resourceType = 'dicta';
    $request->limit = 'magnam';
    $request->nextToken = 'cumque';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DescribeComplianceByResourceXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_RESOURCE;

    $response = $sdk->sdk->describeComplianceByResource($request);

    if ($response->describeComplianceByResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigRuleEvaluationStatus

Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigRuleEvaluationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigRuleEvaluationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigRuleEvaluationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigRuleEvaluationStatusRequest();
    $request->describeConfigRuleEvaluationStatusRequest = new DescribeConfigRuleEvaluationStatusRequest();
    $request->describeConfigRuleEvaluationStatusRequest->configRuleNames = [
        'accusamus',
        'delectus',
    ];
    $request->describeConfigRuleEvaluationStatusRequest->limit = 692532;
    $request->describeConfigRuleEvaluationStatusRequest->nextToken = 'provident';
    $request->limit = 'nam';
    $request->nextToken = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeConfigRuleEvaluationStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIG_RULE_EVALUATION_STATUS;

    $response = $sdk->sdk->describeConfigRuleEvaluationStatus($request);

    if ($response->describeConfigRuleEvaluationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigRules

Returns details about your Config rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigRulesFilters;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigRulesRequest();
    $request->describeConfigRulesRequest = new DescribeConfigRulesRequest();
    $request->describeConfigRulesRequest->configRuleNames = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->describeConfigRulesRequest->filters = new DescribeConfigRulesFilters();
    $request->describeConfigRulesRequest->filters->evaluationMode = EvaluationModeEnum::DETECTIVE;
    $request->describeConfigRulesRequest->nextToken = 'magnam';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DescribeConfigRulesXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIG_RULES;

    $response = $sdk->sdk->describeConfigRules($request);

    if ($response->describeConfigRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurationAggregatorSourcesStatus

Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationAggregatorSourcesStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationAggregatorSourcesStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregatedSourceStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationAggregatorSourcesStatusRequest();
    $request->describeConfigurationAggregatorSourcesStatusRequest = new DescribeConfigurationAggregatorSourcesStatusRequest();
    $request->describeConfigurationAggregatorSourcesStatusRequest->configurationAggregatorName = 'vero';
    $request->describeConfigurationAggregatorSourcesStatusRequest->limit = 135474;
    $request->describeConfigurationAggregatorSourcesStatusRequest->nextToken = 'architecto';
    $request->describeConfigurationAggregatorSourcesStatusRequest->updateStatus = [
        AggregatedSourceStatusTypeEnum::FAILED,
        AggregatedSourceStatusTypeEnum::SUCCEEDED,
    ];
    $request->limit = 'ullam';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_AGGREGATOR_SOURCES_STATUS;

    $response = $sdk->sdk->describeConfigurationAggregatorSourcesStatus($request);

    if ($response->describeConfigurationAggregatorSourcesStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurationAggregators

Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationAggregatorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationAggregatorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationAggregatorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationAggregatorsRequest();
    $request->describeConfigurationAggregatorsRequest = new DescribeConfigurationAggregatorsRequest();
    $request->describeConfigurationAggregatorsRequest->configurationAggregatorNames = [
        'dolor',
        'necessitatibus',
    ];
    $request->describeConfigurationAggregatorsRequest->limit = 141264;
    $request->describeConfigurationAggregatorsRequest->nextToken = 'nemo';
    $request->limit = 'quasi';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeConfigurationAggregatorsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_AGGREGATORS;

    $response = $sdk->sdk->describeConfigurationAggregators($request);

    if ($response->describeConfigurationAggregatorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurationRecorderStatus

<p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationRecorderStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationRecorderStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationRecorderStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationRecorderStatusRequest();
    $request->describeConfigurationRecorderStatusRequest = new DescribeConfigurationRecorderStatusRequest();
    $request->describeConfigurationRecorderStatusRequest->configurationRecorderNames = [
        'architecto',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DescribeConfigurationRecorderStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDER_STATUS;

    $response = $sdk->sdk->describeConfigurationRecorderStatus($request);

    if ($response->describeConfigurationRecorderStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurationRecorders

<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationRecordersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationRecordersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationRecordersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationRecordersRequest();
    $request->describeConfigurationRecordersRequest = new DescribeConfigurationRecordersRequest();
    $request->describeConfigurationRecordersRequest->configurationRecorderNames = [
        'pariatur',
        'accusantium',
        'consequuntur',
        'praesentium',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribeConfigurationRecordersXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDERS;

    $response = $sdk->sdk->describeConfigurationRecorders($request);

    if ($response->describeConfigurationRecordersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConformancePackCompliance

<p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePackComplianceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConformancePackComplianceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackComplianceFilters;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePackComplianceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConformancePackComplianceRequest();
    $request->describeConformancePackComplianceRequest = new DescribeConformancePackComplianceRequest();
    $request->describeConformancePackComplianceRequest->conformancePackName = 'ea';
    $request->describeConformancePackComplianceRequest->filters = new ConformancePackComplianceFilters();
    $request->describeConformancePackComplianceRequest->filters->complianceType = ConformancePackComplianceTypeEnum::NON_COMPLIANT;
    $request->describeConformancePackComplianceRequest->filters->configRuleNames = [
        'ea',
    ];
    $request->describeConformancePackComplianceRequest->limit = 33222;
    $request->describeConformancePackComplianceRequest->nextToken = 'ab';
    $request->limit = 'maiores';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DescribeConformancePackComplianceXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACK_COMPLIANCE;

    $response = $sdk->sdk->describeConformancePackCompliance($request);

    if ($response->describeConformancePackComplianceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConformancePackStatus

<p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePackStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConformancePackStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePackStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConformancePackStatusRequest();
    $request->describeConformancePackStatusRequest = new DescribeConformancePackStatusRequest();
    $request->describeConformancePackStatusRequest->conformancePackNames = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->describeConformancePackStatusRequest->limit = 764912;
    $request->describeConformancePackStatusRequest->nextToken = 'corporis';
    $request->limit = 'hic';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeConformancePackStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACK_STATUS;

    $response = $sdk->sdk->describeConformancePackStatus($request);

    if ($response->describeConformancePackStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConformancePacks

Returns a list of one or more conformance packs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConformancePacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConformancePacksRequest();
    $request->describeConformancePacksRequest = new DescribeConformancePacksRequest();
    $request->describeConformancePacksRequest->conformancePackNames = [
        'eos',
    ];
    $request->describeConformancePacksRequest->limit = 18521;
    $request->describeConformancePacksRequest->nextToken = 'dolores';
    $request->limit = 'minus';
    $request->nextToken = 'quam';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DescribeConformancePacksXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_CONFORMANCE_PACKS;

    $response = $sdk->sdk->describeConformancePacks($request);

    if ($response->describeConformancePacksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeliveryChannelStatus

<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryChannelStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeliveryChannelStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryChannelStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeliveryChannelStatusRequest();
    $request->describeDeliveryChannelStatusRequest = new DescribeDeliveryChannelStatusRequest();
    $request->describeDeliveryChannelStatusRequest->deliveryChannelNames = [
        'voluptatem',
        'porro',
        'consequuntur',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DescribeDeliveryChannelStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNEL_STATUS;

    $response = $sdk->sdk->describeDeliveryChannelStatus($request);

    if ($response->describeDeliveryChannelStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeliveryChannels

<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDeliveryChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeliveryChannelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeliveryChannelsRequest();
    $request->describeDeliveryChannelsRequest = new DescribeDeliveryChannelsRequest();
    $request->describeDeliveryChannelsRequest->deliveryChannelNames = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = DescribeDeliveryChannelsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNELS;

    $response = $sdk->sdk->describeDeliveryChannels($request);

    if ($response->describeDeliveryChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfigRuleStatuses

<p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigRuleStatusesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrganizationConfigRuleStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConfigRuleStatusesRequest();
    $request->describeOrganizationConfigRuleStatusesRequest = new DescribeOrganizationConfigRuleStatusesRequest();
    $request->describeOrganizationConfigRuleStatusesRequest->limit = 398221;
    $request->describeOrganizationConfigRuleStatusesRequest->nextToken = 'dolorem';
    $request->describeOrganizationConfigRuleStatusesRequest->organizationConfigRuleNames = [
        'dolor',
    ];
    $request->limit = 'qui';
    $request->nextToken = 'ipsum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DescribeOrganizationConfigRuleStatusesXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES;

    $response = $sdk->sdk->describeOrganizationConfigRuleStatuses($request);

    if ($response->describeOrganizationConfigRuleStatusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfigRules

<p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrganizationConfigRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConfigRulesRequest();
    $request->describeOrganizationConfigRulesRequest = new DescribeOrganizationConfigRulesRequest();
    $request->describeOrganizationConfigRulesRequest->limit = 680545;
    $request->describeOrganizationConfigRulesRequest->nextToken = 'numquam';
    $request->describeOrganizationConfigRulesRequest->organizationConfigRuleNames = [
        'ipsa',
    ];
    $request->limit = 'ipsa';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DescribeOrganizationConfigRulesXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULES;

    $response = $sdk->sdk->describeOrganizationConfigRules($request);

    if ($response->describeOrganizationConfigRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConformancePackStatuses

<p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConformancePackStatusesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrganizationConformancePackStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConformancePackStatusesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConformancePackStatusesRequest();
    $request->describeOrganizationConformancePackStatusesRequest = new DescribeOrganizationConformancePackStatusesRequest();
    $request->describeOrganizationConformancePackStatusesRequest->limit = 179603;
    $request->describeOrganizationConformancePackStatusesRequest->nextToken = 'atque';
    $request->describeOrganizationConformancePackStatusesRequest->organizationConformancePackNames = [
        'fugiat',
    ];
    $request->limit = 'ab';
    $request->nextToken = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DescribeOrganizationConformancePackStatusesXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACK_STATUSES;

    $response = $sdk->sdk->describeOrganizationConformancePackStatuses($request);

    if ($response->describeOrganizationConformancePackStatusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConformancePacks

<p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrganizationConformancePacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConformancePacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConformancePacksRequest();
    $request->describeOrganizationConformancePacksRequest = new DescribeOrganizationConformancePacksRequest();
    $request->describeOrganizationConformancePacksRequest->limit = 714697;
    $request->describeOrganizationConformancePacksRequest->nextToken = 'asperiores';
    $request->describeOrganizationConformancePacksRequest->organizationConformancePackNames = [
        'ipsum',
        'voluptate',
    ];
    $request->limit = 'id';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = DescribeOrganizationConformancePacksXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS;

    $response = $sdk->sdk->describeOrganizationConformancePacks($request);

    if ($response->describeOrganizationConformancePacksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePendingAggregationRequests

Returns a list of all pending aggregation requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePendingAggregationRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePendingAggregationRequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePendingAggregationRequestsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePendingAggregationRequestsRequest();
    $request->describePendingAggregationRequestsRequest = new DescribePendingAggregationRequestsRequest();
    $request->describePendingAggregationRequestsRequest->limit = 904425;
    $request->describePendingAggregationRequestsRequest->nextToken = 'suscipit';
    $request->limit = 'deserunt';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DescribePendingAggregationRequestsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_PENDING_AGGREGATION_REQUESTS;

    $response = $sdk->sdk->describePendingAggregationRequests($request);

    if ($response->describePendingAggregationRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRemediationConfigurations

Returns the details of one or more remediation configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRemediationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRemediationConfigurationsRequest();
    $request->describeRemediationConfigurationsRequest = new DescribeRemediationConfigurationsRequest();
    $request->describeRemediationConfigurationsRequest->configRuleNames = [
        'vel',
        'quod',
    ];
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DescribeRemediationConfigurationsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_CONFIGURATIONS;

    $response = $sdk->sdk->describeRemediationConfigurations($request);

    if ($response->describeRemediationConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRemediationExceptions

<p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemediationExceptionResourceKey;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationExceptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRemediationExceptionsRequest();
    $request->describeRemediationExceptionsRequest = new DescribeRemediationExceptionsRequest();
    $request->describeRemediationExceptionsRequest->configRuleName = 'ipsum';
    $request->describeRemediationExceptionsRequest->limit = 788740;
    $request->describeRemediationExceptionsRequest->nextToken = 'tenetur';
    $request->describeRemediationExceptionsRequest->resourceKeys = [
        new RemediationExceptionResourceKey(),
    ];
    $request->limit = 'tempore';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = DescribeRemediationExceptionsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_EXCEPTIONS;

    $response = $sdk->sdk->describeRemediationExceptions($request);

    if ($response->describeRemediationExceptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRemediationExecutionStatus

Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationExecutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRemediationExecutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceKey;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRemediationExecutionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRemediationExecutionStatusRequest();
    $request->describeRemediationExecutionStatusRequest = new DescribeRemediationExecutionStatusRequest();
    $request->describeRemediationExecutionStatusRequest->configRuleName = 'expedita';
    $request->describeRemediationExecutionStatusRequest->limit = 207470;
    $request->describeRemediationExecutionStatusRequest->nextToken = 'sed';
    $request->describeRemediationExecutionStatusRequest->resourceKeys = [
        new ResourceKey(),
        new ResourceKey(),
    ];
    $request->limit = 'libero';
    $request->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribeRemediationExecutionStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_EXECUTION_STATUS;

    $response = $sdk->sdk->describeRemediationExecutionStatus($request);

    if ($response->describeRemediationExecutionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRetentionConfigurations

<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRetentionConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRetentionConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRetentionConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRetentionConfigurationsRequest();
    $request->describeRetentionConfigurationsRequest = new DescribeRetentionConfigurationsRequest();
    $request->describeRetentionConfigurationsRequest->nextToken = 'pariatur';
    $request->describeRetentionConfigurationsRequest->retentionConfigurationNames = [
        'dicta',
        'laborum',
        'totam',
    ];
    $request->nextToken = 'incidunt';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = DescribeRetentionConfigurationsXAmzTargetEnum::STARLING_DOVE_SERVICE_DESCRIBE_RETENTION_CONFIGURATIONS;

    $response = $sdk->sdk->describeRetentionConfigurations($request);

    if ($response->describeRetentionConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAggregateComplianceDetailsByConfigRule

<p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateComplianceDetailsByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAggregateComplianceDetailsByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregateComplianceDetailsByConfigRuleRequest();
    $request->getAggregateComplianceDetailsByConfigRuleRequest = new GetAggregateComplianceDetailsByConfigRuleRequest();
    $request->getAggregateComplianceDetailsByConfigRuleRequest->accountId = 'temporibus';
    $request->getAggregateComplianceDetailsByConfigRuleRequest->awsRegion = 'qui';
    $request->getAggregateComplianceDetailsByConfigRuleRequest->complianceType = ComplianceTypeEnum::COMPLIANT;
    $request->getAggregateComplianceDetailsByConfigRuleRequest->configRuleName = 'fugit';
    $request->getAggregateComplianceDetailsByConfigRuleRequest->configurationAggregatorName = 'magni';
    $request->getAggregateComplianceDetailsByConfigRuleRequest->limit = 488056;
    $request->getAggregateComplianceDetailsByConfigRuleRequest->nextToken = 'sunt';
    $request->limit = 'ullam';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE;

    $response = $sdk->sdk->getAggregateComplianceDetailsByConfigRule($request);

    if ($response->getAggregateComplianceDetailsByConfigRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAggregateConfigRuleComplianceSummary

<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateConfigRuleComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAggregateConfigRuleComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigRuleComplianceSummaryFilters;
use \OpenAPI\OpenAPI\Models\Shared\ConfigRuleComplianceSummaryGroupKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregateConfigRuleComplianceSummaryRequest();
    $request->getAggregateConfigRuleComplianceSummaryRequest = new GetAggregateConfigRuleComplianceSummaryRequest();
    $request->getAggregateConfigRuleComplianceSummaryRequest->configurationAggregatorName = 'ipsum';
    $request->getAggregateConfigRuleComplianceSummaryRequest->filters = new ConfigRuleComplianceSummaryFilters();
    $request->getAggregateConfigRuleComplianceSummaryRequest->filters->accountId = 'veritatis';
    $request->getAggregateConfigRuleComplianceSummaryRequest->filters->awsRegion = 'nobis';
    $request->getAggregateConfigRuleComplianceSummaryRequest->groupByKey = ConfigRuleComplianceSummaryGroupKeyEnum::AWS_REGION;
    $request->getAggregateConfigRuleComplianceSummaryRequest->limit = 731694;
    $request->getAggregateConfigRuleComplianceSummaryRequest->nextToken = 'cupiditate';
    $request->limit = 'aperiam';
    $request->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_AGGREGATE_CONFIG_RULE_COMPLIANCE_SUMMARY;

    $response = $sdk->sdk->getAggregateConfigRuleComplianceSummary($request);

    if ($response->getAggregateConfigRuleComplianceSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAggregateConformancePackComplianceSummary

<p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateConformancePackComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAggregateConformancePackComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateConformancePackComplianceSummaryFilters;
use \OpenAPI\OpenAPI\Models\Shared\AggregateConformancePackComplianceSummaryGroupKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateConformancePackComplianceSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregateConformancePackComplianceSummaryRequest();
    $request->getAggregateConformancePackComplianceSummaryRequest = new GetAggregateConformancePackComplianceSummaryRequest();
    $request->getAggregateConformancePackComplianceSummaryRequest->configurationAggregatorName = 'aut';
    $request->getAggregateConformancePackComplianceSummaryRequest->filters = new AggregateConformancePackComplianceSummaryFilters();
    $request->getAggregateConformancePackComplianceSummaryRequest->filters->accountId = 'quas';
    $request->getAggregateConformancePackComplianceSummaryRequest->filters->awsRegion = 'itaque';
    $request->getAggregateConformancePackComplianceSummaryRequest->groupByKey = AggregateConformancePackComplianceSummaryGroupKeyEnum::ACCOUNT_ID;
    $request->getAggregateConformancePackComplianceSummaryRequest->limit = 669917;
    $request->getAggregateConformancePackComplianceSummaryRequest->nextToken = 'repellendus';
    $request->limit = 'porro';
    $request->nextToken = 'doloribus';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = GetAggregateConformancePackComplianceSummaryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY;

    $response = $sdk->sdk->getAggregateConformancePackComplianceSummary($request);

    if ($response->getAggregateConformancePackComplianceSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAggregateDiscoveredResourceCounts

<p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateDiscoveredResourceCountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAggregateDiscoveredResourceCountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCountFilters;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCountGroupKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateDiscoveredResourceCountsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregateDiscoveredResourceCountsRequest();
    $request->getAggregateDiscoveredResourceCountsRequest = new GetAggregateDiscoveredResourceCountsRequest();
    $request->getAggregateDiscoveredResourceCountsRequest->configurationAggregatorName = 'occaecati';
    $request->getAggregateDiscoveredResourceCountsRequest->filters = new ResourceCountFilters();
    $request->getAggregateDiscoveredResourceCountsRequest->filters->accountId = 'voluptatibus';
    $request->getAggregateDiscoveredResourceCountsRequest->filters->region = 'quisquam';
    $request->getAggregateDiscoveredResourceCountsRequest->filters->resourceType = ResourceTypeEnum::AWS_EC2_TRAFFIC_MIRROR_SESSION;
    $request->getAggregateDiscoveredResourceCountsRequest->groupByKey = ResourceCountGroupKeyEnum::ACCOUNT_ID;
    $request->getAggregateDiscoveredResourceCountsRequest->limit = 338159;
    $request->getAggregateDiscoveredResourceCountsRequest->nextToken = 'ipsum';
    $request->limit = 'delectus';
    $request->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = GetAggregateDiscoveredResourceCountsXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_AGGREGATE_DISCOVERED_RESOURCE_COUNTS;

    $response = $sdk->sdk->getAggregateDiscoveredResourceCounts($request);

    if ($response->getAggregateDiscoveredResourceCountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAggregateResourceConfig

Returns configuration item that is aggregated for your specific resource in a specific source account and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregateResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregateResourceConfigRequest();
    $request->getAggregateResourceConfigRequest = new GetAggregateResourceConfigRequest();
    $request->getAggregateResourceConfigRequest->configurationAggregatorName = 'odio';
    $request->getAggregateResourceConfigRequest->resourceIdentifier = new AggregateResourceIdentifier();
    $request->getAggregateResourceConfigRequest->resourceIdentifier->resourceId = 'similique';
    $request->getAggregateResourceConfigRequest->resourceIdentifier->resourceName = 'facilis';
    $request->getAggregateResourceConfigRequest->resourceIdentifier->resourceType = ResourceTypeEnum::AWS_ROBO_MAKER_ROBOT_APPLICATION_VERSION;
    $request->getAggregateResourceConfigRequest->resourceIdentifier->sourceAccountId = 'ducimus';
    $request->getAggregateResourceConfigRequest->resourceIdentifier->sourceRegion = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = GetAggregateResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_AGGREGATE_RESOURCE_CONFIG;

    $response = $sdk->sdk->getAggregateResourceConfig($request);

    if ($response->getAggregateResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceDetailsByConfigRule

Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailsByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComplianceDetailsByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailsByConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceDetailsByConfigRuleRequest();
    $request->getComplianceDetailsByConfigRuleRequest = new GetComplianceDetailsByConfigRuleRequest();
    $request->getComplianceDetailsByConfigRuleRequest->complianceTypes = [
        ComplianceTypeEnum::INSUFFICIENT_DATA,
        ComplianceTypeEnum::COMPLIANT,
    ];
    $request->getComplianceDetailsByConfigRuleRequest->configRuleName = 'porro';
    $request->getComplianceDetailsByConfigRuleRequest->limit = 981830;
    $request->getComplianceDetailsByConfigRuleRequest->nextToken = 'doloribus';
    $request->limit = 'iusto';
    $request->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = GetComplianceDetailsByConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE;

    $response = $sdk->sdk->getComplianceDetailsByConfigRule($request);

    if ($response->getComplianceDetailsByConfigRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceDetailsByResource

Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailsByResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComplianceDetailsByResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailsByResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceDetailsByResourceRequest();
    $request->getComplianceDetailsByResourceRequest = new GetComplianceDetailsByResourceRequest();
    $request->getComplianceDetailsByResourceRequest->complianceTypes = [
        ComplianceTypeEnum::INSUFFICIENT_DATA,
        ComplianceTypeEnum::NON_COMPLIANT,
    ];
    $request->getComplianceDetailsByResourceRequest->nextToken = 'ratione';
    $request->getComplianceDetailsByResourceRequest->resourceEvaluationId = 'ex';
    $request->getComplianceDetailsByResourceRequest->resourceId = 'laudantium';
    $request->getComplianceDetailsByResourceRequest->resourceType = 'dicta';
    $request->nextToken = 'dolor';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = GetComplianceDetailsByResourceXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_RESOURCE;

    $response = $sdk->sdk->getComplianceDetailsByResource($request);

    if ($response->getComplianceDetailsByResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceSummaryByConfigRule

Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryByConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryByConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceSummaryByConfigRuleRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = GetComplianceSummaryByConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE;

    $response = $sdk->sdk->getComplianceSummaryByConfigRule($request);

    if ($response->getComplianceSummaryByConfigRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceSummaryByResourceType

Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryByResourceTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComplianceSummaryByResourceTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryByResourceTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceSummaryByResourceTypeRequest();
    $request->getComplianceSummaryByResourceTypeRequest = new GetComplianceSummaryByResourceTypeRequest();
    $request->getComplianceSummaryByResourceTypeRequest->resourceTypes = [
        'inventore',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = GetComplianceSummaryByResourceTypeXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE;

    $response = $sdk->sdk->getComplianceSummaryByResourceType($request);

    if ($response->getComplianceSummaryByResourceTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConformancePackComplianceDetails

Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConformancePackComplianceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConformancePackComplianceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackEvaluationFilters;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConformancePackComplianceDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConformancePackComplianceDetailsRequest();
    $request->getConformancePackComplianceDetailsRequest = new GetConformancePackComplianceDetailsRequest();
    $request->getConformancePackComplianceDetailsRequest->conformancePackName = 'a';
    $request->getConformancePackComplianceDetailsRequest->filters = new ConformancePackEvaluationFilters();
    $request->getConformancePackComplianceDetailsRequest->filters->complianceType = ConformancePackComplianceTypeEnum::INSUFFICIENT_DATA;
    $request->getConformancePackComplianceDetailsRequest->filters->configRuleNames = [
        'aut',
    ];
    $request->getConformancePackComplianceDetailsRequest->filters->resourceIds = [
        'impedit',
        'aliquam',
        'fugit',
    ];
    $request->getConformancePackComplianceDetailsRequest->filters->resourceType = 'accusamus';
    $request->getConformancePackComplianceDetailsRequest->limit = 79522;
    $request->getConformancePackComplianceDetailsRequest->nextToken = 'non';
    $request->limit = 'et';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = GetConformancePackComplianceDetailsXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS;

    $response = $sdk->sdk->getConformancePackComplianceDetails($request);

    if ($response->getConformancePackComplianceDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConformancePackComplianceSummary

Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConformancePackComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConformancePackComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConformancePackComplianceSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConformancePackComplianceSummaryRequest();
    $request->getConformancePackComplianceSummaryRequest = new GetConformancePackComplianceSummaryRequest();
    $request->getConformancePackComplianceSummaryRequest->conformancePackNames = [
        'nulla',
        'voluptas',
        'libero',
        'quasi',
    ];
    $request->getConformancePackComplianceSummaryRequest->limit = 270328;
    $request->getConformancePackComplianceSummaryRequest->nextToken = 'numquam';
    $request->limit = 'explicabo';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetConformancePackComplianceSummaryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_SUMMARY;

    $response = $sdk->sdk->getConformancePackComplianceSummary($request);

    if ($response->getConformancePackComplianceSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomRulePolicy

Returns the policy definition containing the logic for your Config Custom Policy rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCustomRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomRulePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomRulePolicyRequest();
    $request->getCustomRulePolicyRequest = new GetCustomRulePolicyRequest();
    $request->getCustomRulePolicyRequest->configRuleName = 'rem';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = GetCustomRulePolicyXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_CUSTOM_RULE_POLICY;

    $response = $sdk->sdk->getCustomRulePolicy($request);

    if ($response->getCustomRulePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveredResourceCounts

<p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveredResourceCountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDiscoveredResourceCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveredResourceCountsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveredResourceCountsRequest();
    $request->getDiscoveredResourceCountsRequest = new GetDiscoveredResourceCountsRequest();
    $request->getDiscoveredResourceCountsRequest->limit = 826871;
    $request->getDiscoveredResourceCountsRequest->nextToken = 'eos';
    $request->getDiscoveredResourceCountsRequest->resourceTypes = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = GetDiscoveredResourceCountsXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_DISCOVERED_RESOURCE_COUNTS;
    $request->limit = 'eius';
    $request->nextToken = 'eos';

    $response = $sdk->sdk->getDiscoveredResourceCounts($request);

    if ($response->getDiscoveredResourceCountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigRuleDetailedStatus

Returns detailed status for each member account within an organization for a given organization Config rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigRuleDetailedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOrganizationConfigRuleDetailedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\StatusDetailFilters;
use \OpenAPI\OpenAPI\Models\Shared\MemberAccountRuleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigRuleDetailedStatusRequest();
    $request->getOrganizationConfigRuleDetailedStatusRequest = new GetOrganizationConfigRuleDetailedStatusRequest();
    $request->getOrganizationConfigRuleDetailedStatusRequest->filters = new StatusDetailFilters();
    $request->getOrganizationConfigRuleDetailedStatusRequest->filters->accountId = 'voluptas';
    $request->getOrganizationConfigRuleDetailedStatusRequest->filters->memberAccountRuleStatus = MemberAccountRuleStatusEnum::CREATE_SUCCESSFUL;
    $request->getOrganizationConfigRuleDetailedStatusRequest->limit = 587600;
    $request->getOrganizationConfigRuleDetailedStatusRequest->nextToken = 'consequatur';
    $request->getOrganizationConfigRuleDetailedStatusRequest->organizationConfigRuleName = 'tempora';
    $request->limit = 'debitis';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS;

    $response = $sdk->sdk->getOrganizationConfigRuleDetailedStatus($request);

    if ($response->getOrganizationConfigRuleDetailedStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConformancePackDetailedStatus

Returns detailed status for each member account within an organization for a given organization conformance pack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConformancePackDetailedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOrganizationConformancePackDetailedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationResourceDetailedStatusFilters;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationResourceDetailedStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConformancePackDetailedStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConformancePackDetailedStatusRequest();
    $request->getOrganizationConformancePackDetailedStatusRequest = new GetOrganizationConformancePackDetailedStatusRequest();
    $request->getOrganizationConformancePackDetailedStatusRequest->filters = new OrganizationResourceDetailedStatusFilters();
    $request->getOrganizationConformancePackDetailedStatusRequest->filters->accountId = 'quod';
    $request->getOrganizationConformancePackDetailedStatusRequest->filters->status = OrganizationResourceDetailedStatusEnum::DELETE_FAILED;
    $request->getOrganizationConformancePackDetailedStatusRequest->limit = 76956;
    $request->getOrganizationConformancePackDetailedStatusRequest->nextToken = 'nihil';
    $request->getOrganizationConformancePackDetailedStatusRequest->organizationConformancePackName = 'totam';
    $request->limit = 'accusamus';
    $request->nextToken = 'aliquam';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = GetOrganizationConformancePackDetailedStatusXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS;

    $response = $sdk->sdk->getOrganizationConformancePackDetailedStatus($request);

    if ($response->getOrganizationConformancePackDetailedStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCustomRulePolicy

Returns the policy definition containing the logic for your organization Config Custom Policy rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCustomRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOrganizationCustomRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCustomRulePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCustomRulePolicyRequest();
    $request->getOrganizationCustomRulePolicyRequest = new GetOrganizationCustomRulePolicyRequest();
    $request->getOrganizationCustomRulePolicyRequest->organizationConfigRuleName = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetOrganizationCustomRulePolicyXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_ORGANIZATION_CUSTOM_RULE_POLICY;

    $response = $sdk->sdk->getOrganizationCustomRulePolicy($request);

    if ($response->getOrganizationCustomRulePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceConfigHistory

<p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceConfigHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceConfigHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChronologicalOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceConfigHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceConfigHistoryRequest();
    $request->getResourceConfigHistoryRequest = new GetResourceConfigHistoryRequest();
    $request->getResourceConfigHistoryRequest->chronologicalOrder = ChronologicalOrderEnum::FORWARD;
    $request->getResourceConfigHistoryRequest->earlierTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T08:30:58.411Z');
    $request->getResourceConfigHistoryRequest->laterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-28T22:21:45.403Z');
    $request->getResourceConfigHistoryRequest->limit = 325685;
    $request->getResourceConfigHistoryRequest->nextToken = 'nisi';
    $request->getResourceConfigHistoryRequest->resourceId = 'fugit';
    $request->getResourceConfigHistoryRequest->resourceType = ResourceTypeEnum::AWS_PINPOINT_SEGMENT;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = GetResourceConfigHistoryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_RESOURCE_CONFIG_HISTORY;
    $request->limit = 'esse';
    $request->nextToken = 'eveniet';

    $response = $sdk->sdk->getResourceConfigHistory($request);

    if ($response->getResourceConfigHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceEvaluationSummary

<p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceEvaluationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceEvaluationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceEvaluationSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceEvaluationSummaryRequest();
    $request->getResourceEvaluationSummaryRequest = new GetResourceEvaluationSummaryRequest();
    $request->getResourceEvaluationSummaryRequest->resourceEvaluationId = 'accusamus';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = GetResourceEvaluationSummaryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_RESOURCE_EVALUATION_SUMMARY;

    $response = $sdk->sdk->getResourceEvaluationSummary($request);

    if ($response->getResourceEvaluationSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoredQuery

Returns the details of a specific stored query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStoredQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoredQueryRequest();
    $request->getStoredQueryRequest = new GetStoredQueryRequest();
    $request->getStoredQueryRequest->queryName = 'saepe';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = GetStoredQueryXAmzTargetEnum::STARLING_DOVE_SERVICE_GET_STORED_QUERY;

    $response = $sdk->sdk->getStoredQuery($request);

    if ($response->getStoredQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAggregateDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregateDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAggregateDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFilters;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregateDiscoveredResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAggregateDiscoveredResourcesRequest();
    $request->limit = 'eligendi';
    $request->listAggregateDiscoveredResourcesRequest = new ListAggregateDiscoveredResourcesRequest();
    $request->listAggregateDiscoveredResourcesRequest->configurationAggregatorName = 'sit';
    $request->listAggregateDiscoveredResourcesRequest->filters = new ResourceFilters();
    $request->listAggregateDiscoveredResourcesRequest->filters->accountId = 'culpa';
    $request->listAggregateDiscoveredResourcesRequest->filters->region = 'tempore';
    $request->listAggregateDiscoveredResourcesRequest->filters->resourceId = 'adipisci';
    $request->listAggregateDiscoveredResourcesRequest->filters->resourceName = 'cumque';
    $request->listAggregateDiscoveredResourcesRequest->limit = 160538;
    $request->listAggregateDiscoveredResourcesRequest->nextToken = 'consequatur';
    $request->listAggregateDiscoveredResourcesRequest->resourceType = ResourceTypeEnum::AWS_IO_T_TWIN_MAKER_WORKSPACE;
    $request->nextToken = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListAggregateDiscoveredResourcesXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_AGGREGATE_DISCOVERED_RESOURCES;

    $response = $sdk->sdk->listAggregateDiscoveredResources($request);

    if ($response->listAggregateDiscoveredResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConformancePackComplianceScores

<p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConformancePackComplianceScoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConformancePackComplianceScoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackComplianceScoresFilters;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConformancePackComplianceScoresXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConformancePackComplianceScoresRequest();
    $request->limit = 'quas';
    $request->listConformancePackComplianceScoresRequest = new ListConformancePackComplianceScoresRequest();
    $request->listConformancePackComplianceScoresRequest->filters = new ConformancePackComplianceScoresFilters();
    $request->listConformancePackComplianceScoresRequest->filters->conformancePackNames = [
        'quasi',
        'a',
    ];
    $request->listConformancePackComplianceScoresRequest->limit = 621679;
    $request->listConformancePackComplianceScoresRequest->nextToken = 'sint';
    $request->listConformancePackComplianceScoresRequest->sortBy = SortByEnum::SCORE;
    $request->listConformancePackComplianceScoresRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->nextToken = 'possimus';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = ListConformancePackComplianceScoresXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_CONFORMANCE_PACK_COMPLIANCE_SCORES;

    $response = $sdk->sdk->listConformancePackComplianceScores($request);

    if ($response->listConformancePackComplianceScoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDiscoveredResources

<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest->includeDeletedResources = false;
    $request->listDiscoveredResourcesRequest->limit = 628899;
    $request->listDiscoveredResourcesRequest->nextToken = 'culpa';
    $request->listDiscoveredResourcesRequest->resourceIds = [
        'tenetur',
        'quae',
    ];
    $request->listDiscoveredResourcesRequest->resourceName = 'earum';
    $request->listDiscoveredResourcesRequest->resourceType = ResourceTypeEnum::AWSECR_PUBLIC_REPOSITORY;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = ListDiscoveredResourcesXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_DISCOVERED_RESOURCES;
    $request->limit = 'sapiente';
    $request->nextToken = 'dicta';

    $response = $sdk->sdk->listDiscoveredResources($request);

    if ($response->listDiscoveredResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceEvaluations

Returns a list of proactive resource evaluations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceEvaluationFilters;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceEvaluationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceEvaluationsRequest();
    $request->limit = 'ullam';
    $request->listResourceEvaluationsRequest = new ListResourceEvaluationsRequest();
    $request->listResourceEvaluationsRequest->filters = new ResourceEvaluationFilters();
    $request->listResourceEvaluationsRequest->filters->evaluationContextIdentifier = 'reprehenderit';
    $request->listResourceEvaluationsRequest->filters->evaluationMode = EvaluationModeEnum::DETECTIVE;
    $request->listResourceEvaluationsRequest->filters->timeWindow = new TimeWindow();
    $request->listResourceEvaluationsRequest->filters->timeWindow->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-26T00:57:43.290Z');
    $request->listResourceEvaluationsRequest->filters->timeWindow->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-18T18:43:46.013Z');
    $request->listResourceEvaluationsRequest->limit = 845358;
    $request->listResourceEvaluationsRequest->nextToken = 'ex';
    $request->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = ListResourceEvaluationsXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_RESOURCE_EVALUATIONS;

    $response = $sdk->sdk->listResourceEvaluations($request);

    if ($response->listResourceEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStoredQueries

Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStoredQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStoredQueriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStoredQueriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStoredQueriesRequest();
    $request->listStoredQueriesRequest = new ListStoredQueriesRequest();
    $request->listStoredQueriesRequest->maxResults = 92027;
    $request->listStoredQueriesRequest->nextToken = 'voluptate';
    $request->maxResults = 'ipsa';
    $request->nextToken = 'minima';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = ListStoredQueriesXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_STORED_QUERIES;

    $response = $sdk->sdk->listStoredQueries($request);

    if ($response->listStoredQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for Config resource.

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
    $request->limit = 'aut';
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->limit = 513075;
    $request->listTagsForResourceRequest->nextToken = 'eum';
    $request->listTagsForResourceRequest->resourceArn = 'mollitia';
    $request->nextToken = 'ab';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::STARLING_DOVE_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAggregationAuthorization

<p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAggregationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAggregationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutAggregationAuthorizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAggregationAuthorizationRequest();
    $request->putAggregationAuthorizationRequest = new PutAggregationAuthorizationRequest();
    $request->putAggregationAuthorizationRequest->authorizedAccountId = 'explicabo';
    $request->putAggregationAuthorizationRequest->authorizedAwsRegion = 'voluptas';
    $request->putAggregationAuthorizationRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = PutAggregationAuthorizationXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_AGGREGATION_AUTHORIZATION;

    $response = $sdk->sdk->putAggregationAuthorization($request);

    if ($response->putAggregationAuthorizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigRule

<p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigRule;
use \OpenAPI\OpenAPI\Models\Shared\ConfigRuleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationModeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaximumExecutionFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scope;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\CustomPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\OwnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceDetail;
use \OpenAPI\OpenAPI\Models\Shared\EventSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigRuleRequest();
    $request->putConfigRuleRequest = new PutConfigRuleRequest();
    $request->putConfigRuleRequest->configRule = new ConfigRule();
    $request->putConfigRuleRequest->configRule->configRuleArn = 'asperiores';
    $request->putConfigRuleRequest->configRule->configRuleId = 'aperiam';
    $request->putConfigRuleRequest->configRule->configRuleName = 'ea';
    $request->putConfigRuleRequest->configRule->configRuleState = ConfigRuleStateEnum::DELETING;
    $request->putConfigRuleRequest->configRule->createdBy = 'consequuntur';
    $request->putConfigRuleRequest->configRule->description = 'repellendus';
    $request->putConfigRuleRequest->configRule->evaluationModes = [
        new EvaluationModeConfiguration(),
        new EvaluationModeConfiguration(),
        new EvaluationModeConfiguration(),
    ];
    $request->putConfigRuleRequest->configRule->inputParameters = 'maxime';
    $request->putConfigRuleRequest->configRule->maximumExecutionFrequency = MaximumExecutionFrequencyEnum::SIX_HOURS;
    $request->putConfigRuleRequest->configRule->scope = new Scope();
    $request->putConfigRuleRequest->configRule->scope->complianceResourceId = 'officia';
    $request->putConfigRuleRequest->configRule->scope->complianceResourceTypes = [
        'nemo',
        'quae',
        'quaerat',
        'porro',
    ];
    $request->putConfigRuleRequest->configRule->scope->tagKey = 'quod';
    $request->putConfigRuleRequest->configRule->scope->tagValue = 'labore';
    $request->putConfigRuleRequest->configRule->source = new Source();
    $request->putConfigRuleRequest->configRule->source->customPolicyDetails = new CustomPolicyDetails();
    $request->putConfigRuleRequest->configRule->source->customPolicyDetails->enableDebugLogDelivery = false;
    $request->putConfigRuleRequest->configRule->source->customPolicyDetails->policyRuntime = 'ab';
    $request->putConfigRuleRequest->configRule->source->customPolicyDetails->policyText = 'adipisci';
    $request->putConfigRuleRequest->configRule->source->owner = OwnerEnum::CUSTOM_POLICY;
    $request->putConfigRuleRequest->configRule->source->sourceDetails = [
        new SourceDetail(),
        new SourceDetail(),
        new SourceDetail(),
    ];
    $request->putConfigRuleRequest->configRule->source->sourceIdentifier = 'suscipit';
    $request->putConfigRuleRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = PutConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_CONFIG_RULE;

    $response = $sdk->sdk->putConfigRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationAggregator

<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutConfigurationAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountAggregationSource;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationAggregationSource;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationAggregatorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationAggregatorRequest();
    $request->putConfigurationAggregatorRequest = new PutConfigurationAggregatorRequest();
    $request->putConfigurationAggregatorRequest->accountAggregationSources = [
        new AccountAggregationSource(),
        new AccountAggregationSource(),
        new AccountAggregationSource(),
    ];
    $request->putConfigurationAggregatorRequest->configurationAggregatorName = 'vel';
    $request->putConfigurationAggregatorRequest->organizationAggregationSource = new OrganizationAggregationSource();
    $request->putConfigurationAggregatorRequest->organizationAggregationSource->allAwsRegions = false;
    $request->putConfigurationAggregatorRequest->organizationAggregationSource->awsRegions = [
        'possimus',
        'facilis',
    ];
    $request->putConfigurationAggregatorRequest->organizationAggregationSource->roleArn = 'cum';
    $request->putConfigurationAggregatorRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = PutConfigurationAggregatorXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_CONFIGURATION_AGGREGATOR;

    $response = $sdk->sdk->putConfigurationAggregator($request);

    if ($response->putConfigurationAggregatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConfigurationRecorder

<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationRecorder;
use \OpenAPI\OpenAPI\Models\Shared\RecordingGroup;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutConfigurationRecorderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConfigurationRecorderRequest();
    $request->putConfigurationRecorderRequest = new PutConfigurationRecorderRequest();
    $request->putConfigurationRecorderRequest->configurationRecorder = new ConfigurationRecorder();
    $request->putConfigurationRecorderRequest->configurationRecorder->name = 'Karla Feest';
    $request->putConfigurationRecorderRequest->configurationRecorder->recordingGroup = new RecordingGroup();
    $request->putConfigurationRecorderRequest->configurationRecorder->recordingGroup->allSupported = false;
    $request->putConfigurationRecorderRequest->configurationRecorder->recordingGroup->includeGlobalResourceTypes = false;
    $request->putConfigurationRecorderRequest->configurationRecorder->recordingGroup->resourceTypes = [
        ResourceTypeEnum::AWS_IO_T_SITE_WISE_DASHBOARD,
        ResourceTypeEnum::AWS_ELASTIC_BEANSTALK_ENVIRONMENT,
        ResourceTypeEnum::AWS_NETWORK_MANAGER_TRANSIT_GATEWAY_REGISTRATION,
        ResourceTypeEnum::AWSECS_TASK_DEFINITION,
    ];
    $request->putConfigurationRecorderRequest->configurationRecorder->roleARN = 'reiciendis';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = PutConfigurationRecorderXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_CONFIGURATION_RECORDER;

    $response = $sdk->sdk->putConfigurationRecorder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConformancePack

<p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackInputParameter;
use \OpenAPI\OpenAPI\Models\Shared\TemplateSSMDocumentDetails;
use \OpenAPI\OpenAPI\Models\Operations\PutConformancePackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConformancePackRequest();
    $request->putConformancePackRequest = new PutConformancePackRequest();
    $request->putConformancePackRequest->conformancePackInputParameters = [
        new ConformancePackInputParameter(),
    ];
    $request->putConformancePackRequest->conformancePackName = 'amet';
    $request->putConformancePackRequest->deliveryS3Bucket = 'beatae';
    $request->putConformancePackRequest->deliveryS3KeyPrefix = 'dignissimos';
    $request->putConformancePackRequest->templateBody = 'a';
    $request->putConformancePackRequest->templateS3Uri = 'debitis';
    $request->putConformancePackRequest->templateSSMDocumentDetails = new TemplateSSMDocumentDetails();
    $request->putConformancePackRequest->templateSSMDocumentDetails->documentName = 'consectetur';
    $request->putConformancePackRequest->templateSSMDocumentDetails->documentVersion = 'corporis';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = PutConformancePackXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_CONFORMANCE_PACK;

    $response = $sdk->sdk->putConformancePack($request);

    if ($response->putConformancePackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDeliveryChannel

<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDeliveryChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutDeliveryChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryChannel;
use \OpenAPI\OpenAPI\Models\Shared\ConfigSnapshotDeliveryProperties;
use \OpenAPI\OpenAPI\Models\Shared\MaximumExecutionFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutDeliveryChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDeliveryChannelRequest();
    $request->putDeliveryChannelRequest = new PutDeliveryChannelRequest();
    $request->putDeliveryChannelRequest->deliveryChannel = new DeliveryChannel();
    $request->putDeliveryChannelRequest->deliveryChannel->configSnapshotDeliveryProperties = new ConfigSnapshotDeliveryProperties();
    $request->putDeliveryChannelRequest->deliveryChannel->configSnapshotDeliveryProperties->deliveryFrequency = MaximumExecutionFrequencyEnum::TWELVE_HOURS;
    $request->putDeliveryChannelRequest->deliveryChannel->name = 'Kelly Hoeger';
    $request->putDeliveryChannelRequest->deliveryChannel->s3BucketName = 'minima';
    $request->putDeliveryChannelRequest->deliveryChannel->s3KeyPrefix = 'nobis';
    $request->putDeliveryChannelRequest->deliveryChannel->s3KmsKeyArn = 'dolorum';
    $request->putDeliveryChannelRequest->deliveryChannel->snsTopicARN = 'adipisci';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = PutDeliveryChannelXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_DELIVERY_CHANNEL;

    $response = $sdk->sdk->putDeliveryChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEvaluations

Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Evaluation;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutEvaluationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEvaluationsRequest();
    $request->putEvaluationsRequest = new PutEvaluationsRequest();
    $request->putEvaluationsRequest->evaluations = [
        new Evaluation(),
        new Evaluation(),
        new Evaluation(),
        new Evaluation(),
    ];
    $request->putEvaluationsRequest->resultToken = 'ullam';
    $request->putEvaluationsRequest->testMode = false;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = PutEvaluationsXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_EVALUATIONS;

    $response = $sdk->sdk->putEvaluations($request);

    if ($response->putEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putExternalEvaluation

Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutExternalEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutExternalEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExternalEvaluation;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutExternalEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutExternalEvaluationRequest();
    $request->putExternalEvaluationRequest = new PutExternalEvaluationRequest();
    $request->putExternalEvaluationRequest->configRuleName = 'corrupti';
    $request->putExternalEvaluationRequest->externalEvaluation = new ExternalEvaluation();
    $request->putExternalEvaluationRequest->externalEvaluation->annotation = 'pariatur';
    $request->putExternalEvaluationRequest->externalEvaluation->complianceResourceId = 'totam';
    $request->putExternalEvaluationRequest->externalEvaluation->complianceResourceType = 'hic';
    $request->putExternalEvaluationRequest->externalEvaluation->complianceType = ComplianceTypeEnum::NON_COMPLIANT;
    $request->putExternalEvaluationRequest->externalEvaluation->orderingTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T00:59:14.180Z');
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = PutExternalEvaluationXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_EXTERNAL_EVALUATION;

    $response = $sdk->sdk->putExternalEvaluation($request);

    if ($response->putExternalEvaluationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganizationConfigRule

<p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganizationConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutOrganizationConfigRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationCustomPolicyRuleMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MaximumExecutionFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationConfigRuleTriggerTypeNoSNEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationCustomRuleMetadata;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationConfigRuleTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationManagedRuleMetadata;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganizationConfigRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganizationConfigRuleRequest();
    $request->putOrganizationConfigRuleRequest = new PutOrganizationConfigRuleRequest();
    $request->putOrganizationConfigRuleRequest->excludedAccounts = [
        'ab',
        'iste',
        'dolore',
    ];
    $request->putOrganizationConfigRuleRequest->organizationConfigRuleName = 'laborum';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata = new OrganizationCustomPolicyRuleMetadata();
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->debugLogDeliveryAccounts = [
        'in',
    ];
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->description = 'commodi';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->inputParameters = 'quidem';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->maximumExecutionFrequency = MaximumExecutionFrequencyEnum::ONE_HOUR;
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->organizationConfigRuleTriggerTypes = [
        OrganizationConfigRuleTriggerTypeNoSNEnum::OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION,
        OrganizationConfigRuleTriggerTypeNoSNEnum::CONFIGURATION_ITEM_CHANGE_NOTIFICATION,
    ];
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->policyRuntime = 'suscipit';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->policyText = 'sapiente';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->resourceIdScope = 'debitis';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->resourceTypesScope = [
        'reiciendis',
    ];
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->tagKeyScope = 'perferendis';
    $request->putOrganizationConfigRuleRequest->organizationCustomPolicyRuleMetadata->tagValueScope = 'corrupti';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata = new OrganizationCustomRuleMetadata();
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->description = 'maiores';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->inputParameters = 'incidunt';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->lambdaFunctionArn = 'sed';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->maximumExecutionFrequency = MaximumExecutionFrequencyEnum::SIX_HOURS;
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->organizationConfigRuleTriggerTypes = [
        OrganizationConfigRuleTriggerTypeEnum::SCHEDULED_NOTIFICATION,
        OrganizationConfigRuleTriggerTypeEnum::CONFIGURATION_ITEM_CHANGE_NOTIFICATION,
    ];
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->resourceIdScope = 'ea';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->resourceTypesScope = [
        'quos',
        'voluptatibus',
        'tempora',
    ];
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->tagKeyScope = 'tempora';
    $request->putOrganizationConfigRuleRequest->organizationCustomRuleMetadata->tagValueScope = 'voluptate';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata = new OrganizationManagedRuleMetadata();
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->description = 'reiciendis';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->inputParameters = 'ex';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->maximumExecutionFrequency = MaximumExecutionFrequencyEnum::ONE_HOUR;
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->resourceIdScope = 'non';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->resourceTypesScope = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->ruleIdentifier = 'ipsam';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->tagKeyScope = 'debitis';
    $request->putOrganizationConfigRuleRequest->organizationManagedRuleMetadata->tagValueScope = 'rem';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = PutOrganizationConfigRuleXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFIG_RULE;

    $response = $sdk->sdk->putOrganizationConfigRule($request);

    if ($response->putOrganizationConfigRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganizationConformancePack

<p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganizationConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutOrganizationConformancePackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConformancePackInputParameter;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganizationConformancePackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganizationConformancePackRequest();
    $request->putOrganizationConformancePackRequest = new PutOrganizationConformancePackRequest();
    $request->putOrganizationConformancePackRequest->conformancePackInputParameters = [
        new ConformancePackInputParameter(),
        new ConformancePackInputParameter(),
        new ConformancePackInputParameter(),
        new ConformancePackInputParameter(),
    ];
    $request->putOrganizationConformancePackRequest->deliveryS3Bucket = 'magni';
    $request->putOrganizationConformancePackRequest->deliveryS3KeyPrefix = 'aperiam';
    $request->putOrganizationConformancePackRequest->excludedAccounts = [
        'numquam',
        'veniam',
        'in',
        'officiis',
    ];
    $request->putOrganizationConformancePackRequest->organizationConformancePackName = 'beatae';
    $request->putOrganizationConformancePackRequest->templateBody = 'laudantium';
    $request->putOrganizationConformancePackRequest->templateS3Uri = 'exercitationem';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = PutOrganizationConformancePackXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFORMANCE_PACK;

    $response = $sdk->sdk->putOrganizationConformancePack($request);

    if ($response->putOrganizationConformancePackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRemediationConfigurations

<p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRemediationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRemediationConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemediationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionControls;
use \OpenAPI\OpenAPI\Models\Shared\SsmControls;
use \OpenAPI\OpenAPI\Models\Shared\RemediationParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\ResourceValue;
use \OpenAPI\OpenAPI\Models\Shared\ResourceValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StaticValue;
use \OpenAPI\OpenAPI\Models\Shared\RemediationTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutRemediationConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRemediationConfigurationsRequest();
    $request->putRemediationConfigurationsRequest = new PutRemediationConfigurationsRequest();
    $request->putRemediationConfigurationsRequest->remediationConfigurations = [
        new RemediationConfiguration(),
        new RemediationConfiguration(),
        new RemediationConfiguration(),
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->xAmzTarget = PutRemediationConfigurationsXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_REMEDIATION_CONFIGURATIONS;

    $response = $sdk->sdk->putRemediationConfigurations($request);

    if ($response->putRemediationConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRemediationExceptions

<p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRemediationExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemediationExceptionResourceKey;
use \OpenAPI\OpenAPI\Models\Operations\PutRemediationExceptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRemediationExceptionsRequest();
    $request->putRemediationExceptionsRequest = new PutRemediationExceptionsRequest();
    $request->putRemediationExceptionsRequest->configRuleName = 'accusamus';
    $request->putRemediationExceptionsRequest->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T13:22:48.429Z');
    $request->putRemediationExceptionsRequest->message = 'fugit';
    $request->putRemediationExceptionsRequest->resourceKeys = [
        new RemediationExceptionResourceKey(),
        new RemediationExceptionResourceKey(),
    ];
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = PutRemediationExceptionsXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_REMEDIATION_EXCEPTIONS;

    $response = $sdk->sdk->putRemediationExceptions($request);

    if ($response->putRemediationExceptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourceConfig

<p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourceConfigRequest();
    $request->putResourceConfigRequest = new PutResourceConfigRequest();
    $request->putResourceConfigRequest->configuration = 'ipsam';
    $request->putResourceConfigRequest->resourceId = 'sit';
    $request->putResourceConfigRequest->resourceName = 'voluptatum';
    $request->putResourceConfigRequest->resourceType = 'quas';
    $request->putResourceConfigRequest->schemaVersionId = 'repudiandae';
    $request->putResourceConfigRequest->tags = [
        'et' => 'blanditiis',
        'ex' => 'sed',
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = PutResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_RESOURCE_CONFIG;

    $response = $sdk->sdk->putResourceConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRetentionConfiguration

<p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRetentionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRetentionConfigurationRequest();
    $request->putRetentionConfigurationRequest = new PutRetentionConfigurationRequest();
    $request->putRetentionConfigurationRequest->retentionPeriodInDays = 968865;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = PutRetentionConfigurationXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_RETENTION_CONFIGURATION;

    $response = $sdk->sdk->putRetentionConfiguration($request);

    if ($response->putRetentionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putStoredQuery

<p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutStoredQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoredQuery;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutStoredQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutStoredQueryRequest();
    $request->putStoredQueryRequest = new PutStoredQueryRequest();
    $request->putStoredQueryRequest->storedQuery = new StoredQuery();
    $request->putStoredQueryRequest->storedQuery->description = 'atque';
    $request->putStoredQueryRequest->storedQuery->expression = 'laborum';
    $request->putStoredQueryRequest->storedQuery->queryArn = 'nam';
    $request->putStoredQueryRequest->storedQuery->queryId = 'tenetur';
    $request->putStoredQueryRequest->storedQuery->queryName = 'laboriosam';
    $request->putStoredQueryRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = PutStoredQueryXAmzTargetEnum::STARLING_DOVE_SERVICE_PUT_STORED_QUERY;

    $response = $sdk->sdk->putStoredQuery($request);

    if ($response->putStoredQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## selectAggregateResourceConfig

<p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SelectAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\SelectAggregateResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SelectAggregateResourceConfigRequest();
    $request->limit = 'delectus';
    $request->nextToken = 'voluptates';
    $request->selectAggregateResourceConfigRequest = new SelectAggregateResourceConfigRequest();
    $request->selectAggregateResourceConfigRequest->configurationAggregatorName = 'perferendis';
    $request->selectAggregateResourceConfigRequest->expression = 'est';
    $request->selectAggregateResourceConfigRequest->limit = 696483;
    $request->selectAggregateResourceConfigRequest->maxResults = 440666;
    $request->selectAggregateResourceConfigRequest->nextToken = 'facere';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = SelectAggregateResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_SELECT_AGGREGATE_RESOURCE_CONFIG;

    $response = $sdk->sdk->selectAggregateResourceConfig($request);

    if ($response->selectAggregateResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## selectResourceConfig

<p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SelectResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\SelectResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SelectResourceConfigRequest();
    $request->limit = 'quasi';
    $request->nextToken = 'atque';
    $request->selectResourceConfigRequest = new SelectResourceConfigRequest();
    $request->selectResourceConfigRequest->expression = 'reprehenderit';
    $request->selectResourceConfigRequest->limit = 991142;
    $request->selectResourceConfigRequest->nextToken = 'totam';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = SelectResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_SELECT_RESOURCE_CONFIG;

    $response = $sdk->sdk->selectResourceConfig($request);

    if ($response->selectResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConfigRulesEvaluation

<p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigRulesEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartConfigRulesEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigRulesEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConfigRulesEvaluationRequest();
    $request->startConfigRulesEvaluationRequest = new StartConfigRulesEvaluationRequest();
    $request->startConfigRulesEvaluationRequest->configRuleNames = [
        'atque',
        'error',
    ];
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = StartConfigRulesEvaluationXAmzTargetEnum::STARLING_DOVE_SERVICE_START_CONFIG_RULES_EVALUATION;

    $response = $sdk->sdk->startConfigRulesEvaluation($request);

    if ($response->startConfigRulesEvaluationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConfigurationRecorder

<p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigurationRecorderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConfigurationRecorderRequest();
    $request->startConfigurationRecorderRequest = new StartConfigurationRecorderRequest();
    $request->startConfigurationRecorderRequest->configurationRecorderName = 'maiores';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = StartConfigurationRecorderXAmzTargetEnum::STARLING_DOVE_SERVICE_START_CONFIGURATION_RECORDER;

    $response = $sdk->sdk->startConfigurationRecorder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRemediationExecution

<p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRemediationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRemediationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceKey;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartRemediationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRemediationExecutionRequest();
    $request->startRemediationExecutionRequest = new StartRemediationExecutionRequest();
    $request->startRemediationExecutionRequest->configRuleName = 'atque';
    $request->startRemediationExecutionRequest->resourceKeys = [
        new ResourceKey(),
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = StartRemediationExecutionXAmzTargetEnum::STARLING_DOVE_SERVICE_START_REMEDIATION_EXECUTION;

    $response = $sdk->sdk->startRemediationExecution($request);

    if ($response->startRemediationExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startResourceEvaluation

<p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartResourceEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartResourceEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationContext;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDetails;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfigurationSchemaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartResourceEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartResourceEvaluationRequest();
    $request->startResourceEvaluationRequest = new StartResourceEvaluationRequest();
    $request->startResourceEvaluationRequest->clientToken = 'dicta';
    $request->startResourceEvaluationRequest->evaluationContext = new EvaluationContext();
    $request->startResourceEvaluationRequest->evaluationContext->evaluationContextIdentifier = 'accusantium';
    $request->startResourceEvaluationRequest->evaluationMode = EvaluationModeEnum::DETECTIVE;
    $request->startResourceEvaluationRequest->evaluationTimeout = 174772;
    $request->startResourceEvaluationRequest->resourceDetails = new ResourceDetails();
    $request->startResourceEvaluationRequest->resourceDetails->resourceConfiguration = 'enim';
    $request->startResourceEvaluationRequest->resourceDetails->resourceConfigurationSchemaType = ResourceConfigurationSchemaTypeEnum::CFN_RESOURCE_SCHEMA;
    $request->startResourceEvaluationRequest->resourceDetails->resourceId = 'laboriosam';
    $request->startResourceEvaluationRequest->resourceDetails->resourceType = 'velit';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = StartResourceEvaluationXAmzTargetEnum::STARLING_DOVE_SERVICE_START_RESOURCE_EVALUATION;

    $response = $sdk->sdk->startResourceEvaluation($request);

    if ($response->startResourceEvaluationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopConfigurationRecorder

Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopConfigurationRecorderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopConfigurationRecorderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopConfigurationRecorderRequest();
    $request->stopConfigurationRecorderRequest = new StopConfigurationRecorderRequest();
    $request->stopConfigurationRecorderRequest->configurationRecorderName = 'perspiciatis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = StopConfigurationRecorderXAmzTargetEnum::STARLING_DOVE_SERVICE_STOP_CONFIGURATION_RECORDER;

    $response = $sdk->sdk->stopConfigurationRecorder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.

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
    $request->tagResourceRequest->resourceArn = 'quis';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'illo';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::STARLING_DOVE_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
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
    $request->untagResourceRequest->resourceArn = 'doloremque';
    $request->untagResourceRequest->tagKeys = [
        'ipsa',
        'totam',
    ];
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::STARLING_DOVE_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
