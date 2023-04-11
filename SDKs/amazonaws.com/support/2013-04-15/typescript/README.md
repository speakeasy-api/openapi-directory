# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/support/2013-04-15/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/support/2013-04-15/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AddAttachmentsToSetRequest,
  AddAttachmentsToSetResponse,
  AddAttachmentsToSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddAttachmentsToSetRequest = {
  addAttachmentsToSetRequest: {
    attachmentSetId: "corrupti",
    attachments: [
      {
        data: "distinctio",
        fileName: "quibusdam",
      },
      {
        data: "unde",
        fileName: "nulla",
      },
      {
        data: "corrupti",
        fileName: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: AddAttachmentsToSetXAmzTargetEnum.AWSSupport20130415AddAttachmentsToSet,
};

sdk.addAttachmentsToSet(req).then((res: AddAttachmentsToSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `addAttachmentsToSet` - <p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The <code>expiryTime</code> returned in the response is when the set expires. </p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `addCommunicationToCase` - <p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code> parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the <code>ccEmailAddresses</code> parameter. The <code>communicationBody</code> value contains the text of the communication.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `createCase` - <p>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> <p>The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <code>CreateCase</code> request returns an Amazon Web Services Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href="https://console.aws.amazon.com/support">Amazon Web Services Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeAttachment` - <p>Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeCases` - <p>Returns a list of cases that you specify by passing one or more case IDs. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by date. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> parameters to specify how much information to return.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeCommunications` - <p>Returns communications and attachments for one or more support cases. Use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a specific case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the results. Set <code>maxResults</code> to the number of cases that you want to display on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeServices` - <p>Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your <a>CreateCase</a> requests. Each Amazon Web Services service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that appear in the <b>Service</b> and <b>Category</b> lists on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields don't necessarily match the service codes and categories returned by the <code>DescribeServices</code> operation. Always use the service codes and categories that the <code>DescribeServices</code> operation returns, so that you have the most recent set of service and category codes.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeSeverityLevels` - <p>Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type that you include for a <a>CreateCase</a> request.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
* `describeTrustedAdvisorCheckRefreshStatuses` - <p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically, and you can't return their refresh statuses by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you call this operation for these checks, you might see an <code>InvalidParameterValue</code> error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
* `describeTrustedAdvisorCheckResult` - <p>Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status</b> - The alert status of the check can be <code>ok</code> (green), <code>warning</code> (yellow), <code>error</code> (red), or <code>not_available</code>.</p> </li> <li> <p> <b>timestamp</b> - The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId</b> - The unique identifier for the check.</p> </li> </ul> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
* `describeTrustedAdvisorCheckSummaries` - <p>Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
* `describeTrustedAdvisorChecks` - <p>Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code.</p> <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the Amazon Web Services Region to us-east-1.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> <li> <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
* `refreshTrustedAdvisorCheck` - <p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically. If you call the <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see the <code>InvalidParameterValue</code> error.</p> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
* `resolveCase` - <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the initial and final state of the case.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

